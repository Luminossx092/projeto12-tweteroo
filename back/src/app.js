import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

const usuarios = [{
    username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
}];
const tweets = [{
    username: "bobesponja",
    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub"
},{
    username: "bobesponja",
    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "lol"
},{
    username: "bobesponja",
    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "é sobre isso"
}];

app.post('/sign-up',((req,res)=>{
    usuarios.push(req.body);
    res.status(201).send("OK");
}))
app.post('/tweets',((req,res)=>{
    const tweetReq = req.body;
    if(!tweets.find(t=>t.username==tweetReq.username)){
        res.status(401).send('UNAUTHORIZED')
    }
    tweets.push(tweetReq);
    res.status(201).send("OK");
}))
app.get('/tweets',((_,res)=>{
    const arr = [];
    const lastTweets = tweets.reverse().slice(0,10)
    if(lastTweets.length == 0){
        res.status(404);
    }
    for(let i = 0;i<lastTweets.length;i++){
        arr.push({...lastTweets[i],avatar: usuarios.find(u=>u.username==lastTweets[i].username).avatar});
    }
    res.send(arr);
}))

const PORT = 5000;
app.listen(PORT,()=>{console.log('iniciou esse servidor: ' + PORT)});