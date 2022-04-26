import styled from "styled-components";

const Wrapper = styled.div`
  .logo-link {
    display: flex;
    flex-direction: row;
  }

  .logo-img {
    margin-right: 25px;
  }

  .logo-title {
    font-family: "Forum", cursive;
    font-weight: 400;
    font-size: 28px;
    line-height: 1.11;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: var(--text-white);
  }
`;

export default Wrapper;
