export class ResultModel
{
    usn : string;
    username :  string;
    subjectId : number;
    score : number;
    subjectName : string;

    constructor(){
        this.usn = '';
        this.username = '';
        this.subjectId = 0;
        this.score = 0;
        this.subjectName = '';

    }
}