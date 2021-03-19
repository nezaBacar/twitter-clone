import styled from 'styled-components';
import { faImage, faChartBar, faSmileBeam, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from './Dropdown';
import { useState } from 'react';

const AddTweet = (props) => { 
  const [value, setValueState] = useState('');
  const [whoCanReply, setWhoCanReplyState] = useState(props.replyOptions[0]);
 
  let textChangeHandler = (event) => {    
    setValueState(event.target.value);  
  }

  let dropdownChangeHandler = (event) => {    
    setWhoCanReplyState(event.target.value);  
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    props.add(value, whoCanReply);
    setValueState('');
    setWhoCanReplyState(props.replyOptions[0]);
  }

  return (
    <Wrapper>
      <AddForm onSubmit={handleSubmit}>
        <ImageSection>
          <RoundWrapper>
            <Image src={props.currentUser.avatar}/>
          </RoundWrapper>
        </ImageSection>
        <FormSection>
          <TextField placeholder="What's happening?" value={value} onChange={textChangeHandler}/>
          <RepplySettings>
            <Dropdown value={whoCanReply} possibleValues={props.replyOptions} handleChange={dropdownChangeHandler}/>
          </RepplySettings>
          <TweetExtras>
            <StyledIcon icon={faImage} />
            <StyledIcon icon={faChartBar} />
            <StyledIcon icon={faSmileBeam} />
            <StyledIcon icon={faCalendar} />
            <TweetButton type="submit" value="Tweet" disabled={!value}/>
          </TweetExtras>
        </FormSection>
      </AddForm>
    </Wrapper>
    );
  };

export default AddTweet;

const StyledIcon = styled(FontAwesomeIcon)`
  color: #5dade2;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;

  &:active {
    position: relative;
    left: 5px;
  }
`

const Wrapper = styled.div`
  padding: 60px 15px 5px 15px;
  border-bottom: 1px solid lightgray;
`

const AddForm = styled.form`
  height: 170px;
  display: flex;
`

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding-top: 10px;
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

const FormSection = styled.div`
  flex: 6;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`

const TextField = styled.input`
  outline: none;
  border: none;
  margin: 0;
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: gray;

  &:focus {
    color: black;
  }

  @media (max-width: 500px) {
    font-size: 14px;
  }
`

const RepplySettings = styled.div`
  flex: 1;
  border-bottom: 1px solid lightgray;
`

const TweetExtras = styled.div`
  flex: 1;
  padding-top: 10px;
`

const TweetButton = styled.input`
  color: #FFF;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  padding: 10px 15px;
  float: right;
  background-color: #5dade2;
  border-radius: 30px;
  border: none;
  outline: none;
  cursor: pointer;

  &:active {
    position: relative;
    left: 5px;
  }

  &:disabled {
    background-color: #a4d1ef;
  }
`