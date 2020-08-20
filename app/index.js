// 1) count how many hoodies there are and multiply by 25
// 2) count how many long sleeves there are and multiply by 12
// 3) count how many tees there are and multiply by 10
// 4) count how many masks there are and multiply by 6
// 5) count how many orders there are and multiply by 0.3
// 6) count how many are going to Canada and multiply by 3
// 7) count how many are going to outside of Canada and US and multiply by 6
// 8) count how many of those are going to the US and add that number to the total

const lineReader = require('line-reader'); // import line reader module
const validFile = require('./helpers/validFile');
const outputData = require('./helpers/outputData');
const addToData = require('./helpers/addToData');

validFile(process.argv[2]);
const path = './app/csv/' + process.argv[2];

const DATA = {
  usa: { hoodies: 0, tees: 0, crewnecks: 0, longsleeves: 0, masks: 0 },
  cad: { hoodies: 0, tees: 0, crewnecks: 0, longsleeves: 0, masks: 0 },
  world: { hoodies: 0, tees: 0, crewnecks: 0, longsleeves: 0, masks: 0 }
};

let i = 0;
let location;
lineReader.eachLine(path, function (line, last) {
  if (last) {
    outputData(DATA);
    return false;
  }

  let row = line.split(',');
  if (row[0]) location = row[12].toLowerCase();

  console.log(row[0], row[12], location, i++);
  addToData(DATA, location, row[2]);
});
