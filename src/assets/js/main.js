function start() {
  const empty = 0;
  const newborn = 1;
  const adult = 2;
  const senior = 3;
  const generation1 = document.getElementById('generation-1').value;
  let grid = [];
  let rows, rowCount, cols, colCount;

  const currentGenerationTitle = document.getElementById('generation-number');
  const result = document.getElementById('result');

  currentGenerationTitle.innerText = 'Hello';
  result.innerHTML = generation1.value;

  function getNeighborCount(row, col) {
    function getCellValue(row, col) {
      let value = 0;

      if (row < 0 || col < 0) {
        return value;
      }

      try {
        if (grid[row][col] > 0) {
          value = 1;
        }
      } catch {
        value = 0;
      }

      return value;
    }

    let total = 0;

    total += getCellValue(row - 1, col - 1);
    total += getCellValue(row - 1, col);
    total += getCellValue(row - 1, col + 1);
    total += getCellValue(row, col - 1);
    total += getCellValue(row, col + 1);
    total += getCellValue(row + 1, col - 1);
    total += getCellValue(row + 1, col);
    total += getCellValue(row + 1, col + 1);

    return total;
  }

  function init() {
    rows = generation1.split('\n');
    rowCount = rows.length;

    if (rowCount > 0) {
      cols = rows[0].split(' ');
      colCount = cols.length;

      if (validate()) {
        for (let i = 0; i < rowCount; i++) {
          grid[i] = rows[i];
        }

        return computeNextGeneration();
      }
    }
  }

  function validate() {
    if (!rowCount === colCount) {
      alert('please check the input');

      return false;
    }

    return true;
  }

  function computeNextGeneration() {
    let nextGen = [];

    for (let i = 0; i < rowCount; i++) {
      nextGen[i] = [];
      for (let j = 0; j < colCount; j++) {
        const neighborCount = getNeighborCount(i, j);

        if (neighborCount === 0 || neighborCount >= 5 || grid[i][j] == 0) {
          nextGen[i][j] = 0;
        }
        else {
          nextGen[i][j] = grid[i][j];
        }
      }
    }

    return nextGen;
  }

  const value = init();
  console.log(value);
}
