// Call this script to fill in in-reply-to for already dumped tweets
// TODO: remove once in-reply-to is filled in for every tweet

import fs from 'fs-extra';
import tokens from 'twitter-tokens';
import populateInReplyTo from './populate-in-reply-to'
import authors from './authors';

authors.forEach(author => {
  const data = require(`./dump/${author.username}.json`);
  populateInReplyTo(tokens, data.tweets).then(()=>
    fs.outputJson(`./dump/${author.username}.json`, data, (err)=> console.log(`${author.username} done`))
  )
});
