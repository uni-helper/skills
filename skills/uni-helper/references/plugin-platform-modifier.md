---
name: vite-plugin-uni-platform-modifier
description: Platform modifiers for attributes and directives in uni-app - optimize bundle size by removing unused platform code
---

# vite-plugin-uni-platform-modifier

Add platform modifiers to attributes and directives for conditional compilation at the template level. Reduces bundle size by removing code for other platforms.

## Installation

```bash
npm i -D @uni-helper/vite-plugin-uni-platform-modifier
```

## Setup

```ts
// vite.config.ts
import Uni from '@dcloudio/vite-plugin-uni'
import UniPlatformModifier from '@uni-helper/vite-plugin-uni-platform-modifier'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [UniPlatformModifier(), Uni()],
})
```

## Platform Modifiers

### Directive Modifiers

```vue
<template>
  <!-- Only render on H5 -->
  <view v-if.h5="condition">H5 only content</view>

  <!-- Only render on WeChat -->
  <button v-if.mp-weixin="true">WeChat specific</button>

  <!-- Only render on App -->
  <native-view v-if.app="true">Native view</native-view>

  <!-- Platform-specific event -->
  <view @click.h5="handleH5Click" @click.mp-weixin="handleWeChatClick">
    Platform-specific click
  </view>
</template>
```

### Attribute Modifiers

```vue
<template>
  <!-- Different classes per platform -->
  <view class.h5="h5-container" class.mp-weixin="wechat-container">
    Content
  </view>

  <!-- Platform-specific styles -->
  <view :style.h5="{ padding: '20px' }" :style.app="{ padding: '10px' }">
    Styled content
  </view>
</template>
```

## Supported Platforms

| Modifier | Platform |
|----------|----------|
| `.h5` | H5/Web |
| `.mp-weixin` | WeChat Mini Program |
| `.mp-alipay` | Alipay Mini Program |
| `.mp-baidu` | Baidu Smart Program |
| `.mp-toutiao` | Douyin Mini Program |
| `.mp-qq` | QQ Mini Program |
| `.app` | iOS/Android App |

## How It Works

The plugin transforms templates at build time:

```vue
<!-- Source -->
<view v-if.h5="show">H5 Only</view>

<!-- Transformed for H5 build -->
<view v-if="show">H5 Only</view>

<!-- Removed for non-H5 builds -->
```

## Use Cases

- Platform-specific UI components
- Different interactions per platform
- Platform-optimized styles
- Conditional event handlers

## Combining with Other Plugins

```ts
// vite.config.ts
export default defineConfig({
  plugins: [
    UniComponents(),
    UniPages(),
    UniPlatform(),      // File-based platform
    UniPlatformModifier(), // Directive/attribute modifiers
    Uni(),
  ],
})
```

<!--
Source references:
- https://github.com/uni-helper/vite-plugin-uni-platform-modifier
- https://uni-helper.js.org/vite-plugin-uni-platform-modifier
-->
