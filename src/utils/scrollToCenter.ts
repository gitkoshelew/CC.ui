import { RefObject } from 'react';

export const scrollToCenter = (
  e: React.MouseEvent<HTMLDivElement>,
  ref: RefObject<HTMLDivElement>
) => {
  const refElement = ref.current as unknown as HTMLDivElement;
  refElement.scrollTo({
    left: Number(e.currentTarget?.offsetLeft) - refElement.offsetWidth / 2,
    behavior: 'smooth',
  });
};
