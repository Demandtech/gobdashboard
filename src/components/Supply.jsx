import styled from 'styled-components'

import circulate from '../assets/circulate.png'

/* eslint react/prop-types: 0 */
const Supply = ({ info }) => {
  console.log(info)
  return (
    <Wrapper>
      <div>{info.icon ? info.icon : <img src={circulate} alt='' />}</div>
      <div>
        <h3>{info.name}</h3>
        <div className='price'>
          <span className='only-up'>{info.price} $ONLYUP </span>
          <span className='usd'> ${info.usd}</span>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  padding: 20px;
  /* border: 0.4px solid #2d2d2d; */
  background: #1c1c1c;
  border: 0.5px solid #9f9f9f;
  border-radius: 5px;
  flex: 1;
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  h3 {
    font-weight: 400;
    color: #6c6c6c;
    line-height: 1;
    padding-bottom: 5px;
    text-transform: uppercase;
    font-family: Phage;
    font-size: 1rem;
    padding-bottom: 0.5rem;
  }
  .price {
    display: flex;
    flex-direction: column;

    .only-up {
      font-family: 'Orbitron', sans-serif;
      font-size: 0.8rem;
      padding-bottom: 0.5rem;
      color: #ececec;
    }
    .usd {
      color: #31e2f1;
      font-family: 'Orbitron', sans-serif;
    }
  }
  img {
    width: 20px;
  }
`

export default Supply
