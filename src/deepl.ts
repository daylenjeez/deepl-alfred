import deepl from "deepl-node";
import { MISSING_AUTH_KEY } from "./constants/tips";
import { error } from "./alfy";
import { Options } from "./interface/index";

export default class Translator {
  translator: deepl.Translator | null = null;

  constructor(authKey: string | undefined, options?: Options) {
    this.init(authKey);
  }

  init(authKey: string | undefined) {
    if (!authKey) {
      error(MISSING_AUTH_KEY);
      return;
    }
    this.translator = new deepl.Translator(authKey);
  }

  async translateText(
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

  getSourceLanguageCode(text: string) {
    return this.translateText(text);
  }
}
