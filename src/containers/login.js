import React, { Component } from "react";
import { Field, reduxForm,FieldArray } from "redux-form";
import { connect } from "react-redux";
import { userLogin,userLogout} from "../actions";
import  validate from "../service/validate";
import  {renderField} from "../service/renderFormComponants";



class Login extends Component {

    componentDidMount() {

    this.props.userLogout();
    }
    onSubmit(values){

    this.props.userLogin(values.username,values.password);
    }


    render() {
        const { handleSubmit} = this.props;


        /*const { handleSubmit, pristine, reset, submitting } = props;*/
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    name="username"
                    type="text"
                    component={renderField}
                    label="User Name"
                />
                <Field
                    name="password"
                    type="password"
                    component={renderField}
                    label="Password"
                />



                <div>
                    <button type="submit" className="btn btn-primary form-group">
                        Login
                    </button>
                    <button type="button" className="btn btn-primary form-group">
                        Clear Values
                    </button>
                </div>
            </form>

        );
    }
}


export default reduxForm({
    validate,
    form: "loginForm",
})(connect(null, { userLogin,userLogout })(Login));