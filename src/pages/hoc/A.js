import React, { Component } from 'react';
import style from './hoc.less'

function A(CrossComponents) {
  return class A extends Component {
    render() {
      return (
        <div className={style.container}>
          <h1>MAGAZINE</h1>
            <CrossComponents />
        </div>
      );
    }
  }
}
export default A;
