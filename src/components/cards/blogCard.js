import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBBtn, MDBCardHeader, MDBIcon, MDBMedia } from "mdbreact";
export class blogCard extends Component {
  render() {
    return (
      <div>
        <MDBCardHeader className="border bg-light  font-weight-bold d-flex   ">
          <p className="mr-4 mb-0">
            <p>
              by
              <a href="#!" className="text-success">
                <strong>{this.props.el.editeur}</strong>
              </a>
              
            </p>
            <p>{this.props.el.date_creation}</p>
          </p>
          <ul className="list-unstyled list-inline mb-0 text-dark">
            <li className="list-inline-item mr-3">
              <MDBIcon className="mr-2" icon="envelope" />
              Evoyer message
            </li>
            <li className="list-inline-item mr-3 ">
              <MDBIcon className="mr-2" icon="user" />
              Voir commentaires
            </li>
           
          </ul>
        </MDBCardHeader>
      
        <MDBMedia className="p-2 text-dark bg-white ">
      
          <MDBMedia body>
            <h3 className="font-weight-bold text-success ">{this.props.el.titre}</h3>
            <ul className="list-unstyled list-inline mb-2 pt-1">
              <li className="list-inline-item">
                <MDBIcon fab className="white-text" size="lg" icon="facebook" />
              </li>
              <li className="list-inline-item">
                <MDBIcon fab className="white-text" size="lg" icon="twitter" />
              </li>
              <li className="list-inline-item">
                <MDBIcon
                  fab
                  className="white-text"
                  size="lg"
                  icon="google-plus"
                />
              </li>
              <li className="list-inline-item">
                <MDBIcon fab className="white-text" size="lg" icon="linkedin" />
              </li>
              <li className="list-inline-item">
                <MDBIcon fab className="text-white" size="lg" icon="instagram" />
              </li>
            </ul>
         
        <div className="text ">
       {this.props.el.text}
        </div>
   
          
          </MDBMedia>
         
        </MDBMedia>
        <MDBMedia body>
            <MDBBtn className="w-100 m-0" color="light">lire l'article</MDBBtn>
          </MDBMedia>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(blogCard);
