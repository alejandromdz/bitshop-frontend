/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface Publication{
  id:number
  owner:string
  photos:Array<{id:number,publication:number,url:string}>
  product:{
      id:number,
      name:string
  }
  description:string
}