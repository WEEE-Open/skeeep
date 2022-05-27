import React from "react";
import { Image } from "react-bootstrap";
import translations from "./Translations";
import "./Footer.css";

function Footer(props) {
  return (
    <div className={"footer"}>
      <h5>
        <a href={"https://github.com/weee-open/skeeep"}>
          <Image id={"skeeep-logo"} src={"skeeep.svg"} alt={"skeeep"} />
        </a>
        {"skeeepDescription" in translations[props.lang].footer
          ? translations[props.lang].footer.skeeepDescription
          : translations.en.footer.skeeepDescription}
        <a href={"https://weeeopen.polito.it"}>
          <Image
            id={"weee-open-logo"}
            src={"weee-open.svg"}
            alt={"WEEE Open"}
          />
        </a>
      </h5>
      <h5 className={"skeeell-description"}>
        {"skeeellDiscoverMore" in translations[props.lang].footer
          ? translations[props.lang].footer.skeeellDiscoverMore
          : translations.en.footer.skeeellDiscoverMore}
        <a href={"https://weeeopen.polito.it/skeeell"}>
          <Image id={"skeeell-logo"} src={"skeeell.svg"} alt={"skeeell"} />
        </a>
      </h5>
      <hr />
      <h6>
        {"thirdPartiesDisclaimer" in translations[props.lang].footer
          ? translations[props.lang].footer.thirdPartiesDisclaimer
          : translations.en.footer.thirdPartiesDisclaimer}
      </h6>
    </div>
  );
}

export default Footer;
