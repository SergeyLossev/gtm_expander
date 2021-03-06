# GTM expander
Скрипт-букмарклет, позволяющий в один клик отобразить все теги **Google Tag Manager**'а со всеми внутренностями, переменными и настройками на одной странице. Позволяет не открывать каждый тег отдельно, прокликивая поштучно и отыскивая интересующий параметр, а подкачав содержимое единожды, увидеть всю картину целиком и искать интересующее обычным поиском по странице (**Ctrl+F**)

Кроме настроек, скрипт также отображает и **аннотации**, если они были добавлены к тегу

![](https://raw.githubusercontent.com/SergeyLossev/gtm_expander/main/GTM_expander.png)

## Как пользоваться
1. Добавить в закладки браузера, вставив js-код вместо адреса страницы
2. Открыть в GTM раздел Теги
3. Запустить скрипт, кликнув по закладке или выполнив скрипт в консоли браузера
4. Дождаться окончания загрузки

![](https://raw.githubusercontent.com/SergeyLossev/gtm_expander/main/GTM_expander%20-%20make%20bookmarklet.png)

## Особенности
* Несмотря на то, что вёрстка изменяется, теги можно по-прежнему открыть и отредактировать привычным способом, кликнув по названию
* Во время подгрузки данных цвет страницы меняется на розовый, а в заголовке страницы отображается счётчик тегов, оставшихся до окончания загрузки
* По окончанию загрузки цвет страницы меняется обратно на обычный
* Скрипт скачивает не все теги, доступные в контейнере, а лишь те, которые отображены. Т.е. если выставлено отображать 50 тегов, то скачаны будут ровно 50. Или если задан фильтр-поиск - подгрузятся только отфильтрованные теги, которые видны на странице
