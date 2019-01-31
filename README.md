## 创建工程
create-react-app@2.1.1

- create-react-app myApp --typescript
- create-react-app myApp --scripts-version=react-scripts-ts 

这里使用第二种方式创建

## 配置mobx
参见[创建React16.6，Mobx5 和 Typescript3 初始工程](https://blog.csdn.net/roamingcode/article/details/86713441)

## 配置less
yarn eject

yarn add less less-loader -D

在`config/webpack.config.dev.js` 和 `config/webpack.config.prod.js` 修改配置

找到 `css 配置项`
```javascript
{
  test: /\.(css|less)$/, // 修改这里，添加less匹配项
  use: [
    ..., // 省略部分配置
    {
      loader: require.resolve('less-loader'), // compiles Less to CSS
      options: {
        javascriptEnabled: true, // 为了动态导入antd组件
      },
    },
  ],
},
```

## antd

yarn add antd

## ts-loader-import 动态导入antd组件，babel-plugin-import的ts实现版

yarn add ts-import-plugin -D

在`config/webpack.config.dev.js` 和 `config/webpack.config.prod.js` 修改配置

找到ts的配置

```javascript
const tsImportPluginFactory = require('ts-import-plugin')

{
  test: /\.(ts|tsx)$/,
  include: paths.appSrc,
  use: [
    {
      loader: require.resolve('ts-loader'),
      options: {
        // disable type checker - we will use it in fork plugin
        transpileOnly: true,
        getCustomTransformers: () => ({ // 添加下面的配置来动态导入antd组件
          before: [tsImportPluginFactory({
            libraryName: 'antd',
            libraryDirectory: 'lib',
            style: true,
          })]
        }),
      },
    },
  ],
},
```

最后大功告成！