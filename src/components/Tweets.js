import styled from 'styled-components';

const tweets = (props) => {
    return (
      <Wrapper>
        <ImageSection>
          <RoundWrapper>
            <Image src={props.data.user.avatar}/>
          </RoundWrapper>
        </ImageSection>
        <TweetSection>
          <TweetInfo>
            <AccountLink>{props.data.user.displayName}</AccountLink>
            <AccountName>@{props.data.user.username}</AccountName>
            <MoreButton>...</MoreButton>
          </TweetInfo>
          <TweetContent>
            {props.data.tweet}
          </TweetContent>
        </TweetSection>
      </Wrapper>
    );
};

export default tweets;

const Wrapper = styled.div`
    border-bottom: 1px solid lightgray;
    padding: 15px;
    display: flex;
`

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

const RoundWrapper = styled.div`
  display: inline-block;
  width: 60px;
  height: 60px;
  overflow: hidden;
  border-radius: 50%;
`

const Image = styled.img`
  width: auto;
  height: 100%;
  margin-left: -50%;
`

const TweetSection = styled.div`
  flex: 6;
`

const TweetInfo = styled.div`
  display: flex;
  flex-direction: row;
`

const AccountLink = styled.h4`
  margin: 5px;
`

const AccountName = styled.p`
  margin: 5px;
  color: gray;
`

const MoreButton = styled.button`  
  margin: 5px;
  margin-left: auto;
  font-weight: bold;
  border: none;
  background-color: white;
  outline: none;
  cursor: pointer;
  color: gray;
`

const TweetContent = styled.div`
  margin-left: 5px;
  padding: 10px 0;
`