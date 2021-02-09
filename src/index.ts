import app from './app'
import {createConnection} from "typeorm";

createConnection()
    .then(() => {
        app.listen(3000);
        console.log('server up and running');
    })
    .catch((err) => console.log('connection error : ' + err));




