import React, { Component } from "react";
import { connect } from "react-redux";
import {
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  MDBView,
  MDBContainer,
} from "mdbreact";
import * as moment from "moment";
export class article_sectionHome extends Component {
  render() {
    return (
   <MDBContainer>
        <MDBCardBody className="p-2">
        <MDBRow>
          {this.props.articles.slice(0, 1).map((el) => (
            <MDBCol md="12" lg="6">
              <div className="mb-4">
                <MDBView hover  className="z-depth-0 mb-4">
                  <img className="img-fluid" src={el.image} alt="" />
                  <a href="#!">
                    <MDBMask overlay="white-slight" className="waves-light" />
                  </a>
                </MDBView>
                <div className="d-flex justify-content-between">
                  <p className="font-weight-bold dark-grey-text">
                    <MDBIcon far icon="clock" className="pr-2" />
                    {moment(el.date_creation).format("YYYY/MM/DD")}
                  </p>

                  <h6 className="font-weight-bold text-dark">
                    <MDBIcon icon="book" className="pr-2" />
                    Lire l'article
                  </h6>
                </div>
                <h3 className="font-weight-bold dark-grey-text mb-3 p-0 text-justify">
                  <a href="#!" className="text-success">
                    {" "}
                    {el.titre}
                  </a>
                </h3>
                <p className="dark-grey-text mb-lg-0 mb-md-5 mb-4 text-justify">
                  {el.text}
                </p>
              </div>
            </MDBCol>
          ))}

          <MDBCol md="12" lg="6">
            {this.props.articles.slice(1, 3).map((el) => (
            
                <MDBRow className="mb-4 pb-4  border-bottom">
                  <MDBCol md="3">
                    <MDBView hover  className="z-depth-0  mb-1">
                      <img className="img-fluid " src={el.image} alt="artilce" />
                    </MDBView>{" "}
                    <a href="#!" className="text-dark  p-3 font-weight-bold">
                    <MDBIcon far icon="clock" className="pr-2" />
                      {moment(el.date_creation).format("YYYY/MM/DD")}
                    </a>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold green-text">{el.titre}</p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                          {el.titre}
                        </a>
                      </MDBCol>
                      <a href="#!">
                        <MDBIcon
                          icon="angle-double-right"
                          size="2x"
                          className="text-dark"
                        />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
             
            ))}
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    
   </MDBContainer>);
  }
}

const mapStateToProps = (state) => ({
  articles: state.articles,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(article_sectionHome);
