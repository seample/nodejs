const validator = require('validator');
const chalk = require('chalk');

console.log(chalk.green(validator.escape('<script>alert("boooooong!")</script>')));