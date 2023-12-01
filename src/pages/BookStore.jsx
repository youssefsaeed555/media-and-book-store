import React from "react";
import Addform from "../components/shared/AddForm";
import PostContainer from "../components/Book/BookContainer";
import Container from "../components/shared/Container";
import HeaderBook from "../components/shared/Header";

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
