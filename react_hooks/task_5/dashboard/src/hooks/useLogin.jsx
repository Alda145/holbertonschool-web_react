import { useState } from "react";

const useLogin = (props) => {
    const [enableSubmit, setEnableSubmit] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "" });

    const validateForm = (email, password) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email) && password.length >= 8;
    };

    const handleChangeEmail = (e) => {
        const email = e.target.value;
        const { password } = formData;

        setFormData((prevFormData) => ({
            ...prevFormData,
            email,
        }));

        setEnableSubmit(validateForm(email, password));
    };

    const handleChangePassword = (e) => {
        const password = e.target.value;
        const { email } = formData;

        setFormData((prevFormData) => ({
            ...prevFormData,
            password,
        }));

        setEnableSubmit(validateForm(email, password));
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();

        const { email, password } = formData;

        if (props.logIn) {
            props.logIn(email, password);
        }
    };

    return {
        formData,
        enableSubmit,
        handleChangeEmail,
        handleChangePassword,
        handleLoginSubmit,
    };
};

export default useLogin;