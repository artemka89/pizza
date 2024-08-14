import { UserDto } from '@/shared/api/models/auth/auth-schemas';

import { User } from '../model/types';

export const mapUser = (data: UserDto): User => {
  return {
    id: data.$id,
    name: data.name,
    email: data.email,
    phone: data.phone,
  };
};
