import styled from 'styled-components'

/* eslint react/prop-types: 0 */
const TokenInformation = ({ info }) => {
  return (
    <Wrapper>
      <h3>{info.name}</h3>
      <div className='price'>
        <span>{info.price}</span>
        <span className='usd'> (${info.usd}) </span>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  /* border: 0.4px solid #2d2d2d; */
  background: #1c1c1c;
  border: 0.5px solid #9f9f9f;
  border-radius: 5px;
  padding: 20px;
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
  .price {
    font-size: 0.8rem;
    font-weight: 500;
    line-height: 0.8;
    font-family: 'Orbitron', sans-serif;
    color: #ececec;
  }
  .usd {
    color: #31e2f1;
  }
  color: white;
`

export default TokenInformation
