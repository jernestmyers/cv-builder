import React from "react";
import ReactDOM from "react-dom";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import DisplayExperience from "./DisplayExperience";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
const MyDocument = (props) => {
  console.log(`click`);
  console.log(props);
  console.log(props.state.state.state.userExperience);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <DisplayExperience
            state={props.state.state.state.userExperience}
            handleModifications={props.state.state.handleModifications}
          ></DisplayExperience>
        </View>
      </Page>
    </Document>
  );
};

const ViewPDF = (props) => (
  <PDFViewer>
    <MyDocument state={props} />
  </PDFViewer>
);

const RenderPDF = (props) => {
  // MyDocument(props);
  // Create styles
  // const styles = StyleSheet.create({
  //   page: {
  const renderPdfOnClick = () => {
    ReactDOM.render(<ViewPDF state={props} />, document.getElementById("root"));
  };
  //     flexDirection: "row",
  //     backgroundColor: "#E4E4E4",
  //   },
  //   section: {
  //     margin: 10,
  //     padding: 10,
  //     flexGrow: 1,
  //   },
  // });

  // // Create Document Component
  // const MyDocument = () => {
  //   console.log(`click`);
  //   console.log(props.state.userExperience);
  //   return (
  //     <Document>
  //       <Page size="A4" style={styles.page}>
  //         <View style={styles.section}>
  //           <DisplayExperience
  //             state={props.state.userExperience}
  //             handleModifications={props.handleModifications}
  //           ></DisplayExperience>
  //         </View>
  //       </Page>
  //     </Document>
  //   );
  // };

  // const ViewPDF = () => (
  //   <PDFViewer>
  //     <MyDocument />
  //   </PDFViewer>
  // );

  // const renderPdfOnClick = () => {
  //   ReactDOM.render(<ViewPDF />, document.getElementById("root"));
  // };

  return (
    <button id="generate-pdf" onClick={renderPdfOnClick}>
      Generate PDF
    </button>
  );
};

export default RenderPDF;
