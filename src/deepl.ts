import deepl, { TargetLanguageCode } from "deepl-node";
import { MISSING_AUTH_KEY } from "./constants/tips";
import { error } from "./alfy";
import { Options } from "./interface/index";
import { INITIAL_PREFERRED } from "./constants/index";

export default class Translator {
  translator: deepl.Translator | null = null;
  preferred: TargetLanguageCode[] = INITIAL_PREFERRED;

  constructor(authKey: string | undefined, options?: Options) {
    this.instanceInit(authKey);
    this.preferredInit(options?.preferred);
  }

  instanceInit(authKey: string | undefined) {
    if (!authKey) {
      error(MISSING_AUTH_KEY);
      return;
    }
    this.translator = new deepl.Translator(authKey);
  }

  /**
   * Initializes the preferred value.
   *
   * @param {string} preferred - the preferred value to be initialized
   */
  preferredInit(preferred?: string) {
    this.preferred = preferred
      ? (preferred.trim().split(",") as TargetLanguageCode[])
      : INITIAL_PREFERRED;
  }

  /**
   * Translates the given text using the specified source and target languages.
   *
   * @param {string} text - The text to be translated.
   * @param {deepl.SourceLanguageCode | null} sourceLang - The source language code. Optional.
   * @param {deepl.TargetLanguageCode} targetLang - The target language code. Optional.
   * @return Promise<deepl.TextResult> | undefined - The translated text and the detected source language, or undefined if an error occurs
   */
  translateText(
    text: string,
    sourceLang: deepl.SourceLanguageCode | null,
    targetLang: deepl.TargetLanguageCode
  ) {
    return this.translator?.translateText(text, sourceLang ?? null, targetLang);
  }

  async processTranslate(
    inputText: string,
    sourceLang?: deepl.SourceLanguageCode | null,
    targetLang?: deepl.TargetLanguageCode | null
  ): Promise<string | undefined> {
    const _sourceLang = sourceLang ?? null;
    const _targetLang = targetLang ?? this.preferred[0];
    const res = await this.translateText(inputText, _sourceLang, _targetLang);
    if (!res) {
      return;
    }
    const { text, detectedSourceLang } = res;
    if (detectedSourceLang === _targetLang) {
      const _targetLang = this.preferred[1];
      return !_targetLang
        ? text
        : this.processTranslate(inputText, _sourceLang, _targetLang);
    }
    return text;
  }
}
