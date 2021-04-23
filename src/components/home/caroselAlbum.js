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
      className="z-depth-0 p-2 "
      slide
      multiItem
      interval={2000}
    >
      {" "}
      <MDBCarouselInner className=" z-depth-0 p-5">
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
                      className="img-fluid "
                      width="155px"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcrBYePb31y4bDvRaD9Y661IZss3SnYvjIeg&usqp=CAU"
                    />
                    <MDBCardTitle> {el}</MDBCardTitle> <span>Artiste</span>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol size="4">
                <MDBCard className=" z-depth-0 text-center ">
                  <MDBCardBody>
                    <MDBCardImage
                      className="img-fluid "
                      width="155px"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcrBYePb31y4bDvRaD9Y661IZss3SnYvjIeg&usqp=CAU"
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
