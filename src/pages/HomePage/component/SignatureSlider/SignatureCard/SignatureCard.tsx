import React from 'react';
import {MenuInfo} from "../../../../../model/menu";
import "./SignatureCard.css"
interface SignatureMenuType {
    signatureMenu : MenuInfo
}


const SignatureCard:React.FC<SignatureMenuType> = ({signatureMenu}) => {
  return (
    <div className={"Signature_Card"}>
        <img src={signatureMenu?.image} alt={"시그니쳐 메뉴"}/>
        <h3>{signatureMenu?.name}</h3>
        <span>{signatureMenu?.description}</span>
    </div>
  );
}

export default SignatureCard;