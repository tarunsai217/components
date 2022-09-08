import React, { useState } from 'react';
import './Transport.scss';
export default function Transport() {
  const transportItems = [
    {
      mode: 'Transfer',
      description: 'Between two locations',
      popular: true,
      selected: true,
      label: 'Private/Public Transfer',
    },
    {
      mode: 'Transfer',
      description: 'Between two locations',
      popular: false,
      selected: false,
    },
    {
      mode: 'Transfer',
      description: 'Between two locations',
      popular: true,
      selected: false,
    },
    {
      mode: 'Transfer',
      description: 'Between two locations',
      popular: false,
      selected: false,
    },
  ];

  return (
    <div className="transport-items-container">
      {transportItems.map((item, index) => (
        <TransportItem item={item} key={index} />
      ))}
    </div>
  );
}

function TransportItem({ item }) {
  const { mode, description, popular, selected, label } = item;
  return (
    <div
      className={selected ? 'transport-item selected-item' : 'transport-item'}
    >
      {popular && <span className="popular">Popular</span>}
      <h1 className="tranport-mode">{mode}</h1>
      <p className="tranport-description">{description}</p>
      {label && <span className="label"> {label}</span>}
      <button
        className={selected ? 'select-button  selected' : 'select-button'}
      >
        SELECT
      </button>
    </div>
  );
}
