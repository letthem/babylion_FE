import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import ListItem from "../components/ListItem";

const List = () => {
  return (
    <>
      <Navbar />
      <ListWrapper>
        <ListContainer>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </ListContainer>
      </ListWrapper>
    </>
  );
};

export default List;

const ListWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: black;
`;
const ListContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8rem;
  overflow-y: auto;
  width: 100%;
`;
