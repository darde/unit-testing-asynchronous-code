import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GlobalStyle from './styles/global';
import App from './App';

const StyledApp = () => (
  <>
    <GlobalStyle />
    <App />
  </>
)

ReactDOM.render(<StyledApp />, document.getElementById('root'));
