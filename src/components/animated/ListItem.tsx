import { motion } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';

import { LIST_ITEM_VARIANTS } from '@/utils/animations';

interface Props {
  onClick?: () => void;
}

const ListItem: FC<PropsWithChildren<Props>> = ({ children, onClick }) => {
  return (
    <motion.li variants={LIST_ITEM_VARIANTS} onClick={onClick}>
      {children}
    </motion.li>
  );
};

export default ListItem;
