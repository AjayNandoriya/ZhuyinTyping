class TypeQuestion{
    constructor(question, answer, hint){
        this.question = question;
        this.answer = answer;
        this.hint = hint;
    }
};

var questions = [];
// kanji characters
questions.push(new TypeQuestion("我","我","ji3"));
questions.push(new TypeQuestion("早","早","yl3"));
questions.push(new TypeQuestion("你","你","su3"));

// single characters
questions.push(new TypeQuestion("b","ㄅ","1"));
questions.push(new TypeQuestion("p","ㄆ","q"));
questions.push(new TypeQuestion("m","ㄇ","a"));
questions.push(new TypeQuestion("f","ㄈ","z"));
questions.push(new TypeQuestion("d","ㄉ","2"));
questions.push(new TypeQuestion("t","ㄊ","w"));
questions.push(new TypeQuestion("n","ㄋ","s"));
questions.push(new TypeQuestion("l","ㄌ","x"));
