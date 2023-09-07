import { output, processInput } from "./alfy";
import { AUTH_KEY, PREFERRED } from "./constants/index";
import Translator from "./deepl";

const instance = new Translator(process.env[AUTH_KEY], {
  preferred: process.env[PREFERRED],
});

const callback = async (input: string) => {
  const res = await instance.processTranslate(input, null);
  if (!res) return;
  const { text, targetLang } = res;
  const _targetLang = /^en/i.test(targetLang) ? "en" : targetLang;

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
