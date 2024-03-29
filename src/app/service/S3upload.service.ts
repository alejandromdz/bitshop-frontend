import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { UploadManager, Policy } from '../shared/models';
import * as _ from 'underscore';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class S3UploadService {

    public managedUploads = [];
    public XHRRequestState = 'READY';

    private _s3dataendpoint: string = 'https://hb5xoj5n7k.execute-api.us-west-1.amazonaws.com/v1/'; 
    private _tag = 'S3Upload';
    private _policy: Policy;
    private _endpoint = '';

    constructor(private http: Http) {

        if (!this._policy)
            this._getS3Credentials();

    }

    // CRUD
    public add(file): Observable<String> {
        return Observable.create((observer)=> {
            var files = _.toArray(file);
            files.map((file: any) => {

                let path = this._endpoint + ((typeof this._policy.folder !== 'undefined') ? (this._policy.folder + '/') : '') + file.name;
                let managedUpload = new UploadManager(file, this._policy.folder, path, this._policy);
                managedUpload.xhr = this._xhrCreate(managedUpload,observer);
                this.managedUploads.push(managedUpload);

            });
        });

    }

    public delete(index) {

        let managedUpload = this._findWithIndex(index);
        if (managedUpload.status === 'PENDING')
            this.abort();

    }

    public reset() {

        this.abort();
        while (this.managedUploads.length) {
            this.managedUploads.shift();
        }

    }

    public abort() {

        let xhrAborted = false;
        let managedUpload = this._findMemberWithStatus('PENDING');
        if (managedUpload) {
            managedUpload.xhr.abort();
            this._changeUploadStatus(managedUpload, 'ABORTED');
            xhrAborted = true;
        }

        return xhrAborted;

    }

    // Upload
    public upload() {

        let files = this._findMemberWithStatus(['READY', 'ABORTED', 'ERROR']);
        if (files.length === 0)
            throw new Error('No files to upload in ' + this._tag);

        return this._upload(files[0]);

    }

    // XHR Methods
    private _xhrCreate(managedUpload,observer) {

        let xhr = new XMLHttpRequest();

        xhr.upload.addEventListener('loadStart', ev => {

        });

        xhr.upload.addEventListener('progress', ev => {
            managedUpload.progress = ev.loaded;
            managedUpload.total = ev.total;
        });

        xhr.upload.addEventListener('load', ev => {
        });

        xhr.upload.addEventListener('loadend', ev => {

        });

        xhr.upload.addEventListener('error', ev => {
            this._xhrOnIncomplete();
        });

        xhr.upload.addEventListener('abort', ev => {
            this._xhrOnIncomplete();
        });

        xhr.upload.addEventListener('timeout', ev => {
            observer.error(xhr.response);
        });

        xhr.addEventListener('readystatechange', ev => {
            if (xhr.readyState === 4) {
                if(xhr.status>=200&&xhr.status<300){
                let location: string = xhr.getResponseHeader('Location');
                observer.next(location)
                observer.complete();
                this._xhrOnComplete(managedUpload);
                }
                else{
                    observer.error(xhr.response);
                }
            }
        });

        return xhr;

    }

    private _xhrOnComplete(managedUpload) {

        this._changeUploadStatus(managedUpload, 'COMPLETE');
        if (this._findMemberWithStatus(['READY', 'ABORTED', 'ERROR']))
            this.upload();

    }

    private _xhrOnIncomplete() {

    }

    // Utils
    private _findWithIndex(index) {

        return this.managedUploads[index];

    }

    private _findMemberWithStatus(status) {

        let statuses = typeof status === 'string' ? [status] : status;
        let managedUpload: any = _.filter(this.managedUploads, memberFile => {

            let statusMatch = _.filter(statuses, status => {
                return memberFile.status === status;
            });

            if (statusMatch.length !== 0)
                return true;
            return false;
        });

        if (managedUpload.length === 0)
            return null;
        return managedUpload;

    }

    private _upload(managedUpload) {

        if (!managedUpload.xhr || !managedUpload.formData)
            throw new Error('ManagedUpload has not been prepared for XHR in ' + this._tag);

        managedUpload.xhr.open('POST', this._endpoint, true);
        managedUpload.xhr.send(managedUpload.formData);
        return this._changeUploadStatus(managedUpload, 'PENDING');

    }

    // Stateful changes
    private _changeUploadStatus(managedUpload, status) {

        return managedUpload.status = status;

    }

    // Initial Get.
    private _getS3Credentials() {
        return this.http.post(this._s3dataendpoint, {})
            .map(response => response.json())
            .subscribe(
            response => {
                if (!response.xAmzBucket)
                    throw new Error('Bucket wasn\'t returned from API call. You must return an S3 bucket in' + this._tag);
                this._policy = new Policy(response);
                this._endpoint = 'https://' + response.xAmzBucket + '.s3.amazonaws.com/';
            },
            errorResponse => { throw new Error('Unable to grab credentials in ' + this._tag); }
            );

    }

}