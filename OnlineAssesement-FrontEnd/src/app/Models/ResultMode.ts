export class ResultModel
{
    USN : string;
    username : string;
    subjectId : number;
    score : number;
    subjectName : string;

    constructor()
    {
        this.USN = "";
        this.username = "";
        this.subjectId = 0;
        this.score = 0;
        this.subjectName = "";
    }
}