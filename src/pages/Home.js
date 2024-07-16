import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeContainer>
        <h1>HONGIK LIKELION 🦁</h1>
        <h2>social login</h2>

        <div style={{ display: "inline-block" }}>
          <br />
          <p>다른 사람의 프로필을 보고 싶으신가요?</p>
          <br />
          <p>
            &rarr;&nbsp; <LoginText>카카오 로그인</LoginText>&nbsp;하세요 !
          </p>
        </div>
      </HomeContainer>
    </>
  );
};

export default Home;

const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;

  h1 {
    color: white;
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  h2 {
    color: #ffa07a;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }
  p {
    color: white;
    font-size: 1.1rem;
  }
`;

const LoginText = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: #ffa07a;
  &:hover {
    color: #ffcfbc;
    transition: 0.5s;
    cursor: pointer;
  }
`;
