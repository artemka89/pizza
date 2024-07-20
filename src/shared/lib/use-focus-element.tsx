import { useRef, useState } from 'react';
import { useClickAway } from 'react-use';

export function useFocusElement(): [
  boolean,
  (value: boolean) => void,
  React.MutableRefObject<null>,
] {
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  return [focused, setFocused, ref];
}
