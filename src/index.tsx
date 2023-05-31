import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ChannelListNav from './components/ChannelList';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { Switch } from 'react-router-dom';

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
          <Switch>
            <Route />
            <Route />
          </Switch>
        </Container>
      </main>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
