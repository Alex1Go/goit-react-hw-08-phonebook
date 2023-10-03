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
  font-size: 18px;
  font-weight: 500;
  color: #524a4d;
`;
export const Input = styled.input`
  width: 250px;
  padding: 20px 36px;
  color: #524a4d;
  background: #efefef;
  border-radius: 18px;
  border: 1px solid rgba(33, 33, 33, 0.2);

  :placeholder {
    color: #757575;
  }
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border: 1px solid grey;
  }
`;
export const LogLink = styled(NavLink)`
  font-weight: 600;
  font-size: 14px;
  margin-top: 10px;
  color: #524a4d;
  cursor: pointer;
  &:hover {
    color: #f57e07;
  }
`;
export const Btn = styled.button`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 18px;
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #bcd1d1;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(250, 187, 24, 0.1);
  border-radius: 14px;
  color: #524a4d;
  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #95f0f0;
    box-shadow: 0px 4px 8px rgba(123, 219, 219);
  }
`;
