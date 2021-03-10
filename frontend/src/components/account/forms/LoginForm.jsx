import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { withNamespaces } from 'react-i18next';
import { showModalRegisterForm } from './ModalRegisterForm';
import { useAuthStore } from '../../../StoreProvider';
import { validateInputs } from './validation';

const LoginForm = observer(({ t }) => {
  const { requestLogin, authState } = useAuthStore();
  const { isLoading } = authState;

  const [state, setState] = useState({
    username: '',
    password: '',
  });

  function handleInput(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  function handleSubmitLogin(event) {
    event.preventDefault();

    const inputs = {
      username: document.querySelector(
        '#app-root > section > main > div > form > div:nth-child(1) > input'
      ),
      loginPass: document.querySelector(
        '#app-root > section > main > div > form > div:nth-child(2) > input'
      ),
    };

    if (validateInputs(inputs, t)) {
      requestLogin({
        username: state.username,
        password: state.password,
      });
    }
  }

  return (
    <form className="a-login-form">
      <div className="a-login-form-input-container">
        <input
          name="username"
          onChange={handleInput}
          value={state.username}
          className="a-login-form-input-unit"
          placeholder={
            t('common.username')[0].toUpperCase() +
            t('common.username').slice(1)
          }
          type="text"
        />
      </div>
      <div className="a-login-form-input-container">
        <input
          name="password"
          onChange={handleInput}
          value={state.password}
          className="a-login-form-input-unit"
          placeholder={
            t('common.password')[0].toUpperCase() +
            t('common.password').slice(1)
          }
          type="password"
        />
      </div>
      <div className="a-login-form-action-button-box">
        <button type="button" onClick={handleSubmitLogin}>
          {isLoading
            ? t('common.loading').toUpperCase()
            : t('common.login')[0].toUpperCase() + t('common.login').slice(1)}
        </button>
      </div>
      <div className="a-login-form-divider-line" />
      <div className="a-login-form-alt-action-button-box">
        <button type="button" onClick={showModalRegisterForm}>
          {t('login.createNewAccount')}
        </button>
      </div>
    </form>
  );
});

export default withNamespaces()(LoginForm);