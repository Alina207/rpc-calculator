//   the “@” in vue-cli is an alias that points to /src

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

