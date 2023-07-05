import { useState } from 'react'
import styled from "styled-components"
import Header from './components/Header'
import MarkdownGuide from './components/MarkdownGuide'
import MarkdownInput from './components/MarkdownInput'
import MarkdownOutput from './components/MarkdownOutput'


const InOutContainer = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 5%;
  height: calc(100vh - 58.5px);
`;

function App() {
  
  const [markdown, setMarkdown] = useState(`# Hello World!`);
  const [showGuide, setShowGuide] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.target.value);
  };

  return (
    <>
      {/* <Header onToggleGuide={() => {setShowGuide((showGuide) => !showGuide)}}/> */}
      <Header onToggleGuide={() => {setShowGuide(!showGuide)}}/>
      { showGuide && <MarkdownGuide />}
      <InOutContainer>
        <MarkdownInput value={markdown} onChange={handleChange}/>
        <MarkdownOutput markdown={markdown} />
      </InOutContainer>
    </>
  )
}

export default App
