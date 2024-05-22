(function main() {
 "use strict";

 class ByteCord {}

 class Theme {
  #main_color = 0x2f3542
  #secondary_color = 0x57606f
 }
 
 class LightTheme extends Theme {
  constructor() {
   super();
    this.#main_color = 0xffffff;
    this.#secondary_color = 0xf1f2f6
  } 
 }
 
})
