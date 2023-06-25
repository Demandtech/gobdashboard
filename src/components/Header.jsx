import styled from 'styled-components'
import { HiOutlineExternalLink } from 'react-icons/hi'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <Wrapper>
      <div className='left'>
        <div>
          <a href='#' className='btn'>
            <span>Buy $MOONMAN</span>
            <HiOutlineExternalLink />
          </a>
        </div>
        <div className='logo-wrapper'>
          <img src={logo} alt='logo' />
        </div>
      </div>
      <div className='current-price'>
        <p>Current Price: $0.00020</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
    padding: 20px 0;
    a {
      background: #31e2f1;
      font-family: phage, sans-serif;
      color: #ececec;
      display: flex;
      align-items: center;
      gap: 0.4rem;
      text-decoration: none;
      height: 40px;
      padding: 0 20px;
      text-transform: uppercase;
      font-weight: 400;
      border-radius: 8px;
    }
  }
  .current-price {
    color: #31e2f1;
    font-size: 2rem;
    text-transform: uppercase;
    font-family: phage;
  }
  .logo-wrapper {
    width: 32px;
    height: 32px;
    margin-left: 1rem;
    animation-name: rotate;
    animation-iteration-count: infinite;
    animation-duration: 10s;
    animation-direction: normal;
    animation-timing-function: ease;
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    .current-price {
      font-size: 1rem;
    }
  }
`

export default Header
