export const PUBLIC_URL = {
  root: (url = "") => `${url || ""}`,

  //? Аутентификация
  register: () => PUBLIC_URL.root("/auth/register"),
  login: () => PUBLIC_URL.root("/auth/login"),
  accessToken: () => PUBLIC_URL.root("/auth/login/access-token"),

  //? Пользователи
  profile: () => PUBLIC_URL.root("/user/profile"),
  getUserById: (id: string) => PUBLIC_URL.root(`/user/by-id/${id}`),
  updateUser: (id: string) => PUBLIC_URL.root(`/user/${id}`),
  deleteUser: (id: string) => PUBLIC_URL.root(`/user/${id}`),
  operators: () => PUBLIC_URL.root("/user/operators"),
  getOperatorById: (id: string) => PUBLIC_URL.root(`/user/operators/${id}`),

  // ?Тикеты
  createTicket: () => PUBLIC_URL.root("/ticket/create"),
  allTickets: () => PUBLIC_URL.root("/ticket/tickets"),
  ticketById: (id: string) => PUBLIC_URL.root(`/ticket/tickets/${id}`),
  assignTicket: (id: string) => PUBLIC_URL.root(`/ticket/${id}/assign`),
  addComment: (id: string) => PUBLIC_URL.root(`/ticket/${id}/comments`),
  updateStatus: (id: string) => PUBLIC_URL.root(`/ticket/${id}/status`),
  deleteTicket: (id: string) => PUBLIC_URL.root(`/ticket/${id}`),
};
