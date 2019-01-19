import React from "react";
import { List, Card } from "antd";
import placeholder from "../../utils/placeholder.jpg";

const { Meta } = Card;

export default function TopBerita({ data }) {
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4
      }}
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Card
            style={{ marginBottom: 10 }}
            // src={item.src}
            cover={
              <img
                alt="example"
                src={placeholder}
                style={{ height: "auto", maxWidth: "100%" }}
              />
            }
            actions={[<p>Pesan</p>, <p>Chat</p>, <p>Profil</p>]}
          >
            <Meta title={item.name} description={item.address} />
          </Card>
        </List.Item>
      )}
    />
  );
}
