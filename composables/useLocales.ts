import localesEn from '~~/locales/localesEn';
import localesPl from '~~/locales/localesPl';

export const useLocales = () => {

    const locales = useState(
        'locales',
        () => localesEn,
    );

    const changeLocales = (localeCode: string) => {
        switch (localeCode) {
        case 'pl':
            locales.value = localesPl;
            break;
        default:
            locales.value = localesEn;
            break;
        }
    };


    return { locales, changeLocales };
};
