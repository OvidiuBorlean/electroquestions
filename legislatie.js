const BASE_QUESTIONS = [
    {
        "question": "Agenţie naţională de reglementare în domeniul energiei termice",
        "options": [
            "Agenţie naţională de reglementare în domeniul energiei termice",
            "Autoritatea Naţionala de Reglementare pentru Serviciile Publice de Gospodărie Comunala",
            "Autoritatea Naţionala de Reglementare in domeniul Energiei "
        ],
        "answer": "Autoritatea Naţionala de Reglementare pentru Serviciile Publice de Gospodărie Comunala",
        "reference": "https://example.com/reference"
    },
    {
        "question": "drept de utilizare gratuită",
        "options": [
            "drept de utilizare gratuită",
            "drept de proprietate",
            "drept de servitute legală"
        ],
        "answer": "drept de proprietate",
        "reference": "https://example.com/reference"
    },
    {
        "question": "nu are obligaţii privind asigurarea accesului la reţea",
        "options": [
            "nu are obligaţii privind asigurarea accesului la reţea",
            "este obligată să asigure accesul la reţea numai pentru producători de energie electrică din surse regenerabile ",
            "este obligată să asigure accesul la reţea, conform reglementărilor autorităţii competente"
        ],
        "answer": "este obligată să asigure accesul la reţea numai pentru producători de energie electrică din surse regenerabile ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Utilizează energie electrică în exclusivitate pentru iluminatul artificial din propria locuinţă şi din afara acesteia, fiind racordat la o reţea electrică monofazată de joasă tensiune",
        "options": [
            "Utilizează energie electrică în exclusivitate pentru iluminatul artificial din propria locuinţă şi din afara acesteia, fiind racordat la o reţea electrică monofazată de joasă tensiune",
            "Utilizează energie electrică pentru funcţionarea receptoarelor electrocasnice din propria locuinţa, precum si pentru realizarea de activităţi comerciale sau prestarea de servicii",
            "cumpără energie electrică pentru propriul consum casnic, excluzând consumul pentru activităţi comerciale sau profesionale "
        ],
        "answer": "Utilizează energie electrică pentru funcţionarea receptoarelor electrocasnice din propria locuinţa, precum si pentru realizarea de activităţi comerciale sau prestarea de servicii",
        "reference": "https://example.com/reference"
    },
    {
        "question": "autorităţilor locale",
        "options": [
            "autorităţilor locale",
            " ministerului de resort",
            "operatorului de distribuţie în executarea contractului de concesiune "
        ],
        "answer": " ministerului de resort",
        "reference": "https://example.com/reference"
    },
    {
        "question": "neplata abonamentului radio-tv",
        "options": [
            "neplata abonamentului radio-tv",
            "sustragerea de energie electrică constatată prin hotărâre judecătorească definitivă",
            "depășirea cu 30 de zile a termenului scadent al unei facturi"
        ],
        "answer": "sustragerea de energie electrică constatată prin hotărâre judecătorească definitivă",
        "reference": "https://example.com/reference"
    },
    {
        "question": "consum de energie mai mare decât cel aferent puterii aprobate prin avizul tehnic de racordare",
        "options": [
            "consum de energie mai mare decât cel aferent puterii aprobate prin avizul tehnic de racordare",
            "consumarea unei cantităţi de energie mai mare decât cea contractată",
            "sustragerea de energie electrică constatată prin hotărâre judecătorească definitivă, neplata facturilor sau în alte situaţii prevăzute de legislaţia în vigoare."
        ],
        "answer": "consumarea unei cantităţi de energie mai mare decât cea contractată",
        "reference": "https://example.com/reference"
    },
    {
        "question": "clientul final va fi sancţionat contravenţional",
        "options": [
            "clientul final va fi sancţionat contravenţional",
            "clientului final i se va rezilia contractul de furnizare",
            " furnizorul este îndreptăţit să solicite unui client final constituirea de garanţii financiare pentru o perioadă de consum echivalent de maximum un an "
        ],
        "answer": "clientului final i se va rezilia contractul de furnizare",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Contracte bilaterale la preţuri reglementate ",
        "options": [
            "Contracte bilaterale la preţuri reglementate ",
            "Contracte bilaterale la tarife fixe",
            "prin contracte bilaterale, la preţuri negociate sau stabilite prin oferte-tip"
        ],
        "answer": "Contracte bilaterale la tarife fixe",
        "reference": "https://example.com/reference"
    },
    {
        "question": "stabilite de operatorii de reţea",
        "options": [
            "stabilite de operatorii de reţea",
            "negociate cu solicitantul",
            "reglementate de ANRE"
        ],
        "answer": "negociate cu solicitantul",
        "reference": "https://example.com/reference"
    },
    {
        "question": "deține adeverință de electrician autorizat și comite o faptă prevăzută în Regulamentul de autorizare ca fiind permisă",
        "options": [
            "deține adeverință de electrician autorizat și comite o faptă prevăzută în Regulamentul de autorizare ca fiind permisă",
            "autorizat graduk 1, execută în calitate de persoană fizică autorizată o instalație electrică de joasă tensiune având o putere totală instalată de 9 kW.",
            "deține adeverință de electrician autorizat și desfăşoară activităţi de realizare de instalații electrice într-o formă care nu este prevăzută în regulamentul de autorizare"
        ],
        "answer": "autorizat graduk 1, execută în calitate de persoană fizică autorizată o instalație electrică de joasă tensiune având o putere totală instalată de 9 kW.",
        "reference": "https://example.com/reference"
    },
    {
        "question": "deține adeverință de electrician autorizat și comite o faptă prevăzută în Regulamentul de autorizare ca fiind permisă",
        "options": [
            "deține adeverință de electrician autorizat și comite o faptă prevăzută în Regulamentul de autorizare ca fiind permisă",
            "desfăşoară activităţi de realizare de instalații electrice, pe cont propriu, fără a deține adeverință de electrician autorizat",
            "autorizat gradul 1, execută în calitate de persoană fizică autorizată o instalație electrică de joasă tensiune având o putere totală instalată de 9 kW."
        ],
        "answer": "desfăşoară activităţi de realizare de instalații electrice, pe cont propriu, fără a deține adeverință de electrician autorizat",
        "reference": "https://example.com/reference"
    },
    {
        "question": "de către Ministerul învăţământului",
        "options": [
            "de către Ministerul învăţământului",
            "de către operatorul de distribuţie",
            "numai conform reglementărilor emise de ANRE"
        ],
        "answer": "de către operatorul de distribuţie",
        "reference": "https://example.com/reference"
    },
    {
        "question": "nerespectarea normelor tehnice emise de către ANRE;",
        "options": [
            "nerespectarea normelor tehnice emise de către ANRE;",
            "sistarea justificată a alimentării cu energie electrică a clienţilor;",
            "încălcarea prevederilor legislaţiei muncii"
        ],
        "answer": "sistarea justificată a alimentării cu energie electrică a clienţilor;",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Să transmită la ANRE o cerere şi documentaţie anexată, din care să reiasă doar calificarea profesională",
        "options": [
            "Să transmită la ANRE o cerere şi documentaţie anexată, din care să reiasă doar calificarea profesională",
            "Să transmită la ANRE o cerere şi documentaţie anexată, din care să reiasă doar experienţa practică în domeniul instalaţiilor electrice",
            "Să transmită la ANRE o cerere şi documentaţie anexată, din care să reiasă atât calificarea cât si experienţa profesională în domeniul instalaţiilor electrice"
        ],
        "answer": "Să transmită la ANRE o cerere şi documentaţie anexată, din care să reiasă doar experienţa practică în domeniul instalaţiilor electrice",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Legitimaţia/Adeverinţa de electrician autorizat este declarată nulă, într-un ziar local şi titularul achită tariful de autorizare aprobat",
        "options": [
            "Legitimaţia/Adeverinţa de electrician autorizat este declarată nulă, într-un ziar local şi titularul achită tariful de autorizare aprobat",
            "Legitimaţia/Adeverinţa de electrician autorizat este declarată nulă, într-un ziar local şi titularul achită o penalitate în cuantum de 200 RON indiferent de gradul şi tipul de autorizare",
            "Legitimaţia/Adeverinţa de electrician autorizat este declarată nulă, într-un ziar local şi titularul achită un tarif de emitere a duplicatului, conform prevederilor din regulamentul de autorizare"
        ],
        "answer": "Legitimaţia/Adeverinţa de electrician autorizat este declarată nulă, într-un ziar local şi titularul achită o penalitate în cuantum de 200 RON indiferent de gradul şi tipul de autorizare",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Opţional (solicitantul decide dacă îl transmite sau nu)",
        "options": [
            "Opţional (solicitantul decide dacă îl transmite sau nu)",
            "Nerelevant",
            "Un document obligatoriu, care trebuie întocmit corelat cu documenteie ,,Experienţă profesională\" și ,,Pagina de informaţii anexate cererii de autorizare\""
        ],
        "answer": "Nerelevant",
        "reference": "https://example.com/reference"
    },
    {
        "question": "va fi prezentață ANRE pentru a fi vizată, la termenul prevăzut, după achitarea în prealabil a tariful de vizare, egal cu tariful de acordare a respectivului tip şi grad de autorizare  ",
        "options": [
            "va fi prezentață ANRE pentru a fi vizată, la termenul prevăzut, după achitarea în prealabil a tariful de vizare, egal cu tariful de acordare a respectivului tip şi grad de autorizare  ",
            "va fi prezentață ANRE pentru a fi vizată, la termenul prevăzut, după susținerea în prealabil a unui nou examen ",
            "va fi prezentață ANRE pentru a fi vizată, la termenul prevăzut, după achitarea în prealabil a tariful de vizare, diferit de tariful de acordare a respectivului tip şi grad de autorizare  "
        ],
        "answer": "va fi prezentață ANRE pentru a fi vizată, la termenul prevăzut, după susținerea în prealabil a unui nou examen ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "3 ani",
        "options": [
            "3 ani",
            "4 ani",
            "5 ani"
        ],
        "answer": "4 ani",
        "reference": "https://example.com/reference"
    },
    {
        "question": "după 5 ani de experienţă în baza gradului de autorizare deţinut",
        "options": [
            "după 5 ani de experienţă în baza gradului de autorizare deţinut",
            "prin vizarea la termen de către ANRE a adeverinței de electrician autorizat ",
            "pe bază de examen "
        ],
        "answer": "prin vizarea la termen de către ANRE a adeverinței de electrician autorizat ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "bunurile proprietate publică sau privată a statului",
        "options": [
            "bunurile proprietate publică sau privată a statului",
            "bunurile aflate în proprietatea oricărui operator econimic",
            "bunurile utilizate în activitatea de furnizare a energiei electrice"
        ],
        "answer": "bunurile aflate în proprietatea oricărui operator econimic",
        "reference": "https://example.com/reference"
    },
    {
        "question": "refuzul clienţilor finali de a permite accesul la grupurile de măsurare",
        "options": [
            "refuzul clienţilor finali de a permite accesul la grupurile de măsurare",
            "modificarea fără drept a componentelor instalaţiilor energetice ",
            "sustragerea de energie electrica"
        ],
        "answer": "modificarea fără drept a componentelor instalaţiilor energetice ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Executarea de săpături sau lucrări de orice fel in zonele de protecţie a instalaţiilor, fara consimţământul prealabil al proprietarului acestora",
        "options": [
            "Executarea de săpături sau lucrări de orice fel in zonele de protecţie a instalaţiilor, fara consimţământul prealabil al proprietarului acestora",
            "modificarea fără drept a componentelor instalaţiilor energetice",
            "Nerespectarea reglementărilor emise de ANRE"
        ],
        "answer": "modificarea fără drept a componentelor instalaţiilor energetice",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Promovarea utilizării eficiente a combustibililor",
        "options": [
            "Promovarea utilizării eficiente a combustibililor",
            "realizarea unui randament global anual de minimum 50% în cazul unităţilor de cogenerare cu puteri electrice instalate de peste 25 MW\n \n",
            "Promovarea utilizării surselor regenerabile"
        ],
        "answer": "realizarea unui randament global anual de minimum 50% în cazul unităţilor de cogenerare cu puteri electrice instalate de peste 25 MW\n \n",
        "reference": "https://example.com/reference"
    },
    {
        "question": "la care acţionar principal este statul român",
        "options": [
            "la care acţionar principal este statul român",
            "la care acţionar majoritar nu este statul român",
            "tuturor operatorilor de distribuţie, indiferent de acţionarul majoritar"
        ],
        "answer": "la care acţionar majoritar nu este statul român",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Evenimentele accidentale produse de terţi asupra reţelelor electrice din patrimoniul public",
        "options": [
            "Evenimentele accidentale produse de terţi asupra reţelelor electrice din patrimoniul public",
            "Debranşarea consumatorilor rău-platnici de la relele electrice de distribuţie",
            "Întreruperile programate, pentru executarea lucrărilor de dezvoltare, retehnologizare şi mentenanţă "
        ],
        "answer": "Debranşarea consumatorilor rău-platnici de la relele electrice de distribuţie",
        "reference": "https://example.com/reference"
    },
    {
        "question": "refuz al clientului final de a constitui garanţia solicitată de furnizor atunci când acesta constată acţiuni menite să denatureze în orice fel indicaţiile echipamentelor de măsurare ",
        "options": [
            "refuz al clientului final de a constitui garanţia solicitată de furnizor atunci când acesta constată acţiuni menite să denatureze în orice fel indicaţiile echipamentelor de măsurare ",
            "racordare ilegală la reţeaua de distribuţie ",
            "neplata facturilor "
        ],
        "answer": "racordare ilegală la reţeaua de distribuţie ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "sustragerea de energie electrică constatată prin hotărâre judecătorească definitivă",
        "options": [
            "sustragerea de energie electrică constatată prin hotărâre judecătorească definitivă",
            "racordare ilegală la reţeaua de distribuţie ",
            "refuz al clientului final de a constitui garanţia solicitată de furnizor atunci când acesta constată acţiuni menite să denatureze în orice fel indicaţiile echipamentelor de măsurare "
        ],
        "answer": "racordare ilegală la reţeaua de distribuţie ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Energia electrică obţinută prin arderea gazelor naturale",
        "options": [
            "Energia electrică obţinută prin arderea gazelor naturale",
            " energia eoliană",
            "Energia electrică obţinută prin arderea combustibililor fosili"
        ],
        "answer": " energia eoliană",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Infracţiune",
        "options": [
            "Infracţiune",
            "Contravenţie",
            "Abatere"
        ],
        "answer": "Contravenţie",
        "reference": "https://example.com/reference"
    },
    {
        "question": "numai dacă factura a fost achitată",
        "options": [
            "numai dacă factura a fost achitată",
            " numai dacă factura nu a fost achitată ",
            " indiferent dacă factura a fost sau nu achitată, "
        ],
        "answer": " numai dacă factura nu a fost achitată ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "este obligatorie numai dacă se modifică puterea aprobată anterior prin avizul tehnic de racordare;",
        "options": [
            "este obligatorie numai dacă se modifică puterea aprobată anterior prin avizul tehnic de racordare;",
            "nu este obligatorie",
            "este obligatorie "
        ],
        "answer": "nu este obligatorie",
        "reference": "https://example.com/reference"
    },
    {
        "question": " Ministerul de resort",
        "options": [
            " Ministerul de resort",
            "ANRE - Autoritatea Naţională de Reglementare în domeniul Energiei",
            "ANRSC - Autoritatea Naţională de Reglementare in domeniul Serviciilor Comunale"
        ],
        "answer": "ANRE - Autoritatea Naţională de Reglementare în domeniul Energiei",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Exploatează, retehnologizează, reabilitează si dezvolta reţelele electrice de distribuţie, cu respectarea reglementarilor tehnice in vigoare  ",
        "options": [
            "Exploatează, retehnologizează, reabilitează si dezvolta reţelele electrice de distribuţie, cu respectarea reglementarilor tehnice in vigoare  ",
            "Exploatează, retehnologizează, reabilitează si dezvolta reţelele electrice de iluminat public ",
            "Încasează contravaloarea energiei electrice furnizate"
        ],
        "answer": "Exploatează, retehnologizează, reabilitează si dezvolta reţelele electrice de iluminat public ",
        "reference": "https://example.com/reference"
    },
    {
        "question": " organele ierarhice ale emitentului",
        "options": [
            " organele ierarhice ale emitentului",
            " operatorul de distribuţie care a emis avizul",
            "ANRE"
        ],
        "answer": " operatorul de distribuţie care a emis avizul",
        "reference": "https://example.com/reference"
    },
    {
        "question": "instalaţiile din aval aferente fiecărui punct de delimitare sunt legate electric între ele prin reţele ale operatorului de distribuţie;",
        "options": [
            "instalaţiile din aval aferente fiecărui punct de delimitare sunt legate electric între ele prin reţele ale operatorului de distribuţie;",
            "dacă există un singur proprietar  ",
            "instalaţiile din aval aferente fiecărui punct de delimitare sunt legate electric între ele prin reţele ale utilizatorului."
        ],
        "answer": "dacă există un singur proprietar  ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "li se interzice să consume energie electrica prin instalaţii racordate direct la cele ale reţelei electrice de distribuţie",
        "options": [
            "li se interzice să consume energie electrica prin instalaţii racordate direct la cele ale reţelei electrice de distribuţie",
            "li se interzice să limiteze sau să îngrădească, prin execuţia de împrejmuire, prin construcţii ori prin orice alt mod, accesul la instalaţii al operatorului de distribuţie",
            "li se permite depozitarea de materiale pe culoarul de trecere si in zonele de protecţie si de siguranţa ale instalaţiilor, fara acordul operatorului de reţea, cu condiţia să fie proprietar al terenului"
        ],
        "answer": "li se interzice să limiteze sau să îngrădească, prin execuţia de împrejmuire, prin construcţii ori prin orice alt mod, accesul la instalaţii al operatorului de distribuţie",
        "reference": "https://example.com/reference"
    },
    {
        "question": "li se interzice să efectueze construcţii de orice fel în zona de siguranţă a reţelelor electrice de distribuţie, fără avizul de amplasament al operatorului de distribuţie",
        "options": [
            "li se interzice să efectueze construcţii de orice fel în zona de siguranţă a reţelelor electrice de distribuţie, fără avizul de amplasament al operatorului de distribuţie",
            "li se interzice să consume energie electrica prin instalaţii racordate direct la cele ale reţelei electrice de distribuţie",
            "li se permite depozitarea de materiale pe culoarul de trecere si in zonele de protecţie si de siguranţa ale instalaţiilor, fara acordul operatorului de reţea, cu condiţia să fie proprietar al terenului"
        ],
        "answer": "li se interzice să consume energie electrica prin instalaţii racordate direct la cele ale reţelei electrice de distribuţie",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Promovarea utilizării gazelor naturale pentru producerea energiei electrice",
        "options": [
            "Promovarea utilizării gazelor naturale pentru producerea energiei electrice",
            "promovarea utilizării surselor noi şi regenerabile de energie",
            "Determinarea soluţiilor de racordare a utilizatorilor la reţelele electrice de interes public"
        ],
        "answer": "promovarea utilizării surselor noi şi regenerabile de energie",
        "reference": "https://example.com/reference"
    },
    {
        "question": "  3 utilizatori",
        "options": [
            "  3 utilizatori",
            "  2 utilizatori",
            " un utilizator"
        ],
        "answer": "  2 utilizatori",
        "reference": "https://example.com/reference"
    },
    {
        "question": " nu este obligatorie pentru o durata mai mică de 6 luni",
        "options": [
            " nu este obligatorie pentru o durata mai mică de 6 luni",
            " nu este obligatorie pentru o putere ceruta sub 100 kW",
            "este obligatorie pentru orice loc de consum/producere nou "
        ],
        "answer": " nu este obligatorie pentru o putere ceruta sub 100 kW",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Da",
        "options": [
            "Da",
            "Nu",
            "Da, doar sub aspectul stabilirii preţului de vânzare e energiei electrice produse"
        ],
        "answer": "Nu",
        "reference": "https://example.com/reference"
    },
    {
        "question": "contravenţie",
        "options": [
            "contravenţie",
            "infracţiune",
            "contravenţie sau infracţiune, după caz"
        ],
        "answer": "infracţiune",
        "reference": "https://example.com/reference"
    },
    {
        "question": "la încheierea contractului de racordare",
        "options": [
            "la încheierea contractului de racordare",
            "în termen de 6 luni de la emitere, dacă nu a fost încheiat contractul de racordare;",
            " în termen de 12 luni de la emitere, dacă nu a fost încheiat contractul de racordare;"
        ],
        "answer": "în termen de 6 luni de la emitere, dacă nu a fost încheiat contractul de racordare;",
        "reference": "https://example.com/reference"
    },
    {
        "question": "pe tablourile din apartamente",
        "options": [
            "pe tablourile din apartamente",
            "centralizat, la limita zonei de proprietate asupra terenului, in exteriorul construcţiei",
            "centralizat, la parter sau pe palier"
        ],
        "answer": "centralizat, la limita zonei de proprietate asupra terenului, in exteriorul construcţiei",
        "reference": "https://example.com/reference"
    },
    {
        "question": "utilizatorii perturbatori",
        "options": [
            "utilizatorii perturbatori",
            " utilizatorii de tip distribuitori, indiferent de tensiunea reţelei la care se racordează",
            "locurile de consum care se racordează la reţele electrice de medie sau joasă tensiune, indiferent de puterea solicitată, dacă soluţia de racordare este unică şi/sau evidentă"
        ],
        "answer": " utilizatorii de tip distribuitori, indiferent de tensiunea reţelei la care se racordează",
        "reference": "https://example.com/reference"
    },
    {
        "question": "avizele tehnice de racordare ",
        "options": [
            "avizele tehnice de racordare ",
            "calitatea execuţiei instalaţiilor de racordare",
            "calitatea execuţiei instalaţiilor interioare ale clădirilor civile"
        ],
        "answer": "calitatea execuţiei instalaţiilor de racordare",
        "reference": "https://example.com/reference"
    },
    {
        "question": "întotdeauna pe cale amiabilă",
        "options": [
            "întotdeauna pe cale amiabilă",
            "de autoritatea competentă conform reglementărilor în vigoare",
            "întotdeauna în justiţie"
        ],
        "answer": "de autoritatea competentă conform reglementărilor în vigoare",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Desfăşurarea de activităţi fără contracte legale, în vigoare (contract de muncă individual  semnat cu un angajator sau contract de prestări servicii, în cazul în care este persoană fizică autorizată în condițiile legii)",
        "options": [
            "Desfăşurarea de activităţi fără contracte legale, în vigoare (contract de muncă individual  semnat cu un angajator sau contract de prestări servicii, în cazul în care este persoană fizică autorizată în condițiile legii)",
            "Desfăşurarea activităţii în baza unei adeverințe (legitimații) de electrician autorizat emisă în urmă cu 4 ani",
            "Proiectarea instalaţiei electrice a unei locuinţe în baza unei autorizaţii de tip II A"
        ],
        "answer": "Desfăşurarea activităţii în baza unei adeverințe (legitimații) de electrician autorizat emisă în urmă cu 4 ani",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Comiterea unei fapte prevăzute în Regulamentul de autorizare ca fiind interzisă",
        "options": [
            "Comiterea unei fapte prevăzute în Regulamentul de autorizare ca fiind interzisă",
            "Desfăşurarea activităţii în baza unei adeverințe (legitimații) de electrician autorizat emisă în urmă cu 4 ani",
            "Proiectarea instalaţiei electrice a unei locuinţe în baza unei autorizaţii de tip II A"
        ],
        "answer": "Desfăşurarea activităţii în baza unei adeverințe (legitimații) de electrician autorizat emisă în urmă cu 4 ani",
        "reference": "https://example.com/reference"
    },
    {
        "question": "promovării unui examen de autorizare",
        "options": [
            "promovării unui examen de autorizare",
            "promovării unui concurs de autorizare, cu număr limitat de locuri",
            "unui interviu în faţa unei comisii ANRE"
        ],
        "answer": "promovării unui concurs de autorizare, cu număr limitat de locuri",
        "reference": "https://example.com/reference"
    },
    {
        "question": "De a proiecta şi executa instalaţii electrice cu putere instalată de cel mult 10 kW şi la o tensiune nominală mai mică de 1 kV",
        "options": [
            "De a proiecta şi executa instalaţii electrice cu putere instalată de cel mult 10 kW şi la o tensiune nominală mai mică de 1 kV",
            "De a proiecta şi executa instalaţii electrice cu orice putere instalată tehnic realizabilă şi la o tensiune nominală mai mică de 1 kV",
            "De a proiecta şi executa instalaţii electrice cu orice putere instalată tehnic realizabilă şi la o tensiune nominală maximă de 20 kV"
        ],
        "answer": "De a proiecta şi executa instalaţii electrice cu orice putere instalată tehnic realizabilă şi la o tensiune nominală mai mică de 1 kV",
        "reference": "https://example.com/reference"
    },
    {
        "question": "A",
        "options": [
            "A",
            "B",
            "C"
        ],
        "answer": "B",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Să proiecteze instalaţii electrice în cazul în care deţine doar autorizaţie de tip A",
        "options": [
            "Să proiecteze instalaţii electrice în cazul în care deţine doar autorizaţie de tip A",
            "Să proiecteze instalaţii electrice în cazul în care nu deţine o autorizaţie de tip A",
            "Să realizeze lucrări de instalaţii electrice în baza unor documentaţii de proiectare realizate de alţi electricieni autorizaţi"
        ],
        "answer": "Să proiecteze instalaţii electrice în cazul în care nu deţine o autorizaţie de tip A",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Să proiecteze instalaţii electrice în cazul în care deţine doar autorizaţie de tip A",
        "options": [
            "Să proiecteze instalaţii electrice în cazul în care deţine doar autorizaţie de tip A",
            "să execute lucrări, manevre sau intervenţii sub orice formă în instalaţiile operatorilor de reţea  ",
            "Să realizeze lucrări de instalaţii electrice în baza unor documentaţii de proiectare realizate de alţi electricieni autorizaţi"
        ],
        "answer": "să execute lucrări, manevre sau intervenţii sub orice formă în instalaţiile operatorilor de reţea  ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Să semneze documentaţii de orice fel pentru proiecte sau lucrări pe care nu le-a realizat sau supravegheat",
        "options": [
            "Să semneze documentaţii de orice fel pentru proiecte sau lucrări pe care nu le-a realizat sau supravegheat",
            "Să proiecteze instalaţii electrice în cazul în care deţine doar autorizaţie de tip A",
            "Să realizeze lucrări de instalaţii electrice în baza unor documentaţii de proiectare realizate de alţi electricieni autorizaţi"
        ],
        "answer": "Să proiecteze instalaţii electrice în cazul în care deţine doar autorizaţie de tip A",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Trebuie să îndeplinească condiţiile de calificare şi experienţă profesionale, cumulate, pentru fiecare tip de autorizare şi susţin examene separate pentru fiecare dintre aceste tipuri",
        "options": [
            "Trebuie să îndeplinească condiţiile de calificare şi experienţă profesionale, cumulate, pentru fiecare tip de autorizare şi susţin examene separate pentru fiecare dintre aceste tipuri",
            "Trebuie să îndeplinească condiţiile de calificare si experienţă profesionale, cumulate, pentru fiecare tip şi susţin un singur examen",
            "Trebuie sa fi fost autorizaţi în prealabil în baza Ordinului MIC nr34 din 1999"
        ],
        "answer": "Trebuie să îndeplinească condiţiile de calificare si experienţă profesionale, cumulate, pentru fiecare tip şi susţin un singur examen",
        "reference": "https://example.com/reference"
    },
    {
        "question": "De tip E  pentru execuţie",
        "options": [
            "De tip E  pentru execuţie",
            "De tip A sau B  pentru proiectare şi respectiv executare",
            "Nu sunt definite tipuri de autorizare, ci doar grade de autorizare"
        ],
        "answer": "De tip A sau B  pentru proiectare şi respectiv executare",
        "reference": "https://example.com/reference"
    },
    {
        "question": "retragerea autorizării acordate ",
        "options": [
            "retragerea autorizării acordate ",
            "Retragerea autorizării acordate pe o perioadă de până la doi ani ",
            "Avertizarea în scris cu retragerea autorizării acordate la prima abatere constatată "
        ],
        "answer": "Retragerea autorizării acordate pe o perioadă de până la doi ani ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Are obligaţia de a respecta proiectul în baza căruia execută instalaţia electrică",
        "options": [
            "Are obligaţia de a respecta proiectul în baza căruia execută instalaţia electrică",
            "Are obligaţia de a participa la recepţia şi la punerea în funcţiune a instalaţiei electrice de utilizare proiectată/ executată, chiar dacă nu i se solicită acest lucru de către beneficiarul sau operatorul de reţea la care urmează a se racorda instalaţia electrică de utilizare;",
            "Are dreptul de a racorda la SEN noi puncte de consum, urmând a solicita acordul operatorului de reţea după recepţia la terminarea lucrărilor"
        ],
        "answer": "Are obligaţia de a participa la recepţia şi la punerea în funcţiune a instalaţiei electrice de utilizare proiectată/ executată, chiar dacă nu i se solicită acest lucru de către beneficiarul sau operatorul de reţea la care urmează a se racorda instalaţia electrică de utilizare;",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Să respecte proiectele de execuţie a lucrărilor de instalaţii electrice doar dacă sunt întocmite de el",
        "options": [
            "Să respecte proiectele de execuţie a lucrărilor de instalaţii electrice doar dacă sunt întocmite de el",
            "De a participa la recepţia şi la punerea în funcţiune a instalaţiei electrice de utilizare proiectată/ executată, în cazul în care i se solicită acest lucru de către beneficiarul sau operatorul de reţea la care urmează a se racorda instalaţia electrică de utilizare",
            "De a racorda la SEN noi puncte de consum, urmând a solicita acordul operatorului de reţea după recepţia la terminarea lucrărilor"
        ],
        "answer": "De a participa la recepţia şi la punerea în funcţiune a instalaţiei electrice de utilizare proiectată/ executată, în cazul în care i se solicită acest lucru de către beneficiarul sau operatorul de reţea la care urmează a se racorda instalaţia electrică de utilizare",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Să proiecteze instalaţii electrice doar conform gradului si tipului de autorizare şi să respecte normele tehnice corespunzătoare tipurilor de instalaţii electrice proiectate",
        "options": [
            "Să proiecteze instalaţii electrice doar conform gradului si tipului de autorizare şi să respecte normele tehnice corespunzătoare tipurilor de instalaţii electrice proiectate",
            "Să semneze documentaţii de proiectare chiar dacă nu sunt realizate de el, astfel încât proprietarul să poată demara cât mai repede execuţia instalaţiilor",
            "Să execute sau să coordoneze execuţia instalaţiilor electrice de orice putere sau tensiune tehnic realizabilă"
        ],
        "answer": "Să semneze documentaţii de proiectare chiar dacă nu sunt realizate de el, astfel încât proprietarul să poată demara cât mai repede execuţia instalaţiilor",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Să notifice ANRE data începerii execuţiei unei instalaţii electrice conform gradului si tipului de autorizare ",
        "options": [
            "Să notifice ANRE data începerii execuţiei unei instalaţii electrice conform gradului si tipului de autorizare ",
            "Să execute  instalaţii electrice doar conform gradului si tipului de autorizare şi să respecte prevederile din proiect",
            "Să proiecteze instalaţii electrice doar conform gradului si tipului de autorizare, având în vedere că experienţa practică îi permite acest lucru"
        ],
        "answer": "Să execute  instalaţii electrice doar conform gradului si tipului de autorizare şi să respecte prevederile din proiect",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Să execute  instalaţii electrice numai în una dintre calităţile prevăzute în regulament pentru exercitarea activităţii",
        "options": [
            "Să execute  instalaţii electrice numai în una dintre calităţile prevăzute în regulament pentru exercitarea activităţii",
            "Să notifice ANRE data începerii execuţiei unei instalaţii electrice conform gradului si tipului de autorizare ",
            "Să proiecteze instalaţii electrice doar conform gradului si tipului de autorizare, având în vedere că experienţa practică îi permite acest lucru"
        ],
        "answer": "Să notifice ANRE data începerii execuţiei unei instalaţii electrice conform gradului si tipului de autorizare ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "orice client ce cumpără energie electrică de la un producător",
        "options": [
            "orice client ce cumpără energie electrică de la un producător",
            "orice client ce cumpără energie electrică de la un trader de energie electrică ",
            "orice persoană fizică sau juridică ce cumpără energie electrică pentru consum propriu"
        ],
        "answer": "orice client ce cumpără energie electrică de la un trader de energie electrică ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "diferite",
        "options": [
            "diferite",
            " echivalente;",
            " echivalente numai în cazul consumatorilor casnici"
        ],
        "answer": " echivalente;",
        "reference": "https://example.com/reference"
    },
    {
        "question": "SC ELECTRICA SA, în calitate de elaborator",
        "options": [
            "SC ELECTRICA SA, în calitate de elaborator",
            "ANRE - Autoritatea Naţională de Reglementare în domeniul Energiei",
            "CN TRANSELECTRICA SA"
        ],
        "answer": "ANRE - Autoritatea Naţională de Reglementare în domeniul Energiei",
        "reference": "https://example.com/reference"
    },
    {
        "question": "0.05",
        "options": [
            "0.05",
            "+5% / -10%",
            "0.12"
        ],
        "answer": "+5% / -10%",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Stabilirea unui set de reguli şi norme în vederea asigurării iluminatului public",
        "options": [
            "Stabilirea unui set de reguli şi norme în vederea asigurării iluminatului public",
            "Stabilirea responsabilităţilor şi obligaţiilor operatorilor de distribuţie şi ale tuturor utilizatorilor reţelelor electrice de distribuţie ",
            "Stabilirea unui set de reguli şi norme în vederea asigurării accesului utilizatorilor la reţelele electrice de transport"
        ],
        "answer": "Stabilirea responsabilităţilor şi obligaţiilor operatorilor de distribuţie şi ale tuturor utilizatorilor reţelelor electrice de distribuţie ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Întrerupere accidentală a energiei electrice",
        "options": [
            "Întrerupere accidentală a energiei electrice",
            "Forţă majoră",
            "Evenimente accidentale determinate de angajaţii operatorului de distribuţie"
        ],
        "answer": "Forţă majoră",
        "reference": "https://example.com/reference"
    },
    {
        "question": "să contracteze serviciul de distribuţie direct cu operatorul de distribuţie",
        "options": [
            "să contracteze serviciul de distribuţie direct cu operatorul de distribuţie",
            "prin regimul lor de funcţionare să nu introducă perturbaţii inacceptabile, conform normativelor în vigoare, care să afecteze  funcţionarea RED sau alimentarea  altor utilizatori  RED din zonă",
            "să aibă contracte de furnizarea a energiei electrice încheiate cu operatorul de distribuţie"
        ],
        "answer": "prin regimul lor de funcţionare să nu introducă perturbaţii inacceptabile, conform normativelor în vigoare, care să afecteze  funcţionarea RED sau alimentarea  altor utilizatori  RED din zonă",
        "reference": "https://example.com/reference"
    },
    {
        "question": "să respecte condiţiile prevăzute în contractul de distribuţie/furnizare",
        "options": [
            "să respecte condiţiile prevăzute în contractul de distribuţie/furnizare",
            "să aibă contracte de furnizare a energiei electrice încheiate cu operatorul de distribuţie",
            "să aibă instalaţii electrice care funcţionează la tensiunea nominală alternativă în gama 20 kV - 400 kV şi la frecvenţa de 50 Hz "
        ],
        "answer": "să aibă contracte de furnizare a energiei electrice încheiate cu operatorul de distribuţie",
        "reference": "https://example.com/reference"
    },
    {
        "question": "continuitatea alimentării cu energie electrică a utilizatorilor",
        "options": [
            "continuitatea alimentării cu energie electrică a utilizatorilor",
            "Debranşarea consumatorilor rău-platnici de la relele electrice de distribuţie",
            "Evenimentele accidentale produse de terţi asupra reţelelor electrice din patrimoniul public"
        ],
        "answer": "Debranşarea consumatorilor rău-platnici de la relele electrice de distribuţie",
        "reference": "https://example.com/reference"
    },
    {
        "question": "20 zile calendaristice în cazul racordării la joasă tensiune",
        "options": [
            "20 zile calendaristice în cazul racordării la joasă tensiune",
            "30 zile calendaristice în cazul racordării la medie tensiune",
            "10 zile calendaristice în cazul racordării la joasă tensiune"
        ],
        "answer": "30 zile calendaristice în cazul racordării la medie tensiune",
        "reference": "https://example.com/reference"
    },
    {
        "question": " 30 zile calendaristice în cazul racordării la joasă tensiune ",
        "options": [
            " 30 zile calendaristice în cazul racordării la joasă tensiune ",
            "20 zile calendaristice în cazul racordării la joasă tensiune",
            "10 zile calendaristice în cazul racordării la joasă tensiune"
        ],
        "answer": "20 zile calendaristice în cazul racordării la joasă tensiune",
        "reference": "https://example.com/reference"
    },
    {
        "question": "obligatoriu operatorului de distribuţie concesionar din zona respectivă ",
        "options": [
            "obligatoriu operatorului de distribuţie concesionar din zona respectivă ",
            "operatorului de transport şi de sistem",
            "unui operator de distribuţie care deţine în apropierea locului de producere sau de consum o reţea electrică de distribuţie"
        ],
        "answer": "operatorului de transport şi de sistem",
        "reference": "https://example.com/reference"
    },
    {
        "question": "operatorul de reţea la care a fost depusă cererea de racordare, chiar dacă opţiunea scrisă a utilizatorului este pentru o variantă de soluţie de racordare la reţeaua electrică deţinută de un alt operator de reţea ",
        "options": [
            "operatorul de reţea la care a fost depusă cererea de racordare, chiar dacă opţiunea scrisă a utilizatorului este pentru o variantă de soluţie de racordare la reţeaua electrică deţinută de un alt operator de reţea ",
            "operatorul de reţea la reţeaua căruia se racordează instalaţiile utilizatorului, conform soluţiei de racordare stabilite prin fişa sau studiul de solutie",
            "operatorul de reţea care a elaborat fişa sau studiul de solutie, chiar dacă opţiunea scrisă a utilizatorului este pentru o variantă de soluţie de racordare la reţeaua electrică deţinută de un alt operator de reţea"
        ],
        "answer": "operatorul de reţea la reţeaua căruia se racordează instalaţiile utilizatorului, conform soluţiei de racordare stabilite prin fişa sau studiul de solutie",
        "reference": "https://example.com/reference"
    },
    {
        "question": "având o putere electrică instalată de maximum 10 kW şi la o tensiune nominală mai mică de 1 kV, numai dacă deţine un atestat emis de ANRE",
        "options": [
            "având o putere electrică instalată de maximum 10 kW şi la o tensiune nominală mai mică de 1 kV, numai dacă deţine un atestat emis de ANRE",
            "având o putere electrică instalată de maximum 20 kW şi la o tensiune nominală mai mică de 1 kV, numai dacîă deţine un atestat emis de ANRE",
            "având o putere electrică instalată de maximum 10 kW şi la o tensiune nominală mai mică de 1 kV, fără a deţine un atestat emis de ANRE"
        ],
        "answer": "având o putere electrică instalată de maximum 20 kW şi la o tensiune nominală mai mică de 1 kV, numai dacîă deţine un atestat emis de ANRE",
        "reference": "https://example.com/reference"
    },
    {
        "question": "În termen de maximum 42 de zile de la încetarea contractului de furnizare a energiei electrice ",
        "options": [
            "În termen de maximum 42 de zile de la încetarea contractului de furnizare a energiei electrice ",
            "la  încetarea contractului de furnizare a energiei electrice ",
            "În termen de maximum 10 de zile de la încetarea contractului de furnizare a energiei electrice "
        ],
        "answer": "la  încetarea contractului de furnizare a energiei electrice ",
        "reference": "https://example.com/reference"
    },
    {
        "question": " numai în baza unei licenţe pentru activitatea de furnizare a energiei electrice",
        "options": [
            " numai în baza unei licenţe pentru activitatea de furnizare a energiei electrice",
            "fără licență, de către operatori de distribuție neconcesionari către clienţii alimentaţi direct din reţelele electrice pe care aceştia le exploatează ",
            "fără licență, de către producători, oricărui client final"
        ],
        "answer": "fără licență, de către operatori de distribuție neconcesionari către clienţii alimentaţi direct din reţelele electrice pe care aceştia le exploatează ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "cu un preaviz de cel puţin 5 zile lucrătoare  ",
        "options": [
            "cu un preaviz de cel puţin 5 zile lucrătoare  ",
            "cu un preaviz de cel puţin10 zile",
            "fără preaviz"
        ],
        "answer": "cu un preaviz de cel puţin10 zile",
        "reference": "https://example.com/reference"
    },
    {
        "question": "fără încheierea contractului de furnizare, pe bază de negocieri",
        "options": [
            "fără încheierea contractului de furnizare, pe bază de negocieri",
            "fără încheierea contractului de furnizare, pentru clienții casnici ",
            "fără încheierea contractului de furnizare în situaţiile reglementate în mod distinct de către autoritatea competentă."
        ],
        "answer": "fără încheierea contractului de furnizare, pentru clienții casnici ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "clienţilor noncasnici",
        "options": [
            "clienţilor noncasnici",
            "clienţilor casnici",
            "clienţilor casnici, dar numai dacă au o putere aprobată sub 50 kW"
        ],
        "answer": "clienţilor casnici",
        "reference": "https://example.com/reference"
    },
    {
        "question": "clienţilor noncasnici ",
        "options": [
            "clienţilor noncasnici ",
            "clienților casnici ",
            "clienţilor noncasnici, dar numai dacă au o putere aprobată mai mare de 20 kW"
        ],
        "answer": "clienților casnici ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "întreruperea furnizării energiei electrice",
        "options": [
            "întreruperea furnizării energiei electrice",
            "obligaţia de a reface instalaţia de racordare",
            "sancţiune prin amendă contravenţională"
        ],
        "answer": "obligaţia de a reface instalaţia de racordare",
        "reference": "https://example.com/reference"
    },
    {
        "question": "angajamentul operatorului de reţea de a realiza instalaţia de racordare a utilizatorului;  ",
        "options": [
            "angajamentul operatorului de reţea de a realiza instalaţia de racordare a utilizatorului;  ",
            "acceptul operatorului de reţea pentru utilizarea reţelei în anumite condiţii",
            "aprobarea de către operatorul de reţea a racordării utiizatorului în anumite condiţii."
        ],
        "answer": "acceptul operatorului de reţea pentru utilizarea reţelei în anumite condiţii",
        "reference": "https://example.com/reference"
    },
    {
        "question": "angajamentul operatorului de reţea de a realiza instalaţia de racordare a utilizatorului;  ",
        "options": [
            "angajamentul operatorului de reţea de a realiza instalaţia de racordare a utilizatorului;  ",
            "oferta operatorului de reţea la cererea de racordare a solicitantului;\n",
            "acceptul operatorului de reţea pentru utilizarea reţelei în anumite condiţii"
        ],
        "answer": "oferta operatorului de reţea la cererea de racordare a solicitantului;\n",
        "reference": "https://example.com/reference"
    },
    {
        "question": "pentru orice  titular al locului de producere/consum respectiv",
        "options": [
            "pentru orice  titular al locului de producere/consum respectiv",
            "numai pentru un anumit titular al locului de producere/consum",
            "pe o perioadă de timp nelimitată"
        ],
        "answer": "numai pentru un anumit titular al locului de producere/consum",
        "reference": "https://example.com/reference"
    },
    {
        "question": "utilizator sau de împuternicitul legal al utilizatorului.\n",
        "options": [
            "utilizator sau de împuternicitul legal al utilizatorului.\n",
            "furnizor ",
            "operatorul de reţea\n"
        ],
        "answer": "furnizor ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "se pot depune direct la centrele teritoriale de relaţii cu clienţii organizate de operatorul de reţea;\n",
        "options": [
            "se pot depune direct la centrele teritoriale de relaţii cu clienţii organizate de operatorul de reţea;\n",
            "se trimit obligatoriu prin poştă\n",
            "se depun numai la registratura operatorului de reţea. "
        ],
        "answer": "se trimit obligatoriu prin poştă\n",
        "reference": "https://example.com/reference"
    },
    {
        "question": "certificatul de urbanism al obiectivului pentru care se organizează şantierul, în termen de valabilitate, in copie;",
        "options": [
            "certificatul de urbanism al obiectivului pentru care se organizează şantierul, în termen de valabilitate, in copie;",
            "autorizaţia de construire a obiectivului pentru care se organizează şantierul, în termen de valabilitate, in copie;\n",
            "contractul încheiat cu un furnizor de energie electrică\n"
        ],
        "answer": "autorizaţia de construire a obiectivului pentru care se organizează şantierul, în termen de valabilitate, in copie;\n",
        "reference": "https://example.com/reference"
    },
    {
        "question": "utilizatori",
        "options": [
            "utilizatori",
            "operatorul de reţea",
            "bunurile utilizate în activitatea de furnizare a energiei electrice"
        ],
        "answer": "operatorul de reţea",
        "reference": "https://example.com/reference"
    },
    {
        "question": "locurile de consum individuale ale utilizatorilor de tip clienţi casnici, indiferent de puterea solicitată",
        "options": [
            "locurile de consum individuale ale utilizatorilor de tip clienţi casnici, indiferent de puterea solicitată",
            "locurile de consum şi/sau de producere care se racordează la reţele electrice având tensiunea nominală de 110 kV sau mai mare;",
            " utilizatorii de tip distribuitori, indiferent de tensiunea reţelei la care se racordează"
        ],
        "answer": "locurile de consum şi/sau de producere care se racordează la reţele electrice având tensiunea nominală de 110 kV sau mai mare;",
        "reference": "https://example.com/reference"
    },
    {
        "question": "locurile de consum individuale ale utilizatorilor de tip clienţi casnici, indiferent de puterea solicitată",
        "options": [
            "locurile de consum individuale ale utilizatorilor de tip clienţi casnici, indiferent de puterea solicitată",
            " utilizatorii de tip distribuitori, indiferent de tensiunea reţelei la care se racordează",
            "utilizatorii cu o putere de peste 25 kVA"
        ],
        "answer": " utilizatorii de tip distribuitori, indiferent de tensiunea reţelei la care se racordează",
        "reference": "https://example.com/reference"
    },
    {
        "question": "se modifică de drept",
        "options": [
            "se modifică de drept",
            "rămân în vigoare până la incheierea unui act adiţional",
            "rămân în vigoare până la incheierea unui nou contract"
        ],
        "answer": "rămân în vigoare până la incheierea unui act adiţional",
        "reference": "https://example.com/reference"
    },
    {
        "question": "pot impune furnizorului orice modalitate de plată, chiar dacă nu este pusă la dispoziţie de către acesta",
        "options": [
            "pot impune furnizorului orice modalitate de plată, chiar dacă nu este pusă la dispoziţie de către acesta",
            "pot să opteze pentru orice modalitate de plată pe care furnizorul o pune la dispoziţie",
            "sunt obligaţi să achite facturile pentru energia electrică la una din casieriile furnizorului "
        ],
        "answer": "pot să opteze pentru orice modalitate de plată pe care furnizorul o pune la dispoziţie",
        "reference": "https://example.com/reference"
    },
    {
        "question": "furnizorul are dreptul să solicite operatorului de distribuţie deconectarea clientului final de la reţea",
        "options": [
            "furnizorul are dreptul să solicite operatorului de distribuţie deconectarea clientului final de la reţea",
            "clientul final poate fi deconectat numai după o decizie a ANRE pentru cazul respectiv",
            "se reziliază contractul de furnizare a energiei electrice"
        ],
        "answer": "clientul final poate fi deconectat numai după o decizie a ANRE pentru cazul respectiv",
        "reference": "https://example.com/reference"
    },
    {
        "question": " numai a neînţelegerilor precontractuale ",
        "options": [
            " numai a neînţelegerilor precontractuale ",
            " numai a neînţelegerilor  apărute pe parcursul derulării contractului;",
            "a neînţelegerilor precontractuale şi a celor apărute pe parcursul derulării contractului;"
        ],
        "answer": " numai a neînţelegerilor  apărute pe parcursul derulării contractului;",
        "reference": "https://example.com/reference"
    },
    {
        "question": "numai în cazul în care contorul a fost defect",
        "options": [
            "numai în cazul în care contorul a fost defect",
            "numai în cazul clienților noncasnici mari",
            "atunci când se constată înregistrarea eronată a consumului de energie electrică"
        ],
        "answer": "numai în cazul clienților noncasnici mari",
        "reference": "https://example.com/reference"
    },
    {
        "question": "în cazul unei facturări eronate a consumului",
        "options": [
            "în cazul unei facturări eronate a consumului",
            "numai în cazul clienților noncasnici mari",
            "numai în cazul în care contorul a fost defect"
        ],
        "answer": "numai în cazul clienților noncasnici mari",
        "reference": "https://example.com/reference"
    },
    {
        "question": "nu are dreptul să beneficieze de eşalonarea la plată a facturii ",
        "options": [
            "nu are dreptul să beneficieze de eşalonarea la plată a facturii ",
            "are dreptul să beneficieze de eşalonarea la plată a facturii, la cerere, pe o perioadă de minimum 3 luni",
            "are dreptul să beneficieze de eşalonarea la plată a facturii, la cerere, pe o perioadă de maximum 3 luni"
        ],
        "answer": "are dreptul să beneficieze de eşalonarea la plată a facturii, la cerere, pe o perioadă de minimum 3 luni",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Guvernul României",
        "options": [
            "Guvernul României",
            "Ministerul de resort",
            "ANRE "
        ],
        "answer": "Ministerul de resort",
        "reference": "https://example.com/reference"
    },
    {
        "question": "operatorul economic nu îndeplineşte criteriile de bonitate financiară corespunzătoare procedurii aplicabile",
        "options": [
            "operatorul economic nu îndeplineşte criteriile de bonitate financiară corespunzătoare procedurii aplicabile",
            "Operatorul economic a  executat lucrări fără să aibă, în proprietate sau în folosinţă, conform prevederilor Regulamentului, dotarea tehnică minimală corespunzătoare tipului de atestat  deţinut",
            "ANRE nu are competenţa de a retrage Atestatele emise"
        ],
        "answer": "Operatorul economic a  executat lucrări fără să aibă, în proprietate sau în folosinţă, conform prevederilor Regulamentului, dotarea tehnică minimală corespunzătoare tipului de atestat  deţinut",
        "reference": "https://example.com/reference"
    }
];

// Export the questions array so it can be used in other files
export { BASE_QUESTIONS };