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
  visualCaption: string;
  intro: string;
  memoryAnchor: string;
  misconception: string;
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
      'Ruch nie jest naklejką na obiekcie. Ruch jest relacją między obiektem a wybranym tłem pomiaru.',
    duration: '18 min',
    visual: 'motion',
    visualCaption:
      'Dwie kostki na jednej linii pokazują ten sam ruch opisany z różnych punktów widzenia: droga jest tłem, a nie niewidzialnym sędzią prawdy.',
    intro:
      'Zaczynamy od pozornie banalnego pytania: co to znaczy, że coś się porusza? Odpowiedź jest pierwszą cegłą całej teorii względności. Nie da się mówić o ruchu bez wskazania sceny, względem której ten ruch mierzymy.',
    memoryAnchor:
      'Ruch jest jak adres w mieście: sam numer domu nic nie znaczy, dopóki nie powiesz, przy której ulicy go szukasz.',
    misconception:
      'Pułapka: myśleć, że spoczynek jest stanem absolutnym, a ruch wymaga specjalnego wyjaśnienia. W fizyce oba są opisami względem wybranego układu.',
    keyIdeas: [
      'Ruch wymaga punktu odniesienia.',
      'Spoczynek też jest względny.',
      'Prędkość mówi, jak szybko zmienia się położenie względem wybranego tła.',
    ],
    sections: [
      {
        heading: 'Ruch potrzebuje tła',
        body: [
          'Gdy mówisz, że samochód jedzie 80 km/h, zwykle pomijasz końcówkę zdania: względem drogi. Dla pasażera kubek w uchwycie może być nieruchomy. Dla osoby stojącej przy jezdni ten sam kubek pędzi razem z samochodem. Dla satelity nad Ziemią dochodzi jeszcze obrót planety.',
          'To nie są trzy konkurencyjne prawdy. To trzy opisy tej samej sytuacji z trzema różnymi tłami. Fizyka nie pyta najpierw: kto ma rację? Pyta: jaki układ odniesienia wybrałeś i czy konsekwentnie go używasz?',
        ],
      },
      {
        heading: 'Adres ruchu: położenie, droga, prędkość',
        body: [
          'Położenie odpowiada na pytanie: gdzie coś jest w naszej siatce pomiarowej. Droga mówi, jaką trasę pokonało. Prędkość mówi, jak szybko położenie się zmienia. Każde z tych pojęć ma ukryty dopisek: względem czego.',
          'Wyobraź sobie, że idziesz korytarzem pociągu z tyłu do przodu. Względem wagonu idziesz powoli. Względem peronu poruszasz się szybko, bo wagon niesie cię razem ze sobą. Względem drugiego pociągu jadącego obok możesz nawet wydawać się prawie nieruchomy.',
        ],
      },
      {
        heading: 'Dlaczego mózg lubi absolutny spoczynek',
        body: [
          'Na co dzień ziemia pod stopami wydaje się naturalnym tłem. Kubek na stole stoi, dom stoi, ulica stoi. Ten nawyk jest użyteczny, bo większość naszych działań dzieje się blisko powierzchni Ziemi i przy małych prędkościach.',
          'Ale Ziemia obraca się, krąży wokół Słońca, a Słońce porusza się w Galaktyce. Jeśli szukasz absolutnego spoczynku, tło ucieka ci spod nóg. Względność zaczyna się od uczciwego przyznania: wybieramy tło, nie odkrywamy jedynego kosmicznego tła.',
        ],
      },
      {
        heading: 'Most do Einsteina',
        body: [
          'W fizyce Newtona ta względność ruchu jest już obecna, ale czas i przestrzeń zostają wspólne dla wszystkich. Einstein pójdzie krok dalej: skoro obserwatorzy mogą inaczej opisywać ruch, to przy świetle muszą inaczej mierzyć także czas i długość.',
          'Reguła na dalszy kurs brzmi: zanim zapytasz, co się stało, zapytaj, kto mierzy, czym mierzy i względem jakiego tła. Ta jedna reguła rozbroi większość paradoksów teorii względności.',
        ],
      },
    ],
    closing:
      'Zapamiętaj: ruch nie mieszka w obiekcie. Ruch mieszka w relacji między obiektem a wybranym układem odniesienia.',
  },
  {
    number: 2,
    slug: 'uklady-odniesienia',
    title: 'Układy odniesienia w codziennym życiu',
    deck:
      'Układ odniesienia to obserwator z własną siatką miejsc i własnym sposobem ustawiania zegarów.',
    duration: '20 min',
    visual: 'frames',
    visualCaption:
      'Dwie przesunięte ramki pokazują dwie siatki pomiarowe. Punkt może mieć inne współrzędne w każdej ramce, choć zdarzenie jest jedno.',
    intro:
      'Układ odniesienia brzmi technicznie, ale jest bardzo praktyczny. To sposób, w jaki obserwator porządkuje świat: gdzie coś jest, kiedy coś się stało i jak szybko zmieniło położenie.',
    memoryAnchor:
      'Układ odniesienia jest jak mapa z własną legendą: pokazuje ten sam teren, ale wybiera własne zero, kierunki i podziałkę.',
    misconception:
      'Pułapka: traktować układ odniesienia jak subiektywną opinię. To nie opinia, lecz kompletna procedura pomiaru.',
    keyIdeas: [
      'Układ odniesienia to obserwator plus metoda pomiaru miejsc i czasów.',
      'W różnych układach te same zdarzenia mogą mieć inne współrzędne.',
      'Szczególna teoria względności dotyczy układów inercjalnych, czyli nieprzyspieszających.',
    ],
    sections: [
      {
        heading: 'Pociąg jako przenośne laboratorium',
        body: [
          'Wyobraź sobie piłkę podrzuconą pionowo w jadącym pociągu. Pasażer widzi prosty ruch w górę i w dół. Osoba na peronie widzi łuk, bo piłka razem z pociągiem przesuwa się do przodu. Oba opisy dotyczą tego samego zdarzenia.',
          'Gdyby pasażer nie widział okien, a pociąg jechał idealnie równo, lokalne doświadczenia mechaniczne nie zdradziłyby mu ruchu względem peronu. Piłka wraca do ręki, herbata nie przelewa się dziwnie, przedmioty zachowują się normalnie.',
        ],
      },
      {
        heading: 'Zdarzenia są punktami w opowieści',
        body: [
          'W teorii względności nie wystarczy mówić o przedmiotach. Ważniejsze są zdarzenia: błysk lampy, zamknięcie drzwi, spotkanie dwóch końców linijki, tyknięcie zegara. Zdarzenie ma miejsce i czas.',
          'To jak pinezka wbita w mapę i kalendarz jednocześnie. Różni obserwatorzy mogą inaczej podpisać tę pinezkę: inne x, inne t. Ale jeśli opisują konsekwentnie, mogą przeliczyć swoje współrzędne na współrzędne drugiego obserwatora.',
        ],
      },
      {
        heading: 'Inercjalny znaczy bez szarpania',
        body: [
          'Układ inercjalny to taki, który nie przyspiesza i nie skręca. W praktyce oznacza scenę, na której samotny przedmiot nie zaczyna sam z siebie uciekać w bok. Jeśli nic go nie pcha, zachowuje swój ruch jednostajny.',
          'Samochód ruszający spod świateł nie jest dobrym układem inercjalnym, bo czujesz wciskanie w fotel. Wagon jadący prosto ze stałą prędkością jest dużo lepszym przybliżeniem. Szczególna teoria względności zaczyna właśnie od takich spokojnych układów.',
        ],
      },
      {
        heading: 'Co jest wspólne, a co zależy od ramki',
        body: [
          'W klasycznej fizyce zakładano, że obserwatorzy różnią się opisem położeń i prędkości, ale mają ten sam czas. Einstein pokaże, że przy świetle ten kompromis nie wystarczy.',
          'Od tej lekcji noś w głowie obraz dwóch przezroczystych map nałożonych na siebie. To samo zdarzenie może leżeć w innym miejscu kratki, ale prawa opisujące zdarzenia mają pozostać spójne.',
        ],
      },
    ],
    closing:
      'Układ odniesienia to mapa obserwatora. Teoria względności pyta, jak tłumaczyć opisy między mapami, kiedy światło ma tę samą prędkość dla wszystkich.',
  },
  {
    number: 3,
    slug: 'fizyka-klasyczna-newtona',
    title: 'Fizyka klasyczna Newtona - świat mechaniczny jak zegarek',
    deck:
      'Newton dał światu potężny obraz: jedna scena przestrzeni, jeden zegar czasu i ruch ciał zmieniany przez siły.',
    duration: '19 min',
    visual: 'clockwork',
    visualCaption:
      'Zegar i wskazówki symbolizują klasyczną intuicję: jeden czas dla wszystkich obserwatorów i mechaniczny świat, który można obliczać.',
    intro:
      'Nie da się docenić Einsteina bez zrozumienia, jak dobrze działał Newton. Klasyczna fizyka nie była głupia. Była tak skuteczna, że przez długi czas wyglądała jak ostateczny język natury.',
    memoryAnchor:
      'Świat Newtona jest jak teatr: wszyscy aktorzy grają na jednej scenie i słyszą ten sam zegar za kulisami.',
    misconception:
      'Pułapka: mówić, że Einstein po prostu obalił Newtona. Lepiej powiedzieć: Einstein pokazał, kiedy newtonowski teatr jest tylko przybliżeniem.',
    keyIdeas: [
      'Newton zakładał absolutny czas i absolutną przestrzeń.',
      'Prawa ruchu świetnie opisują codzienne prędkości.',
      'W klasycznym obrazie prędkości po prostu się dodają.',
    ],
    sections: [
      {
        heading: 'Jedna scena, jeden zegar',
        body: [
          'W fizyce Newtona przestrzeń działa jak wielka sala, w której poruszają się obiekty. Czas działa jak jeden wspólny metronom dla całego Wszechświata. Obserwatorzy mogą iść, jechać albo płynąć, ale wszyscy żyją w tej samej sali i słyszą ten sam rytm.',
          'Ten obraz jest niezwykle wygodny. Jeśli dwa zdarzenia są jednoczesne dla jednej osoby, są jednoczesne dla wszystkich. Jeśli linijka ma metr dla ciebie, ma metr dla każdego. Różnimy się tylko tym, jak szybko mijamy obiekty.',
        ],
      },
      {
        heading: 'Dodawanie prędkości: zdrowy rozsądek',
        body: [
          'Jeśli wagon jedzie 50 km/h, a pasażer idzie w nim 5 km/h w kierunku jazdy, to dla osoby na peronie pasażer porusza się 55 km/h. Jeśli idzie przeciwnie, ma 45 km/h. Ta arytmetyka pasuje do codzienności.',
          'Dlatego tak trudno poczuć teorię względności intuicyjnie. Nasz mózg jest wytrenowany przez świat małych prędkości, gdzie klasyczne dodawanie działa prawie idealnie. Przy świetle ten zwyczaj zacznie pękać.',
        ],
      },
      {
        heading: 'Prawa ruchu jako instrukcja mechanizmu',
        body: [
          'Pierwsza zasada mówi: bez wypadkowej siły ciało zachowuje ruch jednostajny. Druga łączy siłę z przyspieszeniem. Trzecia przypomina, że oddziaływania występują parami. To brzmi skromnie, ale pozwoliło obliczać planety, maszyny, pociski i mosty.',
          'Newtonowski świat jest przewidywalny jak dobry mechanizm zegarowy. Jeśli znasz położenia, prędkości i siły, możesz przewidzieć następne ruchy. Taki sukces naturalnie budował zaufanie do fundamentów.',
        ],
      },
      {
        heading: 'Gdzie klasyczny zegar zaczyna się spóźniać',
        body: [
          'Przy prędkościach codziennych teoria Newtona pozostaje świetnym narzędziem. Problem nie polega na tym, że samochody, piłki i planety nagle przestały pasować do rachunków. Problem pojawia się przy elektromagnetyzmie i prędkości światła.',
          'Jeśli światło zachowuje tę samą prędkość dla różnych obserwatorów, nie da się zachować jednocześnie zwykłego dodawania prędkości, absolutnego czasu i absolutnej długości. Który element teatru trzeba będzie przebudować? Odpowiedź: scenę i zegar naraz.',
        ],
      },
    ],
    closing:
      'Newtonowski zegarek nadal działa w codzienności. Teoria względności pokazuje, że przy świetle cały zegarek jest częścią układu pomiarowego.',
  },
  {
    number: 4,
    slug: 'xix-wieczna-pewnosc',
    title: 'Dlaczego XIX-wieczni fizycy myśleli, że wszystko już wiedzą',
    deck:
      'Przed rewolucją fizyka wyglądała jak prawie skończony gmach. Najciekawsze okazały się drobne rysy w fundamentach.',
    duration: '18 min',
    visual: 'certainty',
    visualCaption:
      'Rosnące słupki pokazują narastającą pewność fizyki klasycznej. Małe pęknięcie w podstawie będzie ważniejsze niż cały wykres sukcesów.',
    intro:
      'Ta lekcja jest o atmosferze przed przełomem. Nie o arogancji ludzi, którzy nic nie wiedzieli, lecz o pewności zbudowanej na realnych triumfach teorii i technologii.',
    memoryAnchor:
      'Fizyka XIX wieku była jak ukończony pałac z jedną wilgotną plamą na ścianie. Wszyscy widzieli pałac, nieliczni zrozumieli plamę.',
    misconception:
      'Pułapka: wyobrażać sobie, że nauka zmienia zdanie tylko wtedy, gdy stary model całkowicie zawodzi. Często wystarczy mała anomalia, jeśli dotyka fundamentu.',
    keyIdeas: [
      'Mechanika Newtona dawała precyzyjne przewidywania.',
      'Równania Maxwella połączyły elektryczność, magnetyzm i światło.',
      'Pozostałe problemy wyglądały jak drobne korekty, nie zapowiedź rewolucji.',
    ],
    sections: [
      {
        heading: 'Triumf, który był zasłużony',
        body: [
          'Fizycy potrafili przewidywać orbity planet, projektować maszyny parowe, rozumieć ciśnienie gazów i budować technologie elektryczne. To nie była pusta wiara. Nauka działała w warsztacie, obserwatorium i fabryce.',
          'Gdy teoria tyle razy trafia w wynik, naturalnie zaczynasz wierzyć, że fundament jest poprawny. Jeśli zostają problemy, brzmią jak zadania techniczne: lepszy pomiar, dokładniejszy rachunek, brakujący szczegół.',
        ],
      },
      {
        heading: 'Maxwell zapala lampę ostrzegawczą',
        body: [
          'Równania Maxwella połączyły elektryczność, magnetyzm i światło w jedną teorię. Światło okazało się falą elektromagnetyczną. To był triumf, ale triumf z ukrytym pytaniem: skoro fala zwykle potrzebuje ośrodka, to w czym faluje światło?',
          'Dźwięk potrzebuje powietrza, fala na wodzie potrzebuje wody. Przez analogię wielu fizyków przyjęło eter świetlny. Nie był widoczny, ale wydawał się konieczny, tak jak powietrze bywa niewidoczne dla dźwięku.',
        ],
      },
      {
        heading: 'Anomalia jako nauczyciel',
        body: [
          'Najważniejsze anomalie są niewygodne, bo nie krzyczą. Wynik eksperymentu może być zerowy, przesunięcie może być mniejsze niż oczekiwano, równania mogą zachowywać się dziwnie przy zmianie układu odniesienia. Łatwo uznać to za szum.',
          'Ale gdy drobny problem dotyczy czasu, przestrzeni albo światła, nie jest już kosmetyką. Jest jak źle ustawiony kamień w fundamencie. Możesz budować wyżej, ale pęknięcie będzie wracało.',
        ],
      },
      {
        heading: 'Dlaczego rewolucja potrzebuje starego porządku',
        body: [
          'Einstein nie zaczynał od pustki. Jego teoria była odpowiedzią na napięcie między bardzo udaną mechaniką, bardzo udanym elektromagnetyzmem i nieudanymi próbami pogodzenia ich w starym obrazie.',
          'Dobra lekcja z historii nauki brzmi: im bardziej teoria jest udana, tym precyzyjniej trzeba rozumieć, gdzie przestaje działać. Rewolucja nie niszczy sukcesu Newtona i Maxwella. Ona wyjaśnia, dlaczego sukces miał granice.',
        ],
      },
    ],
    closing:
      'Pamiętaj o pałacu i plamie: wielka teoria może być prawie idealna, a mimo to mała rysa może prowadzić do nowej architektury świata.',
  },
  {
    number: 5,
    slug: 'eksperymenty-ze-swiatlem',
    title: 'Pierwsze eksperymenty ze światłem - coś jest nie tak',
    deck:
      'Światło zachowuje się jak graniczny posłaniec natury: zawsze niesie wiadomość z tą samą prędkością w próżni.',
    duration: '22 min',
    visual: 'light',
    visualCaption:
      'Żółta wiązka przechodzi przez kolejne znaczniki bez zmiany prędkości. To obraz problemu: obserwatorzy zmieniają ruch, ale światło pozostaje stałym kurierem.',
    intro:
      'Światło jest bohaterem szczególnej teorii względności, bo nie pozwala zachować wszystkich klasycznych przyzwyczajeń. Gdy próbujemy traktować je jak bardzo szybką piłkę, rachunek zaczyna mówić coś niemożliwego.',
    memoryAnchor:
      'Światło jest jak kurier z zasadą firmy: niezależnie od tego, kto go goni i kto przed nim ucieka, w próżni doręcza zawsze z tą samą prędkością.',
    misconception:
      'Pułapka: myśleć, że stała prędkość światła oznacza tylko, że światło jest bardzo szybkie. Kluczowe jest to, że jego prędkość jest taka sama dla różnych obserwatorów inercjalnych.',
    keyIdeas: [
      'Światło ma skończoną, bardzo dużą prędkość.',
      'Równania Maxwella przewidują jedną konkretną prędkość światła.',
      'Klasyczne dodawanie prędkości zaczyna prowadzić do sprzeczności.',
    ],
    sections: [
      {
        heading: 'Światło nie jest natychmiastowe',
        body: [
          'Dzisiaj wiemy, że światło w próżni porusza się z prędkością około 300 000 km/s. To ogromna wartość, ale nie nieskończona. Słońce nie pokazuje nam swojego absolutnego teraz, tylko obraz sprzed około ośmiu minut.',
          'Już ta skończoność zmienia sens obserwacji. Patrzenie jest odbieraniem sygnałów z opóźnieniem. W codziennym pokoju opóźnienie jest absurdalnie małe, ale w astronomii i w precyzyjnej fizyce staje się częścią opisu świata.',
        ],
      },
      {
        heading: 'Dlaczego piłka nie jest dobrym modelem światła',
        body: [
          'Jeśli biegniesz i rzucasz piłkę, osoba na chodniku doda mniej więcej twoją prędkość do prędkości piłki. Ten model jest tak naturalny, że chcemy użyć go do wszystkiego. Ale światło nie zgadza się być taką piłką.',
          'Gdyby klasyczne dodawanie prędkości działało dla światła, obserwator lecący w stronę promienia powinien zmierzyć większą prędkość światła, a obserwator uciekający mniejszą. Równania Maxwella i eksperymenty prowadziły do innego obrazu: prędkość światła w próżni jest jedna.',
        ],
      },
      {
        heading: 'Cena stałego kuriera',
        body: [
          'Prędkość to droga podzielona przez czas. Jeśli różni obserwatorzy mają zgodzić się co do prędkości światła, choć poruszają się względem siebie, coś musi ustąpić w ich pomiarach drogi i czasu.',
          'To jest moment, w którym teoria względności przestaje być hasłem, a staje się koniecznością. Nie chodzi o dziwność dla dziwności. Chodzi o zachowanie spójności pomiarów, gdy światło ma być tym samym kurierem w każdym układzie inercjalnym.',
        ],
      },
      {
        heading: 'Co ta lekcja przygotowuje',
        body: [
          'Dalej pojawi się eter, czyli próba uratowania starego obrazu przez dodanie niewidzialnego ośrodka. To dobry przykład pomysłu, który był logiczny w swojej epoce, ale przestał być potrzebny, gdy Einstein odważył się potraktować stałość światła jako zasadę.',
          'Zapamiętaj konflikt: piłki dodają prędkości, światło nie. Ta różnica będzie źródłem dylatacji czasu, skrócenia długości i względności jednoczesności.',
        ],
      },
    ],
    closing:
      'Światło jest stałym kurierem. Jeśli kurier nie zmienia prędkości, obserwatorzy muszą inaczej mierzyć trasę i czas doręczenia.',
  },
  {
    number: 6,
    slug: 'problem-eteru-swietlnego',
    title: 'Problem eteru świetlnego - poszukiwanie nieistniejącego medium',
    deck:
      'Eter miał być niewidzialną wodą dla fal świetlnych. Eksperymenty pokazały, że ta woda nie zostawia śladu.',
    duration: '21 min',
    visual: 'ether',
    visualCaption:
      'Ukośne pasy sugerują hipotetyczny wiatr eteru, a czerwona wiązka światła przecina go bez oczekiwanej różnicy czasu.',
    intro:
      'Historia eteru jest świetną lekcją myślenia naukowego. Pomysł nie był głupi. Był rozsądnym przedłużeniem znanych fal. Problem w tym, że natura nie chciała zapłacić żadnym pomiarem za jego istnienie.',
    memoryAnchor:
      'Eter był jak niewidzialna rzeka, przez którą miała płynąć Ziemia. Fizycy szukali nurtu, ale łódka nie znosiła na bok.',
    misconception:
      'Pułapka: śmiać się z eteru jako oczywistego absurdu. W epoce fal mechanicznych był sensowną hipotezą. Przegrał nie dlatego, że brzmiał dziwnie, lecz dlatego, że nie dawał oczekiwanego śladu.',
    keyIdeas: [
      'Fale kojarzono z ośrodkiem, więc światłu przypisano eter.',
      'Ruch Ziemi przez eter powinien zmieniać mierzoną prędkość światła.',
      'Brak wykrycia eteru otworzył drogę do prostszego założenia Einsteina.',
    ],
    sections: [
      {
        heading: 'Dlaczego eter wydawał się potrzebny',
        body: [
          'Dźwięk rozchodzi się w powietrzu. Fala na jeziorze rozchodzi się w wodzie. Drganie struny potrzebuje struny. Jeśli światło jest falą, to pytanie o ośrodek wydawało się naturalne: co właściwie faluje?',
          'Eter miał wypełniać całą przestrzeń, być bardzo subtelny, przenikać materię i jednocześnie pozwalać światłu rozchodzić się z ogromną prędkością. Brzmi egzotycznie, ale było próbą zachowania znanej intuicji: fala potrzebuje czegoś, co faluje.',
        ],
      },
      {
        heading: 'Wiatr eteru i pomysł pomiaru',
        body: [
          'Jeśli Ziemia porusza się przez eter, powinniśmy czuć odpowiednik wiatru. Nie na skórze, lecz w czasie przelotu światła. Promień wysłany zgodnie z ruchem przez eter i promień wysłany poprzecznie powinny wrócić w minimalnie różnych momentach.',
          'Eksperyment Michelsona i Morleya był pomysłowy właśnie dlatego, że próbował zmierzyć tę maleńką różnicę interferencją światła. Gdyby eter był rzeką, układ miał wykryć, że płyniemy raz z nurtem, raz w poprzek nurtu.',
        ],
      },
      {
        heading: 'Wynik zerowy nie jest niczym',
        body: [
          'Oczekiwanej różnicy nie znaleziono. Taki wynik bywa bardziej kłopotliwy niż spektakularne odkrycie. Mówi: twój model przewiduje efekt, którego nie ma. Możesz poprawiać model, ale każda poprawka robi się coraz mniej naturalna.',
          'Fizycy próbowali ratować eter dodatkowymi założeniami, na przykład skróceniem obiektów w ruchu przez eter. Einstein wybrał inną drogę: usunąć eter z fundamentów i zapytać, co zostaje, jeśli prędkość światła jest po prostu stała dla obserwatorów inercjalnych.',
        ],
      },
      {
        heading: 'Elegancja przez usunięcie',
        body: [
          'To ważny wzorzec nauki: czasem teoria staje się lepsza nie przez dodanie mechanizmu, ale przez usunięcie elementu, który nie wykonuje mierzalnej pracy. Eter miał wyjaśniać światło, ale nie dawał się wykryć tam, gdzie powinien.',
          'Po usunięciu eteru zostaje trudniejsze, ale czystsze pytanie: jak muszą zmienić się nasze pojęcia czasu i przestrzeni, aby prawa fizyki oraz prędkość światła były spójne dla wszystkich układów inercjalnych?',
        ],
      },
    ],
    closing:
      'Eter był niewidzialną rzeką bez nurtu. Einstein nie musiał jej lepiej ukrywać; mógł przestać jej potrzebować.',
  },
  {
    number: 7,
    slug: 'mlody-einstein',
    title: 'Młody Einstein i jego rewolucyjne myślenie',
    deck:
      'Einstein nie zaczynał od większego laboratorium, lecz od ostrzejszego pytania: co naprawdę mierzy obserwator?',
    duration: '19 min',
    visual: 'einstein',
    visualCaption:
      'Szkic twarzy i czerwona linia symbolizują eksperyment myślowy: patrzeć na pomiar z punktu widzenia obserwatora, nie z punktu widzenia ukrytego absolutu.',
    intro:
      'Einstein zmienił fizykę nie dlatego, że dodał bardziej skomplikowany mechanizm, lecz dlatego, że konsekwentnie oczyścił pytania. Co znaczy czas? Jak synchronizujemy zegary? Co może zmierzyć obserwator w ruchu?',
    memoryAnchor:
      'Einstein był jak detektyw pomiaru: zamiast pytać, gdzie ukrył się absolut, pytał, jakie ślady naprawdę widzi obserwator.',
    misconception:
      'Pułapka: myśleć, że eksperyment myślowy to luźna fantazja. U Einsteina to precyzyjny test konsekwencji założeń.',
    keyIdeas: [
      'Einstein używał eksperymentów myślowych jako narzędzia fizyki.',
      'Pytał, co zobaczy obserwator poruszający się razem ze światłem.',
      'Skupił się na operacyjnych definicjach czasu i jednoczesności.',
    ],
    sections: [
      {
        heading: 'Gonić promień światła',
        body: [
          'Jedno ze słynnych młodzieńczych pytań Einsteina brzmiało: co zobaczyłbym, gdybym poruszał się razem z promieniem światła? W świecie fal mechanicznych można sobie wyobrazić doganianie fali. W świecie Maxwella taki obraz robi się podejrzany.',
          'Gdyby dało się dogonić światło, obserwator widziałby zamrożoną falę elektromagnetyczną. Ale taka zamrożona fala nie pasowała do równań Maxwella. Pytanie było proste, a trafiało w środek konfliktu między intuicją a teorią.',
        ],
      },
      {
        heading: 'Definicja czasu przez zegary',
        body: [
          'Einstein nie zaczynał od metafizycznego pytania, czym jest czas sam w sobie. Pytał: jak go mierzymy? Jeśli w dwóch miejscach stoją zegary, skąd wiemy, że są zsynchronizowane? Musimy wysłać sygnał, a najlepszym sygnałem jest światło.',
          'To od razu wiąże czas z procedurą pomiaru. Jeśli synchronizacja zależy od światła, a światło ma skończoną i stałą prędkość, pojęcie jednoczesności przestaje być oczywiste. Nie wystarczy powiedzieć: zdarzyło się w tej samej chwili. Trzeba powiedzieć: według jakiej synchronizacji zegarów?',
        ],
      },
      {
        heading: 'Mniej ukrytego świata, więcej procedur',
        body: [
          'Stary obraz często pytał, co dzieje się względem niewidzialnego absolutu albo eteru. Einstein pytał, które pomiary może faktycznie wykonać obserwator. To przesunięcie jest ogromne: fizyka ma opisywać relacje między mierzalnymi zdarzeniami.',
          'Nie oznacza to, że wszystko jest dowolne. Przeciwnie: teoria staje się bardziej rygorystyczna, bo każde pojęcie musi mieć procedurę pomiarową. Jeśli mówisz o czasie, pokaż zegar. Jeśli mówisz o długości w ruchu, powiedz, jak porównujesz końce obiektu.',
        ],
      },
      {
        heading: 'Odwaga prostych postulatów',
        body: [
          'Zamiast ratować eter, Einstein przyjął dwa postulaty i pozwolił im prowadzić rachunek. Prostota była odważna, bo wymagała oddania czegoś bardzo znajomego: absolutnego czasu i absolutnej przestrzeni.',
          'W następnej lekcji te dwa postulaty staną się osią kursu. Wszystko, co potem zabrzmi dziwnie, będzie konsekwencją tej decyzji: zaufać spójności praw fizyki i stałej prędkości światła bardziej niż codziennemu nawykowi.',
        ],
      },
    ],
    closing:
      'Einstein nie pytał: co widzi absolut? Pytał: co może zmierzyć obserwator i jak różni obserwatorzy mogą uzgodnić swoje pomiary?',
  },
  {
    number: 8,
    slug: 'dwa-postulaty',
    title: 'Dwa fundamentalne postulaty szczególnej teorii względności',
    deck:
      'Dwa proste zdania zmuszają czas i przestrzeń do zmiany roli: prawa fizyki są takie same, a światło w próżni ma stałą prędkość.',
    duration: '24 min',
    visual: 'postulates',
    visualCaption:
      'Dwie ramy połączone żółtym mostem pokazują dwa postulaty: równoważność układów inercjalnych i stałość światła muszą działać jednocześnie.',
    intro:
      'To centralna lekcja kursu. Dylatacja czasu i skrócenie długości nie będą dodatkowymi efektami wrzuconymi do teorii. Będą ceną za jednoczesne utrzymanie dwóch bardzo mocnych zasad.',
    memoryAnchor:
      'Postulaty są jak dwie belki mostu. Jeśli obie mają zostać proste, cała konstrukcja drogi - czas i przestrzeń - musi się inaczej ułożyć.',
    misconception:
      'Pułapka: interpretować “wszystko jest względne” jako dowolność. W teorii względności względne są pewne pomiary, ale prawa i prędkość światła są bardzo sztywne.',
    keyIdeas: [
      'Nie ma wyróżnionego układu inercjalnego.',
      'Każdy obserwator inercjalny mierzy tę samą prędkość światła w próżni.',
      'Czas i przestrzeń muszą dostosować się do tych zasad.',
    ],
    sections: [
      {
        heading: 'Postulat pierwszy: brak uprzywilejowanej ramki',
        body: [
          'Jeśli jesteś w idealnie gładko jadącym pociągu bez okien, lokalny eksperyment mechaniczny nie powie ci, czy pociąg stoi, czy jedzie jednostajnie. Prawa fizyki mają tę samą postać w każdym układzie inercjalnym.',
          'To nie znaczy, że każdy obserwator dostaje te same liczby. Pasażer i osoba na peronie inaczej opiszą trajektorię piłki. Ale nie istnieje specjalny inercjalny tron, z którego opis byłby fizycznie bardziej prawdziwy.',
        ],
      },
      {
        heading: 'Postulat drugi: światło nie negocjuje',
        body: [
          'Każdy obserwator inercjalny mierzy tę samą prędkość światła w próżni. Nie “prawie tę samą”, nie “po poprawce na swój ruch”, lecz tę samą wartość. To zdanie jest małe, ale ma ogromne konsekwencje.',
          'Gdy rowerzysta rzuca piłkę, prędkości dodają się klasycznie. Gdy źródło wysyła światło, obserwator nie dostaje światła szybszego dlatego, że leci w jego stronę. To jest zerwanie z najgłębszą codzienną intuicją o prędkości.',
        ],
      },
      {
        heading: 'Dlaczego musi zmienić się czas',
        body: [
          'Prędkość to odległość podzielona przez czas. Jeśli odległości i czasy byłyby absolutnie takie same dla wszystkich, a obserwatorzy poruszaliby się względem siebie, prędkość światła musiałaby wyjść różna. Postulat drugi tego zabrania.',
          'Natura wybiera inne rozwiązanie: obserwatorzy nie zawsze zgadzają się co do odstępów czasu, długości i jednoczesności. To nie jest awaria pomiaru. To nowa geometria pomiaru.',
        ],
      },
      {
        heading: 'Co zostaje stałe',
        body: [
          'Teoria względności nie rozpuszcza świata w subiektywności. Ona przenosi stałość w głębsze miejsce. Zamiast absolutnego czasu i absolutnej długości dostajemy spójne prawa fizyki, stałą prędkość światła i wielkości czasoprzestrzenne, które różni obserwatorzy mogą uzgodnić.',
          'Dlatego nazwa “względność” bywa myląca. Równie dobrze można by mówić o teorii tego, co pozostaje niezmienne, gdy zmieniamy układ odniesienia.',
        ],
      },
    ],
    closing:
      'Dwa postulaty są twarde. To nasze stare wyobrażenia czasu i przestrzeni okazują się elastyczne.',
  },
  {
    number: 9,
    slug: 'wzglednosc-czasu',
    title: 'Względność czasu - dlaczego zegary mogą chodzić różnie',
    deck:
      'Poruszający się zegar nie jest popsuty. Dla innego obserwatora odmierza mniej czasu, bo światło musi zachować stałą prędkość.',
    duration: '25 min',
    visual: 'time',
    visualCaption:
      'Pionowa droga światła w zegarze staje się ukośna dla obserwatora z boku. Dłuższa droga przy tej samej prędkości oznacza dłuższy odstęp czasu.',
    intro:
      'Dylatacja czasu brzmi jak science fiction, dopóki nie zobaczysz zegara świetlnego. Wtedy staje się geometryczną konsekwencją: ta sama prędkość światła, różna droga widziana przez różnych obserwatorów.',
    memoryAnchor:
      'Poruszający się zegar jest jak metronom na jadącym chodniku: dla osoby na chodniku ruch jest prosty, dla osoby obok ścieżka każdego tyknięcia jest dłuższa.',
    misconception:
      'Pułapka: myśleć, że dylatacja czasu to złudzenie wzroku albo opóźnienie sygnału. To realna różnica w zmierzonym odstępie czasu między zdarzeniami.',
    keyIdeas: [
      'Zegar świetlny mierzy czas przez odbicia impulsu światła.',
      'Dla obserwatora z zewnątrz światło w poruszającym się zegarze pokonuje dłuższą drogę.',
      'Skoro prędkość światła jest stała, dłuższa droga oznacza dłuższy czas.',
    ],
    sections: [
      {
        heading: 'Zegar z dwóch luster',
        body: [
          'Wyobraź sobie dwa lustra ustawione jedno nad drugim. Impuls światła odbija się między nimi: tik na dole, tak na górze, tik z powrotem na dole. Dla osoby lecącej razem z zegarem światło porusza się pionowo.',
          'To nie musi być praktyczny zegarek na rękę. To model, który odsłania zasadę. Jeśli prędkość światła jest stała, liczba odbić może wyznaczać rytm czasu. Każde odbicie jest zdarzeniem.',
        ],
      },
      {
        heading: 'Ten sam zegar widziany z peronu',
        body: [
          'Teraz zegar jedzie obok obserwatora. Dla osoby z zewnątrz lustra przesuwają się w bok, więc światło nie może iść pionowo. Aby trafić w górne lustro, musi przejść po przekątnej. Do dolnego lustra wraca kolejną przekątną.',
          'Ścieżka światła jest dłuższa niż dla osoby jadącej z zegarem. A ponieważ światło nie może po prostu przyspieszyć, dłuższa droga oznacza dłuższy czas między tyknięciami. Obserwator z zewnątrz stwierdza: ten poruszający się zegar tyka wolniej.',
        ],
      },
      {
        heading: 'Kto naprawdę zwalnia',
        body: [
          'Każdy obserwator uważa swój lokalny zegar za normalny. Pasażer przy zegarze świetlnym nie widzi u siebie spowolnienia. To porównanie zegarów poruszających się względem siebie ujawnia różnicę.',
          'To dlatego trzeba uważać z językiem. Nie chodzi o uczucie wolniejszego czasu. Dla ciebie twój czas zawsze płynie zwyczajnie. Różnica pojawia się, gdy po spotkaniu porównujesz liczbę tyknięć dwóch zegarów, które przebyły różne drogi przez czasoprzestrzeń.',
        ],
      },
      {
        heading: 'Dlaczego to nie sztuczka',
        body: [
          'Dylatację czasu potwierdzają cząstki elementarne, które żyją dłużej, gdy poruszają się bardzo szybko względem laboratorium. Potwierdzają ją też zegary atomowe i poprawki potrzebne w systemach satelitarnych.',
          'Najważniejsza intuicja pozostaje jednak prosta: stała prędkość światła zamienia geometrię ścieżki w geometrię czasu. Dłuższa droga światła w poruszającym się zegarze to wolniejsze tykanie w opisie zewnętrznego obserwatora.',
        ],
      },
    ],
    closing:
      'Jeśli światło nie może zmienić prędkości, czas musi zmienić rytm pomiaru. To jest serce dylatacji czasu.',
  },
  {
    number: 10,
    slug: 'wzglednosc-przestrzeni',
    title: 'Względność przestrzeni - kurczenie się obiektów',
    deck:
      'Długość w ruchu nie jest absolutna, bo pomiar długości wymaga jednoczesnego uchwycenia obu końców obiektu.',
    duration: '23 min',
    visual: 'space',
    visualCaption:
      'Długi prostokąt i krótszy prostokąt pokazują ten sam obiekt mierzony w dwóch układach. Skrócenie dotyczy tylko kierunku ruchu.',
    intro:
      'Skrócenie długości brzmi jeszcze dziwniej niż dylatacja czasu, bo wyobrażamy sobie przedmioty jako sztywne bryły. Klucz jest taki: długość poruszającego się obiektu wymaga pomiaru obu końców w tej samej chwili, a jednoczesność nie jest absolutna.',
    memoryAnchor:
      'Mierzenie poruszającego się obiektu jest jak fotografowanie pociągu przez szczelinę: musisz uchwycić przód i tył w jednej chwili swojego aparatu.',
    misconception:
      'Pułapka: wyobrażać sobie, że obiekt fizycznie zgniata się we własnym układzie. W swoim spoczynku ma normalną długość; krótszy jest pomiar wykonany przez obserwatora, względem którego obiekt się porusza.',
    keyIdeas: [
      'Długość wymaga jednoczesnego pomiaru położeń obu końców.',
      'Jednoczesność zależy od układu odniesienia.',
      'Skrócenie zachodzi tylko w kierunku ruchu.',
    ],
    sections: [
      {
        heading: 'Długość to dwa zdarzenia naraz',
        body: [
          'Gdy linijka leży na stole, pomiar długości wydaje się banalny. Patrzysz na jeden koniec, potem na drugi, nic istotnego nie ucieka. Ale gdy obiekt pędzi obok ciebie, końce cały czas zmieniają położenie.',
          'Aby zmierzyć długość poruszającego się obiektu, musisz zapisać położenie przodu i tyłu w tej samej chwili według twoich zegarów. To są dwa zdarzenia: “przód jest tutaj” i “tył jest tam”. Bez jednoczesności nie ma długości w ruchu.',
        ],
      },
      {
        heading: 'Jednoczesność przestaje być wspólna',
        body: [
          'W klasycznej fizyce wszyscy zgodziliby się, które dwa odczyty były jednoczesne. W szczególnej teorii względności obserwatorzy poruszający się względem siebie mogą inaczej kroić czas na “teraz”.',
          'To jest powód skrócenia długości. Nie chodzi o magiczne ściśnięcie atomów w oczach obserwatora. Chodzi o to, że różni obserwatorzy wybierają inne pary zdarzeń jako jednoczesne końce pomiaru.',
        ],
      },
      {
        heading: 'Kurczy się kierunek ruchu',
        body: [
          'Skrócenie zachodzi tylko w kierunku ruchu. Jeśli statek leci poziomo względem ciebie, krótsza będzie jego długość wzdłuż lotu, nie wysokość ani szerokość poprzeczna. To ważne, bo pokazuje, że efekt jest związany z relacją ruchu i pomiaru.',
          'Dla osób na statku sam statek ma normalną długość. To świat zewnętrzny poruszający się względem nich będzie miał skrócone odległości w kierunku ruchu. Względność nie wybiera jednego obserwatora jako właściciela prawdziwej długości.',
        ],
      },
      {
        heading: 'Czas i przestrzeń jako jeden pakiet',
        body: [
          'Dylatacja czasu i skrócenie długości są dwiema stronami tej samej przebudowy. Jeśli czas zmienia się między układami, przestrzeń nie może pozostać absolutnie taka sama. Razem utrzymują stałą prędkość światła i spójność praw fizyki.',
          'Dlatego kończymy ten kurs nie hasłem, że wszystko jest względne, lecz obrazem bardziej precyzyjnym: obserwatorzy inaczej dzielą czasoprzestrzeń na czas i przestrzeń, ale mogą przeliczać swoje opisy według stałych reguł.',
        ],
      },
    ],
    closing:
      'Przestrzeń nie jest sztywnym pudełkiem. Jest częścią sposobu pomiaru, który zmienia się razem z czasem, gdy obserwatorzy poruszają się względem siebie.',
  },
];

export const getLessonBySlug = (slug: string) => lessons.find((lesson) => lesson.slug === slug);
