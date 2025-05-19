import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import data1 from '../../src/db/data1';
import data2 from '../../src/db/data2';
import data3 from '../../src/db/data3';
import data4 from '../../src/db/data4';
import '../styles/figureDetail.css';

function FigureDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const imageRef = useRef();
  const layersRef = useRef([]);

  const allDataSources = [
    { source: 'data1', items: data1, idRange: [1, 16] },
    { source: 'data2', items: data2, idRange: [17, 32] },
    { source: 'data3', items: data3, idRange: [33, 48] },
    { source: 'data4', items: data4, idRange: [49, 64] },
  ];

  let found = null;
  let dataSource = '';

  for (const { source, items, idRange } of allDataSources) {
    const item = items.find((d) => d.id.toString() === id);
    if (item) {
      found = item;
      dataSource = source;
      break;
    }
  }

  const createImageLayers = () => {
    if (!imageRef.current || !found) return;

    const container = imageRef.current;
    container.innerHTML = ''; // Clear previous layers

    const numLayers = 6;
    layersRef.current = [];

    for (let i = 0; i < numLayers; i++) {
      const layer = document.createElement('div');
      layer.className = 'image-layer';
      layer.style.backgroundImage = `url(${found.imageUrl})`;
      container.appendChild(layer);
      layersRef.current.push(layer);
    }
  };

  const animateImageReveal = () => {
    if (!layersRef.current.length || !found) return;

    const layers = layersRef.current;
    const duration = 0.2;
    const totalDuration = 1.8;
    const stagger = totalDuration / layers.length;

    // Initial setup for all layers
    gsap.set(layers, {
      opacity: 0,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    });

    // Create timeline
    const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

    layers.forEach((layer, i) => {
      const width = 30 + (i * (70 / (layers.length - 1)));
      const x = gsap.utils.random(-10, 10);
      const y = gsap.utils.random(-10, 10);
      const rotation = gsap.utils.random(-5, 5);
      const scale = gsap.utils.random(0.9, 1.1);

      // Initial state
      gsap.set(layer, {
        width: `${width}%`,
        x,
        y,
        rotation,
        scale,
      });

      // Animation for this layer
      tl.to(layer, {
        opacity: 1,
        duration: duration * 0.8,
      }, i * stagger)
        .to(layer, {
          opacity: 0,
          duration: duration * 0.8,
        }, i * stagger + duration * 0.5);
    });

    // Final state - last layer stays visible, fixed size
    tl.to(layers[layers.length - 1], {
      opacity: 1,
      width: '500px',
      height: '630px',
      x: 0,
      y: 0,
      rotation: 0,
      scale: 1,
      duration: duration * 1.5,
    }, (layers.length - 1) * stagger);
  };

  useEffect(() => {
    if (!found) return;

    createImageLayers();
    animateImageReveal();

    // Cleanup function
    return () => {
      if (layersRef.current) {
        layersRef.current.forEach(layer => {
          gsap.killTweensOf(layer);
        });
      }
      if (imageRef.current) {
        gsap.killTweensOf(imageRef.current);
      }
    };
  }, [id, found]);

  if (!found) {
    return (
      <div className="figure-detail not-found">
        <h2>Figure not found</h2>
        <button className="close-btn" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="figure-detail">
      <div className="figure-detail__right">
        <div
          className="figure-detail__image"
          ref={imageRef}
        />
      </div>
      <div className="figure-detail__info">
        <h4>{found.title}</h4>
        <p>model: {found.model}</p>
        <button className="close-btn" onClick={() => navigate(-1)}>Close</button>
      </div>
    </div>
  );
}

export default FigureDetail;