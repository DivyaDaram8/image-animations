import React from 'react';

const Header = () => {
  const headerStyle = {
    display: 'flex', // Arrange items in a row
    alignItems: 'center', // Vertically align items in the center
    padding: '20px',
    fontFamily: 'sans-serif',
    fontWeight: 'bold', // Make all text bold
    color: '#000', // Set text color to black
    gap: '100px', // Space between the main elements (including navs)
  };

  const titleStyle = {
    margin: '0', // Remove default margin from the title
  };

  const navLinksStyle = {
    display: 'flex',
    gap: '10px',
    margin: '0', // Remove default margin
  };

  const navTagsStyle = {
    display: 'flex',
    gap: '5px',
    margin: '0', // Remove default margin
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#000', // Ensure links are also black
  };

  return (
    <header className="frame" style={headerStyle}>
      <h1 className="frame__title" style={titleStyle}>
        Repeating Image Transition
      </h1>

      <nav className="frame__links" style={navLinksStyle}>
        <a
          className="line"
          href="https://tympanus.net/codrops/?p=92571"
          target="_self"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          More info,
        </a>
        <a
          className="line"
          href="https://github.com/codrops/RepeatingImageTransition/"
          target="_self"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Code,
        </a>
        <a
          className="line"
          href="https://tympanus.net/codrops/demos/"
          target="_self"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          All demos
        </a>
      </nav>

      <nav className="frame__tags" style={navTagsStyle}>
        <a
          className="line"
          href="https://tympanus.net/codrops/demos/?tag=page-transition"
          target="_self"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          page-transition,
        </a>
        <a
          className="line"
          href="https://tympanus.net/codrops/demos/?tag=repetition"
          target="_self"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          repetition,
        </a>
        <a
          className="line"
          href="https://tympanus.net/codrops/demos/?tag=grid"
          target="_self"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          grid
        </a>
      </nav>
    </header>
  );
};

export default Header;