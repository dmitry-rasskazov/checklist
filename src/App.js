import Header from './Components/Header'
import List from "./Components/List";
import { useEffect, useState } from "react";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// Bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css';

const APPLICATION_NAME = 'Checklist';
const STORAGE_KEY_NAME = 'checklist-data';

function storeData(value)
{
    localStorage.setItem(STORAGE_KEY_NAME, JSON.stringify(value))

    console.log("Checklist data stored");
}

function readData()
{
    console.log("Reading data");

    const storedData = localStorage.getItem(STORAGE_KEY_NAME);
    return null === storedData ? [] : JSON.parse(storedData);
}

function App()
{
  return [
      <Header key={APPLICATION_NAME+"-Header"} applicationName={APPLICATION_NAME} />,
      <List key={APPLICATION_NAME+"-List"} itemsInfoList={readData()} onChange={storeData} />,
  ];
}

export default App;
