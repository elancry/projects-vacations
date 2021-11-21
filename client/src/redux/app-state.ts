import IFollowModel from "../components/interfaces/IFollows";
import { IVacationModel } from "../components/interfaces/IVacationModel";
import UserModel from "../components/interfaces/UserModel";

export class AppState {
  user: UserModel = new UserModel();
  isLogin: boolean = false;
  vacations: IVacationModel[] = [];
  vacationToEdit: IVacationModel = {
    vacationId: 0,
    description: "",
    destination: "",
    price: 0,
    fromDate: "",
    toDate: "",
  };
  followedVacations: IFollowModel[] = [];
  firstName: string = "";
}
