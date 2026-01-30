# uniapp 的技能集

> fork 自 [antfu Skills](https://github.com/antfu/skills)

> [!IMPORTANT]
> 这是一个概念验证项目，用于从源文档生成 agent 技能并保持同步。
> 我还没有充分测试这些技能在实际中的表现，因此非常欢迎反馈和贡献。

## 安装

```bash
pnpx skills add uni-helper/skills
```

或者全局安装所有技能：

```bash
pnpx skills add uni-helper/skills --all -g
```

在 [skills](https://github.com/vercel-labs/skills) 了解更多 CLI 用法。

## 技能

这个集合旨在成为您主要使用 uniapp 时的一站式集合。它包括来自不同来源和不同范围的技能。

### 从官方文档生成的技能

| 技能 | 描述 | 来源 |
|-------|-------------|--------|
| [uni-app](skills/uni-app) | uniapp 核心 - 跨平台应用开发框架 | [uni-app/unidocs](https://gitcode.com/dcloud/unidocs-zh) |
| [uni-helper](skills/uni-helper) | uniapp 助手 - 常用 uniapp 函数、组件、插件 | [uni-helper/website](https://github.com/uni-helper/website) |

### 外部技能

从维护自己技能的外部仓库同步而来。

| 技能 | 描述 | 来源 |
|-------|-------------|--------|
| [vueuse-functions](skills/vueuse-functions) (官方) | VueUse - 200+ Vue 组合式工具函数 | [vueuse/skills](https://github.com/vueuse/skills) |
| [vue-best-practices](skills/vue-best-practices) | Vue 3 + TypeScript 的 Volar 最佳实践 | [hyf0/vue-skills](https://github.com/hyf0/vue-skills) |
| [web-design-guidelines](skills/web-design-guidelines) | 构建美观界面的 Web 设计指南 | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) |
| [unocss](skills/unocss) | UnoCSS - 原子化 CSS 引擎、预设、转换器 | [antfu/skills/unocss](https://github.com/antfu/skills) |
| [vite](skills/vite) | Vite 构建工具 - 配置、插件、SSR、库模式 | [antfu/skills/vite](https://github.com/antfu/skills) |
| [pinia](skills/pinia) | Pinia - 直观、类型安全的 Vue 状态管理 | [antfu/skills/pinia](https://github.com/antfu/skills) |
| [vue](skills/vue) | Vue.js 核心 - 响应式、组件、组合式 API | [antfu/skills/vue](https://github.com/antfu/skills) |
