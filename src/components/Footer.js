import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight, faTasks, faDotCircle, faClipboardList, faClipboardCheck, faTrashAlt, faNotesMedical } from '@fortawesome/free-solid-svg-icons';

class Footer extends React.Component {
    render() {
        return (
            <div className="row appRow d-none d-md-block">
                <div className="mx-auto col-12 col-lg-8">
                    <div className="card bg-transparent text-white font-weight-lighter">
                        <div className="card-body">
                            <blockquote className="blockquote">
                                <div className="mb-0"><FontAwesomeIcon icon={faQuoteLeft} />On and on you will hike and I know you'll hike far and face up to your problems whatever they are. You'll get mixed up, of course, as you already know. You'll get mixed up with many strange birds as you go. So be sure when you step. Step with care and great tact and remember that Life's a Great Balancing Act. Just never forget to be dexterous and deft. And never mix up your right foot with your left. And will you succeed? Yes! You will, indeed! (98 and &#190; &#160;percent guaranteed.) <FontAwesomeIcon icon={faQuoteRight} /></div>
                                <footer className="blockquote-footer text-white">Dr. Seuss <cite title="Source Title">Oh the places you’ll go</cite></footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Footer;