var BeerSong = function() {};

BeerSong.prototype.verse = function(num) {
  if (num == 2) {
    return '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n';  
  } else if (num == 1) {
    return '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
  } else if (num == 0) {
    return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
  } else return num.toString() + " bottles of beer on the wall, " + num.toString() + " bottles of beer.\nTake one down and pass it around, " + (num-1).toString() + " bottles of beer on the wall.\n";
  }

BeerSong.prototype.sing = function(start, end=0) {
    var section = "";
    for (var i = start; i > end; i--) {
      var song = new BeerSong(i);
      section += song.verse(i) + "\n";
    }
    section += song.verse(end);
    return section;
};

module.exports = BeerSong;
