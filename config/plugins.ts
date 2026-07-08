import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  'populate-deep': {
    config: {
      defaultDepth: 10, // populate up to 10 levels deep
    },
  },
});

export default config;
