import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const Spinner = props => {
    return (
        <Dimmer active>
            <Loader>{props.message}</Loader>
        </Dimmer>
    );
};

Spinner.defaultProps = {
    message: 'Loading...',
};

export default Spinner;
