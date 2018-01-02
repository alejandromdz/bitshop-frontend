export interface Publication{
    title:string
    price?:number
    photos:Array<{id?:number,publication?:number,url:string}>
    product:{
        id?:number,
        name:string
    }
    description:string

}