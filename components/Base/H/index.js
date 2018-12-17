import React from 'react';
import cx from 'classnames';
import styles from './index.sass';

const H = ({className, tag, children, size, align}) => {
  const Tag = tag || 'h1';
  
  return (
    <Tag 
      className={cx(
        styles.root, 
        className,
        styles[`root_${size || 1}`],
        styles[`root_${align || 'center'}`]
      )} 
      dangerouslySetInnerHTML={{ __html: children }} 
    />
  )
};

H.displayName = 'Base/H';

export default H;
