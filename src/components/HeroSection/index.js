import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';
import { 
HeroContainer,
HeroBg,
VideoBg,
HeroContent,
HeroH1,
HeroP,
HeroBtnWrapper,
ArrowForward,
ArrowRight
} from './HeroElements';

const HeroSection = () => {
    const [ hover, setHover ] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

  return (
    <HeroContainer id='home'>
        <HeroBg>
            <VideoBg autoPlay loop muted playsInline src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            {/* <HeroH1>Oline Tutor Finder</HeroH1> */}
            <HeroH1>Learn and Earn Virtually</HeroH1>
            <HeroP>Sign up for a new account today and become a tutee that learns or also a tutor that earns.</HeroP>
            <HeroBtnWrapper>
                <Button 
                to="signup" 
                onMouseEnter={onHover} 
                onMouseLeave={onHover}
                // primary='true' 
                // dark='true' // Iniiba color ng get started
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
                >
                    Get started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
    );
};

export default HeroSection; 