import styled from 'styled-components'
/* eslint react/prop-types: 0 */
const WalletInformation = ({ info }) => {
  // console.log(title)
  console.log(info)
  return (
    <Wrapper>
      <div className='icon'>
        <img src={info.icon.wallet} alt='' />
        <div className='sub-img'>
          <img src={info.icon.subImg} alt='' />
        </div>
      </div>
      <h3>{info.name}</h3>
      <div className='price'>
        <span>ETH: {info.ethPrice} </span>
        <span className='usd'>USD: {info.dollarPrice} </span>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 20px;
  border: 0.5px solid #9f9f9f;
  border-radius: 5px;
  flex: 1;
  h3 {
    text-transform: uppercase;
    font-weight: 600;
    color: #6c6c6c;
    line-height: 1;
    padding: 5px 0;
    font-family: Phage;
    font-size: 1rem;
  }
  .icon {
    position: relative;
    width: 30px;
    .sub-img {
      width: 25px;
      position: absolute;
      right: -15px;
      bottom: -4px;
      img {
        width: 100%;
      }
    }
  }
  .price {
    display: flex;
    gap: 1rem;
    font-size: 0.8rem;
    font-weight: 500;
    line-height: 0.8;
    font-family: 'Orbitron', sans-serif;

    .usd {
      color: #11aeef;
    }
  }
  color: white;
`

export default WalletInformation
