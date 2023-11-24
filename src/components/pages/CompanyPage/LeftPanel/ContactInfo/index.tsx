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

const ContactInfo: FC<Props> = ({ items = [], editMode }) => {
  const [editBlock, setEditBlock] = useState(false);
  const [newTexts, setNewTexts] = useState(items.map((el) => el.value));

  const getActualText = (i: number) =>
    items[i].value === newTexts[i] ? items[i].value : newTexts[i];

  useEffect(() => {
    if (!editMode) {
      items.forEach(({ id, companiesId, title, value }, i) => {
        if (!newTexts.includes(value)) {
          updateFields({ id, companiesId, title, value: newTexts[i] }).then(() => {
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
        <div className={s.contactGradientWrapper}>Contacts</div>
        {items.map((el, i) => (
          <div className={s.contactWrapper} key={el.id + el.updatedAt}>
            <div className={s.titleWrapper}>{el.title}</div>
            {!editBlock ? (
              <div className={s.textWrapper}>{getActualText(i)}</div>
            ) : (
              <input
                className={s.textInputWrapper}
                value={getActualText(i)}
                onChange={(e) =>
                  setNewTexts((texts) => {
                    texts[i] = e.target.value;
                    return [...texts];
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

export default ContactInfo;
