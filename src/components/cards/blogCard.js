import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBContainer, MDBCardHeader, MDBIcon, MDBMedia } from "mdbreact";
export class blogCard extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBCardHeader className="border-0  font-weight-bold d-flex justify-content-between ">
          <p className="mr-4 mb-0">
            <p>
              by
              <a href="#!" className="text-warning">
                <strong>Carine Fox</strong>
              </a>
              , 19/08/2018
            </p>
          </p>
          <ul className="list-unstyled list-inline mb-0 text-dark">
            <li className="list-inline-item mr-3">
              <MDBIcon className="mr-2" icon="envelope" />
              Send message
            </li>
            <li className="list-inline-item mr-3 ">
              <MDBIcon className="mr-2" icon="user" />
              See profile
            </li>
            <li className="list-inline-item mr-3">
              <MDBIcon className="mr-2" icon="rss" />
              Follow
            </li>
          </ul>
        </MDBCardHeader>
        <MDBMedia className="p-4 searchbar text-white">
          <MDBMedia>
            <img
              className="card-img-100  d-flex z-depth-1 mr-3"
              src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
              alt=""
            />
          </MDBMedia>
          <MDBMedia body>
            <h5 className="font-weight-bold text-warning mt-0">Danny Newman</h5>
            <ul className="list-unstyled list-inline mb-2 pt-1">
              <li className="list-inline-item">
                <MDBIcon fab className="grey-text" size="lg" icon="facebook" />
              </li>
              <li className="list-inline-item">
                <MDBIcon fab className="grey-text" size="lg" icon="twitter" />
              </li>
              <li className="list-inline-item">
                <MDBIcon
                  fab
                  className="grey-text"
                  size="lg"
                  icon="google-plus"
                />
              </li>
              <li className="list-inline-item">
                <MDBIcon fab className="grey-text" size="lg" icon="linkedin" />
              </li>
              <li className="list-inline-item">
                <MDBIcon fab className="grey-text" size="lg" icon="instagram" />
              </li>
            </ul>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
              tenetur sit voluptatem molestias ad neque veritatis! Alias natus,
              nobis laudantium, veritatis, atque illum ipsam nisi voluptas
              nesciunt harum laborum perspiciatis!
            </p>
          </MDBMedia>
        </MDBMedia>
      </MDBContainer>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(blogCard);
