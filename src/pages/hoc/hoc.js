import React, { Component } from 'react';
import B from '@/pages/hoc/B';
import C from '@/pages/hoc/C';
import style from './hoc.less'
class Hoc extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <B />
        <C />
      </div>
    );
  }
}

export default Hoc;
