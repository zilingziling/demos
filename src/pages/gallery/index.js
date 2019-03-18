import React, { Component } from 'react';
import { Card, Avatar, Icon } from 'antd';
const { Meta } = Card;
let ary = [];
for (let i = 1; i <= 25; i++) {
  ary.push(i);
}
let imgAry = ary.map(item =>require(`../../assets/galleryImg/${item}.png`));
export default class Index extends Component {
  render() {
    return (
      <div>
        {imgAry.map((item, index) => {
          return (
            <Card
              key={index}
              style={{ width: 300 }}
              cover={<img alt="example" src={item} />}
              actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
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
