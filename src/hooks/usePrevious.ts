import { useRef } from "react";

function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>(undefined);

  const previous = ref.current;
  ref.current = value;

  return previous;
}

export default usePrevious;
