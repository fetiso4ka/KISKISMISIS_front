import BenefitHeaders from "./BenefitHeaders";
import PropTypes from "prop-types";
import "./FrameComponent.css";
import React from "react";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`welcome-message-wrapper ${className}`}>
      <div className="welcome-message">
        <h3 className="travel">
          Добро пожаловать в сервис управления промо-календарём МТС Travel!
        </h3>
        <div className="promo-benefits">
          <div className="benefit-description">
            <div className="div8">
              Здесь вы сможете создать и настроить промо-календарь с учетом
              прогноза направления поездок, бюджета поездки, предпочтений
              пользователей и других факторов, а принять лучшее решение поможет
              искусственный интеллект.
            </div>
            <BenefitHeaders
              prop="Получайте рекомендации"
              prop1="по планированию промо-"
              prop2="активностей на основе данных"
              prop3="о спросе на определенные"
              prop4="направления или категории"
              prop5="поездок "
              prop6="Рекомендации"
            />
            <div className="benefit-headers1">
              <div className="btn-parent">
                <div className="btn" />
                <div className="div9">
                  <p className="p9">{`Отслеживайте статистику `}</p>
                  <p className="p10">{`по запущенным промо `}</p>
                  <p className="p11">в реальном времени</p>
                  <p className="p12"> и при необходимости</p>
                  <p className="p13">корректируйте план в один клик</p>
                </div>
              </div>
              <div className="frame5">
                <div className="div10" />
                <div className="div11">Статистика</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
