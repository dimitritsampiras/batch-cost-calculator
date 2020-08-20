const chalk = require('chalk');

const totalItems = {
  hoodies: 0,
  tees: 0,
  crewnecks: 0,
  longsleeves: 0,
  masks: 0
};

const totalLocationOrders = {
  usa: 0,
  cad: 0,
  world: 0
};

let total_orders = 0;

function outputData(data) {
  console.log(chalk.bold.cyan('\nNumber of Orders per Item and Location:'));
  console.table(data);

  for (const [location, items] of Object.entries(data)) {
    for (const [item, value] of Object.entries(items)) {
      totalItems[item] += value;
      totalLocationOrders[location] += value;
      total_orders += value;
    }
  }

  console.log(chalk.bold.cyan('\nOrders per Item w/o Location'));
  console.table(totalItems);
  console.log(chalk.green('Total Orders: '), total_orders);
  console.log(chalk.bold.green('Total Price (0.3x): '), total_orders * 0.3);

  console.log(chalk.bold.cyan('\nOrders per Location'));
  console.table(totalLocationOrders);

  console.log(chalk.bold.cyan('\nPrices of Orders'));
  console.log(
    chalk.bold.blue('Hoodies:'),
    chalk.yellow(totalItems.hoodies) + ' at $25 is',
    chalk.green('$' + totalItems.hoodies * 25)
  );
  console.log(
    chalk.bold.blue('Tees:'),
    chalk.yellow(totalItems.tees) + ' at $10 is',
    chalk.green('$' + totalItems.tees * 10)
  );
  console.log(
    chalk.bold.blue('Crews:'),
    chalk.yellow(totalItems.crewnecks) + ' at $24 is',
    chalk.green('$' + totalItems.crewnecks * 24)
  );
  console.log(
    chalk.bold.blue('Long Sleeves:'),
    chalk.yellow(totalItems.longsleeves) + ' at $12 is',
    chalk.green('$' + totalItems.longsleeves * 12)
  );
  console.log(
    chalk.bold.blue('Masks:'),
    chalk.yellow(totalItems.masks) + ' at $6 is',
    chalk.green('$' + totalItems.masks * 6)
  );

  console.log(chalk.bold.cyan('\nPrices of Locations'));
  console.log(
    chalk.bold.blue('USA:'),
    chalk.yellow(totalLocationOrders.usa) + ' (1.0x)',
    chalk.green(totalLocationOrders.usa * 1)
  );

  console.log(
    chalk.bold.blue('CAD:'),
    chalk.yellow(totalLocationOrders.cad) + ' (3.0x)',
    chalk.green(totalLocationOrders.cad * 3)
  );

  console.log(
    chalk.bold.blue('WORLD:'),
    chalk.yellow(totalLocationOrders.world) + ' (6.0x)',
    chalk.green(totalLocationOrders.world * 6)
  );
  return false;
}

module.exports = outputData;
