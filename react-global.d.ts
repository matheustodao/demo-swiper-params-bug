import type { ComponentPropsWithRef } from 'react';

import type { SwiperSlideProps } from 'swiper/react';

import type { SwiperOptions } from 'swiper/types/swiper-options';

export type SwiperRef = HTMLDivElement & { swiper: Swiper; initialize: () => void };
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'swiper-container': SwiperContainerAttributes;
      'swiper-slide': SwiperSlideAttributes;
    }

    interface SwiperContainerAttributes extends SwiperOptions, ComponentPropsWithRef<'div'> {
      ref?: RefObject<SwiperRef>;
      children?: ReactNode;
      init?: boolean
    }
    interface SwiperSlideAttributes extends SwiperSlideProps, ComponentPropsWithRef<'div'> {}
  }
}
