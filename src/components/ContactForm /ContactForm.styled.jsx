import styled from '@emotion/styled';

export const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
`;

export const InputForContact = styled.input`
  margin-top: 5px;
  width: 300px;
  padding: 5px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #7c73e0;
`

export const LabelInputContact = styled.label`
   display: flex;
   flex-direction: column;
   margin-bottom: 20px;
`
export const BtnSubmit = styled.button`
  width: fit-content;
  padding: 6px 14px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
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
