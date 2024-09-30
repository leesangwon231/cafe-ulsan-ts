import React from 'react';
import "./Footer.css"
const Footer = () => {
  return (
      <div className={"footer"}>
        <div className={"info"}>
          <div className={"info_left"}>
            <ul>
              <li>이용약관</li>
              <li>개인정보처리방침</li>
            </ul>
            <p>
              작괘원림
              <span></span>
              대표. ooo
              <span></span>
              사업자등록번호. 000-00-00000
              <span></span>
              주소.00000 00 000 00000 00
            </p>
            <p>
              Tel. 0000-0000
              <span></span>
              Fax. (000) 000-0000
              <span></span>
              Email. werggf@naver.com
            </p>
          </div>
          <div className={"info_right"}>
            <span>0000-0000</span>
            <p>문의시간 0000-0000</p>
            <div>
              여기는 인스타 페북 유튜브
            </div>
          </div>
        </div>
      </div>
  );
}

export default Footer;