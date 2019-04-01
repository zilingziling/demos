import React, { Component } from 'react';
import A from '@/pages/hoc/A';

class B extends Component {
  render() {
    return (
      <div>
        <h2>这是B组件的内容</h2>
        <img src={require('../../assets/4db4e6eadbff30c2ae1ad0fead4a9c9a.jpg')} alt='photo'/>
      </div>
    );
  }
}

export default A(B);
