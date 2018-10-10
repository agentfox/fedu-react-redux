import React, { Component } from 'react'
import seeder from '../seeder';
import NewsItem from './NewsItem';
export default class News extends Component {
  render() {
    return (
      <div>
                
        <header className="masthead news">
            <div className="container h-100">
            <div className="row h-100">
                <div className="col-lg-12 my-auto">
                <div className="header-content mx-auto">
                    <h1 className="mb-5">News List</h1>
                </div>
                </div>
            </div>
            </div>
        </header>
        <div className="container">
            <div className="row">
            { 
                seeder.map((item)=> (
                    <NewsItem key={item.id} newsId={item.id} title = {item.title} newsIntro={item.newsIntro} content={item.content} imageUrl={item.imageUrl} />
                ))
            }
            
            </div>
        </div>

      </div>
    )
  }
}
