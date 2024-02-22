module.exports = {
    chainWebpack: config => {
                              config.plugin("html").tap((args) => {
                                args[0].title = "Vibhor Tambat";
                                args[0].favicon = "./public/favicon_black.ico";
                                return args;
                              });
                            }
}