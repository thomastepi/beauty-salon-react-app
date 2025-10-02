module.exports = {
  devServer: (devServerConfig) => {
    // remove deprecated fields
    delete devServerConfig.onBeforeSetupMiddleware;
    delete devServerConfig.onAfterSetupMiddleware;

    devServerConfig.setupMiddlewares = (middlewares, devServer) => {
      if (!devServer) throw new Error("webpack-dev-server is not defined");
      console.log("[CRACO] setupMiddlewares applied");

      devServer.app.get("/healthz", (_req, res) => res.end("ok"));

      return middlewares;
    };

    return devServerConfig;
  },
};
