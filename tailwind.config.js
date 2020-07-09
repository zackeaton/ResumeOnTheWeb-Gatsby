const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    enabled: false,
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: colors.teal,
        instagram: "#E1306C",
        linkedin: "#2867B2",
        github: "#211F1F",
        dev: "#0a0a0a",
        facebook: "#3B5998",
        twitter: "#1DA1F2",
        google: "#DB4437",
      },
    },
  },
};
