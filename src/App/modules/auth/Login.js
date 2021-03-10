import React, { useCallback, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './styles.scss';
import '../../../assets/scss/style.scss';
import { loginRequest } from '../../../services/auth';
import { actionLogin } from './store/actions';

function Login(props) {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      history.push('/web-app');
    } else {
      history.push('/login');
    }
  }, [history]);

  const loginHandle = async () => {
    setLoading(true);
    await loginRequest(data)
      .then((res) => {
        console.log(res.user);
        dispatch(actionLogin(res.user));
        history.push('/web-app');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-content">
        <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} className="logo" />
        <div className="card">
          <div className="card-body">
            <Form onSubmit={handleSubmit(loginHandle)}>
              <h3 className="mb-4">Login</h3>
              <Form.Group type="invalid">
                <Form.Control
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  ref={register({ required: 'Harap masukan email anda.' })}
                  isInvalid={errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group type="invalid">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => setData({ ...data, password: e.target.value })}
                  ref={register({ required: 'Harap masukan password anda.' })}
                  isInvalid={errors.password}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.password?.message}
                </Form.Control.Feedback>
              </Form.Group>
              <div className="form-group text-left">
                <div className="checkbox checkbox-fill d-inline">
                  <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" />
                  <label htmlFor="checkbox-fill-a1" className="cr">
                    Save credentials
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-block shadow-2 mb-4">
                Login
              </button>
              <div className="text-center">
                <p className="mb-2 text-muted">
                  Lupa password? <NavLink to="/auth/reset-password-1">Reset</NavLink>
                </p>
                <p className="mb-0 text-muted">
                  Tidak punya akun? <NavLink to="/register">Register</NavLink>
                </p>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(null)(Login);
