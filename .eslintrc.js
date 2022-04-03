module.exports = {
	parserOptions: {
		project: ['./tsconfig.json']
	},
	plugins: ['prettier', 'storybook'],
	extends: [
		'@tisoap/eslint-config-ts-react',
		'plugin:prettier/recommended',
		'plugin:storybook/recommended'
	],
	rules: {
		'react/no-multi-comp': 'off',
		'prettier/prettier': ['error', {}, { usePrettierrc: true }]
	},
	overrides: [
		{
			files: ['*.stories.tsx'],
			rules: {
				'@typescript-eslint/await-thenable': 'off'
			}
		}
	]
}
