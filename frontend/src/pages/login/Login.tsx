import { observer } from 'mobx-react-lite';
import { Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ModalRegisterForm from './components/ModalRegisterForm';
import LoginForm from './components/LoginForm';
import { useAuthStore } from '../../StoreProvider';
import './Login.css';

const Login = observer(() => {
  const { authState } = useAuthStore();
  const { t } = useTranslation();

  if (authState.isAuthenticated) return <Redirect to="/" />;
  return (
    <>
      <ModalRegisterForm />
      <section className="a-login-register-container">
        <main className="a-login-register-main-container">
          <header className="a-login-register-form-header">
            <h1>Mono Car Catalog</h1>
            <span>{t('login.header')}</span> {/* Beats lorem ipsum xD */}
          </header>
          <div className="a-login-form-container">
            <LoginForm />
          </div>
        </main>
      </section>
    </>
  );
});

export default Login;
