import styled from 'styled-components';


const home = (props) => (
    <Wrapper>
      <Home>
        <H1>Home</H1>
      </Home>
    </Wrapper>
);

export default home;


const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  position: relative;
`

const Home = styled.div`
  position: fixed;
  max-width: inherit;
  width: 100%;
  z-index: 100;
  background-color: white;
  height: 60px;
  border-bottom: 1px solid lightgray;
`

const H1 = styled.h2`
  margin: 0;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  padding-left: 20px;
`