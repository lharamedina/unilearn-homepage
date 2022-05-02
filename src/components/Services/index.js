import React from 'react';
import Icon1 from '../../images/svg-2.svg';
import Icon2 from '../../images/svg-8.svg';
import Icon3 from '../../images/svg-9.svg';
import {
ServicesContainer,
ServicesH1,
ServicesWrapper,
ServicesCard,
ServicesIcon,
ServicesH2,
ServicesP
} from './ServiceElements';

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Score Better</ServicesH2>
                <ServicesP>We doobidoo huhu iyak so much ahuhu</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Broaden Your Knowledge</ServicesH2>
                <ServicesP>We doobidoo huhu iyak so much ahuhu</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Finish Your Tasks Immediately</ServicesH2>
                <ServicesP>We doobidoo huhu iyak so much ahuhu</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services