import React from 'react';
import ReactDOM from 'react-dom';
import awesomeFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
import entypoFont from 'react-native-vector-icons/Fonts/Entypo.ttf';
import './index.css'; //eslint-disable-line
import App from './App'; //eslint-disable-line

const awesomeFontStyles = `@font-face {
  src: url(${awesomeFont});
  font-family: FontAwesome;
}`;

const entypoFontStyles = `@font-face {
  src: url(${entypoFont});
  font-family: Entypo;
}`;

// Create stylesheet
const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = awesomeFontStyles;
  style.styleSheet.cssText = entypoFontStyles;
} else {
  style.appendChild(document.createTextNode(awesomeFontStyles));
  style.appendChild(document.createTextNode(entypoFontStyles));
}

// Inject stylesheet
document.head.appendChild(style);
ReactDOM.render(<App />, document.getElementById('root'));
