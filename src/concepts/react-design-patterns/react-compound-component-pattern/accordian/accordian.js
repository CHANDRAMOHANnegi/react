import React, { useState } from "react";

import {
    AccordionContext,
    AccordionItemContext,
    useAccordion,
    useAccordionItem
} from "./accordion-context";

const Accordion = ({
    defaultActive = null,
    children,
    collapsible = false,
    ...props
}) => {
    const [activePanel, setActivePanel] = useState(defaultActive);
    const handlePanelClick = (id) => {
        let nextActiveId = id;

        if (collapsible && nextActiveId === activePanel) nextActiveId = null;

        setActivePanel(nextActiveId);
    };
    const value = {
        activePanel,
        handlePanelClick,
        collapsible
    };

    return (
        <AccordionContext.Provider value={value}>
            <div {...props}>{children}</div>
        </AccordionContext.Provider>
    );
};

export const AccordionItem = ({ id, children, ...props }) => {
    const value = {
        id
    };

    return (
        <AccordionItemContext.Provider value={value}>
            <div {...props}>{children}</div>
        </AccordionItemContext.Provider>
    );
};

export const AccordionToggle = ({ children, ...props }) => {
    const { handlePanelClick } = useAccordion();
    const { id } = useAccordionItem();

    return (
        <button
            style={{
                width: "100%",
                height: "30px",
                border: "1px solid #ebebeb",
                textAlign: "left",
                padding: "0px 20px"
            }}
            onClick={() => handlePanelClick(id)}
            {...props}
        >
            {children}
        </button>
    );
};

export const AccordionPanel = ({ children, ...props }) => {
    const { activePanel } = useAccordion();
    const { id } = useAccordionItem();

    return activePanel === id ? (
        <div
            style={{
                border: "1px solid #ebebeb",
                textAlign: "left",
                padding: "20px"
            }}
            {...props}
        >
            {children}
        </div>
    ) : null;
};

export default Accordion;
