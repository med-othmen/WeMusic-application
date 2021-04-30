import React, { Component } from "react";
import { connect } from "react-redux";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBView,
  MDBMask,
} from "mdbreact";
import * as moment from "moment";
import Article_Modal from "../modals/articleModal";
export class Article extends Component {
  render() {
    return (
      <div>
        <MDBCard className="z-depth-0  ">
          <MDBCardBody>
            <MDBCardTitle tag="h1" className="text-center">
              <h5 className="h1-responsive font-weight-bold ">Articles</h5>
            </MDBCardTitle>
            <hr></hr>
            {this.props.articles.map((el) => (
              <MDBContainer>
                <MDBRow className="p-3">
                  <MDBCol lg="5" xl="4">
                    <MDBView hover>
                      <img
                        className="img-fluid z-depth-0"
                        src={el.image}
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol lg="7" xl="8">
                    <h3 className="font-weight-bold mb-3 p-0">
                      <strong>{el.titre}</strong>
                    </h3>
                    <p className="dark-grey-text">{el.text}</p>
                    <p>
                      <a href="#!" className="font-weight-bold">
                        {el.editeur}
                      </a>
                      , {moment(el.date_creation).format("YYYY/MM/DD")}
                    </p>
                    <Article_Modal article={el} />
                  </MDBCol>
                </MDBRow>
                <hr className="my-3" />
              </MDBContainer>
            ))}
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  articles: state.articles,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
