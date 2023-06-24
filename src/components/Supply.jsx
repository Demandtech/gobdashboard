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
          <span> ${info.usd}</span>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  padding: 1rem;
  border: 0.4px solid #2d2d2d;
  border-radius: 5px;
  flex: 1;
  display: flex;
  gap: 0.4rem;
  align-items: flex-start;
  h3 {
    font-weight: 400;
    color: #6c6c6c;
    line-height: 1;
    padding-bottom: 5px;
    text-transform: uppercase;
    font-family: Phage;
    font-size: 1rem;
  }
  .price {
    display: flex;
    flex-direction: column;

    .only-up {
      font-family: 'Orbitron', sans-serif;
      font-size: 0.8rem;
    }
  }
  img {
    width: 20px;
  }
`

export default Supply
