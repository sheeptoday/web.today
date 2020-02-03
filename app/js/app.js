// # Interface actions

$(function(){

    /* aside menu */
    $('.jsMenuTrigger').on('click', jsMenuTrigger);
    function jsMenuTrigger(e) {
        $('.elBody').toggleClass('elBody--asideIsOpen');
    }
    $('.jsMenuClose').on('click', jsCloseAllMenus);

    /* second aside menu - page menu */
    $('.jsPageMenuTrigger').on('click', jsPageMenuTrigger);
    function jsPageMenuTrigger(e) {
        $('.elBody').toggleClass('elBody--pageMenuIsOpen');
    }
    $('.jsPageMenuClose').on('click', jsCloseAllMenus);

    /* close all */
    function jsCloseAllMenus(e) {
        $('.elBody')
            .removeClass('elBody--pageMenuIsOpen')
            .removeClass('elBody--asideIsOpen');
    }

    /* focused shadow */
    $('.jsFocusedShadow').on('focus',jsFocusedShadow);
    $('.jsFocusedShadow *').on('focus',jsFocusedShadow);
    function jsFocusedShadow(e) {
        $('.elBody').addClass('hasFocusedShadow');
        $(e.currentTarget).closest('.aFocusedShadow__container').addClass('aFocusedShadow');
    }
    $('.jsFocusedShadow').on('blur',jsFocusedShadow_remove);
    function jsFocusedShadow_remove(e) {
        $('.elBody').removeClass('hasFocusedShadow');
        $('.aFocusedShadow').removeClass('aFocusedShadow');
    }

});
