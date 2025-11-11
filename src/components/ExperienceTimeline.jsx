import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { SectionWrapper, SectionInner, SectionTitle } from './Section.jsx';

const Timeline = styled.div`
  position: relative;
  padding-left: 1.5rem;

  &::before {
    content: '';
    position: absolute;
    top: 0.5rem;
    bottom: 0.5rem;
    left: 0.25rem;
    width: 2px;
    background: linear-gradient(180deg, rgba(37, 99, 235, 0.4), rgba(15, 23, 42, 0));
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  padding: 1.8rem 1.8rem 1.8rem 2.4rem;
  margin-bottom: 1.6rem;
  border-radius: 22px;
  background: ${({ theme }) => `${theme.surface}`};
  border: 1px solid ${({ theme }) => `${theme.textSecondary}22`};
  box-shadow: ${({ theme }) => theme.shadow};
  overflow: hidden;
`;

const Marker = styled.span`
  position: absolute;
  left: -1.1rem;
  top: 2.4rem;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${({ theme }) => theme.accent};
  box-shadow: 0 0 0 6px rgba(37, 99, 235, 0.1);
`;

const Role = styled.h3`
  margin: 0;
  font-size: 1.15rem;
  color: ${({ theme }) => theme.textPrimary};
`;

const Company = styled.p`
  margin: 0.4rem 0 0;
  font-weight: 600;
  color: ${({ theme }) => theme.textSecondary};
`;

const Period = styled.span`
  display: inline-block;
  margin-top: 0.3rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textSecondary};
`;

const HighlightList = styled.ul`
  margin-top: 1.2rem;
  display: grid;
  gap: 0.75rem;
  color: ${({ theme }) => theme.textSecondary};
  padding-left: 0;
`;

const HighlightItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;

  &::before {
    content: '';
    flex-shrink: 0;
    margin-top: 0.45rem;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${({ theme }) => theme.accent};
  }
`;

const ExperienceTimeline = () => {
  const { t } = useTranslation();
  const experience = t('experience.items', { returnObjects: true });

  return (
    <SectionWrapper id="experience">
      <SectionInner>
        <SectionTitle initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          {t('experience.title')}
        </SectionTitle>
        <Timeline>
          {experience.map((item, index) => (
            <TimelineItem
              key={item.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Marker />
              <Role>{item.role}</Role>
              <Company>{item.company}</Company>
              <Period>{item.period}</Period>
              <HighlightList>
                {item.highlights.map((highlight, highlightIndex) => (
                  <HighlightItem key={highlightIndex}>{highlight}</HighlightItem>
                ))}
              </HighlightList>
            </TimelineItem>
          ))}
        </Timeline>
      </SectionInner>
    </SectionWrapper>
  );
};

export default ExperienceTimeline;
