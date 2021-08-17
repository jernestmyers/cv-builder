import React from "react";
import ReactDOM from "react-dom";
import { PDFViewer } from "@react-pdf/renderer";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "white",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
const CV = (props) => {
  const state = props.state;
  return (
    <PDFViewer>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Pardon, this feature is under construction!</Text>
            {/* <Text>{state.contact.fullName}</Text>
            <Text>{state.contact.phoneNumber}</Text>
            <Text>{state.contact.address}</Text>
            <Text>{state.contact.email}</Text>
            <Text>{state.contact.portfolio}</Text>
            <Text>{state.contact.linkedIn}</Text>
            <Text>{state.contact.aboutMe}</Text> */}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

const HandlePdfState = (props) => {
  const state = props.state;
  const RenderPDF = () => {
    ReactDOM.render(<CV state={state} />, document.getElementById("root"));
  };

  return <button onClick={RenderPDF}>Generate PDF</button>;
};

export { HandlePdfState };
