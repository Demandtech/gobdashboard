import GlobalStyle from './globalStyles'
import { Header, Information } from './components'
import styled from 'styled-components'
import bgsvg from './assets/svg.svg'
import moonMan from './assets/moon-man.svg'

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <div className='header'>
        <div className='coming-soon'>
          <p>Coming soon</p>
          <h3>LP Farming Pools</h3>
        </div>
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
  -webkit-font-smoothing: antialiased;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .coming-soon {
      flex: 1;
      color: white;
      background: url(${bgsvg}) no-repeat;
      background-size: cover;
      font-family: phage;
      min-height: 150px;
      max-width: 400px;
      padding-left: 1rem;
      margin-top: 1rem;

      h3 {
        font-family: phage;
        font-size: 2rem;
        text-align: center;
        padding-top: 2rem;
      }
      p {
        padding-left: 3rem;
        color: #8f8f8f;
        animation-name: blink;
        animation-duration: 1.5s;
        animation-iteration-count: infinite;
      }
    }
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
