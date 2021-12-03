/*
 * @Descripttion: 
 * @version: 
 * @Author: 郭云展
 * @Date: 2021-09-13 10:59:07
 * @LastEditors: zhoucheng
 * @LastEditTime: 2021-10-26 15:11:44
 */

const path = require('path');
const packageName = require('./package').name;

function resolve (dir) {
  return path.join(__dirname, dir);
}

const port = 7101; // dev port
module.exports = {

  publicPath: `//localhost:${port}`,
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,

  devServer: {

    // host: '0.0.0.0',
    hot: true,
    historyApiFallback: true,//添加 重点
    port,
    overlay: {
      warnings: false,
      errors: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      // 网关接口 10001
      '/dcpApi/': {
        target: 'http://192.168.1.7:5021',
        // target: 'http://123.207.189.27:6003',
        // target: 'http://localhost:2021/vineApi/',
        ws: false,
        pathRewrite: {
          '^/dcpApi/': '/dcpApi/'
        }
      }
    }
  },

  configureWebpack: {
    devtool: 'source-map',
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    output: {
      library: `${packageName}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${packageName}`,
    },
  },
};

