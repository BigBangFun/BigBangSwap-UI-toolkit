import { style, media } from 'typestyle';

export const i_h1 = style(
    {
        fontFamily: 'Montserrat-Bold',
        fontSize: '40px',
        fontStyle: 'normal',
        lineHeight: '42px',
        letterSpacing: '0em',
    },
    media(
        {
            maxWidth: 767,
            minWidth: 576,
        },
        {
            lineHeight: '40px',
            fontSize: '40px',
        }
    ),
    media(
        {
            maxWidth: 575,
        },
        {
            lineHeight: '36px',
            fontSize: '36px',
        }
    )
);

export const i_h2 = style(
    {
        fontFamily: 'Montserrat-Bold',
        fontSize: '32px',
        fontStyle: 'normal',
        lineHeight: '35px',
        letterSpacing: '0em',
    },
    media(
        {
            maxWidth: 767,
            minWidth: 576,
        },
        {
            fontSize: '28px',
            lineHeight: '32px',
        }
    ),
    media(
        {
            maxWidth: 575,
        },
        {
            fontSize: '24px',
            lineHeight: '31px',
        }
    )
);
export const i_h3 = style(
    {
        fontFamily: 'Montserrat',
        fontSize: '24px',
        fontStyle: 'normal',
        lineHeight: '25px',
        letterSpacing: '0em',
    },
    media(
        {
            maxWidth: 767,
            minWidth: 576,
        },
        {
            fontSize: '24px',
            lineHeight: '26px',
        }
    ),
    media(
        {
            maxWidth: 575,
        },
        {
            fontSize: '20px',
            lineHeight: '23px',
        }
    )
);
export const i_h4 = style(
    {
        fontFamily: 'Montserrat-Bold',
        fontSize: '18px',
        fontStyle: 'normal',
        lineHeight: '22px',
        letterSpacing: '0em',
    },
    media(
        {
            maxWidth: 767,
            minWidth: 576,
        },
        {
            fontSize: '18px',
            lineHeight: '20px',
        }
    ),
    media(
        {
            maxWidth: 575,
        },
        {
            fontSize: '14px',
            lineHeight: '15.5px',
        }
    )
);
export const i_h5 = style(
    {
        fontFamily: 'Montserrat-Bold',
        fontSize: '14px',
        fontStyle: 'normal',
        lineHeight: '17px',
        letterSpacing: '0em',
    },
    media(
        {
            maxWidth: 767,
            minWidth: 576,
        },
        {
            fontSize: '14px',
            lineHeight: '14px',
        }
    ),
    media(
        {
            maxWidth: 575,
        },
        {
            fontSize: '14px',
            lineHeight: '14px',
        }
    )
);
export const i_text_d = style(
    {
        fontFamily: 'Montserrat-Medium',
        fontSize: '16px',
        fontStyle: 'normal',
        lineHeight: '24px',
        letterSpacing: '0em',
    },
    media(
        {
            maxWidth: 767,
            minWidth: 576,
        },
        {
            fontSize: '18px',
            lineHeight: '25.5px',
        }
    ),
    media(
        {
            maxWidth: 575,
        },
        {
            fontSize: '15px',
            lineHeight: '20px',
        }
    )
);
export const i_text_copy = style(
    {
        fontFamily: 'Montserrat-Medium',
        fontSize: '12px',
        fontStyle: 'normal',
        lineHeight: '15px',
        letterSpacing: '0.02em',
    },
    media(
        {
            maxWidth: 575,
        },
        {
            fontSize: '12px',
            lineHeight: '14px',
        }
    )
);
export const i_text_copy_bold = style(
    {
        fontFamily: 'Montserrat-Bold',
        fontSize: '12px',
        fontStyle: 'normal',
        lineHeight: '15px',
        letterSpacing: '-0.02em',
        //textAlign: 'left',
    },
    media(
        {
            maxWidth: 767,
            minWidth: 576,
        },
        {
            fontSize: '12px',
            lineHeight: '15px',
        }
    ),
    media(
        {
            maxWidth: 575,
        },
        {
            fontSize: '12px',
            lineHeight: '15px',
        }
    )
);
export const i_text_24 = style(
    {
        fontFamily: 'Montserrat-Medium',
        fontSize: '24px',
        fontStyle: 'normal',
        lineHeight: '17px',
        letterSpacing: '0.02em',
    },
    media(
        {
            maxWidth: 834,
            minWidth: 576,
        },
        {
            fontSize: '16px',
            lineHeight: '20px',
        }
    ),
    media(
        {
            maxWidth: 575,
        },
        {
            fontSize: '14px',
            lineHeight: '17px',
        }
    )
);
export const i_h2_title = style(
    {
        fontFamily: 'Montserrat-Bold',
        fontSize: '32px',
        fontStyle: 'normal',
        lineHeight: '35px',
    },
    media(
        {
            maxWidth: 1440,
            minWidth: 576,
        },
        {
            fontSize: '15px',
            lineHeight: '24px',
        }
    ),
    media(
        {
            maxWidth: 575,
        },
        {
            fontSize: '18px',
            lineHeight: '20px',
        }
    )
);
export const i_text_cardTitle = style(
    {
        fontFamily: 'Montserrat-Medium',
        fontSize: '12px',
        fontStyle: 'normal',
        lineHeight: '15px',
        letterSpacing: '0.02em',
    },

    media(
        {
            maxWidth: 1440,
        },
        {
            fontSize: '10px',
            lineHeight: '12px',
        }
    )
);
export const i_text_piece3 = style(
    {
        fontFamily: 'Montserrat-Medium',
        fontSize: '12px',
        fontStyle: 'normal',
        lineHeight: '15px',
        letterSpacing: '0.02em',
    },
    media(
        {
            maxWidth: 1440,
            minWidth: 576,
        },
        {
            fontSize: '12px',
            lineHeight: '25.5px',
        }
    ),
    media(
        {
            maxWidth: 575,
        },
        {
            fontSize: '12px',
            lineHeight: '14px',
        }
    )
);
export const i_text_piece4_content = style(
    {
        fontFamily: 'Montserrat-Medium',
        fontSize: '16px',
        fontStyle: 'normal',
        lineHeight: '24px',
        letterSpacing: '0em',
    },

    media(
        {
            maxWidth: 1440,
        },
        {
            fontSize: '15px',
            lineHeight: '20px',
        }
    )
);
export const i_text_16_bold = style(
    {
        fontFamily: 'Montserrat-Medium',
        fontSize: '16px',
        fontStyle: 'normal',
        lineHeight: '24px',
        letterSpacing: '0em',
    },

    media(
        {
            maxWidth: 1440,
        },
        {
            fontSize: '15px',
            lineHeight: '20px',
        }
    )
);
export const i_text_liquid = style(
    {
        fontFamily: 'Montserrat-Medium',
        fontSize: '24px',
        fontStyle: 'normal',
        lineHeight: '17px',
        letterSpacing: '0.02em',
    },
    media(
        {
            maxWidth: 1440,
        },
        {
            fontSize: '16px',
            lineHeight: '20px',
        }
    )
);
export const i_logo = style(
    {
        fontFamily: 'Montserrat-Bold',
        fontSize: '50px',
        fontStyle: 'normal',
        lineHeight: '62px',
        letterSpacing: '0em',
    },
    media(
        {
            maxWidth: 1280,
            minWidth: 786,
        },
        {
            lineHeight: '40px',
            fontSize: '33px',
        }
    ),
    media(
        {
            maxWidth: 786,
        },
        {
            lineHeight: '37px',
            fontSize: '30px',
        }
    )
);
export const i_text_Bold = style(
    {
        fontFamily: 'Montserrat-Bold',
        fontSize: '24px',
        fontStyle: 'normal',
        lineHeight: '24px',
        letterSpacing: '0em',
    },
    media(
        {
            maxWidth: 767,
            minWidth: 576,
        },
        {
            fontSize: '18px',
            lineHeight: '25.5px',
        }
    ),
    media(
        {
            maxWidth: 575,
        },
        {
            fontSize: '15px',
            lineHeight: '20px',
        }
    )
);
export const i_text_prize_16 = style(
    {
        fontFamily: 'Montserrat-Bold',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '15px',
        letterSpacing: '0.02em',
    },
    media(
        {
            maxWidth: 767,
            minWidth: 576,
        },
        {
            fontSize: '12px',
            lineHeight: '15px',
        }
    ),
    media(
        {
            maxWidth: 575,
        },
        {
            fontSize: '12px',
            lineHeight: '15px',
        }
    )
);

export const a_h1 = style(
    {
        fontFamily: 'Gilroy',
        fontSize: '64px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '70px',
        letterSpacing: '0em',
    },
    media(
        {
            maxWidth: 767,
            minWidth: 576,
        },
        {
            lineHeight: '40px',
            fontSize: '40px',
        }
    ),
    media(
        {
            maxWidth: 575,
        },
        {
            lineHeight: '36px',
            fontSize: '36px',
        }
    )
);
export const a_h2 = style(
    {
        fontFamily: 'Gilroy',
        fontSize: '48px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '50px',
        letterSpacing: '0em',
    },
    media(
        {
            maxWidth: 767,
            minWidth: 576,
        },
        {
            fontSize: '30px',

            lineHeight: '32px',
        }
    ),
    media(
        {
            maxWidth: 575,
        },
        {
            fontSize: '30px',
            lineHeight: '31px',
        }
    )
);
export const a_h3 = style(
    {
        fontFamily: 'Gilroy',
        fontSize: '36px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '44px',
        letterSpacing: '0.01em',
    },
    media(
        {
            maxWidth: 767,
            minWidth: 576,
        },
        {
            fontSize: '24px',

            lineHeight: '26px',
        }
    ),
    media(
        {
            maxWidth: 575,
        },
        {
            fontSize: '20px',

            lineHeight: '23px',
        }
    )
);
export const a_h4 = style(
    {
        fontFamily: 'Gilroy',
        fontSize: '24px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '28px',
        letterSpacing: '-0.011em',
    },
    media(
        {
            maxWidth: 767,
            minWidth: 576,
        },
        {
            fontSize: '18px',

            lineHeight: '20px',
        }
    ),
    media(
        {
            maxWidth: 575,
        },
        {
            fontSize: '14px',

            lineHeight: '15.5px',
        }
    )
);
export const a_h5 = style(
    {
        fontFamily: 'Gilroy',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '18px',
        letterSpacing: '0em',
    },
    media(
        {
            maxWidth: 767,
            minWidth: 576,
        },
        {
            fontSize: '13px',

            lineHeight: '13px',
        }
    ),
    media(
        {
            maxWidth: 575,
        },
        {
            fontSize: '10px',

            lineHeight: '11px',
        }
    )
);
export const a_display_large = style(
    {
        fontFamily: 'Gilroy',
        fontSize: '24px',
        fontStyle: 'normal',
        lineHeight: '33px',
        letterSpacing: '0em',
    },
    media(
        {
            maxWidth: 767,
            minWidth: 576,
        },
        {
            fontSize: '18px',

            lineHeight: '25.5px',
        }
    ),
    media(
        {
            maxWidth: 575,
        },
        {
            fontSize: '15px',

            lineHeight: '20px',
        }
    )
);
export const a_display = style(
    {
        fontFamily: 'Gilroy',
        fontSize: '18px',
        fontStyle: 'normal',
        lineHeight: '24px',
        letterSpacing: '0em',
    },
    media(
        {
            maxWidth: 767,
            minWidth: 576,
        },
        {
            fontSize: '18px',
            lineHeight: '25.5px',
        }
    ),
    media(
        {
            maxWidth: 575,
        },
        {
            fontSize: '15px',
            lineHeight: '20px',
        }
    )
);

export const a_bold = style(
    {
        fontFamily: 'Gilroy-Bold',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '20px',
        letterSpacing: '0em',
    },
    media(
        {
            maxWidth: 767,
            minWidth: 576,
        },
        {
            fontSize: '12px',
            lineHeight: '14px',
        }
    ),
    media(
        {
            maxWidth: 575,
        },
        {
            fontSize: '12px',
            lineHeight: '14px',
        }
    )
);
export const a_p = style(
    {
        fontFamily: 'Gilroy',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '20px',
        letterSpacing: '0em',
    },
    media(
        {
            maxWidth: 767,
            minWidth: 576,
        },
        {
            fontSize: '12px',
            lineHeight: '14px',
        }
    ),
    media(
        {
            maxWidth: 575,
        },
        {
            fontSize: '12px',
            lineHeight: '14px',
        }
    )
);
export const a_small = style(
    {
        fontFamily: 'Gilroy',
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '14px',
        letterSpacing: '0em',
    },
    media(
        {
            maxWidth: 767,
            minWidth: 576,
        },
        {
            fontSize: '12px',
            lineHeight: '14px',
        }
    ),
    media(
        {
            maxWidth: 575,
        },
        {
            fontSize: '12px',
            lineHeight: '14px',
        }
    )
);
