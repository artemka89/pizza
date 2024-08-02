import { ID } from 'appwrite';

import { account } from '../../config/appwrite-config';

import { UserDtoSchema } from './auth-schemas';

export const authApi = {
  signUp: async ({ email, password }: { email: string; password: string }) => {
    const user = await account.create(ID.unique(), email, password);
    return user;
  },
  signIn: async ({ email, password }: { email: string; password: string }) => {
    const session = await account.createEmailPasswordSession(email, password);

    return session;
  },
  getUser: async () => {
    const user = await account.get();
    return UserDtoSchema.parse(user);
  },
};
