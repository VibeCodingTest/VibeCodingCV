import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { SectionWrapper, SectionInner, SectionTitle, SectionSubtitle } from './Section.jsx';

const AboutCard = styled(motion.div)`
  border-radius: 28px;
  padding: clamp(2.4rem, 5vw, 3.5rem);
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => `${theme.textSecondary}22`};
  box-shadow: ${({ theme }) => theme.shadow};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2.4rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Bio = styled.p`
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.textSecondary};
  grid-column: span 7;

  @media (max-width: 900px) {
    grid-column: span 12;
  }
`;

const Highlights = styled.ul`
  grid-column: span 5;
  margin: 0;
  display: grid;
  gap: 1.4rem;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.textSecondary};

  @media (max-width: 900px) {
    grid-column: span 12;
  }
`;

const HighlightItem = styled.li`
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;

  span {
    display: inline-flex;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => `${theme.accent}22`};
    color: ${({ theme }) => theme.accent};
    font-weight: 700;
    font-size: 0.85rem;
  }
`;

const AboutSection = () => {
  const { t, i18n } = useTranslation();

  const localizedHighlights = useTranslationHighlights(i18n.language);

  return (
    <SectionWrapper id="about">
      <SectionInner>
        <SectionTitle initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          {t('about.title')}
        </SectionTitle>
        <SectionSubtitle initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          {t('about.description')}
        </SectionSubtitle>
        <AboutCard
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
        >
          <Bio>{t('hero.summary')}</Bio>
          <Highlights>
            {localizedHighlights.map((item, index) => (
              <HighlightItem key={item}>
                <span>{index + 1}</span>
                {item}
              </HighlightItem>
            ))}
          </Highlights>
        </AboutCard>
      </SectionInner>
    </SectionWrapper>
  );
};

const useTranslationHighlights = (language) => {
  if (language === 'en') {
    return [
      'Architecture & Design: Hexagonal, Microservices, Modular Design',
      'Backend: C#, .NET Framework/Core, ASP.NET, SQL, LINQ',
      'AI & Automation: LLM concepts, Prompt Engineering, N8n, Retool'
    ];
  }

  return [
    'Arquitectura y Diseño: Hexagonal, Microservicios, Diseño Modular',
    'Backend: C#, .NET Framework/Core, ASP.NET, SQL, LINQ',
    'IA y Automatización: Conceptos de LLM, Prompt Engineering, N8n, Retool'
  ];
};

export default AboutSection;
