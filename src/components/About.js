import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section id="about">
            <div className="container">
                <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-10">
                    <ul className="timeline">
                    <li className='li-about'>
                        <div className="timeline-image">
                        <img className="rounded-circle img-fluid" src="https://blackrockdigital.github.io/startbootstrap-agency/img/about/1.jpg" alt='abc' />
                        </div>
                        <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4>2009-2011</h4>
                            <h4 className="subheading">Our Humble Beginnings</h4>
                        </div>
                        <div className="timeline-body">
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                        </div>
                        </div>
                    </li>
                    <li className='li-about'>
                        <div className="timeline-image">
                        <img className="rounded-circle img-fluid" src="https://blackrockdigital.github.io/startbootstrap-agency/img/about/2.jpg" alt='abc' />
                        </div>
                        <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4>March 2011</h4>
                            <h4 className="subheading">An Agency is Born</h4>
                        </div>
                        <div className="timeline-body">
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                        </div>
                        </div>
                    </li>
                    <li className='li-about'>
                        <div className="timeline-image">
                        <img className="rounded-circle img-fluid" src="https://blackrockdigital.github.io/startbootstrap-agency/img/about/3.jpg" alt='abc' />
                        </div>
                        <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4>December 2012</h4>
                            <h4 className="subheading">Transition to Full Service</h4>
                        </div>
                        <div className="timeline-body">
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                        </div>
                        </div>
                    </li>
                    <li className='li-about'>
                        <div className="timeline-image">
                        <img className="rounded-circle img-fluid" src="https://blackrockdigital.github.io/startbootstrap-agency/img/about/4.jpg" alt='abc' />
                        </div>
                        <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4>July 2014</h4>
                            <h4 className="subheading">Phase Two Expansion</h4>
                        </div>
                        <div className="timeline-body">
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                        </div>
                        </div>
                    </li>
                    

                    </ul>
                    <h4 className='mt-5 last-about'>Be Part Of Our Story!</h4>

                </div>
                </div>
            </div>
            </section>

      </div>
    )
  }
}
