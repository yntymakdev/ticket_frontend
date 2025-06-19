export enum Role {
  OPERATOR = "OPERATOR",
  SUPERVISOR = "SUPERVISOR",
}

export interface IUser {
  id: string;
  email: string;
  password: string;
  role: Role;
  tickets?: ITicket[]; // тикеты, созданные пользователем
  comments?: IComment[]; // комментарии, оставленные пользователем
  assigned?: IAssignment[]; // тикеты, назначенные ему
  assignedBy?: IAssignment[]; // тикеты, которые он назначал
}
export interface IUserEditInput extends Pick<IUser, "email" | "role"> {}
