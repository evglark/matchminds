import cn from 'classnames';
import { FC } from 'react';

import s from './style.module.scss';

type FormType = 'company' | 'candidate';

interface Props {
  formType: FormType;
  setFormType: (formType: FormType) => void;
}

const FormSwitcher: FC<Props> = ({ formType, setFormType }) => {
  return (
    <div className={s.switcherWrapper}>
      <div
        className={cn(s.item, { [s.active]: formType === 'company' })}
        onClick={() => setFormType('company')}
      >
        For Business
      </div>
      <div
        className={cn(s.item, { [s.active]: formType === 'candidate' })}
        onClick={() => setFormType('candidate')}
      >
        For Applicants
      </div>
    </div>
  );
};

export default FormSwitcher;
