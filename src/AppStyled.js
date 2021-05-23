import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/images/bg-pattern-desktop.svg");
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    background-image: linear-gradient(135deg, hsl(0, 0%, 100%) 0%, hsl(0, 100%, 98%) 100%);
  }
`


export const WrapperLeft = styled.div`
  display: flex;
  max-height: 100%;
  flex: 3 1 auto;
  flex-direction: column;
  margin-left: 10rem;
  margin-top: 5rem;
  @media (max-width: 768px) {
    max-width: 100%;
    flex: 1 1 auto;
    margin-left: 0;
    margin-top: 2rem;
    text-align: center;
  }
`

export const WrapperRight = styled.div`
  display: flex;
  height: 100%;
  flex: 1 1 auto;
  justify-content: flex-end;
`

export const Logo = styled.img`
  width: 10rem;
  @media (max-width: 768px) {
    margin-left: 2rem;
  }
`

export const Img = styled.img`
  height: 100%;
`

export const ImgMobile = styled.img`
  margin-top: 2rem;
  height: 15rem;
`

export const Title = styled.p`
  margin-top: 5rem;
  font-family: 'JosefinSansRegular', sans-serif;
  color: hsl(0, 36%, 70%);
  font-size: 6rem;
  line-height: 1;
  @media (max-width: 768px) {
    margin-top: 2rem;
    font-size: 3rem;
  }
`

export const Subtitle = styled.p`
  font-family: 'JosefinSansRegular', sans-serif;
  color: hsl(0, 6%, 24%);
  font-size: 6rem;
  line-height: 1;
  max-width: 30rem;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`

export const Text = styled.p`
  font-family: 'JosefinSansRegular', sans-serif;
  color: hsl(0, 36%, 70%);
  font-size: 16px;
  max-width: 30rem;
  line-height: 2;
  @media (max-width: 768px) {
    margin: 0 1rem;
  }
`

export const InputWithButton = styled.div`
  margin-top: 2rem;
  position: relative;
  max-width: 30rem;
  @media (max-width: 768px) {
    max-width: 18rem;
    margin-left: 0.8rem;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 1rem 2rem;
  border-radius: 2rem;
  border: ${props => props.isValid ? "1px solid hsl(0, 36%, 70%)" : "1px solid hsl(0, 93%, 68%)" };
  font-family: 'JosefinSansRegular', sans-serif;
  font-size: 16px;
  ::placeholder {
    color: hsl(0, 36%, 70%);
  }
  :focus {
    outline: none;
    // border: 1px solid hsl(0, 93%, 68%);
  }
`

export const Button = styled.button`
  position: absolute;
  right: -65px;
  padding: 0.95rem 2.5rem;
  border-radius: 2rem;
  border: 0;
  background-image: linear-gradient(135deg, hsl(0, 80%, 86%) 0%, hsl(0, 74%, 74%) 100%);
  :hover {
    opacity: 0.7;
    box-shadow: 7px 15px 15px -4px hsl(0,36%,70%);
  }
`

export const ErrorImg = styled.img`
  position: absolute;
  right: 35px;
  width: 2rem;
  top: calc(50% - 1rem);
`

export const ErrorText = styled(Text)`
  color: hsl(0, 93%, 68%);
  margin-left: 2rem;
  font-size: 12px;
`