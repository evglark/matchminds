import { FC } from 'react';

import Arrow from '../../../../public/images/svg/arrow.svg';
import MainBanner from '../../../../public/images/svg/banner.svg';
import Burger from '../../../../public/images/svg/burger.svg';
import Checked from '../../../../public/images/svg/checked.svg';
import Chevron from '../../../../public/images/svg/chevron.svg';
import Cross from '../../../../public/images/svg/cross.svg';
import Edit from '../../../../public/images/svg/edit.svg';
import Ellipse from '../../../../public/images/svg/ellipse.svg';
import Eye from '../../../../public/images/svg/eye.svg';
import OpenedEye from '../../../../public/images/svg/eye_opened.svg';
import Facebook from '../../../../public/images/svg/facebook.svg';
import Globe from '../../../../public/images/svg/globe.svg';
import Google from '../../../../public/images/svg/google.svg';
import Image from '../../../../public/images/svg/image.svg';
import LangArrow from '../../../../public/images/svg/lang_arrow.svg';
import Linkedin from '../../../../public/images/svg/linkedin.svg';
import Search from '../../../../public/images/svg/search.svg';
import TextImgL from '../../../../public/images/svg/text-img-left.svg';
import TextImgR from '../../../../public/images/svg/text-img-right.svg';
interface IconProps {
  name: keyof typeof components;
  className?: string;
  onClick?: () => void;
}

const components = {
  mainBanner: (className?: string, onClick?: () => void) => (
    <MainBanner className={className} onClick={onClick} />
  ),
  burger: (className?: string, onClick?: () => void) => (
    <Burger className={className} onClick={onClick} />
  ),
  cross: (className?: string, onClick?: () => void) => (
    <Cross className={className} onClick={onClick} />
  ),
  edit: (className?: string, onClick?: () => void) => (
    <Edit className={className} onClick={onClick} />
  ),
  ellipse: (className?: string, onClick?: () => void) => (
    <Ellipse className={className} onClick={onClick} />
  ),
  image: (className?: string, onClick?: () => void) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <Image className={className} onClick={onClick} />;
  },
  arrow: (className?: string, onClick?: () => void) => (
    <Arrow className={className} onClick={onClick} />
  ),
  langArrow: (className?: string, onClick?: () => void) => (
    <LangArrow className={className} onClick={onClick} />
  ),
  globe: (className?: string, onClick?: () => void) => (
    <Globe className={className} onClick={onClick} />
  ),
  search: (className?: string, onClick?: () => void) => (
    <Search className={className} onClick={onClick} />
  ),
  checked: (className?: string, onClick?: () => void) => (
    <Checked className={className} onClick={onClick} />
  ),
  chevron: (className?: string, onClick?: () => void) => (
    <Chevron className={className} onClick={onClick} />
  ),
  eye: (className?: string, onClick?: () => void) => (
    <Eye className={className} onClick={onClick} />
  ),
  linkedin: (className?: string, onClick?: () => void) => (
    <Linkedin className={className} onClick={onClick} />
  ),
  facebook: (className?: string, onClick?: () => void) => (
    <Facebook className={className} onClick={onClick} />
  ),
  google: (className?: string, onClick?: () => void) => (
    <Google className={className} onClick={onClick} />
  ),
  eyeOpened: (className?: string, onClick?: () => void) => (
    <OpenedEye className={className} onClick={onClick} />
  ),
  textImgL: (className?: string, onClick?: () => void) => (
    <TextImgL className={className} onClick={onClick} />
  ),
  textImgR: (className?: string, onClick?: () => void) => (
    <TextImgR className={className} onClick={onClick} />
  ),
};

const Icon: FC<IconProps> = ({ className, name, onClick }) => {
  return components[name](className, onClick);
};

export default Icon;
