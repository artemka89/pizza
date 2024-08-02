import { account } from '../../config/appwrite-config';

export const authApi = {
  signIn: async ({ email, password }: { email: string; password: string }) => {
    const session = await account.createEmailPasswordSession(email, password);

    return session;
  },
  getUser: async () => {
    const user = await account.get();
    return user;
  },
};
