export class UserModel
{
    usn : string;
    username : string;
    password : string;
    fullName : string;
    email : string;
    phoneNumber : string;

    constructor()
    {
        this.usn = "";
        this.username = "";
        this.password = "";
        this.fullName = "";
        this.email = "";
        this.phoneNumber = "";
    }
}