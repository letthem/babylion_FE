import React from "react";
import styled from "styled-components";
import login_button from "./../assets/login_button.png";

const KakaoLogin = () => {
  const Rest_api_key = process.env.REACT_APP_KAKAO_API_KEY; // REST API KEY
  const redirect_uri = process.env.REACT_APP_KAKAO_REDIRECT_URI; // Redirect URI
  // Oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  // 인가코드 post로 보내드리기

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <>
      <Img src={login_button} alt="login" onClick={handleLogin} />
    </>
  );
};

export default KakaoLogin;

const Img = styled.img`
  cursor: pointer;
`;
