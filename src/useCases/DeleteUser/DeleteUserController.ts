import { Request, Response } from "express";
import { DeleteUserUseCase as DeleteUserUseCase } from "./DeleteUserUseCases";
export class DeleteUserController {

  constructor(
    private deleteUserUseCase: DeleteUserUseCase,
  ) { }
  async handle(req: Request, res: Response): Promise<Response> {
    const { firstName, lastName, email, groupId } = req.body;
    try {
      await this.deleteUserUseCase.execute({
        firstName,
        lastName,
        email,
        groupId,
        userId: ""
      })
      return res.status(201).send({message: "User created."});
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || "Unexpected error."
      });
    }
  }
}