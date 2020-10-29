import * as React from 'react';
import * as s from '../app.styles';
type InputProps = {
  handleChange: React.FormEventHandler;
  name: string;
  value: string;
  placeholder: string;
};

const Input: React.FC<InputProps> = ({
  handleChange,
  name,
  value,
  placeholder,
}) => {
  return (
    <s.form_input
      name={name}
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
    ></s.form_input>
  );
};

export default Input;
