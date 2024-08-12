import { useMutation } from '@tanstack/react-query';

import { orderApi } from '@/shared/api/models/order';

import { CreateOrder } from './types';

export function useCreateOrder() {
  return useMutation({
    mutationKey: ['create-order'],
    mutationFn: (data: CreateOrder) => orderApi.createOrder(data),
  });
}
