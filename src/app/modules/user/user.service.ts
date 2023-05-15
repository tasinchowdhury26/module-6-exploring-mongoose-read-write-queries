import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload); // instance of User
  await user.save(); // this is an instance method provided by mongoose

  console.log(user.fullName()); // our custom instance method
  return user;
};

export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const getUserByIdFromDB = async (
  payload: IUser["id"]
): Promise<IUser | null> => {
  const user = await User.findOne(
    { id: payload },
    {
      name: 1,
      email: 1,
      contactNo: 1,
    }
  );
  return user;
};

export const getAdminUsersFromDB = async () => {
  const admins = await User.getAdminUsers();
  return admins;
};
