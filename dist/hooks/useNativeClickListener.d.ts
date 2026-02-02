import { RefObject } from 'react';
export type UseNativeClickListener = (element: RefObject<HTMLElement | null>, initialState: boolean) => [boolean, (isActive: boolean) => void];
export declare const useNativeClickListener: UseNativeClickListener;
export default useNativeClickListener;
