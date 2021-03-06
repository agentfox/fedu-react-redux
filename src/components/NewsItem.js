import React, {Fragment, Component } from 'react'

export default class NewsItem extends Component {
  
  
  
   to_slug = (str)=>
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

  render() {
    
    return ( // /news-detail/
      <Fragment>
        <div className="col-4 p-0">
                <div className="card-desks">
                <div className="card-body">
                    <a href={`/news-detail/${this.to_slug(this.props.title)}.${this.props.newsId}.html`} ><img src={this.props.imageUrl} alt='abc' className="img-fluid sizing" /></a> 
                    <blockquote className="blockquote">
                    <p className="mb-0"><strong>{this.props.title}</strong></p>
                    <p><cite title="News Intro">{this.props.newsIntro}</cite></p>
                    </blockquote>
                </div>
                </div>
            </div>
      </Fragment>
    )
  }
}

