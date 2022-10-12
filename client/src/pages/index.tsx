import Footer from "../components/Footer";
import React, { useState } from 'react';
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Editor from "../pages/Editor";

function HomePage() {

  const [documents, setDocuments] = useState([]);
  const [edit, setEdit] = useState(0);
  const [curButton, setButton] = useState(-1);

  const setDoc = (input, ind) => {
    let temp = documents
    if (ind == -1) {
      temp.push([input])
    } else {
      temp[ind] = input
      setButton(-1)
    }
    setDocuments(temp)
  }

  return (
    (edit == 0) ?
      <>
        <Navbar toEdit={setEdit}/>
        <Header />
        <Footer change={setButton} toEdit={setEdit} docs={documents} />
      </>
    :
      <>
        <Editor ind={curButton} mess={(curButton != -1? documents[curButton]: "")} addToDoc={setDoc} toEdit={setEdit}/>
      </>
  );
}

export default HomePage;
