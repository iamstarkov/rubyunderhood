# ptico

_11 октября 2015_

## Понедельник <small>63 твита</small>

Всем привет, на этой неделе с вами <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a>. Живу в Киеве, работаю техдиром в Aejis, ем стейки и пью тёмное пиво.

На прошлой неделе с вами был <a href="https://twitter.com/inem" title="Иван Немытченко">@inem</a>, кто не успел — подписывайтесь.

Так же вы можете меня знать как соорганизатора почившего в бозе RubyConfUA и родившегося из него <a href="https://twitter.com/RubyMeditation" title="RubyMeditation">@RubyMeditation</a>

Могу рассказать про использование руби без рельс, немного про девопс и фронтенд. Короче всего по чуть-чуть: работа такая

Одна из предыдущих недель начиналась с фотографий рабочих столов. Предлагаю начать эту с меряньем чей питомец круче.А потом и к техническому

. <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> показывайте уже своих котиков, вот мой, например <a href="http://t.co/K3K7fFkhdC">pic.twitter.com/K3K7fFkhdC</a>

Заодно расскажите как вы восстанавливаетесь и заставляете себя работать после бурных выходных?

RT <a href="https://twitter.com/POS_troi" title="Алексей">@POS_troi</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> ох зря, зря, зря :) <a href="http://t.co/M7AaoSYbqN">pic.twitter.com/M7AaoSYbqN</a>

Пока я испытываю свой мимиметр и пытаюсь собрать себя в кучу после выходных, расскажите как у вас в компании относятся к удаленке

И, если хорошо, то как организовываете взаимодействие

RT <a href="https://twitter.com/dzaporozhets" title="Dmitriy Zaporozhets">@dzaporozhets</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> у нас это основа компании. Удаленно работают почти все :)

. <a href="https://twitter.com/POS_troi" title="Алексей">@POS_troi</a> у нас необязательное посещения офиса, но правило в определенное время быть в онлайне и отвечать + посещение офиса раз в неделю

. <a href="https://twitter.com/POS_troi" title="Алексей">@POS_troi</a> сейчас, например, рядом со мной сидят 9 человек из ≈20. Некоторых иногородних я не видел с новогоднего корпоратива

Правило приходить в офис касается только местных и сделано для того чтобы люди могли пообщаться вживую.

Когда тебе приходится часто смотреть в глаза сокомандникам, ты становишься более вежливым и более уважительно относишься к их труду

Про bluejeans слышу впервые, спасибо “<a href="https://twitter.com/dzaporozhets" title="Dmitriy Zaporozhets">@dzaporozhets</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> сначала hangouts. Теперь bluejeans тк позволяет 15+ человек”

А вообще, почти все правила у нас имеют пометку «Хотите от него отступить — пообщайтесь со своим PM». Совсем жестких требований мало

Вообще видеоконференции это отдельная боль. В свое время, решающим доводом в пользу перехода на Slack был многообещающий Screenhero

В итоге, скринхиро оказался еще большим говном чем скайп, поэтому сейчас пока пользуемся hangouts

RT <a href="https://twitter.com/suxxes" title="Father Frodo">@suxxes</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> <a href="http://t.co/7UH0n3R71q">talky.io</a> пробовали?

Тут в соседнем твиттере <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> подняли очень интересную тему, которую я тоже собирался обсудить: безопасность приложений

Судя по всему, руби-разработчики предпочитают кошек. Хотя я знаю как минимум одного читателя у которого удав

Сирожа, покажи нам своего удава, не стесняйся, здесь все свои

RT <a href="https://twitter.com/dzaporozhets" title="Dmitriy Zaporozhets">@dzaporozhets</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> у нас пока доминируют собаки - <a href="https://t.co/qgM1ISkNZw">about.gitlab.com/team-pets/</a> :)

Давайте немного похипстеруем: кто-нибудь использует нереляционные СУБД в продакшне? Какие? Почему?

. <a href="https://twitter.com/lisovskyvlad" title="Влад Лисовский">@lisovskyvlad</a> да. В итоге сейчас у меня монолит на достаточно изолированых сервис-объектах с единой БД. Получается просто и эффективно

У нас, в основном, используется Redis в качестве вспомогательной БД.

Пробовали вкрутить Neo4j, но он в ruby работает только через http и это очень медленно. А на jRuby так и не решились перейти

Redis очень хорош для некоторых типов задач и к тому же достаточно быстр: <a href="https://t.co/kawRrbOxB6">speakerdeck.com/ptico/the-big-…</a>

RT <a href="https://twitter.com/bytecheg" title="Denis Kuznetsov">@bytecheg</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> Тоже redis. Удобно хранить вспомогательные данные. Особенно к которым надо ставить expire. Или хранить hash'ы,…

Кстати, недавно проскочила статья про связку PostgreSQL и Redis с помощью Foreign Data Wrappers <a href="http://t.co/CmLBqdtEnh">blog.codeship.com/heroku-data-li…</a> очень интересно

Единственное что вызывает у меня опасение - это Heroku. Нет ничего более беспомощного, безответственного и испорченного, чем Heroku

Я знал, что рано или поздно мы перейдем и на эту дрянь

Как-то странно, где же пользователи  MongoDB и пр.? Смузи в коворкингах закончилось?

Хорошо, раз хипстеров мало, вопрос обратный: сколько из нас используют Postgres? Какие его фичи кроме SELECT * используете?

RT <a href="https://twitter.com/zhulikgleb" title="gleb.zhulik">@zhulikgleb</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a>  postgis, hstore, jsonb теперь

. <a href="https://twitter.com/zhulikgleb" title="gleb.zhulik">@zhulikgleb</a> какие-то специфичные библиотеки используете? Или все средствами ORM?

RT <a href="https://twitter.com/lunat1que" title="Stanislav K">@lunat1que</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> только редис, отлично делает то что pg делает плохо. Mongodb обходу за километр, натерпелся

Судя по всему, все стоят в пробках по дороге домой. Поэтому я пока нагоню вам аппетит и немного расскажу за стейки

Если вы никогда не пробовали готовить стейк — самое время это сделать.

В первую очередь вам необходимо выбрать мясо. В идеале это должно быть специальное мясо для стейков: t-bone, ribeye, филе миньон или пр.

Если в магазине нет специального мяса, можно брать обычную говядину и просить кусочек вокруг кости или с жировой прослойкой.

По хорошему, мясо нужно выдержать. Как это делается, можете нагуглить по кейворду beef aging

Затем, незадолго до приготовления стейк можно приправить. Я немного присыпаю солью и черным перцем. Так же можно добавить немного тимьяна

Для лучшего впитывания, можно сделать неглубокие насечки острым ножом в виде ромбиков

Так же некоторые готовят маринады

Сковородку иметь лучше чугунную: она делает более равномерный нагрев. В идеале это должна быть сковорода гриль.

Главный секрет: сковорода должна быть хорошо разогрета. Не раскаленная, но очень жаркая. Лично я масло не лью, а намазываю им сам стейк

Стейк жарим, в зависимости от мяса 2-4 минуты с каждой стороны по два раза. Степень прожарки можно проверять надрезами.

Серединка должна быть немного сыроватой, а верхушка с хрустящей корочкой.

После приготовления я добавляю крупной соли и ложу таблетку из сливочного масла. Есть нужно отрезая кусочки которые вы можете легко жевать

Приятного аппетита. Надеюсь я не слишком заспамил вам ленту

И да, если у вас не получилось с первого раза — не расстраивайтесь. Я испортил киллограм 10 мяса пока не научился. Но результат того стоит

RT <a href="https://twitter.com/scarfacedeb" title="Andrew Volozhanin">@scarfacedeb</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> materialized views, jsonb

Materialized views одна из самых крутых фич добавленных за последнее время <a href="https://twitter.com/scarfacedeb" title="Andrew Volozhanin">@scarfacedeb</a>

RT <a href="https://twitter.com/scarfacedeb" title="Andrew Volozhanin">@scarfacedeb</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> мы их используем для очистки и нормализации данных собранных из разрозненных источников

RT <a href="https://twitter.com/scarfacedeb" title="Andrew Volozhanin">@scarfacedeb</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> Скажем приведение к единому виду названий и группировка сходных элементов

RT <a href="https://twitter.com/niquola" title="niquola">@niquola</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> with recursive as (

RT <a href="https://twitter.com/_m_b_j_" title="Markus Schirp">@_m_b_j_</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> hehe, k. Biased response: I and some others use it, and its great ;)

RT <a href="https://twitter.com/gruz0" title="Sasha Gruzov (18+)">@gruz0</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a>, какими ещё надрезами? Тыкать пальцем и только, либо купить щуп-термометр.

RT <a href="https://twitter.com/POS_troi" title="Алексей">@POS_troi</a>: <a href="https://twitter.com/gruz0" title="Sasha Gruzov (18+)">@gruz0</a> То уже не то, идеал это савдепия. Мы покупали у бабушки на рынке. У современных чугун тонкий плохо жарит. <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a>

На сегодня, пожалуй, всё. Я и котэ желаем вам спокойной ночи и обещаем не оффтопить до пятницы <a href="http://t.co/7Mgi3yVelT">pic.twitter.com/7Mgi3yVelT</a>

. <a href="https://twitter.com/POS_troi" title="Алексей">@POS_troi</a> ну ок, может чуток по вечерам ;)

## Вторник <small>47 твитов</small>

Доброе утро. Пока я продираю глаза вот вам бодрячка для заряда на день <a href="http://t.co/UzcgnFuW3X">pleer.com/tracks/8540920…</a>

Продолжим тему БД: вы тестируете свою схему, вьюхи и триггеры? Как?

. <a href="https://twitter.com/fxposter" title="Pavel Forkert">@fxposter</a> <a href="http://t.co/oBx4RSKz8d">pic.twitter.com/oBx4RSKz8d</a>

RT <a href="https://twitter.com/killthekitten" title="Nikolay Shebanov">@killthekitten</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> <a href="https://t.co/YDW2v2sqDR">github.com/bluerogue251/m…</a> есть еще такая история, но по мне оверкилл

RT <a href="https://twitter.com/fxposter" title="Pavel Forkert">@fxposter</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> так а пользователи на что?! :)

Мы когда-то использовали shoulda. Но как оказалось она больше тестирует сами аттрибуты модели, а не реальную схему.

Плюс мы начали переносить часть логики в БД, соответственно стал вопрос о её тестировании

В итоге мы наваяли такой гем <a href="https://t.co/zvlgdQ5vU7">github.com/Ptico/rspec-se…</a> а всю кастомную логику тестируем средствами Sequel

. <a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a> <a href="https://twitter.com/lisovskyvlad" title="Влад Лисовский">@lisovskyvlad</a> забыть можно если у тебя DataMapper и нет логики в БД. А так, по сути, мы рассматриваем БД как отдельный проект

Параллельно с обсуждением БД, веду перепись едущих на Euruko

. <a href="https://twitter.com/come_on_android" title="Какого хуя, Илья?">@come_on_android</a> 1. Случаи с race-condition – на уровне БД это проще решать. 2. Тяжёлые по производительности вещи

. <a href="https://twitter.com/come_on_android" title="Какого хуя, Илья?">@come_on_android</a> как простой пример, можно вспомнить про validate_uniqueness_of который не работает по сути. Или counter-кеши

По поводу validate_uniqueness_of вспомнился вот этот доклад Эрни Миллера про AR <a href="https://t.co/oNwZaIjtyF">youtube.com/watch?v=yuh9CO…</a> посмотрите обязательно

А я вам потом немного Sequel попиарю

RT <a href="https://twitter.com/fxposter" title="Pavel Forkert">@fxposter</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> <a href="https://twitter.com/come_on_android" title="Какого хуя, Илья?">@come_on_android</a> <a href="https://t.co/RfxDk8TlNG">youtube.com/watch?v=EYJnWt…</a> очень советую посмотреть, возможно начнете по-другому относится к уни…

Итак, Sequel – это больше не ORM, а  database toolkit. По умолчанию в нем есть только DSL похожий на Arel

Если вы знакомы с гемом squeel от вышеупомянутого Ernie Miller — он вдохновлялся именно синтаксисом Sequel

Не смотря на свою простоту и лёгкость, вся мощь заключается в extension-ах и плагинах, коих из коробки идёт чуть более чем дофига

К примеру Sequel::Model – это реализация паттерна Active Record практически в том виде, в котором вы привыкли его видеть в геме AR

А с помощью плагина activemodel вы можете сделать его AM compliant. Т.е. подавляющее большинство гемов для рельс с ним будет работать

Всё это не подгружается по умолчанию, поэтому вы сами включаете только то что нужно. Во многом благодаря этому Sequel очень быстр

Если вы замените AR на Sequel на старте Rails проекта, то вы не получите  дискомфорта. Sequel хорошо документирован <a href="http://t.co/LZPeSsZVVD">sequel.jeremyevans.net/documentation.…</a>

Так же обратите внимание на страницу с плагинами <a href="http://t.co/7ATcSCr5bv">sequel.jeremyevans.net/plugins.html</a> Что радует, так это уделенное внимание специфике PostgreSQL

Особо радует поддержка стриминга, datatypes типа hstore и приятности вроде RCTE-tree и tactical eager loading

Джереми — автор Sequel, очень милый и контактный чувак. Сейчас в трекере 0 открытых issues и я редко видел больше 1й.

Вообще, по личным ощущениям библиотека более стабильная чем AR и почти все релизы — это мелкие багфиксы и новые модули

Задавайте вопросы по Sequel, постараюсь ответить что сам знаю

. <a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a> если речь идет про Rails – то вот мой стартовый гемфайл <a href="https://t.co/0mqKkllbZi">gist.github.com/Ptico/cd61a062…</a>

Кстати, если у кого-то есть подготовленные стартовые гемфайлы — делитесь, думаю каждый что-то новое найдет

RT <a href="https://twitter.com/rainrb" title="rainrb">@rainrb</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> лови <a href="https://t.co/nfz6VmpIVP">gist.github.com/rainrb/f7ee158…</a> :)

Ну в общем вы поняли <a href="http://t.co/wyoJODjqDF">pic.twitter.com/wyoJODjqDF</a>

Меня тут попинали бложек сделать. Расскажите кто на чем ведёт. Можно заодно ссылку на свой, если он про ruby

RT <a href="https://twitter.com/pinyslutty" title="Порнозвезда Твиттера">@pinyslutty</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> вопрос от новичка. Сейчас учу Руби. Когда мне переключается на освоение РоР?

RT <a href="https://twitter.com/alexfedoseev" title="Alex">@alexfedoseev</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> у меня бложик это полигон для испытаний, рельсы апи + впереди нода/реакт <a href="http://t.co/SyzfMfS2In">alexfedoseev.com</a>

Пока мы тут в твиторах балду пинаем, майкрософт выпустил лэптоп <a href="https://t.co/O5RKtJISdV">youtube.com/watch?v=XVfOe5…</a>

Теперь синий экран смерти встроен прямо в BIOS

А еще наверняка будет «Мастер включения компьютера»

Пора закругляться. Расскажите напоследок про самое уродское или странное тех.решение которое вы видели в проектах <a href="http://t.co/gcz4zVT3y9">pic.twitter.com/gcz4zVT3y9</a>

Нам, к примеру, достался проект, авторы которого превратно поняли идею разделения на сервисы и синкали ВСЮ БД через JSON HTTP запросы

. <a href="https://twitter.com/pinyslutty" title="Порнозвезда Твиттера">@pinyslutty</a> из книг «Practical Object-Oriented Design in Ruby», онлайн курсы не очень знаю, оффлайн <a href="https://twitter.com/kottans_org" title="Kottans">@kottans_org</a>

RT <a href="https://twitter.com/lisovskyvlad" title="Влад Лисовский">@lisovskyvlad</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> файлик oneliners.rb на 5к строк с историей комманд которые так или иначе меняли что то в базе через rails …

. <a href="https://twitter.com/lisovskyvlad" title="Влад Лисовский">@lisovskyvlad</a> у нас такое на quick review регулярно отстреливается со ссылкой на <a href="https://t.co/h3ya1VDA7B">youtube.com/watch?v=Oj4vXM…</a>

RT <a href="https://twitter.com/c3gdlk" title="Запорожченко Олег">@c3gdlk</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> очень знакомо, часто с этим сталкиваюсь в работе. Одна из первых статеек у меня в блоге <a href="http://t.co/3OdmgKVp29">goo.gl/Dkg2HF</a>

Ещё как-то один чувак упоролся по STI и засунул почти всю БД в одну таблицу ещё и с полиморфными связями. Потому что поле title было общее

RT <a href="https://twitter.com/AntonKalyaev" title="Anton">@AntonKalyaev</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> на <a href="https://t.co/XwWZI41BGF">github.com/octopress/octo…</a> (<a href="http://t.co/cXGnsFyW15">homeonrails.com/blog/categorie…</a>)

Котэ устроилась спать и я последую её примеру <a href="http://t.co/JsmqjZUiSL">pic.twitter.com/JsmqjZUiSL</a>

Спокойной ночи <a href="http://t.co/0aI7QscDWi">youtu.be/hi4pzKvuEQM</a>

## Среда <small>13 твитов</small>

Доброе утро чят! Сядьте на стул, держитесь за него крепко и вдохните поглубже…

Готовы? Так вот, тестовый выпуск Perl 6.0 ВЫШЕЛ!

Когда я был совсем маленьким программистом, ко мне на улице подошёл дядя, дал конфетку и предложил пойти к нему чтобы подкрутить багзиллу

Что было дальше не хочу вспоминать. Стыд, боль и унижение до сих пор терзают мою душу

К чему это я? А, да, уже в то время Perl6 ожидался чуть-ли не со дня на день.

Кто не в курсе: Perl оказал довольно большое влияние на Ruby, а потом Perl6 заимствовал идеи Ruby обратно

Среда, день когда многие подгоняют работу за Пн-Вт и готовятся к Чт-Пт. Если хотите продолжить в том же темпе - RT, отдыхаем - Fav

Это я про плотность твитов если что

Тишина, тлен и безысходность в нашем чате <a href="http://t.co/WXrKt9e3AE">pleer.com/tracks/8176886…</a>

Расскажите где вы хоститесь. Где сейчас хорошо и безгеморройно?

Кстати,мало кто знает,но если приконнектиться к консоли heroku, а потом прислонить ухо к компьютеру, то можно услышать как горят ваши деньги

. <a href="https://twitter.com/vassilevsky" title="White Russian">@vassilevsky</a> можно сказать и так. Матц говорил что он хотел сделать «Better perl» или что-то типа того

RT <a href="https://twitter.com/xvonabur" title="Ivan Rubanovskiy">@xvonabur</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> поделитесь опытом, как начинали. Какие подводные камни были и т.п.

## Четверг <small>27 твитов</small>

Ну что, сегодня кто-нибудь читает этот твиттер?

RT <a href="https://twitter.com/PWNinja" title="Rake">@PWNinja</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> не, все уже на perl6underhood переподписались

RT <a href="https://twitter.com/scaint" title="Eugene">@scaint</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> В перерывах между работой )
Кстати, расскажи, для каких задач используешь Ruby без Rails.

Руби без рельс, так руби без рельс :) В первую очередь, это задачи не требующие непосредственного рендеринга UI: JSON API в основном

run -&gt;(env) { [ 200, { 'Content-Type' =&gt; 'application/json' }, [ JSON.dump({status: 'ok'}) ] ] }

Простейший пример JSON API на Rack вмещается в твит. В реальности все немного сложнее, но не сильно

В одной из дискусиий здесь же, я уже делал пример, можно сразу лезть в спеки: <a href="https://t.co/aqlnyVc76j">github.com/Ptico/rubyunde…</a>

Подобные use_cases одним щелчком пальца превращаются в нужный нам rack ответ. Не смотря на свою сложность с первого взгляда,они очень просты

Самое важное, имея единый API подобных объектов вы можете их с легкостью рефакторить, менять, взаимозаменять и т.д.

Это как кубики LEGO: 4 дырочки, 4 пимпочки. А внутри могут быть лампочки, колёса и прочая лабуда, вплоть до микросхем

. <a href="https://twitter.com/rainrb" title="rainrb">@rainrb</a> главный урок который я извлек из работы с ним: все можно сделать просто. Если не получается — значит ты не с той стороны зашел

RT <a href="https://twitter.com/_toydestroyer" title="Sergey Toy">@_toydestroyer</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a>, ретвит? <a href="https://t.co/CAPM7868hj">twitter.com/_toydestroyer/…</a>

Давайте поговорим за codestyle. Есть ли у вас в команде согласованный стиль? Пользуетесь ли линтерами? <a href="http://t.co/uWf5OyR0mq">pic.twitter.com/uWf5OyR0mq</a>

Возникает ли желание убивать людей из-за неправильных отступов? Ставите ли вы в CI фейл на линтере или статическом анализе?

Меня, к примеру, дико бесил стиль Паттерсона, особенно опускание скобок везде где только возможно

Как-то хотел запилить пулл то-ли в Journey, то-ли в Arel, но так и не смог себя пересилить

В этом плане, появление, а главное, распространение стайлгайда от Батсова было манной небесной. Даже rails стало более-менее ему следовать

Теперь не нужно изучать стиль автора при создании небольшого пулл-реквеста. Мне кажется это очень помогло OSS сообществу

RT <a href="https://twitter.com/xvonabur" title="Ivan Rubanovskiy">@xvonabur</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> с коллегами разгорелся спор:какая логика должна выполняться на сервере, а какая на клиенте. Вы как считаете, и…

Четверг маленькая пятница, тем более я завтра весь день в самолёте. Поэтому скоро начнем время умопомрачительных сказов.

А пока давайте пофилософствуем: представьте что у вас есть возможность отправиться в прошлое, на зарю прогр. карьеры. Что бы вы себе сказали

. <a href="https://twitter.com/POS_troi" title="Алексей">@POS_troi</a> я бухгалтер

RT <a href="https://twitter.com/unix_tips" title="unix_tips">@unix_tips</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> <a href="https://twitter.com/pasunderhood" title="Школьник">@pasunderhood</a> учи английский язык как можно раньше, больше занимайся своими проектам и рисёрчем новых идей

RT <a href="https://twitter.com/iam_aishek" title="Alexandr Borisov">@iam_aishek</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> "не бери слишком много на себя"

В общем-то я, кроме английского,  посоветовал бы себе учить больше языков программирования и беречь зрение

Тему для умопомрачительных историй я закинуть не успел, поэтому вот вам трек на ночь <a href="https://t.co/e9UY2FbIX4">m.youtube.com/watch?v=Q_9ox2…</a> и посоветуйте аниме в дорогу

Горшочек не вари

## Пятница <small>10 твитов</small>

Доброе утро! Сегодня день вынужденного радиомолчания. Если есть вопросы — задавайте, вечером отвечу

Если есть кто из Берлина: я свободен на пиво на выходных

Пьёте небось?

Давайте сделаем хитро: если вы собираете дринкапы в своем городе, или хотите их собирать: пишите, а я буду ретвитить

Заодно если вы сейчас где-то пьёте, можно позвать коллег

RT <a href="https://twitter.com/nepalez" title="Andrew Kozin">@nepalez</a>: <a href="https://twitter.com/artemeff" title="Yuri Artemev">@artemeff</a> <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> Тем проще собрать дринкап. Купил водки - считай, что собрал. 40% всех рубистов, Москве такое не по си…

RT <a href="https://twitter.com/Shiroginne" title="Mac Shifford">@Shiroginne</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> четверг, 15 октября, Минск - первый мит-паб Golang в Беларуси :)

RT <a href="https://twitter.com/VitalySalnikov" title="Vitaly Salnikov">@VitalySalnikov</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> Привет, у меня есть интересный вопрос, <a href="https://t.co/fv7uUTxMHI">toster.ru/q/255723</a> почему мы получаем такое поведение AR? :)

RT <a href="https://twitter.com/xvonabur" title="Ivan Rubanovskiy">@xvonabur</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> Доброе утро! Есть вопрос, насчет статистического анализа русского текста. Чем пользовались и что посоветуете?

RT <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> на следующей неделе организую очередную пивную встречу <a href="https://twitter.com/moscowrb" title="Moscow.rb">@moscowrb</a> :)

## Суббота <small>1 твит</small>

Кто-то у меня за локализацию спрашивал, вот например  <a href="https://t.co/43zASwIJIg">twitter.com/locale_hero/st…</a>

## Воскресенье <small>7 твитов</small>

Под конец недели хотелось бы напомнить что глобальный хакатон RailsRumble уже меньше чем через месяц

Тем кто собирается участвовать, самое время собирать команду и генерировать идеи. Тем кто впервые слышит — почитать отчёты о предыдущих RR

Если правильно подойти к подготовке: RailsRumble это очень весело и возможность поговнокодить вволю

. <a href="https://twitter.com/POS_troi" title="Алексей">@POS_troi</a> <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> <a href="https://twitter.com/dukebarman" title="Boris">@dukebarman</a> про телеграмм не скажу, есть <a href="http://t.co/xb3PGucx8P">gitter.im/dev-ua</a>

Наверное пора закруглятся. Спасибо вам, вы отличная аудитория!

С вами эту неделю был <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a> Надеюсь вам понравилось. До встречи на просторах интернетов. Будете в Киеве: заходите в гости

Я устал, я мухожук. Оставляю после себя алоэ