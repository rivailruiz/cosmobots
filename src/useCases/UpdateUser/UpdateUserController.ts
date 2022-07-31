import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCases";
export class UpdateUserController {

  constructor(
    private updateUserUseCase: UpdateUserUseCase,
  ) { }
  async handle(req: Request, res: Response): Promise<Response> {
    const { firstName, lastName, email, groupId } = req.body;
    const userid = req.params.userid;
    try {
      await this.updateUserUseCase.execute({
        firstName,
        lastName,
        email,
        groupId,
        userId: userid
      })
      return res.status(200).send({
        message: "Updated."
      });
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || "Unexpected error."
      });
    }
  }
}