import React from "react";
import { Tabs } from "antd";
// import TopBerita from "../components/card/TopBerita";
import "./tab.css";

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

export default function TabContent({ berita, dai, khotib, semua }) {
  // console.log(data);
  return (
    <Tabs onChange={callback} type="card" defaultActiveKey="1">
      <TabPane tab="Berita Dakwah" key="1">
        {/* <TopBerita data={data} /> */}
        {berita}
      </TabPane>
      <TabPane tab="Top 5 Dai" key="2">
        {dai}
      </TabPane>
      <TabPane tab="Top 5 Khotib" key="3">
        {khotib}
      </TabPane>
      <TabPane tab="Lihat Semua" key="4">
        {semua}
      </TabPane>
    </Tabs>
  );
}
