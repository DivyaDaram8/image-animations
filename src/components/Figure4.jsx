import React from 'react';
import { useNavigate } from 'react-router-dom';
import data4 from '../../src/db/data4';
import '../styles/figure1.css'; // Ensure this path is correct

function Figure4() {
  const navigate = useNavigate();

  const handleImageClick = (itemId) => {
    navigate(`/image/${itemId}`);
  };

  return (
    <div>
      <div className="heading">
        <h2 className="heading__title">Kaito Nakamo</h2>
        <span className="heading__meta">
          effect 04: Quick upward motion with bold blending and smooth slow reveal.
        </span>
      </div>
      <div className="grid">
        {data4.map((item) => (
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

export default Figure4;
