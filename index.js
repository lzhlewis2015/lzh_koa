const Koa = require('koa')

const app = new Koa()

const delay = () => Promise.resolve(resolve => setTimeout(() => resolve(), 2000));
app.use(async (ctx, next) => {
    ctx.body = "1";
    await next();
    ctx.body += "5";

});
app.use(async (ctx, next) => {
    ctx.body += "2";
    await delay();
    await next();
    ctx.body += "6";
});

app.use(async (ctx, next) => {
    ctx.body += "3";
});

app.listen(3000, () => {
    console.log('listen at 3000 host')
})
