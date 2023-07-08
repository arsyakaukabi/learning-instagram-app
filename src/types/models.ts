export interface Ipost{
    id:string;
    createdAt:string;
    image?:string;
    images?:string[];
    video?:string;
    description:string;
    user:IUser;
    nofComments:string;
    nofLikes:string;
    comments:IComment[];
}

export interface IUser{
    id:string;
    username:string;
    image?:string;
    name:string;
    bio?:string;
    posts?:Ipost[];
    webstie?:string;
}

export interface IComment{
    id:string;
    comment:string;
    user:IUser;
}