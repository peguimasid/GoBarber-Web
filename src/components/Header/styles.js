import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 30px;
  background: #282828;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      height: 50px;
      width: 50px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #404040;
    }
    a {
      font-weight: 400;
      color: #068e05;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #404040;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #eee;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #888;
    }
  }

  img {
    height: 36px;
    border-radius: 50%;
  }
`;
