import { useState, useCallback } from 'react';

export function useFormState(action: any, initialState: any) {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const formAction = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setLoading(true);
      const formData = new FormData(event.currentTarget);
      const result = await action(state, formData);
      setState(result);
      setLoading(false);
    },
    [action, state]
  );

  return [state, formAction, loading] as const;
}
