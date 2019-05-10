import React, {Component} from 'react';
import LoginForm from './LoginForm';

class  MainView extends Component {
    render() {
        return (
        <div className="site-section bg-light">
            <div className="container">
                <div className="row justify-content-start text-left mb-5">
                    <div className="offset-lg-2 col-md-12 col-lg-8">
                        <h2 className="font-weight-bold text-black">Login</h2>
                    </div>
                </div>
                <LoginForm />
            </div>
        </div>
        );
    };
}

export default MainView;