const Fonts = {
    NotoSans: {
        Regular: 'notosans-regular',
        Bold: 'notosans-bold',
        BoldItalic: 'notosans-bold-italic',
        SemiBold: 'notosans-semi-bold',
        SemiBoldItalic: 'notosans-semi-bold-italic'
    }
};
const fontMaps = [
    { [Fonts.NotoSans.Regular]: require('./NotoSans-Regular.ttf') },
    { [Fonts.NotoSans.Bold]: require('./NotoSans-Bold.ttf') },
    { [Fonts.NotoSans.BoldItalic]: require('./NotoSans-BoldItalic.ttf') },
    { [Fonts.NotoSans.SemiBold]: require('./NotoSans-SemiBold.ttf') },
    { [Fonts.NotoSans.SemiBoldItalic]: require('./NotoSans-SemiBoldItalic.ttf') }
];
export { fontMaps };
export default Fonts;
