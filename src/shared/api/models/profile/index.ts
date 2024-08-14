import { account } from '../../config/appwrite-config';

export const profileApi = {
  updateName: async (value: string) => {
    const user = await account.updateName(value);
    return user;
  },
  updatePhone: async (data: { phone: string; password: string }) => {
    const user = await account.updatePhone(data.phone, data.password);
    return user;
  },
  updateEmail: async (data: { email: string; password: string }) => {
    const user = await account.updateEmail(data.email, data.password);
    return user;
  },
};
