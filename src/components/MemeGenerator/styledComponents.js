// Style your components here
import styled from 'styled-components'

export const MemeHeading = styled.h1`
  font-family: 'Roboto';
  color: #35469c;
  font-size: 20px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const ParagraphEle = styled.p`
  font-family: 'Roboto';
  color: white;
  font-size: ${props => props.fontSize};
  text-align: center;
`
export const MemeContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 350px;
  background-size: cover;
  background-image: ${props =>
    props.isSubmit ? `url("${props.bgImage}")` : null};
  display: ${props => (props.large ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    display: ${props => (props.large ? 'flex' : 'none')};
    flex-grow: 1;
    margin: 20px;
    height: 500px;
  }
`
export const FormContainer = styled.form``

export const Label = styled.label`
  font-family: 'Roboto';
  color: #7e858e;
`
export const InputElement = styled.input`
  border-color: #d7dfe9;
  border-radius: 5px;
  height: 45px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
`
export const GeneratorBtn = styled.button`
  font-family: 'Roboto';
  color: white;
  background-color: #0b69ff;
  border: none;
  border-radius: 5px;
  height: 40px;
  width: 130px;
  font-size: 16px;
`
export const FontSelect = styled.select`
  width: 100%;
  height: 40px;
  border-color: #d7dfe9;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 20px;
`
export const MemeBg = styled.div`
  padding: 20px;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`
export const MemBgMedium = styled.div`
  @media screen and (min-width: 768px) {
    width: 30%;
    flex-shrink: 0;
    margin: 20px;
  }
`
