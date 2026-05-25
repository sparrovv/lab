export type LessonVisual =
  | 'motion'
  | 'frames'
  | 'clockwork'
  | 'certainty'
  | 'light'
  | 'ether'
  | 'einstein'
  | 'postulates'
  | 'time'
  | 'space';

export interface Lesson {
  number: number;
  slug: string;
  title: string;
  deck: string;
  duration: string;
  visual: LessonVisual;
  intro: string;
  keyIdeas: string[];
  sections: {
    heading: string;
    body: string[];
  }[];
  closing: string;
}

export const lessons: Lesson[] = [
  {
    number: 1,
    slug: 'podstawy-ruchu',
    title: 'Podstawy ruchu - co to znaczy się poruszać',
    deck:
      'Ruch nie jest cechą obiektu samego w sobie. Zawsze opisujemy go względem czegoś: peronu, Ziemi, pociągu albo innego obserwatora.',
    duration: '12 min',
    visual: 'motion',
    intro:
      'Ta lekcja porządkuje najprostsze pojęcie, które później okaże się kluczowe: ruch jest relacją, a nie etykietą przyklejoną do rzeczy.',
    keyIdeas: [
      'Ruch wymaga punktu odniesienia.',
      'Spoczynek też jest względny.',
      'Prędkość mówi, jak szybko zmienia się położenie względem wybranego tła.',
    ],
    sections: [
      {
        heading: 'Ruch potrzebuje tła',
        body: [
          'Gdy mówisz, że samochód jedzie 80 km/h, zwykle pomijasz końcówkę zdania: względem drogi. Dla pasażera siedzącego obok kierowcy kubek w uchwycie może być nieruchomy. Dla osoby stojącej przy jezdni ten sam kubek porusza się razem z samochodem.',
          'Oba opisy są poprawne, bo dotyczą innych punktów odniesienia. Fizyka nie wybiera jednego z nich jako magicznie prawdziwego. Wybiera taki, który pozwala prosto opisać sytuację.',
        ],
      },
      {
        heading: 'Położenie, droga i prędkość',
        body: [
          'Położenie odpowiada na pytanie: gdzie coś jest względem wybranego układu. Droga mówi, jaką trasę pokonało. Prędkość mówi, jak szybko położenie się zmienia. Te trzy pojęcia wyglądają zwyczajnie, ale każde z nich zakłada, że wcześniej ustaliliśmy punkt widzenia.',
          'Jeśli siedzisz w pociągu, plecak na półce ma stałe położenie względem wagonu. Względem dworca jego położenie zmienia się przez cały czas. To nie sprzeczność, tylko dwa kompletne opisy tej samej sceny.',
        ],
      },
      {
        heading: 'Dlaczego to ważne dla Einsteina',
        body: [
          'Einstein zaczyna właśnie od tego codziennego faktu: obserwatorzy mogą opisywać to samo zdarzenie inaczej. Rewolucja polegała na tym, że różnice nie kończą się na prędkości. Przy bardzo dużych prędkościach zmieniają się także pomiary czasu i długości.',
        ],
      },
    ],
    closing:
      'Najważniejsza intuicja: zanim zapytasz, czy coś się porusza, zapytaj względem czego. To pytanie będzie wracać w całym kursie.',
  },
  {
    number: 2,
    slug: 'uklady-odniesienia',
    title: 'Układy odniesienia w codziennym życiu',
    deck:
      'Układ odniesienia to praktyczny sposób opisania świata: wybierasz obserwatora, jego zegar, jego linijkę i jego siatkę współrzędnych.',
    duration: '14 min',
    visual: 'frames',
    intro:
      'Zasada względności zaczyna być zrozumiała, gdy układ odniesienia przestaje brzmieć jak termin z podręcznika, a zaczyna działać jak narzędzie obserwatora.',
    keyIdeas: [
      'Układ odniesienia to obserwator plus metoda pomiaru.',
      'W różnych układach te same zdarzenia mogą mieć inne współrzędne.',
      'Nie każdy układ jest równie wygodny, ale wiele układów jest równie poprawnych.',
    ],
    sections: [
      {
        heading: 'Winda, pociąg i chodnik',
        body: [
          'Wyobraź sobie piłkę podrzuconą pionowo w jadącym pociągu. Dla pasażera piłka leci w górę i wraca do ręki. Dla osoby stojącej na peronie piłka jednocześnie porusza się do przodu, bo pociąg jedzie.',
          'Układ pasażera i układ peronu nie kłócą się ze sobą. Każdy opisuje tę samą piłkę własnymi współrzędnymi. Różnica wynika z tego, że obserwatorzy poruszają się względem siebie.',
        ],
      },
      {
        heading: 'Zdarzenia zamiast przedmiotów',
        body: [
          'W teorii względności szczególnie ważne są zdarzenia: coś dzieje się w konkretnym miejscu i czasie. Błysk lampy, zamknięcie drzwi, stuknięcie kół o szynę - każde zdarzenie ma współrzędne przestrzenne i czasowe.',
          'Różni obserwatorzy mogą przypisać zdarzeniu inne liczby. Pytanie brzmi nie tylko gdzie coś zaszło, ale też kiedy zaszło według zegara danego obserwatora.',
        ],
      },
      {
        heading: 'Układy inercjalne',
        body: [
          'Najprostsze są układy inercjalne: takie, które nie przyspieszają i nie skręcają. Jeśli w takim układzie nic nie pcha przedmiotu, przedmiot zachowuje swój ruch jednostajny. To idealizacja, ale bardzo użyteczna.',
          'Szczególna teoria względności dotyczy właśnie takich układów. Ogólna teoria względności później rozszerzy temat na przyspieszenie i grawitację.',
        ],
      },
    ],
    closing:
      'Układ odniesienia to nie opinia obserwatora. To kompletna procedura mierzenia świata z wybranego punktu widzenia.',
  },
  {
    number: 3,
    slug: 'fizyka-klasyczna-newtona',
    title: 'Fizyka klasyczna Newtona - świat mechaniczny jak zegarek',
    deck:
      'Newtonowski świat jest uporządkowany: czas płynie jednakowo dla wszystkich, przestrzeń jest wspólną sceną, a siły zmieniają ruch ciał.',
    duration: '13 min',
    visual: 'clockwork',
    intro:
      'Zanim pojawi się Einstein, trzeba zobaczyć, dlaczego fizyka Newtona była tak skuteczna i dlaczego wydawała się niemal ostateczna.',
    keyIdeas: [
      'Newton zakładał absolutny czas i absolutną przestrzeń.',
      'Prawa ruchu świetnie opisują codzienne prędkości.',
      'W klasycznym obrazie prędkości po prostu się dodają.',
    ],
    sections: [
      {
        heading: 'Wspólna scena dla wszystkich',
        body: [
          'W fizyce Newtona przestrzeń działa jak wielka, niewidzialna sala, w której poruszają się obiekty. Czas działa jak jeden wspólny metronom dla całego Wszechświata. Każdy obserwator może się poruszać, ale wszyscy mają dostęp do tego samego tła.',
          'Dzięki temu mechanika jest intuicyjna. Jeśli wagon jedzie 50 km/h, a pasażer idzie w nim 5 km/h w kierunku jazdy, to dla osoby na peronie pasażer porusza się 55 km/h.',
        ],
      },
      {
        heading: 'Prawa ruchu',
        body: [
          'Pierwsza zasada Newtona mówi, że bez wypadkowej siły ciało zachowuje ruch jednostajny. Druga łączy siłę z przyspieszeniem. Trzecia przypomina, że oddziaływania występują parami.',
          'Ten zestaw pozwala opisać spadające jabłka, ruch planet, mosty, armaty i maszyny. Sukces był tak wielki, że przez długi czas wydawało się, iż wystarczy dopracować szczegóły.',
        ],
      },
      {
        heading: 'Granice intuicji',
        body: [
          'Newtonowskie przewidywania działają znakomicie przy prędkościach dużo mniejszych od prędkości światła. Problem pojawia się wtedy, gdy zaczynamy pytać o światło, elektromagnetyzm i obserwatorów poruszających się bardzo szybko.',
        ],
      },
    ],
    closing:
      'Fizyka Newtona nie jest błędna w codziennym zakresie. Jest przybliżeniem głębszego opisu, który ujawnia się przy ekstremalnych prędkościach.',
  },
  {
    number: 4,
    slug: 'xix-wieczna-pewnosc',
    title: 'Dlaczego XIX-wieczni fizycy myśleli, że wszystko już wiedzą',
    deck:
      'Pod koniec XIX wieku fizyka miała imponujący sukces: mechanika działała, elektromagnetyzm dojrzewał, a technologia potwierdzała teorię każdego dnia.',
    duration: '11 min',
    visual: 'certainty',
    intro:
      'Ta lekcja pokazuje atmosferę przed przełomem: nie ignorancję, lecz pewność zbudowaną na realnych osiągnięciach.',
    keyIdeas: [
      'Mechanika Newtona dawała precyzyjne przewidywania.',
      'Równania Maxwella połączyły elektryczność, magnetyzm i światło.',
      'Pozostałe problemy wyglądały jak drobne korekty, nie zapowiedź rewolucji.',
    ],
    sections: [
      {
        heading: 'Triumf przewidywania',
        body: [
          'Fizycy potrafili obliczać orbity planet, projektować maszyny i rozumieć zjawiska cieplne coraz lepiej. Nauka dawała technologię, a technologia wzmacniała zaufanie do nauki.',
          'W takim świecie łatwo uznać, że fundamenty są gotowe. Jeśli coś się nie zgadzało, wyglądało raczej na brak dokładnego pomiaru niż na problem z samym fundamentem.',
        ],
      },
      {
        heading: 'Maxwell i światło',
        body: [
          'Równania Maxwella pokazały, że światło jest falą elektromagnetyczną. To był ogromny sukces, ale niósł ukryte pytanie: skoro fala zwykle rozchodzi się w jakimś ośrodku, to w czym rozchodzi się światło?',
          'Dźwięk potrzebuje powietrza, fala na wodzie potrzebuje wody. Wielu fizyków założyło więc, że światło potrzebuje eteru.',
        ],
      },
      {
        heading: 'Drobne chmury na horyzoncie',
        body: [
          'Niektóre wyniki nie pasowały do prostego obrazu. Prędkość światła zachowywała się dziwnie, a próby wykrycia eteru nie dawały oczekiwanego rezultatu. Właśnie z takich pozornie małych pęknięć wyrasta nowa fizyka.',
        ],
      },
    ],
    closing:
      'Rewolucje naukowe często zaczynają się nie wtedy, gdy nic nie wiemy, lecz wtedy, gdy zbyt dobrze ufamy staremu obrazowi.',
  },
  {
    number: 5,
    slug: 'eksperymenty-ze-swiatlem',
    title: 'Pierwsze eksperymenty ze światłem - coś jest nie tak',
    deck:
      'Światło nie zachowywało się jak zwykły pocisk ani jak fala w łatwym do uchwycenia ośrodku. Pomiary zaczęły podważać klasyczną intuicję.',
    duration: '15 min',
    visual: 'light',
    intro:
      'Światło jest bohaterem szczególnej teorii względności, bo wymusza zmianę sposobu myślenia o czasie i przestrzeni.',
    keyIdeas: [
      'Światło ma skończoną, bardzo dużą prędkość.',
      'Równania Maxwella przewidują jedną konkretną prędkość światła.',
      'Klasyczne dodawanie prędkości zaczyna prowadzić do sprzeczności.',
    ],
    sections: [
      {
        heading: 'Światło nie jest natychmiastowe',
        body: [
          'Dzisiaj wiemy, że światło w próżni porusza się z prędkością około 300 000 km/s. To ogromna wartość, ale nie nieskończona. Sygnały świetlne potrzebują czasu, żeby dotrzeć z miejsca na miejsce.',
          'Już samo to zmienia wyobrażenie obserwacji. Patrząc na gwiazdy, widzisz przeszłość. Nawet w laboratorium każdy pomiar światłem ma opóźnienie, choć zwykle tak małe, że go nie zauważasz.',
        ],
      },
      {
        heading: 'Problem z dodawaniem prędkości',
        body: [
          'W klasycznej intuicji, jeśli biegniesz i rzucasz piłkę, prędkość piłki względem ziemi zależy od twojego biegu. Naturalnie oczekiwano więc, że obserwator jadący w stronę promienia światła zmierzy inną prędkość niż obserwator uciekający od promienia.',
          'Eksperymenty i teoria elektromagnetyzmu sugerowały coś innego: prędkość światła w próżni ma tę samą wartość dla każdego obserwatora inercjalnego.',
        ],
      },
      {
        heading: 'Cena za stałą prędkość światła',
        body: [
          'Jeżeli prędkość to droga podzielona przez czas, a prędkość światła ma pozostać ta sama dla różnych obserwatorów, to coś musi się zmienić w pomiarach drogi albo czasu. Einstein potraktował tę cenę poważnie.',
        ],
      },
    ],
    closing:
      'Światło nie jest tylko szybkim obiektem. Jest sygnałem granicznym, który zmusza fizykę do przebudowania pojęcia pomiaru.',
  },
  {
    number: 6,
    slug: 'problem-eteru-swietlnego',
    title: 'Problem eteru świetlnego - poszukiwanie nieistniejącego medium',
    deck:
      'Eter miał być niewidzialnym ośrodkiem dla fal świetlnych. Problem w tym, że im dokładniej go szukano, tym bardziej wyglądał na zbędny.',
    duration: '14 min',
    visual: 'ether',
    intro:
      'Historia eteru pokazuje, jak nauka potrafi porzucić elegancki pomysł, gdy pomiary nie chcą się do niego dopasować.',
    keyIdeas: [
      'Fale kojarzono z ośrodkiem, więc światłu przypisano eter.',
      'Ruch Ziemi przez eter powinien zmieniać mierzoną prędkość światła.',
      'Brak wykrycia eteru otworzył drogę do prostszego założenia Einsteina.',
    ],
    sections: [
      {
        heading: 'Dlaczego eter wydawał się rozsądny',
        body: [
          'Fala dźwiękowa rozchodzi się w powietrzu. Fala morska rozchodzi się w wodzie. Skoro światło jest falą, wielu fizyków uznało, że ono też musi mieć ośrodek. Nazwano go eterem świetlnym.',
          'Eter miał wypełniać całą przestrzeń, być niezwykle subtelny i jednocześnie umożliwiać rozchodzenie się światła. Brzmiało to dziwnie, ale pasowało do ówczesnego sposobu myślenia o falach.',
        ],
      },
      {
        heading: 'Wiatr eteru',
        body: [
          'Jeśli Ziemia porusza się przez eter, powinniśmy wykryć efekt podobny do wiatru. Światło biegnące z wiatrem eteru i pod wiatr powinno mieć odrobinę inne czasy przelotu.',
          'Najbardziej znane pomiary Michelsona i Morleya nie znalazły oczekiwanej różnicy. Wynik zerowy był kłopotliwy, bo usuwał spod nóg prostą wersję eteru.',
        ],
      },
      {
        heading: 'Einstein usuwa ośrodek',
        body: [
          'Einstein nie próbował ratować eteru dodatkowymi założeniami. Przyjął, że prawa fizyki są takie same w każdym układzie inercjalnym, a prędkość światła w próżni jest stała. Eter przestał być potrzebny.',
        ],
      },
    ],
    closing:
      'Czasem największy postęp polega na usunięciu elementu, który wydawał się konieczny, ale nie wykonywał żadnej mierzalnej pracy.',
  },
  {
    number: 7,
    slug: 'mlody-einstein',
    title: 'Młody Einstein i jego rewolucyjne myślenie',
    deck:
      'Einstein nie wygrał dzięki większemu laboratorium. Jego przewagą było uparte pytanie, co naprawdę mierzy obserwator.',
    duration: '12 min',
    visual: 'einstein',
    intro:
      'Ta lekcja przedstawia sposób myślenia, który doprowadził do szczególnej teorii względności: mniej ukrytych mechanizmów, więcej analizy pomiaru.',
    keyIdeas: [
      'Einstein używał eksperymentów myślowych jako narzędzia fizyki.',
      'Pytał, co zobaczy obserwator poruszający się razem ze światłem.',
      'Skupił się na operacyjnych definicjach czasu i jednoczesności.',
    ],
    sections: [
      {
        heading: 'Eksperyment myślowy',
        body: [
          'Eksperyment myślowy to nie fantazja oderwana od fizyki. To precyzyjna scena, w której sprawdzamy konsekwencje założeń. Einstein często pytał: co zmierzy obserwator, jeśli porusza się tak a tak?',
          'Jedno z jego młodzieńczych pytań brzmiało: co zobaczyłbym, gdybym gonił promień światła? W klasycznej intuicji można próbować dogonić każdą falę. Dla światła prowadziło to jednak do sprzeczności z elektromagnetyzmem.',
        ],
      },
      {
        heading: 'Zegary zamiast metafizyki',
        body: [
          'Einstein potraktował czas praktycznie. Zapytał nie czym czas jest sam w sobie, lecz jak go mierzymy i jak synchronizujemy zegary oddalone od siebie.',
          'Jeśli synchronizacja wymaga sygnałów świetlnych, a światło ma skończoną prędkość, to pojęcie jednoczesności przestaje być oczywiste. To jeden z najgłębszych kroków w całej teorii.',
        ],
      },
      {
        heading: 'Prostota jako odwaga',
        body: [
          'Zamiast dodawać kolejne własności eteru, Einstein przyjął dwa proste postulaty i pozwolił im zmienić geometrię pomiarów. Prostota nie oznaczała łatwości. Oznaczała gotowość porzucenia starej intuicji.',
        ],
      },
    ],
    closing:
      'Rewolucyjne było nie hasło, że wszystko jest względne, lecz dokładne pytanie: które wielkości naprawdę muszą być takie same dla wszystkich?',
  },
  {
    number: 8,
    slug: 'dwa-postulaty',
    title: 'Dwa fundamentalne postulaty szczególnej teorii względności',
    deck:
      'Cała szczególna teoria względności wyrasta z dwóch zdań: prawa fizyki są takie same w układach inercjalnych, a prędkość światła w próżni jest stała.',
    duration: '16 min',
    visual: 'postulates',
    intro:
      'To centralna lekcja kursu. Zobaczysz, że dziwne konsekwencje teorii nie są dodatkowymi sztuczkami, lecz logiczną ceną dwóch prostych postulatów.',
    keyIdeas: [
      'Nie ma wyróżnionego układu inercjalnego.',
      'Każdy obserwator inercjalny mierzy tę samą prędkość światła w próżni.',
      'Czas i przestrzeń muszą dostosować się do tych zasad.',
    ],
    sections: [
      {
        heading: 'Postulat pierwszy: równość praw fizyki',
        body: [
          'Jeśli jesteś w idealnie gładko jadącym pociągu bez okien, lokalny eksperyment mechaniczny nie powie ci, czy pociąg stoi, czy jedzie jednostajnie. Prawa fizyki mają tę samą postać w każdym układzie inercjalnym.',
          'To nie znaczy, że wszystkie opisy mają te same liczby. Znaczy, że żaden układ inercjalny nie jest fizycznie uprzywilejowany jako absolutny spoczynek.',
        ],
      },
      {
        heading: 'Postulat drugi: stała prędkość światła',
        body: [
          'Każdy obserwator inercjalny, niezależnie od swojego jednostajnego ruchu, mierzy tę samą prędkość światła w próżni. To jest punkt, który najmocniej zderza się z codziennym dodawaniem prędkości.',
          'Jeśli dwie osoby poruszają się względem siebie i obie mają zmierzyć ten sam wynik dla światła, ich pomiary czasu i odległości nie mogą już być absolutnie wspólne.',
        ],
      },
      {
        heading: 'Konsekwencje są wymuszone',
        body: [
          'Dylatacja czasu, skrócenie długości i względność jednoczesności nie są ozdobami teorii. Są sposobem, w jaki natura utrzymuje oba postulaty naraz.',
        ],
      },
    ],
    closing:
      'Nie musisz od razu ufać intuicji relatywistycznej. Wystarczy konsekwentnie trzymać się dwóch postulatów i sprawdzać, co z nich wynika.',
  },
  {
    number: 9,
    slug: 'wzglednosc-czasu',
    title: 'Względność czasu - dlaczego zegary mogą chodzić różnie',
    deck:
      'Czas nie jest jednym kosmicznym metronomem. Zegary poruszające się względem obserwatora mogą odmierzać krótszy czas między tymi samymi zdarzeniami.',
    duration: '17 min',
    visual: 'time',
    intro:
      'Dylatacja czasu brzmi jak fantastyka, ale wynika z bardzo prostej konstrukcji: zegara świetlnego i stałej prędkości światła.',
    keyIdeas: [
      'Zegar świetlny mierzy czas przez odbicia impulsu światła.',
      'Dla obserwatora z zewnątrz światło w poruszającym się zegarze pokonuje dłuższą drogę.',
      'Skoro prędkość światła jest stała, dłuższa droga oznacza dłuższy czas.',
    ],
    sections: [
      {
        heading: 'Zegar świetlny',
        body: [
          'Wyobraź sobie dwa lustra ustawione naprzeciw siebie. Impuls światła odbija się między nimi: tik przy dolnym lustrze, tak przy górnym. Dla osoby lecącej razem z zegarem światło porusza się pionowo.',
          'Ten zegar jest prosty, ale wystarczy. Jeśli prędkość światła jest stała, liczba odbić może mierzyć upływ czasu.',
        ],
      },
      {
        heading: 'Ten sam zegar widziany z boku',
        body: [
          'Dla obserwatora, względem którego zegar się porusza, światło nie idzie pionowo. Musi po drodze przesuwać się także w bok, razem z zegarem. Jego ścieżka jest ukośna i dłuższa.',
          'Ponieważ światło nie może przyspieszyć ponad swoją stałą prędkość, dłuższa droga wymaga dłuższego czasu. Obserwator z boku stwierdza więc, że poruszający się zegar tyka wolniej.',
        ],
      },
      {
        heading: 'To nie złudzenie optyczne',
        body: [
          'Dylatacja czasu nie wynika z opóźnienia obrazu ani z niedoskonałości zegara. Dotyczy samego odstępu czasu mierzonego między zdarzeniami. Potwierdzają ją m.in. cząstki elementarne żyjące dłużej przy dużych prędkościach oraz poprawki w systemach nawigacji satelitarnej.',
        ],
      },
    ],
    closing:
      'Czas pozostaje lokalnie normalny dla każdego obserwatora. Różnice pojawiają się, gdy porównujemy zegary poruszające się względem siebie.',
  },
  {
    number: 10,
    slug: 'wzglednosc-przestrzeni',
    title: 'Względność przestrzeni - kurczenie się obiektów',
    deck:
      'Długość obiektu nie jest absolutna. Obiekt poruszający się względem obserwatora jest krótszy w kierunku ruchu, choć sam tego u siebie nie zauważa.',
    duration: '15 min',
    visual: 'space',
    intro:
      'Skrócenie długości jest drugą stroną tej samej zmiany, która daje dylatację czasu. Przestrzeń i czas dopasowują się razem.',
    keyIdeas: [
      'Długość wymaga jednoczesnego pomiaru położeń obu końców.',
      'Jednoczesność zależy od układu odniesienia.',
      'Skrócenie zachodzi tylko w kierunku ruchu.',
    ],
    sections: [
      {
        heading: 'Jak mierzy się długość w ruchu',
        body: [
          'Gdy linijka leży na stole, możesz spokojnie porównać jej końce. Gdy obiekt pędzi obok ciebie, musisz ustalić położenie jego przodu i tyłu w tej samej chwili według twoich zegarów.',
          'Właśnie tutaj pojawia się relatywistyczna subtelność: obserwatorzy poruszający się względem siebie nie zawsze zgadzają się, które zdarzenia są jednoczesne.',
        ],
      },
      {
        heading: 'Kurczenie wzdłuż ruchu',
        body: [
          'Dla obserwatora, względem którego obiekt się porusza, długość w kierunku ruchu jest mniejsza. Szerokość i wysokość prostopadłe do ruchu nie ulegają takiemu skróceniu.',
          'Obiekt nie czuje, że się kurczy. W swoim własnym układzie spoczynkowym ma normalną długość. Skrócenie jest relacją między pomiarem obserwatora a ruchem obiektu.',
        ],
      },
      {
        heading: 'Połączenie z czasem',
        body: [
          'Dylatacja czasu i skrócenie długości nie są niezależnymi efektami. Razem sprawiają, że prędkość światła pozostaje taka sama dla różnych obserwatorów, a prawa fizyki zachowują spójną postać.',
        ],
      },
    ],
    closing:
      'Przestrzeń nie jest sztywnym pudełkiem. To część układu pomiarów, który zmienia się razem z czasem, gdy obserwatorzy poruszają się względem siebie.',
  },
];

export const getLessonBySlug = (slug: string) => lessons.find((lesson) => lesson.slug === slug);
