import { extendTheme } from '@chakra-ui/react';

// const fonts = {
//   heading: 'Poppins',
//   body: 'Poppins',
//   p: 'Poppins',
// };

export const colors = {
  product: {
    stocked: '#D5E2C3',
    unstocked: '#EBC1BF',
  },

  text: {
    normal: '#061022',
    medium: '#373F4D',
    light: '#696E77',
  },

  sideBarColor: '#2E3742',
  addButtonColor: '#8F6175',
  hoverButtonColor: '#553D47',

};


const components = {
  Button: {
    baseStyle: {
      _focus: {
        boxShadow: 'none',
      },
    },
  },
  Accordion: {
    baseStyle: {
      button: {
        _focus: {
          boxShadow: 'none',
        },
      },
    },
  },
  Tabs: {
    baseStyle: {
      tab: {
        _focus: {
          boxShadow: 'none',
        },
      },
    },
  },
  Table: {
    variants: {
      simple: {
        th: {
          fontSize: '14px',
          color: 'cGrey.900',
          borderColor: 'cGrey.400',
        },
        tr: {
          fontFamily: 'lato',
        },
        td: {
          borderColor: 'cGrey.100',
        },
      },
    },
  },
  // TODO: Figure out how to set 4xl/whatever H1 is
  Heading: {
    baseStyle: {
      color: 'text.medium',
      fontWeight: '600',
    },
    sizes: {
      base: {
        fontSize: '15px',
      },
      sm: {
        fontSize: '17px',
      },
      md: {
        fontSize: '19px',
      },
      lg: {
        fontSize: '19px',
      },
      xl: {
        fontSize: '21px',
      },
    },
  },
  Text: {
    baseStyle: {
      color: 'text.normal', // TODO: Figure out how to get things to apply to List Items
      fontSize: '17px', // TODO: Figure out how to get things to apply to List Items
      letterSpacing: '.015em',
    },
  },
};


const customTheme = extendTheme({
  fonts: {
    heading: `'quattrocento-sans', sans-serif`,
    body: `'quattrocento-sans', sans-serif`,
  },

  styles: {
    global: {
      body: {
        color: "white", // Change this to the desired font color
      },
    },
  },

  colors,
  components,
});

export default customTheme;