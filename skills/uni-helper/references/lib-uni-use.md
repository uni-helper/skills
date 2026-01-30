---
name: uni-use
description: VueUse-style composable utilities for uni-app development
---

# uni-use

VueUse-style composable utilities specifically designed for uni-app. Provides reactive wrappers around uni-app APIs.

## Installation

```bash
npm i @uni-helper/uni-use @vueuse/core@9
```

## Usage

```ts
import { tryOnLoad, useClipboard, useSystemInfo } from '@uni-helper/uni-use'

tryOnLoad(() => {
  console.log('Page loaded')
})

const { copy, text } = useClipboard()
const { systemInfo } = useSystemInfo()
```

## Auto Import Setup

```ts
// vite.config.ts
import { uniuseAutoImports } from '@uni-helper/uni-use'
import autoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    autoImport({
      imports: [uniuseAutoImports()],
    }),
    uni(),
  ],
})
```

## Available Composables

### Lifecycle

| Composable | Description |
|------------|-------------|
| `tryOnLoad` | onLoad with try-catch |
| `tryOnShow` | onShow with try-catch |
| `tryOnHide` | onHide with try-catch |
| `tryOnReady` | onReady with try-catch |
| `tryOnUnload` | onUnload with try-catch |
| `tryOnPullDownRefresh` | onPullDownRefresh with try-catch |
| `tryOnReachBottom` | onReachBottom with try-catch |
| `tryOnPageScroll` | onPageScroll with try-catch |
| `tryOnTabItemTap` | onTabItemTap with try-catch |

### System

| Composable | Description |
|------------|-------------|
| `useSystemInfo` | Reactive system information |
| `useDeviceInfo` | Device information |
| `useWindowInfo` | Window dimensions |
| `useAppTheme` | App theme (dark/light) |
| `useNetworkStatus` | Network connection status |
| `useBattery` | Battery status |

### Storage

| Composable | Description |
|------------|-------------|
| `useStorage` | Reactive local storage |
| `useStorageAsync` | Async storage operations |

### UI

| Composable | Description |
|------------|-------------|
| `useClipboard` | Clipboard operations |
| `useToast` | Toast notifications |
| `useModal` | Modal dialogs |
| `useActionSheet` | Action sheet |
| `useLoading` | Loading indicator |
| `useNavigationBar` | Navigation bar control |
| `usePullDownRefresh` | Pull-to-refresh |

### Location

| Composable | Description |
|------------|-------------|
| `useLocation` | Current location |
| `useChooseLocation` | Location picker |

### Media

| Composable | Description |
|------------|-------------|
| `useImage` | Image operations |
| `useCamera` | Camera access |
| `useRecorder` | Audio recording |

## Example Usage

```vue
<script setup lang="ts">
import { useClipboard, useSystemInfo, useStorage, tryOnLoad } from '@uni-helper/uni-use'

// System info
const { systemInfo, safeArea } = useSystemInfo()

// Clipboard
const { text, copy, isSupported } = useClipboard()
const handleCopy = async () => {
  await copy('Hello uni-app')
  uni.showToast({ title: 'Copied!' })
}

// Storage
const userToken = useStorage('token', '')
const saveToken = (token: string) => {
  userToken.value = token
}

// Lifecycle
tryOnLoad((options) => {
  console.log('Page options:', options)
})
</script>

<template>
  <view class="page">
    <text>Platform: {{ systemInfo.platform }}</text>
    <text>Safe area top: {{ safeArea?.top }}px</text>
    <button @click="handleCopy">Copy to clipboard</button>
  </view>
</template>
```

## Build Configuration

For Vite + Vue3 projects targeting ES6:

```ts
// vite.config.ts
export default defineConfig({
  build: {
    target: 'es6',
    cssTarget: 'chrome61',
  },
  optimizeDeps: {
    exclude: ['vue-demi'],
  },
})
```

Add polyfills in `main.ts` if needed:

```ts
// main.ts
import 'core-js/actual/array/iterator'
import 'core-js/actual/promise'
import 'core-js/actual/object/assign'
```

## Limitations

- Mini Program and App environments lack some globals (window, navigator)
- Cannot use top-level await
- Some VueUse features may not work in uni-app

## See Also

- Full API docs: https://uni-helper.js.org/uni-use/apis
- VueUse: https://vueuse.org/

<!--
Source references:
- https://github.com/uni-helper/uni-use
- https://uni-helper.js.org/uni-use
-->
