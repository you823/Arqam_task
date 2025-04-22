import React from 'react';

const AccordionItem = ({ id, title, children, isOpen, onToggle, isFirst }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${!isOpen && !isFirst ? 'collapsed' : ''}`}
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`collapse-${id}`}
        >
          {title}
        </button>
      </h2>
      <div
        id={`collapse-${id}`}
        className={`accordion-collapse collapse ${(isOpen || isFirst) ? 'show' : ''}`}
      >
        <div className="accordion-body p-0">
          <table className='table align-middle table-borderless w-100'>
            <tbody>
              {children}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;