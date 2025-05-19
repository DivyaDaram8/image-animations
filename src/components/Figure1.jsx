import React from 'react';
import { useNavigate } from 'react-router-dom';
import data1 from '../../src/db/data1';
import '../styles/figure1.css';

function Figure1() {
  const navigate = useNavigate();

  const handleImageClick = (itemId) => {
    navigate(`/image/${itemId}`);
  };

  return (
    <div>
      <div className="heading">
        <h2 className="heading__title">Shane Weber</h2>
        <span className="heading__meta">effect 01: straight linear paths, smooth easing, clean timing, minimal rotation</span>
      </div>
      <div className="grid">
        {data1.map((item) => (
          <figure
            key={item.id}
            className="grid__item"
            role="img"
            aria-labelledby={`caption${item.id}`}
            onClick={() => handleImageClick(item.id)}
          >
            <div
              className="grid__item-image"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            ></div>
            <figcaption className="grid__item-caption" id={`caption${item.id}`}>
              <h3>{item.title}</h3>
              <p>{item.model}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default Figure1;
