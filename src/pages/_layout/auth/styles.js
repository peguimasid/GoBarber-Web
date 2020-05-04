import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #202020;
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
      background: rgba(100, 100, 100, 0.2);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #eee;
      margin: 0 0 10px;

      &::placeholder {
        color: #eee;
        font-weight: 100;
      }
    }

    span {
      color: #068e05;
      opacity: 0.6;
      align-self: flex-start;
      margin: 0 0 10px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      font-weight: 100;
      color: #fff;
      background: #068e05;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: 0.2s;

      &:hover {
        background: ${darken(0.05, '#068e05')};
      }
    }

    a {
      color: #898989;
      margin: 15px;
      font-size: 16px;
      opacity: 0.6;
      transition: 0.1s;
      font-weight: 100;

      &:hover {
        opacity: 0.7;
        font-weight: 300;
      }
    }
  }
`;
