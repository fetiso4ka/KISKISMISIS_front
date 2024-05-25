import React from "react";
import { useState } from "react";
import "./login.scss";
import Header from "../../components/Header/Header";
import Auth from "./Auth";
import Register from "./Register";
const Login = () => {
  const [isReg, setIsReg] = useState(true);
  const changeMode = () => {
    setIsReg(!isReg);
};
  return (
    <main>
      <Header/>
      <div className="content">
        <div className="head_form">
          <div className="arrow">
            <img src="/Arrow.svg" alt="arrow"/>
          </div>
          <span>Вернуться на главную</span>
        </div>
        <div className="mainform">
          {isReg ? <Auth changeMode={changeMode} /> : <Register changeMode={changeMode} />}   
        </div>
      </div>
    </main>
  );
};

export default Login;
