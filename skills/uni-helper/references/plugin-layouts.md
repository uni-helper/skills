---
name: vite-plugin-uni-layouts
description: Nuxt-like layouts system for Vite-powered uni-app projects
---

# vite-plugin-uni-layouts

Provides a Nuxt-like layout system for uni-app. Wraps pages with reusable layout components.

## Installation

```bash
npm i -D @uni-helper/vite-plugin-uni-layouts
```

## Setup

```ts
// vite.config.ts
import uni from '@dcloudio/vite-plugin-uni'
import UniLayouts from '@uni-helper/vite-plugin-uni-layouts'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [UniLayouts(), uni()],
})
```

## Creating Layouts

Create layout files in `src/layouts/` directory:

```vue
<!-- src/layouts/default.vue -->
<template>
  <view class="layout">
    <slot name="header" />
    <slot>main content</slot>
    <slot name="footer" />
  </view>
</template>
```

## Applying Layouts

### Via pages.json (traditional)

```json
{
  "pages": [{
    "path": "pages/index/index",
    "layout": "default"
  },
  {
    "path": "pages/about/index",
    "layout": false  // Disable layout
  }]
}
```

### Via definePage (recommended)

```vue
<script setup>
definePage({
  layout: 'default',
})
</script>
```

## Dynamic Layouts

Use the `<uni-layout>` component for dynamic layout switching:

```vue
<script setup>
const layoutName = ref('default')
</script>

<template>
  <!-- Disable page layout first -->
  <uni-layout :name="layoutName">
    <template #header>
      <text>Header content</text>
    </template>

    Main content here

    <template #footer>
      <text>Footer content</text>
    </template>
  </uni-layout>
</template>
```

### Accessing Layout Ref

```vue
<script setup>
const uniLayout = ref()

onMounted(() => {
  console.log(uniLayout.value)  // Access layout component
})
</script>

<template>
  <uni-layout ref="uniLayout">
    Content
  </uni-layout>
</template>
```

Options API:

```vue
<script>
export default {
  onLoad() {
    console.log(this.$refs.uniLayout)
  },
}
</script>
```

## How It Works

The plugin does two things:

1. Auto-scans and globally registers components from `layouts/` directory
2. Wraps pages with the specified layout component

> **Note:** WeChat Mini Program limitation - If using `web-view` component, layout wrapping may not work properly.

## Configuration

See [type definitions](https://github.com/uni-helper/vite-plugin-uni-layouts/blob/main/src/types.ts) for all options.

<!--
Source references:
- https://github.com/uni-helper/vite-plugin-uni-layouts
- https://uni-helper.js.org/vite-plugin-uni-layouts
-->
