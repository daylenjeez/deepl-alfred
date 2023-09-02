import alfy, { OutputOptions, ScriptFilterItem } from "alfy";
import { debounce } from "./utils";

/**
 * output error
 * @param {string} message
 * @returns
 */
export const error = (message: string) => alfy.error(message);

/**
 * processInput
 * @param {(input:string)=>void} callback
 * @returns
 */
export const processInput = (callback: (input: string) => void) => {
  const { input } = alfy;
  callback(input);
};

/**
 * output
 * @param {ScriptFilterItem[]} items
 * @param {OutputOptions} options
 * @returns
 */

export const output = (
  items: ScriptFilterItem[],
  options?: OutputOptions | undefined
) => {
  alfy.output(items, options);
};
