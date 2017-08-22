var Matrix = function(input) {
  this.rows = input.split('\n').map(function(row) {
    return row.split(' ').map(function(item) {
      return parseInt(item);
    });
  });
  this.columns = Object.keys(this.rows[0]).map(function(column) {
    return this.map(function(row) {
      return row[column];
    });
  }, this.rows);
}

module.exports = Matrix;
