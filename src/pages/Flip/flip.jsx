import React, { Component } from 'react';
import styles from './flip.css';
import GridItem from './gridItem';
import ColorMatch from '@/pages/Flip/colorMatch/colorMatch';

class Flip extends Component {
  state = {
    cardsArr: [1, 1, 1, 1, 1, 1, 1, 1],
    content:1
  };
  color16() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const alpha = Math.random().toFixed(13); //随机生成1以内a值
    return `rgba(${r},${g},${b},${alpha})`; //返回rgba(r,g,b,a)格式颜色}
  }
  addOne = () => {
    this.setState(state => ({
      cardsArr: state.cardsArr.concat(1),
    }));
  };
  toColor=()=>{
    this.setState(state=>({
      content:state.content===1?2:1
    }))
  }
  deleteOne = () => {
    if (this.state.cardsArr.length <= 1) return;
    const newArr = this.state.cardsArr.slice();
    newArr.splice(-1);
    this.setState(state => ({
      cardsArr: newArr,
    }));
  };
  render() {
    const { cardsArr,content } = this.state;
    return (
      <>
        <div className={styles.buttonWrap}>
        {content===1?
          <>
          <button className={styles.cardsAddBtn} onClick={this.addOne}>
            click to add one
          </button>
          <button className={styles.cardsDeleteBtn} onClick={this.deleteOne}>
          click to delete one
          </button></>
            :null
        }

        <button className={styles.colorsBtn} onClick={this.toColor}>click to Colors</button>
        </div>
        {
          content===1? <div className={styles.gridWrapper}>
            {cardsArr.map((i, index) => (
              <GridItem bg={this.color16()} key={index} />
            ))}
          </div>:<ColorMatch/>
        }
      </>
    );
  }
}
export default Flip;
