import cn from 'classnames';
import Image from 'next/image';
import { FC, useEffect, useRef, useState } from 'react';

import AnimatedSection from '@/components/animated/AnimatedSection';
import { Cover } from '@/components/pages/CompanyPage/MainContent';
import { updateBlock } from '@/services/UpdateBlock';
import { uploadFile } from '@/services/UploadFile';
import { convertImageUrl } from '@/utils/convertImageUrl';

import { EditButton } from '../../components';
import s from './styles.module.scss';

interface Props {
  title: string;
  text: string;
  imgSrc?: string;
  imgPosition?: 'left' | 'right' | 'top';
  editMode: boolean;
  data: {
    id: number;
    companiesId: number;
    json: string;
    type: string;
  };
}

const TextBlock: FC<Props> = ({
  title,
  text,
  imgSrc = '',
  imgPosition,
  editMode,
  data,
}) => {
  const [editBlock, setEditBlock] = useState(false);
  const [editImage, setEditImage] = useState(false);

  const [newImgFile, setNewImgFile] = useState(null);
  const [newTitle, setNewTitle] = useState(title);
  const [newText, setNewText] = useState(text);

  const [titleXY, setTitleXY] = useState([0, 0]);
  const [textXY, setTextXY] = useState([0, 0]);

  const titleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const withImg = imgSrc && imgPosition;

  const getActualTitle = () => (title === newTitle ? title : newTitle);

  const getActualText = () => (text === newText ? text : newText);

  const updateOnlyText = () => {
    updateBlock({ ...data, json: JSON.stringify({ title: newTitle, text: newText }) }).then(() => setEditBlock(false));
  }

  const updateOnlyImg = () => {
    const formData = new FormData();
    formData.append('file', newImgFile!);

    uploadFile(formData).then((d: any) => {
      updateBlock({ ...data, json: JSON.stringify({ title: newTitle, text: newText }), file: d.data.file}).then(() => {
        setEditBlock(false);
      });
    });
  }

  useEffect(() => {
    if (titleRef.current && textRef.current) {
      setTitleXY([titleRef.current.clientHeight, titleRef.current.clientWidth]);
      setTextXY([textRef.current.clientHeight, textRef.current.clientWidth]);
    }
  }, [editBlock]);

  useEffect(() => {
    if (inputRef.current) inputRef.current.click();
  }, [editImage]);

  useEffect(() => {
    if (!editMode) {
      if (title === newTitle && text === newText && newImgFile) updateOnlyImg();
      if ((title !== newTitle || text !== newText) && !newImgFile) updateOnlyText();
    }
  }, [editMode]);

  return (
    <>
      {imgPosition === 'top' && (
        <div className={s.coverWrapper}>
          <AnimatedSection>
            {editMode && (
              <div className={s.editButtonWrapper}>
                <EditButton onClick={() => setEditImage((e) => !e)} />
                <input type="file" style={{ display: 'none' }} onChange={(e: any) => setNewImgFile(e.target.files[0])} accept="image/*" ref={inputRef} />
              </div>
            )}
            <Image src={convertImageUrl(imgSrc)} alt={'cover'} width={844} height={232} />
          </AnimatedSection>
        </div>
      )}
      <AnimatedSection>
        <div className={cn(s.textBlockWrapper, withImg && s[imgPosition])}>
          <div className={cn(withImg && s.blockWrapperMD)}>
            {editMode && (
              <div className={s.editButtonWrapper}>
                <EditButton onClick={() => setEditBlock((e) => !e)} />
              </div>
            )}
            {!editBlock ? (
              <div ref={titleRef} className={s.titleWrapper}>
                {getActualTitle()}
              </div>
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
              <div ref={textRef} className={s.descWrapper}>
                {getActualText()}
              </div>
            ) : (
              <textarea
                style={{ height: textXY[0] + 'px', width: textXY[1] + 'px' }}
                className={s.descAreaWrapper}
                value={getActualText()}
                onChange={(e) => setNewText(e.target.value)}
              />
            )}
          </div>
          {imgSrc && (
            <div className={s.imgWrapper}>
              {editMode && (
                <div className={s.editButtonWrapper}>
                  <EditButton onClick={() => setEditImage((e) => !e)} />
                  <input
                    type="file"
                    ref={inputRef}
                    accept="image/*"
                    style={{ display: 'none' }}
                  />
                </div>
              )}
              <Image src={imgSrc} alt={title} width={340} height={340} />
            </div>
          )}
        </div>
      </AnimatedSection>
    </>
  );
};

export default TextBlock;
