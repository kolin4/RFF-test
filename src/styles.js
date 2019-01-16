import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FormBox = styled.form`
  border: 1px solid lightblue;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
`
export const InputBox = styled.div`
  display: flex;
  padding: 1rem 2rem;
  align-items:center;
  position: relative;
  justify-content: space-between;
  label {
    margin-right: 1rem;
  }
`
export const Input = styled.input`
  height: 25px;
  border: none;
  border-bottom:1px solid ${({ error }) => (error ? 'red' : 'black')};
  outline: none;
  padding: 0 5px;
`
export const ErrMsg = styled.p`
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  transform: translate(-25%, -25%);
  color: red;
  font-size: 0.7rem;
`
export const SelectErr = styled.span`
  margin-left:1rem;
  color: red;
  font-size: 0.7rem;
`
export const TermLabel = styled.label`
  color: ${({ error }) => (error ? 'red' : 'black')}
`
export const Button = styled.button`
  width: 30%;
  padding: 5px 10px;
  background-color: blue;
  color: #fff;
`
