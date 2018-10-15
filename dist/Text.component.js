import * as tslib_1 from "tslib";
import glamorous from 'glamorous-native';
import React from 'react';
import { match } from './utils';
const NormalText = glamorous.text(({ theme, color, size }) => ({
    fontFamily: theme.fonts.NotoSans.Regular,
    fontSize: size || theme.size.normal,
    color: color || theme.colors.text
}));
const Title = glamorous.text(({ theme, color, size }) => ({
    fontFamily: theme.fonts.NotoSans.Bold,
    fontSize: size || theme.size.title,
    color: color || theme.colors.text
}));
const LabelText = glamorous.text(({ theme, color, size }) => ({
    fontFamily: theme.fonts.NotoSans.SemiBold,
    fontSize: size || theme.size.label,
    color: color || theme.colors.warm_grey
}));
// THE UNIVERSAL TEXT COMPONENT
// Use this for `easier` imports (recommended)
const Text = (_a) => {
    var { component } = _a, rest = tslib_1.__rest(_a, ["component"]);
    const Component = match(component)({
        LabelText,
        Title,
        NormalText,
        _: glamorous.text({})
    });
    return <Component {...rest}/>;
};
export { Text, Title, LabelText, NormalText };
