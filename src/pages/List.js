import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import UserList from "../components/UserList";
<<<<<<< HEAD
import { useNavigate } from "react-router";
import { axiosInstance } from "../api/api";
=======
>>>>>>> a2b7277 (Feat: list get API 연결)

const List = () => {
  const navigate = useNavigate();
  const [verify, setVerify] = useState(false);

  const verifyJWT = async () => {
    try {
      const response = await axiosInstance.get("/auth/kakao/verify", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setVerify(true);
      console.log(response.data);
    } catch (error) {
      alert("로그인 ㄱㄱ");
      navigate("/");
    }
  };

  useEffect(() => {
    verifyJWT();
  }, []);

  return (
    <>
      <Navbar />
<<<<<<< HEAD
      {verify && (
        <ListWrapper>
          <ListContainer>
            <UserList />
          </ListContainer>
        </ListWrapper>
      )}
=======
      <ListWrapper>
        <ListContainer>
          <UserList />
        </ListContainer>
      </ListWrapper>
>>>>>>> a2b7277 (Feat: list get API 연결)
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
