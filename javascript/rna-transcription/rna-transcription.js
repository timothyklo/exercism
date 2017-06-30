var DnaTranscriber = function() {
  DnaTranscriber.prototype.toRna = function(rna) {
    
    // test for invalid
    var cleared = /[^G|C|T|A]+/;
    if (cleared.exec(rna)) {
      throw new Error('Invalid input');
    }

    // map dna
    var mapDna = {
      G:"C",
      C:"G",
      T:"A",
      A:"U"  
    };

    // replace matched
    rna = rna.replace(/G|C|T|A/gi, function(matched) {
      return mapDna[matched];
    });

    return rna;
  } 
}

module.exports = DnaTranscriber;
