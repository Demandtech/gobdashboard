import GlobalStyle from './globalStyles'
import { Header, Information } from './components'
import styled from 'styled-components'

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <Information />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 1440px;
  padding: 0px 50px;
  margin: 0 auto;

  @media (max-width: 600px){
    padding: 0px 15px;
  }
`

export default App
