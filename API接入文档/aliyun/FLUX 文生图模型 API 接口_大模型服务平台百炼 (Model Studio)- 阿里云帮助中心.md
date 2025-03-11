>  原文地址 [help.aliyun.com](https://help.aliyun.com/zh/model-studio/developer-reference/flux-api-reference?spm=a2c4g.11186623.0.i19)

> 通义万相 - 文生图模型支持通过一句话生成图像，分为 V2 版和 V1 版。

FLUX 文生图模型
----------

*   FLUX 文生图模型目前针对开源社区的 FLUX.1 [schnell] 版本和 FLUX.1 [dev] 和一系列基于 FLUX 架构的开源社区模型进行了服务化支持， 还针对 FLUX 文生图模型实施了中文 Prompt 的适应性优化。
    
*   模型具备的能力：通过文本描述进行图片生成（文生图）。
    
*   用户通过输入文本指令`prompt`、尺寸`size`以及种子数`seed`和推理步数`steps`，来确定希望生成图片的样式。返回的则是用户根据文本指令生成的图片。
    

**模型概览**
--------

<table><colgroup colwidth="0.45*"></colgroup><colgroup colwidth="1.55*"></colgroup><thead><tr><td rowspan="1" colspan="1"><p jc="center"><b>模型名</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>模型简介</b></p></td></tr></thead></table><table tablewidth="100" tablecolswidth="22.69 77.31" autofit="true"><colgroup colwidth="0.45*"></colgroup><colgroup colwidth="1.55*"></colgroup><tbody><tr><td rowspan="1" colspan="1"><p jc="center"><b>模型名</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>模型简介</b></p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">flux-schnell</p></td><td rowspan="1" colspan="1"><p>FLUX.1 [schnell] 作为目前开源最先进的少步模型，不仅超越了同类竞争者，甚至还优于诸如 Midjourney v6.0 和 DALL·E 3 (HD) 等强大的非精馏模型。该模型经过专门微调，以保留预训练阶段的全部输出多样性，相较于当前市场上的最先进模型，FLUX.1 [schnell] 显著提升了在视觉质量、指令遵从、尺寸 / 比例变化、字体处理及输出多样性等方面的可能，为用户带来更为丰富多样的创意图像生成体验。</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">flux-dev</p></td><td rowspan="1" colspan="1"><p>FLUX.1 [dev] 是一款面向非商业应用的开源权重、精炼模型。FLUX.1 [dev] 在保持了与 FLUX 专业版相近的图像质量和指令遵循能力的同时，具备更高的运行效率。相较于同尺寸的标准模型，它在资源利用上更为高效。</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">flux-merged</p></td><td rowspan="1" colspan="1"><p>FLUX.1-merged 模型结合了 "DEV" 在开发阶段探索的深度特性和 "Schnell" 所代表的高速执行优势。通过这一举措，FLUX.1-merged 不仅提升了模型的性能界限，还拓宽了其应用范围。</p></td></tr></tbody></table>

**API 参考**
----------

### **前提条件**

*   已开通服务并获得 api-key：[获取 API Key](https://help.aliyun.com/zh/model-studio/developer-reference/get-api-key)、[配置 API Key 到环境变量](https://help.aliyun.com/zh/model-studio/developer-reference/configure-api-key-through-environment-variables)。
    
*   已安装 SDK：[安装 SDK](https://help.aliyun.com/zh/model-studio/developer-reference/install-sdk)。
    

### **图片生成**

以下示例展示了调用 FLUX 文生图模型对一个用户指令进行响应的代码。以下示例展示了调用 flux-schnell 模型 API 进行文生图的示例代码。如果要调用 flux-dev 模型，只需要修改 model 为 "flux-dev" 即可。

**说明**

需要使用您的 api-key 替换示例中的`your-dashscope-api-key`，代码才能正常运行。

Python

```
from http import HTTPStatus
from urllib.parse import urlparse, unquote
from pathlib import PurePosixPath
import requests
from dashscope import ImageSynthesis

model = "flux-schnell"
prompt = "Eagle flying freely in the blue sky and white clouds"

def sample_block_call(input_prompt):
    rsp = ImageSynthesis.call(model=model,
                              prompt=input_prompt,
                              size='1024*1024')
    if rsp.status_code == HTTPStatus.OK:
        print(rsp.output)
        print(rsp.usage)
        # save file to current directory
        for result in rsp.output.results:
            file_name = PurePosixPath(unquote(urlparse(result.url).path)).parts[-1]
            with open('./%s' % file_name, 'wb+') as f:
                f.write(requests.get(result.url).content)
    else:
        print('Failed, status_code: %s, code: %s, message: %s' %
              (rsp.status_code, rsp.code, rsp.message))


def sample_async_call(input_prompt):
    rsp = ImageSynthesis.async_call(model=model,
                                    prompt=input_prompt,
                                    size='1024*1024')
    if rsp.status_code == HTTPStatus.OK:
        print(rsp.output)
        print(rsp.usage)
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
        print(rsp.output)
    else:
        print('Failed, status_code: %s, code: %s, message: %s' %
              (rsp.status_code, rsp.code, rsp.message))


if __name__ == '__main__':
    sample_block_call(prompt)
    sample_async_call(prompt)
```

Java

```
// Copyright (c) Alibaba, Inc. and its affiliates.

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
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class Main {
  private static final OkHttpClient CLIENT = new OkHttpClient();
  private static final String MODEL = "flux-schnell";
  private static final String PROMPT = "Eagle flying freely in the blue sky and white clouds";
  private static final String SIZE = "1024*1024";

  public static void basicCall() throws ApiException, NoApiKeyException, IOException {
    ImageSynthesis is = new ImageSynthesis();
    ImageSynthesisParam param =
        ImageSynthesisParam.builder()
            .model(Main.MODEL)
            .size(Main.SIZE)
            .prompt(Main.PROMPT)
            .build();

    ImageSynthesisResult result = is.call(param);
    System.out.println(result);
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

<table><colgroup colwidth="0.7*"></colgroup><colgroup colwidth="0.53*"></colgroup><colgroup colwidth="0.77*"></colgroup><colgroup colwidth="2*"></colgroup><thead><tr><td rowspan="1" colspan="1"><p jc="center"><b>参数</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>类型</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>默认值</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>说明</b></p></td></tr></thead></table><table tablewidth="100" tablecolswidth="17.55 13.18 19.16 50.11" autofit="true"><colgroup colwidth="0.7*"></colgroup><colgroup colwidth="0.53*"></colgroup><colgroup colwidth="0.77*"></colgroup><colgroup colwidth="2*"></colgroup><tbody><tr><td rowspan="1" colspan="1"><p jc="center"><b>参数</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>类型</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>默认值</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>说明</b></p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">model</p></td><td rowspan="1" colspan="1"><p jc="center">string</p></td><td rowspan="1" colspan="1"><p jc="center">-</p></td><td rowspan="1" colspan="1"><p>指定用于对话的 FLUX 文生图模型名，目前支持传入 "flux-schnell" 和 "flux-dev"<i>。</i></p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">prompt</p></td><td rowspan="1" colspan="1"><p jc="center">string</p></td><td rowspan="1" colspan="1"><p jc="center">-</p></td><td rowspan="1" colspan="1"><p>用户当前输入的期望模型生成的文本信息。用户当前输入的期望模型生成的文本信息。<b>支持中英文</b>，中文不超过 500 个字符，英文不超过 500 个单词，超过部分会自动截断。</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">size（可选）</p></td><td rowspan="1" colspan="1"><p jc="center">string</p></td><td rowspan="1" colspan="1"><p jc="center">1024*1024</p></td><td rowspan="1" colspan="1"><p uuid="lfc9fse7b4at8167585">生成图像的分辨率，目前支持 "512*1024, 768*512, 768*1024, 1024*576, 576*1024, 1024*1024" 六种分辨率，默认为 1024*1024 像素。</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">seed（可选）</p></td><td rowspan="1" colspan="1"><p jc="center">int</p></td><td rowspan="1" colspan="1"><p jc="center">-</p></td><td rowspan="1" colspan="1"><p uuid="lgeiivaao9niq3mloms">图片生成时候的种子值，如果不提供，则算法自动用一个随机生成的数字作为种子。</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">steps（可选）</p></td><td rowspan="1" colspan="1"><p jc="center">int</p></td><td rowspan="1" colspan="1"><p jc="center">-</p></td><td rowspan="1" colspan="1"><p uuid="lgeiivaao9niq3mloms">图片生成的推理步数，如果不提供，则默认为 30。 flux-schnell 模型官方默认 steps 为 4，flux-dev 模型官方默认 steps 为 50。</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">guidance（可选）</p></td><td rowspan="1" colspan="1"><p jc="center">int</p></td><td rowspan="1" colspan="1"><p jc="center">3.5</p></td><td rowspan="1" colspan="1"><p jc="left">指导度量值，用于在图像生成过程中调整模型的创造性与文本指导的紧密度。较高的值会使得生成的图像更忠于文本提示，但可能减少多样性；较低的值则允许更多创造性，增加图像变化。默认值为 3.5。</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">offload（可选）</p></td><td rowspan="1" colspan="1"><p jc="center">bool</p></td><td rowspan="1" colspan="1"><p jc="center">False</p></td><td rowspan="1" colspan="1"><p jc="left">一个布尔值，表示是否在采样过程中将部分计算密集型组件临时从 GPU 卸载到 CPU，以减轻内存压力或提升效率。如果您的系统资源有限或希望加速采样过程，可以启用此选项，默认为 False。</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">add_sampling_metadata（可选）</p></td><td rowspan="1" colspan="1"><p jc="center">bool</p></td><td rowspan="1" colspan="1"><p jc="center">True</p></td><td rowspan="1" colspan="1"><p jc="left">一个布尔值，决定是否在输出的图像文件中嵌入生成时使用的提示文本等元数据信息。这对于后续跟踪或分享生成设置非常有用，默认为 True。</p></td></tr></tbody></table>

### **返回结果**

*   返回结果示例
    
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
                    "url": "url1"
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
    
    <table><colgroup colwidth="0.54*"></colgroup><colgroup colwidth="0.42*"></colgroup><colgroup colwidth="2.06*"></colgroup><thead><tr><td rowspan="1" colspan="1"><p jc="center"><b>返回参数</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>类型</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>说明</b></p></td></tr></thead></table><table tablewidth="100" tablecolswidth="17.92 13.98 68.1" autofit="true"><colgroup colwidth="0.54*"></colgroup><colgroup colwidth="0.42*"></colgroup><colgroup colwidth="2.06*"></colgroup><tbody><tr><td rowspan="1" colspan="1"><p jc="center"><b>返回参数</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>类型</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>说明</b></p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">status_code</p></td><td rowspan="1" colspan="1"><p jc="center">Integer</p></td><td rowspan="1" colspan="1"><p>200（HTTPStatus.OK）表示请求成功，否则表示请求失败，可以通过 code 获取错误码，通过 message 字段获取错误详细信息。</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">request_Id</p></td><td rowspan="1" colspan="1"><p jc="center">String</p></td><td rowspan="1" colspan="1"><p>系统生成的标志本次调用的 id。</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">code</p></td><td rowspan="1" colspan="1"><p jc="center">String</p></td><td rowspan="1" colspan="1"><p>表示请求失败，表示错误码，成功忽略。</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">message</p></td><td rowspan="1" colspan="1"><p jc="center">String</p></td><td rowspan="1" colspan="1"><p>失败，表示失败详细信息，成功忽略。</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">output</p></td><td rowspan="1" colspan="1"><p jc="center">Dict</p></td><td rowspan="1" colspan="1"><p>调用结果信息，对于千问模型，包含输出 text。</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">task_id</p></td><td rowspan="1" colspan="1"><p jc="center">String</p></td><td rowspan="1" colspan="1"><p>异步任务 id。</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">task_status</p></td><td rowspan="1" colspan="1"><p jc="center">String</p></td><td rowspan="1" colspan="1"><p>任务状态：</p><ul><li><p>SUCCESSED：任务执行成功</p></li><li><p>FAILED：任务执行失败</p></li><li><p>CANCELED：任务被取消</p></li><li><p>PENDING：任务排队中</p></li><li><p>SUSPENDED：任务挂起</p></li><li><p>RUNNING：任务处理中</p></li></ul></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">results</p></td><td rowspan="1" colspan="1"><p jc="center">List</p></td><td rowspan="1" colspan="1"><p uuid="lhg26tm4kjnnkz5884">生成结果，每个元素为生成图片的 url。</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">task_metrics</p></td><td rowspan="1" colspan="1"><p jc="center">Dict</p></td><td rowspan="1" colspan="1"><p>任务结果信息，TOTAL 期望生成数量，SUCCEEDED 成功生成数量，FAILED 失败数量。</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">usage</p></td><td rowspan="1" colspan="1"><p jc="center">Dict</p></td><td rowspan="1" colspan="1"><p>image_count 用于计量的图片个数。</p></td></tr></tbody></table>

**HTTP 调用接口**
-------------

### **功能描述**

接口层面采用了异步调用的方式进行任务提交，在通过任务接口提交作业之后，系统会返回对应的作业 ID，随后客户可以通过对应的异步作业查询接口获取任务的状态并且在作业到达最终完成态后取回对应的作业结果。

### **前提条件**

已开通服务并获得 API-KEY：[获取 API Key](https://help.aliyun.com/zh/model-studio/developer-reference/get-api-key)、[配置 API Key 到环境变量](https://help.aliyun.com/zh/model-studio/developer-reference/configure-api-key-through-environment-variables)。

### **作业提交接口调用**

```
POST https://dashscope.aliyuncs.com/api/v1/services/aigc/text2image/image-synthesis
```

### **入参描述**

<table><colgroup colwidth="0.61*"></colgroup><colgroup colwidth="1.12*"></colgroup><colgroup colwidth="0.52*"></colgroup><colgroup colwidth="0.43*"></colgroup><colgroup colwidth="2.39*"></colgroup><colgroup colwidth="1.19*"></colgroup><thead><tr><td rowspan="1" colspan="1"><p jc="center" uuid="lfm6jnuvq65j5mjh0nc"><b>传参方式</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfc9fse715p1kl4c7vm"><b>字段</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfc9fse7dupdgrgz8t"><b>类型</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm5yl2n4n4kqpq19p3"><b>必选</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfc9fse7ftu9alxvkki"><b>描述</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfc9fse7at0kxn3bj85"><b>示例值</b></p></td></tr></thead></table><table tablewidth="100" tablecolswidth="9.71 17.88 8.27 6.83 38.27 19.039999999999992" autofit="true"><colgroup colwidth="0.61*"></colgroup><colgroup colwidth="1.12*"></colgroup><colgroup colwidth="0.52*"></colgroup><colgroup colwidth="0.43*"></colgroup><colgroup colwidth="2.39*"></colgroup><colgroup colwidth="1.19*"></colgroup><tbody><tr><td rowspan="1" colspan="1"><p jc="center" uuid="lfm6jnuvq65j5mjh0nc"><b>传参方式</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfc9fse715p1kl4c7vm"><b>字段</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfc9fse7dupdgrgz8t"><b>类型</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm5yl2n4n4kqpq19p3"><b>必选</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfc9fse7ftu9alxvkki"><b>描述</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfc9fse7at0kxn3bj85"><b>示例值</b></p></td></tr><tr><td rowspan="3" colspan="1"><p jc="center" uuid="lfm8u8rsocxke17ewz">Header</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm8u8rsvx94zcf01wg">Content-Type</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm8u8rsypd2v9wd0l">String</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm8u8rsqp5finb847">是</p></td><td rowspan="1" colspan="1"><p jc="left" uuid="lfm8u8rsiiibf6hhdvp">请求类型：application/json。</p></td><td rowspan="1" colspan="1"><p uuid="lfm8u8rsxmt8tokctn">application/json</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center" uuid="lfm6kn5t7zb0wzw764">Authorization</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm6kn5t0onnyzck9sua">String</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm6kn5tq49fzjo4eh">是</p></td><td rowspan="1" colspan="1"><p jc="left" uuid="lfm6kn5tcr1xvtkfl8">API-Key，例如：Bearer d1**2a。</p></td><td rowspan="1" colspan="1"><p uuid="lfm6kn5t8h93yg1gaum">Bearer d1**2a</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center" uuid="lfm6kn5unvxci2bpqw">X-DashScope-Async</p></td><td rowspan="1" colspan="1"><p jc="center">String</p></td><td rowspan="1" colspan="1"><p jc="center">是</p></td><td rowspan="1" colspan="1"><p jc="left" uuid="lfm6kn5u3sfw48epg9d">固定使用 enable，表明使用异步方式提交作业。</p></td><td rowspan="1" colspan="1"><p uuid="lfm6kn5ui4t4bdi30rg">enable</p></td></tr><tr><td rowspan="8" colspan="1"><p jc="center" uuid="lfm6jnuwr6kk44kprtl">Body</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm6htfombcyu7tdz6g">model</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm6htfo0t9jdwto924">String</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm6htfolhea5jjl4x">是</p></td><td rowspan="1" colspan="1"><p jc="left" uuid="lfm6htfo53zoelms5df">指明需要调用的模型，目前只支持 flux-schnell。</p></td><td rowspan="1" colspan="1"><p>flux-schnell</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center" uuid="lfc9fse775jeltafvqx">input.prompt</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfc9fse7zpp8qb5mgk">String</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm5yl2n271mwp3ho7dg">是</p></td><td rowspan="1" colspan="1"><p jc="left" uuid="lfc9fse7vmfbs30103b">文本内容，支持中英文，中文不超过 500 个字符，英文不超过 500 个单词，超过部分会自动截断。</p></td><td rowspan="1" colspan="1"><p uuid="lg1xqgx8amsp2cz7ar">一只奔跑的加菲猫</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center" uuid="lfc9fse7klcbpwb17za">parameters.size</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfc9fse72srr1klqa0l">String</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm6jnux1zf9jr0f66j">否</p></td><td rowspan="1" colspan="1"><p jc="left" uuid="lfm5yl2ofey9ikkumqa">生成图像的分辨率，目前支持 "512*1024, 768*512, 768*1024, 1024*576, 576*1024, 1024*1024" 六种分辨率，默认为 1024*1024 像素。</p></td><td rowspan="1" colspan="1"><p>512*1024</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center" uuid="lgeiivaanj7rwqj0iy">parameters.seed</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lgeiivaanqvqb598o1s">Integer</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lgeiivaa4eh461pdakp">否</p></td><td rowspan="1" colspan="1"><p jc="left" uuid="lgeiivaaur5914wofc">图片生成时候的种子值，如果不提供，则算法自动用一个随机生成的数字作为种子，如果给定了，则根据 batch 数量分别生成 seed，seed+1，seed+2，seed+3 为参数的图片。</p></td><td rowspan="1" colspan="1"><p>42</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center" uuid="lgeiivaanj7rwqj0iy">parameters.steps</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lgeiivaanqvqb598o1s">Integer</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lgeiivaa4eh461pdakp">否</p></td><td rowspan="1" colspan="1"><p jc="left" uuid="lgeiivaaur5914wofc">图片生成的推理步数，如果不提供，则默认为 30，如果给定了，则根据 steps 数量生成图片。flux-schnell 模型官方默认 steps 为 4，flux-dev 模型官方默认 steps 为 50。</p></td><td rowspan="1" colspan="1"><p uuid="lgeiivaao9niq3mloms">5</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">parameters.guidance</p></td><td rowspan="1" colspan="1"><p jc="center">Float</p></td><td rowspan="1" colspan="1"><p jc="center">否</p></td><td rowspan="1" colspan="1"><p jc="left">指导度量值，用于在图像生成过程中调整模型的创造性与文本指导的紧密度。较高的值会使得生成的图像更忠于文本提示，但可能减少多样性；较低的值则允许更多创造性，增加图像变化。默认值为 3.5。</p></td><td rowspan="1" colspan="1"><p>1.7</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">parameters.offload</p></td><td rowspan="1" colspan="1"><p jc="center">Boolean</p></td><td rowspan="1" colspan="1"><p jc="center">否</p></td><td rowspan="1" colspan="1"><p jc="left">一个布尔值，表示是否在采样过程中将部分计算密集型组件临时从 GPU 卸载到 CPU，以减轻内存压力或提升效率。如果您的系统资源有限或希望加速采样过程，可以启用此选项，默认为 False。</p></td><td rowspan="1" colspan="1"><p>True</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">parameters.add_sampling_metadata</p></td><td rowspan="1" colspan="1"><p jc="center">Boolean</p></td><td rowspan="1" colspan="1"><p jc="center">否</p></td><td rowspan="1" colspan="1"><p jc="left">一个布尔值，决定是否在输出的图像文件中嵌入生成时使用的提示文本等元数据信息。这对于后续跟踪或分享生成设置非常有用，默认为 True。</p></td><td rowspan="1" colspan="1"><p>False</p></td></tr></tbody></table>

### **出参描述**

<table><colgroup colwidth="0.51*"></colgroup><colgroup colwidth="0.32*"></colgroup><colgroup colwidth="1.69*"></colgroup><colgroup colwidth="1.48*"></colgroup><thead><tr><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6q9tlfx2102e"><b>字段</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6xb64mv3xbf"><b>类型</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6qfhy59y0zli"><b>描述</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6eu498yzo2te"><b>示例值</b></p></td></tr></thead></table><table tablewidth="100" tablecolswidth="12.69 7.98 42.31 37.019999999999996" autofit="true"><colgroup colwidth="0.51*"></colgroup><colgroup colwidth="0.32*"></colgroup><colgroup colwidth="1.69*"></colgroup><colgroup colwidth="1.48*"></colgroup><tbody><tr><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6q9tlfx2102e"><b>字段</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6xb64mv3xbf"><b>类型</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6qfhy59y0zli"><b>描述</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6eu498yzo2te"><b>示例值</b></p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center" uuid="lglmzbuc7aazs25dgdc">output.task_id</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lglmzbudjlodpiitmff">String</p></td><td rowspan="1" colspan="1"><p uuid="lglmzbufzmhz4bvakl">本次请求的异步任务的作业 id，实际作业结果需要通过异步任务查询接口获取。</p></td><td rowspan="1" colspan="1"><p>13b1848b-5493-4c0e-8c44-68d038b492af</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6veqhvzr4xr">output.task_status</p></td><td rowspan="1" colspan="1"><p jc="center">String</p></td><td rowspan="1" colspan="1"><p uuid="lfm651p6dqpzr9x8hw">提交异步任务后的作业状态。</p></td><td rowspan="1" colspan="1"><p>PENDING</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p63jrrji9cng9">request_id</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6nlsy6ltx7er">String</p></td><td rowspan="1" colspan="1"><p uuid="lfm651p6729eo31ltt9">本次请求的系统唯一码。</p></td><td rowspan="1" colspan="1"><p uuid="lfm651p696sv077qik">7574ee8f-38a3-4b1e-9280-11c33ab46e51</p></td></tr></tbody></table>

### **请求示例**

以下示例展示通过 CURL 命令来调用 FLUX 模型的脚本。

**说明**

需要使用您的 API-KEY 替换示例中的`YOUR-DASHSCOPE-API-KEY`，代码才能正常运行。

```
curl --location 'https://dashscope.aliyuncs.com/api/v1/services/aigc/text2image/image-synthesis' \
--header 'X-DashScope-Async: enable' \
--header 'Authorization: Bearer <YOUR-DASHSCOPE-API-KEY>' \
--header 'Content-Type: application/json' \
--data '{
    "model": "flux-schnell",
    "input": {
        "prompt": "奔跑小猫"
    },
    "parameters": {
        "size": "1024*1024",
        "seed":42,
        "steps":4
    }
}'
```

### 响应示例

```
{
    "output": {
        "task_id": "13b1848b-5493-4c0e-8c44-68d038b492af", 
    	"task_status": "PENDING"
    }
    "request_id": "7574ee8f-38a3-4b1e-9280-11c33ab46e51"
}
```

### **异常响应示例**

在提交作业请求出错的情况下，输出的结果中会通过 code 和 message 指明出错原因。

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

### **入参描述**

<table><colgroup colwidth="0.63*"></colgroup><colgroup colwidth="0.78*"></colgroup><colgroup colwidth="0.67*"></colgroup><colgroup colwidth="0.56*"></colgroup><colgroup colwidth="1.39*"></colgroup><colgroup colwidth="2.21*"></colgroup><thead><tr><td rowspan="1" colspan="1"><p jc="center" uuid="lfm6jnuvq65j5mjh0nc"><b>传参方式</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfc9fse715p1kl4c7vm"><b>字段</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfc9fse7dupdgrgz8t"><b>类型</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm5yl2n4n4kqpq19p3"><b>必选</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfc9fse7ftu9alxvkki"><b>描述</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfc9fse7at0kxn3bj85"><b>示例值</b></p></td></tr></thead></table><table tablewidth="100" tablecolswidth="10.1 12.5 10.77 9.04 22.31 35.28" autofit="true"><colgroup colwidth="0.63*"></colgroup><colgroup colwidth="0.78*"></colgroup><colgroup colwidth="0.67*"></colgroup><colgroup colwidth="0.56*"></colgroup><colgroup colwidth="1.39*"></colgroup><colgroup colwidth="2.21*"></colgroup><tbody><tr><td rowspan="1" colspan="1"><p jc="center" uuid="lfm6jnuvq65j5mjh0nc"><b>传参方式</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfc9fse715p1kl4c7vm"><b>字段</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfc9fse7dupdgrgz8t"><b>类型</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm5yl2n4n4kqpq19p3"><b>必选</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfc9fse7ftu9alxvkki"><b>描述</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfc9fse7at0kxn3bj85"><b>示例值</b></p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">Url Path</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm8s3za4llbkf1iedp">task_id</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm8t5pfo675b1sju7">String</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm8s3zadsjnayqppdu">是</p></td><td rowspan="1" colspan="1"><p uuid="lfm9fjjasocmsure9g8">需要查询作业的 task_id。</p></td><td rowspan="1" colspan="1"><p>13b1848b-5493-4c0e-8c44-68d038b492af</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">Header</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm6kn5t7zb0wzw764">Authorization</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm6kn5t0onnyzck9sua">String</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm6kn5tq49fzjo4eh">是</p></td><td rowspan="1" colspan="1"><p uuid="lfm6kn5tcr1xvtkfl8">API-Key，例如：Bearer d1**2a。</p></td><td rowspan="1" colspan="1"><p uuid="lfm6kn5t8h93yg1gaum">Bearer d1**2a</p></td></tr></tbody></table>

### **出参描述**

<table><colgroup colwidth="0.61*"></colgroup><colgroup colwidth="0.28*"></colgroup><colgroup colwidth="1.63*"></colgroup><colgroup colwidth="1.48*"></colgroup><thead><tr><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6q9tlfx2102e"><b>字段</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6xb64mv3xbf"><b>类型</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6qfhy59y0zli"><b>描述</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6eu498yzo2te"><b>示例值</b></p></td></tr></thead></table><table tablewidth="100" tablecolswidth="15.19 7.02 40.67 37.12" autofit="true"><colgroup colwidth="0.61*"></colgroup><colgroup colwidth="0.28*"></colgroup><colgroup colwidth="1.63*"></colgroup><colgroup colwidth="1.48*"></colgroup><tbody><tr><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6q9tlfx2102e"><b>字段</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6xb64mv3xbf"><b>类型</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6qfhy59y0zli"><b>描述</b></p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6eu498yzo2te"><b>示例值</b></p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center" uuid="lglmzbuc7aazs25dgdc">output.task_id</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lglmzbudjlodpiitmff">String</p></td><td rowspan="1" colspan="1"><p uuid="lglmzbufzmhz4bvakl">本次请求的异步任务的作业 id，实际作业结果需要通过异步任务查询接口获取。</p></td><td rowspan="1" colspan="1"><p>13b1848b-5493-4c0e-8c44-68d038b492af</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6veqhvzr4xr">output.task_status</p></td><td rowspan="1" colspan="1"><p jc="center">String</p></td><td rowspan="1" colspan="1"><p uuid="lfm9fjjcw130a7lyc79">被查询作业的作业状态。</p></td><td rowspan="1" colspan="1"><p>任务状态：</p><ul><li><p uuid="lfm9l44lpka8dwyc0c">PENDING：排队中</p></li><li><p uuid="lfnk712nlmgsitsavbb">RUNNING：处理中</p></li><li><p uuid="lfnk712npxv2vr0z1j8">SUCCEEDED：成功</p></li><li><p uuid="lfnk712ncxmyxjrfyvh">FAILED：失败</p></li><li><p uuid="lfnk712nms05obkx0eo">UNKNOWN： 作业不存在或状态未知</p></li></ul></td></tr><tr><td rowspan="1" colspan="1"><p jc="center" uuid="lglmzbuhlrjcvzcqhur">usage.task_metrics</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lglmzbuizz1cyq2z9io">Object</p></td><td rowspan="1" colspan="1"><p uuid="lglmzbujsu8sd1gk4f">作业中每个 batch 任务的状态（当前默认总 batch 数目等于 1）：</p><ul><li><p uuid="ljqiolm9rgfzqyj9we">TOTAL：总 batch 数目</p></li><li><p uuid="ljqioucwrogjiz07qp">SUCCEEDED：已经成功的 batch 数目</p></li><li><p uuid="ljqip05zcl6kgl6uki">FAILED：已经失败的 batch 数目</p></li></ul></td><td rowspan="1" colspan="1"><p uuid="lglmzbukr2wemmlrr7"><code data-tag="code" code-type="xCode">"task_metrics":{</code></p><p><code data-tag="code" code-type="xCode">"TOTAL":1,</code></p><p><code data-tag="code" code-type="xCode">"SUCCEEDED":1,</code></p><p><code data-tag="code" code-type="xCode">"FAILED":1</code></p><p><code data-tag="code" code-type="xCode">}</code></p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center" uuid="lgln0khuei4u5k9m4di">usage.image_count</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lgln0khujmmy00hve07">Integer</p></td><td rowspan="1" colspan="1"><p uuid="lgln0khu1mfzghh0guy">本次请求成功生成的图片数量。</p></td><td rowspan="1" colspan="1"><p>1</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p63jrrji9cng9">request_id</p></td><td rowspan="1" colspan="1"><p jc="center" uuid="lfm651p6nlsy6ltx7er">String</p></td><td rowspan="1" colspan="1"><p uuid="lfm651p6729eo31ltt9">本次请求的系统唯一码。</p></td><td rowspan="1" colspan="1"><p uuid="lfm651p696sv077qik">7574ee8f-38a3-4b1e-9280-11c33ab46e51</p></td></tr></tbody></table>

### **请求示例**

以下示例展示通过 CURL 命令来调用 FLUX 模型的脚本。

**说明**

需要使用您的 API-KEY 替换示例中的`YOUR-DASHSCOPE-API-KEY`，代码才能正常运行。

```
curl -X GET \
--header 'Authorization: Bearer <YOUR-DASHSCOPE-API-KEY>' \
https://dashscope.aliyuncs.com/api/v1/tasks/86ecf553-d340-4e21-af6e-a0c6a421c010
```

### 响应示例（作业执行中）

作业提交后将处于排队状态，在得到调度之后将转为运行状态，此时作业的状态为 RUNNING，task_metrics 将给出具体 batch 状态；

```
{
    "request_id":"e5d70b02-ebd3-98ce-9fe8-759d7d7b107d",
    "output":{
        "task_id":"86ecf553-d340-4e21-af6e-a0c6a421c010",
        "task_status":"RUNNING",
        "task_metrics":{
            "TOTAL":1,
            "SUCCEEDED":1,
            "FAILED":0
        }
    }
}
```

### 响应示例（作业成功执行完毕）

如果作业执行完成并成功之后，再次查询作业状态，接口将在告知作业状态的同时，一并将作业的结果返回。对于 FLUX，作业在结束之后的状态会持续保留 24 小时以备客户随时查询，24 小时之后，作业将从系统中清除，相关的结果也将一并清除；对应的，作业生成结果为图像的 URL 地址，出于安全考虑，该 URL 的下载有效期也是 24 小时，需要用户在获取作业结果后根据需要及时使用或者转存。

```
{
    "request_id":"85eaba38-0185-99d7-8d16-4d9135238846",
    "output":{
        "task_id":"86ecf553-d340-4e21-af6e-a0c6a421c010",
        "task_status":"SUCCEEDED",
        "results":[
            {
                "url":"https://dashscope-result-bj.oss-cn-beijing.aliyuncs.com/123/a1.png"
            }
        ],
        "task_metrics":{
            "TOTAL":1,
            "SUCCEEDED":1,
            "FAILED":0
        }
    },
    "usage":{
        "image_count":2
    }
}
```

### 响应示例（作业失败）

如果因为某种原因作业失败，则作业状态会设置为 FAILED，并且通过 code 和 message 字段指明错误原因。

```
{
    "request_id":"e5d70b02-ebd3-98ce-9fe8-759d7d7b107d",
    "output":{
        "task_id":"86ecf553-d340-4e21-af6e-a0c6a421c010",
        "task_status":"FAILED",
        "code":"InvalidParameter",
	"message":"The size is not match the allowed size ['1024*1024', '720*1280', '1280*720']",
        "task_metrics":{
            "TOTAL":1,
            "SUCCEEDED":0,
            "FAILED":1
        }
    }
}
```

#### **错误码**

如果模型调用失败并返回报错信息，请参见[错误码](https://help.aliyun.com/zh/model-studio/developer-reference/error-code)进行解决。