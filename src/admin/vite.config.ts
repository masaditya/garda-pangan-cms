import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
  return mergeConfig(config, {
    server: {
      allowedHosts: ['cms.gardapangan.org'],
      hmr: {
        protocol: 'wss',
        host: 'cms.gardapangan.org',
        clientPort: 443,
      },
    },
  });
};