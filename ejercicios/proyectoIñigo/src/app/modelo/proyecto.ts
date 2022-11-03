import { Empleado } from './empleado';

export class Proyecto {
    public empleados=[];
    constructor(public id:number, public nombre:string,
        public responsable:Empleado, empleados?:Empleado[]){
            if (empleados){
                this.empleados = empleados;
            }
            
        }
    
}
