// This file controls how Tailwind processes your CSS. For details, see
// https://tailwindcss.com/docs/configuration

module.exports = 
{
  //
  // WARNING: By default, CodeKit automatically populates the `content` array with all entries from [Project Settings > PurgeCSS]
  // in CodeKit's UI. If you add ANY entries to the `content` array here, CodeKit will not auto-populate the array; it becomes your
  // responsibility to include every type of file in your project that uses CSS rules. It is preferable to edit the PurgeCSS content 
  // list in CodeKit's UI.
  // 
  // WARNING: DO NOT delete `content` or comment it out. If you do, CodeKit will treat this as a Tailwind 2.x project instead of 3.x. 
  //
  content: [],


  //
  // All other TailwindCSS options are 100% under your control. Edit this config file as shown in the Tailwind Docs
  // to enable the settings or customizations you need.
  // 
  theme: {
    extend: {
      colors: {
        'main':             'var(--main-color)',
        'link':             'var(--link-color)',
        'hover':            'var(--hover-color)',
        'active':           'var(--hover-color)',
        'select':           'var(--hover-color)',

        'btn':              'var(--btn-color)',
        'btnlink':          'var(--btnlink-color)',
        'btnhover':         'var(--btnhover-color)',
        'btnactive':        'var(--btnactive-color)',

        'heading':          'var(--heading-color)',
        'heading-link':     'var(--heading-link-color)',
        'heading-hover':    'var(--heading-hover-color)',

        'meta':             'var(--meta-color)',
        'meta-link':        'var(--meta-link-color)',
        'meta-hover':       'var(--meta-hover-color)',

        'menu':             'var(--menu-color)',
        'menu-link':        'var(--menu-link-color)',
        'menu-hover':       'var(--menu-hover-color)',

        'line':             'var(--line-color)',

        'black':            'var(--black-color)',
        'darkest':          'var(--darkest-color)',
        'darker':           'var(--darker-color)',
        'dark':             'var(--dark-color)',
        'mid3x':            'var(--mid3x-color)',
        'mid2x':            'var(--mid2x-color)',
        'mid':              'var(--mid-color)',
        'light':            'var(--light-color)',
        'lighter':          'var(--lighter-color)',
        'lightest':         'var(--lightest-color)',
        'lightest2x':       'var(--lightest2x-color)',
        'lightest3x':       'var(--lightest3x-color)',
        'lightest4x':       'var(--lightest4x-color)',
        'white':            'var(--white-color)',
      },
      fontFamily: {
        'main':             ["'Source Sans Pro'", "'Roboto'", "'Lato'", 'Helvetica', 'Arial', 'sans-serif'],
        'heading':          ["'Open Sans'", "'Source Sans Pro'", "'Roboto'", "'Lato'", 'Helvetica', 'Arial', 'sans-serif'],
        'meta':             ["'Source Sans Pro'", "'Roboto'", "'Lato'", 'Helvetica', 'Arial', 'sans-serif'],

        'round':            ["'Rubik'", "'Quicksand'", 'Helvetica', 'Arial', 'sans-serif'],
        'hard':             ["'Open Sans'", "'Source Sans Pro'", "'Roboto'", "'Lato'", 'Helvetica', 'Arial', 'sans-serif'],
        'serif':            ["'Vollkorn'", "'EB Garamond'", "'Source Serif Pro'", "'PT Serif'", "'Sorts Mill Goudy'", 'Georgia', 'Garamond', 'serif'],
        'sanserif':         ["'Source Sans Pro'", "'Roboto'", "'Lato'", 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontWeight: {
        'main':             '400',
        'strong':           '700',
        'heading':          '600',
        'intro':            '400',
        'meta':             '600',
      },
      fontSize: {
        'tiny':             ['0.625rem', '0.8rem'],
        'smaller':          ['0.75rem', '1rem'],
        'reference':        ['0.75rem', '1rem'],
        'small':            ['0.875rem', '1.25rem'],
        'meta':             ['0.875rem', '1.25rem'],
        'base':             ['1rem', '1.5rem'],
        'h6':               ['1rem', '1.5rem'],
        'main':             ['1.125rem', '1.75rem'],
        'h5':               ['1.125rem', '1.75rem'],
        'medium':           ['1.25rem', '1.75rem'],
        'h4':               ['1.25rem', '1.75rem'],
        'medium2x':         ['1.5rem', '2rem'],
        'h3':               ['1.5rem', '2rem'],
        'intro':            ['1.5rem', '2rem'],
        'medium3x':         ['1.875rem', '2rem'],
        'medium4x':         ['2rem', '2.25rem'],
        'large':            ['2.25rem', '2.5rem'],
        'h2':               ['2.25rem', '2.5rem'],
        'larger':           ['3rem', '1'],
        'h1':               ['3rem', '1'],
        'largest':          ['3.75rem', '1'],
        'huge':             ['4.5rem', '1'],
        'huge2x':           ['6rem', '1'],
        'gigantic':         ['8rem', '1'],
      },
      borderWidth: {
        'line':             'var(--line-borderwidth)',
        'line2x':           '2px',
        'line5x':           '5px',
        'line10x':          '10px',
      },
      borderRadius: {
        'zero':             '0',
        '5px':              '0.3125rem',
        'tiny':             '0.625rem',
        'smaller':          '0.75rem',
        'small':            '0.875rem',
        'medium':           '1.25rem',
        'large':            '2.25rem',
      },
      spacing: {  
      'zero':               '0',
      '1px':                '0.0625rem',
        'px':               '0.0625rem',
        'line':             '0.063rem',
      '2px':                '0.125rem',
        'line2x':           '0.125rem',
      '5px':                '0.3125rem',
        'line5x':           '0.3125rem',
      '8px':                '0.5rem',
        'section-tiny':     '0.5rem',
      '10px':               '0.625rem',
        'tiny':             '0.625rem',
        'line10x':          '0.625rem',
      '12px':               '0.625rem',
        'smaller':          '0.75rem',
      '14px':               '0.875rem',
        'small':            '0.875rem',
        'section-small':    '0.875rem',
      '16px':               '1rem',
        'base':             '1rem',
      '18px':               '1.125rem',
        'main':             '1.125rem',
        'p':                '1.125rem',
        'list':             '1.125rem',
      '20px':               '1.25rem',  
        'medium':           '1.25rem',
        'section':          '1.25rem',
        'xl':               '1.25rem',
      '24px':               '1.5rem',  
        'medium2x':         '1.5rem',
        'section-medium':   '1.5rem',
        '2xl':              '1.5rem',
      '30px':               '1.875rem',
        'medium3x':         '1.875rem',
        '3xl':              '1.875rem',
      '32px':               '2rem',
        'intro':            '2rem',
        'medium4x':         '2rem',
        'edges':            '2rem',
      '36px':               '2.25rem',
        'large':            '2.25rem',
        'section-large':    '2.25rem',
        '4xl':              '2.25rem',
      '48px':               '3rem',
        'larger':           '3rem',
        'section-larger':   '3rem',
        '5xl':              '3rem',
      '60px':               '3.75rem',
        'largest':          '3.75rem',
        '6xl':              '3.75rem',
      '72px':               '4.5rem',
        'huge':             '4.5rem',
        'section-huge':     '4.5rem',
        '7xl':              '4.5rem',
      '96px':               '6rem',
        'huge2x':           '6rem',
        '8xl':              '6rem',
      '128px':              '8rem',
        'gigantic':         '8rem',
      },
      width: {
        // 320px
        'tinywidth':        'var(--width-tiny)',
        // 512px
        'smallwidth':       'var(--width-small)',
        // 768px
        'mediumwidth':      'var(--width-medium-wgap)',
        // 1024px
        'largewidth':       'var(--width-large)',
        // 1200px
        'largerwidth':      'var(--width-larger)',
      },
      maxWidth: {
        // 320px
        'tinywidth':        'var(--width-tiny)',
        // 512px
        'smallwidth':       'var(--width-small)',
        // 768px
        'mediumwidth':      'var(--width-medium)',
        // 1024px
        'largewidth':       'var(--width-large)',
        // 1200px
        'largerwidth':      'var(--width-larger)',
      },
      screens: {
        'tinyscreen':       '320px',
        'smallscreen':      '512px',
        'mediumscreen':     '768px',
        'mediumxscreen':    '769px',
        'largescreen':      '1024px',
        'largexscreen':     '1025px',
        'largerscreen':     '1280px',

        'largerxmaxscreen': {'max': '1280px'},
        'largexmaxscreen':  {'max': '1025px'},
        'largemaxscreen':   {'max': '1024px'},
        'mediummaxscreen':  {'max': '768px'},
        'smallmaxscreen':   {'max': '512px'},
        'tinymaxscreen':    {'max': '320px'},

        'mobilescreen':     {'max': '768px'},
        'tabletscreen':     {'min': '769px', 'max': '1024px'},
        'desktopscreen':    '1025px',
      },
    }
  },

  variants: {},

  //
  // If you want to run any Tailwind plugins (such as 'tailwindcss-typography'), simply install those into the Project via the
  // Packages area in CodeKit, then pass their names (and, optionally, any configuration values) here. 
  // Full file paths are not necessary; CodeKit will find them.
  //
  plugins: []
}