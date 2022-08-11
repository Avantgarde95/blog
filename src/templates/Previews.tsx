import styled from "@emotion/styled";
import Link from "components/Link";
import { resetLink } from "styles/Mixins";

const Previews = () => (
  <Container>
    <Row>
      <TitleLink title="abc">Solving issue in WSLg</TitleLink>
      <PostDate>2022.03.31</PostDate>
      <PostContent>
        윈도우의 WSL2 위에 WSLg 기능을 설치하면, VcXsrv 등의 프로그램 없이도 리눅스용 GUI 프로그램들을 실행할 수 있다.
        If we install WSLg on the W...
      </PostContent>
      <PostInfo>
        Category: <EachLink title="Computer">Computer</EachLink>
      </PostInfo>
    </Row>
    <Row>
      <TitleLink title="abc">Solving issue in WSLg</TitleLink>
      <PostDate>2022.03.31</PostDate>
      <PostContent>
        윈도우의 WSL2 위에 WSLg 기능을 설치하면, VcXsrv 등의 프로그램 없이도 리눅스용 GUI 프로그램들을 실행할 수 있다.
        If we install WSLg on the W...
      </PostContent>
      <PostInfo>
        Category: <EachLink title="Computer">Computer</EachLink>
      </PostInfo>
    </Row>
  </Container>
);

const Container = styled.div``;

const Row = styled.div`
  box-sizing: border-box;

  margin-bottom: 24px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.color.dark};
`;

const TitleLink = styled(Link)`
  ${resetLink}

  display: inline-block;
  word-break: break-all;

  margin-right: 8px;
  margin-bottom: 8px;
  font-size: 28px;

  color: ${({ theme }) => theme.color.dark};

  &:hover {
    color: ${({ theme }) => theme.color.light};
  }
`;

const PostDate = styled.span`
  display: inline-block;

  margin-bottom: 8px;
  color: ${({ theme }) => theme.color.default};
`;

const PostContent = styled.div`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.color.default};
`;

const PostInfo = styled.div`
  margin-bottom: 16px;
  color: ${({ theme }) => theme.color.default};
`;

const EachLink = styled(Link)`
  ${resetLink}

  cursor: pointer;

  color: ${({ theme }) => theme.color.dark};

  &:hover {
    color: ${({ theme }) => theme.color.light};
  }
`;

export default Previews;
