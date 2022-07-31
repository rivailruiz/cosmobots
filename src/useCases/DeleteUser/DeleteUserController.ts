import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCases";
export class DeleteUserController {

  constructor(
    private deleteUserUseCase: DeleteUserUseCase,
  ) { }
  async handle(req: Request, res: Response): Promise<Response> {
    const userid = req.params.userid;
    try {
      await this.deleteUserUseCase.execute({
        userId: userid
      })
      return res.status(200).send({message: "User removed."});
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || "Unexpected error."
      });
    }
  }
}