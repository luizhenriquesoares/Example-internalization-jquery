 var set_locale_to = function (locale) {
     console.log(locale);
     $.i18n().locale = locale;
     $('#welcome').text($.i18n('welcome'));
 };


 jQuery(function () {
     $.i18n().load({
         'en': '../../i18n/en.json',
         'pt-br': '../../i18n/pt-br.json'
     }).done(function () {
         set_locale_to(url('?locale'));

         History.Adapter.bind(window, 'statechange', function () {
             set_locale_to(url('?locale'));
         });

         $('.switch-locale').on('click', 'a', function (e) {
             e.preventDefault();
             History.pushState(null, null, "?locale=" + $(this).data('locale'));

         });
     });
 });