import { FC, useEffect, useState } from 'react';

import AnimatedSection from '@/components/animated/AnimatedSection';
import { updateFields } from '@/services/UpdateFields';

import { EditButton } from '../../components';
import s from './styles.module.scss';

interface Props {
  items: {
    companiesId: string;
    id: string;
    title: string;
    value: string;
    updatedAt: string;
  }[];
  editMode: boolean;
}

const PersonalInfo: FC<Props> = ({ items = [], editMode }) => {
  const [editBlock, setEditBlock] = useState(false);
  const [newValues, setNewValues] = useState(items.map((el) => el.value));

  const getActualText = (i: number) =>
    items[i].value === newValues[i] ? items[i].value : newValues[i];

  useEffect(() => {
    if (!editMode) {
      items.forEach(({ id, companiesId, title, value }, i) => {
        if (!newValues.includes(value)) {
          updateFields({ id, companiesId, title, value: newValues[i] }).then(() => {
            setEditBlock(false);
          });
        }
      });
    }
  }, [editMode]);

  return items.length ? (
    <div className={s.cardWrapper}>
      <AnimatedSection>
        {editMode && (
          <div className={s.editButtonWrapper}>
            <EditButton onClick={() => setEditBlock((e) => !e)} />
          </div>
        )}
        {items.map((el, i) => (
          <div className={s.infoWrapper} key={el.title + el.value}>
            <div className={s.titleWrapper}>{el.title}</div>
            {!editBlock ? (
              <div className={s.textWrapper}>{getActualText(i)}</div>
            ) : (
              <input
                className={s.textInputWrapper}
                value={getActualText(i)}
                onChange={(e) =>
                  setNewValues((values) => {
                    values[i] = e.target.value;
                    return [...values];
                  })
                }
              />
            )}
          </div>
        ))}
      </AnimatedSection>
    </div>
  ) : null;
};

export default PersonalInfo;
