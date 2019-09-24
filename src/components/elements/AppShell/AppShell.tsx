import * as React from "react";
import * as Styled from "./styled";

const AppShell: React.FunctionComponent = ({ children }) => (
  <Styled.Container>
    <Styled.SideNav>
      <ul>
        <li>nav1</li>
        <li>nav2</li>
      </ul>
    </Styled.SideNav>
    <Styled.Content>
      <Styled.Header>
        <nav>
          <li>ログイン</li>
        </nav>
      </Styled.Header>
      {children}
    </Styled.Content>
  </Styled.Container>
);

export { AppShell };
