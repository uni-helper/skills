---
name: uni-env
description: Environment detection utilities for uni-app - detect platform at runtime
---

# uni-env

Runtime environment detection utilities for uni-app. Detect the current platform in a type-safe way.

## Installation

```bash
npm i @uni-helper/uni-env
```

## Usage

```ts
import { isH5, isMpWeixin, isApp, isMp } from '@uni-helper/uni-env'

if (isH5) {
  console.log('Running in H5')
}

if (isMpWeixin) {
  console.log('Running in WeChat Mini Program')
}
```

## Available Detectors

### Platform Groups

| Detector | Description |
|----------|-------------|
| `isH5` | H5/Web platform |
| `isApp` | iOS/Android App |
| `isMp` | Any Mini Program |
| `isQuickapp` | Quick App |

### Mini Program Detectors

| Detector | Description |
|----------|-------------|
| `isMpWeixin` | WeChat Mini Program |
| `isMpAlipay` | Alipay Mini Program |
| `isMpBaidu` | Baidu Smart Program |
| `isMpToutiao` | Douyin Mini Program |
| `isMpQQ` | QQ Mini Program |
| `isMpKuaishou` | Kuaishou Mini Program |
| `isMpJd` | JD Mini Program |
| `isMpHarmony` | HarmonyOS Meta Service |
| `isMpLark` | Feishu/Lark Mini Program |

### Development Detectors

| Detector | Description |
|----------|-------------|
| `isDev` | Development environment |
| `isProd` | Production environment |

## Use Cases

### Conditional Logic

```ts
import { isH5, isMpWeixin, isApp } from '@uni-helper/uni-env'

function getStorageAdapter() {
  if (isH5) {
    return new LocalStorageAdapter()
  }
  if (isMpWeixin) {
    return new WechatStorageAdapter()
  }
  if (isApp) {
    return new NativeStorageAdapter()
  }
  return new UniStorageAdapter()
}
```

### Platform-Specific Features

```ts
import { isH5, isMpWeixin } from '@uni-helper/uni-env'

function share(content: ShareContent) {
  if (isMpWeixin) {
    // Use WeChat share API
    wx.showShareMenu({ withShareTicket: true })
  } else if (isH5) {
    // Use Web Share API
    navigator.share({
      title: content.title,
      url: content.url,
    })
  } else {
    // Use uni-app generic share
    uni.share({
      title: content.title,
      path: content.path,
    })
  }
}
```

### With definePage

```ts
import { isH5 } from '@uni-helper/uni-env'

definePage(() => {
  const title = isH5 ? 'H5 Version' : 'Mobile Version'

  return {
    style: {
      navigationBarTitleText: title,
    },
  }
})
```

## Important Note

This package is primarily for **plugin developers**. For runtime conditional compilation, use uni-app's [official conditional compilation](https://uniapp.dcloud.net.cn/tutorial/platform.html#preprocessor) with `/* #ifdef */` comments.

For better conditional compilation support, consider using [unplugin-preprocessor-directives](https://github.com/KeJunMao/unplugin-preprocessor-directives).

## Comparison with Conditional Compilation

```ts
// Runtime detection (uni-env)
import { isH5 } from '@uni-helper/uni-env'
if (isH5) {
  // This code exists in all builds
  doH5Thing()
}

// Build-time conditional compilation
// #ifdef H5
doH5Thing()
// #endif
// This code only exists in H5 builds
```

Choose based on your needs:
- Use **uni-env** for runtime detection when you need the same bundle for multiple platforms
- Use **conditional compilation** for build-time optimization and smaller bundles

<!--
Source references:
- https://github.com/uni-helper/uni-env
- https://uni-helper.js.org/uni-env
-->
