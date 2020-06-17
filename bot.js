const twit=require('twit');
const config=require("./config/keys");
const bot=new twit(config);


function retweet() {
    
    const params={
        q: '#javascript',
        result_type: 'recent',
        count: 20
    }  
    
   bot.get('search/tweets', params, (err,data,response) => {
       const tweets= data.statuses
       if (!err) 
    {
           for (let dat of tweets)
            {
               const retweetId=dat.id_str
               bot.post('statuses/retweet/:id',{id:retweetId}, (err, response) =>
                {
                   if (response)
                    // if condition is TRUE do something
                    console.log("Retweeted:"+retweetId)
                    console.log(tweets)
                   
                   if(err) 
                    // do something else
                    console.log("Ooops something went wrong...lets go back to the code")
                   
               })
           }
       }
   })
}
setInterval(retweet,15000);
