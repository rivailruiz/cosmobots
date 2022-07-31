import { Request, Response } from "express";
import { ListUsersUseCase } from "./ListUsersUseCases";
export class ListUsersController {

  constructor(
    private listUsersUseCase: ListUsersUseCase,
  ) { }
  async handle(req: Request, res: Response): Promise<Response> {
    const { firstName, lastName, email, groupId } = req.body;
    try {
      let list = await this.listUsersUseCase.execute()
      return res.status(200).send(list);
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || "Unexpected error."
      });
    }
  }
}