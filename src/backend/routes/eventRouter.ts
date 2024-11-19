import Express from 'express';
import { newEvent, getAll, getById, updateEvent, deleteEvent } from '../controllers/eventController.js';

const eventRouter = Express.Router();

eventRouter.get("/", async (req: Express.Request, res: Express.Response) => {
    const result = await getAll();
    res.json(result);
});

eventRouter.get("/:id", async (req: Express.Request, res: Express.Response) => {
    const result = await getById(req.params.id);
    res.send(result);
});

eventRouter.post("/", async (req: Express.Request, res: Express.Response) => {
    const event = {
        eventName: req.body.eventName,
        location: req.body.location,
        eventType: req.body.eventType,
        ticketPrice: req.body.ticketPrice,
        description: req.body.description || null,
    };
    const result = await newEvent(event);
    res.status(201).json(result);
});

eventRouter.put("/:id", async (req: Express.Request, res: Express.Response) => {
    const event = {
        eventName: req.body.eventName,
        location: req.body.location,
        eventType: req.body.eventType,
        ticketPrice: req.body.ticketPrice,
        description: req.body.description || null,
    };
    const result = await updateEvent(req.params.id, event);
    res.send(result);
});

eventRouter.delete("/:id", async (req: Express.Request, res: Express.Response) => {
    const result = await deleteEvent(req.params.id);
    res.send(result);
});

export default eventRouter;

