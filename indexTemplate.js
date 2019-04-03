
module.exports = function indexTemplate({
  name = 'template',
}) {
  
  return `import './${name}.scss';

export { default } from './${name}.jsx';

`;
}


