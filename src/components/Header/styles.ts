import styled from 'styled-components';

export const Container = styled.header`
  background: #d73035;
  justify-content: center;
  display: flex;
  height: 198px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .page-details {
    h1 {
      color: #fff;
      font-size: 32px;
    }
    ,
    h2 {
      color: #fff;
      font-size: 16px;
      font-weight: 400;
      opacity: 0.9;
      margin-top: 6px;
    }
  }
`;
