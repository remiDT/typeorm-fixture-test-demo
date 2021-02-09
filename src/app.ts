import "reflect-metadata";
import * as express from "express";
import {Request, Response} from "express";
import {getManager, getRepository} from "typeorm";
import {Article} from "./entity/Article";
import {User} from "./entity/User";
const app = express();

app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
    res.send({homepage : 'Welcome'});
})

app.get("/articles", async (req: Request, res: Response) => {
    const articles = await getRepository(Article).find({relations: ['tags','user'], order: {'title' : 'ASC'} });
    res.send(articles);
});

app.get('/users',  async (req: Request, res: Response) => {
   const users = await getRepository(User).find();
   res.send(users);
});

app.post('/users', async (req: Request, res: Response) => {
    const user = new User();
    user.firstName = 'Margaret';
    user.lastName = 'Hamilton';
    await getManager().save(User, user);
    res.sendStatus(201);
});


export default app;
