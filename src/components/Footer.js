import styled from "styled-components";

function Footer() {
    return (
        <FootContainer>
            <h2>Created by me</h2>
        </FootContainer>
    );
}

export default Footer

const FootContainer = styled.div`
  background-color: #335;
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 10px;
  border-radius: 14px;

  h2 {
    margin: 0;
    text-align: center;
    color: white;
  }
`;
