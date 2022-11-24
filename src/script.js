let CourseBot = (function() {

     const Selectors = {
        tab: '.tabs__tab',
        tabActive: 'tabs__tab_active',
        section: "section",
        coursesSection: ".cources-section",
        courcesSectionActive: "cources-section_active",
        buttonLink: ".button__link",
        tarrifCounter: ".tarrif-counter",
        tarrifCounterDestiny: ".tariff-counter__destiny"
     };

     let init = function() {
         $(document).on('click', Selectors.tab, onTabClickHandler);
         $(document).on('click', Selectors.buttonLink, onButtonClickHandler);
         $(document).on('change', Selectors.tarrifCounter, onTarrifCounterChangeHandler);
     }

     function onTabClickHandler() {
        $(Selectors.tab).removeClass(Selectors.tabActive);
        $(this).addClass(Selectors.tabActive);
        let sectionToShow = $(this).data(Selectors.section);
        $(Selectors.coursesSection).removeClass(Selectors.courcesSectionActive);
        $("#" + sectionToShow).addClass(Selectors.courcesSectionActive);

     }

     function onButtonClickHandler() {
        let linkToGo = $(this).data('link');
        document.location.href = linkToGo;
     }

     function onTarrifCounterChangeHandler() {
        let counterValue = $(this).val();
        if(parseInt(counterValue) < 1) {
            $(this).val(1);
            counterValue = 1;
        }
        let price = $(this).data('price');
        let fullPrice = parseInt(counterValue) * parseInt(price);
        $(Selectors.tarrifCounterDestiny).text(fullPrice);
     }

     return {
        init: init
     }

})();
CourseBot.init();
