import React, {useState} from 'react';
import ActionBtn from '../../atoms/ActionBtn';
import ActionOptions from '../../molecules/ActionOptions';
import './index.css';

const FloatingMenu = ({options, handleAction}) => {
  const [actionOpen, setActionOpen] = useState(false);

  const openAction = () => setActionOpen(true);

  const closeAction = () => setActionOpen(false);

  return (
    <div id="floating-menu" onMouseEnter={openAction} onMouseLeave={closeAction}>
      <ActionOptions actionOpen={actionOpen} handleAction={handleAction} options={options} />
      <ActionBtn />
    </div>
  );
};

export default FloatingMenu;
