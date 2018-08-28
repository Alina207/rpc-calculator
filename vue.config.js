//  the “@” in vue-cli is an alias that points to /src
//  uncomment when working locally, comment when doing a build


module.exports = {
    css: {
      loaderOptions: {
        sass: {
          data: ` 
            @import "@/scss/_globals.scss";
            @import "@/scss/_fonts.scss";
          `
        }
      }
    }
  };

