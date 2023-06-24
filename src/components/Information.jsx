import TokenInformation from './TokenInformation'
import WalletInformation from './WalletInformation'
import Supply from './Supply'
import TokenData from './TokenData'
import styled from 'styled-components'
import wallet from '../assets/wallet-icon.png'
import marketing from '../assets/marketing.png'
import buyback from '../assets/buyback.png'
import lp from '../assets/lp.png'
import bgsvg from '../assets/svg.svg'
import { GiBurningMeteor } from 'react-icons/gi'
import { BiReflectVertical } from 'react-icons/bi'
import { FaPiggyBank } from 'react-icons/fa'
import logo from '../assets/logo.png'

const Information = () => {
  const walletInfo = [
    {
      name: 'BUYBACK WALLET',
      icon: { wallet: wallet, subImg: buyback },
      ethPrice: 0.45,
      dollarPrice: 454,
    },
    {
      name: 'LP WALLET',
      icon: { wallet: wallet, subImg: lp },
      ethPrice: 0.45,
      dollarPrice: 654,
    },
    {
      name: 'MARKETING WALLET',
      icon: { wallet: wallet, subImg: marketing },
      ethPrice: 0.45,
      dollarPrice: 1854,
    },
  ]

  const tokenInfo = [
    {
      name: 'MOONMAN',
      price: 0.0,
      usd: 0,
    },
    {
      name: 'REFLECTION ACCURED',
      price: 0.0,
      usd: 0,
    },
  ]

  const supplyInfo = [
    {
      name: 'Total supply',
      icon: <FaPiggyBank size={20} />,
      price: '1000,000,000',
      usd: 10000,
    },
    {
      name: 'Circulation supply',
      icon: null,
      price: '1000,000,000',
      usd: 10000,
    },
    {
      name: 'burned',
      icon: <GiBurningMeteor size={20} />,
      price: '1000,000,000',
      usd: 10000,
    },
    {
      name: 'reflection t0 date',
      icon: <BiReflectVertical size={20} />,
      price: '1000,000,000',
      usd: 10000,
    },
  ]

  return (
    <Wrapper>
      <div className='info-container'>
        <div className='information'>
          <h3 className='title'>Wallet Information</h3>
          <div className='wallet-info-wrapper'>
            {walletInfo.map((info, index) => {
              return <WalletInformation info={info} key={index} />
            })}
          </div>
          <div className='token-data'>
            {/* <h3>Token Data</h3> */}
            <TokenData />
          </div>
        </div>
        <div className='information'>
          <h3 className='title'>Token Information</h3>
          <div className='token-info-wrapper'>
            {tokenInfo.map((info, index) => {
              return <TokenInformation info={info} key={index} />
            })}
          </div>
          <div className='logo-design'>
            <div className='logo-wrapper'>
              <img src={logo} alt='logo' />
            </div>
            <h2 className='logo-name'>MOON MAN</h2>
            <div className='logo-wrapper'>
              <img src={logo} alt='logo' />
            </div>
          </div>
        </div>
      </div>
      <div className='supply-info'>
        {supplyInfo.map((info, index) => {
          return <Supply info={info} key={index} />
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  /* border: 0.4px solid #2d2d2d; */
  border-radius: 5px;
  margin-top: 50px;
  color: #ffffff;
  padding: 1.5rem 2px 1.5rem 2px;
  /* background: url(${bgsvg}); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .info-container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin-bottom: 1rem;

    gap: 1rem;
    .information {
      .title {
        color: #2d2d2d;
      }
      .logo-design {
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translateY(10px);
        gap: 1rem;

        .logo-wrapper {
          width: 32px;

          img {
            width: 100%;
            object-fit: cover;
          }
        }
        .logo-name {
          font-family: Phage;
          text-align: center;
          font-size: 1.6rem;
        }
      }
      h3 {
        font-weight: 400;
        text-transform: uppercase;
        margin-bottom: 1rem;
        font-family: Phage;
      }

      .token-data {
        margin-top: 1rem;
      }

      .wallet-info-wrapper {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        border: 0.4px solid #2d2d2d;
        padding: 0.8rem;
        border-radius: 5px;
      }
      .token-info-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
        border: 0.4px solid #2d2d2d;
        padding: 0.8rem;
        border-radius: 5px;
      }
    }
  }
  .supply-info {
    border: 0.4px solid #2d2d2d;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    gap: 1rem;
  }

  @media (max-width: 800px) {
    .info-container {
      grid-template-columns: 1fr;
      .information {
        .title {
          text-align: right;
          padding-right: 1rem;
          padding-top: 0.5rem;
        }
        .wallet-info-wrapper {
          flex-direction: column;
        }
      }
    }
    .supply-info {
      flex-direction: column;
    }
  }
`

export default Information
