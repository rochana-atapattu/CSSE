import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createPost } from "../../actions";
import  validate from "../../service/validate";
import  {renderField,renderError} from "../../service/renderFormComponants";

/*Common componant to add and edit buses*/

class Bus extends Component {

    componentDidMount() {

        this.handleInitialize(this.props.initData);
    }

    /*sets initial values to the form inputs*/
    handleInitialize(initData) {

        this.props.initialize(initData);
    }

    onSubmit(values) {
        this.props.submitFormAction(values);
    }
    onCancel() {
        this.props.handleClose();
    }


    render() {
        const { handleSubmit,handleClose } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Bus Number"
                    name="busNumber"
                    component={renderField}
                />
                <Field
                    label="Route Number"
                    name="routeId"
                    component={renderField}
                />
                <div>
                    <label>Status</label>
                    <div>
                        <label><Field name="status" component={renderField} type="radio" value="true"/> Active {"     "}</label>
                        <label><Field name="status" component={renderField} type="radio" value="false"/> I{" "}Inactive </label>
                        <Field name="status" component={renderError}/>
                    </div>
                </div>



                <button type="submit" className="btn btn-primary form-group">Save</button>
                <button type="button" className="btn btn-primary form-group" onClick={this.onCancel.bind(this)}>Cancel</button>
            </form>
        );
    }
}


/*state is updated with form BusNewForm*/
/*uses the predefine validator method to validate the form*/
export default reduxForm({

    validate,
    form: "BusNewForm",

})(connect(null, { createPost })(Bus));