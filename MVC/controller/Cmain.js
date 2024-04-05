// view폴더에 렌더에 해당하는 파일명으로 ejs 생성

const comment = require("../model/Comments");
exports.main = (req,res)=>{
    console.log('controller > Cmain.js');
    res.render('index')
}

exports.comments = (req,res)=>{
    console.log('controller > Cmain.js > comments');
    res.render('comments', { commentInfos: comment.commentInfo()})
}

exports.comment = (req,res)=>{
    console.log('현재 해당페이지의 위치 controller > Cmain.js > comment');
    console.log('몇번째를 클릭했을까요?',req.params.id )
    
    const comments = comment.commentInfo(); //전체 내용
    const commentId = req.params.id; //해당댓글
    res.render('comment', {commentInfo :{} })
}

