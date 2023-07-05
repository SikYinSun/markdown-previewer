import styled from "styled-components"

const GuideContainer = styled.div `
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #F0F8FF;
  margin: 1rem;
`;

const Title = styled.h2 `
  background: #b3b3cc;
  margin-bottom: 5px;
  color: #3366ff;
`;

const Ulist = styled.ul`
  margin-left: 2rem;
`;

const List = styled.li `
  font-size: 18px;
`;

export default function MarkdownGuide() {
  return (
    <GuideContainer>
      <Title>Markdown Cheat Sheet </Title>
       <Ulist>
        <List><code>#</code> H1</List>
        <List><code>## H2</code></List>
        <List><code>### H3</code></List>
        <List><code>**bold**</code></List>
        <List><code>*italic*</code></List>
        <List><code>[Link](http://a.com)</code></List>
        <List><code>![Image](http://url/a.png)</code></List>
        <List><code>`inline code`</code></List>
        <List><code>```block code```</code></List>
        <List><code>- list item</code></List>
       </Ulist>
    </GuideContainer>
  )
}
