import alfy, { OutputOptions, ScriptFilterItem } from "alfy";

export const error = (message: string) => alfy.error(message);

export const processInput = (callback: (input: string) => void) => {
  const input = alfy.input;
  callback(input);
};

export const output = (
  items: ScriptFilterItem[],
  options?: OutputOptions | undefined
) => {
  alfy.output(items, options);
};
