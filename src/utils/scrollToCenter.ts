import { MutableRefObject } from 'react';

export const scrollToCenter = (
  e: React.MouseEvent<HTMLDivElement>,
  ref: MutableRefObject<undefined>
) => {
  const refElement = ref.current as unknown as HTMLDivElement;
  refElement.scrollTo({
    left: Number(e.currentTarget?.offsetLeft) - refElement.offsetWidth / 2,
    behavior: 'smooth',
  });
};
