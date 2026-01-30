---
name: vite-plugin-uni-components
description: On-demand automatic component imports for uni-app - derived from unplugin-vue-components
---

# vite-plugin-uni-components

Automatic on-demand component imports for uni-app. Derived from unplugin-vue-components with uni-app specific adaptations.

## Installation

```bash
npm i -D @uni-helper/vite-plugin-uni-components
```

## Setup

```ts
// vite.config.ts
import Uni from '@dcloudio/vite-plugin-uni'
import Components from '@uni-helper/vite-plugin-uni-components'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    Components(),  // Must be before Uni()
    Uni(),
  ],
})
```

## Features

- Automatic component imports from `src/components`
- Supports UI library resolvers
- Generates TypeScript declarations
- Handles `default` export for third-party UI libraries

## Supported UI Libraries

Built-in resolvers for:

| Library | Import |
|---------|--------|
| Ano UI | `AnoUIResolver()` |
| uni-ui | `UniUIResolver()` |
| wot-design-uni | `WotDesignUniResolver()` |
| uv-uni | `UvUniResolver()` |
| uview-pro | `UviewProResolver()` |
| z-paging | `ZPagingResolver()` |

## TypeScript Declarations

For pnpm users, create `.npmrc`:

```ini
shamefully-hoist = true
```

Generated `components.d.ts` example:

```ts
declare module 'vue' {
  export interface GlobalComponents {
    AButton: typeof import('ano-ui/components/AButton/AButton.vue')['default']
    UniCalendar: typeof import('@dcloudio/uni-ui/lib/uni-calendar/uni-calendar.vue')['default']
    MyComponent: typeof import('./src/components/MyComponent.vue')['default']
  }
}
```

## Third-Party Component Handling

For third-party components like `@dcloudio/uni-ui` and `ano-ui`, the plugin automatically adds the `default` property to handle H5 compatibility issues:

```diff
declare module 'vue' {
  export interface GlobalComponents {
-   AButton: typeof import('ano-ui/components/AButton/AButton.vue')['AButton']
+   AButton: typeof import('ano-ui/components/AButton/AButton.vue')['default']
  }
}
```

## Full Configuration

See [unplugin-vue-components documentation](https://github.com/antfu/unplugin-vue-components) for all options.

<!--
Source references:
- https://github.com/uni-helper/vite-plugin-uni-components
- https://uni-helper.js.org/vite-plugin-uni-components
-->
