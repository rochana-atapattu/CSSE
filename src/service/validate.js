/*used to validate form data before submitting*/

const validate = values => {
    const errors = {}
    if (!values.firstName) {
        errors.firstName = 'Required'
    }
    if (!values.lastName) {
        errors.lastName = 'Required'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.busNumber) {
        errors.busNumber = "Enter a Bus Number";
    }
    if (!values.routeId) {
        errors.routeId = "Enter a Route Number";
    }

    return errors
}

export default validate