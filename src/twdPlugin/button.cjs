const colors = require('./colors.cjs')
const sizes = require('./sizes.cjs')

const buttons = {
    '.btn-default': {
      color: 'white',
      backgroundColor: colors.techsyRed,
      '&:hover': {
        backgroundColor: colors.techsyRedBold
      },
    },
    '.btn-contact': {
      color: 'white',
      backgroundColor: colors.techsyRed,
      height: "60px",
      fontSize:"20px",
      fontWeight:"600",
      borderRadius:"16px",
      '&:hover': {
        backgroundColor: colors.techsyRedBold
      },
    },
    '.btn-contact-re': {
      color: colors.techsyRed,
      backgroundColor: colors.techsyGrey,
      height: "60px",
      fontSize:"20px",
      fontWeight:"600",
      borderRadius:"16px",
      '&:hover': {
        backgroundColor: colors.techsyGreyBold
      },
    },
    '.btn-link-type': {
        color: 'white',
        backgroundColor: 'transparent',
        fontSize: sizes.techsyLinkSize,
        borderRadius: "15px",
        '&:hover': {
            backgroundColor: "white",
            color: colors.techsyNavy
        },
    },
    '.btn-link-type-active': {
      color: 'white',
      backgroundColor: colors.techsyRed,
      fontSize: sizes.techsyLinkSize,
      borderRadius: "15px",
      '&:hover': {
          backgroundColor: colors.techsyRedBold,
      },
    },
    '.btn-dropdown-link': {
      color: colors.techsyNavy,
      backgroundColor: 'transparent',
      fontSize: sizes.techsyLinkSize,
      borderRadius: "15px",
      '&:hover': {
          backgroundColor: "white",
          color: colors.techsyNavy
      },
    },
    '.btn-m-link-type': {
      color: 'white',
      backgroundColor: 'transparent',
      fontSize: sizes.techsyMobileLinkSize,
      '&:hover': {
        backgroundColor: 'transparent'
      },
    },
    '.btn-arrow': {
        color: 'white',
        borderRadius: '100px',
        fontSize: '18px',
        paddingRight:'60px',
        paddingLeft:'26px',
        backgroundColor: colors.techsyRed,
        backgroundImage: 'url("$lib/assets/img/btnArrow.svg")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 10px center",
        transition: "padding-right .2s ease-in, padding-left .2s ease-in ",
        '&:hover': {
          backgroundColor: colors.techsyRedBold2,
          paddingRight:'62px',
          paddingLeft:'32px',
        },
    },
    '.btn-video': {
      color: 'white',
      borderRadius: '100px',
      fontSize: '18px',
      paddingRight:'60px',
      paddingLeft:'26px',
      backgroundColor: 'transparent',
      backgroundImage: 'url("$lib/assets/img/videoIcoMobile.svg")',
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 10px center",
      border:"2px solid white !important",
      transition: "padding-right .2s ease-in, padding-left .2s ease-in ",
      '&:hover': {
        backgroundColor: 'transparent',
        paddingRight:'62px',
        paddingLeft:'32px',
      },
  },
    '.btn-calendly': {
      color: 'white',
      borderRadius: '100px',
      fontSize: '18px',
      width:'80px',
      paddingLeft: "0",
      paddingRight: "0",
      backgroundColor: colors.techsyRed,
      backgroundImage: 'url("$lib/assets/img/videoIco.svg")',
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 23px center",
      transition: "padding-right .2s ease-in, padding-left .2s ease-in ",
      '&:hover': {
        backgroundColor: colors.techsyRedBold2
      },
    },
    '.btn-calendly-trans': {
      color: 'white',
      borderRadius: '100px',
      fontSize: '18px',
      width:'70px',
      height:'40px',
      paddingLeft: "0",
      paddingRight: "0",
      backgroundColor: 'transparent',
      backgroundImage: 'url("$lib/assets/img/videoIcoMobile.svg")',
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 20px center",
      border:"2px solid white !important",
      transition: "padding-right .2s ease-in, padding-left .2s ease-in ",
      '&:hover': {
        //backgroundColor: colors.techsyRedBold2
      },
    },

    '.btn-arrow-trans': {
        color: 'white',
        borderRadius: '100px',
        fontSize: '18px',
        paddingRight:'60px',
        paddingLeft:'26px',
        backgroundColor: 'transparent',
        backgroundImage: 'url("$lib/assets/img/btnArrowTrans.svg")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 10px center",
        border:"2px solid white !important",
        transition: "padding-right .2s ease-in, padding-left .2s ease-in ",
        '&:hover': {
          backgroundColor: 'transparent',
          //backgroundColor: 'transparent',
          paddingRight:'62px',
          paddingLeft:'32px',
        },
    },
}

module.exports = buttons;