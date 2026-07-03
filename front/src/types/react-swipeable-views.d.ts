// src/types/react-swipeable-views.d.ts
declare module 'react-swipeable-views' {
  import * as React from 'react';
  interface SwipeableViewsProps {
    index?: number;
    onChangeIndex?: (index: number, indexLatest: number) => void;
    enableMouseEvents?: boolean;
    children?: React.ReactNode;
    // 必要に応じて他のPropsも追加可能
    [key: string]: any;
  }
  const SwipeableViews: React.FC<SwipeableViewsProps>;
  export default SwipeableViews;
}
