const App = function() {
    let context = {}
    let middleWares = []

    return {
        use(fn) {
            middleWares.push(fn)
        },
        callback() {
            function dispatch(i) {
                let fn = middleWares[i]
                return Promise.resolve(
                    fn(context, function next() {
                        dispatch(i + 1)
                    })
                )
            }
            return dispatch(0)
        }
    }
}

const app = App();
app.use(async(context, next) => {
    console.log('middleare_01 start')
    await next()
    console.log('middleware_01 end')
})

app.use(async(cxt, next) => {
    console.log('middleware_02 start')
    await next()
    console.log('middleware_02 end')
})

app.use(async(cxt, next) => {
    console.log('middleware_03 start')
    console.log('middleware_03 end')
})

app.callback()