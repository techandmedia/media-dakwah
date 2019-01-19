import React from "react";
import { Row, Card, Col } from "antd";

// const columns = [
//   {
//     title: "Nama",
//     dataIndex: "name",
//     key: "name",
//     render: text => <a href="javascript:;">{text}</a>
//   },
//   // {
//   //   title: "Age",
//   //   dataIndex: "age",
//   //   key: "age"
//   // },
//   {
//     title: "Alamat",
//     dataIndex: "address",
//     key: "address"
//   },
//   {
//     title: "Kata Kunci",
//     key: "tags",
//     dataIndex: "tags",
//     render: tags => (
//       <span>
//         {tags.map(tag => (
//           <Tag color="blue" key={tag}>
//             {tag}
//           </Tag>
//         ))}
//       </span>
//     )
//   },
//   {
//     title: "Action",
//     key: "action",
//     render: (text, record) => (
//       <span>
//         <a href="javascript:;">Invite {record.name}</a>
//         <Divider type="vertical" />
//         <a href="javascript:;">Delete</a>
//       </span>
//     )
//   }
// ];

const { Meta } = Card;

export default function TopFiveKhotib({ data }) {
  const render = data.map(data => {
    return (
      <Row>
        <Col xs={24} md={14}>
          <Card
            key={data.key}
            style={{ marginBottom: 10 }}
            cover={
              <img
                alt="example"
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />
            }
            actions={[<p>Pesan</p>, <p>Chat</p>, <p>Profil</p>]}
          >
            <Meta
              // avatar={
              //   <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              // }
              title={data.name}
              description={data.address}
            />
          </Card>
        </Col>
      </Row>
    );
  });

  return render;
}
