import React, { Component } from 'react';
import { Card, Avatar, Icon } from 'antd';
import styles from './index.less'
const { Meta } = Card;
let ary = [];
for (let i = 1; i <= 25; i++) {
  ary.push(i);
}
let imgAry = ary.map(item =>require(`../../assets/galleryImg/${item}.png`));
export default class Index extends Component {
  render() {
    return (
      <div className={styles.galleryWrap}>
        {imgAry.map((item, index) => {
          return (
            <Card
              key={index}
              cover={<img alt="example" src={item} />}
              actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
              className={styles.item}
              hoverable
            >
              <Meta
                avatar={<Avatar src={item} />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          );
        })}
      </div>
    );
  }
}
