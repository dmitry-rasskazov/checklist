import Header from './Components/Header'
import List from "./Components/List";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useState} from "react";

const STORAGE_KEY_NAME = 'checklist-data';

async function storeData(value)
{
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(STORAGE_KEY_NAME, jsonValue);
  } catch (exception) {
    console.log(exception);
  }
}

async function readData()
{
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY_NAME);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (exception) {
    console.log(exception);
  }
}

function App()
{
  const [items, setItems] = useState([]);

  readData().then(result => setItems(result));

  return [<Header applicationName={'Checklist'} />, <List itemsInfoList={items} onStore={storeData} />];
}

export default App;
