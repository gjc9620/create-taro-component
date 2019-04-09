const paramCase = require('param-case');


module.exports = function reactTemplate ({
  name = 'template',
}) {
  return `import { ComponentType } from 'react';
import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
//import getImageResourceUrl from '@/AppHitchMP/src/utils/getImageResourceUrl';
//import freeRideService from '@/AppHitchMP/src/utils/api/freeRideService';
//import Native from '@/AppHitchMP/src/utils/native/native';

import './${name}.scss';

interface Props {

}

interface State {

}


class ${name} extends Component<Props, State> {
  constructor(props){
    super(props);
  }

  static options = {}

  static defaultProps = {};

  state = {};

  componentDidMount(): void {}
  
  render () {
    return (
      <View className='${paramCase(name)}'>
      
      </View>
    );
  }
}


export default ${name} as ComponentType;
`
};

