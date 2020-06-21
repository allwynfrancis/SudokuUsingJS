function submit() {

  var arr = [];//Two dimensional Array
  for (var i = 0; i < 9; i++) {
    arr[i] = new Array(9);
  }

  var k = 1;//For incrementing ID's
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      var idVal = document.getElementById('c' + k++).value;
      arr[i][j] = idVal;
    }
  }
  /*--------------------------row wise check-----------------------------------------*/
  for (i = 0; i < arr.length; i++) {
    var row = arr[i];
    checkArray(row);
  }
  /*--------------------------col wise check-----------------------------------------*/
  var col = [];
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      var colval = arr[j][i];
      col[j] = colval;
    }
    checkArray(col);
  }

  function checkArray(grid) {//array which contains row value will be passed into this
    let emptyArray = [];
    for (var k = 0; k < grid.length; k++) {
      let number = grid[k];
      if (number == "") {//if the cell is empty
        console.log('the cell is empty');
      } else if (emptyArray.indexOf(number) == -1) {
        emptyArray.push(number);
      } // element not pushed yet
      else {
        console.log(number + ' is already entered');
      } // element already  pushed
    }
  }

  /*--------------------------nonets wise check-----------------------------------------*/

  var smallGrid = [];//The elements in the each and every nonets are created as an array
  for (var i = 0; i < arr.length; i += 3) {
    for (var j = 0; j < arr.length; j += 3) {
      let grid = arr.slice(i, i + 3).map(row => row.slice(j, j + 3));//first slice will divide the rows
      //Secong slice will divide the columns into 3
      console.log(grid);
      checkGrid(grid);
    }
  }

  function checkGrid(grid) {
    let emptyArray = [];
    for (var k = 0; k < grid.length; k++) {
      for (var i = 0; i < grid[k].length; i++) {
        let number = grid[k][i];
        if (emptyArray.indexOf(number) == -1) {
          emptyArray.push(number);
        } // element not pushed yet
        else {
          console.log(number + ' is Already Entered');
          return false;
        } // element already  pushed
      }
    }
    return true;
  }
}



