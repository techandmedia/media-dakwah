import React from "react";
import { Card, List } from "antd";

const data = [
  {
    key: 1,
    judul: "Kontestasi Lima Tahunan Jangan Sampai Korbankan Persaudaraan",
    berita:
      "Ketua Umum MUI KH Ma'ruf Amin mengingatkan, kontestasi yang hanya lima tahun sekali, jangan sampai mengorbankan persaudaraan yang telah terjalin lama.",
    address: "Jakarta, Indonesia",
    src: "https://mui.or.id/wp-content/uploads/2018/08/Maruf-Amin-3.jpg",
    tanggal: "9 Januari 2019"
  },
  {
    key: 2,
    judul: "Milad ke-30, LPPOM-MUI Kembangkan Layanan Digital",
    berita:
      "LPPOM-MUI meluncurkan pembaruan beberapa layanan digitalnya pada Milad LPPOM ke-30. Update tersebut diharapkan lebih memudahkan para stakeholder dan masyarakat.",
    address: "Jakarta, Indonesia",
    tanggal: "9 Januari 2019",
    src: "https://mui.or.id/wp-content/uploads/2019/01/mui1.jpg"
  },
  {
    key: 3,
    judul: "Bantu Kembangkan Perpusatakaan, MUI Apresiasi Program BI Cornet",
    berita:
      "Sekjen MUI Buya Anwar Abbas mengapresiasi bantuan Bank Indonesia fasilitas pojok pojok baca Bank Indonesia (BI Corner) di Gedung MUI lantai 1.",
    address: "Jakarta, Indonesia",
    src: "https://mui.or.id/wp-content/uploads/2019/01/BI-Corner.jpeg",
    tanggal: "9 Januari 2019"
  }
];

export default function TopBerita() {
  // let i = 0;
  // const render = data.map(data => {
  //   i++;
  //   if (i > 5) {
  //     return null;
  //   }
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
