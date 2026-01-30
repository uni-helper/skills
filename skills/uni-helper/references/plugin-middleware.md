---
name: vite-plugin-uni-middleware
description: Route middleware support for uni-app - implement guards, auth, and page lifecycle hooks
---

# vite-plugin-uni-middleware

Add Express-style middleware support to uni-app routing. Implement authentication guards, page analytics, and custom route logic.

## Installation

```bash
npm i -D @uni-helper/vite-plugin-uni-middleware
```

## Setup

```ts
// vite.config.ts
import Uni from '@dcloudio/vite-plugin-uni'
import UniMiddleware from '@uni-helper/vite-plugin-uni-middleware'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [UniMiddleware(), Uni()],
})
```

## Creating Middleware

Create middleware files in `src/middleware/` directory:

```ts
// src/middleware/auth.ts
import { defineMiddleware } from '@uni-helper/vite-plugin-middleware'

export default defineMiddleware((to, from, next) => {
  const token = uni.getStorageSync('token')

  if (!token && to.path !== '/pages/login/index') {
    // Redirect to login
    next('/pages/login/index')
  } else {
    // Continue navigation
    next()
  }
})
```

```ts
// src/middleware/analytics.ts
export default defineMiddleware((to, from, next) => {
  // Track page view
  uni.report('page_view', {
    path: to.path,
    from: from.path,
    timestamp: Date.now(),
  })

  next()
})
```

```ts
// src/middleware/logger.ts
export default defineMiddleware((to, from, next) => {
  console.log(`[Router] ${from.path} -> ${to.path}`)
  next()
})
```

## Applying Middleware

### Via definePage (recommended)

```vue
<script setup>
definePage({
  middlewares: ['auth', 'analytics'],
})
</script>
```

### Via pages.json

```json
{
  "pages": [{
    "path": "pages/profile/index",
    "middlewares": ["auth"]
  }]
}
```

### Global Middleware

Create `src/middleware/index.ts` for global middleware:

```ts
// src/middleware/index.ts
export default defineMiddleware((to, from, next) => {
  // Runs on every navigation
  console.log('Global middleware')
  next()
})
```

## Middleware Context

```ts
interface MiddlewareContext {
  to: {
    path: string
    query: Record<string, string>
    meta?: Record<string, any>
  }
  from: {
    path: string
    query: Record<string, string>
  }
  next: (path?: string) => void
}
```

## Middleware Order

Middleware executes in declaration order:

```vue
<script setup>
definePage({
  // Runs: logger -> auth -> analytics
  middlewares: ['logger', 'auth', 'analytics'],
})
</script>
```

## Navigation Control

```ts
export default defineMiddleware((to, from, next) => {
  // Continue to route
  next()

  // Redirect to different route
  next('/pages/other/index')

  // Redirect with query
  next({
    path: '/pages/login/index',
    query: { redirect: to.path },
  })

  // Cancel navigation (stay on current page)
  next(false)
})
```

## Async Middleware

```ts
export default defineMiddleware(async (to, from, next) => {
  try {
    const user = await fetchUserInfo()

    if (user.isBanned) {
      next('/pages/banned/index')
    } else {
      next()
    }
  } catch (error) {
    next('/pages/error/index')
  }
})
```

<!--
Source references:
- https://github.com/uni-helper/vite-plugin-uni-middleware
- https://uni-helper.js.org/vite-plugin-uni-middleware
-->
