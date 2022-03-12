import { Form, Button } from 'react-bootstrap';
import './Login.css';
import { useState, useEffect } from 'react';
import { actionLogin } from '../Action/ActionLogin'
import { useDispatch, useSelector } from 'react-redux';
import LoginAction from '../Redux/Reducer/LoginAction';
import { useNavigate } from 'react-router-dom';
import Loading from '../Component/Loading';
import 'bootstrap/dist/css/bootstrap.min.css';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import * as React from 'react';

const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('');
    const { token } = useSelector((state) => state.Login);
    const navigate = useNavigate();
    const [buttonDisable, setButtonDisable] = useState(false);
    const [error, setError] = useState('');
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState('');
    const [duration, setDuration] = useState(6000)
    const [countEmail, setCountEmail] = useState(0)
    const [countPassword, setCounPassword] = useState(0)
    const [countLogin, setCounLogin] = useState(0)
    const [countLoginLock, setCounLoginLock] = useState(0)



    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const handleLogin = async () => {
        try {

            if (countPassword.length > 3 || countEmail.length > 3) {
                setError('Terlalu banyak percobaan, pastikan data Email dan Password anda benar.');
                setSeverity('error');
                setOpen(true);
                return;
            }

            if (!regEmail.test(email)) {
                setError('Format Email tidak sesuai');
                setSeverity('error');
                setOpen(true);

                return;
            }

            if (password.length < 6) {
                setError('Password Minimal 6 Karakter');
                setSeverity('error');
                setDuration(6000);
                setOpen(true);

                return;
            }

            setLoading(true)
            const param = {
                username: email,
                password: password
            }
            let data = await actionLogin(param);

            console.log('qkqkqkqkq', data);

            if (!data?.data?.success) {
                if (data?.data?.status === 400) {
                    setCountEmail(countEmail + 1)
                    setCounPassword(countPassword + 1);
                }
                if (data?.data?.status === 403) {
                    setButtonDisable(true);
                    setTimeout(() => {
                        setButtonDisable(false);
                    }, 1000)
                }
                if (data?.data?.status === 401) {
                    setCounLogin(countLogin + 1);
                }

                setLoading(false);
                setError(data?.data?.message);
                setSeverity('error');
                setOpen(true);
                return
            }

            dispatch(LoginAction.SET_TOKEN(data?.data?.data?.token))
            setLoading(false);
            navigate('/Home')
            return;
        } catch (err) {
            setLoading(false);
        }
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    useEffect(() => {
        if (password.length > 0 && email.length > 0) {
            setButtonDisable(true);
        }
    }, [password, email]);

    useEffect(() => {
        console.log('kakksskkss ', countLoginLock);

    }, [countLoginLock]);

    return (
        <div className="login">
            <header className="login-header">
                <img src={require("../asset/images/header-logo.png")} className="login-logo" data-cy="header-logo" />
            </header>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }} data-cy="form-alert-container">
                    {error}
                </Alert>
            </Snackbar>
            <div className="login-container">
                <div className="login-form">
                    <label className="login-label" data-cy="form-text-title">Login</label>
                    {loading && <Loading />}

                    <label className="label-input label-input-text" data-cy="form-text-email">
                        Email
                    </label>
                    <input type="email" data-cy="form-input-email" className="form-input form-input-text" value={email} onInput={(e) => setEmail(e.target.value)} />
                    <label className="label-input label-input-password" data-cy="form-text-password">Password</label>
                    <input type="password" className="form-input form-input-password" value={password} onInput={(e) => setPassword(e.target.value)} data-cy="form-input-password" />

                    <button type="submit" disabled={!buttonDisable} className="form-button-login" data-cy="form-button-login" onClick={handleLogin}>
                        Login
                    </button>

                    <label className="login-lewati" data-cy="form-button-skip" onClick={() => { navigate('/Home') }}>
                        Lewati Login
                    </label>
                </div>
                <img src={require("../asset/images/content-logo.png")} className="login-img-content" data-cy="content-logo" />
            </div>
        </div>
    );
}

export default Login;
