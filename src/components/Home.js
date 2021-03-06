import React, { Component } from 'react'
import '../htmlcss/iphone.css'
export default class Home extends Component {
  render() {
    return (
      <div>
        <header className="masthead">
            <div className="container h-100">
                <div className="row h-100">
                <div className="col-lg-7 my-auto">
                    <div className="header-content mx-auto">
                    <h1 className="mb-5">Koala News is an another news app </h1>
                    <a href="https://www.google.com.vn/" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a>
                    </div>
                </div>
                <div className="col-lg-5 my-auto">
                    <div className="device-container">
                    <div className="device-mockup iphone6_plus portrait white">
                        <div className="device">
                        <div className="screen">
                            <img src="https://blackrockdigital.github.io/startbootstrap-new-age/img/demo-screen-1.jpg" className="img-fluid" alt="abc" />
                        </div>
                        <div className="button">
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </header>
        
            <section className="download bg-primary text-center" id="download">
            <div className="container">
                <div className="row">
                <div className="col-md-8 mx-auto">
                    <h2 className="section-heading">Discover what all the buzz is about!</h2>
                    <p>Our app is available on any mobile device! Download now to get started!</p>
                    <div className="badges">
                    <a className="badge-link" href="https://www.google.com.vn/"><img src="https://blackrockdigital.github.io/startbootstrap-new-age/img/google-play-badge.svg" alt="abc" /></a>
                    <a className="badge-link" href="https://www.google.com.vn/"><img src="https://blackrockdigital.github.io/startbootstrap-new-age/img/app-store-badge.svg" alt="cba" /></a>
                    </div>
                </div>
                </div>
            </div>
            </section>
      </div>
    )
  }
}
