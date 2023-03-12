import React, { createContext, useContext } from 'react';
import "./tab.css";

const TabContext = createContext();

function Tab({ children, value, onChange }) {
    return (
        <TabContext.Provider value={{ value, onChange }}>
            {children}
        </TabContext.Provider>
    );
}

export default Tab;

Tab.HeaderContainer = ({ children }) => {
    return <div className="heads">{children}</div>;
};

Tab.HeaderItem = ({ label, index, children }) => {
    const { value, onChange } = useContext(TabContext);

    const handleClick = () => {
        onChange(index);
    };

    return (
        <div onClick={handleClick} className={`item ${index === value ? "active" : null}`}   >
            {label}
        </div>
    );
};

Tab.ContentContainer = ({ children }) => {
    return <div className="contentWraper">{children}</div>;
};

Tab.ContentItem = ({ children, index }) => {
    console.log('====================================');
    console.log(index);
    console.log('====================================');
    const { value } = useContext(TabContext);
    return value === index ? <div>{children}</div> : null;
};

