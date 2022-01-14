import { User } from "../..";

export interface LoggedInActionPayload {
  user: User;
  redirectUrl?: string;
}
