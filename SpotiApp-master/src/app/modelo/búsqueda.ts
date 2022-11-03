export class Búsqueda {
constructor(
    public type:string,
    public q:string,
    public market:string,
    public limit:number,
    public offset:number,
    public include_external:string
){}

}
