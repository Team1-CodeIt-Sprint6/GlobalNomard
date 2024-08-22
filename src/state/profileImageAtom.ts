import { atom } from 'jotai';

export const DEFAULT_PROFILE_IMAGE = '/assets/images/profile_default_img.png';

export const profileImageAtom = atom<string>(DEFAULT_PROFILE_IMAGE);
