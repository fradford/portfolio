module.exports = {
  apps: [
    {
      name: "portfolio",
      script: "./node_modules/next/dist/bin/next",
      args: "start",
      exp_backoff_restart_delay: 100,
      watch: false,
      max_memory_restart: "1G",
    },
  ],
};
