import { useRef } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { gradients } from '../styles/theme.js';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 0 6rem;
  background: radial-gradient(circle at top right, rgba(37, 99, 235, 0.25), transparent 55%),
    radial-gradient(circle at bottom left, rgba(15, 23, 42, 0.6), transparent 60%);
`;

const HeroContainer = styled.div`
  width: min(1100px, 90%);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
  align-items: center;
  position: relative;
`;

const HeroContent = styled(motion.div)`
  grid-column: span 7;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;

  @media (max-width: 900px) {
    grid-column: span 12;
  }
`;

const HeroBadge = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  background: ${({ theme }) => gradients.card};
  color: ${({ theme }) => theme.textSecondary};
  width: fit-content;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.4rem, 5vw, 3.8rem);
  margin: 0;
  font-weight: 700;
  color: ${({ theme }) => theme.textPrimary};
`;

const HeroRole = styled(motion.h2)`
  margin: 0;
  font-size: clamp(1.35rem, 2.6vw, 2rem);
  font-weight: 600;
  color: ${({ theme }) => theme.textSecondary};
`;

const HeroDescription = styled(motion.p)`
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.textSecondary};
  max-width: 560px;
`;

const AccentPanel = styled(motion.div)`
  grid-column: 9 / span 4;
  height: clamp(320px, 50vw, 460px);
  border-radius: 28px;
  background: ${gradients.hero};
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  overflow: hidden;
  position: relative;
  box-shadow: ${({ theme }) => theme.shadow};

  @media (max-width: 900px) {
    grid-column: span 12;
    order: -1;
    height: clamp(260px, 50vw, 360px);
  }
`;

const AccentOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, rgba(15, 23, 42, 0.1), rgba(15, 23, 42, 0.6));
`;

const AccentCircles = styled(motion.div)`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.25;

  svg {
    width: 140%;
    height: auto;
  }
`;

const Hero = () => {
  const { t } = useTranslation();
  const panelRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: panelRef, offset: ['start end', 'center start'] });

  const translateY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <HeroSection id="home">
      <HeroContainer>
        <HeroContent>
          <HeroBadge initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, duration: 0.6 }}>
            {t('hero.greeting')}
          </HeroBadge>
          <HeroTitle initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }}>
            {t('hero.name')}
          </HeroTitle>
          <HeroRole initial={{ y: 35, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }}>
            {t('hero.role')}
          </HeroRole>
          <HeroDescription initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}>
            {t('hero.summary')}
          </HeroDescription>
        </HeroContent>
        <AccentPanel ref={panelRef} style={{ y: translateY, scale }}>
          <AccentOverlay />
          <AccentCircles animate={{ rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}>
            <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="200" cy="200" r="130" stroke="rgba(148, 163, 184, 0.6)" strokeWidth="1.5" />
              <circle cx="200" cy="200" r="180" stroke="rgba(96, 165, 250, 0.4)" strokeWidth="1.5" />
              <circle cx="200" cy="200" r="90" stroke="rgba(203, 213, 225, 0.35)" strokeWidth="1" />
            </svg>
          </AccentCircles>
        </AccentPanel>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
