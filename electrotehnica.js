const BASE_QUESTIONS = [
    {
        "question": "Atunci când se compensează energia electrica reactiva prin baterii de condensatoare, tensiunea în reţeaua electrica:",
        "options": [
            "scade",
            "nu se modifica",
            "creste"
        ],
        "answer": "creste",
        "reference": "https://senys.ro/compensarea-energiei-reactive-inductive-prin-baterii-de-condensatoare/"
    },
    {
        "question": "Bobinele de stingere din staţiile electrice de transformare sunt echipamente pentru:",
        "options": [
            "compensarea factorului de putere",
            "dotări PSI",
            "compensarea curenţilor capacitivi"
        ],
        "answer": "compensarea curenţilor capacitivi",
        "reference": "https://eneroptim.ro/produse/bobina-stingere/"
    },
    {
        "question": "Câmpul magnetic poate fi produs:",
        "options": [
            "numai de magneţi permanenţi",
            "numai de electromagneţi",
            "de magneţi permanenţi si de electromagneţi"
        ],
        "answer": "de magneţi permanenţi si de electromagneţi",
        "reference": "https://www.tme.eu/ro/news/library-articles/page/59558/campul-magnetic-sursele-i-proprietatile-sale/"
    },
    {
        "question": "3 condensatoare având capacitatea C1=100 μF, C2=50 μF, C3=100 μF legate în paralel, au capacitatea echivalentă.",
        "options": [
            "25 μF",
            "250 μF",
            "50 μF"
        ],
        "answer": "250 μF",
        "reference": "https://sites.google.com/site/bazeleelectronicii/home/condensatoare-si-reactanta-capacitiva/6-condensatoare-in-paralel"
    },
    {
        "question": "A doua lege a lui Kirchhoff, pentru o reţea electrică cu N noduri şi L laturi (L diferit de N), ne furnizează, pentru analiza unui circuit electric:",
        "options": [
            "L+N-1 ecuaţii distincte",
            "L-N +1 ecuaţii distincte",
            "N-L+1 ecuaţii distincte"
        ],
        "answer": "L-N +1 ecuaţii distincte",
        "reference": "https://www.fizichim.ro/en/docs/fizica/clasa10/capitolul2-producerea-si-utilizarea-curentului-continuu/II-7-legile-lui-kirchhoff/"
    },
    {
        "question": "AAR se utilizează în scopul:",
        "options": [
            "limitării curenţilor de scurtcircuit",
            "creşterii continuităţii în alimentare",
            "reducerii pierderilor de energie pe linii"
        ],
        "answer": "creşterii continuităţii în alimentare",
        "reference": "https://zenessis.ro/ce-inseamna-un-panou-aar-aclansare-automata-a-rezervei-la-generatoare/"
    },
    {
        "question": "Alunecarea s a unui motor asincron are valori:",
        "options": [
            " cuprinse între 1 si 0",
            " cuprinse între -1 si 0",
            " de regulă, mai mari decât 1"
        ],
        "answer": " cuprinse între 1 si 0",
        "reference": "https://www.xindamotor.com/ro/news/how-to-calculate-the-slip-of-an-asynchronous-motor/"
    },
    {
        "question": "Aparatul notat cu C pe desenul de mai sus al unei celule prefabricate de medie tensiune de tip închis, reprezintă un:",
        "image": "images/question8.png",
        "options": [
            "întreruptor",
            "transformator de curent",
            "transformator de tensiune"
        ],
        "answer": "ransformator de curent;",
        "reference": "https://sites.google.com/site/bazeleelectronicii/home/transformatoare/6-transformatorul-de-curent"
    },
    {
        "question": "Care element nu se foloseşte la reglarea tensiunii în reţelele electrice:",
        "options": [
            "bobina de compensare",
            "transformatorul",
            "rezistorul"
        ],
        "answer": "rezistorul",
        "reference": "http://www.efen.ieeia.tuiasi.ro/curs_electro/E3.%20Bazele%20electroenergeticii.pdf"
    },
    {
        "question": "Cele mai des utilizate pentru serviciile interne ale centralelor electrice sunt:",
        "options": [
            "motoarele de curent continuu",
            "motoarele sincrone",
            "motoarele asincrone"
        ],
        "answer": "motoarele asincrone",
        "reference": "https://www.researchgate.net/profile/Sorina-Costinas/publication/258129687_Partea_electrica_a_centralelor_si_statiilor_Note_de_curs/links/54f722500cf2ccffe9da9c63/Partea-electrica-a-centralelor-si-statiilor-Note-de-curs.pdf"
    },
    {
        "question": "Bobinele pentru limitarea curenţilor de scurtcircuit au:",
        "options": [
            "rezistenta mare",
            "inductanţa mare",
            "inductanţa mica"
        ],
        "answer": "inductanţa mare",
        "reference": "https://schemaelectrica.blogspot.com/2015/03/bobine-de-reactanta-in-statiile-de.html"
    },
    {
        "question": "Câmpul electrostatic este descris ",
        "options": [
            "prin: intensitatea câmpului electric",
            "numai prin inducţia electrică",
            "inducţia magnetică"
        ],
        "answer": "prin: intensitatea câmpului electric",
        "reference": "http://www.emie.ugal.ro/curstce/04%20-%20Capitolul%202%20-%20Campul%20electrostatic.pdf"
    },
    {
        "question": "Comparativ cu cele uscate, transformatoarele imersate prezintă : ",
        "options": [
            "o bună rezistenţă la foc;",
            "risc crescut de poluare acustică a mediului ambiant;",
            "necesitatea unor amenajări speciale la instalare"
        ],
        "answer": "o bună rezistenţă la foc;",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Câmp fără surse este ",
        "options": [
            "numai un câmp de curenţi de conducţie în regim staţionar",
            "câmpul electric",
            "câmpul de inducţie magnetică"
        ],
        "answer": "numai un câmp de curenţi de conducţie în regim staţionar",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Bobinele montate pe plecari radiale limiteaza curentii de scurtcircuit\n",
        "options": [
            "atat inainte, cat si dupa punctele lor de racordare la barele statiei; ",
            "inainte de punctele lor de racordare la barele statiei;",
            "dupa punctele lor de racordare la barele statiei."
        ],
        "answer": "atat inainte, cat si dupa punctele lor de racordare la barele statiei; ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Cantitatea de căldura produsã la trecerea curentului electric printr-un conductor este:",
        "options": [
            " direct proporţională cu secţiunea conductorului",
            " direct proporţionala cu pătratul intensităţii curentului",
            " invers proporţionala cu rezistenta conductorului"
        ],
        "answer": " direct proporţională cu secţiunea conductorului",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Cantitatea de electricitate cu care se încarcă o baterie de n condensatoare montate în serie, fiecare de capacitate C, este:",
        "options": [
            "aceeaşi cu care se încarcă fiecare element component",
            "suma cantităţilor cu care se înarcă fiecare element în parte",
            "egală cu de două ori cantitatea de electricitate cu care se încarcă fiecare condensator"
        ],
        "answer": "aceeaşi cu care se încarcă fiecare element component",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Capacitatea de serviciu Cs a unei linii electrice aeriene simetrice, având capacităţile C12=C23=C31 =C şi neglijînd influenţa pământului, este:",
        "options": [
            "Cs=3 C",
            "Cs=C/3",
            "Cs=C"
        ],
        "answer": "Cs=3 C",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Capacitatea echivalentă a 2 condensatoare, fiecare având capacitatea C, montate în serie este egală cu:",
        "options": [
            "2 C ",
            " C/2 ",
            " C "
        ],
        "answer": "2 C ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Capsularea monopolară conduce la :",
        "options": [
            "eliminarea totală a posibilităţii apariţiei unui scurtcircuit între faze; ",
            "micşorarea riscului unor pierderi de gaz izolant;",
            "reducerea cheltuielilor de realizare a instalaţiilor."
        ],
        "answer": "eliminarea totală a posibilităţii apariţiei unui scurtcircuit între faze; ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Care dintre materialele electrotehnice admit o densitate de curent mai mare:",
        "options": [
            "aluminiu",
            "cupru",
            "ambele admit aceeaşi densitate de curent"
        ],
        "answer": "aluminiu",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Care dintre relaţiile următoare este adevărată:",
        "options": [
            "inducţia electrică = permitivitatea x intensitatea câmpului electric ",
            "inducţia electrică = intensitatea câmpului electric/ permitivitate ",
            "inducţia electrică=sarcina x intensitatea câmpului electric "
        ],
        "answer": "inducţia electrică = permitivitatea x intensitatea câmpului electric ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Care dintre schemele alăturate permite obţinerea a două circuite de cuplă diagonală  (cruce ) ?",
        "options": [
            "nan",
            "nan",
            "nan"
        ],
        "answer": "nan",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Care dintre schemele alăturate permite obţinerea a două circuite de cuplă  longitudinală?  ",
        "options": [
            "nan",
            "nan",
            "nan"
        ],
        "answer": "nan",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Care dintre schemele alăturate permite obţinerea a două circuite de cuplă  transversală?  ",
        "options": [
            "nan",
            "nan",
            "nan"
        ],
        "answer": "nan",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Utilizarea unei cuple cu functiuni multiple se prefera atunci cand dorim",
        "options": [
            "scurtarea duratei manevrelor",
            "cresterea continuitatii  in alimentare",
            "reducerea investitiei in echiparea statiei."
        ],
        "answer": "scurtarea duratei manevrelor",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Care este energia consumata de o rezistenta electrica r = 10 Ω, prin care trece un curent de 2 A timp de 10 ore:",
        "options": [
            "200 Wh",
            "400 Wh",
            " 800 Wh"
        ],
        "answer": "200 Wh",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Ce posibilităţi de limitare a curenţilor de scurtcirciut sunt de preferat pentru schema de mai sus ?",
        "options": [
            "reducerea t.e.m., acţionând asupra circuitului de excitaţie al generatorului;",
            "mărirea reactanţei schemei de alimentare între sursă şi locul de defect; ",
            "creşterea capacităţii de rupere a întreruptoarelor."
        ],
        "answer": "reducerea t.e.m., acţionând asupra circuitului de excitaţie al generatorului;",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Curentul electric alternativ poate fi produs numai prin fenomene:",
        "options": [
            "termice",
            "chimice",
            "de inducţie"
        ],
        "answer": "termice",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Scheme cu un sistem de bare colectoare şi un întreruptor pe circuit sunt folosite",
        "options": [
            " numai pentru staţii de conexiuni de 6 kV",
            "pentru toate treptele de tensiune din reţelele de distribuţie",
            " numai pentru staţii de conexiuni de medie tensiune până la 6o kV"
        ],
        "answer": " numai pentru staţii de conexiuni de 6 kV",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Celulele prefabricate monobloc se caracterizează în principal prin:",
        "options": [
            "securitate ridicată a persoanelor;",
            "gamă largă de configuraţii ale schemei de conexiuni;",
            "eliminarea totală a posibilităţii de producere a unui scurtcircuit între faze"
        ],
        "answer": "securitate ridicată a persoanelor;",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Circulaţia câmpului magnetic pe un contur închis este egală cu:",
        "options": [
            "suma algebrică a curenţilor care străbat conturul",
            "zero",
            "suma căderilor de tensiune            de-a lungul conturului"
        ],
        "answer": "suma algebrică a curenţilor care străbat conturul",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Comparativ cu cele imersate, transformatoarele uscate prezintă :",
        "options": [
            "o bună rezistenţă la foc;",
            "risc redus de poluare acustică a mediului ambiant;",
            "necesitatea unor amenajări speciale la instalare"
        ],
        "answer": "o bună rezistenţă la foc;",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Daca la un circuit al unei staţii de 6 sau 20 kV care funcţionează cu neutrul izolat apare o punere monofazatã netã la pământ, tensiunea fata de pământ a celorlalte doua faze:",
        "options": [
            "scade de 1,41 ori",
            "rămâne constanta",
            "creste de 1,73 ori"
        ],
        "answer": "scade de 1,41 ori",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Compartimentarea unei celule electrice se utilizează ",
        "options": [
            " în scopul evitării extinderii avariilor;",
            "numai  în scopul protejării personalului de exploatare;",
            "protecţiei la supratensiuni"
        ],
        "answer": " în scopul evitării extinderii avariilor;",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Compartimentul notat cu 2 pe desenul de mai sus al unei celule prefabricate de medie tensiune de tip închis, reprezintă:",
        "options": [
            "compartimentul de legătură cu reţeaua electrică;",
            "compartimentul aparatajului de comutaţie;",
            "compartimentul circuitelor secundare."
        ],
        "answer": "compartimentul de legătură cu reţeaua electrică;",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Compartimentul notat cu 3 pe desenul de mai sus al unei celule prefabricate de medie tensiune de tip închis, reprezintă:",
        "options": [
            "compartimentul de legătură cu reţeaua electrică;",
            "compartimentul aparatajului de comutaţie;",
            "compartimentul circuitelor secundare."
        ],
        "answer": "compartimentul de legătură cu reţeaua electrică;",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Componenta simetrică directă produce, în cazul unui motor electric:",
        "options": [
            "cuplul util",
            "cuplul de frânare",
            "oscilaţii ale rotorului"
        ],
        "answer": "cuplul util",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Conform Legii lui Coulomb, forţa de atracţie sau de repulsie care se exercită între sarcinile electrice este:",
        "options": [
            "direct proporţională cu pătratul distanţei",
            "invers proporţională cu pătratul distanţei",
            "direct proporţională cu distanţa"
        ],
        "answer": "direct proporţională cu pătratul distanţei",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Constanta de timp a unui circuit format dintr-un rezistor de rezistenţă R înseriat cu un condensator de capacitate C, este:",
        "options": [
            "RC",
            "R/C",
            "1/(RC)"
        ],
        "answer": "RC",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Delimitările prin pereţi între celulele unei staţii electrice de interior se utilizează în principal în scopul: ",
        "options": [
            "asigurării unui acces mai comod la aparataj;",
            "limitării zgomotului în corpul de conexiuni;",
            "evitării extinderii avariilor."
        ],
        "answer": "asigurării unui acces mai comod la aparataj;",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Curentul care circula printr-un circuit de curent alternativ, având rezistenta r=3 Ω, reactanţa x= 4 Ω si la bornele căruia se aplica o tensiune de 220 V este:",
        "options": [
            "31,5 A",
            "44 A",
            "53,4 A"
        ],
        "answer": "31,5 A",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Curentul din circuitul statoric al unui generator crește direct proporţional:",
        "options": [
            "cu tensiunea între faze",
            "numai cu puterile active generate",
            "cu puterile reactive generate"
        ],
        "answer": "cu tensiunea între faze",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Durata de viata a lămpilor cu incandescenta:",
        "options": [
            "creste odată cu creşterea frecventei",
            "scade odată cu scăderea tensiunii",
            "scade odată cu creşterea tensiunii"
        ],
        "answer": "creste odată cu creşterea frecventei",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Curentul electric generat prin deplasarea cu viteza v a unui corp încărcat cu o sarcină electrică se numeşte:",
        "options": [
            "curent electric de conducţie",
            "curent electric de convecţie",
            "curent electric de deplasare (Maxwell)"
        ],
        "answer": "curent electric de conducţie",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Curentul produs într-un circuit care conţine elemente neliniare şi care este alimentat cu o tensiune sinusoidală este:",
        "options": [
            "întotdeauna nesinusoidal",
            "întotdeauna sinusoidal",
            "nesinusoidal sau sinusoidal, depinde de natura elementelor neliniare"
        ],
        "answer": "întotdeauna nesinusoidal",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Curentul rezultat prin aplicarea unei tensiuni nesinusoidale la bornele unei bobine este:",
        "options": [
            "mai puţin deformat decât tensiunea care i-a dat naştere",
            "mult mai deformat decât tensiunea care i-a dat naştere",
            "sinusoidal"
        ],
        "answer": "mai puţin deformat decât tensiunea care i-a dat naştere",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Curentul rezultat prin aplicarea unei tensiuni nesinusoidale la bornele unui condensator este:",
        "options": [
            "mult mai deformat decât tensiunea care i-a dat naştere",
            "sinusoidal",
            "mai puţin deformat decât tensiune care i-a dat naştere"
        ],
        "answer": "mult mai deformat decât tensiunea care i-a dat naştere",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Dacă două conductoare parcurse de curenţi în acelaşi sens sunt aşezate paralel, unul lângă altul:",
        "options": [
            "densitatea de curent crește în părţile apropiate ale conductoarelor",
            "densitatea de curent creşte în părţile mai depărtate ale conductoarelor",
            "densitatea de curent este uniformă pe ambele părţi ale conductoarelor"
        ],
        "answer": "densitatea de curent crește în părţile apropiate ale conductoarelor",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Energia transmisă de undele electromagnetice cu intensitatea câmpului electric E şi intensitatea câmpului magnetic H se propagă după un vector:",
        "options": [
            "S=E+H",
            "S=HxE",
            "S=ExH"
        ],
        "answer": "S=E+H",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Dacă o forţă electromotoare E, montată în latura AB a unei reţele pasive, produce în latura CD a reţelei un curent I, montarea f.e.m. E în latura CD va produce în latura AB:",
        "options": [
            "un curent - (minus) I",
            "un curent I",
            "un curent I/2"
        ],
        "answer": "un curent - (minus) I",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Dacă printr-un condensator circulă un curent alternativ sinusoidal, la bornele sale se produce o cădere de tensiune:",
        "options": [
            "defazată cu 90 de grade în urma curentului",
            "defazată cu 90 de grade înaintea curentului",
            "în fază cu curentul"
        ],
        "answer": "defazată cu 90 de grade în urma curentului",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Funcţionarea în doua faze a unui transformator trifazat are ca efect:",
        "options": [
            "supraîncălzirea acestuia",
            "suprasarcina",
            "reducerea puterii tranzitate"
        ],
        "answer": "supraîncălzirea acestuia",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Descărcătoarele cu oxid de zinc protejează echipamentele din reţele împotriva:",
        "options": [
            "supratensiunilor",
            "supracurenţilor",
            "solicitărilor mecanice"
        ],
        "answer": "supratensiunilor",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Descărcătoarele cu oxizi de zinc sunt echipamente destinate:",
        "options": [
            "protecţiei personalului de exploatare împotriva electrocutării",
            "protecţiei împotriva supratensiunilor",
            "protecţiei împotriva supracurenţilor"
        ],
        "answer": "protecţiei personalului de exploatare împotriva electrocutării",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Diferenţa de potenţial la bornele a n baterii de condensatoare montate în serie este egală cu:",
        "options": [
            " suma diferenţelor de potenţial la bornele fiecărui condensator ",
            "diferenţa de potenţial la bornele fiecărui condensator în parte ",
            "diferenţa de potenţial a unui condensator împărţită la n"
        ],
        "answer": " suma diferenţelor de potenţial la bornele fiecărui condensator ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Două funcţii periodice sinusoidale sunt armonice între ele dacă:",
        "options": [
            "raportul perioadelor lor este un număr întreg oarecare",
            "au aceeaşi perioadă",
            "raportul perioadelor lor este egal cu 1/2"
        ],
        "answer": "raportul perioadelor lor este un număr întreg oarecare",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Două sisteme de fazori trifazaţi oarecare, care au vârfuri comune şi origini diferite care se descompun în componente simetrice:",
        "options": [
            "au numai aceleaşi componente directe (pozitive)",
            "au aceleaşi componente inverse (negative)",
            "au aceleaşi componente homopolare (zero)"
        ],
        "answer": "au numai aceleaşi componente directe (pozitive)",
        "reference": "https://example.com/reference"
    },
    {
        "question": "În cazul conexiunii în stea la transformator:",
        "options": [
            "tensiunea de linie este egala cu tensiunea de faza",
            "curentul de linie este egal cu ~1,73 x curentul de faza",
            "tensiunea de linie este egala cu ~1,73 x tensiunea de faza"
        ],
        "answer": "tensiunea de linie este egala cu tensiunea de faza",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Efectul pelicular al curentului este utilizat în:",
        "options": [
            "încălzirea materialelor prin inducţie",
            "eliminarea dezechilibrelor din reţeaua electrică",
            "eliminarea distorsiunilor undelor de curent"
        ],
        "answer": "încălzirea materialelor prin inducţie",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Efectul pelicular al unui curent care străbate un conductor masiv se datorează:",
        "options": [
            "unor curenţi paraziţi induşi în conductor, simetrici faţă de axa acestuia ",
            "numai unor forţe electromotoare induse datorită variaţiei curentului",
            "capacităţii conductorului faţă de pământ"
        ],
        "answer": "unor curenţi paraziţi induşi în conductor, simetrici faţă de axa acestuia ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Energia electrica reactiva:",
        "options": [
            " este o energie electrica complementara, care serveşte la magnetizarea bobinajelor",
            " se poate transforma în energie mecanica",
            " se poate transforma în energie luminoasa"
        ],
        "answer": " este o energie electrica complementara, care serveşte la magnetizarea bobinajelor",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Energia electromagnetică produsă de curentul i care parcurge un circuit care conţine o inductanţă L este egală cu:",
        "options": [
            "1/2 L i",
            " 1/2 Li2 ",
            " Li"
        ],
        "answer": "1/2 L i",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Energia electrostatică a unui conductor izolat în spaţiu, încărcat cu o sarcină q şi aflat la un potenţial V este egală cu:",
        "options": [
            "1/2 q V ",
            "q V ",
            " 2 q V "
        ],
        "answer": "1/2 q V ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "În cazul producerii unui scurtcircuit într-o instalaţie, are loc următorul fenomen:",
        "options": [
            " creste tensiunea de alimentare a instalaţiei",
            " creste impedanţa echivalenta a instalaţiei",
            " creste curentul de alimentare a instalaţiei"
        ],
        "answer": " creste tensiunea de alimentare a instalaţiei",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Enunţul \"sarcinile electrice nu pot fi create si nici distruse, ci doar mutate\" reprezintă:",
        "options": [
            "legea conservării sarcinii electrice",
            "legea lui Coulomb",
            " legea lui Laplace"
        ],
        "answer": "legea conservării sarcinii electrice",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Enunţul \"suma algebrică a forţelor electromotoare dintr-o buclă a unei reţele electrice este egală cu suma algebrică a căderilor de tensiune din buclă\" reprezintă:",
        "options": [
            "Prima lege a lui Kirchhoff",
            "a doua lege a lui Kirchhoff",
            "Legea Joule -Lenz"
        ],
        "answer": "Prima lege a lui Kirchhoff",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Expresia B x i x l , unde i este intensitatea curentului care străbate un conductor de lungime l, situat perpendicular pe câmpul de inducţie magnetică de mărime B, reprezintă:",
        "options": [
            "o forţă",
            " o tensiune",
            " o rezistenţă"
        ],
        "answer": "o forţă",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Expresia matematica a legii lui Ohm pentru o porţiune de circuit este:",
        "options": [
            " I = U / R",
            " I = UxR",
            " I = U - R"
        ],
        "answer": " I = U / R",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Extinderea domeniului de măsurare la ampermetre se realizează cu:",
        "options": [
            "rezistente adiţionale",
            "shunturi",
            "bobine înseriate"
        ],
        "answer": "rezistente adiţionale",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Extinderea domeniului de măsurare la voltmetre se realizează cu:",
        "options": [
            "shunturi",
            "rezistente adiţionale",
            "condensatoare montate în paralel"
        ],
        "answer": "shunturi",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Factorul de atenuare al unui circuit format dintr-un rezistor de rezistenţă R înseriat cu o bobină de inductanţă L, alimentate de o forţă electromotoare constantă este egal cu:",
        "options": [
            "R/L",
            "L/R",
            "1"
        ],
        "answer": "R/L",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Fluxul electric total, emis de o sarcină electrică de valoare q printr-o suprafaţă închisă care o înconjoară, este egal cu:",
        "options": [
            " valoarea numerică 2q",
            "valoarea numerică q",
            "valoarea numerică q/2"
        ],
        "answer": " valoarea numerică q",
        "reference": "https://phys.utcluj.ro/PersonalFile/Cursuri/BarleaCurs/ELECTRIC_2c.pdf"
    },
    {
        "question": "Folosirea conductoarelor jumelate în construcţia LEA are ca scop principal:",
        "options": [
            "reducerea pierderilor Corona",
            "reducerea solicitărilor mecanice ale stâlpilor",
            "reducerea curenţilor de scurtcircuit"
        ],
        "answer": "reducerea pierderilor Corona",
        "reference": "https://ro.swewe.net/word_show.htm/?322100_1&Conductoare_jumelate"
    },
    {
        "question": "Formula de calcul a frecventei produsa în sistemul electroenergetic de un generator cu n [rot/min] si p perechi de poli este:",
        "options": [
            " f =n p / 60",
            " f = 60 n / p",
            " f = 60 p / n"
        ],
        "answer": " f =n p / 60",
        "reference": "hhttps://www.fizichim.ro/docs/fizica/clasa10/capitolul3-producerea-si-utilizarea-curentului-alternativ/III-10-masini-electrice/III-10-2-generatoare-electrice-de-curent-alternativ-monofazat-si-trifazat/"
    },
    {
        "question": "Formula e = B l v, unde e este forţa electromotoare, B este inducţia magnetica, l este lungimea unui conductor, v este  viteza de deplasare a acestuia, reprezintă o forma particulara a:",
        "options": [
            "teoremelor Biot-Savart",
            "legii inducţiei electromagnetice",
            "legii circuitului magnetic"
        ],
        "answer": "legii inducţiei electromagnetice",
        "reference": "https://www.fizichim.ro/en/docs/fizica/clasa10/capitolul3-producerea-si-utilizarea-curentului-alternativ/III-1-inductia-electromagnetica/III-1-2-legea-inductiei-electromagnetice/"
    },
    {
        "question": "Forţa care se exercită asupra unui conductor rectiliniu, parcurs de curentul i, aflat în câmpul de inducţie magnetică B se numeşte:",
        "options": [
            "forţă electromagnetică (Laplace)",
            "forţă electrodinamică",
            "forţă magnetomotoare"
        ],
        "answer": "forţă electromagnetică (Laplace)",
        "reference": "https://www.fizichim.ro/docs/fizica/clasa10/capitolul2-producerea-si-utilizarea-curentului-continuu/II-15-efectele-curentului-electric/II-15-2-efectul-magnetic-al-curentului-electric-aplicatiile-efectului-magnetic/"
    },
    {
        "question": "Forţa care se exercită între două conductoare străbătute de curenţi electrici se numeşte:",
        "options": [
            "forţă electrocinetică",
            "forţă electrodinamică",
            "forţă magnetomotoare"
        ],
        "answer": "forţă electrodinamică",
        "reference": "https://www.splt.ro/upload_content/files/manual-electrician-2010-1.pdf"
    },
    {
        "question": "Forţa electromotoare de inducţie care apare într-un circuit închis, prin variaţia fluxului magnetic, este:",
        "options": [
            "direct proporţională cu variaţia în timp a fluxului magnetic",
            "invers proporţională cu variaţia în timp a fluxului magnetic",
            "dependentă de modul în care este produs fluxul magnetic"
        ],
        "answer": "direct proporţională cu variaţia în timp a fluxului magnetic",
        "reference": "https://phys.utcluj.ro/PersonalFile/Cursuri/CuleaCurs/Curs%209.pdf"
    },
    {
        "question": "Forţa electrodinamică exercitată între două conductoare filiforme, paralele, lungi, aflate la distanţa r, străbătute de câte un curent:",
        "options": [
            " este direct proporţională cu distanţa r dintre conductoare",
            "este invers proporţională cu distanţa r dintre conductoare",
            " nu depinde de distanţa r dintre conductoare"
        ],
        "answer": " este invers proporţională cu distanţa r dintre conductoare",
        "reference": "https://images3.wikia.nocookie.net/nccmn/ro/images/4/4a/Electrotehnica_%28Pearsica%29.pdf"
    },
    {
        "question": "Forţa F care se exercită asupra unei sarcini electrice q aflată într-un câmp electric de intensitate E are expresia:",
        "options": [
            "F=E/q",
            "F=qE",
            "F=q/E"
        ],
        "answer": "F=qE",
        "reference": "https://phys.utcluj.ro/PersonalFile/Cursuri/CuleaCurs/Curs%207.pdf"
    },
    {
        "question": "Frecvenţa unei mărimi periodice este inversul:",
        "options": [
            "amplitudinii",
            "perioadei",
            "fazei"
        ],
        "answer": "perioadei",
        "reference": "https://ro.wikipedia.org/wiki/Frecven%C8%9B%C4%83"
    },
    {
        "question": "Funcţionarea contoarelor de inducţie are la baza:",
        "options": [
            "curenţii turbionari",
            "efectul termic al curentului electric",
            "forţa electrostatica"
        ],
        "answer": "curenţii turbionari",
        "reference": "https://www.afahc.ro/ro/facultate/cursuri/mee.pdf"
    },
    {
        "question": "În instalaţiile de joasa tensiune, legarea la pământ este justificatã:",
        "options": [
            "din motive economice",
            "pentru diminuarea suprasolicitărilor echipamentelor electrice",
            "pentru securitatea muncii"
        ],
        "answer": "pentru securitatea muncii",
        "reference": "https://electricalc.ro/blog/ce-este-legarea-la-pamant"
    },
    {
        "question": "Funcţionarea în suprasarcinã a unui transformator reprezintă:",
        "options": [
            "un regim de avarie",
            "un regim temporar admisibil",
            "un regim inadmisibil"
        ],
        "answer": "un regim temporar admisibil",
        "reference": "http://www.emie.ugal.ro/ee/cap.5_final_07.02.07.pdf"
    },
    {
        "question": "Funcţionarea transformatoarelor electrice are la bazã:",
        "options": [
            "fenomenul inducţiei electromagnetice",
            "efectul termic al curentului electric",
            "curenţii turbionari"
        ],
        "answer": "fenomenul inducţiei electromagnetice",
        "reference": "https://ro.wikipedia.org/wiki/Transformator"
    },
    {
        "question": "Henry este unitatea de măsură pentru:",
        "options": [
            "fluxul magnetic",
            "inductanţă",
            "inducţia magnetică"
        ],
        "answer": "inductanţă",
        "reference": "https://en.wikipedia.org/wiki/Henry_(unit)"
    },
    {
        "question": "Împărţirea fiecărei faze a unei instalaţii capsulate într-un anumit număr de compartimente atrage după sine:",
        "options": [
            "limitarea posibilităţilor de producere a unui defect în instalaţie;",
            "mărirea riscului de producere a unor scăpări de gaz; ",
            "mărirea cantităţilor de gaz ce trebuie manipulate în cazul intervenţiei la un compartiment. "
        ],
        "answer": "limitarea posibilităţilor de producere a unui defect în instalaţie;",
        "reference": "https://electrician365.ro/wp-content/uploads/2019/04/Normativ-instalatii-electrice-NORMATIV-I7-2009-2.pdf"
    },
    {
        "question": "Împărţirea fiecărei faze a unei instalaţii capsulate într-un anumit număr de compartimente atrage după sine:",
        "options": [
            "numai limitarea posibilităţilor de producere a unui defect în instalaţie; ",
            "localizarea unor eventuale scăpări de gaz, precum şi a unor defecte interne, ",
            "mărirea cantităţilor de gaz ce trebuie manipulate în cazul intervenţiei la un compartiment"
        ],
        "answer": "localizarea unor eventuale scăpări de gaz, precum şi a unor defecte interne, ",
        "reference": "https://electrician365.ro/wp-content/uploads/2019/04/Normativ-instalatii-electrice-NORMATIV-I7-2009-2.pdf"
    },
    {
        "question": "În cazul apariţiei fenomenului de rezonanţă într-un circuit de curent alternativ, alimentat de la o sursă, aceasta furnizează circuitului:",
        "options": [
            "numai energie activă",
            "energie activă şi reactivă",
            "numai energie reactivă"
        ],
        "answer": "numai energie activă",
        "reference": "https://www.electricalc.ro/component/content/article/23-blog/81-curentul-alternativ"
    },
    {
        "question": "În cazul circuitelor de curent alternativ, teoremele lui Kirchhoff sunt întotdeauna satisfăcute pentru:",
        "options": [
            "valorile instantanee ale tensiunilor şi curenţilor",
            "valorile efective ale tensiunilor şi curenţilor",
            "modulele fazorilor asociaţi tensiunilor şi curenţilor"
        ],
        "answer": "valorile instantanee ale tensiunilor şi curenţilor",
        "reference": "http://www.elth.pub.ro/~cazacu/1.%20Suport%20Curs%20BE%20I-TR-%20TET%202015/curs_Bazele%20Electrotehnicii_TET.pdf"
    },
    {
        "question": "În posturi de transformare se folosesc transformatoare răcite cu lichide neinflamabile atunci când:",
        "options": [
            "sunt restricţii de poluare a mediului;",
            "sunt restricţii de toxicitate pentru personalul de exploatare;",
            "amplasarea postului se face în zone aglomerate."
        ],
        "answer": "amplasarea postului se face în zone aglomerate.",
        "reference": "https://www.misiuneacasa.ro/uploads/files/normative1.pdf"
    },
    {
        "question": "În cazul în care echiparea circuitelor electrice de alimentare a motoarelor electrice se face cu siguranţă fuzibilă şi contactor cu relee termice:",
        "options": [
            "siguranţa fuzibilă realizează protecţia la suprasarcină;",
            "siguranţa fuzibilă realizează protecţia la scurtcircuit;",
            "siguranţa fuzibilă realizează protecţia la supratensiuni;"
        ],
        "answer": "siguranţa fuzibilă realizează protecţia la scurtcircuit;",
        "reference": "https://eprofu.ro/docs/tehnic/practica-laborator/teorie/instalatii-electrice/3.1sigurante-fuzibile.pdf"
    },
    {
        "question": "În cazul în care echiparea circuitelor electrice de alimentare a motoarelor electrice se face cu siguranţă fuzibilă şi contactor cu relee termice:",
        "options": [
            "releele termice realizează protecţia la suprasarcină;",
            "releele termice realizează protecţia la scurtcircuit;",
            "releele termice realizează protecţia la supratensiuni;"
        ],
        "answer": "releele termice realizează protecţia la suprasarcină;",
        "reference": "https://eprofu.ro/docs/tehnic/practica-laborator/teorie/instalatii-electrice/3.3relee-termice.pdf"
    },
    {
        "question": "În cazul în care rezultanta unui sistem de fazori (de tensiune sau de curent) este nulă:",
        "options": [
            "sistemul nu are componentă simetrică inversă (negativă)",
            "sistemul nu are componentă simetrică homopolară (zero)",
            "sistemul nu are are componentă simetrică directă (pozitivă)"
        ],
        "answer": ["sistemul nu are componentă simetrică inversă (negativă)", "sistemul nu are componentă simetrică homopolară (zero)"],
        "reference": "https://sites.google.com/site/bazeleelectronicii/home/teoria-circuitului-ac/4-diagrame-fazoriale"
    },
    {
        "question": "În cazul pornirii stea triunghi a motoarelor asincrone, curentul de pornire la conexiunea stea este:",
        "options": [
            "1/3 din curentul de pornire la conexiunea triunghi",
            "de 3 ori curentul de pornire la conexiunea triunghi",
            "de 2 ori curentul de pornire la conexiunea triunghi"
        ],
        "answer": "1/3 din curentul de pornire la conexiunea triunghi",
        "reference": "https://suleacosti.wordpress.com/wp-content/uploads/2014/03/c2-l1-pornirea-automata-stea-triunghi.pdf"
    },
    {
        "question": "În posturi de transformare se preferă folosirea transformatoarelor răcite cu aer atunci când:",
        "options": [
            "sunt restricţii de teren;",
            "sunt restricţii privitoare la zgomot;",
            "amplasarea postului se face în zone aglomerate."
        ],
        "answer": "amplasarea postului se face în zone aglomerate.",
        "reference": "https://www.misiuneacasa.ro/uploads/files/normative1.pdf"
    },
    {
        "question": "În cazul punerii nete la pământ a fazei S într-o reţea de 20 kV cu neutrul izolat:",
        "options": [
            "tensiunea pe fazele R si T rămâne neschimbata , iar tensiunea fazei defecte S se apropie de 0",
            "tensiunea pe fazele R si T creste la valoarea tensiunii de linie iar pe faza S se apropie de 0",
            "cresc tensiunile pe fazele R si T, iar pe faza defecta S rămâne neschimbata"
        ],
        "answer": "tensiunea pe fazele R si T creste la valoarea tensiunii de linie iar pe faza S se apropie de 0",
        "reference": "https://electricalc.ro/subiecte-examen-autorizare/23-blog/196-tratarea-neutrului"
    },
    {
        "question": "În cazul scăderii sau întreruperii tensiunii de alimentare, motoarele asincrone se pot opri, iar la restabilirea tensiunii:",
        "options": [
            "ele autopornesc, indiferent de tipul constructiv al rotorului în scurtcircuit",
            "pentru a reporni necesită dispozitiv de pornire",
            "ele autopornesc numai dacă au rotor în dublă colivie"
        ],
        "answer": "ele autopornesc, indiferent de tipul constructiv al rotorului în scurtcircuit",
        "reference": "https://www.electricalc.ro/blog/pornirea-motoarelor"
    },
    {
        "question": "În cazul schemelor cu două sisteme de bare colectoare şi un întreruptor pe circuit, funcţionarea cu ambele sisteme de bare sub tensiune este avantajoasă deoarece permite: ",
        "options": [
            "scurtarea duratei manevrelor în caz de ocolire a unui întreruptor;",
            "micşorarea daunelor de nealimentare a consumatorilor în caz de scurtcircuit pe unul dintre sistemele de bare; ",
            "scurtarea duratei manevrelor în caz de revizie a unuia dintre sistemele de bare colectoare. "
        ],
        "answer": "micşorarea daunelor de nealimentare a consumatorilor în caz de scurtcircuit pe unul dintre sistemele de bare; ",
        "reference": "https://www.researchgate.net/profile/Sorina-Costinas/publication/258129687_Partea_electrica_a_centralelor_si_statiilor_Note_de_curs/links/54f722500cf2ccffe9da9c63/Partea-electrica-a-centralelor-si-statiilor-Note-de-curs.pdf"
    },
    {
        "question": "În cazul schemelor cu două sisteme de bare colectoare şi un întreruptor pe circuit, funcţionarea cu unul dintre sistemele de bare în rezervă rece ( fără tensiune) este avantajoasă ",
        "options": [
            "numai atunci când se doreşte scurtarea duratei manevrelor în caz de ocolire a unui întreruptor;",
            "atunci când se doreşte micşorarea daunelor de nealimentare a consumatorilor în caz de scurtcircuit pe unul dintre sistemele de bare; ",
            "atunci când se doreşte scurtarea duratei manevrelor în caz de revizie a unuia dintre sistemele de bare colectoare. "
        ],
        "answer": "tunci când se doreşte micşorarea daunelor de nealimentare a consumatorilor în caz de scurtcircuit pe unul dintre sistemele de bare; ",
        "reference": "https://www.researchgate.net/profile/Sorina-Costinas/publication/258129687_Partea_electrica_a_centralelor_si_statiilor_Note_de_curs/links/54f722500cf2ccffe9da9c63/Partea-electrica-a-centralelor-si-statiilor-Note-de-curs.pdf"
    },
    {
        "question": "În cazul unei scheme cu două bare colectoare şi un întreruptor pe circuit este de preferat ca în regim normal de funcţionare:",
        "options": [
            "una dintre barele colectoare să fie sub tensiune, cealaltă bară fiind menţinută în rezervă rece;",
            "ambele bare colectoare să fie sub tensiune, cupla transversală fiind menţinută în funcţiune;",
            "ambele bare colectoare să fie menţinute sub tensiune, cupla transversală fiind în rezervă caldă."
        ],
        "answer": "ambele bare colectoare să fie sub tensiune, cupla transversală fiind menţinută în funcţiune;",
        "reference": "https://www.researchgate.net/profile/Sorina-Costinas/publication/258129687_Partea_electrica_a_centralelor_si_statiilor_Note_de_curs/links/54f722500cf2ccffe9da9c63/Partea-electrica-a-centralelor-si-statiilor-Note-de-curs.pdf"
    },
    {
        "question": "În cazul unei staţii cu un sistem de bare colectoare secţionat longitudinal şi prevăzut cu o cuplă longitudinală cu întreruptor şi AAR, cupla se menţine:",
        "options": [
            "în rezervă caldă;",
            "în rezervă rece;",
            "În funcţiune"
        ],
        "answer": "în rezervă caldă;",
        "reference": "https://www.researchgate.net/profile/Sorina-Costinas/publication/258129687_Partea_electrica_a_centralelor_si_statiilor_Note_de_curs/links/54f722500cf2ccffe9da9c63/Partea-electrica-a-centralelor-si-statiilor-Note-de-curs.pdf"
    },
    {
        "question": "În echipamentul electric, uleiul electroizolant, din punct de vedere electric:",
        "options": [
            "asigură izolarea părților sub tensiune între ele si fatã de masã",
            "stinge arcul electric care apare in întrerupătoare",
            "asigura ungerea mecanismelor de acţionare"
        ],
        "answer": ["asigură izolarea părților sub tensiune între ele si fatã de masã", "stinge arcul electric care apare in întrerupătoare"],
        "reference": "https://www.electricianul.ro/evaluarea-uleiurilor-minerale-electroizolante-folosite-in-instalatiile-de-transport-curent-pentru-inalta-tensiune/"
    },
    {
        "question": "Într-o schemă cu 1,5 întreruptoare pe circuit:",
        "options": [
            "este necesară o cuplă de ocolire;",
            "este necesară o cuplă transversală;",
            "nu sunt necesare circuite de cuplă transversală şi de ocolire"
        ],
        "answer": "este necesară o cuplă transversală;",
        "reference": "http://schemaelectrica.blogspot.com/2015/03/scheme-de-conexiuni-pentru-statii-si.html"
    },
    {
        "question": "Într-o schemă de conexiuni bara şi cupla de ocolire servesc la:",
        "options": [
            "scoaterea în revizie a unui întreruptor, cu două scurte întreruperi;",
            "scoaterea în revizie a unei bare colectoare;",
            "scoaterea în revizie a unui întreruptor, fără întreruperea alimentării pe circuitul respectiv."
        ],
        "answer": "scoaterea în revizie a unui întreruptor, fără întreruperea alimentării pe circuitul respectiv.",
        "reference": "http://schemaelectrica.blogspot.com/2015/03/scheme-de-conexiuni-pentru-statii-si.html"
    },
    {
        "question": "În posturi de transformare se folosesc transformatoare uscate atunci când:",
        "options": [
            "amplasarea postului se face în zone aglomerate;",
            "nu sunt restricţii de teren;",
            "nu este posibilă asigurarea unei răciri corespunzătoare a bobinajelor."
        ],
        "answer": "amplasarea postului se face în zone aglomerate;",
        "reference": "http://schemaelectrica.blogspot.com/2015/03/scheme-de-conexiuni-pentru-statii-si.html"
    },
    {
        "question": "Într-o schemă poligon cu patru laturi:",
        "options": [
            "este necesară o cuplă de ocolire;",
            "este necesară o cuplă transversală;",
            "nu este necesară o cuplă transversală."
        ],
        "answer": "nu este necesară o cuplă transversala.",
        "reference": "https://stoianconstantin.wordpress.com/wp-content/uploads/2024/11/1.e-ip-71-2015-statii-de-conexiuni-si-de-transformare.pdf"
    },
    {
        "question": "În sens general, actualizarea unui fond reprezintă:",
        "options": [
            "calculul valorii acestui fond la un anumit an ales ca referinţă;",
            "calculul valorii acestui fond la N ani înainte de PIF;",
            "calculul valorii acestui fond la N ani după PIF."
        ],
        "answer": "calculul valorii acestui fond la un anumit an ales ca referinţă;",
        "reference": "https://electromed.ro/wp-content/uploads/2020/04/Test-4-electrotehnica-gradul-II.pdf"
    },
    {
        "question": "Circuitul din figură reprezinta",
        "image": "images/question110.png",
        "options": [
            "o cupla cu functiuni multiple intr-o statie cu doua sisteme de bare colectoare",
            "un circuit de linie dintr-o statie cu doua sisteme de bare colectoare",
            "un circuit de linie dintr-o statie cu un sistem de bare colectoare si bare de ocolire."
        ],
        "answer": "un circuit de linie dintr-o statie cu un sistem de bare colectoare si bare de ocolire.",
        "reference": "https://schemaelectrica.blogspot.com/2015/03/scheme-de-conexiuni-pentru-statii-si.html"
    },
    {
        "question": "Scopul supraînaltarii echipamentelor electrice din instalatii electrice exterioare este asigurarea\n",
        "options": [
            "accesului mai comod în instalatie",
            "esteticii si claritatii instalatiei",
            "securitatii personalului de exploatare"
        ],
        "answer": "securitatii personalului de exploatare",
        "reference": "https://electromed.ro/wp-content/uploads/2020/04/Test-6-electrotehnica-gradele-III-IV.pdf"
    },
    {
        "question": "În tubul de porţelan al unei siguranţe de înalta tensiune, nisipul :",
        "options": [
            " are numai rolul de a consolida elementele fuzibile",
            "are rolul de a mari puterea de rupere a siguranţei",
            "de a menţine temperatura constanta a siguranţei"
        ],
        "answer": "are rolul de a mari puterea de rupere a siguranţei",
        "reference": "https://ro.ahelek.net/info/why-do-some-fuses-have-to-be-filled-with-quart-35594610.html"
    },
    {
        "question": "Temperatura înfăşurărilor statorice ale generatoarelor electrice este determinată de:",
        "options": [
            "numai de temperatura mediului ambiant",
            "tensiunea între faze",
            "pierderile Joule-Lenz"
        ],
        "answer": "pierderile Joule-Lenz",
        "reference": "https://www.afahc.ro/ro/facultate/cursuri/masini1.pdf"
    },
    {
        "question": "Inductanţa de serviciu ( lineică) a unei linii electrice lungi este definită prin:",
        "options": [
            "inductanţa uniform răspândită l, definită prin puterea reactivă absorbită într-un element de linie infinit mic",
            "inductanţa uniform răspândită l, definită prin  puterea reactivă produsă de un element de linie infinit mic",
            "pierderile Joule disipate într-un element de linie infinit mic"
        ],
        "answer": "inductanţa uniform răspândită l, definită prin puterea reactivă absorbită într-un element de linie infinit mic",
        "reference": "https://www.telework.ro/ro/liniile-de-camp-electric/"
    },
    {
        "question": "Inductanţa proprie a unei bobine prin care trece un curent de intensitate i este raportul între ....... şi acest curent",
        "options": [
            "fluxul propriu al bobinei",
            "inducţia magnetică",
            "forţa electromotoare"
        ],
        "answer": "fluxul propriu al bobinei",
        "reference": "https://www.tme.eu/ro/news/library-articles/page/64370/ce-este-inductanta-i-de-ce-depinde-aceasta/"
    },
    {
        "question": "Intensitatea câmpului electric într-un anumit punct se măsoară ",
        "options": [
            "prin raportul dintre forţa exercitata asupra unei sarcini electrice în acel punct si mărimea sarcinii",
            "numai prin derivata în raport cu spaţiul cu semn schimbat a potenţialului în acel punct",
            "raportul dintre tensiunea aplicata unui conductor si rezistenta acestuia"
        ],
        "answer": "prin raportul dintre forţa exercitata asupra unei sarcini electrice în acel punct si mărimea sarcinii",
        "reference": "https://ro.wikipedia.org/wiki/Intensitate_a_c%C3%A2mpului_electric"
    },
    {
        "question": "Intensitatea câmpului magnetic într-un punct exterior unui conductor rectiliniu străbătut de curentul continuu de intensitate i, aflat la distanţă r de conductor este:",
        "options": [
            "invers proporţională cu r",
            "direct proporţională cu pătratul lui r",
            "direct proporţională cu r"
        ],
        "answer": "invers proporţională cu r",
        "reference": "https://ro.wikipedia.org/wiki/Intensitate_a_c%C3%A2mpului_electric"
    },
    {
        "question": "Într-o reţea cu neutrul legat la pământ, valoarea cea mai mare a intensităţii curentului de scurtcircuit, pentru acelaşi punct de defect, corespunde, de regulã, defectului:",
        "options": [
            "monofazat",
            "trifazat",
            "bifazat"
        ],
        "answer": "trifazat",
        "reference": "https://www.studocu.com/ro/document/universitatea-politehnica-din-bucuresti/bazele-electrotehnicii/scribd/64436966"
    },
    {
        "question": "Într-un circuit format dintr-un rezistor de rezistenta R în serie cu o bobina de inductanţa L, în momentul alimentarii de o sursa de curent continuu cu tensiune U:",
        "options": [
            "curentul creste instantaneu la valoarea U/R",
            "curentul nu circula prin acest circuit",
            "curentul ajunge la valoarea U/R după un timp"
        ],
        "answer": "curentul ajunge la valoarea U/R după un timp",
        "reference": "https://www.fizichim.ro/docs/fizica/clasa11/capitolul2-oscilatii-si-unde-electromagnetice/II-1-circuitul-rlc-in-curent-alternativ/II-1-3-bobina-in-curent-alternativ/"
    },
    {
        "question": "Într-un circuit R-L serie de curent alternativ, tensiunea la bornele rezistorului este de 100 V, iar tensiunea la bornele bobinei este de 70 V. Tensiunea la bornele circuitului R-L este:",
        "options": [
            " 170V",
            " 30 V",
            " 122 V"
        ],
        "answer": " 122V",
        "reference": "https://sites.google.com/site/bazeleelectronicii/home/inductoare/6-circuit-serie-rl"
    },
    {
        "question": "Într-o schemă electrică având un sistem de bare colectoare, separatorul asigură:",
        "options": [
            "deconectarea unor curenţi de suprasarcină;",
            "izolarea unei părţi din instalaţie de altă parte a instalaţiei aflată sub tensiune; ",
            "comutaţia curentului în regim normal de funcţionare."
        ],
        "answer": "izolarea unei părţi din instalaţie de altă parte a instalaţiei aflată sub tensiune; ",
        "reference": "https://www.researchgate.net/profile/Sorina-Costinas/publication/258129687_Partea_electrica_a_centralelor_si_statiilor_Note_de_curs/links/54f722500cf2ccffe9da9c63/Partea-electrica-a-centralelor-si-statiilor-Note-de-curs.pdf"
    },
    {
        "question": "Într-o schemă electrică prevăzută cu mai multe sisteme de bare colectoare, separatorul de bare ",
        "options": [
            "asigură selectarea sistemului de bare pe care urmează a fi conectat circuitul;",
            "asigură izolarea unei părţi a circuitului de bara colectoare aflată sub tensiune;",
            "comutaţia curentului în regim normal de funcţionare."
        ],
        "answer": ["asigură doar selectarea sistemului de bare pe care urmează a fi conectat circuitul;", "asigură izolarea unei părţi a circuitului de bara colectoare aflată sub tensiune;"],
        "reference": "https://www.researchgate.net/profile/Sorina-Costinas/publication/258129687_Partea_electrica_a_centralelor_si_statiilor_Note_de_curs/links/54f722500cf2ccffe9da9c63/Partea-electrica-a-centralelor-si-statiilor-Note-de-curs.pdf"
    },
    {
        "question": "Într-un conductor curentul alternativ are densitatea:",
        "options": [
            "uniforma",
            "mai mare în centrul conductorului",
            "mai mare la periferia conductorului"
        ],
        "answer": "mai mare la periferia conductorului",
        "reference": "https://ro.wikipedia.org/wiki/Efect_pelicular"
    },
    {
        "question": "Într-o staţie cu două sisteme de bare colectoare, cupla transversală:",
        "options": [
            "se poate utiliza numai pentru cuplarea în paralel a celor două sisteme de bare colectoare care sunt sub tensiune;",
            "nu se poate utiliza pentru ocolirea unui întreruptor de linie pe durata unei revizii sau reparaţii;",
            "se poate utiliza pentru verificarea stării izolaţiei unui sistem de bare colectoare, care până în momentul respectiv a fost scos de sub tensiune."
        ],
        "answer": "se poate utiliza pentru verificarea stării izolaţiei unui sistem de bare colectoare, care până în momentul respectiv a fost scos de sub tensiune.",
        "reference": "https://www.researchgate.net/profile/Sorina-Costinas/publication/258129687_Partea_electrica_a_centralelor_si_statiilor_Note_de_curs/links/54f722500cf2ccffe9da9c63/Partea-electrica-a-centralelor-si-statiilor-Note-de-curs.pdf"
    },
    {
        "question": "Într-o staţie cu două sisteme de bare colectoare, cupla transversală:",
        "options": [
            "nu se poate utiliza pentru cuplarea în paralel a celor două sisteme de bare colectoare care sunt sub tensiune;",
            "se poate utiliza pentru ocolirea unui întreruptor de linie pe durata unei revizii sau reparaţii;",
            "se poate utiliza numai pentru verificarea stării izolaţiei unui sistem de bare colectoare, care până în momentul respectiv a fost scos de sub tensiune."
        ],
        "answer": "se poate utiliza numai pentru verificarea stării izolaţiei unui sistem de bare colectoare, care până în momentul respectiv a fost scos de sub tensiune.",
        "reference": "https://www.researchgate.net/profile/Sorina-Costinas/publication/258129687_Partea_electrica_a_centralelor_si_statiilor_Note_de_curs/links/54f722500cf2ccffe9da9c63/Partea-electrica-a-centralelor-si-statiilor-Note-de-curs.pdf"
    },
    {
        "question": "Într-o staţie cu două sisteme de bare colectoare, cupla transversală:",
        "options": [
            "se poate utiliza pentru cuplarea în paralel a celor două sisteme de bare colectoare care sunt sub tensiune;",
            "nu se poate utiliza pentru ocolirea unui întreruptor de linie pe durata unei revizii sau reparaţii;",
            "nu se poate utiliza pentru verificarea stării izolaţiei unui sistem de bare colectoare, care până în momentul respectiv a fost scos de sub tensiune.  "
        ],
        "answer": "se poate utiliza pentru cuplarea în paralel a celor două sisteme de bare colectoare care sunt sub tensiune;",
        "reference": "https://www.researchgate.net/profile/Sorina-Costinas/publication/258129687_Partea_electrica_a_centralelor_si_statiilor_Note_de_curs/links/54f722500cf2ccffe9da9c63/Partea-electrica-a-centralelor-si-statiilor-Note-de-curs.pdf"
    },
    {
        "question": "Într-un circuit de curent alternativ în care puterea activa absorbita este 4 kW iar puterea reactiva este de 3 kVAr, factorul de putere este:",
        "options": [
            "0,8",
            "0,75",
            "4/3"
        ],
        "answer": "0,8",
        "reference": "https://www.rapidtables.org/ro/calc/electric/power-factor-calculator.html"
    },
    {
        "question": "Într-un circuit electric monofazat cu caracter inductiv tensiunea este defazata fata de curent:",
        "options": [
            " înainte cu 90 de grade",
            " cu zero grade (sunt în faza)",
            " cu 90 de grade în urma"
        ],
        "answer": " înainte cu 90 de grade",
        "reference": "https://hobbytronica.ro/defazajul-dintre-tensiune-si-curent/"
    },
    {
        "question": "La conectarea unui circuit de linie se recomandă următoarea  ordine a manevrelor:",
        "options": [
            "separatorul de linie, separatorul de bare, întreruptorul;",
            "separatorul de bare, întreruptorul, separatorul de linie;",
            "separatorul de bare, separatorul de linie, întreruptorul."
        ],
        "answer": "separatorul de bare, separatorul de linie, întreruptorul.",
        "reference": "https://www.transelectrica.ro/documents/10179/33158/ORD+25+10Regulament+Gen.doc/676363da-8c09-447b-85da-c1b5ae61f223"
    },
    {
        "question": "Într-un circuit rezistiv, având rezistenta R=5 ohm si la bornele căruia se aplica o tensiune de 100 V, curentul este de:",
        "options": [
            "20 A",
            " 500 A",
            " 95 A"
        ],
        "answer": "20 A",
        "reference": "https://electromed.ro/wp-content/uploads/2020/04/Test-4-electrotehnica-gradele-III-IV.pdf"
    },
    {
        "question": "La deconectarea unui circuit de linie se recomandă următoarea  ordine a manevrelor:",
        "options": [
            "separatorul de linie, întreruptorul, separatorul de bare;",
            "separatorul de bare, întreruptorul, separatorul de linie;",
            "întreruptorul, separatorul de  linie, separatorul de bare."
        ],
        "answer": "întreruptorul, separatorul de  linie, separatorul de bare.",
        "reference": "https://www.transelectrica.ro/documents/10179/33158/ORD+25+10Regulament+Gen.doc/676363da-8c09-447b-85da-c1b5ae61f223"
    },
    {
        "question": "Într-un circuit serie format dintr-un rezistor de rezistenţă R, o bobină de inductanţă L şi un condensator de capacitate C, curentul din circuit este defazat în urma tensiunii la borne dacă:",
        "options": [
            "reactanţa totală a circuitului X este > 0",
            "reactanţa totală a circuitului            X este <0",
            "reactanţa totală a circuitului este =0 "
        ],
        "answer": "reactanţa totală a circuitului X este > 0",
        "reference": "https://www.fizichim.ro/docs/fizica/clasa11/capitolul2-oscilatii-si-unde-electromagnetice/II-1-circuitul-rlc-in-curent-alternativ/II-1-5-circuit-serie-rlc/"
    },
    {
        "question": "La generatorul sincron viteza de rotaţie a câmpului magnetic al statorului fata de viteza de rotaţie a rotorului maşinii este:",
        "options": [
            "mai mare",
            "mai mica",
            "egala"
        ],
        "answer": "egala",
        "reference": "https://www.exsteel.ro/articole-si-noutati/articole-motoare-electrice/care-sunt-diferentele-dintre-un-motor-sincron-si-unul-asincron"
    },
    {
        "question": "Intr-un tor (solenoid de formă circulară bobinat), energia magnetică produsă de un curent care străbate bobinajul torului este localizată:",
        "options": [
            "integral în câmpul magnetic din volumul torului",
            "integral în câmpul magnetic din afara torului",
            "1/2 din energie este înmagazinată în volumul torului, iar 1/2 în afara torului"
        ],
        "answer": "integral în câmpul magnetic din volumul torului",
        "reference": "https://www.drsolenoid.com/ro/news/the-base-knowledge-of-solenoid/"
    },
    {
        "question": "Inversa rezistenţei echivalente a n rezistoare legate în paralel este egală cu:",
        "options": [
            "suma rezistenţelor celor n rezistoare",
            "suma inverselor rezistenţelor celor n rezistoare",
            "suma pătratelor rezistenţelor celor n rezistoare"
        ],
        "answer": "suma inverselor rezistenţelor celor n rezistoare",
        "reference": "https://eprofu.ro/docs/electronica/carte/gruparea-rezistoarelor.pdf"
    },
    {
        "question": "La maşina sincrona turaţia variază în funcţie de sarcina astfel:",
        "options": [
            "creste când sarcina creste",
            "scade când sarcina scade",
            "rămâne constanta la variaţia sarcinii"
        ],
        "answer": "rămâne constanta la variaţia sarcinii",
        "reference": "https://www.mircea-gogu.ro/pdf/Curs%20Masini%20electrice/capitolul_VI.pdf"
    },
    {
        "question": "La conectarea unui circuit de linie se recomandă următoarea  ordine a manevrelor:",
        "options": [
            "separatorul de bare, întreruptorul, separatorul de linie;",
            "separatorul de bare, separatorul de linie, întreruptorul;",
            "întreruptorul, separatorul de linie, separatorul de bare."
        ],
        "answer": "separatorul de bare, separatorul de linie, întreruptorul;",
        "reference": "https://www.transelectrica.ro/documents/10179/33158/ORD+25+10Regulament+Gen.doc/676363da-8c09-447b-85da-c1b5ae61f223"
    },
    {
        "question": "La deconectarea unui circuit de linie se recomandă următoarea  ordine a manevrelor:",
        "options": [
            "separatorul de linie, întreruptorul, separatorul de bare;",
            "întreruptorul, separatorul de linie, separatorul de bare;",
            "întreruptorul, separatorul de bare, separatorul de linie."
        ],
        "answer": "întreruptorul, separatorul de linie, separatorul de bare;",
        "reference": "https://www.transelectrica.ro/documents/10179/33158/ORD+25+10Regulament+Gen.doc/676363da-8c09-447b-85da-c1b5ae61f223"
    },
    {
        "question": "La un transformator cu grupa de conexiuni Y0 d-5 alimentat cu un sistem simetric de tensiuni, între neutru si pământ, în regim normal si simetric de funcţionare avem:",
        "options": [
            "tensiunea de linie",
            "tensiunea de faza",
            "tensiunea zero"
        ],
        "answer": "tensiunea zero",
        "reference": "https://www.geogebra.org/m/dMmZda2r"
    },
    {
        "question": "La funcţionarea în gol a unei linii electrice tensiunea la capăt:",
        "options": [
            "creşte faţă de tensiunea la sursă proporţional cu pătratul lungimii liniei",
            "scade faţă de tensiunea la sursă proporţional cu lungimea liniei",
            "nu se modifică"
        ],
        "answer": "creşte faţă de tensiunea la sursă proporţional cu pătratul lungimii liniei",
        "reference": "https://www.afahc.ro/ro/facultate/cursuri/microunde_note_curs.pdf"
    },
    {
        "question": "Legea lui Ohm pentru o porţiune de circuit este valabila:",
        "options": [
            "doar în curent continuu",
            "doar în curent alternativ",
            "indiferent de natura circuitului"
        ],
        "answer": "indiferent de natura circuitului",
        "reference": "https://ro.wikipedia.org/wiki/Legea_lui_Ohm"
    },
    {
        "question": "Legile lui Kirchhoff se aplică:",
        "options": [
            " numai circuitelor liniare",
            "numai circuitelor cu elemente neliniare",
            "circuitelor liniare şi circuitelor neliniare"
        ],
        "answer": "circuitelor liniare şi circuitelor neliniare",
        "reference": "https://ro.wikipedia.org/wiki/Legile_lui_Kirchhoff"
    },
    {
        "question": "La o instalaţie cu mai multe condensatoare conectate în serie, căderea de tensiune pe fiecare condensator este:",
        "options": [
            "direct proporţionala cu capacitatea",
            "invers proporţionala cu capacitatea",
            "nu depinde de capacitate"
        ],
        "answer": "invers proporţionala cu capacitatea",
        "reference": "https://sites.google.com/site/bazeleelectronicii/home/condensatoare-si-reactanta-capacitiva/7-condensatoare-in-serie"
    },
    {
        "question": "La o maşina electrica asincrona turaţia variază:",
        "options": [
            " cu curentul de excitaţie",
            "cu frecventa",
            "numai cu sarcina"
        ],
        "answer": "cu frecventa",
        "reference": "https://www.afahc.ro/ro/facultate/cursuri/masini1.pdf"
    },
    {
        "question": "La pornirea motoarelor electrice asincrone se urmăreşte:",
        "options": [
            "reducerea vibraţiilor rotorului",
            "reducerea curentului electric absorbit de motor",
            "reducerea tensiunii la bornele de alimentare ale motorului"
        ],
        "answer": "reducerea curentului electric absorbit de motor",
        "reference": "http://www.eth.ieeia.tuiasi.ro/wp-content/uploads/2016/11/Curs-Masini-Electrice-II.pdf"
    },
    {
        "question": "La transformatoarele la care comutarea ploturilor se face cu transformatorul în sarcina, comutatorul de ploturi se montează:",
        "options": [
            "pe înfăşurarea de tensiune mai mica, deoarece tensiunea este mai mica",
            "pe înfăşurarea de tensiune mai mare, deoarece curentul este mai mic",
            "pe oricare dintre înfăşurări"
        ],
        "answer": "pe înfăşurarea de tensiune mai mare, deoarece curentul este mai mic",
        "reference": "https://web.transelectrica.ro/nti-transelectrica/nti-uri/110.%20NTI-TEL-R-005-2017-00%20-%20Regulament%20exploatare%20tehnica%20a%20echipam.%20electr.ditributie%20primara/NTI-TEL-R-005-2017-00.pdf"
    },
    {
        "question": "Materialele feromagnetice au permeabilitatea relativa:",
        "options": [
            "mai mica decât 1",
            "puţin mai mare decât 1",
            "mult mai mare decât 1"
        ],
        "answer": "mult mai mare decât 1",
        "reference": "https://users.utcluj.ro/~mihaela/documents/Curs_4_ET.pdf"
    },
    {
        "question": "Legea a 2-a a lui Kirchhoff pentru un circuit de curent alternativ monofazat inductiv are forma:",
        "options": [
            "u = R i",
            "u= L di/dt",
            "du = i/C dt"
        ],
        "answer": "u = L di/dt",
        "reference": "https://www.wikiwand.com/ro/Legea_a_doua_a_lui_Kirchhoff"
    },
    {
        "question": "Legea lui Coulomb exprimã:",
        "options": [
            "forţa de interacţiune dintre corpuri punctuale încărcate cu sarcini electrice",
            "fluxul electric printr-o suprafaţa sferica",
            "diferenţa de potenţial între doua puncte"
        ],
        "answer": "forţa de interacţiune dintre corpuri punctuale încărcate cu sarcini electrice",
        "reference": "https://ro.wikipedia.org/wiki/Legea_lui_Coulomb"
    },
    {
        "question": "O reţea electricã trifazatã de medie tensiune are neutrul transformatoarelor tratat prin bobina. Pentru regimul normal de funcţionare sa se precizeze efectul bobinei:",
        "options": [
            "deplasarea neutrului",
            "creşterea curenţilor de scurtcircuit",
            "nici un efect"
        ],
        "answer": "nici un efect",
        "reference": "http://www.tti.ieeia.tuiasi.ro/materiale/tti/curs/Tratarea%20neutrului.pdf"
    },
    {
        "question": "O siguranţa mai mare în alimentarea consumatorilor de energie electrica se realizează prin:",
        "options": [
            "reţele radiale",
            " reţele buclate cu funcţionare radialã",
            "reţele buclate"
        ],
        "answer": "reţele buclate",
        "reference": "https://www.bransamente-instalatii-electrice.ro/scheme-de-conexiuni-pentru-retele-electrice/"
    },
    {
        "question": "Mărimea adimensională care reprezintă variaţia pe care o suferă amplitudinea şi faza undei de tensiune sau curent când parcurge 1 km de linie (lungă ) se numeşte:",
        "options": [
            "constanta de propagare a liniei",
            "constanta de atenuare a liniei",
            "constanta de distorsiune a liniei"
        ],
        "answer": "constanta de propagare a liniei",
        "reference": "https://www.afahc.ro/ro/facultate/cursuri/microunde_note_curs.pdf"
    },
    {
        "question": "Mărimea caracteristică circuitelor magnetice şi care este analoagă cu rezistenţa circuitelor electrice se numeşte:",
        "options": [
            "impedanţă",
            "reluctanţă",
            "permeanţă"
        ],
        "answer": "reluctanţă",
        "reference": "https://www.tme.eu/ro/news/library-articles/page/64162/reluctanta-i-permeabilitate-magnetica/"
    },
    {
        "question": "Mărimea periodică alternativă este o mărime a cărei valoare medie în decursul unei perioade este egală cu:",
        "options": [
            "1",
            "0",
            "1,5"
        ],
        "answer": "0",
        "reference": "https://www.fizichim.ro/en/docs/fizica/clasa10/capitolul3-producerea-si-utilizarea-curentului-alternativ/III-4-marimi-caracteristice-curentului-alternativ/"
    },
    {
        "question": "Mărirea cuplului de pornire şi micşorarea curentului de pornire la motoarele asincrone cu rotorul în scurtcircuit se face:",
        "options": [
            "prin deconectarea şi reconectarea lor la reţeaua de alimentare",
            "numai prin utilizarea motoarelor cu rotorul în dublă colivie",
            "prin utilizarea motoarelor cu rotorul în colivie cu bare înalte"
        ],
        "answer": "prin utilizarea motoarelor cu rotorul în colivie cu bare înalte",
        "reference": "https://www.mircea-gogu.ro/pdf/Curs%20Masini%20electrice/capitolul_V.pdf"
    },
    {
        "question": "Pe liniile electrice de înaltă tensiune, unde se preferă montarea transformatoarelor de  curent ?:",
        "options": [
            "între barele colectoare şi separatorul de bare;",
            "între separatorul de bare şi întreruptor; ",
            "între întreruptor şi separatorul de linie."
        ],
        "answer": "între întreruptor şi separatorul de linie.",
        "reference": "https://web.transelectrica.ro/nti-transelectrica/nti-uri/110.%20NTI-TEL-R-005-2017-00%20-%20Regulament%20exploatare%20tehnica%20a%20echipam.%20electr.ditributie%20primara/NTI-TEL-R-005-2017-00.pdf"
    },
    {
        "question": "Metoda transfigurării reţelelor electrice este folosita pentru a:",
        "options": [
            "reduce pierderile de putere activa în reţea",
            "simplifica structura reţelelor echivalente pentru a reduce volumul de calcule",
            "diminua consumul specific de material conductor"
        ],
        "answer": "simplifica structura reţelelor echivalente pentru a reduce volumul de calcule",
        "reference": "http://www.eth.ieeia.tuiasi.ro/wp-content/uploads/2018/07/CARTE-sec.pdf"
    },
    {
        "question": "Miezul magnetic al rotorului unei maşini electrice asincrone se realizează din tole pentru:",
        "options": [
            "reducerea curenţilor turbionari",
            "reducerea tensiunii electromotoare induse",
            "numai din motive constructive"
        ],
        "answer": "reducerea curenţilor turbionari",
        "reference": "https://eprofu.ro/docs/electronica/instalatii/instalatii-capitolul2.pdf"
    },
    {
        "question": "Montajul fix al aparatelor în interiorul celulelor conduce la: ",
        "options": [
            "realizări constructive simple, fără blocaje suplimentare;",
            "reducerea dimensiunilor celulelor;",
            "reducerea timpului necesar reviziilor şi reparaţiilor."
        ],
        "answer": "realizări constructive simple, fără blocaje suplimentare;",
        "reference": "https://web.transelectrica.ro/nti-transelectrica/nti-uri/110.%20NTI-TEL-R-005-2017-00%20-%20Regulament%20exploatare%20tehnica%20a%20echipam.%20electr.ditributie%20primara/NTI-TEL-R-005-2017-00.pdf"
    },
    {
        "question": "Motoarele sincrone se utilizează rar pentru antrenarea mecanismelor de servicii proprii din centralele electrice ",
        "options": [
            "deoarece nu permit variaţia turaţiei în limite largi",
            "numai deoarece excitatoarea cu colector din circuitul acestora este un element puţin fiabil",
            "deoarece au randament mai mic decât al celorlalte tipuri de motoare"
        ],
        "answer": "deoarece nu permit variaţia turaţiei în limite largi",
        "reference": "https://www.researchgate.net/profile/Sorina-Costinas/publication/258129687_Partea_electrica_a_centralelor_si_statiilor_Note_de_curs/links/54f722500cf2ccffe9da9c63/Partea-electrica-a-centralelor-si-statiilor-Note-de-curs.pdf"
    },
    {
        "question": "Nivelul de tensiune în sistem se reglează ",
        "options": [
            "încărcarea generatoarelor cu putere activa",
            "numai prin încărcarea generatoarelor cu putere reactiva",
            "prin utilizare de compensatoare "
        ],
        "answer": "prin utilizare de compensatoare",
        "reference": "https://tomaradu.yolasite.com/resources/30749113-Subiecte-rezolvate-examen-autorizare-ANRE-electricieni-2010-Electrotehnica.pdf"
    },
    {
        "question": "O linie electrică foarte lungă se comportă ca o linie adaptată:",
        "options": [
            "dacă alimentează un receptor cu impedanţă egală cu impedanţa sa caracteristică",
            "dacă funcţionează  în scurtcircuit",
            "dacă funcţionează în gol"
        ],
        "answer": "dacă alimentează un receptor cu impedanţă egală cu impedanţa sa caracteristică",
        "reference": "https://mihaiolteanu.me/circuiteelectrice/curent-alternativ/linii-electrice-lungi"
    },
    {
        "question": "O linie electrică lungă funcţionând în gol:",
        "options": [
            "produce putere reactivă",
            "absoarbe putere reactivă",
            "nu produce şi nu absoarbe putere reactivă"
        ],
        "answer": "produce putere reactivă",
        "reference": "http://www.elth.pub.ro/~cazacu/1.%20Suport%20Curs%20BE%20I-TR-%20TET%202015/curs_Bazele%20Electrotehnicii_TET.pdf"
    },
    {
        "question": "O linie electrică lungă funcţionând în scurtcircuit:",
        "options": [
            "absoarbe putere reactivă",
            "produce putere reactivă",
            "nu produce şi nu absoarbe putere reactivă"
        ],
        "answer": "absoarbe putere reactivă",
        "reference": "https://www.afahc.ro/ro/facultate/cursuri/microunde_note_curs.pdf"
    },
    {
        "question": "O protecţie este selectivă atunci când:",
        "options": [
            "deconectează numai consumatorul defect",
            "deconectează toţi consumatorii",
            "deconectează o jumătate dintre consumatori"
        ],
        "answer": "deconectează numai consumatorul defect",
        "reference": "https://mckenzie-energy.ro/ce-inseamna-o-protectie-selectiva-in-retelele-electrice/"
    },
    {
        "question": "Pe măsură ce creşte tensiunea la care se realizează instalaţiile electrice, costul pierderilor de putere Cp este:",
        "options": [
            "constant",
            "crescător",
            "descrescător"
        ],
        "answer": "descrescător",
        "reference": "https://electromed.ro/wp-content/uploads/2020/04/Test-5-electrotehnica-gradele-III-IV.pdf"
    },
    {
        "question": "O schemă cu două blocuri linie-transformator cu punte între ele de tip ,, H \" inferior este de preferat unei scheme de tip ,, H \" superior atunci când:",
        "image": "images/question167.png",
        "options": [
            "se fac manevre dese cu circuitele de linie;",
            "se fac manevre dese cu circuitele de transformator;",
            "pe legătura dintre blocuri circulă un curent mic."
        ],
        "answer": "se fac manevre dese cu circuitele de linie;",
        "reference": "https://www.mircea-gogu.ro/pdf/Curs%20Masini%20electrice/capitolul_II.pdf"
    },
    {
        "question": "O schemă cu două blocuri linie-transformator cu punte între ele de tip ,, H \" superior este de preferat unei scheme de tip ,, H \" inferior atunci când:",
        "image": "images/question168.png",
        "options": [
            "se fac manevre dese cu circuitele de linie;",
            "se fac manevre dese cu circuitele de transformator;",
            "pe legătura dintre blocuri circulă un curent mic."
        ],
        "answer": "se fac manevre dese cu circuitele de transformator;",
        "reference": "https://www.mircea-gogu.ro/pdf/Curs%20Masini%20electrice/capitolul_II.pdf"
    },
    {
        "question": "Pe schema de mai sus sunt aparate în plus ?",
        "image": "images/question169.png",
        "options": [
            "nu;",
            "da, separatorul S1;",
            "da, separatorul S2"
        ],
        "answer": "nu;",
        "reference": "Not available"
    },
    {
        "question": "Între două noduri oarecare A şi B ale unei reţele electrice active, o sursă de tensiune de forţă electromotoare E şi  fără impedanţă interioară, dar legată în serie cu o impedanţă Z, poate fi înlocuită cu o sursă de curent, de intensitate J şi fără admitanţă interioară, şuntată cu admitanţa Y, fără ca parametrii electrici la bornele A şi B  - tensiunea la borne şi curentul debitat prin aceste borne- să se schimbe,  dacă sunt îndeplinite condiţiile:",
        "options": [
            "Z Y = 1, J=YE",
            "J=YE, Z=Y",
            "Z Y = 1, Z=Y"
        ],
        "answer": "Z Y = 1, J=YE",
        "reference": "https://electromed.ro/wp-content/uploads/2020/04/Test-6-electrotehnica-gradul-II.pdf"
    },
    {
        "question": "Pentru limitarea curenţilor de scurtcircuit, puterea totalã instalatã într-o staţie trebuie:",
        "options": [
            "mărită",
            "micşorată",
            "divizatã în mai multe unităţi"
        ],
        "answer": "divizatã în mai multe unităţi",
        "reference": "https://www.mircea-gogu.ro/pdf/Curs%20Masini%20electrice/capitolul_II.pdf"
    },
    {
        "question": "Pentru materialele magnetice, relaţia dintre inducţia magnetică şi intensitatea câmpului magnetic:",
        "options": [
            "este liniară",
            " este o egalitate",
            "este neliniară"
        ],
        "answer": "este neliniară",
        "reference": "https://ro.wikipedia.org/wiki/Intensitate_a_c%C3%A2mpului_magnetic"
    },
    {
        "question": "Pierderea de putere activa într-un element de reţea (transformator, LEA, LEC) , la aceeaşi putere aparentã vehiculatã, este direct proportionalã cu:",
        "options": [
            " pătratul frecventei",
            " pătratul tensiunii reţelei",
            " pătratul curentului"
        ],
        "answer": " pătratul curentului",
        "reference": "https://www.fizichim.ro/en/docs/fizica/clasa11/capitolul2-oscilatii-si-unde-electromagnetice/II-1-circuitul-rlc-in-curent-alternativ/II-1-7-puterea-in-curent-alternativ/"
    },
    {
        "question": "Pe schema de mai sus sunt aparate în plus ?",
        "options": [
            "nu;",
            "da, separatorul S2;",
            "da, separatorul S1"
        ],
        "answer": "nu;",
        "reference": "Not Available"
    },
    {
        "question": "Care dintre urmatoarele enunturi nu este adevarat: \n",
        "options": [
            "energia electrica tranzitata printr-un circuit este produsul dintre puterea medie si timpul de functionare;",
            "energia electrica tranzitata printr-un circuit este produsul dintre puterea maxima si timpul de functionare",
            "energia electrica tranzitata printr-un circuit este produsul dintre puterea maxima si timpul de utilizare al puterii maxime."
        ],
        "answer": ["energia electrica tranzitata printr-un circuit este produsul dintre puterea maxima si timpul de functionare", "energia electrica tranzitata printr-un circuit este produsul dintre puterea maxima si timpul de utilizare al puterii maxime."],
        "reference": "https://ro.wikipedia.org/wiki/Putere_electric%C4%83"
    },
    {
        "question": "Pentru calculul curenţilor de scurtcircuit într-o reţea prin metoda componentelor simetrice, reţeaua inversă (negativă) se compune din:",
        "options": [
            "impedanţe identice cu ale reţelei directe (pozitive) pentru elemente statice și impedanţe diferite de ale reţelei directe (pozitive) pentru maşini rotative ",
            "impedanţe identice cu ale reţelei directe (pozitive) atât pentru elemente statice cât și pentru maşini rotative ",
            "impedanţe diferite de ale reţelei directe (pozitive) pentru elemente statice"
        ],
        "answer": "impedanţe identice cu ale reţelei directe (pozitive) pentru elemente statice și impedanţe diferite de ale reţelei directe (pozitive) pentru maşini rotative ",
        "reference": "https://electromed.ro/wp-content/uploads/2020/04/Test-6-electrotehnica-gradul-II.pdf"
    },
    {
        "question": "Pentru limitarea curenţilor de scurtcircuit se utilizează bobine:",
        "options": [
            "înseriate pe circuit, monofazate, fără miez de fier, răcite cu aer (uscate), de tip interior; ",
            "racordate în derivaţie pe circuit, monofazate, fără miez de fier, răcite cu aer (uscate), de tip interior;",
            "înseriate pe circuit, monofazate, cu miez de fier, răcite cu ulei, de tip interior;"
        ],
        "answer": "înseriate pe circuit, monofazate, fără miez de fier, răcite cu aer (uscate), de tip interior; ",
        "reference": "https://www.scribd.com/doc/204178981/PECS-04-Calculul-Si-Limitarea-Curentilor-de-Scurtcircuit"
    },
    {
        "question": "Puterea electrică reactivă:",
        "options": [
            "permite definirea limitelor de utilizare ale unui aparat electric",
            "produce transformarea energiei electrice în energie mecanică",
            "este variaţia în timp a energiei magnetice şi electrice "
        ],
        "answer": "este variaţia în timp a energiei magnetice şi electrice ",
        "reference": "https://sites.google.com/site/bazeleelectronicii/home/teoria-circuitului-ac/15-putere-reactiva"
    },
    {
        "question": "Puterea nominala a unui motor electric se defineşte astfel:",
        "options": [
            "puterea activã absorbitã de motor de la reţea când este alimentat la Un si absoarbe In",
            "puterea activã transmisã prin întrefierul motorului când este alimentat la Un si absoarbe In",
            "puterea mecanicã debitatã de motor la arbore când este alimentat la Un si absoarbe In"
        ],
        "answer": "puterea mecanicã debitatã de motor la arbore când este alimentat la Un si absoarbe In",
        "reference": "https://ro.wikipedia.org/wiki/Motor_electric"
    },
    {
        "question": "Pentru micşorarea pierderilor de putere prin curenţi turbionari în piesele metalice mari parcurse de fluxuri magnetice variabile:",
        "options": [
            "se limitează dimensiunile pieselor",
            "se execută piesele metalice din tole de oţel  cu adaus de siliciu pentru mărirea rezistivităţii, subţiri și izolate între ele ",
            "se evită plasarea pieselor metalice masive în câmpuri magnetice variabile"
        ],
        "answer": "se execută piesele metalice din tole de oţel  cu adaus de siliciu pentru mărirea rezistivităţii, subţiri și izolate între ele ",
        "reference": "https://www.afahc.ro/ro/facultate/cursuri/masini1.pdf"
    },
    {
        "question": "Pentru o linie electrică lungă care alimentează un receptor ce are impedanţa egală cu impedanţa caracteristică a liniei, puterea activă la extremitatea receptoare:",
        "options": [
            "se numeşte putere caracteristică sau putere naturală",
            "depinde de lungimea liniei",
            "este independentă de tensiunea liniei"
        ],
        "answer": ["se numeşte putere caracteristică sau putere naturală", "este independentă de tensiunea liniei"],
        "reference": "https://www.fizichim.ro/docs/fizica/clasa10/capitolul2-producerea-si-utilizarea-curentului-continuu/II-13-puterea-electrica/"
    },
    {
        "question": "Pentru o linie electrică care alimentează un receptor ce are impedanţa egală cu impedanţa caracteristică a liniei:",
        "options": [
            "energiile reactive, inductivă şi capacitivă, se compensează",
            "energia reactivă inductivă este mai mare decât cea capacitivă",
            "energia reactivă capacitivă este mai mare decât cea inductivă"
        ],
        "answer": "energiile reactive, inductivă şi capacitivă, se compensează",
        "reference": "https://www.afahc.ro/ro/facultate/cursuri/microunde_note_curs.pdf"
    },
    {
        "question": "Pentru o putere aparenta data puterea activa are valoarea maxima:",
        "options": [
            " când factorul de putere = 1",
            " când factorul de putere = 0",
            "când U = U max"
        ],
        "answer": " când factorul de putere = 1",
        "reference": "https://sites.google.com/site/bazeleelectronicii/home/teoria-circuitului-ac/19-triunghiul-puterilor-si-factorul-de-putere"
    },
    {
        "question": "Permeabilitatea este o mărime:",
        "options": [
            "magnetică",
            "electrică",
            "mecanică"
        ],
        "answer": "magnetică",
        "reference": "https://ro.wikipedia.org/wiki/Permeabilitate_magnetic%C4%83"
    },
    {
        "question": "Permitivitatea este o mărime:",
        "options": [
            "electrică",
            "magnetică",
            "chimică"
        ],
        "answer": " electrică",
        "reference": "https://ro.wikipedia.org/wiki/Permitivitate_(electromagnetism)"
    },
    {
        "question": "Regulatorul automat de tensiune (RAT) asigurã:",
        "options": [
            "deconectarea automatã a liniilor la suprasarcinã",
            "conectarea automatã a unui transformator de rezervã",
            "modificarea curentului (tensiunii) de excitaţie la generatoarele sincrone"
        ],
        "answer": "modificarea curentului (tensiunii) de excitaţie la generatoarele sincrone",
        "reference": "http://ro.scotech-electrical.com/info/what-s-the-function-of-automatic-voltage-regul-88793518.html"
    },
    {
        "question": "Pierderile de putere activã si reactivã pe o linie electricã, la aceeaşi putere aparentã vehiculatã, sunt invers proporţionale cu:",
        "options": [
            "pătratul curentului",
            "pătratul tensiunii",
            "pătratul puterii active"
        ],
        "answer": "pătratul tensiunii",
        "reference": "http://www.efen.ieeia.tuiasi.ro/curs_electro/E3.%20Bazele%20electroenergeticii.pdf"
    },
    {
        "question": "Pierderile de putere într-o linie electrică prin care se transportă o putere activă P la un factor de putere = 0,9, faţă de cazul când se transportă aceeaşi putere la un factor de putere = 0,8 sunt:",
        "options": [
            "mai mici",
            "egale",
            "mai mari"
        ],
        "answer": "mai mici",
        "reference": "https://ro.wikipedia.org/wiki/Factor_de_putere"
    },
    {
        "question": "Potenţialul electrostatic în punctul M este  :",
        "options": [
            "lucrul mecanic care trebuie produs spre a transporta unitatea de sarcină pozitivă de la infinit până în punctul M.",
            "forţa care este necesară pentru a transporta unitatea de sarcină pozitivă de la infinit până în punctul M",
            "forţa care este necesară pentru a transporta unitatea de sarcină pozitivă din punctul M până la infinit "
        ],
        "answer": "forţa care este necesară pentru a transporta unitatea de sarcină pozitivă din punctul M până la infinit ",
        "reference": "https://www.fizichim.ro/en/docs/fizica/clasa12/capitolul3-fizica-atomica/III-1-elemente-de-electrostatica/III-1-4-potentialul-electric/"
    },
    {
        "question": "Prima lege a lui Kirchhoff, pentru o reţea electrică buclată cu N noduri, ne dă, pentru curenţii care circulă prin reţea:",
        "options": [
            "N-1 relaţii distincte",
            "N relaţii distincte",
            " N+1 relaţii distincte"
        ],
        "answer": "N-1 relaţii distincte",
        "reference": "https://www.wikiwand.com/ro/Legea_prim%C4%83_a_lui_Kirchhoff"
    },
    {
        "question": "Prin adăugarea, pe toate laturile pornind din acelaşi nod al unei reţele buclate, a unor forţe electromotoare (f.e.m.) egale şi la fel orientate faţă de nod (teorema lui Vaschy):",
        "options": [
            "circulaţia de curenţi existentă anterior în reţea nu se modifică",
            "se pot modifica curenţii din laturile cu f.e.m. adăugate",
            " se modifică circulaţia de curenţi din laturile pe care nu se adaugă f.e.m."
        ],
        "answer": "circulaţia de curenţi existentă anterior în reţea nu se modifică",
        "reference": "https://ro.wikipedia.org/wiki/Legile_lui_Kirchhoff"
    },
    {
        "question": "Principalele elemente feromagnetice sunt:",
        "options": [
            "Fierul, nichelul şi cobaltul",
            "Fierul, cuprul, zincul",
            "Fierul, aluminiul, cuprul"
        ],
        "answer": "Fierul, nichelul şi cobaltul",
        "reference": "https://www.tme.eu/ro/news/library-articles/page/64162/reluctanta-i-permeabilitate-magnetica/"
    },
    {
        "question": "Carcasa  unei celule electrice ",
        "options": [
            "asigură numai protecţia persoanelor împotriva atingerii accidentale a pieselor aflate sub tensiune în funcţionare normală sau a pieselor în mişcare din interiorul învelişului;",
            "asigură protecţia echipamentului electric împotriva pătrunderii corpurilor străine şi a umezelii;",
            "asigură protecţia echipamentului electric împotriva supratensiunilor."
        ],
        "answer": "asigură protectia echipamentului electric împotriva pătrunderii corpurilor străine şi a umezelii;",
        "reference": "https://web.transelectrica.ro/nti-transelectrica/nti-uri/110.%20NTI-TEL-R-005-2017-00%20-%20Regulament%20exploatare%20tehnica%20a%20echipam.%20electr.ditributie%20primara/NTI-TEL-R-005-2017-00.pdf"
    },
    {
        "question": "Principalul avantaj al motoarelor asincrone cu rotorul în scurtcircuit cu simplă colivie îl constituie:",
        "options": [
            "curentul mic de pornire",
            "pornirea fără dispozitiv de pornire",
            "cuplul de pornire foarte bun"
        ],
        "answer": "pornirea fără dispozitiv de pornire",
        "reference": "https://ro.wikipedia.org/wiki/Motor_asincron"
    },
    {
        "question": "Principalul avantaj al motoarelor de curent continuu îl constituie faptul că:",
        "options": [
            "permit reglarea în limite largi a turaţiei",
            "nu necesită întreţinere permanentă",
            "prezintă o construcţie simplă şi robustă"
        ],
        "answer": "permit reglarea în limite largi a turaţiei",
        "reference": "https://ro.wikipedia.org/wiki/Motor_electric_de_curent_continuu_f%C4%83r%C4%83_perii"
    },
    {
        "question": "Rezistenţa echivalentă a două rezistenţe cu valori diferite montate în paralel este:",
        "options": [
            "mai mare decât rezistenţa mai mare",
            "mai mică decât rezistenţa mai mică",
            "egală cu suma rezistenţelor"
        ],
        "answer": "mai mică decât rezistenţa mai mică",
        "reference": "https://sites.google.com/site/bazeleelectronicii/home/rezistoare/4-resistors-in-parallel"
    },
    {
        "question": "Reducerea nivelului de izolație din instalațiile capsulate cu SF6 poate fi provocată   ",
        "options": [
            "numai de produse de descompunere ale SF6 şi compuşii lor cu materiale izolante sau metale, sub influenţa umidităţii;",
            "de impurităţi ca urmare a unui montaj necorespunzător (dacă montajul se face cu mâini murdare, transpirate, urme de grăsime, praf de diferite feluri şi mai ales pilituri metalice);",
            "umiditatea reziduală scăzută a gazului izolant"
        ],
        "answer": "numai de produse de descompunere ale SF6 şi compuşii lor cu materiale izolante sau metale, sub influenţa umidităţii;",
        "reference": "https://stoianconstantin.wordpress.com/wp-content/uploads/2024/11/1.e-ip-71-2015-statii-de-conexiuni-si-de-transformare.pdf"
    },
    {
        "question": "Printre măsurile de reducere a distanţelor de izolare pot fi:",
        "options": [
            "folosirea dispozitivelor de limitare a curenţilor de scurtcircuit; ",
            "aplicarea unui strat protector pe izolatoare pentru micşorarea efectelor poluării din marile oraşe sau de pe unele platforme industriale; ",
            "micşorarea densităţii dielectricilor gazoşi."
        ],
        "answer": "aplicarea unui strat protector pe izolatoare pentru micşorarea efectelor poluării din marile oraşe sau de pe unele platforme industriale; ",
        "reference": "Not available"
    },
    {
        "question": "Producerea dublei puneri la pământ a bobinajului rotoric al unui generator sincron are ca efect negativ ",
        "options": [
            "numai creșterea foarte mare a curentului prin circuitul rotoric ",
            "faptul că tensiunile electromotoare nu mai sunt sinusoidale",
            "apar scântei la periile colectorului"
        ],
        "answer": "numai creșterea foarte mare a curentului prin circuitul rotoric ",
        "reference": "https://electromed.ro/wp-content/uploads/2020/04/Test-7-electrotehnica-gradul-II.pdf"
    },
    {
        "question": "Releul termic se foloseşte pentru:",
        "options": [
            "protejarea motoarelor electrice la scurtcircuit",
            "protejarea generatoarelor si motoarelor electrice împotriva punerii la pământ",
            "protejarea motoarelor electrice împotriva suprasarcinilor"
        ],
        "answer": "protejarea motoarelor electrice împotriva suprasarcinilor",
        "reference": "https://eprofu.ro/docs/tehnic/practica-laborator/teorie/instalatii-electrice/3.3relee-termice.pdf"
    },
    {
        "question": "Rezistenta echivalenta a trei rezistoare, având fiecare rezistenta de 2 ohm, montate în serie este:",
        "options": [
            " 5 ohm",
            " 0,66 ohm",
            " 6 ohm"
        ],
        "answer": " 6 ohm",
        "reference": "https://sites.google.com/site/bazeleelectronicii/home/rezistoare/3-resistors-in-series"
    },
    {
        "question": "Raportul nominal de transformare al unui transformator de putere este:",
        "options": [
            "raportul dintre tensiunea primara si secundara de mers în gol",
            "raportul dintre curentul primar si secundar la sarcina nominala",
            "raportul dintre tensiunea primara si secundara la sarcina nominala"
        ],
        "answer": "raportul dintre tensiunea primara si secundara de mers în gol",
        "reference": "https://ro.wikipedia.org/wiki/Transformator"
    },
    {
        "question": "Reactanţa supratranzitorie a unui motor este:",
        "options": [
            "direct proporţionala cu curentul de pornire",
            "invers proporţionala cu curentul de pornire",
            "invers proporţionala cu pătratul tensiunii de alimentare"
        ],
        "answer": "invers proporţionala cu curentul de pornire",
        "reference": "https://www.mircea-gogu.ro/pdf/Curs%20Masini%20electrice/capitolul_VI.pdf"
    },
    {
        "question": "Un regim energetic  este deformant  ",
        "options": [
            "dacă undele de curent şi tensiune nu sunt periodice",
            "numai dacă undele de curent şi de tensiune sunt ambele periodice şi nesinusoidale",
            "undele de curent şi tensiune sunt periodice iar una este nesinusoidală"
        ],
        "answer": "undele de curent şi tensiune sunt periodice iar una este nesinusoidală",
        "reference": "http://elth.pub.ro/~petrescu/1.Energetica%20-%20IIB/Curs2.8.pdf"
    },
    {
        "question": "Reglarea puterii active debitate de generatorul sincron se face variind:",
        "options": [
            "tensiunea de excitaţie",
            "admisia agentului primar la turbina",
            "curentul statoric"
        ],
        "answer": "admisia agentului primar la turbina",
        "reference": "https://www.mircea-gogu.ro/pdf/Curs%20Masini%20electrice/capitolul_VI.pdf"
    },
    {
        "question": "Reglarea puterii reactive debitate de generatorul sincron se face prin:",
        "options": [
            "modificarea curentului de excitaţie",
            "deschiderea aparatului director al turbinei",
            "deconectarea rezistentei de stingere"
        ],
        "answer": "modificarea curentului de excitaţie",
        "reference": "https://www.mircea-gogu.ro/pdf/Curs%20Masini%20electrice/capitolul_VI.pdf",
    },
    {
        "question": "Comparativ cu un transformator, autotransformatorul are tensiunea de scurtcircuit:",
        "options": [
            "mai mare",
            "egală",
            "mai mică"
        ],
        "answer": "mai mică",
        "reference": "https://www.mircea-gogu.ro/pdf/Curs%20Masini%20electrice/capitolul_II.pdf"
    },
    {
        "question": "Relaţia între curenţii de linie si de fazã în sisteme cu generatoare si receptoare conectate în triunghi este:",
        "options": [
            "curentul de linie este mai mare de 1,73 ori decât curentul de fazã",
            "curentul de linie este egal cu curentul de fazã",
            "curentul de fazã este mai mare de de 1,73 ori decât curentul de linie"
        ],
        "answer": "curentul de linie este mai mare de 1,73 ori decât curentul de fazã",
        "reference": "http://www.dragos.elth.pub.ro/cursuri/CursLD2.pdf"
    },
    {
        "question": "Se considera ca un transformator funcţionează în gol atunci când:",
        "options": [
            "sarcina transformatorului este foarte mica",
            "curentul primar si curentul secundar sunt foarte mici",
            "o înfăşurare este conectata la reţea, iar cealaltă este deschisa"
        ],
        "answer": "o infăşurare este conectata la reţea, iar cealaltă este deschisa",
        "reference": "https://ro.wikipedia.org/wiki/Transformator"
    },
    {
        "question": "Spaţiul ocupat de o instalaţie capsulată depinde în principal de:",
        "options": [
            "curentul nominal al legăturilor electrice;",
            "mediul de stingere a arcului electric;",
            "realizarea capsulării: capsulare tripolară sau monopolară."
        ],
        "answer": "realizarea capsulării: capsulare tripolară sau monopolară.",
        "reference": "https://web.transelectrica.ro/nti-transelectrica/nti-uri/110.%20NTI-TEL-R-005-2017-00%20-%20Regulament%20exploatare%20tehnica%20a%20echipam.%20electr.ditributie%20primara/NTI-TEL-R-005-2017-00.pdf"
    },
    {
        "question": "Rezistenta echivalenta a trei rezistoare, având fiecare rezistenta de 3 ohm, montate în paralel, este:",
        "options": [
            " 3 ohm",
            " 1 ohm",
            " 9 ohm"
        ],
        "answer": " 1 ohm",
        "reference": "https://sites.google.com/site/bazeleelectronicii/home/rezistoare/4-resistors-in-parallel"
    },
    {
        "question": "Rezistivitatea unui conductor electric depinde de:",
        "options": [
            "natura materialului",
            "lungime, direct proporţional",
            "masa, direct proporţional"
        ],
        "answer": "natura materialului",
        "reference": "https://ro.wikipedia.org/wiki/Rezistivitate_electric%C4%83"
    },
    {
        "question": "Rezonanţa se obţine într-un circuit electric de curent alternativ dacă:",
        "options": [
            "reactanţele inductivă şi capacitivă în valoare absolută sunt egale",
            "reactanţa inductivă este mai mare decât reactanţa capacitivă",
            "reactanţa capacitivă este mai mare decât reactanţa inductivă"
        ],
        "answer": "reactanţele inductivă şi capacitivă în valoare absolută sunt egale",
        "reference": "https://hobbytronica.ro/reactanta-inductiva-si-reactanta-capacitiva/"
    },
    {
        "question": "Rolul conservatorului de ulei la transformatoarele de forţa este:",
        "options": [
            "de a asigura o suprafaţa de contact a uleiului cu aerul mai mica",
            "de a asigura spaţiul necesar dilatării si contractării uleiului",
            "de a face posibila umplerea cu ulei a transformatorului"
        ],
        "answer": "de a asigura spaţiul necesar dilatării si contractării uleiului",
        "reference": "http://ro.scotech-electrical.com/info/three-types-of-transformer-conservator-54381379.html"
    },
    {
        "question": "Rolul dominant pentru reglarea nivelului de tensiune pe o linie electrica îl are:",
        "options": [
            "circulaţia de putere activa",
            "circulaţia de putere reactiva",
            "nici una din cele doua"
        ],
        "answer": "circulaţia de putere reactiva",
        "reference": "https://web.transelectrica.ro/nti-transelectrica/nti-uri/110.%20NTI-TEL-R-005-2017-00%20-%20Regulament%20exploatare%20tehnica%20a%20echipam.%20electr.ditributie%20primara/NTI-TEL-R-005-2017-00.pdf"
    },
    {
        "question": "În cazul transformatoarelor de tensiune, care dintre urmatoarele enunturi nu este adevarat:\n  ",
        "options": [
            "alegerea transformatorului de tensiune presupune verificarea nivelului sau de izolatie;",
            "alegerea transformatorului de tensiune presupune verificarea sa la stabilitate electrodinamica in caz de scurtcircuit",
            "transformatorul de tensiune trebuie sa functioneze in domeniul de frecventa indicat de fabricant"
        ],
        "answer": "alegerea transformatorului de tensiune presupune verificarea sa la stabilitate electrodinamica in caz de scurtcircuit",
        "reference": "Not Available"
    },
    {
        "question": "Schema echivalentă de calcul în cazul producerii unui scurtcircuit între două faze ale unei reţele izolat de pământ şi fără arc electric se compune din:",
        "options": [
            "schema de secvenţă directă (pozitivă) înseriată cu triplul impedanţei arcului",
            "schemele de secvenţă directă (pozitivă) şi inversă (negativă) conectate în paralel",
            "schemele de secvenţă directă (pozitivă), inversă (negativă) şi homopolară (zero) conectate în paralel"
        ],
        "answer": "schemele de secvenţă directă (pozitivă) şi inversă (negativă) conectate în paralel",
        "reference": "https://ro.scribd.com/document/374032191/Intocmirea-schemelor-echivalente-de-secven%C8%9B%C4%83"
    },
    {
        "question": "Schema echivalentă de calcul în cazul producerii unui scurtcircuit trifazat, al unei reţele, izolat de pământ se compune din:",
        "options": [
            "schemele de secvenţă directă (pozitivă) , inversă (negativă) şi homopolară (zero) conectate în serie ",
            "schema de secvenţă directă (pozitivă)",
            "schemele de secvenţă directă (pozitivă) şi inversă (negativă) conectate în paralel"
        ],
        "answer": "schemele de secvenţă directă (pozitivă)",
        "reference": "https://ro.scribd.com/document/374032191/Intocmirea-schemelor-echivalente-de-secven%C8%9B%C4%83"
    },
    {
        "question": "Schema echivalentă de calcul în cazul producerii unui scurtcircuit trifazat şi la pământ, cu arc, se compune din:",
        "options": [
            "schema de secvenţă directă (pozitivă) înseriată cu triplul impedanţei arcului",
            "schema de secvenţă directă (pozitivă)",
            "schema de secvenţă directă (pozitivă) înseriată cu schema de secvenţă inversă (negativă)."
        ],
        "answer": "schema de secvenţă directă (pozitivă) înseriată cu triplul impedanţei arcului",
        "reference": "https://ro.scribd.com/document/374032191/Intocmirea-schemelor-echivalente-de-secven%C8%9B%C4%83"
    },
    {
        "question": "Transformatoarele  de măsură se folosesc",
        "options": [
            "în instalaţiile de curent alternativ de înaltă tensiune",
            "numai în instalaţiile de curent alternativ de medie tensiune",
            "în instalaţiile de curent continuu de înaltă şi joasă tensiune"
        ],
        "answer": "în instalaţiile de curent alternativ de înaltă tensiune",
        "reference": "https://electricalc.ro/component/content/article/23-blog/126-masurarea-energiei-electrice"
    },
    {
        "question": "Scopul normării distanţelor de izolare în aer minime admisibile pentru instalaţiile electrice este asigurarea: ",
        "options": [
            "protecţiei personalului de exploatare a instalaţiei;",
            "siguranţei în funcţionare a instalaţiei, prin reducerea numărului de defecte în instalaţie;",
            "realizării unei economii de teren."
        ],
        "answer": "siguranţei în funcţionare a instalaţiei, prin reducerea numărului de defecte în instalaţie;",
        "reference": "Not Available"
    },
    {
        "question": "Susceptanţa unui circuit de curent alternativ sinusoidal este inversul:",
        "options": [
            "impedanţei",
            "rezistenţei",
            "reactanţei"
        ],
        "answer": "reactanţei",
        "reference": "https://electromed.ro/wp-content/uploads/2021/01/11-Unitati-de-masura-electrotehnica.pdf",
    },
    {
        "question": "Transformatoarele de măsurare de curent:",
        "options": [
            "pot fi racordate în circuitul primar cu înfăşurarea secundara deschisa",
            "pot fi lăsate în exploatare cu înfăşurarea secundara deschisa",
            "nu pot fi racordate in circuitul primar cu înfăşurarea secundara deschisa"
        ],
        "answer": "nu pot fi racordate in circuitul primar cu înfăşurarea secundara deschisa",
        "reference": "https://sites.google.com/site/bazeleelectronicii/home/transformatoare/6-transformatorul-de-curent"
    },
    {
        "question": "Secţionarea barelor colectoare ale unei staţii electrice conduce",
        "options": [
            "la mărirea continuităţii în alimentare a consumatorilor racordaţi la bare;",
            "limitarea curenţilor de scurtcircuit pe barele respective, dacă alimentarea staţiei se face printr-un singur transformator;",
            "numai la limitarea curenţilor de scurtcircuit pe barele respective, dacă alimentarea staţiei se face prin două transformatoare sau printr-un transformator cu înfăşurare divizată."
        ],
        "answer": "la mărirea continuităţii în alimentare a consumatorilor racordaţi la bare;",
        "reference": "https://www.researchgate.net/profile/Sorina-Costinas/publication/258129687_Partea_electrica_a_centralelor_si_statiilor_Note_de_curs/links/54f722500cf2ccffe9da9c63/Partea-electrica-a-centralelor-si-statiilor-Note-de-curs.pdf"
    },
    {
        "question": "Secţionarea barelor colectoare în staţiile electrice are scopul:",
        "options": [
            "de limitare a curenţilor de scurtcircuit",
            "de a reduce costul instalaţiei",
            "de a reduce pierderile de putere"
        ],
        "answer": "de limitare a curenţilor de scurtcircuit",
        "reference": "https://www.researchgate.net/profile/Sorina-Costinas/publication/258129687_Partea_electrica_a_centralelor_si_statiilor_Note_de_curs/links/54f722500cf2ccffe9da9c63/Partea-electrica-a-centralelor-si-statiilor-Note-de-curs.pdf"
    },
    {
        "question": "Sensul puterii deformante într-un circuit format dintr-un generator care produce o undă sinusoidală şi o bobină cu miez de fier saturat este:",
        "options": [
            "de la generator spre bobină",
            "întotdeauna de la bobină spre generator",
            "poate avea oricare sens, în funcţie de încărcarea generatorului"
        ],
        "answer": "întotdeauna de la bobină spre generator",
        "reference": "http://www.dragos.elth.pub.ro/cursuri/CursLD2.pdf"
    },
    {
        "question": "Separatorul, ca echipament în cadrul unei staţii electrice, are rolul:",
        "options": [
            " de a proteja circuitul la supracurenţi",
            " de a separa vizibil un circuit",
            " de a măsură nivelul de izolaţie"
        ],
        "answer": " de a separa vizibil un circuit",
        "reference": "https://lovental.files.wordpress.com/2016/06/l5-separatoare-electrice.pdf"
    },
    {
        "question": "Siguranţele electrice au rolul de a:",
        "options": [
            "proteja instalaţia din aval la defecte la scurtcircuit ca si la suprasarcini de lunga durata",
            "face trecerea din linie electrica aeriana în line electrica în cablu",
            "asigura protecţia personalului"
        ],
        "answer": "proteja instalaţia din aval la defecte la scurtcircuit ca si la suprasarcini de lunga durata",
        "reference": "https://electric14.ro/blog/siguranta-automata-rolul-unei-sigurante-automate-si-tipuri?srsltid=AfmBOop6ZH6i39P7KNSoGIYB-U69FpMHxcZRwTV8x3QE22cyR6-HemMt"
    },
    {
        "question": "Siguranţele electrice sunt aparate electrice care împiedica:",
        "options": [
            "creşterea tensiunii peste o valoare limita",
            "creşterea curentului peste o valoare limita",
            "scăderea curentului sub o valoare limita"
        ],
        "answer": "creşterea curentului peste o valoare limita",
        "reference": "https://electric14.ro/blog/siguranta-automata-rolul-unei-sigurante-automate-si-tipuri?srsltid=AfmBOop6ZH6i39P7KNSoGIYB-U69FpMHxcZRwTV8x3QE22cyR6-HemMt"
    },
    {
        "question": "Siguranţele fuzibile sunt aparate utilizate pentru protecţie la:",
        "options": [
            "supratensiuni",
            "supracurenţi",
            "defect de izolaţie"
        ],
        "answer": "supracurenţi",
        "reference": "https://electric14.ro/blog/siguranta-automata-rolul-unei-sigurante-automate-si-tipuri?srsltid=AfmBOop6ZH6i39P7KNSoGIYB-U69FpMHxcZRwTV8x3QE22cyR6-HemMt"
    },
    {
        "question": "Singurele mărimi fizice reale în curent alternativ sunt:",
        "options": [
            "mărimile efective de curent sau de tensiune",
            "mărimile instantanee de curent sau de tensiune",
            "valorile medii de curent sau de tensiune"
        ],
        "answer": "mărimile instantanee de curent sau de tensiune",
        "reference": "https://https://www.fizichim.ro/en/docs/fizica/clasa10/capitolul3-producerea-si-utilizarea-curentului-alternativ/III-4-marimi-caracteristice-curentului-alternativ/"
    },
    {
        "question": "Sistemele simetrice de fazori în care se descompun sistemele de tensiuni sau de curenţi dezechilibraţi:",
        "options": [
            "corespund unor realităţi fizice ",
            "reprezintă artificii de calcul",
            "numai sistemul direct corespunde unei realităţi fizice"
        ],
        "answer": "corespund unor realităţi fizice ",
        "reference": "https://hal.science/hal-04468786v1/file/2015Perform_Adascalitei-TCE-Curs389.pdf"
    },
    {
        "question": "Sistemul de tensiuni ale unui sistem electric trifazat racordat la un generator electric care produce tensiuni electromotoare simetrice este::",
        "options": [
            "este întotdeauna simetric",
            "este nesimetric dacă fazele sunt neegal încărcate",
            "este simetric dacă fazele sunt egal încărcate"
        ],
        "answer": ["este nesimetric dacă fazele sunt neegal încărcate", "este simetric dacă fazele sunt egal încărcate"],
        "reference": "https://users.utcluj.ro/~birok/Sem2/1-regimul%20nesimetric%20la%20transformatoare.pdf"
    },
    {
        "question": "Transformatoarele de măsurare de tensiune se construiesc pentru tensiuni în secundar de:",
        "options": [
            "10 V",
            "50 V",
            "100 V"
        ],
        "answer": "100 V",
        "reference": "https://electronicaplicata.wordpress.com/wp-content/uploads/2019/04/cap2-transformatoare-electrice.pdf"
    },
    {
        "question": "Suma forţelor electromotoare ale unui sistem trifazat simetric este:",
        "options": [
            "egală cu 1",
            "nulă",
            "egală cu 1/2"
        ],
        "answer": "nulă",
        "reference": "https://hal.science/hal-04468786v1/file/2015Perform_Adascalitei-TCE-Curs389.pdf"
    },
    {
        "question": "Supratensiunile de origine atmosferica pot fi:",
        "options": [
            "directe",
            "indirecte (induse)",
            "de rezonanta sau de ferorezonanţa"
        ],
        "answer": ["directe", "indirecte (induse)"],
        "reference": "https://www.electricon.ro/blog/protectia-la-supratensiune.html?srsltid=AfmBOooAYjScjHUnIi8xLu_9y1Vx2scgXR7C8Qdk4VqiKmrzOzfuZ7WU"
    },
    {
        "question": "Un conductor în care circulaţia curentului electric nu se supune legii lui Ohm se numeşte:",
        "options": [
            "liniar",
            "neomogen",
            "neliniar"
        ],
        "answer": "neliniar",
        "reference": "https://ro.wikipedia.org/wiki/Legea_lui_Ohm"
    },
    {
        "question": "Teoremele (formulele) Biot Savart Laplace se referă la:",
        "options": [
            "intensitatea câmpului magnetic produs de un curent care circulă printr-un conductor",
            "forţa electromagnetică",
            "forţa exercitată între două conductoare paralele parcurse de curenţi"
        ],
        "answer": "intensitatea câmpului magnetic produs de un curent care circulă printr-un conductor",
        "reference": "https://en.wikipedia.org/wiki/Biot%E2%80%93Savart_law"
    },
    {
        "question": "Tesla este unitatea de măsură a:",
        "options": [
            "inducţiei magnetice",
            "fluxului magnetic",
            "intensităţii câmpului magnetic"
        ],
        "answer": "inducţiei magnetice",
        "reference": "https://en.wikipedia.org/wiki/Tesla_(unit)"
    },
    {
        "question": "*Transformatoarele cu ulei prevăzute cu conservator prezintă următoarele caracteristici:",
        "options": [
            "dilatarea lichidului este compensată prin deformarea elastică a pereţilor cuvei;",
            "împiedică, dar nu elimină, pătrunderea umidităţii în interiorul rezervorului de expansiune; ",
            "asigură facilităţi în modul de dispunere a bornelor şi deci de racordare la reţea."
        ],
        "answer": "dilatarea lichidului este compensată prin deformarea elastică a pereţilor cuvei;",
        "reference": "https://www.mircea-gogu.ro/pdf/Curs%20Masini%20electrice/capitolul_II.pdf"
    },
    {
        "question": "Transformatoarele de măsurare a curenţilor se construiesc pentru curenţi secundari de:",
        "options": [
            "1 sau 5 A",
            "5 sau 10 A",
            "1 sau 10 A"
        ],
        "answer": "1 sau 5 A",
        "reference": "https://www.electrica.ro/wp-content/uploads/2015/10/ST24-TC-jt.pdf"
    },
    {
        "question": "Un motor electric trifazat legat în stea este în funcţiune si alimentat la 0,4 kV. Tensiunea între neutrul stelei si una dintre faze este:",
        "options": [
            "0,4 kV",
            "0 V",
            "230 V"
        ],
        "answer": "230 V",
        "reference": "https://eprofu.ro/docs/tehnic/practica-laborator/teorie/instalatii-electrice/4.3scheme-actionari-electrice.pdf"
    },
    {
        "question": "Un separator pe un circuit de înalta tensiune poate fi manevrat:",
        "options": [
            "sub tensiune si cu curent",
            "cu curent fara tensiune",
            "fãrã curent, fãrã tensiune sau sub tensiune, fãrã curent"
        ],
        "answer": "fãrã curent, fãrã tensiune sau sub tensiune, fãrã curent",
        "reference": "https://www.distributie-energie.ro/wp-content/uploads/2023/12/ST111m-Separator-de-interior-mt-STIm-STIPm.pdf"
    },
    {
        "question": "Transformatoarele de măsurare de tensiune:",
        "options": [
            " nu pot fi lăsate în exploatare cu înfăşurarea secundara deschisa",
            " nu pot fi lăsate în exploatare cu înfăşurarea secundara în scurtcircuit",
            " pot fi puse sub tensiune cu înfăşurarea secundara in scurtcircuit"
        ],
        "answer": " nu pot fi lăsate în exploatare cu înfăşurarea secundara deschisa",
        "reference": "https://sites.google.com/site/bazeleelectronicii/home/transformatoare/7-transformatorul-de-tensiune"
    },
    {
        "question": "Un circuit de curent alternativ, pentru care factorul de putere este egal cu 1, este un circuit:",
        "options": [
            "pur rezistiv",
            "pur inductiv",
            "pur capacitiv"
        ],
        "answer": "pur rezistiv",
        "reference": "https://ro.wikipedia.org/wiki/Factor_de_putere"
    },
    {
        "question": "*Utilizarea unei cuple longo-transversale se preferă atunci când dorim:",
        "options": [
            "scurtarea manevrelor;",
            "o siguranţă în funcţionare mai mare;",
            "reducerea investiţiei în echiparea staţiei."
        ],
        "answer": "o siguranţă în funcţionare mai mare;",
        "reference": "https://lovental.files.wordpress.com/2016/06/l5-separatoare-electrice.pdf"
    },
    {
        "question": "Un corp conductor situat într-un câmp electric de intensitate E se încarcă cu electricitate:",
        "options": [
            "prin conducţie",
            "prin inducţie",
            "prin magnetizare"
        ],
        "answer": "prin inducţie",
        "reference": "https://ro.wikipedia.org/wiki/Induc%C8%9Bie_electric%C4%83"
    },
    {
        "question": "Un întreruptor debroşabil asigură:",
        "options": [
            "protecţia în caz de scurtcircuit;",
            "protecţia la supratensiuni;",
            "izolarea personalului care lucrează la întreruptor, de restul instalaţiei aflată sub tensiune."
        ],
        "answer": ["protecţia în caz de scurtcircuit;", "izolarea personalului care lucrează la întreruptor, de restul instalaţiei aflată sub tensiune."],
        "reference": "https://www.electricon.ro/blog/tipuri-de-intrerupatoare.html?srsltid=AfmBOort9xdP-ajRgtdvxmp16widnv57HGwiE2oXvSATjG75mVkNgdXR"
    },
    {
        "question": "Un întreruptor debroşabil asigură:",
        "options": [
            "protecţia în caz de scurtcircuit;",
            "numai comutaţia în regim normal;",
            "protecţia la supratensiuni."
        ],
        "answer": "protecţia în caz de scurtcircuit;",
        "reference": "https://electric14.ro/blog/tipuri-de-intrerupatoare.html?srsltid=AfmBOort9xdP-ajRgtdvxmp16widnv57HGwiE2oXvSATjG75mVkNgdXR"
    },
    {
        "question": "Un motor electric sincron, care funcţionează subexcitat:",
        "options": [
            "absoarbe putere activă şi putere reactivă",
            "absoarbe putere activă şi produce putere reactivă",
            "produce putere activă şi putere reactivă"
        ],
        "answer": "absoarbe putere activă şi putere reactivă",
        "reference": "https://www.exsteel.ro/articole-si-noutati/articole-motoare-electrice/care-sunt-diferentele-dintre-un-motor-sincron-si-unul-asincron"
    },
    {
        "question": "Valoarea conductivităţii electrice este în ordine crescătoare la următoarele materiale:",
        "options": [
            "aluminiu, argint, cupru",
            "argint, cupru, aluminiu",
            "aluminiu, cupru, argint"
        ],
        "answer": "aluminiu, cupru, argint",
        "reference": "https://ro.wikipedia.org/wiki/Conductivitate_electric%C4%83"
    },
    {
        "question": "Un număr de n surse  având fiecare tensiunea electromotoare continua e si rezistenta interioara r, legate în paralel pot fi înlocuite printr-o sursa echivalenta având:",
        "options": [
            "forţa electromotoare e si rezistenta r/n",
            "forţa electromotoare ne si rezistentă r/n",
            "forţa electromotoare e si rezistenta nr."
        ],
        "answer": "forţa electromotoare e si rezistenta r/n",
        "reference": "https://stoianconstantin.wordpress.com/2008/01/23/raspunsuri-la-subiectele-de-electrotehnica/"
    },
    {
        "question": "Un receptor electric de rezistenţă R conectat la bornele AB ale unui circuit de alimentare oarecare absoarbe puterea maximă dacă:",
        "options": [
            "rezistenţa R este egală cu rezistenţa totală a circuitului văzută prin bornele AB",
            "rezistenţa R este egală cu rezistenţa internă a sursei de tem",
            "rezistenţa R tinde spre zero"
        ],
        "answer": "rezistenţa R este egală cu rezistenţa totală a circuitului văzută prin bornele AB",
        "reference": "https://sites.google.com/site/bazeleelectronicii/home/circuite-dc-si-teoria-circuitelor-dc/9"
    },
    {
        "question": "Valoarea intensităţii câmpului electric produs de o sarcină electrică la distanţa r este:",
        "options": [
            "direct proporţională cu r",
            "direct proporţională cu pătratul lui r",
            "invers proporţională cu pătratul lui r"
        ],
        "answer": "direct proporţională cu pătratul lui r",
        "reference": "https://ro.wikipedia.org/wiki/Intensitate_a_c%C3%A2mpului_electric"
    },
    {
        "question": "Un transformator de măsurare de curent nu poate fi lăsat cu secundarul în gol, deoarece:",
        "options": [
            " împiedica circulaţia curentului primar",
            " apar supratensiuni periculoase in secundar",
            " nu indica aparatele de măsurare"
        ],
        "answer": " apar supratensiuni periculoase in secundar",
        "reference": "https://sites.google.com/site/bazeleelectronicii/home/transformatoare/6-transformatorul-de-curent"
    },
    {
        "question": "Unitatea de măsură a capacităţii unui condensator este:",
        "options": [
            "F",
            "Axh",
            "A/h"
        ],
        "answer": "F",
        "reference": "https://en.wikipedia.org/wiki/Farad"
    },
    {
        "question": "Unitatea de măsură a fluxului electric este:",
        "options": [
            "V/m",
            "Coulombul",
            "Faradul"
        ],
        "answer": "Coulombul",
        "reference": "https://en.wikipedia.org/wiki/Coulomb"
    },
    {
        "question": "Unitatea de măsură a fluxului magnetic este:",
        "options": [
            "Tesla",
            "Weber",
            "Farad"
        ],
        "answer": "Weber",
        "reference": "https://en.wikipedia.org/wiki/Weber_(unit)"
    },
    {
        "question": "Unitatea de măsură a frecvenţei mărimilor periodice se numeşte:",
        "options": [
            "Weber",
            "Hertz",
            "Henry"
        ],
        "answer": "Hertz",
        "reference": "https://en.wikipedia.org/wiki/Hertz"
    },
    {
        "question": "Unitatea de măsură a sarcinii electrice este:",
        "options": [
            "V/m",
            "Coulomb",
            "Farad"
        ],
        "answer": "Coulomb",
        "reference": "https://en.wikipedia.org/wiki/Coulomb"
    },
    {
        "question": "Unitatea de măsură ohm x mmp / m este pentru:",
        "options": [
            "rezistivitate",
            "greutate specifica",
            "coeficient de dilataţie"
        ],
        "answer": "rezistivitate",
        "reference": "https://en.wikipedia.org/wiki/Electrical_resistivity_and_conductivity"
    },
    {
        "question": "Unitatea de măsură pentru măsurarea puterii active este:",
        "options": [
            "kWh",
            "kW",
            "kW/h"
        ],
        "answer": "kW",
        "reference": "https://ro.wikipedia.org/wiki/Putere_electric%C4%83"
    },
    {
        "question": "Unitatea de măsură pentru puterea reactiva este:",
        "options": [
            "kVAr",
            "kVA",
            "kW"
        ],
        "answer": "kVAr",
        "reference": "https://ro.wikipedia.org/wiki/Putere_electric%C4%83"
    },
    {
        "question": "Utilizarea întreruptoarelor debroşabile:",
        "options": [
            "nu asigură eliminarea unor greşeli de manevră datorate separatoarelor;",
            "asigură scurtarea duratei reviziilor la celule;",
            "asigură numai izolarea personalului care lucrează la întreruptor, de restul instalaţiei aflată sub tensiune."
        ],
        "answer": "asigura scurtarea duratei reviziilor la celule;",
        "reference": "https://www.electricon.ro/blog/tipuri-de-intrerupatoare.html?srsltid=AfmBOopct01CGLu6G3PUSyS6cKrWwVUszYIIMBayeYyRHPvwaKdo-5jn"
    },
    {
        "question": "Autotransformatoarele sunt folosite ",
        "options": [
            "între reţelele de                     110 kV şi 220 kV",
            "numai între reţelele de              220 kV şi 400 kV",
            " între reţelele de                   20 kV şi 110 kV"
        ],
        "answer": "între reţelele de                     110 kV şi 220 kV",
        "reference": "https://www.academia.edu/42944080/Aspecte_de_baz%C4%83_privind_auto_transformatoarele_%C3%AEn_electroenergetic%C4%83"
    },
    {
        "question": "Utilizarea întreruptoarelor debroşabile:",
        "options": [
            "asigură eliminarea unor greşeli de manevră datorate separatoarelor;",
            "nu asigură scurtarea duratei reviziilor la celule;",
            "nu asigură izolarea personalului care lucrează la întreruptor, de restul instalaţiei aflată sub tensiune."
        ],
        "answer": "asigură eliminarea unor greşeli de manevră datorate separatoarelor;",
        "reference": "https://electric14.ro/blog/tipuri-de-intrerupatoare.html?srsltid=AfmBOopct01CGLu6G3PUSyS6cKrWwVUszYIIMBayeYyRHPvwaKdo-5jn"
    },
    {
        "question": "Utilizarea întreruptoarelor debroşabile:",
        "options": [
            "asigură izolarea personalului care lucrează la întreruptor, de restul instalaţiei aflată sub tensiune.",
            "asigură numai scurtarea duratei reviziilor la celule;",
            "nu asigură eliminarea unor greşeli de manevră datorate separatoarelor;"
        ],
        "answer": "asigură izolarea personalului care lucrează la întreruptor, de restul instalaţiei aflată sub tensiune.",
        "reference": "https://electric14.ro/blog/tipuri-de-intrerupatoare.html?srsltid=AfmBOopct01CGLu6G3PUSyS6cKrWwVUszYIIMBayeYyRHPvwaKdo-5jn"
    {
        "question": "Utilizarea întreruptorului debroşabil:",
        "options": [
            "asigură doar compactarea celulei;",
            "asigură rapiditate în restabilirea alimentării în cazul unei defectări;",
            "creşte riscul de electrocutare a personalului care execută lucrări de revizie în celulă."
        ],
        "answer": "asigură rapiditate în restabilirea alimentării în cazul unei defectări;",
        "reference": "https://electric14.ro/blog/tipuri-de-intrerupatoare.html?srsltid=AfmBOopct01CGLu6G3PUSyS6cKrWwVUszYIIMBayeYyRHPvwaKdo-5jn"
    },
    {
        "question": "Utilizarea SF6 ca mediu de izolare ",
        "options": [
            "conduce la realizarea unor celule cu pericol de incendiu",
            "conduce numai la realizarea unor celule cu întreţinere mult simplificată;",
            "conduce la realizarea unor celule compacte"
        ],
        "answer": "conduce la realizarea unor celule cu pericol de incendiu",
        "reference": "https://electrical-engineering-portal.com/sulphur-hexafluoride-sf6-gas-insulated-switchgear"
    },
    {
        "question": "*Utilizarea SF6 ca mediu de stingere a arcului electric permite",
        "options": [
            "doar realizarea unor întreruptoare fără pericol de incendiu;",
            " realizarea unor întreruptoare cu întreţinere mult simplificată;",
            "puţin silenţioase."
        ],
        "answer": "doar realizarea unor întreruptoare fără pericol de incendiu;",
        "reference": "https://ro.scribd.com/document/518795728/Intreruptoare-cu-SF6"
    },
    {
        "question": "Utilizarea vidului ca mediu de stingere a arcului electric: ",
        "options": [
            "reduce pericolul de incendiu;",
            "nu reduce cheltuielile de întreţinere;",
            "creşte masa şi gabaritul întreruptoarelor"
        ],
        "answer": "reduce pericolul de incendiu;",
        "reference": "https://electrical-engineering-portal.com/vacuum-circuit-breakers"
    },
    {
        "question": "Valoarea frecventei în sistemul electroenergetic este determinata în principal de:",
        "options": [
            "bilanţul puterilor active",
            "circulaţia puterii reactive",
            "modul de tratare a neutrului reţelei"
        ],
        "answer": "bilanţul puterilor active",
        "reference": "https://www.electrica.ro/wp-content/uploads/2017/11/STDH-101-Frecventa-in-sistemele-electroenergetice.pdf"
    },
    {
        "question": "Valoarea medie a capacităţii lineice pentru o linie electrică aeriană trifazată este ......... faţă de cea a unui cablu subteran.",
        "options": [
            "egală",
            "mai mică",
            "mai mare"
        ],
        "answer": "mai mică",
        "reference": "https://en.wikipedia.org/wiki/Capacitance"
    },
    {
        "question": "Valoarea medie a inductanţei de serviciu pentru o linie electrică aeriană trifazată este ......... faţă de cea a unui cablu subteran.",
        "options": [
            "egală ",
            "mai mare",
            "mai mică"
        ],
        "answer": "mai mare",
        "reference": "https://hobbytronica.ro/reactanta-inductiva-si-reactanta-capacitiva/"
    },
    {
        "question": "Valoarea medie pătratică a unei mărimi periodice se mai numeşte şi:",
        "options": [
            "amplitudine",
            "modul",
            "valoare efectivă sau valoarea eficace"
        ],
        "answer": "valoare efectivă sau valoarea eficace",
        "reference": "https://www.afahc.ro/ro/facultate/cursuri/mee.pdf"
    }
];

// Export the questions array so it can be used in other files
export { BASE_QUESTIONS };