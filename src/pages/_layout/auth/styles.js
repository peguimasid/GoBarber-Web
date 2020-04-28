import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #1e9600, #fff200, #f90000);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #202020;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(0, 0, 0, 0.6);
      }
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      font-weight: 100;
      color: #fff;
      background: #303030;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: 0.2s;

      &:hover {
        background: ${darken(0.03, '#303030')};
      }
    }

    a {
      color: #000;
      margin: 15px;
      font-size: 16px;
      opacity: 0.6;
      transition: 0.1s;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;
