import _ from 'lodash';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { Button, Checkbox, Input, InputPassword } from '@/components/ui';
import ROUTES from '@/constants/routes';
import { AuthRole, IRegistration } from '@/types/services/AuthServiceEnteties';
import { EMAIL_RULE, PASSWORD_RULE, REQUIRED_RULE } from '@/utils/formVaidations';

import { FormFooter } from '../../../common/FormFooter';
import s from './styles.module.scss';

interface IFormApplicantsValues {
  email: string;
  password: string;
  agree: boolean;
}

interface Props {
  onSubmit: (data: IRegistration) => Promise<{ ok: boolean }>;
  error: string;
}

const ApplicantsForm: FC<Props> = ({ onSubmit, error }) => {
  const { push } = useRouter();
  const {
    handleSubmit,
    reset,
    control,
    clearErrors,
    formState: { errors },
  } = useForm<IFormApplicantsValues>({
    mode: 'onBlur',
  });

  const onSubmitHandler: SubmitHandler<IFormApplicantsValues> = async (
    data,
  ): Promise<void> => {
    const serverData = {
      ..._.omit(data, ['agree']),
      role: AuthRole.CANDIDATE,
      name: 'candidate',
    };
    const { ok } = await onSubmit(serverData);
    if (ok) {
      reset();
      clearErrors();
      push(ROUTES.USER);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className={s.inputBlockWrapper}>
        <Controller
          name={'email'}
          control={control}
          rules={EMAIL_RULE}
          defaultValue={''}
          render={({ field: { onChange, value, onBlur } }) => (
            <Input
              id="email"
              name="email"
              label="Email"
              type="email"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={errors.email?.message || ''}
            />
          )}
        />
        <Controller
          name={'password'}
          control={control}
          rules={PASSWORD_RULE}
          defaultValue={''}
          render={({ field: { onChange, value, onBlur } }) => (
            <InputPassword
              id="password"
              name="password"
              label="Password"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={errors.password?.message || ''}
            />
          )}
        />
      </div>
      <Controller
        name={'agree'}
        control={control}
        rules={REQUIRED_RULE}
        defaultValue={false}
        render={({ field: { onChange, value } }) => (
          <Checkbox
            checked={value}
            onChange={onChange}
            error={errors.agree?.message || ''}
          >
            I agree to the <Link href={ROUTES.DEFAULT}>user agreement</Link> and{'  '}
            <Link href={ROUTES.DEFAULT}>privacy policy</Link>
          </Checkbox>
        )}
      />
      {error && <p className={s.errorMessage}>{error}</p>}
      <div className={s.btnsBlockWrapper}>
        <Button type="submit" className={s.btnFilled}>
          Sign up
        </Button>
      </div>
      <FormFooter />
    </form>
  );
};

export default ApplicantsForm;
