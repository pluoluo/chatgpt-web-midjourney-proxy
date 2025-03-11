

### pollinations.ai
免费生成图片的网站，将 prompt 放置在 url 中可以直接获取生成的图像。
```
# Image Parameters
Prompt: **A beautiful landscape**
Width: **1024**
Height: **1024**
Seed: **42** (Each seed generates a new image)
Model: **flux**

# Image
![Generative Image](https://image.pollinations.ai/prompt/A%20beautiful%20landscape)
```

可以使用大语言模型生成 prompt，填入 URL，获得更优化的图像
#### Prompt
```
You will now act as a prompt generator. 
I will describe an image to you, and you will create a prompt that could be used for image-generation. 
Once I described the image, give a 5-word summary and then include the following markdown. 
  
![Image](https://image.pollinations.ai/prompt/{description}?width={width}&height={height})
  
where {description} is:
{sceneDetailed}%20{adjective}%20{charactersDetailed}%20{visualStyle}%20{genre}%20{artistReference}
  
Make sure the prompts in the URL are encoded. Don't quote the generated markdown or put any code box around it.
```

```

  # Image Generator Instructions

  You are an image generator. The user provides a prompt. Please infer the following parameters for image generation:

  - **Prompt:** [prompt, max 50 words]
  - **Seed:** [seed]
  - **Width:** [width]
  - **Height:** [height]
  - **Model:** [model]

  ## Key points:
  - If the user's prompt is short, add creative details to make it about 50 words suitable for an image generator AI.
  - Each seed value creates a unique image for a given prompt.
  - To create variations of an image without changing its content:
    - Keep the prompt the same and change only the seed.
  - To alter the content of an image:
    - Modify the prompt and keep the seed unchanged.
  - Infer width and height around 1024x1024 or other aspect ratios if it makes sense.
  - Infer the most appropriate model name based on the content and style described in the prompt.

  ## Default params:
  - prompt (required): The text description of the image you want to generate.
  - model (optional): The model to use for generation. Options: 'flux', 'flux-realism', 'any-dark', 'flux-anime', 'flux-3d', 'turbo' (default: 'flux')
    - Infer the most suitable model based on the prompt's content and style.
  - seed (optional): Seed for reproducible results (default: random).
  - width/height (optional): Default 1024x1024.
  - nologo (optional): Set to true to disable the logo rendering.

  ## Additional instructions:
  - If the user specifies the /imagine command, return the parameters as an embedded markdown image with the prompt in italic underneath.

  ## Example:
  ![{description}](https://image.pollinations.ai/prompt/{description}?width={width}&height={height})
  *{description}*
  
```
#### API 文档
```
## Pollinations.AI Cheatsheet for Coding Assistants

### Image Generation
Generate Image: `GET https://image.pollinations.ai/prompt/{prompt}`

### Image Models
List Models: `GET https://image.pollinations.ai/models`

### Text Generation
Generate (GET): `GET https://text.pollinations.ai/{prompt}`

### Text Generation (Advanced)
Generate (POST): `POST https://text.pollinations.ai/`

### OpenAI Compatible Endpoint
OpenAI Compatible: `POST https://text.pollinations.ai/openai`

### Text Models
List Models: `GET https://text.pollinations.ai/models`

### Real-time Feeds
Image Feed: `GET https://image.pollinations.ai/feed`
Text Feed: `GET https://text.pollinations.ai/feed`
*\* required parameter*
```
#### React 使用方法
```

// React code example using usepollinationsImage hook

import React from 'react';
import { usePollinationsImage } from '@pollinations/react';

const GeneratedImageComponent = () => {
  const imageUrl = usePollinationsImage('A beautiful landscape', {
    width: 1024,
    height: 1024,
    seed: 42,
    model: 'flux'
  });

  return (
    <div>
      {imageUrl ? <img src={imageUrl} alt="Generated Image" /> : <p>Loading...</p>}
    </div>
  );
};

export default GeneratedImageComponent;

```
#### Html 使用方法
```

<html>
  <body>
    <h2>Image Parameters</h2>
    <p>Prompt: A beautiful landscape</p>
    <p>Width: 1024</p>
    <p>Height: 1024</p>
    <p>Seed: 42 <i>Each seed generates a new image variation</i></p>
    <p>Model: flux</p>

    <img 
      src="https://image.pollinations.ai/prompt/A%20beautiful%20landscape" 
      alt="A beautiful landscape"
    />
  </body>
</html>


```

#### Rust 使用方法
```

// Rust code example for downloading an image

use reqwest::blocking::get;
use std::fs::File;
use std::io::Write;

fn download_image(image_url: &str) -> Result<(), Box<dyn std::error::Error>> {
    // Fetching the image from the URL
    let response = get(image_url)?;
    let mut file = File::create("image.jpg")?;
    let content = response.bytes()?;
    file.write_all(&content)?;

    // Logging completion message
    println!("Download Completed");
    Ok(())
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Image details
    let prompt = "A beautiful landscape";
    let width = 1024;
    let height = 1024;
    let seed = 42; // Each seed generates a new image variation
    let model = "flux"; // Using 'flux' as default if model is not provided

    let image_url = format!(
      "https://pollinations.ai/p/{}?width={}&height={}&seed={}&model={}",
      prompt, width, height, seed, model
    );

    download_image(&image_url)?;

    Ok(())
}

// Make sure you have the reqwest crate in your Cargo.toml:

[dependencies]
reqwest = { version = "0.11", features =["blocking", "json"] }
  
```
#### Node. Js 使用方法
```

// Node.js code examples for Pollinations.AI

// Example 1: Image Generation

import fs from 'fs';
import fetch from 'node-fetch';

async function downloadImage(imageUrl) {
  // Fetching the image from the URL
  const response = await fetch(imageUrl);
  // Reading the response as a buffer
  const buffer = await response.buffer();
  // Writing the buffer to a file named 'image.png'
  fs.writeFileSync('image.png', buffer);
  // Logging completion message
  console.log('Download Completed');
}

// Image details
const prompt = 'A beautiful landscape';
const width = 1024;
const height = 1024;
const seed = 42; // Each seed generates a new image variation
const model = 'flux'; // Using 'flux' as default if model is not provided

const imageUrl = `https://pollinations.ai/p/${encodeURIComponent(prompt)}?width=${width}&height=${height}&seed=${seed}&model=${model}`;

downloadImage(imageUrl);

// Example 2: Text Generation with Private Response
async function generatePrivateText() {
  const response = await fetch('https://text.pollinations.ai/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messages: [
        { role: 'user', content: 'Generate a creative story' }
      ],
      model: 'openai',
      private: true  // Response won't appear in public feed
    })
  });
  
  const data = await response.text();
  console.log('Generated Text:', data);
}

generatePrivateText();

```

#### Python 使用方法
```

# Python code example for downloading an image

import requests

def download_image(image_url):
    # Fetching the image from the URL
    response = requests.get(image_url)
    # Writing the content to a file named 'image.jpg'
    with open('image.jpg', 'wb') as file:
        file.write(response.content)
    # Logging completion message
    print('Download Completed')

# Image details
prompt = 'A beautiful landscape'
width = 1024
height = 1024
seed = 42 # Each seed generates a new image variation
model = 'flux' # Using 'flux' as default if model is not provided

image_url = f"https://pollinations.ai/p/{prompt}?width={width}&height={height}&seed={seed}&model={model}"

download_image(image_url)


# Using the pollinations pypi package

## pip install pollinations

import pollinations as ai

model_obj = ai.Model()

image = model_obj.generate(
    prompt=f'A beautiful landscape {ai.realistic}',
    model=ai.flux,
    width=1024,
    height=1024,
    seed=42
)
image.save('image-output.jpg')

print(image.url)

```
#### Feed endpoints 使用方法
```

## Feed Endpoints

### Image Feed

`GET https://image.pollinations.ai/feed`

- **Description:** Provides a real-time stream of images generated by users.
- **Usage:** Connect using an SSE-compatible client to receive continuous image data.
- **Example:**

```javascript
const eventSource = new EventSource('https://image.pollinations.ai/feed');

eventSource.onmessage = function(event) {
  const imageData = JSON.parse(event.data);
  console.log('New image generated:', imageData.imageURL);
};
\```

### Text Feed

`GET https://text.pollinations.ai/feed`

- **Description:** Provides a real-time stream of text generated by users.
- **Usage:** Connect using an SSE-compatible client to receive continuous text data.
- **Example:**

```javascript
const eventSource = new EventSource('https://text.pollinations.ai/feed');

eventSource.onmessage = function(event) {
  const textData = JSON.parse(event.data);
  console.log('New text generated:', textData);
};
\```

```