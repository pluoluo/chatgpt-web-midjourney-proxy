> 原文地址 [help.aliyun.com](https://help.aliyun.com/zh/model-studio/user-guide/text-to-image)

> 通义万相 - 文生图模型支持通过一句话生成图像，分为 V2 版和 V1 版。

通义万相 - 文生图模型支持通过一句话生成图像，分为 V2 版和 V1 版。全面升级的文生图 V2 版模型提升了语义理解能力，通过预置智能改写功能帮助您快速上手图像创作。此外，V2 版支持任意分辨率，输出图像最高可达 200 万像素。推荐优先使用文生图 V2 版模型。

**模型概览及对比**
-----------

### **模型概览**

您可以选择全面升级的通义万相 - 文生图 V2 系列模型进行文生图创作，请使用[通义万相官网](https://tongyi.aliyun.com/wanxiang/creation)体验效果。

*   文生图 2.1 系列模型：wanx2.1-t2i-turbo、wanx2.1-t2i-plus。
    
*   文生图 2.0 系列模型：wanx2.0-t2i-turbo。
    

![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7043267371/p906789.png)

基础文生图模型，支持设置文生图的风格，支持基于参考图像进行二次创作，生成相似风格的图像。

*   文生图 1.0 系列模型：wanx-v1。
    

![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6678891371/p866215.png)

<table><colgroup colwidth="0.55*"></colgroup><colgroup colwidth="0.54*"></colgroup><colgroup colwidth="1.91*"></colgroup><thead><tr><td rowspan="1" colspan="1"><p jc="center"><b>模型版本</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>模型名称</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>模型简介</b></p></td></tr></thead></table><table tablewidth="971" tablecolswidth="179 176 616" autofit="false"><colgroup colwidth="0.55*"></colgroup><colgroup colwidth="0.54*"></colgroup><colgroup colwidth="1.91*"></colgroup><tbody><tr><td rowspan="1" colspan="1"><p jc="center"><b>模型版本</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>模型名称</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>模型简介</b></p></td></tr><tr><td rowspan="2" colspan="1"><p jc="center">通义万相文生图 2.1</p><p jc="center">（文生图 V2 版）</p></td><td rowspan="1" colspan="1"><p jc="center">wanx2.1-t2i-plus</p></td><td rowspan="1" colspan="1"><p>全面升级版本。生成图像细节更丰富，速度稍慢。对应通义万相官网 2.1 专业模型。</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">wanx2.1-t2i-turbo</p></td><td rowspan="1" colspan="1"><p>全面升级版本。生成速度快、效果全面、综合性价比高。对应通义万相官网 2.1 极速模型。</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">通义万相文生图 2.0</p><p jc="center">（文生图 V2 版）</p></td><td rowspan="1" colspan="1"><p jc="center">wanx2.0-t2i-turbo</p></td><td rowspan="1" colspan="1"><p>擅长质感人像，速度中等、成本较低。对应通义万相官网 2.0 极速模型。</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">通义万相文生图 1.0</p><p jc="center">（文生图 V1 版）</p></td><td rowspan="1" colspan="1"><p jc="center">wanx-v1</p></td><td rowspan="1" colspan="1"><p jc="left">基础文生图模型。对应通义万相官网 1.0 通用模型。</p></td></tr></tbody></table><table><colgroup colwidth="1*"></colgroup><colgroup colwidth="0.63*"></colgroup><colgroup colwidth="1.09*"></colgroup><colgroup colwidth="0.97*"></colgroup><colgroup colwidth="1.33*"></colgroup><thead><tr><td rowspan="2" colspan="1"><p jc="center"><b>模型名称</b></p></td><td rowspan="2" colspan="1"><p jc="center"><b>计费单价</b></p></td><td rowspan="1" colspan="2"><p jc="center"><b>限流（主账号与 RAM 子账号共用）</b></p></td><td rowspan="2" colspan="1"><p jc="center"><b>免费额度</b></p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center"><b>任务下发接口 RPS 限制</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>同时处理中任务数量</b></p></td></tr></thead></table><table tablewidth="829" tablecolswidth="165 104 180 160 220" autofit="false"><colgroup colwidth="1*"></colgroup><colgroup colwidth="0.63*"></colgroup><colgroup colwidth="1.09*"></colgroup><colgroup colwidth="0.97*"></colgroup><colgroup colwidth="1.33*"></colgroup><tbody><tr><td rowspan="2" colspan="1"><p jc="center"><b>模型名称</b></p></td><td rowspan="2" colspan="1"><p jc="center"><b>计费单价</b></p></td><td rowspan="1" colspan="2"><p jc="center"><b>限流（主账号与 RAM 子账号共用）</b></p></td><td rowspan="2" colspan="1"><p jc="center"><b>免费额度</b></p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center"><b>任务下发接口 RPS 限制</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>同时处理中任务数量</b></p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">wanx2.1-t2i-plus</p></td><td rowspan="1" colspan="1"><p jc="center">0.20 元 / 张</p></td><td rowspan="1" colspan="1"><p jc="center">2</p></td><td rowspan="1" colspan="1"><p jc="center">2</p></td><td rowspan="4" colspan="1"><p jc="left"><a href="https://help.aliyun.com/zh/model-studio/new-free-quota" title="">免费额度</a>：500 张</p><p>有效期：百炼开通后 180 天内</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">wanx2.1-t2i-turbo</p></td><td rowspan="1" colspan="1"><p jc="center">0.14 元 / 张</p></td><td rowspan="1" colspan="1"><p jc="center">2</p></td><td rowspan="1" colspan="1"><p jc="center">2</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">wanx2.0-t2i-turbo</p></td><td rowspan="1" colspan="1"><p jc="center">0.04 元 / 张</p></td><td rowspan="1" colspan="1"><p jc="center">2</p></td><td rowspan="1" colspan="1"><p jc="center">2</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">wanx-v1</p></td><td rowspan="1" colspan="1"><p jc="center">0.16 元 / 张</p></td><td rowspan="1" colspan="1"><p jc="center">2</p></td><td rowspan="1" colspan="1"><p jc="center">1</p></td></tr></tbody></table>

### **模型效果对比**

下表对比了文生图三个模型的生成效果，仅调整 prompt，其他参数均使用 API 默认值。

**模型建议**：推荐优先选择文生图 V2 版模型。

*   若需要高质量图像，选择文生图 2.1（wanx2.1-t2i-turbo 或 wanx2.1-t2i-plus），其中 wanx2.1-t2i-turbo 更具性价比。
    
*   若考虑成本，可选择文生图 2.0（wanx2.0-t2i-turbo）。
    

<table><colgroup colwidth="1*"></colgroup><colgroup colwidth="1*"></colgroup><colgroup colwidth="1*"></colgroup><thead><tr><td rowspan="1" colspan="1"><p jc="center"><b>文生图 2.1（wanx2.1-t2i-turbo）</b></p></td><td rowspan="1" colspan="1" data-spm-anchor-id="a2c4g.11186623.0.i3.10c67c6aRSN5Iw"><p jc="center"><b>文生图 2.0（wanx2.0-t2i-turbo）</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>文生图 1.0（wanx- v1）</b></p></td></tr></thead></table><table tablewidth="936" tablecolswidth="312 312 312" autofit="false"><colgroup colwidth="1*"></colgroup><colgroup colwidth="1*"></colgroup><colgroup colwidth="1*"></colgroup><tbody><tr><td rowspan="1" colspan="1"><p jc="center"><b>文生图 2.1（wanx2.1-t2i-turbo）</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b data-spm-anchor-id="a2c4g.11186623.0.i4.10c67c6aRSN5Iw">文生图 2.0（wanx2.0-t2i-turbo）</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>文生图 1.0（wanx- v1）</b></p></td></tr><tr><td rowspan="1" colspan="3"><p>prompt = " 生成一张新年祝福贺卡，背景有白雪，放鞭炮的小孩，<b>蛇形成文案 2025，并写上 HAPPY NEW YEAR。</b>"</p><p><b>效果对比：文生图 2.1 模型的文字生成能力更强，适合创意设计场景。</b></p></td></tr><tr><td rowspan="1" colspan="1"><p><img class="" src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7043267371/p909982.png" style="width: auto; max-height: 400px;"></p></td><td rowspan="1" colspan="1"><p><img class="" src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7043267371/p909984.png" style="max-height: 400px;"></p></td><td rowspan="1" colspan="1"><p><img class="" src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7043267371/p909986.png" style="max-height: 400px;"></p></td></tr><tr><td rowspan="1" colspan="3"><p>prompt = " 一个用针毡制作的<b>圣诞老人手持礼物</b>，<b>旁边站着一只白色的猫咪</b>，背景中有许多五颜六色的礼物。整个场景应该是可爱、温暖和舒适的，并且背景中还有一些绿色植物。"</p><p><b>效果对比：文生图 2.1 模型的语义理解更加准确（如手持礼物），生成的图像质量更高。</b></p></td></tr><tr><td rowspan="1" colspan="1"><p><img class="" src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7043267371/p909989.png" style="max-height: 400px;"></p></td><td rowspan="1" colspan="1"><p><img class="" src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7043267371/p909991.png" style="max-height: 400px;"></p></td><td rowspan="1" colspan="1"><p><img class="" src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7043267371/p909993.png" style="max-height: 400px;"></p></td></tr><tr><td rowspan="1" colspan="3"><p>prompt = " 中国女孩，圆脸，看着镜头，<b>优雅的民族服装</b>，商业摄影，室外，<b>电影级光照</b>，半身特写，精致的淡妆，锐利的边缘。 "</p><p><b>效果对比：</b><b>文生图 2.0 模型在质感人像生成方面表现出色，其成本仅为文生图 2.1 模型的三分之一，性价比高。</b></p></td></tr><tr><td rowspan="1" colspan="1"><p><img class="" src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7043267371/p909961.png" style="max-height: 400px;"></p></td><td rowspan="1" colspan="1"><p><img class="" src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7043267371/p909940.png" style="max-height: 400px;"></p></td><td rowspan="1" colspan="1"><p><img class="" src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7043267371/p909942.png" style="max-height: 400px;"></p></td></tr><tr><td rowspan="1" colspan="3"><p>prompt = " 高清摄影写真，<b>一只布偶猫慵懒地躺在复古木质窗台</b>上。它拥有一身柔软的银白色长毛，深蓝色宝石般的眼睛，粉嫩的小鼻头和肉垫。猫咪眼神温柔地望向镜头，嘴角似乎带着一抹满足的微笑。午后阳光透过半开的窗户洒在它身上，营造出温馨而宁静的氛围。背景是模糊的绿色植物和老式窗帘，增添了几分生活气息。近景特写，自然光影效果。"</p><p><b>效果对比：</b><b>文生图 2.1 模型在动物图像的生成和理解方面更具优势，其他两个模型没有生成布偶猫，1.0 模型生成的动物图像质量较差。</b></p></td></tr><tr><td rowspan="1" colspan="1"><p><img class="" src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7043267371/p909898.png" style="max-height: 400px;"></p></td><td rowspan="1" colspan="1"><p><img class="" src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7043267371/p909896.png" style="max-height: 400px;"></p></td><td rowspan="1" colspan="1"><p><img class="" src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7043267371/p909897.png" style="max-height: 400px;"></p></td></tr></tbody></table>

**示例代码**

文生图 2.1（wanx2.1-t2i-turbo）

文生图 2.0（wanx2.0-t2i-turbo）

文生图 1.0（wanx- v1）

```
curl -X POST https://dashscope.aliyuncs.com/api/v1/services/aigc/text2image/image-synthesis \
    -H 'X-DashScope-Async: enable' \
    -H "Authorization: Bearer $DASHSCOPE_API_KEY" \
    -H 'Content-Type: application/json' \
    -d '{
    "model": "wanx2.1-t2i-turbo",
    "input": {
        "prompt": "生成一张新年祝福贺卡，背景有白雪，放鞭炮的小孩，蛇形成文案2025，并写上HAPPY NEW YEAR。"
    }
}'
```

```
curl -X POST https://dashscope.aliyuncs.com/api/v1/services/aigc/text2image/image-synthesis \
    -H 'X-DashScope-Async: enable' \
    -H "Authorization: Bearer $DASHSCOPE_API_KEY" \
    -H 'Content-Type: application/json' \
    -d '{
    "model": "wanx2.0-t2i-turbo",
    "input": {
        "prompt": "生成一张新年祝福贺卡，背景有白雪，放鞭炮的小孩，蛇形成文案2025，并写上HAPPY NEW YEAR。"
    }
}'
```

```
curl -X POST https://dashscope.aliyuncs.com/api/v1/services/aigc/text2image/image-synthesis \
    -H 'X-DashScope-Async: enable' \
    -H "Authorization: Bearer $DASHSCOPE_API_KEY" \
    -H 'Content-Type: application/json' \
    -d '{
    "model": "wanx-v1",
    "input": {
        "prompt": "生成一张新年祝福贺卡，背景有白雪，放鞭炮的小孩，蛇形成文案2025，并写上HAPPY NEW YEAR。"
    }
}'
```

**前期准备**
--------

文生图 V2 和 V1 版模型 API 均支持通过 HTTP 和 DashScope SDK 进行调用。

在调用前，您需要[开通模型服务并获取 API Key](https://help.aliyun.com/zh/model-studio/developer-reference/get-api-key)，再[配置 API Key 到环境变量](https://help.aliyun.com/zh/model-studio/developer-reference/configure-api-key-through-environment-variables)。

如需通过 SDK 进行调用，请[安装 DashScope SDK](https://help.aliyun.com/zh/model-studio/developer-reference/install-sdk)。目前，该 SDK 已支持 Python 和 Java。

下面展示文生图 V2 版和 V1 版的 HTTP 请求参数。

```
{
    "model": "", //必填项
    "input": {
        "prompt": "", //提示词，必填项
        "negative_prompt": "" //选填项
    },
    "parameters": {
        "size": "1024*1024", //默认值
        "n": 4, //默认值
        "prompt_extend": true, //默认值
        "watermark": false, //默认值
        "seed": 42 //示例值
    }
}
```

```
{
    "model": "", //必填项
    "input": {
        "prompt": "", //提示词，必填项
        "negative_prompt": "", //选填项
        "ref_img": "" //选填项
    },
    "parameters": {
        "style": "<auto>", //默认值
        "size": "1024*1024", //默认值
        "n": 4, //默认值
        "ref_strength": 0.5, //默认值
        "ref_mode": "repaint", //默认值
        "seed": 42 //示例值
    }
}
```

**提示词**
-------

文生图模型需要使用一段文字描述生成的图片。提示词（prompt）描述越完整、精确和丰富，生成的图像品质越高，越贴近期望生成的内容。

提示词撰写技巧请参见[文生图 Prompt 使用指南](https://help.aliyun.com/zh/model-studio/use-cases/text-to-image-prompt)。

关键能力 - 文生图 V2 版
---------------

通义万相 - 文生图 V2 版模型的升级要点如下所示。参数说明请参见[文生图 V2 版 API 参考](https://help.aliyun.com/zh/model-studio/developer-reference/text-to-image-v2-api-reference)。

*   **prompt 智能改写**：默认开启智能改写，对于较短的输入 prompt 生成效果提升明显。推荐使用默认值。
    
*   **按任意分辨率生成图像**：文生图 V1 版模型仅支持 4 种输出图像分辨率，V2 版模型支持设置任意分辨率，最高可达 200 万像素。
    
*   **添加水印**：开放水印参数，可为输出图像添加水印。默认不添加水印。
    

### **prompt 智能改写**

通过`prompt_extend`控制是否开启 prompt 智能改写。默认开启智能改写，开启后会使用大模型（qwen 模型）对输入 prompt 进行智能改写。对于较短的输入 prompt 生成效果提升明显，但会增加 3-4 秒耗时。

下面展示两个开启 prompt 智能改写的前后对比示例，模型使用`wanx2.1-t2i-turbo`。

<table><colgroup colwidth="1*"></colgroup><colgroup colwidth="1*"></colgroup><colgroup colwidth="1*"></colgroup><thead><tr><td rowspan="1" colspan="1"><p jc="center"><b>不开启智能改写</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>开启智能改写</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>改写后的 prompt</b></p></td></tr></thead></table><table tablewidth="1422" tablecolswidth="474 474 474" autofit="false"><colgroup colwidth="1*"></colgroup><colgroup colwidth="1*"></colgroup><colgroup colwidth="1*"></colgroup><tbody><tr><td rowspan="1" colspan="1"><p jc="center"><b>不开启智能改写</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>开启智能改写</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>改写后的 prompt</b></p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center"><img class="" src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7043267371/p906214.png" style="max-height: 400px;"></p></td><td rowspan="1" colspan="1"><p jc="center"><img class="" src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7043267371/p910086.png" style="max-height: 400px;"></p></td><td rowspan="1" colspan="1"><p>废土风格的火星城市，画面中可以看到荒凉的红色沙地和破败的建筑。城市中散布着废弃的车辆和机械残骸，天空呈现出暗淡的橙黄色。远处有几座破损的高楼，表面覆盖着尘土和裂痕。近景处有一群穿着厚重防护服的探险者，他们手持武器，警惕地观察四周。整体色调偏暗，充满末日氛围。长焦镜头拍摄，细节丰富。</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center"><img class="" src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7043267371/p906764.png" style="max-height: 400px;"></p></td><td rowspan="1" colspan="1"><p jc="center"><img class="" src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7043267371/p910084.png" style="max-height: 400px;"></p></td><td rowspan="1" colspan="1"><p>废土风格的火星城市，荒凉的红色地表上散布着废弃的建筑和残破的机械。城市的天际线被尘暴笼罩，远处可见几座破损的高塔。街道上散落着锈迹斑斑的车辆和碎片。画面整体色调偏暗，充满末日氛围。近景中有一辆破旧的越野车停在路边，驾驶舱内坐着一位穿着厚重防护服的探险者，他 / 她正凝视前方。长焦镜头，写实摄影风格。</p></td></tr></tbody></table>

**示例代码：prompt 智能改写**

```
// prompt示例1
prompt = "火星上的城市，废土风格。"
```

```
from http import HTTPStatus
from urllib.parse import urlparse, unquote
from pathlib import PurePosixPath
import requests
from dashscope import ImageSynthesis
import os

prompt = "火星上的城市，废土风格。"

print('----sync call, please wait a moment----')
rsp = ImageSynthesis.call(api_key=os.getenv("DASHSCOPE_API_KEY"),
                          model="wanx2.1-t2i-turbo",
                          prompt=prompt,
                          n=2,
                          prompt_extend=True,
                          size='1024*1024')
print('response: %s' % rsp)
if rsp.status_code == HTTPStatus.OK:
    # 在当前目录下保存图片
    for result in rsp.output.results:
        file_name = PurePosixPath(unquote(urlparse(result.url).path)).parts[-1]
        with open('./%s' % file_name, 'wb+') as f:
            f.write(requests.get(result.url).content)
else:
    print('sync_call Failed, status_code: %s, code: %s, message: %s' %
          (rsp.status_code, rsp.code, rsp.message))
```

HTTP 调用仅支持异步获取模型结果，您需要发起两个请求。

1.  **创建任务**
    

此接口返回任务 ID，可根据任务 ID 查询图像生成的结果。

```
// Copyright (c) Alibaba, Inc. and its affiliates.

import com.alibaba.dashscope.aigc.imagesynthesis.ImageSynthesis;
import com.alibaba.dashscope.aigc.imagesynthesis.ImageSynthesisListResult;
import com.alibaba.dashscope.aigc.imagesynthesis.ImageSynthesisParam;
import com.alibaba.dashscope.aigc.imagesynthesis.ImageSynthesisResult;
import com.alibaba.dashscope.task.AsyncTaskListParam;
import com.alibaba.dashscope.exception.ApiException;
import com.alibaba.dashscope.exception.NoApiKeyException;
import com.alibaba.dashscope.utils.JsonUtils;
import java.util.HashMap;

public class Main {
    public static void basicCall() throws ApiException, NoApiKeyException {
        String prompt = "火星上的城市，废土风格。";
        HashMap<String,Object> parameters = new HashMap<>();
        parameters.put("prompt_extend", true);
        ImageSynthesisParam param =
                ImageSynthesisParam.builder()
                        .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                        .model("wanx2.1-t2i-turbo")
                        .prompt(prompt)
                        .n(2)
                        .size("1024*1024")
                        .parameters(parameters)
                        .build();

        ImageSynthesis imageSynthesis = new ImageSynthesis();
        ImageSynthesisResult result = null;
        try {
            System.out.println("---sync call, please wait a moment----");
            result = imageSynthesis.call(param);
        } catch (ApiException | NoApiKeyException e){
            throw new RuntimeException(e.getMessage());
        }
        System.out.println(JsonUtils.toJson(result));
    }

    public static void main(String[] args){
        try{
            basicCall();
        }catch(ApiException|NoApiKeyException e){
            System.out.println(e.getMessage());
        }
    }
}
```

2.  **根据任务 ID 查询结果**
    

```
curl -X POST https://dashscope.aliyuncs.com/api/v1/services/aigc/text2image/image-synthesis \
    -H 'X-DashScope-Async: enable' \
    -H "Authorization: Bearer $DASHSCOPE_API_KEY" \
    -H 'Content-Type: application/json' \
    -d '{
    "model": "wanx2.1-t2i-turbo",
    "input": {
        "prompt": "火星上的城市，废土风格。"
    },
    "parameters": {
        "size": "1024*1024",
        "n": 2,
        "prompt_extend": true
    }
}'
```

> 注意：需要将`{your_task_id}`替换为真实的任务 ID。

```
curl -X GET https://dashscope.aliyuncs.com/api/v1/tasks/{your_task_id} \
     -H "Authorization: Bearer $DASHSCOPE_API_KEY" \
```

<table><colgroup colwidth="1*"></colgroup><colgroup colwidth="1*"></colgroup><colgroup colwidth="1*"></colgroup><thead><tr><td rowspan="1" colspan="1"><p jc="center"><b>不开启智能改写</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>开启智能改写</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>改写后的 prompt</b></p></td></tr></thead></table><table tablewidth="1422" tablecolswidth="474 474 474" autofit="false"><colgroup colwidth="1*"></colgroup><colgroup colwidth="1*"></colgroup><colgroup colwidth="1*"></colgroup><tbody><tr><td rowspan="1" colspan="1"><p jc="center"><b>不开启智能改写</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>开启智能改写</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>改写后的 prompt</b></p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center"><img class="" src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7043267371/p910074.png" style="max-height: 400px;"></p></td><td rowspan="1" colspan="1"><p jc="center"><img class="" src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7043267371/p910049.png" style="max-height: 400px;"></p></td><td rowspan="1" colspan="1"><p>暖色调外景产品照片，一瓶精致的香水瓶置于画面中央。香水瓶身透明，内部液体呈淡金色，瓶盖为金色金属质感。背景是温暖的夕阳下，绿树成荫的小径和远处的建筑。光线柔和，营造出温馨舒适的氛围。高清写实摄影，近景特写构图。</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center"><img class="" src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7043267371/p910075.png" style="max-height: 400px;"></p></td><td rowspan="1" colspan="1"><p jc="center"><img class="" src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7043267371/p910056.png" style="max-height: 400px;"></p></td><td rowspan="1" colspan="1"><p>暖色调外景产品照片，一瓶精致的香水瓶置于画面中央。香水瓶身透明，内装淡粉色液体，瓶颈装饰有金色细节。背景是柔和的自然景观，可见蓝天、白云和远处的树木。光线温暖，营造出温馨浪漫的氛围。高清写实摄影，近景特写构图。</p></td></tr></tbody></table>

### **按任意分辨率生成图像**

通过设置 `size` 参数来控制输出图像的分辨率。

升级版的文生图 V2 版模型支持自定义设置图像分辨率，图像宽高边长的像素范围为：[768, 1440]，默认值是 1024*1024。

下面展示常见的输出图像分辨率尺寸，模型使用`wanx2.1-t2i-plus`。

<table><colgroup colwidth="0.94*"></colgroup><colgroup colwidth="1.17*"></colgroup><colgroup colwidth="0.9*"></colgroup><thead><tr><td rowspan="1" colspan="1"><p jc="center"><b>size=768*1024(3:4）</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>size=1024*768(4:3）</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>size=1024*1024(1:1）</b></p></td></tr></thead></table><table tablewidth="1019" tablecolswidth="318 396 305" autofit="false"><colgroup colwidth="0.94*"></colgroup><colgroup colwidth="1.17*"></colgroup><colgroup colwidth="0.9*"></colgroup><tbody><tr><td rowspan="1" colspan="1"><p jc="center"><b>size=768*1024(3:4）</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>size=1024*768(4:3）</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>size=1024*1024(1:1）</b></p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center"><img class="" src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7043267371/p907574.png" style="width: auto; max-height: 400px;"></p></td><td rowspan="1" colspan="1"><p jc="center"><img class="" src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7043267371/p907579.png" style="max-height: 400px;"></p></td><td rowspan="1" colspan="1"><p jc="center"><img class="" src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7043267371/p907589.png" style="max-height: 400px;"></p></td></tr></tbody></table>

**示例代码：设置图像分辨率**

```
// prompt示例2
prompt = "外景，香水瓶，产品照片，暖色调"
```

```
from http import HTTPStatus
from urllib.parse import urlparse, unquote
from pathlib import PurePosixPath
import requests
from dashscope import ImageSynthesis
import os

prompt = "国漫风格穿越少女，在古代宫廷中烛光照耀下学习礼仪一举一动皆显古风优雅"

print('----sync call, please wait a moment----')
rsp = ImageSynthesis.call(api_key=os.getenv("DASHSCOPE_API_KEY"),
                          model="wanx2.1-t2i-plus",
                          prompt=prompt,
                          n=2,
                          prompt_extend=True,
                          size='768*1024')
print('response: %s' % rsp)
if rsp.status_code == HTTPStatus.OK:
    # 在当前目录下保存图片
    for result in rsp.output.results:
        file_name = PurePosixPath(unquote(urlparse(result.url).path)).parts[-1]
        with open('./%s' % file_name, 'wb+') as f:
            f.write(requests.get(result.url).content)
else:
    print('sync_call Failed, status_code: %s, code: %s, message: %s' %
          (rsp.status_code, rsp.code, rsp.message))
```

HTTP 调用仅支持异步获取模型结果，您需要发起两个请求。

1.  **创建任务**
    

此接口返回任务 ID，可根据任务 ID 查询图像生成的结果。

```
// Copyright (c) Alibaba, Inc. and its affiliates.

import com.alibaba.dashscope.aigc.imagesynthesis.ImageSynthesis;
import com.alibaba.dashscope.aigc.imagesynthesis.ImageSynthesisListResult;
import com.alibaba.dashscope.aigc.imagesynthesis.ImageSynthesisParam;
import com.alibaba.dashscope.aigc.imagesynthesis.ImageSynthesisResult;
import com.alibaba.dashscope.task.AsyncTaskListParam;
import com.alibaba.dashscope.exception.ApiException;
import com.alibaba.dashscope.exception.NoApiKeyException;
import com.alibaba.dashscope.utils.JsonUtils;
import java.util.HashMap;

public class Main {
    public static void basicCall() throws ApiException, NoApiKeyException {
        String prompt = "国漫风格穿越少女，在古代宫廷中烛光照耀下学习礼仪一举一动皆显古风优雅";
        HashMap<String,Object> parameters = new HashMap<>();
        parameters.put("prompt_extend", true);
        ImageSynthesisParam param =
                ImageSynthesisParam.builder()
                        .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                        .model("wanx2.1-t2i-plus")
                        .prompt(prompt)
                        .n(2)
                        .size("768*1024")
                        .parameters(parameters)
                        .build();

        ImageSynthesis imageSynthesis = new ImageSynthesis();
        ImageSynthesisResult result = null;
        try {
            System.out.println("---sync call, please wait a moment----");
            result = imageSynthesis.call(param);
        } catch (ApiException | NoApiKeyException e){
            throw new RuntimeException(e.getMessage());
        }
        System.out.println(JsonUtils.toJson(result));
    }

    public static void main(String[] args){
        try{
            basicCall();
        }catch(ApiException|NoApiKeyException e){
            System.out.println(e.getMessage());
        }
    }
}
```

2.  **根据任务 ID 查询结果**
    

```
curl -X POST https://dashscope.aliyuncs.com/api/v1/services/aigc/text2image/image-synthesis \
    -H 'X-DashScope-Async: enable' \
    -H "Authorization: Bearer $DASHSCOPE_API_KEY" \
    -H 'Content-Type: application/json' \
    -d '{
    "model": "wanx2.1-t2i-plus",
    "input": {
        "prompt": "国漫风格穿越少女，在古代宫廷中烛光照耀下学习礼仪一举一动皆显古风优雅"
    },
    "parameters": {
        "size": "768*1024",
        "n": 2,
        "prompt_extend": true
    }
}'
```

> 注意：需要将`{your_task_id}`替换为真实的任务 ID。

### **添加水印**

通过`watermark`为输出图像添加水印标识，水印位于图片右下角，文案为 “AI 生成”。默认值为 false，表示不添加水印。

下面展示添加水印的效果，模型使用`wanx2.1-t2i-turbo`。

<table><colgroup colwidth="1.02*"></colgroup><colgroup colwidth="0.99*"></colgroup><thead><tr><td rowspan="1" colspan="1"><p jc="center"><b>watermark=false(不添加水印）</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>watermark=true(添加水印）</b></p></td></tr></thead></table><table tablewidth="861" tablecolswidth="437 424" autofit="false"><colgroup colwidth="1.02*"></colgroup><colgroup colwidth="0.99*"></colgroup><tbody><tr><td rowspan="1" colspan="1"><p jc="center"><b>watermark=false(不添加水印）</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>watermark=true(添加水印）</b></p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center"><img class="" src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7043267371/p908063.png" style="width: auto; max-height: 400px;"></p></td><td rowspan="1" colspan="1"><p jc="center"><img class="" src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7043267371/p908064.png" style="max-height: 400px;"></p></td></tr></tbody></table>

**示例代码：添加水印**

```
curl -X GET https://dashscope.aliyuncs.com/api/v1/tasks/{your_task_id} \
     -H "Authorization: Bearer $DASHSCOPE_API_KEY" \
```

```
from http import HTTPStatus
from urllib.parse import urlparse, unquote
from pathlib import PurePosixPath
import requests
from dashscope import ImageSynthesis
import os

prompt = "浅水彩，咖啡馆外，明亮的白色背景，梦幻，吉卜力工作室。"

print('----sync call, please wait a moment----')
rsp = ImageSynthesis.call(api_key=os.getenv("DASHSCOPE_API_KEY"),
                          model="wanx2.1-t2i-turbo",
                          prompt=prompt,
                          n=2,
                          prompt_extend=True,
                          watermark=True,
                          size='1024*1024')
print('response: %s' % rsp)
if rsp.status_code == HTTPStatus.OK:
    # 在当前目录下保存图片
    for result in rsp.output.results:
        file_name = PurePosixPath(unquote(urlparse(result.url).path)).parts[-1]
        with open('./%s' % file_name, 'wb+') as f:
            f.write(requests.get(result.url).content)
else:
    print('sync_call Failed, status_code: %s, code: %s, message: %s' %
          (rsp.status_code, rsp.code, rsp.message))
```

HTTP 调用仅支持异步获取模型结果，您需要发起两个请求。

1.  **创建任务**
    

此接口返回任务 ID，可根据任务 ID 查询图像生成的结果。

```
// Copyright (c) Alibaba, Inc. and its affiliates.

import com.alibaba.dashscope.aigc.imagesynthesis.ImageSynthesis;
import com.alibaba.dashscope.aigc.imagesynthesis.ImageSynthesisListResult;
import com.alibaba.dashscope.aigc.imagesynthesis.ImageSynthesisParam;
import com.alibaba.dashscope.aigc.imagesynthesis.ImageSynthesisResult;
import com.alibaba.dashscope.task.AsyncTaskListParam;
import com.alibaba.dashscope.exception.ApiException;
import com.alibaba.dashscope.exception.NoApiKeyException;
import com.alibaba.dashscope.utils.JsonUtils;
import java.util.HashMap;

public class Main {
    public static void basicCall() throws ApiException, NoApiKeyException {
        String prompt = "浅水彩，咖啡馆外，明亮的白色背景，梦幻，吉卜力工作室。";
        HashMap<String,Object> parameters = new HashMap<>();
        parameters.put("prompt_extend", true);
        parameters.put("watermark", true);
        ImageSynthesisParam param =
                ImageSynthesisParam.builder()
                        .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                        .model("wanx2.1-t2i-turbo")
                        .prompt(prompt)
                        .n(1)
                        .size("1024*1024")
                        .parameters(parameters)
                        .build();

        ImageSynthesis imageSynthesis = new ImageSynthesis();
        ImageSynthesisResult result = null;
        try {
            System.out.println("---sync call, please wait a moment----");
            result = imageSynthesis.call(param);
        } catch (ApiException | NoApiKeyException e){
            throw new RuntimeException(e.getMessage());
        }
        System.out.println(JsonUtils.toJson(result));
    }

    public static void main(String[] args){
        try{
            basicCall();
        }catch(ApiException|NoApiKeyException e){
            System.out.println(e.getMessage());
        }
    }
}
```

2.  **根据任务 ID 查询结果**
    

```
curl -X POST https://dashscope.aliyuncs.com/api/v1/services/aigc/text2image/image-synthesis \
    -H 'X-DashScope-Async: enable' \
    -H "Authorization: Bearer $DASHSCOPE_API_KEY" \
    -H 'Content-Type: application/json' \
    -d '{
    "model": "wanx2.1-t2i-turbo",
    "input": {
        "prompt": "浅水彩，咖啡馆外，明亮的白色背景，梦幻，吉卜力工作室。"
    },
    "parameters": {
        "size": "1024*1024",
        "n": 1,
        "prompt_extend": true,
        "watermark": true
    }
}'
```

> 注意：需要将`{your_task_id}`替换为真实的任务 ID。

关键能力 - 文生图 V1 版
---------------

通义万相 - 文生图 V1 版模型支持：根据输入文本生成图像、根据输入文本和参考图像生成相似图。参数说明请参见[文生图 V1 版 API 参考](https://help.aliyun.com/zh/model-studio/developer-reference/text-to-image-api-reference)。

文生图 V1 版模关键能力包括：

*   **使用反向提示词**：支持使用反向提示词，来指定图像中不包含的元素。
    
*   **基于参考图像生成相似图**：`ref_mode`指定生成相似图的方式，`repaint`代表参考内容，默认值；`refonly`代表参考风格。
    

### **使用反向提示词**

通过正向提示词描述期望的图像元素和风格，使用反向提示词来描述不希望在图像中看到的内容。例如，设置`negative_prompt`以限制输出图像中不要使用红色元素。

```
curl -X GET https://dashscope.aliyuncs.com/api/v1/tasks/{your_task_id} \
     -H "Authorization: Bearer $DASHSCOPE_API_KEY" \
```

![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6678891371/p866389.png)

**示例代码：使用反向提示词**

```
//正向提示词
prompt = "近景镜头，18岁的中国女孩，古代服饰，圆脸，正面看着镜头，民族优雅的服装，商业摄影，室外，电影级光照，半身特写，精致的淡妆，锐利的边缘。"

//反向提示词
negative_prompt = "红色元素"
```

```
from http import HTTPStatus
from urllib.parse import urlparse, unquote
from pathlib import PurePosixPath
import requests
from dashscope import ImageSynthesis
import os

prompt = "近景镜头，18岁的中国女孩，古代服饰，圆脸，正面看着镜头，民族优雅的服装，商业摄影，室外，电影级光照，半身特写，精致的淡妆，锐利的边缘。"
negative_prompt = "红色元素"

# 同步调用
print('----sync call, please wait a moment----')

rsp = ImageSynthesis.call(api_key=os.getenv("DASHSCOPE_API_KEY"),
                          model=ImageSynthesis.Models.wanx_v1,
                          prompt=prompt,
                          negative_prompt=negative_prompt,
                          n=1,
                          style='<auto>',
                          size='1024*1024')
if rsp.status_code == HTTPStatus.OK:
    print(rsp.output)

    # 保存图片
    for result in rsp.output.results:
        file_name = PurePosixPath(unquote(urlparse(result.url).path)).parts[-1]
        with open('./%s' % file_name, 'wb+') as f:
            f.write(requests.get(result.url).content)
else:
    print('sync_call Failed, status_code: %s, code: %s, message: %s' %
          (rsp.status_code, rsp.code, rsp.message))
```

HTTP 调用仅支持异步获取模型结果，您需要发起两个请求。

1.  **创建任务**
    

此接口返回任务 ID，可根据任务 ID 查询图像生成的结果。

```
import com.alibaba.dashscope.aigc.imagesynthesis.*;
import com.alibaba.dashscope.exception.ApiException;
import com.alibaba.dashscope.exception.NoApiKeyException;
import com.alibaba.dashscope.utils.JsonUtils;

public class Main {

    public void syncCall() {
        String prompt = "近景镜头，18岁的中国女孩，古代服饰，圆脸，正面看着镜头，民族优雅的服装，商业摄影，室外，电影级光照，半身特写，精致的淡妆，锐利的边缘。";
        String negativePrompt = "红色元素";
        ImageSynthesisParam param =
                ImageSynthesisParam.builder()
                        .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                        .model(ImageSynthesis.Models.WANX_V1)
                        .prompt(prompt)
                        .negativePrompt(negativePrompt)
                        .style("<auto>")
                        .n(1)
                        .size("1024*1024")
                        .build();

        ImageSynthesis imageSynthesis = new ImageSynthesis();
        ImageSynthesisResult result = null;
        try {
            System.out.println("---sync call, please wait a moment----");
            result = imageSynthesis.call(param);
        } catch (ApiException | NoApiKeyException e){
            throw new RuntimeException(e.getMessage());
        }
        System.out.println(JsonUtils.toJson(result));
    }


    public static void main(String[] args){
        Main main = new Main();
        main.syncCall();
    }

}
```

2.  **根据任务 ID 查询结果**
    

```
curl -X POST https://dashscope.aliyuncs.com/api/v1/services/aigc/text2image/image-synthesis \
    -H 'X-DashScope-Async: enable' \
    -H "Authorization: Bearer $DASHSCOPE_API_KEY" \
    -H 'Content-Type: application/json' \
    -d '{
    "model": "wanx-v1",
    "input": {
        "prompt": "近景镜头，18岁的中国女孩，古代服饰，圆脸，正面看着镜头，民族优雅的服装，商业摄影，室外，电影级光照，半身特写，精致的淡妆，锐利的边缘。",
        "negative_prompt": "红色元素"
    },
    "parameters": {
        "style": "<auto>",
        "size": "1024*1024",
        "n": 1
    }
}'
```

### **基于参考图生成相似图**

基于参考图生成图像涉及两个参数：`ref_strength`参数和`ref_mode`参数。

#### **设置相似度**

您可以使用`ref_strength`参数来控制输出图像与参考图的相似度。它的取值范围是 [0.0, 1.0]，默认值为 0.5。取值越大表示跟参考图像越相似。

![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6678891371/p866474.png)

**示例代码：设置相似度**

```
curl -X GET https://dashscope.aliyuncs.com/api/v1/tasks/{your_task_id} \
     -H "Authorization: Bearer $DASHSCOPE_API_KEY" \
```

```
from http import HTTPStatus
from urllib.parse import urlparse, unquote
from pathlib import PurePosixPath
import requests
from dashscope import ImageSynthesis
import os


prompt = "近景镜头，18岁的中国女孩，古代服饰，圆脸，正面看着镜头，民族优雅的服装，商业摄影，室外，电影级光照，半身特写，精致的淡妆，锐利的边缘。"

# 上传参考图方式：url链接和本地路径二选一
# 使用公网url链接
ref_img = "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20241031/rguyzt/girl.png"
# 使用本地文件路径
sketch_image_url = './girl.png'

# 同步调用
print('----sync call, please wait a moment----')

rsp = ImageSynthesis.call(api_key=os.getenv("DASHSCOPE_API_KEY"),
                          model=ImageSynthesis.Models.wanx_v1,
                          prompt=prompt,
                          n=1,
                          style='<auto>',
                          # sketch_image_url=sketch_image_url,
                          ref_img=ref_img,
                          ref_mode='repaint',
                          ref_strength=0.0,
                          size='1024*1024')
if rsp.status_code == HTTPStatus.OK:
    print(rsp.output)

    # 保存图片
    for result in rsp.output.results:
        file_name = PurePosixPath(unquote(urlparse(result.url).path)).parts[-1]
        with open('./%s' % file_name, 'wb+') as f:
            f.write(requests.get(result.url).content)
else:
    print('sync_call Failed, status_code: %s, code: %s, message: %s' %
          (rsp.status_code, rsp.code, rsp.message))
```

HTTP 调用仅支持异步获取模型结果，您需要发起两个请求。

**1、创建文生图任务**

此接口返回任务 ID，可根据任务 ID 查询图像生成的结果。

```
import com.alibaba.dashscope.aigc.imagesynthesis.*;
import com.alibaba.dashscope.exception.ApiException;
import com.alibaba.dashscope.exception.NoApiKeyException;
import com.alibaba.dashscope.utils.JsonUtils;
import java.util.HashMap;

public class Main {

    public void syncCall() {
        String prompt = "近景镜头，18岁的中国女孩，古代服饰，圆脸，正面看着镜头，民族优雅的服装，商业摄影，室外，电影级光照，半身特写，精致的淡妆，锐利的边缘。";
         //使用公网url链接
        String refImage = "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20241031/rguyzt/girl.png";

        //图像处理参数
        HashMap<String,Object> parameters = new HashMap<>();
        parameters.put("ref_strength", 0.0);
        parameters.put("ref_mode", "repaint");
        
        ImageSynthesisParam param =
                ImageSynthesisParam.builder()
                        .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                        .model(ImageSynthesis.Models.WANX_V1)
                        .prompt(prompt)
                        .style("<auto>")
                        .n(1)
                        .size("1024*1024")
                        .refImage(refImage)
                        .parameters(parameters)
                        .build();

        ImageSynthesis imageSynthesis = new ImageSynthesis();
        ImageSynthesisResult result = null;
        try {
            System.out.println("---sync call, please wait a moment----");
            result = imageSynthesis.call(param);
        } catch (ApiException | NoApiKeyException e){
            throw new RuntimeException(e.getMessage());
        }
        System.out.println(JsonUtils.toJson(result));
    }


    public static void main(String[] args){
        Main main = new Main();
        main.syncCall();
    }

}
```

**2、根据任务 ID 查询结果**

```
curl -X POST https://dashscope.aliyuncs.com/api/v1/services/aigc/text2image/image-synthesis \
    -H 'X-DashScope-Async: enable' \
    -H "Authorization: Bearer $DASHSCOPE_API_KEY" \
    -H 'Content-Type: application/json' \
    -d '{
    "model": "wanx-v1",
    "input": {
        "prompt": "近景镜头，18岁的中国女孩，古代服饰，圆脸，正面看着镜头，民族优雅的服装，商业摄影，室外，电影级光照，半身特写，精致的淡妆，锐利的边缘。",
        "ref_image": "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20241031/rguyzt/girl.png"
    },
    "parameters": {
        "style": "<auto>",
        "size": "1024*1024",
        "n": 1,
        "ref_strength": 0.0,
        "ref_mode": "repaint"
    }
}'
```

#### **设置相似图的生成方式**

您可以通过`ref_mode`参数来控制如何基于参考图像生成相似图。

*   **ref_mode="repaint"**：根据参考图像内容生成图像，默认值。
    
*   **ref_mode="refonly"**：根据参考图像风格生成图像。
    

![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7043267371/p907744.png)

**示例代码：设置相似图的生成方式**

```
curl -X GET https://dashscope.aliyuncs.com/api/v1/tasks/{your_task_id} \
     -H "Authorization: Bearer $DASHSCOPE_API_KEY" \
```

```
from http import HTTPStatus
from urllib.parse import urlparse, unquote
from pathlib import PurePosixPath
import requests
from dashscope import ImageSynthesis
import os

prompt = "近景镜头，18岁的中国女孩，古代服饰，圆脸，正面看着镜头，民族优雅的服装，商业摄影，室外，电影级光照，半身特写，精致的淡妆，锐利的边缘。"

# 上传参考图方式：url链接和本地路径二选一
# 使用公网url链接
ref_img = "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20241031/rguyzt/girl.png"
# 使用本地文件路径
sketch_image_url = './girl.png'

# 同步调用
print('----sync call, please wait a moment----')

rsp = ImageSynthesis.call(api_key=os.getenv("DASHSCOPE_API_KEY"),
                          model=ImageSynthesis.Models.wanx_v1,
                          prompt=prompt,
                          n=4,
                          style='<auto>',
                          # sketch_image_url=sketch_image_url,
                          ref_img=ref_img,
                          ref_mode='repaint',
                          ref_strength=1.0,
                          size='1024*1024')
if rsp.status_code == HTTPStatus.OK:
    print(rsp.output)

    # 保存图片
    for result in rsp.output.results:
        file_name = PurePosixPath(unquote(urlparse(result.url).path)).parts[-1]
        with open('./%s' % file_name, 'wb+') as f:
            f.write(requests.get(result.url).content)
else:
    print('sync_call Failed, status_code: %s, code: %s, message: %s' %
          (rsp.status_code, rsp.code, rsp.message))
```

HTTP 调用仅支持异步获取模型结果，您需要发起两个请求。

1.  **创建任务**
    

此接口返回任务 ID，可根据任务 ID 查询图像生成的结果。

```
import com.alibaba.dashscope.aigc.imagesynthesis.*;
import com.alibaba.dashscope.exception.ApiException;
import com.alibaba.dashscope.exception.NoApiKeyException;
import com.alibaba.dashscope.utils.JsonUtils;
import java.util.HashMap;

public class Main {

    public void syncCall() {
        String prompt = "近景镜头，18岁的中国女孩，古代服饰，圆脸，正面看着镜头，民族优雅的服装，商业摄影，室外，电影级光照，半身特写，精致的淡妆，锐利的边缘。";
         
         //使用公网url链接
        String refImage = "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20241031/rguyzt/girl.png";

        //图像处理参数
        HashMap<String,Object> parameters = new HashMap<>();
        parameters.put("ref_strength", 1.0);
        parameters.put("ref_mode", "repaint");
        
        ImageSynthesisParam param =
                ImageSynthesisParam.builder()
                        .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                        .model(ImageSynthesis.Models.WANX_V1)
                        .prompt(prompt)
                        .style("<auto>")
                        .n(1)
                        .size("1024*1024")
                        .refImage(refImage)
                        .parameters(parameters)
                        .build();

        ImageSynthesis imageSynthesis = new ImageSynthesis();
        ImageSynthesisResult result = null;
        try {
            System.out.println("---sync call, please wait a moment----");
            result = imageSynthesis.call(param);
        } catch (ApiException | NoApiKeyException e){
            throw new RuntimeException(e.getMessage());
        }
        System.out.println(JsonUtils.toJson(result));
    }


    public static void main(String[] args){
        Main main = new Main();
        main.syncCall();
    }

}
```

**2、根据任务 ID 查询结果**

```
curl -X POST https://dashscope.aliyuncs.com/api/v1/services/aigc/text2image/image-synthesis \
    -H 'X-DashScope-Async: enable' \
    -H "Authorization: Bearer $DASHSCOPE_API_KEY" \
    -H 'Content-Type: application/json' \
    -d '{
    "model": "wanx-v1",
    "input": {
        "prompt": "近景镜头，18岁的中国女孩，古代服饰，圆脸，正面看着镜头，民族优雅的服装，商业摄影，室外，电影级光照，半身特写，精致的淡妆，锐利的边缘。",
        "ref_image": "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20241031/rguyzt/girl.png"
    },
    "parameters": {
        "style": "<auto>",
        "size": "1024*1024",
        "n": 1,
        "ref_strength": 1.0,
        "ref_mode": "repaint"
    }
}'
```

**相关文档**
--------

*   [文生图 V2 版 API 参考](https://help.aliyun.com/zh/model-studio/developer-reference/text-to-image-v2-api-reference)
    
*   [文生图 V1 版 API 参考](https://help.aliyun.com/zh/model-studio/developer-reference/text-to-image-api-reference)
    
*   [图像模型常见问题](https://help.aliyun.com/zh/model-studio/developer-reference/image-faq)：包括本地接口调试、模型计费与限流、接口高频报错等。