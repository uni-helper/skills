---
name: vite-plugin-uni-pages
description: File-based routing system for Vite-powered uni-app projects with automatic page discovery and TypeScript support
---

# vite-plugin-uni-pages

Provides file-based routing for uni-app projects using Vite. Automatically generates `pages.json` configuration from your file structure.

## Installation

```bash
npm i -D @uni-helper/vite-plugin-uni-pages
```

## Basic Setup

```ts
// vite.config.ts
import Uni from '@dcloudio/vite-plugin-uni'
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import { defineConfig } from 'vite'

// Place UniPages before Uni
export default defineConfig({
  plugins: [UniPages(), Uni()],
})
```

## TypeScript Support

Add types to `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["@uni-helper/vite-plugin-uni-pages"]
  }
}
```

## Global Configuration

Create `pages.config.ts` (or .js/.json) for global settings:

```ts
// pages.config.ts
import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  // Optional: manual pages have highest priority
  pages: [],
  globalStyle: {
    navigationBarTextStyle: 'black',
    navigationBarTitleText: '@uni-helper',
  },
})
```

## Virtual Module

Access page metadata via virtual module:

```ts
/// <reference types="@uni-helper/vite-plugin-uni-pages/client" />
import { pages } from 'virtual:uni-pages'

console.log(pages)
```

## definePage Macro

Define page configuration directly in SFC files:

```vue
<script setup lang="ts">
// Object form
definePage({
  style: {
    navigationBarTitleText: 'hello world',
  },
  middlewares: ['auth'],
})

// Function form (supports TypeScript, async)
definePage(() => {
  return {
    style: {
      navigationBarTitleText: 'dynamic title',
    },
  }
})

// Async form
definePage(async () => {
  const title = await fetchTitle()
  return {
    style: { navigationBarTitleText: title },
  }
})
</script>
```

### Important Notes for definePage

- Write inside `<script>` block
- `definePage` runs in a different scope than SFC (no access to SFC variables)
- Page path is auto-generated from file path
- Only one `definePage` per file
- Supports importing external libraries (pure JS only)
- Supports TypeScript type imports (types are stripped)

### Using with Condition Compile

```vue
<script setup>
import { isH5 } from '@uni-helper/uni-env'

definePage(() => {
  const title = isH5 ? 'H5 Environment' : 'Other Platform'
  return {
    style: { navigationBarTitleText: title },
  }
})
</script>
```

## Configuration Options

```ts
export interface Options {
  /** Generate TypeScript declarations */
  dts?: boolean | string  // default: true (outputs uni-pages.d.ts)

  /** Config file pattern */
  configSource: string    // default: 'pages.config.(ts|mts|cts|js|cjs|mjs|json)'

  /** Default home page */
  homePage: string        // default: 'pages/index' or 'pages/index/index'

  /** Merge with existing pages.json */
  mergePages: boolean     // default: true

  /** Pages directory */
  dir: string             // default: 'src/pages'

  /** Sub-packages directories */
  subPackages: string[]   // e.g., ['src/pages-sub']

  /** Output directory for pages.json */
  outDir: string          // default: 'src'

  /** Exclude patterns */
  exclude: string[]       // default: []

  /** Route block language in SFC */
  routeBlockLang: 'json5' | 'jsonc' | 'json' | 'yaml' | 'yml'  // default: 'json5'

  // Lifecycle hooks
  onBeforeLoadUserConfig?: (ctx: PageContext) => void
  onAfterLoadUserConfig?: (ctx: PageContext) => void
  onBeforeScanPages?: (ctx: PageContext) => void
  onAfterScanPages?: (ctx: PageContext) => void
  onBeforeMergePageMetaData?: (ctx: PageContext) => void
  onAfterMergePageMetaData?: (ctx: PageContext) => void
  onBeforeWriteFile?: (ctx: PageContext) => void
  onAfterWriteFile?: (ctx: PageContext) => void
}
```

## Usage with Layouts

```vue
<script setup>
definePage({
  layout: 'default',  // Specify layout
  middlewares: ['auth'],
})
</script>
```

<!--
Source references:
- https://github.com/uni-helper/vite-plugin-uni-pages
- https://uni-helper.js.org/vite-plugin-uni-pages
-->
