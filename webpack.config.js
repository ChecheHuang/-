const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {

    //指定入口文件
    entry: "./src/index.ts",

    //指定打包文件所在目錄
    output: {
        //指定打包文件的目錄
        path: path.resolve(__dirname, 'dist'),
        //打包後文件
        filename: "bundle.js",
        //告訴webpack不使用箭頭函數
        environment: {
            arrowFunction: false
        }
    },

    //指定webpack打包時要使用模塊
    module: {
        //指定要加載的規則
        rules: [
            {
                //test指定的是規則生效的文件
                test: /\.ts$/,
                //要使用的loader
                use: [
                    //配置babel
                    {
                        //指定加載器
                        loader: "babel-loader",
                        //設置babel
                        options: {
                            //設置預定義的環境
                            presets: [
                                [
                                    //指定環境的插件
                                    "@babel/preset-env",
                                    //配置信息
                                    {
                                        //要兼容的目標瀏覽器
                                        targets: {
                                            "chrome": "88"
                                        },
                                        //指定corejs的版本
                                        "corejs": "3",
                                        //使用corejs的方式"usage"表示按需加載
                                        "useBuiltIns": "usage"

                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'],

                //要排除的文件
                exclude: /node-modules/
            },
            //設置less文件的處理
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: 'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },
    //配置Webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],

    //用來設置引入模塊
    resolve: {
        extensions: [".ts", ".js"]
    },
    mode: 'development',
}