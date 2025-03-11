>  原文地址 [help.aliyun.com](https://help.aliyun.com/zh/model-studio/developer-reference/text-to-image-v2-api-reference?spm=a2c4g.11186623.0.0.10c67c6aRSN5Iw)

> 通义万相 - 文生图模型支持通过一句话生成图像，分为 V2 版和 V1 版。

**相关指南**：[文本生成图像](https://help.aliyun.com/zh/model-studio/user-guide/text-to-image)

模型概览
----

**模型效果示意**

您可以选择全面升级的通义万相文生图 V2 系列模型进行文生图创作，请到[通义万相官网](https://tongyi.aliyun.com/wanxiang/creation)体验效果。

![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6263807371/p906447.jpg)

**模型简介**

<table><colgroup colwidth="0.76*"></colgroup><colgroup colwidth="0.81*"></colgroup><colgroup colwidth="1.43*"></colgroup><thead><tr><td rowspan="1" colspan="1"><p jc="center"><b>模型版本</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>模型名称</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>模型简介</b></p></td></tr></thead></table><table tablewidth="762" tablecolswidth="194 206 362" autofit="false"><colgroup colwidth="0.76*"></colgroup><colgroup colwidth="0.81*"></colgroup><colgroup colwidth="1.43*"></colgroup><tbody><tr><td rowspan="1" colspan="1"><p jc="center"><b>模型版本</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>模型名称</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>模型简介</b></p></td></tr><tr><td rowspan="2" colspan="1"><p jc="center">通义万相文生图 2.1</p></td><td rowspan="1" colspan="1"><p jc="center">wanx2.1-t2i-turbo</p></td><td rowspan="1" colspan="1"><p>生成速度更快，通用生成模型。</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">wanx2.1-t2i-plus</p></td><td rowspan="1" colspan="1"><p>生成图像细节更丰富，速度稍慢，通用生成模型。</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">通义万相文生图 2.0</p></td><td rowspan="1" colspan="1"><p jc="center">wanx2.0-t2i-turbo</p></td><td rowspan="1" colspan="1"><p>擅长质感人像与创意设计，速度中等，性价比高。</p></td></tr></tbody></table>

<table><colgroup colwidth="1*"></colgroup><colgroup colwidth="0.63*"></colgroup><colgroup colwidth="1.09*"></colgroup><colgroup colwidth="0.97*"></colgroup><colgroup colwidth="1.33*"></colgroup><thead><tr><td rowspan="2" colspan="1"><p jc="center"><b>模型名称</b></p></td><td rowspan="2" colspan="1"><p jc="center"><b>计费单价</b></p></td><td rowspan="1" colspan="2"><p jc="center"><b>限流（主账号与 RAM 子账号共用）</b></p></td><td rowspan="2" colspan="1"><p jc="center"><b>免费额度</b></p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center"><b>任务下发接口 QPS 限制</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>同时处理中任务数量</b></p></td></tr></thead></table><table tablewidth="829" tablecolswidth="165 104 180 160 220" autofit="false"><colgroup colwidth="1*"></colgroup><colgroup colwidth="0.63*"></colgroup><colgroup colwidth="1.09*"></colgroup><colgroup colwidth="0.97*"></colgroup><colgroup colwidth="1.33*"></colgroup><tbody><tr><td rowspan="2" colspan="1"><p jc="center"><b>模型名称</b></p></td><td rowspan="2" colspan="1"><p jc="center"><b>计费单价</b></p></td><td rowspan="1" colspan="2"><p jc="center"><b>限流（主账号与 RAM 子账号共用）</b></p></td><td rowspan="2" colspan="1"><p jc="center"><b>免费额度</b></p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center"><b>任务下发接口 QPS 限制</b></p></td><td rowspan="1" colspan="1"><p jc="center"><b>同时处理中任务数量</b></p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">wanx2.1-t2i-turbo</p></td><td rowspan="1" colspan="1"><p jc="center">0.14 元 / 张</p></td><td rowspan="1" colspan="1"><p jc="center">2</p></td><td rowspan="1" colspan="1"><p jc="center">2</p></td><td rowspan="3" colspan="1"><p jc="left"><a href="https://help.aliyun.com/zh/model-studio/new-free-quota" title="">免费额度</a>：500 张</p><p>有效期：百炼开通后 180 天内</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">wanx2.1-t2i-plus</p></td><td rowspan="1" colspan="1"><p jc="center">0.20 元 / 张</p></td><td rowspan="1" colspan="1"><p jc="center">2</p></td><td rowspan="1" colspan="1"><p jc="center">2</p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">wanx2.0-t2i-turbo</p></td><td rowspan="1" colspan="1"><p jc="center">0.04 元 / 张</p></td><td rowspan="1" colspan="1"><p jc="center">2</p></td><td rowspan="1" colspan="1"><p jc="center">2</p></td></tr></tbody></table>

更多说明请参见[模型计费及限流](#ea40aa377c4az)。

如果您需要切换文生图模型，请参见 [wanx-v1 模型切换到 V2 版模型](#299ab19a5apq2)。

前提条件
----

文生图 V2 版 API 支持通过 HTTP 和 DashScope SDK 进行调用。

在调用前，您需要[开通模型服务并获取 API Key](https://help.aliyun.com/zh/model-studio/developer-reference/get-api-key)，再[配置 API Key 到环境变量](https://help.aliyun.com/zh/model-studio/developer-reference/configure-api-key-through-environment-variables)。

如需通过 SDK 进行调用，请[安装 DashScope SDK](https://help.aliyun.com/zh/model-studio/developer-reference/install-sdk)。目前，该 SDK 已支持 Python 和 Java。

HTTP 调用
-------

图像模型处理时间较长，为了避免请求超时，HTTP 调用仅支持异步获取模型结果。您需要发起两个请求：

*   **创建任务**：首先发送一个请求创建任务，该请求会返回任务 ID。
    
*   **根据任务 ID 查询结果**：使用上一步获得的任务 ID，查询模型生成的结果。
    

### 创建任务

`POST https://dashscope.aliyuncs.com/api/v1/services/aigc/text2image/image-synthesis`

```
curl -X POST https://dashscope.aliyuncs.com/api/v1/services/aigc/text2image/image-synthesis \
    -H 'X-DashScope-Async: enable' \
    -H "Authorization: Bearer $DASHSCOPE_API_KEY" \
    -H 'Content-Type: application/json' \
    -d '{
    "model": "wanx2.1-t2i-turbo",
    "input": {
        "prompt": "一间有着精致窗户的花店，漂亮的木质门，摆放着花朵"
    },
    "parameters": {
        "size": "1024*1024",
        "n": 1
    }
}'
```

```
curl -X POST https://dashscope.aliyuncs.com/api/v1/services/aigc/text2image/image-synthesis \
    -H 'X-DashScope-Async: enable' \
    -H "Authorization: Bearer $DASHSCOPE_API_KEY" \
    -H 'Content-Type: application/json' \
    -d '{
    "model": "wanx2.1-t2i-turbo",
    "input": {
        "prompt": "雪地，白色小教堂，极光，冬日场景，柔和的光线。",
        "negative_prompt": "人物"
    },
    "parameters": {
        "size": "1024*1024",
        "n": 1
    }
}'
```

### 根据任务 ID 查询结果

`GET https://dashscope.aliyuncs.com/api/v1/tasks/{task_id}`

<table bordertype="no-border" outputclass="api-reference column-layout" tablewidth="967" tablecolswidth="520 447" autofit="true"><colgroup colwidth="1.08*"></colgroup><colgroup colwidth="0.93*"></colgroup><tbody><tr outputclass="test"><td rowspan="1" colspan="1"><h4 id="sr-toc-5">请求参数</h4></td><td rowspan="5" colspan="1"><section outputclass="stick-top two-codeblocks"><section data-tag="tabbed-content-box" outputclass="tabbed-content-box margin-top-33"><p>查询任务结果</p><section><section data-ref-searchable="yes" docid="4720193" data-source="reuse_library"><p>您需要将<code data-tag="code" code-type="xCode">86ecf553-d340-4e21-xxxxxxxxx</code>替换为真实的 task_id。</p><pre code-type="xCode" data-tag="codeblock" outputclass="language-curl" class="hljs json">{
    "output": {
        "task_status": "PENDING",
        "task_id": "0385dc79-5ff8-4d82-bcb6-xxxxxx"
    },
    "request_id": "4909100c-7b5a-9f92-bfe5-xxxxxx"
}</pre></section></section></section></section></td></tr><tr><td rowspan="1" colspan="1"><h5><b>请求头（Headers）</b></h5></td></tr><tr outputclass="test"><td rowspan="1" colspan="1"><section data-ref-searchable="yes" docid="4720193" data-source="reuse_library"><p><b>Authorization </b><code data-tag="code" code-type="xCode"><i>string</i></code><b>（必选）</b></p><p jc="left">请求身份认证。接口使用百炼 API-Key 进行身份认证。示例值：Bearer d1xxx2a。</p></section></td></tr><tr outputclass="test"><td rowspan="1" colspan="1"><h5><b>URL 路径参数（Path parameters）</b></h5></td></tr><tr outputclass="test"><td rowspan="1" colspan="1"><section data-ref-searchable="yes" docid="4720193" data-source="reuse_library"><p><b>task_id</b> <code data-tag="code" code-type="xCode"><i>string</i></code><b>（必选）</b></p><p>任务 ID。</p></section></td></tr></tbody></table>

<table bordertype="no-border" outputclass="api-reference column-layout" tablewidth="967" tablecolswidth="520 447" autofit="true"><colgroup colwidth="1.08*"></colgroup><colgroup colwidth="0.93*"></colgroup><tbody><tr outputclass="test"><td rowspan="1" colspan="1"><h4 outputclass="test" id="sr-toc-6"><b>响应参数</b></h4></td><td rowspan="2" colspan="1"><section data-tag="tabbed-content-box" outputclass="tabbed-content-box stick-top"><p>任务执行成功</p><p>任务执行失败</p><p>任务部分失败</p><section><section data-ref-searchable="yes" docid="4720193" data-source="reuse_library"><p>任务数据（如任务状态、图像 URL 等）仅保留 24 小时，超时后会被自动清除。请您务必及时保存生成的图像。</p></section><section><pre code-type="xCode" data-tag="codeblock" outputclass="language-json" class="hljs json">{
    "code":"InvalidApiKey",
    "message":"Invalid API-key provided.",
    "request_id":"fb53c4ec-1c12-4fc4-a580-xxxxxx"
}</pre></section></section><section><section data-ref-searchable="yes" docid="4720193" data-source="reuse_library"><section><p>如果因为某种原因导致任务执行失败，任务状态将被设置为 FAILED，并通过 code 和 message 字段明确指示错误原因。</p></section></section><pre code-type="xCode" data-tag="codeblock" outputclass="language-json" class="hljs nginx">curl -X GET \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
https://dashscope.aliyuncs.com/api/v1/tasks/86ecf553-d340-4e21-xxxxxxxxx</pre></section><section><section data-ref-searchable="yes" docid="4720193" data-source="reuse_library"><p>模型可以在一次任务中生成多张图片。只要其中一张图片生成成功，任务状态将标记为<code data-tag="code" code-type="xCode">SUCCEEDED</code>，并且返回相应的图像 URL。对于生成失败的图片，结果中会返回相应的失败原因。同时在 usage 统计中，只会对成功的结果计数。</p></section><pre code-type="xCode" data-tag="codeblock" outputclass="language-json" class="hljs json">{
    "request_id": "f767d108-7d50-908b-a6d9-xxxxxx",
    "output": {
        "task_id": "d492bffd-10b5-4169-b639-xxxxxx",
        "task_status": "SUCCEEDED",
        "submit_time": "2025-01-08 16:03:59.840",
        "scheduled_time": "2025-01-08 16:03:59.863",
        "end_time": "2025-01-08 16:04:10.660",
        "results": [
            {
                "orig_prompt": "一间有着精致窗户的花店，漂亮的木质门，摆放着花朵",
                "actual_prompt": "一间有着精致雕花窗户的花店，漂亮的深色木质门上挂着铜制把手。店内摆放着各式各样的鲜花，包括玫瑰、百合和向日葵，色彩鲜艳，生机勃勃。背景是温馨的室内场景，透过窗户可以看到街道。高清写实摄影，中景构图。",
                "url": "https://dashscope-result-wlcb.oss-cn-wulanchabu.aliyuncs.com/1.png"
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
}</pre></section></section></td></tr><tr><td rowspan="1" colspan="1"><p><b>output </b><code data-tag="code" code-type="xCode"><i>object</i></code><i></i></p><p>任务输出信息。</p><section><p></p><p data-tag="expandable-title"><b>属性</b></p><i></i><p></p><section data-ref-searchable="yes" docid="4720193" data-source="reuse_library"><p><b>task_id</b> <code data-tag="code" code-type="xCode"><i>string</i></code></p><p jc="left">任务 ID。</p></section><section data-ref-searchable="yes" docid="4720193" data-source="reuse_library"><p><b>task_status</b> <code data-tag="code" code-type="xCode"><i>string</i></code></p><p jc="left">任务状态。</p><section><p></p><p data-tag="expandable-title"><b>枚举值</b></p><i></i><p></p><ul><li><p jc="left">PENDING：任务排队中</p></li><li><p jc="left">RUNNING：任务处理中</p></li><li><p jc="left">SUSPENDED：任务挂起</p></li><li><p>SUCCEEDED：任务执行成功</p></li><li><p>FAILED：任务执行失败</p></li><li><p>UNKNOWN：任务不存在或状态未知</p></li></ul></section></section><section data-ref-searchable="yes" docid="4867942" data-source="reuse_library"><p><b>submit_time</b> <code data-tag="code"><i>string</i></code></p><p jc="left">任务提交时间。</p></section><section data-ref-searchable="yes" docid="4867942" data-source="reuse_library"><p><b>scheduled_time</b> <code data-tag="code"><i>string</i></code></p><p jc="left">任务执行时间。</p></section><section data-ref-searchable="yes" docid="4867942" data-source="reuse_library"><p><b>end_time</b> <code data-tag="code"><i>string</i></code></p><p jc="left">任务完成时间。</p></section><section><p><b>results</b> <code data-tag="code" code-type="xCode"><i>array object</i></code></p><p jc="left">任务结果列表，包括图像 URL、prompt、部分任务执行失败报错信息等。</p><section><p></p><p data-tag="expandable-title"><b>数据结构</b></p><i></i><p></p><pre code-type="xCode" data-tag="codeblock" outputclass="language-json" class="hljs json">{
    "request_id": "e5d70b02-ebd3-98ce-9fe8-759d7d7b107d",
    "output": {
        "task_id": "86ecf553-d340-4e21-af6e-xxxxxx",
        "task_status": "FAILED",
        "code": "InvalidParameter",
        "message": "xxxxxx",
        "task_metrics": {
            "TOTAL": 4,
            "SUCCEEDED": 0,
            "FAILED": 4
        }
    }
}</pre></section><section><p></p><p data-tag="expandable-title"><b>属性</b></p><i></i><p></p><section><p><b>orig_prompt</b> <code data-tag="code" code-type="xCode"><i>string</i></code></p><p jc="left">原始的输入 prompt。</p></section><section><p><b>actual_prompt</b> <code data-tag="code" code-type="xCode"><i>string</i></code></p><p jc="left">开启 prompt 智能改写后实际使用的 prompt。当不开启 prompt 智能改写时，该字段不会返回。</p></section><section><p><b>url</b> <code data-tag="code" code-type="xCode"><i>string</i></code></p><p jc="left">模型生成图片的 URL 地址。</p></section><section><p><b>code</b> <code data-tag="code" code-type="xCode"><i>string</i></code></p><p jc="left">图像错误码。部分任务执行失败时会返回该字段。</p></section><section><p><b>message</b> <code data-tag="code" code-type="xCode"><i>string</i></code></p><p jc="left">图像错误信息。部分任务执行失败时会返回该字段。</p></section></section></section><section data-ref-searchable="yes" docid="4720193" data-source="reuse_library"><p jc="left"><b>task_metrics</b> <code data-tag="code" code-type="xCode"><i>object</i></code></p><p>任务结果统计。</p><section><p></p><p data-tag="expandable-title"><b>属性</b></p><i></i><p></p><section><p><b>TOTAL</b> <code data-tag="code" code-type="xCode"><i>integer</i></code></p><p jc="left">总的任务数。</p></section><section><p><b>SUCCEEDED</b> <code data-tag="code" code-type="xCode"><i>integer</i></code></p><p jc="left">任务状态为成功的任务数。</p></section><section><p><b>FAILED</b> <code data-tag="code" code-type="xCode"><i>integer</i></code></p><p jc="left">任务状态为失败的任务数。</p></section></section></section><section><section data-ref-searchable="yes" docid="4720193" data-source="reuse_library"><p><b>code </b><code data-tag="code" code-type="xCode"><i>string</i></code></p><p>请求失败的错误码。请求成功时不会返回此参数，详情请参见<a href="https://help.aliyun.com/zh/model-studio/developer-reference/error-code" title="">错误信息</a>。</p></section><section data-ref-searchable="yes" docid="4720193" data-source="reuse_library"><p><b>message </b><code data-tag="code" code-type="xCode"><i>string</i></code></p><p>请求失败的详细信息。请求成功时不会返回此参数，详情请参见<a href="https://help.aliyun.com/zh/model-studio/developer-reference/error-code" title="">错误信息</a>。</p></section></section></section></td></tr><tr><td rowspan="1" colspan="1"><section><p><b>usage</b> <code data-tag="code" code-type="xCode"><i>object</i></code></p><p jc="left">输出信息统计。只对成功的结果计数。</p><section><p></p><p data-tag="expandable-title"><b>属性</b></p><i></i><p></p><section data-ref-searchable="yes" docid="4720193" data-source="reuse_library"><p><b>image_count</b> <code data-tag="code" code-type="xCode"><i>integer</i></code></p><p>模型生成图片的数量。</p></section></section></section></td><td rowspan="1" colspan="1"></td></tr><tr><td rowspan="1" colspan="1"><section data-ref-searchable="yes" docid="4720193" data-source="reuse_library"><p><b>request_id </b><code data-tag="code" code-type="xCode"><i>string</i></code><i></i></p><p>请求唯一标识。可用于请求明细溯源和问题排查。</p></section></td><td rowspan="1" colspan="1"></td></tr></tbody></table>

DashScope SDK 调用
----------------

请先确认已安装最新版 DashScope SDK，否则可能运行报错：[安装 SDK](https://help.aliyun.com/zh/model-studio/developer-reference/install-sdk)。

DashScope SDK 目前已支持 Python 和 Java。

SDK 与 HTTP 接口的参数名基本一致，参数结构根据不同语言的 SDK 封装而定。参数说明可参考 [HTTP 调用](#42703589880ts)。

由于图像模型处理时间较长，底层服务采用异步方式提供。SDK 在上层进行了封装，支持同步、异步两种调用方式。

### Python SDK 调用

##### **请求示例**

```
{
    "request_id": "85eaba38-0185-99d7-8d16-xxxxxx",
    "output": {
        "task_id": "86ecf553-d340-4e21-af6e-xxxxxx",
        "task_status": "SUCCEEDED",
        "results": [
            {
                "url": "https://dashscope-result-bj.oss-cn-beijing.aliyuncs.com/123/a1.png"
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

##### 响应示例

```
{
    "results": [
        {
            "orig_prompt": "",
            "actual_prompt": "",
            "url": ""
        },
        {
            "code": "",
            "message": ""
        }
    ]
}
```

##### 请求示例

```
from http import HTTPStatus
from urllib.parse import urlparse, unquote
from pathlib import PurePosixPath
import requests
from dashscope import ImageSynthesis
import os

prompt = "一间有着精致窗户的花店，漂亮的木质门，摆放着花朵"


print('----sync call, please wait a moment----')
rsp = ImageSynthesis.call(api_key=os.getenv("DASHSCOPE_API_KEY"),
                          model="wanx2.1-t2i-turbo",
                          prompt=prompt,
                          n=1,
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

##### 响应示例

1、创建任务的响应示例

```
{
    "status_code": 200,
    "request_id": "9d634fda-5fe9-9968-a908-xxxxxx",
    "code": null,
    "message": "",
    "output": {
        "task_id": "d35658e4-483f-453b-b8dc-xxxxxx",
        "task_status": "SUCCEEDED",
        "results": [{
            "url": "https://dashscope-result-wlcb.oss-cn-wulanchabu.aliyuncs.com/1.png",
            "orig_prompt": "一间有着精致窗户的花店，漂亮的木质门，摆放着花朵",
            "actual_prompt": "一间精致的花店，窗户上装饰着优雅的雕花，漂亮的木质门上挂着铜制把手。店内摆放着各种色彩鲜艳的花朵，如玫瑰、郁金香和百合等。背景是温馨的室内场景，光线柔和，营造出宁静舒适的氛围。高清写实摄影，近景中心构图。"
        }],
        "submit_time": "2025-01-08 19:36:01.521",
        "scheduled_time": "2025-01-08 19:36:01.542",
        "end_time": "2025-01-08 19:36:13.270",
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

2、查询任务结果的响应示例

```
from http import HTTPStatus
from urllib.parse import urlparse, unquote
from pathlib import PurePosixPath
import requests
from dashscope import ImageSynthesis
import os

prompt = "一间有着精致窗户的花店，漂亮的木质门，摆放着花朵"


def async_call():
    print('----create task----')
    task_info = create_async_task()
    print('----wait task done then save image----')
    wait_async_task(task_info)


# 创建异步任务
def create_async_task():
    rsp = ImageSynthesis.async_call(api_key=os.getenv("DASHSCOPE_API_KEY"),
                                    model="wanx2.1-t2i-turbo",
                                    prompt=prompt,
                                    n=1,
                                    size='1024*1024')
    print(rsp)
    if rsp.status_code == HTTPStatus.OK:
        print(rsp.output)
    else:
        print('Failed, status_code: %s, code: %s, message: %s' %
              (rsp.status_code, rsp.code, rsp.message))
    return rsp


# 等待异步任务结束
def wait_async_task(task):
    rsp = ImageSynthesis.wait(task)
    print(rsp)
    if rsp.status_code == HTTPStatus.OK:
        print(rsp.output)
        for result in rsp.output.results:
            file_name = PurePosixPath(unquote(urlparse(result.url).path)).parts[-1]
            with open('./%s' % file_name, 'wb+') as f:
                f.write(requests.get(result.url).content)
    else:
        print('Failed, status_code: %s, code: %s, message: %s' %
              (rsp.status_code, rsp.code, rsp.message))


# 获取异步任务信息
def fetch_task_status(task):
    status = ImageSynthesis.fetch(task)
    print(status)
    if status.status_code == HTTPStatus.OK:
        print(status.output.task_status)
    else:
        print('Failed, status_code: %s, code: %s, message: %s' %
              (status.status_code, status.code, status.message))


# 取消异步任务，只有处于PENDING状态的任务才可以取消
def cancel_task(task):
    rsp = ImageSynthesis.cancel(task)
    print(rsp)
    if rsp.status_code == HTTPStatus.OK:
        print(rsp.output.task_status)
    else:
        print('Failed, status_code: %s, code: %s, message: %s' %
              (rsp.status_code, rsp.code, rsp.message))


if __name__ == '__main__':
    async_call()
```

### Java SDK 调用

##### 请求示例

```
{
	"status_code": 200,
	"request_id": "31b04171-011c-96bd-ac00-f0383b669cc7",
	"code": "",
	"message": "",
	"output": {
		"task_id": "4f90cf14-a34e-4eae-xxxxxxxx",
		"task_status": "PENDING",
		"results": []
	},
	"usage": null
}
```

##### 响应示例

```
{
    "status_code": 200,
    "request_id": "9d634fda-5fe9-9968-a908-xxxxxx",
    "code": null,
    "message": "",
    "output": {
        "task_id": "d35658e4-483f-453b-b8dc-xxxxxx",
        "task_status": "SUCCEEDED",
        "results": [{
            "url": "https://dashscope-result-wlcb.oss-cn-wulanchabu.aliyuncs.com/1.png",
            "orig_prompt": "一间有着精致窗户的花店，漂亮的木质门，摆放着花朵",
            "actual_prompt": "一间精致的花店，窗户上装饰着优雅的雕花，漂亮的木质门上挂着铜制把手。店内摆放着各种色彩鲜艳的花朵，如玫瑰、郁金香和百合等。背景是温馨的室内场景，光线柔和，营造出宁静舒适的氛围。高清写实摄影，近景中心构图。"
        }],
        "submit_time": "2025-01-08 19:36:01.521",
        "scheduled_time": "2025-01-08 19:36:01.542",
        "end_time": "2025-01-08 19:36:13.270",
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

##### 请求示例

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

public class Main {
  public static void basicCall() throws ApiException, NoApiKeyException {
        String prompt = "一间有着精致窗户的花店，漂亮的木质门，摆放着花朵";
        ImageSynthesisParam param =
                ImageSynthesisParam.builder()
                        .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                        .model("wanx2.1-t2i-turbo")
                        .prompt(prompt)
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

  public static void listTask() throws ApiException, NoApiKeyException {
    ImageSynthesis is = new ImageSynthesis();
    AsyncTaskListParam param = AsyncTaskListParam.builder().build();
    ImageSynthesisListResult result = is.list(param);
    System.out.println(result);
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
      //listTask();
    }catch(ApiException|NoApiKeyException e){
      System.out.println(e.getMessage());
    }
  }
}
```

##### 响应示例

1、创建任务的响应示例

```
{
    "request_id": "22f9c744-206c-9a78-899a-xxxxxx",
    "output": {
        "task_id": "4a0f8fc6-03fb-4c44-a13a-xxxxxx",
        "task_status": "SUCCEEDED",
        "results": [{
           "orig_prompt": "一间有着精致窗户的花店，漂亮的木质门，摆放着花朵",
            "actual_prompt": "一间有着精致雕花窗户的花店，漂亮的深色木质门微微敞开。店内摆放着各式各样的鲜花，包括玫瑰、百合和向日葵，色彩鲜艳，香气扑鼻。背景是温馨的室内场景，光线柔和，透过窗户洒在花朵上。高清写实摄影，中景构图。",
            "url": "https://dashscope-result-wlcb.oss-cn-wulanchabu.aliyuncs.com/1.png"
        }],
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

2、查询任务结果的响应示例

```
// Copyright (c) Alibaba, Inc. and its affiliates.

import com.alibaba.dashscope.aigc.imagesynthesis.ImageSynthesis;
import com.alibaba.dashscope.aigc.imagesynthesis.ImageSynthesisParam;
import com.alibaba.dashscope.aigc.imagesynthesis.ImageSynthesisResult;
import com.alibaba.dashscope.exception.ApiException;
import com.alibaba.dashscope.exception.NoApiKeyException;
import com.alibaba.dashscope.utils.JsonUtils;

public class Main {

    public void asyncCall() {
        System.out.println("---create task----");
        String taskId = this.createAsyncTask();
        System.out.println("---wait task done then return image url----");
        this.waitAsyncTask(taskId);
    }


    /**
     * 创建异步任务
     * @return taskId
     */
    public String createAsyncTask() {
        String prompt = "一间有着精致窗户的花店，漂亮的木质门，摆放着花朵";
        ImageSynthesisParam param =
                ImageSynthesisParam.builder()
                        .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                        .model("wanx2.1-t2i-turbo")
                        .prompt(prompt)
                        .n(1)
                        .size("1024*1024")
                        .build();

        ImageSynthesis imageSynthesis = new ImageSynthesis();
        ImageSynthesisResult result = null;
        try {
            result = imageSynthesis.asyncCall(param);
        } catch (Exception e){
            throw new RuntimeException(e.getMessage());
        }
        System.out.println(JsonUtils.toJson(result));
        String taskId = result.getOutput().getTaskId();
        System.out.println("taskId=" + taskId);
        return taskId;
    }


    /**
     * 等待异步任务结束
     * @param taskId 任务id
     * */
    public void waitAsyncTask(String taskId) {
        ImageSynthesis imageSynthesis = new ImageSynthesis();
        ImageSynthesisResult result = null;
        try {
            //如果已经在环境变量中设置了 DASHSCOPE_API_KEY，wait()方法可将apiKey设置为null
            result = imageSynthesis.wait(taskId, null);
        } catch (ApiException | NoApiKeyException e){
            throw new RuntimeException(e.getMessage());
        }
        System.out.println(JsonUtils.toJson(result));
        System.out.println(JsonUtils.toJson(result.getOutput()));
    }


    public static void main(String[] args){
        Main main = new Main();
        main.asyncCall();
    }
}
```

**错误码**
-------

如果模型调用失败并返回报错信息，请参见[错误信息](https://help.aliyun.com/zh/model-studio/developer-reference/error-code)进行解决。

此 API 还有特定状态码，具体如下所示。

<table><colgroup colwidth="0.56*"></colgroup><colgroup colwidth="1.07*"></colgroup><colgroup colwidth="1.37*"></colgroup><thead><tr><td rowspan="1" colspan="1"><p jc="center"><b>HTTP 状态码</b></p></td><td rowspan="1" colspan="1"><p jc="left"><b>接口错误码（code）</b></p></td><td rowspan="1" colspan="1"><p jc="left"><b>含义说明</b></p></td></tr></thead></table><table tablewidth="868" tablecolswidth="162 309 397" autofit="false"><colgroup colwidth="0.56*"></colgroup><colgroup colwidth="1.07*"></colgroup><colgroup colwidth="1.37*"></colgroup><tbody><tr><td rowspan="1" colspan="1"><p jc="center"><b>HTTP 状态码</b></p></td><td rowspan="1" colspan="1"><p jc="left"><b>接口错误码（code）</b></p></td><td rowspan="1" colspan="1"><p jc="left"><b>含义说明</b></p></td></tr><tr><td rowspan="1" colspan="1"><p jc="center">400</p></td><td rowspan="1" colspan="1"><p jc="left">IPInfringementSuspect</p></td><td rowspan="1" colspan="1"><p jc="left">涉嫌知识产权风险。请检查输入，避免包含涉及知识产权侵权风险的内容。</p></td></tr></tbody></table>

常见问题
----

### 模型计费及限流

**免费额度**

*   额度说明：免费额度是指模型成功生成的输出图片数量。输入图片及模型处理失败的情况不占用免费额度。
    
*   领取方式：开通阿里云百炼大模型服务后自动发放，有效期 180 天。
    
*   使用账号：阿里云主账号与其 RAM 子账号共享免费额度。
    
*   更多详情请参见[新人免费额度](https://help.aliyun.com/zh/model-studio/new-free-quota)。
    

**限时免费**

*   当计费为限时免费时，表示该模型处于公测阶段，免费额度用尽后不可使用。
    

**计费说明**

*   当计费有明确单价时，如 0.02 元 / 张，表示该模型已商业化，免费额度用尽或过期后需付费使用。
    
*   计费项：只对模型成功生成的输出图片进行收费，其余情况暂不计费。
    
*   付费方式：由阿里云主账号统一付费。RAM 子账号不能独立计量计费，必须由所属的主账号付费。如果您需要查询账单信息，请前往阿里云控制台[账单概览](https://billing-cost.console.aliyun.com/finance/month-bill/account)。
    
*   充值途径：您可以在阿里云控制台[费用与成本](https://billing-cost.console.aliyun.com/home?spm=a2c4g.11186623.0.0.2d543048F4KRQP)页面进行充值。
    
*   模型调用情况：您可以前往百炼平台的[模型观测](https://bailian.console.aliyun.com/#/model-telemetry)查看模型调用量及调用次数。
    
*   更多计费问题请参见[计费项](https://help.aliyun.com/zh/model-studio/billing-for-model-studio)。
    

**限流**

*   限流说明：阿里云主账号与其 RAM 子账号共享限流限制。
    

### wanx-v1 模型切换到 V2 版模型

您需要注意：

*   修改模型名称：wanx-v1 修改为 wanx2.1-t2i-turbo 或 wanx2.1-t2i-plus 或 wanx2.0-t2i-turbo。
    
*   创建任务接口的请求参数不一致，注意传参。
    

```
{
	"request_id": "5dbf9dc5-4f4c-9605-85ea-542f97709ba8",
	"output": {
		"task_id": "7277e20e-aa01-4709-xxxxxxxx",
		"task_status": "PENDING"
	}
}
```

```
{
    "request_id": "22f9c744-206c-9a78-899a-xxxxxx",
    "output": {
        "task_id": "4a0f8fc6-03fb-4c44-a13a-xxxxxx",
        "task_status": "SUCCEEDED",
        "results": [{
           "orig_prompt": "一间有着精致窗户的花店，漂亮的木质门，摆放着花朵",
            "actual_prompt": "一间有着精致雕花窗户的花店，漂亮的深色木质门微微敞开。店内摆放着各式各样的鲜花，包括玫瑰、百合和向日葵，色彩鲜艳，香气扑鼻。背景是温馨的室内场景，光线柔和，透过窗户洒在花朵上。高清写实摄影，中景构图。",
            "url": "https://dashscope-result-wlcb.oss-cn-wulanchabu.aliyuncs.com/1.png"
        }],
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

### 配置域名白名单以访问图片 OSS 链接

图像模型生成的图像存储于阿里云 OSS，每张图像会被分配一个 OSS 链接，如`https://dashscope-result-xx.oss-cn-xxxx.aliyuncs.com/xxx.png`。图片 OSS 链接允许公开访问，您可以使用此链接查看或者下载图片。

特别注意的是，如果您的业务对安全性要求较高，无法访问阿里云 OSS 链接，您需要单独配置外网访问白名单。请将以下域名添加到您的白名单中，以便顺利访问图片链接。

```
{
    "model": "", //必填项
    "input": {
        "prompt": "", //必填项
        "negative_prompt": "",
        "ref_img": ""
    },
    "parameters": {
        "style": "<auto>",
        "size": "1024*1024",
        "n": 4,
        "seed": 42, 
        "ref_strength": 0.5,
        "ref_mode": "repaint"
    }
}
```