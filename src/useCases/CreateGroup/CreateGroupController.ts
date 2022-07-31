import { Request, Response } from "express";
import { CreateGroupUseCase } from "./CreateGroupUseCases";
export class CreateGroupController {

  constructor(
    private createGroupUseCase: CreateGroupUseCase,
  ) { }
  async handle(req: Request, res: Response): Promise<Response> {
    const { group_name, group_description } = req.body;
    try {
      await this.createGroupUseCase.execute({
        group_id: "",
        group_name,
        group_description,
      })
      return res.status(201).send({message: "Group created."});
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || "Unexpected error."
      });
    }
  }
}