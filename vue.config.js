module.exports = {
    publicPath: '/',
    devServer: {
        //代理
        proxy: {
            // 拦截请求接口，判断是不是/api开头的，如果是，是使用代理服务器。
            '/api': {
                target: 'http://106.14.26.32:8080',  //这里是目标服务器地址
                changeOrigin: true,
                // ws: true,
                pathRewrite: {
                    '^/api': ''       //这里一定要为空
                }
            }
        }
    }
}
//   /api/login; 重写的接口：http://127.0.0.1:8100/login
// 添加或修改vue.config.js文件后，都必须重新启动VUE服务器。ctrl + C, npm run serve

