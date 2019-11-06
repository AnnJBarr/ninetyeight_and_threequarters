import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight} from '@fortawesome/free-solid-svg-icons';

class Footer extends React.Component {
    render() {
        return (
            <div className="row appRow d-none d-md-block">
                <div className="mx-auto col-12 col-lg-9">
                    <div className="card bg-transparent text-white font-weight-lighter">
                        <div className="card-body">
                            <blockquote className="blockquote">
                                <div className="mb-0"><FontAwesomeIcon icon={faQuoteLeft} /> And will you succeed? Yes! You will, indeed! (98 and &#190; &#160;percent guaranteed.) <FontAwesomeIcon icon={faQuoteRight} /></div>
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