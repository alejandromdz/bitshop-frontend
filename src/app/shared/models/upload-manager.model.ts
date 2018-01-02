import { Policy } from "app/shared/models";
export type IXhrRequestState = 'PENDING' | 'READY' | 'COMPLETE' | 'ABORTED' | 'ERROR';

export class UploadManager {

    status: IXhrRequestState;
    file: File;
    formData: FormData;
    xhr: XMLHttpRequest;
    path: string;
    progress: number;
    total: number;
    constructor(file, folder, path, policy: Policy) {

        this.file = file;
        this.formData = this._createFormData(file, folder, path, policy);
        this.status = 'READY';
        this.path = path;
        this.progress = 0;
        this.total = 0;

    }

    private _createFormData(file, folder, path, policy) {

        let formData = new FormData;
        if (!policy)
            throw new Error('No valid policy in Managed upload creator');

        formData.append('acl', policy.xAmzAcl);
        formData.append('Content-Type', file.type);
        formData.append('X-Amz-Date', policy.xAmzDate);
        formData.append('x-amz-server-side-encryption', policy.xAmzServerSideEncryption);
        formData.append('x-amz-meta-uuid', policy.xAmzMetaUuid);
        formData.append('X-Amz-Algorithm', policy.xAmzAlgorithm);
        formData.append('X-Amz-Credential', policy.xAmzCredential);
        formData.append('X-Amz-Signature', policy.s3Signature);
        formData.append('Policy', policy.base64Policy);
        formData.append('key', folder + '/' + file.name);
        // File field must come last! 
        formData.append('file', file);
        return formData;

    }

}