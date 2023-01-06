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
    res.send("OK");
}))
app.post('/tweets',((req,res)=>{
    tweets.push(req.body);
    console.log(tweets)
    res.send("OK");
}))
app.get('/tweets',((_,res)=>{
    const arr = [];
    for(let i = 0;i<10&&i<tweets.length;i++){
        arr.push({...tweets[i],avatar: usuarios.find(u=>u.username==tweets[i].username).avatar});
    }
    res.send(arr);
}))

const PORT = 5000;
app.listen(PORT,()=>{console.log('iniciou esse servidor: ' + PORT)});