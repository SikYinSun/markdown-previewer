import styled from "styled-components"
import ReactMarkdown from 'react-markdown'


const OuputContainer = styled.div `
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box; 
  border: 2px solid #008B8B;
`;

interface MarkdownOutputProps {
  markdown: string;
}

const MarkdownOutput = ({markdown} : MarkdownOutputProps) => {
  return (
    <OuputContainer>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </OuputContainer>
  );
};

export default MarkdownOutput;