import "./CampaignTypeInput.css";

const CampaignTypeInput = ({
  className = "",
  line11,
  line12,
  line111,
  line121,
}) => {
  return (
    <div className={`campaign-type-input ${className}`}>
      <div className="campaign-duration">
        <div className="div9">Недели</div>
        <div className="campaign-duration-child" />
        <div className="campaign-duration-input">
          <div className="line-parent">
            <img className="line-icon" alt="" src={line11} />
            <img className="frame-child1" alt="" src={line12} />
          </div>
        </div>
      </div>
      <div className="frame-div">
        <div className="rectangle-div" />
        <div className="div10">1</div>
        <div className="frame-wrapper">
          <div className="line-group">
            <img className="frame-child2" alt="" src={line111} />
            <img className="frame-child3" alt="" src={line121} />
          </div>
        </div>
      </div>
    </div>
  );
};

CampaignTypeInput.propTypes = {
  className: PropTypes.string,
  line11: PropTypes.string,
  line12: PropTypes.string,
  line111: PropTypes.string,
  line121: PropTypes.string,
};

export default CampaignTypeInput;