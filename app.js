var express = require('express') //加载express这个模块
var path = require('path')//引入path模块
var port = process.env.PORT || 3000 //设置端口;process是全局变量，获取环境变量和外围传入的参数
var app = express() //启动一个web服务器
var bodyParser = require('body-parser')

//将实例付给一个变量 App
app.set('views', './views/pages') //再设置视图的根目录
app.set('view engine', 'jade') //设置默认的模板引擎
// app.use(express.bodyParser()) // 表单数据格式化
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'bower_components')))//静态资源获取 CSS JS 的路径 dirname 前面是两个下划线
app.listen(port) //监听端口

console.log('fivestar started on port: ' + port)

//index page
app.get('/', function (req, res) {
    res.render('index', {
        title: 'fivestar 首页',
        movies: [{
                title: '机械战警',
                _id: 1,
                poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
            },{
                title: '机械战警',
                _id: 2,
                poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
            },{
                title: '机械战警',
                _id: 3,
                poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
            },{
                title: '机械战警',
                _id: 4,
                poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
            },{
                title: '机械战警',
                _id: 5,
                poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
            },{
                title: '机械战警',
                _id: 6,
                poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
           }]
    })
})

//detail page
app.get('/movie/:id', function(req, res) {
    res.render('detail', {
        title: 'fivestar 详情页',
        movie: {
            doctor: '何塞.帕迪里亚',
            country: '美国',
            title: '机械战警',
            year: 2014,
            language: '英语',
            flash: 'http://player.youku.com/player.php/sid/XNJA1jc0NTUy/v.swf',
            summary: '影片《X战警》改编自漫威同名漫画，是由福克斯电影公司出品的《X战警》系列电影第一部,由布莱恩·辛格执导，休·杰克曼、帕特里克·斯图尔特、伊恩·麦凯伦等联袂主演，影片于2000年7月14日在美国上映.'
        }
    })
})

//admin page 
app.get('/admin/movie', function(req, res){
    res.render('admin', {
        title:  'fivestar 后台录入页',
        movie: {
            doctor: '',
            country: '',
            title: '',
            year: '',
            poster: '',
            language: '',
            flash: '',
            summary:''
        }
    })
})

//list page
app.get('/admin/list', function(req, res){
    res.render('list', {
        title: 'fivestar 列表页',
        movies: [{
            doctor: '何塞.帕迪里亚',
            country: '美国',
            title: '机械战警',
            _id: 1,
            year: 2014,
            language: '英语',
            flash: 'http://player.youku.com/plary.php/sid/XNJA1jc0NTUy/v.swf',
            summary: '影片《X战警》改编自漫威同名漫画，是由福克斯电影公司出品的《X战警》系列电影第一部,由布莱恩·辛格执导，休·杰克曼、帕特里克·斯图尔特、伊恩·麦凯伦等联袂主演，影片于2000年7月14日在美国上映.'
        }]
    }) 
})