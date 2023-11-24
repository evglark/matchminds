'use client';

import bcrypt from 'bcryptjs';
import { useRouter } from 'next/navigation';
import { useCookies } from 'next-client-cookies';
import { FC, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { Button, Checkbox, Input, InputPassword, Title } from '@/components/ui';
import ROUTES from '@/constants/routes';
import { login } from '@/services/AuthService';
import { EMAIL_RULE, PASSWORD_RULE } from '@/utils/formVaidations';

import { FormFooter } from '../common/FormFooter';
import s from './styles.module.scss';
interface IFormValues {
  email: string;
  password: string;
  remember: boolean;
}

const LoginPage: FC = () => {
  const { push } = useRouter();
  const cookies = useCookies();
  const [error, setError] = useState('');

  const {
    handleSubmit,
    reset,
    control,
    clearErrors,
    formState: { errors },
  } = useForm<IFormValues>({
    mode: 'onBlur',
  });

  const handleLogin = async (userData: IFormValues): Promise<{ ok: boolean }> => {
    const { data, status } = await login(userData.email, userData.password);
    if (typeof data !== 'string' && status) {
      const hashPassword = bcrypt.hashSync(data.password, 10);
      cookies.set('activeUser', JSON.stringify({ ...data, password: hashPassword }));
      cookies.set('apiToken', data?.apiToken);
      cookies.set('activeEmail', data?.email);
      return { ok: true };
    } else {
      typeof data === 'string' && setError(data);
      return { ok: false };
    }
  };

  const onSubmut: SubmitHandler<IFormValues> = async (data): Promise<void> => {
    const { ok } = await handleLogin(data);
    if (ok) {
      reset();
      clearErrors();
      push(ROUTES.USER);
    }
  };

  return (
    <form id="loginForm" className={s.loginContainer} onSubmit={handleSubmit(onSubmut)}>
      <Title name="purpleH2">
        SIGN IN TO YOUR <span>ACCOUNT</span>
      </Title>
      <div className={s.textContent}>
        <p>Don’t have an account?</p>
        <Button
          styleType="clear"
          className={s.btnEmpty}
          onClick={() => push(ROUTES.AUTH.REGISTRATION)}
        >
          Sign up
        </Button>
      </div>
      <div className={s.inputBlockWrapper}>
        <Controller
          name={'email'}
          control={control}
          rules={EMAIL_RULE}
          defaultValue={''}
          render={({ field: { onChange, value } }) => (
            <Input
              id="email"
              name="email"
              label="Email"
              type="email"
              value={value}
              onChange={onChange}
              error={errors.email?.message || ''}
            />
          )}
        />
        <Controller
          name={'password'}
          control={control}
          rules={PASSWORD_RULE}
          defaultValue={''}
          render={({ field: { onChange, value } }) => (
            <InputPassword
              id="password"
              name="password"
              label="Password"
              value={value}
              onChange={onChange}
              error={errors.password?.message || ''}
            />
          )}
        />
      </div>
      <Controller
        name={'remember'}
        control={control}
        defaultValue={false}
        render={({ field: { onChange, value } }) => (
          <Checkbox
            checked={value}
            onChange={onChange}
            error={errors.remember?.message || ''}
          >
            Remember me
          </Checkbox>
        )}
      />
      {error && <p className={s.errorMessage}>{error}</p>}
      <div className={s.btnsBlockWrapper}>
        <Button type="submit" className={s.btnFilled}>
          Login
        </Button>
        <Button styleType="clear" className={s.btnEmpty} onClick={() => push('/')}>
          Forgot your password?
        </Button>
      </div>
      <FormFooter />
    </form>
  );
};

export default LoginPage;
