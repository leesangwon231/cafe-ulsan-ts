import React from 'react';
import "./Summary.css"

interface SummaryType{
    summaryImage : string;
}
const Summary:React.FC<SummaryType> = ({summaryImage}) => {
  return (
      <div className={"Summary"}>
          <div className="Summary_image" style={{backgroundImage: `url(${summaryImage})`}}>
          </div>
          <div className="Summary_black">
              <h3 data-aos="fade-up">" 뻔하지 않은, 어딘가는 조금 다른 작괘원림 "</h3>
          </div>
      </div>
  );
}

export default Summary;