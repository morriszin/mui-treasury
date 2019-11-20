import React from 'react';
import ArrowLeft from '@material-ui/icons/KeyboardArrowLeftRounded';
import ArrowRight from '@material-ui/icons/KeyboardArrowRightRounded';
import MenuRounded from '@material-ui/icons/MenuRounded';
import { useLayoutCtx } from '../hooks';

const SidebarTriggerIcon = props => {
  const { opened, sidebar } = useLayoutCtx();
  const getArrow = () => {
    if (sidebar.anchor === 'left') {
      return <ArrowLeft {...props} />;
    }
    if (sidebar.anchor === 'right') {
      return <ArrowRight {...props} />;
    }
    return null;
  };
  return opened ? getArrow() : <MenuRounded {...props} />;
};

export default SidebarTriggerIcon;
