const fs = require('node:fs');

const file = 'node_modules/@nx/vite/src/plugins/plugin.js';
const content = fs.readFileSync(file).toString();
if (!content.includes('PATCHED')) {
  const updated = content.replace(
    `const { resolveConfig } = await (0, _executorutils.loadViteDynamicImport)();`,
    `
    // PATCHED
    console.log('>>> patched plugin 10');
    const { resolveConfig } = await (0, _executorutils.loadViteDynamicImport)();`
  );
  fs.writeFileSync(file, updated);
  console.log(fs.readFileSync(file).toString());
} else {
  console.log('already patched');
}
