import React from 'react';
import { Field} from "redux-form";

export const renderField = ({ input, label, type, meta: { touched, error } }) => {

    /*changes the input box on error*/
    const className = `form-group ${touched && error ? "has-danger" : ""}`;
    return(

        /*provides an input tag according to the provided values*/
    <div className={className}>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} className="form-control" />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
)}

/*displays an error when the user exist inputs without provideing a value*/
export const renderError = ({ meta: { touched, error } }) => touched && error ?
    <span>{error}</span> : false

/*
render array elements for route*/
export const renderRoutes = ({ label,fields, meta: { error, submitFailed } }) =>

    <ul>

            <button type="button" onClick={() => fields.push({})}>
                Halt {label}
            </button>
            {submitFailed &&
            error &&
            <span>
          {error}
        </span>}

        {fields.map((routeUp, index) =>
            <li key={index}>
                <button
                    type="button"
                    title="Remove Halt"
                    onClick={() => fields.remove(index)}
                    className="btn-danger btn-sm"
                >Remove {index+1}</button>
                <h4>
                    Halt {label} {index + 1}
                </h4>
                <Field
                    name={`${routeUp}.haltName`}
                    type="text"
                    component={renderField}
                    label="Halt Name"
                />
                <Field
                    name={`${routeUp}.id`}
                    type="text"
                    component={renderField}
                    label="Halt ID"
                />
                <Field
                    name={`${routeUp}.nextHalt`}
                    type="text"
                    component={renderField}
                    label="Next Halt"
                />
                <Field
                    name={`${routeUp}.previouseHalt`}
                    type="text"
                    component={renderField}
                    label="Previous Halt"
                />
            </li>
        )}
    </ul>