import React from 'react';

export default function SearchBar({ value, onChange, placeholder = 'Search records...', onClear }) {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      {value && onClear && (
        <button type="button" className="btn btn-secondary" onClick={onClear}>
          Clear
        </button>
      )}
    </div>
  );
}
