'use client';

import bcrypt from 'bcryptjs';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCookies } from 'next-client-cookies';
import { FC, useEffect, useState } from 'react';

import { Button, Title } from '@/components/ui';
import ROUTES from '@/constants/routes';
import { login, registration } from '@/services/AuthService';
import { IRegistration } from '@/types/services/AuthServiceEnteties';
import { SHOW_HIDE_CONTENT } from '@/utils/animations';

import ApplicantsForm from './common/ApplicantsForm';
import BusinessForm from './common/BusinessForm';
import FormSwitcher from './common/FormSwitcher';
import s from './styles.module.scss';

type FormType = 'company' | 'candidate';

const RegistrationPage: FC = () => {
  const { push } = useRouter();
  const cookies = useCookies();
  const [error, setError] = useState('');

  const searchParams = useSearchParams();
  const [formType, setFormType] = useState<FormType>(
    (searchParams.get('role') as FormType) ?? 'company',
  );

  const ifBusinessSwitched = formType === 'company' ? 'visible' : 'hidden';
  const ifApplicantsSwitched = formType === 'candidate' ? 'visible' : 'hidden';

  useEffect(() => {
    setError('');
  }, [ifBusinessSwitched, ifApplicantsSwitched]);

  const onSubmitForm = async (formData: IRegistration): Promise<{ ok: boolean }> => {
    const { status, data } = await registration(formData);
    if (typeof data !== 'string' && status) {
      const { data: dataLogin, status } = await login(formData.email, formData.password);
      if (typeof dataLogin !== 'string' && status) {
        const hashPassword = bcrypt.hashSync(dataLogin.password, 10);
        cookies.set(
          'activeUser',
          JSON.stringify({ ...dataLogin, password: hashPassword }),
        );
        cookies.set('apiToken', dataLogin?.apiToken);
        cookies.set('activeEmail', dataLogin?.email);
        return { ok: true };
      } else {
        typeof dataLogin === 'string' && setError(dataLogin);
        return { ok: false };
      }
    } else {
      typeof data === 'string' && setError(data);
      return { ok: false };
    }
  };

  return (
    <div id="loginForm" className={s.registerContainer}>
      <FormSwitcher formType={formType} setFormType={setFormType} />
      <Title name="h2">
        <span>WELCOME!</span> LET’S GET STARTED
      </Title>
      <p className={s.freePeriodText}>Use your free period!</p>
      <div className={s.textContent}>
        <p>Do you have an account?</p>
        <Button
          styleType="clear"
          className={s.btnEmpty}
          onClick={() => push(ROUTES.AUTH.LOGIN)}
        >
          Log in
        </Button>
      </div>
      <AnimatePresence>
        <motion.div
          key="business"
          initial={ifBusinessSwitched}
          animate={ifBusinessSwitched}
          exit={ifBusinessSwitched}
          variants={SHOW_HIDE_CONTENT}
        >
          {ifBusinessSwitched === 'visible' && (
            <BusinessForm onSubmit={onSubmitForm} error={error} />
          )}
        </motion.div>
        <motion.div
          key="applicants"
          initial={ifApplicantsSwitched}
          animate={ifApplicantsSwitched}
          exit={ifApplicantsSwitched}
          variants={SHOW_HIDE_CONTENT}
        >
          {ifApplicantsSwitched === 'visible' && (
            <ApplicantsForm onSubmit={onSubmitForm} error={error} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RegistrationPage;
