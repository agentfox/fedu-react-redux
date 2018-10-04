import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <div>
            <footer>
                <div className="container">
                    <p>© Your Website 2018. All Rights Reserved.</p>
                    <ul className="list-inline">
                    <li className="list-inline-item">
                        <a href="https://www.google.com.vn">Privacy</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://www.google.com.vn">Terms</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://www.google.com.vn">FAQ</a>
                    </li>
                    </ul>
                </div>
            </footer>
        </div>

    )
  }
}
