import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBCardImage,
} from "mdbreact";
let Arr = [1, 2, 3, 4, 5, 6, 7];
const CarouselPage = () => {
  return (
    <MDBCarousel
      activeItem={1}
      length={7}
      showControls={false}
      testimonial={true}
      showIndicators={true}
      className="z-depth-0 "
      slide
      multiItem
      interval={2000}
    >
      {" "}
      <MDBCarouselInner className=" z-depth-0 ">
        {Arr.map((el, id) => (
          <MDBCarouselItem itemId={id + 1}>
            <MDBRow>
              <MDBCol size="4">
                <MDBCard className=" z-depth-0 text-center ">
                  <MDBCardBody>
                    {" "}
                    <MDBCardImage
                      className="img-fluid "
                      width="155px"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcrBYePb31y4bDvRaD9Y661IZss3SnYvjIeg&usqp=CAU"
                    />
                    <MDBCardTitle> {el}</MDBCardTitle>
                    <span>Artiste</span>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol size="4">
                <MDBCard className="  z-depth-0 text-center">
                  <MDBCardBody>
                    {" "}
                    <MDBCardImage
                      className="img-fluid mb-3"
                      width="180px"
                      src="https://previews.123rf.com/images/doomu/doomu1907/doomu190700135/127596811-old-vintage-audio-cassette-tape-mock-up-in-clay-style-on-a-white-background-3d-rendering.jpg"
                    />
                    <MDBCardTitle> {el}</MDBCardTitle> <span>Artiste</span>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol size="4">
                <MDBCard className=" z-depth-0 text-center ">
                  <MDBCardBody>
                    {" "}
                    <MDBCardImage
                      className="img-fluid"
                      width="135px"
                      src="https://lh3.googleusercontent.com/proxy/S3wIkPBTR4ObVj609QIRhhOMrwSovmtdOch9Bac2l4TTjkGHILasUwgSdU5bc6flN7L8X4Qr3Fn38Bo_6TV4ctKNCiTV7SLOaHe8zk4"
                    />
                    <MDBCardTitle>{el}</MDBCardTitle> <span>Artiste</span>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCarouselItem>
        ))}
      </MDBCarouselInner>{" "}
    </MDBCarousel>
  );
};

export default CarouselPage;
