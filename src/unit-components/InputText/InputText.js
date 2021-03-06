import React from 'react';

/**
 *
 * @param {{label: string, value: string, onChange: Object}} props
 */
function InputText(props) {
  const { label, value, onChange, className } = props;

  return (
    <div>
      <div>
        <label htmlFor="input-text" className="label input">
          {label}
        </label>
      </div>
      <input
        type="text"
        name="input-text"
        className={className}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}

export default InputText;
