import { Request, Response } from "express";
import { UpdateGroupUseCase } from "./UpdateGroupUseCases";

export class UpdateGroupController {

  constructor(
    private updateGroupUseCase: UpdateGroupUseCase,
  ) { }
  async handle(req: Request, res: Response): Promise<Response> {
    const { group_name, group_description } = req.body;
    const group_id = req.params.group_id;
    try {
      await this.updateGroupUseCase.execute({
        group_id: group_id,
        group_name,
        group_description,
      })
      return res.status(201).send({message: "Group updated."});
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || "Unexpected error."
      });
    }
  }
}