import deepl from "deepl-node";
import { MISSING_AUTH_KEY } from "./constants/tips";
import { error } from "./alfy";

export default class Translator {
  translator: deepl.Translator | null = null;

  constructor(authKey: string | undefined) {
    this.init(authKey);
  }

  init(authKey: string | undefined) {
    if (!authKey) {
      error(MISSING_AUTH_KEY);
      return;
    }
    this.translator = new deepl.Translator(authKey);
  }

  async translate(
    text: string,
    sourceLang?: deepl.SourceLanguageCode | null,
    targetLang?: deepl.TargetLanguageCode | null
  ) {
    return await this.translator?.translateText(
      text,
      sourceLang ?? null,
      targetLang ?? "zh"
    );
  }
}
