import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import * as moment from "moment";
class ModalPage extends Component {
  state = {
    modal: false,
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    return (
      <MDBContainer>
        <MDBBtn
          onClick={this.toggle}
          color=""
          className="z-depth-0 float-right mt-5 text-success"
        >
<h5>Lire l'article</h5>
        </MDBBtn>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle} size="lg">
          <MDBModalHeader toggle={this.toggle} className="p-3">
            {this.props.article.titre}
          </MDBModalHeader>
          <img
            className="img-fluid p-3 z-depth-0 "
            src={this.props.article.image}
            alt=""
          />
          <MDBModalBody>
           
            <div className="">
            {this.props.article.text}
              <p className="text-right mb-3 mt-3">
                <a href="#!" className="font-weight-bold  ">
                  {this.props.article.editeur}
                </a>
                ,
                {moment(this.props.article.date_creation).format("YYYY/MM/DD")}
              </p>
            </div>

            <div>
            <hr></hr>
                <h3 className="font-weight-bold ">Commentaire</h3>
                <hr></hr>
           
              <div className="d-flex">
                <div>
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(18)-mini.jpg"
                    alt=""
                    className="rounded-circle mr-3"
                  />
                </div>
                <div>
                  <div>
                    <a href="#!" className="name">
                      Lili Rose
                    </a>
                   
                  </div>
                  <div >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Vero inventore, iste quas libero eius? Vitae sint neque
                    animi alias sunt dolor, accusantium ducimus, non placeat
                    voluptate.
                  </div>
                  <div >
                    <span className="mt-2  text-info">25/02/2021 18:25</span>
                  </div>
                </div>
              </div>
            </div>
          </MDBModalBody>

          <MDBModalFooter>
            <MDBBtn color="success" onClick={this.toggle}>
              Fermer
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;
