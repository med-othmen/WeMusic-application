import React, { Component } from "react";
import { connect } from "react-redux";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBRow,
  MDBCol,
  MDBModalFooter,
} from "mdbreact";
import axios from "axios";
export class AdressModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      adress:[]
    };
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  Updateadress(){
      axios.post("http://localhost:2000/data/adress/add",{
          nom_complet:this.state.nom_complet,
          numero_nom_rue:this.state.rue,
          complement:this.state.complement,
          code_postal:Number(this.state.code_postal),
          ville:this.state.ville,
          client_id:this.props.id
      }).then(
        (response) => {
          console.log(response.data)
          if (response.data.ok === true) {
            window.location.reload()
          } else {
          
          }
        },
        (error) => {
            console.log(error)
        }
      );
  }

  render() {

    return (
      <MDBContainer>
        <MDBBtn onClick={this.toggle} color="dark" className="z-depth-0 ">
          Mon adresse
        </MDBBtn>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle} size="sm">
          <MDBModalHeader toggle={this.toggle} className="p-5">
            Ajouter votre adress
          </MDBModalHeader>

          <MDBModalBody>
            <MDBContainer>
              <MDBRow>
                <MDBCol md="12" className="mb-3">
                  <label className="grey-text">Nom et prenom</label>
                  <input
                    type="text"
                    name="nom_complet"
                    className="form-control"
                    required
                defaultValue={this.props.adress?this.props.adress.nom_complet:''}
                    onChange={(e) =>
                      this.setState({ nom_complet: e.target.value })
                    }
                  />
                </MDBCol>
                <MDBCol md="12" className="mb-3">
                  <label className="grey-text">Numéro et nom de rue </label>
                  <input
                    name="rue"
                    type="text"
                    className="form-control"
                    required
                    defaultValue={this.props.adress?this.props.adress.numero_nom_rue:''}
                    onChange={(e) => this.setState({ rue: e.target.value })}
                  />
                </MDBCol>
                <MDBCol md="12" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Complement d'adresse
                  </label>
                  <input
                    name="complement"
                    type="text"
                    id="defaultFormRegisterPasswordEx4"
                    className="form-control"
                    required
                    defaultValue={this.props.adress?this.props.adress.complement:''}
                    onChange={(e) =>
                      this.setState({ complement: e.target.value })
                    }
                  />
                </MDBCol>
                <MDBCol md="12" className="mb-3">
                  <label className="grey-text">Code postal </label>
                  <input
                    name="code_postal"
                    type="text"
                    className="form-control"
                    required
                    defaultValue={this.props.adress?this.props.adress.code_postal:''}
                    onChange={(e) =>
                      this.setState({ code_postal: e.target.value })
                    }
                  />
                </MDBCol>
                <MDBCol md="12" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Ville
                  </label>
                  <input
                    name="ville"
                    defaultValue={this.props.adress?this.props.adress.ville:''}
                    id="defaultFormRegisterPasswordEx4"
                    className="form-control"
                    onChange={(e) => this.setState({ ville: e.target.value })}
                  />
                </MDBCol>
            
            </MDBRow>

              <MDBModalFooter>
                <MDBBtn
                  color="light"
                  onClick={this.toggle}
                  className="z-depth-0 text-center w-100"
                >
                  Annuler
                </MDBBtn>

                <MDBBtn
                  color="success"
                  className="z-depth-0  text-center w-100"
                  onClick={()=>this.Updateadress()}
                >
                  Enregistrer
                </MDBBtn>
              </MDBModalFooter>
            </MDBContainer>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AdressModal);
