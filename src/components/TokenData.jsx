import styled from 'styled-components'
import { HiOutlineExternalLink } from 'react-icons/hi'
const TokenData = () => {
  return (
    <Wrapper>
      <label htmlFor='address'>ENTER A WALLET ADDRESS</label>
      <form>
        <div className='form-control'>
          <input
            type='text'
            name='address'
            id='address'
            placeholder='Wallet Address'
          />
        </div>
        <div className='btns'>
          <button type='submit' className='btn-primary'>
            <span>Look Up</span>
            <HiOutlineExternalLink />
          </button>
          <button type='button'>
            <span>Add to Favorite</span>
            <HiOutlineExternalLink />
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 0.4px solid #2d2d2d;
  padding: 0.8rem;
  border-radius: 5px;
  form {
    display: flex;
    align-items: flex-end;
    gap: 0.8rem;
    margin-top: 0.5rem;

    .form-control {
      flex: 1;
      height: 100%;
      input {
        width: 100%;
        box-sizing: border-box;
        height: 45px;
        background: transparent;
        border: 0.4px solid #2d2d2d;
        border-radius: 4px;
        padding-left: 10px;
        color: #fff;
        font-size: 1rem;
        transition: all ease-in-out .3s;

        &:focus {
          outline: 2px solid #11aeef;
        }
      }
      label {
        display: block;
      }
    }
    .btns {
      flex: 1;
      display: flex;
      gap: 0.8rem;
      height: 100%;

      button {
        flex: 1;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.4rem;
        border: none;
        font-weight: 400;
        border-radius: 8px;
        font-size: 0.8rem;
        text-transform: uppercase;
      }

      .btn-primary {
        background: #11aeef;
        color: white;
      }
    }
  }

  @media (max-width: 800px) {
    form {
      flex-direction: column;
      width: 100%;
      align-items: stretch;
    }
  }

  @media (max-width: 500px) {
    form {
      .btns {
        flex-direction: column;
        width: 100%;
        align-items: stretch;

        button {
          padding: 15px 0;
          font-size: 1rem;
        }
      }
      flex-direction: column;
      width: 100%;
      align-items: stretch;
    }
  }
`

export default TokenData
