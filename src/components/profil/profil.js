import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBAlert } from "mdbreact";
import { userActions } from '../actions/useractions'
import { Link } from "react-router-dom";
export class profil extends Component {
    state = {
        pass: this.props.password
    }
    onHandleupdate = (event) => {
        event.preventDefault();

        let email = event.target.email.value;
        let nom = event.target.nom.value;
        let prenom = event.target.prenom.value;
        let telephone = event.target.telephone.value;
        let password = event.target.password.value;
        let active = this.props.user.active
        let picture ="this.props.user.pciture"
        let id=this.props.user.id
        console.log(email, password, nom, prenom, telephone, active)
        this.props.update({
            email, password, nom, prenom, password, telephone,picture, active,id
        });
    }
    render() {
        return (

            <MDBContainer className="bg2 index_geuss">
           
                {this.props.alert.message &&
                            <MDBAlert dismiss className="mt-4" color={this.props.alert.type}>{this.props.alert.message}</MDBAlert>
                        }
                <form onSubmit={this.onHandleupdate}>
                    <MDBRow>
                        <MDBCol md="4" className="mb- text-center">
                            <img
                                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                                className="rounded-circle img-fluid p-3 m-0"
                                alt="moncoiffeur.tn"

                            />
                            <div>

                            </div>
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
                                        defaultValue={this.props.user.password}

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
                                        disabled={this.state.pass !== this.props.password ? false : true}
                                        name="confirm_password"
                                        type="password"
                                        id="defaultFormRegisterPasswordEx4"
                                        className="form-control"
                                        required

                                    />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md="6" className="mb-3">
                                <Link to="/">
                                    <MDBBtn color="light" className="z-depth-0">Annuler</MDBBtn>
                                    </Link>
                                </MDBCol>
                                <MDBCol md="6" className="mb-3 text-right">
                                    <MDBBtn
                                        color="success"
                                        className="z-depth-0 "
                                        type="submit"
                                    >
                                        Sauvegarder
              </MDBBtn>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol></MDBRow>
                </form>
            </MDBContainer>

        )
    }
}

const mapStateToProps = (state) => ({
    user: state.authentication.user,
    alert:state.alert

})

const mapDispatchToProps = (dispatch) => ({
    update: (user) => dispatch(userActions.update(user))


})


export default connect(mapStateToProps, mapDispatchToProps)(profil)


/*
     <MDBRow>
                    <h1>Mon profil</h1>
                </MDBRow>
                <hr></hr>
                */