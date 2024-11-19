import Express from 'express';
import path from 'path';
import { publicPath } from '../config/configData.js';

const staticRouter = Express.Router();

staticRouter.get('/newUser', (req: Express.Request, res: Express.Response) => {
    const targetFilePath = path.join(publicPath, "/newUser.html");
    res.sendFile(targetFilePath);
});

staticRouter.get('/usersManagement', (req: Express.Request, res: Express.Response) => {
    const targetFilePath = path.join(publicPath, "/usersManagement.html");
    res.sendFile(targetFilePath);
});

staticRouter.get('/newEvent', (req: Express.Request, res: Express.Response) => {
    const targetFilePath = path.join(publicPath, "/newEvent.html");
    res.sendFile(targetFilePath);
});

staticRouter.get('/eventsManagement', (req: Express.Request, res: Express.Response) => {
    const targetFilePath = path.join(publicPath, "/eventsManagement.html");
    res.sendFile(targetFilePath);
});


export {staticRouter} ;

