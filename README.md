## koa 使用笔记
### koa 级联的中间件

logger 有yield next
setResponseTime 也有yield next

执行流程见下：

	app.use(logger) //1 yiled next //5 层次1 重握控制权
	app.use(setResponseTime) //2 yiled next //4 层次2 重握控制权
	app.use(response);//3 

如果以传统的callback 模式理解的话：
logger(cb) => 
	setResponseTime(cb) =>
		response(cb) 
			=> cb


### koa 重用相关模块
#### koa-router
#### koa-bodyparser
