import { Request, Response } from 'express';
const grousService = require('../services/groupsService');

const get = async (req: Request, res: Response) => {
    let operation = await grousService.get(req, res)
    res.send(operation.response);
};

const create = async (req: Request, res: Response) => {
    let operation = await grousService.create(req, res)
    res.send(operation.response);
};

const update = async (req: Request, res: Response) => {
    let operation = await grousService.update(req, res)
    res.send(operation.response);
};

const remove = async (req: Request, res: Response) => {
    let operation = await grousService.remove(req, res)
    res.send(operation.response);
};

module.exports = { get, create, update, remove };