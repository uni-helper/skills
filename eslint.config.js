import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'lib',
    pnpm: false,
    ignores: [
      '**/vendor/**',
      '**/sources/**',
      '**/skills/**',
    ],
    rules: {
      'ts/explicit-function-return-type': 'off',
      'antfu/consistent-list-newline': 'off',
    },
  },
)
