import { cibGithub, cibLinkedin } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CFooter, CLink } from "@coreui/react";
import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <CFooter>
      <div>
        <span>DCastroAndrich&copy; 2021</span>
      </div>
      <div>
        
          <CLink href="https://github.com/DCastroAndrich" target="blank">
            <CIcon icon={cibGithub} size="xxl" />
          </CLink>
        

        
          <CLink href="https://www.linkedin.com/in/dcastroandrich/" target="blank">
            <CIcon icon={cibLinkedin} size="xxl" />
          </CLink>
      </div>
    </CFooter>
  );
};

export default Footer;
