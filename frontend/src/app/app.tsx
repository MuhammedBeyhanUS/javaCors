// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import {useState, useEffect} from "react";

export function App() {

  const [BEmessage, setBEMessage] = useState("Empty!");
  useEffect(()=>{
    const api = async ()=>{
    const data = await fetch("http://localhost:8080/hi");
    const jsonData = await data.json();
    setBEMessage(jsonData["content"])
    }
    api();
  },[])

  return (
    <div>
    <h1> Massage recieved;</h1>
    <p>{BEmessage}</p>
    </div>
  );
}

export default App;
