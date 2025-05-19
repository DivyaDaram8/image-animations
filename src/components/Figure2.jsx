import React from 'react';
import { useNavigate } from 'react-router-dom';
import data2 from '../../src/db/data2';
import '../styles/figure1.css'; // Ensure this path is correct

function Figure2() {
  const navigate = useNavigate();

  const handleImageClick = (itemId) => {
    navigate(`/image/${itemId}`);
  };

  return (
    <div>
      <div className="heading">
        <h2 className="heading__title">Manika Jorge</h2>
        <span className="heading__meta">
          effect 02: Adjusts mover count, rotation, timing, and animation feel.
        </span>
      </div>
      <div className="grid">
        {data2.map((item) => (
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

export default Figure2;
