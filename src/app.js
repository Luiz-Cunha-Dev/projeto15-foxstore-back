//Modules
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

//Routes

import SignUpRoutes from './routes/signup.router.js';
import SignInRoutes from './routes/singin.router.js';


//App
const app = express();
dotenv.config();

//App use modules
app.use(cors());
app.use(express.json());   

app.use(SignUpRoutes);
app.use(SignInRoutes);


//Server
const port = process.env.PORT;
app.listen(port, () => {
console.log("____________________________________________________");
console.log("|  ||  /|                                           |");
console.log("|  |/_|/     ☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆      |");
console.log(`|  /. .|     Server is running on port ${port}...      |`);
console.log("| =|_Y_|=    ☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆      |");
console.log("|  {>o<}                                            |");
console.log("|___________________________________________________|");
});
