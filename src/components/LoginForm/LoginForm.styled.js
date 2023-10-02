import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 500;
`;
export const Input = styled.input`
  width: 250px;
  padding: 22px 36px;

  color: #000000;
  background: #efefef;
  border-radius: 18px;
  border: 1px solid #efefef;

  :placeholder {
    color: #757575;
  }

  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border: 1px solid #000000;
  }
`;
export const LogLink = styled(NavLink)`
  margin-top: 10px;
  color: #8f8f8f;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #fabb18;
  }
`;
export const Btn = styled.button`
  font-weight: 600;
  font-size: 18px;
  margin-top: 25px;
  padding: 10px 20px;
  background-color: grey;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(250, 187, 24, 0.1);
  border-radius: 14px;

  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: red;
    background-color: rgba(250, 187, 24, 0.1);
    border: 1px solid #000000;
  }
`;
