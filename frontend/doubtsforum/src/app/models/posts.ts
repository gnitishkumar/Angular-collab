import { CommentNode } from '../components/comment-tree/comment-tree.component';

export class discussion{
    public name:string;
    subtitle:string;
    time:Date;
    categories:Array<string>=[];
    question:string;
    likes:number;
    comment:number;
    comments:CommentNode[]=[];
    constructor()
    {
       
        this.likes=0;
        this.comment=0;
        this.time=new Date();
    }
}