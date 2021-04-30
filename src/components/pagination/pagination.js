import React from "react";
import { MDBPagination, MDBPageItem, MDBPageNav} from "mdbreact";
const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  console.log(currentPage);
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (


    <MDBPagination color="dark" size="lg" className="border-0 m-0 bg-light">
        <MDBPageItem >
          <MDBPageNav aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </MDBPageNav>
        </MDBPageItem>
      {pageNumbers.map((number) => (
            <MDBPageItem active={currentPage===number?true:false}>
            <MDBPageNav onClick={() => paginate(number)} >
              {number} 
            </MDBPageNav>
          </MDBPageItem>
        
         
        ))}
        <MDBPageItem>
          <MDBPageNav>
            &raquo;
          </MDBPageNav>
        </MDBPageItem>
      </MDBPagination>
  
  );
};

export default Pagination;

