import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight, faTasks, faDotCircle, faClipboardList, faClipboardCheck, faTrashAlt, faNotesMedical } from '@fortawesome/free-solid-svg-icons';

class Footer extends React.Component {
    render () {
        return (
            <div className="text-white text-center">
               
             <blockquote className="blockquote">
             
                <p className="mb-0"><FontAwesomeIcon icon = {faQuoteLeft} />On and on you will hike 
and I know you'll hike far 
and face up to your problems 
whatever they are. 

You'll get mixed up, of course, 
as you already know. 
You'll get mixed up 
with many strange birds as you go. 
So be sure when you step. 
Step with care and great tact 
and remember that Life's 
a Great Balancing Act. 
Just never forget to be dexterous and deft. 
And never mix up your right foot with your left. 

And will you succeed? 
Yes! You will, indeed! 
(98 and &#190; &#160; percent guaranteed.) <FontAwesomeIcon icon = {faQuoteRight} /></p>
                <footer className="blockquote-footer">Dr. Seuss <cite title="Source Title">Oh the places you’ll go</cite></footer>
                </blockquote> 

            </div>
            
        );
    }
}

export default Footer;