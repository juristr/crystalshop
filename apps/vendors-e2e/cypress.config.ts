import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run vendors:serve:development',
        production: 'nx run vendors:serve:production',
      },
      ciWebServerCommand: 'nx run vendors:serve-static',
    }),
    baseUrl: 'http://localhost:4204',
  },
});
