<p align="center">
    <div align="center"><img src="https://github.com/daylenjeez/deepl-alfred/blob/main/img/deepl-logo.svg" width=120  /></div>
    <h2 align="center">DeepL Alfred</h2>
    <div align="center">基于DeepL的高质量翻译，支持自动识别语言翻译，长句精准翻译；</div>
    <div align="center"><strong>中文</strong> | <a href="README.en.md">English</a></div>
</p>

[⬇️下载](https://github.com/daylenjeez/deepl-alfred/blob/main/deepL.alfredworkflow)

## 示例

![中翻英](https://github.com/daylenjeez/deepl-alfred/blob/main/img/zh-en.png)

![英翻中](https://github.com/daylenjeez/deepl-alfred/blob/main/img/en-zh.png)

## 功能
**语言识别**：自动识别输入的语言进行翻译；                   
**回车复制**：翻译后，点击↩︎ ``Enter``复制翻译结果；                     
**查看详情**：翻译后，点击 ⌘`` Command`` + ↩︎ ``Enter`` 跳转至 [deepl.com](https://deepl.com)查看更多翻译和读音等；

## 配置
- ``auth_key``：您在DeepL申请的 ``api key`` ；[申请地址](https://www.deepl.com/zh/account/summary/generate-new-api-key)（⚠️申请DeepL API 仅支持部分国家的信用卡，不支持中国卡；这里可以选择去淘宝直接购买，可以先用我免费提供的``key``试用后再去购买）；
- ``preferred``：您常用的两个语言，插件可以支持它们之间互翻，用逗号隔开，比如我常用中文 和 美式英文，这里就输入 ``zh,en-US``；(⚠️ ``en ``请配置 为 ``en-US`` 或 ``en-GB``)；


## 语言配置
|  配置   | 语言 | 
|  ----  | ----  |
| en-GB  | 英语（英式） |
| en-US  | 英语（美式） |
| zh | 中文（简体） |
| ru | 俄罗斯语 |
| ja | 日语 |
| fr | 法语 |
| ko | 韩语 |
| it | 意大利语 |

[更多语言配置](https://www.deepl.com/zh/docs-api/translate-text/translate-text)




