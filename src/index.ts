import { output, processInput } from "./alfy";
import { AUTH_KEY, PREFERRED } from "./constants/index";
import Translator from "./deepl";

const instance = new Translator(process.env[AUTH_KEY], {
  preferred: process.env[PREFERRED],
});

const callback = async (input: string) => {
  const res = await instance.processTranslate(input, null);
  if (!res) return;
  const { text, detectedSourceLang, targetLang } = res;
  const _targetLang = targetLang === "en-US" ? "en" : targetLang;
  output([
    {
      title: text,
      variables: {
        url: `/${_targetLang}/${input}`,
      },
      arg: text,
    },
  ]);
};

processInput(callback);
