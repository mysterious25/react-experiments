import React from 'react';

function RadioButton (props) {
  const {
    onChange,
    isChecked,
    label
  } = props;

  return (
    <div>
      <label>
        <input
          type="radio"
          value={label}
          checked={isChecked}
          onChange={onChange}
        />
        {label}
      </label>
    </div>

  );
}

export default RadioButton;
