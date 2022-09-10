import React, { useState } from 'react';
import './AssetUploadingItem.scss';

export default function ({ item }) {
  const { label, dimenisons, size } = item;
  return (
    <div className="asset-uploading-item">
      <span className="label">{label}</span>
      <div className="uploading-status">
        <span>Uploading ...</span>
      </div>

      <span className="dimensions">{dimenisons}</span>
      <span className="size">{size}</span>
      <div className="actions"></div>
    </div>
  );
}
