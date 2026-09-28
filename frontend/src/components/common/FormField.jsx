import React from 'react';

export default function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  error,
  helpText,
  options = [],
  rows = 3,
}) {
  return (
    <div className="form-group">
      {label && (
        <label htmlFor={name} className="form-label">
          {label} {required && <span style={{ color: '#ef4444' }}>*</span>}
        </label>
      )}

      {type === 'select' ? (
        <select
          id={name}
          name={name}
          className="form-select"
          value={value}
          onChange={onChange}
          required={required}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          className="form-textarea"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          required={required}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          className="form-input"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      )}

      {error && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{error}</p>}
      {helpText && <p className="form-help">{helpText}</p>}
    </div>
  );
}
