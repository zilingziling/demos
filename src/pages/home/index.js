import React, { Component } from 'react';
import styles from './index.less'
import {Icon} from 'antd';
import { Link, NavLink } from 'umi';
const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1095205_be9wiyzevsh.js', // 在 iconfont.cn 上生成
});
export default class Index extends Component {
  state={
    changeColor:'rgba(8, 8, 255, 0.09)',
    animate:false
  }
  color16=()=> {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const alpha = Math.random().toFixed(13); //随机生成1以内a值
    return `rgba(${r},${g},${b},${alpha})`; //返回rgba(r,g,b,a)格式颜色}
  }
  handleColorChange=()=>{
    this.setState({
      animate:true,
      changeColor:this.color16()
    })
  }
  render() {
    const {changeColor,animate}=this.state
    return (

      <div className={styles.wrapper}>
        <div className={styles.leftBottom}/>
        <article>
          <span>WELCOME</span>
          <h1>ABOUT ME</h1>
          <p>I'm a front-end-engineer . here are some practice demos by me . have fun ！ </p>
        </article>
        <MyIcon type='icon-youjiantou' className={styles.arrowIcon}/>
        <div className={styles.colorChange} style={{background:changeColor,animationName:'pulse'}} onClick={this.handleColorChange}/>
        <div className={styles.links}>
          <NavLink to='/flip'>FLIP</NavLink>
          <NavLink to='/gallery'>GALLERY</NavLink>
          <NavLink to='/hoc'>HOC</NavLink>
          <NavLink to='/motions'>HOOKS</NavLink>
        </div>
      </div>
    );
  }
}
