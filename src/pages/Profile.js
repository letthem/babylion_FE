import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { axiosInstance } from "../api/api";
import { useNavigate } from "react-router";

const Profile = () => {
  const navigate = useNavigate();
  const [verify, setVerify] = useState(false);
  const [id, setId] = useState();
  const [nickname, setNickname] = useState();
  const [description, setDescription] = useState();
  const [age, setAge] = useState();
  const [mbti, setMBTI] = useState("");
  const [myInfo, setMyInfo] = useState({});
  const [message, setMessage] = useState("");

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleMBTIChange = (e) => {
    setMBTI(e.target.value);
  };

  const verifyJWT = async () => {
    try {
      const response = await axiosInstance.get("/auth/verify", {
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

  const getMyInfo = async () => {
    const access_token = localStorage.getItem("accessToken");

    try {
      const response = await axiosInstance.get("/users", {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setMyInfo(response.data);
      console.log(myInfo);
    } catch (error) {
      console.error("Failed to load my information", error);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await axiosInstance.patch(
        "/users",
        {
          id: id,
          nickname: nickname,
          description: description,
          age: age,
          mbti: mbti,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      console.log("Success:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    verifyJWT();
    getMyInfo();
  }, []);

  return (
    <>
      <Navbar />
      {verify && (
        <Body>
          <MyInfo>My Info</MyInfo>
          <InfoContainer>
            <MyImg alt="img" />
            <DetailBox>
              <InfoDetail>닉네임</InfoDetail>
              <InfoDetail>
                나이 <div>{myInfo.age}</div>
                <Input type="number" value={age} onChange={handleAgeChange} />
              </InfoDetail>
              <InfoDetail>
                MBTI
                <Input type="text" value={mbti} onChange={handleMBTIChange} />
              </InfoDetail>
            </DetailBox>
          </InfoContainer>

          <EditBtn onClick={handleUpdate}>내 정보 수정하기</EditBtn>
        </Body>
      )}

      {/* post로 추가 정보 입력 */}
      {/* patch로 정보 수정 */}
    </>
  );
};

export default Profile;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 79px;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: black;
`;

const DetailBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const MyInfo = styled.span`
  font-size: 25px;
  font-weight: 700;
  color: lightsalmon;
`;

const InfoDetail = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 18px;
  margin: 20px;
  color: white;
`;

const MyImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  margin: 0 20px;
  border: none;
  color: white;
`;

const InfoContainer = styled.div`
  display: flex;
  margin: 30px 0;
`;

const Input = styled.input`
  width: 200px;
  height: 30px;
  margin: 0 20px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid white;
`;

const EditBtn = styled.button`
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightsalmon;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  margin: 0 5px;
`;
