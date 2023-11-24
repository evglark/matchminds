'use client';

import cn from 'classnames';
import { usePathname, useRouter } from 'next/navigation';
import { useCookies } from 'next-client-cookies';
import { FC, Fragment, useEffect, useState } from 'react';

import { Button } from '@/components/ui';
import { LanguageDropdown, Link, Logo } from '@/components/ui';
import Icon from '@/components/ui/Icon';
import { SearchInput } from '@/components/ui/SearchInput';
import { NAVBAR_LINKS } from '@/constants';
import ROUTES from '@/constants/routes';
import { SCROLLING } from '@/constants/scrolling';
import { useScroll } from '@/hooks/useScroll';

import Sidebar from '../Sidebar';
import s from './styles.module.scss';

const Header: FC = () => {
  const pathname = usePathname();
  const { push } = useRouter();
  const cookies = useCookies();
  const [currentEmail, setCurrentEmail] = useState(cookies.get('activeEmail') ?? '');
  const [token, setToken] = useState(cookies.get('apiToken') ?? '');
  const active = !!(currentEmail && token);
  const isFaqs = pathname === '/';
  const viewerState = useScroll(isFaqs ? 20 : 50);

  const [navActive, setNavActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setToken(cookies.get('apiToken') ?? '');
    setCurrentEmail(cookies.get('activeEmail') ?? '');
  }, [cookies.get('apiToken'), cookies.get('activeEmail')]);

  return (
    <header
      className={cn(
        s.wrapper,
        viewerState !== SCROLLING.SCROLLING_DOWN ? s.noScrollingDown : s.scrollingDown,
      )}
    >
      <nav className={s.content}>
        <div className={s.burger}>
          <Icon
            name="burger"
            onClick={() => {
              setNavActive(true);
            }}
          />
        </div>
        <Logo />
        <div className={s.mobileBtn}>
          {active ? (
            <Button
              onClick={() => {
                cookies.remove('apiToken');
                cookies.remove('activeEmail');
                setToken('');
                setCurrentEmail('');
                push(ROUTES.DEFAULT);
              }}
              styleType={'clear'}
            >
              Sign out
            </Button>
          ) : (
            <Button onClick={() => push(ROUTES.AUTH.REGISTRATION)} styleType={'clear'}>
              Sign up
            </Button>
          )}
        </div>

        <div className={s.container}>
          {NAVBAR_LINKS.map(({ link, text }, idx) => (
            <Fragment key={`link-${idx}`}>
              <Link href={link}>{text}</Link>
            </Fragment>
          ))}
        </div>

        <div className={s.btnsContainer}>
          <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
          <LanguageDropdown />
          {active ? (
            <Button
              onClick={() => {
                cookies.remove('apiToken');
                cookies.remove('activeEmail');
                setToken('');
                setCurrentEmail('');
                push(ROUTES.DEFAULT);
              }}
              styleType={'bg'}
            >
              Sign out
            </Button>
          ) : (
            <>
              <Button onClick={() => push(ROUTES.AUTH.LOGIN)} styleType={'clear'}>
                Log in
              </Button>
              <Button onClick={() => push(ROUTES.AUTH.REGISTRATION)} styleType={'bg'}>
                Sign up
              </Button>
            </>
          )}
        </div>
      </nav>
      <Sidebar isActive={navActive} onClose={() => setNavActive(false)} />
    </header>
  );
};

export default Header;
