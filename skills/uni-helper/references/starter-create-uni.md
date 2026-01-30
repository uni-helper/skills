---
name: create-uni
description: CLI scaffolding tool for creating uni-app projects with best practices
---

# create-uni

Interactive CLI tool for scaffolding uni-app projects. Quickly create projects with your choice of templates, plugins, and UI libraries.

## Usage

```bash
# Create new project
npm create uni@latest

# With project name
npm create uni@latest my-project

# With options
npm create uni@latest my-project --ts --template vitesse -m pinia -u wot
```

## CLI Options

| Option | Shorthand | Description |
|--------|-----------|-------------|
| `--template` | `-t` | Select project template |
| `--typescript` | `--ts` | Enable TypeScript |
| `--eslint` | `-e` | Add ESLint |
| `--plugin` | `-p` | Add Vite plugins |
| `--module` | `-m` | Add functional modules |
| `--ui` | `-u` | Add UI component library |
| `--gui` | - | Launch GUI interface |
| `--info` | - | Show project info |

## Templates

| Template | Description | Value |
|----------|-------------|-------|
| Vitesse Uni App | Vite + uni-app starter with best practices | `vitesse` |
| Wot Starter | Based on vitesse with wot-ui | `wot-starter` |
| Wot Starter Retail | Retail/e-commerce template | `wot-starter-retail` |
| Unisave | Web-first uni-app development | `unisave` |
| TMUI 3.2 | Enterprise component library | `tmui32` |
| uView Pro Starter | uView Pro quick start | `uview-pro-starter` |
| uView Pro Demo | uView Pro full demo | `uview-pro-demo` |

## Available Plugins

| Plugin | CLI Value | Description |
|--------|-----------|-------------|
| vite-plugin-uni-components | `import` | Auto component import |
| vite-plugin-uni-pages | `pages` | File-based routing |
| vite-plugin-uni-layouts | `layouts` | Nuxt-like layouts |
| vite-plugin-uni-manifest | `manifest` | TypeScript manifest |
| vite-plugin-uni-platform | `filePlatform` | Platform-specific files |
| vite-plugin-uni-platform-modifier | `platformModifier` | Platform modifiers |
| vite-plugin-uni-middleware | `middleware` | Route middleware |
| uni-ku-root | `root` | Virtual root component |

## Available Modules

| Module | CLI Value | Description |
|--------|-----------|-------------|
| Pinia | `pinia` | State management |
| UnoCSS | `unocss` | Atomic CSS |
| uni-network | `uniNetwork` | HTTP client |
| uni-use | `uniUse` | Composable utilities |
| uni-promises | `uniPromises` | Promise wrappers |
| Uni ECharts | `uniEcharts` | Chart component |
| z-paging | `zPaging` | Pagination component |

## UI Libraries

| UI Library | CLI Value | Description |
|------------|-----------|-------------|
| Uni UI | `uni` | Official DCloud UI |
| Wot Design Uni | `wot` | Lightweight, beautiful |
| uView Pro | `uview-pro` | Vue 3 + TypeScript |
| NutUI Uniapp | `nut` | JD style, e-commerce |
| Skiyee UI | `skiyee` | Unique design language |
| UV UI | `uv` | Multi-platform |
| Ano UI | `ano` | UnoCSS-based |

## Examples

### Basic TypeScript Project

```bash
npm create uni@latest my-app --ts
```

### With Vitesse Template

```bash
npm create uni@latest my-app --ts --template vitesse
```

### Full-Featured Setup

```bash
npm create uni@latest my-app \
  --ts \
  --template vitesse \
  -p pages -p layouts -p import \
  -m pinia -m unocss -m uniUse \
  -u wot \
  -e
```

### GUI Mode

```bash
npm create uni@latest --gui
```

## Project Structure

Created projects follow this structure:

```
my-project/
├── src/
│   ├── components/      # Vue components
│   ├── composables/     # Composable functions
│   ├── layouts/         # Layout components (if layouts plugin)
│   ├── pages/           # Page components
│   ├── static/          # Static assets
│   ├── stores/          # Pinia stores (if pinia)
│   ├── App.vue
│   ├── main.ts
│   ├── manifest.config.ts  # (if manifest plugin)
│   └── pages.config.ts     # (if pages plugin)
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── uno.config.ts       # (if unocss)
```

## Post-Creation

```bash
cd my-project
npm install
npm run dev
```

<!--
Source references:
- https://github.com/uni-helper/create-uni
- https://uni-helper.js.org/create-uni
-->
