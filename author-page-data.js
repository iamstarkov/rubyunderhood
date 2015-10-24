import bake from 'tweet-baker';
import fs from 'fs-extra';
import moment from 'moment';
import numd from 'numd';

const d = function(input) { return moment(new Date(input)).format("DD MMMM YYYY"); };
const t = function(input) { return moment(new Date(input)).format("HH:mm"); };

const filterTimeline = (item)=> {
  return (item.text[0] !== '@') || (item.text.indexOf('@rubyunderhood') === 0);
};
const getWeekday = (date) => moment(new Date(date)).format("dddd");
const capitalize = (str) => str.split('').map((item, i) => i === 0 ? item.toUpperCase() : item).join('');

const separateByWeekdays = (state, item, i, arr)=> {
  const weekday = getWeekday(item.created_at);
  if (!state.length)
    state.push({weekday, tweets: [], ref: []});
  if (state[state.length - 1].weekday !== weekday)
    state.push({weekday, tweets: [], ref: []});
  state[state.length - 1].tweets.push(item);
  return state;
};

const tweetsUnit = numd('твит', 'твита', 'твитов');

const calculateImportantTreshold = (tweets, percentile) => {
  let treshold = 0, importantTweetCount = tweets.length;

  const isImportant = (tweet) =>
    tweet.favorite_count + tweet.retweet_count > treshold;

  while (importantTweetCount > tweets.length * percentile) {
    treshold += 1;
    importantTweetCount = tweets.filter(isImportant).length;
  }
  return treshold;
};

const articlePageData = (authorConfig) => {
  const author = fs.readJsonSync(`dump/${authorConfig.username}.json`);
  const tweets = author.tweets.reverse().filter(filterTimeline);
  const tweetsByWeekday = tweets.reduce(separateByWeekdays, []);
  const importantTreshold = calculateImportantTreshold(tweets, 0.1);

  return ()=> {
    return {author, tweetsByWeekday, d, t, bake, capitalize, tweetsUnit, importantTreshold};
  };
};

export default articlePageData;
