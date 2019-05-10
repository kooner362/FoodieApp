import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { loginRequest } from '../../actions';
import { Redirect } from 'react-router-dom';


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        redirect: false
    }

    handleSubmit (e) {
        e.preventDefault();
        const email = this.email.value;
        // const password = this.password.value;
        this.props.dispatch(loginRequest(email));
        this.setState({ redirect: true });
    }

    render () {
        const { redirect } = this.state
        return (
            <Fragment>
                {redirect && (<Redirect to="/" />)}
                    <div className="bg-light">
                        <div className="container">
                            <div className="row">
                            <div className="offset-lg-2 col-md-12 col-lg-8 mb-5">
                                <form onSubmit={this.handleSubmit} className="p-5 bg-white">
                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <label className="font-weight-bold" htmlFor="email">Email</label>
                                            <input ref={(email) => this.email = email} type="email" id="email" className="form-control" placeholder="Enter a valid email address"></input>
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-md-12 mb-3 mb-md-0">
                                            <label className="font-weight-bold" htmlFor="fullname">Password</label>
                                            <input ref={(pass) => this.password = pass} type="password" id="password" className="form-control" placeholder="Enter a password"></input>
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <input type="submit" value="Login" className="btn btn-primary  py-2 px-4"></input>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            </div>
                        </div>
                    </div>
            </Fragment>
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
  )(LoginForm);