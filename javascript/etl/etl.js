var ETL = function() {};

ETL.prototype.transform = function(oldData) {
  var newData = {};
  Object.keys(oldData).forEach(function(points){
    oldData[points].forEach(function(letter){
      newData[letter.toLowerCase()] = parseInt(points);
    });
  });
  return newData;
};

module.exports = ETL;
