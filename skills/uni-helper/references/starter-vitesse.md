---
name: vitesse-uni-app
description: Vite-powered opinionated uni-app starter template with best practices
---

# vitesse-uni-app

Opinionated uni-app starter template powered by Vite. Includes best practices, pre-configured tooling, and modern development experience.

## Features

- ⚡️ **Vite** - Fast development and building
- 🌍 **uni-app** - Cross-platform development
- 🖖 **Vue 3** - Composition API, `<script setup>`
- 🔷 **TypeScript** - Type safety
- 🎨 **UnoCSS** - Atomic CSS
- 📦 **Auto Import** - Components and composables
- 🗂 **File-based Routing** - vite-plugin-uni-pages
- 📐 **Layout System** - Nuxt-like layouts
- 🔧 **ESLint** - Code linting

## Quick Start

```bash
# Create with create-uni
npm create uni@latest my-app --template vitesse

# Or clone directly
git clone https://github.com/uni-helper/vitesse-uni-app.git my-app
```

## Project Structure

```
vitesse-uni-app/
├── src/
│   ├── components/          # Auto-imported components
│   ├── composables/         # Auto-imported composables
│   ├── layouts/             # Layout components
│   │   ├── default.vue
│   │   └── home.vue
│   ├── pages/               # File-based routing
│   │   ├── index.vue
│   │   └── about/
│   │       └── index.vue
│   ├── static/              # Static assets
│   ├── stores/              # Pinia stores
│   ├── styles/              # Global styles
│   ├── App.vue
│   ├── main.ts
│   ├── manifest.config.ts   # TypeScript manifest
│   └── pages.config.ts      # Global pages config
├── types/                   # Type definitions
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── uno.config.ts
└── eslint.config.js
```

## Pre-configured Plugins

The template includes these pre-configured plugins:

```ts
// vite.config.ts
export default defineConfig({
  plugins: [
    UniComponents({
      resolvers: [AnoUIResolver()],
    }),
    UniPages(),
    UniLayouts(),
    UniManifest(),
    Uni(),
  ],
})
```

## Auto Imports

### Components

Components in `src/components/` are auto-imported:

```vue
<template>
  <!-- No import needed -->
  <MyButton />
</template>
```

### Composables

Files in `src/composables/` are auto-imported:

```ts
// src/composables/useCounter.ts
export function useCounter() {
  const count = ref(0)
  const inc = () => count.value++
  return { count, inc }
}
```

```vue
<script setup>
// No import needed
const { count, inc } = useCounter()
</script>
```

### Vue APIs

Vue APIs are auto-imported:

```vue
<script setup>
// No need to import ref, computed, etc.
const count = ref(0)
const doubled = computed(() => count.value * 2)
</script>
```

## Routing

File-based routing with pages in `src/pages/`:

```
pages/
├── index.vue           # /pages/index/index
├── about.vue           # /pages/about/index
└── user/
    ├── index.vue       # /pages/user/index
    └── [id].vue        # /pages/user/:id
```

### Page Configuration

```vue
<script setup>
definePage({
  style: {
    navigationBarTitleText: 'About',
  },
  layout: 'default',
})
</script>
```

## Layouts

Create layouts in `src/layouts/`:

```vue
<!-- src/layouts/default.vue -->
<template>
  <view class="layout">
    <slot name="header" />
    <slot />
    <slot name="footer" />
  </view>
</template>
```

Apply in pages:

```vue
<script setup>
definePage({
  layout: 'default',
})
</script>

<template>
  <template #header>
    <NavBar />
  </template>
  <div>Content</div>
</template>
```

## Styling with UnoCSS

```vue
<template>
  <view class="p-32 bg-gray-100">
    <text class="text-32 font-bold text-primary">
      Styled with UnoCSS
    </text>
  </view>
</template>
```

## State Management with Pinia

```ts
// src/stores/user.ts
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const name = ref('')
  const isLoggedIn = computed(() => !!name.value)

  function login(userName: string) {
    name.value = userName
  }

  return { name, isLoggedIn, login }
})
```

```vue
<script setup>
const user = useUserStore()
</script>
```

## Data Fetching

```vue
<script setup>
const { data: users, pending, error } = useFetch('/api/users')
</script>

<template>
  <view v-if="pending">Loading...</view>
  <view v-else-if="error">Error: {{ error.message }}</view>
  <view v-else>
    <view v-for="user in users" :key="user.id">
      {{ user.name }}
    </view>
  </view>
</template>
```

## Deployment

### Build for production

```bash
npm run build
```

### Platform-specific builds

```bash
# H5
npm run build:h5

# WeChat Mini Program
npm run build:mp-weixin

# App
npm run build:app
```

<!--
Source references:
- https://github.com/uni-helper/vitesse-uni-app
- https://uni-helper.js.org/vitesse-uni-app
-->
