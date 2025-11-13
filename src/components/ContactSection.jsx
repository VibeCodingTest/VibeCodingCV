import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { SectionWrapper, SectionInner, SectionTitle } from './Section.jsx';

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.4rem;
`;

const ContactCard = styled(motion.div)`
  border-radius: 22px;
  padding: 1.8rem;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => `${theme.textSecondary}22`};
  box-shadow: ${({ theme }) => theme.shadow};
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Label = styled.span`
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 600;
  color: ${({ theme }) => theme.textSecondary};
`;

const Value = styled.a`
  font-size: 1.05rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
`;

const FooterNote = styled.p`
  margin: 2.4rem 0 0;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.9rem;
  text-align: center;
`;

const ContactSection = () => {
  const { t } = useTranslation();
  const contact = t('contact', { returnObjects: true });

  const contactItems = [
    {
      label: contact.links.emailLabel,
      value: contact.email,
      href: `mailto:${contact.email}`
    },
    {
      label: contact.links.locationLabel,
      value: contact.location,
      href: 'https://maps.google.com/?q=Heredia+Costa+Rica'
    }
  ];

  return (
    <SectionWrapper id="contact">
      <SectionInner>
        <SectionTitle initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          {contact.title}
        </SectionTitle>
        <ContactGrid>
          {contactItems.map((item, index) => (
            <ContactCard
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
            >
              <Label>{item.label}</Label>
              <Value href={item.href} target={index === 2 ? '_blank' : undefined} rel={index === 2 ? 'noopener noreferrer' : undefined}>
                {item.value}
              </Value>
            </ContactCard>
          ))}
        </ContactGrid>
        <FooterNote>
          © {new Date().getFullYear()} Lanfor Mena · {t('hero.role')}
        </FooterNote>
      </SectionInner>
    </SectionWrapper>
  );
};

export default ContactSection;
