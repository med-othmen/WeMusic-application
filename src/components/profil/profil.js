import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBAlert } from "mdbreact";
import { userActions } from "../actions/useractions";
import Adress from "../modals/adressModal";
import axios from "axios";
export class profil extends Component {
  state = {
    pass: this.props.password,
    adress: [],
  };
  onHandleupdate = (event) => {
    event.preventDefault();

    let email = event.target.email.value;
    let nom = event.target.nom.value;
    let prenom = event.target.prenom.value;
    let telephone = event.target.telephone.value;
    let password = event.target.password.value;
    let active = this.props.user.active;
    let picture = "this.props.user.pciture";
    let id = this.props.user.id;
    console.log(email, password, nom, prenom, telephone, active);
    this.props.update({
      email,
      password,
      nom,
      prenom,
      telephone,
      picture,
      active,
      id,
    });
  };
  componentDidMount() {
    axios
      .get("http://localhost:2000/data/adress/getone/" + this.props.user.id)
      .then(
        (response) => {
          if (response.data.ok === true) {
            this.setState({ adress: response.data.adress });
          } else {
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }
  render() {
    console.log(this.state.adress);
    return (
      <MDBContainer className="bg2 index_geuss">
        {this.props.alert.message && (
          <MDBAlert dismiss className="mt-4" color={this.props.alert.type}>
            {this.props.alert.message}
          </MDBAlert>
        )}
        <form onSubmit={this.onHandleupdate}>
          <MDBRow>
            <MDBCol md="4" className="mb- text-center">
              <img
                src="https://qualium-investissement.com/wp-content/uploads/2017/05/inconnu-small.jpg"
                className="rounded-circle img-fluid p-3 m-0"
                alt="moncoiffeur.tn"
              />
              <div></div>
            </MDBCol>
            <MDBCol md="8">
              <MDBRow>
                <MDBCol md="6" className="mb-3">
                  <label className="grey-text">Prénom</label>
                  <input
                    type="text"
                    name="prenom"
                    className="form-control"
                    required
                    defaultValue={this.props.user.nom}
                  />
                </MDBCol>
                <MDBCol md="6" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    name="nom"
                    className="form-control"
                    required
                    defaultValue={this.props.user.prenom}
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="6" className="mb-3">
                  <label className="grey-text">Adresse email </label>
                  <input
                    name="email"
                    type="text"
                    className="form-control"
                    required
                    defaultValue={this.props.user.email}
                  />
                </MDBCol>
                <MDBCol md="6" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Numéro télephone
                  </label>
                  <input
                    name="telephone"
                    type="text"
                    id="defaultFormRegisterPasswordEx4"
                    className="form-control"
                    required
                    defaultValue={this.props.user.telephone}
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="6" className="mb-3">
                  <label className="grey-text">Mot de passe </label>
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    required
                    onChange={(e) => this.setState({ pass: e.target.value })}
                  />
                </MDBCol>
                <MDBCol md="6" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Confirmer mot de passe
                  </label>
                  <input
                    disabled
                    name="confirm_password"
                    type="passwordconfirme"
                    id="defaultFormRegisterPasswordEx4"
                    className="form-control"
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="6" className="mb-3 text-left p-0">
                  <Adress adress={this.state.adress} id={this.props.user.id} />
                </MDBCol>
                <MDBCol md="6" className="mb-3 text-right">
                  <MDBBtn color="success" className="z-depth-0 " type="submit">
                    Sauvegarder
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.authentication.user,
  alert: state.alert,
});

const mapDispatchToProps = (dispatch) => ({
  update: (user) => dispatch(userActions.update(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(profil);
