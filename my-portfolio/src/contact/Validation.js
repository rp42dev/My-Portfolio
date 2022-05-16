const validateForm = () => {
    let formValid = true;
    if (formData.from_name === '') {
        formValid = false;
        fieldError.from_name = true;
        fieldErrorMessage.from_name = 'Please enter your name';
    }
    if (formData.from_email === '') {
        formValid = false;
        fieldError.from_email = true;
        fieldErrorMessage.from_email = 'Please enter your email';
    }
    if (formData.message === '') {
        formValid = false;
        fieldError.message = true;
        fieldErrorMessage.message = 'Please enter your message';
    }
    setFieldError(fieldError);
    setValidateForm(formValid);
    setFieldErrorMessage(fieldErrorMessage);

    return formValid;
}
