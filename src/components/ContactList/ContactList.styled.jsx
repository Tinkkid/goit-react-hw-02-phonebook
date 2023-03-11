import styled from '@emotion/styled';

export const List = styled.ol`
  padding-inline-start: 0;
`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Name = styled.span`
   margin-right: 5px;
`
export const Number = styled.span`
margin-right: 10px;
`;

export const BtnDelete = styled.button`
  width: fit-content;
  padding: 4px 8px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  background: linear-gradient(180deg, #7066e0 0%, #6054e0 100%);
  background-origin: border-box;
  box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25),
    inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2);
  user-select: none;
  touch-action: manipulation;
  &:focus,
  &:hover {
    box-shadow: inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2),
      0px 0.5px 1.5px rgba(54, 122, 246, 0.25),
      0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
    outline: 0;
  }
`;