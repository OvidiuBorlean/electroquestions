const BASE_QUESTIONS = [
    {
        "question": "ANRE este:",
        "options": [
            "Agenţie naţională de reglementare în domeniul energiei termice",
            "Autoritatea Naţionala de Reglementare pentru Serviciile Publice de Gospodărie Comunala",
            "Autoritatea Naţionala de Reglementare in domeniul Energiei"
        ],
        "answer": "Autoritatea Naţionala de Reglementare in domeniul Energiei",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Asupra terenurilor aflate in proprietatea terţilor, cuprinse in zonele de protecţie si de siguranţa ale capacităţilor energetice, se stabileşte pentru deţinătorul capacităţilor energetice:",
        "options": [
            "drept de utilizare gratuită",
            "drept de proprietate",
            "drept de servitute legală"
        ],
        "answer": "drept de servitute legală",
        "reference": "https://example.com/reference"
    },
    {
        "question": "O persoană care deţinea în proprietate sau în folosinţă o reţea electrică de distribuţie proprie la data intrării în vigoare Legii nr,123/2012: ",
        "options": [
            "nu are obligaţii privind asigurarea accesului la reţea",
            "este obligată să asigure accesul la reţea numai pentru producători de energie electrică din surse regenerabile ",
            "este obligată să asigure accesul la reţea, conform reglementărilor autorităţii competente"
        ],
        "answer": "este obligată să asigure accesul la reţea, conform reglementărilor autorităţii competente",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Clientul casnic este clientul care: ",
        "options": [
            "Utilizează energie electrică în exclusivitate pentru iluminatul artificial din propria locuinţă şi din afara acesteia, fiind racordat la o reţea electrică monofazată de joasă tensiune",
            "Utilizează energie electrică pentru funcţionarea receptoarelor electrocasnice din propria locuinţa, precum si pentru realizarea de activităţi comerciale sau prestarea de servicii",
            "cumpără energie electrică pentru propriul consum casnic, excluzând consumul pentru activităţi comerciale sau profesionale "
        ],
        "answer": "cumpără energie electrică pentru propriul consum casnic, excluzând consumul pentru activităţi comerciale sau profesionale ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Finanţarea lucrărilor de electrificare a localităţilor este obligaţia:",
        "options": [
            "autorităţilor locale",
            "ministerului de resort",
            "operatorului de distribuţie în executarea contractului de concesiune "
        ],
        "answer": "operatorului de distribuţie în executarea contractului de concesiune",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Furnizorul de energie electrică este îndreptăţit sã rezilieze contractul de furnizare a energiei electrice în caz de:",
        "options": [
            "neplata abonamentului radio-tv",
            "sustragerea de energie electrică constatată prin hotărâre judecătorească definitivă",
            "depășirea cu 30 de zile a termenului scadent al unei facturi"
        ],
        "answer": "sustragerea de energie electrică constatată prin hotărâre judecătorească definitivă",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Furnizorul de energie electrică este îndreptăţit sã rezilieze contractul de furnizare a energiei electrice numai în caz de:",
        "options": [
            "consum de energie mai mare decât cel aferent puterii aprobate prin avizul tehnic de racordare",
            "consumarea unei cantităţi de energie mai mare decât cea contractată",
            "sustragerea de energie electrică constatată prin hotărâre judecătorească definitivă, neplata facturilor sau în alte situaţii prevăzute de legislaţia în vigoare."
        ],
        "answer": "sustragerea de energie electrică constatată prin hotărâre judecătorească definitivă, neplata facturilor sau în alte situaţii prevăzute de legislaţia în vigoare.",
        "reference": "https://example.com/reference"
    },
    {
        "question": "În cazul constatării, conform prevederilor legale în vigoare, a unor acţiuni menite să sustragă energia electrică prin ocolirea echipamentelor de măsurare: ",
        "options": [
            "clientul final va fi sancţionat contravenţional",
            "clientului final i se va rezilia contractul de furnizare",
            "furnizorul este îndreptăţit să solicite unui client final constituirea de garanţii financiare pentru o perioadă de consum echivalent de maximum un an "
        ],
        "answer": "furnizorul este îndreptăţit să solicite unui client final constituirea de garanţii financiare pentru o perioadă de consum echivalent de maximum un an ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Pe piaţa  cu amănuntul, furnizorii vând energie electrică clienţilor finali prin:",
        "options": [
            "Contracte bilaterale la preţuri reglementate ",
            "Contracte bilaterale la tarife fixe",
            "prin contracte bilaterale, la preţuri negociate sau stabilite prin oferte-tip"
        ],
        "answer": "prin contracte bilaterale, la preţuri negociate sau stabilite prin oferte-tip",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Tarifele de racordare la reţea sunt:",
        "options": [
            "stabilite de operatorii de reţea",
            "negociate cu solicitantul",
            "reglementate de ANRE"
        ],
        "answer": "reglementate de ANRE",
        "reference": "https://example.com/reference"
    },
    {
        "question": "ANRE poate aplica sancţiuni contravenţionale în cazul în care un electrician :",
        "options": [
            "deține adeverință de electrician autorizat și comite o faptă prevăzută în Regulamentul de autorizare ca fiind permisă",
            "autorizat graduk 1, execută în calitate de persoană fizică autorizată o instalație electrică de joasă tensiune având o putere totală instalată de 9 kW.",
            "deține adeverință de electrician autorizat și desfăşoară activităţi de realizare de instalații electrice într-o formă care nu este prevăzută în regulamentul de autorizare"
        ],
        "answer": "deține adeverință de electrician autorizat și desfăşoară activităţi de realizare de instalații electrice într-o formă care nu este prevăzută în regulamentul de autorizare",
        "reference": "https://example.com/reference"
    },
    {
        "question": "ANRE poate aplica sancţiuni contravenţionale în cazul în care un electrician :",
        "options": [
            "deține adeverință de electrician autorizat și comite o faptă prevăzută în Regulamentul de autorizare ca fiind permisă",
            "desfăşoară activităţi de realizare de instalații electrice, pe cont propriu, fără a deține adeverință de electrician autorizat",
            "autorizat gradul 1, execută în calitate de persoană fizică autorizată o instalație electrică de joasă tensiune având o putere totală instalată de 9 kW."
        ],
        "answer": "desfăşoară activităţi de realizare de instalații electrice, pe cont propriu, fără a deține adeverință de electrician autorizat",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Autorizarea electricienilor în domeniul instalaţiilor electrice, respectiv a verificatorilor de proiecte şi a experţilor tehnici de calitate şi extrajudiciari în domeniul instalaţiilor electrice tehnologice se realizează ",
        "options": [
            "de către Ministerul învăţământului",
            "de către operatorul de distribuţie",
            "numai conform reglementărilor emise de ANRE"
        ],
        "answer": "numai conform reglementărilor emise de ANRE",
        "reference": "https://example.com/reference"
    },
    {
        "question": "ANRE - Autoritatea Naţională de Reglementare în domeniul Energiei este abilitată prin lege să constate şi să sancţioneze:",
        "options": [
            "nerespectarea normelor tehnice emise de către ANRE;",
            "sistarea justificată a alimentării cu energie electrică a clienţilor;",
            "încălcarea prevederilor legislaţiei muncii"
        ],
        "answer": "nerespectarea normelor tehnice emise de către ANRE;",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Electricienii care doresc să solicite autorizarea, pentru a fi acceptaţi la examen trebuie să îndeplinească următoarele condiţii:",
        "options": [
            "Să transmită la ANRE o cerere şi documentaţie anexată, din care să reiasă doar calificarea profesională",
            "Să transmită la ANRE o cerere şi documentaţie anexată, din care să reiasă doar experienţa practică în domeniul instalaţiilor electrice",
            "Să transmită la ANRE o cerere şi documentaţie anexată, din care să reiasă atât calificarea cât si experienţa profesională în domeniul instalaţiilor electrice"
        ],
        "answer": "Să transmită la ANRE o cerere şi documentaţie anexată, din care să reiasă atât calificarea cât si experienţa profesională în domeniul instalaţiilor electrice",
        "reference": "https://example.com/reference"
    },
    {
        "question": "În cazul în care electricianul autorizat îşi pierde Legitimaţia/Adeverinţa de electrician autorizat, la solicitarea sa, ANRE poate emite un duplicat, dacă: ",
        "options": [
            "Legitimaţia/Adeverinţa de electrician autorizat este declarată nulă, într-un ziar local şi titularul achită tariful de autorizare aprobat",
            "Legitimaţia/Adeverinţa de electrician autorizat este declarată nulă, într-un ziar local şi titularul achită o penalitate în cuantum de 200 RON indiferent de gradul şi tipul de autorizare",
            "Legitimaţia/Adeverinţa de electrician autorizat este declarată nulă, într-un ziar local şi titularul achită un tarif de emitere a duplicatului, conform prevederilor din regulamentul de autorizare"
        ],
        "answer": "Legitimaţia/Adeverinţa de electrician autorizat este declarată nulă, într-un ziar local şi titularul achită un tarif de emitere a duplicatului, conform prevederilor din regulamentul de autorizare",
        "reference": "https://example.com/reference"
    },
    {
        "question": "În vederea înscrierii la examenul de autorizare, electricianul trebuie să prezinte  în documentaţia anexată cererii de autorizare ,,Detalii privind lucrările realizate\"; acest document este:",
        "options": [
            "Opţional (solicitantul decide dacă îl transmite sau nu)",
            "Nerelevant",
            "Un document obligatoriu, care trebuie întocmit corelat cu documentele ,,Experienţă profesională și ,,Pagina de informaţii anexate cererii de autorizare"
        ],
        "answer": "Un document obligatoriu, care trebuie întocmit corelat cu documentele ,,Experienţă profesională și ,,Pagina de informaţii anexate cererii de autorizare",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Pentru a fi valabilă, adeverinţa de electrician autorizat ",
        "options": [
            "va fi prezentață ANRE pentru a fi vizată, la termenul prevăzut, după achitarea în prealabil a tariful de vizare, egal cu tariful de acordare a respectivului tip şi grad de autorizare  ",
            "va fi prezentață ANRE pentru a fi vizată, la termenul prevăzut, după susținerea în prealabil a unui nou examen ",
            "va fi prezentață ANRE pentru a fi vizată, la termenul prevăzut, după achitarea în prealabil a tariful de vizare, diferit de tariful de acordare a respectivului tip şi grad de autorizare  "
        ],
        "answer": "va fi prezentață ANRE pentru a fi vizată, la termenul prevăzut, după achitarea în prealabil a tariful de vizare, diferit de tariful de acordare a respectivului tip şi grad de autorizare  ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Termenul de vizare a adeverinţei de electrician autorizat,  de la data emiterii documentului sau, după caz, de la data ultimei vizări, este de",
        "options": [
            "3 ani",
            "4 ani",
            "5 ani"
        ],
        "answer": "5 ani",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Trecerea la un grad de autorizare superior se poate face:",
        "options": [
            "după 5 ani de experienţă în baza gradului de autorizare deţinut",
            "prin vizarea la termen de către ANRE a adeverinței de electrician autorizat ",
            "pe bază de examen "
        ],
        "answer": "pe bază de examen ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Pot face obiectul unei concesiuni energetice: ",
        "options": [
            "bunurile proprietate publică sau privată a statului",
            "bunurile aflate în proprietatea oricărui operator econimic",
            "bunurile utilizate în activitatea de furnizare a energiei electrice"
        ],
        "answer": "bunurile proprietate publică sau privată a statului",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Constituie contravenţie:",
        "options": [
            "refuzul clienţilor finali de a permite accesul la grupurile de măsurare",
            "modificarea fără drept a componentelor instalaţiilor energetice ",
            "sustragerea de energie electrica"
        ],
        "answer": "refuzul clienţilor finali de a permite accesul la grupurile de măsurare",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Constituie infracţiune:",
        "options": [
            "Executarea de săpături sau lucrări de orice fel in zonele de protecţie a instalaţiilor, fara consimţământul prealabil al proprietarului acestora",
            "modificarea fără drept a componentelor instalaţiilor energetice",
            "Nerespectarea reglementărilor emise de ANRE"
        ],
        "answer": "modificarea fără drept a componentelor instalaţiilor energetice",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Criteriile de promovare a energiei electrice produse in centrale electrice de cogenerare de înalta eficienta au in vedere:",
        "options": [
            "Promovarea utilizării eficiente a combustibililor",
            "realizarea unui randament global anual de minimum 50% în cazul unităţilor de cogenerare cu puteri electrice instalate de peste 25 MW\n \n",
            "Promovarea utilizării surselor regenerabile"
        ],
        "answer": "Promovarea utilizării eficiente a combustibililor",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Codul tehnic al reţelelor electrice de distribuţie reglementează activitatea operatorilor de distribuţie:",
        "options": [
            "la care acţionar principal este statul român",
            "la care acţionar majoritar nu este statul român",
            "tuturor operatorilor de distribuţie, indiferent de acţionarul majoritar"
        ],
        "answer": "tuturor operatorilor de distribuţie, indiferent de acţionarul majoritar",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Standardul de performanţă pentru serviciul de distribuţie a energiei electrice stabileşte indicatori de performanţă privind:",
        "options": [
            "Evenimentele accidentale produse de terţi asupra reţelelor electrice din patrimoniul public",
            "Debranşarea consumatorilor rău-platnici de la relele electrice de distribuţie",
            "Întreruperile programate, pentru executarea lucrărilor de dezvoltare, retehnologizare şi mentenanţă "
        ],
        "answer": "Întreruperile programate, pentru executarea lucrărilor de dezvoltare, retehnologizare şi mentenanţă ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Furnizorul de energie electrică este îndreptăţit sã rezilieze contractul de furnizare a energiei electrice  în caz de:",
        "options": [
            "refuz al clientului final de a constitui garanţia solicitată de furnizor atunci când acesta constată acţiuni menite să denatureze în orice fel indicaţiile echipamentelor de măsurare ",
            "racordare ilegală la reţeaua de distribuţie ",
            "neplata facturilor "
        ],
        "answer": "refuz al clientului final de a constitui garanţia solicitată de furnizor atunci când acesta constată acţiuni menite să denatureze în orice fel indicaţiile echipamentelor de măsurare ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Furnizorul de energie electrică este îndreptăţit sã rezilieze contractul de furnizare a energiei electrice  în caz de:",
        "options": [
            "sustragerea de energie electrică constatată prin hotărâre judecătorească definitivă",
            "racordare ilegală la reţeaua de distribuţie ",
            "refuz al clientului final de a constitui garanţia solicitată de furnizor atunci când acesta constată acţiuni menite să denatureze în orice fel indicaţiile echipamentelor de măsurare "
        ],
        "answer": "sustragerea de energie electrică constatată prin hotărâre judecătorească definitivă",
        "reference": "https://example.com/reference"
    },
    {
        "question": "În conformitate cu prevederile legii nr.123/2012  sunt considerate surse regenerabile de energie:",
        "options": [
            "Energia electrică obţinută prin arderea gazelor naturale",
            "energia eoliană",
            "Energia electrică obţinută prin arderea combustibililor fosili"
        ],
        "answer": "energia eoliană",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Nerespectarea normelor tehnice emise de către ANRE constituie:",
        "options": [
            "Infracţiune",
            "Contravenţie",
            "Abatere"
        ],
        "answer": "Contravenţie",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Furnizorul este obligat să analizeze plângerea clientului referitoare la factura emisă, comunicată furnizorului în termen de 30 de zile de la data emiterii facturii,",
        "options": [
            "numai dacă factura a fost achitată",
            " numai dacă factura nu a fost achitată ",
            " indiferent dacă factura a fost sau nu achitată, "
        ],
        "answer": "indiferent dacă factura a fost sau nu achitată, ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Actualizarea avizului tehnic de racordare atunci când se produce schimbarea titularului locului de producere sau de consum ",
        "options": [
            "este obligatorie numai dacă se modifică puterea aprobată anterior prin avizul tehnic de racordare;",
            "nu este obligatorie",
            "este obligatorie "
        ],
        "answer": "este obligatorie ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Energia electrica tranzactionata pe piata de energie electrica se masoara de catre operatorii de masurare, prin grupuri de masurare, conform reglementărilor elaborate de: ",
        "options": [
            " Ministerul de resort",
            "ANRE - Autoritatea Naţională de Reglementare în domeniul Energiei",
            "ANRSC - Autoritatea Naţională de Reglementare in domeniul Serviciilor Comunale"
        ],
        "answer": "ANRE - Autoritatea Naţională de Reglementare în domeniul Energiei",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Operatorul de distribuţie:",
        "options": [
            "Exploatează, retehnologizează, reabilitează si dezvolta reţelele electrice de distribuţie, cu respectarea reglementarilor tehnice in vigoare  ",
            "Exploatează, retehnologizează, reabilitează si dezvolta reţelele electrice de iluminat public ",
            "Încasează contravaloarea energiei electrice furnizate"
        ],
        "answer": "Exploatează, retehnologizează, reabilitează si dezvolta reţelele electrice de distribuţie, cu respectarea reglementarilor tehnice in vigoare  ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Eventualele contestaţii ale avizelor tehnice de racordare se rezolvă de către:",
        "options": [
            " organele ierarhice ale emitentului",
            " operatorul de distribuţie care a emis avizul",
            "ANRE"
        ],
        "answer": "ANRE",
        "reference": "https://example.com/reference"
    },
    {
        "question": "În cazul existenţei mai multor puncte de delimitare, se consideră un singur loc de consum şi o singură instalaţie de utilizare dacă:",
        "options": [
            "instalaţiile din aval aferente fiecărui punct de delimitare sunt legate electric între ele prin reţele ale operatorului de distribuţie;",
            "dacă există un singur proprietar  ",
            "instalaţiile din aval aferente fiecărui punct de delimitare sunt legate electric între ele prin reţele ale utilizatorului."
        ],
        "answer": "instalaţiile din aval aferente fiecărui punct de delimitare sunt legate electric între ele prin reţele ale utilizatorului.",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Pentru protejarea reţelelor electrice de distribuţie, persoanelor fizice si juridice:",
        "options": [
            "li se interzice să consume energie electrica prin instalaţii racordate direct la cele ale reţelei electrice de distribuţie",
            "li se interzice să limiteze sau să îngrădească, prin execuţia de împrejmuire, prin construcţii ori prin orice alt mod, accesul la instalaţii al operatorului de distribuţie",
            "li se permite depozitarea de materiale pe culoarul de trecere si in zonele de protecţie si de siguranţa ale instalaţiilor, fara acordul operatorului de reţea, cu condiţia să fie proprietar al terenului"
        ],
        "answer": "li se interzice să limiteze sau să îngrădească, prin execuţia de împrejmuire, prin construcţii ori prin orice alt mod, accesul la instalaţii al operatorului de distribuţie",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Pentru protejarea reţelelor electrice de distribuţie, persoanelor fizice si juridice:",
        "options": [
            "li se interzice să efectueze construcţii de orice fel în zona de siguranţă a reţelelor electrice de distribuţie, fără avizul de amplasament al operatorului de distribuţie",
            "li se interzice să consume energie electrica prin instalaţii racordate direct la cele ale reţelei electrice de distribuţie",
            "li se permite depozitarea de materiale pe culoarul de trecere si in zonele de protecţie si de siguranţa ale instalaţiilor, fara acordul operatorului de reţea, cu condiţia să fie proprietar al terenului"
        ],
        "answer": "li se interzice să efectueze construcţii de orice fel în zona de siguranţă a reţelelor electrice de distribuţie, fără avizul de amplasament al operatorului de distribuţie",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Printre obiectivele de baza ale Legii nr. 123/2012 se regăsesc:",
        "options": [
            "Promovarea utilizării gazelor naturale pentru producerea energiei electrice",
            "promovarea utilizării surselor noi şi regenerabile de energie",
            "Determinarea soluţiilor de racordare a utilizatorilor la reţelele electrice de interes public"
        ],
        "answer": "promovarea utilizării surselor noi şi regenerabile de energie",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Reţea electrică de interes public este o reţea electrică la care sunt racordaţi cel puţin:",
        "options": [
            "  3 utilizatori",
            "  2 utilizatori",
            " un utilizator"
        ],
        "answer": "  2 utilizatori",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Obţinerea avizului tehnic de racordare de către un utilizator:",
        "options": [
            " nu este obligatorie pentru o durata mai mică de 6 luni",
            " nu este obligatorie pentru o putere ceruta sub 100 kW",
            "este obligatorie pentru orice loc de consum/producere nou "
        ],
        "answer": "este obligatorie pentru orice loc de consum/producere nou ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Sursele staţionare de energie electrică în curent continuu, dacă nu sunt racordate prin invertoare la SEN, se supun supun dispoziţiilor Legii nr. 123/2012?",
        "options": [
            "Da",
            "Nu",
            "Da, doar sub aspectul stabilirii preţului de vânzare e energiei electrice produse"
        ],
        "answer": "Nu",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Executarea sau folosirea de instalaţii clandestine în scopul racordării directe la reţea constituie:",
        "options": [
            "contravenţie",
            "infracţiune",
            "contravenţie sau infracţiune, după caz"
        ],
        "answer": "infracţiune",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Avizul tehnic de racordare emis îşi încetează valabilitatea:",
        "options": [
            "la încheierea contractului de racordare",
            "în termen de 6 luni de la emitere, dacă nu a fost încheiat contractul de racordare;",
            " în termen de 12 luni de la emitere, dacă nu a fost încheiat contractul de racordare;"
        ],
        "answer": " în termen de 12 luni de la emitere, dacă nu a fost încheiat contractul de racordare;",
        "reference": "https://example.com/reference"
    },
    {
        "question": "În cazul unui ansamblu de blocuri de locuinţe, grupurile de măsurare individuale se poziţionează ",
        "options": [
            "pe tablourile din apartamente",
            "centralizat, la limita zonei de proprietate asupra terenului, in exteriorul construcţiei",
            "centralizat, la parter sau pe palier"
        ],
        "answer": "centralizat, la parter sau pe palier",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Soluţia de racordare se stabileşte printr-o fişă de soluţie pentru:",
        "options": [
            "utilizatorii perturbatori",
            " utilizatorii de tip distribuitori, indiferent de tensiunea reţelei la care se racordează",
            "locurile de consum care se racordează la reţele electrice de medie sau joasă tensiune, indiferent de puterea solicitată, dacă soluţia de racordare este unică şi/sau evidentă"
        ],
        "answer": "locurile de consum care se racordează la reţele electrice de medie sau joasă tensiune, indiferent de puterea solicitată, dacă soluţia de racordare este unică şi/sau evidentă",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Autoritatea  Naţională de Reglementare în domeniul Energiei analizează şi soluţionează eventualele contestaţii cu privire la:",
        "options": [
            "avizele tehnice de racordare ",
            "calitatea execuţiei instalaţiilor de racordare",
            "calitatea execuţiei instalaţiilor interioare ale clădirilor civile"
        ],
        "answer": "avizele tehnice de racordare ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Neînţelegerile privind racordarea utilizatorilor la reţelele electrice de interes public, dintre operatorii de distribuţie şi solicitanţi, se soluţionează:",
        "options": [
            "întotdeauna pe cale amiabilă",
            "de autoritatea competentă conform reglementărilor în vigoare",
            "întotdeauna în justiţie"
        ],
        "answer": "de autoritatea competentă conform reglementărilor în vigoare",
        "reference": "https://example.com/reference"
    },
    {
        "question": "ANRE poate aplica sancţiuni contravenţionale unui electrician autorizat pentru:",
        "options": [
            "Desfăşurarea de activităţi fără contracte legale, în vigoare (contract de muncă individual  semnat cu un angajator sau contract de prestări servicii, în cazul în care este persoană fizică autorizată în condițiile legii)",
            "Desfăşurarea activităţii în baza unei adeverințe (legitimații) de electrician autorizat emisă în urmă cu 4 ani",
            "Proiectarea instalaţiei electrice a unei locuinţe în baza unei autorizaţii de tip II A"
        ],
        "answer": "Desfăşurarea de activităţi fără contracte legale, în vigoare (contract de muncă individual  semnat cu un angajator sau contract de prestări servicii, în cazul în care este persoană fizică autorizată în condițiile legii)",
        "reference": "https://example.com/reference"
    },
    {
        "question": "ANRE poate aplica sancţiuni contravenţionale unui electrician autorizat pentru:",
        "options": [
            "Comiterea unei fapte prevăzute în Regulamentul de autorizare ca fiind interzisă",
            "Desfăşurarea activităţii în baza unei adeverințe (legitimații) de electrician autorizat emisă în urmă cu 4 ani",
            "Proiectarea instalaţiei electrice a unei locuinţe în baza unei autorizaţii de tip II A"
        ],
        "answer": "Comiterea unei fapte prevăzute în Regulamentul de autorizare ca fiind interzisă",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Autorizarea unui electrician se realizează în urma:",
        "options": [
            "promovării unui examen de autorizare",
            "promovării unui concurs de autorizare, cu număr limitat de locuri",
            "unui interviu în faţa unei comisii ANRE"
        ],
        "answer": "promovării unui examen de autorizare",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Electricianul autorizat pentru gradul II, tip A+B are următoarele competenţe:",
        "options": [
            "De a proiecta şi executa instalaţii electrice cu putere instalată de cel mult 10 kW şi la o tensiune nominală mai mică de 1 kV",
            "De a proiecta şi executa instalaţii electrice cu orice putere instalată tehnic realizabilă şi la o tensiune nominală mai mică de 1 kV",
            "De a proiecta şi executa instalaţii electrice cu orice putere instalată tehnic realizabilă şi la o tensiune nominală maximă de 20 kV"
        ],
        "answer": "De a proiecta şi executa instalaţii electrice cu orice putere instalată tehnic realizabilă şi la o tensiune nominală mai mică de 1 kV",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Autorizarea pentru proiectare de instalaţii electrice este o autorizare de tip ",
        "options": [
            "A",
            "B",
            "C"
        ],
        "answer": "A",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Este interzis electricianului autorizat:",
        "options": [
            "Să proiecteze instalaţii electrice în cazul în care deţine doar autorizaţie de tip A",
            "Să proiecteze instalaţii electrice în cazul în care nu deţine o autorizaţie de tip A",
            "Să realizeze lucrări de instalaţii electrice în baza unor documentaţii de proiectare realizate de alţi electricieni autorizaţi"
        ],
        "answer": "Să proiecteze instalaţii electrice în cazul în care nu deţine o autorizaţie de tip A",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Este interzis electricianului autorizat:",
        "options": [
            "Să proiecteze instalaţii electrice în cazul în care deţine doar autorizaţie de tip A",
            "să execute lucrări, manevre sau intervenţii sub orice formă în instalaţiile operatorilor de reţea  ",
            "Să realizeze lucrări de instalaţii electrice în baza unor documentaţii de proiectare realizate de alţi electricieni autorizaţi"
        ],
        "answer": "sa execute lucrări, manevre sau intervenţii sub orice formă în instalaţiile operatorilor de reţea  ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Este interzis electricianului autorizat:",
        "options": [
            "Să semneze documentaţii de orice fel pentru proiecte sau lucrări pe care nu le-a realizat sau supravegheat",
            "Să proiecteze instalaţii electrice în cazul în care deţine doar autorizaţie de tip A",
            "Să realizeze lucrări de instalaţii electrice în baza unor documentaţii de proiectare realizate de alţi electricieni autorizaţi"
        ],
        "answer": "Să semneze documentaţii de orice fel pentru proiecte sau lucrări pe care nu le-a realizat sau supravegheat",
        "reference": "https://example.com/reference"
    },
    {
        "question": "În vederea autorizării pentru ambele tipuri de autorizare (A şi B), electricienii:",
        "options": [
            "Trebuie să îndeplinească condiţiile de calificare şi experienţă profesionale, cumulate, pentru fiecare tip de autorizare şi susţin examene separate pentru fiecare dintre aceste tipuri",
            "Trebuie să îndeplinească condiţiile de calificare si experienţă profesionale, cumulate, pentru fiecare tip şi susţin un singur examen",
            "Trebuie sa fi fost autorizaţi în prealabil în baza Ordinului MIC nr34 din 1999"
        ],
        "answer": "Trebuie să îndeplinească condiţiile de calificare si experienţă profesionale, cumulate, pentru fiecare tip şi susţin un singur examen",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Regulamentul de autorizare a electricienilor defineşte următoarele tipuri de autorizări:",
        "options": [
            "De tip E  pentru execuţie",
            "De tip A sau B  pentru proiectare şi respectiv executare",
            "Nu sunt definite tipuri de autorizare, ci doar grade de autorizare"
        ],
        "answer": "De tip A sau B  pentru proiectare şi respectiv executare",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Sancţiunile contravenţionale aplicate de ANRE electricienilor autorizaţi pot fi asociate cu :",
        "options": [
            "retragerea autorizării acordate ",
            "Retragerea autorizării acordate pe o perioadă de până la doi ani ",
            "Avertizarea în scris cu retragerea autorizării acordate la prima abatere constatată "
        ],
        "answer": "retragerea autorizării acordate ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Un electrician autorizat care execută lucrări de instalaţii electrice:",
        "options": [
            "Are obligaţia de a respecta proiectul în baza căruia execută instalaţia electrică",
            "Are obligaţia de a participa la recepţia şi la punerea în funcţiune a instalaţiei electrice de utilizare proiectată/ executată, chiar dacă nu i se solicită acest lucru de către beneficiarul sau operatorul de reţea la care urmează a se racorda instalaţia electrică de utilizare;",
            "Are dreptul de a racorda la SEN noi puncte de consum, urmând a solicita acordul operatorului de reţea după recepţia la terminarea lucrărilor"
        ],
        "answer": "Are obligaţia de a respecta proiectul în baza căruia execută instalaţia electrică",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Una dintre obligaţiile electricianului autorizat care execută lucrări de instalaţii electrice este:",
        "options": [
            "Să respecte proiectele de execuţie a lucrărilor de instalaţii electrice doar dacă sunt întocmite de el",
            "De a participa la recepţia şi la punerea în funcţiune a instalaţiei electrice de utilizare proiectată/ executată, în cazul în care i se solicită acest lucru de către beneficiarul sau operatorul de reţea la care urmează a se racorda instalaţia electrică de utilizare",
            "De a racorda la SEN noi puncte de consum, urmând a solicita acordul operatorului de reţea după recepţia la terminarea lucrărilor"
        ],
        "answer": "De a participa la recepţia şi la punerea în funcţiune a instalaţiei electrice de utilizare proiectată/ executată, în cazul în care i se solicită acest lucru de către beneficiarul sau operatorul de reţea la care urmează a se racorda instalaţia electrică de utilizare",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Una dintre obligaţiile electricianului care deţine autorizaţie de tip A este:",
        "options": [
            "Să proiecteze instalaţii electrice doar conform gradului si tipului de autorizare şi să respecte normele tehnice corespunzătoare tipurilor de instalaţii electrice proiectate",
            "Să semneze documentaţii de proiectare chiar dacă nu sunt realizate de el, astfel încât proprietarul să poată demara cât mai repede execuţia instalaţiilor",
            "Să execute sau să coordoneze execuţia instalaţiilor electrice de orice putere sau tensiune tehnic realizabilă"
        ],
        "answer": "Să proiecteze instalaţii electrice doar conform gradului si tipului de autorizare şi să respecte normele tehnice corespunzătoare tipurilor de instalaţii electrice proiectate",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Una dintre obligaţiile electricianului care deţine autorizaţie de executare  instalaţii electrice este:",
        "options": [
            "Să notifice ANRE data începerii execuţiei unei instalaţii electrice conform gradului si tipului de autorizare ",
            "Să execute  instalaţii electrice doar conform gradului si tipului de autorizare şi să respecte prevederile din proiect",
            "Să proiecteze instalaţii electrice doar conform gradului si tipului de autorizare, având în vedere că experienţa practică îi permite acest lucru"
        ],
        "answer": "Să execute  instalaţii electrice doar conform gradului si tipului de autorizare şi să respecte prevederile din proiect",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Una dintre obligaţiile electricianului care deţine autorizaţie de executare  instalaţii electrice este:",
        "options": [
            "Să execute  instalaţii electrice numai în una dintre calităţile prevăzute în regulament pentru exercitarea activităţii",
            "Să notifice ANRE data începerii execuţiei unei instalaţii electrice conform gradului si tipului de autorizare ",
            "Să proiecteze instalaţii electrice doar conform gradului si tipului de autorizare, având în vedere că experienţa practică îi permite acest lucru"
        ],
        "answer": "Să execute  instalaţii electrice numai în una dintre calităţile prevăzute în regulament pentru exercitarea activităţii",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Client final este: ",
        "options": [
            "orice client ce cumpără energie electrică de la un producător",
            "orice client ce cumpără energie electrică de la un trader de energie electrică ",
            "orice persoană fizică sau juridică ce cumpără energie electrică pentru consum propriu"
        ],
        "answer": "orice persoană fizică sau juridică ce cumpără energie electrică pentru consum propriu",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Conform prevederilor referitoare la energia electrică din Legea nr. 123/2012 , noţiunile de \"client final\" şi \"consumator\" sunt:",
        "options": [
            "diferite",
            " echivalente;",
            " echivalente numai în cazul consumatorilor casnici"
        ],
        "answer": " echivalente;",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Codul tehnic al reţelelor electrice de distribuţie (Codul RED) este administrat de:",
        "options": [
            "SC ELECTRICA SA, în calitate de elaborator",
            "ANRE - Autoritatea Naţională de Reglementare în domeniul Energiei",
            "CN TRANSELECTRICA SA"
        ],
        "answer": "ANRE - Autoritatea Naţională de Reglementare în domeniul Energiei",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Începând cu data de 1.01.2022, în PD, la JT, în condiții normale de exploatare, excluzând întreruperile, pe durata oricărui interval de timp de o săptămână, 95% din valorile efective, mediate pe o durată de 10 minute, ale tensiunii de alimentare, nu trebuie să aibă o abatere față de tensiunea nominală mai mare de ",
        "options": [
            "0.05",
            "+5% / -10%",
            "0.12"
        ],
        "answer": "+5% / -10%",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Printre obiectivele Codului tehnic al reţelelor electrice de distribuţie (Codul RED) se regăsesc:",
        "options": [
            "Stabilirea unui set de reguli şi norme în vederea asigurării iluminatului public",
            "Stabilirea responsabilităţilor şi obligaţiilor operatorilor de distribuţie şi ale tuturor utilizatorilor reţelelor electrice de distribuţie ",
            "Stabilirea unui set de reguli şi norme în vederea asigurării accesului utilizatorilor la reţelele electrice de transport"
        ],
        "answer": "Stabilirea responsabilităţilor şi obligaţiilor operatorilor de distribuţie şi ale tuturor utilizatorilor reţelelor electrice de distribuţie ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Prevederile standardului de performanţă pentru serviciul de distribuţie nu se aplică în situaţii de:",
        "options": [
            "Întrerupere accidentală a energiei electrice",
            "Forţă majoră",
            "Evenimente accidentale determinate de angajaţii operatorului de distribuţie"
        ],
        "answer": "Forţă majoră",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Pe lângă alte condiţii pe care trebuie să le îndeplinească utilizatorii, pentru a beneficia de prevederile standardului de performanţă pentru serviciul de distribuţie, trebuie ca:   ",
        "options": [
            "să contracteze serviciul de distribuţie direct cu operatorul de distribuţie",
            "prin regimul lor de funcţionare să nu introducă perturbaţii inacceptabile, conform normativelor în vigoare, care să afecteze  funcţionarea RED sau alimentarea  altor utilizatori  RED din zonă",
            "să aibă contracte de furnizarea a energiei electrice încheiate cu operatorul de distribuţie"
        ],
        "answer": "prin regimul lor de funcţionare să nu introducă perturbaţii inacceptabile, conform normativelor în vigoare, care să afecteze  funcţionarea RED sau alimentarea  altor utilizatori  RED din zonă",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Pe lângă alte condiţii pe care trebuie să le îndeplinească utilizatorii, pentru a beneficia de prevederile standardului de performanţă pentru serviciul de distribuţie, trebuie ca:   ",
        "options": [
            "să respecte condiţiile prevăzute în contractul de distribuţie/furnizare",
            "să aibă contracte de furnizare a energiei electrice încheiate cu operatorul de distribuţie",
            "să aibă instalaţii electrice care funcţionează la tensiunea nominală alternativă în gama 20 kV - 400 kV şi la frecvenţa de 50 Hz "
        ],
        "answer": "să respecte condiţiile prevăzute în contractul de distribuţie/furnizare",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Standardul de performanţă pentru serviciul de distribuţie a energiei electrice stabileşte indicatorii de performanţă privind:",
        "options": [
            "continuitatea alimentării cu energie electrică a utilizatorilor",
            "Debranşarea consumatorilor rău-platnici de la relele electrice de distribuţie",
            "Evenimentele accidentale produse de terţi asupra reţelelor electrice din patrimoniul public"
        ],
        "answer": "continuitatea alimentării cu energie electrică a utilizatorilor",
        "reference": "https://example.com/reference"
    },
    {
        "question": "După depunerea documentaţiei complete de către utilizator, în situaţia în care soluţia de racordare se stabileşte prin fişă de soluţie, operatorul de reţea are obligaţia să transmită solicitantului avizul tehnic de racordare în maximum: ",
        "options": [
            "20 zile calendaristice în cazul racordării la joasă tensiune",
            "30 zile calendaristice în cazul racordării la medie tensiune",
            "10 zile calendaristice în cazul racordării la joasă tensiune"
        ],
        "answer": "30 zile calendaristice în cazul racordării la medie tensiune",
        "reference": "https://example.com/reference"
    },
    {
        "question": "După depunerea documentaţiei complete de către utilizator, în situaţia în care soluţia de racordare se stabileşte prin fişă de soluţie, operatorul de reţea are obligaţia să transmită solicitantului avizul tehnic de racordare în maximum: ",
        "options": [
            " 30 zile calendaristice în cazul racordării la joasă tensiune ",
            "20 zile calendaristice în cazul racordării la joasă tensiune",
            "10 zile calendaristice în cazul racordării la joasă tensiune"
        ],
        "answer": " 30 zile calendaristice în cazul racordării la joasă tensiune ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Cererile de racordare pentru locuri de producere cu puteri instalate de până la 50 MW inclusiv şi cele pentru locuri de consum cu puteri maxim simultan absorbite de până la 50 MW inclusiv, se adresează de către solicitanţi:",
        "options": [
            "obligatoriu operatorului de distribuţie concesionar din zona respectivă ",
            "operatorului de transport şi de sistem",
            "unui operator de distribuţie care deţine în apropierea locului de producere sau de consum o reţea electrică de distribuţie"
        ],
        "answer": "unui operator de distribuţie care deţine în apropierea locului de producere sau de consum o reţea electrică de distribuţie",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Avizul tehnic de racordare se emite de către:",
        "options": [
            "operatorul de reţea la care a fost depusă cererea de racordare, chiar dacă opţiunea scrisă a utilizatorului este pentru o variantă de soluţie de racordare la reţeaua electrică deţinută de un alt operator de reţea ",
            "operatorul de reţea la reţeaua căruia se racordează instalaţiile utilizatorului, conform soluţiei de racordare stabilite prin fişa sau studiul de solutie",
            "operatorul de reţea care a elaborat fişa sau studiul de solutie, chiar dacă opţiunea scrisă a utilizatorului este pentru o variantă de soluţie de racordare la reţeaua electrică deţinută de un alt operator de reţea"
        ],
        "answer": "operatorul de reţea la reţeaua căruia se racordează instalaţiile utilizatorului, conform soluţiei de racordare stabilite prin fişa sau studiul de solutie",
        "reference": "https://example.com/reference"
    },
    {
        "question": "În calitate de persoană fizică autorizată, electricianul autorizat gradul I poate executa instalaţii electrice interioare ",
        "options": [
            "având o putere electrică instalată de maximum 10 kW şi la o tensiune nominală mai mică de 1 kV, numai dacă deţine un atestat emis de ANRE",
            "având o putere electrică instalată de maximum 20 kW şi la o tensiune nominală mai mică de 1 kV, numai dacîă deţine un atestat emis de ANRE",
            "având o putere electrică instalată de maximum 10 kW şi la o tensiune nominală mai mică de 1 kV, fără a deţine un atestat emis de ANRE"
        ],
        "answer": "având o putere electrică instalată de maximum 10 kW şi la o tensiune nominală mai mică de 1 kV, fără a deţine un atestat emis de ANRE",
        "reference": "https://example.com/reference"
    },
    {
        "question": " La încetarea perioadei de valabilitate a contractului de furnizare a energiei electrice, clientul final de energie electrică are dreptul să primească de la furnizor decontul final de regularizare",
        "options": [
            "În termen de maximum 42 de zile de la încetarea contractului de furnizare a energiei electrice ",
            "la  încetarea contractului de furnizare a energiei electrice ",
            "În termen de maximum 10 de zile de la încetarea contractului de furnizare a energiei electrice "
        ],
        "answer": "În termen de maximum 42 de zile de la încetarea contractului de furnizare a energiei electrice ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Furnizarea energiei electrice se desfăşoară",
        "options": [
            " numai în baza unei licenţe pentru activitatea de furnizare a energiei electrice",
            "fără licență, de către operatori de distribuție neconcesionari către clienţii alimentaţi direct din reţelele electrice pe care aceştia le exploatează ",
            "fără licență, de către producători, oricărui client final"
        ],
        "answer": "fără licență, de către operatori de distribuție neconcesionari către clienţii alimentaţi direct din reţelele electrice pe care aceştia le exploatează ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "În cazul furnizării energiei electrice în baza unui contract încheiat pe piaţa concurenţială, întreruperea alimentării cu energie electrică pentru nerespectarea obligaţiilor contractuale de către beneficiar se face: ",
        "options": [
            "cu un preaviz de cel puţin 5 zile lucrătoare  ",
            "cu un preaviz de cel puţin10 zile",
            "fără preaviz"
        ],
        "answer": "cu un preaviz de cel puţin 5 zile lucrătoare  ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Furnizarea energiei electrice către clientul final se realizează:",
        "options": [
            "fără încheierea contractului de furnizare, pe bază de negocieri",
            "fără încheierea contractului de furnizare, pentru clienții casnici ",
            "fără încheierea contractului de furnizare în situaţiile reglementate în mod distinct de către autoritatea competentă."
        ],
        "answer": "fără încheierea contractului de furnizare în situaţiile reglementate în mod distinct de către autoritatea competentă.",
        "reference": "https://example.com/reference"
    },
    {
        "question": "*Căminele studenţeşti se încadrează în categoria : ",
        "options": [
            "clienţilor noncasnici",
            "clienţilor casnici",
            "clienţilor casnici, dar numai dacă au o putere aprobată sub 50 kW"
        ],
        "answer": "clienţilor casnici",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Întreprinderile mici se încadrează în categoria ",
        "options": [
            "clienţilor noncasnici ",
            "clienților casnici ",
            "clienţilor noncasnici, dar numai dacă au o putere aprobată mai mare de 20 kW"
        ],
        "answer": "clienţilor noncasnici ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Nerespectarea de către clientul final a contractului de furnizare încheiat pe piaţa concurenţială poate avea drept  consecinţe:",
        "options": [
            "întreruperea furnizării energiei electrice",
            "obligaţia de a reface instalaţia de racordare",
            "sancţiune prin amendă contravenţională"
        ],
        "answer": "întreruperea furnizării energiei electrice",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Avizul tehnic de racordare constituie: ",
        "options": [
            "angajamentul operatorului de reţea de a realiza instalaţia de racordare a utilizatorului;  ",
            "acceptul operatorului de reţea pentru utilizarea reţelei în anumite condiţii",
            "aprobarea de către operatorul de reţea a racordării utiizatorului în anumite condiţii."
        ],
        "answer": "aprobarea de către operatorul de reţea a racordării utiizatorului în anumite condiţii.",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Avizul tehnic de racordare constituie: ",
        "options": [
            "angajamentul operatorului de reţea de a realiza instalaţia de racordare a utilizatorului;  ",
            "oferta operatorului de reţea la cererea de racordare a solicitantului;",
            "acceptul operatorului de reţea pentru utilizarea reţelei în anumite condiţii"
        ],
        "answer": "oferta operatorului de reţea la cererea de racordare a solicitantului;",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Avizul tehnic de racordare este un aviz scris valabil:",
        "options": [
            "pentru orice  titular al locului de producere/consum respectiv",
            "numai pentru un anumit titular al locului de producere/consum",
            "pe o perioadă de timp nelimitată"
        ],
        "answer": "numai pentru un anumit titular al locului de producere/consum",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Cererea pentru racordare la reţea  trebuie să fie în mod obligatoriu semnată de: ",
        "options": [
            "utilizator sau de împuternicitul legal al utilizatorului.",
            "furnizor ",
            "operatorul de reţea"
        ],
        "answer": "utilizator sau de împuternicitul legal al utilizatorului.",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Cererea pentru racordare la reţea şi documentaţia anexată acesteia:",
        "options": [
            "se pot depune direct la centrele teritoriale de relaţii cu clienţii organizate de operatorul de reţea",
            "se trimit obligatoriu prin poştă",
            "se depun numai la registratura operatorului de reţea. "
        ],
        "answer": "se pot depune direct la centrele teritoriale de relaţii cu clienţii organizate de operatorul de reţea",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Dacă se solicită avizul tehnic de racordare pentru o organizare de de şantier, documentaţia anexată cererii va cuprinde în mod obligatoriu şi:",
        "options": [
            "certificatul de urbanism al obiectivului pentru care se organizează şantierul, în termen de valabilitate, in copie;",
            "autorizaţia de construire a obiectivului pentru care se organizează şantierul, în termen de valabilitate, in copie;",
            "contractul încheiat cu un furnizor de energie electrică"
        ],
        "answer": "autorizaţia de construire a obiectivului pentru care se organizează şantierul, în termen de valabilitate, in copie;",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Fişa de soluţie este elaborată de:",
        "options": [
            "utilizatori",
            "operatorul de reţea",
            "bunurile utilizate în activitatea de furnizare a energiei electrice"
        ],
        "answer": "operatorul de reţea",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Soluţia de racordare se stabileşte printr-o fişă de soluţie pentru:",
        "options": [
            "locurile de consum individuale ale utilizatorilor de tip clienţi casnici, indiferent de puterea solicitată",
            "locurile de consum şi/sau de producere care se racordează la reţele electrice având tensiunea nominală de 110 kV sau mai mare;",
            " utilizatorii de tip distribuitori, indiferent de tensiunea reţelei la care se racordează"
        ],
        "answer": "locurile de consum individuale ale utilizatorilor de tip clienţi casnici, indiferent de puterea solicitată",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Soluţia de racordare se stabileşte printr-un studiu de soluţie pentru:",
        "options": [
            "locurile de consum individuale ale utilizatorilor de tip clienţi casnici, indiferent de puterea solicitată",
            " utilizatorii de tip distribuitori, indiferent de tensiunea reţelei la care se racordează",
            "utilizatorii cu o putere de peste 25 kVA"
        ],
        "answer": "locurile de consum individuale ale utilizatorilor de tip clienţi casnici, indiferent de puterea solicitată",
        "reference": "https://example.com/reference"
    },
    {
        "question": "*Prevederile contractuale întemeiate pe dispoziţii ale actelor normative,  la data intrării în vigoare a modificării actelor normative respective: ",
        "options": [
            "se modifică de drept",
            "rămân în vigoare până la incheierea unui act adiţional",
            "rămân în vigoare până la incheierea unui nou contract"
        ],
        "answer": "se modifică de drept",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Clienţii casnici de energie electrică:",
        "options": [
            "pot impune furnizorului orice modalitate de plată, chiar dacă nu este pusă la dispoziţie de către acesta",
            "pot să opteze pentru orice modalitate de plată pe care furnizorul o pune la dispoziţie",
            "sunt obligaţi să achite facturile pentru energia electrică la una din casieriile furnizorului "
        ],
        "answer": "pot să opteze pentru orice modalitate de plată pe care furnizorul o pune la dispoziţie",
        "reference": "https://example.com/reference"
    },
    {
        "question": "În cazul unui refuz de constituire a garanţiilor conform Regulamentului de furnizare a energiei electrice la clienţii finali  şi a procedurilor specifice  ",
        "options": [
            "furnizorul are dreptul să solicite operatorului de distribuţie deconectarea clientului final de la reţea",
            "clientul final poate fi deconectat numai după o decizie a ANRE pentru cazul respectiv",
            "se reziliază contractul de furnizare a energiei electrice"
        ],
        "answer": "furnizorul are dreptul să solicite operatorului de distribuţie deconectarea clientului final de la reţea",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Furnizorul are obligaţia să deţină o pagină de internet proprie care să pună la dispoziţia clientului un formular online pentru înregistrarea plângerilor şi care să conţină și infomații privind  modalităţile de soluţionare",
        "options": [
            " numai a neînţelegerilor precontractuale ",
            " numai a neînţelegerilor  apărute pe parcursul derulării contractului;",
            "a neînţelegerilor precontractuale şi a celor apărute pe parcursul derulării contractului;"
        ],
        "answer": "a neînţelegerilor precontractuale şi a celor apărute pe parcursul derulării contractului;",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Furnizorul are dreptul să recalculeze consumul de energie electrică pentru o perioadă anterioară",
        "options": [
            "numai în cazul în care contorul a fost defect",
            "numai în cazul clienților noncasnici mari",
            "atunci când se constată înregistrarea eronată a consumului de energie electrică"
        ],
        "answer": "atunci când se constată înregistrarea eronată a consumului de energie electrică",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Furnizorul are dreptul să recalculeze consumul de energie electrică pentru o perioadă anterioară",
        "options": [
            "în cazul unei facturări eronate a consumului",
            "numai în cazul clienților noncasnici mari",
            "numai în cazul în care contorul a fost defect"
        ],
        "answer": "în cazul unei facturări eronate a consumului",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Clientul vulnerabil ",
        "options": [
            "nu are dreptul să beneficieze de eşalonarea la plată a facturii ",
            "are dreptul să beneficieze de eşalonarea la plată a facturii, la cerere, pe o perioadă de minimum 3 luni",
            "are dreptul să beneficieze de eşalonarea la plată a facturii, la cerere, pe o perioadă de maximum 3 luni"
        ],
        "answer": "are dreptul să beneficieze de eşalonarea la plată a facturii, la cerere, pe o perioadă de minimum 3 luni",
        "reference": "https://example.com/reference"
    },
    {
        "question": "Regulamentul pentru atestarea operatorilor economici  care proiectează, execută şi verifică  instalaţii electrice din sistemul electroenergetic este aprobat de către:",
        "options": [
            "Guvernul României",
            "Ministerul de resort",
            "ANRE "
        ],
        "answer": "ANRE ",
        "reference": "https://example.com/reference"
    },
    {
        "question": "ANRE poate suspenda Atestatul acordat unui operator economic  care proiectează, execută şi verifică  instalaţii electrice dacă:",
        "options": [
            "operatorul economic nu îndeplineşte criteriile de bonitate financiară corespunzătoare procedurii aplicabile",
            "operatorul economic a  executat lucrări fără să aibă, în proprietate sau în folosinţă, conform prevederilor Regulamentului, dotarea tehnică minimală corespunzătoare tipului de atestat  deţinut",
            "ANRE nu are competenţa de a retrage Atestatele emise"
        ],
        "answer": "operatorul economic a  executat lucrări fără să aibă, în proprietate sau în folosinţă, conform prevederilor Regulamentului, dotarea tehnică minimală corespunzătoare tipului de atestat  deţinut",
        "reference": "https://example.com/reference"
    }
];

// Export the questions array so it can be used in other files
export { BASE_QUESTIONS };