import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const UserProfileComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (firstName.trim() === '') {
            setErrorMessage('First Name cannot be blank');
            setIsSubmitted(false);
            return;
        }
        if (lastName.trim() === '') {
            setErrorMessage('Last Name cannot be blank');
            setIsSubmitted(false);
            return;
        }
        if (email.trim() === '') {
            setErrorMessage('Email cannot be blank');
            setIsSubmitted(false);
            return;
        }
        if (password.trim() === '') {
            setErrorMessage('Password cannot be blank');
            setIsSubmitted(false);
            return;
        }
        if (passwordConfirm.trim() === '') {
            setErrorMessage('Password Confirm cannot be blank');
            setIsSubmitted(false);
            return;
        }
        if (password !== passwordConfirm) {
            setErrorMessage("Passwords do not match");
            setIsSubmitted(false);
            return;
        }

        setErrorMessage('');
        setIsSubmitted(true);
    };

    return (
        <Form onSubmit={handleSubmit}>
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            {isSubmitted && (
                <Alert variant="success">
                    Thank you, {firstName} {lastName}, for updating your profile!
                </Alert>
            )}
            <Form.Group controlId="formFirstName">
                <Form.Label>First Name*</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter your first name"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}

                />
            </Form.Group>

            <Form.Group controlId="formLastName">
                <Form.Label>Last Name*</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter your last name"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}

                />
            </Form.Group>

            <Form.Group controlId="formEmail">
                <Form.Label>Email*</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}

                />
            </Form.Group>

            <Form.Group controlId="formPassword">
                <Form.Label>Password*</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}

                />
            </Form.Group>

            <Form.Group controlId="formPasswordConfirm">
                <Form.Label>Password Confirmation*</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Confirm your password"
                    value={passwordConfirm}
                    onChange={(event) => setPasswordConfirm(event.target.value)}

                />
            </Form.Group>


            <Button variant="primary" type="submit">
                Update
            </Button>


        </Form>
    );
};

export default UserProfileComponent;
