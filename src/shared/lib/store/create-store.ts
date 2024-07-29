import { subscribeWithSelector } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';
import { StateCreator } from 'zustand/vanilla';

type MiddlewareStoreCreator<T> = StateCreator<
  T,
  [['zustand/subscribeWithSelector', never], ['zustand/immer', never]],
  [],
  T
>;

export function createStore<T>(
  config: MiddlewareStoreCreator<T>,
  name?: string,
) {
  return createWithEqualityFn(
    subscribeWithSelector(immer(devtools(config, { name }))),
    shallow,
  );
}
