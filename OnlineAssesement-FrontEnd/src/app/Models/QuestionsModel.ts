export class QuestionsModel
{
    subjectId : number;
    question : string;
    answer1 : string;
    answer2 : string;
    answer3 : string;
    answer4 : string;
    correctAnswer : string;

    constructor()
    {
        this.subjectId = 0;
        this.question = "";
        this.answer1 = "";
        this.answer2 = "";
        this.answer3 = "";
        this.answer4 = "";
        this.correctAnswer = "";
    }
}