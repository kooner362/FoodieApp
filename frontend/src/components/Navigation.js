import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class LoginRouter extends React.Component {
  constructor(props) {
    super(props);
    this.login = props.loggedIn;
    this.clickHandler.bind(this)
  }
  clickHandler = event => {
    this.props.user = {id:null};
  };

  render() {
    if (!this.props.loggedIn) {
      return (
        <li><Link to="/login"><span className="rounded bg-secondary py-2 px-3 text-white">Login</span></Link></li>
      );
    } else if (this.props.loggedIn && this.props.admin) {
      return (
        <Fragment >
           <li><Link to="/approve/restaurants">Approve Restaurants</Link></li>
           <li><Link to="/approve/dishes">Approve Dishes</Link></li>
           <li><Link onClick={this.clickHandler} to="/"><span className="rounded bg-secondary py-2 px-3 text-white">Logout</span></Link></li>
        </Fragment>
      );
    } else {
      return (
        <Fragment >
           <li><Link to="/myratings">My Ratings</Link></li>
           <li><Link onClick={this.clickHandler} to="/"><span className="rounded bg-secondary py-2 px-3 text-white">Logout</span></Link></li>
        </Fragment>
      );
    }
  };
}

class Navigation extends React.Component {

  render() {
    let loggedIn;
    let admin = false;
    if (this.props.user.user_type === 'admin') {
      admin = true;
    }
    if(this.props.user.id) {
      loggedIn = true;
    } else {
      loggedIn = false;
    }
    return (
      <header className="site-navbar py-1" role="banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 col-xl-2">
              <h1 className="mb-0"><Link to="/" className="text-black h2 mb-0"><strong>Foodie</strong></Link></h1>
            </div>
            <div className="col-10 col-xl-10 d-none d-xl-block">
              <nav className="site-navigation text-right" role="navigation">
                <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block">
                  <li className="has-children">
                    <Link to="/restaurants/explore">Restaurants</Link>
                    <ul className="dropdown">
                      <li><Link to="/restaurants/explore">Explore</Link></li>
                      <li><Link to="/restaurants/new">New Restaurant Submission</Link></li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <Link to="/dishes/explore">Dishes</Link>
                    <ul className="dropdown">
                      <li><Link to="/dishes/explore">Explore</Link></li>
                      <li><Link to="/dishes/new">New Dish Submission</Link></li>
                    </ul>
                  </li>
                  <LoginRouter admin={admin} user={this.props.user} loggedIn={loggedIn}/>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  };
};

export default connect(
  mapStateToProps
)(Navigation);