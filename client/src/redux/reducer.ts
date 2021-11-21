import { AppState } from "./app-state";
import { Action } from "./action";
import { ActionType } from "./action-type";

export function reducer(oldAppState: AppState = new AppState(), action: Action): AppState {
  const newAppState = { ...oldAppState };

  switch (action.type) {
    // User ActionType //
    case ActionType.getUser:
      newAppState.user = action.payload; // payload = the new user
      break;
    case ActionType.isLogin:
      newAppState.isLogin = action.payload;
      break;
    case ActionType.welcomeUser:
      newAppState.firstName = action.payload;
      break;
    // case ActionType.userType:
    //   newAppState.user = action.payload;
    //   break;
    // Vacations ActionType //
    case ActionType.getAllVacations:
      newAppState.vacations = action.payload;
      break;
    case ActionType.removeVacation:
      newAppState.vacations = oldAppState.vacations.filter(
        (vacation) => vacation.vacationId !== action.payload.vacationId
      );
      break;
    case ActionType.editVacation:
      newAppState.vacationToEdit = action.payload;
      break;
    // Follows ActionType //
    case ActionType.getAllFollowedVacations:
      newAppState.followedVacations = action.payload; // payload = all followed vacations
      break;
    case ActionType.follow:
      newAppState.followedVacations.push(action.payload); // payload - the added follow
      break;
    case ActionType.unFollow:
      const indexToDelete = newAppState.followedVacations.findIndex(
        (f) => f.vacationId === action.payload
      ); // payload = the removed follow
      newAppState.followedVacations.splice(indexToDelete, 1);
      break;
  }
  sessionStorage.setItem("user", JSON.stringify(newAppState.user));
  return newAppState;
}
