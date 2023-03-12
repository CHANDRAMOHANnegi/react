import React from 'react';
import Tab from './tab';

function index(props) {

    const [currentIndex, setIndex] = React.useState(1);

    const handleChange = (newIndex) => {
        setIndex(newIndex);
    };

    return (
        <div>
            <Tab value={currentIndex} onChange={handleChange}>
                <Tab.HeaderContainer>
                    <Tab.HeaderItem index={1} label="Item 1" />
                    <Tab.HeaderItem index={2} label="Item 2" />
                    {/* <Tab.HeaderItem index={3} label="Item 3" /> */}
                </Tab.HeaderContainer>
                <Tab.ContentContainer>
                    <Tab.ContentItem key={1} index={1}> Item 1 content</Tab.ContentItem>
                    <Tab.ContentItem key={2} index={2}> Item 2 content</Tab.ContentItem>
                    {/* <Tab.ContentItem key={3} index={3}> Item 3 content</Tab.ContentItem> */}
                </Tab.ContentContainer>
            </Tab>
        </div>
    );
}

export default index;