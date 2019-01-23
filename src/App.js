import React, { Component } from "react";
import MainLayout from "./layout/Layout";
import Header from "./layout/Header";

import Register from "./components/form/Register";
import SignIn from "./components/form/Signin";
import PetaProvinsi from "./components/form/PetaProvinsi";
import PetaWilayah from "./components/form/PetaWilayah";

import TabContent from "./content/TabContent";
import Top5 from "./components/table/Top5";
import TopBerita from "./components/card/TopBerita";

import { getDummy, getBerita, getPeta, getProvinsi } from "./utils/GetData";
import "./App.css";

class App extends Component {
  state = {
    siderStatus: "header",
    topDai: [],
    topKhotib: [],
    statusData: false,
    topBerita: [],
    semuaData: [],
    petaData: [],
    provinsi: [],
    route: "home"
  };

  componentDidMount() {
    this.getDataDai();
    this.getDataBerita();
    this.getDataPeta();
    this.getDataProvinsi();
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

  getDataPeta = () => {
    getPeta().then(res => {
      // console.log(res.data);
      this.setState({
        petaData: res.data
      });
    });
  };

  getDataProvinsi = () => {
    getProvinsi().then(res => {
      // console.log(res.data);
      this.setState({
        provinsi: res.data
      });
    });
  };

  getDataDai = () => {
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
      petaData,
      provinsi,
      route
    } = this.state;
    console.log(topBerita);
    const { onRouteChange, onSiderChange } = this;
    const dataPeta = petaData;

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
        ) : route === "provinsi" ? (
          <PetaProvinsi provinsi={provinsi} />
        ) : route === "wilayah" ? (
          <PetaWilayah peta={dataPeta} />
        ) : (
          <TabContent
            key={statusData}
            // berita={<Top5 data={topBerita} />}
            berita={<TopBerita data={topBerita} />}
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
