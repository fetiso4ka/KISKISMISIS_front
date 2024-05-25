import React from "react";
import { useState } from "react";
import './login.scss'
import Header from "../../components/Header/Header";
import Cal from "../../components/Cal";
const Calendar = () => {
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
          
          <span> <a href="http://localhost:5173">Выйти из календаря</a></span><button href="/Settings"><img className="frame-icon" alt="" src="/settings.png" /></button>
          
         
        </div>

      </div>
      <Cal />
      
    </main>
    
  );
};

export default Calendar;
