import { TargetLanguageCode } from "deepl-node";
import { output, processInput } from "./alfy";
import { AUTH_KEY, INITIAL_PREFERRED, PREFERRED } from "./constants/index";
import Translator from "./deepl";

const instance = new Translator(process.env[AUTH_KEY]);
const preferred = (process.env[PREFERRED] ??
  INITIAL_PREFERRED) as TargetLanguageCode;

processInput(async (input: string) => {
  const res = await instance.translateText(input, null, preferred);
  if (!res) return;

  const { text, detectedSourceLang } = res;
  const [firstPreferred, secondPreferred] = JSON.parse(preferred).split(",");

  if (detectedSourceLang && detectedSourceLang === firstPreferred) {
  } else {
    output(
      Array.isArray(res.text)
        ? res.text.map((item) => ({ title: item.text }))
        : [{ title: res.text }, { title: res?.detectedSourceLang }]
    );
  }
});
