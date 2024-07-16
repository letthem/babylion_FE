import React from "react";
import styled from "styled-components";
import KakaoLogin from "./KakaoLogin";

const Navbar = () => {
  return (
    <>
      Navbar입니다. Home, List, Profile로 갈 수 있고 로그인 버튼이 있습니다
      <KakaoLogin />
    </>
  );
};

export default Navbar;
