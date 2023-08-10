import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './RoundScreen.css';

const RoundScreen = ({ roundNumber }) => {
    const [showRound, setShowRound] = useState(true);
    const [vis, setVis] = useState(true)

    useEffect(() => {
        setVis(true)
        setShowRound(true)
        setTimeout(() => {
            setShowRound(false);

        }, 1000);
        setTimeout(() => {
            setVis(false)

        }, 1200);
    }, [roundNumber]);

    return (
        <>
            {vis ?
                <div className={`round-screen ${showRound ? 'show' : 'hide'}`}>
                    <div className="content">
                        <p>Round {roundNumber}</p>
                    </div>
                </div> :
                <></>
            }
        </>
    );
};

RoundScreen.propTypes = {
    roundNumber: PropTypes.number.isRequired,
};

export default RoundScreen;
