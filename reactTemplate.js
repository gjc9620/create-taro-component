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
//import PAGES_CONST from '@/AppHitchMP/src/utils/const/page.const';

import './${name}.scss';

export interface Props {

}

export interface State {

}


class ${name} extends Component<Props, State> {
  constructor(props){
    super(props);
  }

  static externalClasses = ['my-${paramCase(name)}'];

  static options = {
    addGlobalClass: true
  };

  static defaultProps = {};

  state = {};

  componentDidMount(): void {}
  
  render () {
    return (
      <View className='${paramCase(name)} my-${paramCase(name)}'>
      
      </View>
    );
  }
}


export default ${name} as ComponentType;
`
};

