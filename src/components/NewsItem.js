import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    return (
      <div>
        <div className="col-4">
                .<div className="card-desks">
                <div className="card-body">
                    <a href="details.html"><img src="http://placehold.it/800x400" alt='abc' className="img-fluid" /></a> 
                    <blockquote className="blockquote">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nostrum perferendis iste quo? Quos odio nesciunt adipisci laudantium, facilis deserunt atque aliquam repudiandae, ducimus accusantium necessitatibus eaque, ab voluptas suscipit.</p>
                    <footer className="card-blockquote">Footer<cite title="Source title">Source title</cite></footer>
                    </blockquote>
                </div>
                </div>
            </div>
      </div>
    )
  }
}
