import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "@emotion/styled";
import { css, useTheme } from "@emotion/react";
import { FaSearch, FaMoon, FaSun } from "react-icons/fa";

import { themeNameState } from "states/Theme";
import Link from "components/Link";
import { resetButton, resetInput, resetLink } from "styles/Mixins";

const Header = () => (
  <Container>
    <Top>
      <Title href="/">Hunmin Park (Avantgarde95)</Title>
      <Search />
    </Top>
    <Bottom>
      <ExternalLink href="https://avantgarde95.github.io/">Homepage</ExternalLink>
      <ExternalLink href="https://github.com/Avantgarde95/blog">Code</ExternalLink>
      <ThemeButton />
    </Bottom>
  </Container>
);

const Container = styled.header`
  width: 100%;
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  width: 100%;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  margin-bottom: 16px;
`;

const Title = styled(Link)`
  ${resetLink}

  cursor: pointer;

  margin-right: auto;
  margin-bottom: 16px;
  font-weight: bold;
  font-size: 32px;

  color: ${({ theme }) => theme.color.dark};

  &:hover {
    color: ${({ theme }) => theme.color.light};
  }
`;

const Search = () => {
  const [query, setQuery] = useState("");

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        align-items: center;

        margin-bottom: 16px;
      `}
    >
      <SearchInput type="text" placeholder="Search" value={query} onChange={handleChangeInput} />
      <SearchLink title={`Search ${query}`} href={`/search/${query}`}>
        <FaSearch />
      </SearchLink>
    </div>
  );
};

const SearchInput = styled.input`
  ${resetInput}

  flex: 1;
  border: 1px solid ${({ theme }) => theme.color.dark};
  border-radius: 0;
  outline: none;

  &:hover {
    border: 1px solid ${({ theme }) => theme.color.light};
  }
`;

const SearchLink = styled(Link)`
  ${resetButton}

  cursor: pointer;

  margin-left: 8px;
  line-height: 16px;
  border: 0;
  color: ${({ theme }) => theme.color.dark};

  &:hover {
    color: ${({ theme }) => theme.color.light};
  }
`;

const ExternalLink = styled(Link)`
  ${resetLink}

  cursor: pointer;
  text-decoration: underline;

  color: ${({ theme }) => theme.color.dark};

  &:not(:first-of-type) {
    margin-left: 16px;
  }

  &:hover {
    color: ${({ theme }) => theme.color.light};
  }
`;

const ThemeButton = () => {
  const theme = useTheme();
  const [themeName, setThemeName] = useRecoilState(themeNameState);

  const handleClickButton = () => {
    setThemeName(themeName === "Dark" ? "Light" : "Dark");
  };

  return (
    <button
      css={css`
        ${resetButton}

        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        width: 68px;
        margin-left: auto;
        padding: 2px 0;
        color: ${theme.color.dark};
        border: 1px solid ${theme.color.dark};

        &:hover {
          border: 1px solid ${theme.color.light};
        }

        & > svg {
          margin-right: 4px;
        }
      `}
      onClick={handleClickButton}
    >
      {themeName === "Dark" ? (
        <>
          <FaMoon /> Dark
        </>
      ) : (
        <>
          <FaSun /> Light
        </>
      )}
    </button>
  );
};

export default Header;
