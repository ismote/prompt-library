import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslint from '@eslint/js';
// import tseslint from 'typescript-eslint'; // Comment out this line
import { configs as tseslintConfigs } from 'typescript-eslint'; // Import configs specifically
// import * as eslintPluginPrettier from 'eslint-plugin-prettier'; // Commenting out old import
// import * as eslintConfigPrettier from 'eslint-config-prettier'; // Commenting out old import

// Correct imports for flat config plugins/configs
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  eslint.configs.recommended,
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...tseslintConfigs.recommended, // Use the imported configs object
  prettierConfig, // Use the imported config directly
  {
    plugins: {
      prettier: prettierPlugin, // Use the imported plugin
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
];

export default eslintConfig;
