import { IMAGE_TYPES } from '@/types/page/myActivityPageTypes';

export const MAX_IMG_LENGTH = {
  [IMAGE_TYPES.BANNER]: 1,
  [IMAGE_TYPES.MORE]: 4,
} as const;
