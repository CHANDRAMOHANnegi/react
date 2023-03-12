import Accordion, {
    AccordionItem,
    AccordionToggle,
    AccordionPanel
} from "./accordian";

export default () => {
    return (
        <div>
            <Accordion collapsible>
                <AccordionItem id="1">
                    <AccordionToggle>Devtools Tech? 🤔</AccordionToggle>
                    <AccordionPanel>
                        The aim with Devtools Tech is to create a platform for Frontend
                        Engineers where we all can improve, invest in ourselves, and grow by
                        learning from high quality real world programming content. This is a
                        platform where you can practice actual interview questions, watch
                        courses, read blogs, and keep track of your progress across various
                        domains and topics.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem id="2">
                    <AccordionToggle>Is it Free?</AccordionToggle>
                    <AccordionPanel>
                        Yes, the platform and YouTube both are completely free!
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
