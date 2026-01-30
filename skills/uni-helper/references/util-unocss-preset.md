---
name: unocss-preset-uni
description: UnoCSS preset for uni-app with platform-specific utilities and rpx support
---

# unocss-preset-uni

UnoCSS preset designed for uni-app development. Provides utilities for rpx units and platform-specific styling.

## Installation

```bash
npm i -D @uni-helper/unocss-preset-uni
```

## Setup

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetUni } from '@uni-helper/unocss-preset-uni'

export default defineConfig({
  presets: [
    presetUni(),
  ],
})
```

## Features

- **rpx support**: Automatic conversion to rpx units
- **Platform variants**: Style targeting specific platforms
- **Safe area utilities**: Handle notches and safe areas
- **Compatible with**: Mini programs, H5, and App

## RPX Utilities

The preset automatically converts pixel values to rpx:

```html
<!-- These generate rpx units -->
<view class="w-100"></view>    <!-- width: 100rpx -->
<view class="h-50"></view>     <!-- height: 50rpx -->
<view class="m-20"></view>     <!-- margin: 20rpx -->
<view class="p-16"></view>     <!-- padding: 16rpx -->
<view class="text-32"></view>  <!-- font-size: 32rpx -->
```

## Platform Variants

Apply styles to specific platforms:

```html
<!-- Only apply on H5 -->
<view class="h5:bg-red"></view>

<!-- Only apply on WeChat -->
<view class="mp-weixin:bg-blue"></view>

<!-- Only apply on App -->
<view class="app:bg-green"></view>

<!-- Combine with responsive -->
<view class="h5:p-20 mp-weixin:p-10"></view>
```

## Safe Area Utilities

```html
<!-- Safe area padding -->
<view class="pt-safe"></view>      <!-- padding-top: env(safe-area-inset-top) -->
<view class="pb-safe"></view>      <!-- padding-bottom: env(safe-area-inset-bottom) -->
<view class="px-safe"></view>      <!-- padding-x with safe area -->

<!-- Safe area margin -->
<view class="mt-safe"></view>
<view class="mb-safe"></view>

<!-- Full safe area -->
<view class="safe-area"></view>
```

## Tab Bar Utilities

```html
<!-- Padding for tab bar -->
<view class="pb-tabbar"></view>

<!-- Margin for tab bar -->
<view class="mb-tabbar"></view>
```

## Status Bar Utilities

```html
<!-- Status bar height -->
<view class="h-statusbar"></view>
<view class="pt-statusbar"></view>
```

## Configuration

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetUni } from '@uni-helper/unocss-preset-uni'

export default defineConfig({
  presets: [
    presetUni({
      // rpx base width (default: 750)
      baseWidth: 750,

      // Enable platform variants
      platform: true,

      // Enable safe area utilities
      safeArea: true,

      // Custom platforms
      platforms: ['mp-weixin', 'mp-alipay', 'h5', 'app'],
    }),
  ],
})
```

## With Vite

```ts
// vite.config.ts
import Uni from '@dcloudio/vite-plugin-uni'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    UnoCSS(),
    Uni(),
  ],
})
```

## Example

```vue
<template>
  <view class="page bg-gray-100">
    <!-- Status bar spacing -->
    <view class="h-statusbar"></view>

    <!-- Header with safe area -->
    <view class="px-32 pt-safe flex items-center justify-between">
      <text class="text-36 font-bold">Title</text>
    </view>

    <!-- Content -->
    <view class="p-32 flex flex-col gap-20">
      <!-- Platform-specific styling -->
      <view class="card h5:shadow-lg mp-weixin:border">
        <text class="text-28 text-gray-800">Content</text>
      </view>
    </view>

    <!-- Bottom safe area for devices with notches -->
    <view class="pb-safe"></view>
  </view>
</template>
```

<!--
Source references:
- https://github.com/uni-helper/unocss-preset-uni
- https://uni-helper.js.org/unocss-preset-uni
-->
