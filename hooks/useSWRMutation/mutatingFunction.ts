interface mutatorFunction {
  mutator: (
    key: string,
    options: Readonly<{
      arg: never;
    }>
  ) => any;
}

export const mutatingFunction = (
  mutator: mutatorFunction,
  keys: string[]
): mutatorFunction => {
  return mutator;
};
