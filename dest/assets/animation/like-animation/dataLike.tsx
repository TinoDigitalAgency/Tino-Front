import img_0 from './images/img_0.png'

export const dataLike = {
    "v": "5.5.10",
    "fr": 60,
    "ip": 0,
    "op": 101,
    "w": 622,
    "h": 700,
    "nm": "▽ ill-hand",
    "ddd": 0,
    "assets": [{"id": "image_0", "w": 810, "h": 858, "u": "", "p": img_0, "e": 0}, {
        "id": "comp_0", "layers": [{
            "ddd": 0,
            "ind": 1,
            "ty": 3,
            "nm": "CONTROL",
            "parent": 4,
            "sr": 1,
            "ks": {
                "o": {"a": 0, "k": 100, "ix": 11},
                "r": {"a": 0, "k": 0, "ix": 10},
                "p": {"a": 0, "k": [50, 50, 0], "ix": 2},
                "a": {"a": 0, "k": [0, 0, 0], "ix": 1},
                "s": {"a": 0, "k": [5.556, 5.556, 100], "ix": 6}
            },
            "ao": 0,
            "ef": [{
                "ty": 5,
                "nm": "Size",
                "np": 3,
                "mn": "ADBE Slider Control",
                "ix": 1,
                "en": 1,
                "ef": [{
                    "ty": 0,
                    "nm": "Slider",
                    "mn": "ADBE Slider Control-0001",
                    "ix": 1,
                    "v": {
                        "a": 0,
                        "k": 100,
                        "ix": 1,
                        "x": "var $bm_rt;\nvar ef;\ntry {\n    ef = comp('\\u25bd ill-hand').layer(thisComp._name), $bm_rt = 0 == ef.effect('Internal control')(1) ? ef.effect('Size')(1) : value;\n} catch (e) {\n    $bm_rt = value;\n}"
                    }
                }]
            }, {
                "ty": 5,
                "nm": "Stroke Control",
                "np": 3,
                "mn": "ADBE Slider Control",
                "ix": 2,
                "en": 1,
                "ef": [{
                    "ty": 0,
                    "nm": "Slider",
                    "mn": "ADBE Slider Control-0001",
                    "ix": 1,
                    "v": {
                        "a": 0,
                        "k": 30,
                        "ix": 1,
                        "x": "var $bm_rt;\nvar ef;\ntry {\n    ef = comp('\\u25bd ill-hand').layer(thisComp._name), $bm_rt = 0 == ef.effect('Internal control')(1) ? ef.effect('Stroke Control')(1) : value;\n} catch (e) {\n    $bm_rt = value;\n}"
                    }
                }]
            }, {
                "ty": 5,
                "nm": "Color A",
                "np": 3,
                "mn": "ADBE Color Control",
                "ix": 3,
                "en": 1,
                "ef": [{
                    "ty": 2,
                    "nm": "Color",
                    "mn": "ADBE Color Control-0001",
                    "ix": 1,
                    "v": {
                        "a": 0,
                        "k": [1, 0.070588238537, 0.420484304428, 1],
                        "ix": 1,
                        "x": "var $bm_rt;\nvar ef;\ntry {\n    ef = comp('\\u25bd ill-hand').layer(thisComp._name), $bm_rt = 0 == ef.effect('Internal control')(1) ? ef.effect('Color A')(1) : value;\n} catch (e) {\n    $bm_rt = value;\n}"
                    }
                }]
            }, {
                "ty": 5,
                "nm": "Color B",
                "np": 3,
                "mn": "ADBE Color Control",
                "ix": 4,
                "en": 1,
                "ef": [{
                    "ty": 2,
                    "nm": "Color",
                    "mn": "ADBE Color Control-0001",
                    "ix": 1,
                    "v": {
                        "a": 0,
                        "k": [0.082352943718, 0.86274510622, 0.956862747669, 1],
                        "ix": 1,
                        "x": "var $bm_rt;\nvar ef;\ntry {\n    ef = comp('\\u25bd ill-hand').layer(thisComp._name), $bm_rt = 0 == ef.effect('Internal control')(1) ? ef.effect('Color B')(1) : value;\n} catch (e) {\n    $bm_rt = value;\n}"
                    }
                }]
            }],
            "ip": 0,
            "op": 122,
            "st": 0,
            "bm": 0
        }, {
            "ddd": 0,
            "ind": 2,
            "ty": 4,
            "nm": "Line 2",
            "parent": 1,
            "sr": 1,
            "ks": {
                "o": {"a": 0, "k": 100, "ix": 11},
                "r": {"a": 0, "k": 0, "ix": 10},
                "p": {"a": 0, "k": [0, 0, 0], "ix": 2},
                "a": {"a": 0, "k": [0, 0, 0], "ix": 1},
                "s": {"a": 0, "k": [100, 100, 100], "ix": 6}
            },
            "ao": 0,
            "ef": [{
                "ty": 21,
                "nm": "Fill",
                "np": 9,
                "mn": "ADBE Fill",
                "ix": 1,
                "en": 1,
                "ef": [{
                    "ty": 10,
                    "nm": "Fill Mask",
                    "mn": "ADBE Fill-0001",
                    "ix": 1,
                    "v": {"a": 0, "k": 0, "ix": 1}
                }, {
                    "ty": 7,
                    "nm": "All Masks",
                    "mn": "ADBE Fill-0007",
                    "ix": 2,
                    "v": {"a": 0, "k": 0, "ix": 2}
                }, {
                    "ty": 2,
                    "nm": "Color",
                    "mn": "ADBE Fill-0002",
                    "ix": 3,
                    "v": {
                        "a": 0,
                        "k": [1, 0, 0, 1],
                        "ix": 3,
                        "x": "var $bm_rt;\n$bm_rt = thisComp.layer('CONTROL').effect('Color B')(1);"
                    }
                }, {"ty": 7, "nm": "Invert", "mn": "ADBE Fill-0006", "ix": 4, "v": {"a": 0, "k": 0, "ix": 4}}, {
                    "ty": 0,
                    "nm": "Horizontal Feather",
                    "mn": "ADBE Fill-0003",
                    "ix": 5,
                    "v": {"a": 0, "k": 0, "ix": 5}
                }, {
                    "ty": 0,
                    "nm": "Vertical Feather",
                    "mn": "ADBE Fill-0004",
                    "ix": 6,
                    "v": {"a": 0, "k": 0, "ix": 6}
                }, {"ty": 0, "nm": "Opacity", "mn": "ADBE Fill-0005", "ix": 7, "v": {"a": 0, "k": 1, "ix": 7}}]
            }],
            "shapes": [{
                "ty": "gr",
                "it": [{
                    "ind": 0,
                    "ty": "sh",
                    "ix": 1,
                    "ks": {
                        "a": 0,
                        "k": {
                            "i": [[0, 0], [0, 0]],
                            "o": [[0, 0], [0, 0]],
                            "v": [[0.125, -52.125], [1.303, -482.171]],
                            "c": false
                        },
                        "ix": 2
                    },
                    "nm": "Path 1",
                    "mn": "ADBE Vector Shape - Group",
                    "hd": false
                }, {
                    "ty": "st",
                    "c": {"a": 0, "k": [1, 1, 1, 1], "ix": 3},
                    "o": {"a": 0, "k": 100, "ix": 4},
                    "w": {
                        "a": 0,
                        "k": 24,
                        "ix": 5,
                        "x": "var $bm_rt;\n$bm_rt = thisComp.layer('CONTROL').effect('Stroke Control')(1);"
                    },
                    "lc": 1,
                    "lj": 1,
                    "ml": 4,
                    "bm": 0,
                    "nm": "Stroke 1",
                    "mn": "ADBE Vector Graphic - Stroke",
                    "hd": false
                }, {
                    "ty": "tr",
                    "p": {"a": 0, "k": [0, 0], "ix": 2},
                    "a": {"a": 0, "k": [0, 0], "ix": 1},
                    "s": {"a": 0, "k": [100, 100], "ix": 3},
                    "r": {"a": 0, "k": 0, "ix": 6},
                    "o": {"a": 0, "k": 100, "ix": 7},
                    "sk": {"a": 0, "k": 0, "ix": 4},
                    "sa": {"a": 0, "k": 0, "ix": 5},
                    "nm": "Transform"
                }],
                "nm": "Shape 1",
                "np": 3,
                "cix": 2,
                "bm": 0,
                "ix": 1,
                "mn": "ADBE Vector Group",
                "hd": false
            }, {
                "ty": "tm",
                "s": {
                    "a": 1,
                    "k": [{"i": {"x": [0], "y": [1]}, "o": {"x": [1], "y": [0]}, "t": 14, "s": [0]}, {
                        "t": 66,
                        "s": [100]
                    }],
                    "ix": 1
                },
                "e": {
                    "a": 1,
                    "k": [{"i": {"x": [0], "y": [1]}, "o": {"x": [1], "y": [0]}, "t": 22, "s": [0]}, {
                        "t": 74,
                        "s": [100]
                    }],
                    "ix": 2
                },
                "o": {"a": 0, "k": 0, "ix": 3},
                "m": 1,
                "ix": 2,
                "nm": "Trim Paths 1",
                "mn": "ADBE Vector Filter - Trim",
                "hd": false
            }, {
                "ty": "rp",
                "c": {"a": 0, "k": 6, "ix": 1},
                "o": {"a": 0, "k": 0, "ix": 2},
                "m": 1,
                "ix": 3,
                "tr": {
                    "ty": "tr",
                    "p": {"a": 0, "k": [0, 0], "ix": 2},
                    "a": {"a": 0, "k": [0, 0], "ix": 1},
                    "s": {"a": 0, "k": [100, 100], "ix": 3},
                    "r": {"a": 0, "k": 60, "ix": 4},
                    "so": {"a": 0, "k": 100, "ix": 5},
                    "eo": {"a": 0, "k": 100, "ix": 6},
                    "nm": "Transform"
                },
                "nm": "Repeater 1",
                "mn": "ADBE Vector Filter - Repeater",
                "hd": false
            }],
            "ip": 14,
            "op": 136,
            "st": 14,
            "bm": 0
        }, {
            "ddd": 0,
            "ind": 3,
            "ty": 4,
            "nm": "Line",
            "parent": 1,
            "sr": 1,
            "ks": {
                "o": {"a": 0, "k": 100, "ix": 11},
                "r": {"a": 0, "k": 0, "ix": 10},
                "p": {"a": 0, "k": [0, 0, 0], "ix": 2},
                "a": {"a": 0, "k": [0, 0, 0], "ix": 1},
                "s": {"a": 0, "k": [100, 100, 100], "ix": 6}
            },
            "ao": 0,
            "ef": [{
                "ty": 21,
                "nm": "Fill",
                "np": 9,
                "mn": "ADBE Fill",
                "ix": 1,
                "en": 1,
                "ef": [{
                    "ty": 10,
                    "nm": "Fill Mask",
                    "mn": "ADBE Fill-0001",
                    "ix": 1,
                    "v": {"a": 0, "k": 0, "ix": 1}
                }, {
                    "ty": 7,
                    "nm": "All Masks",
                    "mn": "ADBE Fill-0007",
                    "ix": 2,
                    "v": {"a": 0, "k": 0, "ix": 2}
                }, {
                    "ty": 2,
                    "nm": "Color",
                    "mn": "ADBE Fill-0002",
                    "ix": 3,
                    "v": {
                        "a": 0,
                        "k": [1, 0, 0, 1],
                        "ix": 3,
                        "x": "var $bm_rt;\n$bm_rt = thisComp.layer('CONTROL').effect('Color A')(1);"
                    }
                }, {"ty": 7, "nm": "Invert", "mn": "ADBE Fill-0006", "ix": 4, "v": {"a": 0, "k": 0, "ix": 4}}, {
                    "ty": 0,
                    "nm": "Horizontal Feather",
                    "mn": "ADBE Fill-0003",
                    "ix": 5,
                    "v": {"a": 0, "k": 0, "ix": 5}
                }, {
                    "ty": 0,
                    "nm": "Vertical Feather",
                    "mn": "ADBE Fill-0004",
                    "ix": 6,
                    "v": {"a": 0, "k": 0, "ix": 6}
                }, {"ty": 0, "nm": "Opacity", "mn": "ADBE Fill-0005", "ix": 7, "v": {"a": 0, "k": 1, "ix": 7}}]
            }],
            "shapes": [{
                "ty": "gr",
                "it": [{
                    "ind": 0,
                    "ty": "sh",
                    "ix": 1,
                    "ks": {
                        "a": 0,
                        "k": {
                            "i": [[0, 0], [0, 0]],
                            "o": [[0, 0], [0, 0]],
                            "v": [[0.125, -60.125], [1.303, -642.171]],
                            "c": false
                        },
                        "ix": 2
                    },
                    "nm": "Path 1",
                    "mn": "ADBE Vector Shape - Group",
                    "hd": false
                }, {
                    "ty": "st",
                    "c": {"a": 0, "k": [1, 1, 1, 1], "ix": 3},
                    "o": {"a": 0, "k": 100, "ix": 4},
                    "w": {
                        "a": 0,
                        "k": 24,
                        "ix": 5,
                        "x": "var $bm_rt;\n$bm_rt = thisComp.layer('CONTROL').effect('Stroke Control')(1);"
                    },
                    "lc": 1,
                    "lj": 1,
                    "ml": 4,
                    "bm": 0,
                    "nm": "Stroke 1",
                    "mn": "ADBE Vector Graphic - Stroke",
                    "hd": false
                }, {
                    "ty": "tr",
                    "p": {"a": 0, "k": [0, 0], "ix": 2},
                    "a": {"a": 0, "k": [0, 0], "ix": 1},
                    "s": {"a": 0, "k": [100, 100], "ix": 3},
                    "r": {"a": 0, "k": 0, "ix": 6},
                    "o": {"a": 0, "k": 100, "ix": 7},
                    "sk": {"a": 0, "k": 0, "ix": 4},
                    "sa": {"a": 0, "k": 0, "ix": 5},
                    "nm": "Transform"
                }],
                "nm": "Shape 1",
                "np": 3,
                "cix": 2,
                "bm": 0,
                "ix": 1,
                "mn": "ADBE Vector Group",
                "hd": false
            }, {
                "ty": "tm",
                "s": {
                    "a": 1,
                    "k": [{"i": {"x": [0], "y": [1]}, "o": {"x": [1], "y": [0]}, "t": 0, "s": [0]}, {
                        "t": 52,
                        "s": [100]
                    }],
                    "ix": 1
                },
                "e": {
                    "a": 1,
                    "k": [{"i": {"x": [0], "y": [1]}, "o": {"x": [1], "y": [0]}, "t": 8, "s": [0]}, {
                        "t": 60,
                        "s": [100]
                    }],
                    "ix": 2
                },
                "o": {"a": 0, "k": 0, "ix": 3},
                "m": 1,
                "ix": 2,
                "nm": "Trim Paths 1",
                "mn": "ADBE Vector Filter - Trim",
                "hd": false
            }, {
                "ty": "rp",
                "c": {"a": 0, "k": 6, "ix": 1},
                "o": {"a": 0, "k": 0, "ix": 2},
                "m": 1,
                "ix": 3,
                "tr": {
                    "ty": "tr",
                    "p": {"a": 0, "k": [0, 0], "ix": 2},
                    "a": {"a": 0, "k": [0, 0], "ix": 1},
                    "s": {"a": 0, "k": [100, 100], "ix": 3},
                    "r": {"a": 0, "k": 60, "ix": 4},
                    "so": {"a": 0, "k": 100, "ix": 5},
                    "eo": {"a": 0, "k": 100, "ix": 6},
                    "nm": "Transform"
                },
                "nm": "Repeater 1",
                "mn": "ADBE Vector Filter - Repeater",
                "hd": false
            }],
            "ip": 0,
            "op": 122,
            "st": 0,
            "bm": 0
        }, {
            "ddd": 0,
            "ind": 4,
            "ty": 1,
            "nm": "Comp Size",
            "sr": 1,
            "ks": {
                "o": {"a": 0, "k": 0, "ix": 11},
                "r": {"a": 0, "k": 0, "ix": 10},
                "p": {
                    "a": 0,
                    "k": [960, 120, 0],
                    "ix": 2,
                    "x": "var $bm_rt;\nvar x, y;\nx = $bm_div(thisComp.width, 2);\ny = $bm_div(thisComp.height, 2);\n$bm_rt = [\n    x,\n    y\n];"
                },
                "a": {"a": 0, "k": [50, 50], "ix": 1},
                "s": {
                    "a": 0,
                    "k": [100, 100, 100],
                    "ix": 6,
                    "x": "var $bm_rt;\nvar x, y;\nx = thisComp.height;\n$bm_rt = y = thisComp.width;\nif (x > y) {\n    $bm_rt = [\n        y,\n        y\n    ];\n} else {\n    $bm_rt = [\n        x,\n        x\n    ];\n}"
                }
            },
            "ao": 0,
            "sw": 100,
            "sh": 100,
            "sc": "#ffffff",
            "ip": 0,
            "op": 1800,
            "st": 0,
            "bm": 0
        }]
    }],
    "layers": [{
        "ddd": 0,
        "ind": 2,
        "ty": 2,
        "nm": "hand",
        "refId": "image_0",
        "sr": 1,
        "ks": {
            "o": {
                "a": 1,
                "k": [{"i": {"x": [0.667], "y": [1]}, "o": {"x": [0.333], "y": [0]}, "t": 0, "s": [0]}, {
                    "t": 40,
                    "s": [100]
                }],
                "ix": 11
            },
            "r": {
                "a": 1,
                "k": [{
                    "i": {"x": [0.833], "y": [1]},
                    "o": {"x": [0.333], "y": [0]},
                    "t": 0,
                    "s": [45]
                }, {
                    "i": {"x": [0.667], "y": [1]},
                    "o": {"x": [0.167], "y": [0]},
                    "t": 40,
                    "s": [-20]
                }, {"i": {"x": [0.667], "y": [1]}, "o": {"x": [0.333], "y": [0]}, "t": 50, "s": [15]}, {
                    "t": 60,
                    "s": [0]
                }],
                "ix": 10
            },
            "p": {
                "a": 1,
                "k": [{
                    "i": {"x": 0.667, "y": 1},
                    "o": {"x": 0.333, "y": 0},
                    "t": 0,
                    "s": [251, 410, 0],
                    "to": [6.667, -13.333, 0],
                    "ti": [-13.333, 6.667, 0]
                }, {
                    "i": {"x": 0.667, "y": 1},
                    "o": {"x": 0.333, "y": 0},
                    "t": 40,
                    "s": [291, 330, 0],
                    "to": [13.333, -6.667, 0],
                    "ti": [-3.333, -3.333, 0]
                }, {
                    "i": {"x": 0.667, "y": 1},
                    "o": {"x": 0.333, "y": 0},
                    "t": 50,
                    "s": [331, 370, 0],
                    "to": [3.333, 3.333, 0],
                    "ti": [3.333, 3.333, 0]
                }, {"t": 60, "s": [311, 350, 0]}],
                "ix": 2
            },
            "a": {"a": 0, "k": [405, 429, 0], "ix": 1},
            "s": {
                "a": 1,
                "k": [{
                    "i": {"x": [0.667, 0.667, 0.667], "y": [1, 1, 1]},
                    "o": {"x": [0.333, 0.333, 0.333], "y": [0, 0, 0]},
                    "t": 0,
                    "s": [40, 40, 100]
                }, {"t": 40, "s": [66.667, 66.667, 100]}],
                "ix": 6
            }
        },
        "ao": 0,
        "ip": 0,
        "op": 300,
        "st": 0,
        "bm": 0
    }, {
        "ddd": 0,
        "ind": 4,
        "ty": 0,
        "nm": "Shape_Line_07 1",
        "refId": "comp_0",
        "sr": 1,
        "ks": {
            "o": {"a": 0, "k": 50, "ix": 11},
            "r": {"a": 0, "k": 0, "ix": 10},
            "p": {"a": 0, "k": [311, 350, 0], "ix": 2},
            "a": {"a": 0, "k": [960, 540, 0], "ix": 1},
            "s": {"a": 0, "k": [100, 100, 100], "ix": 6}
        },
        "ao": 0,
        "ef": [{
            "ty": 5,
            "nm": "Internal control",
            "np": 3,
            "mn": "ADBE Checkbox Control",
            "ix": 1,
            "en": 1,
            "ef": [{
                "ty": 7,
                "nm": "Checkbox",
                "mn": "ADBE Checkbox Control-0001",
                "ix": 1,
                "v": {"a": 0, "k": 0, "ix": 1}
            }]
        }, {
            "ty": 5,
            "nm": "Size",
            "np": 3,
            "mn": "ADBE Slider Control",
            "ix": 2,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Slider",
                "mn": "ADBE Slider Control-0001",
                "ix": 1,
                "v": {"a": 0, "k": 30, "ix": 1}
            }]
        }, {
            "ty": 5,
            "nm": "Stroke Control",
            "np": 3,
            "mn": "ADBE Slider Control",
            "ix": 3,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Slider",
                "mn": "ADBE Slider Control-0001",
                "ix": 1,
                "v": {"a": 0, "k": 18, "ix": 1}
            }]
        }, {
            "ty": 5,
            "nm": "Color A",
            "np": 3,
            "mn": "ADBE Color Control",
            "ix": 4,
            "en": 1,
            "ef": [{
                "ty": 2,
                "nm": "Color",
                "mn": "ADBE Color Control-0001",
                "ix": 1,
                "v": {"a": 0, "k": [0.549019634724, 0.807843148708, 0.337254911661, 1], "ix": 1}
            }]
        }, {
            "ty": 5,
            "nm": "Color B",
            "np": 3,
            "mn": "ADBE Color Control",
            "ix": 5,
            "en": 1,
            "ef": [{
                "ty": 2,
                "nm": "Color",
                "mn": "ADBE Color Control-0001",
                "ix": 1,
                "v": {"a": 0, "k": [0.341176480055, 0.627451002598, 0.317647069693, 1], "ix": 1}
            }]
        }],
        "w": 1920,
        "h": 1080,
        "ip": 40,
        "op": 140,
        "st": 18,
        "bm": 0
    }],
    "markers": []
}