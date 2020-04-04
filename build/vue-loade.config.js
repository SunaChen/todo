
module.exports = (isDev) => {
    return {
        preserveWhitepace:true,
        extractCSS:!isDev,
        cssModules:{},
        loaders:{
            
        }
        //hotReload:false //关闭热重载,根据环境变量生成
    }
} 