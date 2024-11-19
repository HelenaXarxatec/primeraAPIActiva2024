import Express from 'express';
import userRouter from './userRouter.js';
import eventRouter from './eventRouter.js';


const apiRouter = Express.Router();

apiRouter.use("/users", userRouter);
apiRouter.use("/events", eventRouter);

export default apiRouter;