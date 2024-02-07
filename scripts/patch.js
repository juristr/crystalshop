const fs = require('node:fs');

// const file = 'node_modules/@nx/vite/src/plugins/plugin.js';
// const content = fs.readFileSync(file).toString();
// if (!content.includes('PATCHED')) {
//   const updated = content.replace(
//     `const { resolveConfig } = await (0, _executorutils.loadViteDynamicImport)();`,
//     `// PATCHED - clear out CJS module cache
//      console.log('PATCHED plugin');
//      for (const key of Object.keys(require.cache)) {
//        if ((key.includes('esbuild') || key.includes('vite')) && !key.includes('@nx/')) {
//          console.log('deleting ' + key);
//          delete require.cache[key];
//        }
//      }
//      require('esbuild');
//      await import('esbuild');
//      const { resolveConfig } = await (0, _executorutils.loadViteDynamicImport)();`
//   );
//   fs.writeFileSync(file, updated);
// } else {
//   console.log('already patched');
// }

const file2 = 'node_modules/@nx/vite/src/utils/executor-utils.js'
const content2 = fs.readFileSync(file2).toString();
const updated2 = content2.replace(
  `return import("vite")`,
  `// PATCHED
  return import("vite?t=" + Date.now())`
);
fs.writeFileSync(file2, updated2);
