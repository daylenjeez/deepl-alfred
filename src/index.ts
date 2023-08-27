import alfy from "alfy";
import { processInput } from "./alfy";
import { AUTH_KEY } from "./constants/index";
import Translator from "./deepl";

const instance = new Translator(process.env[AUTH_KEY]);

processInput(async (text) => {
  const res = await instance.translate(text);
  alfy.log(res?.text ?? "");
});
