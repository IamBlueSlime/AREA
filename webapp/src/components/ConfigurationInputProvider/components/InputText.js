import React, {useState} from 'react';
import styled from "styled-components";
import {func, object} from "prop-types";
import {withTheme} from "../../../utils/theme";

const BaseText = withTheme(styled.input`
  margin-bottom: 15px;
  font-size: 20px;
  border-color: ${({ themecolors }) => themecolors.neutral};
  background-color: ${({ themecolors }) => themecolors.neutral};
  color: ${({ themecolors }) => themecolors.inverted_neutral};
  padding: 2px;
  :focus {
    border-color: ${({ themecolors }) => themecolors.primary};
  }
`);

function InputText(props) {
  const { input, state, onChange } = props;
  const [value, setValue] = useState(state.value);

  const handleChange = (event) => {
    setValue(event.target.value);
    onChange({ value: event.target.value, name: input.name });
  };

  return <BaseText type="text" value={value} name={input.name} onChange={handleChange}/>;
}
InputText.PropsType = {
  input: object.isRequired,
  state: object.isRequired,
  onChange: func.isRequired,
};

export default InputText;