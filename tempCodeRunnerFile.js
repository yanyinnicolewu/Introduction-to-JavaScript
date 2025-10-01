function language(sentence) {
    let t = 0;
    let s = 0;
    for(let i = 0; i < sentence.length; i++){
        if (sentence[i] === "S"|| semtence [i]=== "s") {
            s=s+1;
        }else if (sentence[i] === "T" || sentence[i] === "t") {
            t++;
        }
    }
    if (t> s) {
        console.log("English")
    }else{
        console.log("Parle Vu Francaise");
    }
}
language(sentence);