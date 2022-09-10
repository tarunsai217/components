import * as React from 'react';
import './AssetItem.scss';
export default function AssetItem({ item }) {
  return (
    <div className="asset-explorer-item">
      <span className="label">{item.label}</span>
      <span className="preview">
        <img src="https://unsplash.com/photos/ECOzJdT4OIk" />
      </span>
      <span className="dimensions">{item.dimenisons}</span>
      <span className="size">{item.size}</span>
      <span className="link">
        {' '}
        <span>{item.link}</span>
      </span>
      <span className="del">{/* <img src={delIcon} /> */}</span>
    </div>
  );
}
