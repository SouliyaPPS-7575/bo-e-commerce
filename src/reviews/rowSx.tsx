import { green, orange, red } from '@mui/material/colors';
import type { SxProps } from '@mui/material';
import { Identifier } from 'react-admin';

import { Review } from './../types';

const rowSx =
    (selectedRow?: Identifier) =>
    (record: Review): SxProps => {
        let style = {};
        if (!record) {
            return style;
        }
        if (selectedRow && selectedRow === record.id) {
            style = {
                ...style,
                backgroundColor: 'action.selected',
            };
        }
        if (record.status === 'accepted')
            return {
                ...style,
                borderLeftColor: green[500],
                borderLeftWidth: 5,
                borderLeftStyle: 'solid',
            };
        if (record.status === 'pending')
            return {
                ...style,
                borderLeftColor: orange[500],
                borderLeftWidth: 5,
                borderLeftStyle: 'solid',
            };
        if (record.status === 'rejected')
            return {
                ...style,
                borderLeftColor: red[500],
                borderLeftWidth: 5,
                borderLeftStyle: 'solid',
            };
        return style;
    };

export default rowSx;
