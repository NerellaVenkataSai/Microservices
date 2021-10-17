import express from 'express';
import {json} from 'body-parser';
import 'express-async-errors';
import {currentUserRouter} from './routes/current-user';
import {signInRouter} from './routes/signin';
import {signOutRouter} from './routes/signout';
import {signUpRouter} from './routes/signup';
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from './errors/not-found-error';


const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(signInRouter);
app.use(signOutRouter);
app.use(signUpRouter);

// to handle async error handler in express we need to pass error in next
// app.all('*', async (req, res, next) => {
//     next(new NotFoundError());
// });

// to handle async error on normal throw syntax without using next callback we use express-async-errors
app.all('*', async (req, res, next) => {
    throw new NotFoundError();
});


app.use(errorHandler);

app.listen(3000, () => {
    console.log('Listening on port 3000!!!!')
})