## Date-Fns Examples

A localized sample format can be used with `dateFormat(date)`.
In order to add a new supported language the first step is to update the **SupportedAppLocale** type.

Also, the fns locale needs to be added within the **dateFnsLocales** array.

Another Example of date-fns usage:
```
import { addBusinessDays } from 'date-fns';
import { format, getFnsDate } from 'src/i18next';

const today = getFnsDate();
const validDate = addBusinessDays(today, maxNumberOfBusinessDays);
```
