 var set_locale_to = function (locale) {
     console.log(navigator.language);

     $.i18n().locale = locale;
     $('#welcome').text($.i18n('welcome'));
 };

 $(function () {
     $.i18n().load({
         'en': '../../i18n/en.json',
         'pt-BR': '../../i18n/pt-br.json'
     }).done(function () {
         var language = navigator.language;
         set_locale_to(language);

         History.Adapter.bind(window, 'statechange', function () {
             set_locale_to(url('?locale'));
         });

         $('.switch-locale').on('click', 'a', function (e) {
             e.preventDefault();
             History.pushState(null, null, "?locale=" + $(this).data('locale'));

         });
     });
 });