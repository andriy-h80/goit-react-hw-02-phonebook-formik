import styled from '@emotion/styled';
import { Field } from "formik";

export const FormStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: 15px;
  gap: 20px;
  width: 400px;
  border: 1px solid;
  border-radius: 5px;
  font-weight: bold;
`;

export const Input = styled(Field)`
  display: flex;
  margin-left: 20px;
  gap: 10px;
`;

export const ButtonAdd = styled.button`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  width: 150px;
  margin: 0 auto;
  padding: 10px;
  color: #000000;
  border: 1px solid;
  border-radius: 5px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;
