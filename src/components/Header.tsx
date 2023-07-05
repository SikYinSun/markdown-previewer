import styled from "styled-components"

const HeaderContainer = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: lightblue;
`;

const Title = styled.h1 `
  display: block;
  font-size 2em;
  font-weight: bold;
`;

const Button = styled.button `
  background: #FFCCCB;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 1s ease;

  &:hover {
    background-color: #dc143c;
  }
`;

// function component
interface HeaderProps{
 onToggleGuide: () => void; 
}

const Header: React.FC<HeaderProps> = ({onToggleGuide}) =>{
  return (
      <HeaderContainer>
        <Title>Markdown Previewer</Title>
        <Button onClick={onToggleGuide}>Markdown Cheat Sheet</Button>
      </HeaderContainer>
  );
};

export default Header;
