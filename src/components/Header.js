import styled from "styled-components";

function Header() {
    return (
        <HeadContainer>
            <h1>Shopping List</h1>
        </HeadContainer>
    );
}

export default Header

const HeadContainer = styled.div`
  background-color: #335;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;
  padding: 20px;
  border-radius: 14px;

  h1 {
    margin: 0;
    text-align: center;
    color: white;
  }
`;
