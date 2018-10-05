import React, { Component } from "react";
import { Field, reduxForm,FieldArray } from "redux-form";
import { connect } from "react-redux";
import { fetchRoutes} from "../../actions";
import  validate from "../../service/validate";
import  {renderField,renderError,renderRoutes} from "../../service/renderFormComponants";
import routes from "./routes";

/*Common componant to add and edit routes*/

class Route extends Component {

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
        const { handleSubmit} = this.props;


        /*const { handleSubmit, pristine, reset, submitting } = props;*/
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    name="routeId"
                    type="text"
                    component={renderField}
                    label="Route number"
                />
                <Field
                    name="description"
                    type="text"
                    component={renderField}
                    label="Description"
                />


                <FieldArray name="routeUp" label="up" component={renderRoutes} />
                <FieldArray name="routeDown" label="down" component={renderRoutes} />
                <div>
                    <button type="submit" className="btn btn-primary form-group">
                        Save
                    </button>
                    <button type="button" className="btn btn-primary form-group">
                        Clear Values
                    </button>
                    <button type="button" className="btn btn-primary form-group" >Cancel</button>
                </div>
            </form>

        );
    }
}

function mapStateToProps(state) {
    return {routes: state.routes};
}
/*state is updated with form BusNewForm*/
/*uses the predefine validator method to validate the form*/
export default reduxForm({
    validate,
    form: "BusNewForm",
})(connect(mapStateToProps, { fetchRoutes })(Route));