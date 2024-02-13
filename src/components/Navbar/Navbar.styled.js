import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const WraperNav = styled.nav`
  display: flex;
  gap: 20px;
  outline: none;
  padding: 15px;
  margin-bottom: 20px;

  background: linear-gradient(to bottom, #888888, #ffffff);
`;
export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
