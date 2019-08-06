const paramCase = require('param-case');


module.exports = function scssTemplate ({
  className = 'template',
}) {
  return `
.${paramCase(className)} {
  display: flex;
  flex-direction: column;
}

  `
};
