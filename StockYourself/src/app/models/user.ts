import { RouterLink } from "@angular/router"
import { UserRole } from "./user-role";
import { Portfolio } from "./portfolio";

export class User {
    constructor(
        public id:number,
        public username:string,
        public password:string,
        public email:string,
        public phoneNumber:number,
        public role:UserRole,
        public portfolio:Portfolio
    ){ }
}
