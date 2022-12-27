import { StyledSection } from './Section.styled';
import { Title } from 'components/Titles/Titles.styled';
import { SecondaryTitle } from 'components/Titles/Titles.styled';

export const Section = ({ title, children }) => {
  return (
    <StyledSection>
      {title === 'Phonebook' ? (
        <Title>{title}</Title>
      ) : (
        <SecondaryTitle>{title}</SecondaryTitle>
      )}
      {children}
    </StyledSection>
  );
};
