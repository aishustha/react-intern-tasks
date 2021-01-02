import React from 'react';
import accordionStyle from './Accordion.module.scss';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';


export default function SimpleAccordion() {
    const [expanded, setExpanded] = React.useState('panel1');
    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };


  return (
    <div className={accordionStyle.gridSpacing}>

        <div className={accordionStyle.gridFlex}>
            <div className={accordionStyle.gridDivisionLeft}>
                <div className={accordionStyle.searchContent}>
                    <button className={accordionStyle.searchBtn}><i class="fa fa-search"></i></button>
                    <div className={accordionStyle.searchWidth}>
                        <input type="text" class="form-control" placeholder="Search for projects or tags..."/>
                    </div>
                </div> 

                <div className={accordionStyle.collageContent}>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}  elevation={0} className={accordionStyle.reportBorder}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                className={accordionStyle.reportHeader}
                            
                            >
                                Sunpizza V1 ( 4 )
                            </AccordionSummary>
                            <AccordionDetails className={accordionStyle.reportCollage}>
                                <ul>
                                    <li>
                                        <div className={accordionStyle.reportTitle}>
                                            <div>01.</div>
                                            <div className={accordionStyle.reportMarginL}>Report A</div>
                                        </div>
                                        <div className={clsx(accordionStyle.reportDate, accordionStyle.redCircle)}> 21 November 2019</div>
                                    </li>
                                    <li className={accordionStyle.reportBgcolor}>
                                        <div className={accordionStyle.flexSpaces}>
                                            <div className="">
                                                <div className={accordionStyle.reportTitle}>
                                                    <div>02.</div>
                                                    <div className={accordionStyle.reportMarginL}>Report B</div>
                                                </div>
                                                <div className={clsx(accordionStyle.reportDate, accordionStyle.greenCircle)}> Currently Running</div>
                                            </div>
                                            <div className={accordionStyle.reportProgress}>
                                                <i className="fas fa-spinner"></i>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={accordionStyle.reportTitle}>
                                            <div>03.</div>
                                            <div className={accordionStyle.reportMarginL}>Report C</div>
                                        </div>
                                        <div className={clsx(accordionStyle.reportDate, accordionStyle.yellowCircle)}> 1 October 2018</div>
                                    </li>
                                    <li>
                                        <div className={accordionStyle.flexSpaces}>
                                            <div className="">
                                                <div className={accordionStyle.reportTitle}>
                                                    <div>04.</div>
                                                    <div className={accordionStyle.reportMarginL}>Report D</div>
                                                </div>
                                                <div className={clsx(accordionStyle.reportDate, accordionStyle.greenCircle)}> Today 2:10pm</div>
                                            </div>
                                            <div className={accordionStyle.reportPercentage}>
                                                83%
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </AccordionDetails>
                        </Accordion>

                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}  elevation={0} className={accordionStyle.reportBorder}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                                className={accordionStyle.reportHeader}
                            >
                                Mac book production
                            </AccordionSummary>
                            <AccordionDetails className={accordionStyle.reportCollage}>
                                <ul>
                                    <li>
                                        <div className={accordionStyle.reportTitle}>
                                            <div>01.</div>
                                            <div className={accordionStyle.reportMarginL}>Report A</div>
                                        </div>
                                        <div className={clsx(accordionStyle.reportDate, accordionStyle.redCircle)}> 21 November 2019</div>
                                    </li>
                                    <li className={accordionStyle.reportBgcolor}>
                                        <div className={accordionStyle.flexSpaces}>
                                            <div className="">
                                                <div className={accordionStyle.reportTitle}>
                                                    <div>02.</div>
                                                    <div className={accordionStyle.reportMarginL}>Report B</div>
                                                </div>
                                                <div className={clsx(accordionStyle.reportDate, accordionStyle.greenCircle)}> Currently Running</div>
                                            </div>
                                            <div className={accordionStyle.reportProgress}>
                                                <i className="fas fa-spinner"></i>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={accordionStyle.reportTitle}>
                                            <div>03.</div>
                                            <div className={accordionStyle.reportMarginL}>Report C</div>
                                        </div>
                                        <div className={clsx(accordionStyle.reportDate, accordionStyle.yellowCircle)}> 1 October 2018</div>
                                    </li>
                                    <li>
                                        <div className={accordionStyle.flexSpaces}>
                                            <div className="">
                                                <div className={accordionStyle.reportTitle}>
                                                    <div>04.</div>
                                                    <div className={accordionStyle.reportMarginL}>Report D</div>
                                                </div>
                                                <div className={clsx(accordionStyle.reportDate, accordionStyle.greenCircle)}> Today 2:10pm</div>
                                            </div>
                                            <div className={accordionStyle.reportPercentage}>
                                                83%
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                    
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}  elevation={0} className={accordionStyle.reportBorder}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                            className={accordionStyle.reportHeader}
                        >
                            burger king
                        </AccordionSummary>
                        <AccordionDetails className={accordionStyle.reportCollage}>
                            <ul>
                                <li>
                                    <div className={accordionStyle.reportTitle}>
                                        <div>01.</div>
                                        <div className={accordionStyle.reportMarginL}>Report A</div>
                                    </div>
                                    <div className={clsx(accordionStyle.reportDate, accordionStyle.redCircle)}> 21 November 2019</div>
                                </li>
                                <li className={accordionStyle.reportBgcolor}>
                                    <div className={accordionStyle.flexSpaces}>
                                        <div className="">
                                            <div className={accordionStyle.reportTitle}>
                                                <div>02.</div>
                                                <div className={accordionStyle.reportMarginL}>Report B</div>
                                            </div>
                                            <div className={clsx(accordionStyle.reportDate, accordionStyle.greenCircle)}> Currently Running</div>
                                        </div>
                                        <div className={accordionStyle.reportProgress}>
                                            <i className="fas fa-spinner"></i>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={accordionStyle.reportTitle}>
                                        <div>03.</div>
                                        <div className={accordionStyle.reportMarginL}>Report C</div>
                                    </div>
                                    <div className={clsx(accordionStyle.reportDate, accordionStyle.yellowCircle)}> 1 October 2018</div>
                                </li>
                                <li>
                                    <div className={accordionStyle.flexSpaces}>
                                        <div className="">
                                            <div className={accordionStyle.reportTitle}>
                                                <div>04.</div>
                                                <div className={accordionStyle.reportMarginL}>Report D</div>
                                            </div>
                                            <div className={clsx(accordionStyle.reportDate, accordionStyle.greenCircle)}> Today 2:10pm</div>
                                        </div>
                                        <div className={accordionStyle.reportPercentage}>
                                            83%
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}  elevation={0} className={accordionStyle.reportBorder}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4a-content"
                            id="panel4a-header"
                            className={accordionStyle.reportHeader}
                        >
                            Dominos pizza
                        </AccordionSummary>
                        <AccordionDetails className={accordionStyle.reportCollage}>
                            <ul>
                                <li>
                                    <div className={accordionStyle.reportTitle}>
                                        <div>01.</div>
                                        <div className={accordionStyle.reportMarginL}>Report A</div>
                                    </div>
                                    <div className={clsx(accordionStyle.reportDate, accordionStyle.redCircle)}> 21 November 2019</div>
                                </li>
                                <li className={accordionStyle.reportBgcolor}>
                                    <div className={accordionStyle.flexSpaces}>
                                        <div className="">
                                            <div className={accordionStyle.reportTitle}>
                                                <div>02.</div>
                                                <div className={accordionStyle.reportMarginL}>Report B</div>
                                            </div>
                                            <div className={clsx(accordionStyle.reportDate, accordionStyle.greenCircle)}> Currently Running</div>
                                        </div>
                                        <div className={accordionStyle.reportProgress}>
                                            <i className="fas fa-spinner"></i>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={accordionStyle.reportTitle}>
                                        <div>03.</div>
                                        <div className={accordionStyle.reportMarginL}>Report C</div>
                                    </div>
                                    <div className={clsx(accordionStyle.reportDate, accordionStyle.yellowCircle)}> 1 October 2018</div>
                                </li>
                                <li>
                                    <div className={accordionStyle.flexSpaces}>
                                        <div className="">
                                            <div className={accordionStyle.reportTitle}>
                                                <div>04.</div>
                                                <div className={accordionStyle.reportMarginL}>Report D</div>
                                            </div>
                                            <div className={clsx(accordionStyle.reportDate, accordionStyle.greenCircle)}> Today 2:10pm</div>
                                        </div>
                                        <div className={accordionStyle.reportPercentage}>
                                            83%
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}  elevation={0} className={accordionStyle.reportBorder}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel5a-content"
                            id="panel5a-header"
                            className={accordionStyle.reportHeader}
                        >
                            Happy burger
                        </AccordionSummary>
                        <AccordionDetails className={accordionStyle.reportCollage}>
                            <ul>
                                <li>
                                    <div className={accordionStyle.reportTitle}>
                                        <div>01.</div>
                                        <div className={accordionStyle.reportMarginL}>Report A</div>
                                    </div>
                                    <div className={clsx(accordionStyle.reportDate, accordionStyle.redCircle)}> 21 November 2019</div>
                                </li>
                                <li className={accordionStyle.reportBgcolor}>
                                    <div className={accordionStyle.flexSpaces}>
                                        <div className="">
                                            <div className={accordionStyle.reportTitle}>
                                                <div>02.</div>
                                                <div className={accordionStyle.reportMarginL}>Report B</div>
                                            </div>
                                            <div className={clsx(accordionStyle.reportDate, accordionStyle.greenCircle)}> Currently Running</div>
                                        </div>
                                        <div className={accordionStyle.reportProgress}>
                                            <i className="fas fa-spinner"></i>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={accordionStyle.reportTitle}>
                                        <div>03.</div>
                                        <div className={accordionStyle.reportMarginL}>Report C</div>
                                    </div>
                                    <div className={clsx(accordionStyle.reportDate, accordionStyle.yellowCircle)}> 1 October 2018</div>
                                </li>
                                <li>
                                    <div className={accordionStyle.flexSpaces}>
                                        <div className="">
                                            <div className={accordionStyle.reportTitle}>
                                                <div>04.</div>
                                                <div className={accordionStyle.reportMarginL}>Report D</div>
                                            </div>
                                            <div className={clsx(accordionStyle.reportDate, accordionStyle.greenCircle)}> Today 2:10pm</div>
                                        </div>
                                        <div className={accordionStyle.reportPercentage}>
                                            83%
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}  elevation={0} className={accordionStyle.reportBorder}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel6a-content"
                            id="panel6a-header"
                            className={accordionStyle.reportHeader}
                        >
                            Pizza hut
                        </AccordionSummary>
                        <AccordionDetails className={accordionStyle.reportCollage}>
                            <ul>
                                <li>
                                    <div className={accordionStyle.reportTitle}>
                                        <div>01.</div>
                                        <div className={accordionStyle.reportMarginL}>Report A</div>
                                    </div>
                                    <div className={clsx(accordionStyle.reportDate, accordionStyle.redCircle)}> 21 November 2019</div>
                                </li>
                                <li className={accordionStyle.reportBgcolor}>
                                    <div className={accordionStyle.flexSpaces}>
                                        <div className="">
                                            <div className={accordionStyle.reportTitle}>
                                                <div>02.</div>
                                                <div className={accordionStyle.reportMarginL}>Report B</div>
                                            </div>
                                            <div className={clsx(accordionStyle.reportDate, accordionStyle.greenCircle)}> Currently Running</div>
                                        </div>
                                        <div className={accordionStyle.reportProgress}>
                                            <i className="fas fa-spinner"></i>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={accordionStyle.reportTitle}>
                                        <div>03.</div>
                                        <div className={accordionStyle.reportMarginL}>Report C</div>
                                    </div>
                                    <div className={clsx(accordionStyle.reportDate, accordionStyle.yellowCircle)}> 1 October 2018</div>
                                </li>
                                <li>
                                    <div className={accordionStyle.flexSpaces}>
                                        <div className="">
                                            <div className={accordionStyle.reportTitle}>
                                                <div>04.</div>
                                                <div className={accordionStyle.reportMarginL}>Report D</div>
                                            </div>
                                            <div className={clsx(accordionStyle.reportDate, accordionStyle.greenCircle)}> Today 2:10pm</div>
                                        </div>
                                        <div className={accordionStyle.reportPercentage}>
                                            83%
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}  elevation={0} className={accordionStyle.reportBorder}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel7a-content"
                            id="panel7a-header"
                            className={accordionStyle.reportHeader}
                        >
                            Happy burger
                        </AccordionSummary>
                        <AccordionDetails className={accordionStyle.reportCollage}>
                            <ul>
                                <li>
                                    <div className={accordionStyle.reportTitle}>
                                        <div>01.</div>
                                        <div className={accordionStyle.reportMarginL}>Report A</div>
                                    </div>
                                    <div className={clsx(accordionStyle.reportDate, accordionStyle.redCircle)}> 21 November 2019</div>
                                </li>
                                <li className={accordionStyle.reportBgcolor}>
                                    <div className={accordionStyle.flexSpaces}>
                                        <div className="">
                                            <div className={accordionStyle.reportTitle}>
                                                <div>02.</div>
                                                <div className={accordionStyle.reportMarginL}>Report B</div>
                                            </div>
                                            <div className={clsx(accordionStyle.reportDate, accordionStyle.greenCircle)}> Currently Running</div>
                                        </div>
                                        <div className={accordionStyle.reportProgress}>
                                            <i className="fas fa-spinner"></i>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={accordionStyle.reportTitle}>
                                        <div>03.</div>
                                        <div className={accordionStyle.reportMarginL}>Report C</div>
                                    </div>
                                    <div className={clsx(accordionStyle.reportDate, accordionStyle.yellowCircle)}> 1 October 2018</div>
                                </li>
                                <li>
                                    <div className={accordionStyle.flexSpaces}>
                                        <div className="">
                                            <div className={accordionStyle.reportTitle}>
                                                <div>04.</div>
                                                <div className={accordionStyle.reportMarginL}>Report D</div>
                                            </div>
                                            <div className={clsx(accordionStyle.reportDate, accordionStyle.greenCircle)}> Today 2:10pm</div>
                                        </div>
                                        <div className={accordionStyle.reportPercentage}>
                                            83%
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}  elevation={0} className={accordionStyle.reportBorder}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel8a-content"
                            id="panel8a-header"
                            className={accordionStyle.reportHeader}
                        >
                            Dominos pizza
                        </AccordionSummary>
                        <AccordionDetails className={accordionStyle.reportCollage}>
                            <ul>
                                <li>
                                    <div className={accordionStyle.reportTitle}>
                                        <div>01.</div>
                                        <div className={accordionStyle.reportMarginL}>Report A</div>
                                    </div>
                                    <div className={clsx(accordionStyle.reportDate, accordionStyle.redCircle)}> 21 November 2019</div>
                                </li>
                                <li className={accordionStyle.reportBgcolor}>
                                    <div className={accordionStyle.flexSpaces}>
                                        <div className="">
                                            <div className={accordionStyle.reportTitle}>
                                                <div>02.</div>
                                                <div className={accordionStyle.reportMarginL}>Report B</div>
                                            </div>
                                            <div className={clsx(accordionStyle.reportDate, accordionStyle.greenCircle)}> Currently Running</div>
                                        </div>
                                        <div className={accordionStyle.reportProgress}>
                                            <i className="fas fa-spinner"></i>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={accordionStyle.reportTitle}>
                                        <div>03.</div>
                                        <div className={accordionStyle.reportMarginL}>Report C</div>
                                    </div>
                                    <div className={clsx(accordionStyle.reportDate, accordionStyle.yellowCircle)}> 1 October 2018</div>
                                </li>
                                <li>
                                    <div className={accordionStyle.flexSpaces}>
                                        <div className="">
                                            <div className={accordionStyle.reportTitle}>
                                                <div>04.</div>
                                                <div className={accordionStyle.reportMarginL}>Report D</div>
                                            </div>
                                            <div className={clsx(accordionStyle.reportDate, accordionStyle.greenCircle)}> Today 2:10pm</div>
                                        </div>
                                        <div className={accordionStyle.reportPercentage}>
                                            83%
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
    
        </div>
    </div>
  );
}
