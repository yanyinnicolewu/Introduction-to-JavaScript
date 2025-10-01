function occupied(y, t) {
  for (let i = 0; i < y.length; i++) {
    console.log(y[i], t[i]);
    //
    if (y[i] === "c" && t[i] === "c") {
      //do something
      occupied++;
    }
  }
  console.log(occupied);
}
occupied("ccc..", "cccc.c");
