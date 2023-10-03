import styled from 'styled-components';

export const Block = styled.div`
  align-items: center;
  display: flex;
  margin-left: auto;
  gap: 15px;
`;
export const Text = styled.p`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 15px;
  color: #524a4d;
`;
export const Button = styled.button`
  background-color: #bcd1d1;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  border: none;
  outline: none;
  width: 80px;
  padding: 5px;
  cursor: pointer;
  color: #524a4d;

  font-weight: 600;
  font-size: 14px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #95f0f0;
    box-shadow: 0px 4px 8px rgba(123, 219, 219);
  }
`;
