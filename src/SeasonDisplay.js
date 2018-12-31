import React from 'react';
import { IconTopLeft, IconBottomRight } from './components/StyledSemanticComponents';
// when webpack sees a css import, it will place it in the head of the html document automatically.
import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        text: "Let's hit the beach",
        iconName: 'sun',
    },
    winter: {
        text: 'Burr, it is chilly',
        iconName: 'snowflake',
    },
};
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        // if we are in the 'summer' months (as percieved by someone living in the northern hemisphere)
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};
const SeasonDisplay = props => {
    // random random just to see
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];
    // const text = season === 'winter' ? 'Burr, it is chilly' : "Let's hit the beach";
    // const iconName = 'snowflake';
    return (
        <>
            <div className={`season-display ${season}`}>
                <IconTopLeft id="season-icon" className={`${season}`} name={iconName} size="massive" />
                <h1>{text}</h1>
                <IconBottomRight id="season-icon" className={`${season}`} name={iconName} size="massive" />
            </div>
        </>
    );
};

export default SeasonDisplay;
