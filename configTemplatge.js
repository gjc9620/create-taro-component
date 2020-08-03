
module.exports = function indexTemplate({
  name = 'template',
}) {
  
  return `export default {
  navigationBarTitleText: '${name}'
}

`;
}


