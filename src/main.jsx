import React from "react";
import ReactDOM from 'react-dom/client';
import { App } from "./HelloWorldApp";
import { FirstApp } from "./FirstApp";
import { CounterApp } from "./ConuterApp";
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <CounterApp value={ 100 }/>
    </>
)