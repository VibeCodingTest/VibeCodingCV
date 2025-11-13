import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { SectionWrapper, SectionInner, SectionTitle } from './Section.jsx';

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.6rem;
`;

const Card = styled(motion.div)`
  border-radius: 24px;
  padding: 2rem;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => `${theme.textSecondary}22`};
  box-shadow: ${({ theme }) => theme.shadow};
`;

const Institution = styled.h3`
  margin: 0;
  font-size: 1.05rem;
  color: ${({ theme }) => theme.textPrimary};
`;

const Program = styled.p`
  margin: 0.6rem 0 0;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.6;
`;

const Period = styled.span`
  display: inline-block;
  margin-top: 1rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textSecondary};
`;

const EducationSection = () => {
  const { t } = useTranslation();
  const education = t('education.items', { returnObjects: true });

  return (
    <SectionWrapper id="education">
      <SectionInner>
        <SectionTitle initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          {t('education.title')}
        </SectionTitle>
        <Cards>
          {education.map((item, index) => (
            <Card
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <Institution>{item.institution}</Institution>
              <Program>{item.program}</Program>
              <Period>{item.period}</Period>
            </Card>
          ))}
        </Cards>
      </SectionInner>
    </SectionWrapper>
  );
};

export default EducationSection;
