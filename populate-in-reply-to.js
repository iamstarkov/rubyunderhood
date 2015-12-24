import Twitter from 'twitter';

// For every tweet in tweets that is a reply, pulls up the corresponding
// question tweet and records it into tweet.in_reply_to_status
// Returns: promise
// Warning: mutates tweets
const populateInReplyTo = (tokens, tweets)=> {
  const twitter = new Twitter(tokens);
  let repliedToIds = tweets
    .map(item=> item.in_reply_to_status_id_str).filter(id=> id);
  let promises = []
  while (repliedToIds.length > 0) {
    const ids = repliedToIds.splice(0, 100);
    const promise = new Promise((resolve, reject)=> {
      twitter.get('statuses/lookup', {id: ids.join(',')}, (err, data, response)=> {
        data.forEach(tweet=> {
          tweets.forEach(reply=> {
            if (reply.in_reply_to_status_id_str === tweet.id_str) {
              reply.in_reply_to_status = tweet
            }
          })
        })
        resolve()
      })
    })
    promises.push(promise)
  }
  return Promise.all(promises).then(()=> tweets)
}

export default populateInReplyTo;
