import React, { Component } from "react";
import Axios from "axios";
import { APIURL, TOKEN } from "../support/ApiUrl";

class Home extends Component {
  state = {
    dataprov: [],
    datakabupaten: [],
    datakecamatan: [],
    datakelurahan: []
  };

  componentDidMount() {
    Axios.get(`${APIURL}MeP7c5ne${TOKEN}/m/wilayah/provinsi`)
      .then(res => {
        this.setState({ dataprov: res.data.data });
      })
      .catch(err => {
        console.log(err);
      });
    console.log("masuk sini");
  }

  renderProv = () => {
    return this.state.dataprov.map((val, index) => {
      return (
        <option key={index} value={val.id}>
          {val.name}
        </option>
      );
    });
  };

  onProvChange = event => {
    // console.log(event.target.value); //cara lain untuk get value
    var idprov = event.target.value;
    Axios.get(
      `${APIURL}MeP7c5ne${TOKEN}/m/wilayah/kabupaten?idpropinsi=${idprov}`
    )
      .then(res => {
        this.setState({ datakabupaten: res.data.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  renderKabupaten = () => {
    if (this.state.datakabupaten.length === 0) {
      return <option>Pilih Provinsi Dulu</option>;
    }
    return this.state.datakabupaten.map((val, index) => {
      return (
        <option key={index} value={val.id}>
          {val.name}
        </option>
      );
    });
  };

  onKabupatenChange = event => {
    var idkab = event.target.value;
    console.log(idkab);
    Axios.get(
      `${APIURL}MeP7c5ne${TOKEN}/m/wilayah/kecamatan?idkabupaten=${idkab}`
    )
      .then(res => {
        this.setState({ datakecamatan: res.data.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  renderKecamatan = () => {
    if (this.state.datakecamatan.length === 0) {
      return <option>Pilih Kabupaten Dulu</option>;
    }
    return this.state.datakecamatan.map((val, index) => {
      return (
        <option key={index} value={val.id}>
          {val.name}
        </option>
      );
    });
  };

  onKecamatanChange = event => {
    var idkec = event.target.value;
    console.log(idkec);
    Axios.get(
      `${APIURL}MeP7c5ne${TOKEN}/m/wilayah/kelurahan?idkecamatan=${idkec}`
    )
      .then(res => {
        this.setState({ datakelurahan: res.data.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  renderKelurahan = () => {
    if (this.state.datakelurahan.length === 0) {
      return <option>Pilih Kecamatan Dulu</option>;
    }
    return this.state.datakelurahan.map((val, index) => {
      return (
        <option key={index} value={val.id}>
          {val.name}
        </option>
      );
    });
  };

  render() {
    if (this.state.dataprov.length === 0) {
      return <div>Loading...</div>;
    }
    return (
      <div className="mt-2 ml-2">
        Provinsi :{" "}
        <select onChange={this.onProvChange}>
          <option defaultValue hidden>
            Pilih Provinsi
          </option>
          {this.renderProv()}
        </select>
        <br /> <br />
        Kabupaten :{" "}
        <select onChange={this.onKabupatenChange}>
          {this.renderKabupaten()}
        </select>
        <br />
        <br />
        Kecamatan :{" "}
        <select onChange={this.onKecamatanChange}>
          {this.renderKecamatan()}
        </select>
        <br />
        <br />
        Kelurahan : <select>{this.renderKelurahan()}</select>
      </div>
    );
  }
}

export default Home;
