import React, {Fragment, Component } from 'react';
import RelatedPost from './RelatedPost';
import seeder from '../seeder';
export default class NewsDetail extends Component {
  render() {
      
    return (
            <div>
        

            {     
                seeder.filter(news =>news.id=== parseInt(this.props.match.params.id,10))
                        .map(news => {

                            return (
                                <Fragment>
                                <header className="masthead news">
                                    <div className="container h-100">
                                        <div className="row h-100">
                                        <div className="col-lg-12 my-auto ">
                                            <div className="header-content mx-auto ">
                                            <h3 className="mb-5 news-title">{news.title}</h3>
                                            
                                            </div>
                                        </div>
                                        
                                        </div>
                                    </div>
                                </header>
                                <div className="jumbotron jumbotron-fluid mb-3">
                                    <div className="container">
                                    <img src={news.imageUrl} className="img-fluid stretch" alt="news" />
                                    <p className="lead">{news.title}</p>
                                    <hr className="my-2" />
                                    <p>{news.content}</p>
                                    </div>
                                </div>
                                <div className="container mb-3">
                                    <div className="card border-primary">
                                    <div className="card-body">
                                        <h4 className="card-title">Related Posts</h4>
                                        <div className="row">
                                    <div className="col-12">
                                        <div className="card-deck">
                                            <RelatedPost thisPostId={news.id} />
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>

                                </div>
                                
                                </Fragment>
                            )
                        
                    })
            
                
                 
            }

            </div>

    )
  }
}
