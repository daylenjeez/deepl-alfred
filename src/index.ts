import { output, processInput } from "./alfy";
import { AUTH_KEY, INITIAL_PREFERRED, PREFERRED } from "./constants/index";
import Translator from "./deepl";

// const preferred = process.env[PREFERRED]
//   ? (process.env[PREFERRED].split(",") as TargetLanguageCode[])
//   : INITIAL_PREFERRED;

const instance = new Translator(process.env[AUTH_KEY], {
  preferred: process.env[PREFERRED],
});

processInput(async (input: string) => {
  const res = await instance.processTranslate(input, null);
  if (!res) return;
  output([{ title: res }]);
});

// processInput(async (input: string) => {
//   const res = await instance.translateText(input, null, preferred);
//   if (!res) return;

//   const { text, detectedSourceLang } = res;
//   const [firstPreferred, secondPreferred] = JSON.parse(preferred).split(",");

//   if (detectedSourceLang === firstPreferred) {
//   } else {
//     output(
//       Array.isArray(res.text)
//         ? res.text.map((item) => ({ title: item.text }))
//         : [{ title: res.text }, { title: res?.detectedSourceLang }]
//     );
//   }
// });
