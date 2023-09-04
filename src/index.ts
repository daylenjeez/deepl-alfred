import { output, processInput } from "./alfy";
import { AUTH_KEY, PREFERRED } from "./constants/index";
import Translator from "./deepl";

const instance = new Translator(process.env[AUTH_KEY], {
  preferred: process.env[PREFERRED],
});

const callback = async (input: string) => {
  const text = await instance.processTranslate(input, null);
  if (!text) return;
  output([{ title: text, arg: text }]);
};

processInput(callback);
