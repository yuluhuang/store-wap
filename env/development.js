// 开发环境
var local = require('../build/local')
function mix (o) {
    var i = 1
    var l = arguments.length
    for (; i < l; i++) {
        var arg = arguments[i]
        for (var k in arg) {
            if (arg.hasOwnProperty(k)) {
                o[k] = arg[k]
            }
        }
    }
    return o
}
module.exports = mix({
    root: 'http://192.168.1.225:8080/ycApp',
    domain: 'http://localhost:8080/#/',
    NODE_ENV: 'development'
}, local)
