import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SectionWrapper = styled.section`
  padding: 6rem 0;

  @media (max-width: 768px) {
    padding: 4.5rem 0;
  }
`;

export const SectionInner = styled.div`
  width: min(1100px, 90%);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const SectionTitle = styled(motion.h2)`
  font-size: clamp(1.85rem, 3vw, 2.6rem);
  font-weight: 700;
  color: ${({ theme }) => theme.textPrimary};
  margin: 0;
`;

export const SectionSubtitle = styled(motion.p)`
  font-size: 1.05rem;
  line-height: 1.6;
  max-width: 720px;
  color: ${({ theme }) => theme.textSecondary};
  margin: 0;
`;
