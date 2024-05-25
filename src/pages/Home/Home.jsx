import React from "react";
import FrameComponent from "../../components/FrameComponent.jsx";
import BenefitHeaders from "../../components/BenefitHeaders.jsx";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className="div">
      <div className="frame">
        <div className="frame-child" />
      </div>
      <button className="div1">Войти</button> onClick={()=>navigate("/Calendar")}
      <div className="frame1">
        <img className="image-11-icon" alt="" src="/image-11@2x.png"/>
      </div>
      <main className="main-container">
        <section className="building" />
        <section className="frame2">
          <footer className="frame-item" />
          <img className="frame-icon1" alt="" src="/frame@2x.png" />
        </section>
      </main>
      <header className="child" >
        <div className="image-icon-container">
            <img src='/logo.png' alt="logo"/>
        </div>
      </header>
      <div className="frame3">
        <FrameComponent />
        <textarea
          className="frame-inner"
          placeholder="Создайте свое первое промо прямо сейчас"
          rows={19}
          cols={66}
        />
        <div className="assistant-description-parent">
          <BenefitHeaders
            prop="Используйте возможности"
            prop1="ИИ-помощника, чтобы получить"
            prop2="прогноз направлений"
            prop3="путешествий и автоматически"
            prop4="заполнить промо-календарь"
            prop5="материалами"
            prop6="ИИ-помощник"
            propBottom="unset"
            propLeft="unset"
            propTop="0px"
            propRight="-149px"
            propWidth="204px"
            propFlex="1"
            propWidth1="204px"
          />
          <div className="frame4">
            <button className="rectangle-parent" onClick={()=>navigate("/login")}>
              <div className="rectangle-div" />
              <div className="div2">Поехали</div>
              <div className="group-wrapper">
                <img className="group-icon" alt="" src="/group.svg" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="rectangle-group">
        <div className="frame-child1" />
        <div className="auth-content">
          <div className="auth-description">
            <div className="parent">
              <div className="div3">
                <p className="p">Авторизуйтесь, чтобы получить</p>
                <p className="p1">{`доступ ко всем возможностям `}</p>
                <p className="p2">личного кабинета</p>
              </div>
              <div className="login-form">
                <div className="login-form-container">
                  <div className="input-fields">
                    
                  </div>
                  <div className="auth-options">
                    <div className="auth-buttons">
                      <div className="group">
                        <div className="div4">Вход</div>
                        <div className="div5">Регистрация</div>
                      </div>
                    </div>
                    <div className="login-field">
                      <div className="login-field-child" />
                      <input
                        className="input"
                        placeholder="Логин"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="password-field">
                  <div className="password-field-child" />
                  <input className="input1" placeholder="Пароль" type="text" />
                </div>
                <button onClick={()=>navigate("/Calendar")}><div className="login">Войти</div></button> 
              </div>
            </div>
          </div>
          <textarea className="bottom-divider" rows={19} cols={21} />
        </div>
      </div>
    </div>
    
  );
};


export default Home;