import styled from 'styled-components';

export const List = styled.ul`
  max-width: 600px;

  padding: 0;
  padding-left: 20px;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;

  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 20px;
  font-weight: 500;

  :not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: 2px solid #2196f3;
  border-radius: 4px;
  cursor: pointer;

  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 18px;
  font-weight: 600;

  :hover {
    background-color: #2196f3;
  }
`;
