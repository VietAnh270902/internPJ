import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import UpdateAsset from './page/updateAsset';
import ReadAsset from './page/readAsset';
import CreateAsset from './page/createAsset';
import ReadAllAssets from './page/readAllAssets';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<Login />} /> */}
        <Route path="/read-All-Assets" element={<ReadAllAssets/>} />
        <Route path="/createAsset" element={<CreateAsset/>} />
        <Route path="/readAsset" element={<ReadAsset/>} />
        <Route path="/updateAsset" element={<UpdateAsset/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
