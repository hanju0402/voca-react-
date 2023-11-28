const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        '/chemlist',
        createProxyMiddleware({
            target: "http://msds.kosha.or.kr/openapi/service/msdschem",
            pathRewrite: {
                '^/chemlist': '',
            },
        })
    );
};
