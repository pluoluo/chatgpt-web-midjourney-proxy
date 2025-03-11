> 通义万相 - 文生图模型支持通过一句话生成图像，分为 V2 版和 V1 版。

StableDiffusion 文生图模型
---------------------

**说明**

支持的领域 / 任务：aigc

调用模型后，因任务排队等原因，可能需要等几分钟才生成结果，此时任务状态为 PENDING

相比于 Stable Diffusion 1.5 和 Stable Diffusion XL 模型，最新开源的 Stable Diffusion 3.5 模型在图像质量、文本内容生成、复杂提示理解和资源效率方面有了显著提升。

百炼平台针对开源社区的 Stable Diffusion 3.5 Large 版本和 Stable Diffusion 3.5 Large Turbo 版本进行了服务化支持和中文适配。您可以通过配置文本指令`prompt` 、尺寸`size`以及希望生成的图片数量`n`，来确定希望生成图片的样式和数量，并根据需要设置随机种子`seed`，指定步骤数`steps`、分类自由引导系数`cfg`、偏移量`shift`来确定生成内容的样式和细节。此外，您还可以提供初始图片`image`及去噪量`denoise`来进一步控制生成过程。通过灵活配置这些参数，您可以定制生成内容以满足特定需求。

**模型概览**
--------

<table><colgroup colwidth="0.59*"></colgroup><colgroup colwidth="1.41*"></colgroup><thead><tr><td rowspan="1" colspan="1"><p jc="center"><b>模型名</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>模型简介</b></p></td></tr></thead></table><table tablewidth="904" tablecolswidth="266 638" autofit="false"><colgroup colwidth="0.59*"></colgroup><colgroup colwidth="1.41*"></colgroup><tbody><tr><td rowspan="1" colspan="1"><p jc="center"><b>模型名</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>模型简介</b></p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">stable-diffusion-3.5-large</p></td><td rowspan="1" colspan="1"><p>stable-diffusion-3.5-large 是一个具有 8 亿参数的多模态扩散变压器（MMDiT）文本到图像生成模型，具备卓越的图像质量和提示词匹配度，支持生成 100 万像素的高分辨率图像，且能够在普通消费级硬件上高效运行。</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">stable-diffusion-3.5-large-turbo</p></td><td rowspan="1" colspan="1"><p>stable-diffusion-3.5-large-turbo 是在 stable-diffusion-3.5-large 的基础上采用对抗性扩散蒸馏（ADD）技术的模型，具备更快的速度。</p></td></tr></tbody></table>

### **前提条件**

*   已开通服务并获得 API-KEY：[获取 API Key](https://help.aliyun.com/zh/model-studio/developer-reference/get-api-key)。
    
*   我们推荐您将 API-KEY 配置到环境变量中以降低 API-KEY 的泄漏风险，详情可参考[配置 API Key 到环境变量](https://help.aliyun.com/zh/model-studio/developer-reference/configure-api-key-through-environment-variables)。您也可以在代码中配置 API-KEY，但是泄漏风险会增加。
    
*   请在[百炼的模型广场](https://bailian.console.aliyun.com/#/model-market)找到 StableDiffusion 模型，点击 StableDiffusion 模型卡片上的**查看详情**，并在右上角点击**立即申请**，申请通过后即可进行模型使用。
    

**通过 DashScope SDK 调用模型**
-------------------------

请您提前[安装 SDK](https://help.aliyun.com/zh/model-studio/developer-reference/install-sdk)。

### 代码示例

以下示例展示了调用 StableDiffusion3.5 文生图模型对一个用户指令进行响应的代码。如果需要调用 Stable Diffusion 3.5 Large Turbo 版本只需要用 stable-diffusion-v3.5-large-turbo 替换 stable-diffusion-v3.5-large 即可。

Python

```
from http import HTTPStatus
from urllib.parse import urlparse, unquote
from pathlib import PurePosixPath
import requests
from dashscope import ImageSynthesis
import os

model = "stable-diffusion-3.5-large"
prompt = "Eagle flying freely in the blue sky and white clouds"

# 同步调用
def sample_block_call():
    rsp = ImageSynthesis.call(model=model,
                              api_key=os.getenv("DASHSCOPE_API_KEY"),
                              prompt=prompt,
                              negative_prompt="garfield",
                              n=1,
                              size='1024*1024')
    if rsp.status_code == HTTPStatus.OK:
        print(rsp)
        # 保存图片到当前文件夹
        for result in rsp.output.results:
            file_name = PurePosixPath(unquote(urlparse(result.url).path)).parts[-1]
            with open('./%s' % file_name, 'wb+') as f:
                f.write(requests.get(result.url).content)
    else:
        print('Failed, status_code: %s, code: %s, message: %s' %
              (rsp.status_code, rsp.code, rsp.message))

# 异步调用
def sample_async_call():
    rsp = ImageSynthesis.async_call(model=model,
                                    api_key=os.getenv("DASHSCOPE_API_KEY"),
                                    prompt=prompt,
                                    negative_prompt="garfield",
                                    n=1,
                                    size='512*512')
    if rsp.status_code == HTTPStatus.OK:
        print(rsp)
    else:
        print('Failed, status_code: %s, code: %s, message: %s' %
              (rsp.status_code, rsp.code, rsp.message))
    status = ImageSynthesis.fetch(rsp)
    if status.status_code == HTTPStatus.OK:
        print(status.output.task_status)
    else:
        print('Failed, status_code: %s, code: %s, message: %s' %
              (status.status_code, status.code, status.message))

    rsp = ImageSynthesis.wait(rsp)
    if rsp.status_code == HTTPStatus.OK:
        print(rsp)
    else:
        print('Failed, status_code: %s, code: %s, message: %s' %
              (rsp.status_code, rsp.code, rsp.message))


if __name__ == '__main__':
    sample_block_call()
    sample_async_call()
```

Java

```
// Copyright (c) Alibaba, Inc. and its affiliates.
// 需要安装okhttp依赖

import java.io.IOException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Map;
import com.alibaba.dashscope.aigc.imagesynthesis.ImageSynthesis;
import com.alibaba.dashscope.aigc.imagesynthesis.ImageSynthesisParam;
import com.alibaba.dashscope.aigc.imagesynthesis.ImageSynthesisResult;
import com.alibaba.dashscope.exception.ApiException;
import com.alibaba.dashscope.exception.NoApiKeyException;
import com.alibaba.dashscope.utils.JsonUtils;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class Main {
    private static final OkHttpClient CLIENT = new OkHttpClient();
    private static final String MODEL = "stable-diffusion-3.5-large";
    private static final String PROMPT = "Eagle flying freely in the blue sky and white clouds";
    private static final String SIZE = "1024*1024";

    public static void basicCall() throws ApiException, NoApiKeyException, IOException {
        ImageSynthesis is = new ImageSynthesis();
        ImageSynthesisParam param =
                ImageSynthesisParam.builder()
                        .model(Main.MODEL)
                        .n(1)
                        .size(Main.SIZE)
                        .prompt(Main.PROMPT)
                        .negativePrompt("garfield")
                        .build();

        ImageSynthesisResult result = is.call(param);
        System.out.println(JsonUtils.toJson(result));
        // save image to local files.
        for(Map<String, String> item :result.getOutput().getResults()){
            String paths = new URL(item.get("url")).getPath();
            String[] parts = paths.split("/");
            String fileName = parts[parts.length-1];
            Request request = new Request.Builder()
                    .url(item.get("url"))
                    .build();

            try (Response response = CLIENT.newCall(request).execute()) {
                if (!response.isSuccessful()) {
                    throw new IOException("Unexpected code " + response);
                }
                Path file = Paths.get(fileName);
                Files.write(file, response.body().bytes());
            }

        }
    }

    public void fetchTask() throws ApiException, NoApiKeyException {
        String taskId = "your task id";
        ImageSynthesis is = new ImageSynthesis();
        // If set DASHSCOPE_API_KEY environment variable, apiKey can null.
        ImageSynthesisResult result = is.fetch(taskId, null);
        System.out.println(result.getOutput());
        System.out.println(result.getUsage());
    }

    public static void main(String[] args){
        try{
            basicCall();
        }catch(ApiException|NoApiKeyException | IOException e){
            System.out.println(e.getMessage());
        }
        System.exit(0);
    }
}
```

### 参数说明

<table><colgroup colwidth="0.7*"></colgroup><colgroup colwidth="0.53*"></colgroup><colgroup colwidth="0.77*"></colgroup><colgroup colwidth="2.01*"></colgroup><thead><tr><td rowspan="1" colspan="1"><p jc="center"><b>参数</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>类型</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>默认值</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>说明</b></p></td></tr></thead></table><table tablewidth="878" tablecolswidth="154 116 168 440" autofit="false"><colgroup colwidth="0.7*"></colgroup><colgroup colwidth="0.53*"></colgroup><colgroup colwidth="0.77*"></colgroup><colgroup colwidth="2.01*"></colgroup><tbody><tr><td rowspan="1" colspan="1"><p jc="center"><b>参数</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>类型</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>默认值</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>说明</b></p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">model</p></td><td rowspan="1" colspan="1"><p jc="center"><i>string</i></p></td><td rowspan="1" colspan="1"><p jc="center">-</p></td><td rowspan="1" colspan="1"><p jc="left" uuid="lfm6htfo53zoelms5df">指明需要调用的模型，可选择 stable-diffusion-3.5-large 或者 stable-diffusion-3.5-large-turbo。</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">prompt</p></td><td rowspan="1" colspan="1"><p jc="center"><i>string</i></p></td><td rowspan="1" colspan="1"><p jc="center">-</p></td><td rowspan="1" colspan="1"><p jc="left" uuid="lfc9fse7vmfbs30103b">文本内容， 支持中英文，不超过 75 个单词，超过部分会自动截断。</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">steps（可选）</p></td><td rowspan="1" colspan="1"><p jc="center"><i>integer</i></p></td><td rowspan="1" colspan="1"><p jc="center">40</p></td><td rowspan="1" colspan="1"><p jc="left">去噪推理步数，一般步数越大，图像质量越高，步数越小，推理速度越快。 目前默认 40，用户可以在 1~500 间进行调整。</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">cfg（可选）</p></td><td rowspan="1" colspan="1"><p jc="center"><i>double</i></p></td><td rowspan="1" colspan="1"><p jc="center">4.5</p></td><td rowspan="1" colspan="1"><p jc="left">用于指导生成的结果与用户输入的 prompt 的贴合程度，越高则生成结果与用户输入的 prompt 更相近。目前默认 4.5，倾向于输入 4～5 内的值。</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">size（可选）</p></td><td rowspan="1" colspan="1"><p jc="center"><i>string</i></p></td><td rowspan="1" colspan="1"><p jc="center">1024*1024</p></td><td rowspan="1" colspan="1"><p jc="left" uuid="lfc9fse7b4at8167585">生成图像的分辨率，支持长宽在 512 和 1024 之间以 128 步长取值的任意组合，如 512*1024， 1024*768 等， 默认 1024*1024。</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">n （可选）</p></td><td rowspan="1" colspan="1"><p jc="center"><i>integer</i></p></td><td rowspan="1" colspan="1"><p jc="center">4</p></td><td rowspan="1" colspan="1"><p>期望生成图片的数量。</p></td></tr></tbody></table>

### **返回结果**

*   返回结果示例
    

JSON

```
# python result
{
    "status_code": 200,
    "request_id": "ea8bfe77-2f35-9df3-ba47-7e05e917b3df",
    "code": null,
    "message": "",
    "output": {
        "task_id": "dea97660-9651-4e6b-a9c3-8afb325b28d0",
        "task_status": "SUCCEEDED",
        "results": [
            {
                "url": "example_url"
            }
        ],
        "task_metrics": {
            "TOTAL": 1,
            "SUCCEEDED": 1,
            "FAILED": 0
        }
    },
    "usage": {
        "image_count": 1
    }
}
```

*   返回参数说明
    

<table><colgroup colwidth="0.67*"></colgroup><colgroup colwidth="0.49*"></colgroup><colgroup colwidth="1.85*"></colgroup><thead><tr><td rowspan="1" colspan="1"><p jc="center"><b>返回参数</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>类型</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>说明</b></p></td></tr></thead></table><table tablewidth="704" tablecolswidth="157 114 433" autofit="false"><colgroup colwidth="0.67*"></colgroup><colgroup colwidth="0.49*"></colgroup><colgroup colwidth="1.85*"></colgroup><tbody><tr><td rowspan="1" colspan="1"><p jc="center"><b>返回参数</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>类型</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>说明</b></p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">status_code</p></td><td rowspan="1" colspan="1"><p jc="center"><i>integer</i></p></td><td rowspan="1" colspan="1"><p>200（HTTPStatus.OK）表示请求成功，否则表示请求失败，可以通过 code 获取错误码，通过 message 字段获取错误详细信息。</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">request_id</p></td><td rowspan="1" colspan="1"><p jc="center"><i>string</i></p></td><td rowspan="1" colspan="1"><p>系统生成的标志本次调用的 id。</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">code</p></td><td rowspan="1" colspan="1"><p jc="center"><i>string</i></p></td><td rowspan="1" colspan="1"><p>表示请求失败，表示错误码，成功忽略。</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">message</p></td><td rowspan="1" colspan="1"><p jc="center"><i>string</i></p></td><td rowspan="1" colspan="1"><p>失败，表示失败详细信息，成功忽略。</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">output</p></td><td rowspan="1" colspan="1"><p jc="center"><i>object</i></p></td><td rowspan="1" colspan="1"><p>调用结果信息，对于千问模型，包含输出 text。</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">task_id</p></td><td rowspan="1" colspan="1"><p jc="center"><i>string</i></p></td><td rowspan="1" colspan="1"><p>异步任务 id。</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">task_status</p></td><td rowspan="1" colspan="1"><p jc="center"><i>string</i></p></td><td rowspan="1" colspan="1"><p>表示任务状态，可选值有：</p><ul><li><p>SUCCEEDED：任务执行成功。</p></li><li><p>FAILED： 任务执行失败。</p></li><li><p>CANCELED： 任务被取消。</p></li><li><p>PENDING：任务排队中。</p></li><li><p>SUSPENDED：任务挂起。</p></li><li><p>RUNNING：任务处理中。</p></li></ul></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">results</p></td><td rowspan="1" colspan="1"><p jc="center"><i>array</i></p></td><td rowspan="1" colspan="1"><p uuid="lhg26tm4kjnnkz5884">生成结果，每个元素为生成图片的 URL。</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">task_metrics</p></td><td rowspan="1" colspan="1"><p jc="center"><i>object</i></p></td><td rowspan="1" colspan="1"><p>任务结果信息，TOTAL 表示期望生成数量，SUCCEEDED 表示成功生成数量，FAILED 表示失败数量。</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">usage</p></td><td rowspan="1" colspan="1"><p jc="center"><i>dict</i></p></td><td rowspan="1" colspan="1"><p><code data-tag="code" code-type="xCode">image_count</code>表示生成的图片个数。</p></td></tr></tbody></table>

**通过 HTTP 调用接口**
----------------

StableDiffusion 文生图模型需要相对较长的算法调用时间，所以在接口层面采用了异步调用的方式进行任务提交，在通过任务接口提交作业之后，系统会返回对应的作业 ID，随后客户可以通过对应的异步作业查询接口获取任务的状态并且在作业到达最终完成态后取回对应的作业结果。

### **作业提交接口**

```
POST https://dashscope.aliyuncs.com/api/v1/services/aigc/text2image/image-synthesis
```

#### **入参描述**

<table><colgroup colwidth="0.59*"></colgroup><colgroup colwidth="1.08*"></colgroup><colgroup colwidth="0.53*"></colgroup><colgroup colwidth="0.41*"></colgroup><colgroup colwidth="2.15*"></colgroup><colgroup colwidth="1.26*"></colgroup><thead><tr><td rowspan="1" colspan="1"><p jc="center" uuid="lfm6jnuvq65j5mjh0nc"><b>传参方式</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfc9fse715p1kl4c7vm"><b>字段</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfc9fse7dupdgrgz8t"><b>类型</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm5yl2n4n4kqpq19p3"><b>必选</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfc9fse7ftu9alxvkki"><b>描述</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfc9fse7at0kxn3bj85"><b>示例值</b></p></td></tr></thead></table><table tablewidth="860" tablecolswidth="84 154 76 58 308 180" autofit="false"><colgroup colwidth="0.59*"></colgroup><colgroup colwidth="1.08*"></colgroup><colgroup colwidth="0.53*"></colgroup><colgroup colwidth="0.41*"></colgroup><colgroup colwidth="2.15*"></colgroup><colgroup colwidth="1.26*"></colgroup><tbody><tr><td rowspan="1" colspan="1"><p jc="center" uuid="lfm6jnuvq65j5mjh0nc"><b>传参方式</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfc9fse715p1kl4c7vm"><b>字段</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfc9fse7dupdgrgz8t"><b>类型</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm5yl2n4n4kqpq19p3"><b>必选</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfc9fse7ftu9alxvkki"><b>描述</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfc9fse7at0kxn3bj85"><b>示例值</b></p></td></tr><tr><td rowspan="4" colspan="1"><p jc="center" uuid="lfm8u8rsocxke17ewz">Header</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm8u8rsvx94zcf01wg">Content-Type</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm8u8rsypd2v9wd0l"><i>string</i></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm8u8rsqp5finb847">是</p></td><td rowspan="1" colspan="1"><p jc="left" uuid="lfm8u8rsiiibf6hhdvp">请求类型：application/json。</p></td><td rowspan="1" colspan="1"><p uuid="lfm8u8rsxmt8tokctn">application/json</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center" uuid="lfm6kn5t7zb0wzw764">Authorization</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm6kn5t0onnyzck9sua"><i>string</i></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm6kn5tq49fzjo4eh">是</p></td><td rowspan="1" colspan="1"><p jc="left" uuid="lfm6kn5tcr1xvtkfl8">API-KEY，例如：Bearer d1**2a。</p></td><td rowspan="1" colspan="1"><p uuid="lfm6kn5t8h93yg1gaum">Bearer d1**2a</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center" uuid="lglmq0vat5k19zky6i">X-DashScope-WorkSpace</p></td><td rowspan="1" colspan="1"><p jc="center"><i>string</i></p></td><td rowspan="1" colspan="1"><p jc="center">否</p></td><td rowspan="1" colspan="1"><p>指明本次调用需要使用的 workspace；需要注意的是，对于子账号 Apikey 调用，此参数为必选项，子账号必须归属于某个 workspace 才能调用；对于主账号 Apikey 此项为可选项，添加则使用对应的 workspace 身份，不添加则使用主账号身份。</p></td><td rowspan="1" colspan="1"><p>ws_QTggmeAxxxxx</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center" uuid="lfm6kn5unvxci2bpqw">X-DashScope-Async</p></td><td rowspan="1" colspan="1"><p jc="center"><i>string</i></p></td><td rowspan="1" colspan="1"><p jc="center">是</p></td><td rowspan="1" colspan="1"><p jc="left" uuid="lfm6kn5u3sfw48epg9d">固定使用 enable，表明使用异步方式提交作业。</p></td><td rowspan="1" colspan="1"><p uuid="lfm6kn5ui4t4bdi30rg">enable</p></td></tr><tr><td rowspan="9" colspan="1"><p jc="center" uuid="lfm6jnuwr6kk44kprtl">Body</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm6htfombcyu7tdz6g">model</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm6htfo0t9jdwto924"><i>string</i></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm6htfolhea5jjl4x">是</p></td><td rowspan="1" colspan="1"><p jc="left" uuid="lfm6htfo53zoelms5df">指明需要调用的模型，可选择 stable-diffusion-3.5-large 或者 stable-diffusion-3.5-large-turbo。</p></td><td rowspan="1" colspan="1"><p>stable-diffusion-3.5-large-turbo</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center" uuid="lfc9fse775jeltafvqx">input.prompt</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfc9fse7zpp8qb5mgk"><i>string</i></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm5yl2n271mwp3ho7dg">是</p></td><td rowspan="1" colspan="1"><p jc="left" uuid="lfc9fse7vmfbs30103b">文本内容， 支持中英文，不超过 75 个单词，超过部分会自动截断。</p></td><td rowspan="1" colspan="1"><p uuid="lg1xqgx8amsp2cz7ar">a running cat</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">input.init_image</p></td><td rowspan="1" colspan="1"><p jc="center"><i>string</i></p></td><td rowspan="1" colspan="1"><p jc="center">否</p></td><td rowspan="1" colspan="1"><p>输入参考图像的 URL；图片格式可为 jpg，png，tiff，webp 等常见位图格式。默认为空。</p></td><td rowspan="1" colspan="1"><p>http://xxx/xxx.png</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center" uuid="li13bnun0tv5g4qpd2d">parameters.size</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="li13bnunddu1ersrwg8"><i>string</i></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="li13bnunmyzv6wsiazs">否</p></td><td rowspan="1" colspan="1"><p jc="left" uuid="lfc9fse7b4at8167585">生成图像的分辨率，支持长宽在 512 和 1024 之间以 128 步长取值的任意组合，如 512*1024， 1024*768 等， 默认 1024*1024。</p></td><td rowspan="1" colspan="1"><p>1024*1024</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">parameters.n</p></td><td rowspan="1" colspan="1"><p jc="center"><i>integer</i></p></td><td rowspan="1" colspan="1"><p jc="center">否</p></td><td rowspan="1" colspan="1"><p jc="left">本次请求生成的图片数量，目前支持 1~4 张，默认为 1。</p></td><td rowspan="1" colspan="1"><p>4</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">parameters.steps</p></td><td rowspan="1" colspan="1"><p jc="center"><i>integer</i></p></td><td rowspan="1" colspan="1"><p jc="center">否</p></td><td rowspan="1" colspan="1"><p jc="left">去噪推理步数，一般步数越大，图像质量越高，步数越小，推理速度越快。 目前默认 40，用户可以在 1-500 间进行调整。</p></td><td rowspan="1" colspan="1"><p>40</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">parameters.cfg</p></td><td rowspan="1" colspan="1"><p jc="center"><i>double</i></p></td><td rowspan="1" colspan="1"><p jc="center">否</p></td><td rowspan="1" colspan="1"><p jc="left">用于指导生成的结果与用户输入的 prompt 的贴合程度，越高则生成结果与用户输入的 prompt 更相近。目前默认 4.5，倾向于输入 4～5 内的值。</p></td><td rowspan="1" colspan="1"><p>4.5</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">parameters.seed</p></td><td rowspan="1" colspan="1"><p jc="center"><i>integer</i></p></td><td rowspan="1" colspan="1"><p jc="center">否</p></td><td rowspan="1" colspan="1"><p jc="left" uuid="lgeiivaao9niq3mloms">图片生成时的随机种子值，如果不提供，则算法自动用一个随机生成的数字作为种子；如果指定，则根据 batch 数量分别生成 seed, seed+1, seed+2, seed+3 为参数的图片。</p></td><td rowspan="1" colspan="1"><p>42</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">parameters.shift</p></td><td rowspan="1" colspan="1"><p jc="center"><i>double</i></p></td><td rowspan="1" colspan="1"><p jc="center">否</p></td><td rowspan="1" colspan="1"><p>偏移量，用于调整生成内容的某些特性或参数。默认为 3.0。</p></td><td rowspan="1" colspan="1"><p>3.0</p></td></tr></tbody></table>

#### **出参描述**

<table><colgroup colwidth="0.76*"></colgroup><colgroup colwidth="0.33*"></colgroup><colgroup colwidth="1.42*"></colgroup><colgroup colwidth="1.48*"></colgroup><thead><tr><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6q9tlfx2102e"><b>字段</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6xb64mv3xbf"><b>类型</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6qfhy59y0zli"><b>描述</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6eu498yzo2te"><b>示例值</b></p></td></tr></thead></table><table tablewidth="860" tablecolswidth="164 72 305 319" autofit="false"><colgroup colwidth="0.76*"></colgroup><colgroup colwidth="0.33*"></colgroup><colgroup colwidth="1.42*"></colgroup><colgroup colwidth="1.48*"></colgroup><tbody><tr><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6q9tlfx2102e"><b>字段</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6xb64mv3xbf"><b>类型</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6qfhy59y0zli"><b>描述</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6eu498yzo2te"><b>示例值</b></p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center" uuid="lglmzbuc7aazs25dgdc">output.task_id</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lglmzbudjlodpiitmff"><i>string</i></p></td><td rowspan="1" colspan="1"><p uuid="lglmzbufzmhz4bvakl">本次请求的异步任务的作业 id，实际作业结果需要通过异步任务查询接口获取。</p></td><td rowspan="1" colspan="1"><p>13b1848b-5493-4c0e-8c44-68d038b492af</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6veqhvzr4xr">output.task_status</p></td><td rowspan="1" colspan="1"><p jc="center"><i>string</i></p></td><td rowspan="1" colspan="1"><p uuid="lfm651p6dqpzr9x8hw">提交异步任务后的作业状态。</p></td><td rowspan="1" colspan="1"><p>PENDING</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p63jrrji9cng9">request_id</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6nlsy6ltx7er"><i>string</i></p></td><td rowspan="1" colspan="1"><p uuid="lfm651p6729eo31ltt9">本次请求的系统唯一码。</p></td><td rowspan="1" colspan="1"><p uuid="lfm651p696sv077qik">7574ee8f-38a3-4b1e-9280-11c33ab46e51</p></td></tr></tbody></table>

#### **请求示例**

以下示例展示通过 CURL 命令来调用 Stable Diffusion 3.5 模型的脚本

**说明**

需要使用您的 API-KEY 替换示例中的 _your-dashscope-api-key_ ，代码才能正常运行。

Shell

```
curl --location 'https://dashscope.aliyuncs.com/api/v1/services/aigc/text2image/image-synthesis' \
--header 'X-DashScope-Async: enable' \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--header 'Content-Type: application/json' \
--data '{
    "model": "stable-diffusion-3.5-large",
    "input": {
        "prompt": "a running cat",
        "negative_prompt": "yellow cat"
    },
    "parameters": {
        "size": "512*512",
        "n":4, 
        "seed":42
    }
}'
```

#### **响应示例**

JSON

```
{
    "output": {
        "task_status": "PENDING",
        "task_id": "xxx"
    },
    "request_id": "xxx"
}
```

#### **异常响应示例**

在提交作业请求出错的情况下，输出的结果中会通过 code 和 message 指明出错原因。

JSON

```
{
    "code":"InvalidApiKey",
    "message":"Invalid API-key provided.",
    "request_id":"fb53c4ec-1c12-4fc4-a580-cdb7c3261fc1"
}
```

### **作业任务状态查询和结果获取接口**

```
GET https://dashscope.aliyuncs.com/api/v1/tasks/{task_id}
```

#### **入参描述**

<table><colgroup colwidth="1.03*"></colgroup><colgroup colwidth="1.03*"></colgroup><colgroup colwidth="0.41*"></colgroup><colgroup colwidth="0.37*"></colgroup><colgroup colwidth="1.24*"></colgroup><colgroup colwidth="1.96*"></colgroup><thead><tr><td rowspan="1" colspan="1"><p jc="center" uuid="lfc9fse715p1kl4c7vm"><b>字段</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm6jnuvq65j5mjh0nc"><b>传参方式</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfc9fse7dupdgrgz8t"><b>类型</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm5yl2n4n4kqpq19p3"><b>必选</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfc9fse7ftu9alxvkki"><b>描述</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfc9fse7at0kxn3bj85"><b>示例值</b></p></td></tr></thead></table><table tablewidth="904" tablecolswidth="154 154 61 55 186 294" autofit="false"><colgroup colwidth="1.03*"></colgroup><colgroup colwidth="1.03*"></colgroup><colgroup colwidth="0.41*"></colgroup><colgroup colwidth="0.37*"></colgroup><colgroup colwidth="1.24*"></colgroup><colgroup colwidth="1.96*"></colgroup><tbody><tr><td rowspan="1" colspan="1"><p jc="center" uuid="lfc9fse715p1kl4c7vm"><b>字段</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm6jnuvq65j5mjh0nc"><b>传参方式</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfc9fse7dupdgrgz8t"><b>类型</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm5yl2n4n4kqpq19p3"><b>必选</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfc9fse7ftu9alxvkki"><b>描述</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfc9fse7at0kxn3bj85"><b>示例值</b></p></td></tr><tr><td rowspan="1" colspan="1"><p jc="left" uuid="lfm8s3za4llbkf1iedp">task_id</p></td><td rowspan="1" colspan="1"><p jc="center">Url Path</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm8t5pfo675b1sju7"><i>string</i></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm8s3zadsjnayqppdu">是</p></td><td rowspan="1" colspan="1"><p uuid="lfm9fjjasocmsure9g8">需要查询作业的 task_id。</p></td><td rowspan="1" colspan="1"><p>13b1848b-5493-4c0e-8c44-68d038b492af</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="left" uuid="lfm6kn5t7zb0wzw764">Authorization</p></td><td rowspan="1" colspan="1"><p jc="center">Header</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm6kn5t0onnyzck9sua"><i>string</i></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm6kn5tq49fzjo4eh">是</p></td><td rowspan="1" colspan="1"><p uuid="lfm6kn5tcr1xvtkfl8">API-KEY，例如：Bearer d1**2a。</p></td><td rowspan="1" colspan="1"><p uuid="lfm6kn5t8h93yg1gaum">Bearer d1**2a</p></td></tr></tbody></table>

#### **出参描述**

<table><colgroup colwidth="0.82*"></colgroup><colgroup colwidth="0.34*"></colgroup><colgroup colwidth="1.38*"></colgroup><colgroup colwidth="1.47*"></colgroup><thead><tr><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6q9tlfx2102e"><b>字段</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6xb64mv3xbf"><b>类型</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6qfhy59y0zli"><b>描述</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6eu498yzo2te"><b>示例值</b></p></td></tr></thead></table><table tablewidth="843" tablecolswidth="173 72 289 309" autofit="false"><colgroup colwidth="0.82*"></colgroup><colgroup colwidth="0.34*"></colgroup><colgroup colwidth="1.38*"></colgroup><colgroup colwidth="1.47*"></colgroup><tbody><tr><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6q9tlfx2102e"><b>字段</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6xb64mv3xbf"><b>类型</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6qfhy59y0zli"><b>描述</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6eu498yzo2te"><b>示例值</b></p></td></tr><tr><td rowspan="1" colspan="1"><p jc="left" uuid="lglmzbuc7aazs25dgdc">output.task_id</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lglmzbudjlodpiitmff"><i>string</i></p></td><td rowspan="1" colspan="1"><p uuid="lglmzbufzmhz4bvakl">本次请求的异步任务的作业 ID，实际作业结果需要通过异步任务查询接口获取。</p></td><td rowspan="1" colspan="1"><p>13b1848b-5493-4c0e-8c44-68d038b492af</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="left" uuid="lfm651p6veqhvzr4xr">output.task_status</p></td><td rowspan="1" colspan="1"><p jc="center"><i>string</i></p></td><td rowspan="1" colspan="1"><p uuid="lfm9fjjcw130a7lyc79">被查询作业的作业状态。</p></td><td rowspan="1" colspan="1"><p>任务状态：</p><p uuid="lfm9l44lpka8dwyc0c">PENDING 排队中</p><p uuid="lfnk712nlmgsitsavbb">RUNNING 处理中</p><p uuid="lfnk712npxv2vr0z1j8">SUCCEEDED 成功</p><p uuid="lfnk712ncxmyxjrfyvh">FAILED 失败</p><p uuid="lfnk712nms05obkx0eo">UNKNOWN 作业不存在或状态未知</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="left" uuid="lfm651p6veqhvzr4xr">output.submit_time</p></td><td rowspan="1" colspan="1"><p jc="center"><i>string</i></p></td><td rowspan="1" colspan="1"><p>任务提交的时间戳。</p></td><td rowspan="1" colspan="1"><p>2024-06-14 14:30:44.096</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="left" uuid="lfm651p6veqhvzr4xr">output.scheduled_time</p></td><td rowspan="1" colspan="1"><p jc="center"><i>string</i></p></td><td rowspan="1" colspan="1"><p>任务计划执行的时间戳。</p></td><td rowspan="1" colspan="1"><p>2024-06-14 14:30:44.112</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="left" uuid="lfm651p6veqhvzr4xr">output.end_time</p></td><td rowspan="1" colspan="1"><p jc="center"><i>string</i></p></td><td rowspan="1" colspan="1"><p>任务执行结束的时间戳。</p></td><td rowspan="1" colspan="1"><p>2024-06-14 14:31:04.197</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="left" uuid="lfm651p6veqhvzr4xr">output.results</p></td><td rowspan="1" colspan="1"><p jc="center"><i>array</i></p></td><td rowspan="1" colspan="1"><p>执行的结果列表，列表元素为键值为 URL 的哈希表。</p></td><td rowspan="1" colspan="1"><p><code data-tag="code" code-type="xCode">[{"url": "example_url"}]</code></p></td></tr><tr><td rowspan="1" colspan="1"><p jc="left" uuid="lglmzbuhlrjcvzcqhur">output.task_metrics</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lglmzbuizz1cyq2z9io"><i>object</i></p></td><td rowspan="1" colspan="1"><p uuid="lglmzbujsu8sd1gk4f">作业中每个 batch 任务的状态：</p><ul><li><p uuid="ljqiolm9rgfzqyj9we">TOTAL：总 batch 数目。</p></li><li><p uuid="ljqioucwrogjiz07qp">SUCCEEDED：已经成功的 batch 数目。</p></li><li><p uuid="ljqip05zcl6kgl6uki">FAILED：已经失败的 batch 数目。</p></li></ul></td><td rowspan="1" colspan="1"><p uuid="lglmzbukr2wemmlrr7">"task_metrics":{</p><p>"TOTAL":4,</p><p>"SUCCEEDED":1,</p><p>"FAILED":1</p><p>}</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="left" uuid="lgln0khuei4u5k9m4di">usage.image_count</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lgln0khujmmy00hve07"><i>integer</i></p></td><td rowspan="1" colspan="1"><p uuid="lgln0khu1mfzghh0guy">本次请求成功生成的图片数量。</p></td><td rowspan="1" colspan="1"><p>2</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="left" uuid="lfm651p63jrrji9cng9">request_id</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6nlsy6ltx7er"><i>string</i></p></td><td rowspan="1" colspan="1"><p uuid="lfm651p6729eo31ltt9">本次请求的系统唯一码。</p></td><td rowspan="1" colspan="1"><p uuid="lfm651p696sv077qik">7574ee8f-38a3-4b1e-9280-11c33ab46e51</p></td></tr></tbody></table>

#### **请求示例**

以下示例展示通过 CURL 命令来调用 Stable Diffusion 模型的脚本。

Shell

```
curl -X GET \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
https://dashscope.aliyuncs.com/api/v1/tasks/86ecf553-d340-4e21-af6e-a0c6a421c010
```

#### **响应示例（作业执行中）**

作业提交后将处于排队状态，在得到调度之后将转为运行状态，此时作业的状态为 RUNNING，task_metrics 将给出具体 batch 状态；

JSON

```
{
    "request_id":"e5d70b02-ebd3-98ce-9fe8-759d7d7b107d",
    "output":{
        "task_id":"86ecf553-d340-4e21-af6e-a0c6a421c010",
        "task_status":"RUNNING",
        "task_metrics":{
            "TOTAL":4,
            "SUCCEEDED":1,
            "FAILED":0
        }
    }
}
```

#### **响应示例（作业成功执行完毕）**

如果作业执行完成并成功之后，再次查询作业状态，接口将在告知作业状态的同时，一并将作业的结果返回。对于 Stable Diffusion，**作业在结束之后的状态会持续保留 24 小时以备客户随时查询**，24 小时之后，作业将从系统中清除，相关的结果也将一并清除；对应的，作业生成结果为图像的 URL 地址，出于安全考虑，该 **URL 的下载有效期也是 24 小时**，需要您在获取作业结果后根据需要及时使用或者转存。

JSON

```
{
    "request_id":"85eaba38-0185-99d7-8d16-4d9135238846",
    "output":{
        "task_id":"86ecf553-d340-4e21-af6e-a0c6a421c010",
        "task_status":"SUCCEEDED",
        "results":[
            {
                "url":"example_url_1"
            },
            {
                "url":"example_url_2"
            }
        ],
        "task_metrics":{
            "TOTAL":2,
            "SUCCEEDED":2,
            "FAILED":0
        }
    },
    "usage":{
        "image_count":2
    }
}
```

#### **响应示例（作业成功执行完毕，部分失败）**

在一次提交中，Stable Diffusion 可以根据客户的需求生成多张图片，只要其中一张图片生成成功，`task_status`就会被设置为`SUCCEEDED`状态，并且对应的作业结果会在查询的时候返回；对于失败的调用，结果中会返回失败原因。在 usage 计量中，只会对成功的结果计数。

JSON

```
{
  "request_id": "85eaba38-0185-99d7-8d16-4d9135238846",
  "output": {
    "task_id": "86ecf553-d340-4e21-af6e-a0c6a421c010",
    "task_status": "SUCCEEDED",
    "results": [
      {
        "url": "example_url_1"
      },
      {
        "code": "InternalError.Timeout",
        "message": "An internal timeout error has occured during execution, please try again later or contact service support."
      }
    ],
    "task_metrics": {
      "TOTAL": 2,
      "SUCCEEDED": 1,
      "FAILED": 1
    }
  },
  "usage": {
    "image_count": 1
  }
}
```

#### **响应示例（作业失败）**

如果因为某种原因作业失败，则`task_status`会设置为 FAILED，并且通过 code 和 message 字段指明错误原因。

JSON

```
{
  "request_id": "e5d70b02-ebd3-98ce-9fe8-759d7d7b107d",
  "output": {
    "task_id": "86ecf553-d340-4e21-af6e-a0c6a421c010",
    "task_status": "FAILED",
    "code": "InvalidParameter",
    "message": "The image source is invalid.",
    "task_metrics": {
      "TOTAL": 4,
      "SUCCEEDED": 0,
      "FAILED": 4
    }
  }
}
```

**状态码说明**
---------

大模型服务平台通用状态码请查阅：[错误码](https://help.aliyun.com/zh/model-studio/developer-reference/error-code)。