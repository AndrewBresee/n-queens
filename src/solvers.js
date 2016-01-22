/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = new Board({n:n});
  var rows = solution.rows();
  for(var i = 0 ; i < rows.length; i++) {
    if(!solution.hasAnyRowConflicts()){
      rows[i][i] = 1; 
    } 
  }  

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return rows;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = new Board({n:n});
  if(n <= 0){
    return 1; 
  } else {
    return n * this.countNRooksSolutions(n-1); 
  }

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({n:n});
  var rows = solution.rows();
  
  var helper = function(CurrentArray) {
    for(var i = 0; i < n; i++){
      for(var j = 0; j < n; j++) {
        if (!solution.hasColConflictAt(j) && !solution.hasMajorDiagonalConflictAt(j-i) && !solution.hasMinorDiagonalConflictAt(i+j) ) {
          return 1+ helper(rows[i][j] === 1);
        } else {
          console.log("Return test");
          return 0;
        }
      }
    }
    return 0;
  };

  helper(rows);

  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
