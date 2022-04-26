import styled from "styled-components";

const Wrapper = styled.ul`
    display: flex;
    flex-direction: row;

    .navigation-item-link {
      font-family:'Roboto-Thin';
      font-weight: 100;
      font-size: 22px;
      line-height: 1.18;
    letter-spacing: 2px;
    color: var(--text-white);
    }
   
    .navigation-item-link:hover,
    .navigation-item-link:focus { 
    color: var(--font-gold);
    transition: 500ms;
    }
  
    .navigation-list-item:not(:last-child) {
      margin-right: 55px;
    }
  }

  }
`;

export default Wrapper;
