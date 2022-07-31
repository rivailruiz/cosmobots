import { Request, Response } from "express";
import { CreateGroupUseCase } from "./CreateUserUseCases";

export class CreateUserController {

  constructor(
    private createUserUseCase: CreateGroupUseCase,
  ) { }
  async handle(req: Request, res: Response): Promise<Response> {
    const { firstName, lastName, email, groupId } = req.body;
    try {
      await this.createUserUseCase.execute({
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