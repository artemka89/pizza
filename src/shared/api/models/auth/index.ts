import { ID, Permission, Role } from 'appwrite';

import { APPWRITE } from '../../config/appwrite';
import { account, databases } from '../../config/appwrite-config';

import { UserDtoSchema } from './auth-schemas';

export const authApi = {
  signUp: async ({ email, password }: { email: string; password: string }) => {
    const userAccount = await account.create(ID.unique(), email, password);
    if (!userAccount) return;

    const session = await account.createEmailPasswordSession(email, password);
    if (!session) return;

    await account.get();

    await databases.createDocument(
      APPWRITE.DATABASE_ID,
      APPWRITE.CART_COLLECTION_ID,
      userAccount.$id,
      {
        cartItem: [],
      },
      [
        Permission.write(Role.user(userAccount.$id)),
        Permission.read(Role.user(userAccount.$id)),
        Permission.update(Role.user(userAccount.$id)),
      ],
    );

    return userAccount;
  },
  signIn: async ({ email, password }: { email: string; password: string }) => {
    const session = await account.createEmailPasswordSession(email, password);

    return session;
  },
  getUser: async () => {
    const user = await account.get();
    return UserDtoSchema.parse(user);
  },
  signOut: async () => {
    await account.deleteSession('current');
  },
};
