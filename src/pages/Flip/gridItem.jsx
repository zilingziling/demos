import React, { Component } from 'react';
import styles from '@/pages/Flip/flip.css';
import styled from 'styled-components';
export default class GridItem extends Component {
  state = {
    status: 0, //初始
    previewPosition: [],
    scaleValue: 2.5,
  };
  handleClick = e => {
    e.stopPropagation()
    const { scaleValue } = this.state;
    const first = e.target.getBoundingClientRect();
    const { left, top, width, height } = first;
    const x = (document.body.clientWidth - scaleValue * width) / 2;
    const y = (document.body.clientHeight - scaleValue * height) / 2;
    this.setState(state => ({
      status: state.status === 0 ? 1 : 0,
      previewPosition: [x - left, y - top],
    }));
  };
  render() {
    //transform:status===0?`translate3d(${x},${y},0) scale(1) `:`translate3d(${initialPosition[0]},${initialPosition[1]},0) scale(1), transformOrigin:'0 0' ` }}
    const { bg } = this.props;
    const { status, previewPosition, scaleValue } = this.state;
    return (
      <>
        <div
          className={styles.gridItem}
          style={{
            background: bg,
            transform:
              status === 1
                ? `translate3d(${previewPosition[0]}px,${
                    previewPosition[1]
                  }px,0) scale(${scaleValue})`
                : null,
          }}
          onClick={this.handleClick}
        >
          <div className={styles.colorSpan}>
            <span>{bg}</span>
          </div>
        </div>
      </>
    );
  }
}
