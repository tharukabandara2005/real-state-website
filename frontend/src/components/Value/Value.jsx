import React, { useState } from 'react'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState } from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import './Value.css'
import data from '../../utils/accordion'


const Value = () => {
    const [className, setClassName] = useState(null);
    return (
        <section className="v-wrapper">
            <div className='paddings innerWidth flexCenter v-container'>
                {/* lefside */}
                <div className="v-left">
                    <div className="image-container">
                        <img src="./value.png" alt="" />
                    </div>
                </div>

                <div className="v-right flexColStart">
                    <span className='orangeText'>Our Value</span>
                    <span className='primaryText'>Value We Give To You</span>
                    <span className='secondaryText'>
                        We always ready to help by providing the best services for you.
                        <br />
                        we believe a good place to live can make you life better
                    </span>
                    <Accordion
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                        className='accordion'

                    >
                        {data.map((item, i) => {
                            return (
                                <AccordionItem key={i} uuid={i} className={`accordionItem ${className}`}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='accordtionButton flexCenter'>
                                            <AccordionItemState>
                                                {({ expanded }) => (
                                                    expanded ? setClassName('expanded') : setClassName('collapsed')

                                                )}
                                            </AccordionItemState>

                                            <div className='flexCenter icon'>{item.icon}</div>
                                            <span className='primaryText'>
                                                {item.heading}
                                            </span>
                                            <div className="icon flexCenter">
                                                <MdOutlineArrowDropDown size={20} />
                                            </div>

                                        </AccordionItemButton>

                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <span className='secondaryText'>{item.detail}</span>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            );
                        })}
                    </Accordion>

                </div>


            </div>

        </section>
    )
}

export default Value