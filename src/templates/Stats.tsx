import styled from "@emotion/styled";

import { allCategories } from "models/Category";
import Link from "components/Link";
import { resetLink } from "styles/Mixins";

const Stats = () => (
  <Container>
    <Section>
      <Title>Categories</Title>
      {allCategories.map(category => (
        <div key={category}>
          -&nbsp;
          <EachLink title={category} href={`/${category.toLowerCase()}`}>
            {category}
          </EachLink>
          &nbsp;(16)
        </div>
      ))}
    </Section>
    <Section>
      <Title>Recent posts</Title>
      <div>
        -&nbsp;
        <EachLink title={"abc"}>Solving issue in WSLg</EachLink>
      </div>
      <div>
        -&nbsp;
        <EachLink title={"abc"}>Solving issue in WSLg</EachLink>
      </div>
      <div>
        -&nbsp;
        <EachLink title={"abc"}>Solving issue in WSLg</EachLink>
      </div>
    </Section>
  </Container>
);

const Container = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

const Section = styled.div`
  display: inline-block;

  margin-right: 16px;
  margin-bottom: 16px;
`;

const Title = styled.div`
  font-weight: bold;
`;

const EachLink = styled(Link)`
  ${resetLink}

  cursor: pointer;

  color: ${({ theme }) => theme.color.dark};

  &:hover {
    color: ${({ theme }) => theme.color.light};
  }
`;

export default Stats;
