import React, { Component } from 'react';
import A from '@/pages/hoc/A';

class C extends Component {
  render() {
    return (
      <div>
        <h2>这是C组件的内容</h2>
        <img src={require('../../assets/d19a4f3527b6380d9c0dab4ea41b2fc1.jpg')} alt='photo'/>
      </div>
    );
  }
}

export default A(C);
