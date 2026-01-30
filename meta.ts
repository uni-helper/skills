export interface VendorSkillMeta {
  official?: boolean
  source: string
  skills: Record<string, string> // sourceSkillName -> outputSkillName
}

/**
 * Repositories to clone as submodules and generate skills from source
 */
export const submodules = {
  'uniapp': 'https://gitcode.com/dcloud/unidocs-zh',
  'uni-helper': 'https://github.com/uni-helper/website',
}

/**
 * Already generated skills, sync with their `skills/` directory
 */
export const vendors: Record<string, VendorSkillMeta> = {
  'vueuse': {
    official: true,
    source: 'https://github.com/vueuse/skills',
    skills: {
      'vueuse-functions': 'vueuse-functions',
    },
  },
  'vue-best-practices': {
    source: 'https://github.com/vuejs-ai/skills',
    skills: {
      'vue-best-practices': 'vue-best-practices',
    },
  },
  'web-design-guidelines': {
    source: 'https://github.com/vercel-labs/agent-skills',
    skills: {
      'web-design-guidelines': 'web-design-guidelines',
    },
  },
  'antfu': {
    source: 'https://github.com/antfu/skills',
    skills: {
      vite: 'vite',
      unocss: 'unocss',
      pinia: 'pinia',
      vue: 'vue',
    },
  },
}
