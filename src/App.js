import React, { Component } from "react";
import MainLayout from "./layout/Layout";
import Header from "./layout/Header";

import Register from "./components/form/Register";
import SignIn from "./components/form/Signin";
// import HomeContent from "./content/homepage";
// import JudulContent from "./content/JudulContent";

import TabContent from "./content/TabContent";
import Top5 from "./components/table/Top5";

import { getDummy, getBerita } from "./utils/GetData";
import "./App.css";

class App extends Component {
  state = {
    siderStatus: "header",
    topDai: [],
    topKhotib: [],
    statusData: false,
    topBerita: [],
    semuaData: [],
    route: "register"
  };

  componentDidMount() {
    this.getData();
    this.getDataBerita();
    this.setState({
      statusData: !this.state.statusData
    });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   // console.log(prevProps);
  //   console.log(prevState.statusData, this.state.statusData);
  //   if (prevState.statusData !== this.state.statusData) {
  //   }
  // }

  getData = () => {
    getDummy().then(res => {
      const { topDai, topKhotib, semuaData } = this.state;
      const data = res.data;
      const len = data.length;
      for (let i = 0; i < len; i++) {
        semuaData.push(data[i]);
        if (data[i].dai === 1) {
          topDai.push(data[i]);
        }
        if (data[i].khotib === 1) {
          topKhotib.push(data[i]);
        }
      }
    });
  };

  getDataBerita = () => {
    getBerita().then(res => {
      const { topBerita } = this.state;
      const data = res.data;
      const len = data.length;
      for (let i = 0; i < len; i++) {
        topBerita.push(data[i]);
      }
    });
  };

  onRouteChange = route => {
    if (route === "register") {
      this.setState({
        route: "register"
      });
    } else if (route === "signin") {
      this.setState({
        route: "signin"
      });
    }
    // return null;
    this.setState({ route: route });
  };

  // Ini fungsi supaya pada saat lebar layar kurang dari 415px
  // dan tombol collapsed nya ditekan, maka title{display: none}
  onSiderChange = event => {
    const screenWidth = window.innerWidth;
    if (!event && screenWidth < 415) {
      this.setState({
        siderStatus: "smaller-header"
      });
    } else {
      this.setState({
        siderStatus: "header"
      });
    }
  };

  render() {
    const {
      siderStatus,
      topDai,
      topKhotib,
      topBerita,
      statusData,
      semuaData,
      route
    } = this.state;
    console.log(route);
    const { onRouteChange, onSiderChange } = this;

    return (
      <MainLayout
        onSiderChange={onSiderChange}
        onRouteChange={onRouteChange}
        header={<Header siderStatus={siderStatus} />}
      >
        {route === "register" ? (
          <Register onRouteChange={onRouteChange} />
        ) : route === "signin" ? (
          <SignIn onRouteChange={onRouteChange} />
        ) : (
          <TabContent
            key={statusData}
            // berita={<Top5 data={topBerita} />}
            data={topBerita}
            dai={<Top5 data={topDai} />}
            khotib={<Top5 data={topKhotib} />}
            semua={<Top5 data={semuaData} />}
          />
        )}
        {/* <HomeContent />
        <SignIn /> */}
      </MainLayout>
    );
  }
}

export default App;
