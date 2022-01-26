// import { RouterLink } from "@angular/router"
import { Userrole } from "./userrole";
import { Portfolio } from "./portfolio";

export class User {
    constructor(
        public id:number,
        public firstname:string,
        public lastname:string,
        public username:string,
        public password:string,
        public email:string,
        public phoneNumber:string,
        public role:Userrole,
        public portfolio:Portfolio
    ){ }
}