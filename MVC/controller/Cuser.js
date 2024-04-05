// view폴더에 렌더에 해당하는 파일명으로 ejs 생성

const user = require('../model/Cuser')

exports.user = (req,res)=>{
    console.log('controller > Cuser.js')
    res.render('user')
}