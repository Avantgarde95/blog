import styled from "@emotion/styled";
import { ReactNode } from "react";

import Header from "templates/Header";
import { onWideScreen } from "styles/Mixins";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <Container>
    <Content>
      <Header />
      {children}
    </Content>
  </Container>
);

const Container = styled.div`
  overflow-y: auto;
  box-sizing: border-box;

  width: 100%;
  height: 100%;

  color: ${({ theme }) => theme.color.default};
  background-color: ${({ theme }) => theme.color.background};

  ${onWideScreen} {
    padding-top: 24px;
    padding-bottom: 24px;
  }
`;

const Content = styled.div`
  box-sizing: border-box;

  max-width: 769px;
  min-height: 100%;
  margin: 0 auto;
  padding: 24px;

  ${onWideScreen} {
    border: 1px solid ${({ theme }) => theme.color.dark};
  }
`;

export default Layout;
