

import React , {Fragment} from 'react'
import seeder from '../seeder';

export default (props) => {
    const to_slug = (str)=>
    {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();     
    
        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');
    
        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');
    
        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');
    
        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');
    
        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');
    
        // return
        return str;
    }
  return (
    <Fragment>
        {

            seeder.filter(post => post.id !==props.thisPostId).slice(0,4)
            .map(post => (
                <div key={post.id} className="card">
                    <img className="card-img-top sm-sizing" src={post.imageUrl} alt='news' />
                    <div className="card-body">
                        <a href={`/news-detail/${to_slug(post.title)}.${post.id}.html`} className="a-news-title" ><h5 className="card-title news-title">{post.title}</h5></a>
                        <p className="card-text">{post.newsIntro}</p>
                    </div>
                </div>
            ))
        }
    </Fragment>
  )
}

