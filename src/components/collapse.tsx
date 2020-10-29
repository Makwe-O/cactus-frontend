import React, { useState, useRef } from 'react';
import * as s from '../app.styles';

type CollapseProps = {
  closeText: string;
  openText: string;
};

const Collapse: React.FC<CollapseProps> = ({
  children,
  closeText,
  openText,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <s.collapse_content_container
        ref={parentRef}
        style={
          isOpen
            ? { height: `${parentRef.current?.scrollHeight}px` }
            : { height: '120px' }
        }
      >
        {children}
      </s.collapse_content_container>
      <s.collapse_button_container>
        <s.collapse_button_text
          onClick={() => setIsOpen(!isOpen)}
          ref={toggleRef}
        >
          {isOpen ? openText : closeText}
        </s.collapse_button_text>
      </s.collapse_button_container>
    </div>
  );
};

export default Collapse;
