import React, { Component } from 'react';
import { Card } from 'antd';
import styles from './motons.less';
class Motions extends Component {
  render() {
    return (
      <div className={styles.content}>
        <Card title="HOVER">
          <ul className={styles.hoverUl}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </Card>
      </div>
    );
  }
}

export default Motions;
