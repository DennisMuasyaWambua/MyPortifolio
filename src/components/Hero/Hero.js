import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
        Welcome To<br/>
        Wambua's personal portifolio
     </SectionTitle>
     <SectionText>
       Am a full stack developer with a deep passion in learning new technologies and also a fast learner
     </SectionText>
     <Button onClick={()=>window.location='https://google.com'}>Learn more</Button>
   </LeftSection>
 </Section>
);

export default Hero;