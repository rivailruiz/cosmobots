import { Request, Response } from "express";
import { ListGroupUseCase } from "./ListGroupUseCases";

export class ListGroupController {

  constructor(
    private listGroupUseCase: ListGroupUseCase,
  ) { }
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const list = await this.listGroupUseCase.execute();
      return res.status(201).send(list);
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || "Unexpected error."
      });
    }
  }
}