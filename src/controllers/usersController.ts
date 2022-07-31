import { Request, Response } from 'express';
const usersService = require('../services/usersService');

const get = async (req: Request, res: Response) => {
    let operation = await usersService.get(req, res)
    res.send(operation.response);
};

const create = async (req: Request, res: Response) => {
    let operation = await usersService.create(req, res)
    res.send(operation.response);
};

const update = async (req: Request, res: Response) => {
    let operation = await usersService.update(req, res)
    res.send(operation.response);
};

const remove = async (req: Request, res: Response) => {
    let operation = await usersService.remove(req, res)
    res.send(operation.response);
};

module.exports = { get, create, update, remove };