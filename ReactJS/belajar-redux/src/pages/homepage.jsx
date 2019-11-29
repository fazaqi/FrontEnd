import React, { Component } from "react";
import { connect } from "react-redux";
import { TambahAction, KurangAction, ResetAction } from "./../redux/actions";

class Homepage extends Component {
  state = {};

  onTambahClick = () => {
    this.props.tambah();
  };

  onKurangClick = () => {
    this.props.KurangAction();
  };
  render() {
    return (
      <div className="d-flex justify-content-center mt-5">
        <button onClick={this.onKurangClick}>-</button>
        {this.props.Angka}
        <button onClick={this.onTambahClick}>+</button>
        <br />
        <button onClick={() => this.props.ResetAction()}>Reset</button>{" "}
        {/* kalo function gak dibikin di page ini pas onclick harus pake callback */}
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    Angka: state.x
  };
};

export default connect(MapStateToProps, {
  tambah: TambahAction,
  KurangAction,
  ResetAction
})(Homepage);
