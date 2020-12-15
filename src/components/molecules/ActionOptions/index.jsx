import React from 'react';
import ActionOption from '../../atoms/ActionOption';
import './index.css';

const ActionOptions = ({actionOpen, handleAction, options}) => {
  return (
    <div id="action-options" className={actionOpen ? 'open' : 'closed'}>
      {options.map((option, idx) => {
        const {icon, color, txt} = option;
        return (
          <ActionOption
            key={idx}
            icon={icon}
            color={color}
            txt={txt}
            handleAction={handleAction}
            actionOpen={actionOpen}
          />
        );
      })}
    </div>
  );
};

export default ActionOptions;
