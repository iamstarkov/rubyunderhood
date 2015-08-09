# vazilla

_09 августа 2015_

## Понедельник <small>12 твитов</small>

Привет! На этой неделе <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> веду я, <a href="https://twitter.com/vazilla" title="Vasily Polovnyov">@vazilla</a>. Будем говорить о рельсовом фронтенде, Assets Pipeline и пользе

Работаю удаленно в Flatstack. Работаю и на бэкенде, и на фронтенде, потому что пришел в Рельсы с фронтенда

Мой карьерный путь: сисадмин, PHP, J2EE, Rails 2, верстка-верстка-верстка, Sinatra, и снова Rails

Уверен, главное — польза. Поэтому давайте сегодня поговорим о самых полезных книгах/статьях/видео

Какие книги/статьи/видео разделили вашу профессиональную жизнь на до и после? Что посоветует прочитать/посмотреть каждому Руби-программисту?

RT <a href="https://twitter.com/G3D" title="Bohdan V.">@G3D</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> что можно сделать с assets pipeline? как спасти будущее связки rails + современный frontend?

.<a href="https://twitter.com/G3D" title="Bohdan V.">@G3D</a>, об этом завтра. Предлагаю пока подумать, чем не устраивает Assets Pipeline? Чего в ней не хватает? Почему с ней нужно что-то делать?

.<a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a>, Practical OOD in Ruby Сэнди Метц. Все, что надо знать, про объекты, SOLID, наследование и управление зависимостями в Руби

.<a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a>, Don't Create Objects That End With -ER — <a href="http://t.co/rRIvVzK4wt">yegor256.com/2015/03/09/obj…</a> Вправляет мозги после контроллеров, интеракторов, хелперов

.<a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a>, <a href="https://t.co/RH8Tvwdbqj">youtube.com/watch?v=27Ct3Z…</a> — Алексей Плуталов из <a href="https://twitter.com/evilmartians" title="Evil Martians">@evilmartians</a>, о том как организовывать/структурировать JS в рельсах

.<a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a>, <a href="https://t.co/3NHJYoJ0su">vimeo.com/100010922</a> — Hot Reload в React/Webpack от <a href="https://twitter.com/dan_abramov" title="Dan Abramov">@dan_abramov</a>. Именно таким и должен быть DX (developer experience)

.<a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a>, <a href="http://t.co/6BPgytMmfh">youtube.com/watch?v=URSWYv…</a> — снова Сэнди Метц. Полчаса и ты знаешь о юнит-тестах всё

## Вторник <small>27 твитов</small>

RT <a href="https://twitter.com/lancedikson" title="Denis Demchenko">@lancedikson</a>: Гайз, в компанию по разработке игровых терминалов требуется RoR + Backbone.js dev на долгосрочный период. Remote.
/cc <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a>

Привет, привет. Сегодня о самом больном, об Assets Pipeline (sprockets). Но сначала немного истории

RT <a href="https://twitter.com/G3D" title="Bohdan V.">@G3D</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> «Confident Ruby» by Avdi Grimm <a href="https://t.co/hzoaSe9U3r">pragprog.com/book/agcr/conf…</a> + «Ruby under microscope» by Pat Shaughnessy <a href="http://t.co/fKqKFBDw98">patshaughnessy.net/ruby-under-a-m…</a>

AP появилась в 3.1 (2011 год). В то время ребята мучались с sass --watch. А в Рельсах из коробки мы как боги писали CSS без ; и {} (SASS).

AP простая и технология из трех процессов: компиляция (coffee -&gt; js), конкатенация (//= require) и сжатие (uglify, ...)

Плюс cache busting и стильные хелперы. Для 2011 года этого было достаточно. Но сейчас 2015, а AP в том же состоянии

Взгляните, что нового добавили в sprockets 3.x: <a href="https://t.co/ygh2pTK7PO">github.com/rails/sprocket…</a>

Первым, кто заявил, что AP — мертва, был <a href="https://twitter.com/andrey_sitnik" title="Андрей Ситник">@andrey_sitnik</a> в 24 выпуске RadioJS: <a href="http://t.co/Uqj1XXV8Q7">radiojs.ru/2015/06/radioj…</a> (25:00)

Есть теория, что застой в AP связан с застоем в Руби-комьюнити: Рельса и Руби сейчас именно в том месте, в котором хотели бы себя видеть

"Наш выбор: Turbolinks и RJS". Рельсы и AP застряли в том времени, когда вся динамика в приложении — это замена HTML фрагментов на странице

И это неплохой подход: он отлично будет работать для новостных сайтов и простеньких приложений. В таком случае с AP/Turbolinks можно жить

RT <a href="https://twitter.com/lancedikson" title="Denis Demchenko">@lancedikson</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> <a href="https://twitter.com/andrey_sitnik" title="Андрей Ситник">@andrey_sitnik</a>, это уже довольно давно обсуждалось в комьюнити, задолго до 24-го выпуска RadioJS :)

Плагины для AP в 2014-2015 пишутся просто: берешь js-либу, прогоняешь через browserify и встраиваешь в AP через execjs

Дело нехитрое. Вот, например, мой CSS-постпроцессор для AP для поддержки rem в IE8: <a href="https://t.co/lQrRHAbf0u">github.com/vast/rails-pix…</a>

Но, когда я поймал себя на том, что корчую postcss-плагин для AP, понял, что это все неправильно

Поэтому в 2015 я стараюсь собирать фронтенд нодой, а Рельсу использовать в качестве тонкого сервера

RT <a href="https://twitter.com/artemeff" title="Yuri Artemev">@artemeff</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> рельса и тонкий сервер – лол

А вам как Assets Pipeline/Sprockets? Всего хватает? Не подставляете рядом webpack/gulp?

RT <a href="https://twitter.com/igor_shubovych" title="Igor Shubovych">@igor_shubovych</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> первые действия при сетапе проекта:
1) настроить базу
2) вырубить sprockets
3) включить православный gul…

RT <a href="https://twitter.com/igor_shubovych" title="Igor Shubovych">@igor_shubovych</a>: <a href="https://twitter.com/artemeff" title="Yuri Artemev">@artemeff</a> <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> тонкий сервер на Rails выглядит так <a href="http://t.co/GnDAQ5myir">pic.twitter.com/GnDAQ5myir</a>

RT <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> фронтенд живет в отдельных репозиториях. Problem Solved :)

.<a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>, само собой. А тестируете как? В каком из проектов держите интеграционные тесты?

RT <a href="https://twitter.com/gunlinux" title="Vladimir, 13th">@gunlinux</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> это же везде, комьюнити собирается идеей, потом комьюнити трудно принимать, что-то новое. Они же пришли сюда и…

RT <a href="https://twitter.com/alexfedoseev" title="Alex">@alexfedoseev</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> всё хорошо: выключатель есть и работает, репозиторий с нодой рядом ставить удобно)

RT <a href="https://twitter.com/Bugagazavr" title="Bugagazavr">@Bugagazavr</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> <a href="https://twitter.com/andrey_sitnik" title="Андрей Ситник">@andrey_sitnik</a> давно обещал рассказать как у них там с gulp работа налажена

RT <a href="https://twitter.com/bufo_alvarius" title="Sergey Ponomarev">@bufo_alvarius</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> API only решает эту проблему. Бэкенд - отдельно, SPA - отдельно.

RT <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> зависит от. но в целом:
1. Данные тесткейсов лежат в одном репозитории
2. Второй репозиторий использует 1й к…

## Среда <small>13 твитов</small>

Доброе утро. Жаль, но защитников у Assets Pipeline не нашлось. Сегодня поговорим об еще одной моей любимой теме: о тестах

Я начал с Test::Unit и фикстур. Прошел Cucumber и получил посттравматический синдром. В итоге, пришел к Rspec + Capybara + Jasmine

Весь наш стек для тестов можно посмотреть здесь: <a href="https://t.co/iwf2M50Gxf">github.com/fs/rails-base/…</a>

Долго бросался из крайности в крайность: 100500 интеграционных тестов, 0 юнит-тестов -&gt; 0 интеграционных, 100500 юнит-тестов

В итоге пришел к чему-то похожему: <a href="https://t.co/QBuQw0kw7s">robots.thoughtbot.com/testing-from-t…</a> Начинаю с фича-спеки (одна на сценарий) и добавляю юнит-тестов по вкусу

В интеграционных тестах не опускаюсь до реализации и пишу на псевдо-DSL (почти site_prism): <a href="https://t.co/0akHFhCPea">gist.github.com/vast/3771a6a0a…</a>

Большую часть этих трюков подсмотрел тут: <a href="http://t.co/ZYS5bi2E9n">elabs.se/blog/51-simple…</a>

Чтобы быстро переключаться между классом/тестом и запускать тесты из Саблайма пользуюсь <a href="https://t.co/d2FI1ZPSng">packagecontrol.io/packages/RubyT…</a>

По субъективной статистике test-first у меня получается в 40% случаев. В других случаях (code-first) не доверяю тестам, которые не падали

Пишу юнит-тесты и для вьюх (редко, чаще всего это смелл), и для JS (Jasmine + jasmine-jquery). Классицист, не мокист: <a href="http://t.co/xGBBDrktsR">martinfowler.com/articles/mocks…</a>

Какие у вас секреты, принципы и правила в тестировании? Какой стек технологий используете? Какое соотношение интеграционные/юнит тесты?

Сразу отвечу про правила/принципы:

* <a href="https://t.co/LMu8fz1thT">signalvnoise.com/posts/3159-tes…</a>
* <a href="http://t.co/is4DTxPnpr">justinweiss.com/blog/2015/05/0…</a>

Плюс великолепные слайды доклада <a href="https://twitter.com/darth_sim" title="Sergey Alexandrovich">@darth_sim</a> "50 оттенков красного": <a href="http://t.co/VwSvezxOai">slideshare.net/ssuserfc4417/5…</a> (жаль, не нашел видео)

## Четверг <small>12 твитов</small>

RT <a href="https://twitter.com/xJureth" title="Юрий Минин">@xJureth</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> <a href="https://twitter.com/darth_sim" title="Sergey Alexandrovich">@darth_sim</a>  не в лучшем качестве, но <a href="http://t.co/81QifCKdcG">youtube.com/watch?v=ismsJY…</a>

Доброе утро. Давайте сегодня о ревью кода. Стили смотрите? Локально проверяете фичу? Используете чеклисты для ревью? Сами себе ревьюите?

RT <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> делаем быстрое ревью пул-реквестов, остальное через CI. В конце итерации более обстоятельное ревью

.<a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a>, как выглядит быстрое ревью? Что смотрите и проверяете?

RT <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> то что упускает замыленный глаз автора:явные ляпы, документацию,потенциальные проблемы.Подсказываем как лучше сде…

.<a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a>, круто. А что делаете с проблемами, найденными в конце итерации? В техдолг и исправлять когда-нибудь потом? Или сразу чините?

RT <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> гитхаб в этом плане лапочка: комментировать можно каждую строку в диффе

RT <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> Когда автор исправляет замечания, ставим +1. Пока не прошел CI и нет пары +1, пулл не мержится

RT <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> зависит. Баги чиним, остальное в долг, если дело не 5 минут

Годные чеклисты для ревью:

* <a href="http://t.co/lD2xAXu5of">kevinlondon.com/2015/05/05/cod…</a>
* <a href="https://t.co/HrdOMTIur7">css-tricks.com/what-a-css-cod…</a>

Про настрой для ревью: <a href="https://t.co/8Jg1gmNr6L">medium.com/medium-eng/the…</a>

В добавок к тому чеклисту смотрю тесты: понятны ли изменения в PR'е по тестам, нет ли ложно-положительных проверок?

## Пятница <small>38 твитов</small>

Привет. Всегда было интересно. Что люди используют в тестовых данных, чьи имена, фразы, цитаты?

Я часто использую цитаты из боевиков моего детства: Робокоп, Хищник, Терминатор... <a href="http://t.co/hBZzCPNuyf">pic.twitter.com/hBZzCPNuyf</a>

Из персонажей чаще всего использую Тайлера. Люблю ссылаться на комиксы <a href="http://t.co/8xGFBriHcp">pic.twitter.com/8xGFBriHcp</a>

RT <a href="https://twitter.com/common_disease" title="монолитный борщ">@common_disease</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> Faker, ничего особенного. Вообще, от этого редко что-то зависит, так зачем тратить время на эти приколы?

RT <a href="https://twitter.com/lisovskyvlad" title="Влад Лисовский">@lisovskyvlad</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> ffaker, ryba

RT <a href="https://twitter.com/common_disease" title="монолитный борщ">@common_disease</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> хотя когда писал тесты на поиск с морфологией, то брал какие-то фразы из Дюны :)

RT <a href="https://twitter.com/common_disease" title="монолитный борщ">@common_disease</a>: . <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> вот здесь <a href="https://t.co/x9TCrkSz1Y">github.com/marshall-lee/h…</a> у меня сплошной Adventure Time и My Little Pony :)

RT <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> Faker, FFaker, вместе, да.

RT <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> по-хорошему, данные должны быть рандомные

RT <a href="https://twitter.com/common_disease" title="монолитный борщ">@common_disease</a>: <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a> <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> не совсем согласен. с одной стороны да, с другой стороны мы не ГСЧ тестируем, а юзера.

RT <a href="https://twitter.com/common_disease" title="монолитный борщ">@common_disease</a>: <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a> <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> неужели не было такого, что на рандомных данных проблема не вопроизводится, а на реальных да?

.<a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a>, не всегда. Как пример: поиск, сортировка

RT <a href="https://twitter.com/common_disease" title="монолитный борщ">@common_disease</a>: <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a> <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> часто рандом на самом деле не такой уж и рандом. неправильно заюзанный рандом будет более предска…

RT <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a>: <a href="https://twitter.com/common_disease" title="монолитный борщ">@common_disease</a> <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> тут соглашусь, нужно с умом подходить

RT <a href="https://twitter.com/common_disease" title="монолитный борщ">@common_disease</a>: <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a> <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> ну а написание действительно качественной рандомизации данных это тот ещё оверхед.

RT <a href="https://twitter.com/common_disease" title="монолитный борщ">@common_disease</a>: <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a> <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> ах да, ещё в реальном проекте видел тесты, которые валились через раз. из-за рандома.

RT <a href="https://twitter.com/common_disease" title="монолитный борщ">@common_disease</a>: <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a> <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> так что тесты всё-таки должны быть детерменированными. чаще всего рандом это скорее плохо, чем хо…

Видел ребят, использующих Симпсонов и строчки из песен <a href="http://t.co/RdpiyppFPb">pic.twitter.com/RdpiyppFPb</a>

RT <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a>: <a href="https://twitter.com/common_disease" title="монолитный борщ">@common_disease</a> <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> если тесты валятся через раз, то проблема либо в коде, либо в неправильном применении рандома

.<a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a> <a href="https://twitter.com/common_disease" title="монолитный борщ">@common_disease</a>, плюс race condition. Тесты проходят локально (медленный PC), но валятся на CI (быстрый). Чаще всего: не ждали AJAX

RT <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a>: <a href="https://twitter.com/common_disease" title="монолитный борщ">@common_disease</a> <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> не rocket science, тем более что можно реюзать

RT <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> симпсонов тоже использую как демо-юзеров

RT <a href="https://twitter.com/common_disease" title="монолитный борщ">@common_disease</a>: <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a> <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> да, это так. но я также вообще не хочу, чтобы тесты хотя бы как-то *зависели от ГСЧ*. я за детерм…

RT <a href="https://twitter.com/common_disease" title="монолитный борщ">@common_disease</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a> вот это очень интересная и сложная тема — как тестировать рейс кондишны. я вообще не видел тестов…

RT <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a>: <a href="https://twitter.com/common_disease" title="монолитный борщ">@common_disease</a> <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> кстати, один раз видел, как разработчик на полном серьёзе из кода значение под тест возвращал

RT <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a>: <a href="https://twitter.com/common_disease" title="монолитный борщ">@common_disease</a> <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> потом, правда, оказалось что похапэшник

RT <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a>: <a href="https://twitter.com/common_disease" title="монолитный борщ">@common_disease</a> <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> ооо! А может кто поделится ноу-хау?

RT <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> когда лень с факером заморачиваться-всегда использую свои данные(имя, фамилию, вот это все). плюсы-не над…

RT <a href="https://twitter.com/BlackFoks" title="BlackFoks">@BlackFoks</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> когда что-то сложное, то ffaker, а так имена персонажей из tbbt.

RT <a href="https://twitter.com/artemeff" title="Yuri Artemev">@artemeff</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> john doe, hello word и пр :D

RT <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>: <a href="https://twitter.com/common_disease" title="монолитный борщ">@common_disease</a> <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a> я могу рассказать как сам тестировал это дело + как тестировал это mike perham в е…

RT <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> на самом деле, в этом нет ничего страшного и сложного. Достаточно просто сделать состояние гонки и провер…

RT <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> например, вы можете писать что-то в массив в 20 тредах и потом проверять кол-во элементов массива, я напр…

RT <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> что у меня нет гонки на запись в редис, т.к. я пишу плагин для сайкика, который собирает данные с джобов …

RT <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> сам тест выглядит очень просто
<a href="https://t.co/Fnrzpn5C2p">github.com/davydovanton/s…</a>
в дали майка он выглядит намного жестче
https://t.<a href="https://t.co/NrkyeKFjTZ">github.com/mperham/dalli/…</a>

RT <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> могу сказать от себя, что после этого теста жизнь моя стала намного лучше, я стал крепче спать и волосы с…

RT <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> поэтому я всем рекомендую писать подобные тесты в местах, где вы мультитредово пишите куда-то и никогда н…

RT <a href="https://twitter.com/as_Crazy" title="Alexander">@as_Crazy</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> всегда использую имена и топонимы из star wars

## Суббота <small>10 твитов</small>

Суббота — отличный день для больших мыслей о будущем

Уверен, в будущем от работы будут страдать роботы, а не человек: <a href="http://t.co/Ufa7L6H2nH">youtube.com/watch?v=7Pq-S5…</a>

Веб придет к идеальным приложения типа The Grid. Перетащил контент в браузер, а роботы сделали красиво: <a href="https://t.co/X8yP7941Bs">youtube.com/watch?v=OXA4-5…</a>

Программисты останутся, конечно. Но в корне изменится developer experience (DX)

Чтобы понять, в какую сторону, посмотрите Брета Виктора:

* <a href="https://t.co/55PiWc9Q1i">vimeo.com/36579366</a>
* <a href="https://t.co/ZH6qelR6Bw">vimeo.com/97903574</a>

А вам каким видится будущее веба, ИТ? Успеем поработать, как Тони Старк с Джарвисом?

RT <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> мне нравится идея и попытки ухода в виртуальную реальность, это становится похоже на будущее Гибсона

RT <a href="https://twitter.com/Fodoj" title="Kirill Shirinkin">@Fodoj</a>: <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> не понимаю всего этого бума VR. Какая-то крайняя форма попытки убежать от ответственности и реальн…

RT <a href="https://twitter.com/Fodoj" title="Kirill Shirinkin">@Fodoj</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> да-да, фронтедщиков в итоге заменят wysiwyg редакторами и роботами =)

RT <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>: <a href="https://twitter.com/Fodoj" title="Kirill Shirinkin">@Fodoj</a> <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> вот, пара видео в тему
<a href="http://t.co/SU89xXIxRj">youtube.com/watch?v=Bgx0IF…</a>
<a href="http://t.co/x4Z1DGjdiR">youtube.com/watch?v=db-7J5…</a>
<a href="http://t.co/eenuWNiOwE">youtube.com/watch?v=-oOK6d…</a>

## Воскресенье <small>8 твитов</small>

Последний день с вами, поэтому настроение лирическое-ностальгическое. Расскажите про свой первый проект на Руби/Рельсах. Еще работает?

Мой первый проект на Рельсах — дипломная работа, сервис тлогов (лихой 2008 год). Умел маркдаун, TeX и подсветку кода с highlight.js

RT <a href="https://twitter.com/inem" title="Иван Немытченко">@inem</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> работает: <a href="http://t.co/7hxkb75RzZ">silkfair.com</a> 
Даже остались мною сделанные  "скругленные уголки gif-картинками" до сих пор

.<a href="https://twitter.com/inem" title="Иван Немытченко">@inem</a>, с www тоже не работает, но я нашел его в веб-архиве: <a href="http://t.co/Leq4QGELQg">web.archive.org/web/2015031421…</a> Очень круто 👍

RT <a href="https://twitter.com/Fodoj" title="Kirill Shirinkin">@Fodoj</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> работает, как написал для себя 4+ года назад, так всё ещё и пользуюсь.

RT <a href="https://twitter.com/lisovskyvlad" title="Влад Лисовский">@lisovskyvlad</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> нет, не работает :(, чот для чувака ios девелопера, типа проект, где бы он мог свои аппы выкладывать, в ит…

RT <a href="https://twitter.com/temstickz" title="Темур">@temstickz</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> первый проект на рельсах я сделал за ночь - два года назад. 
(<a href="http://t.co/EayX3Dmjy9">bit.ly/1DFygYh</a>) - работает до сих пор.

Вот и конец недели. С вами был <a href="https://twitter.com/vazilla" title="Vasily Polovnyov">@vazilla</a>. Спасибо за то, что делились опытом и помогли отыскать видео "50 оттенков красного". Всего доброго