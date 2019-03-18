import styles from './index.css';
import React from 'react';

function BasicLayout(props) {
  return (
    <div >
      {/*<h1 className={styles.title}>Hey! Welcome to ziling's demo!</h1>*/}
      { props.children }
    </div>
  );
}

export default BasicLayout;
