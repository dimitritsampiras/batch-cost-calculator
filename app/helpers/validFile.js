const chalk = require('chalk');

function validFile(filename) {
  if (!filename) {
    console.log(
      chalk.red(
        'No csv file specified. Provide the correct command line argments'
      )
    );
    process.exit();
  } else {
    console.log(chalk.green('Valid file: ', filename));
    return;
  }
}

module.exports = validFile;
