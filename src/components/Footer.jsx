import React from 'react';
import '../styles/base.css';

const Footer = () => {
  const footerStyle = {
    display: 'flex',
    justifyContent: 'space-between', // Space out items to the ends
    alignItems: 'flex-end', // Align items to the bottom
    padding: '20px',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color: '#000',
  };

  const leftSpanStyle = {
    // No specific styles needed for the left span in this case
  };

  const rightSpanStyle = {
    // No specific styles needed for the right span in this case
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#000',
  };

  return (
    <footer className="frame frame--footer" style={footerStyle}>
      <span style={leftSpanStyle}>
        Made by{' '}
        <a
          href="https://codrops.com/"
          className="line"
          target="_self"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          @codrops
        </a>
      </span>
      <span style={rightSpanStyle}>
        <a
          href="https://tympanus.net/codrops/demos/"
          className="line"
          target="_self"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          All demos
        </a>
      </span>
    </footer>
  );
};

export default Footer;