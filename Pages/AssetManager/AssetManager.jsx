import React, { useRef } from 'react';
import './AssetManager.scss';
import SideNavbar from '../../Components/SideNavigation/SideNavigation';
import AssetExplorerItem from './Components/AssetItem/AssetItem';
import AssetUploadingItem from './Components/AssetUploadingItem/AssetUploadingItem';

export default function AssetManager() {
  const items = [
    {
      label: 'Taj Vivanta Bedroom Luxury Sui...png',
      preview: '',
      dimenisons: '77x88 px',
      size: '740KB',
      link: '(link)',
    },
    {
      label: 'OLA Pass.pdf',
      preview: '',
      dimenisons: ' - ',
      size: '1.2MB',
      link: '(link)',
    },
    {
      label: 'Radisson blue Guwhati Building.jpg',
      preview: '',
      dimenisons: '90x98 px',
      size: '1.9MB',
      link: '(link)',
    },
    {
      label: 'Radisson blue Guwhati Building.jpg',
      preview: '',
      dimenisons: '90x98 px',
      size: '1.9MB',
      link: '(link)',
    },
  ];

  const uploadingItems = [
    {
      label: 'OLA Pass.pdf',
      preview: '',
      dimenisons: ' - ',
      size: '1.2MB',
      link: '(link)',
    },
    {
      label: 'Radisson blue Guwhati Building.jpg',
      preview: '',
      dimenisons: '90x98 px',
      size: '1.9MB',
      link: '(link)',
    },
  ];
  const inputFile = useRef(null);

  const uploadClickHandler = () => {
    inputFile.current.click();
  };

  const fileUploadhandler = (e) => {
    console.log('label');
    console.log('size');
    console.log('dimensions');
  };

  return (
    <div className="asset-manager-page">
      <div className="side-nav-wrapper">
        <SideNavbar />
      </div>
      <>
        <div className="asset-manager-main">
          <div className="asset-explorer-heading">
            <h1>Asset Manager</h1>
          </div>
          <div className="asset-explorer-search">
            <input placeholder="Search" />
          </div>
          <div className="asset-explorer-main">
            <div className="asset-explorer-main-heading">
              <span className="label">Label</span>
              <span className="preview">Preview</span>
              <span className="dimensions">Dimensions</span>
              <span className="size">Size</span>
              <span className="actions"></span>
            </div>
            <div className="asset-explorer-items">
              {items.map((item) => {
                return <AssetExplorerItem item={item} />;
              })}
            </div>

            <div className="asset-uploading-items">
              {items.map((item) => {
                return <AssetUploadingItem item={item} />;
              })}
            </div>

            <div
              onClick={uploadClickHandler}
              className="asset-image-upload-container"
            >
              <input onChange={fileUploadhandler} ref={inputFile} type="file" />
              <div className="content">
                <span>Drop file here</span>
                <span>OR</span>
                <button className="upload-button">Upload</button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
