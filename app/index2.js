// 1) count how many hoodies there are and multiply by 25
// 2) count how many long sleeves there are and multiply by 12
// 3) count how many tees there are and multiply by 10
// 4) count how many masks there are and multiply by 6
// 5) count how many orders there are and multiply by 0.3
// 6) count how many are going to Canada and multiply by 3
// 7) count how many are going to outside of Canada and US and multiply by 6
// 8) count how many of those are going to the US and add that number to the total

const lineReader = require('line-reader'); // import line reader module
const chalk = require('chalk');

const file = 'August14.csv' || process.argv[2];
if (!file) {
  console.log(
    chalk.red(
      'No csv file specified. Provide the correct command line argments'
    )
  );
  process.exit(); //quit program
}

const ORDERS = {
  usa: { hoodies: 0, tees: 0, crewnecks: 0, longsleeves: 0, masks: 0 },
  canada: { hoodies: 0, tees: 0, crewnecks: 0, longsleeves: 0, masks: 0 },
  world: { hoodies: 0, tees: 0, crewnecks: 0, longsleeves: 0, masks: 0 }
};

const LOCATION_NUMBERS = {
  total_usa: 0,
  total_cad: 0,
  total_world: 0
};

// read each line of csv

let i = 0;
let location;
lineReader.eachLine('./app/csv/August14.csv', function (line, last) {
  i++;

  if (last) {
    for (const [key, value] of Object.entries(ORDERS.usa))
      LOCATION_NUMBERS.total_usa += value;
    for (const [key, value] of Object.entries(ORDERS.canada))
      LOCATION_NUMBERS.total_cad += value;
    for (const [key, value] of Object.entries(ORDERS.world))
      LOCATION_NUMBERS.total_world += value;

    console.log(chalk.bold.cyanBright('\nNumber of items ordered:'));
    console.table(ORDERS);

    console.log(chalk.bold.cyanBright('\nTotal Orders by Location:'));
    console.table(LOCATION_NUMBERS);
    let total = 0;
    for (const [key, value] of Object.entries(LOCATION_NUMBERS)) {
      total += value;
    }
    console.log(chalk.green('Total:'), total);
    console.log(
      chalk.cyan(`USA`),
      `${LOCATION_NUMBERS.total_usa} * 0.3 = ${
        LOCATION_NUMBERS.total_usa * 0.3
      }`
    );
    console.log(
      chalk.cyan(`CAD`),
      `${LOCATION_NUMBERS.total_cad} * 3 = ${LOCATION_NUMBERS.total_cad * 3}`
    );
    console.log(
      chalk.cyan(`WORLD`),
      `${LOCATION_NUMBERS.total_world} * 6 = ${
        LOCATION_NUMBERS.total_world * 6
      }`
    );
    return false;
  }

  let row = line.split(',');
  if (row[0]) location = row[12].toLowerCase();
  // console.log(row[0], row[12], i, chalk.green(location));

  if (location === 'us') {
    if (row[2].toLowerCase().includes('tee')) ORDERS.usa.tees++;
    if (row[2].toLowerCase().includes('hoodie')) ORDERS.usa.hoodies++;
    if (row[2].toLowerCase().includes('long sleeve')) ORDERS.usa.longsleeves++;
    if (row[2].toLowerCase().includes('crewneck')) ORDERS.usa.crewnecks++;
    if (row[2].toLowerCase().includes('facemask')) ORDERS.usa.masks++;
  } else if (location === 'ca') {
    if (row[2].toLowerCase().includes('tee')) ORDERS.canada.tees++;
    if (row[2].toLowerCase().includes('hoodie')) ORDERS.canada.hoodies++;
    if (row[2].toLowerCase().includes('long sleeve'))
      ORDERS.canada.longsleeves++;
    if (row[2].toLowerCase().includes('crewneck')) ORDERS.canada.crewnecks++;
    if (row[2].toLowerCase().includes('facemask')) ORDERS.canada.masks++;
  } else {
    if (row[2].toLowerCase().includes('tee')) ORDERS.world.tees++;
    if (row[2].toLowerCase().includes('hoodie')) ORDERS.world.hoodies++;
    if (row[2].toLowerCase().includes('long sleeve'))
      ORDERS.world.longsleeves++;
    if (row[2].toLowerCase().includes('crewneck')) ORDERS.world.crewnecks++;
    if (row[2].toLowerCase().includes('facemask')) ORDERS.world.masks++;
  }
});
