module.exports = {
  apps: [
    {
      name: "strapi-dev",
      script: "npm",
      args: "run develop",
      env: {
        NODE_ENV: "development",
      },
      watch: false, // biar PM2 sendiri gak ikut restart, biarkan strapi yg handle watch
    },
  ],
};