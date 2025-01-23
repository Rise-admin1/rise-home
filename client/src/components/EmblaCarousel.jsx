import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons';
import './EmblaCarousel.css';

const EmblaCarousel = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    options,
    [
      AutoScroll({ playOnInit: true, stopOnInteraction: false }), // Keep autoplay running even after interaction
    ]
  );
  const [isPlaying, setIsPlaying] = useState(true);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const toggleAutoplay = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    const playOrStop = autoScroll.isPlaying() ? autoScroll.stop : autoScroll.play;
    playOrStop();
    setIsPlaying(autoScroll.isPlaying());
  }, [emblaApi]);

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    setIsPlaying(autoScroll.isPlaying());
    emblaApi
      .on('autoScroll:play', () => setIsPlaying(true))
      .on('autoScroll:stop', () => setIsPlaying(false))
      .on('reInit', () => setIsPlaying(autoScroll.isPlaying()));
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((service, index) => (
            <div className="embla__slide" key={index}>
              <button
                className="embla__slide__button"
                onClick={() => {
                  window.location.href = service.link ; // Redirect to the link
                }}
              >
                <div className="embla__slide__content">
                  <div className="embla__slide__image">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <div className="embla__slide__text">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton
            onClick={() => emblaApi?.scrollPrev()}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => emblaApi?.scrollNext()}
            disabled={nextBtnDisabled}
          />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
