import styled from 'styled-components'
import { HiOutlineExternalLink, HiBookmark } from 'react-icons/hi'
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
          <button type='button' className='btn-secondary'>
            <span>Add to Favorite</span>
            <HiBookmark />
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 0.5px solid #9c9c9c;

  padding: 0.8rem;
  border-radius: 5px;

  label {
    display: block;
    font-family: phage;
    font-weight: 500;
    color: #ececec;
  }

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
        border: 0.5px solid #9c9c9c;
        border-radius: 4px;
        padding-left: 10px;
        color: #ececec;
        font-size: 1rem;
        transition: all ease-in-out 0.3s;
        font-family: phage;

        &:focus {
          outline: 2px solid #31e2f1;
        }
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
        font-family: phage;
      }

      .btn-primary {
        background: #31e2f1;
        color: #ececec;
      }
      .btn-secondary {
        background: #ececec;
        color: #31e2f1;
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
