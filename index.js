(function main() {
"use strict";

class ByteCord {
    constructor() {
        console.log("initiated bytecord plugin...")

        if(!navigator.onLine) {
            ByteCord.UICore.displayPrompt("hi");
            throw new Error("no internet connection");
        }
    }

    static UICore = class {
        /* prompt method: shows a temporary message on screen */
        static displayPrompt = function() {
            var prompt_div, prompt_text;
            div = $("<div></div>");
            text = $("<p>").appendTo(div);
        }
    }

    static EventManager = class {

    }

    static Themes = new (function() {
        this.DefaultTheme = class {
            #main_color = 0x2f3542;
            #secondary_color = 0x57606;
        }
        this.LightTheme =  class extends this.DefaultTheme {
            #main_color = 0xffffff;
            #secondary_color = 0xdfe4ea;
        } 
    })();
}
}) ();
