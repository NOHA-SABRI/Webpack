const path=require('path')
const HTMLPlugin=require('html-webpack-plugin')
const ImageMinPlugin=require('image-minimizer-webpack-plugin')
const clearPlugin=require('clean-webpack-plugin').CleanWebpackPlugin
const TerserPlugin=require('terser-webpack-plugin')
const ExrtactCss=require('mini-css-extract-plugin')
const cssMinPlugin=require('image-minimizer-webpack-plugin')
module.exports={
    entry:path.resolve(__dirname,'./src/index.js'),
    output:{
        filename:'script.bundle.js',
        path:path.resolve(__dirname,'./dist')
    },
    mode:'development',
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:[ExrtactCss.loader,'css-loader']
            },
            //loader img
            {
                test:/\.(png|jpe?g|gif)$/i,
                use:[
                     {
                        loader:'file-loader',
                        options:{
                            name:'[name].[ext]',
                            outputPath:'images/'
                        }
                     },
                     {
                         loader:ImageMinPlugin.loader,
                         options:{
                            minimizerOptions:{
                                 plugins:[
                                    'gifsicle','svgo','optipng',['mozjpag',{quality:60}]
                                 ]
                             }
                         }
                     }

                ],
            },
            //loader sass
            {
                test: /\.s[ac]ss$/i,
                use: [ExrtactCss.loader,'css-loader','sass-loader' ],
                 
                 
            }

        ]
    },
    plugins:[
         new HTMLPlugin({title:'output',filename:'index.html',inject:'body'})
         , new clearPlugin()
         , new ExrtactCss()
    ],
    optimization:{
        minimize:true,
        minimizer:[
            new TerserPlugin({
                terserOptions:{
                    format:{
                        comments:false
                    }
                },
                extractComments:false
             
            }
            )
            
            ,new cssMinPlugin()
        ]
    }

}