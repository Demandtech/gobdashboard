import GlobalStyle from './globalStyles'
import { Header, Information } from './components'
import styled from 'styled-components'



function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <div className='header'>
        
        {/* <div className='logo'>
          <img src={moonMan} alt='' />
        </div> */}
      </div>
      <Information />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 1440px;
  padding: 0px 50px;
  margin: 0 auto;
  

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    
    .logo {
      flex: 1;
      text-align: center;
      img {
        width: 200px;
      }
    }
  }

  @media (max-width: 600px) {
    padding: 0px 15px;

    .header {
      flex-direction: column-reverse;
    }

    .coming-soon {
      h3 {
        font-size: 1.5rem;
      }
    }
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

export default App
