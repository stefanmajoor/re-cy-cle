import React from 'react';
import SvgIcon from '../Icon';

let NetworkCell = props =>
    <SvgIcon {...props}>
        <path fillOpacity=".3" d="M2 22h20V2z" />
        <path d="M17 7L2 22h15z" />
    </SvgIcon>;

export default NetworkCell;
