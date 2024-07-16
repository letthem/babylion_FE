import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../api/api";

const Auth = () => {
  const navigate = useNavigate();
  const code = new URL(document.location).searchParams.get("code");

  const sendVerified = async () => {
    try {
      const response = await axiosInstance.post("/auth/kakao/login", {
        access_code: code,
      });
      if (response.status === 200) {
        console.log(response.data);
        localStorage.setItem("accessToken", response.data.access_token);
        localStorage.setItem("refreshToken", response.data.refresh_token);
        navigate("/list");
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        if (error.response.status === 404) {
          try {
            const registerResponse = await axiosInstance.post(
              "/auth/kakao/register",
              {
                access_code: code,
                description: "welcome",
              }
            );
            if (registerResponse.status === 200) {
              localStorage.setItem(
                "accessToken",
                registerResponse.data.access_token
              );
              localStorage.setItem(
                "refreshToken",
                registerResponse.data.refresh_token
              );
              navigate("/list");
            }
          } catch (registerError) {
            console.error("Registration failed", registerError);
          }
        } else if (error.response.status === 401) {
          alert("인증 실패");
        }
      } else {
        console.error("Unexpected error", error);
      }
    }
  };

  useEffect(() => {
    if (code) {
      sendVerified();
    } else {
      console.error("No code found in URL");
      navigate("/");
    }
  }, [code, navigate]);

  return <div>Loading...</div>;
};

export default Auth;
