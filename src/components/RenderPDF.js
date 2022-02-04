import React, { useEffect } from "react";
import Preview from "./Preview";
import PrintProvider, { Print } from "react-easy-print";

const RenderPDF = (props) => {
  useEffect(() => {
    window.print();
  }, []);

  return (
    <PrintProvider>
      <Print>
        <Preview
          contact={props.contact}
          experience={props.experience}
          education={props.education}
          userExperience={props.userExperience}
          userEducation={props.userEducation}
          handleModifications={props.handleModifications}
        />
      </Print>
    </PrintProvider>
  );
};

export { RenderPDF };
