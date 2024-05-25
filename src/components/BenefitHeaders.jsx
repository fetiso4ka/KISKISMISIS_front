import { useMemo } from "react";
import "./BenefitHeaders.css";
import PropTypes from 'prop-types'
import React from "react";

const BenefitHeaders = ({
  className = "",
  prop,
  prop1,
  prop2,
  prop3,
  prop4,
  prop5,
  prop6,
  propBottom,
  propLeft,
  propTop,
  propRight,
  propWidth,
  propFlex,
  propWidth1,
}) => {
  const benefitHeadersStyle = useMemo(() => {
    return {
      bottom: propBottom,
      left: propLeft,
      top: propTop,
      right: propRight,
    };
  }, [propBottom, propLeft, propTop, propRight]);

  const benefitOptionsStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const recommendationBenefitStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const rectangleDivStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={`benefit-headers ${className}`} style={benefitHeadersStyle}>
      <div className="benefit-header-names">
        <div className="header-divider" />
        <div className="div6">
          <p className="p3">{prop}</p>
          <p className="p4">{prop1}</p>
          <p className="p5">{prop2}</p>
          <p className="p6">{prop3}</p>
          <p className="p7">{prop4}</p>
          <p className="p8">{prop5}</p>
        </div>
      </div>
      <div className="benefit-options" style={benefitOptionsStyle}>
        <button
          className="recommendation-benefit"
          style={recommendationBenefitStyle}
        >
          <div
            className="recommendation-benefit-child"
            style={rectangleDivStyle}
          />
          <div className="div7">{prop6}</div>
        </button>
      </div>
    </div>
  );
};

BenefitHeaders.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  prop2: PropTypes.string,
  prop3: PropTypes.string,
  prop4: PropTypes.string,
  prop5: PropTypes.string,
  prop6: PropTypes.string,

  /** Style props */
  propBottom: PropTypes.any,
  propLeft: PropTypes.any,
  propTop: PropTypes.any,
  propRight: PropTypes.any,
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propWidth1: PropTypes.any,
};

export default BenefitHeaders;
