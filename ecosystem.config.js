module.exports = {
  apps: [
    {
      name: "portfolio",
      exec_mode: "cluster",
      instances: "1",
      script: "./node_modules/next/dist/bin/next",
      args: "start",
      exp_backoff_restart_delay: 100,
      watch: true,
      max_memory_restart: "1G",
    },
  ],
};
