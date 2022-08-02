import { createUserUseCase } from ".";
import { User } from "../../entities/User";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

describe("Create User", () => {
	it("Shoud be able to create a new user.", async () => {
	
		const create = await createUserUseCase.execute({
			firstName: "alex",
			userId: "",
			lastName: "ruiz",
			email: "alex@gmail.com",
			groupId: "092d71b9-ae80-4191-b720-c923c19bdeb5"
		})
		
	})
})