---
name: vite-plugin-uni-manifest
description: Write uni-app manifest.json in TypeScript with type safety and IntelliSense
---

# vite-plugin-uni-manifest

Write your uni-app `manifest.json` configuration in TypeScript with full type safety and IntelliSense support.

## Installation

```bash
npm i -D @uni-helper/vite-plugin-uni-manifest
```

## Setup

```ts
// vite.config.ts
import Uni from '@dcloudio/vite-plugin-uni'
import UniManifest from '@uni-helper/vite-plugin-uni-manifest'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [UniManifest(), Uni()],
})
```

## Configuration File

Create `manifest.config.ts` (or .js/.json):

```ts
// manifest.config.ts
import { defineManifestConfig } from '@uni-helper/vite-plugin-uni-manifest'

export default defineManifestConfig({
  name: 'my-uni-app',
  appid: '__UNI__XXXXXXX',
  description: 'My awesome uni-app project',
  versionName: '1.0.0',
  versionCode: '100',
  transformPx: false,
  app: {
    // App-specific config
  },
  mp-weixin: {
    // WeChat Mini Program config
  },
  mp-alipay: {
    // Alipay Mini Program config
  },
  h5: {
    // H5 config
  },
})
```

## Benefits

- **Type Safety**: Full TypeScript intellisense for all manifest properties
- **Code Reuse**: Import and reuse configuration values
- **Comments**: Add comments to explain configuration choices
- **Environment-based Config**: Use conditionals for different environments

## Example with Dynamic Config

```ts
import { defineManifestConfig } from '@uni-helper/vite-plugin-uni-manifest'
import { version } from './package.json'

export default defineManifestConfig({
  name: 'My App',
  versionName: version,
  versionCode: version.replace(/\./g, ''),

  // Platform-specific config
  'mp-weixin': {
    appid: process.env.WX_APPID || '',
    setting: {
      es6: true,
      enhance: true,
    },
  },

  h5: {
    title: 'My H5 App',
    router: {
      mode: 'hash',
    },
  },
})
```

## Configuration Options

See [types.ts](https://github.com/uni-helper/vite-plugin-uni-manifest/tree/main/packages/core/src/types.ts) for all available options.

<!--
Source references:
- https://github.com/uni-helper/vite-plugin-uni-manifest
- https://uni-helper.js.org/vite-plugin-uni-manifest
-->
