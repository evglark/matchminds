import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC, useEffect, useRef, useState } from 'react';

import AnimatedSection from '@/components/animated/AnimatedSection';
import { Button } from '@/components/ui';
// import { useHover } from '@/hooks/useHover';
import { updateCompany } from '@/services/UpdateCompany';
import { uploadFile } from '@/services/UploadFile';
import { convertImageUrl } from '@/utils/convertImageUrl';

import { EditButton } from '../../components';
import s from './styles.module.scss';

interface Props {
  id: string;
  title: string;
  desc: string;
  imgSrc: string;
  editMode: boolean;
  data: any;
}

const PersonCard: FC<Props> = ({ id, title, desc, imgSrc, editMode, data }) => {
  const [editLogo, setEditLogo] = useState(false);
  const [editBlock, setEditBlock] = useState(false);
  const [newLogoFile, setNewLogoFile] = useState(null);
  const [newTitle, setNewTitle] = useState(title);
  const [newDesc, setNewDesc] = useState(desc);
  const [titleXY, setTitleXY] = useState([0, 0]);
  const [descXY, setDescXY] = useState([0, 0]);
  const fieldRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { push } = useRouter();

  const getActualImg = () => (newLogoFile ? URL.createObjectURL(newLogoFile) : convertImageUrl(imgSrc));

  const getActualTitle = () => (title === newTitle ? title : newTitle);

  const getActualDesc = () => (desc === newDesc ? desc : newDesc);

  const updateOnlyText = () => {
    updateCompany({ name: newTitle, description: newDesc, logo: imgSrc }).then((d) => {
      setEditBlock(false);
    });
  };

  const updateOnlyImg = () => {
    const formData = new FormData();
    formData.append('file', newLogoFile!);

    uploadFile(formData).then((d: any) => {
      updateCompany({ name: title, description: desc, logo: d.data.file }).then(() => {
        setEditBlock(false);
      });
    });
  };

  const updateAll = () => {
    const formData = new FormData();
    formData.append('file', newLogoFile!);

    uploadFile(formData).then((d: any) => {
      updateCompany({ name: newTitle, description: newDesc, logo: d.data.file }).then(
        () => {
          setEditBlock(false);
        },
      );
    });
  };

  useEffect(() => {
    if (titleRef.current && descRef.current) {
      setTitleXY([titleRef.current.clientHeight + 8, titleRef.current.clientWidth]);
      setDescXY([descRef.current.clientHeight + 17, descRef.current.clientWidth]);
    }
  }, [editBlock]);

  useEffect(() => {
    if (inputRef.current) inputRef.current.click();
  }, [editLogo]);

  useEffect(() => {
    if (!editMode) {
      if (title === newTitle && desc === newDesc && newLogoFile) updateOnlyImg();
      if ((title !== newTitle || desc !== newDesc) && !newLogoFile) updateOnlyText();
      if ((title !== newTitle || desc !== newDesc) && newLogoFile) updateAll();
    }
  }, [editMode]);

  // useHover(fieldRef, () => {
  //   setEditMode(true);
  // });

  return (
    <div className={s.cardWrapper} onClick={() => push(`/company/${id}`)} ref={fieldRef}>
      <AnimatedSection>
        <div className={s.avatarWrapper}>
          <Image src={getActualImg()} alt={'avatar'} width={150} height={150} />
          {editMode && (
            <div className={s.editButtonWrapper}>
              <EditButton onClick={() => setEditLogo((e) => !e)} />
              <input type="file" style={{ display: 'none' }} onChange={(e: any) => setNewLogoFile(e.target.files[0])} accept="image/*" ref={inputRef} />
            </div>
          )}
        </div>
        {editMode && (
          <div className={s.editButtonWrapper}>
            <EditButton onClick={() => setEditBlock((e) => !e)} />
          </div>
        )}
        {!editBlock ? (
          <p ref={titleRef} className={s.titleWrapper}>
            {getActualTitle()}
          </p>
        ) : (
          <input
            type="text"
            style={{ height: titleXY[0] + 'px', width: titleXY[1] + 'px' }}
            className={s.titleInputWrapper}
            value={getActualTitle()}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        )}
        {!editBlock ? (
          <div ref={descRef} className={s.descWrapper}>
            {getActualDesc()}
          </div>
        ) : (
          <textarea
            style={{ height: descXY[0] + 'px', width: descXY[1] + 'px' }}
            className={s.descAreaWrapper}
            value={getActualDesc()}
            onChange={(e) => setNewDesc(e.target.value)}
          />
        )}
        <div className={s.buttonWrapper}>
          <Button onClick={() => console.log(1)} size="md">
            Post your job
          </Button>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default PersonCard;
