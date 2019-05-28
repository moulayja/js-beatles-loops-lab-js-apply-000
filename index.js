function theBeatlesPlay(musicians, instruments) {
    var musicHePlays = [];
    for (var i=0; i < musicians.length; i++) {
        musicHePlays.push(musicians[i] + " plays " + instruments[i]);
    }
    return musicHePlays;
}
const johnLennonFacts = (array) => {
  if (array === undefined) {
    var things = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
    var thingsHeDoes = [];
    var i = 0;
    while (i < things.length) {
      thingsHeDoes.push(`${things[i]}!!!`);
      i++;
    }
    return thingsHeDoes;

  } else {
    var newArray = [];
    var j = 0;
    while (j < array.length) {
      newArray.push(`${array[j]}!!!`);
      j++;
    }
    return newArray;
  }

}

johnLennonFacts(['foo', 'boo']);

<<<<<<< HEAD
const iLoveTheBeatles = num => {
=======
 function theBeatlesPlay (num) {
>>>>>>> 15584fa059cf0d9c7b60a0806dbe374ee39b3e4c
  let array = [];
  do { array.push('I love the Beatles!')
       num++;
  }

  while (num < 15);
  return array;

}
