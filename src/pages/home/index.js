import React, { Component } from 'react';
import styles from './index.less'
export default class Index extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.leftBottom}/>
        <article>
          <span>welcome</span>
          <h1>ABOUT ME</h1>
          <p>I'm a front-end-engineer . here are some practice demos by me . have fun ！ </p>
        </article>
      </div>
    );
  }
}
