import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Switcher = styled.div`
  display: inline-flex;
  border-radius: 999px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => `${theme.textSecondary}33`};
  background: ${({ theme }) => theme.surface};
  backdrop-filter: blur(12px);
`;

const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'active'
})`
  padding: 0.4rem 0.85rem;
  border: none;
  background: ${({ active, theme }) => (active ? theme.accent : 'transparent')};
  color: ${({ active, theme }) => (active ? '#f8fafc' : theme.textSecondary)};
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.textPrimary};
  }
`;

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Switcher aria-label="Language selector">
      <Button type="button" onClick={() => changeLanguage('es')} active={i18n.language === 'es'}>
        ES
      </Button>
      <Button type="button" onClick={() => changeLanguage('en')} active={i18n.language === 'en'}>
        EN
      </Button>
    </Switcher>
  );
};

export default LanguageSwitcher;
