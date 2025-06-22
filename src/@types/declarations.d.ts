import { ImageRequireSource } from 'react-native';

declare module '*.jpg' {
  const content: ImageRequireSource;
  export default content;
}

declare module '*.jpeg' {
  const content: ImageRequireSource;
  export default content;
}

declare module '*.png' {
  const content: ImageRequireSource;
  export default content;
}

declare module '*.gif' {
  const content: ImageRequireSource;
  export default content;
}

declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';

  const content: React.MemoExoticComponent<React.FC<SvgProps>>;
  export default content;
}

declare module '*.ttf' {
  const content: ImageRequireSource;
  export default content;
}
