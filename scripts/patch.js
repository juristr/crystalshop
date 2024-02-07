const fs = require('node:fs');

const file = 'node_modules/@nx/vite/src/plugins/plugin.js';

const content = fs.readFileSync(file).toString();

if (!content.includes('PATCHED')) {
  const updated = content.replace(
    `const viteConfig = await resolveConfig({`,
    `// PATCHED - clear out CJS module cache
     console.log('PATCHED plugin');
     for (const key of Object.keys(require.cache)) {
       delete require.cache[key];
     }
     require('esbuild');
     const viteConfig = await resolveConfig({`
  );
  fs.writeFileSync(file, updated);
} else {
  console.log('already patched');
}

