import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ChannelListNav from './components/ChannelList';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { Routes } from 'react-router-dom';

const Home = () => {
  return ( 
    <p>HOME</p> 
  );
}
const Contents = () => {
  return (
    <p>内容</p>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* The rest of your app goes here */}
      <ChannelListNav />
      <main style={{margin: '1rem 0 1rem 16rem'}}>
        <Container>
          {/* Routingで表示内容が切り替わる部分 */}
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/channels/:channelName'
              element={<Contents />}
            />
          </Routes>
        </Container>
      </main>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
