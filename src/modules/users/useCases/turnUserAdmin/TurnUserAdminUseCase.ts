import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    const userBeforeAdmin = this.usersRepository.findById(user_id);
    if (!userBeforeAdmin) throw new Error("User not found");
    const userAdmin = this.usersRepository.turnAdmin(userBeforeAdmin);
    return userAdmin;
  }
}

export { TurnUserAdminUseCase };
