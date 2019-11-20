import React from 'react';
import KeyboardArrowRightRounded from '@material-ui/icons/KeyboardArrowRightRounded';
import KeyboardArrowLeftRounded from '@material-ui/icons/KeyboardArrowLeftRounded';
import { useLayoutCtx } from '../hooks';

const CollapseIcon = props => {
  const { collapsed, sidebar } = useLayoutCtx();
  const getCollapsedArrow = () => {
    if (sidebar.anchor === 'right') {
      return <KeyboardArrowLeftRounded {...props} />;
    }
    if (sidebar.anchor === 'left') {
      return <KeyboardArrowRightRounded {...props} />;
    }
    return null;
  };
  const getUnCollapsedArrow = () => {
    if (sidebar.anchor === 'left') {
      return <KeyboardArrowLeftRounded {...props} />;
    }
    if (sidebar.anchor === 'right') {
      return <KeyboardArrowRightRounded {...props} />;
    }
    return null;
  };
  return collapsed ? getCollapsedArrow() : getUnCollapsedArrow();
};

export default CollapseIcon;
