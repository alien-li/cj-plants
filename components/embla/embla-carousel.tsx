import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import { EmblaOptionsType } from 'embla-carousel';
import { DotButton, useDotButton } from './embla-dot-button';
import useEmblaCarousel from 'embla-carousel-react';

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <Box>
      <Box ref={emblaRef} overflow="hidden">
        <Flex>
          {slides.map((src, index) => (
            <Box
              key={index}
              flex="0 0 100%"
              textAlign="center"
            >
              <Image src={src} alt="" />
            </Box>
          ))}
        </Flex>
      </Box>
      <Flex justify="center" mt="4" gap="2">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            isActive={index === selectedIndex}
            onClick={() => onDotButtonClick(index)}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default EmblaCarousel;
