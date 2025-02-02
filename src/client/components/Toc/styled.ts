import styled from "styled-components";

export const StyledToc = styled.div`
  border-left: 1px solid var(--c-divider);
  background: white;
  position: fixed;
  /* roughly scorllbar width */
  right: 20px;
  top: var(--header-height);
  width: calc(var(--toc-width) - 20px);
  height: 100%;
  padding-top: 1.5rem;
  padding-left: 1rem;

  span {
    color: var(--c-brand);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledTocItemTitle = styled.div`
  margin-bottom: 12px;
  cursor: pointer;
  :hover {
    opacity: 0.6;
    transition: opacity 200ms linear;
  }
`;

export const StyledTocItem = styled.div.attrs<{ level: number }>((props) => {
  return {
    "data-level": props.level,
  };
})<{ level: number; empty: boolean }>`
  padding-left: ${(props) => (props.empty ? "12px" : "0")};
`;
