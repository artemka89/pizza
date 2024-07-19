import { Account, Client, Databases, Storage } from 'appwrite';

import { APPWRITE } from '@/shared/constants/appwrite';

const client = new Client()
  .setEndpoint(APPWRITE.BASE_URL)
  .setProject(APPWRITE.PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
