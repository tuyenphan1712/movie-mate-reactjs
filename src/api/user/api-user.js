const users = [
  {
    id: 1,
    name: "MovieMate User",
    email: "user@moviemate.local",
    phone: "0900000001",
    birthday: "2000-01-01",
    gender: "Nam",
    user_role: "user",
    user_status: "active",
    password: "123456",
  },
  {
    id: 2,
    name: "MovieMate Admin",
    email: "admin@moviemate.local",
    phone: "0900000002",
    birthday: "1998-01-01",
    gender: "Nu",
    user_role: "admin",
    user_status: "active",
    password: "admin",
  },
];

export const getUser = async () => {
  return { data: users };
};

export const getUserById = async (id) => {
  return users.find((user) => String(user.id) === String(id)) || users[0];
};

export const getUserByNameOrEmail = async (textkey) => {
  const keyword = String(textkey || "").toLowerCase();
  return users.filter(
    (user) =>
      user.name.toLowerCase().includes(keyword) ||
      user.email.toLowerCase().includes(keyword)
  );
};

export const createUser = async (user) => {
  return {
    id: `local-${Date.now()}`,
    user_role: "user",
    user_status: "active",
    ...user,
  };
};

export const loginUser = async ({ email_or_phone }) => {
  const credential = String(email_or_phone || "").toLowerCase();
  const user =
    users.find(
      (item) =>
        item.email.toLowerCase() === credential ||
        String(item.phone) === credential
    ) || users[0];

  return { data: user };
};

export const updateUser = async (user) => {
  return user;
};

export const deleteUser = async (id) => {
  return { id };
};
