import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css'; // Import the CSS module

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.loginContainer}>
      <div className={styles.form}>
        <h2>Login</h2>
        <Formik
          initialValues={{ username: '', password: '' }}
          onSubmit={(values) => {
            if (values.username === 'username' && values.password === 'password') {
              navigate('/home');
            } else {
              navigate('/unauthorized');
              setTimeout(() => {
                navigate('/login', { replace: true });
              }, 2000);
            }
          }}
        >
          <Form>
            <Field name="username" type="text" placeholder="Username" className={styles.inputField} />
            <Field name="password" type="password" placeholder="Password" className={styles.inputField} />
            <button type="submit" className={styles.submitButton}>Login</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
