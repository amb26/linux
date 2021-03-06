/*

GPII Acceptance Testing

Copyright 2014 Emergya

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/gpii/universal/LICENSE.txt
*/

/*global require,process*/

"use strict";
var fluid = require("universal"),
    path = require("path"),
    gpii = fluid.registerNamespace("gpii");

fluid.require("./AcceptanceTests_include", require);

var testDefs = [
    {
        name: "Testing os_common using Flat matchmaker",
        token: "os_common",
        settingsHandlers: {
           "gpii.gsettings": {
                "data": [{
                    "settings": {
                        "mag-factor": 1.5,
                        "screen-position": "full-screen",
                        "show-cross-hairs": false
                     },
                     "options": {
                         "schema": "org.gnome.desktop.a11y.magnifier"
                    },
                } , {
                    "settings": {
                        "gtk-theme": "HighContrast",
                        "icon-theme": "HighContrast",
                        "text-scaling-factor": 0.75,
                        "cursor-size": 41
                    },
                    "options": {
                        "schema": "org.gnome.desktop.interface"
                    }
                }]
            }
        },
        processes: [
            {
                "command": "gsettings get org.gnome.desktop.a11y.applications screen-magnifier-enabled",
                "expectConfigured": "true",
                "expectRestored": "false"
            }
        ]
    },
    {
        name: "Testing os_gnome using Flat matchmaker",
        token: "os_gnome",
        settingsHandlers: {
           "gpii.gsettings": {
                "data": [{
                    "settings": {
                        "mag-factor": 1.5,
                        "screen-position": "full-screen",
                        "show-cross-hairs": false
                     },
                     "options": {
                         "schema": "org.gnome.desktop.a11y.magnifier"
                    },
                } , {
                    "settings": {
                        "text-scaling-factor": 0.75,
                        "cursor-size": 90
                    },
                    "options": {
                        "schema": "org.gnome.desktop.interface"
                    }
                }]
            },
            "gpii.alsa": {
                "data": [{
                    "settings": {
                        "masterVolume": 50
                    }
                }]
            }
        },
        processes: [
            {
                "command": "gsettings get org.gnome.desktop.a11y.applications screen-magnifier-enabled",
                "expectConfigured": "true",
                "expectRestored": "false"
            }
        ]
    },
    {
        name: "Testing os_win7 using Flat matchmaker",
        token: "os_win7",
        settingsHandlers: {
           "gpii.gsettings": {
                "data": [{
                    "settings": {
                        "mag-factor": 1.5,
                        "screen-position": "full-screen"
                     },
                     "options": {
                         "schema": "org.gnome.desktop.a11y.magnifier"
                    },
                } , {
                    "settings": {
                        "gtk-theme":"HighContrast",
                        "icon-theme":"HighContrast",
                        "cursor-size": 41
                    },
                    "options": {
                        "schema": "org.gnome.desktop.interface"
                    }
                }]
            }
        },
        processes: [
            {
                "command": "gsettings get org.gnome.desktop.a11y.applications screen-magnifier-enabled",
                "expectConfigured": "true",
                "expectRestored": "false"
            }
        ]
    }
];

gpii.acceptanceTesting.linux.runTests("builtIn_config", testDefs);
