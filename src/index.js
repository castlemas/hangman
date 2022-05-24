import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// cursor stuff
new fairyDustCursor({ element: document.querySelector("#fairyDust") })
new ghostCursor({ element: document.querySelector("#ghost") })
new trailingCursor({ element: document.querySelector("#trailing") })
new followingDotCursor({ element: document.querySelector("#following") })
new springyEmojiCursor({ element: document.querySelector("#springs") })
new emojiCursor({ element: document.querySelector("#emoji") })
new bubbleCursor({ element: document.querySelector("#bubbles") })
new snowflakeCursor({ element: document.querySelector("#snowflake") })
