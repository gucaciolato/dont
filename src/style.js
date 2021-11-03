import styled from 'styled-components';

export const ToDo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 500px;
  padding: 5rem 2rem;
  background-color: #fff;
  font-family: 'Helvetica', cursive;
`

export const Form = styled.form`
  display: flex;
  align-items: center;
`

export const Title = styled.h1`
  color: #000;
  font-size: 3.2rem;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #4eb879;
  transition: color 0.3s;
`

export const Input = styled.input`
    border: 1px solid #4eb879;
    width: 200px;
    height: 35px;
    padding: 0 .5rem;
    border-radius: .25rem 0 0 .25rem;
    &:focus,
    &:active {
        outline: none;
        box-shadow:none;
    }
`

export const Button = styled.button`
    height: 37px;
    width: 100px;
    border: 1px solid #4eb879;
    background: #4eb879;
    color: #000;
    border-radius: 0 .25rem .25rem 0;
    &:focus,
    &:active {
        outline: none;
        box-shadow:none;
    }
`
export const Ul = styled.ul`
    border: 1px solid #4eb879;
    margin: 10px;
    list-style: none;
    border-radius: 1rem;
    width: 300px;
    min-height: 300px;
`

export const Li = styled.li`
    margin: 10px;
    width: 290px;
`