import * as React from 'react';
import * as s from '../app.styles';

type ButtonProps = {
  text: string;
};

const Button: React.FC<ButtonProps> = ({ text }) => {
  return <s.form_button type='submit'>{text}</s.form_button>;
};

export default Button;
