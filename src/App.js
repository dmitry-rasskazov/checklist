import Header from './Components/Header'
import List from "./Components/List";
import {useState} from "react";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// Bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css';

const APPLICATION_NAME = 'Checklist';
const STORAGE_KEY_NAME = 'checklist-data';

async function storeData(value)
{

}

async function readData()
{
  return [];
}

function App()
{
  const [items, setItems] = useState([]);

  readData().then(result => setItems(result));

  return [<Header key={APPLICATION_NAME+"-Header"} applicationName={APPLICATION_NAME} />, <List key={APPLICATION_NAME+"-List"} itemsInfoList={items} onChange={storeData} />];
}

export default App;
