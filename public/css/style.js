import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "width": 1100,
        "height": "100%",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "paddingTop": 40
    },
    "a:hover": {
        "borderBottom": "3px solid #4fc08d"
    },
    "button": {
        "backgroundColor": "#4fc08d !important",
        "color": "#fff !important"
    },
    "avatar": {
        "borderRadius": 3,
        "width": 48,
        "height": 48,
        "float": "right"
    },
    "nav": {
        "marginBottom": 20,
        "color": "#999",
        "textAlign": "center"
    },
    "nav h1": {
        "color": "#f4c08d",
        "display": "inline-block",
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "nav-setting": {
        "position": "fixed",
        "right": 30,
        "top": 35,
        "zIndex": 999
    },
    "nav-setting uidropdownbutton": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "backgroundColor": "#fff !important"
    },
    "nav-setting iconbars": {
        "color": "#000",
        "fontSize": 18
    },
    "post-content h3 a": {
        "color": "#f4c08d !important"
    },
    "post-content tag": {
        "fontSize": 13,
        "marginRight": 5,
        "color": "#999"
    },
    "post-content tagright a": {
        "color": "#999"
    }
});