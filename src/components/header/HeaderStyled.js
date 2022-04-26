import styled from "styled-components";

const Wrapper = styled.div`
    background-color: #000000;
  
    .header-container {
display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 59px;
    padding-bottom: 65px;
    }

    .navigation-list {
      display: flex;
      flex-direction: row;
      

    .navigation-list-item:not(:last-child) {
      margin-right: 55px;
    }
  }

  }
`;

export default Wrapper;
