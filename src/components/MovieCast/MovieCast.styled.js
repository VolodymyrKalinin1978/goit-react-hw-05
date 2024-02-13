import styled from "@emotion/styled"; 
// import { NavLink } from "react-router-dom";
export const ContainerMovies = styled.div`
 
  display: flex;
  gap: 50px;
  align-items: center;
  margin-bottom: 20px;

  & > div {
    display: flex;
   flex-direction: column;
   /* justify-content: center; */
   /* align-items: center; */
   gap: 20px;
   & > h1{
    font-size: 30px;
   }

  }
 
 `