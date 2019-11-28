import React, { Component } from "react";
import { Table, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

class Home extends Component {
  state = {
    data: [],
    isopen: false
  };

  componentDidMount() {
    this.setState({
      data: [
        { kegiatan: "Lari", status: true, tanggal: "2019-11-27" },
        { kegiatan: "Sarapan", status: false, tanggal: "2019-11-28" }
      ]
    });
  }

  btnAddClick = () => {
    // button untuk add data
    var kegiatan = this.refs.kegiatan.value;
    var tanggal = this.refs.tanggal.value;
    var obj = {
      kegiatan,
      status: false,
      tanggal
    };

    if (kegiatan === "" || tanggal === "") {
      MySwal.fire("Cancelled", "Datanya Gaboleh Kosong Oi", "error");
    } else {
      var newdata = [...this.state.data, obj];
      this.setState({ data: newdata, isopen: false });
      MySwal.fire("Success!", "Data Berhasil ditambah!", "success");
    }
  };

  btnDeleteClick = index => {
    MySwal.fire({
      title:
        "Are you sure you want to delete " +
        this.state.data[index].kegiatan +
        "?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Iyeeee",
      cancelButtonText: "Nooooo",
      reverseButtons: true
    }).then(result => {
      if (result.value) {
        var data = this.state.data;
        data.splice(index, 1);
        this.setState({ data: data });
        MySwal.fire("Deleted!", "Your item has been deleted.", "success");
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        MySwal.fire("Cancelled", "Your item is safe :)", "error");
      }
    });
  };

  renderTodo = () => {
    //untuk print data & harus tulis function dgn es6
    return this.state.data.map((val, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{val.kegiatan}</td>
          <td>{val.status ? "Sudah" : "Belom"}</td>
          <td>{val.tanggal}</td>
          <td>
            <button className="btn btn-primary mr-3">Edit</button>
            <button
              onClick={() => this.btnDeleteClick(index)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        {/* Modal Add Data */}
        <Modal
          isOpen={this.state.isopen}
          toggle={() => this.setState({ isopen: false })}
        >
          <ModalHeader>Add Data</ModalHeader>
          <ModalBody>
            {/* Ini isi modalnya */}
            <input
              className="form-control"
              placeholder="Masukkan Kegiatan Disini"
              type="text"
              ref="kegiatan"
            />
            <input
              className="form-control"
              placeholder="tanggal"
              type="date"
              ref="tanggal"
            />
          </ModalBody>
          <ModalFooter>
            <button onClick={this.btnAddClick} className="btn btn-success">
              Add
            </button>
            <button
              onClick={() => this.setState({ isopen: false })}
              className="btn btn-danger"
            >
              Cancel
            </button>
          </ModalFooter>
        </Modal>
        <div className="px-5 mx-5 my-5">
          <Table>
            <thead>
              <tr>
                <th>No</th>
                <th>Kegiatan</th>
                <th>Status</th>
                <th>Tanggal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{this.renderTodo()}</tbody>
          </Table>
          <div>
            <button
              onClick={() => this.setState({ isopen: true })}
              className="btn btn-success rounded btn-add"
            >
              Add Data
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
