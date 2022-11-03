export class Empleado {
    constructor(public id:number,
        public nombre:string,
        public apellido:string,
        public departamento,
        public sexo){
        
    }
    //esto es un metodo
    nombreCompleto(){
        return this.apellido + ", " + this.nombre;
    }
    foto(){
        return `https://randomuser.me/api/portraits/${this.sexo=="M"?"wo":""}men/${this.id}.jpg`;
    }
}
