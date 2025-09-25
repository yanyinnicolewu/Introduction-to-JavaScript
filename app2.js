function enter(haskey, hasMagic, isBanned) {
  if ((haskey === true || hasMagic === true) && !isBanned) {
    console.log("you're princess is in another castle");
  } else {
    console.log("cannot enter");
  }
}

enter(true, false, false);
