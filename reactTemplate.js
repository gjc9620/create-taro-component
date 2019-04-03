const paramCase = require('param-case');


module.exports = function reactTemplate ({
  name = 'template',
}) {
  return `import { ComponentType } from 'react';
import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import './${name}.scss';

class ${name} extends Component {
  render () {
    return (
      <View className='${name}'>
      
      </View>
    );
  }
}


export default ${name} as ComponentType;
`
};
