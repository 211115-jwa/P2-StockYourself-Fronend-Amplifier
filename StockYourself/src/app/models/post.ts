import {User} from "./user";



export class Post { 
    constructor (
        public postId:number,
        public postContent: string,
        public creationDate: string, //Option of being a string or date?
        public creationTime: string,
        public creator: User
    ) {}
}
