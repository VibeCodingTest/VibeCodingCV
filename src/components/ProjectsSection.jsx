import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { SectionWrapper, SectionInner, SectionTitle } from './Section.jsx';
import { gradients } from '../styles/theme.js';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.8rem;
`;

const ProjectCard = styled(motion.a)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 24px;
  padding: 2.1rem;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => `${theme.textSecondary}22`};
  box-shadow: ${({ theme }) => theme.shadow};
  position: relative;
  overflow: hidden;
  color: inherit;

  &::before {
    content: '';
    position: absolute;
    inset: -30%;
    background: ${gradients.card};
    opacity: 0;
    transform: translateY(20%);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  &:hover::before {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    transform: translateY(-6px);
  }
`;

const ProjectTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
`;

const ProjectDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.6;
  font-size: 0.98rem;
`;

const ProjectLink = styled.span`
  margin-top: auto;
  font-weight: 600;
  color: ${({ theme }) => theme.accent};
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

const ProjectsSection = () => {
  const { t } = useTranslation();
  const projects = t('projects.items', { returnObjects: true });

  const projectLinks = {
    rop: 'https://www.nuget.org/',
    'ai-automation': 'https://github.com/',
    n8n: 'https://n8n.io/',
    retool: 'https://retool.com/'
  };

  return (
    <SectionWrapper id="projects">
      <SectionInner>
        <SectionTitle initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          {t('projects.title')}
        </SectionTitle>
        <Grid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              href={projectLinks[project.id] || '#'}
              target={projectLinks[project.id] ? '_blank' : undefined}
              rel={projectLinks[project.id] ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
            >
              <ProjectTitle>{project.name}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectLink>
                {project.linkLabel}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" />
                  <path d="M8 7H17V16" />
                </svg>
              </ProjectLink>
            </ProjectCard>
          ))}
        </Grid>
      </SectionInner>
    </SectionWrapper>
  );
};

export default ProjectsSection;
