---
name: vite-plugin-uni-platform
description: File-based platform compilation for uni-app - compile different files based on target platform
---

# vite-plugin-uni-platform

Compile different files based on target platform using file naming conventions. Supports platform-specific implementations without conditional compilation.

## Installation

```bash
npm i -D @uni-helper/vite-plugin-uni-platform
```

## Setup

```ts
// vite.config.ts
import Uni from '@dcloudio/vite-plugin-uni'
import UniPlatform from '@uni-helper/vite-plugin-uni-platform'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [UniPlatform(), Uni()],
})
```

## File Naming Convention

Use platform suffixes in filenames:

```
src/
  utils/
    request.ts           # Default implementation
    request.h5.ts        # H5-specific
    request.mp-weixin.ts # WeChat Mini Program
    request.app.ts       # App (iOS/Android)
```

## Supported Platforms

| Suffix | Platform |
|--------|----------|
| `.h5.ts` | H5/Web |
| `.mp-weixin.ts` | WeChat Mini Program |
| `.mp-alipay.ts` | Alipay Mini Program |
| `.mp-baidu.ts` | Baidu Smart Program |
| `.mp-toutiao.ts` | Douyin Mini Program |
| `.mp-qq.ts` | QQ Mini Program |
| `.mp-kuaishou.ts` | Kuaishou Mini Program |
| `.app.ts` | iOS/Android App |
| `.app-plus.ts` | App (alternative) |
| `.harmony` | HarmonyOS |

## Import Usage

Import without the platform suffix:

```ts
// This automatically resolves to the correct platform version
import { request } from './utils/request'
```

## Example

```ts
// utils/request.ts - Default implementation
export const request = (options: RequestOptions) => {
  return uni.request(options)
}

// utils/request.h5.ts - H5 with axios
import axios from 'axios'

export const request = (options: RequestOptions) => {
  return axios.request(options)
}

// utils/request.mp-weixin.ts - WeChat specific
export const request = (options: RequestOptions) => {
  // Add WeChat-specific headers
  return uni.request({
    ...options,
    header: {
      ...options.header,
      'X-Platform': 'weixin',
    },
  })
}
```

## Benefits

- Cleaner code without `#ifdef` conditions
- Type-safe platform implementations
- Tree-shaking removes unused platform code
- Better IDE support and navigation

<!--
Source references:
- https://github.com/uni-helper/vite-plugin-uni-platform
- https://uni-helper.js.org/vite-plugin-uni-platform
-->
