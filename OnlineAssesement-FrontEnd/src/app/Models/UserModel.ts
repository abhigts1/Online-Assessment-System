export class UserModel
{
    USN : string;
    username : string;
    password : string;
    fullName : string;
    email : string;
    phoneNumber : string;

    constructor()
    {
        this.USN = "";
        this.username = "";
        this.password = "";
        this.fullName = "";
        this.email = "";
        this.phoneNumber = "";
    }
}