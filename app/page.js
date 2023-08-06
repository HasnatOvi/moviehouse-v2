'use client';
import App from "@/app/App";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {store} from "@/store/store";
import React from "react";
import './App.css'
export default function Home() {
  return (
      <Provider store={store}>
              <App />
      </Provider>
  )
}
