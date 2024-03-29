export const API_VERSION = "/api/v1";

export enum API_ENDPOINTS {
  LOGIN = "/login",
  REGISTER = "/register",
  VERIFY = "/verify",

  GET_SCHEDULES_BY_USER = "/user/:id",
  ADD_SCHEDULE = "/",
  GET_ALL_SCHEDULES = "/all/:team",
  UPDATE_SCHEDULE_STATUS = "/",
}
