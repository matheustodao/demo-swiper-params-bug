import { ReactNode, useEffect, useRef } from 'react';

import type { SwiperRef } from '../../../react-global';
import { SwiperOptions } from 'swiper/types';

interface ISwiperProps {
  children: ReactNode
  swiperParams?: SwiperOptions
}

export function Swiper({
	children,
	swiperParams,
}: ISwiperProps) {
  const swiperRef = useRef({} as SwiperRef);

  useEffect(() => {
    // Object with parameters
    const params = {
      slidesPerView: 1,
      pagination: false,
      // navigation: false,
      breakpoints: {
        768: {
          slidesPerView: 4,
        },
      },
    };

    // Assign it to swiper element
    Object.assign(swiperRef.current, params);

    // initialize swiper
    swiperRef.current.initialize();
  }, []);

  return (
    <swiper-container init={false} ref={swiperRef}>
      {children}
    </swiper-container>
  );
}
