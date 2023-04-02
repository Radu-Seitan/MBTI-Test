export type Menu = {
    key: string;
    title: string;
    route: string;
};

export const pageItems: Menu[] = [
    {
        key: 'personalities',
        title: 'personalities',
        route: '/all-personalities',
    },
];

export const settingsItems: Menu[] = [
    {
        key: 'about',
        title: 'About',
        route: '/about',
    },
];
