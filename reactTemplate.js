const paramCase = require('param-case');
const { pascalCase } = require('pascal-case');

module.exports = function reactTemplate ({
  name = 'template',
}) {
  return `import React, { Component } from 'react'
import { View, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { observer } from 'mobx-react'


import './${pascalCase(name)}.less'

type PageStateProps = {}

interface ${pascalCase(name)} {}

@observer
class ${pascalCase(name)} extends Component {
  state = {}

  render () {

    return (
      <View className='${paramCase(name)}'>
      
      </View>
    )
  }
}

export default ${pascalCase(name)}

`
};

