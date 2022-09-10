import React, { useState } from 'react';
import cross from '../FormComponentAssets/cross.svg';
import './Dropdown.scss';
export default function Dropdown() {
  const optionsInitialData = [
    { title: 'Option Title 1', body: 'Option Body 1' },
    { title: 'Option Title 2', body: 'Option Body 2' },
  ];
  const selectedOptionsInitialData = [
    { title: 'Selected Option Title 1', body: 'Option Body 1' },
    { title: 'Selected  Option Title 2', body: 'Option Body 2' },
  ];

  const [search, setSearch] = useState('');
  const [options, setOptions] = useState(optionsInitialData);
  const [selectedOptions, setSelectedOptions] = useState(
    selectedOptionsInitialData
  );

  const getOptions = () => {};

  const optionClickHandler = (item) => {
    console.log('item clicked', item);
  };

  return (
    <div style={{ width: '500px' }} className="custom-dropdown">
      <div className="selected-options">
        {selectedOptions.map((item, index) => {
          return <SelectedOption key={index} item={item} />;
        })}
      </div>
      <input
        className="search"
        placeholder="Add..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div className="options">
        {options.map((item, index) => {
          return (
            <Option
              optionClickHandler={optionClickHandler}
              key={index}
              item={item}
            />
          );
        })}
      </div>
    </div>
  );
}

function test() {
  return <span>Test</span>;
}

function Option({ item, optionClickHandler }) {
  const { title, body } = item;
  return (
    <div
      onClick={() => {
        optionClickHandler(item);
      }}
      className="option"
    >
      <span className="option-title">{title}</span>
      <span className="option-body">{body}</span>
    </div>
  );
}

function SelectedOption({ item }) {
  const { title, body } = item;
  return (
    <div className="selected-option">
      <span className="selected-option-content">{`${title} ,${body}`}</span>
      <img className="icon" src={cross} />
    </div>
  );
}
