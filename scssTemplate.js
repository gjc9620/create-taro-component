const paramCase = require('param-case');


module.exports = function scssTemplate ({
  className = 'template',
}) {
  return `@import 'client/styles/func.scss';
@import 'client/styles/mixin.scss';
@import 'client/styles/variables.scss';

.${paramCase(className)}{
  display: flex;
  flex-direction: column;
}

  `
};
