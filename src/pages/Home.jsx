import styled from 'styled-components';

import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import AboutSection from '../components/AboutSection.jsx';
import ExperienceTimeline from '../components/ExperienceTimeline.jsx';
import ProjectsSection from '../components/ProjectsSection.jsx';
import EducationSection from '../components/EducationSection.jsx';
import ContactSection from '../components/ContactSection.jsx';

const PageWrapper = styled.main`
  position: relative;
  overflow-x: hidden;

  &::before {
    content: '';
    position: fixed;
    inset: 0;
    background: radial-gradient(circle at 10% 20%, rgba(37, 99, 235, 0.2), transparent 55%),
      radial-gradient(circle at 80% 10%, rgba(15, 23, 42, 0.45), transparent 60%);
    opacity: ${({ theme }) => (theme.mode === 'dark' ? 0.35 : 0.25)};
    pointer-events: none;
    z-index: -1;
  }
`;

const Home = () => (
  <PageWrapper>
    <Header />
    <Hero />
    <AboutSection />
    <ExperienceTimeline />
    <ProjectsSection />
    <EducationSection />
    <ContactSection />
  </PageWrapper>
);

export default Home;
