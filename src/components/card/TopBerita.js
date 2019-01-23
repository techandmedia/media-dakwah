import React from "react";
import { Card, List } from "antd";

export default function TopBerita({ data }) {
  // console.log(data)
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 2,
        lg: 3
      }}
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Card
            style={{ marginBottom: 10 }}
            cover={<img alt="example" src={item.src} />}
            actions={[<p>Like</p>, <p>Komentar</p>, <p>Simpan</p>]}
          >
            <p style={{ fontWeight: 500, fontSize: 16, lineHeight: 1.2 }}>
              {item.judul}
            </p>
            <p>{item.berita}</p>
          </Card>
        </List.Item>
      )}
    />
  );
}
