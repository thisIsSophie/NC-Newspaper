import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Container: {
      variants: {
        outlined: {
          bg: "#F7F7F7",
          boxShadow: "md",
          mx: "auto",
          maxWidth: "100%",
          height: "auto",
          border: "2px solid",
          borderRadius: "md",
          borderColor: "#FFCCCB",
        },
      },
    },
  },
});

export default theme;
