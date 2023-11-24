import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCookies } from 'next-client-cookies';
import { FC, useCallback, useEffect, useRef } from 'react';

import ListItem from '@/components/animated/ListItem';
import { LanguageDropdown, Logo } from '@/components/ui';
import { Button } from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { NAVBAR_LINKS } from '@/constants';
import ROUTES from '@/constants/routes';
import {
  BUTTONS_CONTAINER_VARIANTS,
  LIST_VARIANTS,
  SIDEBAR_MENU_VARIANTS,
} from '@/utils/animations';

import s from './styles.module.scss';
interface SideNavProps {
  isActive: boolean;
  onClose: () => void;
}

const Sidebar: FC<SideNavProps> = ({ isActive, onClose }) => {
  const ref = useRef<HTMLElement | null>(null);
  const cookies = useCookies();
  const { push } = useRouter();
  const currentEmail = cookies.get('activeEmail');
  const token = cookies.get('apiToken');
  const active = !!(currentEmail && token);
  const reset = useCallback(() => {
    onClose();
  }, []);

  useEffect(() => {
    isActive && ref.current && disableBodyScroll(ref.current);
    !isActive && ref.current && enableBodyScroll(ref.current);
  }, [isActive]);

  return (
    <AnimatePresence mode="wait">
      <motion.aside
        className={s.wrapper}
        variants={SIDEBAR_MENU_VARIANTS}
        initial="close"
        animate={isActive ? 'open' : 'close'}
        ref={ref}
      >
        <div className={s.header}>
          <Icon name="cross" onClick={reset} />
          <Link onClick={reset} href="/">
            <Logo />
          </Link>
          <div className={s.bumper} />
        </div>
        {isActive && (
          <motion.ul variants={LIST_VARIANTS} initial="exit" animate="enter" exit="exit">
            {NAVBAR_LINKS.map(({ text, link }, idx) => (
              <ListItem key={`sidenav_link-${idx}`} onClick={reset}>
                <Link href={link}>{text}</Link>
              </ListItem>
            ))}
          </motion.ul>
        )}
        <LanguageDropdown />
        {isActive && (
          <motion.div
            variants={BUTTONS_CONTAINER_VARIANTS}
            initial="exit"
            animate="enter"
            exit="exit"
            className={s.btnsContainer}
          >
            {active ? (
              <Button
                onClick={() => {
                  cookies.remove('apiToken');
                  cookies.remove('activeEmail');
                  push(ROUTES.DEFAULT);
                  reset();
                }}
              >
                Sign out
              </Button>
            ) : (
              <>
                <Button
                  onClick={() => {
                    push(ROUTES.AUTH.REGISTRATION);
                    reset();
                  }}
                >
                  Sign up
                </Button>
                <Button
                  onClick={() => {
                    push(ROUTES.AUTH.LOGIN);
                    reset();
                  }}
                  styleType="clear"
                >
                  Log in
                </Button>
              </>
            )}
          </motion.div>
        )}
      </motion.aside>
    </AnimatePresence>
  );
};

export default Sidebar;
