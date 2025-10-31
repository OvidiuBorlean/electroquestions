const BASE_QUESTIONS = [
    {
        "question": " Protecţia motoarelor electrice împotriva întreruperii sau scăderii tensiunii de alimentare şi restabilirea ei ulterioară este o protecţie:",
        "options": [
            "întotdeauna rapidă",
            "întotdeauna temporizată",
            "care poate fi temporizată în anumite  cazuri"
        ],
        "answer": "care poate fi temporizată în anumite  cazuri",
        "reference": "https://example.com/reference"
    },
    {
        "question": "În amplasamente cu risc de incendiu datorita prafului şi /sau fibrelor, temperatura la suprafaţa corpurilor de iluminat, în caz de defect, trebuie să fie limitată la: \n",
        "options": [
            "200º C",
            "115º C",
            "80º C"
        ],
        "answer": "115º C",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Rezistenţa de izolaţie a unui circuit (de joasă tensiune) cu tensiune nominală > 500 V se măsoară în c.c. şi trebuie să aibă o valoare:",
        "options": [
            "mai mică de 0,5 MΩ",
            "mai mare sau egala cu 1 MΩ",
            "mai mare sau egala cu 2 MΩ"
        ],
        "answer": "mai mare sau egala cu 1 MΩ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Se admit doze comune pentru circuitele de iluminat normal, de prize, de comandă şi de semnalizare:",
        "options": [
            " dacă acestea funcţionează la aceeaşi tensiune",
            " întotdeauna",
            " dacă puterea instalată pe fiecare circuit nu depăşeşte 2 kW"
        ],
        "answer": " dacă acestea funcţionează la aceeaşi tensiune",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Se prevede accesul pe la ambele capete pe coridoarele din dreptul tablourilor de distribuţie formate din mai multe panouri având o lungime mai mare de:",
        "options": [
            " 10 m",
            " 3 m",
            " 5 m"
        ],
        "answer": " 10 m",
        "reference": "https://example.com/reference"
    },
    {
        "question": " Protecţia circuitelor împotriva supracurenţilor electrici, care se prevede pe toate conductoarele de fază, trebuie să producă deconectarea:\n ",
        "options": [
            " neapărat a tuturor conductoarelor active",
            "de regulă numai a conductorului în care este detectat supracurentul",
            "întotdeauna numai a conductorului în care este detectat supracurentul"
        ],
        "answer": " neapărat a tuturor conductoarelor active",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Pentru verificarea rezistenţei de izolaţie a pardoselii trebuie efectuate cel puţin trei măsurări în acelaşi amplasament; una din aceste măsurări se efectuează la o distanţă de orice conductor extern accesibil din amplasament de:",
        "options": [
            "cca. 0,5 m ",
            "cca. 1 m ",
            "cca. 2 m "
        ],
        "answer": "cca. 1 m ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Alegerea caracteristicilor dispozitivelor de protecţie în cazul motoarelor se face ţinându-se seama:",
        "options": [
            "numai de sarcinile în regim normal de funcţionare",
            "numai de sarcinile de pornire",
            "de simultaneitatea sarcinilor în regim normal şi de pornire"
        ],
        "answer": "de simultaneitatea sarcinilor în regim normal şi de pornire",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Conductorul neutru se leagă la dulia lămpii:",
        "options": [
            " la borna din interior",
            " la oricare dintre borne",
            " la borna conectata la partea filetata a duliei"
        ],
        "answer": " la borna conectata la partea filetata a duliei",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Dimensionarea conductoarelor circuitelor de alimentare în cazul motoarelor se face ţinându-se seama:",
        "options": [
            "numai de sarcinile în regim normal de funcţionare",
            "numai de sarcinile de pornire",
            "de simultaneitatea sarcinilor în regim normal şi de pornire"
        ],
        "answer": "de simultaneitatea sarcinilor în regim normal şi de pornire",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Este admisă racordarea prin prize la circuitul de alimentare al receptoarelor electrice cu putere nominală până la:",
        "options": [
            "0,5 kW",
            "1 kW",
            "2 kW"
        ],
        "answer": "2 kW",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Corpurile de iluminat  care se instalează în depozite cu materiale combustibile, categoria  BE 2, trebuie să fie  întotdeauna:  ",
        "options": [
            "echipate cu lămpi fluorescente",
            "prevăzute cu grătar protector",
            "prevăzute cu glob, respectiv cu difuzor"
        ],
        "answer": "prevăzute cu glob, respectiv cu difuzor",
        "reference": "https://example.com/reference"
    },
    {
        "question": "În încăperi de locuit şi similare se recomandă ca traseele tuburilor orizontale pe pereţi să fie distanţate faţă de plafon la:",
        "options": [
            "1 m",
            "0,5 m",
            "circa 0,3 m"
        ],
        "answer": "circa 0,3 m",
        "reference": "https://example.com/reference"
    },
    {
        "question": "În instalaţiile de joasă tensiune aferente clădirilor, rezistenţa electrică a izolaţiei trebuie măsurată:",
        "options": [
            "numai între două conductoare active ",
            " numai între conductoarele active luate 2 câte 2 ",
            "între conductoarele active şi conductorul de protecţie conectat la reţeaua de legare la pământ "
        ],
        "answer": "intre conductoarele active şi conductorul de protecţie conectat la reţeaua de legare la pământ ",
        "reference": "https://example.com/reference"
    },
    {
        "question": " În mod special se prevăd conductoare din cupru la circuitele electrice pentru alimentarea de sisteme şi instalaţii de prevenire şi stingere a incendiilor, atunci când secţiunea conductoarelor din aluminiu ar rezulta mai mică de:",
        "options": [
            "   16 mm2",
            "25 mm2",
            "10 mm2"
        ],
        "answer": "10 mm2",
        "reference": "https://example.com/reference"
    },
    {
        "question": "La circuitele electrice pentru alimentarea receptoarelor de importanţă deosebită (receptoare din blocul operator al spitalelor, iluminat de siguranţă, etc) materialul conductoarelor este:",
        "options": [
            "întotdeauna aluminiu",
            "întotdeauna cupru",
            "cupru sau aluminiu, condiţionat  "
        ],
        "answer": "întotdeauna cupru",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Legăturile barelor se execută:",
        "options": [
            "numai prin sudare",
            "numai cu ajutorul şuruburilor",
            "cu ajutorul şuruburilor, clemelor sau prin sudare"
        ],
        "answer": "cu ajutorul şuruburilor, clemelor sau prin sudare",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Legăturile conductoarelor de protecţie trebuie executate:",
        "options": [
            "numai prin sudare",
            "numai prin înşurubări, cu contrapiuliţe şi şaibă elastică",
            "prin sudare sau prin înşurubări cu contrapiuliţe şi inele de siguranţă (şaibă elastică)"
        ],
        "answer": "prin sudare sau prin înşurubări cu contrapiuliţe şi inele de siguranţă (şaibă elastică)",
        "reference": "https://example.com/reference"
    },
    {
        "question": " Legăturile conductoarelor izolate se acoperă cu material electroizolant (de ex. tub varniş, bandă izolantă, capsule izolante etc):\n",
        "options": [
            "numai dacă sunt accesibile",
            "opţional",
            "întotdeauna"
        ],
        "answer": "întotdeauna",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Legăturile electrice între conductoare izolate pentru îmbinări sau derivaţii se fac:",
        "options": [
            "în interiorul tuburilor sau ţevilor de protecţie",
            "în interiorul golurilor din elementele de construcţie",
            "numai în doze sau cutii de legătură"
        ],
        "answer": "numai în doze sau cutii de legătură",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Măsurile pentru evitarea contactului direct cu materialul combustibil al echipamentelor electrice cu grad de protecţie inferior IP54 se aplică:",
        "options": [
            "numai la montarea aparentă a elementelor de instalaţii electrice",
            "numai la montarea sub tencuială a elementelor de instalaţii electrice",
            "atât la montarea aparentă cât şi la montarea îngropată "
        ],
        "answer": "atât la montarea aparentă cât şi la montarea îngropată ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Montarea pe materiale combustibile a echipamentelor electrice cu grad de protecţie inferior IP54:",
        "options": [
            "este strict interzisă",
            "este admisă fără restricţii",
            "se face interpunând materiale incombustibile între acestea şi materialul combustibil sau elementele de distanţare"
        ],
        "answer": "se face interpunând materiale incombustibile între acestea şi materialul combustibil sau elementele de distanţare",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Montarea tuburilor de protecţie a conductoarelor electrice de j.t. pe pardoseala combustibilă a podurilor:",
        "options": [
            "este strict interzisă",
            "este admisă fără restricţii",
            "trebuie evitată; se poate face excepţie pentru tuburi metalice"
        ],
        "answer": "trebuie evitată; se poate face excepţie pentru tuburi metalice",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Motoarele electrice alimentate prin circuite separate trebuie prevăzute pe toate fazele:",
        "options": [
            "numai cu dispozitiv de protecţie la scurtcircuit, pentru puteri mai mici de 5 kW",
            "numai cu protecţie la suprasarcini, pentru puteri mai mici de 5 kW",
            "de regulă, cu dispozitive de protecţie la scurtcircuit şi dispozitive de protecţie la suprasarcină"
        ],
        "answer": "de regulă, cu dispozitive de protecţie la scurtcircuit şi dispozitive de protecţie la suprasarcină",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Ramificaţiile din distribuţiile cu conductoare electrice libere montate pe izolatoare în interiorul clădirilor se fixează astfel încât:",
        "options": [
            "conductoarele electrice din traseul principal să poată suporta eforturile de tracţiune suplimentare ",
            "să solicite cu tracţiune redusă conductoarele electrice din traseul principal",
            "să nu solicite la tracţiune conductoare electrice din traseul principal"
        ],
        "answer": "să nu solicite la tracţiune conductoare electrice din traseul principal",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Se admite alimentarea a mai multor receptoare electrice de putere de aceeaşi natură şi destinaţie (de ex. motoare) prin acelaşi circuit de j.t. prevăzut cu protecţie comună la scurtcircuit, dacă puterea totală instalată nu depăşeşte:",
        "options": [
            " 8 kW",
            " 10 kW",
            " 15 kW"
        ],
        "answer": " 15 kW",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Amplasarea aparatelor cu ulei în interiorul tablourilor electrice:",
        "options": [
            "este interzisă",
            "este permisă în anumite condiţii",
            "este permisă, dar nu se recomandă"
        ],
        "answer": "este interzisă",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Amplasarea instalaţiilor electrice de conexiuni şi distribuţie în interiorul încăperilor de cabluri: ",
        "options": [
            "este interzisă, cu unele excepţii",
            "este permisă întotdeauna",
            "nu există în prescripţiile energetice o prevedere în acest sens"
        ],
        "answer": "este interzisă, cu unele excepţii",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Căile de curent ce nu se pot realiza în execuţie etanşă, în încăperi şi în spaţii din exterior cu mediu coroziv, pot fi realizate întotdeauna din:",
        "options": [
            "Cu",
            "Al",
            "otel"
        ],
        "answer": "Cu",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Circuitele de joasă tensiune de curent alternativ, de curent continuu sau de tensiuni diferite",
        "options": [
            "se recomandă să fie grupate pe acelaşi panou (dulap)",
            "este interzisă gruparea pe acelaşi panou (dulap)",
            "este admisă gruparea pe acelaşi panou (dulap), în anumite condiţii"
        ],
        "answer": "este admisă gruparea pe acelaşi panou (dulap), în anumite condiţii",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Puterea instalată pe un circuit monofazat de prize din clădirile de locuit şi social - culturale este de:",
        "options": [
            "1 kW",
            "1,5 kW",
            "2 kW"
        ],
        "answer": "2 kW",
        "reference": "https://example.com/reference"
    },
    {
        "question": "În cazul în care temperatura minimă este sub valorile stabilite de norme, montarea aparatelor înglobate în echipamentul de joasă tensiune :",
        "options": [
            "se admite dacă se prevede o încălzire locală",
            "nu se admite",
            "se admite în cazul în care aparatele au ulei"
        ],
        "answer": "se admite dacă se prevede o încălzire locală",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Întreruperea conductorului de protecţie prin aparate de conectare:",
        "options": [
            " este permisă",
            "nu este permisă",
            " de regula nu este permisă, cu excepţia anumitor cazuri"
        ],
        "answer": "nu este permisă",
        "reference": "https://example.com/reference"
    },
    {
        "question": "La realizarea tablourilor şi barelor de distribuţie de j.t., distanţa minimă de izolare în aer între piesele fixe sub tensiune ale diferitelor faze, precum şi între acestea şi părţi metalice legate la pământ trebuie să fie de cel puţin:",
        "options": [
            " 10 mm",
            " 15 mm",
            " 20 mm"
        ],
        "answer": " 15 mm",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Montarea siguranţelor de j.t.pe conductoarele instalaţiei de protecţie:",
        "options": [
            "este interzisă",
            "este întotdeauna permisă",
            "este interzisă numai în cazul în care conductorul de protecţie este folosit drept conductor de nul"
        ],
        "answer": "este interzisă",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Siguranţele cu capac filetat trebuie să fie montate în aşa fel încât:",
        "options": [
            " conductoarele de alimentare să fie legate la şuruburile de contact",
            " conductoarele de plecare spre consumatori să fie legate la şuruburile de contact",
            " conductoarele de alimentare să fie legate la duliile filetate"
        ],
        "answer": " conductoarele de alimentare să fie legate la şuruburile de contact",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Tabloul de distribuţie de j.t. trebuie montat:",
        "options": [
            "în plan orizontal",
            "perfect vertical şi bine fixat",
            "nu există prevederi speciale cu privire la modul de montare"
        ],
        "answer": "perfect vertical şi bine fixat",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Supunerea legăturilor electrice la eforturi de tracţiune:",
        "options": [
            "este permisă întotdeauna",
            "este permisă în cazul conductoarelor de cupru",
            "este interzisă"
        ],
        "answer": "este interzisă",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Tablourile de distribuţie din locuinţe se pot instala astfel încât înălţimea laturii de sus a tablourilor faţă de pardoseala finită să nu depăşească:",
        "options": [
            "2 m",
            "2,3 m",
            "2,5 m"
        ],
        "answer": "2,5 m",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Tuburile şi ţevile metalice sau din material plastic din instalaţiile electrice de j.t. se instalează:",
        "options": [
            "numai aparent",
            "numai îngropat",
            "aparent sau îngropat, în anumite condiţii"
        ],
        "answer": "aparent sau îngropat, în anumite condiţii",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Conductoarele coloanelor electrice:",
        "options": [
            "trebuie sa aibă aceeaşi secţiune pe toata lungimea lor",
            "pot avea doua secţiuni dacă lungimea coloanelor depăşeşte 20m",
            "pot avea doua secţiuni dacă lungimea coloanelor depăşeşte 10m"
        ],
        "answer": "trebuie sa aibă aceeaşi secţiune pe toata lungimea lor",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Conductorul de protecţie al coloanelor electrice individuale trebuie să fie legat la pământ:",
        "options": [
            "numai dacă secţiunea conductorului este mai mică de 10 mm2",
            "în cazul tablourile de distribuţie ale consumatorilor, la borna de legare la pământ de pe rama metalică a tablourilor",
            "doar dacă secţiunea conductorului nu are valoare constantă pe toată lungimea coloanei"
        ],
        "answer": "în cazul tablourile de distribuţie ale consumatorilor, la borna de legare la pământ de pe rama metalică a tablourilor",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Montarea dozelor de trecere este obligatorie în cazul în care lungimea coloanelor în linie dreapta, pe orizontală, depăşeşte:",
        "options": [
            " 10 m",
            "15 m",
            " 20 m"
        ],
        "answer": "15 m",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Pentru asigurarea selectivităţii, între curenţii nominali ai fuzibilelor a două siguranţe consecutive, diferenţa trebuie să fie de cel puţin:",
        "options": [
            "doua trepte ",
            "o treapta",
            "trei trepte"
        ],
        "answer": "doua trepte ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Încadrarea în clasele de reacţie la foc şi rezistenţă la foc a materialelor se face în conformitate cu prevederile: ",
        "options": [
            " PE 102                           ",
            "reglementărilor specifice   ",
            " normativului    I 7   "
        ],
        "answer": "reglementărilor specifice   ",
        "reference": "https://example.com/reference"
    },
    {
        "question": " Amplasarea instalaţiilor electrice de joasă tensiune pe trasee comune cu acelea ale altor instalaţii sau utilaje care ar putea să le pericliteze în funcţionare normală sau în caz de avarie: ",
        "options": [
            "este interzisă",
            "trebuie evitată",
            "este opţiunea proiectantului"
        ],
        "answer": "trebe evitată",
        "reference": "https://example.com/reference"
    },
    {
        "question": " Masă (a unui echipament sau element de construcţie)reprezintă:",
        "options": [
            "elemente conductoare din instalaţie aflate sub tensiune",
            "elemente izolante din instalaţie aflate în legătură cu pământul",
            "parte conductoare accesibilă a unui echipament, care poate fi atinsă şi care în mod normal nu se află sub tensiune, dar care poate fi pusă sub tensiune în urma unui defect a zolaţiei de bază."
        ],
        "answer": "parte conductoare accesibilă a unui echipament, care poate fi atinsă şi care în mod normal nu se află sub tensiune, dar care poate fi pusă sub tensiune în urma unui defect a zolaţiei de bază.",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Dacă protecţia motoarelor contra suprasarcinilor este realizată cu întrerupere, dispozitivul de comutaţie trebuie să întrerupă obligatoriu: ",
        "options": [
            " toate conductoarele active",
            "conductorul neutru ",
            " toate conductoarele de fază"
        ],
        "answer": " toate conductoarele active",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Simbolul literal T utilizat pentru notarea schemei de legare la pământ de tip TN are următoarea semnificaţie:",
        "options": [
            "izolarea tuturor părţilor active faţă de pământ, sau legarea la pământ a unui punct printr-o impedanţă de valoare foarte mare. ",
            " legarea direct la pământ a maselor instalaţiei, independent de eventuala legare la pământ a unui punct al alimentării",
            "legarea directă la pământ a unui punct activ – punctul neutru, în cazul în care acesta este accesibil sau a unui conductor de fază, în cazul în care punctul neutru nu este accesibil;"
        ],
        "answer": "legarea directă la pământ a unui punct activ – punctul neutru, în cazul în care acesta este accesibil sau a unui conductor de fază, în cazul în care punctul neutru nu este accesibil;",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Simbolul literal T  utilizat pentru notarea schemei de legare la pământ de tip IT are următoarea semnificaţie:",
        "options": [
            "izolarea tuturor părţilor active faţă de pământ, sau legarea la pământ a unui punct printr-o impedanţă de valoare foarte mare. ",
            "legarea directă  la pământ a maselor instalaţiei",
            "legarea directă la pământ a unui punct activ – neutrul, în cazul în care acesta este accesibil sau a unui conductor de fază, în cazul în care neutrul nu este accesibil;"
        ],
        "answer": "legarea directă  la pământ a maselor instalaţiei",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Schema de legare la pământ de tip TN-S, în care un conductor de protecţie distinct este folosit pentru întreaga schemă, se utilizează:",
        "options": [
            "reglementările nu fac precizări privind cazurile în care se utilizează acest tip de schemă",
            "de la ultimul tablou spre consumator",
            "numai în reţelele cu tensiune peste 500 V"
        ],
        "answer": "de la ultimul tablou spre consumator",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Schema de legare la pământ de tip TN-S, în care un conductor de protecţie distinct este folosit pentru întreaga schemă, se utilizează:",
        "options": [
            "când trebuie separate conductoarele PE şi N pentru asigurarea funcţionării protecţiei",
            "numai în reţelele cu tensiune peste 500 V",
            "reglementările nu fac precizări privind cazurile în care se utilizează acest tip de schemă"
        ],
        "answer": "când trebuie separate conductoarele PE şi N pentru asigurarea funcţionării protecţiei",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Reţeaua de tip IT se utilizează:",
        "options": [
            " numai cu dispozitiv de control permanent al izolaţiei conductorului neutru faţă de pământ şi/sau\ndeclanşarea automată în caz de defect  ",
            "fără a fi necesară luarea unor măsuri anumite",
            "utilizarea unui anumit tip  de reţea (ca schemă de protecţie) şi eventual prevederea unor protecţii sunt opţiuni ale proiectantului"
        ],
        "answer": " numai cu dispozitiv de control permanent al izolaţiei conductorului neutru faţă de pământ şi/sau\ndeclanşarea automată în caz de defect  ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Se consideră atingere directă:",
        "options": [
            "contactul persoanelor sau animalelor domestice sau de crescătorie cu mase puse accidental sub tensiune datorită unui defect electric",
            "contactul direct al persoanelor sau al animalelor cu părţi active ",
            "contactul persoanelor sau animalelor domestice sau de crescătorie cu părţi ale unei instalaţii electrice"
        ],
        "answer": "contactul persoanelor sau al animalelor cu părţi active ",
        "reference": "https://example.com/reference"
    },
    {
        "question": " Se consideră atingere indirectă:",
        "options": [
            "contactul nemijlocit sau prin intermediul unui element conductor al persoanelor sau animalelor domestice sau de crescătorie cu părţi active ale unei instalaţii electrice",
            "contactul persoanelor sau animalelor domestice sau de crescătorie cu părţi ale unei instalaţii electrice",
            "contact electric al persoanelor sau al animalelor cu părţile conductoare accesibile puse sub tensiune ca urmare a unui defect."
        ],
        "answer": "contact electric al persoanelor sau al animalelor cu părţile conductoare accesibile\npuse sub tensiune ca urmare a unui defect.",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Conform I 7, parte activă a unei instalaţii este: ",
        "options": [
            "conductorul PEN",
            "conductorul neutru (N)",
            "Partea conductoare accesibilă a unui echipament electric sau a unui element de construcţie care poate fi atinsă, dar care în mod normal nu este sub tensiune "
        ],
        "answer": "conductorul neutru (N)",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Conform I 7, parte activă a unei instalaţii este: ",
        "options": [
            "conductor sau parte conductoare destinată să fie pusă sub tensiune în funcţionare normală",
            "Partea conductoare accesibilă a unui echipament electric sau a unui element de construcţie care poate fi atinsă, dar care în mod normal nu este sub tensiune ",
            "conductorul PEN"
        ],
        "answer": "conductor sau parte conductoare destinată să fie pusă sub tensiune în funcţionare normală",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Conform I 7, parte conductoare accesibilă este:",
        "options": [
            "partea izolantă accesibilă a unui element de construcţie care poate fi atinsă,  şi care poate ajunge sub tensiune în caz de defect",
            "parte conductoare a unui echipament, care poate fi atinsă, şi care nu este în mod normal sub tensiune, dar care poate ajunge sub tensiune în cazul unui defect al izolaţiei de bază.",
            "elemente conductoare din instalaţie aflate sub tensiune"
        ],
        "answer": "parte conductoare a unui echipament, care poate fi atinsă, şi care nu este în mod normal sub tensiune, dar care poate ajunge sub tensiune în cazul unui defect al izolaţiei de bază.",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Conductorul neutru (N) trebuie să aibă aceeaşi secţiune cu conductorul de fază:",
        "options": [
            "în circuitele monofazate cu trei conductoare şi în circuitele polifazate indiferent de secţiunea conductoarelor de fază ",
            "în circuitele monofazate cu trei conductoare şi în circuitele polifazate ale căror conductoare de fază au secţiunea mai mică sau egală cu 16 mm2Cu sau 25 mm2Al",
            "în circuitele monofazate cu trei conductoare şi în circuitele polifazate ale căror conductoare de fază au secţiunea mai mică sau egală cu 25 mm2 Cu sau 35 mm2 Al"
        ],
        "answer": "în circuitele monofazate cu trei conductoare şi în circuitele polifazate ale căror conductoare de fază au secţiunea mai mică sau egală cu 16 mm2Cu sau 25 mm2Al",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Conductorul neutru (N) trebuie să aibă aceeaşi secţiune cu conductorul de fază:",
        "options": [
            "în circuitele monofazate cu două conductoare, indiferent de secţiunea conductoarelor",
            "în circuitele monofazate cu trei conductoare şi în circuitele polifazate ale căror conductoare de fază au secţiunea mai mică sau egală cu 25 mm2 Cu sau 35 mm2 Al",
            "în circuitele monofazate cu trei conductoare şi în circuitele polifazate indiferent de secţiunea conductoarelor de fază "
        ],
        "answer": "în circuitele monofazate cu monofazare cu două conductoare, indiferent de secţiunea conductoarelor",
        "reference": "https://example.com/reference"
    },
    {
        "question": " Secţiunile conductoarelor de fază trebuie să fie corespunzătoare din punct de vedere al: ",
        "options": [
            "secţiunii conductorului de protecţie",
            "tipului reţelei (LEA sau LES)",
            "căderii de tensiune"
        ],
        "answer": "căderii de tensiune",
        "reference": "https://example.com/reference"
    },
    {
        "question": "La instalaţiile electrice de putere secţiunile conductoarelor de fază trebuie să fie corespunzătoare din punct de vedere al: ",
        "options": [
            "tipului cicuitului de alimentare (aerian sau subteran)",
            "secţiunii conductorului de protecţie",
            "stabilităţii termice în regim de defect"
        ],
        "answer": "stabilităţii termice în regim de defect",
        "reference": "https://example.com/reference"
    },
    {
        "question": " Valoarea curentului maxim admisibil într-un conductor în regim permanent de lucru depinde de: ",
        "options": [
            "tipul receptorului alimentat",
            "lungimea circuitului",
            "secţiunea conductorului"
        ],
        "answer": "secţiunea conductorului",
        "reference": "https://example.com/reference"
    },
    {
        "question": " Valoarea curentului maxim admisibil într-un conductor în regim permanent de lucru depinde de: ",
        "options": [
            "lungimea circuitului",
            "materialul conductorului",
            "tipul receptorului alimentat"
        ],
        "answer": "materialul conductorului",
        "reference": "https://example.com/reference"
    },
    {
        "question": " Valoarea curentului maxim admisibil într-un conductor în regim permanent de lucru depinde de: ",
        "options": [
            "lungimea circuitului",
            "natura izolaţiei conductorului",
            "tipul receptorului alimentat"
        ],
        "answer": "natura izolaţiei conductorului",
        "reference": "https://example.com/reference"
    },
    {
        "question": " Valoarea curentului maxim admisibil într-un conductor în regim permanent de lucru depinde de: ",
        "options": [
            "modul de montare ",
            "tipul receptorului alimentat",
            "lungimea circuitului"
        ],
        "answer": "modul de montare ",
        "reference": "https://example.com/reference"
    },
    {
        "question": " La instalaţiile electrice de putere de joasă tensiune, densitatea maximă de curent admisă  în regim de scurtă durată la pornire este de:",
        "options": [
            "50 A/mm2 pentru conductoare de cupru",
            "35 A/mm2 pentru conductoare de aluminiu",
            "20 A/mm2 pentru conductoare de aluminiu"
        ],
        "answer": "20 A/mm2 pentru conductoare de aluminiu",
        "reference": "https://example.com/reference"
    },
    {
        "question": " La instalaţiile electrice de putere de joasă tensiune, densitatea maximă de curent admisă  în regim de scurtă durată la pornire este de:",
        "options": [
            "35 A/mm2 pentru conductoare de aluminiu",
            "35A/mm2 pentru conductoare de cupru",
            "16 A/mm2 pentru conductoare de aluminiu"
        ],
        "answer": "35A/mm2 pentru conductoare de cupru",
        "reference": "https://example.com/reference"
    },
    {
        "question": " În cazul în care alimentarea consumatorului se face din cofretul de branşament de joasă tensiune, valorile căderilor de tensiune, în regim normal de funcţionare faţă de tensiunea nominală a reţelei, trebuie să fie de cel mult:",
        "options": [
            "3% pentru receptoarele din instalaţiile electrice de lumină şi 5% pentru restul receptoarelor (forţă etc.) ",
            "10% pentru toate tipurile de receptoare ",
            "5% pentru receptoarele din instalaţiile electrice de lumină şi 12% pentru restul receptoarelor (forţă etc.) "
        ],
        "answer": "3% pentru receptoarele din instalaţiile electrice de lumină şi 5% pentru restul receptoarelor (forţă etc.) ",
        "reference": "https://example.com/reference"
    },
    {
        "question": " În cazul instalaţiilor electrice de alimentare a motoarelor electrice, pierderea de tensiune la pornire, faţă de tensiunea nominală (dacă nu se dispune de alte date specificate de producătorul motorului etc.), trebuie să fie cel mult egală cu: ",
        "options": [
            "0.2",
            "0.25",
            "0.12"
        ],
        "answer": "0.12",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Pentru motoarele monofazate, protecţia contra suprasarcinilor se face: ",
        "options": [
            "obligatoriu pe conductorul de fază ",
            "obligatoriu pe conductorul neutru",
            "opţional pentru motoare mai mici de 1,1 kW"
        ],
        "answer": "obligatoriu pe conductorul de fază ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Alimentarea transformatorului de sonerie sau soneriei de 220(230) V se face:  . ",
        "options": [
            "numai direct din tabloul de distribuţie",
            " numai dintr-un circuit de iluminat normal",
            "dintr-un circuit de prize"
        ],
        "answer": "dintr-un circuit de prize",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Alimentarea transformatorului de sonerie sau soneriei de 220(230) V se face:  . ",
        "options": [
            "numai direct din tabloul de distribuţie",
            " intr-un circuit de iluminat normal",
            "numai dintr-un circuit de prize"
        ],
        "answer": "dintr-un circuit de iluminat normal",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Secţiunea minimă admisă pentru conductoare de fază din circuite pentru prize monofazate în instalaţiile electrice din interiorul clădirilor este de:",
        "options": [
            "2,5 mm2 cupru, ",
            "1,5 mm2 cupru,                           2,5 mm2 aluminiu",
            "4 mm2 aluminiu"
        ],
        "answer": "2,5 mm2 cupru, ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Secţiunea minimă admisă a conductorului de fază pentru circuitul unui receptor electrocasnic monofazat cu putere de peste 2 kW este de:",
        "options": [
            "2,5 mm2 cupru",
            "1,5 mm2 cupru,                           2,5 mm2 aluminiu",
            "4 mm2 aluminiu"
        ],
        "answer": "2,5 mm2 cupru",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Pentru circuite monofazate, conductorul neutru (N) va avea: ",
        "options": [
            "aceeaşi secţiune ca şi conductorul de fază",
            "aceeaşi secţiune ca şi conductorul de fază, numai pentru conductoare de cupru",
            "aceeaşi secţiune ca şi conductorul de fază, numai pentru conductoare de aluminiu"
        ],
        "answer": "aceeaşi secţiune ca şi conductorul de fază",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Pentru un circuit trifazat cu patru conductoare de aluminiu cu secţiunea conductoarelor de fază de 35 mm2,  conductorul neutru  are secţiunea minimă de:  ",
        "options": [
            "16 mm2",
            "25 mm2",
            "35 mm2"
        ],
        "answer": "25 mm2",
        "reference": "https://example.com/reference"
    },
    {
        "question": " Protecţia unui motor trifazat împotriva suprasarcinilor trebuie să fie prevăzută:\n",
        "options": [
            "pe toate conductoarele de fază şi pe conductorul neutru",
            "pe două conductoare de fază ",
            "pe toate conductoarele de fază"
        ],
        "answer": "pe toate conductoarele de fază",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Cablurile de energie la circuitele care alimentează receptoare de importanţă deosebită, se prevăd cu conductoare de cupru atunci când secţiunea conductoarelor (din aluminiu) ar rezulta mai mică de :",
        "options": [
            "10mm2",
            "16mm2",
            "6mm2"
        ],
        "answer": "10mm2",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Branşamentul electric este partea din instalaţia de distribuţie a energiei electrice cuprinsă între linia electrică şi:",
        "options": [
            " firida de branşament",
            " coloana electrică",
            " punctul de delimitare între distribuitor şi consumator, reprezentat de bornele contorului"
        ],
        "answer": " punctul de delimitare între distribuitor şi consumator, reprezentat de bornele contorului",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Întrerupătoarele, comutatoarele şi butoanele de lumină se montează, faţă de nivelul pardoselii finite, la înălţimea de:",
        "options": [
            "1m de la axul aparatului",
            "(0,6-1,5) m de la axul aparatului",
            "1,5 m de la axul aparatului"
        ],
        "answer": "(0,6-1,5) m de la axul aparatului",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Prevederile normativului  I 7 – 2011 se aplică la proiectarea, execuţia şi exploatarea instalaţiilor electrice aferente:",
        "options": [
            "clădirilor cu funcţiuni agroindustriale şi agrozootehnice ",
            "minelor şi carierelor ",
            "depozitelor de materiale pirotehnice şi explozive"
        ],
        "answer": "clădirilor cu funcţiuni agroindustriale şi agrozootehnice ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Montarea, pe conductoarele de protecţie, a unor elemente care pot produce întreruperea circuitului este:",
        "options": [
            "interzisă",
            "permisă în anumite condiţii",
            "la latitudinea consumatorului"
        ],
        "answer": "interzisă",
        "reference": "https://example.com/reference"
    },
    {
        "question": "*Alimentarea receptoarelor cu rol de securitate la incendiu trebuie asigurată:",
        "options": [
            "întotdeauna din două surse de alimentare independente",
            " dintr-o singură sursă de alimentare, în anumite cazuri",
            "din una sau din două surse,  conform opţiunii consumatorului"
        ],
        "answer": "întotdeauna din două surse de alimentare independente",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Amplasarea aparatelor, echipamentelor şi receptoarelor electrice în locuri în care ar putea fi expuse direct la apă, ulei, substanţe corozive, căldură sau şocuri mecanice:",
        "options": [
            "se admite",
            "se admite condiţionat",
            "este interzisă"
        ],
        "answer": "se admite",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Amplasarea instalaţiilor electrice sub conducte sau utilaje pe care poate să apară condens:",
        "options": [
            "se admite întotdeauna ",
            "este total interzisă",
            "se admite condiţionat"
        ],
        "answer": "se admite condiţionat",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Corpurile de iluminat echipate cu lămpi cu descărcări se prevăd în orice tip de încăpere cu:",
        "options": [
            "grătar protector",
            "dispozitiv pentru îmbunătăţirea factorului de putere",
            "difuzor"
        ],
        "answer": "dispozitiv pentru îmbunătăţirea factorului de putere",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Dispozitivele pentru suspendarea corpurilor de iluminat (cârlige, bolţuri, dibluri, etc) se aleg astfel încât să suporte fără deformări:",
        "options": [
            "peste 5 kg",
            "de 5 ori greutatea corpului de iluminat, dar nu mai puţin de 10 kg",
            "de 3 ori greutatea corpului de iluminat utilizat"
        ],
        "answer": "de 5 ori greutatea corpului de iluminat, dar nu mai puţin de 10 kg",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Este obligatorie protecţia la suprasarcini pentru:",
        "options": [
            "instalaţii din încăperi din categoriile celor cu risc de incendiu sau de explozie",
            "instalaţii de comandă ",
            "instalaţii de semnalizare"
        ],
        "answer": "instalaţii din încăperi din categoriile celor cu risc de incendiu sau de explozie",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Utilizarea conductelor metalice pentru apă drept conductoare de protecţie:",
        "options": [
            "este recomandată  ",
            "este permisă condiţionat",
            "nu este permisă"
        ],
        "answer": "nu este permisă",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Îmbinarea tuburilor de protecţie a conductoarelor electrice la trecerile prin elemente de construcţie este:",
        "options": [
            "admisă",
            "interzisă",
            "admisă doar pentru tuburi cu diametru mai mic de 16 mm"
        ],
        "answer": "interzisă",
        "reference": "https://example.com/reference"
    },
    {
        "question": "În camerele de copii din creşe, grădiniţe, spitale de copii, prizele trebuie montate pe pereţi la următoarele înălţimi măsurate de la axul aparatului la nivelul pardoselii finite:",
        "options": [
            "peste 1m",
            "peste 1,5 m",
            "peste 2m"
        ],
        "answer": "peste 1,5 m",
        "reference": "https://example.com/reference"
    },
    {
        "question": "În cazul consumatorilor racordaţi direct la reţeaua de joasa tensiune a distribuitorului, pornirea directa a motoarelor monofazate se admite pentru o putere de până la:",
        "options": [
            " 3 kW",
            " 4 kW",
            "5,5 kW"
        ],
        "answer": " 4 kW",
        "reference": "https://example.com/reference"
    },
    {
        "question": "În cazul consumatorilor racordaţi direct la reţeaua de joasă tensiune a distribuitorului, pornirea directă a motoarelor trifazate se admite pentru o putere de până la:",
        "options": [
            "4 kW",
            "5,5 kW",
            " 7,5 kW"
        ],
        "answer": "5,5 kW",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Tablourile de distribuţie se vor executa ",
        "options": [
            "numai în  construcţie deschisă",
            "numai în construcţie închisă (protejată)",
            " în construcţie deschisă sau închisă, în funcţie de condiţiile de influenţe externe şi grad de protecţie"
        ],
        "answer": " în construcţie deschisă sau închisă, în funcţie de condiţiile de influenţe externe şi grad de protecţie",
        "reference": "https://example.com/reference"
    },
    {
        "question": "În clădirile de locuit se prevăd în fiecare încăpere:",
        "options": [
            "cel mult două prize ",
            "prize după necesităţi ",
            "cel puţin trei prize"
        ],
        "answer": "prize după necesităţi ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "În locuinţe se prevede câte un circuit de priză separat numai pentru receptoare cu puteri de peste:",
        "options": [
            "2 kW",
            "2,5 kW",
            "3 kW"
        ],
        "answer": "2 kW",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Instalarea conductoarelor electrice în tuburi sau ţevi pozate în pământ:",
        "options": [
            "este interzisă",
            "este admisă",
            "este admisă numai pentru conductoare de cupru"
        ],
        "answer": "este interzisă",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Pe circuitele secundare ale transformatoarelor de curent:",
        "options": [
            "este obligatoriu să se prevadă protecţia la suprasarcină",
            "este obligatoriu să se prevadă protecţia la scurcircuit",
            "se permite renunţarea la protecţia la scurtcircuit"
        ],
        "answer": "se permite renunţarea la protecţia la scurtcircuit",
        "reference": "https://example.com/reference"
    },
    {
        "question": "*Pe circuitele secundare ale transformatoarelor de curent:",
        "options": [
            "este obligatoriu să se prevadă protecţia la suprasarcină",
            "se recomandă să nu se prevadă protecţia la suprasarcina",
            "este obligatoriu să se prevadă protecţia la scurcircuit"
        ],
        "answer": "se recomandă să nu se prevadă protecţia la suprasarcina",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Protecţia la suprasarcini şi protecţia la scurtcircuit",
        "options": [
            "trebuie asigurate prin dispozitive de protecţie separate",
            "pot fi asigurate printr-un singur dispozitiv de protecţie",
            "trebuie asigurate printr-un singur dispozitiv de protecţie"
        ],
        "answer": "pot fi asigurate printr-un singur dispozitiv de protecţie",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Sigutanţele fuzibile sunt dispozitive care protejează: ",
        "options": [
            " numai la curenţi de suprasarcină ",
            "numai la curenţi de scurtcircuit",
            " atât la curenţi de suprasarcină cât şi la curenţi de scurtcircuit"
        ],
        "answer": " atât la curenţi de suprasarcină cât şi la curenţi de scurtcircuit",
        "reference": "https://example.com/reference"
    },
    {
        "question": "În încăperi în care se impun condiţii speciale de protecţie datorită utilizatorilor (copii, bolnavi mintal etc.), prizele trebuie să fie",
        "options": [
            "montate aparent",
            "prevăzute cu dispozitive de protecţie diferenţială ≤ 30 mA",
            "de tip îngropat"
        ],
        "answer": "prevăzute cu dispozitive de protecţie diferenţială ≤ 30 mA",
        "reference": "https://example.com/reference"
    },
    {
        "question": "În încăperi în care se impun condiţii speciale de protecţie datorită utilizatorilor (copii, bolnavi mintal etc.), prizele trebuie să fie",
        "options": [
            "de tip special (de ex. cu obturatori)",
            "de tip îngropat",
            "montate aparent"
        ],
        "answer": "de tip special (de ex. cu obturatori)",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Întrerupătoarele, comutatoarele, şi butoanele de lumină trebuie montate:",
        "options": [
            "numai pe conductoarele de fază",
            "numai pe conductorul de nul",
            "pe fază sau pe nul, nu are importanţă"
        ],
        "answer": "numai pe conductoarele de fază",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Culoarea verde-galben pentru izolaţia conductoarelor si cablurilor se foloseşte pentru marcarea conductorului de:",
        "options": [
            "faza",
            "neutru de lucru",
            "de protecţie şi de neutru"
        ],
        "answer": "de protecţie şi de neutru",
        "reference": "https://example.com/reference"
    },
    {
        "question": "La consumatorii alimentaţi din posturi de transformare proprii, puterea celui mai mare motor alimentat pe j.t., care porneşte direct, nu va depăşi:",
        "options": [
            "10 % din puterea transformatorului din care este alimentat",
            " 20 % din puterea transformatorului din care este alimentat",
            "30 % din puterea transformatorului din care este alimentat"
        ],
        "answer": " 20 % din puterea transformatorului din care este alimentat",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Legarea conductoarelor din cupru la aparate, maşini, elemente metalice fixe, se face    (de regulă) prin strângere mecanică cu şuruburi în cazul conductoarelor cu secţiuni mai mici sau egale cu:",
        "options": [
            "16 mmp",
            " 10 mmp",
            "6 mmp"
        ],
        "answer": "10 mmp",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Fiecare conductor conectat la bara principală de legare la pământ la tabloul general: ",
        "options": [
            "nu este obligatoriu să poată fi deconectat individual",
            "trebuie să poată fi deconectat uşor, fără utilizarea unei scule",
            "trebuie să poată fi deconectat individual"
        ],
        "answer": "trebuie să poată fi deconectat individual",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Legăturile conductoarelor din aluminiu pentru îmbinări sau derivaţii trebuie să se facă:",
        "options": [
            " prin răsucire şi matisare",
            " prin cleme speciale, prin presare cu scule speciale sau prin sudare",
            " prin lipire cu cositor"
        ],
        "answer": " prin cleme speciale, prin presare cu scule speciale sau prin sudare",
        "reference": "https://example.com/reference"
    },
    {
        "question": "În instalaţiile electrice pentru şantiere de construcţii şi de demolare, rezistenţa de dispersie a prizei de pământ şi rezistenţa conductoarelor de protecţie până la\nreceptor trebuie să fie de",
        "options": [
            "maximum 1Ω",
            "minimum 4Ω",
            " maximum 4 Ω "
        ],
        "answer": "maximum 4Ω",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Prevederile normativului  I 7 – 2011 se aplică la proiectarea, execuţia şi exploatarea instalaţiilor electrice aferente:",
        "options": [
            "clădirilor prefabricate;",
            "minelor şi carierelor ",
            "depozitelor de materiale pirotehnice şi explozive"
        ],
        "answer": "clădirilor prefabricate;",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Marcarea conductorului neutru  care asigură simultan și funcţia de protecţie (PEN) se face\n        ",
        "options": [
            "cu  culoarea bleu                                 pe toată  lungimea",
            "prin culori verde/galben pe toată  lungimea ",
            " prin culori verde/galben pe toată  lungimea şi suplimentar marcare cu\n     culoarea bleu la fiecare extremitate;\n"
        ],
        "answer": " prin culori verde/galben pe toată  lungimea şi suplimentar marcare cu\n     culoarea bleu la fiecare extremitate;\n",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Marcarea conductorului neutru (N) se face:",
        "options": [
            "cu culoarea bleu                                   pe toată lungimea.",
            "prin culori verde/galben pe toată  lungimea ",
            " cu culoarea bleu                           la fiecare extremitate;"
        ],
        "answer": "cu culoarea bleu                                   pe toată lungimea.",
        "reference": "https://example.com/reference"
    },
    {
        "question": "La circuitele electrice de comandă, automatizare, măsurare şi semnalizare: ",
        "options": [
            "se prevăd numai                                   conductoare din aluminiu",
            "se prevăd numai                                   conductoare din cupru",
            "se prevăd conductoare din aluminiu sau cupru"
        ],
        "answer": "se prevăd numai                                   conductoare din cupru",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Conform normativului I-7-2011, protecţia de bază  reprezintă:",
        "options": [
            "protecţia împotriva şocurilor electrice în absenţa defectului",
            " protecţia care corespunde protecţiei împotriva atingerilor indirecte.",
            "protecţia împotriva şocurilor electrice în caz de defect"
        ],
        "answer": "protecţia împotriva şocurilor electrice în absenţa defectului",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Conform normativului I-7-2011, protecţia de bază  reprezintă:",
        "options": [
            " protecţia care corespunde protecţiei împotriva atingerilor indirecte.",
            " protecţia care corespunde protecţiei împotriva atingerilor directe.",
            "protecţia împotriva şocurilor electrice în caz de defect"
        ],
        "answer": " protecţia care corespunde protecţiei împotriva atingerilor directe.",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Conform normativului I-7-2011, o coloană electrică  este un circuit electric care:   ",
        "options": [
            "alimentează un tablou de distribuţie.",
            " alimentează un receptor de putere",
            " alimentează mai multe surse de iluminat"
        ],
        "answer": "alimentează un tablou de distribuţie.",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Conform normativului I-7-2011, o coloană electrică  este un circuit electric care:   ",
        "options": [
            " alimentează mai multe surse de iluminat",
            " alimentează un receptor de putere",
            "alimentează mai multe tablouri de distribuţie."
        ],
        "answer": "alimentează mai multe tablouri de distribuţie.",
        "reference": "https://example.com/reference"
    },
    {
        "question": "În cazul instalațiilor electrice de joasă tensiune, izolaţia de bază reprezintă:  ",
        "options": [
            "Izolaţia care asigură protecţia de bază.",
            "Izolaţia care asigură protecţia de defect",
            " izolaţia maselor"
        ],
        "answer": "Izolaţia care asigură protecţia de bază.",
        "reference": "https://example.com/reference"
    },
    {
        "question": "În cazul instalațiilor electrice de joasă tensiune, izolaţia de bază reprezintă:  ",
        "options": [
            "Izolaţia care asigură protecţia de defect",
            " izolaţia părţilor active periculoase",
            " izolaţia maselor"
        ],
        "answer": " izolaţia părţilor active periculoase",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Curentul de defect este definit în I-7-2011 ca fiind:",
        "options": [
            " un curent electric care circulă ca urmare a unei suprasarcini",
            " un curent electric care circulă ca urmare a unui defect de izolaţie.",
            " un curent electric care circulă ca urmare a unui scurtcircuit trifazat"
        ],
        "answer": " un curent electric care circulă ca urmare a unui defect de izolaţie.",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Conform normativului I-7-2011, protecţia în caz de defect  reprezintă:  ",
        "options": [
            "o protecţie împotriva şocurilor electrice în condiţii de defect simplu.",
            "o protecţie împotriva şocurilor electrice în condiţii de scurtcircuit",
            " protecţia care corespunde protecţiei împotriva atingerilor directe."
        ],
        "answer": "o protecţie împotriva şocurilor electrice în condiţii de defect simplu.",
        "reference": "https://example.com/reference"
    },
    {
        "question": ". Atunci când un echipament nu conţine, prin construcţie, caracteristici corespunzătoare influenţelor externe ale locului  (sau amplasamentului):",
        "options": [
            " el nu poate fi utilizat în instalația electrică ",
            " el poate fi totuşi utilizat cu condiţia ca instalația să fie montată în tub",
            " el poate fi totuşi utilizat cu condiţia să fie prevăzut cu o protecţie suplimentară corespunzătoare la realizarea instalaţiei "
        ],
        "answer": " el poate fi totuşi utilizat cu condiţia să fie prevăzut cu o protecţie suplimentară corespunzătoare la realizarea instalaţiei ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Conform normativului I-7-2011, alimentarea de securitate la un consumator este o alimentare prevăzută pentru menţinerea în funcţiune a echipamentelor şi instalaţiilor electrice importante pentru:    ",
        "options": [
            "sănătatea şi securitatea persoanelor şi animalelor domestice",
            " continuarea activității productive a principalelor instalații tehnologice ale consumatorului respectiv ",
            " continuarea activității productive a instalațiilor tehnologice ale consumatorului respectiv "
        ],
        "answer": "sănătatea şi securitatea persoanelor şi animalelor domestice",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Pentru instalaţiile electrice de iluminat şi putere (forţă): ",
        "options": [
            "se prevede întotdeauna tablou electric de distribuţie comun ",
            "se prevăd întotdeauna tablouri electrice  de distribuţie diferite ",
            "se prevede tablou electric de distribuţie comun, cu unele excepţii:"
        ],
        "answer": "se prevede tablou electric de distribuţie comun, cu unele excepţii:",
        "reference": "https://example.com/reference"
    },
    {
        "question": "În funcţie de dispunerea conductorului neutru şi a conductorului de protecţie reţelele de tip TN  se pot realiza în: ",
        "options": [
            "   Schema TN-S",
            "Schema TN-C-S-C",
            "Schema TN-S-C"
        ],
        "answer": "   Schema TN-S",
        "reference": "https://example.com/reference"
    },
    {
        "question": "În funcţie de dispunerea conductorului neutru şi a conductorului de protecţie reţelele de tip TN  se pot realiza în: ",
        "options": [
            "Schema TN-C-S-C",
            "Schema TN-C",
            "Schema TN-S-C"
        ],
        "answer": "Schema TN-C",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Rezistenţa prizei de pământ folosite pentru protecţia împotriva şocurilor electrice, atunci când aceasta este comună cu priza de pământ pentru instalaţia de protecţie a clădirii împotriva trăsnetelor, poate fi: ",
        "options": [
            "cel mult 1 Ω",
            "cel mult 4 Ω",
            "cel mult 10 Ω"
        ],
        "answer": "cel mult 1 Ω",
        "reference": "https://example.com/reference"
    },
    {
        "question": "La bateriile de condensatoare de joasă tensiune fracționabile cu trepte comutabile se prevăd dispozitive de descărcare: ",
        "options": [
            "manuală",
            "automată",
            "manuală sau automată"
        ],
        "answer": "manuală sau automată",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Condensatoarele legate direct la bornele receptoarelor de joasă tensiune: ",
        "options": [
            "nu se prevăd cu dispozitive speciale de descărcare",
            "se prevăd cu dispozitive speciale de descărcare",
            "se prevăd cu dispozitive speciale de descărcare în anumite situații"
        ],
        "answer": "nu se prevăd cu dispozitive speciale de descărcare",
        "reference": "https://example.com/reference"
    },
    {
        "question": " În  rețelele  în care funcțiunile de conductor de protecție și de conductor neutru  sunt îndeplinite de un singur conductor (PEN) ",
        "options": [
            " porțiunea comună trebuie să nu se găsească în aval de un dispozitiv de protecție la curent diferențial rezidual",
            "porțiunea comună se poate găsi în aval de un dispozitiv de protecție la curent diferențial rezidual, dacă rețeaua este de tip TN",
            " porțiunea comună se poate găsi în aval de un dispozitiv de protecție la curent diferențial rezidual, dacă rețeaua este de tip TT"
        ],
        "answer": " porțiunea comună trebuie să nu se găsească în aval de un dispozitiv de protecție la curent diferențial rezidual",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Secțiunea  conductorului PEN trebuie să fie cel puțin egală cu ",
        "options": [
            " 10 mm2 Cu sau  Al ",
            " 6 mm2 Cu sau 10 mm2 Al ",
            " 10 mm2 Cu sau 16 mm2 Al "
        ],
        "answer": " 10 mm2 Cu sau 16 mm2 Al ",
        "reference": "https://example.com/reference"
    },
    {
        "question": " Atunci când secţiunea conductorului neutru este cel puţin egală sau echivalentă cu a conductorului de fază",
        "options": [
            " nu este necesar să se prevadă o protecţie de supracurent pe conductorul neutru dacă rețeaua este de tip  TN ",
            "  este necesar să se prevadă o protecţie de supracurent pe conductorul neutru dacă rețeaua este de tip  TT ",
            " nu este cazul să se prevadă o protecţie de supracurent pe conductorul neutru dacă rețeaua este de tip  IT "
        ],
        "answer": " nu este necesar să se prevadă o protecţie de supracurent pe conductorul neutru dacă rețeaua este de tip  TN ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Într-o rețea de tip TN, atunci când secţiunea conductorului neutru este mai mica decât cea a conductoarelor de fază, ",
        "options": [
            "este necesar să se prevadă o protecţie de supracurent pe conductorul neutru,  corespunzătoare secţiunii conductorului de fază. ",
            "este necesar să se prevadă o protecţie de supracurent pe conductorul neutru,  corespunzătoare secţiunii acestui conductor. ",
            " nu este necesar să se prevadă o protecţie de supracurent pe conductorul neutru  "
        ],
        "answer": "este necesar să se prevadă o protecţie de supracurent pe conductorul neutru,  corespunzătoare secţiunii acestui conductor. ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Protecţia de supracurent prevăzută pe conductorul neutru trebuie să producă deconectarea   ",
        "options": [
            " conductoarelor active",
            " conductorului neutru, numai dacă este o rețea IT ",
            " conductorului neutru, numai dacă este o rețea TT "
        ],
        "answer": " conductoarelor active",
        "reference": "https://example.com/reference"
    },
    {
        "question": " Instalarea prizelor în depozitele cu materiale combustibile categoria BE2 ",
        "options": [
            "nu se admite ",
            "se admite ",
            "se admite condiţionat"
        ],
        "answer": "se admite condiţionat",
        "reference": "https://example.com/reference"
    },
    {
        "question": " Conform prevederilor I 7 - 2011, alegerea secţiunii conductoarelor şi barelor din interiorul unui tablou este responsabilitatea .",
        "options": [
            "proiectantului instalației electrice",
            "producătorului",
            "verificatorului de proiect"
        ],
        "answer": "proiectantului instalației electrice",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Dacă de la orice punct al unei instalaţii funcţiile de conductor neutru (N) şi de conductor de protecţie (PE) sunt asigurate prin conductoare separate",
        "options": [
            "este permis să se conecteze conductorul neutru la orice altă parte a instalaţiei legată la pământ",
            "este permis să se conecteze conductorul neutru la orice altă parte a instalaţiei legată la pământ, în anumite situații",
            "nu este permis să se conecteze conductorul neutru la orice altă parte a instalaţiei legată la pământ"
        ],
        "answer": "nu este permis să se conecteze conductorul neutru la orice altă parte a instalaţiei legată la pământ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Dacă de la orice punct al unei instalaţii funcţiile de conductor neutru (N) şi de conductor de protecţie (PE) sunt asigurate prin conductoare separate",
        "options": [
            " Se prevede bornă sau bară comune pentru conductoarele de neutru şi respectiv conductoarele de protecţie.",
            " Se prevăd borne sau bare separate pentru conductoarele de neutru şi respectiv conductoarele de protecţie.",
            " Se prevăd borne sau bare separate pentru conductoarele de neutru şi respectiv conductoarele de protecţie, în anumite situații"
        ],
        "answer": " Se prevăd borne sau bare separate pentru conductoarele de neutru şi respectiv conductoarele de protecţie.",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Izolaţia dublă este .",
        "options": [
            " izolaţie realizată prin utilizarea împreună a unei izolaţii de bază şi a unei izolaţii suplimentare",
            "izolaţia părţilor active periculoase care asigură un grad de protecţie împotriva şocurilor electrice, echivalent celui unei izolaţii duble",
            "izolaţia independentă prevăzută suplimentar faţă de izolaţia de bază, pentru protecţie în caz de defect."
        ],
        "answer": " izolaţie realizată prin utilizarea împreună a unei izolaţii de bază şi a unei izolaţii suplimentare",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Izolaţia întărită este  .",
        "options": [
            " izolaţie realizată prin utilizarea împreună a unei izolaţii de bază şi a unei izolaţii suplimentare",
            "izolaţia părţilor active periculoase care asigură un grad de protecţie împotriva şocurilor electrice, echivalent celui unei izolaţii duble",
            "izolaţia independentă prevăzută suplimentar faţă de izolaţia de bază, pentru protecţie în caz de defect."
        ],
        "answer": " izolaţie părţilor active periculoase care asigură un grad de protecţie împotriva şocurilor electrice, echivalent celui unei izolaţii duble",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Utilizarea dispozitivelor de curent diferenţial rezidual DDR reprezintă:  ",
        "options": [
            "o măsură tehnică de protecţie pentru protecţia de bază ",
            "o măsură tehnică de protecţie pentru protecţia de defect ",
            "o măsură tehnică suplimentară "
        ],
        "answer": "o măsură tehnică suplimentară ",
        "reference": "https://example.com/reference"
    },
    {
        "question": " În cazul unei clădiri alimentate dintr-un post de transformare,  între priza de pământ a clădirii şi priza de pământ a postului de transformare trebuie să fie o distanţă de: ",
        "options": [
            "cel mult 1000 m",
            "cel puţin 20 m",
            "cel puţin 40 m"
        ],
        "answer": "cel puţin 20 m",
        "reference": "https://example.com/reference"
    },
    {
        "question": " În cazul unei clădiri alimentate dintr-un post de transformare :  ",
        "options": [
            "se prevăd întotdeauna prize de pământ separate, la clădire și la postul de transformare",
            "în anumite situații se prevede o priză de pământ comună cu rezistenţă de cel mult 1 Ω.",
            "în anumite situații se prevede o priză de pământ comună cu rezistenţă de cel mult 4 Ω."
        ],
        "answer": "în anumite situații se prevede o priză de pământ comună cu rezistenţă de cel mult 1 Ω.",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Montarea în contact direct cu materiale combustibile se admite ",
        "options": [
            "pentru cabluri cu izolație din PVC",
            "pentru toate tuburile şi plintele din materiale plastice ",
            "pentru cabluri cu întârziere la propagarea flăcării "
        ],
        "answer": "pentru cabluri cu întârziere la propagarea flăcării ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Montarea în contact direct cu materiale combustibile se admite ",
        "options": [
            "pentru toate tuburile şi plintele din materiale plastice ",
            "pentru cabluri rezistente la foc",
            "pentru cabluri cu izolație din PVC"
        ],
        "answer": "pentru cabluri rezistente la foc",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Prizele cu tensiunea de 230 V care se montează într-o instalație electrică trebuie să fie întotdeauna:",
        "options": [
            "în construcţie capsulată",
            "cu contact de protecţie",
            "în execuţie sub tencuială"
        ],
        "answer": "cu contact de protecţie",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Conform I7/2011, conductor de protecţie (PE)   ",
        "options": [
            " este un conductor prevăzut în linile aeriene de joasă tensiune pentru protecția împotriva loviturilor de trăsnet",
            "este un conductor prevăzut în scopuri de securitate, de exemplu protecţia împotriva şocurilor electrice. ",
            "nu există conductor de protecție în instalațiile de joasă tensiune"
        ],
        "answer": "este un conductor prevăzut în scopuri de securitate, de exemplu protecţia împotriva şocurilor electrice. ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Separarea de protecţie – este o separare între două circuite electrice prin intermediul:\n",
        "options": [
            "unei izolaţii de bază",
            "unei protecţii electrice printr-un ecran, ",
            "unei izolaţii duble"
        ],
        "answer": "unei izolaţii duble",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Separarea de protecţie – este o separare între două circuite electrice prin intermediul:\n",
        "options": [
            "unei izolaţii întărite",
            "unei protecţii electrice printr-un ecran, ",
            "unei izolaţii de bază"
        ],
        "answer": "unei izolaţii întărite",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Legarea la pământ  reprezintă realizarea unei legături electrice  ",
        "options": [
            "numai între un punct dat al unui echipament şi un pământ local.",
            " numai între un punct dat al unei reţele şi un pământ local.",
            " între un punct dat al unei reţele sau al unui echipament şi un pământ local."
        ],
        "answer": " între un punct dat al unei reţele sau al unui echipament şi un pământ local.",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Legarea la pământ  reprezintă realizarea unei legături electrice  ",
        "options": [
            "numai între un punct dat  al unei instalaţii electrice  şi un pământ local.",
            " numai între un punct dat al unei reţele şi un pământ local.",
            " între un punct dat al unei reţele sau al unei instalaţii electrice  şi un pământ local."
        ],
        "answer": " între un punct dat al unei reţele sau al unei instalaţii electrice  şi un pământ local.",
        "reference": "https://example.com/reference"
    },
    {
        "question": " Conductoarele, barele, tuburile etc. ",
        "options": [
            "nu se pot dispune pe trasee comune cu traseele altor instalaţii",
            "se pot dispune pe trasee comune cu traseele altor instalaţii cu îndeplinirea unor condiţii",
            " se pot dispune pe trasee comune cu traseele altor instalaţii, fără alte condiții, dacă sunt în montaj aparent."
        ],
        "answer": "se pot dispune pe trasee comune cu traseele altor instalaţii cu îndeplinirea unor condiţii",
        "reference": "https://example.com/reference"
    },
    {
        "question": "In România tensiunea nominala de joasă tensiune asigurata de reţeaua de distribuţie publică ",
        "options": [
            "este monofazata 230 V şi trifazata 400/230V, în sistem TN-S",
            "este monofazata  400 V şi trifazata 690 V,                         în sistem TN-C",
            "este monofazata 230 V şi trifazata 400/230V, în sistem TN-C"
        ],
        "answer": "este monofazata 230 V şi trifazata 400/230V, în sistem TN-C",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Utilizarea conductelor metalice pentru gaze şi/sau lichide inflamabile drept conductoare de protecţie:",
        "options": [
            "este recomandată  ",
            "este permisă condiţionat",
            "nu este permisă"
        ],
        "answer": "nu este permisă",
        "reference": "https://example.com/reference"
    },
    {
        "question": "*Dacă instalaţiile electrice sunt în distribuţie prefabricată în învelişuri metalice (cutii, carcase), aceste învelişuri ",
        "options": [
            "pot fi utilizate drept conductoare de protecţie, în anumite condiții",
            "nu pot fi utilizate drept conductoare de protecţie",
            "pot fi utilizate întotdeauna drept conductoare de protecţie"
        ],
        "answer": "nu pot fi utilizate drept conductoare de protecţie",
        "reference": "https://example.com/reference"
    },
    {
        "question": " Utilizarea unei singure culori pentru toate conductoarele de fază ale unui circuit   ",
        "options": [
            "este interzisă",
            "este permisă, cu marcarea corespunzătoare la cele două extremităţi",
            "este permisă dacă nu se folosește una dintre culorile verde sau galben"
        ],
        "answer": "este permisă, cu marcarea corespunzătoare la cele două extremităţi",
        "reference": "https://example.com/reference"
    },
    {
        "question": " Tipurile de reţele în funcţie de modul de legare la pământ pentru tensiune alternativă sunt: \n",
        "options": [
            "TI, TT şi IT.",
            "TN, TI şi IT.",
            "TN, TT şi IT."
        ],
        "answer": "TN, TT şi IT.",
        "reference": "https://example.com/reference"
    },
    {
        "question": " Într-o reţea TN, punerea la masă a unei faze ",
        "options": [
            "nu conduce la apariția unui curent de defect",
            "conduce la apariția unui curent de defect",
            "conduce la apariția unui curent de defect trecător"
        ],
        "answer": "conduce la apariția unui curent de defect",
        "reference": "https://example.com/reference"
    },
    {
        "question": " In toate reţelele TN, atunci când există un conductor PE sau PEN, acestea, când fac parte din componenţa tablourilor de distribuţie ",
        "options": [
            "trebuie legate la pământ numai dacă rezistența de dispersie a rețelei de legare la pământ este < 4Ω",
            "pot fi sau nu legate la pământ ",
            "trebuie legate la pământ obligatoriu "
        ],
        "answer": "trebuie legate la pământ obligatoriu ",
        "reference": "https://example.com/reference"
    },
    {
        "question": " Pe circuitele de alimentare ale dispozitivelor de stingere a incendiilor.",
        "options": [
            "se recomandă să se prevadă protecţia la suprasarcina ",
            "se recomandă să nu se prevadă protecţia la suprasarcina ",
            "este obligatoriu să se prevadă protecţia la suprasarcina "
        ],
        "answer": "se recomandă să nu se prevadă protecţia la suprasarcina ",
        "reference": "https://example.com/reference"
    },
    {
        "question": " Pe circuitele de alimentare ale dispozitivelor de stingere a incendiilor.",
        "options": [
            "se permite renunţarea la protecţia la scurtcircuit ",
            "este obligatoriu să se prevadă protecţia la scurtcircuit ",
            "în norme nu sunt prevederi speciale pentru protecția la scurtcircuit a circuitelor de acest tip  "
        ],
        "answer": "se permite renunţarea la protecţia la scurtcircuit ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Atunci când un dispozitiv de protecție  trebuie să deconecteze toate conductoarele active din circuitul corespondent, ",
        "options": [
            "conductorul neutru trebuie să fie deconectat înaintea conductoarelor de fază",
            "conductorul neutru trebuie să fie deconectat simultan cu conductoarele de fază",
            "conductorul neutru trebuie să nu fie deconectat înaintea conductoarelor de fază"
        ],
        "answer": "conductorul neutru trebuie să fie deconectat simultan cu conductoarele de fază",
        "reference": "https://example.com/reference"
    },
    {
        "question": "În instalaţiile electrice ale construcţiilor se utilizează oțelul sub formă de ",
        "options": [
            "conductoare neizolate rigide (bare)",
            "conductoare izolate ",
            "conductoare neizolate"
        ],
        "answer": "conductoare neizolate",
        "reference": "https://example.com/reference"
    },
    {
        "question": " Tuburile şi ţevile metalice",
        "options": [
            " nu se pot monta direct pe elementele de construcţie din materiale combustibile.",
            "se pot monta direct pe elementele de construcţie din materiale combustibile, condiționat.",
            "se pot monta direct pe elementele de construcţie din materiale combustibile"
        ],
        "answer": "se pot monta direct pe elementele de construcţie din materiale combustibile",
        "reference": "https://example.com/reference"
    },
    {
        "question": " Dozele de derivaţie se instalează ",
        "options": [
            "numai pe suprafeţele verticale ale elementelor de construcţii",
            "cu prioritate pe suprafeţele verticale ale elementelor de construcţii",
            "pe sau în pardoseală, indiferent de tipul dozei "
        ],
        "answer": "cu prioritate pe suprafeţele verticale ale elementelor de construcţii",
        "reference": "https://example.com/reference"
    },
    {
        "question": " La consumatorii alimentaţi din surse proprii de energie electrică, puterea motoarelor care pot fi pornite direct se determină pe bază de calcul,",
        "options": [
            " verificându-se satisfacerea condiţiei de cădere de tensiune admisă.",
            "dar nu se va depăşi 20% din puterea instalată a sursei ",
            "dar nu se va depăşi 10% din puterea instalată a sursei "
        ],
        "answer": "dar nu se va depăşi 20% din puterea instalată a sursei ",
        "reference": "https://example.com/reference"
    },
    {
        "question": " În fiecare instalaţie la nivelul tabloului general trebuie prevăzută",
        "options": [
            "o bornă / bară principală de legare la pământ, numai atunci când reţeaua de distribuţie este TN-C;",
            "o bornă / bară principală de legare la pământ",
            "o bornă / bară principală de legare la pământ, numai în cazul în care alimentarea receptoarelor se face în sistem TN-S "
        ],
        "answer": "o bornă / bară principală de legare la pământ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Circuitele iluminatului normal ",
        "options": [
            "trebuie să fie distincte de circuitele de prize.",
            "poate fi un circuit comun pentru iluminat normal și prize dacă puterea totală instalată pe circuit nu depășește 2 kW",
            "poate fi un circuit comun pentru iluminat normal și prize dacă puterea totală instalată pe circuit nu depășește3 kW pe un circuit monofazat şi 8 kW pe un circuit trifazat"
        ],
        "answer": "trebuie să fie distincte de circuitele de prize.",
        "reference": "https://example.com/reference"
    },
    {
        "question": " Rezistenţa prizei de pământ a unei clădiri, atunci când este folosită numai pentru protecţia împotriva şocurilor electrice, trebuie să fie cel mult",
        "options": [
            " 10 Ω",
            " 1 Ω",
            " 4 Ω"
        ],
        "answer": " 10 Ω",
        "reference": "https://example.com/reference"
    },
    {
        "question": " Atunci când între priza de pământ a clădirii şi priza de pământ a postului de transformare (ce alimentează clădirea) este o distanță mai mică decât cea prevăzută de norme, se prevede o priză de pământ comună cu rezistenţă de cel mult ",
        "options": [
            "10 Ω",
            "1 Ω.",
            "4 Ω"
        ],
        "answer": "4 Ω",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Reţeaua electrică a operatorului de transport/distribuţie ",
        "options": [
            "constituie două surse de alimentare pentru locul de consum respectiv, dacă acesta este racordat  printr-un post de transformare alimentat din două stații de treanformare, echipat cu două transformatoare și instalație de AAR  \n",
            "constituie două surse de alimentare pentru locul de consum respectiv, dacă acesta este racordat  printr-un post de transformare echipat cu două transformatoare și instalație de AAR  \n",
            "constituie o singură sursă de alimentare (SEN) pentru locul de consum respectiv, indiferent de numărul de instalaţii electrice prin care este racordat"
        ],
        "answer": "constituie o singură sursă de alimentare (SEN) pentru locul de consum respectiv, indiferent de numărul de instalaţii electrice prin care este racordat",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Pe un circuit   care alimentează mai multe receptoare electrice de putere de aceeaşi natură şi destinaţie ",
        "options": [
            "nu se prevede protecție comună la scurtcircuit ",
            "nu se prevede protecție comună la suprasarcină",
            "se prevede protecție la suprasarcină dacă puterea totală instalată a acestor receptoare  depăşeşte 16 kW"
        ],
        "answer": "se prevede protecție la suprasarcină dacă puterea totală instalată a acestor receptoare  depăşeşte 16 kW",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Reţeaua generală a conductoarelor principale de legare la pământ de protecţie din instalaţiile electrice pentru şantiere de construcţii şi de demolare ",
        "options": [
            "se realizează buclat în toate cazurile în care acest lucru este posibil.",
            "se realizează buclat în toate cazurile",
            "se realizează radial, pentru reducerea consumului de materiale "
        ],
        "answer": "se realizează buclat în toate cazurile în care acest lucru este posibil.",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Reţeaua generală de protecţie din instalaţiile electrice pentru şantiere de construcţii şi de demolare, care se execută ramificat, se leagă la toate capetele de linie şi la punctele de ramificaţie la câte o priză de pământ fixă de ",
        "options": [
            "1 Ω.",
            "4 Ω.",
            "10 Ω."
        ],
        "answer": "4 Ω.",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Protecţia motoarelor trifazate la suprasarcină se realizează cu un dispozitiv dependent de curent, cu temporizare, care monitorizează toate cele trei faze, reglat la .",
        "options": [
            "cel mult 0,8 din valoarea curentului nominal al motorului",
            "cel mult valoarea curentului nominal al motorului",
            "cel mult 0,9 din valoarea curentului nominal al motorului"
        ],
        "answer": "cel mult valoarea curentului nominal al motorului",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Dispozitivul de protecție la suprasarcină a motoarelor trifazate  va acţiona în 2 ore sau mai puţin la o valoare  ",
        "options": [
            "egală cu a curentului reglat",
            "de 1,05 ori curentul reglat",
            "de 1,20 ori curentul reglat"
        ],
        "answer": "de 1,20 ori curentul reglat",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Dispozitivul de protecție la suprasarcină a motoarelor trifazate  nu va acţiona într-un interval de 2 ore la o valoare ",
        "options": [
            "de 1,05 ori curentul reglat",
            "de 1,25 ori curentul reglat",
            "de 1,20 ori curentul reglat"
        ],
        "answer": "de 1,05 ori curentul reglat",
        "reference": "https://example.com/reference"
    },
    {
        "question": "În instalaţiile electrice ale consumatorilor, pentru îmbunătăţirea factorului de putere, se utilizează ",
        "options": [
            "condensatoarele derivaţie",
            "condensatoarele serie fixe",
            "condensatoarele serie reglabile în trepte"
        ],
        "answer": "condensatoarele derivaţie",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Compensarea locală (individuală) a energiei reactive consumate se prevede .",
        "options": [
            "numai pentru receptoare inductive cu consum mare de putere reactivă şi cu funcţionare continuă",
            "numai pentru pentru receptoare de putere foarte mică, dar aflate în număr foarte mare ",
            "pentru receptoare inductive cu consum mare de putere reactivă şi cu funcţionare continuă şi pentru cele de putere foarte mică, dar aflate în număr foarte mare "
        ],
        "answer": "pentru receptoare inductive cu consum mare de putere reactivă şi cu funcţionare continuă şi pentru cele de putere foarte mică, dar aflate în număr foarte mare ",
        "reference": "https://example.com/reference"
    },
    {
        "question": " Dacă circuitul unei baterii de condensatoare se protejează cu întreruptor automat (disjunctor) acesta se reglează pentru protecție la suprasarcină la",
        "options": [
            "curentul nominal al bateriei;",
            "1,5 ori curentul nominal al bateriei;",
            "1,2 ori curentul nominal al bateriei;"
        ],
        "answer": "1,5 ori curentul nominal al bateriei;",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Conductorul neutru (N): ",
        "options": [
            "este un conductor conectat electric la punctul neutru al sursei şi care poate contribui la distribuţia energiei electrice",
            "este un conductor conectat electric la punctul neutru al sursei şi care contribuie  la protecția contra atingerilor indirecte ",
            "este un conductor conectat electric la punctul neutru al sursei şi care contribuie la distribuţia energiei electrice și la protecția contra atingerilor indirecte "
        ],
        "answer": "este un conductor conectat electric la punctul neutru al sursei şi care poate contribui la distribuţia energiei electrice",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Protecţia de bază (protecţia împotriva atingerilor directe) se realizează  ",
        "options": [
            "numai prin măsuri administrative",
            "prin măsuri tehnice şi organizatorice",
            "numai prin măsuri tehnice"
        ],
        "answer": "numai prin măsuri tehnice",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Curentul admisibil  este",
        "options": [
            "valoarea maximă a curentului electric care poate parcurge în permanenţă un conductor, un dispozitiv sau un aparat, fără ca temperatura sa în regim permanent, în condiţii date, să fie superioară valorii specificate.",
            "valoarea maximă a curentului electric care poate parcurge un conductor, un dispozitiv sau un aparat, fără ca temperatura sa în regim de scurtcircuit să fie superioară valorii specificate.",
            " valoarea maximă a curentului electric care poate parcurge în permanenţă un conductor, un dispozitiv sau un aparat, fără ca temperatura sa în condiţiile unei puneri la pământ, să fie superioară valorii specificate."
        ],
        "answer": "valoarea maximă a curentului electric care poate parcurge în permanenţă un conductor, un dispozitiv sau un aparat, fără ca temperatura sa în regim permanent, în condiţii date, să fie superioară valorii specificate.",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Curent nominal este un  ",
        "options": [
            "curent electric destinat a fi transportat de un circuit în funcţionarea în regim de defect simplu un timp limitat",
            "curent electric destinat a fi transportat de un circuit în funcţionarea în regim de scurtcircuit un timp limitat",
            "curent electric destinat a fi transportat de un circuit în funcţionarea normală pe timp nelimitat"
        ],
        "answer": "curent electric destinat a fi transportat de un circuit în funcţionarea normală pe timp nelimitat",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Părţile conductoare străine ",
        "options": [
            "pot fi utilizate drept conductoare PEN în tensiune alternativă ",
            "pot fi utilizate, în anumite condiții, drept conductoare PEN în tensiune alternativă ",
            "nu trebuie utilizate drept conductoare PEN în tensiune alternativă "
        ],
        "answer": "nu trebuie utilizate drept conductoare PEN în tensiune alternativă ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Priza de pământ independentă este o priză de pământ ",
        "options": [
            "care nu face parte dintr-o instalaţie de legare la pământ ",
            "suficient de îndepărtată de alte prize de pământ pentru ca potenţialul său electric să nu fie sensibil afectat de curenţii electrici între pământ şi alte prize de pământ.",
            "care nu face parte dintr-o reţea de prize de pământ  "
        ],
        "answer": "suficient de îndepărtată de alte prize de pământ pentru ca potenţialul său electric să nu fie sensibil afectat de curenţii electrici între pământ şi alte prize de pământ.",
        "reference": "https://example.com/reference"
    },
    {
        "question": " Pentru realizarea prizelor de pământ se recomandă electrozi din ",
        "options": [
            "bare rotunde, ţevi sau profil cruce",
            "conductele metalice pentru lichide inflamabile sau gaze.",
            "obiectele metalice cufundate în apă "
        ],
        "answer": "bare rotunde, ţevi sau profil cruce",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Priza de pământ este o",
        "options": [
            "parte conductoare încorporată obligatoiu în pământ ",
            "parte conductoare care poate fi încorporată într-un mediu conductor specific, de exemplu beton sau cărbune, izolat față de pământ.",
            "parte conductoare care poate fi încorporată în pământ sau într-un mediu conductor specific, de exemplu beton sau cărbune, în contact cu pământul."
        ],
        "answer": "parte conductoare care poate fi încorporată în pământ sau într-un mediu conductor specific, de exemplu beton sau cărbune, în contact cu pământul.",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Conform normativului I7 - 2011, prin                ,, Pământ de referinţă \" se înțelege \n",
        "options": [
            " o parte a Pământului în contact electric cu o priză de pământ independentă ",
            " o parte a Pământului în contact electric cu o instalaţie de legare la pământ ",
            "o parte a Pământului considerată conductoare, al cărei potenţial electric prin convenţie este considerat egal cu zero, care este în afara zonei de influenţă a oricărei instalaţii de legare la pământ "
        ],
        "answer": "o parte a Pământului considerată conductoare, al cărei potenţial electric prin convenţie este considerat egal cu zero, care este în afara zonei de influenţă a oricărei instalaţii de legare la pământ ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Folosirea mijloacelor individuale de protecţie electroizolante certificate",
        "options": [
            "este o măsură tehnică pentru protecţia  de bază (la atingere directă) ",
            "este o măsură tehnică principală pentru protecţia  în caz de defect (protecţia la atingere indirectă) ",
            "este o măsură administrativă pentru protecţia  de bază (la atingere directă) "
        ],
        "answer": "este o măsură tehnică pentru protecţia  de bază (la atingere directă) ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Scoaterea de sub tensiune a instalaţiei la care se lucrează",
        "options": [
            "este o măsură tehnică pentru protecţia  de bază (la atingere directă) ",
            "este o măsură organizatorică pentru protecţia  de bază (la atingere directă) ",
            "este o măsură tehnică principală pentru protecţia  în caz de defect (protecţia la atingere indirectă) "
        ],
        "answer": "este o măsură organizatorică pentru protecţia  de bază (la atingere directă) ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Dacă tensiunea nominală a reţelei este sub 500V în tensiune alternativă şi tensiune continuă, ,,Mediu neconductor\" reprezintă un spaţiu în care o persoană sau un animal care atinge o parte conductoare accesibilă care a devenit o parte activă periculoasă, este protejată printr-o impedanţă ridicată a mediului său (de exemplu pereţi sau pardoseli electroizolante) de cel puțin ",
        "options": [
            "20 kΩ ",
            "30 kΩ ",
            "50 kΩ "
        ],
        "answer": "50 kΩ ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Limitarea tensiunii de alimentare, care să nu depăşească limitele TFJ (conform  \nrecomandărilor din SR CEI / TS 61201) ",
        "options": [
            "este o măsură tehnică pentru protecţia  de bază (la atingere directă) ",
            "este o măsură organizatorică pentru protecţia  de bază (la atingere directă) ",
            "este o măsură tehnică suplimentară pentru protecţia  în caz de defect (protecţia la atingere indirectă) "
        ],
        "answer": "este o măsură tehnică suplimentară pentru protecţia  în caz de defect (protecţia la atingere indirectă) ",
        "reference": "https://example.com/reference"
    },
    {
        "question": " Izolarea dublă sau întărită a echipamentelor electrice – clasă II de izolaţie.   ",
        "options": [
            "este o măsură tehnică suplimentară pentru protecţia  în caz de defect (protecţia la atingere indirectă) ",
            "este o măsură tehnică principală pentru protecţia  în caz de defect (protecţia la atingere indirectă) ",
            "este o măsură organizatorică pentru protecţia  în caz de defect (protecţia la atingere indirectă) "
        ],
        "answer": "este o măsură tehnică principală pentru protecţia  în caz de defect (protecţia la atingere indirectă) ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Separarea simplă este ",
        "options": [
            "o separare între circuitele electrice sau între un circuit electric şi pământul local printr-o izolaţie dublă ",
            "o separare între circuitele electrice sau între un circuit electric şi pământul local printr-o izolaţie întărită",
            "o separare între circuitele electrice sau între un circuit electric şi pământul local printr-o izolaţie de bază"
        ],
        "answer": "o separare între circuitele electrice sau între un circuit electric şi pământul local printr-o izolaţie de bază",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Tensiunea de defect este  ",
        "options": [
            "tensiunea între un punct de defect şi pământul de referinţă, ca urmare a unui defect de izolaţie",
            "tensiunea între un punct de defect şi pământ, ca urmare a unui defect de izolaţie",
            "tensiunea între un punct de defect şi o parte conductoare accesibilă"
        ],
        "answer": "tensiunea între un punct de defect şi pământul de referinţă, ca urmare a unui defect de izolaţie",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Abrevierea TN-C  înseamnă ",
        "options": [
            " reţea cu punctul neutru al transformatorului legat la pământ şi masele legate la prize de pământ independente.\n",
            " reţea cu punctul neutru al transformatorului legat la pământ şi conductor cu funcţii comune: de protecţie şi neutru;",
            " reţea cu punctul neutru al transformatorului legat la pământ şi conductoare distincte pentru funcţiile de protecţie şi neutru"
        ],
        "answer": " reţea cu punctul neutru al transformatorului legat la pământ şi conductor cu funcţii comune: de protecţie şi neutru;",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Abrevierea TN-S înseamnă ",
        "options": [
            " reţea cu punctul neutru al transformatorului legat la pământ şi conductor cu funcţii comune: de protecţie şi neutru;",
            " reţea cu punctul neutru al transformatorului legat la pământ şi masele legate la prize de pământ independente.",
            "reţea cu punctul neutru al transformatorului legat la pământ şi conductoare distincte pentru funcţiile de protecţie şi neutru;"
        ],
        "answer": "reţea cu punctul neutru al transformatorului legat la pământ şi conductoare distincte pentru funcţiile de protecţie şi neutru;",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Abrevierea TT înseamnă ",
        "options": [
            " reţea cu punctul neutru al transformatorului legat la pământ şi conductor cu funcţii comune: de protecţie şi neutru;",
            "reţea cu punctul neutru al transformatorului legat la pământ şi masele legate la prize de pământ independente.",
            " reţea cu punctul neutru al transformatorului legat la pământ şi conductoare distincte pentru funcţiile de protecţie şi neutru"
        ],
        "answer": "reţea cu punctul neutru al transformatorului legat la pământ şi masele legate la prize de pământ independente.",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Rezistenţa de izolaţie a pardoselii şi pereţilor în fiecare punct de măsurare în condiţiile specificate în SR EN 61140 şi verificate printr-o metoda recomandată în Anexa 8.1 din I7/2011, dacă tensiunea nominală a instalaţiei nu depăşeşte 500 V în tensiune continuă sau alternativă, trebuie să fie mai mare de ",
        "options": [
            "75 kΩ",
            "50 kΩ",
            "100 kΩ"
        ],
        "answer": "50 kΩ",
        "reference": "https://example.com/reference"
    }
];

// Export the questions array so it can be used in other files
export { BASE_QUESTIONS };