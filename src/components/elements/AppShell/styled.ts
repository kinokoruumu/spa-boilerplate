import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const SideNav = styled.div`
  width: 200px;
  background-color: gray;
  height: 100vh;
`;

export const Content = styled.div`
  width: calc(100% - 200px);
`;

export const Header = styled.header`
  background-color: aqua;
`;
