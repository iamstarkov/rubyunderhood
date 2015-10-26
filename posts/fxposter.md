# fxposter

_25 октября 2015_

## Понедельник <small>112 твитов</small>

Всем привет! Эту неделю с вами проведу я, <a href="https://twitter.com/fxposter" title="Pavel Forkert">@fxposter</a>

Меня зовут Паша, живу в Днепропетровске, работаю devops-ом в израильской компании <a href="http://t.co/3Dc6lNyFt2">Wix.com</a>

Пишу на руби уже около 7 лет, последние 4 из которых связанны с руби значительно больше чем с рельсами :)

Люблю все что связано с многопоточностью, распределенными системами, языками программирования и хорошим кодом

Также иногда выступаю на конференциях и по мере сил стараюсь организовывать митапы у нас в Днепре

А поговорим мы на этой неделе о всем что связанно с devops, докером, распределенными системами...

… и тем, как это все выглядит с точки зрения простого рубиста :)

Начнем с начала - кто тут читал The Phoenix Project? :)

Кто не в курсе что это такое - <a href="http://t.co/WWdu8ALUHf">amazon.com/The-Phoenix-Pr…</a>, увлекательное художественное чтиво о том, как не ладят админы с остальным миром :)

Кстати говоря, уже есть и перевод <a href="http://t.co/rCTZyN15ki">ozon.ru/context/detail…</a>

RT <a href="https://twitter.com/kelyar" title="Evgeniy K">@kelyar</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> думал ты про эликсир

.<a href="https://twitter.com/kelyar" title="Evgeniy K">@kelyar</a> про эликсир мы тоже поговорим, но попозже :)

Так вот, через всю книгу там проходит идея процесса "change management", т.е. согласования того, какие изменения происходят в системе…

… например - что именно и когда вы будете деплоить, какие бд нужно обновить и когда и т.д.

В связи с этим возникает вопрос - как вы относитесь к необходимости подобного процесса? и как это устроено у вас в компаниях?)

RT <a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> wix на Rails? Что еще в стэке и технологиях есть?

.<a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a> нет, я бы сказал СОВСЕМ нет :) есть у нас много чего, но основной бекенд - Scala, остатки Java

.<a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a> ну и по мелочи - Ruby, Python, Erlang (по-моему), Go, был проект на Clojure ЕМНИП :)

.<a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a> при этом все что связано с руби - это Chef или мелкие (и иногда совсем не мелкие) внутренние сервисы на руби, рельсах/синатре

Если уж появился вопрос про мою работу - у нас куча всего открытого лежит на <a href="https://t.co/Mj4UeIAspQ">github.com/wix</a>

Из того, с чем я сталкивался - <a href="https://t.co/yS1NrJJenp">github.com/wix/react-temp…</a> angular-like шаблоны для React.js…

… <a href="https://t.co/2cSmgYCUER">github.com/wix/accord</a> - библиотека валидаций для Scala

… <a href="https://t.co/QMiniapHQh">github.com/wix/future-per…</a> - несколько удобных фич для фьючеров в Scala

RT <a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> не плохой зоопарк :) тяжко переключаться между языками и технологиями?

.<a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a> как правило разные команды пишут разные сервисы на разных языках/технологиях

.<a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a> я в основном пишу на руби, редко на go, хочу еще clojure и elixir в продакшен :)

Вообще работа в большой IT компании заставляет тебя по-другому посмотреть на разные вещи.

Например на то, что если у вас есть проблемы со скейлингом - всегда можно добавить пару-тройку серверов...

... правда только если они stateless :)

На то, что фронтенд и бекенд - это скорее все же не одно приложение и возможно не стоит их хранить вместе.

На то, что "одна огромная база данных с большим количеством таблиц" на все случаи жизни - это не всегда хороший вариант.

На то, что репликация бд - это не просто "читать из бд с другого сервера".

На то, что multi-datacenter деплой не очень совместим с дефолтными в рельсах "автоинкрементными интами". :)

.<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> в моем случая - продуктовая компания, &gt;500 разработчиков в нескольких локациях

RT <a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> как кстати Elixir? нет чувства незавершенности и боязни, что не взлетит технология?

.<a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a> учитывая довольно хорошее взаимодействие между эликсиром и эрлангом,наличие книг про elixir и elixircon-думаю с ним все будет ок

.<a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a> более того, лично мне кажется, что эликсир в итоге станет более популярным, чем сам эрланг. хотя эрлангисты со мной не согласны :)

<a href="http://t.co/sSHHTrDTxj">devblog.avdi.org/2015/10/12/i-h…</a> у очень известного рубиста Авди Гримма теперь есть еще и рассылка :)

А если вы все еще не знаете, кто это - то настоятельно рекомендую зайти на <a href="http://t.co/yxWPgoFTqf">rubytapas.com</a>, посмотреть пару эпизодов и подписаться

Чтобы тви не простаивал зря - а кто был на Еуруко вчера-позавчера? Расскажите, как оно было, а я поретвичу :)

BTW, если кто еще не смотрел - видео со Strangeloop уже давно в онлайне - <a href="https://t.co/SPleZXtW7i">youtube.com/channel/UC_QIf…</a>

Особенно рекоммендую <a href="https://t.co/hbXi1OhgTn">youtube.com/watch?v=ZGIAyp…</a> про coordination, crdt, и распределенные системы…

… и <a href="https://t.co/B33jjD28q3">youtube.com/watch?v=27ynM2…</a> про то, как Netflix видит service discovery у себя в будущем (поподробнее здесь - <a href="https://t.co/MbxrqS7PAM">github.com/Netflix/eureka…</a>)

RT <a href="https://twitter.com/damirca" title="damirca">@damirca</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> было хорошо, интересные доклады, четкая организация

.<a href="https://twitter.com/damirca" title="damirca">@damirca</a> а какие доклады больше всего понравились?

RT <a href="https://twitter.com/damirca" title="damirca">@damirca</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> доклад от <a href="https://twitter.com/rrrene" title="René Föhring">@rrrene</a> про инлайн документацию, доклад от девопса <a href="https://twitter.com/Shopify" title="Shopify">@Shopify</a>  про reliable systems

RT <a href="https://twitter.com/Fodoj" title="Kirill Shirinkin">@Fodoj</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> Зальцбург прекрасен. Было штуки три хороших доклада.

RT <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> афтепати вообще збс

RT <a href="https://twitter.com/Fodoj" title="Kirill Shirinkin">@Fodoj</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> Про resiliency в shopify норм самый был. Хотя ничего нового

Как всегда почти в тему - а посоветуйте интересные подкасты послушать. Можно о руби, можно нет. Можно на англ.

От себя порекоммендую <a href="http://t.co/rzTnrFBzXU">blog.cognitect.com/cognicast/</a>, который раньше назывался Think Relevance

BTW, периодически дослушиваю некоторые старые эпизоды и жалею, что не слушал их раньше и не знал о том, как развивается их компания…

RT <a href="https://twitter.com/suaron" title="suaron">@suaron</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> <a href="http://t.co/iimVjkNuZb">atp.fm</a>

BTW, если у кого-нибудь есть вопросы про докер, шеф или какие-нибудь еще ops-ориентированные вещи - не стесняйтесь спрашивать.

RT <a href="https://twitter.com/inem" title="Иван Немытченко">@inem</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> почему не ансибл? <a href="https://twitter.com/search?q=%23простите">#простите</a>

.<a href="https://twitter.com/inem" title="Иван Немытченко">@inem</a> очень много готового кода у нас, мы дружим с руби, нас устраивает pull model, хотя иногда кое-где хочется push.

.<a href="https://twitter.com/inem" title="Иван Немытченко">@inem</a> а в чем у тебя проблемы с шефом?)

RT <a href="https://twitter.com/inem" title="Иван Немытченко">@inem</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> слишком много новых концепций на ровном месте.
согласен, что если все уже нарулено на шефе, дергаться смысла нет

.<a href="https://twitter.com/inem" title="Иван Немытченко">@inem</a> ну оно все не просто так, например зависимости ресурсов через subscribes/notifies - это очень полезно в некоторых случаях

.<a href="https://twitter.com/inem" title="Иван Немытченко">@inem</a> в остальном - большинство (но не все) рецептов/плейбуков/etc можно заменить простыми, короткими баш-файлами

RT <a href="https://twitter.com/lisovskyvlad" title="Влад Лисовский">@lisovskyvlad</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> давай про докер затрём, я его использую для CI, точнее <a href="https://twitter.com/droneio" title="drone.io">@droneio</a> берёт любой docker образ и выполняет тесты…

RT <a href="https://twitter.com/lisovskyvlad" title="Влад Лисовский">@lisovskyvlad</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> то есть, у меня уже есть окружение из нескольких контейнеров для запуска тестов, теперь хочу деплоить всё …

.<a href="https://twitter.com/lisovskyvlad" title="Влад Лисовский">@lisovskyvlad</a> все очень зависит от того, что ты хочешь и сколько денег можешь вложить

.<a href="https://twitter.com/lisovskyvlad" title="Влад Лисовский">@lisovskyvlad</a> есть PAAS-ы, самые крупные: Amazon ECS, Google Container Engine, Joyent Triton

.<a href="https://twitter.com/lisovskyvlad" title="Влад Лисовский">@lisovskyvlad</a> если деплоить на свои сервисы - то начиная от docker run ручками, заканчивая kubernetes/mesos+aurora и с dokku посредине

.<a href="https://twitter.com/lisovskyvlad" title="Влад Лисовский">@lisovskyvlad</a> можно также деплоить шефом через chef-docker или что-то самописное. я завтра скомпоную список нюансов,которые стоит учитывать

Как-то первый день прошел почти без руби. Исправляюсь - здесь я рассказываю как все печально в рельсах (ну, почти) <a href="https://t.co/oSPld9ebMm">youtube.com/watch?v=Is90za…</a>

RT <a href="https://twitter.com/pinyslutty" title="Порнозвезда Твиттера">@pinyslutty</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> Какие книги/курсы/и тд советуете для новичков, как лучше учить и тд?

.<a href="https://twitter.com/pinyslutty" title="Порнозвезда Твиттера">@pinyslutty</a> ну я в отличии от <a href="https://twitter.com/kirshatrov" title="Kir Shatrov">@kirshatrov</a> считаю, что начинать нужно не с изучения руби, а с теории ООП и организации кода :)

RT <a href="https://twitter.com/xvonabur" title="Ivan Rubanovskiy">@xvonabur</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> Ruby5, Bike Shed от ThoughtBot

По запросам читателей - мой (неполный) список рекомендованной литературы для программистов:

1. Design Patterns - не с целью использовать, а для понятия принципов

2. PoEAA - вот тут уже пользы будет побольше

3. Clean Code - с некоторые концепциями не согласен, но прочесть стоит

4. Working Effectively With Legacy Code - по названию понятно, зачем оно нужно :)

Параллельно стоит читать что-то про руби/рельсы:

1. <a href="https://t.co/MZOxbzcsJ8">railstutorial.org</a> - сам не читал, но слышал много хорошего

2. Agile Web Development with Rails - я читал, но давно и скорее всего RailsTutorial будет полезнее сейчас

Дальше моя серия PragProg:

3. The RSpec Book

4. Rails Test Prescriptions

5. Crafting Rails Applications - особенно рекоммендую, сейчас вышла версия для Rails 4

6. Continuous Testing

7. Rails View

А, ну и еще ОБЯЗАТЕЛЬНОЕ дополнение к первому списку - Growing Object-Oriented Software, Guided by Tests

Также обязательны к просмотрю все видео Рича Хикки: <a href="http://t.co/CSZ1Zp4Hig">changelog.com/rich-hickeys-g…</a> (это не все, но многие)

После всего этого балагана "The Joy Of Clojure" тоже пошла хорошо :)

RT <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> <a href="https://twitter.com/pinyslutty" title="Порнозвезда Твиттера">@pinyslutty</a> <a href="https://twitter.com/kirshatrov" title="Kir Shatrov">@kirshatrov</a> теория без понимания проблемы бесполезно

.<a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a> <a href="https://twitter.com/pinyslutty" title="Порнозвезда Твиттера">@pinyslutty</a> <a href="https://twitter.com/kirshatrov" title="Kir Shatrov">@kirshatrov</a> когда я PoEAA Фаулера читал - я руби не знал :)

Да, я кажется забыл написать - я учился на Примате со специальностью "Программное обеспечение" и многие книги (не руби) читал еще тогда

И да, со времен универа я пописал на PHP, C++, Java, VBScript, Python - в том числе и для продакшена

RT <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> <a href="https://twitter.com/pinyslutty" title="Порнозвезда Твиттера">@pinyslutty</a> <a href="https://twitter.com/kirshatrov" title="Kir Shatrov">@kirshatrov</a> т.е. пока говна не пожуешь, тебе фаулер покажется бесполезным

RT <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>: <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a> <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> <a href="https://twitter.com/pinyslutty" title="Порнозвезда Твиттера">@pinyslutty</a> <a href="https://twitter.com/kirshatrov" title="Kir Shatrov">@kirshatrov</a> согласен,новичку теория сто раз не сдалась.Важнее получить базис практики …

.<a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a> <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> ну тут я не согласен. главное думать что ты пишешь и размышлять о том, чего ты НЕ СМОЖЕШЬ сделать со своим кодом.

.<a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a> <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> и после таких размышлений тебе самому захочется узнать как сделать код более податливым к дальнейшим изменениям

.<a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a> <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> если желание размышлять есть - тебе теория будет полезна сразу. если нет - то тут мало что поможет, ИМХО

RT <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a> ок, заставь прочитать новичка (который даже языка не знает) банду четырех, а потом смотри как он т…

.<a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a> ну цели учить не-программистов у меня особо никогда не было

RT <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a> это был простой пример того, что не вся теория может быть воспринята без практики до этого

.<a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a> BTW, слушая многие собеседования (не руби) я вижу, что многие работающие программисты знают меньше чем пятикурсники

.<a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a> обратный пример - сколько ты можешь доверить человеку, сделавшему блог на рельсах по примеру? :)

RT <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a> так ты ищешь разработчика с опытом или знанием? то,что пятикурсники что-то знают - не делает их кр…

.<a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a> проблема в том,что эти "программисты" понятия не имеют как их код реально работает,в отличии от умных пятикурсников

Еще одна причина,по которой я люблю рекомендовать теорию и фундаментальные вещи-они будут вам помогать значительно дольше чем знание рельсов

RT <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a> больше, чем упоротому олимпиаднику, который реализует все алгоритмы сам (тебе потом разгребать же …

RT <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a> а умные пятикурсники "все знают" и пишут код как хз что + их не переучить обычно(как я знаю)

.<a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a> я не говорил об упоротых олимпиадниках. хотя они как правило очень ок. :) про остальное спорить бесполезно

.<a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a> у меня видать какие-то неправильные пятикурсники (такие каким был я, например) :)

Теория vs практика - это неважно, вот что важно <a href="http://t.co/eztjQbW6A2">pic.twitter.com/eztjQbW6A2</a>

RT <a href="https://twitter.com/suxxes" title="Father Frodo">@suxxes</a>: <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a> Я считаю, что лучше всего сначала практика, потом теория. Теория без практики пользы не пр…

RT <a href="https://twitter.com/suxxes" title="Father Frodo">@suxxes</a>: <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a> А практика без теории может в конечном итоге принести проблемы.

.<a href="https://twitter.com/suxxes" title="Father Frodo">@suxxes</a> <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a> <a href="https://twitter.com/Xedin" title="Alexander P.">@Xedin</a>  вот я с своей жизни сталкиваюсь плохим кодом плохого практика, чем чересчур хорошего теоретика ;)

## Вторник <small>61 твит</small>

Отличный тред про дизайн горутин и смежные вещи <a href="https://t.co/VrHfUSYOEc">twitter.com/mentalguy/stat…</a>

<a href="https://t.co/d7p1sm2aEo">letsencrypt.org/2015/10/19/let…</a> Мы все стали на один шажок ближе к бесплатному, автоматизированному и открытому TLS!

Тем, кому хочется немного поломать голову (и поупражняться в знании руби) посвящается: <a href="https://t.co/fybkEl7Ex3">gist.github.com/fxposter/1682f…</a>

RT <a href="https://twitter.com/ajieks" title="Alexey Shcherbakov">@ajieks</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> люди добрые, кто работал с alchemy-cms и что думаете на счет него?

.<a href="https://twitter.com/ajieks" title="Alexey Shcherbakov">@ajieks</a> совсем не сталкивался, так что ничего не скажу :(

RT <a href="https://twitter.com/ajieks" title="Alexey Shcherbakov">@ajieks</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> предложили заказ по переделке сайта универа, смотрю что нынче в области CMS у Ruby, чтобы прикинуть, стоит ли св…

.<a href="https://twitter.com/ajieks" title="Alexey Shcherbakov">@ajieks</a> скажу честно - ни разу не сталкивался с CMS на рельсах. Когда занимался чисто рельсами - популярным был RefineryCMS....

.<a href="https://twitter.com/ajieks" title="Alexey Shcherbakov">@ajieks</a> похоже сейчас ничего не изменилось

RT <a href="https://twitter.com/igor_alexandrov" title="Igor Alexandrov">@igor_alexandrov</a>: <a href="https://twitter.com/ajieks" title="Alexey Shcherbakov">@ajieks</a> <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> если организация не может заплатить за нормальный проект – не связывайтесь.

.<a href="https://twitter.com/igor_alexandrov" title="Igor Alexandrov">@igor_alexandrov</a> <a href="https://twitter.com/ajieks" title="Alexey Shcherbakov">@ajieks</a> поддержу. особенно неприятно будет потратить свое время и нервы на "поддержку" потом.

Вчера прозвучал вопрос о том, как готовить докер. Обо всем не расскажу, но пару шишек мы с ним уже набили.

Итак, первое и самое неприятное - <a href="https://t.co/Aan5WyTVuH">github.com/docker/docker/…</a>. Залипает все что связано с докером, а точнее с network namespace.

Лечится пока что только ребутом сервера и проблема где-то внутри ядра и чинить никто не хочет, т.к. стабильно воспроизвести проблематично.

Автоматическое лечение - как только `dmesg -l emerg | grep 'waiting for lo to become free.'` начинает что-то выдавать - сразу в ребут.

Ставите докер - не забывайте ротейтить его логфайлы. Если у вас используется шеф вместе с докером - <a href="https://t.co/0vqZKFJRp2">gist.github.com/fxposter/53388…</a>

…если же нет - по gist-у понятно, как настроить логротейт ручками

Третье - докер - это не серебряная пуля. Совсем совсем. Ну ни капельки. Если вы пришли к микросервисам - пока у вас не будет мониторинга…

… лоад-балансировки, автоматического деплоймента, service discovery - докер вам может только помочь "немного поиграться"

… конечно, если вы не используете hosted-решения или какой-нибудь kubernetes (который еще на продакшене завести надо)

<a href="https://t.co/UecbWqCoD4">12factor.net</a> прекрасен, но не всегда реально вынести весь конфиг в ENV-переменные, как рекомендуют они и докер.

Также не всегда достаточно иметь "один stdout" для всех логов.

Но как только вы начинаете делать конфиг-файлы и лог-файлы - сразу встает вопрос о необходимости откуда-то брать подключаемые VOLUMES

И менеджить UID/GUD-ы в них. Например - приложение создало лог-файл на подключемом диске. Приложение бежит не под рутом (т.к. это плохо)

Нужно понимать что если вы измените base image для вышего контейнера, или просто поставите перед созданием вашего юзера в докерфайле…

… какое-нибудь пакет - он может создать дополнительного юзера, который может сместить UID для юзера под которым запускается приложение.

И после обновления на новую версию оно не запустится потому что не сможет писать в логи

Аналогичная проблема возможна с правами на конфиг-файлы

Далее следует возможная проблема с зомби-процессами: <a href="https://t.co/bI01sWGjlX">blog.phusion.nl/2015/01/20/doc…</a> (да да, это те же чуваки, которые делали REE и Passenger)

… которую ребята предлагают решать так: <a href="https://t.co/LTNwidQc0p">blog.phusion.nl/2015/01/20/bas…</a>.

Но вместо кастомного скрипта на питоне мне больше нравится вариант с S6 на C: <a href="https://t.co/cVftuVQR1h">blog.tutum.co/2014/12/02/doc…</a> и <a href="https://t.co/7mRnB7celN">blog.tutum.co/2015/05/20/s6-…</a>

Теперь непосредственно к рельсам. С их упаковкой в докер контейнер есть одна маленькая проблема. Она называется Asset Pipeline

и заключается она в том, что запросы на js,css и остальную статику будут идти сквозь ваше приложение.подробнее тут - <a href="https://t.co/htP5HnKYVu">devcenter.heroku.com/articles/rails…</a>

Хероку предлагает использовать Rack::Cache (будет быстрее, но все равно руби будет участвовать в запросе) или CDN

В идеале было бы неплохо проксировать трафик на приложение через какой-нибудь локальный nginx, задеплоенный рядом как отдельный контейнер

Но вариант проще - просто засунуть nginx внутрь своего контейнера с приложением

<a href="https://t.co/CWEDwR5TN8">github.com/fxposter/s6-ng…</a> на текущий момент я деплою рельсы в докере примерно вот так

А теперь пойду поем

RT <a href="https://twitter.com/achempion" title="Boris Kuznetsov">@achempion</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> а в чем смысл? Какую проблему вы решаете при помощи докера

.<a href="https://twitter.com/achempion" title="Boris Kuznetsov">@achempion</a> будущее развитие платформы, унификация деплоя различных типов приложений, возможная миграция на kubernetes, etc…

.<a href="https://twitter.com/achempion" title="Boris Kuznetsov">@achempion</a> в каком плане более конкретно?) есть приложения на java/scala/node/ruby/go, хочется их деплоить (и мониторить) одними средствами

.<a href="https://twitter.com/achempion" title="Boris Kuznetsov">@achempion</a> если смотреть с точки зрения руби - иметь всегда рабочий билд вместе с нативными экстеншенами

RT <a href="https://twitter.com/achempion" title="Boris Kuznetsov">@achempion</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> у вас, как я понимаю, 1 большой сервер с множеством разных стеков и вы решаете проблему изоляции процессов др…

.<a href="https://twitter.com/achempion" title="Boris Kuznetsov">@achempion</a> сотни серверов и сотни сервисов на них. изоляция - это плюс, но не основная вещь.

RT <a href="https://twitter.com/d1b" title="Dmitriy Budnik">@d1b</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> можешь дать пример когда это не работает? Ведь зачастую поток принимает умный агрегатор.

.<a href="https://twitter.com/d1b" title="Dmitriy Budnik">@d1b</a> java logback настроенный чтобы генерировать 5 разных логов для разных данных.

Ну что, у кого-нибудь получилось? :)
<a href="https://t.co/OCb29CbK5F">twitter.com/rubyunderhood/…</a>

RT <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> оспаади! Что там решать? api.instance_exec(&amp;block)

.<a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a> хех, а ты попробуй

Эта задачка имеет реальное применение,когда в шефе хочется построить свою библиотеку с блекджеком, но доступ к ресурсам шефа все равно нужен

RT <a href="https://twitter.com/oceankidbilly" title="Rob Story">@oceankidbilly</a>: StrangeLoop After <a href="https://twitter.com/strangeloop_stl" title="Strange Loop Conf">@strangeloop_stl</a>, my take on some of the best distributed systems &amp; database talks this year: https://<a href="https://t.co/DNhXef4GnI">medium.com/@oceankidbilly…</a>

RT <a href="https://twitter.com/scaint" title="Eugene">@scaint</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> В общем, если все таки eval, то так будет работать: <a href="https://t.co/ioVT78HaV1">gist.github.com/scaint/88b4590…</a>

.<a href="https://twitter.com/scaint" title="Eugene">@scaint</a> молодец! А вот и пример где это может реально использоваться (лямбда должна выполнятся внутри chef context) <a href="https://t.co/WdaeHVbXmC">gist.github.com/fxposter/c2ec2…</a>

RT <a href="https://twitter.com/ipronix" title="pronix">@ipronix</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a>  <a href="https://t.co/FA0dH4t4Ys">twitter.com/backendsecret/…</a>

.<a href="https://twitter.com/ipronix" title="pronix">@ipronix</a> эммм… БИТРИКС? <a href="https://t.co/HEVdQEyzt9">coub.com/view/8orbm</a>

RT <a href="https://twitter.com/kDasme" title="mkswap /dev/fd0">@kDasme</a>: <a href="https://twitter.com/ipronix" title="pronix">@ipronix</a> <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> да <a href="https://twitter.com/backendsecret" title="Александр Сербул">@backendsecret</a> на этой неделе какой-то лютый тролль.

.<a href="https://twitter.com/as_Crazy" title="Alexander">@as_Crazy</a> <a href="https://twitter.com/ipronix" title="pronix">@ipronix</a> <a href="https://twitter.com/backendsecret" title="Разработчик бэкенда">@backendsecret</a> прости, но язык в котором родились rspec и cucumber, а также рельсы...

.<a href="https://twitter.com/as_Crazy" title="Alexander">@as_Crazy</a> <a href="https://twitter.com/ipronix" title="pronix">@ipronix</a> <a href="https://twitter.com/backendsecret" title="Александр Сербул">@backendsecret</a> ... которые продвинули тестирование и удобство разработки в массы...

.<a href="https://twitter.com/as_Crazy" title="Alexander">@as_Crazy</a> <a href="https://twitter.com/ipronix" title="pronix">@ipronix</a> <a href="https://twitter.com/backendsecret" title="Александр Сербул">@backendsecret</a> ...в то время как многие пхпшники до сих пор не знают что такое TDD и как всё-таки работает HTTP и phpfpm

.<a href="https://twitter.com/backendsecret" title="Александр Сербул">@backendsecret</a> <a href="https://twitter.com/as_Crazy" title="Alexander">@as_Crazy</a> <a href="https://twitter.com/ipronix" title="pronix">@ipronix</a> я помню, как развивался Spring MVC взяв в себя все лучшее из рельс.

.<a href="https://twitter.com/backendsecret" title="Александр Сербул">@backendsecret</a> <a href="https://twitter.com/as_Crazy" title="Alexander">@as_Crazy</a> <a href="https://twitter.com/ipronix" title="pronix">@ipronix</a> а стандарты это местами тоже плохо - ужасно тормозят развитие. Пока их напишут, реализации сделают.

На сегодня все. Всем спокойной ночи! :)

## Среда <small>41 твит</small>

Доброе утро! <a href="https://t.co/MVsFEM7WOp">twitter.com/iamdevloper/st…</a>

RT <a href="https://twitter.com/d1b" title="Dmitriy Budnik">@d1b</a>: .<a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> <a href="https://twitter.com/scaint" title="Eugene">@scaint</a> тот случай когда "простота хуже воровства", за это chef и не любят

.<a href="https://twitter.com/d1b" title="Dmitriy Budnik">@d1b</a> <a href="https://twitter.com/scaint" title="Eugene">@scaint</a> Юзай баш :)

Продолжая вчерашний холивар (и нарываясь на то, что меня попрут отсюда :)) - экосистема руби действительно не идеальная и…

… многие известные рубисты уже ушли из нее на что-то по их мнению более перспективное - Челимски (rspec) - на кложуру, Валим - на эликсир

… кто-то переходит на Go и Rust. Вы сами вольны выбирать - копаться в говне или делать что-то стоящее. ;)

Это просто один из инструментов, который решает некоторые задачи и иногда решает их очень хорошо. Серебряной пули нет. Ну или я не нашел :(

RT <a href="https://twitter.com/ajieks" title="Alexey Shcherbakov">@ajieks</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> судя по <a href="https://t.co/1UdlnJ7b4b">blog.davidchelimsky.net</a> Челимски на кложуру перешел, т.к. на новом месте была только она, в итоге втянул…

.<a href="https://twitter.com/ajieks" title="Alexey Shcherbakov">@ajieks</a> по-моему нельзя идти в Cognitect надеясь на то, что ты будешь работать с руби :)

RT <a href="https://twitter.com/poltavajs" title="Poltava JS">@poltavajs</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> необходимы Ruby курсы в Полтаве... Помогите чем можете...

RT <a href="https://twitter.com/Shiroginne" title="Mac Shifford">@Shiroginne</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> haskell решит все проблемы!

.<a href="https://twitter.com/Shiroginne" title="Mac Shifford">@Shiroginne</a> да, конечно <a href="https://t.co/4ofOHOrwmi">xkcd.com/1312/</a>

RT <a href="https://twitter.com/ipronix" title="pronix">@ipronix</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> <a href="https://twitter.com/rainrb" title="rainrb">@rainrb</a> самый полезный человек в руби сообществе пишет не на руби, а на си. а те кто ушли, особенно валим, не с…

.<a href="https://twitter.com/ipronix" title="pronix">@ipronix</a> <a href="https://twitter.com/rainrb" title="rainrb">@rainrb</a> ну ОЧЕНЬ спорно. C нужно для экстеншенов и самого руби, что в какой-то степени влияет на экосистему,но не главная ее часть

.<a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a> то, что действительно шарящие люди уходят из комьюнити - это плохо для комьюнити

RT <a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> шарящие молча работают и делают проекты, компьюнити - это тусовка для хипстеров и девочек

.<a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a> лол, а благодаря чему ты языки учишь? откуда появляются гемы, документация, примеры использования? фреймворки, апп сервера?

.<a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a> или ты пишешь на голом руби, вычитываешь из сокета данные и парсишь сам HTTP?

RT <a href="https://twitter.com/igor_alexandrov" title="Igor Alexandrov">@igor_alexandrov</a>: <a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a> <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> мне кажется, что одни ушли – придут другие. Нормальная ротация. Свежий взгляд, так сказать.

.<a href="https://twitter.com/igor_alexandrov" title="Igor Alexandrov">@igor_alexandrov</a> <a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a> вероятно вы не следите за clojure/elixir/go комьюнити. очень многие из тех кто был вначале пути с руби - ушли.

.<a href="https://twitter.com/igor_alexandrov" title="Igor Alexandrov">@igor_alexandrov</a> <a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a> и не факт что пришедшие смогут их заменить

.<a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a> через 5 лет такого "движения вперед" ты поймешь что безнадежно отстал :)

RT <a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> не совсем, со стороны выглядит как паника, хотя в языки приходили и уходили,это молоток, взял один, взял другой…

RT <a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> если как бы за 5 лет, ты не выучил еще 2-3х языков или технологий - то ты отстал в любом язык, что кложа, что п…

.<a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a> пик популярности руби пройден уже значительно больше 5 лет назад, и многие, кто привели руби к ТОЙ популярности уже не здесь :)

.<a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a> и да - нет никакой паники, просто констатация фактов :)

.<a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a> лишний хайп - это быстрое развитие. "просто работа" - это аналог того что происходит с java (не jvm).

RT <a href="https://twitter.com/POS_troi" title="Алексей">@POS_troi</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> фактически если рубя сейчас резко загнётся то собсно того что уже есть с головой хватает :) <a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a>

.<a href="https://twitter.com/POS_troi" title="Алексей">@POS_troi</a> <a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a> время не стоит на месте, объемы данных растут, необходимость обрабатывать все больше вещей параллельно - тоже.

Какие-то у меня мрачноватые перспективы прослеживаются :) Поэтому вернемся непосредственно к руби - а чего вам в руби не хватает сейчас?

В языке, экосистеме, гемах?

.<a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a> нода может себе это позволить просто потому что аналога js на фронтенде нет, а эти люди еще и бекенд хотят :-D

RT <a href="https://twitter.com/mr_The" title="mr.The">@mr_The</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> нормальных тредов в mri :)

Я бы вот очень хотел иметь интерфейсы (опциональные, естественно) и статическую возможность их проверки.

И хоть какую-нибудь memory model для многопоточного программирования, раз уж у нас все на mutable state построено :)

RT <a href="https://twitter.com/svenyurgensson" title="YuryBatenko">@svenyurgensson</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> модели акторов в языке, необязательной типизации, байт-кода

.<a href="https://twitter.com/svenyurgensson" title="YuryBatenko">@svenyurgensson</a> поясни про необязательную типизацию, ты хочешь проверок в рантайме?

RT <a href="https://twitter.com/svenyurgensson" title="YuryBatenko">@svenyurgensson</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> нет, просто когда надо скорость работы/удобство - (x: Int, y: String), если важно утипизация - то как се…

RT <a href="https://twitter.com/svenyurgensson" title="YuryBatenko">@svenyurgensson</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> А вообще очень нравится Crystal, наблюдаю и жду когда они допилят корутины/каналы (или было бы лучше - а…

.<a href="https://twitter.com/svenyurgensson" title="YuryBatenko">@svenyurgensson</a> почему я спрашиваю - частичная типизация без проверок в runtime невозможна, а они в некоторых случаях дают сильный оверхед

.<a href="https://twitter.com/svenyurgensson" title="YuryBatenko">@svenyurgensson</a> можно почитать про gradual typing в typed clojure и typed racket (<a href="https://t.co/BanluK4xxM">ccs.neu.edu/racket/pubs/ec…</a>)

## Четверг <small>96 твитов</small>

RT <a href="https://twitter.com/nick_jastix" title="Nikolay">@nick_jastix</a>: <a href="https://twitter.com/backendsecret" title="Александр Сербул">@backendsecret</a> <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> вы используете какую-нибудь систему для хранения\структурирования знаний? (например, блокнот…

.<a href="https://twitter.com/nick_jastix" title="Nikolay">@nick_jastix</a> <a href="https://twitter.com/backendsecret" title="Александр Сербул">@backendsecret</a> именно для хранения - к сожалению (или к счастью) - только мой мозг :)

.<a href="https://twitter.com/nick_jastix" title="Nikolay">@nick_jastix</a> <a href="https://twitter.com/backendsecret" title="Александр Сербул">@backendsecret</a> для структурирования, обдумывания, планирования - блокнот с ручкой и whiteboard, если ты не один работаешь

<a href="https://t.co/BDeuv5MezL">github.com/docker-library…</a> We recommend tini. It … does only the necessary parts of reaping and signal forwarding.

Ух ты.

RT <a href="https://twitter.com/svenyurgensson" title="YuryBatenko">@svenyurgensson</a>: <a href="https://twitter.com/nick_jastix" title="Nikolay">@nick_jastix</a> <a href="https://twitter.com/backendsecret" title="Александр Сербул">@backendsecret</a> <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> использую закрытую вики

“<a href="https://twitter.com/tomstuart" title="Tom Stuart">@tomstuart</a>: Well, this is a bit gross isn’t it. <a href="https://t.co/FLmmTjzPFe">github.com/ruby/ruby/comm…</a>” Wow! Hello, CoffeeScript!

Всем привет. Каких-то конкретных тем для обсуждения у меня на сегодня нет, поэтому принимаю предложения и вопросы.

Хотя нет, есть идея! За все время существования <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> тут были ссылки только на 1 шаблонный гемфайл (от <a href="https://twitter.com/rainrb" title="rainrb">@rainrb</a>).

Неужели больше никто не хочет показать свой начальный гемфайл или application template? Давайте, друзья, сделаем другим полезно!

Вот, например, мой дефолтный темплейт, который потихоньку дорабатывается уже больше 3х лет - <a href="https://t.co/DEELTmbyyC">gist.github.com/fxposter/9133b…</a>

RT <a href="https://twitter.com/vassilevsky" title="White Russian">@vassilevsky</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> rails new APP_NAME -d postgresql --skip-sprockets --skip-javascript --skip-turbolinks --skip-test-unit --sk…

.<a href="https://twitter.com/vassilevsky" title="White Russian">@vassilevsky</a> а гемы потом всегда ручками? :(

RT <a href="https://twitter.com/mr_The" title="mr.The">@mr_The</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> <a href="https://t.co/v7w1q0Jn1i">railscomposer.com</a> же!

.<a href="https://twitter.com/mr_The" title="mr.The">@mr_The</a> да, есть такое. честно говоря - никогда не юзал. а какие комбинации используешь?

.<a href="https://twitter.com/vassilevsky" title="White Russian">@vassilevsky</a> а тесты? :)

RT <a href="https://twitter.com/vassilevsky" title="White Russian">@vassilevsky</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> да. Только то, что необходимо.

Фавориты: unicorn, config, bcrypt, multi_json, jbuilder, httparty, annotate…

А кто какие апп сервера сейчас использует и почему? Вот я вижу два человека юзают пуму и юникорн - а почему не passenger, например?

Thin уже полумертвый похоже :(

RT <a href="https://twitter.com/aablayev" title="Alexander Ablayev">@aablayev</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> юзаем пуму, пассенджер и thin. На разных проектах, ессно :)

.<a href="https://twitter.com/aablayev" title="Alexander Ablayev">@aablayev</a> а зачем такой зоопарк?

RT <a href="https://twitter.com/mr_The" title="mr.The">@mr_The</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> пассажир и юникор слишком медленные и слишом много кушают ресурсов. Поэтому пума.

.<a href="https://twitter.com/mr_The" title="mr.The">@mr_The</a> ну если не считать многопоточности пумы - то они все будут примерно одинаковые, по идее. плюс-минус.

RT <a href="https://twitter.com/bytecheg" title="Denis Kuznetsov">@bytecheg</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> puma конечно же, самая быстрая + памяти есть мало. passenger юзал раньше, но при большом кол-ве воркеров он жр…

А кто-то вообще когда-то с многопоточностью в руби работал? Если да - чем именно занимались.

.<a href="https://twitter.com/bytecheg" title="Denis Kuznetsov">@bytecheg</a> плюс пассажира - если задеплоено несколько приложений на сервере - он автоматом умеет между ними распределять ресурсы.

.<a href="https://twitter.com/bytecheg" title="Denis Kuznetsov">@bytecheg</a> для кого-то это может быть минусом :)

RT <a href="https://twitter.com/aablayev" title="Alexander Ablayev">@aablayev</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> В основном - пума. Пассенжер - на одном проекте "для посмотреть". Thin - на двух ради websocket-rails.

.<a href="https://twitter.com/aablayev" title="Alexander Ablayev">@aablayev</a> эммм, а как websocket-rails вообще работает? Любой task.save, Task.create в итоге повесит весь eventloop.

RT <a href="https://twitter.com/mr_The" title="mr.The">@mr_The</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> на одном из проектов бенчмаркал - пума немного выигрывала у юникорна по рпм и сильно выигрывала по потребляемым …

.<a href="https://twitter.com/mr_The" title="mr.The">@mr_The</a> ты сравнивал потоки с процессами или все-таки форкающуюся пуму с threads 1,1?

RT <a href="https://twitter.com/bytecheg" title="Denis Kuznetsov">@bytecheg</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> у меня одно приложение, это не актуально :) + я юзал 4ый пассажир, в 5ом может все стало значительно лучше :)

RT <a href="https://twitter.com/railsme" title="railsme">@railsme</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> планируется перетаскивание RoR проекта на амазон. Есть какие-то подводные камни? есть ли смысл отказываться от …

.<a href="https://twitter.com/railsme" title="railsme">@railsme</a> из датацентра или с хероку/другого PAAS?

RT <a href="https://twitter.com/scaint" title="Eugene">@scaint</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> В одном проекте юзаем passenger, но в основном везде unicorn.

.<a href="https://twitter.com/scaint" title="Eugene">@scaint</a> а почему не "рекоммендуемую" пуму?

RT <a href="https://twitter.com/ajieks" title="Alexey Shcherbakov">@ajieks</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> <a href="https://twitter.com/aablayev" title="Alexander Ablayev">@aablayev</a> если не ошибаюсь на EM, тоже использую Thin когда надо SSE (особенно в связке с Sinatra) или WS

.<a href="https://twitter.com/ajieks" title="Alexey Shcherbakov">@ajieks</a> <a href="https://twitter.com/aablayev" title="Alexander Ablayev">@aablayev</a> не совсем понял ответ. но любая AR операция связанная с бд повесит eventloop.

RT <a href="https://twitter.com/bytecheg" title="Denis Kuznetsov">@bytecheg</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> <a href="https://twitter.com/mr_The" title="mr.The">@mr_The</a> а смысл сравнивать c threads 1,1 ? :) имхо бенчмарки проводить надо так же, как в бою. а плюсы пумы ка…

.<a href="https://twitter.com/bytecheg" title="Denis Kuznetsov">@bytecheg</a> <a href="https://twitter.com/mr_The" title="mr.The">@mr_The</a> для чистоты эксперимента. в бою 16 тредов могут большую часть времени простаивать, рендеринг часто - это &gt;50% запроса

RT <a href="https://twitter.com/aablayev" title="Alexander Ablayev">@aablayev</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> <a href="https://twitter.com/ajieks" title="Alexey Shcherbakov">@ajieks</a> в бд нет обращений. просто получить массив объектов на вход и потоками гадить в апи.

.<a href="https://twitter.com/aablayev" title="Alexander Ablayev">@aablayev</a> <a href="https://twitter.com/ajieks" title="Alexey Shcherbakov">@ajieks</a> а зачем потоками, если есть EM уже?)

RT <a href="https://twitter.com/railsme" title="railsme">@railsme</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> дц. вот именно и вопрос назрел, размещать на инстанс или Elastic Beanstalk?

.<a href="https://twitter.com/railsme" title="railsme">@railsme</a> с EB у меня опыта нет. Но я так понимаю, что это тот же EC2, только с предустановленными вещами для определенного env-а.

.<a href="https://twitter.com/railsme" title="railsme">@railsme</a> вообще смотря на какие инстансы деплоить - там может быть медленный IO.

.<a href="https://twitter.com/railsme" title="railsme">@railsme</a> и учтите, что амазон не отвечает за то, что ваши инстансы вдруг перестанут отвечать на ВСЕ, правда такое очень давно у нас было.

.<a href="https://twitter.com/railsme" title="railsme">@railsme</a> если есть люди знакомые с шефом - у амазона есть <a href="https://t.co/xm9t8p37S6">aws.amazon.com/opsworks/</a>

RT <a href="https://twitter.com/ajieks" title="Alexey Shcherbakov">@ajieks</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> <a href="https://twitter.com/aablayev" title="Alexander Ablayev">@aablayev</a> в этом плане да, тут согласен. Но если используется Thin, то нужно отдавать себе отчет о возможных про…

RT <a href="https://twitter.com/mr_The" title="mr.The">@mr_The</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> кстати, спроси у ленты: кто-то вообще использует турболинки? Кого не спрошу - все говорят, что первым делом их о…

.<a href="https://twitter.com/mr_The" title="mr.The">@mr_The</a> я всегда отключаю!

RT <a href="https://twitter.com/ajieks" title="Alexey Shcherbakov">@ajieks</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> <a href="https://twitter.com/aablayev" title="Alexander Ablayev">@aablayev</a> AR выкидываем и работаем напрямую, гугланул <a href="https://t.co/QovkTipw4S">github.com/royaltm/ruby-e…</a> , можно локов избежать.

.<a href="https://twitter.com/ajieks" title="Alexey Shcherbakov">@ajieks</a> <a href="https://twitter.com/aablayev" title="Alexander Ablayev">@aablayev</a> можно, но с коллбеками намучаешься :)

RT <a href="https://twitter.com/m_arzubov" title="Max">@m_arzubov</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> <a href="https://twitter.com/railsme" title="railsme">@railsme</a> там Load Balancer, cli тулза, скрипты которые ранятса при старте, контроль задеплоиных версий и еще …

RT <a href="https://twitter.com/railsme" title="railsme">@railsme</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> chef рубисту не помеха 😸

.<a href="https://twitter.com/mr_The" title="mr.The">@mr_The</a> по-моему турболинкс нравятся только DHH, но все стесняются ему об этом сказать

.<a href="https://twitter.com/railsme" title="railsme">@railsme</a> <a href="https://twitter.com/ajieks" title="Alexey Shcherbakov">@ajieks</a> нужно понимать просто что AWS сам по себе недешевый, если тебе не нужно много машин, которые ты будешь автоскейлить

.<a href="https://twitter.com/railsme" title="railsme">@railsme</a> <a href="https://twitter.com/ajieks" title="Alexey Shcherbakov">@ajieks</a> а так там набор сервисов очень большой - ELB, RDB, S3, очереди, opsworks, тот же скейлинг

RT <a href="https://twitter.com/railsme" title="railsme">@railsme</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> <a href="https://twitter.com/mr_The" title="mr.The">@mr_The</a> паттерсон не постеснялся назвать его Turbo Lynx 🙀

RT <a href="https://twitter.com/ajieks" title="Alexey Shcherbakov">@ajieks</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> <a href="https://twitter.com/railsme" title="railsme">@railsme</a> это все понятно, последнее время часто работаю с azure, функционал эквивалентный в целом с AWS, но под …

.<a href="https://twitter.com/ajieks" title="Alexey Shcherbakov">@ajieks</a> <a href="https://twitter.com/railsme" title="railsme">@railsme</a> они все стремятся примерно к одному и тому же функционалу. Google Cloud Platform туда же.

RT <a href="https://twitter.com/m_arzubov" title="Max">@m_arzubov</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> <a href="https://twitter.com/railsme" title="railsme">@railsme</a> <a href="https://twitter.com/ajieks" title="Alexey Shcherbakov">@ajieks</a> Automatic Load-based Scaling очень крутая штука, недо держать поднятыми все время кучу инста…

А Joyent Triton кто-то в реальности пробовал может? Очень интересно - как оно.

После такого потока ответов могу сказать, что GIL рубистам не помеха!

RT <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> в общем, продублирую свой рельсовый <a href="https://t.co/ALR6L8VdJl">gist.github.com/Ptico/cd61a062…</a>

.<a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a> ассеты совсем отдельно?

RT <a href="https://twitter.com/ptico" title="Andrey Savchenko">@ptico</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> да, gulp, autoprefixer, babel, csso, uglify и пр. удобней напрямую юзать

RT <a href="https://twitter.com/gruz0" title="Sasha Gruzov (18+)">@gruz0</a>: Господа и дамы в <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a>, <a href="https://twitter.com/backendsecret" title="Александр Сербул">@backendsecret</a>, <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>, если жена спросила "Научи меня программированию, хочу как ты". Чт…

.<a href="https://twitter.com/gruz0" title="Sasha Gruzov (18+)">@gruz0</a> <a href="https://twitter.com/backendsecret" title="Александр Сербул">@backendsecret</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> поставить себе цель сделать что-то простое. посадить рядом программиста, пусть подсказывает что делать…

…<a href="https://twitter.com/gruz0" title="Sasha Gruzov (18+)">@gruz0</a> <a href="https://twitter.com/backendsecret" title="Александр Сербул">@backendsecret</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> но не прямо, а намеками, по чуть-чуть. Параллельно список литературы - <a href="https://t.co/cH9FMpRqTZ">twitter.com/rubyunderhood/…</a>.

…<a href="https://twitter.com/gruz0" title="Sasha Gruzov (18+)">@gruz0</a> <a href="https://twitter.com/backendsecret" title="Александр Сербул">@backendsecret</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> но я перед этим учился в универе на программиста, так что об этом тоже можно задуматься ;)

RT <a href="https://twitter.com/dzaporozhets" title="Dmitriy Zaporozhets">@dzaporozhets</a>: <a href="https://twitter.com/mr_The" title="mr.The">@mr_The</a> <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> мы в гитлаб используем.

RT <a href="https://twitter.com/Timrael" title="Timur Kozmenko">@Timrael</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> однозначно пума, мало ест и нету проблем с рестартом как у юникорна

RT <a href="https://twitter.com/rainrb" title="rainrb">@rainrb</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> раньше пассенжер, потом юникорн, сейчас пума

Окей, по пуме - вы юзаете треды, процессы или всегда и то и другое?

Планы на завтра - расскажу о rocker и как сделать ваши докер-образы чуточку меньше (примерно в 3 раза с 850-900mb до 250-300mb). Stay tuned.

Как всегда напоминаю, что вы можете предлагать темы и задавать вопросы :)

RT <a href="https://twitter.com/kaliha" title="Alexey Kalinin">@kaliha</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> че почитать начинающим лента подскажет?

.<a href="https://twitter.com/kaliha" title="Alexey Kalinin">@kaliha</a> вот буквально 10 минут назад было - <a href="https://t.co/6jLdX4vF94">twitter.com/rubyunderhood/…</a>

RT <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>: <a href="https://twitter.com/dzaporozhets" title="Dmitriy Zaporozhets">@dzaporozhets</a> <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> <a href="https://twitter.com/mr_The" title="mr.The">@mr_The</a> а у вас нет проблем, что иногда js не подгружается?

.<a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> <a href="https://twitter.com/dzaporozhets" title="Dmitriy Zaporozhets">@dzaporozhets</a> <a href="https://twitter.com/mr_The" title="mr.The">@mr_The</a> о, это страшное слово - "иногда"! хуже только "а у меня работает"!

.<a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> <a href="https://twitter.com/dzaporozhets" title="Dmitriy Zaporozhets">@dzaporozhets</a> <a href="https://twitter.com/mr_The" title="mr.The">@mr_The</a> Простите :)

RT <a href="https://twitter.com/kaliha" title="Alexey Kalinin">@kaliha</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> ну вот там или по основам программирования или рельсы уже. А именно уйти в руби, не только для рельс но и для CL…

.<a href="https://twitter.com/kaliha" title="Alexey Kalinin">@kaliha</a> Я очень быстро привыкаю к языкам и их семантике, так что чисто по руби книг не читал. Многие советуют The Well-Grounded Rubyist.

RT <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>: <a href="https://twitter.com/Semenov" title="Рептилоид со стажем">@Semenov</a> пик популярности Java пройден в 2005 году, но каждый год Java-девов все больше <a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a> <a href="https://twitter.com/dzaporozhets" title="Dmitriy Zaporozhets">@dzaporozhets</a> <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a>

.<a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> <a href="https://twitter.com/Semenov" title="Рептилоид со стажем">@Semenov</a> <a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a> <a href="https://twitter.com/dzaporozhets" title="Dmitriy Zaporozhets">@dzaporozhets</a> <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> А рубистов? :)

.<a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> <a href="https://twitter.com/Semenov" title="Рептилоид со стажем">@Semenov</a> <a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a> <a href="https://twitter.com/dzaporozhets" title="Dmitriy Zaporozhets">@dzaporozhets</a> <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> Ладно,на самом деле я не рассматриваю это как "был хайп,а теперь можно работать"

.<a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> <a href="https://twitter.com/Semenov" title="Рептилоид со стажем">@Semenov</a> <a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a> <a href="https://twitter.com/dzaporozhets" title="Dmitriy Zaporozhets">@dzaporozhets</a> <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> руби-экосистема была лично для меня местом где можно быстро выучить много нового

.<a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> <a href="https://twitter.com/Semenov" title="Рептилоид со стажем">@Semenov</a> <a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a> <a href="https://twitter.com/dzaporozhets" title="Dmitriy Zaporozhets">@dzaporozhets</a> <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> … и полезного на практике.

.<a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> <a href="https://twitter.com/Semenov" title="Рептилоид со стажем">@Semenov</a> <a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a> <a href="https://twitter.com/dzaporozhets" title="Dmitriy Zaporozhets">@dzaporozhets</a> <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> и многое из этого позже почерпнули другие языки - тот же PHP и Java.

.<a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> <a href="https://twitter.com/Semenov" title="Рептилоид со стажем">@Semenov</a> <a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a> <a href="https://twitter.com/dzaporozhets" title="Dmitriy Zaporozhets">@dzaporozhets</a> <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> сейчас этот "центр идей и прогресса" находится вне руби, лично мое ИМХО

.<a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> <a href="https://twitter.com/Semenov" title="Рептилоид со стажем">@Semenov</a> <a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a> <a href="https://twitter.com/dzaporozhets" title="Dmitriy Zaporozhets">@dzaporozhets</a> <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> И да, меня щас могут выгнать из <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> :)

RT <a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> <a href="https://twitter.com/Semenov" title="Рептилоид со стажем">@Semenov</a> <a href="https://twitter.com/dzaporozhets" title="Dmitriy Zaporozhets">@dzaporozhets</a> <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> вот я тоже подумал, зачем ты тогда здесь-то нужен?!

.<a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a> <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> <a href="https://twitter.com/Semenov" title="Рептилоид со стажем">@Semenov</a> <a href="https://twitter.com/dzaporozhets" title="Dmitriy Zaporozhets">@dzaporozhets</a> <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> призвать людей делать экосистему быстрее, лучше и доступнее. не только рубишную!

.<a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a> <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> <a href="https://twitter.com/Semenov" title="Рептилоид со стажем">@Semenov</a> <a href="https://twitter.com/dzaporozhets" title="Dmitriy Zaporozhets">@dzaporozhets</a> <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> а где я тут кого-то поливал? действия - я делаю доклады, организовываю митапы

.<a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a> <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> <a href="https://twitter.com/Semenov" title="Рептилоид со стажем">@Semenov</a> <a href="https://twitter.com/dzaporozhets" title="Dmitriy Zaporozhets">@dzaporozhets</a> <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> а мне еще нужно работать и уделять время жене :)

О вечном - <a href="https://t.co/WLwUYrAEBt">arstechnica.com/security/2015/…</a>

.<a href="https://twitter.com/mpak999" title="MpaK">@mpak999</a> <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> <a href="https://twitter.com/Semenov" title="Рептилоид со стажем">@Semenov</a> <a href="https://twitter.com/dzaporozhets" title="Dmitriy Zaporozhets">@dzaporozhets</a> <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> чем я, пожалуй, и займусь

## Пятница <small>55 твитов</small>

RT <a href="https://twitter.com/knopkodav" title="Ilya Krasilnikov">@knopkodav</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> Только passenger. Юникорн и пуму надо готовить и там меньше настроек и мониторинга. Для стартапов ок, для бан…

.<a href="https://twitter.com/knopkodav" title="Ilya Krasilnikov">@knopkodav</a> очень интересно. по ощущениям - наоборот. или вы юзаете платный и union station?

RT <a href="https://twitter.com/xvonabur" title="Ivan Rubanovskiy">@xvonabur</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> на данный момент - только puma. По ощущениям, ест меньше RAM. Но thin пока не пробовал.

RT <a href="https://twitter.com/xvonabur" title="Ivan Rubanovskiy">@xvonabur</a>: <a href="https://twitter.com/mr_The" title="mr.The">@mr_The</a> <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> ок, я использую, но пока только на маленьких проектах. А какие альтернативы turbolinks, кроме pajax?

.<a href="https://twitter.com/xvonabur" title="Ivan Rubanovskiy">@xvonabur</a> <a href="https://twitter.com/mr_The" title="mr.The">@mr_The</a> вопрос в том - нужны ли альтернативы вообще?

RT <a href="https://twitter.com/merqlove" title="Alexander Merkulov">@merqlove</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> puma, иногда unicorn. в зависимости от типа проложения. у пумы с тредами бывают проблемки, но она удобнее в по…

.<a href="https://twitter.com/merqlove" title="Alexander Merkulov">@merqlove</a> а поподробнее о "проблемках"?

.<a href="https://twitter.com/xvonabur" title="Ivan Rubanovskiy">@xvonabur</a> <a href="https://twitter.com/mr_The" title="mr.The">@mr_The</a> на практике - если в приложении почти нет js - оно не помогает, а если его много - слишком часто мешает.

.<a href="https://twitter.com/knopkodav" title="Ilya Krasilnikov">@knopkodav</a> так а чем лучше? zero time deploy как у юникорна/пумы нет. тредов как у пумы бесплатно нет.

RT <a href="https://twitter.com/knopkodav" title="Ilya Krasilnikov">@knopkodav</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> твиттер слишком мал, но если коротко, то радует, что не надо писать кучу скриптов для запуска/деплоя/супервай…

.<a href="https://twitter.com/knopkodav" title="Ilya Krasilnikov">@knopkodav</a> для пумы будет 1 простой systemd файл :)

RT <a href="https://twitter.com/knopkodav" title="Ilya Krasilnikov">@knopkodav</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> да, но разница между нами — вы мыслите как программист, а я мыслю как избежать программирования

.<a href="https://twitter.com/knopkodav" title="Ilya Krasilnikov">@knopkodav</a> я считаю, что если есть возможность контролировать что-то кодом, который юзают миллионы человек - то лучше делать это.

.<a href="https://twitter.com/knopkodav" title="Ilya Krasilnikov">@knopkodav</a> чем юзать самописный, местами крешащийся, код пассажира :)

RT <a href="https://twitter.com/ajieks" title="Alexey Shcherbakov">@ajieks</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> используете ли для коммуникации Telegram? Сегодня натолкнулся на <a href="https://t.co/X4pW3vfPOI">integram.org</a> занятный сервис.

.<a href="https://twitter.com/ajieks" title="Alexey Shcherbakov">@ajieks</a> у нас платформы менялись примерно так - hangouts -&gt; skype -&gt; hipchat -&gt; hipchat + telegram, другие комманды еще slack юзают.

Итак, как вчера и обещал - рассказываю про rocker.

Рокер - это такая надстройка на docker cli, которая умеет парсить рокерфайлы - <a href="https://t.co/N4xhVoV0Bi">github.com/grammarly/rock…</a>

Рокерфайл - это, в свою очередь, такой докерфайл с расширенным синтаксисом - <a href="https://t.co/TZMgPia6aE">github.com/grammarly/rock…</a>

Заранее хочу сказать, что к разработчикам (<a href="https://twitter.com/Grammarly" title="Grammarly">@Grammarly</a>) я не имею никакого отношения, просто вещь действительно удобная.

Так вот, сегодня мы займемся уменьшением размеров ваших рубишных образов и для этого мы будем использовать команды EXPORT и IMPORT

Зачем вообще уменьшать размер докер образов, учитывая, что они layered и базовые образы вы скачиваете реально только один раз?

Ну во первых - ради интереса, делают же на rust (<a href="https://t.co/FBQ36nGeWa">mainisusuallyafunction.blogspot.com/2015/01/151-by…</a>) и nim (<a href="https://t.co/z93feULgll">hookrace.net/blog/nim-binar…</a>) "минимальные" бинарники

Во вторых - если серверов много, то качать в первый раз все равно приходится немало - образ ruby:2.2.3 весит 718MB на текущий момент

Ну и в третьих - зачем вообще с собой таскать ненужное?

Принцип ужатия докер-образов для руби очень простой - избавится от лишних нативных библиотек и их хедеров/etc…

…и избавиться от гемов, которые вам в продакшене не нужны (как правило, это все то, что находится в :development и :test группах в гемфайле)

… в моем случае - это еще группа :assets, которую я "возвращаю" даже на rails 4 и выше.

Для таких лентяев, как я, ребята из докера сделали не только обычные образы с руби, но еще и их slim-версии (ruby:2.2.3-slim - 275.3MB).

Основная разница - slim базируется на голом образе debian:jessie (<a href="https://t.co/qonRngX4IA">github.com/docker-library…</a>), а обычная версия - на buildpack-debs:jessie…

… <a href="https://t.co/m0WaWpcGpC">github.com/docker-library…</a>. Второй образ включает в себя кучу dev-версий различных библиотек.

Основная проблема заключается в том, что использовать slim просто так сложно, т.к. ни nokogiri, ни даже json гем вы туда не поставите

… т.к. не найдете нативных библиотек, которые им нужны (и их хедеров).

И тут на помощь приходит rockerfile с несколькими FROM-ами (<a href="https://t.co/NLdWldCi2z">github.com/grammarly/rock…</a>) и IMPORT/EXPORT доступными между несколькими образами

Разберем, как это делается на моем же примере с s6/nginx/docker (<a href="https://t.co/W3pEKEo9nU">twitter.com/rubyunderhood/…</a>): <a href="https://t.co/oA7w7IfDK6">github.com/fxposter/s6-ng…</a>

Сначала мы используем дефолтный образ руби, устанавливаем только гемы, нужные для продакшена и экспортируем их - <a href="https://t.co/n07yKZ5KUb">github.com/fxposter/s6-ng…</a>

После этого нам нужно удалить конфиги бандлера и установить гемы заново, только теперь вместе с группой :assets - <a href="https://t.co/qP79iVZlpk">github.com/fxposter/s6-ng…</a>

Затем мы прекомпилируем ассеты и также экспортируем их: <a href="https://t.co/wPiCv6Ta1v">github.com/fxposter/s6-ng…</a>

К этому моменту мы имеем 2 директории в экспорте - ассеты и установленные гемы со скомпиленными экстеншенами.

Начинаем билдить конечный продакшен образ из ruby:slim - <a href="https://t.co/mklvmp2fAF">github.com/fxposter/s6-ng…</a>

Повторяем все то, что есть в стандартном Dockerfile (устанавливаем nginx и s6) - <a href="https://t.co/2XqVJOClEE">github.com/fxposter/s6-ng…</a>

Импортируем гемы, которые мы экспортировали на предыдущем шаге (и на всякий случай делаем bundle install) - <a href="https://t.co/ObCItgX0yz">github.com/fxposter/s6-ng…</a>

Прогоняем хитрую, но очень полезную команду - <a href="https://t.co/W5yWDFZZco">github.com/fxposter/s6-ng…</a>

Если вы в приложении используете mysql и вы попытаетесь с этим файлом сбилдить приложение, то вы получите ошибку - <a href="https://t.co/CvTnm4td8G">gist.github.com/fxposter/78a08…</a>

Она означает, что некоторые экстеншены, которые были скомпилированы в первом шаге, зависят от некоторых библиотек динамически.

В моем случае это libmysqlclient.so.18 и для того, чтобы мой образ реально был рабочим мне нужно будет установить эту библиотеку

Это можно сделать примерно так - <a href="https://t.co/GckccnShX9">github.com/fxposter/s6-ng…</a>

В общем - эта команда гарантирует, что у вас не будет ситуации, что какой-то гем был динамически слинкован с библиотекой, которой в slim нет

Ассеты тоже импортируем - <a href="https://t.co/GckccnShX9">github.com/fxposter/s6-ng…</a>

Ну и напоследок - опционально тегируем полученный образ, т.к. rocker build на текущий момент не поддеживает опцию -t при билде

В итоге: на довольно простом приложении получаем уменьшение размера образа более чем в 2 раза: 852.9MB -&gt; 357.4MB.

Как можно еще уменьшить размер: удалять кеши бандлера и рубигемов, переехать с стандартного дебиана на какой-нибудь Alpine Linux или busybox

Меня же и то что получается в итоге вполне устраивает. :)

Все ссылки на Rockerfile валидны для этого коммита <a href="https://t.co/Xf2Le5n5Su">github.com/fxposter/s6-ng…</a>. Спасибо, <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>

RT <a href="https://twitter.com/merqlove" title="Alexander Merkulov">@merqlove</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> В старых версиях  частенько встречались фэйлы, особенно с хот релоад. + не любое сочетание треды:воркеры работ…

## Суббота <small>32 твита</small>

RT <a href="https://twitter.com/webholt" title="Vlad :: gwer">@webholt</a>: Да ладно, сварю я сам себе ужин… :: <a href="https://t.co/CDVwRPe8fu">pic.twitter.com/CDVwRPe8fu</a>

Веб девелоперам - если ваш запрос на сервере выполняется 10сек, вы дернули апишку и через 1ске сделали ctrl-с - что произойдет на сервере?:)

Еще задачка - у вас есть POST /posts, который создает посты. Обычно он отвечает за 1сек, ваш клиентский таймаут 10сек.

… что вы можете сказать о стейте сервера (ну и бд) после того, как у вас все же отвалился запрос по таймауту?

RT <a href="https://twitter.com/scaint" title="Eugene">@scaint</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> Запрос будет крутиться дальше, если конечно не отслеживать состояние клиентского сокета.

.<a href="https://twitter.com/scaint" title="Eugene">@scaint</a> Правильно, к сожалению многие программисты этого не знают и не понимают :(

RT <a href="https://twitter.com/killthekitten" title="Nikolay Shebanov">@killthekitten</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> <a href="https://twitter.com/scaint" title="Eugene">@scaint</a> а знание и понимание предполагает какую-то обработку таких кейсов?

.<a href="https://twitter.com/killthekitten" title="Nikolay Shebanov">@killthekitten</a> <a href="https://twitter.com/scaint" title="Eugene">@scaint</a> помогает пониманию того, что у тебя на продакшене происходит

RT <a href="https://twitter.com/pzskc383" title="саша">@pzskc383</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> <a href="https://twitter.com/fxposter" title="Pavel Forkert">@fxposter</a> <a href="https://t.co/eHtHgL8o5S">php.net/manual/en/func…</a> извините.

.<a href="https://twitter.com/pzskc383" title="саша">@pzskc383</a> <a href="https://twitter.com/fxposter" title="Pavel Forkert">@fxposter</a> очень безопасно :)

RT <a href="https://twitter.com/killthekitten" title="Nikolay Shebanov">@killthekitten</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> что за "эти вещи", которые важны? 

*не придираюсь, просто, кажется, ты рассуждаешь в контексте своих про…

.<a href="https://twitter.com/killthekitten" title="Nikolay Shebanov">@killthekitten</a> если ты делаешь ajax-запрос и он таймаутится - то ты НЕ МОЖЕШЬ сказать юзеру, что "все плохо, но попытайся заново"

.<a href="https://twitter.com/killthekitten" title="Nikolay Shebanov">@killthekitten</a> более того - ты не можешь автоматически повторять запрос в надежде, что он сработает :)

.<a href="https://twitter.com/killthekitten" title="Nikolay Shebanov">@killthekitten</a> аналогично, если ты с сервера обращаешься к внешнему сервису и вылетаешь по таймауту-ты должен явно прокинуть таймаут дальше

.<a href="https://twitter.com/killthekitten" title="Nikolay Shebanov">@killthekitten</a> иначе есть вероятность, что ты потом будешь делать такой же запрос потом, а сервис будет уже в неконсистентном состоянии

.<a href="https://twitter.com/killthekitten" title="Nikolay Shebanov">@killthekitten</a> а еще нужно понимать, что если вы делаете запрос - то "плохие ситуации" могут включать в себя:

.<a href="https://twitter.com/killthekitten" title="Nikolay Shebanov">@killthekitten</a> запрос
1. не дойдет
2. дойдет, выполнится, ответ не дойдет обратно
3. дойдет, свалиться, ответ не дойдет обратно

.<a href="https://twitter.com/killthekitten" title="Nikolay Shebanov">@killthekitten</a> и с "клиента" ты не сможешь определить что случилось :)

.<a href="https://twitter.com/killthekitten" title="Nikolay Shebanov">@killthekitten</a> именно поэтому правильный ответ на <a href="https://t.co/cX0V2GiD6X">twitter.com/rubyunderhood/…</a> - "ничего, пока сервер заново не станет отвечать" :)

RT <a href="https://twitter.com/killthekitten" title="Nikolay Shebanov">@killthekitten</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> а как предложишь обрабатывать запросы к внешним сервисам, которые отправляются after_commit?

.<a href="https://twitter.com/killthekitten" title="Nikolay Shebanov">@killthekitten</a> если запросы, которые делаешь - не idempotent - молиться :) иначе - очередь с at least once delivery :)

Чуток про распределенные системы: <a href="https://t.co/9MEyQPT09S">the-paper-trail.org/blog/distribut…</a>, <a href="https://t.co/IVEaYANuro">dancres.github.io/Pages/</a> и <a href="https://t.co/XkBG9npUYJ">christophermeiklejohn.com/distributed/sy…</a> :)

Если вкратце - то любые запросы (tcp, http, …) могут не дойти:
1. до того как дойдут до адресата
2. до того как ответ вернется вам

В связи с этим стоит мыслить о любых ваших запросах куда-либо как о данных, передающихся по кабелю, который В ЛЮБОЙ МОМЕНТ могут перерезать

Аналогично - любому серверу, который обрабатывает запрос, может в ЛЮБОЙ момент выдернуть кабель питания

Вот в таком мире мы на самом деле живем :) и пытаемся строить над этим абстракции.

Разумеется, вы не будете везде и всегда пытаться обрабатывать ВСЕ плохие варианты развития событий…

… хотя иногда наверное это и стоит делать (например, когда от этого зависят жизни людей).

Но такое отношение к продакшену иногда очень помогает понять, ОТКУДА появились такие странные данные в бд, и КУДА делись логи запросов :)

<a href="https://t.co/ZrVyvd9b2u">blog.jruby.org/2015/10/perfor…</a> <a href="https://twitter.com/headius" title="Charles Nutter">@headius</a> приготовил очередные улучшения производительности в <a href="https://twitter.com/jruby" title="JRuby Dev Team">@jruby</a> 9.0.3.0!

RT <a href="https://twitter.com/d1b" title="Dmitriy Budnik">@d1b</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a>  есть ещё такие аспекты <a href="https://t.co/Lk41rWwr94">speakerdeck.com/sirupsen/euruk…</a>

.<a href="https://twitter.com/d1b" title="Dmitriy Budnik">@d1b</a> ну это про hardware failures, которые локальные, не совсем по этой теме. Но слайды крутые, уверен доклад тоже был хороший.

## Воскресенье <small>5 твитов</small>

<a href="https://t.co/aFIwsbo4Tu">vimeo.com/132194544</a> - о том, что вообще такое микросервисы, как мы к ним пришли и как их можно делать. Очень хороший доклад.

RT <a href="https://twitter.com/bytecheg" title="Denis Kuznetsov">@bytecheg</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> <a href="https://twitter.com/headius" title="Charles Nutter">@headius</a> <a href="https://twitter.com/jruby" title="JRuby Dev Team">@jruby</a> ага, только рельсы на нем все равно медленнее в 2 раза, чем на MRI :(

RT <a href="https://twitter.com/headius" title="Charles Nutter">@headius</a>: <a href="https://twitter.com/bytecheg" title="Denis Kuznetsov">@bytecheg</a> <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> <a href="https://twitter.com/jruby" title="JRuby Dev Team">@jruby</a> I don't think that is strictly true. ActiveRecord may be slower but apps using Sequel and Rail…

Подходит к концу моя неделя на <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a>. С вами был <a href="https://twitter.com/fxposter" title="Pavel Forkert">@fxposter</a>.  Если у вас остались вопросы - пишите туда. Всем спасибо! :)

Напоследок немножко рекламы - мы проводим в Днепропетровске митапы по самым разным технологиям - приходите! <a href="https://t.co/dIs0Z643Ra">meetup.com/Wix-Ukraine-Me…</a>