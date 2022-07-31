import { Request, Response } from "express";
import { DeleteGroupUseCase } from "./DeleteGroupUseCases";

export class DeleteGroupController {

  constructor(
    private deleteGroupUseCase: DeleteGroupUseCase,
  ) { }
  async handle(req: Request, res: Response): Promise<Response> {
    const group_id = req.params.group_id;
    try {
      await this.deleteGroupUseCase.execute({
        group_id: group_id
      })
      return res.status(200).send({message: "Group removed."});
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || "Unexpected error."
      });
    }
  }
}