import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

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

    hr {
      border: 0;
      height: 1px;
      background: #808080;
      margin: 10px 0 20px;
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
  }

  > button {
    width: 100%;
    margin: 10px 0 0;
    height: 44px;
    font-weight: 100;
    color: #fff;
    background: #a51b0b;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: 0.2s;

    &:hover {
      background: ${darken(0.05, '#a51b0b')};
    }
  }
`;
