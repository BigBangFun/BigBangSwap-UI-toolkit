export type ColorThemeSelector<TLight = unknown, TDark = unknown> = (light: TLight, dark: TDark) => TLight | TDark;

export const getColorThemeSelector = <TLight = any, TDark = any>(colorMode: string): ColorThemeSelector<TLight, TDark> => {
    return <TLight, TDark>(light: TLight, dark: TDark) => (colorMode === 'dark' ? dark : light);
};
