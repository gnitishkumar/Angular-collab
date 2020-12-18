import { CommentNode } from '../components/comment-tree/comment-tree.component';

export class post{
    name:string;
    subtitle:string;
    time:string;
    categories:Array<string>=[];
    question:string;
    likes:Number;
    comment:Number;
    comments:CommentNode[]=[];
}