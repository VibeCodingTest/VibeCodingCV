import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import LanguageSwitcher from './LanguageSwitcher.jsx';

const HeaderWrapper = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  padding: 1.25rem 0;
`;

const HeaderInner = styled.div`
  width: min(1120px, 92%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.85rem 1.4rem;
  border-radius: 999px;
  backdrop-filter: blur(18px);
  background: ${({ theme }) => `${theme.surface}`};
  border: 1px solid ${({ theme }) => `${theme.textSecondary}22`};
  box-shadow: ${({ theme }) => theme.shadow};
`;

const Brand = styled.div`
  font-weight: 700;
  font-size: 1.05rem;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.textPrimary};
`;

const Nav = styled.nav.withConfig({
  shouldForwardProp: (prop) => prop !== 'open'
})`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    inset: 0;
    background: ${({ theme }) => `${theme.background}f5`};
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: center;
    gap: 2.4rem;
    transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
    transition: transform 0.5s ease;
  }
`;

const NavLink = styled.button`
  border: none;
  background: none;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textSecondary};
  cursor: pointer;
  position: relative;
  padding: 0;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.4rem;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.accent};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.textPrimary};
  }

  &:hover::after,
  &:focus::after {
    transform: scaleX(1);
  }
`;

const MenuButton = styled.button`
  display: none;
  border: none;
  background: none;
  color: ${({ theme }) => theme.textPrimary};
  cursor: pointer;

  @media (max-width: 768px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.35rem;
  }
`;

const MenuIcon = ({ open }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    {open ? <line x1="3" y1="12" x2="21" y2="12" opacity="0" /> : <line x1="3" y1="12" x2="21" y2="12" />}
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const navKeys = ['home', 'about', 'experience', 'projects', 'education', 'contact'];

const Header = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY > 20) {
        setOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <HeaderWrapper
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        paddingTop: scrolled ? '0.85rem' : '1.25rem'
      }}
    >
      <HeaderInner>
        <Brand>Lanfor Mena</Brand>
        <MenuButton type="button" aria-label="Toggle menu" onClick={() => setOpen((prev) => !prev)}>
          <MenuIcon open={open} />
        </MenuButton>
        <Nav open={open}>
          {navKeys.map((key) => (
            <NavLink key={key} type="button" onClick={() => handleNavigate(key)}>
              {t(`navigation.${key}`)}
            </NavLink>
          ))}
          <LanguageSwitcher />
        </Nav>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
