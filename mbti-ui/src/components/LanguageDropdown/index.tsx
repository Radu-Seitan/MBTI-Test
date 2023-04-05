import i18next, { changeLanguage } from 'i18next';
import { FC } from 'react';
import {
    MenuItem,
    FormControl,
    Select,
    SelectChangeEvent,
} from '@mui/material';

import './LanguageDropdown.scss';

export const LanguageDropdown: FC = () => {
    return (
        <FormControl className={'dropdown-container'} size="small">
            <Select
                value={i18next.language}
                onChange={(event: SelectChangeEvent) => {
                    changeLanguage(event.target.value, () => {
                        localStorage.setItem('i18nextLng', event.target.value);
                    });
                }}
            >
                <MenuItem value={'en-US'} key={'en-US'}>
                    EN
                </MenuItem>
                <MenuItem value={'ro'} key={'ro'}>
                    RO
                </MenuItem>
            </Select>
        </FormControl>
    );
};
