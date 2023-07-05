import styled from "styled-components"

const InputContainer = styled.div `
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box; 
`;


const StyledTextArea = styled.textarea `
  width: 100%;
  height: 100%;
  font-size: 18px;
  box-sizing: border-box; 
  padding: 10px;
`;

interface MarkdownInputProps  {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MarkdownInput = ({value, onChange} : MarkdownInputProps) => {
  return (
    <InputContainer>
      <StyledTextArea value={value} onChange={onChange} />
    </InputContainer>
  );
};

export default MarkdownInput;
