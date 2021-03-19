import AddTweet from './components/AddTweet'
import Tweets from './components/Tweets'
import styled from 'styled-components';
import Home from  './components/Home';
import { useState } from 'react';
//
// THOSE ARE THE TWEETS YOU NEED TO RENDER ON SCREEN, IMAGINE THOSE BEING SENT BACK FROM THE SERVER
// 
const TWEETS = [
  {
    id: 1,
    tweet: 'This is the best tweet in the world. Even tho this is not actually a tweet. Oh wel...',
    user: {
      avatar: "https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg",
      displayName: 'Mrs Avatar',
      username: 'mrsavatar'
    }
  },
  {
    id: 2,
    tweet: 'This is the best tweet in the world. Even tho this is not actually a tweet. Oh wel...',
    user: {
      avatar: "https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg",
      displayName: 'Mrs Avatar',
      username: 'mrsavatar'
    }
  },
  {
    id: 3,
    tweet: 'This is the best tweet in the world. Even tho this is not actually a tweet. Oh wel...',
    user: {
      avatar: "https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg",
      displayName: 'Mrs Avatar',
      username: 'mrsavatar'
    }
  },
  {
    id: 4,
    tweet: 'This is the best tweet in the world. Even tho this is not actually a tweet. Oh wel...',
    user: {
      avatar: "https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg",
      displayName: 'Mrs Avatar',
      username: 'mrsavatar'
    }
  },
  {
    id: 5,
    tweet: 'This is the best tweet in the world. Even tho this is not actually a tweet. Oh wel...',
    user: {
      avatar: "https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg",
      displayName: 'Mrs Avatar',
      username: 'mrsavatar'
    }
  },
  {
    id: 6,
    tweet: 'This is the best tweet in the world. Even tho this is not actually a tweet. Oh wel...',
    user: {
      avatar: "https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg",
      displayName: 'Mrs Avatar',
      username: 'mrsavatar'
    }
  },
  {
    id: 7,
    tweet: 'This is the best tweet in the world. Even tho this is not actually a tweet. Oh wel...',
    user: {
      avatar: "https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg",
      displayName: 'Mrs Avatar',
      username: 'mrsavatar'
    }
  },
  {
    id: 8,
    tweet: 'This is the best tweet in the world. Even tho this is not actually a tweet. Oh wel...',
    user: {
      avatar: "https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg",
      displayName: 'Mrs Avatar',
      username: 'mrsavatar'
    }
  },
  {
    id: 9,
    tweet: 'This is the best tweet in the world. Even tho this is not actually a tweet. Oh wel...',
    user: {
      avatar: "https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg",
      displayName: 'Mrs Avatar',
      username: 'mrsavatar'
    }
  },
]

const CURRENT_USER = {
  avatar: "https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg",
  displayName: 'Mrs Avatar',
  username: 'mrsavatar'
}

const REPLYOPTIONS = [
  'Everyone can reply', 
  'Only people you follow can reply', 
  'Only people you mention can reply'
]

const App = () => {
  const [tweets, setTweetsState] = useState(TWEETS);

  let addTweet = (value, whoCanReply) => {
    const tweet = {
      id: tweets.length + 1,
      tweet: value,
      user: CURRENT_USER
    }
   
    const updatedTweets = [...tweets];
    updatedTweets.unshift(tweet);
    setTweetsState(updatedTweets);
  }

  return (
    <Wrapper>
      <Home/>
      <AddTweet replyOptions={REPLYOPTIONS} add={addTweet} currentUser={CURRENT_USER}/>
      {tweets.map(key => <Tweets data={key} key={key.id}/>)}
    </Wrapper>
  );
}

export default App;

// styled components that we use in majority of our projects
// check them out, they're pretty cool
const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  border-left: 1px solid lightgray;
  border-right: 1px solid lightgray;

  @media (max-width: 500px) {
    font-size: 14px;
  }
`