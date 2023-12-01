import React from "react";
import Addform from "../components/shared/AddForm";
import PostContainer from "../components/Book/BookContainer";
import Container from "../components/shared/Container";

function BookStore() {
  return (
    <>
      <Container>
        <Addform />
        <PostContainer />
      </Container>
    </>
  );
}

export default BookStore;
