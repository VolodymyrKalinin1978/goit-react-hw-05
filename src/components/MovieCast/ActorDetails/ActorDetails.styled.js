import styled from '@emotion/styled';

export const ContainerActor = styled.div`
  display: flex;
  list-style-type: none;
  gap: 25px;
  flex-wrap: wrap;
  & > li {
    flex: 0 0 calc(20% - 25px);
    max-width: calc(20% - 25px);
    margin-bottom: 25px;
  }
`;
