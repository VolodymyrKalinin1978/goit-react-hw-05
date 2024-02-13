import styled from '@emotion/styled';

export const ContainerMovies = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;

  & > div {
    display: flex;
    flex-direction: column;

    font-size: 20px;
    gap: 10px;
    & > h1 {
      font-size: 30px;
    }
  }
`;
