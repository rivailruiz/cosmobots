import { Request, Response } from "express";
import { ListUsersByGroupIdUseCase } from "./ListUsersByGroupIdUseCases";

export class ListUsersByGroupIdController {

  constructor(
    private listUsersByGroupIdUseCase: ListUsersByGroupIdUseCase,
  ) { }
  async handle(req: Request, res: Response): Promise<Response> {
    const groupId = req.params.group_id;
    try {
      let list = await this.listUsersByGroupIdUseCase.execute({groupId})
      return res.status(200).send(list);
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || "Unexpected error."
      });
    }
  }
}