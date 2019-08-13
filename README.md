#Install
In order to use material-ui, you will need to install the following packages:
    (1) npm install @material-ui/core
        Main package
    (2) npm install @material-ui/icons 
        If you want to use their icons.
    (3) npm install --save clsx
        optional install to concatenate values into a string
        clsx is a function

        removes falsey values and standalone booleans
        
        strings - concatenates strings(strings only)
        objects - concatenates keys (truthy values only)
        arrays - concatenates truthy values only (no numbers)

#TEMPLATES:
    Here are some templates that you can use to model your app: 
    <!-- https://material-ui.com/getting-started/page-layout-examples/ -->

#CORE: 
    Core elements

#ICONS:
    import specific SVG Material icons from Material UI/Material.io:
        you must use capital letters when you import them both in the path and the variable name
        <!-- https://material.io/tools/icons/?style=baseline -->

    import specific icons from Font-Awesome: 
        you would still need to import this into the public/index.html file.     
        
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">

#COLORS: 
    <!-- https://material-ui.com/customization/color/ -->
    hue[shade] 
    red[100] <!--50,100 to 900, shade -->
    purple['A200'] <!--A100, A200, A400, A700-->
    purple.A200 <!---->

#TYPOGRAPHY:
    <!-- https://material-ui.com/customization/typography/ -->
    fontFamily, fontSize, htmlFontSize,

#BREAKPOINTS: For media query
    <!-- https://material-ui.com/customization/breakpoints/#api -->
    Breakpoint values
    0px ------ xs ---- 599px
    600px ---- sm ---- 959px
    960px ---- md ---- 1279px
    1280px --- lg ---- 1919px
    1920px --- xl ---->

    [theme.breakpoints.up('md')] => width up to (md and anything above this)
    [theme.breakpoints.down('md')] => width less than and including screen size (md and anything less than this) 
    [theme.breakpoints.between('sm','md')] => when width greater first argument and less than second argument
    [theme.breakpoints.only('md')] => when width greater than and include screen 

#SPACING: 
    Spacing default is 8px. But you can define spacing. 
