function longCaptial(word){
  if(word.length > 10){
    console.log(word.toUpperCase());
  }
  else{
    console.log(word);
  }
}

longCaptial("Hello World");
longCaptial("goodbye");
longCaptial("Sue Smith");
longCaptial(" Sue Robertson");
longCaptial("Joe Thomas");
longCaptial("Joe Stevens");