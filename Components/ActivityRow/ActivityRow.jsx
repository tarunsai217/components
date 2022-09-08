import React, { useState } from 'react';
import settingsIcon from '../ActivityAssets/settings.svg';
import './ActivityRow.scss';

export default function ActivityRow() {
  const initialData = [
    {
      id: '110016',
      img: '',
      name: 'Dubai City Tour',
      description:
        'Visit iconic building and get astonished by marvelous architecture via a Tourist Bus',
      event: 'SightSeeing',
      location: 'Dubai , United Arab Emirates',
    },
    {
      id: '110016',
      img: '',
      name: 'Dubai City Tour',
      description:
        'Visit iconic building and get astonished by marvelous architecture via a Tourist Bus',
      event: 'SightSeeing',
      location: 'Dubai , United Arab Emirates',
    },
  ];
  const [activityItems, setActivityItems] = useState(initialData);

  return (
    <div className="activity-items-container">
      {activityItems &&
        activityItems.map((item, index) => {
          return <ActivityItem item={item} key={index} />;
        })}
    </div>
  );
}

function ActivityItem({ item }) {
  const { id, img, name, description, event, location } = item;
  return (
    <div className="activity-item">
      <span className="id">{id}</span>
      <img className="activity-image" src={img} />
      <div className="activity-details">
        <h3 className="name">{name}</h3>
        <p className="description">{description}</p>
      </div>
      <span className="event">{event}</span>
      <span className="location">{location}</span>
      <div className="settings-wrapper">
        <img src={settingsIcon} />
        <span>Settings</span>
      </div>
      <button className="select-button">SELECT</button>
    </div>
  );
}
