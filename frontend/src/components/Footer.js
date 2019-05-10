import React, {Component} from 'react';

class Footer extends Component {
    render () {
        return (
                <footer className="site-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <h3 className="footer-heading mb-4">Discover</h3>
                                <ul className="list-unstyled">
                                <li><a href="http://localhost:3000/dishes/explore">Top Dishes</a></li>
                                <li><a href="/restaurants/explore">Top Restaurants</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <h3 className="footer-heading mb-4">Contribute Data</h3>
                                <ul className="list-unstyled">
                                <li><a href="#">Restaurant</a></li>
                                <li><a href="#">Dishes</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-unstyled">
                                    <li>
                                        <span className="social-media-icon icon-facebook"></span>
                                        <span className="social-media-icon icon-instagram"></span>
                                        <span className="social-media-icon icon-twitter"></span>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div className="row pt-5 mt-5 text-center">
                            <div className="col-md-12">
                            
                            </div>
                        </div>
                    </div>
                </footer>
            )
            }
}

export default Footer;