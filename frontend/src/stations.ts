const stations = [
    {
        id: '900085105',
        name: 'S Alt-Reinickendorf',
    },
    {
        id: '900320001',
        name: 'S Strausberg Nord',
    },
    {
        id: '8013335',
        name: 'Wolfen(Bitterfeld)',
    },
    {
        id: '900140517',
        name: 'Stadion Buschallee/Hansastr.',
    },
    {
        id: '900134503',
        name: 'Pasewalker Str./Blankenburger Weg',
    },
    {
        id: '900134502',
        name: 'Marienstr./Pasewalker Str.',
    },
    {
        id: '8013402',
        name: 'Zielitz, Bhf',
    },
    {
        id: '900130017',
        name: 'Pankower Str.',
    },
    {
        id: '900130016',
        name: 'Galenusstr.',
    },
    {
        id: '900320002',
        name: 'S Strausberg Stadt',
    },
    {
        id: '900063101',
        name: 'S Feuerbachstr.',
    },
    {
        id: '900320003',
        name: 'S Hegermühle',
    },
    {
        id: '000008012273',
        name: 'Leipzig, Mockauer Str.',
    },
    {
        id: '900049201',
        name: 'S Zehlendorf',
    },
    {
        id: '900049202',
        name: 'S Sundgauer Str.',
    },
    {
        id: '8012190',
        name: 'Leipzig-Heiterblick, Bhf',
    },
    {
        id: '8012195',
        name: 'Leipzig-Thekla, Bhf',
    },
    {
        id: '900230233',
        name: 'Potsdam, Hbf/Friedrich-Engels-Str.',
    },
    {
        id: '900013102',
        name: 'U Kottbusser Tor',
    },
    {
        id: '900012103',
        name: 'U Hallesches Tor',
    },
    {
        id: '900230035',
        name: 'Potsdam, Kastanienallee/Zeppelinstr.',
    },
    {
        id: '900150002',
        name: 'Hansastr./Malchower Weg',
    },
    {
        id: '900194016',
        name: 'Karl-Ziegler-Str.',
    },
    {
        id: '900053301',
        name: 'S Wannsee',
    },
    {
        id: '8098205',
        name: 'Leipzig, Hbf',
    },
    {
        id: '8012196',
        name: 'Leipzig, Nord',
    },
    {
        id: '8011361',
        name: 'Dessau Süd',
    },
    {
        id: '8011699',
        name: 'Greppin',
    },
    {
        id: '900162001',
        name: 'S Karlshorst',
    },
    {
        id: '900160522',
        name: 'Betriebshof Lichtenberg',
    },
    {
        id: '900150007',
        name: 'Oberseestr.',
    },
    {
        id: '900003102',
        name: 'S Bellevue',
    },
    {
        id: '900003103',
        name: 'S Tiergarten',
    },
    {
        id: '8010086',
        name: 'Magdeburg, Bhf Rothensee',
    },
    {
        id: '900007104',
        name: 'S Nordbahnhof',
    },
    {
        id: '900150501',
        name: 'Feldtmannstr.',
    },
    {
        id: '900192506',
        name: 'Brückenstr.',
    },
    {
        id: '900150510',
        name: 'Sandinostr.',
    },
    {
        id: '900135001',
        name: 'S Buch',
    },
    {
        id: '900150512',
        name: 'Werneuchener Str.',
    },
    {
        id: '900096405',
        name: 'S Eichborndamm',
    },
    {
        id: '900066101',
        name: 'S Lichterfelde West',
    },
    {
        id: '900066102',
        name: 'S Botanischer Garten',
    },
    {
        id: '900150513',
        name: 'Freienwalder Str.',
    },
    {
        id: '900150511',
        name: 'Simon-Bolivar-Str.',
    },
    {
        id: '900077106',
        name: 'S Sonnenallee',
    },
    {
        id: '900261429',
        name: 'Langengrassau, Gemeinde',
    },
    {
        id: '900215746',
        name: 'Pritzwalk, Hainholzweg',
    },
    {
        id: '900151007',
        name: 'Malchow/Dorfstr.',
    },
    {
        id: '900049251',
        name: 'Machnower Str./Berlepschstr.',
    },
    {
        id: '900080402',
        name: 'U Britz-Süd',
    },
    {
        id: '900261134',
        name: 'Gehren, Kirche',
    },
    {
        id: '900215741',
        name: 'Putlitz, Perleberger Str.',
    },
    {
        id: '900341137',
        name: 'Schwedt, Kastanienallee',
    },
    {
        id: '900245705',
        name: 'Priedel, Gasthaus',
    },
    {
        id: '900141501',
        name: 'Mimestr.',
    },
    {
        id: '900135508',
        name: 'Theodor-Brugsch-Str.',
    },
    {
        id: '900340561',
        name: 'Prenzlau, ZOB',
    },
    {
        id: '900054105',
        name: 'S+U Innsbrucker Platz',
    },
    {
        id: '900203890',
        name: 'Oranienburg, Aderluch',
    },
    {
        id: '900135509',
        name: 'Karower Chaussee',
    },
    {
        id: '900215733',
        name: 'Pritzwalk, Zur Hainholzmühle',
    },
    {
        id: '900048154',
        name: 'Elgersburger Str.',
    },
    {
        id: '900215732',
        name: 'Pritzwalk, Gymnasium',
    },
    {
        id: '900415833',
        name: 'Kosilenzien',
    },
    {
        id: '900275140',
        name: 'Brandenburg, Feldstr.',
    },
    {
        id: '900175528',
        name: 'Heinrich-Grüber-Str.',
    },
    {
        id: '900144500',
        name: 'Umspannwerk Malchow',
    },
    {
        id: '900053204',
        name: 'Rathaus Wannsee',
    },
    {
        id: '900261135',
        name: 'Gehren, Schloß',
    },
    {
        id: '900261975',
        name: 'Walddrehna, Dorfplatz',
    },
    {
        id: '900260339',
        name: 'Briesensee, Dorfstr.',
    },
    {
        id: '900210375',
        name: 'Hohennauen, Pareyer Str.',
    },
    {
        id: '900145500',
        name: 'Nerthusweg',
    },
    {
        id: '900220736',
        name: 'Langerwisch, Rosengut',
    },
    {
        id: '900215761',
        name: 'Quitzow, B 5',
    },
    {
        id: '900275149',
        name: 'Brandenburg, Am Fliegerhorst',
    },
    {
        id: '900203893',
        name: 'Bärenklau (OHV), Eichstädter Weg',
    },
    {
        id: '900340388',
        name: 'Jakobshagen, Dorf',
    },
    {
        id: '900341129',
        name: 'Schwedt, Grenze',
    },
    {
        id: '900215751',
        name: 'Pritzwalk, Bergstr.',
    },
    {
        id: '900261973',
        name: 'Walddrehna, Bhf',
    },
    {
        id: '900321850',
        name: 'Wuschewier, Horst',
    },
    {
        id: '900415071',
        name: 'Lichterfeld, Besucherbergwerk F60',
    },
    {
        id: '900215748',
        name: 'Perleberg, Reetzer Str.',
    },
    {
        id: '900260285',
        name: 'Beesdau, Feuerwehr',
    },
    {
        id: '900415005',
        name: 'Finsterwalde, Bhf',
    },
    {
        id: '900027201',
        name: 'Johannesstift',
    },
    {
        id: '900134528',
        name: 'Hans-Jürgen-Str.',
    },
    {
        id: '900210456',
        name: 'Friesack (Mark), Bhf',
    },
    {
        id: '900435364',
        name: 'Hindenberg (OSL), Mühle',
    },
    {
        id: '900215715',
        name: 'Ponitz (PR)',
    },
    {
        id: '900205218',
        name: 'Barsikow',
    },
    {
        id: '900195504',
        name: 'Wegedornstr.',
    },
    {
        id: '900052151',
        name: 'Wasserwerk Beelitzhof',
    },
    {
        id: '900195503',
        name: 'Dankmarsteig',
    },
    {
        id: '900191513',
        name: 'Baumschulenstr./Fähre',
    },
    {
        id: '900340873',
        name: 'Heinersdorf (UM), Lange Str.',
    },
    {
        id: '900261988',
        name: 'Waldow (bei Brand), Kirche',
    },
    {
        id: '900171506',
        name: 'Roßlauer Str.',
    },
    {
        id: '900203886',
        name: 'Fürstenberg (Havel), Röblinsee Nord',
    },
    {
        id: '900048103',
        name: 'Rathenauplatz',
    },
    {
        id: '900215897',
        name: 'Streesow, Dorf',
    },
    {
        id: '900040104',
        name: 'Agathe-Lasch-Platz',
    },
    {
        id: '900066171',
        name: 'S Lichterfelde West',
    },
    {
        id: '900220003',
        name: 'Michendorf, Bhf',
    },
    {
        id: '900024104',
        name: 'Amtsgerichtsplatz',
    },
    {
        id: '900215707',
        name: 'Perleberg, Schwarzer Weg',
    },
    {
        id: '900215705',
        name: 'Perleberg, Perlhof',
    },
    {
        id: '900074267',
        name: 'Bornhagenweg',
    },
    {
        id: '900261652',
        name: 'Neu Zauche, Kindergarten',
    },
    {
        id: '900131518',
        name: 'Blankenburger Str./Grumbkowstr.',
    },
    {
        id: '900215771',
        name: 'Perleberg, Wollweberstr.',
    },
    {
        id: '900310013',
        name: 'S Erkner/ZOB',
    },
    {
        id: '900215725',
        name: 'Pritzwalk, Grünstr.',
    },
    {
        id: '900260559',
        name: 'Fürstlich Drehna, Gasthaus',
    },
    {
        id: '900215728',
        name: 'Pritzwalk, Ost',
    },
    {
        id: '900052152',
        name: 'Am Sandwerder',
    },
    {
        id: '900340480',
        name: 'Neumannshof',
    },
    {
        id: '900340986',
        name: 'Neuhaus',
    },
    {
        id: '900110002',
        name: 'S Prenzlauer Allee',
    },
    {
        id: '900260468',
        name: 'Freesdorf, Feuerwehr',
    },
    {
        id: '900260469',
        name: 'Frankendorf (LDS), Kirche',
    },
    {
        id: '900134509',
        name: 'Hugenottenplatz',
    },
    {
        id: '900034102',
        name: 'U Haselhorst',
    },
    {
        id: '900350269',
        name: 'Ladeburg, Rollberg',
    },
    {
        id: '900027205',
        name: 'Aalemannufer',
    },
    {
        id: '900262033',
        name: 'Willmersdorf-Stöbritz',
    },
    {
        id: '900435371',
        name: 'Kemmen',
    },
    {
        id: '900215768',
        name: 'Perleberg, Schwarzer Weg Nord',
    },
    {
        id: '900184003',
        name: 'Müggelheim/Dorf',
    },
    {
        id: '900193510',
        name: 'Anna-Seghers-Str.',
    },
    {
        id: '900193503',
        name: 'Radickestr./Nipkowstr.',
    },
    {
        id: '900191004',
        name: 'Kiefholzstr./Baumschulenstr.',
    },
    {
        id: '900435606',
        name: 'Lübbenau, Busbahnhof',
    },
    {
        id: '900203902',
        name: 'Zehdenick, Am Pool',
    },
    {
        id: '900215770',
        name: 'Perleberg, Feldstr.',
    },
    {
        id: '900063152',
        name: 'Selerweg',
    },
    {
        id: '900001252',
        name: 'Friedrich-Krause-Ufer',
    },
    {
        id: '900215852',
        name: 'Schönfeld (PR), B 5',
    },
    {
        id: '900203915',
        name: 'Falkenthal, Ausbau',
    },
    {
        id: '900070302',
        name: 'U Alt-Mariendorf',
    },
    {
        id: '900142509',
        name: 'Papstfinkweg',
    },
    {
        id: '900321057',
        name: 'Bralitz, Am Spitz',
    },
    {
        id: '900215850',
        name: 'Schönebeck (PR), B 103',
    },
    {
        id: '900001203',
        name: 'Döberitzer Str.',
    },
    {
        id: '900215849',
        name: 'Schönebeck (PR), Ausbau',
    },
    {
        id: '900215848',
        name: 'Schönebeck (PR), Abzweig',
    },
    {
        id: '900260019',
        name: 'Brand, Tropical Islands',
    },
    {
        id: '900203910',
        name: 'Zehdenick, Amtshaus',
    },
    {
        id: '900205100',
        name: 'Heiligengrabe, Dröbel',
    },
    {
        id: '900215847',
        name: 'Schmolde, Dorf I',
    },
    {
        id: '900087155',
        name: 'Zentraler Festplatz',
    },
    {
        id: '900435330',
        name: 'Tettau, Kindergarten',
    },
    {
        id: '900360027',
        name: 'Frankfurt (Oder), Birnbaumsmühle',
    },
    {
        id: '900215846',
        name: 'Schmolde, Dorf',
    },
    {
        id: '900140006',
        name: 'Weißer See',
    },
    {
        id: '900261651',
        name: 'Neu Zauche, Friedensstr.',
    },
    {
        id: '900340808',
        name: 'Ruhhof, Siedlung',
    },
    {
        id: '900205041',
        name: 'Kyritz, Stauffenbergstr.',
    },
    {
        id: '900261370',
        name: 'Klein Wasserburg',
    },
    {
        id: '900261087',
        name: 'Märkisch Buchholz, Leibscher Chaussee',
    },
    {
        id: '900435332',
        name: 'Freienhufen, Barziger Weg',
    },
    {
        id: '900142506',
        name: 'Fafnerstr.',
    },
    {
        id: '900141002',
        name: 'Heinersdorf Kirche',
    },
    {
        id: '900141500',
        name: 'Ingeborgstr.',
    },
    {
        id: '900210042',
        name: 'Mützlitz',
    },
    {
        id: '900050255',
        name: 'Schützallee',
    },
    {
        id: '900215865',
        name: 'Seefeld (PR), B 103',
    },
    {
        id: '900205127',
        name: 'Kyritz, Pritzwalker Str.',
    },
    {
        id: '900215862',
        name: 'Seedorf',
    },
    {
        id: '900360055',
        name: 'Frankfurt (Oder), Hamburger Str.',
    },
    {
        id: '900260616',
        name: 'Bestensee, Schubertstr.',
    },
    {
        id: '900203917',
        name: 'Falkenthal, Kleiner Berg',
    },
    {
        id: '900320025',
        name: 'Strausberg, Lustgarten',
    },
    {
        id: '900205113',
        name: 'Fehrbellin, Rathaus',
    },
    {
        id: '900078102',
        name: 'U Rathaus Neukölln',
    },
    {
        id: '900203916',
        name: 'Falkenthal, Großer Berg',
    },
    {
        id: '900078152',
        name: 'Morusstr.',
    },
    {
        id: '900079203',
        name: 'Herrfurthstr.',
    },
    {
        id: '900079202',
        name: 'U Boddinstr.',
    },
    {
        id: '900261107',
        name: 'Schönefeld (bei Berlin), Theodor-Fontane-Allee',
    },
    {
        id: '900340409',
        name: 'Klosterwalde, Dorf',
    },
    {
        id: '000310860002',
        name: 'Nieden, Dorf',
    },
    {
        id: '900215798',
        name: 'Rohlsdorf (bei Perleberg), Bhf',
    },
    {
        id: '900360122',
        name: 'Frankfurt (Oder), Schillerstr.',
    },
    {
        id: '900215882',
        name: 'Stavenow',
    },
    {
        id: '900245198',
        name: 'Luckenwalde, Bio.park',
    },
    {
        id: '900340435',
        name: 'Lindhorst, Dorf',
    },
    {
        id: '900340822',
        name: 'Gramzow (UM), Markt',
    },
    {
        id: '900341165',
        name: 'Schwedt, Uckermärkische Bühnen',
    },
    {
        id: '900340157',
        name: 'Frauenhagen (bei Angermünde), Ziethenmühle Abzw.',
    },
    {
        id: '900340834',
        name: 'Greiffenberg, Schule',
    },
    {
        id: '900210159',
        name: 'Hohennauen, Dorf',
    },
    {
        id: '900079221',
        name: 'S+U Hermannstr.',
    },
    {
        id: '900260381',
        name: 'Caminchen',
    },
    {
        id: '900203920',
        name: 'Liebenberg, Parkweg',
    },
    {
        id: '900341191',
        name: 'Steinhöfel (UM), Bahnübergang',
    },
    {
        id: '900080102',
        name: 'Fulhamer Allee',
    },
    {
        id: '900341108',
        name: 'Schwedt, Auguststr.',
    },
    {
        id: '900260356',
        name: 'Burglehn',
    },
    {
        id: '900215786',
        name: 'Reckenzin',
    },
    {
        id: '900080408',
        name: 'Paster-Behrens-Str.',
    },
    {
        id: '900203783',
        name: 'Gransee, Ziegelscheune',
    },
    {
        id: '900060104',
        name: 'Insulaner',
    },
    {
        id: '900027454',
        name: 'Mülheimer Str.',
    },
    {
        id: '900027301',
        name: 'Am Kiesteich',
    },
    {
        id: '900350306',
        name: 'Bernau, Am Panke-Park',
    },
    {
        id: '900360099',
        name: 'Frankfurt (Oder), Meurerstr.',
    },
    {
        id: '900340490',
        name: 'Paulinenhof',
    },
    {
        id: '900261496',
        name: 'Lübben, Lieberoser Str.',
    },
    {
        id: '900261527',
        name: 'Lübben, Ratsvorwerk',
    },
    {
        id: '900261723',
        name: 'Radensdorf (Spreewald), Industriegebiet',
    },
    {
        id: '900350904',
        name: 'Schwanebeck (BAR), Kleiststr.',
    },
    {
        id: '900260341',
        name: 'Briesensee, Kreuzung',
    },
    {
        id: '900220219',
        name: 'Nahmitz, Friedhof',
    },
    {
        id: '900220343',
        name: 'Rietz (bei Brandenburg), Friedhof',
    },
    {
        id: '900205012',
        name: 'Blumenthal, Schule',
    },
    {
        id: '900340979',
        name: 'Nechlin, Bhf',
    },
    {
        id: '900360097',
        name: 'Frankfurt (Oder), Messegelände',
    },
    {
        id: '900350692',
        name: 'Schwanebeck (BAR), Neu-Buch',
    },
    {
        id: '900131005',
        name: 'Pastor-Niemöller-Platz',
    },
    {
        id: '900144502',
        name: 'Am Luchgraben',
    },
    {
        id: '900075101',
        name: 'Erkstr.',
    },
    {
        id: '900210036',
        name: 'Buschow, Ausbau',
    },
    {
        id: '900007154',
        name: 'Demminer Str.',
    },
    {
        id: '900350250',
        name: 'Ladeburg, Finkenschlag',
    },
    {
        id: '900011102',
        name: 'U Afrikanische Str.',
    },
    {
        id: '900210586',
        name: 'Wustermark, Mittelallee',
    },
    {
        id: '900435431',
        name: 'Laasow, Gasthaus',
    },
    {
        id: '900215543',
        name: 'Laaslich',
    },
    {
        id: '900215542',
        name: 'Laaske, Dorf',
    },
    {
        id: '900311567',
        name: 'Steinsdorf, Vorwerk',
    },
    {
        id: '900245507',
        name: 'Kummersdorf Gut, Siedlung',
    },
    {
        id: '900160006',
        name: 'Heizkraftwerk Klingenberg',
    },
    {
        id: '900340289',
        name: 'Eselshütt',
    },
    {
        id: '900245542',
        name: 'Märkisch Wilmersdorf, Dorfstr.',
    },
    {
        id: '900210578',
        name: 'Buchow-Karpzow',
    },
    {
        id: '900350831',
        name: 'Tiefensee, Kaliebeweg',
    },
    {
        id: '900203877',
        name: 'Oranienburg, A.-Buchmann-Str.',
    },
    {
        id: '900245588',
        name: 'Sperenberg, Karl-Fiedler-Str.',
    },
    {
        id: '900053352',
        name: 'Hubertusbrücke',
    },
    {
        id: '900203826',
        name: 'Bärenklau (OHV), Kirschenallee',
    },
    {
        id: '900194010',
        name: 'Gerhard-Sedlmayr-Str.',
    },
    {
        id: '900160502',
        name: 'Gustav-Holzmann-Str.',
    },
    {
        id: '900210060',
        name: 'Brieselang, Am Wald',
    },
    {
        id: '900215503',
        name: 'Kuhbier, Dorf',
    },
    {
        id: '900210012',
        name: 'Brieselang, Bhf/A.-Bebel-Str.',
    },
    {
        id: '900245574',
        name: 'Rehagen, Chausseestr.',
    },
    {
        id: '900245576',
        name: 'Rehagen, Horstweg',
    },
    {
        id: '900311565',
        name: 'Steinsdorf, Bomsdorfer Str.',
    },
    {
        id: '900435453',
        name: 'Hohenbocka, Kinderhaus',
    },
    {
        id: '900048160',
        name: 'Hubertusbader Str.',
    },
    {
        id: '900023201',
        name: 'S+U Zoologischer Garten',
    },
    {
        id: '900245332',
        name: 'Kliestow, An der Ziegelei Süd',
    },
    {
        id: '900194514',
        name: 'Benno-König-Str.',
    },
    {
        id: '900245009',
        name: 'Mellnsdorf, Dorfstr.',
    },
    {
        id: '900245118',
        name: 'Rietdorf, Dorfstr.',
    },
    {
        id: '900341139',
        name: 'Schwedt, Krumbachstr.',
    },
    {
        id: '900220324',
        name: 'Potsdam, Ketziner Str./Königsweg',
    },
    {
        id: '900245001',
        name: 'Wergzahna, Dorfstr.',
    },
    {
        id: '900120538',
        name: 'Proskauer Str.',
    },
    {
        id: '900085207',
        name: 'Pankower Allee/Reginhardstr.',
    },
    {
        id: '900245112',
        name: 'Kolpien (Dahme), Dahmer Str.',
    },
    {
        id: '900245119',
        name: 'Schöna (Dahme), Dorfstr.',
    },
    {
        id: '900085258',
        name: 'Mittelbruchzeile',
    },
    {
        id: '900093203',
        name: 'Hermsdorfer Damm/Berliner Str.',
    },
    {
        id: '900245114',
        name: 'Mehlsdorf (Dahme), Dorfstr.',
    },
    {
        id: '900093251',
        name: 'Schildower Str.',
    },
    {
        id: '900093202',
        name: 'Almutstr.',
    },
    {
        id: '900094151',
        name: 'Zehntwerderweg',
    },
    {
        id: '900245040',
        name: 'Waldstadt, Chausseestr.',
    },
    {
        id: '900094102',
        name: 'Waidmannsluster Damm/Oraniendamm',
    },
    {
        id: '900085257',
        name: 'Raschdorffstr.',
    },
    {
        id: '900096102',
        name: 'Hermsdorfer Str./Alt-Wittenau',
    },
    {
        id: '900245256',
        name: 'Niedergörsdorf, Gemeindeverwaltung',
    },
    {
        id: '900096402',
        name: 'Wittenau Kirche',
    },
    {
        id: '900350260',
        name: 'Bernau, Schönower Chaussee',
    },
    {
        id: '900203834',
        name: 'Oranienburg, Orafol',
    },
    {
        id: '900160536',
        name: 'Kosanke-Siedlung',
    },
    {
        id: '900203832',
        name: 'Oranienburg, Finanzamt',
    },
    {
        id: '900194517',
        name: 'Landfliegerstr.',
    },
    {
        id: '900194537',
        name: 'Landschaftspark Johannisthal',
    },
    {
        id: '900311224',
        name: 'Bomsdorf, Dorfstr.',
    },
    {
        id: '900183503',
        name: 'Hortwinkeler Weg',
    },
    {
        id: '900183507',
        name: 'Fürstenwalder Allee/Schule',
    },
    {
        id: '900183506',
        name: 'Grünheider Weg',
    },
    {
        id: '900183505',
        name: 'Mönchsheimer Str.',
    },
    {
        id: '900261101',
        name: 'Krossen, Lindenweg',
    },
    {
        id: '900215484',
        name: 'Klenzenhof',
    },
    {
        id: '900183504',
        name: 'Petershagener Weg',
    },
    {
        id: '900261707',
        name: 'Prierow, Försterei',
    },
    {
        id: '900261099',
        name: 'Prierow, Brandstr.',
    },
    {
        id: '900341141',
        name: 'Schwedt, Kuhheide',
    },
    {
        id: '900210576',
        name: 'Falkenrehde, Str. der Jugend',
    },
    {
        id: '900048159',
        name: 'Richard-Strauss-Str.',
    },
    {
        id: '900046354',
        name: 'Roseneck/Teplitzer Str.',
    },
    {
        id: '900183502',
        name: 'Waldschützpfad',
    },
    {
        id: '000008012436',
        name: 'Neu Wokern',
    },
    {
        id: '900191002',
        name: 'S Plänterwald',
    },
    {
        id: '900261095',
        name: 'Klein Eichholz, Ausbau',
    },
    {
        id: '900340464',
        name: 'Metzelthin (UM)',
    },
    {
        id: '900215478',
        name: 'Klein Warnow, Siedlung',
    },
    {
        id: '900260584',
        name: 'Streganz, Ausbau',
    },
    {
        id: '900215477',
        name: 'Klein Warnow, Kolonie',
    },
    {
        id: '900215476',
        name: 'Klein Warnow, Dorf',
    },
    {
        id: '900134002',
        name: 'Hans-Schumacher-Str.',
    },
    {
        id: '900215475',
        name: 'Klein Schönhagen, I',
    },
    {
        id: '900310015',
        name: 'Gosen, Eiche',
    },
    {
        id: '900215474',
        name: 'Klein Schönhagen, B 5',
    },
    {
        id: '900321845',
        name: 'Wulkow (bei Booßen), Dorfstr.',
    },
    {
        id: '900183005',
        name: 'Fahlenbergstr.',
    },
    {
        id: '900183512',
        name: 'Hubertusstr.',
    },
    {
        id: '900360001',
        name: 'Frankfurt (Oder), Neuberesinchen',
    },
    {
        id: '900215491',
        name: 'Kolrep, B 103',
    },
    {
        id: '000008012421',
        name: 'Neetzka',
    },
    {
        id: '000008010273',
        name: 'Plaaz, Bhf',
    },
    {
        id: '6275',
        name: 'Blumenhagen (bei Pasewalk), Bhf',
    },
    {
        id: '6004',
        name: 'Zerrenthin, Bhf',
    },
    {
        id: '31',
        name: 'Reuterstadt Stavenhagen',
    },
    {
        id: '900210063',
        name: 'Brieselang, Am Kienast',
    },
    {
        id: '000008010066',
        name: 'Bützow',
    },
    {
        id: '6022',
        name: 'Grambow',
    },
    {
        id: '9062',
        name: 'Blankenberg(Meckl)',
    },
    {
        id: '900341170',
        name: 'Schwedt, Wasserturm',
    },
    {
        id: '7474',
        name: 'Ventschow',
    },
    {
        id: '3628',
        name: 'Mölln(Meckl)',
    },
    {
        id: '5041',
        name: 'Sponholz',
    },
    {
        id: '000008010199',
        name: 'Lalendorf, Bhf',
    },
    {
        id: '6254',
        name: 'Pasewalk Ost',
    },
    {
        id: '10005',
        name: 'Malchin',
    },
    {
        id: '6011',
        name: 'Löcknitz, Bhf',
    },
    {
        id: '6800',
        name: 'Strasburg, Bhf',
    },
    {
        id: '900260809',
        name: 'Löpten, Dorf',
    },
    {
        id: '900210327',
        name: 'Falkensee, Rathausplatz',
    },
    {
        id: '900215493',
        name: 'Könkendorf',
    },
    {
        id: '900210062',
        name: 'Brieselang, Schillerstr./Forstweg',
    },
    {
        id: '900183511',
        name: 'Eichenstr./Waldstr.',
    },
    {
        id: '900092282',
        name: 'Zeltinger Platz/S Frohnau',
    },
    {
        id: '900038256',
        name: 'Außenweg',
    },
    {
        id: '900311614',
        name: 'Wellmitz, Lindenstr.',
    },
    {
        id: '900311613',
        name: 'Wellmitz, Gut',
    },
    {
        id: '900310571',
        name: 'Erkner, Uferstr.',
    },
    {
        id: '900203881',
        name: 'Höpen',
    },
    {
        id: '900310579',
        name: 'Erkner, Schelkplatz',
    },
    {
        id: '900064354',
        name: 'Heinersdorfer Str./Hildburghauser Str.',
    },
    {
        id: '900064353',
        name: 'Grabenstr.',
    },
    {
        id: '900310553',
        name: 'Erkner, Ahornallee',
    },
    {
        id: '900210317',
        name: 'Bergerdamm, Hanffabrik',
    },
    {
        id: '900415466',
        name: 'Schönborn, Bhf',
    },
    {
        id: '900210029',
        name: 'Bergerdamm, Bhf',
    },
    {
        id: '900096304',
        name: 'Quickborner Str.',
    },
    {
        id: '900435402',
        name: 'Saalhausen, Gasthaus',
    },
    {
        id: '900064101',
        name: 'Ostpreußendamm/Königsberger Str.',
    },
    {
        id: '900215657',
        name: 'Neu Kemnitz',
    },
    {
        id: '900066150',
        name: 'Drakestr./Gardeschützenweg',
    },
    {
        id: '900160537',
        name: 'Einbecker Str./Rosenfelder Str.',
    },
    {
        id: '900435413',
        name: 'Lindchen',
    },
    {
        id: '900245263',
        name: 'Berkenbrück (TF), Dorfstr.',
    },
    {
        id: '900245270',
        name: 'Hennickendorf (TF), Luckenwalder Chaussee',
    },
    {
        id: '900203876',
        name: 'Oranienburg, Wupperstr.',
    },
    {
        id: '900016203',
        name: 'Klinikum Am Urban',
    },
    {
        id: '900210407',
        name: 'Berge (HVL), Ausbau',
    },
    {
        id: '900245268',
        name: 'Gottsdorf',
    },
    {
        id: '900195524',
        name: 'Ortolfstr./Venusstr.',
    },
    {
        id: '900210408',
        name: 'Berge (HVL), B 5',
    },
    {
        id: '900260682',
        name: 'Friedersdorf (LDS), Kastanienallee',
    },
    {
        id: '900180506',
        name: 'Landjägerstr.',
    },
    {
        id: '900210069',
        name: 'Bredow, Vorwerk',
    },
    {
        id: '8011260',
        name: 'Brehna',
    },
    {
        id: '900262076',
        name: 'Zaue, Campingplatz',
    },
    {
        id: '900261749',
        name: 'Rickshausen, Lubolzer Str.',
    },
    {
        id: '900311513',
        name: 'Neuzelle, Schule',
    },
    {
        id: '900048109',
        name: 'Roseneck',
    },
    {
        id: '900340349',
        name: 'Güterberg',
    },
    {
        id: '900215698',
        name: 'Perleberg, Berliner Weg',
    },
    {
        id: '900311568',
        name: 'Streichwitz',
    },
    {
        id: '900340886',
        name: 'Henriettenhof, Mitte',
    },
    {
        id: '900215689',
        name: 'Perleberg, Zentrum',
    },
    {
        id: '900215688',
        name: 'Perleberg, Krankenhaus',
    },
    {
        id: '900203882',
        name: 'Liebenwalde, Ausbau',
    },
    {
        id: '900210440',
        name: 'Briesen (HVL)',
    },
    {
        id: '900341109',
        name: 'Schwedt, Bäckerstr.',
    },
    {
        id: '900311473',
        name: 'Möbiskruge, Fünfeichener Weg',
    },
    {
        id: '8011905',
        name: 'Hohenthurm',
    },
    {
        id: '900073256',
        name: 'Hanielweg',
    },
    {
        id: '8012788',
        name: 'Roitzsch(Bitterf)',
    },
    {
        id: '900320997',
        name: 'Altglietzen, Abzweig Neuenhagen',
    },
    {
        id: '900350847',
        name: 'Joachimsthal, Chausseestr.',
    },
    {
        id: '8012147',
        name: 'Landsberg(b. Halle/Saale)',
    },
    {
        id: '900310569',
        name: 'Erkner, Seestr.',
    },
    {
        id: '900215670',
        name: 'Neuhausen (PR), II',
    },
    {
        id: '900066303',
        name: 'Holbeinstr.',
    },
    {
        id: '900203336',
        name: 'Oranienburg, Birkenallee',
    },
    {
        id: '900066402',
        name: 'Karwendelstr.',
    },
    {
        id: '900110003',
        name: 'S Greifswalder Str.',
    },
    {
        id: '900210406',
        name: 'Lietzow (bei Nauen)',
    },
    {
        id: '900245246',
        name: 'Kaltenborn (TF), Dorfstr.',
    },
    {
        id: '900245191',
        name: 'Wiepersdorf (TF), B.-v.-Arnim-Str.',
    },
    {
        id: '900007181',
        name: 'Usedomer Str.',
    },
    {
        id: '900220449',
        name: 'Potsdam, Kirche Golm',
    },
    {
        id: '900215017',
        name: 'Falkenhagen (PR), Gewerbepark Prignitz',
    },
    {
        id: '900194006',
        name: 'S Schöneweide/Sterndamm',
    },
    {
        id: '900203840',
        name: 'Oranienburg, Krankenhaus',
    },
    {
        id: '900161509',
        name: 'Michiganseestr.',
    },
    {
        id: '900215567',
        name: 'Lindenberg (PR), Lamprecht',
    },
    {
        id: '900311230',
        name: 'Breslack, Ulmenstr.',
    },
    {
        id: '900054102',
        name: 'U Kleistpark',
    },
    {
        id: '900220321',
        name: 'Potsdam, Schule Fahrland',
    },
    {
        id: '900245250',
        name: 'Malterhausen, Dorf',
    },
    {
        id: '900215620',
        name: 'Moor (PR)',
    },
    {
        id: '900092204',
        name: 'Maximiliankorso/Sigismundkorso',
    },
    {
        id: '900092255',
        name: 'Benediktinerstr.',
    },
    {
        id: '900260807',
        name: 'Königs Wusterhausen, Funkerberg',
    },
    {
        id: '900220318',
        name: 'Potsdam, Kienhorststr.',
    },
    {
        id: '900245241',
        name: 'Danna, Dorfstr.',
    },
    {
        id: '900220319',
        name: 'Potsdam, Kaiserplatz',
    },
    {
        id: '900245243',
        name: 'Eckmannsdorf, Dorfstr.',
    },
    {
        id: '900092203',
        name: 'Donnersmarckplatz',
    },
    {
        id: '900220320',
        name: 'Potsdam, An der Windmühle',
    },
    {
        id: '900215560',
        name: 'Lenzen, Wasserwerk',
    },
    {
        id: '900092254',
        name: 'An der Buche',
    },
    {
        id: '900026102',
        name: 'Brixplatz',
    },
    {
        id: '900220327',
        name: 'Potsdam, Kirche Kartzow',
    },
    {
        id: '900215601',
        name: 'Mansfeld',
    },
    {
        id: '900210373',
        name: 'Nauen, Von-Baußen-Allee',
    },
    {
        id: '900134501',
        name: 'Rosenthaler Str.',
    },
    {
        id: '900340837',
        name: 'Greiffenberg, Breite Str.',
    },
    {
        id: '900245139',
        name: 'Kloster Zinna, Markt',
    },
    {
        id: '900215687',
        name: 'Perleberg, H.-Heine-Str.',
    },
    {
        id: '900245174',
        name: 'Hohenseefeld, Chausseestr.',
    },
    {
        id: '900350256',
        name: 'Bernau, Diebesweg',
    },
    {
        id: '900203875',
        name: 'Oranienburg, Badstr.',
    },
    {
        id: '900175015',
        name: 'U Louis-Lewin-Str.',
    },
    {
        id: '900311612',
        name: 'Wellmitz, Bhf',
    },
    {
        id: '900203865',
        name: 'Mehlhase',
    },
    {
        id: '900245591',
        name: 'Stülpe, Schule',
    },
    {
        id: '900215607',
        name: 'Mesendorf, Abzweig',
    },
    {
        id: '900096471',
        name: 'Landesarchiv',
    },
    {
        id: '900245121',
        name: 'Wahlsdorf, Hauptstr.',
    },
    {
        id: '900193502',
        name: 'Glienicker Weg/Nipkowstr.',
    },
    {
        id: '900029302',
        name: 'S+U Rathaus Spandau',
    },
    {
        id: '900210669',
        name: 'Börnicke (HVL), Denkmal',
    },
    {
        id: '900027254',
        name: 'Mertensstr.',
    },
    {
        id: '900038103',
        name: 'Landschaftsfriedhof Gatow',
    },
    {
        id: '900141504',
        name: 'Am Wasserturm',
    },
    {
        id: '900215699',
        name: 'Perleberg, Dergenthiner Str.',
    },
    {
        id: '900066404',
        name: 'Händelplatz',
    },
    {
        id: '900261799',
        name: 'Sacrow',
    },
    {
        id: '900080202',
        name: 'U Grenzallee',
    },
    {
        id: '900260067',
        name: 'Massow (LDS), Wendeplatz',
    },
    {
        id: '900220850',
        name: 'Potsdam, Am Wald',
    },
    {
        id: '900205531',
        name: 'Roddahn',
    },
    {
        id: '900080204',
        name: 'U Grenzallee/Jahnstr.',
    },
    {
        id: '900245357',
        name: 'Dobbrikow, Ortseingang',
    },
    {
        id: '900080203',
        name: 'Franz-Körner-Str.',
    },
    {
        id: '900245356',
        name: 'Dobbrikow, Ferienzentrum',
    },
    {
        id: '900204015',
        name: 'Oranienburg, TURM ErlebnisCity',
    },
    {
        id: '900435179',
        name: 'Lauchhammer West, Kokerei',
    },
    {
        id: '900205526',
        name: 'Rheinsberg, Hotel am See',
    },
    {
        id: '900205525',
        name: 'Rheinsberg, Hohenelse',
    },
    {
        id: '900260170',
        name: 'Ziegenhals, Schwarzer Weg',
    },
    {
        id: '900261991',
        name: 'Waldow-Sacrow',
    },
    {
        id: '900260167',
        name: 'Ziegenhals, Erlenweg',
    },
    {
        id: '900260168',
        name: 'Ziegenhals, Pappelweg',
    },
    {
        id: '900260166',
        name: 'Wernsdorf, Dorfaue',
    },
    {
        id: '900220851',
        name: 'Potsdam, Eisenbahnbrücke Marquardt',
    },
    {
        id: '900205518',
        name: 'Raminshof',
    },
    {
        id: '900080401',
        name: 'U Parchimer Allee',
    },
    {
        id: '900080403',
        name: 'Buschkrugallee/Parchimer Allee',
    },
    {
        id: '900170523',
        name: 'Hinter der Mühle',
    },
    {
        id: '900170522',
        name: 'Rebhuhnweg',
    },
    {
        id: '900051358',
        name: 'Bitscher Str.',
    },
    {
        id: '900435459',
        name: 'Calau, Bhf',
    },
    {
        id: '900220854',
        name: 'Potsdam, Fährweg',
    },
    {
        id: '900340333',
        name: 'Grimme',
    },
    {
        id: '900220912',
        name: 'Neuseddin, Waldstr.',
    },
    {
        id: '000313624001',
        name: 'Neubarnim, Ausbau',
    },
    {
        id: '900340932',
        name: 'Kerkow, Gaststätte',
    },
    {
        id: '900260908',
        name: 'Ragow (LDS), Lindenring',
    },
    {
        id: '900260907',
        name: 'Ragow (LDS), Dorf',
    },
    {
        id: '900245154',
        name: 'Jüterbog, Quellenhof',
    },
    {
        id: '900340935',
        name: 'Kerkow, Kita',
    },
    {
        id: '900222211',
        name: 'Wollin (PM), Schule',
    },
    {
        id: '900222210',
        name: 'Wollin (PM), Ortsmitte',
    },
    {
        id: '900222077',
        name: 'Görzke, Abzweig Struvenberg',
    },
    {
        id: '900260629',
        name: 'Brusendorf, Dorf',
    },
    {
        id: '900135501',
        name: 'Pölnitzweg/Hobrechtsfelder Chaussee',
    },
    {
        id: '900220077',
        name: 'Teltow, Bürgertreff',
    },
    {
        id: '900340824',
        name: 'Storkow (bei Templin), Kirche',
    },
    {
        id: '900245659',
        name: 'Ludwigsfelde, Zum Röthepfuhl',
    },
    {
        id: '900435171',
        name: 'Frauendorf, Oberdorf',
    },
    {
        id: '900090101',
        name: 'Falkenplatz',
    },
    {
        id: '900195513',
        name: 'Braunellensteig',
    },
    {
        id: '900220920',
        name: 'Seddin (PM), Beelitzer Str.',
    },
    {
        id: '900261085',
        name: 'Schulzendorf (LDS), Zum Mühlenschlag',
    },
    {
        id: '900435172',
        name: 'Frauendorf, Unterdorf',
    },
    {
        id: '900470159',
        name: 'Cottbus, Georg-Schlesinger-Str.',
    },
    {
        id: '900321168',
        name: 'Wriezen, Bhf',
    },
    {
        id: '900143509',
        name: 'Frundsbergstr.',
    },
    {
        id: '900222148',
        name: 'Niemegk, Str. der Jugend',
    },
    {
        id: '900435174',
        name: 'Dörrwalde, Abzweig B 96',
    },
    {
        id: '900261341',
        name: 'Schönefeld (bei Berlin), Hans-Grade-Allee',
    },
    {
        id: '900340853',
        name: 'Grünow (bei Passow), Ost',
    },
    {
        id: '900470291',
        name: 'Cottbus, Waldweg',
    },
    {
        id: '900470408',
        name: 'Cottbus, Badesee Madlow',
    },
    {
        id: '900210590',
        name: 'Wustermark, Berliner Str.',
    },
    {
        id: '900435212',
        name: 'Altdöbern, Grundschule',
    },
    {
        id: '900220114',
        name: 'S Teltow Stadt',
    },
    {
        id: '900220740',
        name: 'Wilhelmshorst, Forstweg',
    },
    {
        id: '900340392',
        name: 'Karlshof (bei Prenzlau)',
    },
    {
        id: '900134513',
        name: 'Arnouxstr.',
    },
    {
        id: '900340443',
        name: 'Lützlow',
    },
    {
        id: '900205456',
        name: 'Neuruppin, Gildenhall Schule',
    },
    {
        id: '900445547',
        name: 'Cottbus, Groß Gaglow Studentenweg',
    },
    {
        id: '900435213',
        name: 'Altdöbern, Am Markt',
    },
    {
        id: '900063103',
        name: 'Knausplatz',
    },
    {
        id: '900203983',
        name: 'Liebenberg, Bergsdorfer Str.',
    },
    {
        id: '900245491',
        name: 'Kallinchen, Seestr.',
    },
    {
        id: '900445452',
        name: 'Cottbus, Gallinchen Sportpark',
    },
    {
        id: '900205450',
        name: 'Neuruppin, Fehrbelliner Str.',
    },
    {
        id: '900445453',
        name: 'Cottbus, Gallinchen Kutzeburger Weg',
    },
    {
        id: '900132505',
        name: 'Buchhorster Str.',
    },
    {
        id: '900089303',
        name: 'S Tegel',
    },
    {
        id: '900205442',
        name: 'Neuruppin, Artur-Becker-Str.',
    },
    {
        id: '900150008',
        name: 'Rhinstr./Gärtnerstr.',
    },
    {
        id: '900032452',
        name: 'Jaczostr.',
    },
    {
        id: '900205470',
        name: 'Neuruppin, Nauener Str.',
    },
    {
        id: '900340731',
        name: 'Wittenhof, Ausbau',
    },
    {
        id: '900009104',
        name: 'S+U Wedding',
    },
    {
        id: '900245753',
        name: 'Ludwigsfelde, Rousseau Allee',
    },
    {
        id: '900054103',
        name: 'U Eisenacher Str.',
    },
    {
        id: '900210237',
        name: 'Nennhausen, Feuerwehr',
    },
    {
        id: '900260882',
        name: 'Neuendorf (bei Teupitz), Dorf',
    },
    {
        id: '900210202',
        name: 'Nauen, Heinrich-Heine-Str.',
    },
    {
        id: '900340407',
        name: 'Klockow (UM), Schule',
    },
    {
        id: '900204002',
        name: 'Kreuzbruch, Hof 3',
    },
    {
        id: '900340888',
        name: 'Herrenhof (UM), Wendeschleife',
    },
    {
        id: '900205492',
        name: 'Neu-Cölln',
    },
    {
        id: '900340852',
        name: 'Grünow (bei Passow), Gemeindeamt',
    },
    {
        id: '900054192',
        name: 'Grunewaldstr.',
    },
    {
        id: '900470321',
        name: 'Cottbus, Spreestr.',
    },
    {
        id: '900055102',
        name: 'U Bayerischer Platz',
    },
    {
        id: '900260610',
        name: 'Bestensee, Motzener Str',
    },
    {
        id: '900134510',
        name: 'Kalvinistenweg',
    },
    {
        id: '900340794',
        name: 'Trebenow, Feuerwehr',
    },
    {
        id: '900260778',
        name: 'Königs Wusterhausen, Erich-Weinert-Str.',
    },
    {
        id: '900245734',
        name: 'Rangsdorf, Goethestr.',
    },
    {
        id: '900210250',
        name: 'Niebede, Dorf',
    },
    {
        id: '900220185',
        name: 'Päwesin',
    },
    {
        id: '900205480',
        name: 'Neuruppin, Stadion',
    },
    {
        id: '900210605',
        name: 'Bredow, Abzweig',
    },
    {
        id: '900350200',
        name: 'Ackermannshof',
    },
    {
        id: '900194015',
        name: 'Rudower Chaussee/Wegedornstr.',
    },
    {
        id: '900210608',
        name: 'Niederhof',
    },
    {
        id: '900350712',
        name: 'Schwanebeck (BAR), Thuner Str.',
    },
    {
        id: '900220929',
        name: 'Beelitz, Zeppelinstr.',
    },
    {
        id: '900341297',
        name: 'Zichow, Lindenweg Mitte',
    },
    {
        id: '900210386',
        name: 'Neukammer, Schwanebecker Weg',
    },
    {
        id: '900205654',
        name: 'Wittstock (Dosse), Zootzener Damm',
    },
    {
        id: '900340251',
        name: 'Brüssow, Markt',
    },
    {
        id: '900260789',
        name: 'Königs Wusterhausen, Landratsamt',
    },
    {
        id: '900261512',
        name: 'Lübben, Bhf',
    },
    {
        id: '900100515',
        name: 'Spandauer Str./Marienkirche',
    },
    {
        id: '900205644',
        name: 'Wittstock (Dosse), Schillerstr.',
    },
    {
        id: '900340363',
        name: 'Gerswalde, Haßlebener Siedlung',
    },
    {
        id: '900220055',
        name: 'Güterfelde, Berliner Str.',
    },
    {
        id: '900245038',
        name: 'Neubeeren, Dorf',
    },
    {
        id: '900245128',
        name: 'Jüterbog, Busbahnhof',
    },
    {
        id: '900220052',
        name: 'Güterfelde, Sägewerk',
    },
    {
        id: '900161003',
        name: 'Rummelsburger Str.',
    },
    {
        id: '900220051',
        name: 'Güterfelde, Friedenstr.',
    },
    {
        id: '900070303',
        name: 'Rixdorfer Str./Britzer Str.',
    },
    {
        id: '900445736',
        name: 'Jämlitz, Gasthaus',
    },
    {
        id: '900203845',
        name: 'Wolfslake, Waldbegegnungsstätte',
    },
    {
        id: '900445738',
        name: 'Jämlitz, Schule',
    },
    {
        id: '900075103',
        name: 'Sonnenallee/Pannierstr.',
    },
    {
        id: '900120546',
        name: 'Rummelsburger Platz',
    },
    {
        id: '900195507',
        name: 'Wolfmarsteig',
    },
    {
        id: '900210903',
        name: 'Brieselang, Friedrich-Engels-Str.',
    },
    {
        id: '900070155',
        name: 'Goldenes Horn Mitte',
    },
    {
        id: '900220925',
        name: 'Kähnsdorf, Am Seehügel',
    },
    {
        id: '900435153',
        name: 'Lauchhammer West, Franz-Mehring-Str.',
    },
    {
        id: '900470104',
        name: 'Cottbus, Am Lug',
    },
    {
        id: '900205657',
        name: 'Wulfersdorf (OPR), Ortsmitte',
    },
    {
        id: '900070254',
        name: 'Imbrosweg Ost',
    },
    {
        id: '900435135',
        name: 'Frauwalde, Gasthaus',
    },
    {
        id: '900261963',
        name: 'Uckro, Kita',
    },
    {
        id: '900340123',
        name: 'Angermünde, Leistenhof',
    },
    {
        id: '900205675',
        name: 'Zechlinerhütte, Zeltplatz',
    },
    {
        id: '900205674',
        name: 'Zechlinerhütte, A.-Wegener-Haus',
    },
    {
        id: '900470112',
        name: 'Cottbus, Am Fließ',
    },
    {
        id: '900083355',
        name: 'Selgenauer Weg',
    },
    {
        id: '900100041',
        name: 'Brunnenstr./Invalidenstr.',
    },
    {
        id: '900245722',
        name: 'Rosenthal, Feuerwehr',
    },
    {
        id: '900205670',
        name: 'Wustrau, Schule',
    },
    {
        id: '900070202',
        name: 'Dardanellenweg',
    },
    {
        id: '900245330',
        name: 'Dahme, Triftweg',
    },
    {
        id: '900321154',
        name: 'Schulzendorf (MOL), Bhf',
    },
    {
        id: '900220513',
        name: 'Stahnsdorf, Friedrich-Weißler-Platz',
    },
    {
        id: '900205667',
        name: 'Wusterhausen (Dosse), Tankstelle',
    },
    {
        id: '900005102',
        name: 'Corneliusbrücke',
    },
    {
        id: '900205665',
        name: 'Wusterhausen (Dosse), Schule',
    },
    {
        id: '900261327',
        name: 'Jetsch, Dorfstr.',
    },
    {
        id: '900260408',
        name: 'Drahnsdorf, Bhf',
    },
    {
        id: '900321076',
        name: 'Frankenfelde (MOL), Wriezener Str.',
    },
    {
        id: '900445723',
        name: 'Hornow, Vorwerk',
    },
    {
        id: '900210229',
        name: 'Nauen, Ulmenweg',
    },
    {
        id: '900470240',
        name: 'Cottbus, Saspow Schreberweg',
    },
    {
        id: '900205659',
        name: 'Wulfersdorf (OPR), Dorfstr.',
    },
    {
        id: '900210709',
        name: 'Dallgow-Döberitz, Am Langhaus',
    },
    {
        id: '900205626',
        name: 'Wittstock (Dosse), Käthe-Kollwitz-Str.',
    },
    {
        id: '900261353',
        name: 'Kasel-Golzig, Kreblitzer Weg',
    },
    {
        id: '900245278',
        name: 'Luckenwalde, An den Giebeln',
    },
    {
        id: '900220961',
        name: 'Klaistow, Dorf',
    },
    {
        id: '900076153',
        name: 'Geygerstr.',
    },
    {
        id: '900245406',
        name: 'Stülpe, Ließener Str.',
    },
    {
        id: '900017101',
        name: 'U Mehringdamm',
    },
    {
        id: '900245640',
        name: 'Berkenbrück (TF), Am Berg',
    },
    {
        id: '900320872',
        name: 'Prötzel, Prädikow',
    },
    {
        id: '900245352',
        name: 'Schlenzer, Dorfstr.',
    },
    {
        id: '900205591',
        name: 'Volkwig, Volkwiger Str.',
    },
    {
        id: '900205589',
        name: 'Volkwig, Dorf',
    },
    {
        id: '900261583',
        name: 'Luckau, Straßenmeisterei',
    },
    {
        id: '900435160',
        name: 'Arnsdorf, Guteborner Str.',
    },
    {
        id: '900311367',
        name: 'Eisenhüttenstadt, Ringstr.',
    },
    {
        id: '900340525',
        name: 'Prenzlau, Automeile',
    },
    {
        id: '900222184',
        name: 'Bad Belzig, Burg Eisenhardt',
    },
    {
        id: '900261582',
        name: 'Luckau, Nissanstr./Zaackoer Weg',
    },
    {
        id: '900220174',
        name: 'Bad Belzig, Busbahnhof',
    },
    {
        id: '900340972',
        name: 'Mürow, Kirche',
    },
    {
        id: '900152007',
        name: 'Falkenberg',
    },
    {
        id: '900205576',
        name: 'Tarmow, Ausbau',
    },
    {
        id: '900245056',
        name: 'Jüterbog, Werderscher Weg',
    },
    {
        id: '900435161',
        name: 'Arnsdorf, Flur',
    },
    {
        id: '900435170',
        name: 'Burkersdorf, Schmiede',
    },
    {
        id: '900205571',
        name: 'Storbeck, Kirche',
    },
    {
        id: '900340132',
        name: 'Angermünde, Sternfelder Weg',
    },
    {
        id: '900261383',
        name: 'Kreblitz, Dorfanger',
    },
    {
        id: '900075104',
        name: 'Fuldastr.',
    },
    {
        id: '900445166',
        name: 'Bagenz, Gasthaus',
    },
    {
        id: '900435154',
        name: 'Lauchhammer West, Fabrik 4',
    },
    {
        id: '900130502',
        name: 'Stiftsweg',
    },
    {
        id: '900130503',
        name: 'Klaustaler Str.',
    },
    {
        id: '900261762',
        name: 'Rietzneuendorf, Abzweig',
    },
    {
        id: '900205619',
        name: 'Wittstock (Dosse), Bohnekampweg',
    },
    {
        id: '900220996',
        name: 'Buchholz (bei Treuenbrietzen), Feuerwehr',
    },
    {
        id: '900004151',
        name: 'Nordische Botschaften/Adenauer-Stiftung',
    },
    {
        id: '900260455',
        name: 'Falkenhain, Kirche',
    },
    {
        id: '900261428',
        name: 'Landwehr',
    },
    {
        id: '900445971',
        name: 'Lauschütz, L 46',
    },
    {
        id: '900260388',
        name: 'Caule',
    },
    {
        id: '900340154',
        name: 'Frauenhagen (bei Angermünde), Mitte',
    },
    {
        id: '900261173',
        name: 'Golßen, Lindenstr.',
    },
    {
        id: '900261177',
        name: 'Golßen, Bahnhofstr.',
    },
    {
        id: '900005101',
        name: 'Budapester Str.',
    },
    {
        id: '900151010',
        name: 'Barther Str.',
    },
    {
        id: '900205609',
        name: 'Wildberg, Markt',
    },
    {
        id: '900013152',
        name: 'Oranienplatz',
    },
    {
        id: '900261858',
        name: 'Schöneiche (bei Dahme)',
    },
    {
        id: '900245096',
        name: 'Kaltenborn (TF), Kreuzung',
    },
    {
        id: '900132508',
        name: 'Edelweißstr.',
    },
    {
        id: '900041102',
        name: 'U Blissestr.',
    },
    {
        id: '900044102',
        name: 'Am Volkspark',
    },
    {
        id: '900340199',
        name: 'Klein Dölln',
    },
    {
        id: '900203939',
        name: 'Kurtschlag, Ausbau',
    },
    {
        id: '900360073',
        name: 'Frankfurt (Oder), Kliestow Frankfurter Weg',
    },
    {
        id: '900064359',
        name: 'Stanzer Zeile',
    },
    {
        id: '900021151',
        name: 'Marchstr.',
    },
    {
        id: '900029103',
        name: 'Falkenseer Platz',
    },
    {
        id: '900360063',
        name: 'Frankfurt (Oder), Hohenwalde Dorfstr.',
    },
    {
        id: '900110728',
        name: 'Michelangelostr. [Bushafen]',
    },
    {
        id: '900205288',
        name: 'Fretzdorf, Dorf',
    },
    {
        id: '900176533',
        name: 'Roseggerstr.',
    },
    {
        id: '900435300',
        name: 'Senftenberg, Busbahnhof',
    },
    {
        id: '900003202',
        name: 'Kirchstr./Alt-Moabit',
    },
    {
        id: '900261235',
        name: 'Groß Leine, Neue Dorfstr.',
    },
    {
        id: '900261364',
        name: 'Klein Leine',
    },
    {
        id: '900067253',
        name: 'Havensteinstr.',
    },
    {
        id: '900067302',
        name: 'St. Marien-Krankenhaus',
    },
    {
        id: '900067351',
        name: 'Blankenhainer Str.',
    },
    {
        id: '900067301',
        name: 'Brotteroder Str.',
    },
    {
        id: '900170004',
        name: 'S Ahrensfelde',
    },
    {
        id: '900435307',
        name: 'Guteborn, Mitte',
    },
    {
        id: '900175519',
        name: 'Nossener Str.',
    },
    {
        id: '900190002',
        name: 'Rathaus Treptow',
    },
    {
        id: '900064352',
        name: 'Jungfernstieg',
    },
    {
        id: '900064151',
        name: 'Promenadenstr.',
    },
    {
        id: '900340509',
        name: 'Prenzlau, An der Baumschule',
    },
    {
        id: '900140509',
        name: 'Rennbahnstr./Parkstr.',
    },
    {
        id: '900216016',
        name: 'Weisen, Kreuzung',
    },
    {
        id: '900360029',
        name: 'Frankfurt (Oder), Booßen Brücke',
    },
    {
        id: '900321166',
        name: 'Wölsickendorf',
    },
    {
        id: '900360092',
        name: 'Frankfurt (Oder), Lossow B 112',
    },
    {
        id: '900340282',
        name: 'Eickstedt, Abzweig',
    },
    {
        id: '900203947',
        name: 'Klein-Mutz, Dorfplatz',
    },
    {
        id: '900260424',
        name: 'Dürrenhofe, Kita',
    },
    {
        id: '900261842',
        name: 'Schlepzig, Buchenhain',
    },
    {
        id: '900205329',
        name: 'Heinrichsdorf (bei Wittstock)',
    },
    {
        id: '900261843',
        name: 'Schlepzig, Försterei',
    },
    {
        id: '900203946',
        name: 'Klein-Mutz, Bergsdorfer Str.',
    },
    {
        id: '900074151',
        name: 'Kettinger Str.',
    },
    {
        id: '900061101',
        name: 'U Walther-Schreiber-Platz',
    },
    {
        id: '900205322',
        name: 'Heiligengrabe, Bhf',
    },
    {
        id: '900175517',
        name: 'Janusz-Korczak-Str.',
    },
    {
        id: '900191001',
        name: 'S Baumschulenweg',
    },
    {
        id: '900140010',
        name: 'Roelckestr./Langhansstr.',
    },
    {
        id: '900205315',
        name: 'Großzerlang, Kolonie',
    },
    {
        id: '900140508',
        name: 'Parkstr./Amalienstr.',
    },
    {
        id: '900261208',
        name: 'Goyatz, Dorfstr.',
    },
    {
        id: '900340334',
        name: 'Groß Dölln, Kirche',
    },
    {
        id: '900036151',
        name: 'Schaltwerk',
    },
    {
        id: '900216045',
        name: 'Wittenberge, Schillerstr.',
    },
    {
        id: '900360033',
        name: 'Frankfurt (Oder), Booßen Bergstr.',
    },
    {
        id: '900205310',
        name: 'Gottberg, Bhf',
    },
    {
        id: '900261420',
        name: 'Lamsfeld, Kreuzung',
    },
    {
        id: '900064103',
        name: 'Boothstr.',
    },
    {
        id: '900067152',
        name: 'Stadion Lichterfelde',
    },
    {
        id: '900203949',
        name: 'Bergsdorf, Ausbau',
    },
    {
        id: '900261223',
        name: 'Gröditsch, Gasthaus',
    },
    {
        id: '900110027',
        name: 'Conrad-Blenkle-Str.',
    },
    {
        id: '900203927',
        name: 'Buchholz (bei Altglobsow)',
    },
    {
        id: '900203926',
        name: 'Burow (bei Altglobsow)',
    },
    {
        id: '900215931',
        name: 'Tüchen, I',
    },
    {
        id: '900205243',
        name: 'Blesendorf, Maulbeerwalder Str.',
    },
    {
        id: '900215929',
        name: 'Triglitz, Ausbau',
    },
    {
        id: '900120545',
        name: 'Tamara-Danz-Str.',
    },
    {
        id: '900205240',
        name: 'Blesendorf, Dorfplatz',
    },
    {
        id: '900350726',
        name: 'Tiefensee, Eberswalder Str.',
    },
    {
        id: '900260300',
        name: 'Biebersdorf, Kita',
    },
    {
        id: '900261491',
        name: 'Lübben, Am Ostbahnhof',
    },
    {
        id: '900083201',
        name: 'U Rudow',
    },
    {
        id: '900360045',
        name: 'Frankfurt (Oder), Goethestr.',
    },
    {
        id: '900050201',
        name: 'U Krumme Lanke',
    },
    {
        id: '900245254',
        name: 'Rohrbeck, Jüterboger Str.',
    },
    {
        id: '900079272',
        name: 'Weisestr.',
    },
    {
        id: '900210677',
        name: 'Tietzow, Am Reihenhaus',
    },
    {
        id: '900205226',
        name: 'Berlinchen, Dorfplatz',
    },
    {
        id: '900032155',
        name: 'Rodensteinstr.',
    },
    {
        id: '900032103',
        name: 'Weinmeisterhornweg',
    },
    {
        id: '900261418',
        name: 'Laasow (Spreewald)',
    },
    {
        id: '900110021',
        name: 'Kniprodestr./Danziger Str.',
    },
    {
        id: '900261222',
        name: 'Gröditsch, An den Wiesen',
    },
    {
        id: '900261240',
        name: 'Groß Leuthen, Wassermühle',
    },
    {
        id: '900110522',
        name: 'Am Friedrichshain/Hufelandstr.',
    },
    {
        id: '900216015',
        name: 'Weisen, I',
    },
    {
        id: '900067151',
        name: 'Gärtnerstr.',
    },
    {
        id: '900120544',
        name: 'East Side Gallery',
    },
    {
        id: '900261441',
        name: 'Leeskow (bei Lieberose)',
    },
    {
        id: '900216012',
        name: 'Waterloo, Dorf',
    },
    {
        id: '900216008',
        name: 'Wittenberge, Gehrenweg I',
    },
    {
        id: '900340139',
        name: 'Angermünde, Gehegemühle',
    },
    {
        id: '900261964',
        name: 'Ullersdorf',
    },
    {
        id: '900063301',
        name: 'Steglitzer Damm/Bismarckstr.',
    },
    {
        id: '900063104',
        name: 'Bismarckstr./Bergstr.',
    },
    {
        id: '900261610',
        name: 'Mochlitz, Abzweig',
    },
    {
        id: '900063151',
        name: 'Lauenburger Platz',
    },
    {
        id: '900215989',
        name: 'Vehlow, Schule',
    },
    {
        id: '900446368',
        name: 'Staakow (bei Beeskow)',
    },
    {
        id: '900215987',
        name: 'Vehlow, Minnashöh',
    },
    {
        id: '900120004',
        name: 'S+U Warschauer Str.',
    },
    {
        id: '900260316',
        name: 'Blasdorf, Dorfstr.',
    },
    {
        id: '900215986',
        name: 'Vehlow, Kindergarten',
    },
    {
        id: '900215985',
        name: 'Vehlow, Bahnhofstr.',
    },
    {
        id: '900110019',
        name: 'Am Friedrichshain',
    },
    {
        id: '900062252',
        name: 'Kieler Str.',
    },
    {
        id: '900052156',
        name: 'Badeweg',
    },
    {
        id: '900110520',
        name: 'Bötzowstr.',
    },
    {
        id: '900340265',
        name: 'Damme (UM), Kreuzung',
    },
    {
        id: '900044205',
        name: 'Birger-Forell-Platz',
    },
    {
        id: '900230149',
        name: 'Potsdam, Templiner Eck',
    },
    {
        id: '900020206',
        name: 'Pulsstr.',
    },
    {
        id: '900143513',
        name: 'Bucher Chaussee/Achillesstr.',
    },
    {
        id: '900205408',
        name: 'Lindow (Mark), Sportschule',
    },
    {
        id: '900078105',
        name: 'U Hermannplatz/Sonnenallee',
    },
    {
        id: '900203970',
        name: 'Bartelshof',
    },
    {
        id: '900360098',
        name: 'Frankfurt (Oder), Messering',
    },
    {
        id: '900341178',
        name: 'Schwedt, Steinstr.',
    },
    {
        id: '900320004',
        name: 'S Strausberg',
    },
    {
        id: '900470141',
        name: 'Cottbus, Döbbrick Dorfstr.',
    },
    {
        id: '900100006',
        name: 'S+U Alexanderplatz/Grunerstr.',
    },
    {
        id: '900435259',
        name: 'Barzig',
    },
    {
        id: '900470263',
        name: 'Cottbus, Skadow',
    },
    {
        id: '900205393',
        name: 'Kyritz, Waldschlößchen',
    },
    {
        id: '900360083',
        name: 'Frankfurt (Oder), Landesbehördenzentrum',
    },
    {
        id: '900311418',
        name: 'Groß Eichholz',
    },
    {
        id: '900205390',
        name: 'Kyritz, Birkenwäldchen',
    },
    {
        id: '900203967',
        name: 'Fürstenberg (Havel), Steinhavelmühle',
    },
    {
        id: '900470145',
        name: 'Cottbus, Döbbrick Wiesengrund',
    },
    {
        id: '900215994',
        name: 'Vehlow, Am Anger',
    },
    {
        id: '900205384',
        name: 'Kyritz, Kuckucksweg',
    },
    {
        id: '900340668',
        name: 'Prenzlau, Gymnasium Baustr.',
    },
    {
        id: '900205382',
        name: 'Kyritz, Eichenweg',
    },
    {
        id: '900215763',
        name: 'Perleberg, Alter Friedhof',
    },
    {
        id: '900020271',
        name: 'Mollwitzstr.',
    },
    {
        id: '900340611',
        name: 'Stegelitz, Dorf',
    },
    {
        id: '900260859',
        name: 'Motzen, Friedhof',
    },
    {
        id: '900350010',
        name: 'Biesdorf (MOL), Ortseingang',
    },
    {
        id: '900220579',
        name: 'Caputh, Wendeplatz',
    },
    {
        id: '900044104',
        name: 'Detmolder Str./Blissestr.',
    },
    {
        id: '900220573',
        name: 'Caputh, Schwielowsee',
    },
    {
        id: '900220578',
        name: 'Caputh, Feldstr.',
    },
    {
        id: '900220581',
        name: 'Caputh, Kirschanger',
    },
    {
        id: '900203978',
        name: 'Marienthal, Dorfstr.',
    },
    {
        id: '900220576',
        name: 'Caputh, Schloss',
    },
    {
        id: '900220575',
        name: 'Caputh, Lindenstr.',
    },
    {
        id: '900083252',
        name: 'Krokusstr.',
    },
    {
        id: '900350477',
        name: 'Ladeburg, Am Zollhaus',
    },
    {
        id: '900220574',
        name: 'Caputh, Schumannstr.',
    },
    {
        id: '900205421',
        name: 'Maulbeerwalde',
    },
    {
        id: '900083356',
        name: 'Landhaussiedlung',
    },
    {
        id: '900340129',
        name: 'Angermünde, Schillerplatz',
    },
    {
        id: '900470144',
        name: 'Cottbus, Döbbrick Dissener Weg',
    },
    {
        id: '900230155',
        name: 'Potsdam, Nesselgrund',
    },
    {
        id: '900171530',
        name: 'Altentreptower Str.',
    },
    {
        id: '900230154',
        name: 'Potsdam, Michendorfer Chaussee/Friedhof',
    },
    {
        id: '900083304',
        name: 'Pfarrer-Heß-Weg',
    },
    {
        id: '900230153',
        name: 'Potsdam, Deutscher Wetterdienst',
    },
    {
        id: '900230152',
        name: 'Potsdam, Forsthaus Templin',
    },
    {
        id: '900350011',
        name: 'Lüdersdorf, Gemeinde',
    },
    {
        id: '900260758',
        name: 'Klein Eichholz, Dorf',
    },
    {
        id: '900260904',
        name: 'Prieros, Siedlung',
    },
    {
        id: '900230151',
        name: 'Potsdam, Kieskutenberg',
    },
    {
        id: '900260862',
        name: 'Motzen, Mitte',
    },
    {
        id: '900260863',
        name: 'Motzen, Fontane-Klinik',
    },
    {
        id: '900260957',
        name: 'Senzig, Waldesruh',
    },
    {
        id: '900350156',
        name: 'Lindenberg (BAR), Dorf',
    },
    {
        id: '900216070',
        name: 'Wittenberge, Bahnstr.',
    },
    {
        id: '900350152',
        name: 'Groß Schönebeck, Bhf',
    },
    {
        id: '900205344',
        name: 'Kagar, Dorf',
    },
    {
        id: '900205343',
        name: 'Kagar, Gaststätte',
    },
    {
        id: '900037206',
        name: 'Weidenweg',
    },
    {
        id: '900260956',
        name: 'Senzig, Lindenstr.',
    },
    {
        id: '900260958',
        name: 'Senzig, Werftstr.',
    },
    {
        id: '900260955',
        name: 'Senzig, Heidestr.',
    },
    {
        id: '900260952',
        name: 'Senzig, Ahornallee',
    },
    {
        id: '900260954',
        name: 'Senzig, Birkenallee',
    },
    {
        id: '900260953',
        name: 'Senzig, Akazienallee',
    },
    {
        id: '900260618',
        name: 'Bindow, Bindowbrück',
    },
    {
        id: '900064278',
        name: 'S Lichterfelde Süd',
    },
    {
        id: '900220380',
        name: 'Stahnsdorf, Heinrich-Zille-Str.',
    },
    {
        id: '900260617',
        name: 'Bindow, Dorfstr.',
    },
    {
        id: '900140008',
        name: 'Rennbahnstr./Gustav-Adolf-Str.',
    },
    {
        id: '900321074',
        name: 'Frankenfelde (MOL), Abzweig',
    },
    {
        id: '900073305',
        name: 'Nahmitzer Damm',
    },
    {
        id: '900083251',
        name: 'Alt-Rudow/Köpenicker Str.',
    },
    {
        id: '900261997',
        name: 'Waltersdorf (bei Berlin), Apfelweg',
    },
    {
        id: '900205374',
        name: 'Krüllenkempe',
    },
    {
        id: '900215626',
        name: 'Meyenburg, Möbelwerk',
    },
    {
        id: '900341255',
        name: 'Wartin, Mitte',
    },
    {
        id: '900203961',
        name: 'Grüneberg, Bhf',
    },
    {
        id: '900350184',
        name: 'Schwanebeck (BAR), Am Friedhof',
    },
    {
        id: '900081254',
        name: 'Dröpkeweg',
    },
    {
        id: '900205364',
        name: 'Königsberg, Dorfplatz',
    },
    {
        id: '900215091',
        name: 'Abbendorf, Mitte',
    },
    {
        id: '900066201',
        name: 'Carstennstr./Ringstr.',
    },
    {
        id: '900435269',
        name: 'Hosena, Schule',
    },
    {
        id: '900066205',
        name: 'Hochbaumstr.',
    },
    {
        id: '900066255',
        name: 'Züricher Str.',
    },
    {
        id: '900203959',
        name: 'Liebenberg, Fichten',
    },
    {
        id: '900360031',
        name: 'Frankfurt (Oder), Booßen Kleine Str.',
    },
    {
        id: '900320876',
        name: 'Prötzel, Schule',
    },
    {
        id: '900320567',
        name: 'Strausberg, Ernst-Thälmann-Str.',
    },
    {
        id: '900216077',
        name: 'Wittenberge, Rathaus',
    },
    {
        id: '900350146',
        name: 'Ahrensfelde, Heinestr.',
    },
    {
        id: '900350148',
        name: 'Ahrensfelde, Ulmenallee',
    },
    {
        id: '900140501',
        name: 'Günter-Litfin-Str.',
    },
    {
        id: '900215473',
        name: 'Klein Lüben, Dorf',
    },
    {
        id: '900215461',
        name: 'Kehrberg, Siedlung',
    },
    {
        id: '900220062',
        name: 'Sputendorf, Abzweig',
    },
    {
        id: '900350175',
        name: 'Zepernick, Schweizer Str.',
    },
    {
        id: '900245215',
        name: 'Frankenfelde (TF), Mitte',
    },
    {
        id: '900321195',
        name: 'Alttrebbin, Abzweig Wubrigsberg',
    },
    {
        id: '900245206',
        name: 'Frankenfelde (TF), Dorfstr.',
    },
    {
        id: '900350173',
        name: 'Zepernick, Inntaler Str.',
    },
    {
        id: '900245039',
        name: 'Neubeeren, Sputendorfer Ch.',
    },
    {
        id: '900220081',
        name: 'Teltow, Bremer Str.',
    },
    {
        id: '900311081',
        name: 'Werder (bei Kossenblatt)',
    },
    {
        id: '900220082',
        name: 'Teltow, Iserstr. Süd',
    },
    {
        id: '900341151',
        name: 'Schwedt, PCK Str. F',
    },
    {
        id: '900220071',
        name: 'Teltow, Havelstr.',
    },
    {
        id: '900340355',
        name: 'Hammelstall (bei Brüssow)',
    },
    {
        id: '900175004',
        name: 'U Kaulsdorf-Nord',
    },
    {
        id: '900131001',
        name: 'Schillerstr.',
    },
    {
        id: '900131519',
        name: 'Waldemarstr.',
    },
    {
        id: '900131006',
        name: 'Nordend',
    },
    {
        id: '900075151',
        name: 'Wildenbruchplatz',
    },
    {
        id: '900210304',
        name: 'Wassersuppe, Siedlung',
    },
    {
        id: '900175002',
        name: 'S Kaulsdorf',
    },
    {
        id: '900220094',
        name: 'Teltow, Iserstr./Gesundheitszentrum',
    },
    {
        id: '900210302',
        name: 'Wassersuppe, Ausbau',
    },
    {
        id: '900210303',
        name: 'Wassersuppe, Dorfstr.',
    },
    {
        id: '900096362',
        name: 'Tiefenseer Str.',
    },
    {
        id: '900245447',
        name: 'Dümde, Am Dorfring',
    },
    {
        id: '900245008',
        name: 'Kemnitz (TF), Kemnitzer Hauptstr.',
    },
    {
        id: '900210485',
        name: 'Görne',
    },
    {
        id: '900210181',
        name: 'Kietz (HVL)',
    },
    {
        id: '900350544',
        name: 'Lanke, Obersee',
    },
    {
        id: '900203708',
        name: 'Löwenberg (Mark), Abzweig Hoppenrade',
    },
    {
        id: '900210246',
        name: 'Rathenow, Neufriedrichsdorf',
    },
    {
        id: '900181001',
        name: 'Wilhelminenhofstr./Edisonstr.',
    },
    {
        id: '900311616',
        name: 'Wellmitz, Ortseingang',
    },
    {
        id: '4235',
        name: 'Zempin, Bhf',
    },
    {
        id: '4244',
        name: 'Seebad Heringsdorf, Bhf Neuhof',
    },
    {
        id: '4133',
        name: 'Stubbenfelde, Bhf',
    },
    {
        id: '900350166',
        name: 'Schwanebeck (BAR), Dorf',
    },
    {
        id: '900092201',
        name: 'S Frohnau',
    },
    {
        id: '900135503',
        name: 'Sudauer Str.',
    },
    {
        id: '900210487',
        name: 'Dickte',
    },
    {
        id: '900320614',
        name: 'Eggersdorf (Strausberg), Birkenstr.',
    },
    {
        id: '4134',
        name: 'Kölpinsee, Bhf',
    },
    {
        id: '900320613',
        name: 'Eggersdorf (Strausberg), Grenzstr.',
    },
    {
        id: '4242',
        name: 'Schmollensee, Bhf',
    },
    {
        id: '900320615',
        name: 'Eggersdorf (Strausberg), Kiefernstr.',
    },
    {
        id: '000312569002',
        name: 'Triepkendorf, Neubau',
    },
    {
        id: '900245267',
        name: 'Frankenförde, In der Aue',
    },
    {
        id: '900043172',
        name: 'U Blissestr./Uhlandstr.',
    },
    {
        id: '900210298',
        name: 'Strodehne, Dorfstr.',
    },
    {
        id: '900085202',
        name: 'U Franz-Neumann-Platz',
    },
    {
        id: '900200043',
        name: 'Nassenheide, Bhf',
    },
    {
        id: '900353259',
        name: 'Werftpfuhl, Dorf/B 158',
    },
    {
        id: '900210047',
        name: 'Böhne, Dorf',
    },
    {
        id: '900340585',
        name: 'Schlepkow',
    },
    {
        id: '900210307',
        name: 'Böhne, Wilhelminenhof',
    },
    {
        id: '900210098',
        name: 'Böhne, Möthlowshof',
    },
    {
        id: '900110710',
        name: 'Björnsonstr.',
    },
    {
        id: '900210044',
        name: 'Bahnitz',
    },
    {
        id: '900350303',
        name: 'Börnicke (BAR)',
    },
    {
        id: '900340453',
        name: 'Lychen, Krankenhaus',
    },
    {
        id: '900170527',
        name: 'Langhoffstr.',
    },
    {
        id: '900415212',
        name: 'Kirchhain, Berg-Grundschule',
    },
    {
        id: '900310001',
        name: 'Fürstenwalde, Bhf',
    },
    {
        id: '900070402',
        name: 'Trabrennbahn',
    },
    {
        id: '900340818',
        name: 'Prenzlau, Winterfeldstr.',
    },
    {
        id: '900070452',
        name: 'Glärnischweg',
    },
    {
        id: '900435695',
        name: 'Raddusch, Slawenburg',
    },
    {
        id: '900340533',
        name: 'Prenzlau, Kietzstr.',
    },
    {
        id: '900350765',
        name: 'Werneuchen, Altstadt',
    },
    {
        id: '900067201',
        name: 'Lankwitz Kirche',
    },
    {
        id: '900435696',
        name: 'Raddusch, Abzweig',
    },
    {
        id: '900203695',
        name: 'Teschendorf, Griebener Weg',
    },
    {
        id: '900200041',
        name: 'Sachsenhausen, Bhf',
    },
    {
        id: '900350792',
        name: 'Zepernick, Am Heidehaus',
    },
    {
        id: '900200005',
        name: 'S Oranienburg',
    },
    {
        id: '900350909',
        name: 'Schwanebeck (BAR), Neue Kärntner Str.',
    },
    {
        id: '900204039',
        name: 'Gransee, Menzer Chaussee',
    },
    {
        id: '900350688',
        name: 'Schwanebeck (BAR), Genfer Platz',
    },
    {
        id: '900084101',
        name: 'S Wilhelmsruh',
    },
    {
        id: '900200013',
        name: 'S Mühlenbeck-Mönchmühle',
    },
    {
        id: '900350690',
        name: 'Schwanebeck (BAR), Altonaer Str.',
    },
    {
        id: '900350696',
        name: 'Schwanebeck (BAR), Gletscherstr.',
    },
    {
        id: '900340224',
        name: 'Beenz (bei Lychen)',
    },
    {
        id: '900350695',
        name: 'Schwanebeck (BAR), Schwanebecker Str.',
    },
    {
        id: '900170013',
        name: 'Landsberger Allee/Blumberger Damm',
    },
    {
        id: '900084103',
        name: 'Kopenhagener Str./Flottenstr.',
    },
    {
        id: '900161007',
        name: 'Sewanstr./Volkradstr.',
    },
    {
        id: '900170510',
        name: 'Glambecker Ring',
    },
    {
        id: '900170012',
        name: 'Lea-Grundig-Str.',
    },
    {
        id: '900203699',
        name: 'Buberow, Kreuzung Meseberg/Buberow',
    },
    {
        id: '900200020',
        name: 'Hennigsdorf, Stolpe Süd',
    },
    {
        id: '900340233',
        name: 'Birkenhain (UM), Abzweig',
    },
    {
        id: '900170707',
        name: 'Köthener Str.',
    },
    {
        id: '900203696',
        name: 'Grüneberg, Abzweig',
    },
    {
        id: '900200025',
        name: 'Hohen Neuendorf, Schönfließer Str.',
    },
    {
        id: '900160003',
        name: 'S Nöldnerplatz',
    },
    {
        id: '900200027',
        name: 'Schildow, Haydnstr.',
    },
    {
        id: '900085203',
        name: 'U Residenzstr.',
    },
    {
        id: '900210299',
        name: 'Strodehne, Scheunstelle',
    },
    {
        id: '900204040',
        name: 'Klein-Mutz, Zehdenicker Str.',
    },
    {
        id: '900120001',
        name: 'S+U Frankfurter Allee',
    },
    {
        id: '900350834',
        name: 'Zepernick, Fontanestr.',
    },
    {
        id: '900311488',
        name: 'Müllrose, Sportplatz',
    },
    {
        id: '900350581',
        name: 'Melchow, Siedlung',
    },
    {
        id: '900086102',
        name: 'U Kurt-Schumacher-Platz',
    },
    {
        id: '900061702',
        name: 'U Friedrich-Wilhelm-Platz',
    },
    {
        id: '900171542',
        name: 'Waldbacher Weg',
    },
    {
        id: '900027291',
        name: 'Papenberger Weg',
    },
    {
        id: '900261026',
        name: 'Wildau, Gewerbepark Süd',
    },
    {
        id: '900027258',
        name: 'Rustweg',
    },
    {
        id: '900261027',
        name: 'Wildau, Albertusstr.',
    },
    {
        id: '900048155',
        name: 'Hasensprung',
    },
    {
        id: '900340457',
        name: 'Mahlendorf, Abzweig',
    },
    {
        id: '900048110',
        name: 'Erdener Str.',
    },
    {
        id: '900340201',
        name: 'Aalkasten',
    },
    {
        id: '900048156',
        name: 'Herbertstr.',
    },
    {
        id: '900196510',
        name: 'Sausenberger Str.',
    },
    {
        id: '900350561',
        name: 'Joachimsthal, Wohnpark',
    },
    {
        id: '900196511',
        name: 'Zur Gartenstadt',
    },
    {
        id: '900196003',
        name: 'Grottewitzstr.',
    },
    {
        id: '900310103',
        name: 'Bad Saarow, Alte Eichen',
    },
    {
        id: '900340753',
        name: 'Dollshof',
    },
    {
        id: '900210563',
        name: 'Gutenpaaren, Gutenpaarener Dorfstr.',
    },
    {
        id: '900350838',
        name: 'Zepernick, Seniorenheim',
    },
    {
        id: '900340312',
        name: 'Gandenitz, Dorf',
    },
    {
        id: '900445081',
        name: 'Heinersbrück, Radewiese Friedhof',
    },
    {
        id: '900350580',
        name: 'Melchow, Dorf',
    },
    {
        id: '900245433',
        name: 'Dabendorf, Kornweihenweg',
    },
    {
        id: '900045159',
        name: 'Sodener Str.',
    },
    {
        id: '900435583',
        name: 'Leeskow',
    },
    {
        id: '900435592',
        name: 'Lichtenau',
    },
    {
        id: '900341256',
        name: 'Wartin, Nord',
    },
    {
        id: '900340748',
        name: 'Wallmow, Schule',
    },
    {
        id: '900046301',
        name: 'Berkaer Str./Breite Str.',
    },
    {
        id: '900046352',
        name: 'Sulzaer Str.',
    },
    {
        id: '900245341',
        name: 'Kolzenburg, Erlengraben',
    },
    {
        id: '900061102',
        name: 'U Friedrich-Wilhelm-Platz',
    },
    {
        id: '900311485',
        name: 'Müllrose, Neubau',
    },
    {
        id: '900045160',
        name: 'Binger Str.',
    },
    {
        id: '900064153',
        name: 'Hochbergweg',
    },
    {
        id: '900045101',
        name: 'U Rüdesheimer Platz',
    },
    {
        id: '900245422',
        name: 'Baruth, Feldstr.',
    },
    {
        id: '900045103',
        name: 'Wiesbadener Str./Laubacher Str.',
    },
    {
        id: '900311487',
        name: 'Müllrose, Pflegeheim B 87',
    },
    {
        id: '900261053',
        name: 'Körbiskrug, Seeidyll',
    },
    {
        id: '900245336',
        name: 'Woltersdorf (TF), Berliner Chaussee',
    },
    {
        id: '900222047',
        name: 'Brück, Rottstock',
    },
    {
        id: '900222046',
        name: 'Brück, Stromtal',
    },
    {
        id: '900340510',
        name: 'Prenzlau, An der Alten Sparkasse',
    },
    {
        id: '900260005',
        name: 'Flughafen BER - Terminal 5',
    },
    {
        id: '900311540',
        name: 'Ragow (LOS), Dorf',
    },
    {
        id: '900170507',
        name: 'Köthener Str.',
    },
    {
        id: '900310983',
        name: 'Ragow (LOS), Försterei',
    },
    {
        id: '900011155',
        name: 'Transvaalstr.',
    },
    {
        id: '900100001',
        name: 'S+U Friedrichstr.',
    },
    {
        id: '900078171',
        name: 'U Hermannplatz',
    },
    {
        id: '900078170',
        name: 'U Hermannplatz',
    },
    {
        id: '900445267',
        name: 'Burg, Lindenstr.',
    },
    {
        id: '900011103',
        name: 'Otawistr.',
    },
    {
        id: '900011154',
        name: 'Nachtigalplatz',
    },
    {
        id: '900311063',
        name: 'Tauche (bei Beeskow), Am Bahnhof',
    },
    {
        id: '900350804',
        name: 'Zerpenschleuse, Dorf',
    },
    {
        id: '900340551',
        name: 'Prenzlau, Siedlungsstr.',
    },
    {
        id: '900080181',
        name: 'Betriebshof Britz',
    },
    {
        id: '900310115',
        name: 'Bad Saarow, Hafen',
    },
    {
        id: '900016254',
        name: 'Wilmsstr.',
    },
    {
        id: '900310106',
        name: 'Bad Saarow, Zum Kurpark',
    },
    {
        id: '900210082',
        name: 'Großderschau, Lenning',
    },
    {
        id: '900210018',
        name: 'Rübehorst',
    },
    {
        id: '900210330',
        name: 'Buchhorst',
    },
    {
        id: '900350459',
        name: 'Groß Schönebeck, Forstwerkstatt',
    },
    {
        id: '900261506',
        name: 'Lübben, Laubenstr.',
    },
    {
        id: '900215747',
        name: 'Pritzwalk, West',
    },
    {
        id: '900044201',
        name: 'U Berliner Str.',
    },
    {
        id: '900435636',
        name: 'Lubochow',
    },
    {
        id: '900210267',
        name: 'Prietzen',
    },
    {
        id: '900350767',
        name: 'Werneuchen, Weißdornweg',
    },
    {
        id: '900063453',
        name: 'Hünefeldzeile',
    },
    {
        id: '900340694',
        name: 'Trampe (UM), Dorf',
    },
    {
        id: '900311005',
        name: 'Sauen',
    },
    {
        id: '900310984',
        name: 'Ranzig, Dorf',
    },
    {
        id: '900310114',
        name: 'Bad Saarow, Platanenstr.',
    },
    {
        id: '900340276',
        name: 'Dorettenhof',
    },
    {
        id: '900203725',
        name: 'Zehdenick, Karlshof',
    },
    {
        id: '900006103',
        name: 'Residenzstr./Reginhardstr.',
    },
    {
        id: '900203724',
        name: 'Zehdenick, Märkische Höhe',
    },
    {
        id: '900230179',
        name: 'Potsdam, Tierheim',
    },
    {
        id: '900350577',
        name: 'Marienwerder, Kirche',
    },
    {
        id: '900210309',
        name: 'Witzke',
    },
    {
        id: '900340571',
        name: 'Röddelin, Ausbau',
    },
    {
        id: '900058102',
        name: 'S Priesterweg',
    },
    {
        id: '900040151',
        name: 'Lehniner Platz/Schaubühne',
    },
    {
        id: '900082103',
        name: 'Kolibriweg',
    },
    {
        id: '900340230',
        name: 'Beutel, Mitte',
    },
    {
        id: '900224941',
        name: 'Neuendorf (bei Brück), West',
    },
    {
        id: '900350739',
        name: 'Ützdorf, Tierzucht',
    },
    {
        id: '900310119',
        name: 'Bad Saarow, Uferstr.',
    },
    {
        id: '900350738',
        name: 'Ützdorf, Dorf',
    },
    {
        id: '900203602',
        name: 'Friedrichsthal (OHV), Havelaue',
    },
    {
        id: '900340431',
        name: 'Lindenhagen, Abzweig',
    },
    {
        id: '900340080',
        name: 'Beutel, Waldhus',
    },
    {
        id: '900203002',
        name: 'Oranienburg, Bernauer Str.',
    },
    {
        id: '900032102',
        name: 'Heerstr./Wilhelmstr.',
    },
    {
        id: '900085262',
        name: 'Breitkopfstr.',
    },
    {
        id: '900230159',
        name: 'Potsdam, Rote Kaserne',
    },
    {
        id: '900003155',
        name: 'Rathaus Tiergarten',
    },
    {
        id: '900350454',
        name: 'Gorinsee, Siedlung',
    },
    {
        id: '900230232',
        name: 'Potsdam, Campus Jungfernsee/Nedlitzer Str.',
    },
    {
        id: '900311151',
        name: 'Fürstenwalde, Feuerwehr',
    },
    {
        id: '900341147',
        name: 'Schwedt, Odercenter',
    },
    {
        id: '900340587',
        name: 'Schmachtenhagen (UM), Abzweig',
    },
    {
        id: '900039148',
        name: 'Leonardo-da-Vinci-Str.',
    },
    {
        id: '900039149',
        name: 'Rex-Waite-Str.',
    },
    {
        id: '900051202',
        name: 'U Breitenbachplatz',
    },
    {
        id: '900311104',
        name: 'Fürstenwalde, Buchenweg',
    },
    {
        id: '900310108',
        name: 'Bad Saarow, Hotel Pieskow',
    },
    {
        id: '900340337',
        name: 'Groß Sperrenwalde, Abzweig',
    },
    {
        id: '900120542',
        name: 'Forckenbeckplatz',
    },
    {
        id: '900016151',
        name: 'Marheinekeplatz',
    },
    {
        id: '900120517',
        name: 'Niederbarnimstr.',
    },
    {
        id: '900039102',
        name: 'Alt-Kladow',
    },
    {
        id: '900018101',
        name: 'U Jakob-Kaiser-Platz',
    },
    {
        id: '900203493',
        name: 'Beetz, Charlottenhof',
    },
    {
        id: '900162505',
        name: 'Rheinsteinstr.',
    },
    {
        id: '900203494',
        name: 'Ludwigsaue, Försterei Neukammer',
    },
    {
        id: '900162007',
        name: 'Marksburgstr.',
    },
    {
        id: '900310023',
        name: 'Fürstenwalde, Kastanienweg',
    },
    {
        id: '900203481',
        name: 'Hohenbruch, Teerofen',
    },
    {
        id: '900350679',
        name: 'Schönwalde (BAR), Gemeinde',
    },
    {
        id: '900220083',
        name: 'Teltow, Lilienstr.',
    },
    {
        id: '900341267',
        name: 'Wendemark, Lindenallee',
    },
    {
        id: '900081251',
        name: 'Rufacher Weg',
    },
    {
        id: '900002203',
        name: 'Stendaler Str.',
    },
    {
        id: '900310757',
        name: 'Diensdorf-Radlow, Fischerhütte',
    },
    {
        id: '900350666',
        name: 'Schönerlinde (BAR), Dorfstr.',
    },
    {
        id: '900100513',
        name: 'U Unter den Linden',
    },
    {
        id: '900350667',
        name: 'Schönerlinde (BAR), Schönerlinder Chaussee',
    },
    {
        id: '900350682',
        name: 'Schönwalde (BAR), Mühle',
    },
    {
        id: '900220402',
        name: 'Teltow, An den Eichen',
    },
    {
        id: '900310797',
        name: 'Fürstenwalde, Mandelstr.',
    },
    {
        id: '900002202',
        name: 'Wilsnacker Str.',
    },
    {
        id: '900350235',
        name: 'Basdorf (BAR), Bhf/B109',
    },
    {
        id: '900210815',
        name: 'Rathenow, Scharnhorststr.',
    },
    {
        id: '900310756',
        name: 'Diensdorf-Radlow, Ferienhotel',
    },
    {
        id: '900310780',
        name: 'Fürstenwalde, Friedhof',
    },
    {
        id: '900310118',
        name: 'Bad Saarow, Theresienhof',
    },
    {
        id: '900085208',
        name: 'Emmentaler Str./Reginhardstr.',
    },
    {
        id: '900446021',
        name: 'Lübbinchen, B 320/Vorwerkstr.',
    },
    {
        id: '900341033',
        name: 'Polßen, Nord',
    },
    {
        id: '900310100',
        name: 'Bad Saarow, Jugendherberge',
    },
    {
        id: '900350525',
        name: 'Klosterfelde, Schule',
    },
    {
        id: '900162004',
        name: 'Treskowallee/HTW',
    },
    {
        id: '900171534',
        name: 'Grüne Aue',
    },
    {
        id: '900350664',
        name: 'Schönerlinde (BAR), Kirche',
    },
    {
        id: '900175547',
        name: 'Penkuner Weg',
    },
    {
        id: '900007103',
        name: 'U Voltastr.',
    },
    {
        id: '900341173',
        name: 'Schwedt, ZOB',
    },
    {
        id: '900210808',
        name: 'Rathenow, Karl-Marx-Platz',
    },
    {
        id: '900340679',
        name: 'Templin, Schleusenbrücke',
    },
    {
        id: '900210900',
        name: 'Brieselang, Finkenkruger Str.',
    },
    {
        id: '900203601',
        name: 'Fichtengrund',
    },
    {
        id: '900210825',
        name: 'Rathenow, Waldschloß',
    },
    {
        id: '900210902',
        name: 'Brieselang, Amselweg',
    },
    {
        id: '900203604',
        name: 'Malz, Grabowsee Fähre',
    },
    {
        id: '900203605',
        name: 'Malz, Schleuse',
    },
    {
        id: '900203606',
        name: 'Malz, Am Gang',
    },
    {
        id: '900203607',
        name: 'Malz, Anker',
    },
    {
        id: '900310112',
        name: 'Bad Saarow, Markgrafenplatz',
    },
    {
        id: '900176522',
        name: 'Am Kornfeld',
    },
    {
        id: '900210599',
        name: 'Zeestow, Dorf',
    },
    {
        id: '900353148',
        name: 'Danewitz, Kirche',
    },
    {
        id: '900210909',
        name: 'Brieselang, Lindenstr.',
    },
    {
        id: '900350651',
        name: 'Rüdnitz, Siedlung',
    },
    {
        id: '900340635',
        name: 'Templin, Forstamt',
    },
    {
        id: '900175542',
        name: 'Franzburger Str.',
    },
    {
        id: '900350647',
        name: 'Rüdnitz, Bahnhofstr.',
    },
    {
        id: '900210905',
        name: 'Brieselang, Kollwitzstr.',
    },
    {
        id: '900210904',
        name: 'Brieselang, Wiesenweg',
    },
    {
        id: '900120516',
        name: 'Bersarinplatz',
    },
    {
        id: '900077271',
        name: 'Michael-Bohnen-Ring',
    },
    {
        id: '900070154',
        name: 'Didostr.',
    },
    {
        id: '900210784',
        name: 'Rathenow, Fehrbelliner Str.',
    },
    {
        id: '900210824',
        name: 'Rathenow, Waldesruh',
    },
    {
        id: '900203513',
        name: 'Mühlenbeck, H.-Grüneberg-Str.',
    },
    {
        id: '900085255',
        name: 'Lampesteig',
    },
    {
        id: '900085209',
        name: 'Klemkestr.',
    },
    {
        id: '900176523',
        name: 'Kressenweg',
    },
    {
        id: '900203531',
        name: 'Nassenheide, Birkhorst',
    },
    {
        id: '900203532',
        name: 'Freienhagen, Dorfstr.',
    },
    {
        id: '900203533',
        name: 'Freienhagen, Siedlung',
    },
    {
        id: '900310101',
        name: 'Bad Saarow, Caritas',
    },
    {
        id: '900081250',
        name: 'Heinrich-Mann-Oberschule',
    },
    {
        id: '900203537',
        name: 'Neuholland, Erzgräber',
    },
    {
        id: '900340651',
        name: 'Fährkrug, Bhf',
    },
    {
        id: '900210816',
        name: 'Rathenow, Ruppiner Str.',
    },
    {
        id: '900350280',
        name: 'Biesenthal, Ambulatorium',
    },
    {
        id: '900350284',
        name: 'Biesenthal, Markt',
    },
    {
        id: '900003204',
        name: 'Kleiner Tiergarten',
    },
    {
        id: '900350282',
        name: 'Biesenthal, Schule',
    },
    {
        id: '900340673',
        name: 'Templin, Parkstr.',
    },
    {
        id: '900350649',
        name: 'Rüdnitz, Dorf',
    },
    {
        id: '900051203',
        name: 'Waldfriedhof Dahlem',
    },
    {
        id: '900445164',
        name: 'Bagenz, Ausbau',
    },
    {
        id: '900350287',
        name: 'Biesenthal, Wullwinkel',
    },
    {
        id: '900064204',
        name: 'Mercatorweg',
    },
    {
        id: '900203442',
        name: 'Liebenwalde, Havelstr.',
    },
    {
        id: '900203441',
        name: 'Liebenwalde, Neuholländer Chaussee',
    },
    {
        id: '900310740',
        name: 'Bornow, Dorf',
    },
    {
        id: '900435910',
        name: 'Wormlage, Gaststätte',
    },
    {
        id: '900203681',
        name: 'Schwante, Pappelweg',
    },
    {
        id: '900210035',
        name: 'Buschow, Dorf',
    },
    {
        id: '900203320',
        name: 'Oranienburg, Hubertusstr.',
    },
    {
        id: '900203321',
        name: 'Oranienburg, Hochschule der Polizei',
    },
    {
        id: '900210283',
        name: 'Rhinow, Werner-Seelenbinder-Str.',
    },
    {
        id: '900245385',
        name: 'Groß Kienitz, Am Weidendamm',
    },
    {
        id: '500000551002',
        name: 'Krajnik Dolny',
    },
    {
        id: '500000551001',
        name: 'Krajnik Dolny',
    },
    {
        id: '900087101',
        name: 'U Scharnweberstr.',
    },
    {
        id: '900086103',
        name: 'Eichborndamm/Antonienstr.',
    },
    {
        id: '900096456',
        name: 'Kienhorststr.',
    },
    {
        id: '900245383',
        name: 'Dahlewitz, Mittelstr.',
    },
    {
        id: '900210258',
        name: 'Premnitz, Dachsberg',
    },
    {
        id: '900210253',
        name: 'Premnitz, Oberschule',
    },
    {
        id: '900310747',
        name: 'Buckow (bei Beeskow), Dorf',
    },
    {
        id: '900340766',
        name: 'Templin, Knehdener Str. Mitte',
    },
    {
        id: '900340550',
        name: 'Prenzlau, Schwedter Str.',
    },
    {
        id: '900203332',
        name: 'Bärenklau (OHV), Wendemarker Weg',
    },
    {
        id: '900204003',
        name: 'Bärenklau (OHV), Bhf',
    },
    {
        id: '900096407',
        name: 'U Wittenau',
    },
    {
        id: '900077202',
        name: 'Forsthausallee',
    },
    {
        id: '900341265',
        name: 'Wendemark, Friedhof',
    },
    {
        id: '900435819',
        name: 'Schönfeld (bei Lübbenau)',
    },
    {
        id: '900203682',
        name: 'Schwante, Mittelweg',
    },
    {
        id: '900018103',
        name: 'Weltlingerbrücke',
    },
    {
        id: '900203305',
        name: 'Oranienburg, Villacher Str.',
    },
    {
        id: '900340273',
        name: 'Densow, Dorf',
    },
    {
        id: '900203687',
        name: 'Schwante, Kuckswinkel',
    },
    {
        id: '900310739',
        name: 'Bornow, Ausbau',
    },
    {
        id: '900221024',
        name: 'Döberitz (bei Premnitz), Seelensdorfer Weg',
    },
    {
        id: '900245386',
        name: 'Groß Kienitz, Gr. Kienitzer Dorfstr.',
    },
    {
        id: '900016101',
        name: 'U Gneisenaustr.',
    },
    {
        id: '900203315',
        name: 'Oranienburg, Am Flöhnberg',
    },
    {
        id: '900130500',
        name: 'S+U Pankow/Granitzstr.',
    },
    {
        id: '900435745',
        name: 'Repten',
    },
    {
        id: '900203685',
        name: 'Wolfslake',
    },
    {
        id: '900435751',
        name: 'Rettchensdorf',
    },
    {
        id: '900097101',
        name: 'Holzhauser Str./Schubartstr.',
    },
    {
        id: '900203307',
        name: 'Oranienburg, Südcenter',
    },
    {
        id: '900210723',
        name: 'Döberitz (bei Premnitz), Werk',
    },
    {
        id: '900203308',
        name: 'Oranienburg, Saarlandstr.',
    },
    {
        id: '900100080',
        name: 'U Weinmeisterstr./Gipsstr.',
    },
    {
        id: '900203683',
        name: 'Vehlefanz, Perwenitzer Chaussee',
    },
    {
        id: '900034160',
        name: 'Daumstr./Rhenaniastr.',
    },
    {
        id: '900435776',
        name: 'Saßleben, L54',
    },
    {
        id: '900245638',
        name: 'Groß Kienitz, H.-Gebauer-Str.',
    },
    {
        id: '900080301',
        name: 'Windröschenweg',
    },
    {
        id: '900203361',
        name: 'Hennigsdorf, Hauptstr.',
    },
    {
        id: '900203362',
        name: 'Hennigsdorf, Neuendorfstr.',
    },
    {
        id: '900310786',
        name: 'Fürstenwalde, Grüner Grund',
    },
    {
        id: '900210186',
        name: 'Kotzen, Neubau',
    },
    {
        id: '900203422',
        name: 'Velten, Bahnstr.',
    },
    {
        id: '900310010',
        name: 'Fürstenwalde, Süd',
    },
    {
        id: '900310924',
        name: 'Lindenberg (Mark), Dorf',
    },
    {
        id: '900245749',
        name: 'Luckenwalde, Boulevard/Rathaus',
    },
    {
        id: '900340641',
        name: 'Templin, Am Mühlentor',
    },
    {
        id: '900340557',
        name: 'Prenzlau, Uckermarkkaserne',
    },
    {
        id: '900220010',
        name: 'Potsdam, Golm',
    },
    {
        id: '900088202',
        name: 'U Borsigwerke',
    },
    {
        id: '900008158',
        name: 'Schererstr.',
    },
    {
        id: '900260009',
        name: 'Flughafen BER - Terminal 1-2',
    },
    {
        id: '900350715',
        name: 'Stolzenhagen (bei Wandlitz), Kirche',
    },
    {
        id: '900215514',
        name: 'Klein Lüben, Rastplatz',
    },
    {
        id: '900340027',
        name: 'Templin, Stadt',
    },
    {
        id: '900070301',
        name: 'U Alt-Mariendorf',
    },
    {
        id: '900072103',
        name: 'Halker Zeile',
    },
    {
        id: '900310982',
        name: 'Diensdorf-Radlow, Radlow',
    },
    {
        id: '900220582',
        name: 'Caputh, Am Torfstich',
    },
    {
        id: '900210358',
        name: 'Rhinsmühlen',
    },
    {
        id: '900203651',
        name: 'Schildow, Schillerstr.',
    },
    {
        id: '900350537',
        name: 'Lanke, Bogensee Ausbau',
    },
    {
        id: '900210787',
        name: 'Rathenow, Fontanestr.',
    },
    {
        id: '900203650',
        name: 'Bushalt Mönchmühlenallee, Eschenallee',
    },
    {
        id: '900068272',
        name: 'U Tempelhof/Ringbahnstr.',
    },
    {
        id: '900415469',
        name: 'Herzberg (Elster), Gewerbepark Grünhaus',
    },
    {
        id: '900022172',
        name: 'Luisenplatz/Schloss Charlottenburg',
    },
    {
        id: '900320507',
        name: 'Hönow, Mahlsdorfer Str./Thälmannstr.',
    },
    {
        id: '900175508',
        name: 'Oschatzer Ring',
    },
    {
        id: '900435921',
        name: 'Wüstenhain',
    },
    {
        id: '900175551',
        name: 'Naumburger Ring',
    },
    {
        id: '900190507',
        name: 'Rethelstr.',
    },
    {
        id: '900175007',
        name: 'U Hellersdorf',
    },
    {
        id: '900175006',
        name: 'U Cottbusser Platz',
    },
    {
        id: '900350170',
        name: 'Wandlitz, Wandlitzsee',
    },
    {
        id: '900340649',
        name: 'Templin, Eschenweg',
    },
    {
        id: '900350202',
        name: 'Ahrensfelde, Mehrower Str.',
    },
    {
        id: '390094399261',
        name: 'Hoyerswerda, Behördenpark',
    },
    {
        id: '900022105',
        name: 'Haubachstr.',
    },
    {
        id: '900210187',
        name: 'Kotzen, Wendestelle',
    },
    {
        id: '900210177',
        name: 'Hohennauen, Siedlung',
    },
    {
        id: '900350144',
        name: 'Ahrensfelde, Dorfstr.',
    },
    {
        id: '900210176',
        name: 'Hohennauen, Schule',
    },
    {
        id: '900220364',
        name: 'Bücknitz, Fiener Str.',
    },
    {
        id: '900210025',
        name: 'Gräningen, Rathenower Str.',
    },
    {
        id: '900310806',
        name: 'Fürstenwalde, Paul-Frost-Ring',
    },
    {
        id: '900340662',
        name: 'Templin, Kastanienstr.',
    },
    {
        id: '900210041',
        name: 'Garlitz, Neubau',
    },
    {
        id: '900350147',
        name: 'Ahrensfelde, Kirche',
    },
    {
        id: '900088201',
        name: 'U Holzhauser Str.',
    },
    {
        id: '900245187',
        name: 'Waltersdorf (TF), Abzweig',
    },
    {
        id: '900340341',
        name: 'Groß Väter, Feriendorf',
    },
    {
        id: '900340526',
        name: 'Prenzlau, Gewerbegebiet Schafgrund',
    },
    {
        id: '900222053',
        name: 'Dahnsdorf',
    },
    {
        id: '900350181',
        name: 'Schwanebeck (BAR), Steiermärker Str.',
    },
    {
        id: '900320888',
        name: 'Lichtenow, Tankstelle',
    },
    {
        id: '900350176',
        name: 'Zepernick, Bozener Str.',
    },
    {
        id: '900215325',
        name: 'Gnevsdorf, I',
    },
    {
        id: '900053353',
        name: 'Neue Kreisstr.',
    },
    {
        id: '900245655',
        name: 'Blankenfelde, Klabundring',
    },
    {
        id: '900222123',
        name: 'Lühnsdorf',
    },
    {
        id: '900062101',
        name: 'Gritznerstr.',
    },
    {
        id: '900160518',
        name: 'Herzbergstr./Industriegebiet',
    },
    {
        id: '900160509',
        name: 'Bernhard-Bästlein-Str.',
    },
    {
        id: '900222149',
        name: 'Niemegk, Werdermühle',
    },
    {
        id: '900245660',
        name: 'Mahlow, Chopinring',
    },
    {
        id: '900311221',
        name: 'Bahro',
    },
    {
        id: '900222125',
        name: 'Lüsse',
    },
    {
        id: '900310622',
        name: 'Grünheide, Am Reiherhorst',
    },
    {
        id: '900341122',
        name: 'Schwedt, Festwiese',
    },
    {
        id: '900245141',
        name: 'Jüterbog, Lessingstr.',
    },
    {
        id: '900245656',
        name: 'Mahlow, Am Lückefeld',
    },
    {
        id: '900222180',
        name: 'Schmögelsdorf',
    },
    {
        id: '900340878',
        name: 'Heinrichshof, Ausbau',
    },
    {
        id: '900210840',
        name: 'Rathenow, Märkischer Platz/Goethestr.',
    },
    {
        id: '900222174',
        name: 'Rotscherlinde',
    },
    {
        id: '900215351',
        name: 'Groß Pankow, Schule',
    },
    {
        id: '900261171',
        name: 'Golßen, Bhf',
    },
    {
        id: '900037209',
        name: 'Buschower Weg',
    },
    {
        id: '900175544',
        name: 'Myslowitzer Str./Klinikum',
    },
    {
        id: '900215346',
        name: 'Groß Lüben',
    },
    {
        id: '900245758',
        name: 'Neu Wünsdorf, Lindenbrücker Weg',
    },
    {
        id: '900022171',
        name: 'Schloss Charlottenburg',
    },
    {
        id: '900245788',
        name: 'Kliestow, An der Ziegelei Nord',
    },
    {
        id: '900215341',
        name: 'Groß Gottschow',
    },
    {
        id: '900022101',
        name: 'U Sophie-Charlotte-Platz',
    },
    {
        id: '900022152',
        name: 'Seelingstr.',
    },
    {
        id: '900022153',
        name: 'Zillestr.',
    },
    {
        id: '900215339',
        name: 'Groß Breese, II',
    },
    {
        id: '900215338',
        name: 'Groß Breese, I',
    },
    {
        id: '900222192',
        name: 'Treuenbrietzen, Gerätewerk',
    },
    {
        id: '900215337',
        name: 'Groß Breese, Ausbau',
    },
    {
        id: '900215335',
        name: 'Grenzheim, Dorf',
    },
    {
        id: '900222181',
        name: 'Schwabeck, Abzweig B 2',
    },
    {
        id: '900311520',
        name: 'Ossendorf',
    },
    {
        id: '900203896',
        name: 'Oranienburg, Gewerbegebiet Nord',
    },
    {
        id: '900245709',
        name: 'Heinsdorf, Hauptstr.',
    },
    {
        id: '900175503',
        name: 'Gerdastr.',
    },
    {
        id: '900175550',
        name: 'Wernitzer Str.',
    },
    {
        id: '900175549',
        name: 'Achardstr.',
    },
    {
        id: '900062151',
        name: 'Paulsenstr.',
    },
    {
        id: '900062152',
        name: 'Lepsiusstr.',
    },
    {
        id: '900210348',
        name: 'Falkensee, Gesundheitszentrum',
    },
    {
        id: '900203781',
        name: 'Löwenberg (Mark), Am Sonnenhügel',
    },
    {
        id: '900215235',
        name: 'Döllen, B 5',
    },
    {
        id: '900175555',
        name: 'Adolfstr.',
    },
    {
        id: '900210140',
        name: 'Falkensee, Alter Finkenkrug',
    },
    {
        id: '900007105',
        name: 'Wolliner Str.',
    },
    {
        id: '900066301',
        name: 'Appenzeller Str.',
    },
    {
        id: '900350862',
        name: 'Bernau, Stadtpark',
    },
    {
        id: '900210134',
        name: 'Falkensee, Abzweig Waldheim',
    },
    {
        id: '900222165',
        name: 'Reetzerhütten',
    },
    {
        id: '900222167',
        name: 'Reetz (PM), Ziegelei',
    },
    {
        id: '900222166',
        name: 'Reetz (PM), Ortsmitte',
    },
    {
        id: '900003104',
        name: 'U Turmstr.',
    },
    {
        id: '900191505',
        name: 'Neue Krugallee/Dammweg',
    },
    {
        id: '900350861',
        name: 'Bernau, Rathaus',
    },
    {
        id: '900093201',
        name: 'S Hermsdorf',
    },
    {
        id: '900064256',
        name: 'S Osdorfer Str.',
    },
    {
        id: '900222118',
        name: 'Lobbese',
    },
    {
        id: '900245255',
        name: 'Schönefeld (bei Jüterbog), Teich',
    },
    {
        id: '900222066',
        name: 'Feldheim (PM)',
    },
    {
        id: '900222182',
        name: 'Schwabeck, Ortsmitte',
    },
    {
        id: '900067258',
        name: 'Bruchwitzstr.',
    },
    {
        id: '900074103',
        name: 'Goethestr./Potsdamer Str.',
    },
    {
        id: '900135507',
        name: 'Am Stener Berg',
    },
    {
        id: '900245205',
        name: 'Frankenfelde (TF), Kirche',
    },
    {
        id: '900310714',
        name: 'Beeskow, Bahrensdorfer Str.',
    },
    {
        id: '900311563',
        name: 'Schwerzko',
    },
    {
        id: '900215262',
        name: 'Ellershagen, Ausbau',
    },
    {
        id: '900341163',
        name: 'Schwedt, Talsand',
    },
    {
        id: '900016153',
        name: 'Gneisenaustr./Baerwaldstr.',
    },
    {
        id: '900180529',
        name: 'Am Berg',
    },
    {
        id: '900215287',
        name: 'Frehne, Wendestelle',
    },
    {
        id: '900261934',
        name: 'Straupitz, Holländermühle',
    },
    {
        id: '900013151',
        name: 'Segitzdamm',
    },
    {
        id: '900210360',
        name: 'Falkensee, Sportzentrum',
    },
    {
        id: '900341240',
        name: 'Vierraden, Kreuzung',
    },
    {
        id: '900350322',
        name: 'Danewitz, Dorfstr.',
    },
    {
        id: '900180508',
        name: 'Kleinschewskystr.',
    },
    {
        id: '900175558',
        name: 'Heinrich-Grüber-Platz',
    },
    {
        id: '900190009',
        name: 'Heidelberger Str.',
    },
    {
        id: '900210153',
        name: 'Falkensee, Isarstr.',
    },
    {
        id: '900203810',
        name: 'Marienthal, Schule',
    },
    {
        id: '342',
        name: 'Grimmen, Bhf',
    },
    {
        id: '3150',
        name: 'Sternfeld, Bhf',
    },
    {
        id: '3673',
        name: 'Utzedel, Bhf',
    },
    {
        id: '900085205',
        name: 'Kolpingplatz',
    },
    {
        id: '3406',
        name: 'Gnevkow, Bhf',
    },
    {
        id: '900311225',
        name: 'Bomsdorf, Kolonie',
    },
    {
        id: '900203878',
        name: 'Oranienburg, Haller Str.',
    },
    {
        id: '900053171',
        name: 'Schloss Glienicke',
    },
    {
        id: '900415035',
        name: 'Crinitz, Sägewerk',
    },
    {
        id: '900310852',
        name: 'Grünheide, Fangschleuse Schlößchen',
    },
    {
        id: '900203808',
        name: 'Zabelsdorf, Alte Mühle',
    },
    {
        id: '900310850',
        name: 'Grünheide, Fangschleuse Eichenallee',
    },
    {
        id: '900341266',
        name: 'Wendemark, Mitte',
    },
    {
        id: '900310851',
        name: 'Grünheide, Fangschleuse F.-Ebert-Str.',
    },
    {
        id: '900261789',
        name: 'Rüdingsdorf, Kreblitzer Str.',
    },
    {
        id: '900210574',
        name: 'Falkenrehde, Stolp',
    },
    {
        id: '900210575',
        name: 'Falkenrehde, Dorf',
    },
    {
        id: '900192501',
        name: 'Doku.-zentrum NS-Zwangsarbeit',
    },
    {
        id: '900203807',
        name: 'Zabelsdorf, Dorfstr.',
    },
    {
        id: '900275119',
        name: 'Brandenburg, Hagelberger Str.',
    },
    {
        id: '900037104',
        name: 'Staakener Feldstr.',
    },
    {
        id: '900096408',
        name: 'Olbendorfer Weg',
    },
    {
        id: '900215433',
        name: 'Jännersdorf, Mitte',
    },
    {
        id: '900210545',
        name: 'Ketzin (Havel), Knoblaucher Str.',
    },
    {
        id: '2182',
        name: 'Zarrendorf, Bhf',
    },
    {
        id: '2256',
        name: 'Elmenhorst, Bhf',
    },
    {
        id: '900245079',
        name: 'Mahlow, Mahlower Dorfstr.',
    },
    {
        id: '900032156',
        name: 'Karolinenhöhe',
    },
    {
        id: '900341299',
        name: 'Zichow, Mühle',
    },
    {
        id: '900134001',
        name: 'Kleingartenanlage Lindenhof',
    },
    {
        id: '900064302',
        name: 'Sondershauser Str.',
    },
    {
        id: '900245451',
        name: 'Gadsdorf, Dorfplatz',
    },
    {
        id: '900190503',
        name: 'Herkomerstr.',
    },
    {
        id: '900190504',
        name: 'Klingerstr.',
    },
    {
        id: '900064360',
        name: 'Stadtilmer Weg',
    },
    {
        id: '900135010',
        name: 'Schönerlinder Str./Lindenhof',
    },
    {
        id: '2299',
        name: 'Wittenhagen, Bhf',
    },
    {
        id: '4120',
        name: 'Niederau, Bhf',
    },
    {
        id: '900037203',
        name: 'Hahneberg',
    },
    {
        id: '900210519',
        name: 'Ketzin (Havel), Schule',
    },
    {
        id: '900245675',
        name: 'Hohenseefeld, Am Graben',
    },
    {
        id: '900203652',
        name: 'Mühlenbeck, Berufsförderungswerk',
    },
    {
        id: '79',
        name: 'Rakow, Bhf',
    },
    {
        id: '900210234',
        name: 'Nauen, Schützenstr.',
    },
    {
        id: '900135016',
        name: 'Schönerlinder Chaussee',
    },
    {
        id: '900016152',
        name: 'Jüterboger Str.',
    },
    {
        id: '20',
        name: 'Altentreptow, Bhf',
    },
    {
        id: '3650',
        name: 'Demmin, Bhf',
    },
    {
        id: '900215432',
        name: 'Jännersdorf, Abzweig',
    },
    {
        id: '900037113',
        name: 'Am alten Gaswerk',
    },
    {
        id: '900210149',
        name: 'Falkensee, Hansastr./Friedrich-Engels-Allee',
    },
    {
        id: '900063401',
        name: 'Steglitzer Damm/Halskestr.',
    },
    {
        id: '900191510',
        name: 'Bergaustr.',
    },
    {
        id: '900222114',
        name: 'Lehnin, Fischersberg',
    },
    {
        id: '900203001',
        name: 'Kreuzbruch, Am Bahnhof',
    },
    {
        id: '900341114',
        name: 'Schwedt, Bertha-von-Suttner-Str.',
    },
    {
        id: '900215368',
        name: 'Gumtow, B 5',
    },
    {
        id: '900191509',
        name: 'Hänselstr.',
    },
    {
        id: '900191508',
        name: 'Mosischstr.',
    },
    {
        id: '900191507',
        name: 'Marientaler Str.',
    },
    {
        id: '900261162',
        name: 'Schulzendorf (LDS), Illgenstr.',
    },
    {
        id: '900435467',
        name: 'Chransdorf, Abzweig',
    },
    {
        id: '900435468',
        name: 'Craupe',
    },
    {
        id: '900341179',
        name: 'Schwedt, Marchlewski Ring',
    },
    {
        id: '900191506',
        name: 'Krematorium Baumschulenweg',
    },
    {
        id: '900194519',
        name: 'Südostallee/Königsheide',
    },
    {
        id: '900194518',
        name: 'Südostallee/Breites Fenn',
    },
    {
        id: '900135502',
        name: 'Röbellweg',
    },
    {
        id: '900341171',
        name: 'Schwedt, Werner-Seelenbinder-Str.',
    },
    {
        id: '900063451',
        name: 'Liebenowzeile',
    },
    {
        id: '900311419',
        name: 'Göhlen',
    },
    {
        id: '900215357',
        name: 'Groß Werzin, B 5',
    },
    {
        id: '900203800',
        name: 'Wendefeld',
    },
    {
        id: '900067202',
        name: 'Edenkobener Weg',
    },
    {
        id: '900024204',
        name: 'Savignyplatz',
    },
    {
        id: '900052201',
        name: 'S Nikolassee',
    },
    {
        id: '900341101',
        name: 'Schwedt, Am Kietz',
    },
    {
        id: '900037114',
        name: 'Brunsbütteler Damm/Stadtgrenze',
    },
    {
        id: '900310849',
        name: 'Grünheide, Fangschleuse Eichbrand',
    },
    {
        id: '900048107',
        name: 'Hagenplatz',
    },
    {
        id: '900260933',
        name: 'Schenkendorf, Krummenseer Str.',
    },
    {
        id: '900261584',
        name: 'Luckau, Zaackoer Weg',
    },
    {
        id: '900445269',
        name: 'Burg, Naundorfer Str.',
    },
    {
        id: '900435464',
        name: 'Calau, Lindenstr.',
    },
    {
        id: '900261568',
        name: 'Luckau, Dresdener Str.',
    },
    {
        id: '900340615',
        name: 'Steinrode, Abzweig',
    },
    {
        id: '900016154',
        name: 'Urbanstr./Baerwaldstr.',
    },
    {
        id: '900203803',
        name: 'Wentow, Schule',
    },
    {
        id: '900051257',
        name: 'Am Hegewinkel',
    },
    {
        id: '900340358',
        name: 'Hardenbeck, Gaststätte',
    },
    {
        id: '900260309',
        name: 'Birkenhainchen, B 320',
    },
    {
        id: '900203649',
        name: 'Mühlenbeck, Schule',
    },
    {
        id: '900009105',
        name: 'Seestr./Amrumer Str.',
    },
    {
        id: '900222055',
        name: 'Damsdorf (PM), Berliner Str.',
    },
    {
        id: '900215395',
        name: 'Haaren',
    },
    {
        id: '900215226',
        name: 'Dannenwalde (PR), Schwarz',
    },
    {
        id: '900321119',
        name: 'Neuenhagen (bei Oderberg), Dorf',
    },
    {
        id: '900215225',
        name: 'Dannenwalde (PR), Neubau',
    },
    {
        id: '900275402',
        name: 'Brandenburg, Frhr.-v.-Thüngen-Str.',
    },
    {
        id: '900275624',
        name: 'Brandenburg, Hagelberg',
    },
    {
        id: '900275625',
        name: 'Brandenburg, Eichhorstweg',
    },
    {
        id: '900275711',
        name: 'Brandenburg, Schulstr.',
    },
    {
        id: '900310902',
        name: 'Kohlsdorf',
    },
    {
        id: '900222143',
        name: 'Niederwerbig',
    },
    {
        id: '900068301',
        name: 'S Attilastr.',
    },
    {
        id: '800000013381',
        name: 'Zeithain, Bhf',
    },
    {
        id: '800000013348',
        name: 'Wülknitz, Bhf',
    },
    {
        id: '800000013124',
        name: 'Tiefenau, Bhf',
    },
    {
        id: '900435529',
        name: 'Gollmitz, Ortsmitte',
    },
    {
        id: '900068351',
        name: 'Ringstr./Kurfürstenstr.',
    },
    {
        id: '900070201',
        name: 'Gersdorfstr./Kaiserstr.',
    },
    {
        id: '900070251',
        name: 'Rathausstr./Kaiserstr.',
    },
    {
        id: '900340245',
        name: 'Brandmühle',
    },
    {
        id: '900340604',
        name: 'Seeberg (UM)',
    },
    {
        id: '900435549',
        name: 'Boblitz, L49',
    },
    {
        id: '800000011712',
        name: 'Gröditz, Bhf',
    },
    {
        id: '900310906',
        name: 'Kossenblatt, Neubau',
    },
    {
        id: '900191503',
        name: 'Lakegrund',
    },
    {
        id: '900340579',
        name: 'Rutenberg',
    },
    {
        id: '800000010297',
        name: 'Riesa, Bhf/Busbahnhof',
    },
    {
        id: '900191504',
        name: 'Eichbuschallee',
    },
    {
        id: '900275623',
        name: 'Brandenburg, Göttiner Landstr.',
    },
    {
        id: '900009202',
        name: 'U Osloer Str.',
    },
    {
        id: '900203000',
        name: 'Kreuzbruch, Am Festplatz',
    },
    {
        id: '900220246',
        name: 'Woltersdorf, Alter Kanal',
    },
    {
        id: '900029204',
        name: 'Windmühlenberg',
    },
    {
        id: '900027455',
        name: 'Falkenhagener Tor',
    },
    {
        id: '900027402',
        name: 'Pionierstr./Zeppelinstr.',
    },
    {
        id: '900245201',
        name: 'Luckenwalde, Dahmer Str.',
    },
    {
        id: '900185001',
        name: 'Alt-Schmöckwitz',
    },
    {
        id: '900215093',
        name: 'Alt Pinnow',
    },
    {
        id: '900210643',
        name: 'Dallgow-Döberitz, Fliederweg',
    },
    {
        id: '900171517',
        name: 'Boschpoler Str.',
    },
    {
        id: '900470001',
        name: 'Cottbus, Sandow',
    },
    {
        id: '900350536',
        name: 'Ladeburg, Kirche',
    },
    {
        id: '900340292',
        name: 'Falkenhagen (UM), Dorf',
    },
    {
        id: '900275511',
        name: 'Brandenburg, Schmerzker Kurve',
    },
    {
        id: '900175553',
        name: 'Planitzstr.',
    },
    {
        id: '900095153',
        name: 'Zabel-Krüger-Damm/Alt-Lübars',
    },
    {
        id: '900245663',
        name: 'Dahlewitz, Dahlewitzer Dorfstr.',
    },
    {
        id: '900002206',
        name: 'Turmstr./Rathenower Str.',
    },
    {
        id: '900210638',
        name: 'Dallgow-Döberitz, Kirche',
    },
    {
        id: '900203618',
        name: 'Schwante, Am Wiesengrund',
    },
    {
        id: '900001206',
        name: 'Heidestr.',
    },
    {
        id: '900171526',
        name: 'Bentschener Weg',
    },
    {
        id: '900210273',
        name: 'Brieselang, Sudermannstr.',
    },
    {
        id: '900203003',
        name: 'Kreuzbruch, Domäne',
    },
    {
        id: '900222175',
        name: 'Schlalach',
    },
    {
        id: '900220166',
        name: 'Treuenbrietzen, Brücker Str.',
    },
    {
        id: '900026105',
        name: 'S Heerstr.',
    },
    {
        id: '900245994',
        name: 'Jüterbog, Birkenweg',
    },
    {
        id: '900067254',
        name: 'Eiswaldtstr.',
    },
    {
        id: '900245309',
        name: 'Luckenwalde, Pestalozzischule',
    },
    {
        id: '900310933',
        name: 'Merz',
    },
    {
        id: '900435566',
        name: 'Groß Lübbenau, Ortsmitte',
    },
    {
        id: '900245084',
        name: 'Mahlow, Goethestr.',
    },
    {
        id: '900064351',
        name: 'Marienstr.',
    },
    {
        id: '900203738',
        name: 'Dagow, Dorf',
    },
    {
        id: '900210381',
        name: 'Rhinow, Abzweig Glewe',
    },
    {
        id: '900311471',
        name: 'Möbiskruge, Diehloer Str.',
    },
    {
        id: '900080351',
        name: 'Im Rosengrund',
    },
    {
        id: '900245105',
        name: 'Bollensdorf (bei Dahme), Kirche',
    },
    {
        id: '900310940',
        name: 'Möllendorf, Dorf',
    },
    {
        id: '900070152',
        name: 'Kollostr.',
    },
    {
        id: '900340275',
        name: 'Dolgen, Abzweig',
    },
    {
        id: '900260200',
        name: 'Großziethen, Rudolf-Breitscheid-Str.',
    },
    {
        id: '4136',
        name: 'Koserow, Bhf',
    },
    {
        id: '000008011109',
        name: 'Bansin, Bhf Seebad',
    },
    {
        id: '4188',
        name: 'Zinnowitz, Bhf',
    },
    {
        id: '92240',
        name: 'Seebad Heringsdorf, Bhf',
    },
    {
        id: '4233',
        name: 'Trassenheide, Bhf',
    },
    {
        id: '4241',
        name: 'Ückeritz, Bhf',
    },
    {
        id: '900350221',
        name: 'Althüttendorf, Gaststätte',
    },
    {
        id: '900220270',
        name: 'Herrenhölzer',
    },
    {
        id: '000301279003',
        name: 'Greiffenberg, Zolldamm',
    },
    {
        id: '900340384',
        name: 'Holzendorf, B198',
    },
    {
        id: '900275603',
        name: 'Brandenburg, Wilhelmsdorfer Landstr.',
    },
    {
        id: '900275604',
        name: 'Brandenburg, Wittstocker Gäßchen',
    },
    {
        id: '900150020',
        name: 'Alt-Hohenschönhausen',
    },
    {
        id: '900009203',
        name: 'U Pankstr.',
    },
    {
        id: '900310911',
        name: 'Kummerow (LOS)',
    },
    {
        id: '900203747',
        name: 'Dollgow',
    },
    {
        id: '900340910',
        name: 'Hohenselchow, Kreuzung Nord',
    },
    {
        id: '900245687',
        name: 'Blankenfelde, Zossener Damm',
    },
    {
        id: '900203742',
        name: 'Neulögow, Kirche',
    },
    {
        id: '900340424',
        name: 'Kutzerow, Abzweig',
    },
    {
        id: '900203613',
        name: 'Friedrichsthal (OHV), Grabowseestr.',
    },
    {
        id: '900350944',
        name: 'Bernau, Borsig-Str.',
    },
    {
        id: '900151510',
        name: 'Malchower Aue',
    },
    {
        id: '900220619',
        name: 'Werder (Havel), Strengbrücke',
    },
    {
        id: '900171522',
        name: 'Cecilienstr./Oberfeldstr.',
    },
    {
        id: '900203743',
        name: 'Wolfsruh, Kirche',
    },
    {
        id: '900009101',
        name: 'U Amrumer Str.',
    },
    {
        id: '900350596',
        name: 'Neugrimnitz',
    },
    {
        id: '900220604',
        name: 'Geltow, Schäfereistr.',
    },
    {
        id: '900029251',
        name: 'Kurze Str./Mittelstr.',
    },
    {
        id: '900210646',
        name: 'Dallgow-Döberitz, Am Wasserturm',
    },
    {
        id: '900215109',
        name: 'Baekern, Abzweig',
    },
    {
        id: '900170019',
        name: 'Allee der Kosmonauten/Poelchaustr.',
    },
    {
        id: '900210133',
        name: 'Falkensee, Moselstr.',
    },
    {
        id: '900215175',
        name: 'Brüsenhagen, Abzweig',
    },
    {
        id: '900260317',
        name: 'Blasdorf, Kreuzung',
    },
    {
        id: '900210132',
        name: 'Falkensee, Haveleck',
    },
    {
        id: '900057107',
        name: 'Dennewitzplatz',
    },
    {
        id: '900350818',
        name: 'Bernau, Zepernicker Chaussee',
    },
    {
        id: '900210154',
        name: 'Falkensee, Friedrich-Ludwig-Jahn-Str.',
    },
    {
        id: '900340623',
        name: 'Schmölln, Kita',
    },
    {
        id: '900080406',
        name: 'Britzer Damm/Mohriner Allee',
    },
    {
        id: '900340137',
        name: 'Angermünde, Breitscheidstr.',
    },
    {
        id: '900210102',
        name: 'Falkensee, Dohlensteg',
    },
    {
        id: '900210129',
        name: 'Falkensee, Fehrbelliner Str.',
    },
    {
        id: '900080353',
        name: 'Neumarkplan',
    },
    {
        id: '900080352',
        name: 'Am Brandpfuhl',
    },
    {
        id: '900310601',
        name: 'Neuzelle, Bhf',
    },
    {
        id: '900275226',
        name: 'Brandenburg, August-Sonntag-Str.',
    },
    {
        id: '900215154',
        name: 'Boddin, Dorf',
    },
    {
        id: '900340398',
        name: 'Klaushagen, Oberdorf',
    },
    {
        id: '900029155',
        name: 'Askanierring',
    },
    {
        id: '900215147',
        name: 'Blüthen, III',
    },
    {
        id: '900310012',
        name: 'Drahendorf, Försterei',
    },
    {
        id: '900210150',
        name: 'Falkensee, Neckarstr./Friedrich-Engels-Allee',
    },
    {
        id: '900350558',
        name: 'Liepe (BAR), Am Schloßberg',
    },
    {
        id: '900215192',
        name: 'Gnevsdorf, II',
    },
    {
        id: '900222023',
        name: 'Bad Belzig, Weitzgrunder Weg',
    },
    {
        id: '900092251',
        name: 'Im Fischgrund',
    },
    {
        id: '900340806',
        name: 'Ringofen, Forsthaus',
    },
    {
        id: '900215223',
        name: 'Dannenwalde (PR), Dorf',
    },
    {
        id: '900350629',
        name: 'Oderberg, Eberswalder Chaussee',
    },
    {
        id: '900215217',
        name: 'Dallmin, II',
    },
    {
        id: '900262102',
        name: 'Zützen (UM), Abzweig Eschenweg',
    },
    {
        id: '900222185',
        name: 'Steindorf',
    },
    {
        id: '900350633',
        name: 'Oderberg, Stadtrand',
    },
    {
        id: '900210110',
        name: 'Falkensee, Waldheim',
    },
    {
        id: '900350634',
        name: 'Oderberg, Teufelsberg',
    },
    {
        id: '900210151',
        name: 'Falkensee, Iltissteig',
    },
    {
        id: '900210157',
        name: 'Falkensee, Mardersteig',
    },
    {
        id: '900073255',
        name: 'Friedhof Marienfelde',
    },
    {
        id: '900215188',
        name: 'Cumlosen, Gaststätte',
    },
    {
        id: '900073257',
        name: 'Erinnerungsstätte Marienfelde',
    },
    {
        id: '900073258',
        name: 'Hranitzkystr.',
    },
    {
        id: '900215184',
        name: 'Bullendorf',
    },
    {
        id: '900210156',
        name: 'Falkensee, Rosenstr.',
    },
    {
        id: '900310758',
        name: 'Drahendorf, Dorf',
    },
    {
        id: '900340397',
        name: 'Klaushagen, Dorf',
    },
    {
        id: '900007112',
        name: 'Gartenplatz',
    },
    {
        id: '900069257',
        name: 'Saalburgstr.',
    },
    {
        id: '900070103',
        name: 'Skutaristr.',
    },
    {
        id: '900070104',
        name: 'Friedhof Mariendorf',
    },
    {
        id: '900341271',
        name: 'Wilmersdorf (bei Angermünde), Bhf',
    },
    {
        id: '900069258',
        name: 'Rixdorfer Str./Ullsteinstr.',
    },
    {
        id: '900069205',
        name: 'Industriestr.',
    },
    {
        id: '900215122',
        name: 'Bärensprung, I',
    },
    {
        id: '900032255',
        name: 'Pfirsichweg',
    },
    {
        id: '900340432',
        name: 'Lindenhof (bei Dedelow)',
    },
    {
        id: '900310840',
        name: 'Groß Muckrow, Kita',
    },
    {
        id: '900220144',
        name: 'Nudow, Abzweig nach Ludwigsfelde',
    },
    {
        id: '900275342',
        name: 'Brandenburg, Plauerhof',
    },
    {
        id: '900275321',
        name: 'Brandenburg, Am Silokanal',
    },
    {
        id: '900340408',
        name: 'Klosterwalde, Ausbau',
    },
    {
        id: '900340318',
        name: 'Gleuenhof',
    },
    {
        id: '900079206',
        name: 'Mariendorfer Weg',
    },
    {
        id: '900085210',
        name: 'Sommerstr.',
    },
    {
        id: '900220316',
        name: 'Potsdam, Am Upstall',
    },
    {
        id: '900031151',
        name: 'Metzer Platz',
    },
    {
        id: '900350533',
        name: 'Ladeburg, An der Plantage',
    },
    {
        id: '900310858',
        name: 'Grunow (LOS), Dorf',
    },
    {
        id: '900210617',
        name: 'Dallgow-Döberitz, Artilleriepark',
    },
    {
        id: '900275247',
        name: 'Brandenburg, Neuendorf',
    },
    {
        id: '900029156',
        name: 'Flankenschanze',
    },
    {
        id: '900210647',
        name: 'Dallgow-Döberitz, Kieler Str.',
    },
    {
        id: '900013104',
        name: 'Prinzenstr./Ritterstr.',
    },
    {
        id: '900222220',
        name: 'Görzke, Holzplatz',
    },
    {
        id: '900350130',
        name: 'Eberswalde, Oberstufenzentrum',
    },
    {
        id: '900340396',
        name: 'Klaushagen, Ausbau',
    },
    {
        id: '900215141',
        name: 'Beveringen, Ausbau',
    },
    {
        id: '900007156',
        name: 'Swinemünder Str.',
    },
    {
        id: '900013103',
        name: 'U Prinzenstr.',
    },
    {
        id: '900245774',
        name: 'Luckenwalde, Am Weichpfuhl',
    },
    {
        id: '900210158',
        name: 'Falkensee, Damsbrück',
    },
    {
        id: '900220354',
        name: 'Potsdam, Eisbergstücke',
    },
    {
        id: '900210141',
        name: 'Falkensee, Falkenhagener Forst',
    },
    {
        id: '900275343',
        name: 'Brandenburg, Briester Weg',
    },
    {
        id: '900310826',
        name: 'Giesensdorf (LOS)',
    },
    {
        id: '900340410',
        name: 'Klosterwalde, Kreuzung',
    },
    {
        id: '900064201',
        name: 'S Lichterfelde Süd',
    },
    {
        id: '900275344',
        name: 'Brandenburg, Margarethenhof',
    },
    {
        id: '900007102',
        name: 'S+U Gesundbrunnen',
    },
    {
        id: '900260171',
        name: 'Wernsdorf, Waldeck',
    },
    {
        id: '900170015',
        name: 'Blumberger Damm/Elisabethstr.',
    },
    {
        id: '900215133',
        name: 'Berge (PR), ZOB',
    },
    {
        id: '900340874',
        name: 'Heinersdorf (UM), Mitte',
    },
    {
        id: '900261790',
        name: 'Rüdingsdorf, Staudengarten',
    },
    {
        id: '900171513',
        name: 'Buckower Ring',
    },
    {
        id: '900009253',
        name: 'Uferstr.',
    },
    {
        id: '900064301',
        name: 'S Lichterfelde Ost',
    },
    {
        id: '900261432',
        name: 'Langengrassau, Kita',
    },
    {
        id: '900005150',
        name: 'Tiergartenstr.',
    },
    {
        id: '900220000',
        name: 'Stahnsdorf, Am Weiher',
    },
    {
        id: '900210655',
        name: 'Dallgow-Döberitz, Maurice-Ravel-Str.',
    },
    {
        id: '900341032',
        name: 'Polßen, Mitte',
    },
    {
        id: '900320906',
        name: 'Altlandsberg, Mendelssohnstr.',
    },
    {
        id: '900311322',
        name: 'Eisenhüttenstadt, Ärztehaus',
    },
    {
        id: '900320905',
        name: 'Altlandsberg, Bahnhofstr.',
    },
    {
        id: '900310853',
        name: 'Grünheide, Heideweg',
    },
    {
        id: '900007113',
        name: 'Theodor-Heuss-Weg',
    },
    {
        id: '900068202',
        name: 'U Alt-Tempelhof',
    },
    {
        id: '900083171',
        name: 'Fleischerstr.',
    },
    {
        id: '900210652',
        name: 'Dallgow-Döberitz, Feuerwehr',
    },
    {
        id: '900210653',
        name: 'Dallgow-Döberitz, Johannes-Brahms-Str.',
    },
    {
        id: '900210654',
        name: 'Dallgow-Döberitz, Franz-Liszt-Str.',
    },
    {
        id: '900415054',
        name: 'Sonnewalde, Abzweig Brenitz',
    },
    {
        id: '900340068',
        name: 'Criewen, Sporthalle',
    },
    {
        id: '900210660',
        name: 'Dallgow-Döberitz, Haselnussweg',
    },
    {
        id: '900320898',
        name: 'Rehfelde, Glaserei',
    },
    {
        id: '900083101',
        name: 'U Zwickauer Damm',
    },
    {
        id: '900210667',
        name: 'Dallgow-Döberitz, Kurmarkstr.',
    },
    {
        id: '900210678',
        name: 'Dallgow-Döberitz, Bahnhofstr.',
    },
    {
        id: '900210681',
        name: 'Dallgow-Döberitz, Am Reitplatz',
    },
    {
        id: '900083155',
        name: 'Schriftsetzerweg',
    },
    {
        id: '900320877',
        name: 'Prötzel, Sägewerk',
    },
    {
        id: '900210657',
        name: 'Neu-Rohrbeck, Eichenstr.',
    },
    {
        id: '900320874',
        name: 'Prötzel, Forsthaus',
    },
    {
        id: '900311069',
        name: 'Storkow, Neu Bostoner Str.',
    },
    {
        id: '900341062',
        name: 'Schmiedeberg, Ausbau',
    },
    {
        id: '900310111',
        name: 'Bad Saarow, Goethestr.',
    },
    {
        id: '900320909',
        name: 'Altlandsberg, Nord',
    },
    {
        id: '900415073',
        name: 'Oppelhain, Dorfplatz',
    },
    {
        id: '2',
        name: 'Bad Muskau, Kirchplatz',
    },
    {
        id: '900096306',
        name: 'Schorfheidestr./Dannenwalder Weg',
    },
    {
        id: '900415072',
        name: 'Oppelhain, Waldsiedlung',
    },
    {
        id: '900415070',
        name: 'Rückersdorf, Kirche',
    },
    {
        id: '900415069',
        name: 'Bad Erna',
    },
    {
        id: '900320984',
        name: 'Wilkendorf, Golfpark',
    },
    {
        id: '900100022',
        name: 'S Potsdamer Platz/Voßstr.',
    },
    {
        id: '900134009',
        name: 'Gewerbegebiet Pankow-Nord',
    },
    {
        id: '900035154',
        name: 'Goebelplatz',
    },
    {
        id: '900415067',
        name: 'Doberlug (EE), Hauptstr.',
    },
    {
        id: '900446218',
        name: 'Schorbus, Ausbau',
    },
    {
        id: '900027255',
        name: 'Siedlung Hakenfelde',
    },
    {
        id: '900090157',
        name: 'Mühlenweg',
    },
    {
        id: '900320916',
        name: 'Seeberg (MOL), Dorf',
    },
    {
        id: '900340472',
        name: 'Naugarten',
    },
    {
        id: '900340536',
        name: 'Prenzlau, Kreiskrankenhaus',
    },
    {
        id: '900320911',
        name: 'Werder (bei Rehfelde), Abzweig',
    },
    {
        id: '900090156',
        name: 'Försterweg',
    },
    {
        id: '900310638',
        name: 'Görzig, Neubau',
    },
    {
        id: '900210659',
        name: 'Rohrbeck, Kirche',
    },
    {
        id: '900185501',
        name: 'Zum Seeblick',
    },
    {
        id: '900096361',
        name: 'Sallgaster Str.',
    },
    {
        id: '900210343',
        name: 'Premnitz, Nord',
    },
    {
        id: '900311118',
        name: 'Kolpin, Dorfplatz',
    },
    {
        id: '900311039',
        name: 'Spreenhagen, Schule',
    },
    {
        id: '900220372',
        name: 'Teltow, Kanada-Allee',
    },
    {
        id: '900210011',
        name: 'Falkensee, Finkenkrug',
    },
    {
        id: '900203491',
        name: 'Beetz-Sommerfeld, Bhf',
    },
    {
        id: '900070306',
        name: 'Forddamm',
    },
    {
        id: '900445439',
        name: 'Gablenz, Denkmal',
    },
    {
        id: '900310904',
        name: 'Kolpin, Stadion',
    },
    {
        id: '900210721',
        name: 'Döberitz (bei Premnitz), Bhf',
    },
    {
        id: '900210344',
        name: 'Premnitz, Zentrum',
    },
    {
        id: '900230003',
        name: 'S Griebnitzsee',
    },
    {
        id: '900230130',
        name: 'Potsdam, Sonnenlandstr.',
    },
    {
        id: '900210197',
        name: 'Mögelin, Bhf',
    },
    {
        id: '900321171',
        name: 'Wriezen, Frankfurter Str.',
    },
    {
        id: '900350910',
        name: 'Bernau, Puschkinstr.',
    },
    {
        id: '900310990',
        name: 'Rauen, Feuerwehr',
    },
    {
        id: '900350382',
        name: 'Eichhorst, Forstsiedlung',
    },
    {
        id: '900415014',
        name: 'Staupitz, Grünewalder Str.',
    },
    {
        id: '900320827',
        name: 'Buckow (Märkische Schweiz), Jugendherberge',
    },
    {
        id: '900415013',
        name: 'Staupitz, Zollhaus',
    },
    {
        id: '900320824',
        name: 'Buckow (Märkische Schweiz), Berliner Str.',
    },
    {
        id: '710008002113',
        name: 'Friedrichsruhe(Meck)',
    },
    {
        id: '900415025',
        name: 'Finsterwalde, Süd Ausbau',
    },
    {
        id: '900415026',
        name: 'Finsterwalde, Pechhütte',
    },
    {
        id: '900415027',
        name: 'Finsterwalde, Sorno Dresdner Str.',
    },
    {
        id: '900435035',
        name: 'Schipkau, Siedlung',
    },
    {
        id: '900070153',
        name: 'Kosleckweg',
    },
    {
        id: '900320863',
        name: 'Grunow (MOL), Ausbau',
    },
    {
        id: '900070157',
        name: 'Lerchenweg',
    },
    {
        id: '900180524',
        name: 'Glienicker Str.',
    },
    {
        id: '900230131',
        name: 'Potsdam, Schlüterstr./Forststr.',
    },
    {
        id: '900083181',
        name: 'Neuköllner Str./Zwickauer Damm',
    },
    {
        id: '900180543',
        name: 'Rudower Str.',
    },
    {
        id: '900415038',
        name: 'Finsterwalde, Sonnewalder Str.',
    },
    {
        id: '900180542',
        name: 'Zinsgutstr.',
    },
    {
        id: '900445790',
        name: 'Kathlow, Str. nach Sergen',
    },
    {
        id: '790002156282',
        name: 'Mansfeld, Ausbau',
    },
    {
        id: '900320851',
        name: 'Bergschäferei, Dorf',
    },
    {
        id: '710008011403',
        name: 'Domsühl',
    },
    {
        id: '900160007',
        name: 'Köpenicker Chaussee/Blockdammweg',
    },
    {
        id: '900321300',
        name: 'Alt Mahlisch',
    },
    {
        id: '900340859',
        name: 'Günterberg, Ausbau',
    },
    {
        id: '900340841',
        name: 'Groß Pinnow, Abzweig',
    },
    {
        id: '900415120',
        name: 'Tröbitz, Nord',
    },
    {
        id: '900176505',
        name: 'Straußstr.',
    },
    {
        id: '900435440',
        name: 'Ortrand, Elsterwerdaer Str.',
    },
    {
        id: '900415126',
        name: 'Oppelhain, Ost',
    },
    {
        id: '900415124',
        name: 'Schönborn, Unterdorf',
    },
    {
        id: '900311059',
        name: 'Storkow, Reichenwalder Str.',
    },
    {
        id: '900415173',
        name: 'Schönborn, Am Dorfplatz',
    },
    {
        id: '900350220',
        name: 'Althüttendorf, Chausseehaus',
    },
    {
        id: '900415122',
        name: 'Schönborn, Glaswerk',
    },
    {
        id: '900230178',
        name: 'Potsdam, Schloss Sanssouci/Bornstedter Str.',
    },
    {
        id: '900415121',
        name: 'Schönborn, Eichwald',
    },
    {
        id: '900321177',
        name: 'Wriezen, Odervorstadt',
    },
    {
        id: '900230145',
        name: 'Potsdam, Luisenplatz-Ost/Park Sanssouci',
    },
    {
        id: '900027305',
        name: 'Goldkäferweg',
    },
    {
        id: '900230106',
        name: 'Potsdam, Konrad-Wolf-Allee/Sternstr.',
    },
    {
        id: '900311030',
        name: 'Spreeau, Störitzsee',
    },
    {
        id: '900020252',
        name: 'Schlossbrücke',
    },
    {
        id: '900350465',
        name: 'Groß-Ziethen (BAR), Dorf',
    },
    {
        id: '900175524',
        name: 'Wernersee',
    },
    {
        id: '1',
        name: 'Bad Muskau, Siedlung',
    },
    {
        id: '900074213',
        name: 'Egestorffstr.',
    },
    {
        id: '900073259',
        name: 'Sperenberger Str.',
    },
    {
        id: '900073205',
        name: 'Nunsdorfer Ring Süd',
    },
    {
        id: '900415114',
        name: 'Doberlug (EE), Siedlung',
    },
    {
        id: '900073260',
        name: 'Nunsdorfer Ring Nord',
    },
    {
        id: '900230176',
        name: 'Potsdam, Am Schragen/Russische Kolonie',
    },
    {
        id: '900025422',
        name: 'Waldschulallee/Harbigstr.',
    },
    {
        id: '900068151',
        name: 'Gontermannstr.',
    },
    {
        id: '900341224',
        name: 'Tantow, Bhf',
    },
    {
        id: '900415146',
        name: 'Wiederau, Dorfplatz',
    },
    {
        id: '900120003',
        name: 'S Ostkreuz',
    },
    {
        id: '900435176',
        name: 'Lauchhammer Mitte, Haus der Jugend',
    },
    {
        id: '900220801',
        name: 'Seeburg, Havellandhalle',
    },
    {
        id: '900220345',
        name: 'Seeburg, Mühlenweg/Gemeindeamt',
    },
    {
        id: '900415144',
        name: 'Kirchhain, Finsterwalder Str.',
    },
    {
        id: '900321490',
        name: 'Jahnsfelde, An der B 1',
    },
    {
        id: '900435185',
        name: 'Grünewalde, Staupitzer Str.',
    },
    {
        id: '900321474',
        name: 'Herzershof',
    },
    {
        id: '900220347',
        name: 'Seeburg, Engelsfelde',
    },
    {
        id: '900415142',
        name: 'Massen, Finsterwalder Str. (Schule)',
    },
    {
        id: '900340503',
        name: 'Prenzlau, Am Bahnhof',
    },
    {
        id: '900053355',
        name: 'Stölpchensee',
    },
    {
        id: '900068105',
        name: 'Hoeppnerstr.',
    },
    {
        id: '900220119',
        name: 'Teltow, Asternstr.',
    },
    {
        id: '900068103',
        name: 'Boelckestr./Hoeppnerstr.',
    },
    {
        id: '900321445',
        name: 'Gusow, Wirtschaftshof',
    },
    {
        id: '900415133',
        name: 'Finsterwalde, Sorno Hauptstr.',
    },
    {
        id: '900321444',
        name: 'Gusow, Siedlung',
    },
    {
        id: '900058104',
        name: 'Schöneberger Str.',
    },
    {
        id: '900446118',
        name: 'Preilack, Am Eichengrund',
    },
    {
        id: '900052356',
        name: 'Lloyd-G.-Wells-Str.',
    },
    {
        id: '900415113',
        name: 'Lindena, Dorfplatz',
    },
    {
        id: '900350519',
        name: 'Klein Ziethen (BAR), Dorf',
    },
    {
        id: '900415086',
        name: 'Buchhain, Ausbau',
    },
    {
        id: '900321361',
        name: 'Carzig, Dorf',
    },
    {
        id: '900321360',
        name: 'Carzig, B 167',
    },
    {
        id: '900446034',
        name: 'Maust, Dorfplatz',
    },
    {
        id: '900210005',
        name: 'Nauen, Bhf',
    },
    {
        id: '900230057',
        name: 'Potsdam, Werderscher Damm/Forststr.',
    },
    {
        id: '900446035',
        name: 'Maust, Friedhof',
    },
    {
        id: '900075102',
        name: 'Harzer Str./Wildenbruchstr.',
    },
    {
        id: '710008012321',
        name: 'Dorf Mecklenburg, Bhf',
    },
    {
        id: '900245229',
        name: 'Luckenwalde, Fontanestr.',
    },
    {
        id: '900068203',
        name: 'Berlinickeplatz',
    },
    {
        id: '900415085',
        name: 'Prießen, Ausbau',
    },
    {
        id: '900415112',
        name: 'Doberlug-Kirchhain, Bhf',
    },
    {
        id: '900245074',
        name: 'Mahlow, Lichtenrader Str.',
    },
    {
        id: '900079252',
        name: 'Haus Bremen',
    },
    {
        id: '900068201',
        name: 'S+U Tempelhof',
    },
    {
        id: '900470297',
        name: 'Cottbus, Willmersdorf Möbeldorf',
    },
    {
        id: '900056104',
        name: 'U Bülowstr.',
    },
    {
        id: '900016251',
        name: 'Fichtestr.',
    },
    {
        id: '900230124',
        name: 'Potsdam, Thaerstr.',
    },
    {
        id: '900415077',
        name: 'Gruhno',
    },
    {
        id: '900016202',
        name: 'U Südstern',
    },
    {
        id: '900220266',
        name: 'Buckau (PM), Birkenreismühle',
    },
    {
        id: '900446036',
        name: 'Maust, Trift',
    },
    {
        id: '900017171',
        name: 'U Mehringdamm',
    },
    {
        id: '900230059',
        name: 'Potsdam, Zum Bahnhof Pirschheide',
    },
    {
        id: '900415109',
        name: 'Breitenau',
    },
    {
        id: '900230051',
        name: 'Potsdam, Schloss Charlottenhof',
    },
    {
        id: '900230072',
        name: 'Potsdam, Schiffbauergasse/Berliner Str.',
    },
    {
        id: '900210071',
        name: 'Brieselang, GVZ',
    },
    {
        id: '900275199',
        name: 'Brandenburg, ZOB',
    },
    {
        id: '900175559',
        name: 'Ohserring',
    },
    {
        id: '900085153',
        name: 'Sebastian-Friedhof',
    },
    {
        id: '900085107',
        name: 'Friedhof Reinickendorf',
    },
    {
        id: '900070451',
        name: 'Pilatusweg',
    },
    {
        id: '900230025',
        name: 'Potsdam, Glienicker Brücke',
    },
    {
        id: '900321107',
        name: 'Kerstenbruch, Ausbau',
    },
    {
        id: '900007111',
        name: 'Lortzingstr.',
    },
    {
        id: '900193508',
        name: 'Radickestr./Anna-Seghers-Str.',
    },
    {
        id: '900415100',
        name: 'Kirchhain, Luckauer Str.',
    },
    {
        id: '900435005',
        name: 'Großräschen, Ost Abzweig B 96',
    },
    {
        id: '900260001',
        name: 'S Königs Wusterhausen',
    },
    {
        id: '900007114',
        name: 'Gartenstr./Feldstr.',
    },
    {
        id: '900078253',
        name: 'Karl-Marx-Platz',
    },
    {
        id: '900230068',
        name: 'Potsdam, Zum Kahleberg',
    },
    {
        id: '710009215691',
        name: 'Parchim, Bhf',
    },
    {
        id: '900320822',
        name: 'Buckow (Märkische Schweiz), Markt',
    },
    {
        id: '710009950003',
        name: 'Bad Kleinen, Bhf',
    },
    {
        id: '900039162',
        name: 'Kaserne Hottengrund',
    },
    {
        id: '900275811',
        name: 'Brandenburg, Massowburg',
    },
    {
        id: '900275403',
        name: 'Brandenburg, Werner-Seelenbinder-Str.',
    },
    {
        id: '900275805',
        name: 'Brandenburg, Brielower Str.',
    },
    {
        id: '900320604',
        name: 'Eggersdorf (Strausberg), Wiener Str.',
    },
    {
        id: '900245840',
        name: 'Ludwigsfelde, Struveweg',
    },
    {
        id: '900320603',
        name: 'Eggersdorf (Strausberg), Waldfriedhof',
    },
    {
        id: '900220351',
        name: 'Wust, Einkaufszentrum',
    },
    {
        id: '900134500',
        name: 'Blankenfelder Str.',
    },
    {
        id: '900220236',
        name: 'Steinberg (PM), Molkerei',
    },
    {
        id: '900320601',
        name: 'Eggersdorf (Strausberg), Schule',
    },
    {
        id: '900220280',
        name: 'Brielow, Dorf',
    },
    {
        id: '900070305',
        name: 'Hundsteinweg',
    },
    {
        id: '900350338',
        name: 'Eberswalde, Humboldt-Gymnasium',
    },
    {
        id: '900310971',
        name: 'Petersdorf (bei Briesen), Gemeinde',
    },
    {
        id: '900132502',
        name: 'Nordendstr.',
    },
    {
        id: '900350369',
        name: 'Eberswalde, Zoo',
    },
    {
        id: '900027351',
        name: 'Paul-Gerhardt-Ring',
    },
    {
        id: '900073281',
        name: 'Waldsassener Str.',
    },
    {
        id: '900311339',
        name: 'Eisenhüttenstadt, Frankfurter Str.',
    },
    {
        id: '900311341',
        name: 'Eisenhüttenstadt, Fürstenberger Str.',
    },
    {
        id: '900220282',
        name: 'Radewege, Siedlung',
    },
    {
        id: '900320605',
        name: 'Eggersdorf (Strausberg), Im Stillen Grund',
    },
    {
        id: '900445901',
        name: 'Komptendorf, Wendeplatz',
    },
    {
        id: '900320606',
        name: 'Eggersdorf (Strausberg), Mittelstr.',
    },
    {
        id: '900321047',
        name: 'Beauregard, Altwriezen',
    },
    {
        id: '900007159',
        name: 'Humboldtsteg',
    },
    {
        id: '900340444',
        name: 'Luisenau',
    },
    {
        id: '900320301',
        name: 'Schulzendorf (MOL), Marienberg',
    },
    {
        id: '900445167',
        name: 'Bagenz, Weg zum Bahnhof',
    },
    {
        id: '900134515',
        name: 'Vienweg',
    },
    {
        id: '900445772',
        name: 'Kahsel, Siedlung',
    },
    {
        id: '900220287',
        name: 'Radewege, Pählbrücke',
    },
    {
        id: '900142530',
        name: 'Blankenburger Pflasterweg',
    },
    {
        id: '900445771',
        name: 'Kahsel, Fließweg',
    },
    {
        id: '900320627',
        name: 'Eggersdorf (Strausberg), Hasenweg',
    },
    {
        id: '900142531',
        name: 'Mörderberg',
    },
    {
        id: '900320611',
        name: 'Petershagen (b. Berlin), Elbestr.',
    },
    {
        id: '900445386',
        name: 'Drieschnitz, Sportplatz',
    },
    {
        id: '900445385',
        name: 'Drieschnitz, Denkmal',
    },
    {
        id: '900320609',
        name: 'Eggersdorf (Strausberg), Landsberger Str.',
    },
    {
        id: '900176535',
        name: 'Bütower Str.',
    },
    {
        id: '900089301',
        name: 'U Alt-Tegel',
    },
    {
        id: '900435044',
        name: 'Großkoschen, Rezeption',
    },
    {
        id: '900220921',
        name: 'Seddin (PM), Jägerhof',
    },
    {
        id: '900320607',
        name: 'Eggersdorf (Strausberg), Ahornallee',
    },
    {
        id: '900220208',
        name: 'Götzer Berge',
    },
    {
        id: '900220281',
        name: 'Brielow, Mühlenweg',
    },
    {
        id: '900311345',
        name: 'Eisenhüttenstadt, Gubener Str.',
    },
    {
        id: '900310500',
        name: 'Schöneiche (bei Berlin), Miethkestr.',
    },
    {
        id: '900275138',
        name: 'Klein Kreutz, Eigenheime',
    },
    {
        id: '900320282',
        name: 'Herzfelde (MOL), Strausberger Str.',
    },
    {
        id: '900012152',
        name: 'Blücherstr.',
    },
    {
        id: '900311317',
        name: 'Eisenhüttenstadt, Fr.-List-Str.',
    },
    {
        id: '900320273',
        name: 'Herzfelde (MOL), Ziegelwerk',
    },
    {
        id: '900230040',
        name: 'Potsdam, Hubertusdamm/Steinstr.',
    },
    {
        id: '900261084',
        name: 'Schulzendorf (LDS), Münchener Str.',
    },
    {
        id: '900341058',
        name: 'Schmargendorf, Hemme Milch',
    },
    {
        id: '900321082',
        name: 'Güstebieser Loose, Dorf',
    },
    {
        id: '900275809',
        name: 'Brandenburg, Krakauer Landstr.',
    },
    {
        id: '900275821',
        name: 'Klein Kreutz',
    },
    {
        id: '4128',
        name: 'Neu Pudagla',
    },
    {
        id: '900310735',
        name: 'Biegen',
    },
    {
        id: '900082257',
        name: 'Wutzkyallee/Fritz-Erler-Allee',
    },
    {
        id: '710009950011',
        name: 'Grabow (Mecklenburg), Bhf',
    },
    {
        id: '710009950010',
        name: 'Ludwigslust, Bhf',
    },
    {
        id: '710009950009',
        name: 'Lüblow(Meckl), Bhf',
    },
    {
        id: '710009950008',
        name: 'Rastow, Bhf',
    },
    {
        id: '710009950007',
        name: 'Sülstorf, Bhf',
    },
    {
        id: '710009950006',
        name: 'Schwerin, Bhf Süd',
    },
    {
        id: '710009950005',
        name: 'Schwerin, Bhf Mitte',
    },
    {
        id: '900340417',
        name: 'Kraatz (UM), Dorf',
    },
    {
        id: '900210685',
        name: 'Dallgow-Döberitz, Kastanienstr.',
    },
    {
        id: '900245396',
        name: 'Mahlow, Paul-Krebs-Str.',
    },
    {
        id: '900230182',
        name: 'Potsdam, Im Bogen/Forststr.',
    },
    {
        id: '900074256',
        name: 'Lichtenrader Damm 254',
    },
    {
        id: '900311359',
        name: 'Eisenhüttenstadt, Oderwerft',
    },
    {
        id: '900074205',
        name: 'Lichtenrader Damm/Barnetstr.',
    },
    {
        id: '900220262',
        name: 'Köpernitz (PM), B 107',
    },
    {
        id: '900320522',
        name: 'Strausberg, Landhausstr.',
    },
    {
        id: '900074206',
        name: 'Im Domstift/Groß-Ziethener Str.',
    },
    {
        id: '900340055',
        name: 'Seehausen (UM), Bhf',
    },
    {
        id: '900074253',
        name: 'Volkspark Lichtenrade',
    },
    {
        id: '000310859001',
        name: 'Nieden, Abzweig',
    },
    {
        id: '900220235',
        name: 'Glienecke',
    },
    {
        id: '900230089',
        name: 'Potsdam, In der Aue',
    },
    {
        id: '900210356',
        name: 'Gohlitz, Tremmener Str.',
    },
    {
        id: '900230061',
        name: 'Potsdam, Im Bogen/Zeppelinstr.',
    },
    {
        id: '900340353',
        name: 'Hammelspring, Bhf',
    },
    {
        id: '900320502',
        name: 'Hönow, Libellenstr.',
    },
    {
        id: '900320501',
        name: 'Hoppegarten, Hönower Weg',
    },
    {
        id: '900275814',
        name: 'Brandenburg, Plaue Görneweg',
    },
    {
        id: '900220247',
        name: 'Woltersdorf, Dorf',
    },
    {
        id: '900320632',
        name: 'Petershagen (b. Berlin), Försterklause',
    },
    {
        id: '900135013',
        name: 'Zepernicker Str.',
    },
    {
        id: '900082101',
        name: 'Klinikum Neukölln',
    },
    {
        id: '900222101',
        name: 'Jeserig (bei Wiesenburg), Ausbau',
    },
    {
        id: '900068156',
        name: 'Bayernring',
    },
    {
        id: '900017102',
        name: 'U Platz der Luftbrücke',
    },
    {
        id: '900310610',
        name: 'Kummersdorf (LOS), Bhf',
    },
    {
        id: '900310611',
        name: 'Storkow, Bhf',
    },
    {
        id: '900310612',
        name: 'Storkow, Hubertushöhe',
    },
    {
        id: '900310613',
        name: 'Wendisch Rietz, Bhf',
    },
    {
        id: '900310614',
        name: 'Buckow (bei Beeskow), Bhf',
    },
    {
        id: '900415000',
        name: 'Dollenchen, Dorfplatz',
    },
    {
        id: '900320684',
        name: 'Bruchmühle, Sportplatz',
    },
    {
        id: '900261042',
        name: 'Körbiskrug, Bürgerswalder Str.',
    },
    {
        id: '900435042',
        name: 'Kleinkoschen, Gasthaus',
    },
    {
        id: '900310993',
        name: 'Rauen, Schule',
    },
    {
        id: '900222092',
        name: 'Grubo',
    },
    {
        id: '900320680',
        name: 'Fredersdorf (MOL), Friedrich-Engels-Str.',
    },
    {
        id: '900175001',
        name: 'S+U Wuhletal',
    },
    {
        id: '900320011',
        name: 'Herrensee, Bhf',
    },
    {
        id: '900320012',
        name: 'Rehfelde, Bhf',
    },
    {
        id: '900320014',
        name: 'Müncheberg, Bhf',
    },
    {
        id: '900320678',
        name: 'Fredersdorf (MOL), Posentsche Str.',
    },
    {
        id: '900230080',
        name: 'Potsdam, Plantagenstr.',
    },
    {
        id: '900350164',
        name: 'Schönerlinde (BAR), Bhf',
    },
    {
        id: '900350165',
        name: 'Schönwalde (BAR), Bhf',
    },
    {
        id: '900350149',
        name: 'Basdorf (BAR), Bhf',
    },
    {
        id: '900320687',
        name: 'Fredersdorf (MOL), Bruchmühler Str.',
    },
    {
        id: '900340162',
        name: 'Friedrichsthal (UM), Abzweig',
    },
    {
        id: '900320688',
        name: 'Fredersdorf (MOL), Bachstr.',
    },
    {
        id: '900134506',
        name: 'Blankenburger Weg',
    },
    {
        id: '900320821',
        name: 'Buckow (Märkische Schweiz), Strand',
    },
    {
        id: '710008012824',
        name: 'Ruthenbeck',
    },
    {
        id: '900082151',
        name: 'Rotschwanzweg',
    },
    {
        id: '900260010',
        name: 'Niederlehme, Bhf',
    },
    {
        id: '900260011',
        name: 'Zernsdorf, Bhf',
    },
    {
        id: '900260012',
        name: 'Kablow, Bhf',
    },
    {
        id: '900260013',
        name: 'Friedersdorf (LDS), Bhf',
    },
    {
        id: '900016250',
        name: 'Hasenheide',
    },
    {
        id: '900320803',
        name: 'Waldsieversdorf, Abzweig',
    },
    {
        id: '900341154',
        name: 'Schwedt, Rosa-Luxemburg-Str.',
    },
    {
        id: '900220923',
        name: 'Seddin (PM), Trift',
    },
    {
        id: '900063351',
        name: 'Stindestr.',
    },
    {
        id: '900320800',
        name: 'Radebrück, Kreuzung',
    },
    {
        id: '900275224',
        name: 'Brandenburg, Dreifertstr.',
    },
    {
        id: '900063402',
        name: 'Siemensstr./Halskestr.',
    },
    {
        id: '900340097',
        name: 'Flemsdorf, Ausbau',
    },
    {
        id: '900320702',
        name: 'Bruchmühle, Mühlenfließ',
    },
    {
        id: '900068158',
        name: 'Adolf-Scheidt-Platz',
    },
    {
        id: '900320700',
        name: 'Bruchmühle, Landsberger Str.',
    },
    {
        id: '900068157',
        name: 'Schreiberring',
    },
    {
        id: '900215172',
        name: 'Brügge, Bhf',
    },
    {
        id: '900350683',
        name: 'Schönow (BAR), Bernauer Allee',
    },
    {
        id: '900350172',
        name: 'Werneuchen, Bhf',
    },
    {
        id: '900340034',
        name: 'Blumenhagen (UM), Abzweig',
    },
    {
        id: '900320650',
        name: 'Vogelsdorf, Seestr.',
    },
    {
        id: '900321810',
        name: 'Werbig (MOL), Bhf',
    },
    {
        id: '900446168',
        name: 'Roggosen, Waldhotel',
    },
    {
        id: '900415690',
        name: 'Herzberg (Elster), Lugstr.',
    },
    {
        id: '900350178',
        name: 'Blumberg (BAR), Rehhahn',
    },
    {
        id: '900321540',
        name: 'Letschin, Bhf',
    },
    {
        id: '900321741',
        name: 'Seelow, Bhf',
    },
    {
        id: '900340165',
        name: 'Friedrichsthal (UM), Teerofenbrücke Abzweig',
    },
    {
        id: '900210318',
        name: 'Nennhausen, Bhf',
    },
    {
        id: '900120010',
        name: 'S Ostbahnhof/Erich-Steinfurth-Str.',
    },
    {
        id: '900320652',
        name: 'Vogelsdorf, Fröbelstr.',
    },
    {
        id: '900078271',
        name: 'Lahnstr./U Neukölln',
    },
    {
        id: '900360061',
        name: 'Frankfurt (Oder), Hexenberg',
    },
    {
        id: '900350168',
        name: 'Seefeld (Mark), Bhf',
    },
    {
        id: '900321066',
        name: 'Eichwerder, Abzweig Neukietz',
    },
    {
        id: '900446071',
        name: 'Neuhausen (SPN), Nord',
    },
    {
        id: '900320646',
        name: 'Petershagen (b. Berlin), Lessingstr.',
    },
    {
        id: '900205551',
        name: 'Rheinsberg, Am Wald',
    },
    {
        id: '900446070',
        name: 'Neuhausen (SPN), Bhf',
    },
    {
        id: '900340093',
        name: 'Dobberzin, Abzweig Kerkower Str.',
    },
    {
        id: '900310501',
        name: 'Schöneiche (bei Berlin), W.-Dehmel-Str.',
    },
    {
        id: '900340036',
        name: 'Blumenhagen (UM), Wildbahn',
    },
    {
        id: '900350409',
        name: 'Finowfurt, Post',
    },
    {
        id: '900446424',
        name: 'Trebendorf, Wendeplatz',
    },
    {
        id: '900140706',
        name: 'Weißer See',
    },
    {
        id: '900340163',
        name: 'Friedrichsthal (UM), Altes Grenzhaus',
    },
    {
        id: '900320657',
        name: 'Vogelsdorf, Spreestr.',
    },
    {
        id: '900220300',
        name: 'Potsdam, Römerschanze',
    },
    {
        id: '900320658',
        name: 'Vogelsdorf, Rüdersdorfer Str.',
    },
    {
        id: '900350169',
        name: 'Wandlitz, Bhf',
    },
    {
        id: '900350154',
        name: 'Klosterfelde, Bhf',
    },
    {
        id: '900320676',
        name: 'Fredersdorf (MOL), Am Rathaus',
    },
    {
        id: '900097102',
        name: 'Pannwitzstr.',
    },
    {
        id: '900100025',
        name: 'S+U Brandenburger Tor',
    },
    {
        id: '900310994',
        name: 'Rauen, Siedlerweg',
    },
    {
        id: '900350060',
        name: 'Golzow (BAR), Bhf',
    },
    {
        id: '5787',
        name: 'Kratzeburg, Bhf',
    },
    {
        id: '500000028401',
        name: 'Collinshof',
    },
    {
        id: '900190001',
        name: 'S Treptower Park',
    },
    {
        id: '900321025',
        name: 'Bad Freienwalde, Bhf',
    },
    {
        id: '900350493',
        name: 'Niederfinow, Bhf',
    },
    {
        id: '900350502',
        name: 'Joachimsthal, Kaiserbahnhof',
    },
    {
        id: '900321139',
        name: 'Neutrebbin, Bhf',
    },
    {
        id: '900350809',
        name: 'Althüttendorf, Bhf',
    },
    {
        id: '900350811',
        name: 'Joachimsthal, Bhf',
    },
    {
        id: '900310600',
        name: 'Lindenberg (Mark), Bhf',
    },
    {
        id: '900311129',
        name: 'Beeskow, Bhf',
    },
    {
        id: '900058101',
        name: 'S Südkreuz',
    },
    {
        id: '900215324',
        name: 'Glöwen, Schule',
    },
    {
        id: '900310784',
        name: 'Fürstenwalde, Grenzstr.',
    },
    {
        id: '900078103',
        name: 'U Karl-Marx-Str.',
    },
    {
        id: '900415149',
        name: 'Kirchhain, Wasserwerk',
    },
    {
        id: '900210571',
        name: 'Neufalkenrehde, Dorf',
    },
    {
        id: '900220631',
        name: 'Werder (Havel), Obstzüchterstr.',
    },
    {
        id: '900340354',
        name: 'Hammelspring, Dorf',
    },
    {
        id: '900311306',
        name: 'Eisenhüttenstadt, An der Pohlitzer Mühle/B 112',
    },
    {
        id: '900220698',
        name: 'Glindow, Mühlensteig',
    },
    {
        id: '8010151',
        name: 'Güsen, Bhf',
    },
    {
        id: '900260500',
        name: 'Kolberg, Siedlung',
    },
    {
        id: '900203749',
        name: 'Dannenwalde (bei Gransee), Bhf',
    },
    {
        id: '900220684',
        name: 'Glindow, Sportplatz',
    },
    {
        id: '900077201',
        name: 'Peter-Anders-Str.',
    },
    {
        id: '900051301',
        name: 'U Oskar-Helene-Heim',
    },
    {
        id: '900415505',
        name: 'Elsterwerda, Elsterbrücke',
    },
    {
        id: '8011959',
        name: 'Jesewitz (bei Leipzig), Bhf',
    },
    {
        id: '900261549',
        name: 'Lubolz, Bhf',
    },
    {
        id: '900416053',
        name: 'Prösen, West',
    },
    {
        id: '900416052',
        name: 'Prösen, Ost',
    },
    {
        id: '900220612',
        name: 'Werder (Havel), Werderpark',
    },
    {
        id: '900415994',
        name: 'Oelsig, Gasthaus',
    },
    {
        id: '900415506',
        name: 'Elsterwerda, Vredener Str.',
    },
    {
        id: '900096455',
        name: 'Rotbuchenweg',
    },
    {
        id: '4238',
        name: 'Peenemünde',
    },
    {
        id: '4239',
        name: 'Karlshagen',
    },
    {
        id: '8011960',
        name: 'Jessen (Elster), Bhf',
    },
    {
        id: '900311531',
        name: 'Pohlitz, Pohlitzer Mühle',
    },
    {
        id: '900092202',
        name: 'Hainbuchenstr.',
    },
    {
        id: '900415957',
        name: 'Mühlberg (Elbe), Weinberge Mühlberger Str.',
    },
    {
        id: '900340781',
        name: 'Prenzlau, Stettiner Str.',
    },
    {
        id: '900062203',
        name: 'U Schloßstr.',
    },
    {
        id: '900415538',
        name: 'Elsterwerda-Biehla, Haidaer Str.',
    },
    {
        id: '900009151',
        name: 'Gerichtstr.',
    },
    {
        id: '900416094',
        name: 'Rückersdorf, Bhf',
    },
    {
        id: '900222161',
        name: 'Rädigke',
    },
    {
        id: '900350158',
        name: 'Rüdnitz, Bhf',
    },
    {
        id: '900204001',
        name: 'Schwante, Bhf',
    },
    {
        id: '900009102',
        name: 'U Leopoldplatz',
    },
    {
        id: '900350141',
        name: 'Ahrensfelde, Friedhof',
    },
    {
        id: '900350142',
        name: 'Ahrensfelde, Nord',
    },
    {
        id: '900222108',
        name: 'Klepzig',
    },
    {
        id: '900311542',
        name: 'Rießen I',
    },
    {
        id: '900415518',
        name: 'Elsterwerda, Weinberge',
    },
    {
        id: '900222091',
        name: 'Groß Marzehns',
    },
    {
        id: '900311530',
        name: 'Pohlitz, Ortsmitte',
    },
    {
        id: '900220012',
        name: 'Potsdam, Marquardt',
    },
    {
        id: '900205011',
        name: 'Herzberg (Mark), Bhf',
    },
    {
        id: '900134514',
        name: 'Triftstr.',
    },
    {
        id: '900415955',
        name: 'Mühlberg (Elbe), Triftweg',
    },
    {
        id: '900415956',
        name: 'Mühlberg (Elbe), Weinberge Burxdorfer Str.',
    },
    {
        id: '900245035',
        name: 'Baruth, Bhf',
    },
    {
        id: '8011486',
        name: 'Elster (Elbe), Bhf',
    },
    {
        id: '900445750',
        name: 'Jänschwalde, Bhf',
    },
    {
        id: '900350126',
        name: 'Melchow, Bhf',
    },
    {
        id: '900049241',
        name: 'Zehlendorf Eiche',
    },
    {
        id: '900096406',
        name: 'Am Nordgraben/Oranienburger Str.',
    },
    {
        id: '900360201',
        name: 'Frankfurt (Oder), Booßen Friedhof',
    },
    {
        id: '900096453',
        name: 'Rathauspromenade',
    },
    {
        id: '900340360',
        name: 'Güstow, Mitte',
    },
    {
        id: '900051151',
        name: 'Messelstr.',
    },
    {
        id: '900415476',
        name: 'Lausitz, B183',
    },
    {
        id: '900416026',
        name: 'Polzen, Parkscheune',
    },
    {
        id: '8011294',
        name: 'Burg (bei Magdeburg), Bhf',
    },
    {
        id: '900321008',
        name: 'Altglietzen, Wendestelle',
    },
    {
        id: '900200008',
        name: 'S Birkenwerder',
    },
    {
        id: '900415470',
        name: 'Elsterwerda-Biehla, Am Stein',
    },
    {
        id: '900435802',
        name: 'Schwarzheide, Ost',
    },
    {
        id: '900445751',
        name: 'Jänschwalde, Ost',
    },
    {
        id: '900415461',
        name: 'Haida, Elsterwerdaer Str.',
    },
    {
        id: '900210379',
        name: 'Hohennauen, Ausbau',
    },
    {
        id: '900321871',
        name: 'Zechin, Dorf',
    },
    {
        id: '5394',
        name: 'Zabeltitz, Bhf',
    },
    {
        id: '900415459',
        name: 'Lindena, Schönborner Str.',
    },
    {
        id: '900470251',
        name: 'Cottbus, Welzower Str./Thiemstr.',
    },
    {
        id: '900340020',
        name: 'Biesendahlshof, Abzweig',
    },
    {
        id: '900110013',
        name: 'Prenzlauer Allee/Ostseestr.',
    },
    {
        id: '900321056',
        name: 'Bralitz, Abzweig',
    },
    {
        id: '900360203',
        name: 'Frankfurt (Oder), Booßen Siedlung',
    },
    {
        id: '900120006',
        name: 'U Strausberger Platz',
    },
    {
        id: '900205617',
        name: 'Wittstock (Dosse), Bhf',
    },
    {
        id: '900415486',
        name: 'Dreska, Elsterwerdaer Str.',
    },
    {
        id: '900350842',
        name: 'Zepernick, Schule',
    },
    {
        id: '900445801',
        name: 'Kerkwitz, Bhf',
    },
    {
        id: '900321099',
        name: 'Hohenwutzen, Damm',
    },
    {
        id: '000008010284',
        name: 'Priemerburg',
    },
    {
        id: '900350495',
        name: 'Hohensaaten, Schleuse',
    },
    {
        id: '900230006',
        name: 'Potsdam, Charlottenhof',
    },
    {
        id: '8013275',
        name: 'Lutherstadt Wittenberg, Bhf Labetz',
    },
    {
        id: '900415502',
        name: 'Elsterwerda, Bhf',
    },
    {
        id: '900215282',
        name: 'Felsenhagen',
    },
    {
        id: '8011048',
        name: 'Annaburg, Bhf',
    },
    {
        id: '900120025',
        name: 'U Weberwiese',
    },
    {
        id: '900205466',
        name: 'Neuruppin, K.-Kurzbach-Platz',
    },
    {
        id: '172',
        name: 'Züssow, Bhf',
    },
    {
        id: '900416021',
        name: 'Poley, Henriette',
    },
    {
        id: '900415501',
        name: 'Elsterwerda, An der Unterführung',
    },
    {
        id: '900415500',
        name: 'Elsterwerda, Ackerstr.',
    },
    {
        id: '900311620',
        name: 'Wiesenau, Bhf',
    },
    {
        id: '900415488',
        name: 'Dreska, Wendestelle',
    },
    {
        id: '900470163',
        name: 'Cottbus, Merzdorf',
    },
    {
        id: '900215609',
        name: 'Meyenburg, Bhf',
    },
    {
        id: '900311543',
        name: 'Rießen, Ortsmitte',
    },
    {
        id: '900415542',
        name: 'Elsterwerda-Biehla, Saathainer Str.',
    },
    {
        id: '900435137',
        name: 'Lauchhammer West, Internat',
    },
    {
        id: '900074101',
        name: 'Mariendorfer Damm/Buckower Chaussee',
    },
    {
        id: '900176521',
        name: 'Hultschiner Damm',
    },
    {
        id: '900321060',
        name: 'Bralitz, Kinderheim',
    },
    {
        id: '900350151',
        name: 'Blumberg (BAR), Bhf',
    },
    {
        id: '900470209',
        name: 'Cottbus, Merzdorf Tranitzfließ',
    },
    {
        id: '900415799',
        name: 'Knippelsdorf, Siedlung',
    },
    {
        id: '900038152',
        name: 'Gatower Heide',
    },
    {
        id: '80001',
        name: 'Neustrelitz, Hbf',
    },
    {
        id: '900220152',
        name: 'Wiesenburg, Bhf',
    },
    {
        id: '900415807',
        name: 'Thalberg, Knissen',
    },
    {
        id: '900321059',
        name: 'Bralitz, Imperhandel',
    },
    {
        id: '900176542',
        name: 'Landsberger Str./Gewerbegebiet',
    },
    {
        id: '8010123',
        name: 'Genthin, Bhf',
    },
    {
        id: '900340870',
        name: 'Heinersdorf (UM), Abzweig Passower Str.',
    },
    {
        id: '900311233',
        name: 'Brieskow-Finkenheerd, Kraftwerk Finkenheerd',
    },
    {
        id: '5823',
        name: 'Frauenhain, Bhf',
    },
    {
        id: '8011322',
        name: 'Coswig (Anhalt), Bhf',
    },
    {
        id: '900176541',
        name: 'Pilgramer Str./Gewerbegebiet',
    },
    {
        id: '900415682',
        name: 'Herzberg (Elster), Elsterbrücke',
    },
    {
        id: '900176540',
        name: 'Pilgramer Str./Rahnsdorfer Str.',
    },
    {
        id: '900070355',
        name: 'Goldenes Horn Süd',
    },
    {
        id: '8012233',
        name: 'Linda (Elster), Bhf',
    },
    {
        id: '900176506',
        name: 'Landsberger Str.',
    },
    {
        id: '900470229',
        name: 'Cottbus, Rennbahnweg',
    },
    {
        id: '900415705',
        name: 'Hirschfeld, Elsterwerdaer Str.',
    },
    {
        id: '900176503',
        name: 'Donizettistr./Straußstr.',
    },
    {
        id: '900415749',
        name: 'Horst (EE), Gasthaus',
    },
    {
        id: '900415465',
        name: 'Prösen, Bhf',
    },
    {
        id: '900340656',
        name: 'Prenzlau, Gewerbegebiet Nord',
    },
    {
        id: '900470267',
        name: 'Cottbus, Spreewehrmühle',
    },
    {
        id: '900011101',
        name: 'U Rehberge',
    },
    {
        id: '8012393',
        name: 'Mühlanger, Bhf',
    },
    {
        id: '900435339',
        name: 'Großräschen, Bhf',
    },
    {
        id: '900415735',
        name: 'Hohenleipisch, Döllinger Str.',
    },
    {
        id: '900176511',
        name: 'Donizettistr.',
    },
    {
        id: '900230999',
        name: 'S Potsdam Hauptbahnhof',
    },
    {
        id: '900340416',
        name: 'Kraatz (UM), Ausbau',
    },
    {
        id: '900020153',
        name: 'DRK-Kliniken Westend',
    },
    {
        id: '900415725',
        name: 'Hohenbucko, Wasserturm',
    },
    {
        id: '900415088',
        name: 'Nexdorf, Hauptstr.',
    },
    {
        id: '900321007',
        name: 'Altglietzen, Kreuzung Neuenhagen',
    },
    {
        id: '900171002',
        name: 'S Friedrichsfelde Ost',
    },
    {
        id: '900245032',
        name: 'Großbeeren, Bhf',
    },
    {
        id: '900340004',
        name: 'Angermünde, Bhf',
    },
    {
        id: '900321121',
        name: 'Neuenhagen (bei Oderberg), Ziegelwerk Regina',
    },
    {
        id: '900415777',
        name: 'Kotschka',
    },
    {
        id: '900096358',
        name: 'Tramper Weg',
    },
    {
        id: '900415707',
        name: 'Hirschfeld, Mühle',
    },
    {
        id: '900078155',
        name: 'Jahnstr.',
    },
    {
        id: '900415836',
        name: 'Koßdorf, Mühlberger Str.',
    },
    {
        id: '900415669',
        name: 'Hartmannsdorf (EE), Gasthaus',
    },
    {
        id: '900435801',
        name: 'Ortrand, Bhf',
    },
    {
        id: '900415595',
        name: 'Friedrichsluga, B 101',
    },
    {
        id: '640000004015',
        name: 'Cottbus, Hermannstr.',
    },
    {
        id: '000005100145',
        name: 'Szczecin, Gumience',
    },
    {
        id: '900415628',
        name: 'Grassau (EE), Dorfplatz',
    },
    {
        id: '900470226',
        name: 'Cottbus, Potsdamer Str.',
    },
    {
        id: '900160010',
        name: 'Roederplatz',
    },
    {
        id: '900215898',
        name: 'Streesow, Ziegelei',
    },
    {
        id: '900415888',
        name: 'Maasdorf, Ortsmitte',
    },
    {
        id: '900245034',
        name: 'Neuhof (bei Zossen), Bhf',
    },
    {
        id: '900470290',
        name: 'Cottbus, Vorpark',
    },
    {
        id: '900415890',
        name: 'Maasdorf, Triftweg',
    },
    {
        id: '900470150',
        name: 'Cottbus, Feuerbachstr.',
    },
    {
        id: '900470307',
        name: 'Cottbus, Willmersdorf Nord',
    },
    {
        id: '900470168',
        name: 'Cottbus, Vetschauer Str./Hauptbahnhof',
    },
    {
        id: '900222268',
        name: 'Jeserig (bei Wiesenburg), Kindergarten',
    },
    {
        id: '900415903',
        name: 'Martinskirchen, Abzweig',
    },
    {
        id: '900222202',
        name: 'Welsigke',
    },
    {
        id: '900311631',
        name: 'Ziltendorf, Bhf',
    },
    {
        id: '900415904',
        name: 'Martinskirchen, Ortsausgang',
    },
    {
        id: '900415905',
        name: 'Martinskirchen, Schloß',
    },
    {
        id: '900310529',
        name: 'Schöneiche (bei Berlin), Stockholmer Str.',
    },
    {
        id: '900446411',
        name: 'Teichland, Bhf',
    },
    {
        id: '900008151',
        name: 'Gerichtstr./Hochstr.',
    },
    {
        id: '900416215',
        name: 'Uebigau, Bomsdorf',
    },
    {
        id: '900415863',
        name: 'Lebusa, Windmühle',
    },
    {
        id: '900096360',
        name: 'Tornower Weg',
    },
    {
        id: '000005100057',
        name: 'Szczecin, Glowny',
    },
    {
        id: '900245728',
        name: 'Rangsdorf, Ahlbecker Allee',
    },
    {
        id: '900415668',
        name: 'Haida, Gemeinde',
    },
    {
        id: '900350125',
        name: 'Chorin, Bhf',
    },
    {
        id: '900415657',
        name: 'Großrössen',
    },
    {
        id: '900311250',
        name: 'Coschen, Bhf',
    },
    {
        id: '900321013',
        name: 'Altranft, Bhf',
    },
    {
        id: '900245030',
        name: 'Ludwigsfelde, Birkengrund',
    },
    {
        id: '900176525',
        name: 'Rahnsdorfer Str.',
    },
    {
        id: '900140013',
        name: 'Berliner Allee/Rennbahnstr.',
    },
    {
        id: '900445593',
        name: 'Guben, Bhf',
    },
    {
        id: '900415644',
        name: 'Gröden, Ortrander Str.',
    },
    {
        id: '900311447',
        name: 'Mixdorf, Kupferhammer',
    },
    {
        id: '4240',
        name: 'Trassenmoor',
    },
    {
        id: '900094103',
        name: 'Zabel-Krüger-Damm/Titiseestr.',
    },
    {
        id: '900320007',
        name: 'S Neuenhagen (b Berlin)',
    },
    {
        id: '900096359',
        name: 'Wentowsteig',
    },
    {
        id: '900360000',
        name: 'Frankfurt (Oder), Bhf',
    },
    {
        id: '900100003',
        name: 'S+U Alexanderplatz',
    },
    {
        id: '900415861',
        name: 'Lebusa, Dorfmitte',
    },
    {
        id: '900415862',
        name: 'Lebusa, Kreuzung',
    },
    {
        id: '900321833',
        name: 'Worin, Grüner Wald/B 1',
    },
    {
        id: '900321032',
        name: 'Bad Freienwalde, Gesundbrunnenstr.',
    },
    {
        id: '900446106',
        name: 'Peitz, Dammzollstr.',
    },
    {
        id: '900340293',
        name: 'Falkenwalde',
    },
    {
        id: '900096156',
        name: 'Am Klötzgraben',
    },
    {
        id: '900446110',
        name: 'Peitz, Teichschänke',
    },
    {
        id: '900341156',
        name: 'Schwedt, Schillstr. Abzweig',
    },
    {
        id: '900310833',
        name: 'Görsdorf (bei Storkow)',
    },
    {
        id: '900176010',
        name: 'Lemkestr./Greifswalder Str.',
    },
    {
        id: '900131528',
        name: 'Grabbeallee/Pastor-Niemöller-Platz',
    },
    {
        id: '900415220',
        name: 'Trebbus, Kirche',
    },
    {
        id: '900350632',
        name: 'Oderberg, Stadtmitte',
    },
    {
        id: '900416268',
        name: 'Würdenhain',
    },
    {
        id: '900210610',
        name: 'Wernitz',
    },
    {
        id: '900311021',
        name: 'Spreeau, Dorf',
    },
    {
        id: '900193515',
        name: 'Büchnerweg',
    },
    {
        id: '900446109',
        name: 'Peitz, R.-Wagner-Str.',
    },
    {
        id: '900321600',
        name: 'Neu Mahlisch',
    },
    {
        id: '900078201',
        name: 'S+U Neukölln',
    },
    {
        id: '900162514',
        name: 'Köpenicker Allee',
    },
    {
        id: '900162513',
        name: 'Waldowallee',
    },
    {
        id: '900085150',
        name: 'Brusebergstr.',
    },
    {
        id: '900350509',
        name: 'Joachimsthal, Schule',
    },
    {
        id: '070101058997',
        name: 'U Afrikanische Str.',
    },
    {
        id: '000307892002',
        name: 'Dönhoffstr.',
    },
    {
        id: '900340125',
        name: 'Angermünde, Prenzlauer Str.',
    },
    {
        id: '900048104',
        name: 'Herthastr.',
    },
    {
        id: '900321104',
        name: 'Karlshof (bei Neulewin)',
    },
    {
        id: '900310893',
        name: 'Kehrigk',
    },
    {
        id: '900321635',
        name: 'Neulangsow',
    },
    {
        id: '900445456',
        name: 'Cottbus, Gallinchen Siedlung',
    },
    {
        id: '900041201',
        name: 'U Konstanzer Str.',
    },
    {
        id: '900022203',
        name: 'Dovebrücke',
    },
    {
        id: '900021102',
        name: 'Marchbrücke',
    },
    {
        id: '900096157',
        name: 'Alter Bernauer Heerweg',
    },
    {
        id: '900074265',
        name: 'Würzburger Str.',
    },
    {
        id: '900152005',
        name: 'Dorfstr./Lindenberger Str.',
    },
    {
        id: '900415247',
        name: 'Bad Liebenwerda, Oberschule',
    },
    {
        id: '900321673',
        name: 'Petershagen (bei FF), Dorfmitte',
    },
    {
        id: '900083353',
        name: 'Neuhofer Str.',
    },
    {
        id: '900074211',
        name: 'Pechsteinstr.',
    },
    {
        id: '900074264',
        name: 'Wittelsbacherstr./Augsburger Str.',
    },
    {
        id: '900074292',
        name: 'Kirchhainer Damm/Horstwalder Str.',
    },
    {
        id: '900321642',
        name: 'Niederjesar, Akazienweg',
    },
    {
        id: '900074263',
        name: 'Paplitzer Str.',
    },
    {
        id: '900321641',
        name: 'Niederjesar, Ernst-Thälmann-Str.',
    },
    {
        id: '900416242',
        name: 'Werchau',
    },
    {
        id: '900321640',
        name: 'Niederjesar, Dorf',
    },
    {
        id: '900074262',
        name: 'Galluner Str.',
    },
    {
        id: '900321639',
        name: 'Niederjesar, Am See',
    },
    {
        id: '900415244',
        name: 'Bad Liebenwerda, Busbahnhof',
    },
    {
        id: '900340127',
        name: 'Angermünde, Berliner Str.',
    },
    {
        id: '900210170',
        name: 'Schönwalde (HVL), Fliegersiedlung',
    },
    {
        id: '900086107',
        name: 'Uranusweg',
    },
    {
        id: '900415736',
        name: 'Hohenleipisch, Bhf',
    },
    {
        id: '900210162',
        name: 'Schönwalde (HVL), Kurt-Tucholsky-Str.',
    },
    {
        id: '900210161',
        name: 'Schönwalde (HVL), Großer Stern',
    },
    {
        id: '900415166',
        name: 'Elsterwerda-Biehla, Grundschule',
    },
    {
        id: '900110004',
        name: 'S Landsberger Allee',
    },
    {
        id: '900210160',
        name: 'Schönwalde (HVL), Kurmärkische Str.',
    },
    {
        id: '900340482',
        name: 'Neumeichow, Dorf',
    },
    {
        id: '900027256',
        name: 'Goltzstr./Rauchstr.',
    },
    {
        id: '900415162',
        name: 'Gröden, Elsterwerdaer Str.',
    },
    {
        id: '900340326',
        name: 'Gollin, Dorf',
    },
    {
        id: '900037251',
        name: 'Baluschekweg',
    },
    {
        id: '900037205',
        name: 'Leubnitzer Weg',
    },
    {
        id: '900086152',
        name: 'Hechelstr.',
    },
    {
        id: '900435105',
        name: 'Lauchhammer West, Fabrik 6',
    },
    {
        id: '900435106',
        name: 'Lauchhammer Mitte, Seniorenhof',
    },
    {
        id: '900435132',
        name: 'Kleinkmehlen',
    },
    {
        id: '900415155',
        name: 'Lausitz, Dorfplatz',
    },
    {
        id: '900321517',
        name: 'Klein Neuendorf, Kreuzung',
    },
    {
        id: '900415154',
        name: 'Schönborn, Schule',
    },
    {
        id: '900321515',
        name: 'Kienitz, Nord',
    },
    {
        id: '900195013',
        name: 'Wegedornstr./Semmelweisstr.',
    },
    {
        id: '900100501',
        name: 'U Schwartzkopffstr.',
    },
    {
        id: '900435024',
        name: 'Senftenberg, Sportplatz',
    },
    {
        id: '900134003',
        name: 'Schönerlinder Str.',
    },
    {
        id: '900096454',
        name: 'Techowpromenade',
    },
    {
        id: '900415189',
        name: 'Dübrichen, Dorfstr.',
    },
    {
        id: '900085151',
        name: 'Septimerbecken',
    },
    {
        id: '900311028',
        name: 'Spreeau, Spreewerder Dorf',
    },
    {
        id: '900210166',
        name: 'Schönwalde (HVL), Keltenweg',
    },
    {
        id: '900311358',
        name: 'Eisenhüttenstadt, Glogower Ring',
    },
    {
        id: '900210165',
        name: 'Schönwalde (HVL), Friedhof',
    },
    {
        id: '900050303',
        name: 'Plüschowstr.',
    },
    {
        id: '900210169',
        name: 'Schönwalde (HVL), Schule',
    },
    {
        id: '900321560',
        name: 'Lietzen, Ausbau',
    },
    {
        id: '900321556',
        name: 'Libbenichen, Otto-Grotewohl-Str.',
    },
    {
        id: '900321555',
        name: 'Libbenichen, B 167',
    },
    {
        id: '900210175',
        name: 'Schönwalde (HVL), Sebastian-Bach-Str.',
    },
    {
        id: '900061154',
        name: 'Schillerplatz',
    },
    {
        id: '900321550',
        name: 'Letschin, Wriezener Str.',
    },
    {
        id: '770000105693',
        name: 'Buschhof',
    },
    {
        id: '900100013',
        name: 'U Spittelmarkt',
    },
    {
        id: '900193702',
        name: 'Anna-Seghers-Str.',
    },
    {
        id: '900446461',
        name: 'Turnow, Gasthaus',
    },
    {
        id: '900415174',
        name: 'Kirchhain, Sportplatz',
    },
    {
        id: '900321544',
        name: 'Letschin, Hohes Feld',
    },
    {
        id: '900080455',
        name: 'Grüner Weg/Gutschmidtstr.',
    },
    {
        id: '900074266',
        name: 'Tietjenstr.',
    },
    {
        id: '900210001',
        name: 'Priort, Bhf',
    },
    {
        id: '900080453',
        name: 'Wesenberger Ring',
    },
    {
        id: '900100020',
        name: 'S+U Potsdamer Platz',
    },
    {
        id: '900415345',
        name: 'Falkenberg/E., Bhf',
    },
    {
        id: '900416115',
        name: 'Schlieben, B 87',
    },
    {
        id: '710008012951',
        name: 'Schwerin, Bhf Süd',
    },
    {
        id: '900321068',
        name: 'Falkenberg (MOL), Bhf',
    },
    {
        id: '710008012940',
        name: 'Schwerin, Bhf Mitte',
    },
    {
        id: '900120009',
        name: 'U Samariterstr.',
    },
    {
        id: '710008013073',
        name: 'Sülstorf, Bhf',
    },
    {
        id: '900350467',
        name: 'Grüntal, Kirche',
    },
    {
        id: '900445165',
        name: 'Bagenz, Bhf',
    },
    {
        id: '900350497',
        name: 'Hohensaaten, Siedlung',
    },
    {
        id: '900416120',
        name: 'Schlieben, Berga Naundorfer Str.',
    },
    {
        id: '900050357',
        name: 'Hartmannsweilerweg',
    },
    {
        id: '900340032',
        name: 'Blumberg (UM), Abzweig',
    },
    {
        id: '710008012716',
        name: 'Rastow, Bhf',
    },
    {
        id: '900203780',
        name: 'Löwenberg (Mark), Bhf',
    },
    {
        id: '900073201',
        name: 'Weskammstr.',
    },
    {
        id: '900446322',
        name: 'Spremberg, Bhf',
    },
    {
        id: '900220002',
        name: 'Saarmund, Bhf',
    },
    {
        id: '710008012384',
        name: 'Moidentin, Bhf',
    },
    {
        id: '900445455',
        name: 'Cottbus, Gallinchen Schorbuser Weg',
    },
    {
        id: '710008012262',
        name: 'Lüblow(Meckl), Bhf',
    },
    {
        id: '900080407',
        name: 'Buckower Damm/Gutschmidtstr.',
    },
    {
        id: '900321193',
        name: 'Neurüdnitz, Spitz',
    },
    {
        id: '900023252',
        name: 'Breitscheidplatz',
    },
    {
        id: '16',
        name: 'Dresden, Bhf Neustadt',
    },
    {
        id: '900083271',
        name: 'Hopfenweg',
    },
    {
        id: '900050391',
        name: 'Fischerhüttenstr.',
    },
    {
        id: '900340062',
        name: 'Casekow, Hohenselchower Str.',
    },
    {
        id: '900321812',
        name: 'Werbig (MOL), Loose',
    },
    {
        id: '900416065',
        name: 'Redlin (EE)',
    },
    {
        id: '900321811',
        name: 'Werbig (MOL), Dorf',
    },
    {
        id: '900446103',
        name: 'Peitz, Ost',
    },
    {
        id: '8010231',
        name: 'Meinsdorf (bei Roßlau), Bhf',
    },
    {
        id: '900470227',
        name: 'Cottbus, Sachsendorfer Hauptstr.',
    },
    {
        id: '900415392',
        name: 'Brottewitz',
    },
    {
        id: '900220344',
        name: 'Neubensdorf, Herrenhölzer Weg',
    },
    {
        id: '900100010',
        name: 'U Mohrenstr.',
    },
    {
        id: '900050304',
        name: 'Sven-Hedin-Platz',
    },
    {
        id: '900321132',
        name: 'Neuranft',
    },
    {
        id: '900321126',
        name: 'Neuküstrinchen',
    },
    {
        id: '5440',
        name: 'Lampertswalde, Bhf',
    },
    {
        id: '900470302',
        name: 'Cottbus, Zielona-Gora-Str.',
    },
    {
        id: '710008010216',
        name: 'Ludwigslust, Bhf',
    },
    {
        id: '900100017',
        name: 'U Schillingstr.',
    },
    {
        id: '900321712',
        name: 'Reitwein, Bhf',
    },
    {
        id: '900341254',
        name: 'Wartin, Ausbau Süd',
    },
    {
        id: '900321710',
        name: 'Rehfeld (MOL), Sophienthaler Str.',
    },
    {
        id: '900150021',
        name: 'Saaler Bogen',
    },
    {
        id: '900416193',
        name: 'Theisa, Gasthaus',
    },
    {
        id: '900341257',
        name: 'Wartin, Siedlung',
    },
    {
        id: '900350572',
        name: 'Lunow, Ausbau',
    },
    {
        id: '900416195',
        name: 'Theisa, Unterdorf',
    },
    {
        id: '900321707',
        name: 'Rathstock, B 112',
    },
    {
        id: '900321705',
        name: 'Rathstock, Abzweig Reitwein',
    },
    {
        id: '900415297',
        name: 'Elsterwerda, Elsterstr.',
    },
    {
        id: '900321704',
        name: 'Rathstock, Stromweg',
    },
    {
        id: '900321700',
        name: 'Quappendorf',
    },
    {
        id: '900350494',
        name: 'Hohensaaten, Dorf',
    },
    {
        id: '900416196',
        name: 'Theisa, Ziegelhäuser',
    },
    {
        id: '900321696',
        name: 'Posedin, Posediner Kreuzung',
    },
    {
        id: '900023302',
        name: 'U Adenauerplatz',
    },
    {
        id: '900096313',
        name: 'Teschendorfer Weg',
    },
    {
        id: '900470196',
        name: 'Cottbus, Poznaner Str./BTU',
    },
    {
        id: '900024202',
        name: 'U Wilmersdorfer Str.',
    },
    {
        id: '900416192',
        name: 'Thalberg, Schule',
    },
    {
        id: '900050256',
        name: 'Schützallee/Riemeisterstr.',
    },
    {
        id: '900012102',
        name: 'U Kochstr./Checkpoint Charlie',
    },
    {
        id: '900416130',
        name: 'Schmielsdorf, Gasthaus',
    },
    {
        id: '900050257',
        name: 'Sophie-Charlotte-Str.',
    },
    {
        id: '900050258',
        name: 'Am Fischtal',
    },
    {
        id: '900321747',
        name: 'Seelow, Gedenkstätte',
    },
    {
        id: '710008011681',
        name: 'Grabow (Mecklenburg), Bhf',
    },
    {
        id: '900415327',
        name: 'Falkenberg/E., Wasserturm',
    },
    {
        id: '900050259',
        name: 'Im Gestell',
    },
    {
        id: '900415324',
        name: 'Langennaundorf, Uebigauer Str.',
    },
    {
        id: '900008102',
        name: 'U Reinickendorfer Str.',
    },
    {
        id: '900050282',
        name: 'U Onkel Toms Hütte',
    },
    {
        id: '900067352',
        name: 'Maximilian-Kaller-Str.',
    },
    {
        id: '900027306',
        name: 'Waldkrankenhaus',
    },
    {
        id: '900416179',
        name: 'Stolzenhain, Gasthaus',
    },
    {
        id: '900415314',
        name: 'Lindena, Doberluger Str.',
    },
    {
        id: '900321742',
        name: 'Seelow, Busbahnhof',
    },
    {
        id: '900080456',
        name: 'Rotkehlchenweg',
    },
    {
        id: '900350732',
        name: 'Trampe (BAR), Leuenberger Wiese',
    },
    {
        id: '900083354',
        name: 'Eichenauer Weg',
    },
    {
        id: '900321733',
        name: 'Schönfließ (MOL), Bhf',
    },
    {
        id: '900416191',
        name: 'Thalberg, Kindergarten',
    },
    {
        id: '900340347',
        name: 'Fürstenwerder, L25',
    },
    {
        id: '710009950004',
        name: 'Lübstorf, Bhf',
    },
    {
        id: '900320630',
        name: 'Petershagen (b. Berlin), Uhlandstr.',
    },
    {
        id: '710009950002',
        name: 'Moidentin, Bhf',
    },
    {
        id: '900220622',
        name: 'Werder (Havel), Wachtelwinkel',
    },
    {
        id: '900245064',
        name: 'Zossen, Brandenburger Str.',
    },
    {
        id: '900220674',
        name: 'Glindow, Elisabethhöhe',
    },
    {
        id: '900220673',
        name: 'Glindow, Petzower Str.',
    },
    {
        id: '900245434',
        name: 'Dabendorf, Mahlower Str.',
    },
    {
        id: '900245436',
        name: 'Dabendorf, Trebbiner Str.',
    },
    {
        id: '900245556',
        name: 'Nächst Neuendorf, Nächst Neuendorfer Dorfstr.',
    },
    {
        id: '900222032',
        name: 'Borkheide, Feldmark',
    },
    {
        id: '900245557',
        name: 'Nächst Neuendorf, Wulzenweg',
    },
    {
        id: '900222031',
        name: 'Borkheide, Elsternweg',
    },
    {
        id: '900245555',
        name: 'Nächst Neuendorf, Kleine Feldstr.',
    },
    {
        id: '900205447',
        name: 'Neuruppin, Eichendorffsiedlung',
    },
    {
        id: '900110022',
        name: 'Mollstr./Prenzlauer Allee',
    },
    {
        id: '900245425',
        name: 'Blankenfelde, Märk. Promenade',
    },
    {
        id: '900310027',
        name: 'Eisenhüttenstadt, Seeberge',
    },
    {
        id: '900195506',
        name: 'Anne-Frank-Str.',
    },
    {
        id: '900245573',
        name: 'Radeland, Radeländer Weg',
    },
    {
        id: '900245394',
        name: 'Blankenfelde, Kirche',
    },
    {
        id: '900171532',
        name: 'Alt-Biesdorf',
    },
    {
        id: '900033103',
        name: 'Zitadelle Spandau',
    },
    {
        id: '900037159',
        name: 'Alt-Staaken Kirche',
    },
    {
        id: '900220676',
        name: 'Glindow, Kindergarten',
    },
    {
        id: '070101003434',
        name: 'Betriebshof Britz',
    },
    {
        id: '900222041',
        name: 'Brück, Beelitzer Str.',
    },
    {
        id: '900245513',
        name: 'Lindenbrück, Dorfstr.',
    },
    {
        id: '900446372',
        name: 'Spremberg, Südwest',
    },
    {
        id: '900183501',
        name: 'Lagunenweg',
    },
    {
        id: '900311314',
        name: 'Eisenhüttenstadt, Am Oderdamm',
    },
    {
        id: '900245543',
        name: 'Märkisch Wilmersdorf, Kurve',
    },
    {
        id: '900205463',
        name: 'Neuruppin, Kränzliner Siedlung',
    },
    {
        id: '900205462',
        name: 'Neuruppin, Junckerstr.',
    },
    {
        id: '900205460',
        name: 'Neuruppin, Behördenzentrum',
    },
    {
        id: '900220678',
        name: 'Bliesendorf, Lange Str.',
    },
    {
        id: '900245607',
        name: 'Wünsdorf, Oberschule',
    },
    {
        id: '900446344',
        name: 'Spremberg, Kochsdorfer Weg',
    },
    {
        id: '900222034',
        name: 'Borkwalde, Selma-Lagerlöf-Ring',
    },
    {
        id: '900205453',
        name: 'Neuruppin, Gentz-Str.',
    },
    {
        id: '900222033',
        name: 'Borkheide, Schule',
    },
    {
        id: '900220679',
        name: 'Bliesendorf, Kirche',
    },
    {
        id: '900245561',
        name: 'Neuhof (bei Zossen), Neuhofer Dorfstr.',
    },
    {
        id: '900245565',
        name: 'Radeland, Dorf',
    },
    {
        id: '900220623',
        name: 'Werder (Havel), Friedhof',
    },
    {
        id: '900205431',
        name: 'Netzeband, Abzweig',
    },
    {
        id: '900445258',
        name: 'Burg, Deutsches Haus',
    },
    {
        id: '900220617',
        name: 'Werder (Havel), Am Wachtelberg',
    },
    {
        id: '900220642',
        name: 'Werder (Havel), Kölner Str.',
    },
    {
        id: '900340620',
        name: 'Storkow (bei Templin), Mitte',
    },
    {
        id: '900205381',
        name: 'Kunsterspring',
    },
    {
        id: '900321147',
        name: 'Platzfelde',
    },
    {
        id: '900311301',
        name: 'Eisenhüttenstadt, Am Wasserturm',
    },
    {
        id: '900320512',
        name: 'Waldesruh, Humboldtstr.',
    },
    {
        id: '900245616',
        name: 'Zossen, Friedhof',
    },
    {
        id: '900320514',
        name: 'Waldesruh, Heinrich-Heine-Promenade',
    },
    {
        id: '900445401',
        name: 'Eichwege, Dorfstr.',
    },
    {
        id: '900134012',
        name: 'Aubertstr.',
    },
    {
        id: '900445400',
        name: 'Eichwege, Badesee',
    },
    {
        id: '900191702',
        name: 'Sonnenallee/Baumschulenstr.',
    },
    {
        id: '900245621',
        name: 'Zossen, Th.-Müntzer-Str.',
    },
    {
        id: '900445050',
        name: 'Eichwege, Gasthaus',
    },
    {
        id: '900009103',
        name: 'U Seestr.',
    },
    {
        id: '900311373',
        name: 'Eisenhüttenstadt, Seggeluch',
    },
    {
        id: '900340885',
        name: 'Henriettenhof, Abzweig',
    },
    {
        id: '900220620',
        name: 'Werder (Havel), Riegelspitze',
    },
    {
        id: '900064251',
        name: 'Woltmannweg',
    },
    {
        id: '900083172',
        name: 'Zittauer Str.',
    },
    {
        id: '900222100',
        name: 'Jeserig (bei Brück)',
    },
    {
        id: '900191502',
        name: 'Frauenlobstr.',
    },
    {
        id: '900205386',
        name: 'Kyritz, Seestr.',
    },
    {
        id: '900245572',
        name: 'Rangsdorf, Theresenhof',
    },
    {
        id: '900311349',
        name: 'Eisenhüttenstadt, Karl-Marx-Str.',
    },
    {
        id: '900245442',
        name: 'Diedersdorf (TF), Diedersdorfer Heide',
    },
    {
        id: '900446132',
        name: 'Proschim, Ortsmitte',
    },
    {
        id: '900245444',
        name: 'Diedersdorf (TF), Friedhof',
    },
    {
        id: '900245445',
        name: 'Diedersdorf (TF), Ausbau',
    },
    {
        id: '900446479',
        name: 'Welzow, An der Aue',
    },
    {
        id: '900245446',
        name: 'Dornswalde, Dorfstr.',
    },
    {
        id: '900245459',
        name: 'Glashütte (TF), Hüttenweg',
    },
    {
        id: '900162716',
        name: 'Hentigstr.',
    },
    {
        id: '900204000',
        name: 'Oranienburg, André-Pican-Str.',
    },
    {
        id: '900340439',
        name: 'Ludwigsburg, Abzweig',
    },
    {
        id: '900340057',
        name: 'Neuhof, b. Warnitz',
    },
    {
        id: '900080104',
        name: 'Germaniapromenade',
    },
    {
        id: '900245037',
        name: 'Thyrow, Bhf',
    },
    {
        id: '900080153',
        name: 'Wussowstr.',
    },
    {
        id: '900445254',
        name: 'Burg, Abzweig nach Vetschau/Leipe',
    },
    {
        id: '900220638',
        name: 'Werder (Havel), Am Finkenberg',
    },
    {
        id: '900220637',
        name: 'Werder (Havel), Margaretenstr.',
    },
    {
        id: '900435584',
        name: 'Leipe, Spreewaldhotel',
    },
    {
        id: '900080103',
        name: 'Britzer Damm/Gradestr.',
    },
    {
        id: '900340074',
        name: 'Criewen, Siedlung',
    },
    {
        id: '900311313',
        name: 'Eisenhüttenstadt, Buchwaldstr.',
    },
    {
        id: '900162519',
        name: 'Museum Karlshorst',
    },
    {
        id: '900082255',
        name: 'Kölner Damm',
    },
    {
        id: '900445851',
        name: 'Klein Limberg',
    },
    {
        id: '900205556',
        name: 'Seebeck, Ausbau',
    },
    {
        id: '900205555',
        name: 'Seebeck, Anger',
    },
    {
        id: '900310824',
        name: 'Fürstenwalde, Wasserwerk',
    },
    {
        id: '900350328',
        name: 'Eberswalde, Boldtstr.',
    },
    {
        id: '900350373',
        name: 'Eberswalde, Werbelliner Str.',
    },
    {
        id: '900340071',
        name: 'Criewen, Grüner Weg',
    },
    {
        id: '900203817',
        name: 'Marwitz, Marwitzer Heide',
    },
    {
        id: '900350330',
        name: 'Eberswalde, Busbahnhof',
    },
    {
        id: '900245680',
        name: 'Hennickendorf (TF), Waldstr.',
    },
    {
        id: '900130013',
        name: 'Pankow Kirche',
    },
    {
        id: '900004181',
        name: 'Hertzallee',
    },
    {
        id: '900120029',
        name: 'Jessnerstr.',
    },
    {
        id: '900435082',
        name: 'Hohenbocka, Huschick',
    },
    {
        id: '900245374',
        name: 'Ludwigsfelde, Brandenburgische Str.',
    },
    {
        id: '900230134',
        name: 'Potsdam, Abzweig nach Eiche',
    },
    {
        id: '900260045',
        name: 'Falkenhain, Dorfstr.',
    },
    {
        id: '900245111',
        name: 'Karlsdorf (Dahme), Dorf',
    },
    {
        id: '900415797',
        name: 'Knippelsdorf, Abzweig',
    },
    {
        id: '900245272',
        name: 'Liebätz, An der Kirche',
    },
    {
        id: '900350918',
        name: 'Schwanebeck (BAR), Karower Str.',
    },
    {
        id: '900341040',
        name: 'Reglingsruh, Abzweig',
    },
    {
        id: '900222153',
        name: 'Gräben, Wiesenweg',
    },
    {
        id: '900446364',
        name: 'Spremberg, Trattendorf Wiesenweg',
    },
    {
        id: '900205559',
        name: 'Selenhorst',
    },
    {
        id: '900446354',
        name: 'Spremberg, Schwimmhalle',
    },
    {
        id: '900132025',
        name: 'Uhlandstr./Wilhelmsruher Damm',
    },
    {
        id: '900435166',
        name: 'Lauchhammer Süd, Liebenwerdaer Str.',
    },
    {
        id: '900077110',
        name: 'S Sonnenallee/Saalestr.',
    },
    {
        id: '900150505',
        name: 'Leuenberger Str.',
    },
    {
        id: '900245153',
        name: 'Jüterbog, Planeberg',
    },
    {
        id: '900205582',
        name: 'Tetschendorf, Waldsiedlung',
    },
    {
        id: '900446086',
        name: 'Papitz, Kirchstr.',
    },
    {
        id: '900007155',
        name: 'Gleimstr.',
    },
    {
        id: '900245151',
        name: 'Jüterbog, Parkstr.',
    },
    {
        id: '900321055',
        name: 'Bochowsloos',
    },
    {
        id: '900311328',
        name: 'Eisenhüttenstadt, ArcelorMittal KWW Wendeschleife',
    },
    {
        id: '900340075',
        name: 'Criewen, Vorwerk',
    },
    {
        id: '900435145',
        name: 'Lauchhammer Mitte, Alte Gartenstr.',
    },
    {
        id: '900350428',
        name: 'Eberswalde, Eisenspalterei Gewerbe',
    },
    {
        id: '900245564',
        name: 'Petkus, Merzdorfer Str.',
    },
    {
        id: '900445955',
        name: 'Kunersdorf (SPN), Abzweig Bahnhof',
    },
    {
        id: '900205566',
        name: 'Steinberge',
    },
    {
        id: '900446340',
        name: 'Spremberg, Hoyerswerdaer Str.',
    },
    {
        id: '900110007',
        name: 'Schönhauser Allee/Bornholmer Str.',
    },
    {
        id: '900245419',
        name: 'Alexanderdorf',
    },
    {
        id: '900222117',
        name: 'Linthe, Lindenstr.',
    },
    {
        id: '900260630',
        name: 'Brusendorf, Kreuzung',
    },
    {
        id: '900311305',
        name: 'Eisenhüttenstadt, An der Holzwolle',
    },
    {
        id: '900220707',
        name: 'Schmergow, Ketziner Siedlung',
    },
    {
        id: '900175518',
        name: 'Aurorafalterweg',
    },
    {
        id: '900245401',
        name: 'Kummersdorf (TF), Sperenberger Str.',
    },
    {
        id: '900205488',
        name: 'Neustadt (Dosse), Bhf',
    },
    {
        id: '710009950001',
        name: 'Wismar, Bhf',
    },
    {
        id: '900220705',
        name: 'Schmergow, Ziegeleiweg',
    },
    {
        id: '900435090',
        name: 'Schwarzheide, BASF',
    },
    {
        id: '900220193',
        name: 'Schmergow, Deetzer Siedlung',
    },
    {
        id: '900220192',
        name: 'Deetz (PM), Dorf',
    },
    {
        id: '900186001',
        name: 'S Grünau',
    },
    {
        id: '900220702',
        name: 'Groß Kreutz, Schule',
    },
    {
        id: '900311354',
        name: 'Eisenhüttenstadt, Maxim-Gorki-Str.',
    },
    {
        id: '900446325',
        name: 'Spremberg, Bregenzer Str.',
    },
    {
        id: '900245497',
        name: 'Klasdorf, Dorf',
    },
    {
        id: '900340072',
        name: 'Criewen, Mitte',
    },
    {
        id: '900130512',
        name: 'Masurenstr.',
    },
    {
        id: '900205477',
        name: 'Dechtow, Kirche',
    },
    {
        id: '900321143',
        name: 'Neutrebbin, Siedlung',
    },
    {
        id: '900245020',
        name: 'Bollensdorf (bei Dahme), Dorfstr.',
    },
    {
        id: '900446339',
        name: 'Spremberg, Heinrichsfelder Allee',
    },
    {
        id: '900446365',
        name: 'Spremberg, Trattendorfer Hof',
    },
    {
        id: '900245509',
        name: 'Kummersdorf (TF), Parkstr.',
    },
    {
        id: '900080602',
        name: 'Tischlerzeile',
    },
    {
        id: '900446332',
        name: 'VERWAIST: Spremberg, Förderschule',
    },
    {
        id: '900321140',
        name: 'Neutrebbin, Burgwall',
    },
    {
        id: '900446353',
        name: 'Spremberg, Schloßstr.',
    },
    {
        id: '900415798',
        name: 'Knippelsdorf, Gasthaus',
    },
    {
        id: '900446345',
        name: 'Spremberg, Krankenhaus',
    },
    {
        id: '900340073',
        name: 'Criewen, Nationalparkzentrum',
    },
    {
        id: '900220084',
        name: 'Teltow, Fliederstr.',
    },
    {
        id: '900245424',
        name: 'Baruth, Hauptstr.',
    },
    {
        id: '900245773',
        name: 'Märtensmühle, Zum Rauhen Luch',
    },
    {
        id: '900135018',
        name: 'Campus Buch',
    },
    {
        id: '900245845',
        name: 'Ludwigsfelde, Großbeerener Landstr.',
    },
    {
        id: '900220664',
        name: 'Kemnitz (PM), Dorf',
    },
    {
        id: '900446335',
        name: 'Spremberg, Heinrichsfeld Bahnübergang',
    },
    {
        id: '900245090',
        name: 'Großbeeren, Denkmal',
    },
    {
        id: '900415134',
        name: 'Tröbitz, Schule',
    },
    {
        id: '900446338',
        name: 'Spremberg, Heinrichsfeld Senftenberger Str.',
    },
    {
        id: '900340592',
        name: 'Schmölln, Siedlung',
    },
    {
        id: '900245062',
        name: 'Großbeeren, Mahlower Str.',
    },
    {
        id: '900446336',
        name: 'Spremberg, Heinrichsfeld Gärtnerei',
    },
    {
        id: '900446337',
        name: 'Spremberg, Heinrichsfeld Kulturhaus',
    },
    {
        id: '900311370',
        name: 'Eisenhüttenstadt, Schwarzes Luch',
    },
    {
        id: '900220625',
        name: 'Werder (Havel), Holländermühle',
    },
    {
        id: '900311590',
        name: 'Vogelsang (LOS), Denkmal',
    },
    {
        id: '900205738',
        name: 'Neuruppin, W.-Rathenau-Str.',
    },
    {
        id: '900445561',
        name: 'Groß Luja, Kirche',
    },
    {
        id: '900260935',
        name: 'Schönefeld (bei Berlin), Dorf',
    },
    {
        id: '900435122',
        name: 'Lindenau, Kindertagesstätte',
    },
    {
        id: '900205021',
        name: 'Dahlhausen',
    },
    {
        id: '900340099',
        name: 'Flemsdorf, Neubau',
    },
    {
        id: '900340477',
        name: 'Neu Temmen',
    },
    {
        id: '900435125',
        name: 'Tettau, Sägewerk',
    },
    {
        id: '900435126',
        name: 'Sella',
    },
    {
        id: '900220043',
        name: 'Kleinmachnow, Am Hochwald',
    },
    {
        id: '900220096',
        name: 'Teltow, Feuerwehr',
    },
    {
        id: '900446349',
        name: 'Spremberg, Pulsberg Ausbau',
    },
    {
        id: '900340835',
        name: 'Greiffenberg, Siedlung',
    },
    {
        id: '900446350',
        name: 'Spremberg, Pulsberg Kastanienallee',
    },
    {
        id: '900210201',
        name: 'Nauen, Rathaus/Hamburger Str.',
    },
    {
        id: '900210214',
        name: 'Nauen, Luchcenter',
    },
    {
        id: '900210215',
        name: 'Nauen, Umspannwerk',
    },
    {
        id: '900470319',
        name: 'Cottbus, Schmellwitz Anger/Feldstr.',
    },
    {
        id: '900446211',
        name: 'Schönheide, Gasthaus',
    },
    {
        id: '900445992',
        name: 'Lieskau, Schloß',
    },
    {
        id: '900260100',
        name: 'Selchow (LDS), Kirche',
    },
    {
        id: '900005206',
        name: 'Philharmonie',
    },
    {
        id: '900176524',
        name: 'Alt-Mahlsdorf',
    },
    {
        id: '900222088',
        name: 'Golzow (PM), Schule',
    },
    {
        id: '900446507',
        name: 'Weskow, Forster Landstr.',
    },
    {
        id: '900435110',
        name: 'Schwarzheide, Narrenhof',
    },
    {
        id: '900100528',
        name: 'U Stadtmitte',
    },
    {
        id: '900205114',
        name: 'Fehrbellin, Rhinkanal',
    },
    {
        id: '900321142',
        name: 'Neutrebbin, Grube',
    },
    {
        id: '900176536',
        name: 'Bruchsaler Str.',
    },
    {
        id: '900230214',
        name: 'Potsdam, Volkspark',
    },
    {
        id: '900176537',
        name: 'Eichenhofweg',
    },
    {
        id: '900470000',
        name: 'Cottbus, Hbf',
    },
    {
        id: '900073243',
        name: 'Friedenfelser Str.',
    },
    {
        id: '900205102',
        name: 'Lobeofsund',
    },
    {
        id: '900435120',
        name: 'Lindenau, Tettauer Str.',
    },
    {
        id: '900176526',
        name: 'Ledebourstr.',
    },
    {
        id: '900446046',
        name: 'Muckrow',
    },
    {
        id: '900260798',
        name: 'Königs Wusterhausen, Tiergarten',
    },
    {
        id: '900205040',
        name: 'Kyritz, Robestr.',
    },
    {
        id: '900205039',
        name: 'Kyritz, Hermann-Löns-Str.',
    },
    {
        id: '900435119',
        name: 'Lindenau, Ortrander Str.',
    },
    {
        id: '900260533',
        name: 'Rotberg, Dorfstr.',
    },
    {
        id: '900340391',
        name: 'Holzendorf, Mitte',
    },
    {
        id: '900260023',
        name: 'Waltersdorf (bei Berlin), Berliner Str.',
    },
    {
        id: '900260201',
        name: 'Großziethen, Friedrich-Ebert-Str.',
    },
    {
        id: '900150006',
        name: 'Plauener Str./Marzahner Str.',
    },
    {
        id: '900260199',
        name: 'Großziethen, Uhlandstr.',
    },
    {
        id: '900171001',
        name: 'S Biesdorf',
    },
    {
        id: '900078158',
        name: 'Weichselstr.',
    },
    {
        id: '900220025',
        name: 'Stahnsdorf, Bergstr.',
    },
    {
        id: '900261831',
        name: 'Schlabendorf',
    },
    {
        id: '900321053',
        name: 'Biesdorf (MOL)',
    },
    {
        id: '900275163',
        name: 'Brandenburg, Am Havelpegel',
    },
    {
        id: '900220136',
        name: 'Kleinmachnow, Heinrich-Hertz-Str.',
    },
    {
        id: '900261577',
        name: 'Luckau, Busbahnhof',
    },
    {
        id: '900003259',
        name: 'Lüneburger Str.',
    },
    {
        id: '900310980',
        name: 'Petersdorf (bei Fürstenwalde), Am Fuchsbau',
    },
    {
        id: '900110503',
        name: 'Milastr.',
    },
    {
        id: '900321075',
        name: 'Frankenfelde (MOL), Dorf',
    },
    {
        id: '900100509',
        name: 'Deutsches Theater',
    },
    {
        id: '900175557',
        name: 'Lammersdorfer Weg',
    },
    {
        id: '900130001',
        name: 'S Pankow-Heinersdorf',
    },
    {
        id: '900340232',
        name: 'Bietikow, Seelübber Weg',
    },
    {
        id: '900245647',
        name: 'Dahme, O.-Zacke-Platz',
    },
    {
        id: '900205683',
        name: 'Ziethenhorst',
    },
    {
        id: '900205682',
        name: 'Zernitz, Neubau',
    },
    {
        id: '900470166',
        name: 'Cottbus, Am Hammergraben',
    },
    {
        id: '900220019',
        name: 'Stahnsdorf, Waldschänke',
    },
    {
        id: '900100005',
        name: 'U Alexanderplatz [Tram]',
    },
    {
        id: '900205729',
        name: 'Karwe (OPR), Lange Str.',
    },
    {
        id: '900176543',
        name: 'Gielsdorfer Str.',
    },
    {
        id: '900171003',
        name: 'S Springpfuhl',
    },
    {
        id: '900260202',
        name: 'Großziethen, Thälmannstr.',
    },
    {
        id: '900446073',
        name: 'Bräsinchen, Waldsiedlung',
    },
    {
        id: '900081256',
        name: 'Mollnerweg',
    },
    {
        id: '900081257',
        name: 'An den Achterhöfen',
    },
    {
        id: '900445211',
        name: 'Bräsinchen',
    },
    {
        id: '900220021',
        name: 'Stahnsdorf, Puschkinstr.',
    },
    {
        id: '900082202',
        name: 'U Johannisthaler Chaussee',
    },
    {
        id: '900321308',
        name: 'Altbarnim, Großbarnim',
    },
    {
        id: '900205727',
        name: 'Wildberg, Ausbau',
    },
    {
        id: '900210827',
        name: 'Rathenow, Weinberg',
    },
    {
        id: '900470165',
        name: 'Cottbus, Hammergrabensiedlung',
    },
    {
        id: '900205718',
        name: 'Walsleben, Brücke',
    },
    {
        id: '900220024',
        name: 'Stahnsdorf, Grüner Weg',
    },
    {
        id: '900350000',
        name: 'Groß-Ziethen (BAR), Försterei',
    },
    {
        id: '900220030',
        name: 'Stahnsdorf, Am Upstall',
    },
    {
        id: '900171543',
        name: 'Kohlweißlingstr.',
    },
    {
        id: '900083202',
        name: 'Massantebrücke',
    },
    {
        id: '900340208',
        name: 'Annenwalde',
    },
    {
        id: '900220148',
        name: 'Nudow, Stöckerhaus',
    },
    {
        id: '900311445',
        name: 'Kunitzer Loose, Gut',
    },
    {
        id: '900220147',
        name: 'Nudow, Abzweig Fahlhorst',
    },
    {
        id: '900205287',
        name: 'Fredenhorst',
    },
    {
        id: '900220146',
        name: 'Nudow, Drewitzer Str.',
    },
    {
        id: '900072102',
        name: 'Gutspark Marienfelde',
    },
    {
        id: '900220145',
        name: 'Nudow, Zur Mühle',
    },
    {
        id: '900120015',
        name: 'Franz-Mehring-Platz',
    },
    {
        id: '900100002',
        name: 'S Hackescher Markt',
    },
    {
        id: '900311444',
        name: 'Kunitzer Loose',
    },
    {
        id: '900205274',
        name: 'Ganzer, Chausseehaus',
    },
    {
        id: '900230021',
        name: 'Potsdam, Waldstr./Horstweg',
    },
    {
        id: '900245124',
        name: 'Niebendorf, Niebendorfer Str.',
    },
    {
        id: '900230100',
        name: 'Potsdam, Falkenhorst',
    },
    {
        id: '900230031',
        name: 'Potsdam, Magnus-Zeller-Platz',
    },
    {
        id: '900220171',
        name: 'Saarmund, Abzweig zum Bahnhof',
    },
    {
        id: '900311446',
        name: 'Kunitzer Loose, Kinderheim',
    },
    {
        id: '900230050',
        name: 'Potsdam, Eduard-Claudius-Str./H.-Mann-Allee',
    },
    {
        id: '900132510',
        name: 'Am Wiesengrund',
    },
    {
        id: '900100510',
        name: 'Tucholskystr.',
    },
    {
        id: '900220175',
        name: 'Saarmund, An der Wiese',
    },
    {
        id: '900340555',
        name: 'Prenzlau, Str. des Friedens',
    },
    {
        id: '900220548',
        name: 'Wildpark-West, Marktplatz',
    },
    {
        id: '900205333',
        name: 'Herzberg (Mark), Sportplatz',
    },
    {
        id: '900008104',
        name: 'U Reinickendorfer Str./Fennstr.',
    },
    {
        id: '900171700',
        name: 'U Elsterwerdaer Platz',
    },
    {
        id: '900311592',
        name: 'Vogelsang (LOS), Hauptstr.',
    },
    {
        id: '900171007',
        name: 'Gleiwitzer Str.',
    },
    {
        id: '900171535',
        name: 'Dohlengrund',
    },
    {
        id: '900245470',
        name: 'Groß Schulzendorf, Dorfaue',
    },
    {
        id: '900435107',
        name: 'Schwarzheide, Wandelhof',
    },
    {
        id: '900340531',
        name: 'Prenzlau, Güstower Str. Abzweig',
    },
    {
        id: '900435108',
        name: 'Schwarzheide, Bürgerhaus',
    },
    {
        id: '900058100',
        name: 'S Südkreuz/Ostseite',
    },
    {
        id: '900321109',
        name: 'Kruge',
    },
    {
        id: '900446181',
        name: 'Saccasne, Wendeplatz',
    },
    {
        id: '900150004',
        name: 'Wassergrundstr.',
    },
    {
        id: '900150516',
        name: 'Grenzgrabenstr.',
    },
    {
        id: '900052153',
        name: 'Tillmannsweg',
    },
    {
        id: '900311635',
        name: 'Ziltendorf, Siedlung',
    },
    {
        id: '900205299',
        name: 'Ganzer, B 167',
    },
    {
        id: '900311220',
        name: 'Aurith',
    },
    {
        id: '900245240',
        name: 'Dalichow, Dorfstr.',
    },
    {
        id: '900100506',
        name: 'Hannoversche Str.',
    },
    {
        id: '900340404',
        name: 'Kleptow',
    },
    {
        id: '900340499',
        name: 'Poratz',
    },
    {
        id: '900340229',
        name: 'Bertikow',
    },
    {
        id: '900446022',
        name: 'Lübbinchen, Dorf',
    },
    {
        id: '900310708',
        name: 'Arensdorf, Dorf',
    },
    {
        id: '900445549',
        name: 'Groß Gastrose',
    },
    {
        id: '900311624',
        name: 'Wiesenau, Sportplatz',
    },
    {
        id: '900260601',
        name: 'Schulzendorf (LDS), Alt Schulzendorf',
    },
    {
        id: '900150051',
        name: 'Konrad-Wolf-Str./Gärtnerstr.',
    },
    {
        id: '900446396',
        name: 'Schenkendöbern, Taubendorf',
    },
    {
        id: '900435109',
        name: 'Schwarzheide, An der Mückenberger Str.',
    },
    {
        id: '900220161',
        name: 'Bergholz-Rehbrücke, Am Ausblick',
    },
    {
        id: '900007106',
        name: 'Hussitenstr.',
    },
    {
        id: '900445507',
        name: 'Grießen, Familienzentrum',
    },
    {
        id: '900205151',
        name: 'Wusterhausen (Dosse), Markt',
    },
    {
        id: '900340965',
        name: 'Meyenburg (UM), Kreuzung',
    },
    {
        id: '900205141',
        name: 'Wusterhausen (Dosse), Borchertstr.',
    },
    {
        id: '900051201',
        name: 'U Freie Universität (Thielplatz)',
    },
    {
        id: '900220131',
        name: 'Kleinmachnow, Meiereifeld',
    },
    {
        id: '900446023',
        name: 'Lübbinchen, Vorwerk',
    },
    {
        id: '900220162',
        name: 'Bergholz-Rehbrücke, Nudower Grund',
    },
    {
        id: '900230032',
        name: 'Potsdam, Johannes-Kepler-Platz',
    },
    {
        id: '900311623',
        name: 'Wiesenau, Hof Kalläne',
    },
    {
        id: '900445803',
        name: 'Kerkwitz, Dorf',
    },
    {
        id: '900245349',
        name: 'Großbeeren, Am Wall',
    },
    {
        id: '900245361',
        name: 'Ludwigsfelde, Siedlerweg',
    },
    {
        id: '900083352',
        name: 'Narkauer Weg',
    },
    {
        id: '900445802',
        name: 'Kerkwitz, Birkenweg',
    },
    {
        id: '900445804',
        name: 'Kerkwitz, Taubendorfer Weg',
    },
    {
        id: '900220069',
        name: 'Sputendorf, Lärchenring',
    },
    {
        id: '900083303',
        name: 'Waltersdorfer Chaussee/Ostburger Weg',
    },
    {
        id: '900020207',
        name: 'Tegeler Weg/S Jungfernheide',
    },
    {
        id: '900230212',
        name: 'Potsdam, Viereckremise',
    },
    {
        id: '900446480',
        name: 'Welzow, Goetheschule',
    },
    {
        id: '900321001',
        name: 'Altbarnim, Wubrigsberg',
    },
    {
        id: '900446478',
        name: 'Welzow, Am Bahnhof',
    },
    {
        id: '900220160',
        name: 'Saarmund, An der Bahn',
    },
    {
        id: '900100036',
        name: 'Robert-Koch-Platz',
    },
    {
        id: '900205236',
        name: 'Blandikow, Kirche',
    },
    {
        id: '900321000',
        name: 'Altbarnim, Kleinbarnim',
    },
    {
        id: '900245135',
        name: 'Jüterbog, Hauschteckslust',
    },
    {
        id: '900100527',
        name: 'Jerusalemer Str.',
    },
    {
        id: '900262081',
        name: 'Körbiskrug, Bindower Str.',
    },
    {
        id: '900446279',
        name: 'Sembten, Kreuzung',
    },
    {
        id: '900205487',
        name: 'Neuruppin, Wuthenower Landstr.',
    },
    {
        id: '900230123',
        name: 'Potsdam, Amundsenstr./Potsdamer Str.',
    },
    {
        id: '900245216',
        name: 'Luckenwalde, Beelitzer Tor',
    },
    {
        id: '900245230',
        name: 'Luckenwalde, Str. des Friedens',
    },
    {
        id: '900320045',
        name: 'Hoppegarten, Bergstr.',
    },
    {
        id: '900038151',
        name: 'Annenweg',
    },
    {
        id: '900320044',
        name: 'Hoppegarten, Friedhof',
    },
    {
        id: '900340576',
        name: 'Prenzlau, Lessingstr.',
    },
    {
        id: '900320043',
        name: 'Hoppegarten, Schule',
    },
    {
        id: '900093252',
        name: 'Waldseeweg',
    },
    {
        id: '900320042',
        name: 'Hoppegarten, Breitscheidstr.',
    },
    {
        id: '900320041',
        name: 'Hoppegarten, Sonniges Eck',
    },
    {
        id: '900245273',
        name: 'Märtensmühle, Lindenallee',
    },
    {
        id: '900445100',
        name: 'Forst, Krematorium',
    },
    {
        id: '900162522',
        name: 'Rheinpfalzallee',
    },
    {
        id: '900040152',
        name: 'Seesener Str.',
    },
    {
        id: '900040153',
        name: 'Martin-Luther-Krankenhaus',
    },
    {
        id: '900048102',
        name: 'Wangenheimstr.',
    },
    {
        id: '900320026',
        name: 'S Birkenstein',
    },
    {
        id: '900245287',
        name: 'Glau, Dorfaue',
    },
    {
        id: '900445054',
        name: 'Bohrau',
    },
    {
        id: '900245593',
        name: 'Thyrow, Bahnhofstr.',
    },
    {
        id: '900220008',
        name: 'Potsdam, Rehbrücke',
    },
    {
        id: '900445041',
        name: 'Briesnig, Abzweig nach Naundorf',
    },
    {
        id: '900020208',
        name: 'Osnabrücker Str.',
    },
    {
        id: '900230069',
        name: 'Potsdam, Friedrich-Wolf-Str.',
    },
    {
        id: '710009550014',
        name: 'Görlitz-Weinhübel, Bhf',
    },
    {
        id: '900320046',
        name: 'Hoppegarten, Gemeinde',
    },
    {
        id: '900320019',
        name: 'Hoppegarten, Von-Canstein-Str.',
    },
    {
        id: '900245199',
        name: 'Luckenwalde, Brandenburger Str.',
    },
    {
        id: '900445364',
        name: 'Drebkau, Raakow',
    },
    {
        id: '900445092',
        name: 'Forst, Sandweg',
    },
    {
        id: '900340570',
        name: 'Rittgarten, Kreuzung',
    },
    {
        id: '900051101',
        name: 'Pücklerstr.',
    },
    {
        id: '900445553',
        name: 'Cottbus, Gallinchen Eichengrund',
    },
    {
        id: '900350492',
        name: 'Struwenberg, Abzweig Falkenberg',
    },
    {
        id: '900230103',
        name: 'Potsdam, Studio Babelsberg',
    },
    {
        id: '900210073',
        name: 'Brieselang, Hebbelstr.',
    },
    {
        id: '710009810005',
        name: 'Krzewina Zgorzelecka, Bhf',
    },
    {
        id: '900445013',
        name: 'Forst, Berliner Str.',
    },
    {
        id: '900016204',
        name: 'Körtestr.',
    },
    {
        id: '900445057',
        name: 'Forst, Eulo Schule',
    },
    {
        id: '710009550022',
        name: 'Schleife, Bhf',
    },
    {
        id: '710009550019',
        name: 'Kodersdorf, Bhf',
    },
    {
        id: '900245200',
        name: 'Luckenwalde, Bürgerbusch',
    },
    {
        id: '710009550018',
        name: 'Horka, Bhf',
    },
    {
        id: '710009550017',
        name: 'Hirschfelde, Bhf',
    },
    {
        id: '900245226',
        name: 'Luckenwalde, Schieferling',
    },
    {
        id: '900245223',
        name: 'Luckenwalde, Forststr.',
    },
    {
        id: '900320048',
        name: 'Hoppegarten, Einkaufscenter',
    },
    {
        id: '900445040',
        name: 'Briesnig, Mitte',
    },
    {
        id: '900320018',
        name: 'Hoppegarten, Industriestr.',
    },
    {
        id: '900340879',
        name: 'Heinrichshof, Mitte',
    },
    {
        id: '900216086',
        name: 'Wittenberge, Bismarckplatz',
    },
    {
        id: '900445884',
        name: 'Kolkwitz, Bhf',
    },
    {
        id: '900321049',
        name: 'Beerbaum',
    },
    {
        id: '900445898',
        name: 'Kolkwitz, Ströbitzer Str.',
    },
    {
        id: '900245173',
        name: 'Hohengörsdorf, Dorfstr.',
    },
    {
        id: '900310761',
        name: 'Falkenberg (bei Briesen), Ausbau',
    },
    {
        id: '900340257',
        name: 'Bündigershof, Dorf',
    },
    {
        id: '900445634',
        name: 'Guben, Schwarzes Fließ',
    },
    {
        id: '900445627',
        name: 'Guben, Kupferhammer Mühle',
    },
    {
        id: '900350341',
        name: 'Eberswalde, Karl-Marx-Platz',
    },
    {
        id: '900445614',
        name: 'Guben, Grunewald',
    },
    {
        id: '900205233',
        name: 'Binenwalde',
    },
    {
        id: '900216060',
        name: 'Wutike, Bhf',
    },
    {
        id: '900230038',
        name: 'Potsdam, Am Gehölz',
    },
    {
        id: '900445608',
        name: 'Guben, Groß Breesen',
    },
    {
        id: '900261355',
        name: 'Kasel-Golzig, Lübbener Str.',
    },
    {
        id: '900162510',
        name: 'Neuwieder Str.',
    },
    {
        id: '900445609',
        name: 'Guben, Groß Breesen Bäcker',
    },
    {
        id: '900150507',
        name: 'Bürknersfelder Str. Ost',
    },
    {
        id: '900245511',
        name: 'Ließen, Dorfstr.',
    },
    {
        id: '900016103',
        name: 'Zossener Brücke',
    },
    {
        id: '900012158',
        name: 'Franz-Klühs-Str.',
    },
    {
        id: '900012157',
        name: 'Jüdisches Museum',
    },
    {
        id: '900311319',
        name: 'Eisenhüttenstadt, Diehlo Wendeschleife',
    },
    {
        id: '900445086',
        name: 'Klein Jamno, Abzweig',
    },
    {
        id: '900176011',
        name: 'Dahlwitzer Str./Greifswalder Str.',
    },
    {
        id: '900445087',
        name: 'Klein Jamno',
    },
    {
        id: '900245292',
        name: 'Trebbin, Bahnhofstr.',
    },
    {
        id: '900048158',
        name: 'Taubertstr.',
    },
    {
        id: '900445894',
        name: 'Kolkwitz, Schadowstr.',
    },
    {
        id: '900230001',
        name: 'Potsdam, Medienstadt Babelsberg',
    },
    {
        id: '900077156',
        name: 'Schulenburgpark',
    },
    {
        id: '900085154',
        name: 'Lübener Weg',
    },
    {
        id: '900245583',
        name: 'Siethen, Potsdamer Chaussee',
    },
    {
        id: '900310734',
        name: 'Berkenbrück (LOS), West',
    },
    {
        id: '900245585',
        name: 'Siethen, Seestück',
    },
    {
        id: '900245375',
        name: 'Ahrensdorf (bei Ludwigsfelde), Gröbener Str.',
    },
    {
        id: '900018151',
        name: 'Habermannzeile',
    },
    {
        id: '900310763',
        name: 'Falkenberg (bei Briesen), Dorf',
    },
    {
        id: '900230157',
        name: 'Potsdam, Am Schragen',
    },
    {
        id: '900321491',
        name: 'Jahnsfelde, Gaststätte',
    },
    {
        id: '900435117',
        name: 'Schwarzheide, Am Forstweg',
    },
    {
        id: '900176519',
        name: 'Terwestenstr.',
    },
    {
        id: '900245157',
        name: 'Jüterbog, Hohlweg',
    },
    {
        id: '900445093',
        name: 'Forst, Muskauer Str.',
    },
    {
        id: '900445085',
        name: 'Forst, Am Waldgürtel',
    },
    {
        id: '900220293',
        name: 'Bollmannsruh',
    },
    {
        id: '900220291',
        name: 'Gortz, Dorf',
    },
    {
        id: '900321103',
        name: 'Karlsbiese',
    },
    {
        id: '900220365',
        name: 'Potsdam, Science Park/Universität',
    },
    {
        id: '900321117',
        name: 'Neubarnim, Bhf',
    },
    {
        id: '900230036',
        name: 'Potsdam, Goetheplatz',
    },
    {
        id: '900320219',
        name: 'Müncheberg, Forst',
    },
    {
        id: '900210600',
        name: 'Wustermark, Brunnenplatz',
    },
    {
        id: '900220309',
        name: 'Roskow, Abzweig',
    },
    {
        id: '900311019',
        name: 'Sieversdorf (LOS)',
    },
    {
        id: '900275519',
        name: 'Brandenburg, Belziger Chaussee',
    },
    {
        id: '900340261',
        name: 'Christianenhof',
    },
    {
        id: '900220209',
        name: 'Rietz (bei Brandenburg), Am Rietzer Berg',
    },
    {
        id: '900220211',
        name: 'Rietz, Dorf',
    },
    {
        id: '900340621',
        name: 'Storkow (bei Templin), Neubau',
    },
    {
        id: '900082256',
        name: 'Landreiterweg',
    },
    {
        id: '900230104',
        name: 'Potsdam, Gerlachstr.',
    },
    {
        id: '900275817',
        name: 'Brandenburg, Schleuse',
    },
    {
        id: '900162518',
        name: 'Kötztinger Str.',
    },
    {
        id: '900037201',
        name: 'Rudolf-Wissell-Siedlung',
    },
    {
        id: '900220297',
        name: 'Mötzow, Abzw., Lünow',
    },
    {
        id: '900220298',
        name: 'Lindenhof',
    },
    {
        id: '900220299',
        name: 'Grabow (bei Brandenburg a.d.H.)',
    },
    {
        id: '900220292',
        name: 'Gortz, Am Flachsberg',
    },
    {
        id: '900220294',
        name: 'Bagow',
    },
    {
        id: '900203842',
        name: 'Oranienburg, Johannesberg',
    },
    {
        id: '900340159',
        name: 'Neumeichow (UM), Lindenallee',
    },
    {
        id: '900210056',
        name: 'Böhne, Ludwigshof',
    },
    {
        id: '900210838',
        name: 'Rathenow, Rathaus',
    },
    {
        id: '900321083',
        name: 'Güstebieser Loose, Neubau',
    },
    {
        id: '900340295',
        name: 'Ferdinandshorst, Dorf',
    },
    {
        id: '900081253',
        name: 'Hasenhegerweg',
    },
    {
        id: '900445009',
        name: 'Forst, Busbahnhof',
    },
    {
        id: '900049372',
        name: 'Andréezeile',
    },
    {
        id: '900445016',
        name: 'Forst, Feldschlößchenplatz',
    },
    {
        id: '900470236',
        name: 'Cottbus, Sandow',
    },
    {
        id: '900445112',
        name: 'Forst, Eulo Kirche',
    },
    {
        id: '900321084',
        name: 'Güstebieser Loose, Wolfsecke',
    },
    {
        id: '6228',
        name: 'Karlsburg',
    },
    {
        id: '2154',
        name: 'Hohendorf',
    },
    {
        id: '900340843',
        name: 'Groß Pinnow, Arche',
    },
    {
        id: '286',
        name: 'Buddenhagen',
    },
    {
        id: '900220315',
        name: 'Riewend, Dorf',
    },
    {
        id: '900007110',
        name: 'U Bernauer Str.',
    },
    {
        id: '900340734',
        name: 'Wollenthin',
    },
    {
        id: '900025101',
        name: 'Scholzplatz',
    },
    {
        id: '900320118',
        name: 'Neuenhagen (b Berlin), Schweizer Haus',
    },
    {
        id: '900032302',
        name: 'Stößenseebrücke',
    },
    {
        id: '900320117',
        name: 'Neuenhagen (b Berlin), Schlosserei',
    },
    {
        id: '900032352',
        name: 'Pichelswerder',
    },
    {
        id: '900032351',
        name: 'Freybrücke',
    },
    {
        id: '900053304',
        name: 'Kätchenweg',
    },
    {
        id: '900053354',
        name: 'Königsweg',
    },
    {
        id: '900220223',
        name: 'Lehnin, Beelitzer Str.',
    },
    {
        id: '900220224',
        name: 'Lehnin, Emstaler Str.',
    },
    {
        id: '900445109',
        name: 'Forst, Noßdorf Zollhaus',
    },
    {
        id: '900260506',
        name: 'Waltersdorf (bei Berlin), Bohnsdorfer Weg',
    },
    {
        id: '900150052',
        name: 'Königswalder Str.',
    },
    {
        id: '900150053',
        name: 'Gembitzer Str.',
    },
    {
        id: '900150504',
        name: 'Gehrenseestr.',
    },
    {
        id: '900230088',
        name: 'Potsdam, Hiroshima-Nagasaki-Platz',
    },
    {
        id: '900230023',
        name: 'Potsdam, Domstr.',
    },
    {
        id: '900340752',
        name: 'Milmersdorf, Bhf',
    },
    {
        id: '900445072',
        name: 'Forst, Wasserturm',
    },
    {
        id: '900275000',
        name: 'Brandenburg, Abzweig nach Görisgräben',
    },
    {
        id: '900275001',
        name: 'Brandenburg, Abzweig nach Neue Mühle',
    },
    {
        id: '900311371',
        name: 'Eisenhüttenstadt, Schwimmhalle',
    },
    {
        id: '900320121',
        name: 'Neuenhagen (b Berlin), Carl-Schmäcke-Str.',
    },
    {
        id: '900320122',
        name: 'Neuenhagen (b Berlin), Umspannwerk',
    },
    {
        id: '900220213',
        name: 'Prützke',
    },
    {
        id: '900340314',
        name: 'Gerswalde, Haßlebener Str.',
    },
    {
        id: '900230122',
        name: 'Potsdam, Florastr.',
    },
    {
        id: '900064205',
        name: 'Celsiusstr. Nord',
    },
    {
        id: '900340164',
        name: 'Friedrichsthal (UM), Mitte',
    },
    {
        id: '900445361',
        name: 'Drebkau, Domsdorfer Str.',
    },
    {
        id: '900445124',
        name: 'Forst, Grundschule Mitte',
    },
    {
        id: '900220214',
        name: 'Görnsee',
    },
    {
        id: '900340203',
        name: 'Ahlimbswalde',
    },
    {
        id: '900220215',
        name: 'Grebs (bei Lehnin)',
    },
    {
        id: '900220216',
        name: 'Netzen, Dorf',
    },
    {
        id: '900220217',
        name: 'Netzen, Klostertrift',
    },
    {
        id: '900220218',
        name: 'Nahmitz, Dorf',
    },
    {
        id: '900220220',
        name: 'Lehnin, Weinbergweg',
    },
    {
        id: '900220221',
        name: 'Lehnin, Kaltenhausen',
    },
    {
        id: '900340374',
        name: 'Hessenhöhe',
    },
    {
        id: '900310947',
        name: 'Neu Madlitz, Abzweig',
    },
    {
        id: '900230039',
        name: 'Potsdam, Stadtwerke',
    },
    {
        id: '900320123',
        name: 'Neuenhagen (b Berlin), Gewerbegebiet',
    },
    {
        id: '900350337',
        name: 'Eberswalde, Grabowstr.',
    },
    {
        id: '900120008',
        name: 'U Frankfurter Tor',
    },
    {
        id: '900311381',
        name: 'Eisenhüttenstadt, Seeplanstr.',
    },
    {
        id: '900311324',
        name: 'Eisenhüttenstadt, Alte Wache',
    },
    {
        id: '900245183',
        name: 'Riesdorf, Dorfstr.',
    },
    {
        id: '900340842',
        name: 'Groß Pinnow, Mitte',
    },
    {
        id: '900435203',
        name: 'Lauchhammer, Bhf',
    },
    {
        id: '900016252',
        name: 'Graefestr.',
    },
    {
        id: '900222232',
        name: 'Trechwitz, Festplatz',
    },
    {
        id: '900310005',
        name: 'Berkenbrück (LOS), Bhf',
    },
    {
        id: '900222227',
        name: 'Trechwitz',
    },
    {
        id: '900245548',
        name: 'Mellensee, Wildpark',
    },
    {
        id: '900016157',
        name: 'Tempelherrenstr.',
    },
    {
        id: '900215706',
        name: 'Perleberg, Quitzower Str.',
    },
    {
        id: '900205715',
        name: 'Blandikow, Dorfstr.',
    },
    {
        id: '900222226',
        name: 'Schenkenberg (bei Götz), Dorf',
    },
    {
        id: '900446193',
        name: 'Schlagsdorf (SPN), Abzweig',
    },
    {
        id: '900245346',
        name: 'Mellensee, Am Heideteich',
    },
    {
        id: '900062282',
        name: 'S+U Rathaus Steglitz',
    },
    {
        id: '900245043',
        name: 'Mellensee, Lichtentann',
    },
    {
        id: '900340581',
        name: 'Schapow, Abzweig',
    },
    {
        id: '900435890',
        name: 'Vetschau, Neustadt',
    },
    {
        id: '900445591',
        name: 'Guben, Am Weinberg',
    },
    {
        id: '900446005',
        name: 'Limberg, Hauptstr.',
    },
    {
        id: '900048101',
        name: 'S Grunewald',
    },
    {
        id: '900222228',
        name: 'Damsdorf (PM), Hauptstr.',
    },
    {
        id: '900072151',
        name: 'Schwechtenstr.',
    },
    {
        id: '900205639',
        name: 'Wittstock (Dosse), Rheinsberger Str.',
    },
    {
        id: '900445459',
        name: 'Glinzig, Abzweig',
    },
    {
        id: '900445461',
        name: 'Glinzig, Brückengasse',
    },
    {
        id: '900310754',
        name: 'Demnitz, Mühle',
    },
    {
        id: '900222251',
        name: 'Roskow, Alter Bahnhof',
    },
    {
        id: '900340909',
        name: 'Hohenselchow, Friedhof',
    },
    {
        id: '900205634',
        name: 'Wittstock (Dosse), Perleberger Str.',
    },
    {
        id: '900245623',
        name: 'Zossen, Wehrdamm',
    },
    {
        id: '900321156',
        name: 'Sophienhof',
    },
    {
        id: '900203365',
        name: 'Hennigsdorf, Rathenaustr.',
    },
    {
        id: '900245166',
        name: 'Lichterfelde (bei Jüterbog), Niederer Fläming',
    },
    {
        id: '900245186',
        name: 'Sernow',
    },
    {
        id: '900215549',
        name: 'Legde, II',
    },
    {
        id: '900222231',
        name: 'Damsdorf (PM), Göhlsdorfer Str.',
    },
    {
        id: '900245617',
        name: 'Zossen, Luckenwalder Str.',
    },
    {
        id: '900215683',
        name: 'Perleberg, Tannenhof',
    },
    {
        id: '900445658',
        name: 'Gulben, Denkmal',
    },
    {
        id: '900215685',
        name: 'Perleberg, Neuer Hennings Hof',
    },
    {
        id: '900072191',
        name: 'Culemeyerstr.',
    },
    {
        id: '900445399',
        name: 'Eichow, Rasthof',
    },
    {
        id: '900245365',
        name: 'Ludwigsfelde, Stadtverwaltung',
    },
    {
        id: '900350429',
        name: 'Finow, Kleiner Stern',
    },
    {
        id: '900310733',
        name: 'Berkenbrück (LOS), Mitte',
    },
    {
        id: '900245232',
        name: 'Luckenwalde, Waldfriedhof',
    },
    {
        id: '900340908',
        name: 'Hohenselchow, Casekower Str.',
    },
    {
        id: '900245196',
        name: 'Luckenwalde, Eschenweg',
    },
    {
        id: '900350434',
        name: 'Finow, Schönholzer Str.',
    },
    {
        id: '900130002',
        name: 'S+U Pankow',
    },
    {
        id: '900446526',
        name: 'Wiesendorf',
    },
    {
        id: '900445880',
        name: 'Kolkwitz, Abzweig nach Zahsow',
    },
    {
        id: '900180010',
        name: 'Mittelheide',
    },
    {
        id: '900321192',
        name: 'Neutrebbin, Schließkenberg',
    },
    {
        id: '900245209',
        name: 'Luckenwalde, Heinrich-Zille-Str.',
    },
    {
        id: '900245244',
        name: 'Altes Lager, Ahornweg',
    },
    {
        id: '900245363',
        name: 'Ludwigsfelde, Salvador-Allende-Str.',
    },
    {
        id: '900205666',
        name: 'Wusterhausen (Dosse), Seestr.',
    },
    {
        id: '900205662',
        name: 'Wulkow (bei Ruppin), B167',
    },
    {
        id: '900445939',
        name: 'Krieschow, Abzweig',
    },
    {
        id: '900245252',
        name: 'Neues Lager',
    },
    {
        id: '900340671',
        name: 'Templin, Markt',
    },
    {
        id: '900180525',
        name: 'Unter den Birken',
    },
    {
        id: '900150506',
        name: 'Bürknersfelder Str. West',
    },
    {
        id: '900350363',
        name: 'Eberswalde, Schöpfurter Str.',
    },
    {
        id: '900012104',
        name: 'Lindenstr./Oranienstr.',
    },
    {
        id: '900205671',
        name: 'Wuthenow',
    },
    {
        id: '900176512',
        name: 'Hultschiner Damm/Seestr.',
    },
    {
        id: '900445516',
        name: 'Groß Breesen, Breesen Sembtener Kreuzung',
    },
    {
        id: '900205669',
        name: 'Wustrau, Hauptstr.',
    },
    {
        id: '900194011',
        name: 'Nieberstr.',
    },
    {
        id: '900205660',
        name: 'Wulkow (bei Kyritz)',
    },
    {
        id: '900245500',
        name: 'Klausdorf (TF), Strandbad',
    },
    {
        id: '900180526',
        name: 'Wongrowitzer Steig',
    },
    {
        id: '900340914',
        name: 'Hohenselchow, Pinnower Str.',
    },
    {
        id: '8011387',
        name: 'Doberschütz, Bhf',
    },
    {
        id: '900230076',
        name: 'Potsdam, Puschkinallee',
    },
    {
        id: '900470102',
        name: 'Cottbus, Altmarkt',
    },
    {
        id: '8010121',
        name: 'Geestgottberg, Bhf',
    },
    {
        id: '900230209',
        name: 'Potsdam, Kirschallee',
    },
    {
        id: '900091205',
        name: 'S Schulzendorf',
    },
    {
        id: '8012295',
        name: 'Mahlwinkel, Bhf',
    },
    {
        id: '900415240',
        name: 'Bad Liebenwerda, Bhf',
    },
    {
        id: '8010224',
        name: 'Magdeburg, Hbf',
    },
    {
        id: '8013344',
        name: 'Wolmirstedt, Bhf',
    },
    {
        id: '8010161',
        name: 'Eilenburg, Bhf Ost',
    },
    {
        id: '900470237',
        name: 'Cottbus, Sandower Brücke',
    },
    {
        id: '000008013045',
        name: 'Stendal Hochschule',
    },
    {
        id: '900230075',
        name: 'Potsdam, Rathaus',
    },
    {
        id: '8013083',
        name: 'Tangerhütte, Bhf',
    },
    {
        id: '8013093',
        name: 'Taucha (bei Leipzig), Bhf',
    },
    {
        id: '900083102',
        name: 'U Wutzkyallee',
    },
    {
        id: '8012967',
        name: 'Seehausen (Altmark), Bhf',
    },
    {
        id: '900171515',
        name: 'Beilsteiner Str.',
    },
    {
        id: '8011042',
        name: 'Angern-Rogätz, Bhf',
    },
    {
        id: '8010095',
        name: 'Eilenburg, Bhf',
    },
    {
        id: '900100014',
        name: 'U Märkisches Museum',
    },
    {
        id: '900110012',
        name: 'S Storkower Str.',
    },
    {
        id: '900230024',
        name: 'Potsdam, Reiterweg/Alleestr.',
    },
    {
        id: '900171005',
        name: 'U Biesdorf-Süd',
    },
    {
        id: '8012568',
        name: 'Osterburg, Bhf',
    },
    {
        id: '8073410',
        name: 'Zielitz, Bhf Ort',
    },
    {
        id: '8012371',
        name: 'Mockrehna, Bhf',
    },
    {
        id: '900160017',
        name: 'Loeperplatz',
    },
    {
        id: '8010351',
        name: 'Torgau, Bhf',
    },
    {
        id: '900094101',
        name: 'S Waidmannslust',
    },
    {
        id: '8011665',
        name: 'Goldbeck (bei Osterburg), Bhf',
    },
    {
        id: '900091203',
        name: 'S Heiligensee',
    },
    {
        id: '900073101',
        name: 'S Marienfelde',
    },
    {
        id: '8011460',
        name: 'Eichstedt (Altmark), Bhf',
    },
    {
        id: '900183516',
        name: 'Kruggasse',
    },
    {
        id: '900014101',
        name: 'U Görlitzer Bahnhof',
    },
    {
        id: '900320247',
        name: 'Rüdersdorf, Museumspark',
    },
    {
        id: '900182514',
        name: 'Brösener Str.',
    },
    {
        id: '900320248',
        name: 'Rüdersdorf, Breitscheidstr.',
    },
    {
        id: '900170005',
        name: 'S Poelchaustr.',
    },
    {
        id: '900170003',
        name: 'S Mehrower Allee',
    },
    {
        id: '900184506',
        name: 'Krampenburg',
    },
    {
        id: '900310510',
        name: 'Schöneiche (bei Berlin), Waldstr.',
    },
    {
        id: '900050355',
        name: 'S Schlachtensee',
    },
    {
        id: '900170002',
        name: 'S Raoul-Wallenberg-Str.',
    },
    {
        id: '900320240',
        name: 'Rüdersdorf, Torellplatz',
    },
    {
        id: '900170001',
        name: 'S Marzahn',
    },
    {
        id: '900310512',
        name: 'Schöneiche (bei Berlin), Rahnsdorfer Str.',
    },
    {
        id: '900050301',
        name: 'S Mexikoplatz',
    },
    {
        id: '900180001',
        name: 'S Köpenick',
    },
    {
        id: '900320245',
        name: 'Rüdersdorf, Berghof',
    },
    {
        id: '900320244',
        name: 'Rüdersdorf, Berghof-Weiche',
    },
    {
        id: '900014102',
        name: 'U Schlesisches Tor',
    },
    {
        id: '900184509',
        name: 'Spreewiesen',
    },
    {
        id: '900025423',
        name: 'S Messe Süd',
    },
    {
        id: '900030202',
        name: 'S Stresow',
    },
    {
        id: '900182002',
        name: 'S Friedrichshagen',
    },
    {
        id: '900033101',
        name: 'U Zitadelle',
    },
    {
        id: '8010334',
        name: 'Stendal, Hbf',
    },
    {
        id: '8010335',
        name: 'Stendal, Bhf Stadtsee',
    },
    {
        id: '900320241',
        name: 'Rüdersdorf, Rathaus',
    },
    {
        id: '900082201',
        name: 'U Lipschitzallee',
    },
    {
        id: '900025424',
        name: 'S Pichelsberg',
    },
    {
        id: '8012289',
        name: 'Magdeburg, Eichenweiler Bahnhof',
    },
    {
        id: '900025321',
        name: 'S Olympiastadion',
    },
    {
        id: '900025202',
        name: 'U Ruhleben',
    },
    {
        id: '900034101',
        name: 'U Paulsternstr.',
    },
    {
        id: '900060101',
        name: 'S Friedenau',
    },
    {
        id: '900029301',
        name: 'U Altstadt Spandau',
    },
    {
        id: '900024106',
        name: 'S Messe Nord/ICC',
    },
    {
        id: '900026207',
        name: 'S Westend',
    },
    {
        id: '000005101493',
        name: 'Jezierzany',
    },
    {
        id: '900194521',
        name: 'Mühlbergstr.',
    },
    {
        id: '900175014',
        name: 'Riesaer Str./Louis-Lewin-Str.',
    },
    {
        id: '8144',
        name: 'Schwarzkollm, Bhf',
    },
    {
        id: '900230248',
        name: 'Potsdam, Hermannswerder/Fähre',
    },
    {
        id: '900100710',
        name: 'U Naturkundemuseum',
    },
    {
        id: '6810',
        name: 'Lauta, Bhf',
    },
    {
        id: '900043201',
        name: 'U Güntzelstr.',
    },
    {
        id: '900360103',
        name: 'Frankfurt (Oder), Neuberesinchen',
    },
    {
        id: '900230247',
        name: 'Potsdam, Auf dem Kiewitt/Fähre',
    },
    {
        id: '900360146',
        name: 'Frankfurt (Oder), Westkreuz',
    },
    {
        id: '900175011',
        name: 'Stendaler Str./Quedlinburger Str.',
    },
    {
        id: '8000',
        name: 'Hoyerswerda, Bhf',
    },
    {
        id: '900360079',
        name: 'Frankfurt (Oder), Kopernikusstr.',
    },
    {
        id: '900143001',
        name: 'S Karow',
    },
    {
        id: '900003101',
        name: 'U Hansaplatz',
    },
    {
        id: '900360114',
        name: 'Frankfurt (Oder), Witzlebenstr.',
    },
    {
        id: '900002201',
        name: 'U Birkenstr.',
    },
    {
        id: '900175510',
        name: 'Landsberger Chaussee/Zossener Str.',
    },
    {
        id: '900275157',
        name: 'Brandenburg, Neustädtischer Markt',
    },
    {
        id: '900175511',
        name: 'Michendorfer Str.',
    },
    {
        id: '900360059',
        name: 'Frankfurt (Oder), Heinrich-Hildebrand-Str.',
    },
    {
        id: '900175513',
        name: 'Zossener Str./Kastanienallee',
    },
    {
        id: '900360132',
        name: 'Frankfurt (Oder), Stadion',
    },
    {
        id: '900175514',
        name: 'Stendaler Str./Zossener Str.',
    },
    {
        id: '900175512',
        name: 'Alte Hellersdorfer/Zossener Str.',
    },
    {
        id: '900175520',
        name: 'Jenaer Str.',
    },
    {
        id: '900230015',
        name: 'Potsdam, Platz der Einheit/Nord',
    },
    {
        id: '900194712',
        name: 'Haeckelstr.',
    },
    {
        id: '900435061',
        name: 'Ruhland, Bhf',
    },
    {
        id: '900435314',
        name: 'Hosena, Bhf',
    },
    {
        id: '900360041',
        name: 'Frankfurt (Oder), Friedhof',
    },
    {
        id: '900170524',
        name: 'Brodowiner Ring',
    },
    {
        id: '900360081',
        name: 'Frankfurt (Oder), Kräuterweg',
    },
    {
        id: '900049352',
        name: 'Nieritzweg',
    },
    {
        id: '900085261',
        name: 'Walderseestr.',
    },
    {
        id: '900012155',
        name: 'Waldeckpark',
    },
    {
        id: '900340012',
        name: 'Augustenfelde',
    },
    {
        id: '900002258',
        name: 'Havelberger Str.',
    },
    {
        id: '900016255',
        name: 'Kottbusser Brücke',
    },
    {
        id: '900049302',
        name: 'Sachtlebenstr.',
    },
    {
        id: '900060152',
        name: 'Altmarkstr.',
    },
    {
        id: '900011251',
        name: 'Iranische Str.',
    },
    {
        id: '900049374',
        name: 'Alt-Schönow',
    },
    {
        id: '900340330',
        name: 'Gramzow (UM), Schule',
    },
    {
        id: '900049353',
        name: 'Windsteiner Weg',
    },
    {
        id: '900027360',
        name: 'Gliensteig',
    },
    {
        id: '900052352',
        name: 'Wasgensteig',
    },
    {
        id: '900020204',
        name: 'Sophie-Charlotten-Str.',
    },
    {
        id: '900063290',
        name: 'Robert-Lück-Str.',
    },
    {
        id: '900002200',
        name: 'Quitzowstr.',
    },
    {
        id: '900340716',
        name: 'Weselitz, Dorf',
    },
    {
        id: '900005208',
        name: 'Varian-Fry-Str./Potsdamer Platz',
    },
    {
        id: '900096153',
        name: 'Conradstr./Ernststr.',
    },
    {
        id: '900005103',
        name: 'Schillstr.',
    },
    {
        id: '900016201',
        name: 'U Schönleinstr.',
    },
    {
        id: '900027204',
        name: 'Havelschanze',
    },
    {
        id: '900006153',
        name: 'St.-Elisabeth-Kirchhof',
    },
    {
        id: '900068101',
        name: 'U Paradestr.',
    },
    {
        id: '900074157',
        name: 'Seltersstr.',
    },
    {
        id: '900006104',
        name: 'Soldiner Str./Koloniestr.',
    },
    {
        id: '900090104',
        name: 'Waldkauzstr.',
    },
    {
        id: '900041281',
        name: 'Hochmeisterplatz',
    },
    {
        id: '900092151',
        name: 'Jägerstieg',
    },
    {
        id: '900037151',
        name: 'Louise-Schroeder-Siedlung',
    },
    {
        id: '900039107',
        name: 'Krampnitzer Weg/Selbitzer Str.',
    },
    {
        id: '900096365',
        name: 'Senftenberger Ring Nord',
    },
    {
        id: '900340331',
        name: 'Gramzow (UM), Tankstelle',
    },
    {
        id: '900049203',
        name: 'Bolchener Str.',
    },
    {
        id: '900090102',
        name: 'Tegelort',
    },
    {
        id: '900037103',
        name: 'Brunsbütteler Damm/Nennhauser Damm',
    },
    {
        id: '900006102',
        name: 'Prinzenallee/Soldiner Str.',
    },
    {
        id: '900086161',
        name: 'U Otisstr.',
    },
    {
        id: '900059151',
        name: 'Sportzentrum Schöneberg',
    },
    {
        id: '900058109',
        name: 'Reichartstr.',
    },
    {
        id: '900002254',
        name: 'Birkenstr./Rathenower Str.',
    },
    {
        id: '900083259',
        name: 'Petunienweg',
    },
    {
        id: '900008153',
        name: 'Wiesenstr.',
    },
    {
        id: '900083301',
        name: 'Stadtgrenze Rudow',
    },
    {
        id: '900340553',
        name: 'Prenzlau, Stadtverwaltung',
    },
    {
        id: '900340820',
        name: 'Gramzow (UM), Autobahnmeisterei',
    },
    {
        id: '900088254',
        name: 'Flohrstr.',
    },
    {
        id: '900340554',
        name: 'Prenzlau, Steinstr.',
    },
    {
        id: '900001202',
        name: 'Am Nordhafen',
    },
    {
        id: '900002255',
        name: 'Seydlitzstr.',
    },
    {
        id: '900096107',
        name: 'Schubartstr./Ernststr.',
    },
    {
        id: '900027253',
        name: 'Amorbacher Weg',
    },
    {
        id: '900029152',
        name: 'Dallgower Str.',
    },
    {
        id: '900008106',
        name: 'Brunnenplatz',
    },
    {
        id: '900340380',
        name: 'Hohengüstow, B 198',
    },
    {
        id: '900054104',
        name: 'S Schöneberg',
    },
    {
        id: '900084152',
        name: 'Flottenstr.',
    },
    {
        id: '900013172',
        name: 'U Kottbusser Tor',
    },
    {
        id: '900050261',
        name: 'Siebenendenweg',
    },
    {
        id: '900076101',
        name: 'Hertzbergplatz',
    },
    {
        id: '900079204',
        name: 'Kranoldstr.',
    },
    {
        id: '900028101',
        name: 'Eiswerderstr.',
    },
    {
        id: '900020151',
        name: 'Fürstenbrunner Weg',
    },
    {
        id: '900062782',
        name: 'S+U Rathaus Steglitz',
    },
    {
        id: '900077154',
        name: 'Mareschstr.',
    },
    {
        id: '900068342',
        name: 'Tankredstr.',
    },
    {
        id: '900035153',
        name: 'Schweiggerweg',
    },
    {
        id: '900077152',
        name: 'Am Oberhafen',
    },
    {
        id: '900055151',
        name: 'Barbarossastr.',
    },
    {
        id: '900067256',
        name: 'Langkofelweg',
    },
    {
        id: '900340382',
        name: 'Hohengüstow, Siedlung',
    },
    {
        id: '900077203',
        name: 'Neuköllnische Allee',
    },
    {
        id: '900027257',
        name: 'Mertensstr./Goltzstr.',
    },
    {
        id: '900012156',
        name: 'Alexandrinenstr.',
    },
    {
        id: '900064200',
        name: 'Blanckertzweg',
    },
    {
        id: '900013101',
        name: 'U Moritzplatz',
    },
    {
        id: '900096104',
        name: 'Borsigwalder Weg',
    },
    {
        id: '900028152',
        name: 'Klinikum Spandau',
    },
    {
        id: '900051307',
        name: 'Königin-Luise-Platz/Botanischer Garten',
    },
    {
        id: '900031154',
        name: 'Nauener Str.',
    },
    {
        id: '900027358',
        name: 'Sandwiesenweg',
    },
    {
        id: '900080454',
        name: 'Gutschmidtstr.',
    },
    {
        id: '900024200',
        name: 'U Wilmersdorfer Str.',
    },
    {
        id: '900340517',
        name: 'Prenzlau, Einkaufszentrum',
    },
    {
        id: '900089456',
        name: 'Kettelerpfad',
    },
    {
        id: '900018106',
        name: 'Goerdelerdamm',
    },
    {
        id: '900005105',
        name: 'Lützowplatz',
    },
    {
        id: '900089451',
        name: 'Buddestr.',
    },
    {
        id: '900084156',
        name: 'Montanstr.',
    },
    {
        id: '900022103',
        name: 'Klausenerplatz',
    },
    {
        id: '900008103',
        name: 'Nettelbeckplatz/S Wedding',
    },
    {
        id: '900046151',
        name: 'Forckenbeckstr.',
    },
    {
        id: '900340715',
        name: 'Weselitz, Abzweig',
    },
    {
        id: '900039165',
        name: 'Katzwanger Steig',
    },
    {
        id: '900340023',
        name: 'Bietikow, Dorf',
    },
    {
        id: '900067401',
        name: 'Am Gemeindepark',
    },
    {
        id: '900067203',
        name: 'Wunsiedeler Weg',
    },
    {
        id: '900062206',
        name: 'Schmidt-Ott-Str.',
    },
    {
        id: '900027401',
        name: 'Falkenseer Chaussee/Zeppelinstr.',
    },
    {
        id: '900070405',
        name: 'Ankogelweg',
    },
    {
        id: '900039163',
        name: 'Benfeyweg',
    },
    {
        id: '900064208',
        name: 'Schwatlostr.',
    },
    {
        id: '900087154',
        name: 'Aristide-Briand-Brücke',
    },
    {
        id: '900035152',
        name: 'Toeplerstr./Halemweg',
    },
    {
        id: '900009201',
        name: 'U Nauener Platz',
    },
    {
        id: '900062251',
        name: 'Grunewaldstr./Lepsiusstr.',
    },
    {
        id: '900082205',
        name: 'Lipschitzallee/Fritz-Erler-Allee',
    },
    {
        id: '900039164',
        name: 'Zingerleweg',
    },
    {
        id: '900091101',
        name: 'Alt-Heiligensee',
    },
    {
        id: '900051254',
        name: 'Bachstelzenweg',
    },
    {
        id: '900096352',
        name: 'Engelroder Weg',
    },
    {
        id: '900028151',
        name: 'Kirchhofstr.',
    },
    {
        id: '900027359',
        name: 'Bötzow-Bahn',
    },
    {
        id: '900130003',
        name: 'S Wollankstr.',
    },
    {
        id: '900064350',
        name: 'Oberhofer Weg',
    },
    {
        id: '900011201',
        name: 'Louise-Schroeder-Platz',
    },
    {
        id: '900035155',
        name: 'Popitzweg',
    },
    {
        id: '900063100',
        name: 'Filandastr.',
    },
    {
        id: '900019204',
        name: 'U Mierendorffplatz',
    },
    {
        id: '900064307',
        name: 'Saaleckplatz',
    },
    {
        id: '900082152',
        name: 'Rudower Str./Grüner Weg',
    },
    {
        id: '900445177',
        name: 'Bärenklau (SPN), Gasthaus',
    },
    {
        id: '900037107',
        name: 'Hackbuschstr./Str. 603',
    },
    {
        id: '900075153',
        name: 'Pflügerstr.',
    },
    {
        id: '900015103',
        name: 'Glogauer Str.',
    },
    {
        id: '900340524',
        name: 'Prenzlau, Gewerbegebiet Ost',
    },
    {
        id: '900075154',
        name: 'Lohmühlenplatz',
    },
    {
        id: '900015104',
        name: 'Ohlauer Str.',
    },
    {
        id: '900015152',
        name: 'Spreewaldplatz',
    },
    {
        id: '900064303',
        name: 'Oberhofer Platz',
    },
    {
        id: '900082105',
        name: 'Johannisthaler Chaussee/Fritz-Erler-Allee',
    },
    {
        id: '900096193',
        name: 'Göschenplatz/S Wittenau',
    },
    {
        id: '900340540',
        name: 'Prenzlau, Milchhof',
    },
    {
        id: '900029202',
        name: 'Moritzstr.',
    },
    {
        id: '900078104',
        name: 'U Hermannplatz/Urbanstr.',
    },
    {
        id: '900077102',
        name: 'Dammweg/Sonnenallee',
    },
    {
        id: '900082296',
        name: 'Buchfinkweg',
    },
    {
        id: '900087152',
        name: 'Julius-Leber-Kaserne',
    },
    {
        id: '900052251',
        name: 'Nibelungenstr.',
    },
    {
        id: '900037207',
        name: 'Heerstr./Magistratsweg',
    },
    {
        id: '900037202',
        name: 'Sandstr.',
    },
    {
        id: '900340583',
        name: 'Schenkenberg (UM), Neubau',
    },
    {
        id: '900079205',
        name: 'Hermannstr./Mariendorfer Weg',
    },
    {
        id: '900096308',
        name: 'Finsterwalder Str./Dannenwalder Weg',
    },
    {
        id: '900079201',
        name: 'U Leinestr.',
    },
    {
        id: '900340268',
        name: 'Dauerthal',
    },
    {
        id: '900340221',
        name: 'Baumgarten (UM)',
    },
    {
        id: '900076155',
        name: 'Werrastr.',
    },
    {
        id: '900340613',
        name: 'Stegemannshof',
    },
    {
        id: '900065152',
        name: 'Persantestr.',
    },
    {
        id: '900017100',
        name: 'Obentrautstr./U Mehringdamm',
    },
    {
        id: '900075152',
        name: 'Mengerzeile',
    },
    {
        id: '900037204',
        name: 'Reimerweg',
    },
    {
        id: '900340513',
        name: 'Prenzlau, Brüssower Allee',
    },
    {
        id: '900080654',
        name: 'Schlosserweg',
    },
    {
        id: '900027452',
        name: 'Merziger Str.',
    },
    {
        id: '900026153',
        name: 'Württembergallee',
    },
    {
        id: '900025152',
        name: 'Mohrunger Allee',
    },
    {
        id: '900025301',
        name: 'Flatowallee/Olympiastadion',
    },
    {
        id: '900068251',
        name: 'Felixstr.',
    },
    {
        id: '900032106',
        name: 'Gatower Str./Heerstr.',
    },
    {
        id: '900073181',
        name: 'Belßstr./Marienfelder Allee',
    },
    {
        id: '900037274',
        name: 'Reimerweg',
    },
    {
        id: '900067458',
        name: 'Sonnenscheinpfad',
    },
    {
        id: '900024252',
        name: 'Schlüterstr.',
    },
    {
        id: '900023105',
        name: 'Uhlandstr./Kantstr.',
    },
    {
        id: '900023206',
        name: 'Theater des Westens',
    },
    {
        id: '900086155',
        name: 'General-Woyna-Str.',
    },
    {
        id: '900032101',
        name: 'Am Omnibushof',
    },
    {
        id: '900069262',
        name: 'Volkmarstr.',
    },
    {
        id: '900086156',
        name: 'Auguste-Viktoria-Allee/Quäkerstr.',
    },
    {
        id: '900340692',
        name: 'Tornow (UM)',
    },
    {
        id: '900070304',
        name: 'Friedenstr./Großbeerenstr.',
    },
    {
        id: '900019102',
        name: 'Gloedenpfad',
    },
    {
        id: '900019252',
        name: 'Wirmerzeile',
    },
    {
        id: '900025451',
        name: 'Alte Allee',
    },
    {
        id: '900074293',
        name: 'Wünsdorfer Str./Blohmstr.',
    },
    {
        id: '900340556',
        name: 'Prenzlau, UNI Center',
    },
    {
        id: '900082291',
        name: 'Johannisthaler Ch./Rudower Str.',
    },
    {
        id: '900064308',
        name: 'Schütte-Lanz-Str./Lichterfelder Ring',
    },
    {
        id: '900064355',
        name: 'Lilienthalpark',
    },
    {
        id: '900025452',
        name: 'Kiefernweg',
    },
    {
        id: '900019202',
        name: 'Reichweindamm',
    },
    {
        id: '900025401',
        name: 'Maikäferpfad',
    },
    {
        id: '900025425',
        name: 'Jafféstr.',
    },
    {
        id: '900025551',
        name: 'Messegelände/Verwaltung',
    },
    {
        id: '900078106',
        name: 'U Hermannplatz/Karl-Marx-Str.',
    },
    {
        id: '900080601',
        name: 'Zimmererweg',
    },
    {
        id: '900340323',
        name: 'Göritz (UM), Schule',
    },
    {
        id: '900024253',
        name: 'Mommsenstr.',
    },
    {
        id: '900340249',
        name: 'Brüssow, Bhf',
    },
    {
        id: '900071151',
        name: 'Döhlauer Pfad',
    },
    {
        id: '900071153',
        name: 'Greinerstr.',
    },
    {
        id: '900071154',
        name: 'Porschestr.',
    },
    {
        id: '900070102',
        name: 'Sommerbad Mariendorf',
    },
    {
        id: '900070181',
        name: 'Dirschelweg',
    },
    {
        id: '900037191',
        name: 'Finkenkruger Weg',
    },
    {
        id: '900049101',
        name: 'Neuruppiner Str.',
    },
    {
        id: '900029305',
        name: 'Staaken',
    },
    {
        id: '900085103',
        name: 'Gotthardstr./Holländerstr.',
    },
    {
        id: '900340247',
        name: 'Brüssow, Am See',
    },
    {
        id: '900080201',
        name: 'U Blaschkoallee',
    },
    {
        id: '900080462',
        name: 'Haarlemer Str.',
    },
    {
        id: '900056105',
        name: 'An der Urania',
    },
    {
        id: '900027403',
        name: 'Hohenzollernring/Falkenseer Chaussee',
    },
    {
        id: '900029153',
        name: 'Jenneweg',
    },
    {
        id: '900340250',
        name: 'Brüssow, Löcknitzer Chaussee',
    },
    {
        id: '900027308',
        name: 'Hochhausweg',
    },
    {
        id: '900083359',
        name: 'Kirchhof Rudow',
    },
    {
        id: '900091161',
        name: 'Dorfaue',
    },
    {
        id: '900340258',
        name: 'Butterholz',
    },
    {
        id: '900039151',
        name: 'Grimmelshausenstr.',
    },
    {
        id: '000310104002',
        name: 'Löcknitz, Schule',
    },
    {
        id: '900066103',
        name: 'Unter den Eichen/Drakestr.',
    },
    {
        id: '900005155',
        name: 'Hiroshimasteg',
    },
    {
        id: '900074153',
        name: 'Am Rötepfuhl',
    },
    {
        id: '000310096002',
        name: 'Löcknitz, Kaufhaus',
    },
    {
        id: '900032152',
        name: 'Földerichplatz',
    },
    {
        id: '900032353',
        name: 'Götelstr.',
    },
    {
        id: '900005152',
        name: 'Gedenkstätte Dt. Widerstand',
    },
    {
        id: '900004104',
        name: 'Reichstag/Bundestag',
    },
    {
        id: '900085106',
        name: 'Dubliner Str.',
    },
    {
        id: '900027354',
        name: 'Wolburgsweg',
    },
    {
        id: '900011153',
        name: 'Septimerstr.',
    },
    {
        id: '900011105',
        name: 'Londoner Str.',
    },
    {
        id: '500000073901',
        name: 'Bergholz (UER), Abzweig',
    },
    {
        id: '900340463',
        name: 'Menkin',
    },
    {
        id: '900080603',
        name: 'Dachdeckerweg',
    },
    {
        id: '900080101',
        name: 'Gradestr./Tempelhofer Weg',
    },
    {
        id: '900095155',
        name: 'Bruchstückgraben',
    },
    {
        id: '900051312',
        name: 'Limonenstr.',
    },
    {
        id: '900051313',
        name: 'Altensteinstr./Fabeckstr.',
    },
    {
        id: '900001154',
        name: 'Ilsenburger Str.',
    },
    {
        id: '900019158',
        name: 'Berliner Großmarkt',
    },
    {
        id: '900010201',
        name: 'Sylter Str.',
    },
    {
        id: '900010251',
        name: 'Virchow-Klinikum',
    },
    {
        id: '900053101',
        name: 'Glienicker Lake',
    },
    {
        id: '900051372',
        name: 'U Oskar-Helene-Heim',
    },
    {
        id: '900019103',
        name: 'Seestr./Beusselstr.',
    },
    {
        id: '900020202',
        name: 'S Beusselstr.',
    },
    {
        id: '900340440',
        name: 'Ludwigsburg, Dorf',
    },
    {
        id: '900068253',
        name: 'Ringbahnstr.',
    },
    {
        id: '900086157',
        name: 'Foxweg',
    },
    {
        id: '900019253',
        name: 'Keplerstr.',
    },
    {
        id: '900064258',
        name: 'Ahlener Weg',
    },
    {
        id: '900060102',
        name: 'Friedenauer Brücke',
    },
    {
        id: '900080652',
        name: 'Britzer Garten',
    },
    {
        id: '900027302',
        name: 'Falkenseer Chaussee/Stadtrandstr.',
    },
    {
        id: '900083351',
        name: 'Lieselotte-Berger-Str.',
    },
    {
        id: '900027355',
        name: 'Frankenwaldstr.',
    },
    {
        id: '900057171',
        name: 'Mansteinstr.',
    },
    {
        id: '900076191',
        name: 'Elsenstr./Harzer Str. (Berlin,)',
    },
    {
        id: '900070159',
        name: 'Gradestr. 71',
    },
    {
        id: '900005207',
        name: 'Philharmonie Süd',
    },
    {
        id: '900071171',
        name: 'Halbauer Weg',
    },
    {
        id: '900042101',
        name: 'U Spichernstr.',
    },
    {
        id: '900340622',
        name: 'Stramehl, Abzweig',
    },
    {
        id: '900092101',
        name: 'Invalidensiedlung',
    },
    {
        id: '900046353',
        name: 'Bernadottestr.',
    },
    {
        id: '900096357',
        name: 'Packereigraben',
    },
    {
        id: '900340259',
        name: 'Carmzow, Dorf',
    },
    {
        id: '900070158',
        name: 'Gradestr. 91',
    },
    {
        id: '900091152',
        name: 'Strandbad Heiligensee',
    },
    {
        id: '900037255',
        name: 'Heerstr. 438-446',
    },
    {
        id: '900037208',
        name: 'Blasewitzer Ring',
    },
    {
        id: '900096350',
        name: 'Zerpenschleuser Ring Süd',
    },
    {
        id: '900074105',
        name: 'Grimmstr.',
    },
    {
        id: '900074159',
        name: 'Homburgstr.',
    },
    {
        id: '900001201',
        name: 'S+U Westhafen',
    },
    {
        id: '900002257',
        name: 'Kruppstr.',
    },
    {
        id: '900002256',
        name: 'Poststadion',
    },
    {
        id: '900083207',
        name: 'Am Hanffgraben',
    },
    {
        id: '900095101',
        name: 'Alt-Lübars',
    },
    {
        id: '900340634',
        name: 'Prenzlau, Neubrandenburger Str.',
    },
    {
        id: '900340545',
        name: 'Prenzlau, Pestalozzi Schule',
    },
    {
        id: '900051258',
        name: 'Waltraudstr.',
    },
    {
        id: '900066152',
        name: 'Schlossparktheater',
    },
    {
        id: '900082252',
        name: 'Löwensteinring',
    },
    {
        id: '900074210',
        name: 'Wolziger Zeile',
    },
    {
        id: '900058106',
        name: 'Röblingstr./Arnulfstr.',
    },
    {
        id: '900064273',
        name: 'Celsiusstr. Süd',
    },
    {
        id: '900340758',
        name: 'Prenzlau, Kreuzstr.',
    },
    {
        id: '900340672',
        name: 'Prenzlau, Gewerbestr.',
    },
    {
        id: '900023354',
        name: 'Friedrich-Hollaender-Platz',
    },
    {
        id: '900340814',
        name: 'Prenzlau, Mühlmannstift',
    },
    {
        id: '900070702',
        name: 'U Alt-Mariendorf',
    },
    {
        id: '900068352',
        name: 'Gersdorfstr./Kurfürstenstr.',
    },
    {
        id: '900058153',
        name: 'Friedhof Röblingstr.',
    },
    {
        id: '900063154',
        name: 'Cranachstr.',
    },
    {
        id: '900074251',
        name: 'Cecilienstr.',
    },
    {
        id: '900070381',
        name: 'Ringstr./Rathausstr.',
    },
    {
        id: '900340815',
        name: 'Prenzlau, Brüssower Allee Mitte',
    },
    {
        id: '900074252',
        name: 'Simpsonweg',
    },
    {
        id: '900074274',
        name: 'Illigstr./Schichauweg',
    },
    {
        id: '900074270',
        name: 'Illigstr./Grenzweg',
    },
    {
        id: '900340792',
        name: 'Falkenhagen (UM), Kreuzung',
    },
    {
        id: '900063203',
        name: 'Carmerplatz',
    },
    {
        id: '900027453',
        name: 'Westerwaldstr.',
    },
    {
        id: '900036101',
        name: 'U Rohrdamm',
    },
    {
        id: '900022151',
        name: 'Eosanderstr.',
    },
    {
        id: '900003201',
        name: 'S+U Berlin Hauptbahnhof',
    },
    {
        id: '900022252',
        name: 'Warburgzeile',
    },
    {
        id: '900023104',
        name: 'Otto-Suhr-Allee/Leibnizstr.',
    },
    {
        id: '900051310',
        name: 'Clayallee/Oskar-Helene-Park',
    },
    {
        id: '900022202',
        name: 'U Richard-Wagner-Platz',
    },
    {
        id: '900034103',
        name: 'Paulsternstr./Gartenfelder Str.',
    },
    {
        id: '900030251',
        name: 'Stresowplatz',
    },
    {
        id: '900005255',
        name: 'Kulturforum',
    },
    {
        id: '900067457',
        name: 'Wichurastr.',
    },
    {
        id: '900067456',
        name: 'Wedellstr.',
    },
    {
        id: '900086151',
        name: 'Kapweg',
    },
    {
        id: '900012105',
        name: 'Abgeordnetenhaus',
    },
    {
        id: '900027202',
        name: 'Klinkeplatz',
    },
    {
        id: '900020105',
        name: 'Machandelweg',
    },
    {
        id: '900340539',
        name: 'Prenzlau, Alexanderhof Abzweig',
    },
    {
        id: '900340209',
        name: 'Arendsee (UM), Ausbau',
    },
    {
        id: '900024103',
        name: 'S Charlottenburg/Gervinusstr.',
    },
    {
        id: '900027259',
        name: 'Werderstr.',
    },
    {
        id: '900341280',
        name: 'Kraatz (UM), Ausbau 2',
    },
    {
        id: '900068204',
        name: 'Albrechtstr./Manteuffelstr.',
    },
    {
        id: '900068355',
        name: 'Chlodwigstr.',
    },
    {
        id: '900097103',
        name: 'Triftstr./Am Nordgraben',
    },
    {
        id: '900096355',
        name: 'Zerpenschleuser Ring Nord',
    },
    {
        id: '900007108',
        name: 'S Nordbahnhof/Gartenstr.',
    },
    {
        id: '900036153',
        name: 'Str. am Schaltwerk',
    },
    {
        id: '900064771',
        name: 'Wismarer Str.',
    },
    {
        id: '900064206',
        name: 'Ostpreußendamm/Osdorfer Str.',
    },
    {
        id: '900064152',
        name: 'Giesensdorfer Str.',
    },
    {
        id: '900064306',
        name: 'Amalienstr.',
    },
    {
        id: '900067205',
        name: 'Kaiser-Wilhelm-Str./Seydlitzstr.',
    },
    {
        id: '900067257',
        name: 'Dillgesstr.',
    },
    {
        id: '900068357',
        name: 'Mergentheimer Str.',
    },
    {
        id: '900068304',
        name: 'Röblingstr./Attilastr.',
    },
    {
        id: '900068341',
        name: 'Attilaplatz',
    },
    {
        id: '900340320',
        name: 'Göritz (UM), B 109',
    },
    {
        id: '900340267',
        name: 'Dauer',
    },
    {
        id: '900340238',
        name: 'Blindow, Dorf',
    },
    {
        id: '900070353',
        name: 'Am Heidefriedhof',
    },
    {
        id: '900340458',
        name: 'Malchow',
    },
    {
        id: '900340682',
        name: 'Prenzlau, Triftstr.',
    },
    {
        id: '900068353',
        name: 'Friedrich-Wilhelm-Str.',
    },
    {
        id: '900077153',
        name: 'Ziegrastr.',
    },
    {
        id: '900056101',
        name: 'U Wittenbergplatz',
    },
    {
        id: '900093102',
        name: 'Heinsestr.',
    },
    {
        id: '900027356',
        name: 'Friedhof In den Kisseln',
    },
    {
        id: '900340589',
        name: 'Schenkenberg (UM), Kirche',
    },
    {
        id: '900070457',
        name: 'Asbestweg',
    },
    {
        id: '900070456',
        name: 'Tropfsteinweg',
    },
    {
        id: '900070252',
        name: 'Prühßstr.',
    },
    {
        id: '900089391',
        name: 'An der Mühle',
    },
    {
        id: '900036154',
        name: 'Köttgenstr.',
    },
    {
        id: '900032401',
        name: 'Weißenburger Str.',
    },
    {
        id: '900070401',
        name: 'Tauernallee/Säntisstr.',
    },
    {
        id: '900074154',
        name: 'Gerlinger Str.',
    },
    {
        id: '900096458',
        name: 'S+U Karl-Bonhoeffer-Nervenklinik',
    },
    {
        id: '900011207',
        name: 'Brienzer Str.',
    },
    {
        id: '900030156',
        name: 'Tiefwerderweg',
    },
    {
        id: '900024101',
        name: 'S Charlottenburg',
    },
    {
        id: '900072152',
        name: 'Daimlerstr./Industriegebiet',
    },
    {
        id: '900031101',
        name: 'Brunsbütteler Damm/Ruhlebener Str.',
    },
    {
        id: '900085104',
        name: 'U Paracelsus-Bad',
    },
    {
        id: '900086121',
        name: 'Klamannstr.',
    },
    {
        id: '900086160',
        name: 'U Lindauer Allee',
    },
    {
        id: '900086105',
        name: 'Ollenhauerstr./Lindauer Allee',
    },
    {
        id: '900068152',
        name: 'Wüsthoffstr.',
    },
    {
        id: '900068106',
        name: 'Bäumerplan',
    },
    {
        id: '900082254',
        name: 'Sollmannweg',
    },
    {
        id: '900002205',
        name: 'Turmstr./Lübecker Str.',
    },
    {
        id: '900071104',
        name: 'Wilhelm-von-Siemens-Str.',
    },
    {
        id: '900064102',
        name: 'Bogenstr.',
    },
    {
        id: '900070404',
        name: 'Richard-Tauber-Damm/Säntisstr.',
    },
    {
        id: '900074202',
        name: 'S Schichauweg',
    },
    {
        id: '900340237',
        name: 'Blindow, Chausseehaus',
    },
    {
        id: '900078251',
        name: 'Zeitzer Str.',
    },
    {
        id: '900071101',
        name: 'Körtingstr.',
    },
    {
        id: '900072181',
        name: 'Großbeerenstr./Daimlerstr.',
    },
    {
        id: '900340200',
        name: 'Prenzlau, Umspannwerk',
    },
    {
        id: '900070101',
        name: 'U Westphalweg',
    },
    {
        id: '900027362',
        name: 'Freudstr.',
    },
    {
        id: '900091151',
        name: 'Havelblick',
    },
    {
        id: '900091153',
        name: 'Gemeindefriedhof',
    },
    {
        id: '900340693',
        name: 'Trampe (UM), Abzweig',
    },
    {
        id: '900078252',
        name: 'Niemetzstr.',
    },
    {
        id: '900053271',
        name: 'Am Birkenhügel',
    },
    {
        id: '900027304',
        name: 'Wasserwerk Spandau',
    },
    {
        id: '900068302',
        name: 'U Kaiserin-Augusta-Str.',
    },
    {
        id: '900070151',
        name: 'Mariendorfer Damm/Eisenacher Str.',
    },
    {
        id: '900340344',
        name: 'Grünberg, Dorf',
    },
    {
        id: '900070455',
        name: 'Grünsteinweg',
    },
    {
        id: '900070403',
        name: 'Sangerhauser Weg',
    },
    {
        id: '900070454',
        name: 'Watzmannweg',
    },
    {
        id: '900340219',
        name: 'Battin, Dorf',
    },
    {
        id: '900340214',
        name: 'Bagemühl',
    },
    {
        id: '900340729',
        name: 'Woddow',
    },
    {
        id: '900340737',
        name: 'Wollschow',
    },
    {
        id: '900025151',
        name: 'Ragniter Allee',
    },
    {
        id: '900077100',
        name: 'Mittelbuschweg',
    },
    {
        id: '900049150',
        name: 'Fercher Str.',
    },
    {
        id: '900079251',
        name: 'Eduard-Müller-Platz',
    },
    {
        id: '900079220',
        name: 'S+U Hermannstr./Silbersteinstr.',
    },
    {
        id: '900049157',
        name: 'Camphausenstr.',
    },
    {
        id: '900074156',
        name: 'Rathenower Str./Töpchiner Weg',
    },
    {
        id: '900049155',
        name: 'Loebellstr.',
    },
    {
        id: '900049154',
        name: 'Ludwigsfelder Str.',
    },
    {
        id: '900081271',
        name: 'Alt-Buckow/Dorfteich',
    },
    {
        id: '900069208',
        name: 'Eschersheimer Str.',
    },
    {
        id: '900003257',
        name: 'Lesser-Ury-Weg',
    },
    {
        id: '900069253',
        name: 'Oberlandgarten',
    },
    {
        id: '900068252',
        name: 'Oberlandstr./BAB',
    },
    {
        id: '900029102',
        name: 'Zeppelinstr./Seegefelder Str.',
    },
    {
        id: '900077103',
        name: 'Naumburger Str.',
    },
    {
        id: '900027263',
        name: 'Ashdodstr.',
    },
    {
        id: '900083255',
        name: 'Mistelweg',
    },
    {
        id: '900083256',
        name: 'Kanalstr. 38-41',
    },
    {
        id: '900058171',
        name: 'Bessemerstr.',
    },
    {
        id: '900058107',
        name: 'Alboinplatz',
    },
    {
        id: '900085265',
        name: 'Herbststr.',
    },
    {
        id: '900058156',
        name: 'Egelingzeile',
    },
    {
        id: '900058155',
        name: 'Eresburgstr.',
    },
    {
        id: '900034158',
        name: 'Kleine Eiswerderstr.',
    },
    {
        id: '900066351',
        name: 'Prettauer Pfad',
    },
    {
        id: '900062202',
        name: 'S+U Rathaus Steglitz',
    },
    {
        id: '900083267',
        name: 'Herzblattweg',
    },
    {
        id: '900081101',
        name: 'Quarzweg/Marienfelder Chaussee',
    },
    {
        id: '900083268',
        name: 'Buchsbaumweg',
    },
    {
        id: '900034105',
        name: 'Haselhorster Damm/Gartenfelder Str.',
    },
    {
        id: '900034156',
        name: 'Stadion Haselhorst',
    },
    {
        id: '900340252',
        name: 'Brüssow, Prenzlauer Str.',
    },
    {
        id: '900085266',
        name: 'Reginhardstr./Büdnerring',
    },
    {
        id: '900037108',
        name: 'Eckenerweg',
    },
    {
        id: '900034154',
        name: 'Grützmacherpark',
    },
    {
        id: '900095154',
        name: 'Welzower Steig',
    },
    {
        id: '900034161',
        name: 'Haveleck',
    },
    {
        id: '900045155',
        name: 'Südwestkorso/Taunusstr.',
    },
    {
        id: '900340343',
        name: 'Grünberg (UM), Bhf',
    },
    {
        id: '900340342',
        name: 'Grünberg, Ausbau',
    },
    {
        id: '900024207',
        name: 'Kantstr./Leibnizstr.',
    },
    {
        id: '900077151',
        name: 'Planetenstr.',
    },
    {
        id: '900096192',
        name: 'Humboldt-Klinikum',
    },
    {
        id: '900096305',
        name: 'Wilhelmsruher Damm/Treuenbrietzener Str.',
    },
    {
        id: '900009252',
        name: 'Exerzierstr.',
    },
    {
        id: '900026205',
        name: 'Knobelsdorffstr.',
    },
    {
        id: '900053206',
        name: 'Hahn-Meitner-Platz',
    },
    {
        id: '900034151',
        name: 'Siedlung Haselhorst',
    },
    {
        id: '900073206',
        name: 'Tirschenreuther Ring',
    },
    {
        id: '900085250',
        name: 'Amendestr.',
    },
    {
        id: '900017104',
        name: 'U Möckernbrücke',
    },
    {
        id: '900080251',
        name: 'Riesestr.',
    },
    {
        id: '900074158',
        name: 'Kambergstr.',
    },
    {
        id: '900014156',
        name: 'Rio-Reiser-Platz',
    },
    {
        id: '900089601',
        name: 'Mäckeritzwiesen',
    },
    {
        id: '900012101',
        name: 'S Anhalter Bahnhof',
    },
    {
        id: '900005205',
        name: 'Potsdamer Brücke',
    },
    {
        id: '900035105',
        name: 'Mäckeritzbrücke',
    },
    {
        id: '900068354',
        name: 'Rathaus Tempelhof',
    },
    {
        id: '900049156',
        name: 'Radtkestr.',
    },
    {
        id: '900069201',
        name: 'U Ullsteinstr./Ordensmeisterstr.',
    },
    {
        id: '900050381',
        name: 'Busseallee',
    },
    {
        id: '900077204',
        name: 'Chris-Gueffroy-Allee',
    },
    {
        id: '900053291',
        name: 'Wannseebrücke',
    },
    {
        id: '900055152',
        name: 'Motzstr.',
    },
    {
        id: '900054107',
        name: 'Dominicusstr./Hauptstr.',
    },
    {
        id: '900035156',
        name: 'Saatwinkler Damm 137',
    },
    {
        id: '900035103',
        name: 'Saatwinkler Damm/Rohrdamm',
    },
    {
        id: '900027363',
        name: 'Am Bogen',
    },
    {
        id: '900074104',
        name: 'Kloster-Zinna-Str.',
    },
    {
        id: '900026154',
        name: 'Westendallee',
    },
    {
        id: '900020281',
        name: 'Goerdelersteg',
    },
    {
        id: '900084153',
        name: 'Lengeder Str.',
    },
    {
        id: '900006100',
        name: 'S Wollankstr./Sternstr.',
    },
    {
        id: '900006105',
        name: 'Verlängerte Koloniestr.',
    },
    {
        id: '900023304',
        name: 'Olivaer Platz',
    },
    {
        id: '900074155',
        name: 'Baldersheimer Weg',
    },
    {
        id: '900084154',
        name: 'Interessentenweg',
    },
    {
        id: '900014103',
        name: 'Adalbertstr./Oranienstr.',
    },
    {
        id: '900080405',
        name: 'Buschkrug',
    },
    {
        id: '900059101',
        name: 'Sachsendamm/Gotenstr.',
    },
    {
        id: '900340538',
        name: 'Prenzlau, Landkreis Uckermark Verwaltg.',
    },
    {
        id: '900340527',
        name: 'Prenzlau, Ärztehaus',
    },
    {
        id: '900082294',
        name: 'Birkhuhnweg',
    },
    {
        id: '900340248',
        name: 'Brüssow, Ausbau',
    },
    {
        id: '900340299',
        name: 'Frauenhagen (bei Brüssow)',
    },
    {
        id: '900012106',
        name: 'Mehringbrücke',
    },
    {
        id: '900009153',
        name: 'Luxemburger Str.',
    },
    {
        id: '900082295',
        name: 'Stelzenweg',
    },
    {
        id: '900096307',
        name: 'Wilhelmsruher Damm',
    },
    {
        id: '900340511',
        name: 'Prenzlau, Baustr.',
    },
    {
        id: '900077155',
        name: 'S Köllnische Heide',
    },
    {
        id: '900085259',
        name: 'Mickestr.',
    },
    {
        id: '900036155',
        name: 'Harriesstr.',
    },
    {
        id: '900068205',
        name: 'Oberlandstr./Germaniastr.',
    },
    {
        id: '900018102',
        name: 'U Halemweg',
    },
    {
        id: '900020201',
        name: 'S+U Jungfernheide',
    },
    {
        id: '900007157',
        name: 'Rügener Str.',
    },
    {
        id: '900069271',
        name: 'U Ullsteinstr.',
    },
    {
        id: '900009251',
        name: 'Maxstr.',
    },
    {
        id: '900072104',
        name: 'Benzstr.',
    },
    {
        id: '900090151',
        name: 'Rallenweg',
    },
    {
        id: '900063254',
        name: 'Vionvillestr.',
    },
    {
        id: '900067171',
        name: 'Teltowkanalstr.',
    },
    {
        id: '900340770',
        name: 'Carmzow, Ausbau',
    },
    {
        id: '900066401',
        name: 'Goerzallee/Drakestr.',
    },
    {
        id: '900066408',
        name: 'Bäkestr.',
    },
    {
        id: '900066454',
        name: 'Krahmerstr./Stockweg',
    },
    {
        id: '900066410',
        name: 'Charité - Campus Benjamin Franklin',
    },
    {
        id: '900066405',
        name: 'Hindenburgdamm/Klingsorstr.',
    },
    {
        id: '900066455',
        name: 'Manteuffelstr.',
    },
    {
        id: '900064207',
        name: 'Ostpreußendamm Süd',
    },
    {
        id: '900066302',
        name: 'Bundesarchiv',
    },
    {
        id: '900340667',
        name: 'Prenzlau, Gymnasium Friedhofstr.',
    },
    {
        id: '900064271',
        name: 'Wismarer Str.',
    },
    {
        id: '900066256',
        name: 'Köhlerstr.',
    },
    {
        id: '900066451',
        name: 'Baseler Str.',
    },
    {
        id: '900066407',
        name: 'Drakestr./Ringstr.',
    },
    {
        id: '900063202',
        name: 'Birkbuschstr./Klingsorstr.',
    },
    {
        id: '900063252',
        name: 'Haydnstr.',
    },
    {
        id: '900003256',
        name: 'Spenerstr.',
    },
    {
        id: '900340546',
        name: 'Prenzlau, Ph.-Hackert-Schule',
    },
    {
        id: '900086154',
        name: 'Zobeltitzstr.',
    },
    {
        id: '900011206',
        name: 'Holländerstr./Aroser Allee',
    },
    {
        id: '900003107',
        name: 'Alt-Moabit/Gotzkowskystr.',
    },
    {
        id: '900003156',
        name: 'Ottostr.',
    },
    {
        id: '900003176',
        name: 'U Turmstr.',
    },
    {
        id: '900003203',
        name: 'Alt-Moabit/Rathenower Str.',
    },
    {
        id: '900023305',
        name: 'Lietzenburger Str./Uhlandstr.',
    },
    {
        id: '900027206',
        name: 'Rauchstr.',
    },
    {
        id: '900049254',
        name: 'Schweizerhofpark',
    },
    {
        id: '900001204',
        name: 'Lehrter Str./Invalidenstr.',
    },
    {
        id: '900029371',
        name: 'S+U Rathaus Spandau',
    },
    {
        id: '900340767',
        name: 'Prenzlau, Igelpfuhl',
    },
    {
        id: '900340547',
        name: 'Prenzlau, Robert-Schulz-Ring',
    },
    {
        id: '900066154',
        name: 'Tietzenweg',
    },
    {
        id: '900066153',
        name: 'Lipaer Str.',
    },
    {
        id: '900058152',
        name: 'Domnauer Str.',
    },
    {
        id: '900027260',
        name: 'Eschenweg',
    },
    {
        id: '900074259',
        name: 'Nürnberger Str.',
    },
    {
        id: '900340596',
        name: 'Schönfeld (bei Klockow)',
    },
    {
        id: '900340479',
        name: 'Neuenfeld',
    },
    {
        id: '900080452',
        name: 'Onkel-Herse-Str.',
    },
    {
        id: '900340761',
        name: 'Petersruh',
    },
    {
        id: '900090152',
        name: 'Rohrweihstr.',
    },
    {
        id: '900090153',
        name: 'Sperberstr.',
    },
    {
        id: '900025255',
        name: 'Wiesendamm',
    },
    {
        id: '900030155',
        name: 'Werkring',
    },
    {
        id: '900066257',
        name: 'Johanneskirchplatz',
    },
    {
        id: '900340703',
        name: 'Wallmow, Dorf',
    },
    {
        id: '900340712',
        name: 'Wendtshof',
    },
    {
        id: '900340263',
        name: 'Cremzow',
    },
    {
        id: '900026208',
        name: 'Messegelände/ZOB',
    },
    {
        id: '900020272',
        name: 'Schlosspark-Klinik',
    },
    {
        id: '900067206',
        name: 'Melanchthonstr./Bruchwitzstr.',
    },
    {
        id: '900030191',
        name: 'Klärwerkstr.',
    },
    {
        id: '900027307',
        name: 'Griesingerstr.',
    },
    {
        id: '900082258',
        name: 'Zadekstr.',
    },
    {
        id: '900027352',
        name: 'Im Spektefeld/Schulzentrum',
    },
    {
        id: '900340218',
        name: 'Battin, Ausbau',
    },
    {
        id: '900037101',
        name: 'Magistratsweg/Brunsbütteler Damm',
    },
    {
        id: '900057154',
        name: 'Leuthener Str.',
    },
    {
        id: '900018153',
        name: 'Dahrendorfzeile',
    },
    {
        id: '900027372',
        name: 'Radelandstr./Pflegeheim',
    },
    {
        id: '900064104',
        name: 'Herwarthstr.',
    },
    {
        id: '900057153',
        name: 'Gustav-Müller-Platz',
    },
    {
        id: '900064253',
        name: 'Schwelmer Str.',
    },
    {
        id: '900085102',
        name: 'Gotthardstr./Teichstr.',
    },
    {
        id: '900083357',
        name: 'Künnekeweg',
    },
    {
        id: '900047151',
        name: 'Havelweg',
    },
    {
        id: '900058172',
        name: 'Suttnerstr.',
    },
    {
        id: '900074291',
        name: 'Birkenhaag',
    },
    {
        id: '900066354',
        name: 'Bremer Str.',
    },
    {
        id: '900018152',
        name: 'Hofackerzeile',
    },
    {
        id: '900027309',
        name: 'Spektefeld',
    },
    {
        id: '900083260',
        name: 'Rudower Höhe',
    },
    {
        id: '900340726',
        name: 'Wittenhof, Dorf',
    },
    {
        id: '900037154',
        name: 'Seegefelder Weg/Klosterbuschweg',
    },
    {
        id: '900066353',
        name: 'Engadiner Weg',
    },
    {
        id: '900063292',
        name: 'Heesestr.',
    },
    {
        id: '900069101',
        name: 'Columbiadamm/Friesenstr.',
    },
    {
        id: '900340528',
        name: 'Prenzlau, Grüner Winkel',
    },
    {
        id: '900066254',
        name: 'Thuner Platz',
    },
    {
        id: '900057106',
        name: 'Torgauer Str.',
    },
    {
        id: '900063302',
        name: 'Kottesteig',
    },
    {
        id: '900340529',
        name: 'Prenzlau, Grundschule 4',
    },
    {
        id: '900340523',
        name: 'Prenzlau, Georg-Dreke-Ring',
    },
    {
        id: '900052154',
        name: 'Großes Fenster',
    },
    {
        id: '900060155',
        name: 'Planetarium',
    },
    {
        id: '900060105',
        name: 'Auguste-Viktoria-Klinikum Süd',
    },
    {
        id: '900060154',
        name: 'Auguste-Viktoria-Klinikum',
    },
    {
        id: '900060103',
        name: 'Grazer Platz/Beckerstr.',
    },
    {
        id: '900060153',
        name: 'Rubensstr./S Friedenau',
    },
    {
        id: '900060107',
        name: 'Ceciliengärten',
    },
    {
        id: '900037102',
        name: 'Heidebergplan',
    },
    {
        id: '900001200',
        name: 'Fennbrücke',
    },
    {
        id: '900340549',
        name: 'Prenzlau, Schenkenberger Str.',
    },
    {
        id: '900058105',
        name: 'Lindenhof',
    },
    {
        id: '900096311',
        name: 'Senftenberger Ring Ost',
    },
    {
        id: '900032402',
        name: 'Alt-Pichelsdorf',
    },
    {
        id: '900096711',
        name: 'U Rathaus Reinickendorf',
    },
    {
        id: '900051205',
        name: 'Domäne Dahlem',
    },
    {
        id: '900083391',
        name: 'Ostburger Weg/Lettberger Str.',
    },
    {
        id: '900085108',
        name: 'U Paracelsus-Bad/Aroser Allee',
    },
    {
        id: '900064358',
        name: 'Georgenstr.',
    },
    {
        id: '900080451',
        name: 'Otto-Wels-Ring',
    },
    {
        id: '900445238',
        name: 'Bühlow',
    },
    {
        id: '900446256',
        name: 'Sellessen, Abzweig nach Bühlow',
    },
    {
        id: '900341144',
        name: 'Schwedt, Lindenallee',
    },
    {
        id: '900446530',
        name: 'Sellessen, Neu Haidemühl',
    },
    {
        id: '900446258',
        name: 'Sellessen, Sägewerk',
    },
    {
        id: '900446511',
        name: 'Weskow, Sellessener Allee',
    },
    {
        id: '900341138',
        name: 'Schwedt, Klinikum',
    },
    {
        id: '900446508',
        name: 'Weskow, Grausteiner Weg',
    },
    {
        id: '900445573',
        name: 'Großsee, Abzweig',
    },
    {
        id: '900445862',
        name: 'Kleinsee, Abzweig',
    },
    {
        id: '900341176',
        name: 'Schwedt, Ehm-Welk-Str.',
    },
    {
        id: '900445239',
        name: 'Bühlow, B 97 Abzweig Bühlow',
    },
    {
        id: '900445494',
        name: 'Graustein, Weg zum Umspannwerk',
    },
    {
        id: '900340106',
        name: 'Angermünde, Büchnerstr.',
    },
    {
        id: '900445492',
        name: 'Graustein, Schule',
    },
    {
        id: '900445491',
        name: 'Graustein, Gasthaus',
    },
    {
        id: '900446351',
        name: 'Spremberg, Pulsberg Wendeplatz',
    },
    {
        id: '900446421',
        name: 'Terpe, Kindergarten',
    },
    {
        id: '900446459',
        name: 'Türkendorf',
    },
    {
        id: '900341175',
        name: 'Schwedt, Erich-Weinert-Ring',
    },
    {
        id: '900445560',
        name: 'Groß Luja, Gasthaus',
    },
    {
        id: '900445506',
        name: 'Grießen, Dorf',
    },
    {
        id: '900445062',
        name: 'Gosda (bei Klinge), Kinderheim',
    },
    {
        id: '900445844',
        name: 'Schenkendöbern, Klein Gastrose',
    },
    {
        id: '900446527',
        name: 'Wilschwitz',
    },
    {
        id: '900205161',
        name: 'Schenkendöbern, Dorf',
    },
    {
        id: '900445150',
        name: 'Atterwasch',
    },
    {
        id: '900445128',
        name: 'Gahry, Ausbau',
    },
    {
        id: '900445076',
        name: 'Jethe, Dorf',
    },
    {
        id: '900340070',
        name: 'Criewen, Försterei Abzweig',
    },
    {
        id: '900445077',
        name: 'Jethe, Kreuzschänke',
    },
    {
        id: '900445083',
        name: 'Klinge',
    },
    {
        id: '900205159',
        name: 'Schenkendöbern, Abzweig B 320',
    },
    {
        id: '900205164',
        name: 'Schenkendöbern, Seeweg',
    },
    {
        id: '900445481',
        name: 'Grabko, Wendeplatz',
    },
    {
        id: '900445179',
        name: 'Bärenklau (SPN), Siedlung',
    },
    {
        id: '900245027',
        name: 'S Blankenfelde (TF)',
    },
    {
        id: '900445551',
        name: 'Groß Gastrose, Schule',
    },
    {
        id: '900446115',
        name: 'Pinnow (SPN), Gasthaus',
    },
    {
        id: '900445482',
        name: 'Grano, Dorf',
    },
    {
        id: '900445483',
        name: 'Grano, Schule',
    },
    {
        id: '900205160',
        name: 'Schenkendöbern, Abzweig Lübbinchen',
    },
    {
        id: '900341312',
        name: 'Zützen (UM), Chausseehaus',
    },
    {
        id: '900446252',
        name: 'Schwarze Pumpe, Süd',
    },
    {
        id: '900446240',
        name: 'Schwarze Pumpe, Busbahnhof',
    },
    {
        id: '900340109',
        name: 'Angermünde, Eigenheimsiedlung',
    },
    {
        id: '900446441',
        name: 'Tschernitz, Brauereiweg',
    },
    {
        id: '900446537',
        name: 'Wolfshain, Schule',
    },
    {
        id: '900446442',
        name: 'Tschernitz, Fernsehglas GmbH',
    },
    {
        id: '900446440',
        name: 'Tschernitz, Abzweig nach Klein Düben',
    },
    {
        id: '900446443',
        name: 'Tschernitz, Nord',
    },
    {
        id: '900446476',
        name: 'Wadelsdorf, Schule',
    },
    {
        id: '900445722',
        name: 'Hornow, Ausbau',
    },
    {
        id: '900341205',
        name: 'Sternfelde',
    },
    {
        id: '900445182',
        name: 'Bloischdorf, Ortsmitte',
    },
    {
        id: '900445737',
        name: 'Jämlitz, Hermannmühle',
    },
    {
        id: '900445739',
        name: 'Jämlitz, Hütte',
    },
    {
        id: '900445787',
        name: 'Kathlow, Dorfstr.',
    },
    {
        id: '900445023',
        name: 'Simmersdorf, Bhf',
    },
    {
        id: '900445973',
        name: 'Lauschütz, Mühle',
    },
    {
        id: '900445972',
        name: 'Lauschütz, Dorf',
    },
    {
        id: '900445671',
        name: 'Haasow, Kreuzung',
    },
    {
        id: '900445828',
        name: 'Klein Döbbern, Schäferberg',
    },
    {
        id: '900445826',
        name: 'Klein Döbbern, B 97',
    },
    {
        id: '900446549',
        name: 'Zschorno, Wendeplatz',
    },
    {
        id: '900445181',
        name: 'Bloischdorf, Kolonie',
    },
    {
        id: '900446243',
        name: 'Schwarze Pumpe, Kinderheim',
    },
    {
        id: '900446251',
        name: 'Schwarze Pumpe, Schule',
    },
    {
        id: '900446241',
        name: 'Schwarze Pumpe, Franz-Mehring-Str.',
    },
    {
        id: '900340894',
        name: 'Herzsprung (UM), Mitte',
    },
    {
        id: '900446250',
        name: 'Schwarze Pumpe, Schäfereistr.',
    },
    {
        id: '900446246',
        name: 'Schwarze Pumpe, Märzschäfereiweg',
    },
    {
        id: '900445428',
        name: 'Friedrichshain, Bhf',
    },
    {
        id: '900446249',
        name: 'Schwarze Pumpe, Nord',
    },
    {
        id: '900446248',
        name: 'Schwarze Pumpe, Neues Kraftwerk',
    },
    {
        id: '900446242',
        name: 'Schwarze Pumpe, Gasthaus',
    },
    {
        id: '900446247',
        name: 'Schwarze Pumpe, Mitte',
    },
    {
        id: '900445430',
        name: 'Friedrichshain, Wendeschleife',
    },
    {
        id: '900445852',
        name: 'Klein Loitz, Dorfstr.',
    },
    {
        id: '900446157',
        name: 'Reuthen',
    },
    {
        id: '900445201',
        name: 'Bohsdorf, Wendeplatz',
    },
    {
        id: '900445199',
        name: 'Bohsdorf, Vorwerk Gasthaus',
    },
    {
        id: '900445200',
        name: 'Bohsdorf, Vorwerk Siedlung',
    },
    {
        id: '900445706',
        name: 'Horlitza, Dorf',
    },
    {
        id: '900445707',
        name: 'Horlitza, Grubenteiche',
    },
    {
        id: '900445708',
        name: 'Horlitza, Kreuzung Friedrichshain Groß Düben',
    },
    {
        id: '900445063',
        name: 'Gosda (bei Klinge), Mitte',
    },
    {
        id: '900445022',
        name: 'Simmersdorf, Siedlung',
    },
    {
        id: '900446321',
        name: 'Spremberg, Bachweg',
    },
    {
        id: '900446346',
        name: 'Spremberg, Muskauer Str.',
    },
    {
        id: '900446376',
        name: 'Spremberg, Kreuzchen',
    },
    {
        id: '900446377',
        name: 'Spremberg, Ringstr.',
    },
    {
        id: '900446342',
        name: 'Spremberg, Kochsdorf Erlengrund',
    },
    {
        id: '900446343',
        name: 'Spremberg, Kochsdorf Florian-Geyer-Weg',
    },
    {
        id: '900446348',
        name: 'Spremberg, Oberteschnitz',
    },
    {
        id: '900446355',
        name: 'Spremberg, Siedlung Stadtrand',
    },
    {
        id: '900446334',
        name: 'Spremberg, Goetheplatz',
    },
    {
        id: '900446347',
        name: 'Spremberg, Oberförsterei',
    },
    {
        id: '900446327',
        name: 'Spremberg, Cantdorf Gärtnerei',
    },
    {
        id: '900341313',
        name: 'Zützen (UM), Kellerberg',
    },
    {
        id: '900446367',
        name: 'Spremberg, Zedlitzstr.',
    },
    {
        id: '900445036',
        name: 'Spremberg, A.-Becker-Ring',
    },
    {
        id: '900446329',
        name: 'Spremberg, Cantdorf Siedlerweg',
    },
    {
        id: '900446328',
        name: 'Spremberg, Cantdorf Parma',
    },
    {
        id: '900446528',
        name: 'Spremberg, An der Zeidelweide',
    },
    {
        id: '900446324',
        name: 'Spremberg, Beethovenstr.',
    },
    {
        id: '900446370',
        name: 'Spremberg, Busbahnhof',
    },
    {
        id: '900445928',
        name: 'Krayne, Wendeplatz',
    },
    {
        id: '900446278',
        name: 'Sembten, Dorf',
    },
    {
        id: '900446182',
        name: 'Schieben, Ausbau',
    },
    {
        id: '900446183',
        name: 'Schieben, Dorf',
    },
    {
        id: '900445527',
        name: 'Groß Drewitz, Drewitz Gaststätte',
    },
    {
        id: '900445528',
        name: 'Groß Drewitz, Drewitz Park',
    },
    {
        id: '900445624',
        name: 'Guben, Klaus-Herrmann-Str.',
    },
    {
        id: '900446357',
        name: 'Spremberg, Sportplatz',
    },
    {
        id: '900446358',
        name: 'Spremberg, Stieglitzweg',
    },
    {
        id: '900446361',
        name: 'Spremberg, Trattendorf Kaufhalle',
    },
    {
        id: '900446320',
        name: 'Spremberg, Alma-Riedel-Str.',
    },
    {
        id: '900446341',
        name: 'Spremberg, Knappenweg',
    },
    {
        id: '900446363',
        name: 'Spremberg, Trattendorf Schule',
    },
    {
        id: '900446359',
        name: 'Spremberg, Trattendorf A.-Diesterweg-Ring',
    },
    {
        id: '900446529',
        name: 'Spremberg, H.-Löns-Weg',
    },
    {
        id: '900446333',
        name: 'Spremberg, Gärtnerei Baudach',
    },
    {
        id: '900449046',
        name: 'Spreetal, Wohnlager II',
    },
    {
        id: '900341314',
        name: 'Zützen (UM), Kirche',
    },
    {
        id: '900445028',
        name: 'Groß Kölzig, Mitte',
    },
    {
        id: '900445104',
        name: 'Groß Kölzig, Schule',
    },
    {
        id: '900445027',
        name: 'Groß Kölzig, Kegelbahn',
    },
    {
        id: '900445026',
        name: 'Groß Kölzig, Bhf',
    },
    {
        id: '900445103',
        name: 'Klein Kölzig, Dorf',
    },
    {
        id: '900445025',
        name: 'Klein Kölzig, Abzweig',
    },
    {
        id: '900445042',
        name: 'Jocksdorf, Abzweig Gahry',
    },
    {
        id: '900445095',
        name: 'Jocksdorf, Dorf',
    },
    {
        id: '900445089',
        name: 'Jocksdorf, Kreuzung',
    },
    {
        id: '900445049',
        name: 'Jerischke, Dorf',
    },
    {
        id: '900445048',
        name: 'Jerischke, Teichhäuser',
    },
    {
        id: '900340095',
        name: 'Felchow',
    },
    {
        id: '900445080',
        name: 'Dubrau, Dorf',
    },
    {
        id: '900445021',
        name: 'Dubrau, Berg',
    },
    {
        id: '900340098',
        name: 'Flemsdorf, Mitte',
    },
    {
        id: '900341026',
        name: 'Neuhof (UM), Abzweig',
    },
    {
        id: '900445046',
        name: 'Zelz-Bahren',
    },
    {
        id: '900445047',
        name: 'Zelz',
    },
    {
        id: '900446481',
        name: 'Welzow, Kulturhaus',
    },
    {
        id: '900445324',
        name: 'Döbern, Friedhof',
    },
    {
        id: '900445029',
        name: 'Döbern, Friedhofsweg',
    },
    {
        id: '900435351',
        name: 'Neupetershain, Neu Geisendorf',
    },
    {
        id: '900435352',
        name: 'Neupetershain, Nord Karl-Marx-Str.',
    },
    {
        id: '900445312',
        name: 'Döbern, Abzweig nach Preschen',
    },
    {
        id: '900446131',
        name: 'Proschim, Mühlenweg',
    },
    {
        id: '900340111',
        name: 'Angermünde, Schwedter Str.',
    },
    {
        id: '900445785',
        name: 'Karlsfeld',
    },
    {
        id: '000311584002',
        name: 'Sabrodt, Siebanlage',
    },
    {
        id: '900340092',
        name: 'Dobberzin, Mitte',
    },
    {
        id: '900445322',
        name: 'Döbern, Spremberger Str.',
    },
    {
        id: '900445097',
        name: 'Döbern, Groß Kölziger Weg',
    },
    {
        id: '900445317',
        name: 'Döbern, Dubrauker Str.',
    },
    {
        id: '900445325',
        name: 'Döbern, Mitte',
    },
    {
        id: '900445323',
        name: 'Döbern, Am Sportplatz',
    },
    {
        id: '900445316',
        name: 'Döbern, Deutsches Haus',
    },
    {
        id: '900445319',
        name: 'Döbern, Grube',
    },
    {
        id: '900445315',
        name: 'Döbern, Bhf',
    },
    {
        id: '900037152',
        name: 'Zweiwinkelweg',
    },
    {
        id: '900076151',
        name: 'Brockenstr.',
    },
    {
        id: '900082253',
        name: 'Wildmeisterdamm',
    },
    {
        id: '900064357',
        name: 'Geraer Str.',
    },
    {
        id: '900064309',
        name: 'Lange Str.',
    },
    {
        id: '900064356',
        name: 'Jägerstr.',
    },
    {
        id: '900067103',
        name: 'Am Elsenbruch',
    },
    {
        id: '900017151',
        name: 'Bergmannstr.',
    },
    {
        id: '900093253',
        name: 'Olafstr.',
    },
    {
        id: '900066151',
        name: 'Asternplatz',
    },
    {
        id: '900066105',
        name: 'Unter den Eichen/Botanischer Garten',
    },
    {
        id: '900066181',
        name: 'Braillestr.',
    },
    {
        id: '900340135',
        name: 'Angermünde, Bildungswerk',
    },
    {
        id: '900067101',
        name: 'Leonorenstr./Siemensstr.',
    },
    {
        id: '900093151',
        name: 'Dohnensteig',
    },
    {
        id: '900041101',
        name: 'U Fehrbelliner Platz',
    },
    {
        id: '900045151',
        name: 'Hanauer Str.',
    },
    {
        id: '900045152',
        name: 'Deidesheimer Str.',
    },
    {
        id: '900045153',
        name: 'Laubenheimer Str.',
    },
    {
        id: '900051351',
        name: 'Schorlemerallee',
    },
    {
        id: '900051354',
        name: 'Edwin-Redslob-Str.',
    },
    {
        id: '900051303',
        name: 'U Dahlem-Dorf',
    },
    {
        id: '900051206',
        name: 'Vogelsang',
    },
    {
        id: '900050281',
        name: 'Winfriedstr.',
    },
    {
        id: '900050251',
        name: 'Holländische Mühle',
    },
    {
        id: '900066104',
        name: 'Thielallee/Dahlemer Weg',
    },
    {
        id: '900341118',
        name: 'Schwedt, Breite Allee Abzweig',
    },
    {
        id: '900051309',
        name: 'Von-Laue-Str.',
    },
    {
        id: '900066106',
        name: 'Fabeckstr.',
    },
    {
        id: '900079151',
        name: 'Friedhöfe Columbiadamm',
    },
    {
        id: '900079152',
        name: 'Fontanestr./Flughafenstr.',
    },
    {
        id: '900078151',
        name: 'U Rathaus Neukölln/Alfred-Scholz-Platz',
    },
    {
        id: '900340119',
        name: 'Angermünde, Kaisergarten',
    },
    {
        id: '900049256',
        name: 'Knesebeckstr.',
    },
    {
        id: '900049206',
        name: 'Jänickestr.',
    },
    {
        id: '900049257',
        name: 'Mürwiker Str.',
    },
    {
        id: '900066203',
        name: 'Pinnauweg',
    },
    {
        id: '900050254',
        name: 'Leichhardtstr.',
    },
    {
        id: '900074271',
        name: 'Illigstr./Maffeistr.',
    },
    {
        id: '900068102',
        name: 'Dudenstr./Katzbachstr.',
    },
    {
        id: '900058157',
        name: 'Kolonnenbrücke',
    },
    {
        id: '900027364',
        name: 'Beerwinkel',
    },
    {
        id: '900051253',
        name: 'Drosselweg',
    },
    {
        id: '900079101',
        name: 'Sommerbad Neukölln',
    },
    {
        id: '900044101',
        name: 'S Hohenzollerndamm',
    },
    {
        id: '900045102',
        name: 'S+U Heidelberger Platz',
    },
    {
        id: '900068154',
        name: 'Monumentenstr.',
    },
    {
        id: '900027451',
        name: 'Spekteweg',
    },
    {
        id: '900029104',
        name: 'Borkzeile',
    },
    {
        id: '900053151',
        name: 'Friedenstr.',
    },
    {
        id: '900051281',
        name: 'Dillenburger Str.',
    },
    {
        id: '900050202',
        name: 'Onkel-Tom-Str.',
    },
    {
        id: '900050206',
        name: 'Altkanzlerstr.',
    },
    {
        id: '900052302',
        name: 'Lissabonallee',
    },
    {
        id: '900052101',
        name: 'Wannseebadweg',
    },
    {
        id: '900052203',
        name: 'An der Rehwiese',
    },
    {
        id: '900052253',
        name: 'Lückhoffstr.',
    },
    {
        id: '900052303',
        name: 'Schopenhauerstr.',
    },
    {
        id: '900052355',
        name: 'Krankenhaus Hubertus',
    },
    {
        id: '900050302',
        name: 'Potsdamer Chaussee/Lindenthaler Allee',
    },
    {
        id: '900053258',
        name: 'Pfaueninselchaussee/Königstr.',
    },
    {
        id: '900050253',
        name: 'Kleinaustr.',
    },
    {
        id: '900053257',
        name: 'Wernerstr.',
    },
    {
        id: '900053259',
        name: 'Charlottenstr./Chausseestr.',
    },
    {
        id: '900096363',
        name: 'Königshorster Str.',
    },
    {
        id: '900051256',
        name: 'Hüttenweg',
    },
    {
        id: '900024108',
        name: 'Kaiser-Friedrich-Str./Kantstr.',
    },
    {
        id: '900445078',
        name: 'Simmersdorf, Dorf',
    },
    {
        id: '900205536',
        name: 'Lohm, Ausbau',
    },
    {
        id: '900415195',
        name: 'Finsterwalde, Rue de Montataire',
    },
    {
        id: '900415568',
        name: 'Freileben, Sportplatz',
    },
    {
        id: '900415048',
        name: 'Pießig',
    },
    {
        id: '900415045',
        name: 'Finsterwalde, Schwimmstadion',
    },
    {
        id: '900203958',
        name: 'Falkenthal, Wendestelle',
    },
    {
        id: '900245844',
        name: 'Ludwigsfelde, Ludwigsdorf',
    },
    {
        id: '900260510',
        name: 'Schönefeld (bei Berlin), Waltersdorfer Chaussee',
    },
    {
        id: '900341056',
        name: 'Schmargendorf, Mitte',
    },
    {
        id: '900320559',
        name: 'Strausberg, Bundeswehr',
    },
    {
        id: '900245716',
        name: 'Jüterbog, Wursthof',
    },
    {
        id: '900222106',
        name: 'Klein Glien',
    },
    {
        id: '900415304',
        name: 'Schraden, Kaupen',
    },
    {
        id: '900415326',
        name: 'Körba, Am See',
    },
    {
        id: '900415683',
        name: 'Herzberg (Elster), Bhf',
    },
    {
        id: '900310557',
        name: 'Erkner, Löcknitz Anlegestelle',
    },
    {
        id: '900245742',
        name: 'Ludwigsfelde, Str. der Jugend',
    },
    {
        id: '900245725',
        name: 'Rangsdorf, Dorfanger',
    },
    {
        id: '900245718',
        name: 'Rangsdorf, Kirche',
    },
    {
        id: '900445231',
        name: 'Briesen (SPN), Nord',
    },
    {
        id: '900340190',
        name: 'Görlsdorf (UM), Bahnübergang',
    },
    {
        id: '900416116',
        name: 'Schlieben, Feuerwehr',
    },
    {
        id: '900050203',
        name: 'Scharfestr.',
    },
    {
        id: '900200123',
        name: 'Flatow, Str. des Friedens',
    },
    {
        id: '900222071',
        name: 'Bad Belzig, Lübnitzer Str./Puschkinstr.',
    },
    {
        id: '900222038',
        name: 'Bad Belzig, Ernst-Thälmann-Str.',
    },
    {
        id: '900220454',
        name: 'Wusterwitz, Grundschule',
    },
    {
        id: '900220348',
        name: 'Bad Belzig, Landratsamt',
    },
    {
        id: '900445068',
        name: 'Groß Schacksdorf, Mühlberg',
    },
    {
        id: '900445069',
        name: 'Groß Schacksdorf, Gasthaus',
    },
    {
        id: '900445066',
        name: 'Groß Schacksdorf, Ost',
    },
    {
        id: '900445065',
        name: 'Groß Schacksdorf, Brücke',
    },
    {
        id: '900445120',
        name: 'Groß Schacksdorf, Schule',
    },
    {
        id: '900205030',
        name: 'Kyritz, Maxim-Gorki-Str.',
    },
    {
        id: '900340933',
        name: 'Kerkow, Greiffenberger Str.',
    },
    {
        id: '900311239',
        name: 'Bremsdorf, Landweg',
    },
    {
        id: '900210699',
        name: 'Dallgow-Döberitz, Kleiststr.',
    },
    {
        id: '900210663',
        name: 'Dallgow-Döberitz, Dallgower Tor',
    },
    {
        id: '900210637',
        name: 'Dallgow-Döberitz, Finkenkruger Str.',
    },
    {
        id: '900222089',
        name: 'Gräben, Abzweig Dahlen',
    },
    {
        id: '900245715',
        name: 'Blankenfelde, Heidestr.',
    },
    {
        id: '900222186',
        name: 'Golzow (PM), Brandenburger Str.',
    },
    {
        id: '900245727',
        name: 'Rangsdorf, Friedensallee',
    },
    {
        id: '900245731',
        name: 'Rangsdorf, Seebadallee',
    },
    {
        id: '900340152',
        name: 'Angermünde, E.-Kamieth-Str.',
    },
    {
        id: '900340124',
        name: 'Angermünde, Pestalozzistr.',
    },
    {
        id: '900049207',
        name: 'Stubenrauchstr.',
    },
    {
        id: '900049271',
        name: 'Zehlendorf Eiche',
    },
    {
        id: '900340114',
        name: 'Angermünde, G.-Wolff-Str.',
    },
    {
        id: '900051255',
        name: 'Alliiertenmuseum',
    },
    {
        id: '900340131',
        name: 'Angermünde, Am Sportplatz',
    },
    {
        id: '900341130',
        name: 'Schwedt, Handelsstr.',
    },
    {
        id: '900065103',
        name: 'Wupperstr.',
    },
    {
        id: '900066204',
        name: 'Darser Str.',
    },
    {
        id: '900049301',
        name: 'Beeskowdamm',
    },
    {
        id: '900049305',
        name: 'Leo-Baeck-Str.',
    },
    {
        id: '900049354',
        name: 'Laehrstr.',
    },
    {
        id: '900049303',
        name: 'Am Birkenknick',
    },
    {
        id: '900049356',
        name: 'Am Rehwechsel',
    },
    {
        id: '900066251',
        name: 'Billy-Wilder-Promenade',
    },
    {
        id: '900065151',
        name: 'Alsterweg',
    },
    {
        id: '900002101',
        name: 'Turmstr./Waldstr.',
    },
    {
        id: '900340100',
        name: 'Angermünde, Am Markt',
    },
    {
        id: '900024102',
        name: 'S Westkreuz',
    },
    {
        id: '900341263',
        name: 'Welsow, Bruchhagener Str.',
    },
    {
        id: '900341057',
        name: 'Schmargendorf, Siedlung',
    },
    {
        id: '900026202',
        name: 'U Kaiserdamm',
    },
    {
        id: '900321098',
        name: 'Herzhorn, Abzweig',
    },
    {
        id: '900321153',
        name: 'Schulzendorf (MOL), Abzweig',
    },
    {
        id: '900261044',
        name: 'Zeuthen, Miersdorfer Chaussee',
    },
    {
        id: '900245698',
        name: 'Mahlow, Glasower Damm',
    },
    {
        id: '900341194',
        name: 'Steinhöfel (UM), Neubau',
    },
    {
        id: '900205590',
        name: 'Ziethensaue',
    },
    {
        id: '900340140',
        name: 'Angermünde, Herwegh Str.',
    },
    {
        id: '900275853',
        name: 'Brandenburg, Plaue Roberdam',
    },
    {
        id: '900205704',
        name: 'Wall, Gaststätte',
    },
    {
        id: '900205701',
        name: 'Wall, Wendeplatz',
    },
    {
        id: '900210911',
        name: 'Brieselang, Nauener Chaussee',
    },
    {
        id: '900445636',
        name: 'Guben, Sparkasse Spree-Neiße',
    },
    {
        id: '900445212',
        name: 'Bresinchen',
    },
    {
        id: '900445635',
        name: 'Guben, Schwimmhalle',
    },
    {
        id: '900435022',
        name: 'Schipkau, Amtssitz',
    },
    {
        id: '900435020',
        name: 'Klettwitz, Siedlung',
    },
    {
        id: '900435019',
        name: 'Klettwitz, Krankenhaus',
    },
    {
        id: '900435018',
        name: 'Annahütte, Dorfplatz/Särchen',
    },
    {
        id: '900340191',
        name: 'Görlsdorf (UM), Chausseehaus',
    },
    {
        id: '900435017',
        name: 'Senftenberg, Theaterpassage',
    },
    {
        id: '900425140',
        name: 'Fichtenberg, Abzweig Altenau',
    },
    {
        id: '900420227',
        name: 'Herzberg (Elster), Kaufland',
    },
    {
        id: '900340936',
        name: 'Kerkow, Mitte',
    },
    {
        id: '900435023',
        name: 'Senftenberg, Altstadt',
    },
    {
        id: '900435032',
        name: 'Annahütte, Siedlung',
    },
    {
        id: '900340045',
        name: 'Bruchhagen, Mitte',
    },
    {
        id: '900435038',
        name: 'Hörlitz, Apotheke',
    },
    {
        id: '900435034',
        name: 'Klettwitz, Markt',
    },
    {
        id: '900435033',
        name: 'Schipkau, Heizhaus',
    },
    {
        id: '900435031',
        name: 'Annahütte, Sallgaster Str.',
    },
    {
        id: '900435028',
        name: 'Schipkau, F.-Engels-Str.',
    },
    {
        id: '900435025',
        name: 'Senftenberg, Wilhelm-Pieck-Str.',
    },
    {
        id: '900416229',
        name: 'Wahrenbrück, Kleiner Spreewald',
    },
    {
        id: '900340128',
        name: 'Angermünde, Rosenstr.',
    },
    {
        id: '900416250',
        name: 'Wiepersdorf (EE), Gasthaus',
    },
    {
        id: '900416248',
        name: 'Werenzhain, Kindergarten',
    },
    {
        id: '900416247',
        name: 'Werenzhain, Sportplatz',
    },
    {
        id: '900416243',
        name: 'Wiederau, B 101',
    },
    {
        id: '900416241',
        name: 'Wehrhain, Waage',
    },
    {
        id: '900416240',
        name: 'Wehrhain, B 87',
    },
    {
        id: '900340887',
        name: 'Herrenhof (UM), Abzweig',
    },
    {
        id: '900416232',
        name: 'Wainsdorf, Kreuzung',
    },
    {
        id: '900416231',
        name: 'Wainsdorf, Gasthaus',
    },
    {
        id: '900340024',
        name: 'Biesenbrow, Schäfereiweg',
    },
    {
        id: '900416230',
        name: 'Wahrenbrück, Schule',
    },
    {
        id: '900416251',
        name: 'Wildenau, Kirche',
    },
    {
        id: '900416252',
        name: 'Dubro, Themesstr.',
    },
    {
        id: '900416277',
        name: 'Zobersdorf, Gasthof',
    },
    {
        id: '140094190671',
        name: 'Holzdorf, Fliegerhorst',
    },
    {
        id: '140094190351',
        name: 'Gröditz, Busbahnhof',
    },
    {
        id: '900416278',
        name: 'Zobersdorf, Dorfanger',
    },
    {
        id: '900416275',
        name: 'Zinsdorf',
    },
    {
        id: '900416258',
        name: 'Wildgrube, Gasthaus',
    },
    {
        id: '900416261',
        name: 'Winkel, Hauptstr. (B 101)',
    },
    {
        id: '900416260',
        name: 'Winkel, Feuerwache',
    },
    {
        id: '900416259',
        name: 'Wildgrube, Schildaer Str.',
    },
    {
        id: '900435133',
        name: 'Großkmehlen',
    },
    {
        id: '900435136',
        name: 'Lauchhammer West, Berliner Str.',
    },
    {
        id: '900205475',
        name: 'Neuruppin, H.-Rau-Str.',
    },
    {
        id: '900340860',
        name: 'Günterberg, Kreuzung',
    },
    {
        id: '900261505',
        name: 'Lübben, Cottbuser Str.',
    },
    {
        id: '900340833',
        name: 'Greiffenberg, Mitte',
    },
    {
        id: '900275819',
        name: 'Brandenburg, Plaue Gartenstadt',
    },
    {
        id: '900275613',
        name: 'Brandenburg, Buhnenhaus',
    },
    {
        id: '900230200',
        name: 'Potsdam, Campus Jungfernsee',
    },
    {
        id: '900205516',
        name: 'Protzen, Stöffiner Str.',
    },
    {
        id: '900340836',
        name: 'Greiffenberg, Zolldamm',
    },
    {
        id: '900205534',
        name: 'Neuruppin, Ruppiner Kliniken',
    },
    {
        id: '900205612',
        name: 'Wittstock (Dosse), Birkenweg',
    },
    {
        id: '900205019',
        name: 'Neuruppin, Stadtwerke',
    },
    {
        id: '900245650',
        name: 'Mahlow, Teltower Str.',
    },
    {
        id: '900261006',
        name: 'Zeesen, Gewerbepark Süd',
    },
    {
        id: '900261005',
        name: 'Zeesen, Gewerbepark Nord',
    },
    {
        id: '900245836',
        name: 'Ludwigsfelde, Struveshof',
    },
    {
        id: '900205305',
        name: 'Gartow, Kreuzung',
    },
    {
        id: '900203818',
        name: 'Mildenberg, Heim',
    },
    {
        id: '900203822',
        name: 'Häsen, Kastanienallee',
    },
    {
        id: '900210050',
        name: 'Buschow, Bhf',
    },
    {
        id: '900205380',
        name: 'Kuhlmühle',
    },
    {
        id: '900445903',
        name: 'Kolkwitz, Altes Forsthaus',
    },
    {
        id: '900350471',
        name: 'Groß Schönebeck, Schlufter Str.',
    },
    {
        id: '900435190',
        name: 'Kleinleipisch, Kindergarten',
    },
    {
        id: '900435346',
        name: 'Schipkau, Klettwitzer Str.',
    },
    {
        id: '900435318',
        name: 'Kleinleipisch, Schule',
    },
    {
        id: '900435295',
        name: 'Senftenberg, Str. des Bergmanns',
    },
    {
        id: '900435229',
        name: 'Lauchhammer Mitte, D.-Heßmer-Platz',
    },
    {
        id: '900435188',
        name: 'Kleinleipisch, Siedlung',
    },
    {
        id: '900340044',
        name: 'Bruchhagen, Abzweig',
    },
    {
        id: '900435187',
        name: 'Lauchhammer Mitte, Weinbergstr.',
    },
    {
        id: '900435184',
        name: 'Grünewalde, Lauchhammer Str.',
    },
    {
        id: '900435183',
        name: 'Grünewalde, Waldesruh',
    },
    {
        id: '900435146',
        name: 'Lauchhammer Mitte, Heinrich-Zille-Str.',
    },
    {
        id: '900435142',
        name: 'Hörlitz, Schipkauer Str.',
    },
    {
        id: '900435392',
        name: 'Hörlitz, Kindergarten',
    },
    {
        id: '900435574',
        name: 'Groß Mehßow, Siedlung',
    },
    {
        id: '900245054',
        name: 'Jüterbog, Bülowstr.',
    },
    {
        id: '900435820',
        name: 'Schrakau',
    },
    {
        id: '900435705',
        name: 'Radensdorf (bei Calau)',
    },
    {
        id: '900435573',
        name: 'Groß Mehßow, Ortsmitte',
    },
    {
        id: '900435480',
        name: 'Hörlitz, Klubhaus',
    },
    {
        id: '900435441',
        name: 'Ortrand, Schule',
    },
    {
        id: '900435406',
        name: 'Senftenberg, Klettwitzer Str.',
    },
    {
        id: '900416228',
        name: 'Wahrenbrück, Friedensstr.',
    },
    {
        id: '900446195',
        name: 'Schlagsdorf (SPN), Kiesgrube',
    },
    {
        id: '900415875',
        name: 'Lönnewitz',
    },
    {
        id: '900340946',
        name: 'Kunow (UM), Mitte',
    },
    {
        id: '900415930',
        name: 'Merzdorf (EE), Gasthaus',
    },
    {
        id: '900415929',
        name: 'Massen, Am Industriepark',
    },
    {
        id: '900340945',
        name: 'Kunow (UM), Ausbau',
    },
    {
        id: '900415917',
        name: 'Marxdorf, Liebenwerdaer Str.',
    },
    {
        id: '900415916',
        name: 'Marxdorf, Beiersdorfer Str.',
    },
    {
        id: '900341286',
        name: 'Woltersdorf (UM), Mitte',
    },
    {
        id: '900340966',
        name: 'Meyenburg (UM), Mitte',
    },
    {
        id: '900340018',
        name: 'Berkholz (bei Schwedt), Mitte',
    },
    {
        id: '900415886',
        name: 'Maasdorf, Natoureum',
    },
    {
        id: '900415931',
        name: 'Merzdorf (EE), Hauptstr.',
    },
    {
        id: '900415943',
        name: 'Möglenz, Kirche',
    },
    {
        id: '900415953',
        name: 'Mühlberg (Elbe), Busbahnhof',
    },
    {
        id: '900415981',
        name: 'Neudeck',
    },
    {
        id: '900416010',
        name: 'Plessa, Kraftwerk',
    },
    {
        id: '900416007',
        name: 'Plessa Süd',
    },
    {
        id: '900416000',
        name: 'Oschätzchen',
    },
    {
        id: '900415982',
        name: 'Neunaundorf',
    },
    {
        id: '900415973',
        name: 'Neuburxdorf',
    },
    {
        id: '900415971',
        name: 'Naundorf (bei Fichtwald), Gasthaus',
    },
    {
        id: '900415969',
        name: 'Naundorf (bei Fichtwald), B 87',
    },
    {
        id: '900415958',
        name: 'München (EE), Elsterbrücke',
    },
    {
        id: '900340898',
        name: 'Hohenfelde',
    },
    {
        id: '900415783',
        name: 'Kauxdorf, Saxdorfer Str.',
    },
    {
        id: '900415782',
        name: 'Kirchhain, Baumschulenweg',
    },
    {
        id: '900415780',
        name: 'Kauxdorf, Hauptstr.',
    },
    {
        id: '900415770',
        name: 'Kahla, Kirche',
    },
    {
        id: '900415761',
        name: 'Jeßnigk, Feuerwehr',
    },
    {
        id: '900415760',
        name: 'Jeßnigk, Am Spielplatz',
    },
    {
        id: '900415750',
        name: 'Jagsal',
    },
    {
        id: '900415790',
        name: 'Kleinrössen',
    },
    {
        id: '900415837',
        name: 'Koßdorf, Markt',
    },
    {
        id: '900415851',
        name: 'Kraupa, Saathainer Str.',
    },
    {
        id: '900415850',
        name: 'Kraupa, Gemeindeverwaltung',
    },
    {
        id: '900415849',
        name: 'Kraupa, Friedhof',
    },
    {
        id: '900340875',
        name: 'Heinersdorf (UM), MVL',
    },
    {
        id: '900340876',
        name: 'Heinersdorf (UM), Oberdorf',
    },
    {
        id: '900415835',
        name: 'Koßdorf, Höheweg',
    },
    {
        id: '900341227',
        name: 'Tantow, Schule',
    },
    {
        id: '900415823',
        name: 'Kölsa, Siedlung',
    },
    {
        id: '900415808',
        name: 'Kolochau, B 87',
    },
    {
        id: '900416011',
        name: 'Plessa, Amtsverwaltung',
    },
    {
        id: '900416012',
        name: 'Plessa, Ziegelei',
    },
    {
        id: '900416022',
        name: 'Polzen, Abzweig B 87',
    },
    {
        id: '900416176',
        name: 'Stolzenhain a.d.Röder, Kirche',
    },
    {
        id: '900416167',
        name: 'Stechau, Feuerwehr',
    },
    {
        id: '900416143',
        name: 'Schönewalde (bei Herzberg), Schule',
    },
    {
        id: '900416141',
        name: 'Schönewalde (bei Herzberg), Markt',
    },
    {
        id: '900416140',
        name: 'Schönewalde (bei Herzberg), Kreuzung',
    },
    {
        id: '900416123',
        name: 'Schmerkendorf, Kirche',
    },
    {
        id: '900341123',
        name: 'Schwedt, Friedhof',
    },
    {
        id: '900416122',
        name: 'Schlieben, Steigemühle',
    },
    {
        id: '900416121',
        name: 'Schlieben, Schule',
    },
    {
        id: '900341241',
        name: 'Vierraden, Lindenhof',
    },
    {
        id: '900416119',
        name: 'Schlieben, Berga Krassiger Str.',
    },
    {
        id: '900416181',
        name: 'Striesa, Dorfstr.',
    },
    {
        id: '900416214',
        name: 'Uebigau, Markt',
    },
    {
        id: '900416227',
        name: 'Wahrenbrück, Bhf',
    },
    {
        id: '900416218',
        name: 'Uebigau, Torgauer Str.',
    },
    {
        id: '900416217',
        name: 'Uebigau, Schule',
    },
    {
        id: '900416216',
        name: 'Uebigau, Doberluger Str.',
    },
    {
        id: '900341007',
        name: 'Passow, Bhf',
    },
    {
        id: '900416204',
        name: 'Trebbus, Mühle',
    },
    {
        id: '900341244',
        name: 'Vierraden, Mitte',
    },
    {
        id: '900416114',
        name: 'Schlieben, Abzweig Weißenburg',
    },
    {
        id: '900416042',
        name: 'Prestewitz, Siedlung',
    },
    {
        id: '900416054',
        name: 'Prösen, Markt',
    },
    {
        id: '900416043',
        name: 'Prieschka, Feuerwehr',
    },
    {
        id: '900416041',
        name: 'Prestewitz, Gasthaus',
    },
    {
        id: '900340035',
        name: 'Blumenhagen (UM), Mitte',
    },
    {
        id: '900416034',
        name: 'Ponnsdorf, Dorfplatz',
    },
    {
        id: '900416025',
        name: 'Polzen, Dorfplatz',
    },
    {
        id: '900416024',
        name: 'Polzen, Bahnhofstr.',
    },
    {
        id: '900416055',
        name: 'Prösen, Siedlung',
    },
    {
        id: '900416058',
        name: 'Proßmarke, Gasthaus',
    },
    {
        id: '900416108',
        name: 'Elsterwerda, Uferstr.',
    },
    {
        id: '900416095',
        name: 'Rückersdorf, Schule',
    },
    {
        id: '900416106',
        name: 'Elsterwerda, Ludwig-Jahn-Str.',
    },
    {
        id: '900416104',
        name: 'Saxdorf, Gasthaus',
    },
    {
        id: '900416103',
        name: 'Saxdorf, Bahnübergang',
    },
    {
        id: '900341235',
        name: 'Vierraden, Schwedenweg',
    },
    {
        id: '900416096',
        name: 'Saathain',
    },
    {
        id: '900341243',
        name: 'Vierraden, Milchviehanlage',
    },
    {
        id: '900416076',
        name: 'Reichenhain, Dorfstr.',
    },
    {
        id: '900340177',
        name: 'Gatow, Mitte',
    },
    {
        id: '900416087',
        name: 'Rothstein, Hauptstr.',
    },
    {
        id: '900416085',
        name: 'Reißdamm',
    },
    {
        id: '900416077',
        name: 'Reichenhain, Maiblumengehege',
    },
    {
        id: '900260055',
        name: 'Miersdorf, Hankelweg',
    },
    {
        id: '900350320',
        name: 'Chorin, Choriner Dorfstr.',
    },
    {
        id: '900350841',
        name: 'Werneuchen, Stienitzaue',
    },
    {
        id: '900445060',
        name: 'Forst, Alexanderstr.',
    },
    {
        id: '900445110',
        name: 'Forst, Noßdorf Friedhof',
    },
    {
        id: '900445102',
        name: 'Forst, Noßdorf Turnhalle',
    },
    {
        id: '900341069',
        name: 'Schöneberg, Kirche',
    },
    {
        id: '900445012',
        name: 'Forst, Rennbahn',
    },
    {
        id: '900445108',
        name: 'Forst, Dicke Eiche',
    },
    {
        id: '900445107',
        name: 'Forst, Weinbergstr.',
    },
    {
        id: '900445011',
        name: 'Forst, Platz des Friedens',
    },
    {
        id: '900445113',
        name: 'Forst, Neu Sacro',
    },
    {
        id: '900445059',
        name: 'Forst, Umgehungsstr.',
    },
    {
        id: '900445058',
        name: 'Forst, Sparkasse',
    },
    {
        id: '900445034',
        name: 'Forst, Keune Ausbau',
    },
    {
        id: '900449941',
        name: 'Forst, R.-Wagner-Str.',
    },
    {
        id: '900445082',
        name: 'Forst, Döberner Str.',
    },
    {
        id: '900340903',
        name: 'Hohenlandin, Mitte',
    },
    {
        id: '900445004',
        name: 'Forst, Gesamtschule',
    },
    {
        id: '900445079',
        name: 'Forst, Otto-Nagel-Str.',
    },
    {
        id: '900445070',
        name: 'Forst, Domsdorf',
    },
    {
        id: '900445071',
        name: 'Forst, Hederichweg',
    },
    {
        id: '900445075',
        name: 'Forst, Sacro Wendeplatz',
    },
    {
        id: '900350867',
        name: 'Lobetal, Am Sportplatz',
    },
    {
        id: '900445030',
        name: 'Forst, Wehrinselstr.',
    },
    {
        id: '900445043',
        name: 'Forst, OSZ/Kreisverwaltung',
    },
    {
        id: '900341070',
        name: 'Schöneberg, Ost',
    },
    {
        id: '900445018',
        name: 'Forst, Kompetenzzentrum',
    },
    {
        id: '900445073',
        name: 'Forst, Krankenhaus',
    },
    {
        id: '900445003',
        name: 'Forst, Elsässerstr.',
    },
    {
        id: '900445106',
        name: 'Forst, Hermannstr.',
    },
    {
        id: '900340002',
        name: 'Alt-Galow',
    },
    {
        id: '900445168',
        name: 'Bärenbrück',
    },
    {
        id: '900275308',
        name: 'Brandenburg, Betriebshof Ausfahrt',
    },
    {
        id: '900445008',
        name: 'Forst, Mühlenstr.',
    },
    {
        id: '900445000',
        name: 'Forst, Am Markt',
    },
    {
        id: '900445098',
        name: 'Forst, Skurumer Str.',
    },
    {
        id: '900445033',
        name: 'Forst, Keune Wendeplatz',
    },
    {
        id: '900445111',
        name: 'Forst, Dornbuschweg',
    },
    {
        id: '900445015',
        name: 'Forst, Weißagker Weg',
    },
    {
        id: '900449908',
        name: 'Forst, Rosengarten Wendeplatz',
    },
    {
        id: '900445007',
        name: 'Forst, Max-Mattig-Weg',
    },
    {
        id: '900445002',
        name: 'Forst, C.-A.-Groeschke-Str.',
    },
    {
        id: '900445039',
        name: 'Naundorf (bei Forst), Gasthaus',
    },
    {
        id: '900446047',
        name: 'Mulknitz',
    },
    {
        id: '900445641',
        name: 'Guben, Wilkestift',
    },
    {
        id: '900445620',
        name: 'Guben, Kaltenborner Str.',
    },
    {
        id: '900445604',
        name: 'Guben, Friedensstr.',
    },
    {
        id: '900445625',
        name: 'Guben, Krähenbusch',
    },
    {
        id: '900445639',
        name: 'Guben, Tulpenweg',
    },
    {
        id: '900341023',
        name: 'Pinnow (bei Angermünde), Amt',
    },
    {
        id: '900445619',
        name: 'Guben, Kaltenborn',
    },
    {
        id: '900445642',
        name: 'Guben, Schillerstr.',
    },
    {
        id: '900445623',
        name: 'Guben, Karl-Gander-Str. I',
    },
    {
        id: '900445589',
        name: 'Guben, Rübelandweg',
    },
    {
        id: '900445615',
        name: 'Guben, Gubiner Str.',
    },
    {
        id: '900445601',
        name: 'Guben, Flemmingstr.',
    },
    {
        id: '900446194',
        name: 'Schlagsdorf (SPN), Dorf',
    },
    {
        id: '900445293',
        name: 'Deulowitz, Dorf',
    },
    {
        id: '900445291',
        name: 'Deulowitz, Abzweig',
    },
    {
        id: '900445602',
        name: 'Guben, Frankfurter Str.',
    },
    {
        id: '900445599',
        name: 'Guben, Erich-Weinert-Str.',
    },
    {
        id: '900445606',
        name: 'Guben, Gerhart-Hauptmann-Str.',
    },
    {
        id: '900445628',
        name: 'Guben, L.-Frank-Str./Realschule',
    },
    {
        id: '900445607',
        name: 'Guben, Goethestr.',
    },
    {
        id: '900445590',
        name: 'Guben, Altsprucke',
    },
    {
        id: '900445037',
        name: 'Klein Bademeusel',
    },
    {
        id: '900445596',
        name: 'Guben, Berliner Str.',
    },
    {
        id: '900341003',
        name: 'Niederlandin, Mitte',
    },
    {
        id: '900445600',
        name: 'Guben, Flemmingplatz',
    },
    {
        id: '900445515',
        name: 'Groß Bademeusel',
    },
    {
        id: '900445020',
        name: 'Groß Jamno, Gasthaus',
    },
    {
        id: '900445605',
        name: 'Guben, Gasstr.',
    },
    {
        id: '900341028',
        name: 'Pinnow (bei Angermünde), TGZ',
    },
    {
        id: '900445637',
        name: 'Guben, Sprucker Str.',
    },
    {
        id: '900445597',
        name: 'Guben, Neiße-Center',
    },
    {
        id: '900445611',
        name: 'Guben, Groß Breesen Wendestelle',
    },
    {
        id: '900445631',
        name: 'Guben, Pestalozzistr.',
    },
    {
        id: '900445598',
        name: 'Guben, Dubrauweg',
    },
    {
        id: '900445632',
        name: 'Guben, Platz des Gedenkens',
    },
    {
        id: '900445621',
        name: 'Guben, Karl-Marx-Str.',
    },
    {
        id: '900350267',
        name: 'Bernau, Karl-Liebknecht-Str.',
    },
    {
        id: '900350276',
        name: 'Bernau, Wilhelm-Weitling-Str.',
    },
    {
        id: '900350631',
        name: 'Oderberg, Museum',
    },
    {
        id: '900222160',
        name: 'Raben',
    },
    {
        id: '900340014',
        name: 'Golm (UM), Dorfstr.',
    },
    {
        id: '900341203',
        name: 'Stendell, Kavelheide',
    },
    {
        id: '900341201',
        name: 'Stendell, Kreuzung',
    },
    {
        id: '900341009',
        name: 'Passow, Mitte',
    },
    {
        id: '900341008',
        name: 'Passow, Briester Weg',
    },
    {
        id: '900340041',
        name: 'Briest (UM), Milchviehanlage',
    },
    {
        id: '900340042',
        name: 'Briest (UM), Mitte',
    },
    {
        id: '900340187',
        name: 'Golm (UM), Mitte',
    },
    {
        id: '900341150',
        name: 'Schwedt, PCK Busbahnhof',
    },
    {
        id: '900341104',
        name: 'Schwedt, Am Wasserplatz',
    },
    {
        id: '900222102',
        name: 'Jeserig (bei Wiesenburg), Ortsmitte',
    },
    {
        id: '900171533',
        name: 'Schlosspark Biesdorf',
    },
    {
        id: '900205579',
        name: 'Segeletz, Plan',
    },
    {
        id: '900341112',
        name: 'Schwedt, Berkholzer Allee',
    },
    {
        id: '900340081',
        name: 'Crussow, Gellmersdorfer Str.',
    },
    {
        id: '900341143',
        name: 'Schwedt, Leverkusener Str.',
    },
    {
        id: '900340102',
        name: 'Felchow, Schöneberger Weg',
    },
    {
        id: '900341169',
        name: 'Schwedt, CKS',
    },
    {
        id: '900340763',
        name: 'Fredersdorf (UM), Mitte',
    },
    {
        id: '900415191',
        name: 'Finsterwalde, O.-Lilienthal-Str.',
    },
    {
        id: '900210030',
        name: 'Bredow, Kuhdamm',
    },
    {
        id: '900415426',
        name: 'Domsdorf (EE), Brikettfabrik Louise',
    },
    {
        id: '900445372',
        name: 'Drebkau, Kita',
    },
    {
        id: '900210357',
        name: 'Schmetzdorf (HVL), Kleine Bergstr.',
    },
    {
        id: '900100543',
        name: 'Behrenstr./Wilhelmstr.',
    },
    {
        id: '900245303',
        name: 'Zellendorf, Bhf',
    },
    {
        id: '8012304',
        name: 'Markkleeberg, Nord',
    },
    {
        id: '900341298',
        name: 'Zichow, Mitte',
    },
    {
        id: '900220199',
        name: 'Pritzerbe, Dammstr.',
    },
    {
        id: '900057155',
        name: 'Katzbachstr.',
    },
    {
        id: '900210019',
        name: 'Nennhausen, Schule',
    },
    {
        id: '900260514',
        name: 'Waltersdorf (bei Berlin), Weidenweg',
    },
    {
        id: '900340460',
        name: 'Meichow',
    },
    {
        id: '900260626',
        name: 'Blossin, Dorf',
    },
    {
        id: '900321159',
        name: 'Sternebeck, Bhf',
    },
    {
        id: '900341004',
        name: 'Hohenlandin, Kastanienallee',
    },
    {
        id: '900210662',
        name: 'Dallgow-Döberitz, Sperlingshof',
    },
    {
        id: '900210690',
        name: 'Elstal, Zum Erlebnis-Dorf',
    },
    {
        id: '900210031',
        name: 'Nauen, Hertefelder Str.',
    },
    {
        id: '900230139',
        name: 'Potsdam, Kreuzstr.',
    },
    {
        id: '900222147',
        name: 'Niemegk, Markt',
    },
    {
        id: '900220356',
        name: 'Vogelgesang',
    },
    {
        id: '900183007',
        name: 'S Rahnsdorf',
    },
    {
        id: '900340078',
        name: 'Crussow, Neubau',
    },
    {
        id: '900220755',
        name: 'Michendorf, Saarmunder Str.',
    },
    {
        id: '900120026',
        name: 'Oberbaumbrücke',
    },
    {
        id: '900245714',
        name: 'Rangsdorf, Am Stadtweg',
    },
    {
        id: '900245342',
        name: 'Rangsdorf, Kienitzer Str.',
    },
    {
        id: '900320010',
        name: 'S Strausberg [Tram]',
    },
    {
        id: '900182501',
        name: 'Westendsiedlung',
    },
    {
        id: '900245338',
        name: 'Wahlsdorf, Lieper Str.',
    },
    {
        id: '900340077',
        name: 'Crussow, Mitte',
    },
    {
        id: '900230096',
        name: 'Potsdam, Rotdornweg/Stahnsdorfer Str.',
    },
    {
        id: '900341218',
        name: 'Stützkow',
    },
    {
        id: '900445904',
        name: 'Kolkwitz, Biohof',
    },
    {
        id: '900260994',
        name: 'Töpchin, Fasanenweg',
    },
    {
        id: '900260503',
        name: 'Rotberg, Tollkrug',
    },
    {
        id: '900220878',
        name: 'Potsdam, Paaren',
    },
    {
        id: '900205580',
        name: 'Dudel',
    },
    {
        id: '900230101',
        name: 'Potsdam, Lindenpark',
    },
    {
        id: '900245713',
        name: 'Trebbin, Gesundheitszentrum',
    },
    {
        id: '900245305',
        name: 'Jüterbog, Kapellenberg',
    },
    {
        id: '900203413',
        name: 'Hohen Neuendorf, Grillparzerstr.',
    },
    {
        id: '900340984',
        name: 'Neu-Galow, Kreuzung',
    },
    {
        id: '900310979',
        name: 'Neu Golm, Ausbau',
    },
    {
        id: '900310835',
        name: 'Fürstenwalde, Richard-Strauss-Str.',
    },
    {
        id: '900415310',
        name: 'Dubro, Dorfstr.',
    },
    {
        id: '900100004',
        name: 'S+U Jannowitzbrücke',
    },
    {
        id: '900152004',
        name: 'Birkholzer Weg/Str. 4',
    },
    {
        id: '900152510',
        name: 'Birkholzer Weg/Str. 8',
    },
    {
        id: '900135506',
        name: 'Alt-Buch/Wiltbergstr.',
    },
    {
        id: '900003105',
        name: 'Bachstr. (U Hansaplatz)',
    },
    {
        id: '900415251',
        name: 'Bad Liebenwerda, Am Rösselpark',
    },
    {
        id: '900100519',
        name: 'Holzmarktstr.',
    },
    {
        id: '900415003',
        name: 'Betten, B 96',
    },
    {
        id: '900215322',
        name: 'Glöwen, Bhf',
    },
    {
        id: '900275608',
        name: 'Brandenburg, Eibenweg',
    },
    {
        id: '900245712',
        name: 'Klein Ziescht (Baruth/Mark), Ort',
    },
    {
        id: '900320838',
        name: 'Reichenow, Kreuzung',
    },
    {
        id: '900203506',
        name: 'Hohenbruch, Kastanienweg',
    },
    {
        id: '900203500',
        name: 'Hohenbruch, Neuhofer Weg',
    },
    {
        id: '900203507',
        name: 'Kremmen, Kuhsiedlung',
    },
    {
        id: '900341212',
        name: 'Stolpe (Oder), Mitte',
    },
    {
        id: '900340990',
        name: 'Neuhof (UM), Mitte',
    },
    {
        id: '900340079',
        name: 'Crussow, Nord',
    },
    {
        id: '900026204',
        name: 'Messedamm/ZOB',
    },
    {
        id: '900026201',
        name: 'U Theodor-Heuss-Platz',
    },
    {
        id: '900030272',
        name: 'S Stresow',
    },
    {
        id: '900024251',
        name: 'Goethestr.',
    },
    {
        id: '900014104',
        name: 'Manteuffelstr./Köpenicker Str.',
    },
    {
        id: '900014154',
        name: 'Eisenbahnstr.',
    },
    {
        id: '900014155',
        name: 'Falckensteinstr.',
    },
    {
        id: '900015101',
        name: 'Heckmannufer',
    },
    {
        id: '900015151',
        name: 'Taborstr.',
    },
    {
        id: '900014153',
        name: 'Wrangelstr.',
    },
    {
        id: '900014105',
        name: 'Waldemarstr./Manteuffelstr.',
    },
    {
        id: '900014152',
        name: 'Mariannenplatz',
    },
    {
        id: '900014151',
        name: 'Waldemarstr./Adalbertstr.',
    },
    {
        id: '900340168',
        name: 'Dreesch, Kreuzung',
    },
    {
        id: '900085101',
        name: 'Aroser Allee/Gotthardstr.',
    },
    {
        id: '900068153',
        name: 'Badener Ring',
    },
    {
        id: '900340089',
        name: 'Damme (UM), Mitte',
    },
    {
        id: '900017105',
        name: 'Hornstr',
    },
    {
        id: '900089253',
        name: 'Im Waldwinkel',
    },
    {
        id: '900051353',
        name: 'Arnimallee',
    },
    {
        id: '900064257',
        name: 'Feldstr.',
    },
    {
        id: '900002151',
        name: 'Wittstocker Str.',
    },
    {
        id: '900002102',
        name: 'Turmstr./Beusselstr.',
    },
    {
        id: '900003181',
        name: 'Zinzendorfstr.',
    },
    {
        id: '900003152',
        name: 'Solinger Str.',
    },
    {
        id: '900004101',
        name: 'Großer Stern',
    },
    {
        id: '900073273',
        name: 'Stadtrandsiedlung',
    },
    {
        id: '900023152',
        name: 'Steinplatz',
    },
    {
        id: '900085251',
        name: 'Genfer Str.',
    },
    {
        id: '900089302',
        name: 'Heiligenseestr./Ruppiner Chaussee',
    },
    {
        id: '900096203',
        name: 'Dietrichinger Weg',
    },
    {
        id: '900017152',
        name: 'Kreuzberg/Wasserfall',
    },
    {
        id: '900017109',
        name: 'Viktoriapark',
    },
    {
        id: '900340264',
        name: 'Damme (UM), Dorf',
    },
    {
        id: '900340548',
        name: 'Prenzlau, Röpersdorfer Weg',
    },
    {
        id: '900001155',
        name: 'Goslarer Platz',
    },
    {
        id: '900340512',
        name: 'Prenzlau, Berliner Str.',
    },
    {
        id: '900027262',
        name: 'Spandauer-See-Brücke',
    },
    {
        id: '900051352',
        name: 'Rohlfsstr.',
    },
    {
        id: '900046101',
        name: 'Salzbrunner Str.',
    },
    {
        id: '900046152',
        name: 'Cunostr.',
    },
    {
        id: '900044171',
        name: 'S Hohenzollerndamm/A100',
    },
    {
        id: '900046203',
        name: 'Elsterplatz',
    },
    {
        id: '900340284',
        name: 'Eickstedt, Gemeinde',
    },
    {
        id: '900020102',
        name: 'Rohrdammbrücke',
    },
    {
        id: '900048108',
        name: 'Roseneck/Hohenzollerndamm',
    },
    {
        id: '900056102',
        name: 'U Nollendorfplatz',
    },
    {
        id: '900036152',
        name: 'Rohrdamm/Wasserwerk',
    },
    {
        id: '340376',
        name: 'Damme (UM), Wendestelle',
    },
    {
        id: '900026171',
        name: 'Altenburger Allee',
    },
    {
        id: '900064202',
        name: 'Lippstädter Str.',
    },
    {
        id: '900053254',
        name: 'Am Großen Wannsee',
    },
    {
        id: '900053253',
        name: 'Liebermann-Villa',
    },
    {
        id: '900053252',
        name: 'Koblanckstr.',
    },
    {
        id: '900340277',
        name: 'Dreesch, Dorf',
    },
    {
        id: '900020101',
        name: 'Friedhöfe Fürstenbrunner Weg',
    },
    {
        id: '900026206',
        name: 'Königin-Elisabeth-Str/Spandauer Damm',
    },
    {
        id: '900048157',
        name: 'Joseph-Joachim-Platz',
    },
    {
        id: '900023351',
        name: 'Bleibtreustr.',
    },
    {
        id: '900340736',
        name: 'Wollin (UM), Siedlung',
    },
    {
        id: '900340285',
        name: 'Eickstedt, Siedlung',
    },
    {
        id: '900340735',
        name: 'Wollin (UM), Dorf',
    },
    {
        id: '900340594',
        name: 'Schwaneberg, Dorf',
    },
    {
        id: '900023203',
        name: 'U Kurfürstendamm',
    },
    {
        id: '900061104',
        name: 'Kaisereiche',
    },
    {
        id: '900061105',
        name: 'Breslauer Platz',
    },
    {
        id: '900061153',
        name: 'Hähnelstr.',
    },
    {
        id: '900054153',
        name: 'Goebenstr.',
    },
    {
        id: '900005201',
        name: 'U Kurfürstenstr.',
    },
    {
        id: '900005202',
        name: 'Lützowstr./Potsdamer Str.',
    },
    {
        id: '900089252',
        name: 'Forstamt Tegel',
    },
    {
        id: '900091201',
        name: 'Schulzendorfer Str./Ruppiner Chaussee',
    },
    {
        id: '900022201',
        name: 'U Deutsche Oper',
    },
    {
        id: '900340328',
        name: 'Gollmitz (UM), Dorf',
    },
    {
        id: '900083362',
        name: 'Schönefelder Str./Neuhofer Str.',
    },
    {
        id: '900083363',
        name: 'Schönefelder Str./Str. 577',
    },
    {
        id: '900083364',
        name: 'Knollstr.',
    },
    {
        id: '900012151',
        name: 'Willy-Brandt-Haus',
    },
    {
        id: '900096202',
        name: 'Oranienburger Str./Hermsdorfer Str.',
    },
    {
        id: '900340401',
        name: 'Klein Sperrenwalde, Dorf',
    },
    {
        id: '900005271',
        name: 'Frobenstr.',
    },
    {
        id: '900041152',
        name: 'Hoffmann-von-Fallersleben-Platz',
    },
    {
        id: '900091251',
        name: 'Diakoniezentrum Heiligensee',
    },
    {
        id: '900088204',
        name: 'Holzhauser Str./Wittestr.',
    },
    {
        id: '900340385',
        name: 'Horst (UM), Dorf',
    },
    {
        id: '900018105',
        name: 'Hinckeldeybrücke',
    },
    {
        id: '900030102',
        name: 'Polizeidirektion 2',
    },
    {
        id: '900087153',
        name: 'Kaserne Nordtor',
    },
    {
        id: '900096301',
        name: 'Schorfheidestr./Eichhorster Weg',
    },
    {
        id: '900096303',
        name: 'Märkisches Zentrum',
    },
    {
        id: '900071102',
        name: 'Haynauer Str.',
    },
    {
        id: '900067204',
        name: 'Malteserstr./Kamenzer Damm',
    },
    {
        id: '900067200',
        name: 'Kamenzer Damm/Wedellstr.',
    },
    {
        id: '900050352',
        name: 'Niklasstr.',
    },
    {
        id: '900083365',
        name: 'Friederike-Nadig-Str.',
    },
    {
        id: '900083366',
        name: 'Lieselotte-Berger-Platz',
    },
    {
        id: '900040102',
        name: 'Joachim-Friedrich-Str./Westfälische Str.',
    },
    {
        id: '900024201',
        name: 'U Bismarckstr.',
    },
    {
        id: '900022106',
        name: 'Bismarckstr./Kaiser-Friedrich-Str.',
    },
    {
        id: '900001103',
        name: 'Wiebestr./Huttenstr.',
    },
    {
        id: '900050351',
        name: 'Forststr.',
    },
    {
        id: '900060106',
        name: 'Grazer Platz',
    },
    {
        id: '900060151',
        name: 'Brüggemannstr./AVK Ost',
    },
    {
        id: '900058151',
        name: 'Alboinstr./Arnulfstr.',
    },
    {
        id: '900069251',
        name: 'Colditzstr.',
    },
    {
        id: '900069252',
        name: 'Wenckebachstr.',
    },
    {
        id: '900340534',
        name: 'Prenzlau, Kleine Heide',
    },
    {
        id: '900340340',
        name: 'Groß Sperrenwalde, Dorf',
    },
    {
        id: '900029157',
        name: 'Schulzenstr.',
    },
    {
        id: '900074150',
        name: 'Warmensteinacher Str.',
    },
    {
        id: '900091252',
        name: 'Kiefheider Weg',
    },
    {
        id: '900091253',
        name: 'Ziegenorter Pfad',
    },
    {
        id: '900044206',
        name: 'Durlacher Str.',
    },
    {
        id: '900044202',
        name: 'S+U Bundesplatz',
    },
    {
        id: '900031104',
        name: 'Krumme Gärten',
    },
    {
        id: '900027456',
        name: 'Zweibrücker Str.',
    },
    {
        id: '900085253',
        name: 'Granatenstr.',
    },
    {
        id: '900027261',
        name: 'Hugo-Cassirer-Str.',
    },
    {
        id: '900340339',
        name: 'Groß Sperrenwalde, Bhf',
    },
    {
        id: '900009254',
        name: 'Ritterlandweg/Soldiner Str.',
    },
    {
        id: '900053153',
        name: 'Nikolskoer Weg',
    },
    {
        id: '900051204',
        name: 'Königin-Luise-Str./Clayallee',
    },
    {
        id: '900023101',
        name: 'U Ernst-Reuter-Platz',
    },
    {
        id: '900053152',
        name: 'Schäferberg',
    },
    {
        id: '900037105',
        name: 'Gartenstadt Staaken',
    },
    {
        id: '900001152',
        name: 'Neues Ufer',
    },
    {
        id: '900047152',
        name: 'Waldhaus',
    },
    {
        id: '900069211',
        name: 'U Ullsteinstr./Ordensmeisterstr.',
    },
    {
        id: '900080105',
        name: 'Karl-Elsasser-Str.',
    },
    {
        id: '900094152',
        name: 'Waldhornstr.',
    },
    {
        id: '900091155',
        name: 'Wesselburer Weg',
    },
    {
        id: '900027361',
        name: 'Schwanter Weg',
    },
    {
        id: '900009206',
        name: 'Drontheimer Str.',
    },
    {
        id: '900043101',
        name: 'U Hohenzollernplatz',
    },
    {
        id: '900068104',
        name: 'Rumeyplan',
    },
    {
        id: '900083358',
        name: 'Will-Meisel-Weg',
    },
    {
        id: '900089251',
        name: 'Schulzendorfer Weg',
    },
    {
        id: '900089201',
        name: 'Konradshöher Str./Heiligenseestr.',
    },
    {
        id: '900091158',
        name: 'An der Schneise',
    },
    {
        id: '900091157',
        name: 'Reiherallee',
    },
    {
        id: '900091156',
        name: 'Bekassinenweg',
    },
    {
        id: '900090103',
        name: 'Spechtstr.',
    },
    {
        id: '900090155',
        name: 'Schwarzspechtweg',
    },
    {
        id: '900090154',
        name: 'Gerlindeweg',
    },
    {
        id: '900340413',
        name: 'Koboltenhof',
    },
    {
        id: '900080171',
        name: 'Eintrachtsiedlung',
    },
    {
        id: '900085260',
        name: 'Ritterlandweg',
    },
    {
        id: '900091103',
        name: 'Heiligenseestr./Hennigsdorfer Str.',
    },
    {
        id: '900082293',
        name: 'Beifußweg',
    },
    {
        id: '900090171',
        name: 'Jörsstr.',
    },
    {
        id: '900091102',
        name: 'Am Dachsbau',
    },
    {
        id: '900086163',
        name: 'Lienemannstr.',
    },
    {
        id: '900086162',
        name: 'Waldstr./Gewerbegebiet',
    },
    {
        id: '900003251',
        name: 'Paulstr.',
    },
    {
        id: '900074260',
        name: 'Kolonie Märkische Heide',
    },
    {
        id: '900069203',
        name: 'Komturstr.',
    },
    {
        id: '900049258',
        name: 'Rathaus Zehlendorf',
    },
    {
        id: '900340015',
        name: 'Blankenburg, Dorf',
    },
    {
        id: '900096291',
        name: 'Blitzenroder Ring',
    },
    {
        id: '900340368',
        name: 'Heidehof',
    },
    {
        id: '900340235',
        name: 'Blankenburg, Mitte',
    },
    {
        id: '900340629',
        name: 'Tannendreieck',
    },
    {
        id: '900340462',
        name: 'Melzow',
    },
    {
        id: '900089551',
        name: 'Mescheder Weg',
    },
    {
        id: '900003252',
        name: 'Schloss Bellevue',
    },
    {
        id: '900340705',
        name: 'Warnitz, Schule',
    },
    {
        id: '900003253',
        name: 'Haus der Kulturen der Welt',
    },
    {
        id: '900096310',
        name: 'Märkische Zeile',
    },
    {
        id: '900085281',
        name: 'Lindauer Allee/Residenzstr.',
    },
    {
        id: '900086153',
        name: 'Von-der-Gablentz-Str.',
    },
    {
        id: '900027404',
        name: 'Dyrotzer Str.',
    },
    {
        id: '900027457',
        name: 'Viersener Str.',
    },
    {
        id: '900340819',
        name: 'Gramzow (UM), Ausbau',
    },
    {
        id: '900027405',
        name: 'Pausiner Str.',
    },
    {
        id: '900091160',
        name: 'Schönbaumer Weg',
    },
    {
        id: '900027458',
        name: 'Leuthingerweg',
    },
    {
        id: '900009152',
        name: 'Rathaus Wedding',
    },
    {
        id: '900011151',
        name: 'Türkenstr.',
    },
    {
        id: '900340481',
        name: 'Neumeichow, Abzweig',
    },
    {
        id: '900086159',
        name: 'Pfahlerstr.',
    },
    {
        id: '900085252',
        name: 'Stargardtstr.',
    },
    {
        id: '900080152',
        name: 'Wilhelm-Borgmann-Brücke',
    },
    {
        id: '900340590',
        name: 'Kleinow (UM), Neubau',
    },
    {
        id: '900025420',
        name: 'Kühler Weg',
    },
    {
        id: '900046351',
        name: 'Platz am Wilden Eber',
    },
    {
        id: '900096401',
        name: 'Oranienburger Str./Alt-Wittenau',
    },
    {
        id: '900096457',
        name: 'Jansenstr.',
    },
    {
        id: '900091159',
        name: 'Mattenbuder Pfad',
    },
    {
        id: '900069204',
        name: 'Bergholzstr.',
    },
    {
        id: '900081152',
        name: 'Grauwackeweg',
    },
    {
        id: '900081151',
        name: 'Bühler Weg',
    },
    {
        id: '900081252',
        name: 'Delmer Steig',
    },
    {
        id: '900081201',
        name: 'Alt-Buckow',
    },
    {
        id: '900082203',
        name: 'Lipschitzallee/Rudower Str.',
    },
    {
        id: '900069206',
        name: 'Rohdestr.',
    },
    {
        id: '900340280',
        name: 'Drense, Dorf',
    },
    {
        id: '900091104',
        name: 'Kurzebracker Weg',
    },
    {
        id: '900091254',
        name: 'Krantorweg',
    },
    {
        id: '900034153',
        name: 'Burscheider Weg',
    },
    {
        id: '900034104',
        name: 'Lüdenscheider Weg',
    },
    {
        id: '900030101',
        name: 'Krematorium Ruhleben',
    },
    {
        id: '900030151',
        name: 'Güterbahnhof Ruhleben',
    },
    {
        id: '900032301',
        name: 'Teltower Str.',
    },
    {
        id: '900083103',
        name: 'Arnikaweg',
    },
    {
        id: '900083253',
        name: 'Fritz-Erler-Allee/Neuköllner Str.',
    },
    {
        id: '900031102',
        name: 'Ziegelhof',
    },
    {
        id: '900032153',
        name: 'Kolonie Hasenheide',
    },
    {
        id: '900032158',
        name: 'Seeburger Str./Päwesiner Weg',
    },
    {
        id: '900032157',
        name: 'Seecktstr.',
    },
    {
        id: '900340591',
        name: 'Schmölln, Dorf',
    },
    {
        id: '900032105',
        name: 'Lutoner Str.',
    },
    {
        id: '900092281',
        name: 'Zeltinger Platz',
    },
    {
        id: '900048151',
        name: 'Trabener Steg',
    },
    {
        id: '900083269',
        name: 'Im Bauernbusch',
    },
    {
        id: '900340279',
        name: 'Drense, Abzweig',
    },
    {
        id: '900083204',
        name: 'August-Froehlich-Str.',
    },
    {
        id: '900083254',
        name: 'Hafenstr.',
    },
    {
        id: '900083266',
        name: 'Prierosser Str.',
    },
    {
        id: '900074152',
        name: 'Raabestr.',
    },
    {
        id: '900049253',
        name: 'Machnower Str.',
    },
    {
        id: '900340744',
        name: 'Ziemkendorf, Mitte',
    },
    {
        id: '900066253',
        name: 'Platz des 4. Juli',
    },
    {
        id: '900066202',
        name: 'Luzerner Str.',
    },
    {
        id: '900340747',
        name: 'Ziemkendorf, Ausbau',
    },
    {
        id: '900045157',
        name: 'Rudolf-Mosse-Platz',
    },
    {
        id: '900045156',
        name: 'Mecklenburgische Str./Binger Str.',
    },
    {
        id: '900043103',
        name: 'Güntzelstr./Uhlandstr.',
    },
    {
        id: '900044151',
        name: 'Brabanter Platz',
    },
    {
        id: '900043151',
        name: 'Fechnerstr.',
    },
    {
        id: '900023352',
        name: 'Pariser Str.',
    },
    {
        id: '900032104',
        name: 'Melanchthonplatz',
    },
    {
        id: '900340502',
        name: 'Prenzlau, Alexanderhof',
    },
    {
        id: '900340607',
        name: 'Seelübbe',
    },
    {
        id: '900070453',
        name: 'Sandsteinweg',
    },
    {
        id: '900002207',
        name: 'Stromstr.',
    },
    {
        id: '900034155',
        name: 'Kolonie Haselbusch',
    },
    {
        id: '900085206',
        name: 'Papierstr.',
    },
    {
        id: '900340501',
        name: 'Prenzlau, Alexanderhöhe',
    },
    {
        id: '900025155',
        name: 'Schildhorn',
    },
    {
        id: '900031152',
        name: 'Elsflether Weg',
    },
    {
        id: '900017181',
        name: 'Columbiadamm/Platz der Luftbrücke',
    },
    {
        id: '900026271',
        name: 'U Theodor-Heuss-Platz West',
    },
    {
        id: '900340603',
        name: 'Schwaneberg, Mitte',
    },
    {
        id: '900086150',
        name: 'Ollenhauerstr.',
    },
    {
        id: '900341140',
        name: 'Schwedt, Krumbachstr. Abzweig',
    },
    {
        id: '900089452',
        name: 'Trettachzeile',
    },
    {
        id: '900089304',
        name: 'Eschachstr./S Tegel',
    },
    {
        id: '900089403',
        name: 'Bollestr.',
    },
    {
        id: '900096105',
        name: 'Am Kesselpfuhl',
    },
    {
        id: '900089401',
        name: 'Gorkistr./Ziekowstr.',
    },
    {
        id: '900341159',
        name: 'Schwedt, Sportplatz',
    },
    {
        id: '900097151',
        name: 'Innungsstr.',
    },
    {
        id: '900097105',
        name: 'Holzhauser Str./Triftstr.',
    },
    {
        id: '900053205',
        name: 'Wilhelmplatz',
    },
    {
        id: '900097152',
        name: 'Miraustr.',
    },
    {
        id: '900093156',
        name: 'Hohefeldstr.',
    },
    {
        id: '900088251',
        name: 'Namslaustr.',
    },
    {
        id: '900341148',
        name: 'Schwedt, Papierfabrik',
    },
    {
        id: '900089550',
        name: 'Liesborner Weg',
    },
    {
        id: '900089603',
        name: 'Tegeler Brücke',
    },
    {
        id: '900089652',
        name: 'Maienwerderweg',
    },
    {
        id: '900089554',
        name: 'Wassersportclub',
    },
    {
        id: '900089502',
        name: 'Wasserwerk Tegel',
    },
    {
        id: '900089552',
        name: 'Kamener Weg',
    },
    {
        id: '900089501',
        name: 'Sterkrader Str.',
    },
    {
        id: '900026251',
        name: 'Haus des Rundfunks',
    },
    {
        id: '900089651',
        name: 'Weg nach Reiswerder',
    },
    {
        id: '900089553',
        name: 'Neheimer Str.',
    },
    {
        id: '900035106',
        name: 'Gartenfeld',
    },
    {
        id: '900027353',
        name: 'Glühwürmchenweg',
    },
    {
        id: '900077171',
        name: 'Treptower Brücke',
    },
    {
        id: '900034170',
        name: 'U Haselhorst',
    },
    {
        id: '900341236',
        name: 'Vierraden, Tabakmuseum',
    },
    {
        id: '900031156',
        name: 'Harburger Weg',
    },
    {
        id: '900031155',
        name: 'Egelpfuhlstr.',
    },
    {
        id: '900031103',
        name: 'Päwesiner Weg',
    },
    {
        id: '900031153',
        name: 'Grünhofer Weg',
    },
    {
        id: '900093207',
        name: 'Amandastr.',
    },
    {
        id: '900093204',
        name: 'Veltheimstr.',
    },
    {
        id: '900037106',
        name: 'Klosterbuschweg',
    },
    {
        id: '900037122',
        name: 'Brandwerder',
    },
    {
        id: '900089352',
        name: 'Veitstr.',
    },
    {
        id: '900041151',
        name: 'Westfälische Str./Konstanzer Str.',
    },
    {
        id: '900096103',
        name: 'Gorkistr./Am Nordgraben',
    },
    {
        id: '900066355',
        name: 'Berner Str.',
    },
    {
        id: '900055105',
        name: 'Hohenstaufenstr.',
    },
    {
        id: '900069151',
        name: 'Golßener Str.',
    },
    {
        id: '900094181',
        name: 'Titiseestr.',
    },
    {
        id: '900093208',
        name: 'Roswithastr.',
    },
    {
        id: '900044251',
        name: 'Wexstr.',
    },
    {
        id: '900045154',
        name: 'Görresstr.',
    },
    {
        id: '900341135',
        name: 'Schwedt, J.-v.-Liebig-Str.',
    },
    {
        id: '900054106',
        name: 'Rathaus Schöneberg',
    },
    {
        id: '900093103',
        name: 'Bergstr.',
    },
    {
        id: '900049351',
        name: 'Gutzmannstr.',
    },
    {
        id: '900046251',
        name: 'Rathaus Schmargendorf',
    },
    {
        id: '900341126',
        name: 'Schwedt, Friedrich-Wolf-Ring',
    },
    {
        id: '900049252',
        name: 'Schrockstr.',
    },
    {
        id: '900049103',
        name: 'Behring-Krankenhaus',
    },
    {
        id: '900049304',
        name: 'Ludwigsfelder Str./Sachtlebenstr.',
    },
    {
        id: '900053154',
        name: 'Schuchardtweg',
    },
    {
        id: '900051251',
        name: 'Löhleinstr.',
    },
    {
        id: '900051252',
        name: 'Im Dol',
    },
    {
        id: '900019153',
        name: 'Friedrich-Olbricht-Damm/Saatwinkler Damm',
    },
    {
        id: '900026101',
        name: 'U Neu-Westend',
    },
    {
        id: '900026151',
        name: 'Hessenallee',
    },
    {
        id: '900026152',
        name: 'Reichsstr./Kastanienallee',
    },
    {
        id: '900024151',
        name: 'Kuno-Fischer-Str.',
    },
    {
        id: '900019154',
        name: 'Stieffring',
    },
    {
        id: '900040101',
        name: 'S Halensee',
    },
    {
        id: '900341149',
        name: 'Schwedt, Passower Chaussee',
    },
    {
        id: '900046273',
        name: 'Elsterplatz',
    },
    {
        id: '900023301',
        name: 'U Uhlandstr.',
    },
    {
        id: '900341116',
        name: 'Schwedt, Barmer',
    },
    {
        id: '900039101',
        name: 'Gutsstr.',
    },
    {
        id: '900341245',
        name: 'Vierraden, Schwedter Str.',
    },
    {
        id: '900341167',
        name: 'Schwedt, Vierradener Platz',
    },
    {
        id: '900039103',
        name: 'Hottengrund',
    },
    {
        id: '900039155',
        name: 'Schallweg',
    },
    {
        id: '900009204',
        name: 'Osloer Str./Prinzenallee',
    },
    {
        id: '900039159',
        name: 'Kurpromenade',
    },
    {
        id: '900039158',
        name: 'Seekorso',
    },
    {
        id: '900026156',
        name: 'Badenallee',
    },
    {
        id: '900067402',
        name: 'Preysingstr.',
    },
    {
        id: '900048152',
        name: 'Bismarckplatz',
    },
    {
        id: '900081202',
        name: 'Stuthirtenweg',
    },
    {
        id: '900026203',
        name: 'U Theodor-Heuss-Platz Süd',
    },
    {
        id: '900039108',
        name: 'Waldallee',
    },
    {
        id: '900035104',
        name: 'Quellweg',
    },
    {
        id: '900039156',
        name: 'Schwabinger Weg',
    },
    {
        id: '900039157',
        name: 'Gredinger Str.',
    },
    {
        id: '900087151',
        name: 'General-Ganeval-Brücke',
    },
    {
        id: '900341237',
        name: 'Vierraden, Gatow Abzweig',
    },
    {
        id: '900093291',
        name: 'Loerkesteig',
    },
    {
        id: '900341177',
        name: 'Schwedt, Bahnhofstr.',
    },
    {
        id: '900092260',
        name: 'Markgrafenstr.',
    },
    {
        id: '900092261',
        name: 'Konzer Platz',
    },
    {
        id: '900096151',
        name: 'Lange Enden',
    },
    {
        id: '900341106',
        name: 'Schwedt, Ärztehaus',
    },
    {
        id: '900011104',
        name: 'Glasgower Str.',
    },
    {
        id: '900011152',
        name: 'Bristolstr.',
    },
    {
        id: '900085155',
        name: 'Grindelwaldweg',
    },
    {
        id: '900096404',
        name: 'Alt-Wittenau/Roedernallee',
    },
    {
        id: '900085152',
        name: 'Weiße Stadt',
    },
    {
        id: '900084102',
        name: 'Roedernallee/Flottenstr.',
    },
    {
        id: '900084151',
        name: 'Weinbrennerweg',
    },
    {
        id: '900096451',
        name: 'Schmitzweg',
    },
    {
        id: '900341120',
        name: 'Schwedt, Eigene Scholle',
    },
    {
        id: '900092259',
        name: 'Im Amseltal',
    },
    {
        id: '900096152',
        name: 'Am Hügel',
    },
    {
        id: '900341127',
        name: 'Schwedt, Garagenkomplex',
    },
    {
        id: '900064361',
        name: 'Kranoldplatz',
    },
    {
        id: '900341110',
        name: 'Schwedt, Bhf',
    },
    {
        id: '900341145',
        name: 'Schwedt, Monplaisir',
    },
    {
        id: '900004105',
        name: 'Platz der Republik',
    },
    {
        id: '900053202',
        name: 'Am Kleinen Wannsee',
    },
    {
        id: '900024208',
        name: 'Bismarckstr./Leibnizstr.',
    },
    {
        id: '900022251',
        name: 'Guerickestr.',
    },
    {
        id: '900027292',
        name: 'Bürgerablage',
    },
    {
        id: '900340294',
        name: 'Ferdinandshof (UM)',
    },
    {
        id: '900023306',
        name: 'Olivaer Platz/Xantener Str.',
    },
    {
        id: '900041252',
        name: 'Düsseldorfer Str.',
    },
    {
        id: '900052353',
        name: 'Waldfriedhof Zehlendorf',
    },
    {
        id: '900052305',
        name: 'Kurstr.',
    },
    {
        id: '900049151',
        name: 'Wolzogenstr.',
    },
    {
        id: '900049104',
        name: 'Fürstenstr.',
    },
    {
        id: '900041154',
        name: 'Mansfelder Str./Barstr.',
    },
    {
        id: '900053102',
        name: 'Pfaueninsel',
    },
    {
        id: '900044204',
        name: 'Kufsteiner Str.',
    },
    {
        id: '900054151',
        name: 'Albertstr.',
    },
    {
        id: '900054109',
        name: 'Richard-von-Weizsäcker-Platz',
    },
    {
        id: '900057151',
        name: 'Kesselsdorfstr.',
    },
    {
        id: '900340746',
        name: 'Zollchow (UM), Dorf',
    },
    {
        id: '900077107',
        name: 'Grenzallee/Bergiusstr.',
    },
    {
        id: '900340745',
        name: 'Zollchow (UM), Abzweig',
    },
    {
        id: '900057150',
        name: 'Hohenfriedbergstr.',
    },
    {
        id: '900340420',
        name: 'Kröchlendorff',
    },
    {
        id: '900340764',
        name: 'Gollmitz (UM), Hort',
    },
    {
        id: '900340573',
        name: 'Röpersdorf',
    },
    {
        id: '900052205',
        name: 'Isoldestr.',
    },
    {
        id: '900052271',
        name: 'Waldhaus-Klinik',
    },
    {
        id: '900058103',
        name: 'S+U Yorckstr.',
    },
    {
        id: '900089453',
        name: 'Hermsdorfer Damm/Bundesfernstr.',
    },
    {
        id: '900089454',
        name: 'Am Tegeler Fließ',
    },
    {
        id: '900093152',
        name: 'Mühlenfeldstr.',
    },
    {
        id: '900093101',
        name: 'Schulzendorfer Str.',
    },
    {
        id: '900093104',
        name: 'Hermsdorfer Damm/Martin-Luther-Str.',
    },
    {
        id: '900093153',
        name: 'Drewitzer Str.',
    },
    {
        id: '900087103',
        name: 'Robert-Schuman-Brücke',
    },
    {
        id: '900093154',
        name: 'Hohenzollernstr.',
    },
    {
        id: '900092256',
        name: 'Dominikus-Krankenhaus',
    },
    {
        id: '900340430',
        name: 'Lindenhagen, Dorf',
    },
    {
        id: '900041251',
        name: 'Eisenzahnstr.',
    },
    {
        id: '900049105',
        name: 'Mittelstr.',
    },
    {
        id: '900092257',
        name: 'Friedhof Hermsdorf',
    },
    {
        id: '900092258',
        name: 'Welfenallee',
    },
    {
        id: '900092205',
        name: 'Alemannenstr./Maximiliankorso',
    },
    {
        id: '900092102',
        name: 'Am Pilz',
    },
    {
        id: '900092103',
        name: 'Hubertusweg',
    },
    {
        id: '900340588',
        name: 'Schmachtenhagen (UM), Dorf',
    },
    {
        id: '900340617',
        name: 'Sternhagen, Dorf',
    },
    {
        id: '900340618',
        name: 'Sternhagen, Gut',
    },
    {
        id: '900045158',
        name: 'Schmargendorf Kirche',
    },
    {
        id: '900038254',
        name: 'Christoph-Kolumbus-Str.',
    },
    {
        id: '900038201',
        name: 'Breitehornweg',
    },
    {
        id: '900038251',
        name: 'Helleberge',
    },
    {
        id: '900038252',
        name: 'Am Graben',
    },
    {
        id: '900038104',
        name: 'Alt-Gatow',
    },
    {
        id: '900032256',
        name: 'Gatow Kirche',
    },
    {
        id: '900032254',
        name: 'Emil-Basdeck-Str.',
    },
    {
        id: '900032253',
        name: 'Biberburg',
    },
    {
        id: '900032252',
        name: 'Zur Haveldüne',
    },
    {
        id: '900032201',
        name: 'Gatower Str./Weinmeisterhornweg',
    },
    {
        id: '900032251',
        name: 'Sandheideweg',
    },
    {
        id: '900032451',
        name: 'Genfenbergstr.',
    },
    {
        id: '900038255',
        name: 'General-Steinhoff-Kaserne',
    },
    {
        id: '900029201',
        name: 'Wröhmännerpark',
    },
    {
        id: '900350637',
        name: 'Parstein',
    },
    {
        id: '900350574',
        name: 'Lunow, Kreuzung',
    },
    {
        id: '900341162',
        name: 'Schwedt, Str. am Waldrand',
    },
    {
        id: '900067453',
        name: 'Marchandstr.',
    },
    {
        id: '900067455',
        name: 'Vom Guten Hirten',
    },
    {
        id: '900067454',
        name: 'Friedrichrodaer Str.',
    },
    {
        id: '900067451',
        name: 'Emmichstr.',
    },
    {
        id: '900067255',
        name: 'Paul-Schneider-Str.',
    },
    {
        id: '900093206',
        name: 'Veltheimstr./Schildower Str.',
    },
    {
        id: '900032481',
        name: 'Betckestr.',
    },
    {
        id: '900039109',
        name: 'Krankenhaus Havelhöhe',
    },
    {
        id: '900023172',
        name: 'S+U Zoologischer Garten/Jebensstr.',
    },
    {
        id: '900005154',
        name: 'Köbisstr.',
    },
    {
        id: '900025154',
        name: 'Am Postfenn',
    },
    {
        id: '900340606',
        name: 'Seehausen (UM), Hotel',
    },
    {
        id: '900082251',
        name: 'Storchenweg',
    },
    {
        id: '900039150',
        name: 'Landstadt Gatow',
    },
    {
        id: '900045104',
        name: 'Zoppoter Str.',
    },
    {
        id: '900052202',
        name: 'Quantzstr.',
    },
    {
        id: '900340625',
        name: 'Strehlow',
    },
    {
        id: '900054173',
        name: 'Hauptstr./Martin-Luther-Str.',
    },
    {
        id: '900340500',
        name: 'Potzlow',
    },
    {
        id: '900037171',
        name: 'Am Kurzen Weg',
    },
    {
        id: '900095152',
        name: 'Sprintsteig',
    },
    {
        id: '900095102',
        name: 'Am Vierrutenberg',
    },
    {
        id: '900095151',
        name: 'Öschelbronner Weg',
    },
    {
        id: '900094191',
        name: 'Am Dianaplatz',
    },
    {
        id: '900094153',
        name: 'Dianastr.',
    },
    {
        id: '900089458',
        name: 'Freie Scholle',
    },
    {
        id: '900089457',
        name: 'Im Brachfeldwinkel',
    },
    {
        id: '900089455',
        name: 'Hatzfeldtallee',
    },
    {
        id: '900093205',
        name: 'Marthastr.',
    },
    {
        id: '900078172',
        name: 'Werbellinstr.',
    },
    {
        id: '900340605',
        name: 'Seehausen (UM), Dorf',
    },
    {
        id: '900033151',
        name: 'Motorradwerk',
    },
    {
        id: '900215799',
        name: 'Rohlsdorf (bei Perleberg), Mitte',
    },
    {
        id: '900215830',
        name: 'Sadenbeck, Abzweig',
    },
    {
        id: '900215829',
        name: 'Schönhagen (bei Pritzwalk), Mühlenweg',
    },
    {
        id: '900215801',
        name: 'Rühstädt',
    },
    {
        id: '900215800',
        name: 'Rosenhagen',
    },
    {
        id: '900215831',
        name: 'Sadenbeck, Ausbau',
    },
    {
        id: '900215797',
        name: 'Rohlsdorf (bei Perleberg), Ausbau',
    },
    {
        id: '900215796',
        name: 'Rohlsdorf (bei Halenbeck)',
    },
    {
        id: '900435338',
        name: 'Schwarzheide, An der Autobahn',
    },
    {
        id: '900215794',
        name: 'Retzin',
    },
    {
        id: '900215510',
        name: 'Kunow (PR), Kirche',
    },
    {
        id: '900215838',
        name: 'Sargleben',
    },
    {
        id: '900435333',
        name: 'Großräschen, Ost Dorfaue',
    },
    {
        id: '900215842',
        name: 'Scharleuk',
    },
    {
        id: '900215840',
        name: 'Sarnow, Dorf',
    },
    {
        id: '900435336',
        name: 'Großräschen, Neu-Bückgen',
    },
    {
        id: '900215837',
        name: 'Sagast, Dorf I',
    },
    {
        id: '900215836',
        name: 'Sagast, Dorf',
    },
    {
        id: '900215835',
        name: 'Sagast, Ausbau',
    },
    {
        id: '900215833',
        name: 'Sadenbeck, Mitte',
    },
    {
        id: '900215792',
        name: 'Reetz (PR), Waldhof I',
    },
    {
        id: '900215791',
        name: 'Reetz (PR), Pflaumenweg',
    },
    {
        id: '900215738',
        name: 'Putlitz, Bhf',
    },
    {
        id: '900215750',
        name: 'Perleberg, Hamburger Str.',
    },
    {
        id: '900215742',
        name: 'Putlitz, Schule',
    },
    {
        id: '900215739',
        name: 'Putlitz, Karstädter Chaussee',
    },
    {
        id: '900215737',
        name: 'Putlitz, Alte Post',
    },
    {
        id: '900215735',
        name: 'Pritzwalk, Voßberg',
    },
    {
        id: '900215734',
        name: 'Pritzwalk, Süd',
    },
    {
        id: '900215731',
        name: 'Pritzwalk, Schlachthausstr.',
    },
    {
        id: '900215752',
        name: 'Pritzwalk, Museum',
    },
    {
        id: '900215754',
        name: 'Pritzwalk, Am Ring',
    },
    {
        id: '900215790',
        name: 'Reetz (PR), Dorf',
    },
    {
        id: '900215785',
        name: 'Reckenthin, Dorf',
    },
    {
        id: '900215784',
        name: 'Reckenthin, Abzweig',
    },
    {
        id: '900215783',
        name: 'Rapshagen, Dorf',
    },
    {
        id: '900215782',
        name: 'Rapshagen, Ausbau',
    },
    {
        id: '900435340',
        name: 'Großräschen, Seestr.',
    },
    {
        id: '900215780',
        name: 'Rambow (bei Kleinow)',
    },
    {
        id: '900215762',
        name: 'Quitzow, Dorf',
    },
    {
        id: '900435341',
        name: 'Großräschen, Ost Käthe-Kollwitz-Str.',
    },
    {
        id: '900215760',
        name: 'Quitzöbel',
    },
    {
        id: '900215756',
        name: 'Pritzwalk, Pappelweg',
    },
    {
        id: '900215755',
        name: 'Pritzwalk, Rostocker Str.',
    },
    {
        id: '900215851',
        name: 'Schönebeck (PR), Dorf',
    },
    {
        id: '900215899',
        name: 'Strehlen',
    },
    {
        id: '900215904',
        name: 'Sükow, Platenhof',
    },
    {
        id: '900215903',
        name: 'Sükow, Dorf',
    },
    {
        id: '900435311',
        name: 'Hohenbocka, Kirche',
    },
    {
        id: '900215901',
        name: 'Struck',
    },
    {
        id: '900215900',
        name: 'Strigleben',
    },
    {
        id: '900215896',
        name: 'Streckenthin, II',
    },
    {
        id: '900215889',
        name: 'Steinberg (PR), Ausbau',
    },
    {
        id: '900215895',
        name: 'Streckenthin, I',
    },
    {
        id: '900215893',
        name: 'Storbeckshof',
    },
    {
        id: '900215892',
        name: 'Stepenitz, Stift',
    },
    {
        id: '900215891',
        name: 'Stepenitz, Dorf',
    },
    {
        id: '900215890',
        name: 'Steinberg (PR), Dorf',
    },
    {
        id: '900215920',
        name: 'Tacken, Ausbau',
    },
    {
        id: '900215921',
        name: 'Tacken, Dorf',
    },
    {
        id: '900215922',
        name: 'Tangendorf',
    },
    {
        id: '900215924',
        name: 'Telschow, Kirche',
    },
    {
        id: '900215952',
        name: 'Unbesandten, II',
    },
    {
        id: '900215951',
        name: 'Unbesandten, I',
    },
    {
        id: '900215950',
        name: 'Uenze',
    },
    {
        id: '900215932',
        name: 'Tüchen, II',
    },
    {
        id: '900215930',
        name: 'Triglitz, Dorf',
    },
    {
        id: '900215928',
        name: 'Triglitz, Abzweig Mertensdorf',
    },
    {
        id: '900215926',
        name: 'Tiefenthal',
    },
    {
        id: '900215864',
        name: 'Seefeld (PR), Ausbau',
    },
    {
        id: '900435331',
        name: 'Grünewald, Hort',
    },
    {
        id: '900215861',
        name: 'Seddin (PR), II',
    },
    {
        id: '900215860',
        name: 'Seddin (PR), I',
    },
    {
        id: '900215859',
        name: 'Schrepkow',
    },
    {
        id: '900215857',
        name: 'Schönholz (PR), Abzweig',
    },
    {
        id: '900215856',
        name: 'Schönhagen (bei Pritzwalk), Dorf',
    },
    {
        id: '900215855',
        name: 'Schönhagen (bei Pritzwalk), Abzweig',
    },
    {
        id: '900215854',
        name: 'Schönhagen (bei Döllen)',
    },
    {
        id: '900215853',
        name: 'Schönfeld (PR), Dorf',
    },
    {
        id: '900215866',
        name: 'Seefeld (PR), Dorf',
    },
    {
        id: '900215870',
        name: 'Seetz, Dorf',
    },
    {
        id: '900435322',
        name: 'Annahütte, Schule',
    },
    {
        id: '900435329',
        name: 'Ruhland, Schule',
    },
    {
        id: '900215878',
        name: 'Spiegelhagen',
    },
    {
        id: '900215877',
        name: 'Söllenthin',
    },
    {
        id: '900215875',
        name: 'Simonshagen',
    },
    {
        id: '900215874',
        name: 'Silmersdorf, Kreuzung',
    },
    {
        id: '900215873',
        name: 'Silmersdorf, Brücke',
    },
    {
        id: '900215872',
        name: 'Sigrön',
    },
    {
        id: '900215730',
        name: 'Pritzwalk, Putlitzer Str.',
    },
    {
        id: '900215729',
        name: 'Pritzwalk, Parkstr.',
    },
    {
        id: '900215579',
        name: 'Lütkenwisch',
    },
    {
        id: '900215604',
        name: 'Mertensdorf, I',
    },
    {
        id: '900215603',
        name: 'Mellen, Karstädter Str.',
    },
    {
        id: '900215602',
        name: 'Mellen, Groß Warnower Str.',
    },
    {
        id: '900215600',
        name: 'Mankmuß',
    },
    {
        id: '900215578',
        name: 'Lütkendorf, I',
    },
    {
        id: '900215565',
        name: 'Lindenberg (PR), Bhf',
    },
    {
        id: '900215577',
        name: 'Lütkendorf, Ausbau',
    },
    {
        id: '900215576',
        name: 'Luggendorf',
    },
    {
        id: '900435424',
        name: 'Klein Radden',
    },
    {
        id: '900215569',
        name: 'Lockstädt',
    },
    {
        id: '900215605',
        name: 'Mertensdorf, II',
    },
    {
        id: '900215606',
        name: 'Mesekow',
    },
    {
        id: '900215623',
        name: 'Muggerkuhl, Dorf',
    },
    {
        id: '900215621',
        name: 'Motrich',
    },
    {
        id: '900215618',
        name: 'Mödlich, IV',
    },
    {
        id: '900215617',
        name: 'Mödlich, III',
    },
    {
        id: '900215616',
        name: 'Mödlich, II',
    },
    {
        id: '900215612',
        name: 'Meyenburg, Pritzwalker Str.',
    },
    {
        id: '900215608',
        name: 'Mesendorf, Mitte',
    },
    {
        id: '900435429',
        name: 'Krimnitz, L49',
    },
    {
        id: '900215624',
        name: 'Muggerkuhl, Ziegelei',
    },
    {
        id: '900215547',
        name: 'Lanz, Dorf',
    },
    {
        id: '900215551',
        name: 'Lennewitz, II',
    },
    {
        id: '900435430',
        name: 'Krimnitz, Ortsmitte',
    },
    {
        id: '900215550',
        name: 'Lennewitz, I',
    },
    {
        id: '900215548',
        name: 'Legde, I',
    },
    {
        id: '900215546',
        name: 'Lanz, Ausbau',
    },
    {
        id: '900215563',
        name: 'Lindenberg (bei Wittenberge), Abzweig',
    },
    {
        id: '900215545',
        name: 'Langnow, Dorf',
    },
    {
        id: '900215544',
        name: 'Langnow, Ausbau',
    },
    {
        id: '900215553',
        name: 'Lenzen, Bhf',
    },
    {
        id: '900215554',
        name: 'Lenzen, Berliner Str.',
    },
    {
        id: '900215555',
        name: 'Lenzen, Ferienlager',
    },
    {
        id: '900215562',
        name: 'Lenzersilge, II',
    },
    {
        id: '900215561',
        name: 'Lenzersilge, I',
    },
    {
        id: '900215559',
        name: 'Lenzen, See',
    },
    {
        id: '900215558',
        name: 'Lenzen, Mühlenweg',
    },
    {
        id: '900215557',
        name: 'Lenzen, Markt',
    },
    {
        id: '900215556',
        name: 'Lenzen, Jahnstr.',
    },
    {
        id: '900215711',
        name: 'Perleberg, Wittenberger Str.',
    },
    {
        id: '900215714',
        name: 'Plattenburg',
    },
    {
        id: '900215713',
        name: 'Pirow',
    },
    {
        id: '900215712',
        name: 'Perleberg, ZOB',
    },
    {
        id: '900435387',
        name: 'Großräschen, IBA Terrassen',
    },
    {
        id: '900435388',
        name: 'Großräschen, Lunaeck',
    },
    {
        id: '900215701',
        name: 'Perleberg, Friedrichstr.',
    },
    {
        id: '900215709',
        name: 'Perleberg, West',
    },
    {
        id: '900435389',
        name: 'Großräschen, Mitte Stadtverwaltung',
    },
    {
        id: '900215704',
        name: 'Perleberg, Lindenstr.',
    },
    {
        id: '900435386',
        name: 'Großräschen, Koldrack',
    },
    {
        id: '900215717',
        name: 'Postlin, Dargardter Str.',
    },
    {
        id: '900435385',
        name: 'Großräschen, Felix-Spiro-Str.',
    },
    {
        id: '900215727',
        name: 'Pritzwalk, Nord',
    },
    {
        id: '900215726',
        name: 'Pritzwalk, Krankenhaus',
    },
    {
        id: '900215724',
        name: 'Pritzwalk, Bürgerplatz',
    },
    {
        id: '900435370',
        name: 'Kalkwitz',
    },
    {
        id: '900215723',
        name: 'Pritzwalk, Bhf',
    },
    {
        id: '900215722',
        name: 'Premslin, Nebeliner Str.',
    },
    {
        id: '900215721',
        name: 'Premslin, B 5',
    },
    {
        id: '900215720',
        name: 'Preddöhl, Mitte',
    },
    {
        id: '900215719',
        name: 'Preddöhl, Ausbau',
    },
    {
        id: '900215700',
        name: 'Perleberg, Dobberziner Str.',
    },
    {
        id: '900215653',
        name: 'Nebelin',
    },
    {
        id: '900215660',
        name: 'Neu Pinnow, Dorf',
    },
    {
        id: '900215664',
        name: 'Neu Sagast',
    },
    {
        id: '900215663',
        name: 'Neu Redlin',
    },
    {
        id: '900215662',
        name: 'Neu Pröttlin',
    },
    {
        id: '900215661',
        name: 'Neu Premslin',
    },
    {
        id: '900215659',
        name: 'Neu Pinnow, B 5',
    },
    {
        id: '900215656',
        name: 'Netzow (PR)',
    },
    {
        id: '900435418',
        name: 'Klein Klessow',
    },
    {
        id: '900215665',
        name: 'Neu Schrepkow',
    },
    {
        id: '900215666',
        name: 'Neu Silmersdorf',
    },
    {
        id: '900215695',
        name: 'Penzlin, Süd',
    },
    {
        id: '900435391',
        name: 'Großräschen, GuthsMuths-Grundschule',
    },
    {
        id: '900215686',
        name: 'Perleberg, K.-Liebknecht-Str.',
    },
    {
        id: '900215684',
        name: 'Perleberg, Waldsiedlung',
    },
    {
        id: '900215672',
        name: 'Neuhof (PR), Dorf',
    },
    {
        id: '900215671',
        name: 'Neuhof (PR), Ausbau',
    },
    {
        id: '900215669',
        name: 'Neuhausen (PR), I',
    },
    {
        id: '900215668',
        name: 'Neudorf (PR)',
    },
    {
        id: '900215983',
        name: 'Vehlin',
    },
    {
        id: '900215988',
        name: 'Vehlow, Nord',
    },
    {
        id: '900220768',
        name: 'Fresdorf, Feldstr.',
    },
    {
        id: '900220776',
        name: 'Zauchwitz, Friedhof',
    },
    {
        id: '900435194',
        name: 'Lieske, Gasthaus',
    },
    {
        id: '900435195',
        name: 'Lauchhammer Mitte, Naundorfer Str.',
    },
    {
        id: '900220771',
        name: 'Stücken, Süd',
    },
    {
        id: '900220770',
        name: 'Stücken, Dorf',
    },
    {
        id: '900220767',
        name: 'Fresdorf, Feuerwehr',
    },
    {
        id: '900220763',
        name: 'Wildenbruch, Am Berg',
    },
    {
        id: '900220761',
        name: 'Wildenbruch, Schule',
    },
    {
        id: '900220765',
        name: 'Wildenbruch, Potsdamer Allee',
    },
    {
        id: '900435210',
        name: 'Altdöbern, Bahnhofstr.',
    },
    {
        id: '900220764',
        name: 'Wildenbruch, Pappelplatz',
    },
    {
        id: '900435186',
        name: 'Bahnsdorf (OSL), Siedlung',
    },
    {
        id: '900220785',
        name: 'Rieben, Ausbau',
    },
    {
        id: '900435173',
        name: 'Frauendorf, Lindenauer Str.',
    },
    {
        id: '900220918',
        name: 'Neuseddin, Heimvolkshochschule',
    },
    {
        id: '900220910',
        name: 'Neuseddin, Abzweig Pappelallee',
    },
    {
        id: '900220905',
        name: 'Neuseddin, Gewerbestr.',
    },
    {
        id: '900220904',
        name: 'Michendorf, Siedlung Six',
    },
    {
        id: '900220903',
        name: 'Michendorf, Bergheide',
    },
    {
        id: '900220786',
        name: 'Rieben, Dorf',
    },
    {
        id: '900220762',
        name: 'Wildenbruch, Waldheimstr.',
    },
    {
        id: '900220922',
        name: 'Seddin (PM), Schuppesiedlung',
    },
    {
        id: '900220741',
        name: 'Wilhelmshorst, An der Trift',
    },
    {
        id: '900220733',
        name: 'Langerwisch, Wildenbrucher Str.',
    },
    {
        id: '900220732',
        name: 'Langerwisch, Kirche',
    },
    {
        id: '900220746',
        name: 'Wilhelmshorst, Grüner Weg',
    },
    {
        id: '900220745',
        name: 'Wilhelmshorst, Schule',
    },
    {
        id: '900220744',
        name: 'Wilhelmshorst, An der Bahn',
    },
    {
        id: '900220743',
        name: 'Wilhelmshorst, Goetheplatz',
    },
    {
        id: '900220742',
        name: 'Wilhelmshorst, Heideweg',
    },
    {
        id: '900220595',
        name: 'Ferch, Mittelbusch',
    },
    {
        id: '900435215',
        name: 'Amandusdorf',
    },
    {
        id: '900220594',
        name: 'Ferch, Neue Scheune',
    },
    {
        id: '900220734',
        name: 'Langerwisch, Am Plan',
    },
    {
        id: '900220735',
        name: 'Langerwisch, Autobahn',
    },
    {
        id: '900220756',
        name: 'Michendorf, Luckenwalder Str.',
    },
    {
        id: '900220754',
        name: 'Michendorf, West',
    },
    {
        id: '900220752',
        name: 'Michendorf, Flottsteller Str.',
    },
    {
        id: '900220758',
        name: 'Michendorf, Meisenweg',
    },
    {
        id: '900220757',
        name: 'Michendorf, Falkenweg',
    },
    {
        id: '900220751',
        name: 'Michendorf, Kirche',
    },
    {
        id: '900220748',
        name: 'Michendorf, Caputher Weg',
    },
    {
        id: '900220749',
        name: 'Michendorf, Am Wolkenberg',
    },
    {
        id: '900220913',
        name: 'Neuseddin, Schule',
    },
    {
        id: '900220596',
        name: 'Ferch, Hohe Eichen',
    },
    {
        id: '900220944',
        name: 'Beelitz, Treuenbrietzener Str. 28',
    },
    {
        id: '900220995',
        name: 'Buchholz (bei Treuenbrietzen), Kirche',
    },
    {
        id: '900220941',
        name: 'Elsholz, Wasserwerk',
    },
    {
        id: '900220943',
        name: 'Elsholz, B2/Fischerstr.',
    },
    {
        id: '900220942',
        name: 'Elsholz, Kirche',
    },
    {
        id: '900435156',
        name: 'Bahnsdorf (OSL), Zollhaus',
    },
    {
        id: '900220962',
        name: 'Kanin',
    },
    {
        id: '900220963',
        name: 'Klaistow, Spargelhof',
    },
    {
        id: '900220969',
        name: 'Fichtenwalde, Am Lönsberg',
    },
    {
        id: '900435155',
        name: 'Allmosen, Kulturhaus',
    },
    {
        id: '900220945',
        name: 'Wittbrietzen, Dorfplatz',
    },
    {
        id: '900220950',
        name: 'Salzbrunn',
    },
    {
        id: '900220946',
        name: 'Wittbrietzen, Ausbau',
    },
    {
        id: '900435141',
        name: 'Großräschen, Rembrandtstr.',
    },
    {
        id: '900220226',
        name: 'Emstal',
    },
    {
        id: '900435143',
        name: 'Großkmehlen, Am Viehweg',
    },
    {
        id: '900435152',
        name: 'Saalhausen, Annahütter Str.',
    },
    {
        id: '900220954',
        name: 'Schäpe',
    },
    {
        id: '900220953',
        name: 'Reesdorf (PM), Ausbau',
    },
    {
        id: '900220952',
        name: 'Reesdorf (PM)',
    },
    {
        id: '900220924',
        name: 'Kähnsdorf, Dorf',
    },
    {
        id: '900220990',
        name: 'Schlunkendorf',
    },
    {
        id: '900220956',
        name: 'Birkhorst (PM)',
    },
    {
        id: '900220968',
        name: 'Fichtenwalde, Schmerberger Str.',
    },
    {
        id: '900220967',
        name: 'Fichtenwalde, Schule',
    },
    {
        id: '900220909',
        name: 'Neuseddin, Birkenweg',
    },
    {
        id: '900220939',
        name: 'Beelitz, Abzweig Gewerbepark',
    },
    {
        id: '900220928',
        name: 'Beelitz, Liebknechtpark',
    },
    {
        id: '900220933',
        name: 'Beelitz, Rathaus',
    },
    {
        id: '900220926',
        name: 'Beelitz, Jahnstr.',
    },
    {
        id: '900220978',
        name: 'Beelitz, Treuenbrietzener Str. 18',
    },
    {
        id: '900220994',
        name: 'Beelitz, Zum Bahnhof',
    },
    {
        id: '900220927',
        name: 'Beelitz, Lustgarten',
    },
    {
        id: '900220936',
        name: 'Beelitz, Kemmeter Weg',
    },
    {
        id: '900220930',
        name: 'Beelitz, Husarenallee',
    },
    {
        id: '900220931',
        name: 'Beelitz-Heilstätten, Parkinsonklinik',
    },
    {
        id: '900220966',
        name: 'Fichtenwalde, Mittelstr.',
    },
    {
        id: '900220965',
        name: 'Fichtenwalde, Brücker Weg',
    },
    {
        id: '900220814',
        name: 'Beelitz, Friedrichshof',
    },
    {
        id: '900220982',
        name: 'Beelitz, An der Kiesgrube',
    },
    {
        id: '900220806',
        name: 'Beelitz, Ambulatorium',
    },
    {
        id: '900220976',
        name: 'Beelitz, Finkenstr.',
    },
    {
        id: '900220975',
        name: 'Beelitz, Carl-von-Ossietzky-Str.',
    },
    {
        id: '900220937',
        name: 'Beelitz-Heilstätten, Reha-Kliniken',
    },
    {
        id: '900220981',
        name: 'Beelitz-Heilstätten, Bhf/Nord',
    },
    {
        id: '900435234',
        name: 'Bathow, Ortsmitte',
    },
    {
        id: '900216046',
        name: 'Wittenberge, Schwimmhalle',
    },
    {
        id: '900216050',
        name: 'Wittenberge, ZOB',
    },
    {
        id: '900216049',
        name: 'Wittenberge, Wilsnacker Str.',
    },
    {
        id: '900216047',
        name: 'Wittenberge, Süd',
    },
    {
        id: '900216039',
        name: 'Wittenberge, Lenzener Str.',
    },
    {
        id: '900216044',
        name: 'Wittenberge, Perleberger Str.',
    },
    {
        id: '900216043',
        name: 'Wittenberge, Nord',
    },
    {
        id: '900216042',
        name: 'Wittenberge, Ölmühle',
    },
    {
        id: '900216041',
        name: 'Wittenberge, Lüneburger Str.',
    },
    {
        id: '900216051',
        name: 'Wittmoor',
    },
    {
        id: '900216052',
        name: 'Wolfshagen (PR), Brücke',
    },
    {
        id: '900216053',
        name: 'Wolfshagen (PR), Lindenstr.',
    },
    {
        id: '900216063',
        name: 'Zarenthin',
    },
    {
        id: '900216062',
        name: 'Zapel',
    },
    {
        id: '900435281',
        name: 'Freienhufen, Bürgerhaus',
    },
    {
        id: '900435282',
        name: 'Drochow, Kinderheim',
    },
    {
        id: '900435289',
        name: 'Senftenberg, Knappenstr.',
    },
    {
        id: '900216055',
        name: 'Wootz',
    },
    {
        id: '900216054',
        name: 'Wolfshagen (PR), Schloss',
    },
    {
        id: '900216065',
        name: 'Zichtow, Abzweig',
    },
    {
        id: '900216014',
        name: 'Weisen, Bahnsiedlung',
    },
    {
        id: '900216019',
        name: 'Weitgendorf',
    },
    {
        id: '900216018',
        name: 'Weisen, Siedlung',
    },
    {
        id: '900216017',
        name: 'VERWAIST: Weisen, Post',
    },
    {
        id: '900216038',
        name: 'Wittenberge, Kyritzer Str.',
    },
    {
        id: '900216010',
        name: 'Warnsdorf',
    },
    {
        id: '900215993',
        name: 'Viesecke, Ladestr.',
    },
    {
        id: '900215991',
        name: 'Vettin',
    },
    {
        id: '900215990',
        name: 'Vehlow, Süd',
    },
    {
        id: '900435308',
        name: 'Guteborn, Siedlung',
    },
    {
        id: '900216020',
        name: 'Wentdorf',
    },
    {
        id: '900216022',
        name: 'Wittenberge, Akazienweg',
    },
    {
        id: '900216037',
        name: 'Wittenberge, Külzstr. II',
    },
    {
        id: '900216036',
        name: 'Wittenberge, Külzstr. I',
    },
    {
        id: '900216035',
        name: 'Wittenberge, Kaufland',
    },
    {
        id: '900216034',
        name: 'Wittenberge, Kastanienplatz',
    },
    {
        id: '900216033',
        name: 'Wittenberge, Goethestr.',
    },
    {
        id: '900216032',
        name: 'Wittenberge, Gehrenweg II',
    },
    {
        id: '900216031',
        name: 'Wittenberge, Fröbelstr.',
    },
    {
        id: '900216026',
        name: 'Wittenberge, Bhf',
    },
    {
        id: '900435304',
        name: 'Guteborn, Schule',
    },
    {
        id: '900216023',
        name: 'Wittenberge, Auguststr.',
    },
    {
        id: '900216064',
        name: 'Zernikow (PR)',
    },
    {
        id: '900216069',
        name: 'Wittenberge, Schwanenteich',
    },
    {
        id: '900435236',
        name: 'Belten',
    },
    {
        id: '900435246',
        name: 'Bolschwitz',
    },
    {
        id: '900435247',
        name: 'Brieske Ost, Feierabendheim',
    },
    {
        id: '900350444',
        name: 'Eberswalde, Waldcampus',
    },
    {
        id: '900435251',
        name: 'Senftenberg, Adolf-Hennecke-Str.',
    },
    {
        id: '900446112',
        name: 'Peitz, Martinstr.',
    },
    {
        id: '900435252',
        name: 'Senftenberg, Ahlbecker Str.',
    },
    {
        id: '900215697',
        name: 'Perleberg, Landkreis',
    },
    {
        id: '900435242',
        name: 'Bischdorf, L55',
    },
    {
        id: '900230011',
        name: 'Potsdam, Neuendorfer Str./Mendelssohn-Bartholdy-Str.',
    },
    {
        id: '900435241',
        name: 'Bischdorf, Feuerwehr',
    },
    {
        id: '900220591',
        name: 'Ferch, Kammeroder Weg',
    },
    {
        id: '900220590',
        name: 'Ferch, Potsdamer Platz',
    },
    {
        id: '900220588',
        name: 'Ferch, Strandbad',
    },
    {
        id: '900220586',
        name: 'Caputh, Zeltplatz Flottstelle',
    },
    {
        id: '900220580',
        name: 'Caputh, Flottstelle',
    },
    {
        id: '900220577',
        name: 'Caputh, Schule',
    },
    {
        id: '900350447',
        name: 'Finow, Gymnasium',
    },
    {
        id: '900321636',
        name: 'Neutrebbin, Denkmal',
    },
    {
        id: '900216071',
        name: 'Wittenberge, Gesundheitszentrum',
    },
    {
        id: '900215764',
        name: 'Perleberg, Jobcenter',
    },
    {
        id: '900215572',
        name: 'Legde, Abzw. Abbendorf',
    },
    {
        id: '900215382',
        name: 'Groß Pankow, Gartenweg',
    },
    {
        id: '900215373',
        name: 'Gerdshagen, Waldweg',
    },
    {
        id: '900435268',
        name: 'Senftenberg, Calauer Str.',
    },
    {
        id: '900260206',
        name: 'Großziethen, Stuthirtenweg',
    },
    {
        id: '900216073',
        name: 'Wittenberge, Margarethenstr.',
    },
    {
        id: '900216068',
        name: 'Wittenberge, Parkstr.',
    },
    {
        id: '900215845',
        name: 'Schmolde, Ausbau',
    },
    {
        id: '900216074',
        name: 'Wittenberge, Horning',
    },
    {
        id: '900216072',
        name: 'Wittenberge, Düsterweg II',
    },
    {
        id: '900215581',
        name: 'Lütkenwisch, Fähre',
    },
    {
        id: '900215627',
        name: 'Lenzen, Fähre',
    },
    {
        id: '900435263',
        name: 'Bronkow',
    },
    {
        id: '900435264',
        name: 'Buchwäldchen, Ortsmitte',
    },
    {
        id: '900216081',
        name: 'Wittenberge, Lenzener Chaussee',
    },
    {
        id: '900216028',
        name: 'Wittenberge, Düsterweg',
    },
    {
        id: '900215766',
        name: 'Perleberg, Thomas-Müntzer-Str.',
    },
    {
        id: '900215765',
        name: 'Perleberg, Lübzower Str.',
    },
    {
        id: '900215759',
        name: 'Pritzwalk, Am Stadion',
    },
    {
        id: '900215758',
        name: 'Pritzwalk, Herrmann-Lutz-Str.',
    },
    {
        id: '900215757',
        name: 'Pritzwalk, Nordstr.',
    },
    {
        id: '900215509',
        name: 'Kunow (PR), Dorf',
    },
    {
        id: '900435888',
        name: 'Vetschau, Busbahnhof',
    },
    {
        id: '900435601',
        name: 'Lübbenau, Altenheim',
    },
    {
        id: '900445791',
        name: 'Karlsfeld, Blunoer Str.',
    },
    {
        id: '900435597',
        name: 'Lipten, Hauptstr.',
    },
    {
        id: '900435600',
        name: 'Lübbenau, Alte Huttung/Spreeweltenbad',
    },
    {
        id: '900120021',
        name: 'Revaler Str.',
    },
    {
        id: '900435602',
        name: 'Lübbenau, Bhf',
    },
    {
        id: '900320124',
        name: 'Neuenhagen (b Berlin), Schule-Süd',
    },
    {
        id: '900036103',
        name: 'Wohlrabedamm Mitte',
    },
    {
        id: '900036102',
        name: 'Wohlrabedamm/Rohrdamm',
    },
    {
        id: '900435112',
        name: 'SeeCampus (NL)',
    },
    {
        id: '900024152',
        name: 'Hindemithplatz',
    },
    {
        id: '900320674',
        name: 'Fredersdorf (MOL), Kirche',
    },
    {
        id: '900435565',
        name: 'Groß Lübbenau, Kreuzung',
    },
    {
        id: '900245996',
        name: 'Jüterbog, Luckenwalder Berg',
    },
    {
        id: '900245693',
        name: 'Berkenbrück (TF), Str. nach Luckenwalde',
    },
    {
        id: '900245757',
        name: 'Dobbrikow, Hauptstr.',
    },
    {
        id: '900245708',
        name: 'Kummersdorf (TF), Lüdersdorfer Str.',
    },
    {
        id: '900245646',
        name: 'Dahme, Luckenwalder Str.',
    },
    {
        id: '900245276',
        name: 'Schönefeld (bei Jüterbog), Siedlung',
    },
    {
        id: '900210703',
        name: 'Pausin, Eichenweg',
    },
    {
        id: '900245344',
        name: 'Groß Machnow, Dorfstr.',
    },
    {
        id: '900245503',
        name: 'Kleinbeeren, Dorfstr.',
    },
    {
        id: '900435575',
        name: 'Groß Radden',
    },
    {
        id: '900210910',
        name: 'Brieselang, Friedhof',
    },
    {
        id: '900275312',
        name: 'Brandenburg, Oskar Campus',
    },
    {
        id: '900222218',
        name: 'Bardenitz, Mühlenberg',
    },
    {
        id: '900210702',
        name: 'Perwenitz, Grundschule',
    },
    {
        id: '900222187',
        name: 'Bad Belzig, Str. der Einheit',
    },
    {
        id: '900222072',
        name: 'Bad Belzig, Gewerbepark Seedoche',
    },
    {
        id: '900220385',
        name: 'Gollwitz (bei Jeserig), Am Schloss',
    },
    {
        id: '900220363',
        name: 'Gollwitz (bei Jeserig), Sommerweg',
    },
    {
        id: '900222154',
        name: 'Pechüle',
    },
    {
        id: '900435607',
        name: 'Lübbenau, Ehm-Welk-Str.',
    },
    {
        id: '900222104',
        name: 'Klausdorf (bei Jüterbog)',
    },
    {
        id: '900222082',
        name: 'Frohnsdorf, Lüdendorfer Str.',
    },
    {
        id: '900245325',
        name: 'Jüterbog, Betriebshof Reich',
    },
    {
        id: '900222189',
        name: 'Bad Belzig, Gewerbepark Süd',
    },
    {
        id: '900210418',
        name: 'Retzow (HVL), Abzweig/B5',
    },
    {
        id: '900210640',
        name: 'Dallgow-Döberitz, Fontanestr.',
    },
    {
        id: '900350399',
        name: 'Eiche, Süd',
    },
    {
        id: '900350398',
        name: 'Eiche, Kaufpark',
    },
    {
        id: '900435605',
        name: 'Lübbenau, Beethovenstr.',
    },
    {
        id: '900205728',
        name: 'Manker, Gemeindeverwaltung',
    },
    {
        id: '900311490',
        name: 'Müllrose, Seeallee',
    },
    {
        id: '900311113',
        name: 'Storkow, Irrlandia',
    },
    {
        id: '900311011',
        name: 'Rieplos, Feuerwehr',
    },
    {
        id: '900261493',
        name: 'Lübben, An der Kupka',
    },
    {
        id: '900245743',
        name: 'Löwendorf, Chausseestr.',
    },
    {
        id: '900245048',
        name: 'Groß Machnow, Str. der Einheit',
    },
    {
        id: '900350954',
        name: 'Blumberg (BAR), Liebigstr.',
    },
    {
        id: '900435564',
        name: 'Groß Lübbenau, Abzweig',
    },
    {
        id: '900203378',
        name: 'Hennigsdorf, Stauffenbergstr.',
    },
    {
        id: '900415520',
        name: 'Elsterwerda, Gründerzentrum',
    },
    {
        id: '900435513',
        name: 'Muckwar, Gasthaus',
    },
    {
        id: '900222246',
        name: 'Weitzgrund',
    },
    {
        id: '900435518',
        name: 'Gahlen',
    },
    {
        id: '900415696',
        name: 'Herzberg (Elster), Markt',
    },
    {
        id: '900435533',
        name: 'Gosda (bei Bronkow)',
    },
    {
        id: '900350354',
        name: 'Eberswalde, Nordend',
    },
    {
        id: '900205035',
        name: 'Dessow, Feuerwehr',
    },
    {
        id: '900435519',
        name: 'Gahlen, Abzweig',
    },
    {
        id: '900435528',
        name: 'Gollmitz, Bahnhofstr.',
    },
    {
        id: '900203340',
        name: 'Oranienburg, Am Heidering',
    },
    {
        id: '900205119',
        name: 'Köhnsbau',
    },
    {
        id: '900215108',
        name: 'Babekuhl',
    },
    {
        id: '900215107',
        name: 'Baarz',
    },
    {
        id: '900215094',
        name: 'Alt Pröttlin',
    },
    {
        id: '900215092',
        name: 'Alt Krüssow',
    },
    {
        id: '900215090',
        name: 'Abbendorf, Ausbau',
    },
    {
        id: '900215011',
        name: 'Falkenhagen (PR), Gewerbegebiet',
    },
    {
        id: '900205423',
        name: 'Mechow (OPR), B 5',
    },
    {
        id: '900205134',
        name: 'Mechow (OPR), Kreuzung',
    },
    {
        id: '900205132',
        name: 'Mechow (OPR), Ausbau',
    },
    {
        id: '900435537',
        name: 'Groß Jehser',
    },
    {
        id: '900435560',
        name: 'Ressen, Ortsmitte',
    },
    {
        id: '900220615',
        name: 'Werder (Havel), Am Gutshof',
    },
    {
        id: '900220639',
        name: 'Werder (Havel), Kesselgrundstr.',
    },
    {
        id: '900220636',
        name: 'Werder (Havel), Gluckstr.',
    },
    {
        id: '900220640',
        name: 'Werder (Havel), Phöbener Str.',
    },
    {
        id: '900220630',
        name: 'Werder (Havel), Lietzes Weg',
    },
    {
        id: '900435559',
        name: 'Boblitz, Str. nach Lübbenau',
    },
    {
        id: '900220610',
        name: 'Werder (Havel), Post',
    },
    {
        id: '900220009',
        name: 'Werder (Havel), Bhf',
    },
    {
        id: '900220655',
        name: 'Geltow, Baumgartenbrück',
    },
    {
        id: '900220653',
        name: 'Geltow, Ferdinand-Wimmer-Platz',
    },
    {
        id: '900220668',
        name: 'Werder (Havel), Glindower Eck',
    },
    {
        id: '900435555',
        name: 'Großräschen, Wilhelm-Pieck-Str.',
    },
    {
        id: '900220669',
        name: 'Glindow, Dr.-Wolff-Str.',
    },
    {
        id: '900435542',
        name: 'Groß Klessow',
    },
    {
        id: '900435548',
        name: 'Koßwig, Ortsmitte',
    },
    {
        id: '900435551',
        name: 'Koßwig, L54',
    },
    {
        id: '900435552',
        name: 'Boblitz, Str. nach Calau',
    },
    {
        id: '900435553',
        name: 'Ressen, Str. nach Lubochow',
    },
    {
        id: '900220683',
        name: 'Plessow, Plessower Eck',
    },
    {
        id: '900220682',
        name: 'Plessow, Morgenstücke/B1',
    },
    {
        id: '900222157',
        name: 'Plötzin, Villa Wolter',
    },
    {
        id: '900222156',
        name: 'Plötzin, Ortsmitte',
    },
    {
        id: '900204051',
        name: 'Germendorf, Betriebshof',
    },
    {
        id: '900435609',
        name: 'Lübbenau, Friedrich-Engels-Str./Sportplatz',
    },
    {
        id: '900007150',
        name: 'Gedenkstätte Berliner Mauer',
    },
    {
        id: '900140505',
        name: 'Friesickestr.',
    },
    {
        id: '900435681',
        name: 'Plieskendorf',
    },
    {
        id: '900003255',
        name: 'Clara-Jaschke-Str.',
    },
    {
        id: '900110009',
        name: 'U Eberswalder Str./Pappelallee',
    },
    {
        id: '900435698',
        name: 'Raddusch, Ortsmitte',
    },
    {
        id: '900100024',
        name: 'S+U Alexanderplatz/Dircksenstr.',
    },
    {
        id: '900100512',
        name: 'Monbijouplatz',
    },
    {
        id: '900435688',
        name: 'Pritzen, Ortsmitte',
    },
    {
        id: '900100026',
        name: 'S+U Alexanderplatz/Gontardstr.',
    },
    {
        id: '900140017',
        name: 'Gustav-Adolf-Str./Langhansstr.',
    },
    {
        id: '900435680',
        name: 'Peitzendorf',
    },
    {
        id: '900160021',
        name: 'S+U Lichtenberg/Gudrunstr.',
    },
    {
        id: '900435662',
        name: 'Neudöbern',
    },
    {
        id: '900110029',
        name: 'Karl-Lade-Str.',
    },
    {
        id: '900160510',
        name: 'Anton-Saefkow-Platz',
    },
    {
        id: '900151003',
        name: 'Zingster Str.',
    },
    {
        id: '900435671',
        name: 'Ogrosen',
    },
    {
        id: '900435672',
        name: 'Ogrosen, Abzweig',
    },
    {
        id: '900170701',
        name: 'S Marzahn',
    },
    {
        id: '900435720',
        name: 'Ragow (OSL), L49',
    },
    {
        id: '900110006',
        name: 'U Eberswalder Str.',
    },
    {
        id: '900435848',
        name: 'Senftenberg, B.-Brecht-Str.',
    },
    {
        id: '900435828',
        name: 'Seese Ost',
    },
    {
        id: '900435838',
        name: 'Senftenberg, Bernhard-Kellermann-Str.',
    },
    {
        id: '900435839',
        name: 'Senftenberg, B.-Brecht-Str./Thälmannstr.',
    },
    {
        id: '900435840',
        name: 'Senftenberg, Erlebnisbad',
    },
    {
        id: '900435843',
        name: 'Senftenberg, Hörlitzer Str.',
    },
    {
        id: '900435849',
        name: 'Senftenberg, W.-Rathenau Schule',
    },
    {
        id: '900435850',
        name: 'Senftenberg, Puschkinstr.',
    },
    {
        id: '900435860',
        name: 'Settinchen',
    },
    {
        id: '900435861',
        name: 'Stradow',
    },
    {
        id: '900435873',
        name: 'Tornitz',
    },
    {
        id: '900435886',
        name: 'Vetschau, Beltener Weg',
    },
    {
        id: '900435817',
        name: 'Schöllnitz',
    },
    {
        id: '900435804',
        name: 'Lübbenau, Lehde',
    },
    {
        id: '900435777',
        name: 'Saßleben, Dorfstr.',
    },
    {
        id: '900435721',
        name: 'Ragow (OSL), Ortsmitte',
    },
    {
        id: '900435722',
        name: 'Ragow (OSL), Umspannwerk',
    },
    {
        id: '900435730',
        name: 'Ranzow, Ortsmitte',
    },
    {
        id: '900435731',
        name: 'Reddern, Gasthaus',
    },
    {
        id: '900435752',
        name: 'Reuden',
    },
    {
        id: '900435768',
        name: 'Rutzkau',
    },
    {
        id: '900435769',
        name: 'Saadow',
    },
    {
        id: '900435775',
        name: 'Säritz, Ortsmitte',
    },
    {
        id: '900132014',
        name: 'Rosenthal Nord',
    },
    {
        id: '900110505',
        name: 'Schwedter Str.',
    },
    {
        id: '900435611',
        name: 'Lübbenau, Karl-Marx-Str./Kampe',
    },
    {
        id: '900130520',
        name: 'Mendelstr.',
    },
    {
        id: '900180014',
        name: 'Müggelbergallee',
    },
    {
        id: '900435619',
        name: 'Lübbenau, Robert-Koch-Str.',
    },
    {
        id: '900435620',
        name: 'Lübbenau, Rudolf-Breitscheid-Str.',
    },
    {
        id: '900435622',
        name: 'Lübbenau, Str. des Friedens',
    },
    {
        id: '900185701',
        name: 'Alt-Schmöckwitz',
    },
    {
        id: '900435623',
        name: 'Lübbenau, Werner-Seelenbinder-Str.',
    },
    {
        id: '900435643',
        name: 'Lug, Feuerwehr',
    },
    {
        id: '900435624',
        name: 'Lübbenau, Zeltplatz',
    },
    {
        id: '900182005',
        name: 'Altes Wasserwerk',
    },
    {
        id: '900120816',
        name: 'Bersarinplatz',
    },
    {
        id: '900186002',
        name: 'Wassersportallee',
    },
    {
        id: '900435618',
        name: 'Lübbenau, Poststr.',
    },
    {
        id: '900435617',
        name: 'Lübbenau, R.-Koch-Str./Medizinisches Zentrum',
    },
    {
        id: '900435612',
        name: 'Lübbenau, Karl-Marx-Str./Paul-Fahlisch-Str.',
    },
    {
        id: '900435613',
        name: 'Lübbenau, Karl-Marx-Str./Stottoff',
    },
    {
        id: '900161512',
        name: 'U Friedrichsfelde',
    },
    {
        id: '900205593',
        name: 'Birkenhain (OPR)',
    },
    {
        id: '900341272',
        name: 'Wilmersdorf (bei Angermünde), Mitte',
    },
    {
        id: '900321436',
        name: 'Gorgast, Dorf',
    },
    {
        id: '900220496',
        name: 'Töplitz, Feuerwehr',
    },
    {
        id: '900360044',
        name: 'Frankfurt (Oder), Gertraudenkirche',
    },
    {
        id: '900275413',
        name: 'Brandenburg, Schienenweg',
    },
    {
        id: '900275412',
        name: 'Brandenburg, Regattastrecke',
    },
    {
        id: '900435614',
        name: 'Lübbenau, Kaufland',
    },
    {
        id: '900435615',
        name: 'Lübbenau, Kraftwerk',
    },
    {
        id: '900083305',
        name: 'Hiltrud-Dudek-Weg',
    },
    {
        id: '900435637',
        name: 'Luckaitz',
    },
    {
        id: '900100038',
        name: 'Am Kupfergraben',
    },
    {
        id: '900435656',
        name: 'Missen, Ortsmitte',
    },
    {
        id: '900183003',
        name: 'Rahnsdorf/Waldschänke',
    },
    {
        id: '900182505',
        name: 'Marktplatz Friedrichshagen',
    },
    {
        id: '900182004',
        name: 'Müggelseedamm/Bölschestr.',
    },
    {
        id: '900180009',
        name: 'Bahnhofstr./Seelenbinderstr.',
    },
    {
        id: '900435655',
        name: 'Missen, Gahlener Weg',
    },
    {
        id: '900180716',
        name: 'Hirtestr.',
    },
    {
        id: '900140713',
        name: 'Betriebshof Weißensee',
    },
    {
        id: '900130522',
        name: 'Würtzstr.',
    },
    {
        id: '900435646',
        name: 'Lug',
    },
    {
        id: '900181007',
        name: 'Siemensstr./Nalepastr.',
    },
    {
        id: '900100541',
        name: 'Georgenstr./Am Kupfergraben',
    },
    {
        id: '900110500',
        name: 'Humannplatz',
    },
    {
        id: '900100023',
        name: 'U Rosenthaler Platz',
    },
    {
        id: '900435645',
        name: 'Lug, Waldfrieden',
    },
    {
        id: '900215110',
        name: 'Bad Wilsnack, Bhf',
    },
    {
        id: '900215372',
        name: 'Gumtow, Kirche',
    },
    {
        id: '900215399',
        name: 'Hasenwinkel, Dorf',
    },
    {
        id: '900215396',
        name: 'Halenbeck, Abzweig',
    },
    {
        id: '900435466',
        name: 'Calau, Waldstr.',
    },
    {
        id: '900215381',
        name: 'Groß Pankow, Augenklinik',
    },
    {
        id: '900215371',
        name: 'Gumtow, K.-Liebknecht-Str.',
    },
    {
        id: '900215363',
        name: 'Gülitz, I',
    },
    {
        id: '900215369',
        name: 'Gumtow, Bhf',
    },
    {
        id: '900215367',
        name: 'Gulow, III',
    },
    {
        id: '900215366',
        name: 'Gulow, II',
    },
    {
        id: '900215401',
        name: 'Hasenwinkel, Wendestelle',
    },
    {
        id: '900215403',
        name: 'Heidelberg (PR)',
    },
    {
        id: '900215430',
        name: 'Jagel',
    },
    {
        id: '900215415',
        name: 'Hülsebeck, Dorf',
    },
    {
        id: '900215414',
        name: 'Hülsebeck, Ausbau',
    },
    {
        id: '900215413',
        name: 'Horst (bei Wolfshagen)',
    },
    {
        id: '900215412',
        name: 'Hoppenrade (PR)',
    },
    {
        id: '900435462',
        name: 'Calau, Finanzamt',
    },
    {
        id: '900215410',
        name: 'Hohenvier, Abzweig',
    },
    {
        id: '900215407',
        name: 'Helle',
    },
    {
        id: '900215406',
        name: 'Hellburg',
    },
    {
        id: '900215405',
        name: 'Heinshof',
    },
    {
        id: '900215362',
        name: 'Guhlsdorf',
    },
    {
        id: '900215434',
        name: 'Jungfernkrug, I',
    },
    {
        id: '900215330',
        name: 'Gramzow (PR), Dorf',
    },
    {
        id: '900215340',
        name: 'Groß Buchholz',
    },
    {
        id: '900215333',
        name: 'Granzow, Gutshof',
    },
    {
        id: '900215332',
        name: 'Granzow, Dorf',
    },
    {
        id: '900215331',
        name: 'Gramzow (PR), Mühle',
    },
    {
        id: '900215326',
        name: 'Grabow (bei Buckow)',
    },
    {
        id: '900215361',
        name: 'Grube',
    },
    {
        id: '900435490',
        name: 'Buchwalde, Dr.-Lehmann-Str.',
    },
    {
        id: '900215323',
        name: 'Glöwen, Gaststätte',
    },
    {
        id: '900215321',
        name: 'Glövzin',
    },
    {
        id: '900215319',
        name: 'Giesensdorf (PR), Melioration',
    },
    {
        id: '900215342',
        name: 'Groß Langerwisch, Dorf',
    },
    {
        id: '900215344',
        name: 'Groß Leppin',
    },
    {
        id: '900215345',
        name: 'Groß Linde',
    },
    {
        id: '900215360',
        name: 'Groß Woltersdorf (PR)',
    },
    {
        id: '900215358',
        name: 'Groß Werzin, Dorf',
    },
    {
        id: '900215356',
        name: 'Groß Welle',
    },
    {
        id: '900215355',
        name: 'Groß Warnow, Schule',
    },
    {
        id: '900435473',
        name: 'Eisdorf',
    },
    {
        id: '900215353',
        name: 'Groß Warnow, Dorf',
    },
    {
        id: '900215352',
        name: 'Groß Warnow, B 5',
    },
    {
        id: '900435489',
        name: 'Buchwalde, Strand',
    },
    {
        id: '900215348',
        name: 'Groß Pankow, Alte Schule',
    },
    {
        id: '900215318',
        name: 'Giesensdorf (PR), Kirche',
    },
    {
        id: '900435458',
        name: 'Cabel',
    },
    {
        id: '900215492',
        name: 'Kolrep, Dorf',
    },
    {
        id: '900215488',
        name: 'Klockow (PR)',
    },
    {
        id: '900215487',
        name: 'Kletzke, II',
    },
    {
        id: '900215486',
        name: 'Kletzke, I',
    },
    {
        id: '900215483',
        name: 'Kleinow (PR), Ziegelei',
    },
    {
        id: '900435460',
        name: 'Calau, Busbahnhof',
    },
    {
        id: '900215482',
        name: 'Kleinow (PR), Schule',
    },
    {
        id: '900215481',
        name: 'Kleinow (PR), Dorf',
    },
    {
        id: '900215480',
        name: 'Kleinow (PR), B 5',
    },
    {
        id: '900215479',
        name: 'Klein Woltersdorf',
    },
    {
        id: '900215494',
        name: 'Krampfer',
    },
    {
        id: '900215495',
        name: 'Krams',
    },
    {
        id: '900215496',
        name: 'Krempendorf',
    },
    {
        id: '900215508',
        name: 'Kunow (PR), B 5',
    },
    {
        id: '900435445',
        name: 'Senftenberg, Tierpark',
    },
    {
        id: '900215506',
        name: 'Kuhblank, Dorf',
    },
    {
        id: '900215504',
        name: 'Kuhblank, Bhf',
    },
    {
        id: '900215500',
        name: 'Krumbeck',
    },
    {
        id: '900215499',
        name: 'Kribbe',
    },
    {
        id: '900215498',
        name: 'Kreuzburg, Dorf',
    },
    {
        id: '900215497',
        name: 'Kreuzburg, Abzweig',
    },
    {
        id: '900215449',
        name: 'Karstädt (PR), Postliner Str.',
    },
    {
        id: '900215460',
        name: 'Kehrberg, Dorf',
    },
    {
        id: '900215459',
        name: 'Karwe (PR), Abzweig',
    },
    {
        id: '900215458',
        name: 'Karthan, II',
    },
    {
        id: '900215457',
        name: 'Karthan, I',
    },
    {
        id: '900215455',
        name: 'Karstädt (PR), Bhf',
    },
    {
        id: '900215454',
        name: 'Karstädt (PR), B 5',
    },
    {
        id: '900435461',
        name: 'Calau, Ecke Mühlenstr.',
    },
    {
        id: '900215452',
        name: 'Kammermark, Dorf',
    },
    {
        id: '900215451',
        name: 'Kammermark, Ausbau',
    },
    {
        id: '900215462',
        name: 'Kemnitz (PR), Ausbau',
    },
    {
        id: '900215471',
        name: 'Klein Leppin',
    },
    {
        id: '900215469',
        name: 'Klein Gottschow',
    },
    {
        id: '900215468',
        name: 'Klein Breese',
    },
    {
        id: '900215467',
        name: 'Kleeste',
    },
    {
        id: '900215466',
        name: 'Kietz (PR), Schmiede',
    },
    {
        id: '900215465',
        name: 'Kietz (PR), Sand',
    },
    {
        id: '900215464',
        name: 'Kietz (PR), Dorfmitte',
    },
    {
        id: '900215463',
        name: 'Kemnitz (PR), Kirche',
    },
    {
        id: '900215317',
        name: 'Giesensdorf (PR), Ausbau',
    },
    {
        id: '900435512',
        name: 'Göritz (OSL), L49',
    },
    {
        id: '900215144',
        name: 'Birkholz (PR)',
    },
    {
        id: '900215151',
        name: 'Boberow',
    },
    {
        id: '900215146',
        name: 'Blüthen, II',
    },
    {
        id: '900215145',
        name: 'Blüthen, I',
    },
    {
        id: '900215143',
        name: 'Birkenfelde',
    },
    {
        id: '900215138',
        name: 'Bernheide, Dorf',
    },
    {
        id: '900215142',
        name: 'Beveringen, Dorf',
    },
    {
        id: '900215140',
        name: 'Beveringen, Abzweig',
    },
    {
        id: '900215139',
        name: 'Besandten',
    },
    {
        id: '900215155',
        name: 'Boddin, Wendestelle',
    },
    {
        id: '900215156',
        name: 'Bölzke, Abzweig',
    },
    {
        id: '900215157',
        name: 'Bölzke, Bhf',
    },
    {
        id: '900215176',
        name: 'Brüsenhagen, Dorf',
    },
    {
        id: '900435499',
        name: 'Meuro, Mühle',
    },
    {
        id: '900215173',
        name: 'Brügge, Dorf',
    },
    {
        id: '900215167',
        name: 'Bresch, Dorf',
    },
    {
        id: '900215166',
        name: 'Breitenfeld',
    },
    {
        id: '900215165',
        name: 'Breetz',
    },
    {
        id: '900215162',
        name: 'Breese, II',
    },
    {
        id: '900215161',
        name: 'Breese, I',
    },
    {
        id: '900215159',
        name: 'Bootz',
    },
    {
        id: '900215137',
        name: 'Bernheide, Abzweig',
    },
    {
        id: '900215179',
        name: 'Buchholz (PR), B 103',
    },
    {
        id: '900435507',
        name: 'Lübbenau, Neckarsulmer Str.',
    },
    {
        id: '900215123',
        name: 'Bärensprung, II',
    },
    {
        id: '900215121',
        name: 'Bälow, Gaststätte',
    },
    {
        id: '900215120',
        name: 'Bälow, Ausbau',
    },
    {
        id: '900215119',
        name: 'Baek, Schule',
    },
    {
        id: '900435508',
        name: 'Göritz (OSL), Ortsmitte',
    },
    {
        id: '900215115',
        name: 'Bad Wilsnack, Therme',
    },
    {
        id: '900215114',
        name: 'Bad Wilsnack, Schule',
    },
    {
        id: '900215113',
        name: 'Bad Wilsnack, Rathaus',
    },
    {
        id: '900435510',
        name: 'Muckwar, Ranzower Str.',
    },
    {
        id: '900215124',
        name: 'Beckenthin',
    },
    {
        id: '900215127',
        name: 'Bentwisch, I',
    },
    {
        id: '900215136',
        name: 'Bergsoll, Ziegelei',
    },
    {
        id: '900435504',
        name: 'Hermsdorf, Ruhlander Str.',
    },
    {
        id: '900215134',
        name: 'Bergsoll, B 103',
    },
    {
        id: '900215132',
        name: 'Berge (PR), Schule',
    },
    {
        id: '900215131',
        name: 'Berge (PR), Pirower Str.',
    },
    {
        id: '900215130',
        name: 'Berge (PR), Anger',
    },
    {
        id: '900435505',
        name: 'Suschow Süd, Stradower Weg',
    },
    {
        id: '900215129',
        name: 'Bentwisch, Waldfrieden',
    },
    {
        id: '900215128',
        name: 'Bentwisch, II',
    },
    {
        id: '900435497',
        name: 'Mlode',
    },
    {
        id: '900215283',
        name: 'Ferbitz',
    },
    {
        id: '900215300',
        name: 'Gaarz',
    },
    {
        id: '900215289',
        name: 'Friedheim, Dorf',
    },
    {
        id: '900215288',
        name: 'Friedheim, Wendestelle',
    },
    {
        id: '900215286',
        name: 'Frehne, Kirche',
    },
    {
        id: '900215285',
        name: 'Frehne, Dorf',
    },
    {
        id: '900215280',
        name: 'Falkenhagen (PR), Dorf',
    },
    {
        id: '900215240',
        name: 'Düpow, II',
    },
    {
        id: '900215263',
        name: 'Ellershagen, I',
    },
    {
        id: '900215261',
        name: 'Eldenburg',
    },
    {
        id: '900215260',
        name: 'Eggersdorf (bei Pritzwalk)',
    },
    {
        id: '900435491',
        name: 'Lübbenau, Schlossbezirk',
    },
    {
        id: '900215302',
        name: 'Gadow (PR), Dorf',
    },
    {
        id: '900215304',
        name: 'Gandow',
    },
    {
        id: '900215306',
        name: 'Garlin, B 5',
    },
    {
        id: '900215316',
        name: 'Giesenhagen, Dorf',
    },
    {
        id: '900215313',
        name: 'Gerdshagen, Dorf',
    },
    {
        id: '900215312',
        name: 'Gerdshagen, Ausbau',
    },
    {
        id: '900215310',
        name: 'Garz (PR), I',
    },
    {
        id: '900215309',
        name: 'Garz (PR), Ausbau',
    },
    {
        id: '900215308',
        name: 'Garlin, Dorf I',
    },
    {
        id: '900215307',
        name: 'Garlin, Dorf',
    },
    {
        id: '900215241',
        name: 'Demerthin, Bau',
    },
    {
        id: '900215239',
        name: 'Düpow, I',
    },
    {
        id: '900215181',
        name: 'Buckow (PR), Ausbau',
    },
    {
        id: '900215190',
        name: 'Cumlosen, Neubau',
    },
    {
        id: '900215224',
        name: 'Dannenwalde (PR), Gaststätte',
    },
    {
        id: '900215221',
        name: 'Dallmin, Mitte',
    },
    {
        id: '900215216',
        name: 'Dallmin, I',
    },
    {
        id: '900215191',
        name: 'Burow, II',
    },
    {
        id: '900215189',
        name: 'Cumlosen, Mühle',
    },
    {
        id: '900435493',
        name: 'Mlode, Kirschallee',
    },
    {
        id: '900215186',
        name: 'Burow, I',
    },
    {
        id: '900435496',
        name: 'Kittlitz, Ort',
    },
    {
        id: '900215185',
        name: 'Burghagen',
    },
    {
        id: '900215182',
        name: 'Buckow (PR), Dorf',
    },
    {
        id: '900215227',
        name: 'Dannhof',
    },
    {
        id: '900215238',
        name: 'Düpow, B 5',
    },
    {
        id: '900215236',
        name: 'Döllen, Dorf',
    },
    {
        id: '900215234',
        name: 'Dergenthin, II',
    },
    {
        id: '900215233',
        name: 'Dergenthin, I',
    },
    {
        id: '900215232',
        name: 'Dergenthin, Bhf',
    },
    {
        id: '900215231',
        name: 'Demerthin, Schule',
    },
    {
        id: '900215230',
        name: 'Demerthin, B 5',
    },
    {
        id: '900215228',
        name: 'Dargardt',
    },
    {
        id: '900220053',
        name: 'Güterfelde, Kirchplatz',
    },
    {
        id: '900435140',
        name: 'Lauchhammer Ost, Krankenhaus',
    },
    {
        id: '900220050',
        name: 'Güterfelde, Kienwerder',
    },
    {
        id: '900321304',
        name: 'Alt Zeschdorf, Abzweig Hohenjesar',
    },
    {
        id: '900321311',
        name: 'Altlangsow, Ausbau',
    },
    {
        id: '900321309',
        name: 'Altbleyen',
    },
    {
        id: '900321307',
        name: 'Alt Zeschdorf, Schule',
    },
    {
        id: '900321306',
        name: 'Alt Zeschdorf, Dorf',
    },
    {
        id: '900321305',
        name: 'Alt Zeschdorf, Ausbau',
    },
    {
        id: '900321312',
        name: 'Altlangsow, Dorf',
    },
    {
        id: '900321303',
        name: 'Alt Tucheband',
    },
    {
        id: '900321118',
        name: 'Neubarnim, Kreuzung',
    },
    {
        id: '900320999',
        name: 'Strausberg, Torfhaus',
    },
    {
        id: '900320998',
        name: 'Hennickendorf (MOL), Wachtelberg',
    },
    {
        id: '900321343',
        name: 'Buschdorf, Brücke',
    },
    {
        id: '900435007',
        name: 'Senftenberg, Universität',
    },
    {
        id: '900321381',
        name: 'Diedersdorf (MOL), Dorf',
    },
    {
        id: '900321380',
        name: 'Diedersdorf (MOL), Ausbau',
    },
    {
        id: '900321344',
        name: 'Buschdorf, Kirche',
    },
    {
        id: '900321313',
        name: 'Altlangsow, Chausseestr.',
    },
    {
        id: '900321342',
        name: 'Buschdorf, Baiersberg',
    },
    {
        id: '900321341',
        name: 'Bleyen, Kuhbrücke',
    },
    {
        id: '900321340',
        name: 'Bärwinkel',
    },
    {
        id: '900435011',
        name: 'Großräschen, Freienhufener Str.',
    },
    {
        id: '900435013',
        name: 'Saalhausen, B 96',
    },
    {
        id: '900320985',
        name: 'Wilkendorf, Dorf',
    },
    {
        id: '900320900',
        name: 'Altlandsberg, Markt',
    },
    {
        id: '900320903',
        name: 'Altlandsberg, Berliner Allee',
    },
    {
        id: '900320902',
        name: 'Altlandsberg, Vorstadt',
    },
    {
        id: '900435027',
        name: 'Großräschen, Neue Str.',
    },
    {
        id: '900320901',
        name: 'Altlandsberg, Vorwerk',
    },
    {
        id: '900320899',
        name: 'Rehfelde, Schule',
    },
    {
        id: '900320980',
        name: 'Wesendahl',
    },
    {
        id: '900320896',
        name: 'Rehfelde, Dorf',
    },
    {
        id: '900320887',
        name: 'Lichtenow, Heidekrug',
    },
    {
        id: '900320885',
        name: 'Gladowshöhe',
    },
    {
        id: '900320880',
        name: 'Hohenstein',
    },
    {
        id: '900435016',
        name: 'Senftenberg, Ritterstr.',
    },
    {
        id: '900435015',
        name: 'Senftenberg, Feuerwehrdepot',
    },
    {
        id: '900320907',
        name: 'Altlandsberg, Buchholzer Allee',
    },
    {
        id: '900435014',
        name: 'Drochow, Wendeplatz',
    },
    {
        id: '900320971',
        name: 'Wegendorf, Abzweig',
    },
    {
        id: '900320970',
        name: 'Wegendorf, Kornblumenstr.',
    },
    {
        id: '900320960',
        name: 'Hennickendorf (MOL), Dorf',
    },
    {
        id: '900320951',
        name: 'Buchholz (MOL), Dorf',
    },
    {
        id: '900320915',
        name: 'Altlandsberg, Hönower Chaussee',
    },
    {
        id: '900320910',
        name: 'Pritzhagen, Abzweig',
    },
    {
        id: '900320908',
        name: 'Altlandsberg, Werneuchener Weg',
    },
    {
        id: '900321382',
        name: 'Diedersdorf (MOL), Waldsiedlung',
    },
    {
        id: '900321383',
        name: 'Döbberin, Dorf',
    },
    {
        id: '900321384',
        name: 'Döbberin, Schäferei',
    },
    {
        id: '900321439',
        name: 'Görlsdorf (MOL)',
    },
    {
        id: '900321443',
        name: 'Gusow, Hauptstr.',
    },
    {
        id: '900321442',
        name: 'Seelow-Gusow, Bhf',
    },
    {
        id: '900321441',
        name: 'Groß Neuendorf, Dorf',
    },
    {
        id: '900321438',
        name: 'Gorgast, Schulbushaltestelle',
    },
    {
        id: '900321433',
        name: 'Golzow (MOL), Kreuzung',
    },
    {
        id: '900321437',
        name: 'Gorgast, Schäferei',
    },
    {
        id: '900321435',
        name: 'Gorgast, Bhf',
    },
    {
        id: '900435003',
        name: 'Sedlitz, Bhf',
    },
    {
        id: '900321434',
        name: 'Gorgast, Abzweig Schäferei',
    },
    {
        id: '900321470',
        name: 'Hackenow',
    },
    {
        id: '900321471',
        name: 'Hackenow, Hackenower Weg',
    },
    {
        id: '900321513',
        name: 'Kienitz, Abzweig Amselweg',
    },
    {
        id: '900321512',
        name: 'Kiehnwerder, Kreuzung',
    },
    {
        id: '900321511',
        name: 'Kiehnwerder, Dorf',
    },
    {
        id: '900321510',
        name: 'Karlshof (bei Gusow)',
    },
    {
        id: '900260442',
        name: 'Ellerborn',
    },
    {
        id: '900321493',
        name: 'Jahnsfelde, Kirche',
    },
    {
        id: '900321492',
        name: 'Jahnsfelde, Grube',
    },
    {
        id: '900261529',
        name: 'Lübben, Schillerstr.',
    },
    {
        id: '900321472',
        name: 'Hathenow',
    },
    {
        id: '900435004',
        name: 'Bahnsdorf (OSL), Gasthaus',
    },
    {
        id: '900321420',
        name: 'Genschmar, Dorf',
    },
    {
        id: '900321406',
        name: 'Friedrichsaue (MOL)',
    },
    {
        id: '900321404',
        name: 'Friedersdorf (MOL), Dorf',
    },
    {
        id: '900321403',
        name: 'Falkenhagen (MOL), See',
    },
    {
        id: '900321432',
        name: 'Golzow (MOL), Genschmarer Str.',
    },
    {
        id: '900321401',
        name: 'Falkenhagen (MOL), Dorf',
    },
    {
        id: '900321400',
        name: 'Falkenhagen (MOL), Betonstr.',
    },
    {
        id: '900321387',
        name: 'Dolgelin, Schule',
    },
    {
        id: '900321386',
        name: 'Dolgelin, Dorf',
    },
    {
        id: '900435006',
        name: 'Dörrwalde',
    },
    {
        id: '900321421',
        name: 'Georgenthal',
    },
    {
        id: '900321422',
        name: 'Georgenthal, Post',
    },
    {
        id: '900321431',
        name: 'Golzow (MOL), Dorf',
    },
    {
        id: '900321430',
        name: 'Golzow (MOL), Bhf',
    },
    {
        id: '900321429',
        name: 'Golzow (MOL), Baggersiedlung',
    },
    {
        id: '900321428',
        name: 'Golzow (MOL), Friedrichsaue Ausbau',
    },
    {
        id: '900321427',
        name: 'Gieshof, Neubau',
    },
    {
        id: '900321426',
        name: 'Gieshof, Mitte',
    },
    {
        id: '900321424',
        name: 'Gieshof, Friedhof',
    },
    {
        id: '900321423',
        name: 'Gieshof, Ausbau',
    },
    {
        id: '900320870',
        name: 'Strausberg, Steuerhaus',
    },
    {
        id: '900320640',
        name: 'Hennickendorf (MOL), Rehfelder Str.',
    },
    {
        id: '900320643',
        name: 'Eggersdorf (Strausberg), Goethestr.',
    },
    {
        id: '900320642',
        name: 'Petershagen (b. Berlin), C.-Zetkin-Str.',
    },
    {
        id: '900320641',
        name: 'Hennickendorf (MOL), Kirche',
    },
    {
        id: '900320639',
        name: 'Petershagen (b. Berlin), Dorfstr.',
    },
    {
        id: '900435043',
        name: 'Großkoschen, Gasthaus',
    },
    {
        id: '900320638',
        name: 'Petershagen (b. Berlin), W.-Pieck-Str./Schule',
    },
    {
        id: '900320635',
        name: 'Petershagen (b. Berlin), Karl-Liebknecht-Str.',
    },
    {
        id: '900320631',
        name: 'Petershagen (b. Berlin), Bruchmühler Str.',
    },
    {
        id: '900320645',
        name: 'Petershagen (b. Berlin), Hubertusallee',
    },
    {
        id: '900320647',
        name: 'Petershagen (b. Berlin), Müllerstr.',
    },
    {
        id: '900320672',
        name: 'Fredersdorf (MOL), Lortzingstr.',
    },
    {
        id: '900320670',
        name: 'Fredersdorf (MOL), Zeppelinstr.',
    },
    {
        id: '900320659',
        name: 'Hennickendorf (MOL), Einkaufszentrum',
    },
    {
        id: '900320655',
        name: 'Vogelsdorf, Multicenter',
    },
    {
        id: '900320654',
        name: 'Vogelsdorf, Gewerbegebiet',
    },
    {
        id: '900320653',
        name: 'Vogelsdorf, Fredersdorfer Str.',
    },
    {
        id: '900320629',
        name: 'Eggersdorf (Strausberg), Güntherallee',
    },
    {
        id: '900320673',
        name: 'Fredersdorf (MOL), Röntgenstr.',
    },
    {
        id: '900320552',
        name: 'Strausberg, Hohensteiner Chaussee',
    },
    {
        id: '900320562',
        name: 'Strausberg, Hennickendorfer Chaussee',
    },
    {
        id: '900320561',
        name: 'Strausberg, Neue Mühle',
    },
    {
        id: '900320555',
        name: 'Strausberg, Gartenstadt',
    },
    {
        id: '900435046',
        name: 'Brieske Ost, Markt',
    },
    {
        id: '900320553',
        name: 'Strausberg, Otto-Grotewohl-Ring',
    },
    {
        id: '900320525',
        name: 'Hönow, Auf der Höhe',
    },
    {
        id: '900320524',
        name: 'Hönow, Am Grünzug',
    },
    {
        id: '900435047',
        name: 'Brieske Ost, Hotel Marga',
    },
    {
        id: '900320520',
        name: 'Hönow, Ginsterstr.',
    },
    {
        id: '900320563',
        name: 'Strausberg, Hegermühlenstr.',
    },
    {
        id: '900320600',
        name: 'Eggersdorf (Strausberg), Kirche',
    },
    {
        id: '900320628',
        name: 'Eggersdorf (Strausberg), Georgstr.',
    },
    {
        id: '900320610',
        name: 'Petershagen (b. Berlin), Hermannstr.',
    },
    {
        id: '900435045',
        name: 'Jannowitz, Am Sportplatz',
    },
    {
        id: '900320602',
        name: 'Eggersdorf (Strausberg), Platanenallee',
    },
    {
        id: '900320865',
        name: 'Diedersdorf (MOL), Pappelring',
    },
    {
        id: '900320835',
        name: 'Reichenberg, Kreuzung',
    },
    {
        id: '900320843',
        name: 'Hasenholz, Abzweig',
    },
    {
        id: '900320841',
        name: 'Hasenholz, Dorf',
    },
    {
        id: '900320840',
        name: 'Ringenwalde (MOL), Dorf',
    },
    {
        id: '900320836',
        name: 'Reichenberg, Schule',
    },
    {
        id: '900320830',
        name: 'Bollersdorf, Dorf',
    },
    {
        id: '900320833',
        name: 'Karlsdorf (MOL), Dorf',
    },
    {
        id: '900320832',
        name: 'Bollersdorf, Kreuzung',
    },
    {
        id: '900435036',
        name: 'Schipkau, Poliklinik',
    },
    {
        id: '900320831',
        name: 'Bollersdorf, Höhe',
    },
    {
        id: '900320846',
        name: 'Pritzhagen, Dorf',
    },
    {
        id: '900320847',
        name: 'Werder (bei Rehfelde), Dorf',
    },
    {
        id: '900320848',
        name: 'Pritzhagen, Forsthaus',
    },
    {
        id: '900320861',
        name: 'Ringenwalde (MOL), Forsthaus',
    },
    {
        id: '900320860',
        name: 'Strausberg, Treuenhof',
    },
    {
        id: '900320859',
        name: 'Zinndorf',
    },
    {
        id: '900320856',
        name: 'Garzin, Gärtnerei',
    },
    {
        id: '900320855',
        name: 'Garzin, Dorfstr.',
    },
    {
        id: '900320853',
        name: 'Garzau, Kita',
    },
    {
        id: '900320852',
        name: 'Garzau, Dorfstr.',
    },
    {
        id: '900320850',
        name: 'Garzin, Abzweig Bergschäferei',
    },
    {
        id: '900435040',
        name: 'Buchwalde, Kleinkoschener Str.',
    },
    {
        id: '900320685',
        name: 'Petershagen (b. Berlin), Rathausstr.',
    },
    {
        id: '900320683',
        name: 'Fredersdorf (MOL), Beethovenstr.',
    },
    {
        id: '900320681',
        name: 'Fredersdorf (MOL), Busentscher Weg',
    },
    {
        id: '900320828',
        name: 'Waldsieversdorf, W.-Pieck-Str.',
    },
    {
        id: '900320677',
        name: 'Fredersdorf (MOL), Einkaufszentrum',
    },
    {
        id: '900320675',
        name: 'Fredersdorf (MOL), Schule',
    },
    {
        id: '900320701',
        name: 'Bruchmühle, Fredersdorfer Str.',
    },
    {
        id: '900435039',
        name: 'Senftenberg, Schlosspark',
    },
    {
        id: '900320825',
        name: 'Buckow (Märkische Schweiz), Neue Promenade',
    },
    {
        id: '900320820',
        name: 'Bollersdorf, Abzweig Buckow',
    },
    {
        id: '900320819',
        name: 'Buckow (Märkische Schweiz), Schule',
    },
    {
        id: '900320818',
        name: 'Buckow (Märkische Schweiz), Bhf',
    },
    {
        id: '900320802',
        name: 'Waldsieversdorf, Dorf',
    },
    {
        id: '900320754',
        name: 'Ernsthof, Dorf',
    },
    {
        id: '900320703',
        name: 'Bruchmühle, Friedhof',
    },
    {
        id: '900321514',
        name: 'Kienitz, Dorf',
    },
    {
        id: '900321516',
        name: 'Klein Neuendorf, Dorf',
    },
    {
        id: '000309694005',
        name: 'Kreischau (Beilrode), Abzweig B87',
    },
    {
        id: '900220632',
        name: 'Werder (Havel), Seerosenweg',
    },
    {
        id: '000312530005',
        name: 'Torgau, Str. der Jugend',
    },
    {
        id: '900245688',
        name: 'Ludwigsfelde, Zentrum',
    },
    {
        id: '000309694004',
        name: 'Kreischau (Beilrode), Abzweig B87',
    },
    {
        id: '900245220',
        name: 'Luckenwalde, Poststr.',
    },
    {
        id: '000005104133',
        name: 'Wroclaw Lesnica',
    },
    {
        id: '000302442004',
        name: 'Zwethau, B87',
    },
    {
        id: '900360209',
        name: 'Frankfurt (Oder), Lebuser Chaussee/B 112',
    },
    {
        id: '000302442005',
        name: 'Zwethau, B87',
    },
    {
        id: '000005102278',
        name: 'Malczyce',
    },
    {
        id: '000005102265',
        name: 'Miekinia',
    },
    {
        id: '900215619',
        name: 'Mollnitz',
    },
    {
        id: '900320523',
        name: 'Hönow, Brandenburgische Str.',
    },
    {
        id: '900220711',
        name: 'Krielow, Siedlerweg',
    },
    {
        id: '900222107',
        name: 'Klein Marzehns',
    },
    {
        id: '900222036',
        name: 'Borne',
    },
    {
        id: '900222239',
        name: 'Bergholz (bei Bad Belzig)',
    },
    {
        id: '900222255',
        name: 'Treuenbrietzen, Bäckerstr.',
    },
    {
        id: '900205324',
        name: 'Lentzke, Ausbau',
    },
    {
        id: '900310564',
        name: 'Erkner, Robinienweg',
    },
    {
        id: '900360214',
        name: 'Frankfurt (Oder), Oderhang',
    },
    {
        id: '900222049',
        name: 'Buchholz (bei Niemegk)',
    },
    {
        id: '900321832',
        name: 'Worin, Grüner Wald Abzweig Marxdorf',
    },
    {
        id: '900321831',
        name: 'Worin, Dorf',
    },
    {
        id: '900321830',
        name: 'Wollup',
    },
    {
        id: '900321820',
        name: 'Wilhelmsaue, Dorf',
    },
    {
        id: '900321801',
        name: 'Voßberg (MOL), Dorf',
    },
    {
        id: '900360204',
        name: 'Frankfurt (Oder), Booßen Stadtgrenze',
    },
    {
        id: '900321800',
        name: 'Voßberg (MOL), Ausbau',
    },
    {
        id: '900321787',
        name: 'Treplin, Kirche',
    },
    {
        id: '900321786',
        name: 'Treplin, Gaststätte',
    },
    {
        id: '900321847',
        name: 'Wulkow (bei Trebnitz)',
    },
    {
        id: '900321848',
        name: 'Wulkow (bei Trebnitz), Ausbau',
    },
    {
        id: '900350163',
        name: 'S Zepernick',
    },
    {
        id: '900360024',
        name: 'Frankfurt (Oder), Berliner Chaussee',
    },
    {
        id: '900321876',
        name: 'Zernikow (MOL)',
    },
    {
        id: '900321875',
        name: 'Zechin, Schleuse',
    },
    {
        id: '900321874',
        name: 'Zechin, Meisterstr.',
    },
    {
        id: '900321873',
        name: 'Zechin, Kita',
    },
    {
        id: '900321872',
        name: 'Zechin, Genschmarer Str.',
    },
    {
        id: '900321870',
        name: 'Zechin, Ausbau',
    },
    {
        id: '900321785',
        name: 'Treplin, Ausbau',
    },
    {
        id: '4',
        name: 'Hoyerswerda, Lausitzer Platz',
    },
    {
        id: '900415891',
        name: 'Mahdel',
    },
    {
        id: '900415874',
        name: 'Löhsten, Gasthaus',
    },
    {
        id: '900415821',
        name: 'Kölsa, Alte Schule',
    },
    {
        id: '900415401',
        name: 'Buckau (EE), Gasthaus',
    },
    {
        id: '900415400',
        name: 'Buckau (EE), Dorfstr.',
    },
    {
        id: '900415366',
        name: 'Bicking',
    },
    {
        id: '900415359',
        name: 'Beyern',
    },
    {
        id: '900415474',
        name: 'Fermerswalde, Berg',
    },
    {
        id: '900415475',
        name: 'Fermerswalde, Ort',
    },
    {
        id: '900415555',
        name: 'Frauenhorst',
    },
    {
        id: '900222208',
        name: 'Wiesenburg, Schule',
    },
    {
        id: '900222217',
        name: 'Treuenbrietzen, Jüterboger/Neue-Hufen-Str.',
    },
    {
        id: '140094190221',
        name: 'Döbrichau, B87',
    },
    {
        id: '900222142',
        name: 'Niebelhorst',
    },
    {
        id: '900222141',
        name: 'Niebel, Ortsmitte',
    },
    {
        id: '900222124',
        name: 'Lühsdorf, Dorfstr.',
    },
    {
        id: '140094190222',
        name: 'Döbrichau, B87',
    },
    {
        id: '900036104',
        name: 'Wohlrabedamm/Siemensdamm',
    },
    {
        id: '900222135',
        name: 'Mützdorf',
    },
    {
        id: '000312530004',
        name: 'Torgau, Str. der Jugend',
    },
    {
        id: '900222115',
        name: 'Lehnsdorf',
    },
    {
        id: '900222103',
        name: 'Jeserigerhütten',
    },
    {
        id: '900222261',
        name: 'Treuenbrietzen, Weidehof',
    },
    {
        id: '900222292',
        name: 'Treuenbrietzen, Steinmühlenstr.',
    },
    {
        id: '900416286',
        name: 'Züllsdorf, Gasthaus',
    },
    {
        id: '900275125',
        name: 'Brandenburg, Fontanestr.',
    },
    {
        id: '900415993',
        name: 'Nexdorf, Wald',
    },
    {
        id: '900205748',
        name: 'Manker, Dorfstr.',
    },
    {
        id: '900416064',
        name: 'Rahnisdorf',
    },
    {
        id: '900260571',
        name: 'Bestensee, Schule',
    },
    {
        id: '900320560',
        name: 'Strausberg, Kulturpark',
    },
    {
        id: '900220671',
        name: 'Glindow, Alpenstr.',
    },
    {
        id: '900216040',
        name: 'Wittenberge, Lindenweg',
    },
    {
        id: '900416073',
        name: 'Rehfeld (EE), Falkenberger Str.',
    },
    {
        id: '900321784',
        name: 'Treplin, Am See Telekom',
    },
    {
        id: '900321581',
        name: 'Manschnow, Kirchstr.',
    },
    {
        id: '900321602',
        name: 'Neu Rosenthal, Dorf',
    },
    {
        id: '900321585',
        name: 'Marxdorf',
    },
    {
        id: '900321584',
        name: 'Manschnow, Schule',
    },
    {
        id: '900321583',
        name: 'Manschnow, Mühle',
    },
    {
        id: '900321582',
        name: 'Manschnow, Kreuzung',
    },
    {
        id: '900321580',
        name: 'Mallnow',
    },
    {
        id: '900321562',
        name: 'Lietzen, Dorf',
    },
    {
        id: '900345237',
        name: 'Belten, Gutshof',
    },
    {
        id: '900321566',
        name: 'Lietzen, Vorwerk See',
    },
    {
        id: '900321565',
        name: 'Lietzen, Vorwerk Kreuzung',
    },
    {
        id: '900321564',
        name: 'Lietzen, Vorwerk Dorf',
    },
    {
        id: '900321563',
        name: 'Lietzen, Nord',
    },
    {
        id: '900321603',
        name: 'Neu Tucheband, An der B 1',
    },
    {
        id: '900321604',
        name: 'Neu Tucheband, Ausbau',
    },
    {
        id: '900321630',
        name: 'Neuhardenberg, Neudorf',
    },
    {
        id: '900321629',
        name: 'Neuhardenberg, Kirche',
    },
    {
        id: '900321626',
        name: 'Neuhardenberg, Amtsverwaltung',
    },
    {
        id: '900321625',
        name: 'Neuhardenberg, Abzweig Letschin',
    },
    {
        id: '900321616',
        name: 'Neuentempel',
    },
    {
        id: '900321615',
        name: 'Neubleyen',
    },
    {
        id: '900321612',
        name: 'Neubarnim, Unterdorf',
    },
    {
        id: '900321610',
        name: 'Neubarnim, Abzweig Gieshof',
    },
    {
        id: '900321638',
        name: 'Niederjesar, Abzweig Alt Mahlisch',
    },
    {
        id: '900321531',
        name: 'Lebus, Bhf',
    },
    {
        id: '900321535',
        name: 'Lebus, Wüste Kunersdorf',
    },
    {
        id: '900321534',
        name: 'Lebus, Siedlung',
    },
    {
        id: '900321533',
        name: 'Lebus, Schule',
    },
    {
        id: '900321532',
        name: 'Lebus, Mitte',
    },
    {
        id: '900321561',
        name: 'Lietzen, Bahnhofstr.',
    },
    {
        id: '900321530',
        name: 'Lebus, Ausbau',
    },
    {
        id: '900321521',
        name: 'Küstrin-Kietz, Marktstr.',
    },
    {
        id: '900321520',
        name: 'Küstrin-Kietz, Friedhof',
    },
    {
        id: '900321518',
        name: 'Küstrin-Kietz, Bhf',
    },
    {
        id: '900321536',
        name: 'Lebus, Kietzer Chaussee',
    },
    {
        id: '900321541',
        name: 'Letschin, Bahnhofstr.',
    },
    {
        id: '900321549',
        name: 'Letschin, Umspannwerk',
    },
    {
        id: '900321547',
        name: 'Letschin, Parkstr.',
    },
    {
        id: '900321546',
        name: 'Letschin, Küstriner Str.',
    },
    {
        id: '900321545',
        name: 'Letschin, Karl-Marx-Str.',
    },
    {
        id: '900435053',
        name: 'Ruhland, Busbahnhof',
    },
    {
        id: '900321543',
        name: 'Letschin, Forstacker',
    },
    {
        id: '900321542',
        name: 'Letschin, Bahnübergang',
    },
    {
        id: '900321744',
        name: 'Seelow, Ernst-Thälmann-Str.',
    },
    {
        id: '900321750',
        name: 'Seelow, Loose',
    },
    {
        id: '900321749',
        name: 'Seelow, Gymnasium/Oberschule',
    },
    {
        id: '900321748',
        name: 'Seelow, Grundschule',
    },
    {
        id: '900321746',
        name: 'Seelow, Frankfurter Str.',
    },
    {
        id: '900340973',
        name: 'Mürow, Mitte',
    },
    {
        id: '900341018',
        name: 'Petershagen (UM), Dorf',
    },
    {
        id: '900340975',
        name: 'Mürow, Ost',
    },
    {
        id: '900321734',
        name: 'Schönfließ (MOL), Dorf',
    },
    {
        id: '900321751',
        name: 'Seelow, Siedlung',
    },
    {
        id: '900321755',
        name: 'Seelow, Markt',
    },
    {
        id: '900321759',
        name: 'Solikante, Dorf',
    },
    {
        id: '900321783',
        name: 'Treplin, Am See',
    },
    {
        id: '900321782',
        name: 'Trebnitz, Schulbushaltestelle',
    },
    {
        id: '900321781',
        name: 'Trebnitz, Schloß',
    },
    {
        id: '900321780',
        name: 'Trebnitz, Bhf',
    },
    {
        id: '900321765',
        name: 'Sydowswiese',
    },
    {
        id: '900321764',
        name: 'Sophienthal, Dorf',
    },
    {
        id: '900321763',
        name: 'Sophienthal, Brücke',
    },
    {
        id: '900321762',
        name: 'Solikante, Solikanter Weg',
    },
    {
        id: '900321761',
        name: 'Solikante, Dorfstr.',
    },
    {
        id: '900321713',
        name: 'Reitwein, Dorf',
    },
    {
        id: '900321677',
        name: 'Platkow, Abzweig Letschin',
    },
    {
        id: '900321686',
        name: 'Podelzig, Dorf',
    },
    {
        id: '900321685',
        name: 'Podelzig, Abzweig Klessin',
    },
    {
        id: '900321679',
        name: 'Platkow, Dorf',
    },
    {
        id: '900321678',
        name: 'Platkow, Brücke',
    },
    {
        id: '900321674',
        name: 'Petershagen (bei FF), Ortsausgang',
    },
    {
        id: '900321711',
        name: 'Rehfeld (MOL), Wolluper Weg',
    },
    {
        id: '900321652',
        name: 'Ortwig, Friedhof',
    },
    {
        id: '900321651',
        name: 'Ortwig, Dorf',
    },
    {
        id: '900321650',
        name: 'Ortwig, Ausbau',
    },
    {
        id: '900321687',
        name: 'Podelzig, Schäfergrund',
    },
    {
        id: '900321688',
        name: 'Podelzig, Siedlung',
    },
    {
        id: '900083250',
        name: 'Bildhauerweg',
    },
    {
        id: '900321708',
        name: 'Rathstock, Dorf',
    },
    {
        id: '900321697',
        name: 'Posedin, Posediner Str.',
    },
    {
        id: '900321695',
        name: 'Posedin, Ortwiger Str.',
    },
    {
        id: '900321689',
        name: 'Podelzig, Unterdorf',
    },
    {
        id: '900320511',
        name: 'Hönow, Siedlung',
    },
    {
        id: '900435048',
        name: 'Brieske, Dorf',
    },
    {
        id: '900320510',
        name: 'Hönow, Thälmannstr.',
    },
    {
        id: '900220659',
        name: 'Petzow, Seering',
    },
    {
        id: '900435102',
        name: 'Senftenberg, Kormoranstr.',
    },
    {
        id: '900220618',
        name: 'Werder (Havel), Moosfennstr.',
    },
    {
        id: '900220661',
        name: 'Petzow, Künstlerheim',
    },
    {
        id: '900220662',
        name: 'Geltow, Am Mühlenberg',
    },
    {
        id: '900220654',
        name: 'Geltow, Am Pappeltor',
    },
    {
        id: '900220652',
        name: 'Geltow, Kuckucksweg',
    },
    {
        id: '900230217',
        name: 'Potsdam, Bayrisches Haus',
    },
    {
        id: '900220646',
        name: 'Werder (Havel), Friedrichshöhe',
    },
    {
        id: '900220648',
        name: 'Kemnitz (PM), Kolonie Zern',
    },
    {
        id: '900220621',
        name: 'Werder (Havel), Zum Großen Zernsee',
    },
    {
        id: '900435100',
        name: 'Hosena, Gasthaus',
    },
    {
        id: '900220616',
        name: 'Werder (Havel), Wachtelburg',
    },
    {
        id: '900220629',
        name: 'Werder (Havel), Brandenburger Str.',
    },
    {
        id: '900220613',
        name: 'Werder (Havel), Kugelweg',
    },
    {
        id: '900220627',
        name: 'Werder (Havel), Bismarckhöhe',
    },
    {
        id: '900220626',
        name: 'Werder (Havel), Marienweg',
    },
    {
        id: '900220656',
        name: 'Geltow, Friedhof',
    },
    {
        id: '900220173',
        name: 'Saarmund, Am Markt',
    },
    {
        id: '900220177',
        name: 'Saarmund, Nuthestr.',
    },
    {
        id: '900220176',
        name: 'Saarmund, Schule',
    },
    {
        id: '900220476',
        name: 'Saarmund, Bergstr.',
    },
    {
        id: '900220172',
        name: 'Saarmund, Waldkolonie',
    },
    {
        id: '900220065',
        name: 'Schenkenhorst, Rotdornweg',
    },
    {
        id: '900220067',
        name: 'Schenkenhorst, Gemeindehaus',
    },
    {
        id: '900220066',
        name: 'Schenkenhorst, Teltower Weg',
    },
    {
        id: '900220058',
        name: 'Schenkenhorst, Dorfstr.',
    },
    {
        id: '900220180',
        name: 'Fahlhorst, Dorf',
    },
    {
        id: '900220547',
        name: 'Wildpark-West, Am Wasserwerk',
    },
    {
        id: '900220546',
        name: 'Geltow, Kaserne',
    },
    {
        id: '900230215',
        name: 'Potsdam, Kuhfort',
    },
    {
        id: '900220190',
        name: 'Tremsdorf, Feuerwehr',
    },
    {
        id: '900220187',
        name: 'Tremsdorf, Fresdorfer Weg',
    },
    {
        id: '900220188',
        name: 'Tremsdorf, Stückener Weg',
    },
    {
        id: '900220150',
        name: 'Philippsthal',
    },
    {
        id: '900220181',
        name: 'Fahlhorst, Baumschule',
    },
    {
        id: '900220731',
        name: 'Kemnitz (PM), Fuchsberg',
    },
    {
        id: '900220691',
        name: 'Bochow-Bruch',
    },
    {
        id: '900220704',
        name: 'Krielow, Kirche',
    },
    {
        id: '900220703',
        name: 'Krielow, Chausseestr.',
    },
    {
        id: '900220697',
        name: 'Groß Kreutz, Post',
    },
    {
        id: '900220696',
        name: 'Groß Kreutz, Mühlenstr.',
    },
    {
        id: '900435091',
        name: 'Schwarzheide, Ärztehaus',
    },
    {
        id: '900220686',
        name: 'Neu Plötzin, Kleiner Bruchweg',
    },
    {
        id: '900220687',
        name: 'Derwitz, Am Berliner Ring',
    },
    {
        id: '900220689',
        name: 'Derwitz, B1/Dorfstr.',
    },
    {
        id: '900220690',
        name: 'Derwitz, Kirche',
    },
    {
        id: '900220688',
        name: 'Neu Plötzin, An der Autobahn',
    },
    {
        id: '900220709',
        name: 'Krielow, Lilienthal-Denkmal',
    },
    {
        id: '900220191',
        name: 'Deetz (PM), Sportplatz',
    },
    {
        id: '900220706',
        name: 'Schmergow, Schmiedegasse',
    },
    {
        id: '900220716',
        name: 'Phöben, Chausseestr.',
    },
    {
        id: '900220715',
        name: 'Phöben, Kirche',
    },
    {
        id: '900220714',
        name: 'Phöben, Bundschuhstr.',
    },
    {
        id: '900220713',
        name: 'Phöben, Am Phöbener Bruch',
    },
    {
        id: '900220717',
        name: 'Phöben, Neue Str.',
    },
    {
        id: '900220708',
        name: 'Schmergow, Phöbener Siedlung',
    },
    {
        id: '900220685',
        name: 'Neu Plötzin, Dorf',
    },
    {
        id: '900220609',
        name: 'Werder (Havel), Zum Havelstrand',
    },
    {
        id: '900220644',
        name: 'Werder (Havel), Rosenstr.',
    },
    {
        id: '900220666',
        name: 'Petzow, Schloßpark',
    },
    {
        id: '900220624',
        name: 'Petzow, Resort Schwielowsee',
    },
    {
        id: '900220645',
        name: 'Werder (Havel), Stadtrandsiedlung',
    },
    {
        id: '900220643',
        name: 'Werder (Havel), Hans-Sachs-Str.',
    },
    {
        id: '900435096',
        name: 'Großkoschen, Siedlung',
    },
    {
        id: '900435099',
        name: 'Hosena, Siedlung',
    },
    {
        id: '900220677',
        name: 'Petzow, Löcknitz',
    },
    {
        id: '900220681',
        name: 'Plessow, Dorf',
    },
    {
        id: '900435093',
        name: 'Senftenberg, Hanseatenstr.',
    },
    {
        id: '900220675',
        name: 'Glindow, Jägerstr.',
    },
    {
        id: '900220672',
        name: 'Glindow, Friedrich-Ebert-Str.',
    },
    {
        id: '900220670',
        name: 'Glindow, Kirche',
    },
    {
        id: '900220614',
        name: 'Werder (Havel), Hugo-Junkers-Str.',
    },
    {
        id: '900435095',
        name: 'Großkoschen, Dresdener Str.',
    },
    {
        id: '900220064',
        name: 'Sputendorf, Ernst-Thälmann-Platz',
    },
    {
        id: '900220665',
        name: 'Kemnitz (PM), Eiche',
    },
    {
        id: '900220139',
        name: 'Kleinmachnow, Fahrenheitstr.',
    },
    {
        id: '900220018',
        name: 'Stahnsdorf, John-Graudenz-Str.',
    },
    {
        id: '900220017',
        name: 'Stahnsdorf, Bahnhofstr.',
    },
    {
        id: '900220036',
        name: 'Stahnsdorf, Luisenstr.',
    },
    {
        id: '900435130',
        name: 'Kleinkmehlen, Oberweg',
    },
    {
        id: '900220138',
        name: 'Kleinmachnow, Julius Kühn-Institut',
    },
    {
        id: '900220137',
        name: 'Kleinmachnow, Eichhörnchenweg',
    },
    {
        id: '900220037',
        name: 'Stahnsdorf, Florastr.',
    },
    {
        id: '900220033',
        name: 'Stahnsdorf, Enzianweg',
    },
    {
        id: '900220026',
        name: 'Stahnsdorf, Hildegardstr.',
    },
    {
        id: '900435127',
        name: 'Sedlitz, Schule',
    },
    {
        id: '900220099',
        name: 'Kleinmachnow, Am Weinberg',
    },
    {
        id: '900220089',
        name: 'Kleinmachnow, Im Tal',
    },
    {
        id: '900220035',
        name: 'Stahnsdorf, Heinrich-Zille-Schule',
    },
    {
        id: '900220032',
        name: 'Stahnsdorf, Briefzentrum',
    },
    {
        id: '900220022',
        name: 'Stahnsdorf, Schwarzer Weg',
    },
    {
        id: '900435128',
        name: 'Hermsdorf, Waldesruh',
    },
    {
        id: '900220020',
        name: 'Stahnsdorf, Stahnsdorfer Hof',
    },
    {
        id: '900220046',
        name: 'Kleinmachnow, Schleusenweg',
    },
    {
        id: '900220530',
        name: 'Kleinmachnow, Heidefeld/Stahnsdorfer Damm',
    },
    {
        id: '900220511',
        name: 'Stahnsdorf, Sonnenblumenweg',
    },
    {
        id: '900220510',
        name: 'Stahnsdorf, Irisweg',
    },
    {
        id: '900435131',
        name: 'Lauchhammer Ost, Hochstr.',
    },
    {
        id: '900220532',
        name: 'Kleinmachnow, Im Kamp',
    },
    {
        id: '900435138',
        name: 'Lauchhammer Mitte, Gerhart-Hauptmann-Str.',
    },
    {
        id: '900220049',
        name: 'Güterfelde, Alte Feldmark',
    },
    {
        id: '900220013',
        name: 'Stahnsdorf, Fasanenstr.',
    },
    {
        id: '900220060',
        name: 'Güterfelde, Am Wiesengrund',
    },
    {
        id: '900220061',
        name: 'Güterfelde, Stolper Weg',
    },
    {
        id: '900435139',
        name: 'Lauchhammer Mitte, Martin-Luther-Str.',
    },
    {
        id: '900220057',
        name: 'Güterfelde, Priesterweg',
    },
    {
        id: '900220512',
        name: 'Stahnsdorf, Mühlenstr.',
    },
    {
        id: '900220014',
        name: 'Stahnsdorf, Betriebshof',
    },
    {
        id: '900220210',
        name: 'Teltow, Oskar-Pollner-Str.',
    },
    {
        id: '900222363',
        name: 'Stahnsdorf, Geranienweg',
    },
    {
        id: '900220400',
        name: 'Teltow, Jahnsportplatz',
    },
    {
        id: '900220401',
        name: 'Teltow, Badstr.',
    },
    {
        id: '900220403',
        name: 'Teltow, Postviertel/Paul-Linke-Str.',
    },
    {
        id: '900220092',
        name: 'Stahnsdorf, Gymnasium',
    },
    {
        id: '900220514',
        name: 'Stahnsdorf, Friedrich-Naumann-Str.',
    },
    {
        id: '900220405',
        name: 'Teltow, Egerstr.',
    },
    {
        id: '900220155',
        name: 'Bergholz-Rehbrücke, Feldstr.',
    },
    {
        id: '900220118',
        name: 'Teltow, Geschwister-Scholl-Str.',
    },
    {
        id: '900220098',
        name: 'Teltow, Nuthestr.',
    },
    {
        id: '900220097',
        name: 'Teltow, Tulpenweg',
    },
    {
        id: '900220100',
        name: 'Teltow, Oderstr./Saganer Str.',
    },
    {
        id: '900220078',
        name: 'Teltow, Neißestr.',
    },
    {
        id: '900220079',
        name: 'Teltow, Rammrath-Brücke',
    },
    {
        id: '900220015',
        name: 'Stahnsdorf, Annastr.',
    },
    {
        id: '900220109',
        name: 'Kleinmachnow, Freibad Kiebitzberge',
    },
    {
        id: '900220156',
        name: 'Bergholz-Rehbrücke, R.-Kuckuck-Str./DIfE',
    },
    {
        id: '900220163',
        name: 'Bergholz-Rehbrücke, Schlüterstr.',
    },
    {
        id: '900220063',
        name: 'Sputendorf, Dorfaue',
    },
    {
        id: '900230181',
        name: 'Potsdam, Rathaus Babelsberg',
    },
    {
        id: '900230067',
        name: 'Potsdam, Kunersdorfer Str.',
    },
    {
        id: '900220159',
        name: 'Bergholz-Rehbrücke, Autobahn',
    },
    {
        id: '900220158',
        name: 'Bergholz-Rehbrücke, Andersenweg',
    },
    {
        id: '900220367',
        name: 'Bergholz-Rehbrücke, Falkensteig',
    },
    {
        id: '900220157',
        name: 'Bergholz-Rehbrücke, Sportplatz',
    },
    {
        id: '900220111',
        name: 'Kleinmachnow, Heidefeld/Schleusenweg',
    },
    {
        id: '900220105',
        name: 'Kleinmachnow, OdF-Platz',
    },
    {
        id: '900220104',
        name: 'Kleinmachnow, Am Fuchsbau',
    },
    {
        id: '900220042',
        name: 'Kleinmachnow, Dreilinden',
    },
    {
        id: '900220045',
        name: 'Kleinmachnow, Lindenbahn',
    },
    {
        id: '900220047',
        name: 'Kleinmachnow, Albert-Einstein-Ring Süd',
    },
    {
        id: '900220103',
        name: 'Kleinmachnow, Heidefeld/Hohe Kiefer',
    },
    {
        id: '900220126',
        name: 'Kleinmachnow, Steinweg',
    },
    {
        id: '900220113',
        name: 'Kleinmachnow, Rudolf-Breitscheid-Str.',
    },
    {
        id: '900220112',
        name: 'Kleinmachnow, Märkische Heide',
    },
    {
        id: '900220128',
        name: 'Kleinmachnow, Uhlenhorst',
    },
    {
        id: '900220134',
        name: 'Kleinmachnow, Rathausmarkt',
    },
    {
        id: '900220108',
        name: 'Kleinmachnow, Haeckelstr.',
    },
    {
        id: '900220107',
        name: 'Kleinmachnow, Klausenerstr.',
    },
    {
        id: '900220102',
        name: 'Kleinmachnow, An der Stammbahn',
    },
    {
        id: '900220135',
        name: 'Kleinmachnow, Machnower Busch',
    },
    {
        id: '900220132',
        name: 'Kleinmachnow, Hakeburg',
    },
    {
        id: '900220133',
        name: 'Kleinmachnow, Karl-Marx-Str.',
    },
    {
        id: '900435113',
        name: 'Lauchhammer Ost, Lindenstr.',
    },
    {
        id: '900320506',
        name: 'Hönow, Wördetalstr.',
    },
    {
        id: '900320110',
        name: 'Neuenhagen (b Berlin), Vogelsdorfer Str.',
    },
    {
        id: '900320114',
        name: 'Neuenhagen (b Berlin), Goetheschule',
    },
    {
        id: '900320113',
        name: 'Neuenhagen (b Berlin), Rosa-Luxemburg-Damm',
    },
    {
        id: '900320112',
        name: 'Neuenhagen (b Berlin), Schäferplatz',
    },
    {
        id: '900320111',
        name: 'Neuenhagen (b Berlin), Reiherhorst',
    },
    {
        id: '900320105',
        name: 'Neuenhagen (b Berlin), Eisenacher Str.',
    },
    {
        id: '900320109',
        name: 'Neuenhagen (b Berlin), Südring',
    },
    {
        id: '900320108',
        name: 'Neuenhagen (b Berlin), Hermann-Löns-Str.',
    },
    {
        id: '900320107',
        name: 'Neuenhagen (b Berlin), Westring',
    },
    {
        id: '900320106',
        name: 'Neuenhagen (b Berlin), Hauptmannstr.',
    },
    {
        id: '900320115',
        name: 'Neuenhagen (b Berlin), Thälmannstr.',
    },
    {
        id: '900435056',
        name: 'Hermsdorf, Gemeinde',
    },
    {
        id: '900320172',
        name: 'Wesendahl, Siedlung',
    },
    {
        id: '900320133',
        name: 'Neuenhagen (b Berlin), Nordring',
    },
    {
        id: '900320132',
        name: 'Neuenhagen (b Berlin), Sankt-Georgs-Weg',
    },
    {
        id: '900435115',
        name: 'Schwarzheide Ost, Naundorf',
    },
    {
        id: '900320120',
        name: 'Neuenhagen (b Berlin), Dahlwitzer Str.',
    },
    {
        id: '900435054',
        name: 'Ruhland, Stahlbau',
    },
    {
        id: '900320119',
        name: 'Neuenhagen (b Berlin), Lindenstr./Einkaufszentrum',
    },
    {
        id: '900435055',
        name: 'Freienhufen, Kirchplatz',
    },
    {
        id: '900320116',
        name: 'Neuenhagen (b Berlin), Am Rathaus',
    },
    {
        id: '900320200',
        name: 'Dahmsdorf (MOL)',
    },
    {
        id: '900320027',
        name: 'Waldesruh, Schießplatz',
    },
    {
        id: '900320035',
        name: 'Hönow, Mühlenweg',
    },
    {
        id: '900320034',
        name: 'Hoppegarten, Handwerkerstr. Süd',
    },
    {
        id: '900320028',
        name: 'Hoppegarten, Digitalstr.',
    },
    {
        id: '900320104',
        name: 'Neuenhagen (b Berlin), Apoldaer Str.',
    },
    {
        id: '900320022',
        name: 'Hönow, Altlandsberger Chaussee',
    },
    {
        id: '900320021',
        name: 'Hönow, Dorf',
    },
    {
        id: '900320020',
        name: 'Hönow, Nord',
    },
    {
        id: '900320047',
        name: 'Hoppegarten, MEDIAN Klinik',
    },
    {
        id: '900320103',
        name: 'Neuenhagen (b Berlin), Weimarer Str.',
    },
    {
        id: '900320102',
        name: 'Neuenhagen (b Berlin), Buchenstr.',
    },
    {
        id: '900320101',
        name: 'Neuenhagen (b Berlin), Grünstr.',
    },
    {
        id: '900320100',
        name: 'Neuenhagen (b Berlin), Hoppegartener Str.',
    },
    {
        id: '900320075',
        name: 'Münchehofe (bei Dahlwitz-Hoppegarten)',
    },
    {
        id: '900320074',
        name: 'Münchehofe (bei Dahlwitz-Hoppegarten), Dorfstr.',
    },
    {
        id: '900320050',
        name: 'Hoppegarten, Lindenallee',
    },
    {
        id: '900320049',
        name: 'Genschmar, Ausbau',
    },
    {
        id: '900320204',
        name: 'Hermersdorf',
    },
    {
        id: '900320017',
        name: 'Hönow, Stienitzstr.',
    },
    {
        id: '900320260',
        name: 'Rüdersdorf, Thälmannstr.',
    },
    {
        id: '900320264',
        name: 'Alt Rüdersdorf, Grundschule',
    },
    {
        id: '900320263',
        name: 'Alt Rüdersdorf, Mühle',
    },
    {
        id: '900320262',
        name: 'Alt Rüdersdorf, Sieben Häuser',
    },
    {
        id: '900320261',
        name: 'Rüdersdorf, Einkaufsmarkt',
    },
    {
        id: '900320249',
        name: 'Rüdersdorf, Marienstr.',
    },
    {
        id: '900320257',
        name: 'Rüdersdorf, Frachtzentrum',
    },
    {
        id: '900320256',
        name: 'Rüdersdorf, Vogelsdorfer Str.',
    },
    {
        id: '900320254',
        name: 'Rüdersdorf, Bergmannsglück',
    },
    {
        id: '900320265',
        name: 'Rüdersdorf, Willi-Müller-Str.',
    },
    {
        id: '900320505',
        name: 'Hönow, Am See',
    },
    {
        id: '900320386',
        name: 'Tempelberg, Abzweig',
    },
    {
        id: '900320283',
        name: 'Rüdersdorf, Brückenstr.',
    },
    {
        id: '900320275',
        name: 'Herzfelde (MOL), Rüdersdorfer Str.',
    },
    {
        id: '900320272',
        name: 'Rüdersdorf, Schulzenhöhe',
    },
    {
        id: '900320268',
        name: 'Rüdersdorf, Tasdorf',
    },
    {
        id: '900320246',
        name: 'Rüdersdorf, Marktplatz',
    },
    {
        id: '900320205',
        name: 'Hoppegarten (bei Müncheberg), B 1',
    },
    {
        id: '900320214',
        name: 'Müncheberg, Eberswalder Str.',
    },
    {
        id: '900320223',
        name: 'Müncheberg, Marienfeld',
    },
    {
        id: '900320221',
        name: 'Müncheberg, Oberschule',
    },
    {
        id: '900320218',
        name: 'Müncheberg, Elisenhof',
    },
    {
        id: '900320217',
        name: 'Eggersdorf (Müncheberg), Dorf',
    },
    {
        id: '900435050',
        name: 'Schwarzheide Ost, Victoria',
    },
    {
        id: '900320213',
        name: 'Müncheberg, Bergmannstr.',
    },
    {
        id: '900320212',
        name: 'Müncheberg, Berghof',
    },
    {
        id: '900320211',
        name: 'Müncheberg, Feuerwehr',
    },
    {
        id: '900320206',
        name: 'Hoppegarten (bei Müncheberg), Wendeschleife',
    },
    {
        id: '900320225',
        name: 'Müncheberg, Seelower Str.',
    },
    {
        id: '900320226',
        name: 'Müncheberg, Schule',
    },
    {
        id: '900320243',
        name: 'Müncheberg, Friedrichshof',
    },
    {
        id: '900320242',
        name: 'Alt Rüdersdorf, K.-Liebknecht-Str.',
    },
    {
        id: '900320235',
        name: 'Obersdorf, Dreieck',
    },
    {
        id: '900320234',
        name: 'Obersdorf, Bahnhofstr.',
    },
    {
        id: '900320233',
        name: 'Obersdorf, Abzweig Hermersdorf',
    },
    {
        id: '900320231',
        name: 'Münchehofe (bei Dahlwitz-Hoppegarten), Klärwerk',
    },
    {
        id: '900320227',
        name: 'Müncheberg, ZALF',
    },
    {
        id: '900200030',
        name: 'Hohen Neuendorf, Alfred-Schönbucher-Platz',
    },
    {
        id: '900205469',
        name: 'Kyritz, St.-Marien-Kirche',
    },
    {
        id: '900435067',
        name: 'Meuro, Siedlung',
    },
    {
        id: '900435070',
        name: 'Niemtsch, Feuerwehrdepot',
    },
    {
        id: '900260057',
        name: 'Freidorf, Oderinstr.',
    },
    {
        id: '900205296',
        name: 'Gadow (OPR), Kirche',
    },
    {
        id: '900435074',
        name: 'Hosena, Breite Str.',
    },
    {
        id: '900205004',
        name: 'Rosenwinkel, Kreuzung',
    },
    {
        id: '900215984',
        name: 'Vehlow, Ausbau',
    },
    {
        id: '900205094',
        name: 'Gantikow, Ortsmitte',
    },
    {
        id: '900435072',
        name: 'Peickwitz, Dorfplatz',
    },
    {
        id: '900435073',
        name: 'Peickwitz, Siedlung',
    },
    {
        id: '200000003055',
        name: 'Slubice, Dworzec Autobusowy',
    },
    {
        id: '900220164',
        name: 'Treuenbrietzen, Bhf',
    },
    {
        id: '900350707',
        name: 'Senftenhütte, Ärmel',
    },
    {
        id: '900350451',
        name: 'Golzow (BAR), Dorf',
    },
    {
        id: '900216085',
        name: 'Zwischendeich',
    },
    {
        id: '900216084',
        name: 'Lütjenheide',
    },
    {
        id: '900216083',
        name: 'Garsedow',
    },
    {
        id: '900205109',
        name: 'Karlfriedrichshof, B 103',
    },
    {
        id: '900435066',
        name: 'Meuro, Gasthaus',
    },
    {
        id: '900230174',
        name: 'Potsdam, Zum Heizwerk',
    },
    {
        id: '900435060',
        name: 'Ortrand, Seifen',
    },
    {
        id: '900435081',
        name: 'Biehlen',
    },
    {
        id: '900245671',
        name: 'Luckenwalde, Neue Beelitzer Str.',
    },
    {
        id: '900446536',
        name: 'Wolfshain, Mitte',
    },
    {
        id: '900210701',
        name: 'Dallgow-Döberitz, Schillerstr.',
    },
    {
        id: '900215651',
        name: 'Nausdorf, Mitte',
    },
    {
        id: '900435075',
        name: 'Hosena, Stahlbau',
    },
    {
        id: '900205133',
        name: 'Mechow (OPR), Dorf',
    },
    {
        id: '900205153',
        name: 'Kyritz, Leddiner Weg',
    },
    {
        id: '900435080',
        name: 'Schwarzbach, Ausbau',
    },
    {
        id: '900203615',
        name: 'Zehlendorf (OHV), Schäfereiweg',
    },
    {
        id: '900203508',
        name: 'Kremmen, Dorotheenhof',
    },
    {
        id: '900135017',
        name: 'Campus Buch Nord',
    },
    {
        id: '900216067',
        name: 'Zichtow, Dorf',
    },
    {
        id: '900215880',
        name: 'Spielhagen, Dorf',
    },
    {
        id: '900215126',
        name: 'Bendelin',
    },
    {
        id: '900435077',
        name: 'Schwarzbach, Gasthaus',
    },
    {
        id: '900222090',
        name: 'Groß Briesen (PM)',
    },
    {
        id: '900220231',
        name: 'Grebs (bei Ziesar)',
    },
    {
        id: '900435078',
        name: 'Schwarzbach, Guteborner Str.',
    },
    {
        id: '900435079',
        name: 'Guteborn, Kulturhaus',
    },
    {
        id: '900203829',
        name: 'Wolfsruh, Wolfsluch',
    },
    {
        id: '900435065',
        name: 'Meuro, Feuerwehr',
    },
    {
        id: '900205606',
        name: 'Neustadt (Dosse), Segeletzer Str.',
    },
    {
        id: '900222290',
        name: 'Treuenbrietzen, Berliner Dreieck',
    },
    {
        id: '900222254',
        name: 'Treuenbrietzen, Böllrichstr.',
    },
    {
        id: '900222197',
        name: 'Treuenbrietzen, Schweitzer-Schule',
    },
    {
        id: '900222293',
        name: 'Treuenbrietzen, Neue-Hufen-Str.',
    },
    {
        id: '900222216',
        name: 'Treuenbrietzen, Jüterboger Str.',
    },
    {
        id: '900435058',
        name: 'Kroppen, Oberdorf',
    },
    {
        id: '900222252',
        name: 'Niemegk, Lindenhof',
    },
    {
        id: '900435059',
        name: 'Kroppen, Unterdorf',
    },
    {
        id: '900224565',
        name: 'Niemegk, Teichstr.',
    },
    {
        id: '900261354',
        name: 'Kasel-Golzig, Zaucher Weg',
    },
    {
        id: '900260766',
        name: 'Klein Köris, Halber Str.',
    },
    {
        id: '900260715',
        name: 'Groß Köris, Rankenheimer Str.',
    },
    {
        id: '900260581',
        name: 'Teupitz, Teupitzer Höhe',
    },
    {
        id: '900220374',
        name: 'Treuenbrietzen, Johanniterstr.',
    },
    {
        id: '900203341',
        name: 'Oranienburg, Luisenhof',
    },
    {
        id: '900320009',
        name: 'S Fredersdorf/Nordseite',
    },
    {
        id: '900320008',
        name: 'S Hoppegarten',
    },
    {
        id: '900320005',
        name: 'S Petershagen Nord',
    },
    {
        id: '900435057',
        name: 'Jannowitz, Ortsmitte',
    },
    {
        id: '900310533',
        name: 'Woltersdorf (LOS), Kirche',
    },
    {
        id: '900310532',
        name: 'Woltersdorf (LOS), Lortzingstr.',
    },
    {
        id: '900260582',
        name: 'Teupitz, Gesenberg',
    },
    {
        id: '900260983',
        name: 'Teupitz, Schule',
    },
    {
        id: '900205746',
        name: 'Neustadt (Dosse), Landgestüt',
    },
    {
        id: '900222222',
        name: 'Jeserig (bei Götz), Siedlung',
    },
    {
        id: '900222235',
        name: 'Rädel, Dorf',
    },
    {
        id: '900222234',
        name: 'Rädel, Nord',
    },
    {
        id: '900215622',
        name: 'Müggendorf',
    },
    {
        id: '900220202',
        name: 'Jeserig (bei Götz), Abzweig Schenkenberg',
    },
    {
        id: '900222223',
        name: 'Jeserig (bei Götz), Schule',
    },
    {
        id: '900205711',
        name: 'Wittstock (Dosse), Clara-Zetkin-Str.',
    },
    {
        id: '900205155',
        name: 'Fehrbellin, Berliner Allee',
    },
    {
        id: '900222242',
        name: 'Rädel, Am Spielplatz',
    },
    {
        id: '900222229',
        name: 'Damsdorf (PM), Bergstr.',
    },
    {
        id: '900220695',
        name: 'Bochow (PM), Triftstr.',
    },
    {
        id: '900220710',
        name: 'Neu Bochow, Lehniner Chaussee',
    },
    {
        id: '900220693',
        name: 'Neu Bochow, Birkenweg',
    },
    {
        id: '900220701',
        name: 'Groß Kreutz, Ausbau',
    },
    {
        id: '900220692',
        name: 'Bochow (PM), Kirche',
    },
    {
        id: '900220358',
        name: 'Götz, Lindenstr.',
    },
    {
        id: '900222133',
        name: 'Michelsdorf, Tornower Str.',
    },
    {
        id: '900222064',
        name: 'Damsdorf (PM), Wohnpark Havelland',
    },
    {
        id: '900435900',
        name: 'Weißag',
    },
    {
        id: '900143503',
        name: 'Blankenburger Chaussee/Str. 45',
    },
    {
        id: '900180007',
        name: 'Schloßplatz Köpenick',
    },
    {
        id: '900340532',
        name: 'Prenzlau, Grabowstr.',
    },
    {
        id: '900143500',
        name: 'Alt-Karow/Str. 74',
    },
    {
        id: '900134511',
        name: 'Guyotstr.',
    },
    {
        id: '900143502',
        name: 'Beuthener Str.',
    },
    {
        id: '900142500',
        name: 'Treseburger Str.',
    },
    {
        id: '900142502',
        name: 'Alt-Blankenburg',
    },
    {
        id: '900142503',
        name: 'Heinersdorfer Str.',
    },
    {
        id: '900142508',
        name: 'Purpurkardinalweg',
    },
    {
        id: '000310860001',
        name: 'Nieden, Dorf',
    },
    {
        id: '900131512',
        name: 'Idastr.',
    },
    {
        id: '900140513',
        name: 'Nüßlerstr./Feldtmannstr.',
    },
    {
        id: '900120523',
        name: 'Modersohnstr.',
    },
    {
        id: '900340713',
        name: 'Werbelow, Dorf',
    },
    {
        id: '900175532',
        name: 'Gülzower Str.',
    },
    {
        id: '900131526',
        name: 'Heinrich-Böll-Str.',
    },
    {
        id: '900140018',
        name: 'Rathaus Weißensee',
    },
    {
        id: '900140514',
        name: 'Gehringstr.',
    },
    {
        id: '900151502',
        name: 'Ortnitstr.',
    },
    {
        id: '900344554',
        name: 'Nechlin, Dorf',
    },
    {
        id: '900180018',
        name: 'Müggelschlößchenweg',
    },
    {
        id: '900195011',
        name: 'Ortolfstr./Siriusstr.',
    },
    {
        id: '900170702',
        name: 'S Marzahn',
    },
    {
        id: '900141507',
        name: 'Prenzlauer Promenade/Am Steinberg',
    },
    {
        id: '900141506',
        name: 'Am Steinberg',
    },
    {
        id: '900110032',
        name: 'Stedingerweg',
    },
    {
        id: '900132501',
        name: 'Angerweg',
    },
    {
        id: '900340467',
        name: 'Milow (UM), Dorf',
    },
    {
        id: '900110527',
        name: 'Storkower Str./Einkaufszentrum',
    },
    {
        id: '900110026',
        name: 'Kniprodestr./Storkower Str.',
    },
    {
        id: '900110028',
        name: 'Michelangelostr.',
    },
    {
        id: '900110016',
        name: 'Greifswalder Str./Ostseestr.',
    },
    {
        id: '900110518',
        name: 'Schieritzstr.',
    },
    {
        id: '900110516',
        name: 'Rietzestr.',
    },
    {
        id: '900110509',
        name: 'Erich-Weinert-Str.',
    },
    {
        id: '900160541',
        name: 'Josef-Orlopp-Str./Vulkanstr.',
    },
    {
        id: '900160014',
        name: 'Möllendorffstr./Storkower Str.',
    },
    {
        id: '900160511',
        name: 'Paul-Junius-Str.',
    },
    {
        id: '900340724',
        name: 'Wilsickow',
    },
    {
        id: '900100502',
        name: 'Habersaathstr.',
    },
    {
        id: '900100035',
        name: 'Bundeswehrkrankenhaus',
    },
    {
        id: '900100503',
        name: 'Invalidenpark',
    },
    {
        id: '900100009',
        name: 'U Naturkundemuseum',
    },
    {
        id: '900100040',
        name: 'Mollstr./Otto-Braun-Str.',
    },
    {
        id: '900415740',
        name: 'Hohenleipisch, Mitte',
    },
    {
        id: '900195009',
        name: 'Alemannenstr.',
    },
    {
        id: '900152006',
        name: 'Prendener Str.',
    },
    {
        id: '900152003',
        name: 'Welsestr.',
    },
    {
        id: '900153504',
        name: 'Falkenberg/Dorfstr.',
    },
    {
        id: '900132527',
        name: 'Champagneweg',
    },
    {
        id: '900195521',
        name: 'Rebenweg',
    },
    {
        id: '900260508',
        name: 'Schönefeld (bei Berlin), Gartenstr.',
    },
    {
        id: '900120023',
        name: 'Andreasstr./Lange Str.',
    },
    {
        id: '900340403',
        name: 'Kleisthöhe',
    },
    {
        id: '900194501',
        name: 'Magnusstr.',
    },
    {
        id: '900340291',
        name: 'Fahrenholz',
    },
    {
        id: '900120005',
        name: 'S Ostbahnhof',
    },
    {
        id: '900340442',
        name: 'Lübbenow',
    },
    {
        id: '900195510',
        name: 'S Altglienicke',
    },
    {
        id: '900195511',
        name: 'Schirnerstr.',
    },
    {
        id: '900195007',
        name: 'Wendenstr.',
    },
    {
        id: '900195514',
        name: 'Germanenstr./Normannenstr.',
    },
    {
        id: '900180533',
        name: 'Mandrellaplatz',
    },
    {
        id: '900180512',
        name: 'Brandenburgplatz',
    },
    {
        id: '900161002',
        name: 'U Tierpark',
    },
    {
        id: '900100008',
        name: 'U Heinrich-Heine-Str.',
    },
    {
        id: '900130018',
        name: 'Mühlenstr.',
    },
    {
        id: '900195502',
        name: 'Venusstr.',
    },
    {
        id: '900260507',
        name: 'Waltersdorf (bei Berlin), Gaspumpstation',
    },
    {
        id: '900180024',
        name: 'Rathaus Köpenick',
    },
    {
        id: '900153503',
        name: 'Tierheim Berlin/Dorfstr.',
    },
    {
        id: '900153502',
        name: 'Dessauer Str.',
    },
    {
        id: '900153501',
        name: 'Radieschenpfad',
    },
    {
        id: '900153500',
        name: 'Am Gehrensee',
    },
    {
        id: '900170500',
        name: 'Flämingstr.',
    },
    {
        id: '900170011',
        name: 'Barnimplatz',
    },
    {
        id: '900180021',
        name: 'Köpenicker Str./Innovationspark',
    },
    {
        id: '900194534',
        name: 'Ligusterweg',
    },
    {
        id: '900194535',
        name: 'Johannisthaler Chaussee/Mahonienweg',
    },
    {
        id: '900194014',
        name: 'Wilhelm-Ostwald-Str.',
    },
    {
        id: '900194507',
        name: 'Springbornstr.',
    },
    {
        id: '900194009',
        name: 'Hederichweg',
    },
    {
        id: '900191501',
        name: 'Sonnenallee/Baumschulenstr.',
    },
    {
        id: '900180023',
        name: 'Innovationspark Wuhlheide',
    },
    {
        id: '900340695',
        name: 'Trebenow, Dorf',
    },
    {
        id: '900160504',
        name: 'Franz-Jacob-Str.',
    },
    {
        id: '900140009',
        name: 'Hamburger Platz',
    },
    {
        id: '900340714',
        name: 'Werbelow, Schule',
    },
    {
        id: '900176538',
        name: 'Neuenhagener Str.',
    },
    {
        id: '900175516',
        name: 'Branitzer Str.',
    },
    {
        id: '900176006',
        name: 'Am Rosenhag',
    },
    {
        id: '900176514',
        name: 'Karlshafener Str.',
    },
    {
        id: '900176513',
        name: 'Linderhofstr.',
    },
    {
        id: '900160004',
        name: 'S+U Lichtenberg',
    },
    {
        id: '900175507',
        name: 'Schwarzheider Str.',
    },
    {
        id: '900176008',
        name: 'Wilhelmsmühlenweg',
    },
    {
        id: '900176001',
        name: 'S Mahlsdorf',
    },
    {
        id: '900176009',
        name: 'Hönower Str./Riesaer Str.',
    },
    {
        id: '900140001',
        name: 'Piesporter Str.',
    },
    {
        id: '900194524',
        name: 'James-Franck-Str.',
    },
    {
        id: '000302471002',
        name: 'Louisfelde',
    },
    {
        id: '900170536',
        name: 'Klettwitzer Str.',
    },
    {
        id: '900170535',
        name: 'Boxberger Str.',
    },
    {
        id: '900170534',
        name: 'Otto-Rosenberg-Str.',
    },
    {
        id: '900170533',
        name: 'Walter-Felsenstein-Str.',
    },
    {
        id: '900170020',
        name: 'Marzahner Promenade',
    },
    {
        id: '900151006',
        name: 'Prerower Platz',
    },
    {
        id: '900170010',
        name: 'Betriebshof Marzahn',
    },
    {
        id: '900175554',
        name: 'Teupitzer Str.',
    },
    {
        id: '900340466',
        name: 'Milow (UM), Ausbau',
    },
    {
        id: '000310008002',
        name: 'Linchenshöh',
    },
    {
        id: '900135505',
        name: 'Lindenberger Weg',
    },
    {
        id: '900135513',
        name: 'Klinikum Buch/Südeingang',
    },
    {
        id: '900135701',
        name: 'S Buch [Am Sandhaus]',
    },
    {
        id: '900194527',
        name: 'Trützschlerstr.',
    },
    {
        id: '900037111',
        name: 'Schulstr.',
    },
    {
        id: '000312263002',
        name: 'Strasburg, See',
    },
    {
        id: '900135012',
        name: 'S Buch/Röbellweg',
    },
    {
        id: '900130514',
        name: 'Brehmestr.',
    },
    {
        id: '900131008',
        name: 'Ossietzkyplatz',
    },
    {
        id: '900131513',
        name: 'Lindenberger Str.',
    },
    {
        id: '900131524',
        name: 'Grumbkowstr./Pankower Str.',
    },
    {
        id: '900120525',
        name: 'Friedrichsberger Str.',
    },
    {
        id: '900135011',
        name: 'Lindenberger Weg/Stadtgrenze',
    },
    {
        id: '900170541',
        name: 'Schleusinger Str.',
    },
    {
        id: '6256',
        name: 'Karlsburg (UM)',
    },
    {
        id: '900152500',
        name: 'Zu den Krugwiesen',
    },
    {
        id: '900100504',
        name: 'Pappelplatz',
    },
    {
        id: '900140002',
        name: 'Pasedagplatz',
    },
    {
        id: '900340386',
        name: 'Jagow',
    },
    {
        id: '900100043',
        name: 'Sredzkistr.',
    },
    {
        id: '900110526',
        name: 'Storkower Str./Gewerbegebiet',
    },
    {
        id: '900100033',
        name: 'Schumannstr.',
    },
    {
        id: '900340216',
        name: 'Bandelow, Dorf',
    },
    {
        id: '900140515',
        name: 'Neumagener Str.',
    },
    {
        id: '900340394',
        name: 'Karlstein',
    },
    {
        id: '900135516',
        name: 'Wiltbergstr./Hobrechtsfelder Chaussee',
    },
    {
        id: '900135517',
        name: 'Wiltbergstr.',
    },
    {
        id: '900100542',
        name: 'Charité - Campus Mitte',
    },
    {
        id: '900140502',
        name: 'Herbert-Bayer-Str..',
    },
    {
        id: '900110031',
        name: 'Caligariplatz',
    },
    {
        id: '900141508',
        name: 'Romain-Rolland-Str./Str. 16',
    },
    {
        id: '900130014',
        name: 'Prenzlauer Promenade/Granitzstr.',
    },
    {
        id: '900340225',
        name: 'Bandelow, Käserei',
    },
    {
        id: '900131509',
        name: 'Beatrice-Zweig-Str.',
    },
    {
        id: '900340215',
        name: 'Bandelow, Ausbau',
    },
    {
        id: '900132506',
        name: 'Hauptstr./Schillerstr.',
    },
    {
        id: '900132707',
        name: 'Schönholzer Weg [Schillerstr.]',
    },
    {
        id: '900131500',
        name: 'Eisenblätterstr.',
    },
    {
        id: '900131501',
        name: 'Ehrenmal Schönholz',
    },
    {
        id: '900131502',
        name: 'Frühlingstr.',
    },
    {
        id: '900131503',
        name: 'Schönholzer Heide Süd',
    },
    {
        id: '900131004',
        name: 'Bürgerpark Pankow',
    },
    {
        id: '900130507',
        name: 'Retzbacher Weg',
    },
    {
        id: '900130511',
        name: 'E.-Brändström-Str./Neumannstr.',
    },
    {
        id: '900130510',
        name: 'Arnold-Zweig-Str.',
    },
    {
        id: '900100526',
        name: 'Fischerinsel',
    },
    {
        id: '900130508',
        name: 'Granitzstr./Neumannstr.',
    },
    {
        id: '900132012',
        name: 'Hertzstr./Fontanestr.',
    },
    {
        id: '900132503',
        name: 'Lessingstr./Fontanestr.',
    },
    {
        id: '900132504',
        name: 'Hielscherstr.',
    },
    {
        id: '900180006',
        name: 'Freiheit',
    },
    {
        id: '900130011',
        name: 'U Vinetastr.',
    },
    {
        id: '900132708',
        name: 'Schönholzer Weg [Schillerstr.]',
    },
    {
        id: '900132010',
        name: 'Hauptstr./Friedrich-Engels-Str.',
    },
    {
        id: '900132013',
        name: 'Rosenthal Kirche',
    },
    {
        id: '900340427',
        name: 'Lemmersdorf',
    },
    {
        id: '900194522',
        name: 'Pietschkerstr.',
    },
    {
        id: '900184002',
        name: 'Alt-Müggelheim',
    },
    {
        id: '900196509',
        name: 'Bohnsdorf Kirche',
    },
    {
        id: '900171550',
        name: 'Zur Alten Börse',
    },
    {
        id: '900184001',
        name: 'Odernheimer Str.',
    },
    {
        id: '900160016',
        name: 'Freiaplatz',
    },
    {
        id: '900171525',
        name: 'Biesdorfer Promenade',
    },
    {
        id: '900160524',
        name: 'Kriemhildstr.',
    },
    {
        id: '900340504',
        name: 'Prenzlau, Am Heideweg',
    },
    {
        id: '900176702',
        name: 'S Mahlsdorf',
    },
    {
        id: '900161516',
        name: 'Gensinger Str. Nord',
    },
    {
        id: '900161008',
        name: 'Gensinger Str. Ost',
    },
    {
        id: '900196512',
        name: 'Am Seegraben',
    },
    {
        id: '900195010',
        name: 'Kirschweg',
    },
    {
        id: '900014107',
        name: 'Bethaniendamm',
    },
    {
        id: '900196504',
        name: 'Eichbuschplatz',
    },
    {
        id: '900196505',
        name: 'Schulzendorfer Str./Parchwitzer Str.',
    },
    {
        id: '900196506',
        name: 'Merkurstr.',
    },
    {
        id: '900196507',
        name: 'Neptunstr.',
    },
    {
        id: '900196508',
        name: 'Joachimstr.',
    },
    {
        id: '900175500',
        name: 'Gutenbergstr.',
    },
    {
        id: '900260509',
        name: 'Schönefeld (bei Berlin), Seeweg',
    },
    {
        id: '900120534',
        name: 'Wedekindstr.',
    },
    {
        id: '900340544',
        name: 'Prenzlau, Neustädter Damm Mitte',
    },
    {
        id: '900100508',
        name: 'Philippstr.',
    },
    {
        id: '900340405',
        name: 'Klinkow',
    },
    {
        id: '900171524',
        name: 'Buschiner Str.',
    },
    {
        id: '900196502',
        name: 'Waltersdorfer Str./Parchwitzer Str.',
    },
    {
        id: '900160549',
        name: 'Gernotstr.',
    },
    {
        id: '900171523',
        name: 'Eitelstr.',
    },
    {
        id: '900160020',
        name: 'S+U Lichtenberg/Siegfriedstr.',
    },
    {
        id: '900161505',
        name: 'Robert-Uhrig-Str.',
    },
    {
        id: '900340302',
        name: 'Friedenshof',
    },
    {
        id: '900171516',
        name: 'Helene-Weigel-Platz',
    },
    {
        id: '900170513',
        name: 'Elisabethstr./Oberfeldstr.',
    },
    {
        id: '900340272',
        name: 'Dedelow, Schule',
    },
    {
        id: '900340217',
        name: 'Basedow',
    },
    {
        id: '900152002',
        name: 'S Gehrenseestr.',
    },
    {
        id: '900150502',
        name: 'Gottfriedstr.',
    },
    {
        id: '900150503',
        name: 'Bennostr.',
    },
    {
        id: '900340270',
        name: 'Dedelow, Landhotel',
    },
    {
        id: '900196503',
        name: 'Reihersteg',
    },
    {
        id: '900196501',
        name: 'Lindenstr./Waltersdorfer Str.',
    },
    {
        id: '900340552',
        name: 'Prenzlau, Seebad',
    },
    {
        id: '900171537',
        name: 'Merler Weg',
    },
    {
        id: '900171538',
        name: 'Kröver Str.',
    },
    {
        id: '900171539',
        name: 'Reiler Str.',
    },
    {
        id: '900161513',
        name: 'Balatonstr.',
    },
    {
        id: '900160519',
        name: 'Wönnichstr.',
    },
    {
        id: '900194003',
        name: 'Stubenrauchstr./Springbornstr.',
    },
    {
        id: '900175539',
        name: 'Tollensestr.',
    },
    {
        id: '900170509',
        name: 'Sella-Hasse-Str.',
    },
    {
        id: '900170511',
        name: 'Rudolf-Leonhard-Str.',
    },
    {
        id: '900171519',
        name: 'Garzauer Str.',
    },
    {
        id: '900171520',
        name: 'Cecilienstr./Wuhle',
    },
    {
        id: '900340520',
        name: 'Prenzlau, Friedhof',
    },
    {
        id: '900170526',
        name: 'Hänflingsteig',
    },
    {
        id: '900170525',
        name: 'Pekrunstr.',
    },
    {
        id: '900170532',
        name: 'Kiebitzgrund',
    },
    {
        id: '900175536',
        name: 'Gothaer Str./Eisenacher Str.',
    },
    {
        id: '900175535',
        name: 'Suhler Str.',
    },
    {
        id: '900170537',
        name: 'Eisenacher Str./Gärten der Welt',
    },
    {
        id: '900170014',
        name: 'Blumberger Damm/Eisenacher Str.',
    },
    {
        id: '900340522',
        name: 'Prenzlau, Friedrichstr.',
    },
    {
        id: '900196002',
        name: 'Waldstr./Stadtgrenze',
    },
    {
        id: '900340521',
        name: 'Prenzlau, Friedhofsstr.',
    },
    {
        id: '900196514',
        name: 'Johannes-Tobei-Str.',
    },
    {
        id: '900131508',
        name: 'Friedrich-Engels-Str./Eichenstr.',
    },
    {
        id: '900196513',
        name: 'Krankenhaus Hedwigshöhe',
    },
    {
        id: '900131529',
        name: 'Am Iderfenngraben',
    },
    {
        id: '900175556',
        name: 'Hellersdorfer Str./Gülzower Str.',
    },
    {
        id: '900260511',
        name: 'Waltersdorf (bei Berlin), Grünauer Str.',
    },
    {
        id: '900171010',
        name: 'Cecilienstr./Blumberger Damm',
    },
    {
        id: '900190004',
        name: 'Eichenstr./Puschkinallee',
    },
    {
        id: '900190100',
        name: 'Elsenstr./S Treptower Park',
    },
    {
        id: '900171009',
        name: 'Rapsweg/Unfallkrankenhaus',
    },
    {
        id: '900194007',
        name: 'Sterndamm/Königsheideweg',
    },
    {
        id: '900191512',
        name: 'Köpenicker Landstr./Sportplatz',
    },
    {
        id: '900192001',
        name: 'S Schöneweide',
    },
    {
        id: '900192504',
        name: 'Britzer Str.',
    },
    {
        id: '900192503',
        name: 'Rudower Str./Schnellerstr.',
    },
    {
        id: '900192507',
        name: 'Karlshorster Str.',
    },
    {
        id: '900340632',
        name: 'Taschenberg, Dorf',
    },
    {
        id: '900191005',
        name: 'Eichbuschallee/Köpenicker Landstr.',
    },
    {
        id: '900190509',
        name: 'Bulgarische Str.',
    },
    {
        id: '900191511',
        name: 'Köpenicker Landstr./Dammweg',
    },
    {
        id: '900191802',
        name: 'S Plänterwald',
    },
    {
        id: '900190506',
        name: 'Bouchéstr.',
    },
    {
        id: '900190505',
        name: 'Elsenstr./Kiefholzstr.',
    },
    {
        id: '900190502',
        name: 'Sowjetisches Ehrenmal',
    },
    {
        id: '900340425',
        name: 'Kutzerow, Dorf',
    },
    {
        id: '900192508',
        name: 'Marggraffbrücke',
    },
    {
        id: '900191003',
        name: 'Baumschulenstr./Köpenicker Landstr.',
    },
    {
        id: '900194506',
        name: 'Johannisthal Kirche',
    },
    {
        id: '900194008',
        name: 'Lindhorstweg',
    },
    {
        id: '900194523',
        name: 'Sterndamm/Stubenrauchstr.',
    },
    {
        id: '900190501',
        name: 'Alt-Treptow',
    },
    {
        id: '900190006',
        name: 'Beermannstr.',
    },
    {
        id: '900175548',
        name: 'Alt-Kaulsdorf/Chemnitzer Str.',
    },
    {
        id: '900180547',
        name: 'Oberspreestr./Bundeswehr',
    },
    {
        id: '900310514',
        name: 'Schöneiche (bei Berlin), Seestr.',
    },
    {
        id: '900194508',
        name: 'Ginkgoweg',
    },
    {
        id: '900134512',
        name: 'Navarraplatz',
    },
    {
        id: '900192505',
        name: 'Hasselwerderstr.',
    },
    {
        id: '900310020',
        name: 'Schöneiche (bei Berlin), Lübecker Str. [Endstelle]',
    },
    {
        id: '900340375',
        name: 'Hetzdorf',
    },
    {
        id: '900183001',
        name: 'S Rahnsdorf',
    },
    {
        id: '900183510',
        name: 'Dämeritzstr.',
    },
    {
        id: '900183006',
        name: 'Lutherstr.',
    },
    {
        id: '900183004',
        name: 'Schönblicker Str.',
    },
    {
        id: '900183508',
        name: 'Frankenbergstr.',
    },
    {
        id: '900184503',
        name: 'Raumbacher Str.',
    },
    {
        id: '900180504',
        name: 'Chausseehaus',
    },
    {
        id: '900180503',
        name: 'Rübezahl',
    },
    {
        id: '900180502',
        name: 'Müggelseeperle',
    },
    {
        id: '900180501',
        name: 'Ludwigshöheweg',
    },
    {
        id: '900184505',
        name: 'Annweilerweg',
    },
    {
        id: '900184504',
        name: 'Rehborner Str.',
    },
    {
        id: '900184502',
        name: 'Waldfriedhof Müggelheim',
    },
    {
        id: '900180505',
        name: 'Kienappelweg',
    },
    {
        id: '900131522',
        name: 'Homeyerstr.',
    },
    {
        id: '900180004',
        name: 'Pablo-Neruda-Str.',
    },
    {
        id: '900180011',
        name: 'Semliner Str.',
    },
    {
        id: '900340741',
        name: 'Zernikow (UM), Dorf',
    },
    {
        id: '900340614',
        name: 'Steinfurth',
    },
    {
        id: '900194504',
        name: 'Walther-Nernst-Str.',
    },
    {
        id: '900171502',
        name: 'Irmastr.',
    },
    {
        id: '900171503',
        name: 'Hadubrandstr.',
    },
    {
        id: '900171504',
        name: 'Arnfriedstr.',
    },
    {
        id: '900171505',
        name: 'Pirolstr.',
    },
    {
        id: '900171536',
        name: 'Grabensprung',
    },
    {
        id: '900340597',
        name: 'Schönwerder, Dorf',
    },
    {
        id: '900340598',
        name: 'Schönwerder, Gaststätte',
    },
    {
        id: '900340599',
        name: 'Schönwerder, Siedlung',
    },
    {
        id: '900180527',
        name: 'Erwin-Bock-Str.',
    },
    {
        id: '900180019',
        name: 'Krkhs. Köpenick/Besuchereingang',
    },
    {
        id: '900180005',
        name: 'Müggelheimer Str./Wendenschloßstr.',
    },
    {
        id: '900340426',
        name: 'Kutzerow, Wendeplatz',
    },
    {
        id: '900180530',
        name: 'Hoernlestr.',
    },
    {
        id: '900180509',
        name: 'Hoppendorfer Str.',
    },
    {
        id: '900175501',
        name: 'Feuersteiner Str.',
    },
    {
        id: '900175502',
        name: 'Deutschhofer Allee',
    },
    {
        id: '900175009',
        name: 'Heerstr./Chemnitzer Str.',
    },
    {
        id: '900340287',
        name: 'Ellingen, Dorf',
    },
    {
        id: '900180528',
        name: 'Anemonenstr.',
    },
    {
        id: '900180020',
        name: 'S.-Allende-Str./Wendenschloßstr.',
    },
    {
        id: '900180022',
        name: 'Krankenhaus Köpenick/Südseite',
    },
    {
        id: '900180507',
        name: 'Filehner Str.',
    },
    {
        id: '900180534',
        name: 'Kaulsdorfer Str.',
    },
    {
        id: '900130504',
        name: 'Wilhelm-Kuhr-Str.',
    },
    {
        id: '900096309',
        name: 'Calauer Str.',
    },
    {
        id: '900055106',
        name: 'Eisenacher Str./Hohenstaufenstr.',
    },
    {
        id: '900069202',
        name: 'Oberlandstr. Mitte',
    },
    {
        id: '900055107',
        name: 'Münchener Str.',
    },
    {
        id: '900069254',
        name: 'Bambachstr.',
    },
    {
        id: '900055108',
        name: 'Bamberger Str.',
    },
    {
        id: '900340595',
        name: 'Schönermark (bei Prenzlau), Siedlung',
    },
    {
        id: '900130513',
        name: 'Dolomitenstr.',
    },
    {
        id: '900096314',
        name: 'Atrium',
    },
    {
        id: '900066252',
        name: 'Lichterfelder Weg',
    },
    {
        id: '900083257',
        name: 'Windenweg',
    },
    {
        id: '900083258',
        name: 'Glockenblumenweg',
    },
    {
        id: '900063201',
        name: 'Neue Filandastr.',
    },
    {
        id: '900083152',
        name: 'Frauenschuhweg',
    },
    {
        id: '900096302',
        name: 'Eichhorster Weg/Finsterwalder Str.',
    },
    {
        id: '900083105',
        name: 'Flurweg/Seidelbastweg',
    },
    {
        id: '900083153',
        name: 'Fuchsienweg',
    },
    {
        id: '900083154',
        name: 'Goldlackweg',
    },
    {
        id: '900340304',
        name: 'Fürstenwerder, Ausbau',
    },
    {
        id: '900340719',
        name: 'Wilhelmshof, Ausbau',
    },
    {
        id: '900012161',
        name: 'Wilhelmstr./Franz-Klühs-Str.',
    },
    {
        id: '900340210',
        name: 'Arendsee (UM), Forsthaus',
    },
    {
        id: '900053155',
        name: 'Rübezahlweg',
    },
    {
        id: '900063253',
        name: 'Amfortasweg',
    },
    {
        id: '900066409',
        name: 'Klingsorplatz/Charité',
    },
    {
        id: '900029154',
        name: 'Galenstr./Hohenzollernring',
    },
    {
        id: '900057102',
        name: 'S+U Yorckstr. (Großgörschenstr.)',
    },
    {
        id: '900009155',
        name: 'Kiautschoustr.',
    },
    {
        id: '900052351',
        name: 'Am Rohrgarten',
    },
    {
        id: '900052304',
        name: 'Clauertstr.',
    },
    {
        id: '900009154',
        name: 'Samoastr.',
    },
    {
        id: '900009156',
        name: 'Antwerpener Str.',
    },
    {
        id: '900072105',
        name: 'Titlisweg',
    },
    {
        id: '900073251',
        name: 'Lichterfelder Ring/Waldsassener Str.',
    },
    {
        id: '900064272',
        name: 'Landweg',
    },
    {
        id: '900053251',
        name: 'Seglerweg',
    },
    {
        id: '900053260',
        name: 'Conradstr.',
    },
    {
        id: '900053250',
        name: 'Str. zum Löwen',
    },
    {
        id: '900053256',
        name: 'Zum Heckeshorn',
    },
    {
        id: '900053255',
        name: 'Haus der Wannsee-Konferenz',
    },
    {
        id: '900049208',
        name: 'Dahlemer Weg',
    },
    {
        id: '900002204',
        name: 'Perleberger Brücke',
    },
    {
        id: '900340306',
        name: 'Fürstenwerder, Dorf',
    },
    {
        id: '900096356',
        name: 'Gandenitzer Weg',
    },
    {
        id: '900096312',
        name: 'Quickborner Str./Treuenbrietzener Str.',
    },
    {
        id: '900340307',
        name: 'Fürstenwerder, Schule',
    },
    {
        id: '900035101',
        name: 'U Siemensdamm',
    },
    {
        id: '900063291',
        name: 'Plantagenstr.',
    },
    {
        id: '900067221',
        name: 'S Lankwitz',
    },
    {
        id: '900340718',
        name: 'Wilhelmshayn, Abzweig',
    },
    {
        id: '900089402',
        name: 'Titusweg',
    },
    {
        id: '900079253',
        name: 'Emser Str.',
    },
    {
        id: '900030153',
        name: 'Freiheit 16-43',
    },
    {
        id: '900030154',
        name: 'Pichelswerderstr.',
    },
    {
        id: '900340211',
        name: 'Arendsee (UM), Gaststätte',
    },
    {
        id: '900340780',
        name: 'Mühlhof, Dorf',
    },
    {
        id: '900008101',
        name: 'S Humboldthain',
    },
    {
        id: '900086106',
        name: 'Auguste-Viktoria-A./Humboldtstr.',
    },
    {
        id: '900077251',
        name: 'Schmalenbachstr.',
    },
    {
        id: '900037254',
        name: 'Obstallee',
    },
    {
        id: '900077108',
        name: 'Nobelstr./Bergiusstr.',
    },
    {
        id: '900341279',
        name: 'Ferdinandshorst, Neubau',
    },
    {
        id: '900051259',
        name: 'Brücke-Museum/Kunsthaus Dahlem',
    },
    {
        id: '900340709',
        name: 'Weggun, Dorf',
    },
    {
        id: '900096271',
        name: 'Wittenauer Str./Eichhorster Weg',
    },
    {
        id: '900086158',
        name: 'Otisstr./Quäkerstr.',
    },
    {
        id: '900082259',
        name: 'Gesundheitszentrum',
    },
    {
        id: '900340486',
        name: 'Parmen, Siedlung',
    },
    {
        id: '900088203',
        name: 'Otisstr./Wittestr.',
    },
    {
        id: '900085201',
        name: 'S Schönholz',
    },
    {
        id: '900340485',
        name: 'Parmen, Dorf',
    },
    {
        id: '900074209',
        name: 'Blohmstr./Illigstr.',
    },
    {
        id: '900029106',
        name: 'Borchertweg',
    },
    {
        id: '900056152',
        name: 'Winterfeldtplatz',
    },
    {
        id: '900019203',
        name: 'Friedrich-Olbricht-Damm/Heckerdamm',
    },
    {
        id: '900001151',
        name: 'Reuchlinstr.',
    },
    {
        id: '900019155',
        name: 'Thaters Privatweg',
    },
    {
        id: '900019156',
        name: 'Kolonie Zukunft',
    },
    {
        id: '900047153',
        name: 'Grunewaldturm',
    },
    {
        id: '900094154',
        name: 'Schonacher Str.',
    },
    {
        id: '900076152',
        name: 'Treptower Str./Harzer Str.',
    },
    {
        id: '900340212',
        name: 'Arendsee (UM), Schule',
    },
    {
        id: '900340563',
        name: 'Raakow (UM)',
    },
    {
        id: '900340710',
        name: 'Wilhelmshayn, Dorf',
    },
    {
        id: '900074261',
        name: 'Hilbertstr.',
    },
    {
        id: '900096101',
        name: 'S+U Wittenau',
    },
    {
        id: '900014106',
        name: 'Lausitzer Platz',
    },
    {
        id: '900005156',
        name: 'Bayreuther Str.',
    },
    {
        id: '900096409',
        name: 'Tessenowstr.',
    },
    {
        id: '900021181',
        name: 'Helmholtzstr.',
    },
    {
        id: '900021152',
        name: 'Franklinstr.',
    },
    {
        id: '900340708',
        name: 'Weggun, Bhf',
    },
    {
        id: '900096251',
        name: 'Bernshausener Ring',
    },
    {
        id: '900077104',
        name: 'Steinbockstr.',
    },
    {
        id: '900180549',
        name: 'Kohlisstr.',
    },
    {
        id: '900171501',
        name: 'Elsenallee',
    },
    {
        id: '900175506',
        name: 'An der Wuhle',
    },
    {
        id: '900175008',
        name: 'Chemnitzer Str./Jägerstr.',
    },
    {
        id: '900175505',
        name: 'Eichenstr.',
    },
    {
        id: '900175504',
        name: 'Sadowastr.',
    },
    {
        id: '900176532',
        name: 'Wielandstr.',
    },
    {
        id: '900176531',
        name: 'Mechthildstr.',
    },
    {
        id: '900134011',
        name: 'Französisch Buchholz Kirche',
    },
    {
        id: '900176529',
        name: 'Wilhelm-Blos-Str.',
    },
    {
        id: '900176528',
        name: 'Mirower Str.',
    },
    {
        id: '900176527',
        name: 'Summter Str.',
    },
    {
        id: '900320023',
        name: 'Waldesruh, Mahlsdorfer Allee',
    },
    {
        id: '900171006',
        name: 'U Elsterwerdaer Platz',
    },
    {
        id: '900340543',
        name: 'Prenzlau, Neustädter Damm',
    },
    {
        id: '900100016',
        name: 'U Rosa-Luxemburg-Platz',
    },
    {
        id: '900120510',
        name: 'Weinstr.',
    },
    {
        id: '900120019',
        name: 'Platz der Vereinten Nationen',
    },
    {
        id: '900340541',
        name: 'Prenzlau, Mitteltorturm',
    },
    {
        id: '900161514',
        name: 'Lincolnstr./Einbecker Str.',
    },
    {
        id: '900120020',
        name: 'Helsingforser Platz',
    },
    {
        id: '900161517',
        name: 'Alfred-Kowalke-Str.',
    },
    {
        id: '900161519',
        name: 'Alt-Friedrichsfelde 60',
    },
    {
        id: '900100726',
        name: 'Fischerinsel',
    },
    {
        id: '900131505',
        name: 'Tschaikowskistr.',
    },
    {
        id: '900200029',
        name: 'Schildow, Kirche',
    },
    {
        id: '900340471',
        name: 'Mühlhof, Abzweig',
    },
    {
        id: '900340348',
        name: 'Güstow, Dorf',
    },
    {
        id: '900133014',
        name: 'Arkenberge',
    },
    {
        id: '900133013',
        name: 'Möllersfelder Weg',
    },
    {
        id: '900133501',
        name: 'Hauptstr./Berliner Str.',
    },
    {
        id: '900131527',
        name: 'Hermann-Hesse-Str./Waldstr.',
    },
    {
        id: '900131510',
        name: 'Kuckhoffstr.',
    },
    {
        id: '900340721',
        name: 'Wilhelmshof, Siedlung',
    },
    {
        id: '900132514',
        name: 'Zionsfriedhof',
    },
    {
        id: '900132513',
        name: 'Liliensteinweg',
    },
    {
        id: '900132512',
        name: 'Nordend-Arena',
    },
    {
        id: '900132511',
        name: 'Botanischer Volkspark',
    },
    {
        id: '900133503',
        name: 'Revierförsterei Blankenfelde',
    },
    {
        id: '900161504',
        name: 'U Friedrichsfelde/Massower Str.',
    },
    {
        id: '900340530',
        name: 'Prenzlau, Güstower Str.',
    },
    {
        id: '900171529',
        name: 'Lötschbergstr.',
    },
    {
        id: '900171528',
        name: 'Märkische Allee/Alt-Friedrichsfelde',
    },
    {
        id: '900161005',
        name: 'Alt-Friedrichsfelde/Gensinger Str.',
    },
    {
        id: '900161004',
        name: 'Alt-Friedrichsfelde/Rhinstr.',
    },
    {
        id: '900133504',
        name: 'Am Wäldchen',
    },
    {
        id: '900120501',
        name: 'Alt-Stralau',
    },
    {
        id: '900100544',
        name: 'Heinrich-Heine-Platz',
    },
    {
        id: '900100521',
        name: 'Michaelkirchstr.',
    },
    {
        id: '900100518',
        name: 'Alexanderstr.',
    },
    {
        id: '900131514',
        name: 'Rolandstr.',
    },
    {
        id: '900120502',
        name: 'Friedrich-Junge-Str.',
    },
    {
        id: '900340740',
        name: 'Zernikow (UM), Am See',
    },
    {
        id: '900120520',
        name: 'Glasbläserallee',
    },
    {
        id: '900120521',
        name: 'Markgrafendamm',
    },
    {
        id: '900120522',
        name: 'Persiusstr.',
    },
    {
        id: '900120014',
        name: 'Grünberger Str./Warschauer Str.',
    },
    {
        id: '900340742',
        name: 'Zernikow (UM), Kirche',
    },
    {
        id: '900100530',
        name: 'Werderscher Markt',
    },
    {
        id: '900100047',
        name: 'Friedrichstr./Reinhardtstr.',
    },
    {
        id: '900100537',
        name: 'U Museumsinsel',
    },
    {
        id: '900160507',
        name: 'Max-Brunnow-Str.',
    },
    {
        id: '000312264002',
        name: 'Strasburg, ZOB',
    },
    {
        id: '900120002',
        name: 'Tunnelstr.',
    },
    {
        id: '900131521',
        name: 'Dietzgenstr./Mittelstr.',
    },
    {
        id: '900100546',
        name: 'Adalbertstr.',
    },
    {
        id: '900192511',
        name: 'Köpenicker Landstr./Schnellerstr.',
    },
    {
        id: '900120022',
        name: 'Singerstr.',
    },
    {
        id: '900340772',
        name: 'Prenzlau, Am Quillow',
    },
    {
        id: '900100018',
        name: 'U Stadtmitte',
    },
    {
        id: '900340537',
        name: 'Prenzlau, Alte Sparkasse',
    },
    {
        id: '900100535',
        name: 'Leipziger Str./Wilhelmstr.',
    },
    {
        id: '900340516',
        name: 'Prenzlau, Dr.-W.-Külz-Str./Abzweig',
    },
    {
        id: '900100032',
        name: 'Heinrich-Heine-Str./Annenstr.',
    },
    {
        id: '900133011',
        name: 'Blankenfelde Kirche',
    },
    {
        id: '900133500',
        name: 'Lübarser Weg',
    },
    {
        id: '900019152',
        name: 'Gedenkstätte Plötzensee',
    },
    {
        id: '900019105',
        name: 'Buchholzweg',
    },
    {
        id: '900340728',
        name: 'Wittstock (UM), Dorf',
    },
    {
        id: '900340727',
        name: 'Wittstock (UM), Abzweig',
    },
    {
        id: '900340569',
        name: 'Rittgarten, Dorf',
    },
    {
        id: '900067251',
        name: 'Stadtbad Lankwitz',
    },
    {
        id: '900012153',
        name: 'Wilhelmstr./Kochstr.',
    },
    {
        id: '900012154',
        name: 'Charlottenstr.',
    },
    {
        id: '900005253',
        name: 'Schöneberger Brücke',
    },
    {
        id: '900047154',
        name: 'Lindwerder',
    },
    {
        id: '900051315',
        name: 'Reichensteiner Weg',
    },
    {
        id: '900096154',
        name: 'In den Kaveln',
    },
    {
        id: '900069207',
        name: 'Colditzstr./Ullsteinstr.',
    },
    {
        id: '900096459',
        name: 'Schule am Park',
    },
    {
        id: '900096410',
        name: 'U Rathaus Reinickendorf',
    },
    {
        id: '900096364',
        name: 'Wesendorfer Str.',
    },
    {
        id: '900051311',
        name: 'Hittorfstr.',
    },
    {
        id: '900051355',
        name: 'Ehrenbergstr.',
    },
    {
        id: '900133502',
        name: 'Gurkensteig',
    },
    {
        id: '900077157',
        name: 'Haberstr.',
    },
    {
        id: '900077150',
        name: 'Boschweg',
    },
    {
        id: '900074272',
        name: 'Skarbinastr.',
    },
    {
        id: '900043252',
        name: 'Landhausstr.',
    },
    {
        id: '900096191',
        name: 'Cyclopstr.',
    },
    {
        id: '900340720',
        name: 'Wilhelmshof, Dorf',
    },
    {
        id: '900340593',
        name: 'Schönermark (bei Prenzlau), Dorf',
    },
    {
        id: '900084155',
        name: 'Montanstr./Lengeder Str.',
    },
    {
        id: '900074294',
        name: 'Kirchhainer Damm/Stadtgrenze',
    },
    {
        id: '900340582',
        name: 'Schapow, Dorf',
    },
    {
        id: '900047155',
        name: 'Havelchaussee',
    },
    {
        id: '900047156',
        name: 'Große Steinlanke',
    },
    {
        id: '900052155',
        name: 'Kronprinzessinnenweg/Havelchaussee',
    },
    {
        id: '900096354',
        name: 'Zur Maarer Str.',
    },
    {
        id: '900081204',
        name: 'Pfarrer-Vogelsang-Weg',
    },
    {
        id: '900074273',
        name: 'Riedingerstr.',
    },
    {
        id: '900074258',
        name: 'John-Locke-Str.',
    },
    {
        id: '900074257',
        name: 'Steinstr./Rhinstr.',
    },
    {
        id: '900074204',
        name: 'Barnetstr./Steinstr.',
    },
    {
        id: '900074171',
        name: 'Finchleystr.',
    },
    {
        id: '900175537',
        name: 'Spremberger Str.',
    },
    {
        id: '900340505',
        name: 'Prenzlau, Am Igelpfuhl',
    },
    {
        id: '000313103002',
        name: 'Woldegk, ZOB',
    },
    {
        id: '900340207',
        name: 'Alt-Temmen',
    },
    {
        id: '900203348',
        name: 'Nieder Neuendorf, Oberjägerweg',
    },
    {
        id: '900340723',
        name: 'Willmine, Dorf',
    },
    {
        id: '900037131',
        name: 'Alfons-Loewe-Str.',
    },
    {
        id: '000313102002',
        name: 'Woldegk, Prenzlauer Chaussee',
    },
    {
        id: '900340288',
        name: 'Engelsburg',
    },
    {
        id: '900160001',
        name: 'S Rummelsburg',
    },
    {
        id: '900340278',
        name: 'Drei Häuser',
    },
    {
        id: '900340204',
        name: 'Ahrensdorf (UM), Abzweig',
    },
    {
        id: '900074208',
        name: 'Goltzstr./Lichtenrader Damm',
    },
    {
        id: '900340465',
        name: 'Milmersdorf, Schule',
    },
    {
        id: '900195522',
        name: 'Ewaldstr.',
    },
    {
        id: '900195525',
        name: 'Coloniaallee',
    },
    {
        id: '900340324',
        name: 'Götschendorf, Mitte',
    },
    {
        id: '900195523',
        name: 'Müngersdorfer Str.',
    },
    {
        id: '900230400',
        name: 'Potsdam, Stern-Center/Nuthestr.',
    },
    {
        id: '900203372',
        name: 'Nieder Neuendorf, Bahnhofstr.',
    },
    {
        id: '900143514',
        name: 'Lossebergplatz',
    },
    {
        id: '900340584',
        name: 'Schifferhof',
    },
    {
        id: '900200103',
        name: 'Hennigsdorf, Stadtklubhaus',
    },
    {
        id: '900203370',
        name: 'Hennigsdorf, Clara-Schabbel-Str.',
    },
    {
        id: '900203371',
        name: 'Nieder Neuendorf, Havelpromenade',
    },
    {
        id: '900203349',
        name: 'Nieder Neuendorf, Zur Baumschule',
    },
    {
        id: '900130521',
        name: 'Maximilianstr.',
    },
    {
        id: '900203350',
        name: 'Papenberge, Waldmeisterstr.',
    },
    {
        id: '900203374',
        name: 'Papenberge, Spandauer Landstr.',
    },
    {
        id: '900340626',
        name: 'Suckow (UM)',
    },
    {
        id: '900143515',
        name: 'Forkenzeile',
    },
    {
        id: '900143516',
        name: 'Hofzeichendamm',
    },
    {
        id: '900340226',
        name: 'Berkenlatten',
    },
    {
        id: '900140520',
        name: 'Giersstr./Falkenberger Str.',
    },
    {
        id: '900140516',
        name: 'Wittlicher Str.',
    },
    {
        id: '900140012',
        name: 'Falkenberger Str./Berliner Allee',
    },
    {
        id: '900340399',
        name: 'Klein Fredenwalde',
    },
    {
        id: '900340240',
        name: 'Böckenberg',
    },
    {
        id: '900220093',
        name: 'Teltow, Schönower Str.',
    },
    {
        id: '900220085',
        name: 'Teltow, Ev. Diakonissenhaus',
    },
    {
        id: '900220087',
        name: 'Teltow, Fritz-Reuter-Str.',
    },
    {
        id: '900220086',
        name: 'Teltow, Hannemannstr.',
    },
    {
        id: '900220088',
        name: 'Teltow, Maxim-Gorki-Str.',
    },
    {
        id: '900340783',
        name: 'Blankensee (UM), Siedlung',
    },
    {
        id: '900162502',
        name: 'Stühlinger Str.',
    },
    {
        id: '900162003',
        name: 'Treskowallee/Ehrlichstr.',
    },
    {
        id: '900162503',
        name: 'Stechlinstr.',
    },
    {
        id: '900340371',
        name: 'Herzfelde (UM), Mitte',
    },
    {
        id: '900340706',
        name: 'Warthe, Dorf',
    },
    {
        id: '900120518',
        name: 'Wismarplatz',
    },
    {
        id: '900162005',
        name: 'Blockdammweg',
    },
    {
        id: '900340281',
        name: 'Egarsee',
    },
    {
        id: '900340241',
        name: 'Boisterfelde',
    },
    {
        id: '900340303',
        name: 'Fürstenau',
    },
    {
        id: '900340254',
        name: 'Buchenhain, Mitte',
    },
    {
        id: '900120539',
        name: 'James-Hobrecht-Str.',
    },
    {
        id: '900160712',
        name: 'Herzbergstr./Siegfriedstr.',
    },
    {
        id: '900340434',
        name: 'Lindensee',
    },
    {
        id: '900340242',
        name: 'Boitzenburg, Amt',
    },
    {
        id: '900141503',
        name: 'Rothenbachstr.',
    },
    {
        id: '900340359',
        name: 'Hardenbeck, Vorstadt',
    },
    {
        id: '900340357',
        name: 'Hardenbeck, Funkenhagener Str.',
    },
    {
        id: '900340630',
        name: 'Tannenhof',
    },
    {
        id: '900340461',
        name: 'Mellenau',
    },
    {
        id: '900340236',
        name: 'Blankensee (UM), Dorf',
    },
    {
        id: '900340372',
        name: 'Herzfelde (UM), Neubau',
    },
    {
        id: '900120529',
        name: 'Wühlischstr./Gärtnerstr.',
    },
    {
        id: '900120013',
        name: 'Holteistr.',
    },
    {
        id: '900120540',
        name: 'Scharnweberstr./Weichselstr.',
    },
    {
        id: '900340244',
        name: 'Boitzenburg, Schule',
    },
    {
        id: '900340362',
        name: 'Haßleben, B 109',
    },
    {
        id: '900140506',
        name: 'Behaimstr.',
    },
    {
        id: '900340707',
        name: 'Warthe, Neubau',
    },
    {
        id: '900130501',
        name: 'Rathaus Pankow',
    },
    {
        id: '900120528',
        name: 'Simplonstr.',
    },
    {
        id: '900120527',
        name: 'Libauer Str.',
    },
    {
        id: '900340775',
        name: 'Stabeshöhe, Abzweig',
    },
    {
        id: '900340255',
        name: 'Buchholz (UM)',
    },
    {
        id: '900340497',
        name: 'Pinnow (bei Gerswalde)',
    },
    {
        id: '900340350',
        name: 'Gustavsruh (UM)',
    },
    {
        id: '900340428',
        name: 'Lichtenhain',
    },
    {
        id: '900340619',
        name: 'Sternthal',
    },
    {
        id: '900340365',
        name: 'Haßleben, Neubau',
    },
    {
        id: '900340421',
        name: 'Krohnhorst',
    },
    {
        id: '900340811',
        name: 'Ruhhof, Abzweig',
    },
    {
        id: '900210121',
        name: 'Falkensee, Alter Fischerweg',
    },
    {
        id: '900340317',
        name: 'Gerswalde, Schule',
    },
    {
        id: '900132509',
        name: 'Hertzstr./Hauptstr.',
    },
    {
        id: '900340370',
        name: 'Herrenstein',
    },
    {
        id: '900181507',
        name: 'Spindlersfelder Str.',
    },
    {
        id: '900037109',
        name: 'Döberitzer Weg',
    },
    {
        id: '900100030',
        name: 'Memhardstr.',
    },
    {
        id: '900210123',
        name: 'Falkensee, Humboldtallee',
    },
    {
        id: '900100514',
        name: 'Staatsoper',
    },
    {
        id: '900100031',
        name: 'S+U Alexanderplatz/Memhardstr.',
    },
    {
        id: '900181506',
        name: 'Nixenstr.',
    },
    {
        id: '900210143',
        name: 'Falkensee, Kölner Str.',
    },
    {
        id: '900181502',
        name: 'Firlstr.',
    },
    {
        id: '900340383',
        name: 'Hohenwalde (UM), Abzweig',
    },
    {
        id: '900181503',
        name: 'Rathenaustr./HTW',
    },
    {
        id: '900181504',
        name: 'Ostendstr.',
    },
    {
        id: '900181505',
        name: 'Weiskopffstr.',
    },
    {
        id: '900181003',
        name: 'Freizeit- und Erholungszentrum',
    },
    {
        id: '900340296',
        name: 'Fergitz',
    },
    {
        id: '900340702',
        name: 'Voßberg (UM), Dorf',
    },
    {
        id: '900191701',
        name: 'Sonnenallee/Baumschulenstr.',
    },
    {
        id: '900186505',
        name: 'Königsseestr.',
    },
    {
        id: '900160517',
        name: 'Irenenstr.',
    },
    {
        id: '900100037',
        name: 'Unter den Linden/Glinkastr.',
    },
    {
        id: '900186702',
        name: 'S Grünau',
    },
    {
        id: '900186506',
        name: 'Friedrich-Wolf-Str.',
    },
    {
        id: '900180521',
        name: 'Betonwerk',
    },
    {
        id: '900180522',
        name: 'Rosenweg',
    },
    {
        id: '900180523',
        name: 'Vollkropfgraben',
    },
    {
        id: '900180514',
        name: 'Betriebshof Köpenick',
    },
    {
        id: '900340778',
        name: 'Ahrensdorf (UM), Brücke',
    },
    {
        id: '900176534',
        name: 'Erich-Baron-Weg',
    },
    {
        id: '900130523',
        name: 'Pradelstr.',
    },
    {
        id: '900130516',
        name: 'Gaillardstr.',
    },
    {
        id: '900340493',
        name: 'Petersdorf (bei Templin)',
    },
    {
        id: '900340495',
        name: 'Pfingstberg, Abzweig',
    },
    {
        id: '900130515',
        name: 'Görschstr.',
    },
    {
        id: '900161518',
        name: 'Erieseering',
    },
    {
        id: '900142501',
        name: 'Karower Damm/Georgenstr.',
    },
    {
        id: '900161515',
        name: 'Schwarzmeerstr.',
    },
    {
        id: '900191515',
        name: 'Dammweg/Bergaustr.',
    },
    {
        id: '900340390',
        name: 'Kaakstedt',
    },
    {
        id: '900210107',
        name: 'Falkensee, Hamburger Str.',
    },
    {
        id: '900340316',
        name: 'Gerswalde, Mühle',
    },
    {
        id: '900142001',
        name: 'S Blankenburg',
    },
    {
        id: '900210641',
        name: 'Dallgow-Döberitz, Havelpark',
    },
    {
        id: '900340701',
        name: 'Voßberg (UM), Abzweig',
    },
    {
        id: '900131523',
        name: 'Buchholzer Str. 55-61',
    },
    {
        id: '900142507',
        name: 'Waldammerweg',
    },
    {
        id: '900142504',
        name: 'Krugstege',
    },
    {
        id: '900143501',
        name: 'Alt-Karow/Bahnhofstr.',
    },
    {
        id: '900340298',
        name: 'Flieth',
    },
    {
        id: '900143508',
        name: 'Kerkowstr.',
    },
    {
        id: '900143507',
        name: 'Hagenstr.',
    },
    {
        id: '900100045',
        name: 'U Rotes Rathaus',
    },
    {
        id: '900220068',
        name: 'Teltow, Zehlendorfer Str.',
    },
    {
        id: '900171541',
        name: 'Boschpoler Platz',
    },
    {
        id: '900340313',
        name: 'Gerswalde, Arztpraxis',
    },
    {
        id: '900193501',
        name: 'Adlergestell/Glienicker Weg',
    },
    {
        id: '900340478',
        name: 'Neudorf (UM)',
    },
    {
        id: '900185505',
        name: 'Schappachstr.',
    },
    {
        id: '900185504',
        name: 'Lübbenauer Weg',
    },
    {
        id: '900185503',
        name: 'Adlergestell/Vetschauer Allee',
    },
    {
        id: '900340300',
        name: 'Friedenfelde, Dorf',
    },
    {
        id: '900340301',
        name: 'Friedenfelde, Friedenfelder Str.',
    },
    {
        id: '900110001',
        name: 'S+U Schönhauser Allee',
    },
    {
        id: '900340335',
        name: 'Groß Fredenwalde',
    },
    {
        id: '900160538',
        name: 'Scheffelstr.',
    },
    {
        id: '900160521',
        name: 'Siegfriedstr./Josef-Orlopp-Str.',
    },
    {
        id: '900181009',
        name: 'Minna-Todenhagen-Brücke',
    },
    {
        id: '900181008',
        name: 'Nalepastr./Helmholtzstr.',
    },
    {
        id: '900200125',
        name: 'Flatow, Linumhorster Str.',
    },
    {
        id: '900245271',
        name: 'Luckenwalde, Poststr./Haag',
    },
    {
        id: '900220932',
        name: 'Beelitz, Zur Feldscheune',
    },
    {
        id: '900120526',
        name: 'Kopernikusstr./Warschauer Str.',
    },
    {
        id: '900220934',
        name: 'Beelitz, Virchowstr.',
    },
    {
        id: '900024205',
        name: 'U Wilmersdorfer Str./S Charlottenburg',
    },
    {
        id: '900245127',
        name: 'Jüterbog, Brückenstr.',
    },
    {
        id: '900245748',
        name: 'Großbeeren, Kleinbeerener Str.',
    },
    {
        id: '900320134',
        name: 'Neuenhagen (b Berlin), Harzburger Str.',
    },
    {
        id: '900320660',
        name: 'Vogelsdorf, Tasdorfer Str.',
    },
    {
        id: '900110018',
        name: 'Friedrich-Ludwig-Jahn-Sportpark',
    },
    {
        id: '900350769',
        name: 'Wandlitz, Bacharachstr.',
    },
    {
        id: '900100540',
        name: 'Universitätsstr.',
    },
    {
        id: '900230013',
        name: 'Potsdam, Charlottenhof/Geschw.-Scholl-Str.',
    },
    {
        id: '210704',
        name: 'Dallgow-Döberitz, Raabestr./Schillerstr.',
    },
    {
        id: '200000002195',
        name: 'Slubice, Plac Frankfurcki',
    },
    {
        id: '900340684',
        name: 'Templin, Goetheschule',
    },
    {
        id: '900340663',
        name: 'Templin, Kirsteinhaus',
    },
    {
        id: '900340751',
        name: 'Templin, Waldhofschule',
    },
    {
        id: '900340644',
        name: 'Templin, August-Bebel-Str.',
    },
    {
        id: '900340655',
        name: 'Templin, Friedrich-Engels-Str.',
    },
    {
        id: '900340653',
        name: 'Templin, Gabbert Schule',
    },
    {
        id: '900340685',
        name: 'Templin, Str. des Friedens',
    },
    {
        id: '900340650',
        name: 'Templin, Fachschule',
    },
    {
        id: '900340687',
        name: 'Templin, Waldhof',
    },
    {
        id: '900340029',
        name: 'Templin, Am Bahnhof',
    },
    {
        id: '210705',
        name: 'Dallgow-Döberitz, Lindhorstplatz',
    },
    {
        id: '900210706',
        name: 'Dallgow-Döberitz, Raabestr./Kleiststr.',
    },
    {
        id: '900340647',
        name: 'Templin, Lychener Str.',
    },
    {
        id: '900180520',
        name: 'Lienhardweg',
    },
    {
        id: '900180518',
        name: 'Dregerhoffstr.',
    },
    {
        id: '900180516',
        name: 'Segewaldweg',
    },
    {
        id: '900180515',
        name: 'Mayschweg',
    },
    {
        id: '900340670',
        name: 'Templin, Lychener Str. Mitte',
    },
    {
        id: '900162008',
        name: 'Traberweg',
    },
    {
        id: '900340686',
        name: 'Templin, Uckermarktechnik',
    },
    {
        id: '000300768004',
        name: 'Rehfeld (EE), Bhf',
    },
    {
        id: '390094399501',
        name: 'Hoyerswerda, Kolpingstr.',
    },
    {
        id: '390094399502',
        name: 'Hoyerswerda, Kolpingstr.',
    },
    {
        id: '900445224',
        name: 'Briesen (bei Missen), Abzweig',
    },
    {
        id: '900360216',
        name: 'Frankfurt (Oder), Erlengrund',
    },
    {
        id: '900310897',
        name: 'Kienbaum, Sportstätte',
    },
    {
        id: '900245525',
        name: 'Ludwigsfelde, K.-Liebknecht-Str.',
    },
    {
        id: '900416074',
        name: 'Rehfeld (EE), Gärtnerei',
    },
    {
        id: '900261046',
        name: 'Wildau, Röntgenstr.',
    },
    {
        id: '900192510',
        name: 'Schnellerstr. 135',
    },
    {
        id: '900245522',
        name: 'Ludwigsfelde, Donaustr.',
    },
    {
        id: '390094399332',
        name: 'Hoyerswerda, Gewerbegebiet Nardt',
    },
    {
        id: '390094399331',
        name: 'Hoyerswerda, Gewerbegebiet Nardt',
    },
    {
        id: '390094399292',
        name: 'Hoyerswerda, Kastanienhof',
    },
    {
        id: '390094399291',
        name: 'Hoyerswerda, Kastanienhof',
    },
    {
        id: '900435901',
        name: 'Werchow',
    },
    {
        id: '900435912',
        name: 'Woschkow',
    },
    {
        id: '900435913',
        name: 'Woschkow, Abzweig',
    },
    {
        id: '900025203',
        name: 'U Olympia-Stadion',
    },
    {
        id: '900435922',
        name: 'Zerkwitz, L49',
    },
    {
        id: '900435923',
        name: 'Zerkwitz, Friedhof',
    },
    {
        id: '900435933',
        name: 'Zwietow',
    },
    {
        id: '390094399251',
        name: 'Hoyerswerda, Bhf',
    },
    {
        id: '390094399262',
        name: 'Hoyerswerda, Behördenpark',
    },
    {
        id: '900245372',
        name: 'Ludwigsfelde, Waldhaus',
    },
    {
        id: '900310779',
        name: 'Fürstenwalde, Alexisstr.',
    },
    {
        id: '900210180',
        name: 'Seegefeld, Bhf',
    },
    {
        id: '900261540',
        name: 'Lübben, Kastanienallee',
    },
    {
        id: '900260017',
        name: 'Halbe, Bhf',
    },
    {
        id: '900160544',
        name: 'Rathaus Lichtenberg',
    },
    {
        id: '900210354',
        name: 'Falkensee, Str. der Einheit',
    },
    {
        id: '900210270',
        name: 'Falkensee, Dallgower Str.',
    },
    {
        id: '900203843',
        name: 'Neuendorf, Weg zum See',
    },
    {
        id: '900245524',
        name: 'Ludwigsfelde, E.-Weinert-Str.',
    },
    {
        id: '900222256',
        name: 'Grubo, Ausbau',
    },
    {
        id: '900100042',
        name: 'Zionskirchplatz',
    },
    {
        id: '000008079743',
        name: 'Liebenthal (OPR), Abzweig',
    },
    {
        id: '900260905',
        name: 'Gräbendorf (LDS), KiEZ Frauensee',
    },
    {
        id: '900245704',
        name: 'Ludwigsfelde, Fr.-Engels-Str.',
    },
    {
        id: '900224992',
        name: 'Borkwalde, Fichtestr.',
    },
    {
        id: '900215673',
        name: 'Neuhausen (PR), Bahnhofplatz',
    },
    {
        id: '900215753',
        name: 'Pritzwalk, Meyenburger Tor',
    },
    {
        id: '900224990',
        name: 'Borkwalde, Astrid-Lindgren-Platz',
    },
    {
        id: '900224991',
        name: 'Borkwalde, Wielandstr.',
    },
    {
        id: '900160525',
        name: 'Guntherstr.',
    },
    {
        id: '900162002',
        name: 'Hegemeisterweg',
    },
    {
        id: '900340755',
        name: 'Lychen, Abzweig Retzower Weg',
    },
    {
        id: '900181002',
        name: 'Rummelsburger Str./Edisonstr.',
    },
    {
        id: '900181501',
        name: 'Volkspark Wuhlheide',
    },
    {
        id: '900340456',
        name: 'Lychen, Sprachheilschule',
    },
    {
        id: '900340448',
        name: 'Lychen, Apotheke',
    },
    {
        id: '900340586',
        name: 'Schlüßhof',
    },
    {
        id: '900340449',
        name: 'Lychen, Beenzer Chaussee',
    },
    {
        id: '900340567',
        name: 'Retzow (UM), Dorf',
    },
    {
        id: '900340395',
        name: 'Kastaven',
    },
    {
        id: '900340412',
        name: 'Knehden, Gutshof',
    },
    {
        id: '900340454',
        name: 'Lychen, Markt',
    },
    {
        id: '900340411',
        name: 'Knehden, Dorf',
    },
    {
        id: '900340474',
        name: 'Netzow (UM)',
    },
    {
        id: '900340433',
        name: 'Lindenhof (bei Templin), Abzweig',
    },
    {
        id: '900140519',
        name: 'Buschallee',
    },
    {
        id: '900340600',
        name: 'Schreibermühle',
    },
    {
        id: '900340415',
        name: 'Kolbatzer Mühle',
    },
    {
        id: '900340246',
        name: 'Brüsenwalde',
    },
    {
        id: '900340577',
        name: 'Rosenow, Abzweig',
    },
    {
        id: '900340628',
        name: 'Tangersdorf, Mitte',
    },
    {
        id: '900340572',
        name: 'Röddelin, Dorf',
    },
    {
        id: '900340717',
        name: 'Wichmannsdorf',
    },
    {
        id: '900340468',
        name: 'Mittenwalde (bei Templin), Dorf',
    },
    {
        id: '900160508',
        name: 'Judith-Auer-Str.',
    },
    {
        id: '900110030',
        name: 'Oderbruchstr.',
    },
    {
        id: '900340364',
        name: 'Haßleben, Mitte',
    },
    {
        id: '900340423',
        name: 'Kuhz',
    },
    {
        id: '900340422',
        name: 'Küstrinchen',
    },
    {
        id: '900340494',
        name: 'Petznick',
    },
    {
        id: '900340418',
        name: 'Kreuzkrug',
    },
    {
        id: '900340654',
        name: 'Templin, Försterei Laatz',
    },
    {
        id: '900340447',
        name: 'Lychen, Am Schlenken',
    },
    {
        id: '900340639',
        name: 'Lychen, Gewerbegebiet',
    },
    {
        id: '900340220',
        name: 'Bauer',
    },
    {
        id: '900340389',
        name: 'Jakobshagen, Neubau',
    },
    {
        id: '900340688',
        name: 'Templin, Naturschule',
    },
    {
        id: '900194520',
        name: 'Herweghstr.',
    },
    {
        id: '900194012',
        name: 'Haeckelstr.',
    },
    {
        id: '900340680',
        name: 'Templin, Sparkasse Dargersdorfer Str.',
    },
    {
        id: '900340756',
        name: 'Templin, Schmidtshof',
    },
    {
        id: '900340498',
        name: 'Placht-Weiler',
    },
    {
        id: '900340683',
        name: 'Templin, Stadtverwaltung',
    },
    {
        id: '900340642',
        name: 'Templin, Am Stadion',
    },
    {
        id: '900340661',
        name: 'Templin, Heinestr.',
    },
    {
        id: '900340677',
        name: 'Templin, Röddeliner Str.',
    },
    {
        id: '900340696',
        name: 'Templin, Zehdenicker Str.',
    },
    {
        id: '900340658',
        name: 'Templin, Gymnasium',
    },
    {
        id: '900340665',
        name: 'Templin, Knehdener Str. Ausbau',
    },
    {
        id: '900340664',
        name: 'Templin, Knehdener Str.',
    },
    {
        id: '900340689',
        name: 'Templin, ZOB',
    },
    {
        id: '900340681',
        name: 'Templin, Stadtbad',
    },
    {
        id: '900340659',
        name: 'Fährkrug, Brücke',
    },
    {
        id: '900340646',
        name: 'Templin, Dargersdorfer Str.',
    },
    {
        id: '900180511',
        name: 'Gelnitzstr.',
    },
    {
        id: '900340290',
        name: 'Densow, Abzweig',
    },
    {
        id: '000312569001',
        name: 'Triepkendorf, Neubau',
    },
    {
        id: '900110502',
        name: 'Raumerstr.',
    },
    {
        id: '900110501',
        name: 'Stargarder Str.',
    },
    {
        id: '900340441',
        name: 'Lychen, Berliner Str.',
    },
    {
        id: '900110015',
        name: 'Stahlheimer Str./Wisbyer Str.',
    },
    {
        id: '900340205',
        name: 'Albertshof (UM)',
    },
    {
        id: '900340198',
        name: 'Gandenitz, Brücke',
    },
    {
        id: '900180701',
        name: 'S Köpenick',
    },
    {
        id: '900180513',
        name: 'Janitzkystr.',
    },
    {
        id: '900340608',
        name: 'Stabeshorst, Abzweig',
    },
    {
        id: '900100007',
        name: 'S Oranienburger Str.',
    },
    {
        id: '900340476',
        name: 'Neu Placht',
    },
    {
        id: '900162501',
        name: 'S Karlshorst',
    },
    {
        id: '900340627',
        name: 'Tangersdorf, Abzweig',
    },
    {
        id: '900340450',
        name: 'Lychen, Friedhof',
    },
    {
        id: '900340446',
        name: 'Lychen, Abzweig Marienheim',
    },
    {
        id: '900340698',
        name: 'Türkshof, Abzweig',
    },
    {
        id: '900350012',
        name: 'Milmersdorf, Gewerbegebiet',
    },
    {
        id: '900140503',
        name: 'Heinersdorfer Str./Am Steinberg',
    },
    {
        id: '900130518',
        name: 'Treskowstr.',
    },
    {
        id: '900130517',
        name: 'Binzstr.',
    },
    {
        id: '900132011',
        name: 'Fontanestr./Schillerstr.',
    },
    {
        id: '900340542',
        name: 'Prenzlau, Dr.-W.-Külz-Str.',
    },
    {
        id: '900120519',
        name: 'Neue Bahnhofstr.',
    },
    {
        id: '900160548',
        name: 'Lichtenberger Brücke Süd',
    },
    {
        id: '900160535',
        name: 'Marktstr.',
    },
    {
        id: '900340286',
        name: 'Ellingen, Abzweig',
    },
    {
        id: '900160019',
        name: 'Lückstr./Weitlingstr.',
    },
    {
        id: '90016073',
        name: 'Münsterlandplatz',
    },
    {
        id: '900160532',
        name: 'Sophienstr.',
    },
    {
        id: '900160742',
        name: 'Margaretenstr.',
    },
    {
        id: '900140016',
        name: 'Roelckestr.',
    },
    {
        id: '900140019',
        name: 'Mirbachplatz',
    },
    {
        id: '900140507',
        name: 'Woelckpromenade',
    },
    {
        id: '900100531',
        name: 'Neumannsgasse',
    },
    {
        id: '900220080',
        name: 'Teltow, Einkaufszentrum Oderstr.',
    },
    {
        id: '900037156',
        name: 'Fachinger Str.',
    },
    {
        id: '900037211',
        name: 'Heerstr./Nennhauser Damm',
    },
    {
        id: '900037161',
        name: 'Am Zeppelinpark',
    },
    {
        id: '900144501',
        name: 'Darßer Str./Roelckestr.',
    },
    {
        id: '900140512',
        name: 'Roelckestr./Nüßlerstr.',
    },
    {
        id: '900140005',
        name: 'Albertinenstr.',
    },
    {
        id: '900340271',
        name: 'Dedelow, Milchviehanlage',
    },
    {
        id: '900160005',
        name: 'U Magdalenenstr.',
    },
    {
        id: '900131003',
        name: 'Karower Str.',
    },
    {
        id: '900193002',
        name: 'S Adlershof',
    },
    {
        id: '900193500',
        name: 'Otto-Franke-Str.',
    },
    {
        id: '900130015',
        name: 'Prenzlauer Prom./Kissingenstr.',
    },
    {
        id: '900160528',
        name: 'Schottstr.',
    },
    {
        id: '900194513',
        name: 'Baumschulenstr./Königsheideweg',
    },
    {
        id: '900194512',
        name: 'Mahonienweg',
    },
    {
        id: '900194511',
        name: 'Westweg',
    },
    {
        id: '900194510',
        name: 'Ostweg',
    },
    {
        id: '900194509',
        name: 'Haushoferstr.',
    },
    {
        id: '900130509',
        name: 'Kissingenplatz',
    },
    {
        id: '900340269',
        name: 'Dedelow, Dorf',
    },
    {
        id: '900195003',
        name: 'Bohnsdorfer Weg',
    },
    {
        id: '900195004',
        name: 'Köpenicker Str./Schule',
    },
    {
        id: '900144001',
        name: 'Schwarzelfenweg',
    },
    {
        id: '900110514',
        name: 'Ostseeplatz',
    },
    {
        id: '900194516',
        name: 'Engelhardstr./Pilotenstr.',
    },
    {
        id: '900340805',
        name: 'Grunewald (UM), Hauptstr.',
    },
    {
        id: '900195508',
        name: 'Altglienicker Brücke',
    },
    {
        id: '900170518',
        name: 'Paul-Dessau-Str.',
    },
    {
        id: '900170517',
        name: 'Jan-Petersen-Str.',
    },
    {
        id: '900340782',
        name: 'Grunewald (UM), Parkstr.',
    },
    {
        id: '900180532',
        name: 'Bellevuepark',
    },
    {
        id: '900180531',
        name: 'Friedrichshagener Str./Kabelwerk',
    },
    {
        id: '900161006',
        name: 'Sewanstr./Dolgenseestr.',
    },
    {
        id: '900161503',
        name: 'Mellenseestr./Sewanstr.',
    },
    {
        id: '900176504',
        name: 'Pfalzgrafenweg',
    },
    {
        id: '900162509',
        name: 'Gregoroviusweg',
    },
    {
        id: '900176517',
        name: 'An den Siedlergärten',
    },
    {
        id: '900176004',
        name: 'Wacholderheide',
    },
    {
        id: '900340804',
        name: 'Grunewald (UM), Dusterlake',
    },
    {
        id: '900152506',
        name: 'Schweriner Ring',
    },
    {
        id: '900152512',
        name: 'Siedlung Wartenberg/Str. 7',
    },
    {
        id: '900203938',
        name: 'Kurtschlag, Fichte',
    },
    {
        id: '900340769',
        name: 'Groß Dölln, Dorf',
    },
    {
        id: '900151001',
        name: 'S Wartenberg',
    },
    {
        id: '900152505',
        name: 'Siedlung Wartenberg/Str. 6',
    },
    {
        id: '900152503',
        name: 'Siedlung Wartenberg/Str. 3',
    },
    {
        id: '900152507',
        name: 'Hagenower Ring',
    },
    {
        id: '900151002',
        name: 'Neubrandenburger Str.',
    },
    {
        id: '900151008',
        name: 'Grevesmühlener Str.',
    },
    {
        id: '900194503',
        name: 'Johannes-Sasse-Ring',
    },
    {
        id: '900194502',
        name: 'Akeleiweg',
    },
    {
        id: '900100516',
        name: 'U Märkisches Museum/Inselstr.',
    },
    {
        id: '900037167',
        name: 'Ferbitzer Weg',
    },
    {
        id: '900130505',
        name: 'Neumannstr./Kissingenstr.',
    },
    {
        id: '900195501',
        name: 'Siriusstr.',
    },
    {
        id: '900037169',
        name: 'Jänickendorfer Weg',
    },
    {
        id: '900194004',
        name: 'Segelfliegerdamm/Waldstr.',
    },
    {
        id: '900170512',
        name: 'Blumberger Damm/Gärten der Welt',
    },
    {
        id: '900143504',
        name: 'Blankenburger Chaussee/Str. 42',
    },
    {
        id: '900340733',
        name: 'Wolfshagen (UM)',
    },
    {
        id: '900175012',
        name: 'Hellersdorfer Str./Gärten der Welt',
    },
    {
        id: '900175705',
        name: 'U Kienberg',
    },
    {
        id: '900175538',
        name: 'Cecilienstr./Hellersdorfer Str.',
    },
    {
        id: '900176502',
        name: 'Donizettistr./Lemkestr.',
    },
    {
        id: '900320504',
        name: 'Hönow, An der Heide',
    },
    {
        id: '900176508',
        name: 'Menzelstr.',
    },
    {
        id: '900176509',
        name: 'Löwestr.',
    },
    {
        id: '900176510',
        name: 'Lemkestr./Lenbachstr.',
    },
    {
        id: '900176005',
        name: 'Lemkestr./Kieler Str.',
    },
    {
        id: '900176500',
        name: 'Lemkestr./Lübecker Str.',
    },
    {
        id: '900171527',
        name: 'Weißenhöher Str.',
    },
    {
        id: '900180536',
        name: 'Alte Erpe',
    },
    {
        id: '900194526',
        name: 'Sterndamm/Schule',
    },
    {
        id: '900320503',
        name: 'Hönow, Hoppegartener Str.',
    },
    {
        id: '900175010',
        name: 'U Hönow',
    },
    {
        id: '900175534',
        name: 'Gothaer Str./Alte Hellersdorfer Str.',
    },
    {
        id: '900176501',
        name: 'Fritz-Reuter-Str.',
    },
    {
        id: '900100027',
        name: 'Französische Str.',
    },
    {
        id: '900175515',
        name: 'Klausdorfer Str.',
    },
    {
        id: '900170508',
        name: 'Märkische Allee/Wuhletalstr.',
    },
    {
        id: '900170504',
        name: 'Trusetaler Str.',
    },
    {
        id: '900170503',
        name: 'Schwarzburger Str.',
    },
    {
        id: '500000051302',
        name: 'Blücher, Abzweig',
    },
    {
        id: '900170502',
        name: 'Belziger Ring',
    },
    {
        id: '900170501',
        name: 'Rabensteiner Str.',
    },
    {
        id: '900170540',
        name: 'Havemannstr./Kemberger Str.',
    },
    {
        id: '900310399',
        name: 'Erkner, Berliner Str.',
    },
    {
        id: '900130019',
        name: 'Wollankstr./Florastr.',
    },
    {
        id: '900194525',
        name: 'Albert-Einstein-Str.',
    },
    {
        id: '900194001',
        name: 'Am Studio/Köpenicker Str.',
    },
    {
        id: '900160012',
        name: 'Herzbergstr./Siegfriedstr.',
    },
    {
        id: '900160527',
        name: 'Rüdigerstr.',
    },
    {
        id: '900340739',
        name: 'Zernikow (UM), Abzweig',
    },
    {
        id: '900195512',
        name: 'Werderlake',
    },
    {
        id: '900192502',
        name: 'Bruno-Bürgel-Weg',
    },
    {
        id: '900160530',
        name: 'Atzpodienstr./U Magdalenenstr.',
    },
    {
        id: '900175525',
        name: 'Alice-Herz-Platz',
    },
    {
        id: '900175530',
        name: 'Iselbergstr.',
    },
    {
        id: '900175531',
        name: 'Am Baltenring',
    },
    {
        id: '900175521',
        name: 'Grottkauer Str.',
    },
    {
        id: '900175522',
        name: 'Tolkmittstr.',
    },
    {
        id: '900175523',
        name: 'Slabystr.',
    },
    {
        id: '900175526',
        name: 'Landréstr.',
    },
    {
        id: '900160733',
        name: 'Münsterlandplatz',
    },
    {
        id: '900175527',
        name: 'Bredereckstr.',
    },
    {
        id: '900170528',
        name: 'Zinndorfer Str.',
    },
    {
        id: '900175529',
        name: 'Uckermarkstr.',
    },
    {
        id: '900160523',
        name: 'Gotlindestr.',
    },
    {
        id: '900161510',
        name: 'Lincolnstr.',
    },
    {
        id: '900161511',
        name: 'Kraetkestr.',
    },
    {
        id: '900100523',
        name: 'Köpenicker Str./Adalbertstr.',
    },
    {
        id: '900120530',
        name: 'Boxhagener Platz',
    },
    {
        id: '900120531',
        name: 'Simon-Dach-Str.',
    },
    {
        id: '900195006',
        name: 'Altglienicke Kirche',
    },
    {
        id: '900037158',
        name: 'Oberdorfer Steig',
    },
    {
        id: '900176520',
        name: 'Hirtschulzstr.',
    },
    {
        id: '900195518',
        name: 'Normannenstr.',
    },
    {
        id: '900132515',
        name: 'Lessingstr./Uhlandstr.',
    },
    {
        id: '900075155',
        name: 'Lohmühlenstr./Heidelberger Str.',
    },
    {
        id: '900195008',
        name: 'Preußenstr.',
    },
    {
        id: '900037155',
        name: 'Isenburger Weg',
    },
    {
        id: '900190010',
        name: 'Lohmühlenstr.',
    },
    {
        id: '900193506',
        name: 'Wassermannstr.',
    },
    {
        id: '900193505',
        name: 'Marktplatz Adlershof',
    },
    {
        id: '900193703',
        name: 'Anna-Seghers-Str.',
    },
    {
        id: '900185500',
        name: 'Zeuthener Weg',
    },
    {
        id: '900180012',
        name: 'Köllnischer Platz',
    },
    {
        id: '900130519',
        name: 'Lohmestr.',
    },
    {
        id: '900160529',
        name: 'Josef-Orlopp-Str./Gewerbegebiet(Berlin)',
    },
    {
        id: '900185002',
        name: 'Fährallee',
    },
    {
        id: '900195517',
        name: 'Keltensteig',
    },
    {
        id: '900340730',
        name: 'Vietmannsdorf, Kreuzung',
    },
    {
        id: '900340877',
        name: 'Heinrichshof, Abzweig',
    },
    {
        id: '900340601',
        name: 'Schulenburgslust',
    },
    {
        id: '900195012',
        name: 'Am Kiesberg',
    },
    {
        id: '900340393',
        name: 'Karlshof (bei Templin)',
    },
    {
        id: '900340266',
        name: 'Dargersdorf',
    },
    {
        id: '900340700',
        name: 'Vietmannsdorf, Mitte',
    },
    {
        id: '900150521',
        name: 'Hansastr.',
    },
    {
        id: '900131504',
        name: 'Heinrich-Mann-Platz',
    },
    {
        id: '900120535',
        name: 'Pillauer Str.',
    },
    {
        id: '900185003',
        name: 'Moßkopfring',
    },
    {
        id: '900340768',
        name: 'Ringenwalde (UM), Neubau',
    },
    {
        id: '900150520',
        name: 'Indira-Gandhi-Str./Hansastr.',
    },
    {
        id: '900182003',
        name: 'Hirschgarten',
    },
    {
        id: '900340612',
        name: 'Stegelitz, Pfingstberger Damm',
    },
    {
        id: '900182507',
        name: 'Bruno-Wille-Str.',
    },
    {
        id: '900180013',
        name: 'Bellevuestr.',
    },
    {
        id: '900182502',
        name: 'Mühlweg',
    },
    {
        id: '900183514',
        name: 'Strandbad Müggelsee',
    },
    {
        id: '900176539',
        name: 'Jacques-Offenbach-Platz',
    },
    {
        id: '900182503',
        name: 'Ahornallee',
    },
    {
        id: '900182506',
        name: 'Josef-Nawrocki-Str.',
    },
    {
        id: '900183513',
        name: 'Licht- und Luftbad Müggelsee',
    },
    {
        id: '900340776',
        name: 'Ahrensdorf (UM), Petersdorfer Str.',
    },
    {
        id: '900344022',
        name: 'Petersdorf, Petersdorfer Siedlung',
    },
    {
        id: '900180517',
        name: 'Pritstabelstr.',
    },
    {
        id: '900180519',
        name: 'Zur Nachtheide',
    },
    {
        id: '900180015',
        name: 'Wendenschloß',
    },
    {
        id: '900340779',
        name: 'Templin-Ahrensdorf (UM), Bhf',
    },
    {
        id: '900171512',
        name: 'Brebacher Weg',
    },
    {
        id: '900340369',
        name: 'Henkinshain',
    },
    {
        id: '900100051',
        name: 'U Weinmeisterstr.',
    },
    {
        id: '900340807',
        name: 'Ahrensdorf (UM), Siedlung',
    },
    {
        id: '900182504',
        name: 'Drachholzstr.',
    },
    {
        id: '900175552',
        name: 'Mädewalder Weg',
    },
    {
        id: '900340496',
        name: 'Pfingstberg, Dorf',
    },
    {
        id: '900140003',
        name: 'Große Seestr.',
    },
    {
        id: '900176550',
        name: 'Wildrosengehölz',
    },
    {
        id: '900185506',
        name: 'Schmöckwitzer Damm',
    },
    {
        id: '900180544',
        name: 'Neuer Weg',
    },
    {
        id: '900180546',
        name: 'Salvador-Allende-Brücke',
    },
    {
        id: '900340377',
        name: 'Hindenburg, Ausbau',
    },
    {
        id: '900181701',
        name: 'Wilhelminenhofstr./Edisonstr.',
    },
    {
        id: '900185507',
        name: 'Schmöckwitzer Forst',
    },
    {
        id: '900340379',
        name: 'Hindenburg, Kurth',
    },
    {
        id: '900340378',
        name: 'Hindenburg, Kirche',
    },
    {
        id: '900120024',
        name: 'Stralauer Platz',
    },
    {
        id: '900037132',
        name: 'Ungewitterweg',
    },
    {
        id: '900340847',
        name: 'Groß Väter, Dorf',
    },
    {
        id: '900340234',
        name: 'Birkenhof',
    },
    {
        id: '900131511',
        name: 'Buchholzer Str./Wackenbergstr.',
    },
    {
        id: '900130005',
        name: 'Hadlichstr.',
    },
    {
        id: '900131520',
        name: 'Heinrich-Mann-Str.',
    },
    {
        id: '900130506',
        name: 'Masurenstr.',
    },
    {
        id: '900152501',
        name: 'Seehausener Str.',
    },
    {
        id: '900195520',
        name: 'Alter Schönefelder Weg',
    },
    {
        id: '900195720',
        name: 'Pfarrwöhrde',
    },
    {
        id: '900341341',
        name: 'El Dorado',
    },
    {
        id: '900180003',
        name: 'S Spindlersfeld',
    },
    {
        id: '900180539',
        name: 'Friedlander Str.',
    },
    {
        id: '900195516',
        name: 'Drössestr.',
    },
    {
        id: '900195515',
        name: 'Gartenstadtweg',
    },
    {
        id: '900340206',
        name: 'Alsenhof',
    },
    {
        id: '900131515',
        name: 'Wackenbergstr.',
    },
    {
        id: '900131516',
        name: 'Herthaplatz',
    },
    {
        id: '900131517',
        name: 'Selma-und-Paul-Latte-Platz',
    },
    {
        id: '900131002',
        name: 'Grumbkowstr.',
    },
    {
        id: '900195719',
        name: 'Korkedamm',
    },
    {
        id: '900340222',
        name: 'Bebersee',
    },
    {
        id: '900132523',
        name: 'Schönhauser Str./Kirchstr.',
    },
    {
        id: '900180540',
        name: 'Freystadter Weg',
    },
    {
        id: '900192509',
        name: 'Schnellerstr./Köllnische Str.',
    },
    {
        id: '900132524',
        name: 'Am Rollberg',
    },
    {
        id: '900150711',
        name: 'Hohenschönhauser Str. [1-2]',
    },
    {
        id: '900132525',
        name: 'Bergrutenpfad',
    },
    {
        id: '900132526',
        name: 'Kräuterweg',
    },
    {
        id: '900037130',
        name: 'Möthlower Str.',
    },
    {
        id: '900180538',
        name: 'Bärenlauchstr.',
    },
    {
        id: '900037168',
        name: 'Albrechtshof',
    },
    {
        id: '900120541',
        name: 'Osthafen',
    },
    {
        id: '900120524',
        name: 'Stralauer Allee',
    },
    {
        id: '900194551',
        name: 'Späthstr./Ligusterweg',
    },
    {
        id: '900160018',
        name: 'Landsberger Allee/Weißenseer Weg',
    },
    {
        id: '900150519',
        name: 'Sportforum',
    },
    {
        id: '900140007',
        name: 'Hansastr./Buschallee',
    },
    {
        id: '900140014',
        name: 'Giersstr.',
    },
    {
        id: '900340327',
        name: 'Gollin, Torwärterhäuser',
    },
    {
        id: '900110005',
        name: 'U Senefelderplatz',
    },
    {
        id: '900150518',
        name: 'Betriebshof Indira-Gandhi-Str.',
    },
    {
        id: '900037133',
        name: 'Seegefelder Weg',
    },
    {
        id: '900160540',
        name: 'Zentralfriedhof',
    },
    {
        id: '900150522',
        name: 'Gounodstr.',
    },
    {
        id: '900340351',
        name: 'Gut Gollin',
    },
    {
        id: '900205712',
        name: 'Wittstock (Dosse), Prignitzer Str.',
    },
    {
        id: '900415739',
        name: 'Hohenleipisch, Waldsiedlung',
    },
    {
        id: '900350335',
        name: 'Eberswalde, Fr.-Ebert-Str.',
    },
    {
        id: '900350353',
        name: 'Eberswalde, Neue Str.',
    },
    {
        id: '900205473',
        name: 'Neuruppin, Pfarrkirche',
    },
    {
        id: '900350325',
        name: 'Eberswalde, Ackerstr.',
    },
    {
        id: '900350358',
        name: 'Eberswalde, Robert-Koch-Str.',
    },
    {
        id: '900350351',
        name: 'Eberswalde, Am Markt',
    },
    {
        id: '900350346',
        name: 'Eberswalde, Kupferhammer',
    },
    {
        id: '900350127',
        name: 'Eberswalde, Hbf',
    },
    {
        id: '900350345',
        name: 'Eberswalde, Sportzentrum Westend',
    },
    {
        id: '900350331',
        name: 'Eberswalde, Clara-Zetkin-Weg',
    },
    {
        id: '900350437',
        name: 'Brandenburgisches Viertel, Uckermarkstr.',
    },
    {
        id: '900350336',
        name: 'Eberswalde, Gertraudenstr.',
    },
    {
        id: '900350340',
        name: 'Eberswalde, Karl-Bach-Str.',
    },
    {
        id: '900350356',
        name: 'Eberswalde, Ostend',
    },
    {
        id: '900350365',
        name: 'Eberswalde, Sommerfelder Str.',
    },
    {
        id: '900350360',
        name: 'Eberswalde, Saarstr.',
    },
    {
        id: '900350334',
        name: 'Eberswalde, Freienwalder Str.',
    },
    {
        id: '900350326',
        name: 'Eberswalde, Am Friedhof',
    },
    {
        id: '770000205031',
        name: 'Kyritz, Hagenstr.',
    },
    {
        id: '900350362',
        name: 'Eberswalde, Schneiderstr.',
    },
    {
        id: '900350348',
        name: 'Eberswalde, Leibnizviertel',
    },
    {
        id: '900350359',
        name: 'Eberswalde, Rosengrund',
    },
    {
        id: '900350435',
        name: 'Brandenburgisches Viertel, Spechthausener Str.',
    },
    {
        id: '900350417',
        name: 'Brandenburgisches Viertel, Barnimer Heide',
    },
    {
        id: '900275615',
        name: 'Brandenburg, Libellenweg',
    },
    {
        id: '900245092',
        name: 'Löwendorf, Schönhagener Str.',
    },
    {
        id: '900245093',
        name: 'Löwendorf, Ahrensdorfer Str.',
    },
    {
        id: '900245413',
        name: 'Paplitz, Str. des Friedens',
    },
    {
        id: '900245317',
        name: 'Schönefeld (bei Luckenwalde), Hammerweg',
    },
    {
        id: '900310880',
        name: 'Fürstenwalde, Spree-Campus',
    },
    {
        id: '900245072',
        name: 'Großbeeren, Birkholzer Str.',
    },
    {
        id: '900073241',
        name: 'Nahmitzer Damm/Marienfelder Allee',
    },
    {
        id: '900245409',
        name: 'Saalow, Mellenseestr.',
    },
    {
        id: '900350424',
        name: 'Brandenburgisches Viertel, Frankfurter Allee',
    },
    {
        id: '900350433',
        name: 'Brandenburgisches Viertel, Potsdamer Allee',
    },
    {
        id: '900350419',
        name: 'Brandenburgisches Viertel, Brandenburger Allee',
    },
    {
        id: '900350438',
        name: 'Finow, Waldhäuschen',
    },
    {
        id: '900350423',
        name: 'Finow, Forsthaus',
    },
    {
        id: '900350416',
        name: 'Finow, Wolfswinkel',
    },
    {
        id: '900350343',
        name: 'Eberswalde, Kranbau',
    },
    {
        id: '900350350',
        name: 'Eberswalde, Märka',
    },
    {
        id: '900203968',
        name: 'Steinförde, Kleinmenow',
    },
    {
        id: '900350371',
        name: 'Eberswalde, Wassertorbrücke',
    },
    {
        id: '900350411',
        name: 'Finowfurt, Str. zum Jugendheim',
    },
    {
        id: '900350404',
        name: 'Finowfurt, Fachmarkt',
    },
    {
        id: '900350366',
        name: 'Eberswalde, Stadtsee',
    },
    {
        id: '900245766',
        name: 'Mahlow, Krügers Land',
    },
    {
        id: '900350817',
        name: 'Eberswalde, Schule Nordend',
    },
    {
        id: '900350729',
        name: 'Tornow (BAR)',
    },
    {
        id: '900350705',
        name: 'Sommerfelde, Dorf',
    },
    {
        id: '900350706',
        name: 'Sommerfelde, Siedlung',
    },
    {
        id: '900350406',
        name: 'Finowfurt, Kreuzung',
    },
    {
        id: '900350407',
        name: 'Finowfurt, Krugacker',
    },
    {
        id: '900350385',
        name: 'Eichhorst, Schleuse',
    },
    {
        id: '900350380',
        name: 'Eichhorst, Dorf',
    },
    {
        id: '900350384',
        name: 'Eichhorst, Rosenbeck',
    },
    {
        id: '900350381',
        name: 'Eichhorst, Fennberg',
    },
    {
        id: '900350412',
        name: 'Finowfurt, Kaiserbrücke',
    },
    {
        id: '900350402',
        name: 'Finowfurt, Besters Fließ',
    },
    {
        id: '900350415',
        name: 'Finowfurt, Werbelliner Str.',
    },
    {
        id: '900220960',
        name: 'Busendorf',
    },
    {
        id: '900350413',
        name: 'Finowfurt, Triftstr.',
    },
    {
        id: '900350370',
        name: 'Eberswalde, Tramper Chaussee',
    },
    {
        id: '900350427',
        name: 'Finow, Heinrich-Rau-Str.',
    },
    {
        id: '900350372',
        name: 'Eberswalde, Weinbergstr.',
    },
    {
        id: '900350432',
        name: 'Finow, Post',
    },
    {
        id: '900350426',
        name: 'Finow, Großer Stern',
    },
    {
        id: '900350439',
        name: 'Finow, Winkelstr.',
    },
    {
        id: '900435914',
        name: 'Woschkow, L53',
    },
    {
        id: '900350436',
        name: 'Finow, Str. des Friedens',
    },
    {
        id: '900350425',
        name: 'Finow, Großbäckerei',
    },
    {
        id: '770000105031',
        name: 'Kyritz, Hagenstr.',
    },
    {
        id: '900350550',
        name: 'Eberswalde, Lichterfelder Brücke',
    },
    {
        id: '900350339',
        name: 'Eberswalde, Industriegelände',
    },
    {
        id: '900350342',
        name: 'Eberswalde, Kaufland',
    },
    {
        id: '900350422',
        name: 'Finow, Erich-Steinfurth-Str.',
    },
    {
        id: '900350431',
        name: 'Finow, Mäckerseebrücke',
    },
    {
        id: '900350344',
        name: 'Eberswalde, Krankenhaus',
    },
    {
        id: '900350364',
        name: 'Eberswalde, Schwärzetal',
    },
    {
        id: '900350347',
        name: 'Eberswalde, Raumerstr.',
    },
    {
        id: '900350361',
        name: 'Eberswalde, Sandbergstr.',
    },
    {
        id: '900350549',
        name: 'Lichterfelde (BAR), Eiscafe',
    },
    {
        id: '900350420',
        name: 'Finow, Clara-Zetkin-Siedlung',
    },
    {
        id: '900350553',
        name: 'Lichterfelde (BAR), Steinfurter Allee',
    },
    {
        id: '900350547',
        name: 'Lichterfelde (BAR), Bauernstube',
    },
    {
        id: '900310508',
        name: 'Woltersdorf (LOS), Blumenstr.',
    },
    {
        id: '900350552',
        name: 'Lichterfelde (BAR), Siedlung',
    },
    {
        id: '900350554',
        name: 'Lichterfelde (BAR), Tischlerei',
    },
    {
        id: '900350551',
        name: 'Lichterfelde (BAR), Seniorenheim',
    },
    {
        id: '900245378',
        name: 'Mellensee, Saalower Chaussee',
    },
    {
        id: '900245000',
        name: 'Gadsdorf, Siedlung',
    },
    {
        id: '900260588',
        name: 'Pätz, Lindenstr.',
    },
    {
        id: '900245016',
        name: 'Luckenwalde, Bhf',
    },
    {
        id: '900245637',
        name: 'Altes Lager, Waldstr.',
    },
    {
        id: '900245095',
        name: 'Körbitz (bei Jüterbog)',
    },
    {
        id: '900245099',
        name: 'Forsthaus, Lindhorst',
    },
    {
        id: '900245163',
        name: 'Jüterbog, Zinnaer Tor',
    },
    {
        id: '900245147',
        name: 'Jüterbog, Neuheimer Weg',
    },
    {
        id: '900203502',
        name: 'Grieben, Friedhofstr.',
    },
    {
        id: '900204046',
        name: 'Linde, Dorfstr.',
    },
    {
        id: '900203709',
        name: 'Gransee, Bhf',
    },
    {
        id: '900204020',
        name: 'Gramzow (OHV), Dorf',
    },
    {
        id: '900204019',
        name: 'Mildenberg, Ziegeleipark',
    },
    {
        id: '900204018',
        name: 'Gransee, Ruppiner Str./Wasserwerk',
    },
    {
        id: '900245337',
        name: 'Rohrbeck, Hauptstr.',
    },
    {
        id: '900245326',
        name: 'Malterhausen, Feuerwehr',
    },
    {
        id: '900200106',
        name: 'Hennigsdorf, Waidmannsweg',
    },
    {
        id: '900220853',
        name: 'Potsdam, Schule Marquardt',
    },
    {
        id: '900261523',
        name: 'Lübben, Neuendorf Gewerbegebiet',
    },
    {
        id: '900120011',
        name: 'S Warschauer Str.',
    },
    {
        id: '900245353',
        name: 'Trebbin, Christinendorfer Chaussee',
    },
    {
        id: '900245094',
        name: 'Kurzlipsdorf, Ort',
    },
    {
        id: '900245314',
        name: 'Luckenwalde, Ruhlsdorfer Chaussee',
    },
    {
        id: '900245526',
        name: 'Luckenwalde, Woltersdorfer Str.',
    },
    {
        id: '900245301',
        name: 'Trebbin, Höpfnerstr.',
    },
    {
        id: '900204017',
        name: 'Oranienburg, Str. der Einheit',
    },
    {
        id: '900204044',
        name: 'Himmelpfort, Klosterstr.',
    },
    {
        id: '900203982',
        name: 'Qualzow',
    },
    {
        id: '900203981',
        name: 'Mildenberg, Kirche',
    },
    {
        id: '900203980',
        name: 'Mildenberg, Friedhof',
    },
    {
        id: '900203979',
        name: 'Marienthal, Wiesenweg',
    },
    {
        id: '900203977',
        name: 'Himmelpfort, Zur Hasenheide',
    },
    {
        id: '900203976',
        name: 'Himmelpfort, An der Mühle',
    },
    {
        id: '900203975',
        name: 'Bredereiche, Forsthaus',
    },
    {
        id: '900203973',
        name: 'Bredereiche, Dorfstr.',
    },
    {
        id: '900203990',
        name: 'Liebenwalde, Bahnhofstr.',
    },
    {
        id: '900205356',
        name: 'Keller, Ausbau',
    },
    {
        id: '900204014',
        name: 'Velten, Hedwigpromenade',
    },
    {
        id: '900204013',
        name: 'Velten, Carolinenstr.',
    },
    {
        id: '900204012',
        name: 'Velten, Viktoriastr.',
    },
    {
        id: '900204007',
        name: 'Velten, Ernst-Thälmann-Str.',
    },
    {
        id: '900203999',
        name: 'Oranienburg, Freiburger Str.',
    },
    {
        id: '900203998',
        name: 'Meseberg, Dorfstr.',
    },
    {
        id: '900203997',
        name: 'Schulzendorf (OHV), Ausbau',
    },
    {
        id: '900203996',
        name: 'Sonnenberg, Ausbau',
    },
    {
        id: '900203992',
        name: 'Neulüdersdorf, Dorfstr.',
    },
    {
        id: '900320550',
        name: 'Strausberg, Am Annatal',
    },
    {
        id: '900245098',
        name: 'Jüterbog, Schulstr.',
    },
    {
        id: '900245402',
        name: 'Waldstadt, Fritz-Jäger-Allee',
    },
    {
        id: '900245577',
        name: 'Saalow, Mühle',
    },
    {
        id: '900245145',
        name: 'Petkus, Hauptstr.',
    },
    {
        id: '900245327',
        name: 'Altes Lager, Landebahn',
    },
    {
        id: '900245248',
        name: 'Langenlipsdorf, Kirche',
    },
    {
        id: '900245172',
        name: 'Hohenahlsdorf, Dorfstr.',
    },
    {
        id: '900245169',
        name: 'Gräfendorf (TF), Dorfstr.',
    },
    {
        id: '900245162',
        name: 'Jüterbog, Wiesenhalle',
    },
    {
        id: '900245179',
        name: 'Nonnendorf, Dorf',
    },
    {
        id: '900245190',
        name: 'Werbig (TF), Jüterboger Str.',
    },
    {
        id: '900245404',
        name: 'Waldstadt, Berliner Allee',
    },
    {
        id: '900245329',
        name: 'Nonnendorf, Wiepersdorfer Weg',
    },
    {
        id: '900245102',
        name: 'Blankensee (TF), Grössinsee',
    },
    {
        id: '900245333',
        name: 'Klein Schulzendorf, Trebbiner Str.',
    },
    {
        id: '900310900',
        name: 'Fürstenwalde, Waldrandsiedlung',
    },
    {
        id: '900245277',
        name: 'Scharfenbrück, Am Park',
    },
    {
        id: '900200006',
        name: 'S Lehnitz',
    },
    {
        id: '900311114',
        name: 'Spreeau, Freienbrink Tesla',
    },
    {
        id: '900141502',
        name: 'Tino-Schwierzina-Str.',
    },
    {
        id: '900245213',
        name: 'Kolzenburg, Zum Wasserwerk',
    },
    {
        id: '900204028',
        name: 'Oranienburg, Petscheltweg',
    },
    {
        id: '900203385',
        name: 'Hennigsdorf, Fontanesiedlung Nord',
    },
    {
        id: '900204026',
        name: 'Oranienburg, A.-Becker-Str.',
    },
    {
        id: '900275114',
        name: 'Brandenburg, Große Gartenstr.',
    },
    {
        id: '900261025',
        name: 'Wildau, Gesundheitszentrum',
    },
    {
        id: '900220330',
        name: 'Roskow, Schule',
    },
    {
        id: '900261032',
        name: 'Zeesen, Schule',
    },
    {
        id: '900261003',
        name: 'Zeesen, Alte Hauptstr.',
    },
    {
        id: '900261004',
        name: 'Zeesen, Nordstr.',
    },
    {
        id: '900260038',
        name: 'Miersdorf, See',
    },
    {
        id: '900260299',
        name: 'Biebersdorf, Försterei',
    },
    {
        id: '900275146',
        name: 'Klein Kreutz, Dorfstr.',
    },
    {
        id: '900220253',
        name: 'Warchau',
    },
    {
        id: '900275813',
        name: 'Brandenburg, Nicolaiplatz',
    },
    {
        id: '900220041',
        name: 'Pritzerbe, Marzahner Chaussee',
    },
    {
        id: '900222087',
        name: 'Golzow (PM), Pernitz',
    },
    {
        id: '900222193',
        name: 'Treuenbrietzen, Markt',
    },
    {
        id: '900222015',
        name: 'Bad Belzig, Markt',
    },
    {
        id: '900350388',
        name: 'Eichhorst, Askanierturm',
    },
    {
        id: '900350387',
        name: 'Eichhorst, Wildau',
    },
    {
        id: '900321131',
        name: 'Neumädewitz',
    },
    {
        id: '900321167',
        name: 'Wriezen, Allende-Schule',
    },
    {
        id: '900321102',
        name: 'Jäckelsbruch',
    },
    {
        id: '900321125',
        name: 'Neukietz',
    },
    {
        id: '900321011',
        name: 'Altmädewitz, Bhf',
    },
    {
        id: '900321006',
        name: 'Altglietzen, Konradsbrück',
    },
    {
        id: '900321012',
        name: 'Altmädewitz, Dorf',
    },
    {
        id: '900321073',
        name: 'Ferdinandshof (MOL)',
    },
    {
        id: '900321130',
        name: 'Neulietzegöricke, Wendestelle',
    },
    {
        id: '900321129',
        name: 'Neulietzegöricke',
    },
    {
        id: '900321014',
        name: 'Altranft, Esser',
    },
    {
        id: '900321176',
        name: 'Wriezen, Max-Reimann-Str.',
    },
    {
        id: '900321174',
        name: 'Wriezen, Internat',
    },
    {
        id: '900321178',
        name: 'Wriezen, Stadtverwaltung',
    },
    {
        id: '900321175',
        name: 'Wriezen, Krankenhaus',
    },
    {
        id: '900321172',
        name: 'Wriezen, Gaswerk',
    },
    {
        id: '900321179',
        name: 'Wriezen, Tankstelle',
    },
    {
        id: '900321003',
        name: 'Altgaul, Dorf',
    },
    {
        id: '900321148',
        name: 'Rathsdorf',
    },
    {
        id: '900321020',
        name: 'Altwustrow',
    },
    {
        id: '900321135',
        name: 'Neurüdnitz, Bhf',
    },
    {
        id: '900321136',
        name: 'Neurüdnitz, Dorf',
    },
    {
        id: '900321134',
        name: 'Neureetz, Neubau',
    },
    {
        id: '900321133',
        name: 'Neureetz, Dorf',
    },
    {
        id: '900321063',
        name: 'Croustillier',
    },
    {
        id: '900321016',
        name: 'Altranft, Zuckerfabrik',
    },
    {
        id: '900350630',
        name: 'Oderberg, Odertalstadion',
    },
    {
        id: '900321100',
        name: 'Hohenwutzen, Dorf',
    },
    {
        id: '900321180',
        name: 'Zäckericker Loose, Ausbau',
    },
    {
        id: '900321145',
        name: 'Neuwustrow',
    },
    {
        id: '900321017',
        name: 'Altreetz, Bhf',
    },
    {
        id: '900321018',
        name: 'Altreetz, Dorf',
    },
    {
        id: '900321106',
        name: 'Kerstenbruch',
    },
    {
        id: '900321128',
        name: 'Neulewin, Kreuzung',
    },
    {
        id: '900321127',
        name: 'Neulewin, Dorf',
    },
    {
        id: '900321184',
        name: 'Zäckericker Loose, Zollbrücke Kreuzung',
    },
    {
        id: '900321181',
        name: 'Zäckericker Loose, Dorf',
    },
    {
        id: '900321162',
        name: 'Vevais',
    },
    {
        id: '900321191',
        name: 'Kunersdorf (MOL), Dorf',
    },
    {
        id: '900321097',
        name: 'Herrenhof (MOL)',
    },
    {
        id: '900321114',
        name: 'Lüdersdorf (bei Wriezen)',
    },
    {
        id: '900320300',
        name: 'Schulzendorf (MOL), Dorf',
    },
    {
        id: '900320302',
        name: 'Schulzendorf (MOL), Reitplatz',
    },
    {
        id: '900321173',
        name: 'Wriezen, Homburgshöhe',
    },
    {
        id: '900321061',
        name: 'Brunow',
    },
    {
        id: '900321077',
        name: 'Freudenberg, Gemeindezentrum',
    },
    {
        id: '900321092',
        name: 'Heckelberg, Ausbau',
    },
    {
        id: '900321093',
        name: 'Heckelberg, Dorf',
    },
    {
        id: '900321105',
        name: 'Katharinenhof',
    },
    {
        id: '900321091',
        name: 'Heckelberg, Ambulatorium',
    },
    {
        id: '900321144',
        name: 'Neutrebbin, Wriezener Str.',
    },
    {
        id: '900321010',
        name: 'Altlewin',
    },
    {
        id: '900321611',
        name: 'Neubarnim, Oberdorf',
    },
    {
        id: '900350489',
        name: 'Hohenfinow, Abzweig',
    },
    {
        id: '900321110',
        name: 'Krummenpfahl',
    },
    {
        id: '900321064',
        name: 'Dannenberg',
    },
    {
        id: '900321161',
        name: 'Torgelow (MOL)',
    },
    {
        id: '900321627',
        name: 'Neuhardenberg, Busbahnhof',
    },
    {
        id: '900321310',
        name: 'Altfriedland, Dorf',
    },
    {
        id: '900321440',
        name: 'Gottesgabe',
    },
    {
        id: '900321141',
        name: 'Neutrebbin, Denkmal/Schule',
    },
    {
        id: '900321094',
        name: 'Heckelberg, Neue Schule',
    },
    {
        id: '900321054',
        name: 'Bliesdorf',
    },
    {
        id: '900321096',
        name: 'Heinrichsdorf (MOL), Damm',
    },
    {
        id: '900321095',
        name: 'Heinrichsdorf (MOL)',
    },
    {
        id: '900470338',
        name: 'Cottbus, Kahren Am Lehrerhaus',
    },
    {
        id: '900321046',
        name: 'Beauregard, Alter Bahnhof',
    },
    {
        id: '900321048',
        name: 'Beauregard, Entenzucht',
    },
    {
        id: '900321065',
        name: 'Eichwerder',
    },
    {
        id: '900321116',
        name: 'Metzdorf',
    },
    {
        id: '900321190',
        name: 'Kunersdorf (MOL), B 167',
    },
    {
        id: '900445734',
        name: 'Illmersdorf',
    },
    {
        id: '900321080',
        name: 'Gersdorf (MOL)',
    },
    {
        id: '900321124',
        name: 'Neugersdorf',
    },
    {
        id: '900321062',
        name: 'Cöthen',
    },
    {
        id: '000008071192',
        name: 'Bülzig Kindergarten',
    },
    {
        id: '000008071193',
        name: 'Zörnigall, Bhf',
    },
    {
        id: '900350395',
        name: 'Falkenberg (MOL), Amalienhof Ausbau',
    },
    {
        id: '900321067',
        name: 'Falkenberg (MOL), Amalienhof',
    },
    {
        id: '900321072',
        name: 'Falkenberg (MOL), Thälmannstr.',
    },
    {
        id: '900321070',
        name: 'Falkenberg (MOL), Ortsmitte',
    },
    {
        id: '900321069',
        name: 'Falkenberg (MOL), Gärtnerei',
    },
    {
        id: '900321071',
        name: 'Falkenberg (MOL), Papierfabrik',
    },
    {
        id: '900350548',
        name: 'Lichterfelde (BAR), Buckow',
    },
    {
        id: '000308663002',
        name: 'Gransee, Wasserwerk',
    },
    {
        id: '900350207',
        name: 'Altenhof, Unter den Buchen',
    },
    {
        id: '900205014',
        name: 'Alt Ruppin, Breite Str.',
    },
    {
        id: '900350760',
        name: 'Werbellin, Dorf',
    },
    {
        id: '900350759',
        name: 'Werbellin, Abzweig',
    },
    {
        id: '900350313',
        name: 'Brodowin, Ziegenberg',
    },
    {
        id: '900321005',
        name: 'Altglietzen, Dorf',
    },
    {
        id: '900350588',
        name: 'Neuehütte, Dorf',
    },
    {
        id: '900350505',
        name: 'Joachimsthal, Jägerhof',
    },
    {
        id: '900350512',
        name: 'Joachimsthal, Trenns-Ecke',
    },
    {
        id: '900350888',
        name: 'Britz, Eberswalder Str.',
    },
    {
        id: '000308927003',
        name: 'Grünplan, Abzweig',
    },
    {
        id: '770000205376',
        name: 'Kümmernitz, Gaststätte',
    },
    {
        id: '900350210',
        name: 'Altenhof, Dorf',
    },
    {
        id: '900350209',
        name: 'Altenhof, Kiefernweg',
    },
    {
        id: '900350211',
        name: 'Altenhof, Seetor',
    },
    {
        id: '900350208',
        name: 'Altenhof, Seezeit Werbellinsee',
    },
    {
        id: '900350714',
        name: 'Stolzenhagen (bei Oderberg), Ortseingang',
    },
    {
        id: '900350568',
        name: 'Lüdersdorf (bei Oderberg), Dorf',
    },
    {
        id: '900350589',
        name: 'Neuendorf (bei Oderberg), Dorf',
    },
    {
        id: '900350628',
        name: 'Oderberg, Am Friedenshain',
    },
    {
        id: '900350490',
        name: 'Hohenfinow, Dorf',
    },
    {
        id: '770000105377',
        name: 'Kümmernitz, Kreuzung',
    },
    {
        id: '900350510',
        name: 'Joachimsthal, Michen',
    },
    {
        id: '900350511',
        name: 'Joachimsthal, Yachthafen',
    },
    {
        id: '900350222',
        name: 'Althüttendorf, Kreuzung',
    },
    {
        id: '900350701',
        name: 'Senftenhütte',
    },
    {
        id: '900350658',
        name: 'Sandkrug, Dorf',
    },
    {
        id: '900350659',
        name: 'Sandkrug, Gaststätte',
    },
    {
        id: '000312084001',
        name: 'Sieversdorf (OPR), Filmtierschule',
    },
    {
        id: '900350587',
        name: 'Neuehütte, Abzweig',
    },
    {
        id: '900205781',
        name: 'Frankendorf (OPR), Reiterhof',
    },
    {
        id: '900205198',
        name: 'Neuruppin, Martin-Ebell-Str.',
    },
    {
        id: '900350307',
        name: 'Britz, Dorf',
    },
    {
        id: '900350310',
        name: 'Britz, Schule',
    },
    {
        id: '900350124',
        name: 'Britz, Bhf',
    },
    {
        id: '900350403',
        name: 'Finowfurt, Finowfurter Ring',
    },
    {
        id: '900350408',
        name: 'Finowfurt, Magistrale 1',
    },
    {
        id: '900350405',
        name: 'Finowfurt, Heideufer',
    },
    {
        id: '900350383',
        name: 'Joachimsthal, Hubertusstock',
    },
    {
        id: '900350386',
        name: 'Joachimsthal, Campingplatz Spring',
    },
    {
        id: '900205773',
        name: 'Neuruppin, K.-Kollwitz-Str.',
    },
    {
        id: '900205772',
        name: 'Neuruppin, Sonnenallee',
    },
    {
        id: '900350318',
        name: 'Chorin, Kloster',
    },
    {
        id: '770000205377',
        name: 'Kümmernitz, Kreuzung',
    },
    {
        id: '900350504',
        name: 'Joachimsthal, Funkhaus',
    },
    {
        id: '900350311',
        name: 'Brodowin, Dorf',
    },
    {
        id: '900350312',
        name: 'Brodowin, Weißensee',
    },
    {
        id: '900350704',
        name: 'Serwest, Wendestelle',
    },
    {
        id: '900350908',
        name: 'Chorin, Abzweig Brodowin',
    },
    {
        id: '900205448',
        name: 'Neuruppin, Fährweg',
    },
    {
        id: '900205468',
        name: 'Neuruppin, Lindenallee',
    },
    {
        id: '900350317',
        name: 'Chorin, Hüttenweg',
    },
    {
        id: '900350315',
        name: 'Chorin, An der B 2',
    },
    {
        id: '900205512',
        name: 'Wustrau-Radensleben, Bhf',
    },
    {
        id: '900350719',
        name: 'Stolzenhagen (bei Oderberg), Wendestelle',
    },
    {
        id: '900350570',
        name: 'Lüdersdorf (bei Oderberg), Abzweig Stolzenhagen',
    },
    {
        id: '900321150',
        name: 'Schiffmühle, Alte Schule',
    },
    {
        id: '900321152',
        name: 'Schiffmühle, Fährkrug',
    },
    {
        id: '900321029',
        name: 'Bad Freienwalde, Eduardshof',
    },
    {
        id: '900321039',
        name: 'Bad Freienwalde, Neukietz',
    },
    {
        id: '900222003',
        name: 'Bad Belzig, Berliner Str.',
    },
    {
        id: '900321036',
        name: 'Bad Freienwalde, Malche',
    },
    {
        id: '900321042',
        name: 'Bad Freienwalde, Schlachthof',
    },
    {
        id: '900321024',
        name: 'Bad Freienwalde, Amtsstr.',
    },
    {
        id: '900321045',
        name: 'Bad Freienwalde, Waldstadt',
    },
    {
        id: '900321028',
        name: 'Bad Freienwalde, Düsterer Grund',
    },
    {
        id: '900321026',
        name: 'Bad Freienwalde, Berliner Str.',
    },
    {
        id: '900321021',
        name: 'Bad Freienwalde, A.-Heese-Str.',
    },
    {
        id: '900321151',
        name: 'Schiffmühle, Dorf',
    },
    {
        id: '900321043',
        name: 'Bad Freienwalde, Schlosspark',
    },
    {
        id: '900321009',
        name: 'Altglietzen, Ziegelei',
    },
    {
        id: '900350134',
        name: 'Melchow, Eberswalder Str.',
    },
    {
        id: '900321078',
        name: 'Gabow, Berg',
    },
    {
        id: '900321079',
        name: 'Gabow, Dorf',
    },
    {
        id: '900321137',
        name: 'Neutornow (MOL)',
    },
    {
        id: '900321040',
        name: 'Bad Freienwalde, Sachsenhof',
    },
    {
        id: '770000105376',
        name: 'Kümmernitz, Gaststätte',
    },
    {
        id: '900310603',
        name: 'Tempelfelde, Dorf',
    },
    {
        id: '900310602',
        name: 'Tempelfelde, Ausbau',
    },
    {
        id: '900350470',
        name: 'Grüntal, Sydow',
    },
    {
        id: '900350468',
        name: 'Grüntal, Schule',
    },
    {
        id: '000308663001',
        name: 'Gransee, Wasserwerk',
    },
    {
        id: '900350730',
        name: 'Trampe (BAR), Dorf',
    },
    {
        id: '900350573',
        name: 'Lunow, Dorf',
    },
    {
        id: '000308927002',
        name: 'Grünplan, Abzweig',
    },
    {
        id: '900350576',
        name: 'Lunow, Steinberg',
    },
    {
        id: '900321027',
        name: 'Bad Freienwalde, Busbahnhof',
    },
    {
        id: '900321044',
        name: 'Bad Freienwalde, Stadtrandsiedlung',
    },
    {
        id: '900321023',
        name: 'Bad Freienwalde, Am Friedhof',
    },
    {
        id: '900321030',
        name: 'Bad Freienwalde, Finanzamt',
    },
    {
        id: '900321041',
        name: 'Bad Freienwalde, Scheunenberg',
    },
    {
        id: '900321022',
        name: 'Bad Freienwalde, Alttornow',
    },
    {
        id: '900321035',
        name: 'Bad Freienwalde, Konzerthalle',
    },
    {
        id: '900321037',
        name: 'Bad Freienwalde, Markt',
    },
    {
        id: '900193003',
        name: 'S Adlershof/Franz-Ehrlich-Str.',
    },
    {
        id: '900203972',
        name: 'Neuthymen',
    },
    {
        id: '900203966',
        name: 'Falkenthal, Schulstr.',
    },
    {
        id: '900245763',
        name: 'Baruth, An der Birkenpfuhlheide Süd',
    },
    {
        id: '900203492',
        name: 'Beetz, Kirche',
    },
    {
        id: '900203503',
        name: 'Grieben, Kirche',
    },
    {
        id: '900203555',
        name: 'Grieben, Dorfstr.',
    },
    {
        id: '900203501',
        name: 'Löwenberg (Mark), Kirche',
    },
    {
        id: '900203498',
        name: 'Löwenberg, Neuhof',
    },
    {
        id: '900203495',
        name: 'Ludwigsaue, Dorf',
    },
    {
        id: '900203497',
        name: 'Beetz, Bahnhofstr.',
    },
    {
        id: '900203545',
        name: 'Liebenthal (OHV), Dorfstr.',
    },
    {
        id: '900203490',
        name: 'Sommerfeld, Kirche',
    },
    {
        id: '900203489',
        name: 'Sommerfeld, Wesering',
    },
    {
        id: '900203488',
        name: 'Hohenbruch, Schleuensches Luch',
    },
    {
        id: '900203512',
        name: 'Schönfließ (OHV), Bieselheide',
    },
    {
        id: '900203530',
        name: 'Gutengermendorf, Kirche',
    },
    {
        id: '900203544',
        name: 'Hammer, Kita',
    },
    {
        id: '900203543',
        name: 'Hammer, Liebenthaler Str.',
    },
    {
        id: '900203542',
        name: 'Neuholland, Hamburger Kreuzung',
    },
    {
        id: '900203541',
        name: 'Neuholland, Kirche',
    },
    {
        id: '900203540',
        name: 'Neuholland, Str. der Jugend',
    },
    {
        id: '900203539',
        name: 'Neuholland, Nassenheider Chaussee 34',
    },
    {
        id: '900260076',
        name: 'Freidorf, Semmelei',
    },
    {
        id: '900203538',
        name: 'Neuholland, Wasserwerk',
    },
    {
        id: '900203534',
        name: 'Neuholland, Schneiderhof',
    },
    {
        id: '900210425',
        name: 'Pessin, Paulinenauer Str.',
    },
    {
        id: '900203487',
        name: 'Hohenbruch, Johannisthal',
    },
    {
        id: '900203486',
        name: 'Hohenbruch, Lindenkrug',
    },
    {
        id: '900203454',
        name: 'Amalienfelde',
    },
    {
        id: '900203452',
        name: 'Kremmen, Bhf',
    },
    {
        id: '900203451',
        name: 'Kremmen, Markt',
    },
    {
        id: '900203447',
        name: 'Liebenwalde, Berliner Str.',
    },
    {
        id: '900203445',
        name: 'Liebenwalde, Schule',
    },
    {
        id: '900203444',
        name: 'Liebenwalde, Ernst-Thälmann-Str.',
    },
    {
        id: '900203443',
        name: 'Liebenwalde, Hammerallee',
    },
    {
        id: '900203440',
        name: 'Velten, Ahornstr.',
    },
    {
        id: '000313621002',
        name: 'Milmersdorf, Bruchbude',
    },
    {
        id: '900203439',
        name: 'Borgsdorf, Lindenstr./Hauptstr.',
    },
    {
        id: '900203457',
        name: 'Kremmen, Berliner Chaussee',
    },
    {
        id: '900203458',
        name: 'Kremmen, Orion',
    },
    {
        id: '900275851',
        name: 'Brandenburg, Plaue Chausseestr.',
    },
    {
        id: '900415660',
        name: 'Großrössen, Kirche',
    },
    {
        id: '900203480',
        name: 'Sommerfeld, Neuendorfer Weg',
    },
    {
        id: '900340732',
        name: 'Prenzlau, Diesterweg Schule',
    },
    {
        id: '900203471',
        name: 'Staffelde (OHV), Kirche',
    },
    {
        id: '900203470',
        name: 'Schwante, Lindenweg',
    },
    {
        id: '900203468',
        name: 'Schwante, Sportplatz',
    },
    {
        id: '900203466',
        name: 'Groß Ziethen (OHV)',
    },
    {
        id: '900245769',
        name: 'Wünsdorf, Zum Bahnhof',
    },
    {
        id: '900203459',
        name: 'Kremmen, Charlottenau',
    },
    {
        id: '900203964',
        name: 'Liebenberg, Grünebergerstr.',
    },
    {
        id: '900203653',
        name: 'Mühlenbeck, Kirche',
    },
    {
        id: '900203663',
        name: 'Marwitz, Lindenstr.',
    },
    {
        id: '900260691',
        name: 'Gallun, Bestenseer Chaussee',
    },
    {
        id: '900203662',
        name: 'Marwitz, Turnhalle',
    },
    {
        id: '900203648',
        name: 'Mühlenbeck, Feldheim',
    },
    {
        id: '900203546',
        name: 'Liebenthal (OHV), Wendestelle',
    },
    {
        id: '900203647',
        name: 'Summt, Triftweg',
    },
    {
        id: '900203646',
        name: 'Summt, Seering',
    },
    {
        id: '900203645',
        name: 'Summt, Secura',
    },
    {
        id: '900260806',
        name: 'Königs Wusterhausen, Halskestr.',
    },
    {
        id: '900261873',
        name: 'Schönwalde (Spreewald), Schule',
    },
    {
        id: '900100052',
        name: 'Berliner Schloss',
    },
    {
        id: '900203675',
        name: 'Vehlefanz, Lindenallee',
    },
    {
        id: '900203674',
        name: 'Karlsruh',
    },
    {
        id: '900203673',
        name: 'Eichstädt, Kirche',
    },
    {
        id: '900203672',
        name: 'Marwitz, Kirche',
    },
    {
        id: '900203671',
        name: 'Vehlefanz, Bhf',
    },
    {
        id: '900203670',
        name: 'Eichstädt, Gewerbepark',
    },
    {
        id: '900203668',
        name: 'Germendorf, Dorfstr.',
    },
    {
        id: '900203667',
        name: 'Leegebruch, Kreuzung',
    },
    {
        id: '900203644',
        name: 'Summt, Seegarten',
    },
    {
        id: '900203643',
        name: 'Zühlslake',
    },
    {
        id: '900203621',
        name: 'Schmachtenhagen (OHV), Oranienburger Chaussee',
    },
    {
        id: '900203620',
        name: 'Schmachtenhagen (OHV), Bernöwer Str.',
    },
    {
        id: '900203619',
        name: 'Bernöwe',
    },
    {
        id: '900203611',
        name: 'Dameswalde, Nassenheider Weg',
    },
    {
        id: '900203610',
        name: 'Dameswalde, Elisabethstr.',
    },
    {
        id: '900203609',
        name: 'Dameswalde, Hellasstr.',
    },
    {
        id: '900203608',
        name: 'Malz, Dameswalder Weg',
    },
    {
        id: '900203603',
        name: 'Friedrichsthal (OHV), Dorfplatz',
    },
    {
        id: '900203548',
        name: 'Neuholland, Nassenheider Chaussee 20',
    },
    {
        id: '900203547',
        name: 'Neuholland, Ponyhof',
    },
    {
        id: '900203622',
        name: 'Schmachtenhagen (OHV), Ernst-Thälmann-Platz',
    },
    {
        id: '900203642',
        name: 'Zühlsdorf, Waldhase',
    },
    {
        id: '900203641',
        name: 'Zehlendorf (OHV), Alte Dorfstr.',
    },
    {
        id: '900203640',
        name: 'Zühlsdorf, Friedhof',
    },
    {
        id: '900203634',
        name: 'Zehlendorf (OHV), Wensickendorfer Str.',
    },
    {
        id: '900203633',
        name: 'Wensickendorf, Triftweg',
    },
    {
        id: '900203632',
        name: 'Wensickendorf, Hauptstr.',
    },
    {
        id: '900203631',
        name: 'Schmachtenhagen (OHV), Ost',
    },
    {
        id: '900203630',
        name: 'Schmachtenhagen (OHV), Grätzer Str.',
    },
    {
        id: '900203438',
        name: 'Borgsdorf, Lindenstr./Friedhof',
    },
    {
        id: '900203437',
        name: 'Borgsdorf, Alte Trift',
    },
    {
        id: '900210710',
        name: 'Elstal, Schulzentrum',
    },
    {
        id: '900203112',
        name: 'Beetz, Dorfstr.',
    },
    {
        id: '900203111',
        name: 'Zühlsdorf, Elisabethstr.',
    },
    {
        id: '900200017',
        name: 'Oranienburg, Breite Str.',
    },
    {
        id: '900200501',
        name: 'Glienicke/Nordbahn, Friedrich-Wegner-Platz',
    },
    {
        id: '900200115',
        name: 'Bötzow, Kirche',
    },
    {
        id: '900203435',
        name: 'Borgsdorf, Schule',
    },
    {
        id: '900200114',
        name: 'Flatow',
    },
    {
        id: '900200110',
        name: 'Bötzow, Schule',
    },
    {
        id: '900200109',
        name: 'Bötzow, Veltener Str.',
    },
    {
        id: '900200108',
        name: 'Bötzow, Sportplatz',
    },
    {
        id: '900200107',
        name: 'Marwitz, Marwitzer Kreuzung',
    },
    {
        id: '900200105',
        name: 'Hennigsdorf, Krankenhaus',
    },
    {
        id: '900203113',
        name: 'Beetz, Schule',
    },
    {
        id: '900203366',
        name: 'Hennigsdorf, Friedhof',
    },
    {
        id: '900203201',
        name: 'Schmachtenhagen (OHV), Schule',
    },
    {
        id: '900203314',
        name: 'Oranienburg, Hauptweg',
    },
    {
        id: '900203313',
        name: 'Oranienburg, Dulonstr.',
    },
    {
        id: '900203312',
        name: 'Oranienburg, Oelschlägerstr.',
    },
    {
        id: '900203310',
        name: 'Sachsenhausen, Waldweg',
    },
    {
        id: '900203303',
        name: 'Oranienburg, Gericht',
    },
    {
        id: '900203211',
        name: 'Zühlsdorf, Bhf',
    },
    {
        id: '900200104',
        name: 'Hennigsdorf, W.-Küntscher-Str.',
    },
    {
        id: '900200101',
        name: 'Hennigsdorf, Fußgängertunnel',
    },
    {
        id: '900200022',
        name: 'Hennigsdorf, Am Bahndamm',
    },
    {
        id: '900200009',
        name: 'S Hohen Neuendorf',
    },
    {
        id: '900200007',
        name: 'S Borgsdorf',
    },
    {
        id: '900245771',
        name: 'S Mahlow/Trebbiner Str.',
    },
    {
        id: '900200000',
        name: 'S Hennigsdorf',
    },
    {
        id: '900200011',
        name: 'S Bergfelde',
    },
    {
        id: '900245764',
        name: 'Baruth, An der Birkenpfuhlheide Nord',
    },
    {
        id: '900222221',
        name: 'Niemegk, Wittenberger Str.',
    },
    {
        id: '900230027',
        name: 'S Babelsberg/Lutherplatz',
    },
    {
        id: '900200024',
        name: 'Hohen Neuendorf, Berliner Str.',
    },
    {
        id: '900200099',
        name: 'Hennigsdorf, Seilerstr.',
    },
    {
        id: '900200098',
        name: 'Velten, Rosa-Luxemburg-Str.',
    },
    {
        id: '900200037',
        name: 'Kreuzbruch, Berliner Chaussee',
    },
    {
        id: '900200031',
        name: 'Glienicke/Nordbahn, Breitscheidstr.',
    },
    {
        id: '900200034',
        name: 'Glienicke/Nordbahn, Kirche',
    },
    {
        id: '900200044',
        name: 'Hohen Neuendorf, Waldschule',
    },
    {
        id: '900203317',
        name: 'Oranienburg, Heidestr.',
    },
    {
        id: '900203424',
        name: 'Velten, Mühlenstr.',
    },
    {
        id: '900203423',
        name: 'Velten, Kirche',
    },
    {
        id: '900203412',
        name: 'Schönfließ (OHV), Dorfstr.',
    },
    {
        id: '900203399',
        name: 'Hohen Neuendorf, F.-Naumann-Str.',
    },
    {
        id: '900203400',
        name: 'Hohen Neuendorf, Jägerstr.',
    },
    {
        id: '900160023',
        name: 'Emma-Ihrer-Str.',
    },
    {
        id: '900204027',
        name: 'Hohen Neuendorf, Eichenallee',
    },
    {
        id: '900203411',
        name: 'Schönfließ (OHV), Kirche',
    },
    {
        id: '900203410',
        name: 'Schönfließ, Bergfelder Chaussee',
    },
    {
        id: '900203409',
        name: 'Bergfelde, Schule',
    },
    {
        id: '900203425',
        name: 'Velten, Zeppelinstr.',
    },
    {
        id: '900203432',
        name: 'Pinnow (bei Velten), Bernsteinsee',
    },
    {
        id: '900203431',
        name: 'Velten, Leegebrucher Weg',
    },
    {
        id: '900203430',
        name: 'Velten, Waldsiedlung',
    },
    {
        id: '900203429',
        name: 'Velten, Lindensiedlung',
    },
    {
        id: '900203428',
        name: 'Velten, Industriegebiet',
    },
    {
        id: '900203427',
        name: 'Velten, Hennigsdorfer Str.',
    },
    {
        id: '900203426',
        name: 'Velten, Weimann',
    },
    {
        id: '900203408',
        name: 'Bergfelde, Ahornallee',
    },
    {
        id: '900203318',
        name: 'Sachsenhausen, Chausseestr.',
    },
    {
        id: '900203354',
        name: 'Hennigsdorf, Marwitzer Str.',
    },
    {
        id: '900203330',
        name: 'Sachsenhausen, Schule',
    },
    {
        id: '900203329',
        name: 'Oranienburg, Thaerstr.',
    },
    {
        id: '900203325',
        name: 'Oranienburg, Eden',
    },
    {
        id: '900203324',
        name: 'Oranienburg, Umspannwerk',
    },
    {
        id: '900203323',
        name: 'Oranienburg, Kremmener Str.',
    },
    {
        id: '900203322',
        name: 'Oranienburg, Schleuse',
    },
    {
        id: '900203319',
        name: 'Sachsenhausen, Kirche',
    },
    {
        id: '900204049',
        name: 'Germendorf, Am Bahndamm',
    },
    {
        id: '900203407',
        name: 'Hohen Neuendorf, Rotpfuhlen',
    },
    {
        id: '900203405',
        name: 'Hohen Neuendorf, Niederheide',
    },
    {
        id: '900203404',
        name: 'Hohen Neuendorf, Goethestr.',
    },
    {
        id: '900203403',
        name: 'Hohen Neuendorf, Sportplatz',
    },
    {
        id: '900203401',
        name: 'Hohen Neuendorf, Stolper Str.',
    },
    {
        id: '900203377',
        name: 'Stolpe (OHV), Dorfstr.',
    },
    {
        id: '900203375',
        name: 'Hennigsdorf, Neubrück',
    },
    {
        id: '900200023',
        name: 'Hennigsdorf, Fontaneschule',
    },
    {
        id: '900203363',
        name: 'Hennigsdorf, Feldstr.',
    },
    {
        id: '900203677',
        name: 'Bärenklau (OHV), Remontehof',
    },
    {
        id: '900203679',
        name: 'Vehlefanz, Schäferweg',
    },
    {
        id: '900203858',
        name: 'Oranienburg, Kitzbühler Str.',
    },
    {
        id: '900203855',
        name: 'Osterne, Neubau',
    },
    {
        id: '900203853',
        name: 'Zehdenick, Bhf',
    },
    {
        id: '900203852',
        name: 'Sommerfeld, Klinik',
    },
    {
        id: '900203848',
        name: 'Gransee, Grüner Weg',
    },
    {
        id: '900204043',
        name: 'Burgwall, Chaussee',
    },
    {
        id: '900203837',
        name: 'Neuholland, Walterhof',
    },
    {
        id: '900203836',
        name: 'Neuholland, Bergemannhof',
    },
    {
        id: '900203835',
        name: 'Neuholland, Sperberhof',
    },
    {
        id: '900203867',
        name: 'Kremmen, Schule',
    },
    {
        id: '900203879',
        name: 'Großmutz, Dorfstr.',
    },
    {
        id: '900203880',
        name: 'Zehdenick, Am Feldrain',
    },
    {
        id: '900203891',
        name: 'Oranienburg, Str. der Nationen',
    },
    {
        id: '900203889',
        name: 'Sachsenhausen, Gedenkstätte',
    },
    {
        id: '900203888',
        name: 'Zernikow (OHV), Mühle',
    },
    {
        id: '900203887',
        name: 'Rauschendorf, Hauptstr.',
    },
    {
        id: '900203885',
        name: 'Altlüdersdorf, Ausbau',
    },
    {
        id: '900203883',
        name: 'Bergsdorf, Dorfstr.',
    },
    {
        id: '900203831',
        name: 'Mildenberg, Siedlung',
    },
    {
        id: '900203814',
        name: 'Neutornow (OHV), Abzweig',
    },
    {
        id: '900203812',
        name: 'Tornow (OHV), Am Fließ',
    },
    {
        id: '900203811',
        name: 'Ringsleben',
    },
    {
        id: '900203806',
        name: 'Ribbeck (OHV)',
    },
    {
        id: '900203805',
        name: 'Mildenberg, Siedlungsgut',
    },
    {
        id: '900203802',
        name: 'Zabelsdorf, Wentower Str.',
    },
    {
        id: '900203801',
        name: 'Altlüdersdorf, B 96',
    },
    {
        id: '900203813',
        name: 'Tornow (OHV), Altes Schloß',
    },
    {
        id: '900203830',
        name: 'Vehlefanz, Schule',
    },
    {
        id: '900203815',
        name: 'Neutornow (OHV), Dorfstr.',
    },
    {
        id: '900203827',
        name: 'Bärenklau (OHV), Pumpenweg',
    },
    {
        id: '900203825',
        name: 'Gutengermendorf, Dorfstr.',
    },
    {
        id: '900203824',
        name: 'Neuhäsen',
    },
    {
        id: '900203823',
        name: 'Häsen, Klevesche Häuser',
    },
    {
        id: '900203821',
        name: 'Kraatz (bei Gransee), Ausbau',
    },
    {
        id: '900204041',
        name: 'Kraatz (bei Gransee), An der Kirche',
    },
    {
        id: '900203816',
        name: 'Barsdorf',
    },
    {
        id: '900203892',
        name: 'Velten, Business Park',
    },
    {
        id: '900203900',
        name: 'Zehdenick, Waldschänke',
    },
    {
        id: '900203948',
        name: 'Klein-Mutz, Ausbau',
    },
    {
        id: '900203945',
        name: 'Krewelin, Dorfstr.',
    },
    {
        id: '900203944',
        name: 'Krewelin, Kirche',
    },
    {
        id: '900203943',
        name: 'Krewelin, Ausbau',
    },
    {
        id: '900203937',
        name: 'Kurtschlag, Chaussee',
    },
    {
        id: '900203936',
        name: 'Kappe, Dorf',
    },
    {
        id: '900203935',
        name: 'Kappe, Försterei',
    },
    {
        id: '900203951',
        name: 'Zehdenick, Ziegeleiweg',
    },
    {
        id: '900203934',
        name: 'Wesendorf, Försterei',
    },
    {
        id: '900203963',
        name: 'Grüneberg, Liebenberger Str.',
    },
    {
        id: '900203962',
        name: 'Grüneberg, Schule',
    },
    {
        id: '900203960',
        name: 'Wackerberge',
    },
    {
        id: '900203957',
        name: 'Glambeck (OHV)',
    },
    {
        id: '900203955',
        name: 'Vogelsang (OHV), Zehdenicker Str.',
    },
    {
        id: '900203954',
        name: 'Zehdenick, Ziegelei Werk 5',
    },
    {
        id: '900203953',
        name: 'Zehdenick, Ziegelei Werk 4',
    },
    {
        id: '900203952',
        name: 'Zehdenick, Ziegelei Werk 3',
    },
    {
        id: '900203913',
        name: 'Zehdenick, Siedlung 2',
    },
    {
        id: '900203907',
        name: 'Zehdenick, Falkenthaler Chaussee',
    },
    {
        id: '900350323',
        name: 'Bernau, Potsdamer Str.',
    },
    {
        id: '900203909',
        name: 'Zehdenick, Lüthkeshof',
    },
    {
        id: '900203908',
        name: 'Zehdenick, Havelland-Grundschule',
    },
    {
        id: '900203986',
        name: 'Zehdenick, Försterei',
    },
    {
        id: '900350305',
        name: 'Bernau, Pankewichtel',
    },
    {
        id: '900203906',
        name: 'Zehdenick, Berliner Tor',
    },
    {
        id: '900203905',
        name: 'Zehdenick, Bahnhofstr.',
    },
    {
        id: '900203904',
        name: 'Zehdenick, Clara-Zetkin-Str.',
    },
    {
        id: '900203903',
        name: 'Zehdenick, Friedhof 2',
    },
    {
        id: '900203901',
        name: 'Zehdenick, Philipp-Müller-Str.',
    },
    {
        id: '900203933',
        name: 'Wesendorf, Dorf',
    },
    {
        id: '900203932',
        name: 'Zehdenick, Wesendorfer Weg',
    },
    {
        id: '900203930',
        name: 'Gramzow (OHV), Ausbau',
    },
    {
        id: '900203929',
        name: 'Zehdenick, Neuhof',
    },
    {
        id: '900203925',
        name: 'Altglobsow, Kreuzung',
    },
    {
        id: '900203923',
        name: 'Fürstenberg (Havel), Abzweig Tiefenbrunn',
    },
    {
        id: '900203922',
        name: 'Neulöwenberg, Häsener Weg',
    },
    {
        id: '900203921',
        name: 'Liebenberg, Seeschloß',
    },
    {
        id: '900203919',
        name: 'Burgwall, Dorfstr.',
    },
    {
        id: '900203918',
        name: 'Burgwall, Brücke',
    },
    {
        id: '900203799',
        name: 'Gransee, Wendefelder Weg',
    },
    {
        id: '900203726',
        name: 'Gransee, Abzweig Wendefeld',
    },
    {
        id: '900203730',
        name: 'Großwoltersdorf (OHV), Kirche',
    },
    {
        id: '900203729',
        name: 'Großwoltersdorf (OHV), Neubau',
    },
    {
        id: '900203728',
        name: 'Wolfsruh, Abzweig',
    },
    {
        id: '900203727',
        name: 'Neulögow, Abzweig',
    },
    {
        id: '900203723',
        name: 'Badingen, Chausseestr.',
    },
    {
        id: '900203721',
        name: 'Osterne, Badinger Weg',
    },
    {
        id: '900203720',
        name: 'Kraatz (bei Gransee), Lindenstr.',
    },
    {
        id: '900203719',
        name: 'Gransee, Kraatzer Weg',
    },
    {
        id: '750000412502',
        name: 'Kostrzyn (PL), Bhf',
    },
    {
        id: '900203732',
        name: 'Zernikow (OHV), Abzweig',
    },
    {
        id: '900203733',
        name: 'Menz, Am Friedensplatz',
    },
    {
        id: '900203744',
        name: 'Wolfsruh, Wendeplatz',
    },
    {
        id: '900203741',
        name: 'Neulögow, Ausbau',
    },
    {
        id: '900203740',
        name: 'Rauschendorf, Am Dorfteich',
    },
    {
        id: '900203739',
        name: 'Neuglobsow',
    },
    {
        id: '900203736',
        name: 'Neuroofen, Abzweig',
    },
    {
        id: '900203735',
        name: 'Menz, Schule',
    },
    {
        id: '900203734',
        name: 'Menz, Neuglobsower Str.',
    },
    {
        id: '900203717',
        name: 'Gransee, Stadtschule 1',
    },
    {
        id: '900203716',
        name: 'Gransee, Ausbau',
    },
    {
        id: '900203694',
        name: 'Teschendorf, Am Denkmal',
    },
    {
        id: '900203693',
        name: 'Teschendorf, An der Trift',
    },
    {
        id: '900203692',
        name: 'Nassenheide, Kirche',
    },
    {
        id: '900203691',
        name: 'Nassenheide, Teerofener Weg',
    },
    {
        id: '900203689',
        name: 'Vehlefanz, Kienluch',
    },
    {
        id: '900203686',
        name: 'Neu Vehlefanz, Wendeplatz',
    },
    {
        id: '900203680',
        name: 'Schwante, Mühlenweg',
    },
    {
        id: '900203715',
        name: 'Gransee, Ruppiner Str.',
    },
    {
        id: '900203713',
        name: 'Gransee, Bahnübergang',
    },
    {
        id: '900203711',
        name: 'Gransee, B 96',
    },
    {
        id: '900203710',
        name: 'Gransee, Krankenhaus',
    },
    {
        id: '900203706',
        name: 'Großmutz, Dorfplatz',
    },
    {
        id: '900203705',
        name: 'Großmutz, Torfweg',
    },
    {
        id: '900203704',
        name: 'Hoppenrade (OHV)',
    },
    {
        id: '900203703',
        name: 'Neuendorf',
    },
    {
        id: '900203702',
        name: 'Gransee, Kirchplatz',
    },
    {
        id: '900203700',
        name: 'Gransee, Margaretenhof',
    },
    {
        id: '900203745',
        name: 'Zernikow (OHV), Kirche',
    },
    {
        id: '900203746',
        name: 'Güldenhof',
    },
    {
        id: '900203787',
        name: 'Schönermark (bei Gransee), Dorfstr.',
    },
    {
        id: '900203782',
        name: 'Löwenberg (Mark), Schule',
    },
    {
        id: '900203707',
        name: 'Fürstenberg (Havel), Bürgersee',
    },
    {
        id: '900203779',
        name: 'Fürstenberg (Havel), Rheinsberger Str.',
    },
    {
        id: '900446326',
        name: 'Spremberg, Cantdorf Buckower Weg',
    },
    {
        id: '900203776',
        name: 'Fürstenberg (Havel), Farm',
    },
    {
        id: '900203775',
        name: 'Ravensbrück, Himmelpforter Weg',
    },
    {
        id: '900203774',
        name: 'Ravensbrück, Dorfstr.',
    },
    {
        id: '900203773',
        name: 'Fürstenberg (Havel), Tunnel',
    },
    {
        id: '900203788',
        name: 'Schönermark (bei Gransee), Kirche',
    },
    {
        id: '900203772',
        name: 'Fürstenberg (Havel), Bhf',
    },
    {
        id: '900205357',
        name: 'Keller, Kirche',
    },
    {
        id: '900203797',
        name: 'Baumgarten (OHV)',
    },
    {
        id: '900203796',
        name: 'Meseberg, Kirche',
    },
    {
        id: '900203795',
        name: 'Buberow, Kirche',
    },
    {
        id: '900203793',
        name: 'Rönnebeck, Dorfstr.',
    },
    {
        id: '900203792',
        name: 'Schulzendorf (OHV), Kirche',
    },
    {
        id: '900203791',
        name: 'Schulzendorf (OHV), Rheinsberger Str.',
    },
    {
        id: '900203790',
        name: 'Sonnenberg, Kirche',
    },
    {
        id: '900203789',
        name: 'Schönermark (bei Gransee), Sonnenberger Str.',
    },
    {
        id: '000300582005',
        name: 'Fürstenberg (Havel), Bhf',
    },
    {
        id: '900203771',
        name: 'Fürstenberg (Havel), Schleuse',
    },
    {
        id: '900203748',
        name: 'Neuroofen, Wendeplatz',
    },
    {
        id: '900203760',
        name: 'Bredereiche, Zootzener Str.',
    },
    {
        id: '900203759',
        name: 'Bredereiche, Templiner Str.',
    },
    {
        id: '900203758',
        name: 'Bredereiche, Blumenower Str.',
    },
    {
        id: '900203757',
        name: 'Boltenhof',
    },
    {
        id: '750000412501',
        name: 'Kostrzyn (PL), Bhf',
    },
    {
        id: '900203756',
        name: 'Blumenow, Abzweig Boltenhof',
    },
    {
        id: '900203755',
        name: 'Blumenow, Kirche',
    },
    {
        id: '000301273003',
        name: 'Dannenwalde (bei Gransee), Kirche',
    },
    {
        id: '900203754',
        name: 'Dannenwalde (bei Gransee), Kirche',
    },
    {
        id: '900203753',
        name: 'Seilershof, Abzweig',
    },
    {
        id: '900203751',
        name: 'Altlüdersdorf, Friedhof',
    },
    {
        id: '900203750',
        name: 'Gransee, Abzweig Ziegelwerk',
    },
    {
        id: '900203761',
        name: 'Zootzen (OHV), Dorfstr.',
    },
    {
        id: '900203770',
        name: 'Fürstenberg (Havel), Bornmühle',
    },
    {
        id: '900203769',
        name: 'Velten, Poststr.',
    },
    {
        id: '900203767',
        name: 'Neulüdersdorf, Friedhof',
    },
    {
        id: '900203765',
        name: 'Gramzow (OHV), B 96',
    },
    {
        id: '900203764',
        name: 'Seilershof, Hauptstr.',
    },
    {
        id: '900203763',
        name: 'Zootzen (OHV), Waldhof',
    },
    {
        id: '900203762',
        name: 'Zootzen (OHV), Ausbau',
    },
    {
        id: '900321019',
        name: 'Alttrebbin',
    },
    {
        id: '900360142',
        name: 'Frankfurt (Oder), Treppenberg',
    },
    {
        id: '900360082',
        name: 'Frankfurt (Oder), Kulturhaus Völkerfreundschaft',
    },
    {
        id: '900360077',
        name: 'Frankfurt (Oder), Klingetal',
    },
    {
        id: '900360127',
        name: 'Frankfurt (Oder), Simonsmühle',
    },
    {
        id: '900360113',
        name: 'Frankfurt (Oder), Prager Str.',
    },
    {
        id: '900350160',
        name: 'S Bernau',
    },
    {
        id: '900360034',
        name: 'Frankfurt (Oder), Botanischer Garten',
    },
    {
        id: '900360057',
        name: 'Frankfurt (Oder), Hansastr.',
    },
    {
        id: '900360086',
        name: 'Frankfurt (Oder), Lennéstr.',
    },
    {
        id: '900360091',
        name: 'Frankfurt (Oder), Lillihof',
    },
    {
        id: '900360010',
        name: 'Frankfurt (Oder), Abzweig Rosengarten',
    },
    {
        id: '900360095',
        name: 'Frankfurt (Oder), Immenweg',
    },
    {
        id: '900360043',
        name: 'Frankfurt (Oder), G.-Hauptmann-Str.',
    },
    {
        id: '900360071',
        name: 'Frankfurt (Oder), Kießlingplatz',
    },
    {
        id: '900260080',
        name: 'S Waßmannsdorf',
    },
    {
        id: '900360213',
        name: 'Frankfurt (Oder), Markendorf Ort',
    },
    {
        id: '900360078',
        name: 'Frankfurt (Oder), Klinikum',
    },
    {
        id: '900360096',
        name: 'Frankfurt (Oder), Markendorf Siedlung',
    },
    {
        id: '900360015',
        name: 'Frankfurt (Oder), Anger',
    },
    {
        id: '900360023',
        name: 'Frankfurt (Oder), Beckmannstr.',
    },
    {
        id: '900360035',
        name: 'Frankfurt (Oder), Bruno-Peters-Berg',
    },
    {
        id: '900222241',
        name: 'Treuenbrietzen, Ärztehaus/Kino',
    },
    {
        id: '900245592',
        name: 'Großbeeren, Märkische Allee Mitte',
    },
    {
        id: '900310024',
        name: 'Klein Schauen, Dorf',
    },
    {
        id: '000312530006',
        name: 'Torgau, Str. der Jugend',
    },
    {
        id: '900220378',
        name: 'Deetz (PM), Am Walde',
    },
    {
        id: '900245643',
        name: 'Dahme, Jüterboger Ch.',
    },
    {
        id: '900210039',
        name: 'Buckow (bei Nennhausen)',
    },
    {
        id: '900210040',
        name: 'Garlitz, Dorf',
    },
    {
        id: '900215769',
        name: 'Perleberg, Kreisarchiv',
    },
    {
        id: '900027207',
        name: 'Cautiusstr.',
    },
    {
        id: '900029203',
        name: 'Hügelschanze',
    },
    {
        id: '900260804',
        name: 'Krummensee (LDS), Am Weinberg',
    },
    {
        id: '900222112',
        name: 'Kuhlowitz, Abzweig',
    },
    {
        id: '900360116',
        name: 'Frankfurt (Oder), Puschkinstr./IHK',
    },
    {
        id: '900350304',
        name: 'Bernau, Gieses Plan',
    },
    {
        id: '900360036',
        name: 'Frankfurt (Oder), Damaschkeweg',
    },
    {
        id: '900360022',
        name: 'Frankfurt (Oder), Baumschulenweg',
    },
    {
        id: '900360152',
        name: 'Frankfurt (Oder), Ziolkowskiallee',
    },
    {
        id: '900360106',
        name: 'Frankfurt (Oder), Alte Nuhnenstr.',
    },
    {
        id: '900360042',
        name: 'Frankfurt (Oder), Friedrich-Ebert-Str.',
    },
    {
        id: '900360011',
        name: 'Frankfurt (Oder), Am Messegelände',
    },
    {
        id: '900360131',
        name: 'Frankfurt (Oder), Spitzkrug West',
    },
    {
        id: '900360130',
        name: 'Frankfurt (Oder), Spitzkrug Süd',
    },
    {
        id: '900360058',
        name: 'Frankfurt (Oder), Heinrich-Heine-Str.',
    },
    {
        id: '900360060',
        name: 'Frankfurt (Oder), Helenesee',
    },
    {
        id: '900008193',
        name: 'Boyenstr.',
    },
    {
        id: '900360222',
        name: 'Frankfurt (Oder), Alexej-Leonow-Str.',
    },
    {
        id: '900360032',
        name: 'Frankfurt (Oder), Booßen Schule',
    },
    {
        id: '900360129',
        name: 'Frankfurt (Oder), Spitzkrug Nord',
    },
    {
        id: '900360039',
        name: 'Frankfurt (Oder), Franz-Mehring-Str.',
    },
    {
        id: '900360128',
        name: 'Frankfurt (Oder), Spitzkrug Mitte',
    },
    {
        id: '900360093',
        name: 'Frankfurt (Oder), Lossow Lindenstr.',
    },
    {
        id: '900360053',
        name: 'Frankfurt (Oder), Güldendorf Krumme Str.',
    },
    {
        id: '900360054',
        name: 'Frankfurt (Oder), Güldendorf See',
    },
    {
        id: '900360094',
        name: 'Frankfurt (Oder), Carthausplatz',
    },
    {
        id: '900360136',
        name: 'Frankfurt (Oder), Betriebshof SVF',
    },
    {
        id: '900360134',
        name: 'Frankfurt (Oder), Stralsunder Str.',
    },
    {
        id: '900360070',
        name: 'Frankfurt (Oder), Kieler Str.',
    },
    {
        id: '900360206',
        name: 'Frankfurt (Oder), Sonnenallee',
    },
    {
        id: '900360085',
        name: 'Frankfurt (Oder), Leinengasse',
    },
    {
        id: '900360087',
        name: 'Frankfurt (Oder), Lichtenberg Autobahn',
    },
    {
        id: '900360111',
        name: 'Frankfurt (Oder), Perleberger Str.',
    },
    {
        id: '900360112',
        name: 'Frankfurt (Oder), Potsdamer Str.',
    },
    {
        id: '900360220',
        name: 'Frankfurt (Oder), Am Zwickel',
    },
    {
        id: '900360052',
        name: 'Frankfurt (Oder), Güldendorf Kehrwiederstr.',
    },
    {
        id: '900360143',
        name: 'Frankfurt (Oder), Tzschetzschnower Schweiz',
    },
    {
        id: '900360090',
        name: 'Frankfurt (Oder), Lichtenberg Teichstr.',
    },
    {
        id: '900360088',
        name: 'Frankfurt (Oder), Lichtenberg Nordstr.',
    },
    {
        id: '900360089',
        name: 'Frankfurt (Oder), Lichtenberg Rosengartener Str.',
    },
    {
        id: '900320917',
        name: 'Seeberg (MOL), Logistikzentrum',
    },
    {
        id: '900360109',
        name: 'Frankfurt (Oder), Pagram Eichenallee',
    },
    {
        id: '900360110',
        name: 'Frankfurt (Oder), Pagram Nord',
    },
    {
        id: '900360121',
        name: 'Frankfurt (Oder), Rosengarten Waldstr.',
    },
    {
        id: '900360215',
        name: 'Frankfurt (Oder), Rosengarten Lindenplatz',
    },
    {
        id: '900360108',
        name: 'Frankfurt (Oder), Otto-Nagel-Str.',
    },
    {
        id: '900360147',
        name: 'Frankfurt (Oder), Wildenbruchstr.',
    },
    {
        id: '900340367',
        name: 'Hedwigshof (UM)',
    },
    {
        id: '900222260',
        name: 'Groß Briesen (PM), Alte Försterei',
    },
    {
        id: '900360046',
        name: 'Frankfurt (Oder), Grenzbahnhof',
    },
    {
        id: '900360124',
        name: 'Frankfurt (Oder), Schöne Aussicht',
    },
    {
        id: '900360133',
        name: 'Frankfurt (Oder), Eichwaldweg',
    },
    {
        id: '900360074',
        name: 'Frankfurt (Oder), Kliestow Mitte',
    },
    {
        id: '900360075',
        name: 'Frankfurt (Oder), Kliestow Rohrpfuhl',
    },
    {
        id: '900360140',
        name: 'Frankfurt (Oder), Thomas-Müntzer-Hof',
    },
    {
        id: '900360155',
        name: 'Frankfurt (Oder), Hohenwalde B87',
    },
    {
        id: '900210389',
        name: 'Klein Behnitz, Wendeplatz',
    },
    {
        id: '900210388',
        name: 'Klein Behnitz, Dorf',
    },
    {
        id: '900210579',
        name: 'Hoppenrade (HVL), Ausbau',
    },
    {
        id: '900210055',
        name: 'Brieselang, Hölderlinstr.',
    },
    {
        id: '900210066',
        name: 'Brieselang, Schulplatz',
    },
    {
        id: '900210072',
        name: 'Brieselang, Bhf/Bahnstr.',
    },
    {
        id: '900210067',
        name: 'Brieselang, Lange Str.',
    },
    {
        id: '900210064',
        name: 'Brieselang, Jahnstr.',
    },
    {
        id: '900210061',
        name: 'Brieselang, Hans-Klakow-Str.',
    },
    {
        id: '900210517',
        name: 'Etzin, Dorf',
    },
    {
        id: '900210622',
        name: 'Elstal, Designer-Outlet',
    },
    {
        id: '900210664',
        name: 'Kienberg (HVL), Abzweig',
    },
    {
        id: '900210254',
        name: 'Gohlitz, Kirche',
    },
    {
        id: '900210596',
        name: 'Bredow, Dorf',
    },
    {
        id: '900210581',
        name: 'Hoppenrade (HVL), Knoblaucher Weg',
    },
    {
        id: '900210580',
        name: 'Hoppenrade (HVL), Wernitzer Weg',
    },
    {
        id: '900210626',
        name: 'Elstal, Eulenspiegelsiedlung',
    },
    {
        id: '900210625',
        name: 'Elstal, Radelandberg',
    },
    {
        id: '900210614',
        name: 'Dyrotz',
    },
    {
        id: '900210623',
        name: 'Elstal, Sportplatz',
    },
    {
        id: '900210521',
        name: 'Ketzin (Havel), Baumschule',
    },
    {
        id: '900210538',
        name: 'Ketzin (Havel), Am Markt',
    },
    {
        id: '900210543',
        name: 'Ketzin (Havel), Werdersche Str.',
    },
    {
        id: '900210540',
        name: 'Ketzin (Havel), Theodor-Fontane-Str.',
    },
    {
        id: '900220699',
        name: 'Groß Kreutz, Bhf',
    },
    {
        id: '900220341',
        name: 'Potsdam, Waldsiedlung Groß Glienicke',
    },
    {
        id: '900220340',
        name: 'Potsdam, Landesumweltamt',
    },
    {
        id: '900220338',
        name: 'Potsdam, Am Park',
    },
    {
        id: '900230007',
        name: 'Potsdam, Park Sanssouci',
    },
    {
        id: '900210537',
        name: 'Ketzin (Havel), Am Mühlenweg',
    },
    {
        id: '900210635',
        name: 'Elstal, Olympisches Dorf',
    },
    {
        id: '900350952',
        name: 'Stolzenhagen (bei Wandlitz), Stolzenfels',
    },
    {
        id: '900320834',
        name: 'Karlsdorf (MOL), Abzweig B 167',
    },
    {
        id: '900210526',
        name: 'Ketzin (Havel), Schumacherstr.',
    },
    {
        id: '900210527',
        name: 'Ketzin (Havel), Brückenkopf',
    },
    {
        id: '900210530',
        name: 'Ketzin (Havel), Bruchweg',
    },
    {
        id: '900210531',
        name: 'Ketzin (Havel), Bhf',
    },
    {
        id: '900210534',
        name: 'Ketzin (Havel), Rathausstr.',
    },
    {
        id: '900260805',
        name: 'Krummensee (LDS), Alte Mittenwalder Str.',
    },
    {
        id: '900210665',
        name: 'Kienberg (HVL), Wendestelle',
    },
    {
        id: '900210666',
        name: 'Kienberg (HVL), Am Wiesengrund',
    },
    {
        id: '900210668',
        name: 'Börnicke (HVL), Ebereschenhof',
    },
    {
        id: '900210473',
        name: 'Damm, Dorf',
    },
    {
        id: '900210476',
        name: 'Klessener Zootzen',
    },
    {
        id: '900210475',
        name: 'Friesacker Zootzen',
    },
    {
        id: '900210464',
        name: 'Brädikow, Luch',
    },
    {
        id: '900210463',
        name: 'Brädikow, Dorf',
    },
    {
        id: '900210449',
        name: 'Friesack, Schule',
    },
    {
        id: '900210452',
        name: 'Friesack, Kleßener Str.',
    },
    {
        id: '900210453',
        name: 'Friesack, Markt',
    },
    {
        id: '900210458',
        name: 'Friesack, Thiemannstr.',
    },
    {
        id: '900215772',
        name: 'Perleberg, Ziegelhof',
    },
    {
        id: '900210457',
        name: 'Friesack, Karolinenhof',
    },
    {
        id: '900210477',
        name: 'Briesener Zootzen',
    },
    {
        id: '900210471',
        name: 'Damm, Feuerwehr',
    },
    {
        id: '900210451',
        name: 'Friesack, Sonnenweg',
    },
    {
        id: '900215773',
        name: 'Perleberg, M.-Hasse-Str.',
    },
    {
        id: '900210394',
        name: 'Klein Behnitz, Vorwerk',
    },
    {
        id: '900210377',
        name: 'Groß Behnitz, Dorf',
    },
    {
        id: '900210370',
        name: 'Groß Behnitz, Am Sandkrug',
    },
    {
        id: '900210372',
        name: 'Groß Behnitz, Am Wald',
    },
    {
        id: '900210028',
        name: 'Groß Behnitz, Bhf',
    },
    {
        id: '900210182',
        name: 'Kleßen',
    },
    {
        id: '900210472',
        name: 'Damm, Am Kanal',
    },
    {
        id: '900210450',
        name: 'Friesack, Ausbildungszentrum',
    },
    {
        id: '900210670',
        name: 'Börnicke (HVL), Ausbau',
    },
    {
        id: '900200112',
        name: 'Bötzow, Dorfaue',
    },
    {
        id: '900200111',
        name: 'Bötzow, Werkstr.',
    },
    {
        id: '900210679',
        name: 'Grünefeld, Kirche',
    },
    {
        id: '900205776',
        name: 'Neuruppin, Autohof',
    },
    {
        id: '900210680',
        name: 'Grünefeld, Tietzower Weg',
    },
    {
        id: '900210674',
        name: 'Börnicke (HVL), Mitteldorf',
    },
    {
        id: '900205777',
        name: 'Neuruppin, Alter Stöffiner Weg',
    },
    {
        id: '900210672',
        name: 'Börnicke (HVL), Heidehütte',
    },
    {
        id: '900210671',
        name: 'Börnicke (HVL), Nauener Chaussee',
    },
    {
        id: '900210310',
        name: 'Hertefeld',
    },
    {
        id: '900210315',
        name: 'Bergerdamm, Abzweig Lager',
    },
    {
        id: '900210448',
        name: 'Friesack, Nauener Str.',
    },
    {
        id: '900216088',
        name: 'Wittenberge, Kirchstr.',
    },
    {
        id: '900210438',
        name: 'Haage, Kartoffellager',
    },
    {
        id: '900210435',
        name: 'Haage, Dorf',
    },
    {
        id: '900205101',
        name: 'Königshorst, Ortsmitte',
    },
    {
        id: '900205271',
        name: 'Deutschhof',
    },
    {
        id: '900205000',
        name: 'Dreibrück',
    },
    {
        id: '900360030',
        name: 'Frankfurt (Oder), Booßen Forstweg',
    },
    {
        id: '900360218',
        name: 'Frankfurt (Oder), Sportplatz Baumschulenweg',
    },
    {
        id: '900350876',
        name: 'Wandlitz, Grundschule',
    },
    {
        id: '900230167',
        name: 'Potsdam, Marie-Juchacz-Str.',
    },
    {
        id: '900230141',
        name: 'Potsdam, Hans-Albers-Str.',
    },
    {
        id: '900350943',
        name: 'Bernau, W.-von-Siemens-Str.',
    },
    {
        id: '900203974',
        name: 'Bredereiche, Ausbau',
    },
    {
        id: '900230066',
        name: 'Potsdam, Sporthalle',
    },
    {
        id: '900230085',
        name: 'Potsdam, Max-Born-Str.',
    },
    {
        id: '900230143',
        name: 'Potsdam, Otto-Hahn-Ring',
    },
    {
        id: '900230207',
        name: 'Potsdam, Hannes-Meyer-Str.',
    },
    {
        id: '900230086',
        name: 'Potsdam, Gaußstr.',
    },
    {
        id: '900230210',
        name: 'Potsdam, Feuerbachstr.',
    },
    {
        id: '900230064',
        name: 'Potsdam, Dortustr.',
    },
    {
        id: '900230063',
        name: 'Potsdam, Auf dem Kiewitt',
    },
    {
        id: '900230083',
        name: 'Potsdam, Abzweig Betriebshof ViP',
    },
    {
        id: '900230140',
        name: 'Potsdam, Robert-Baberske-Str.',
    },
    {
        id: '900230168',
        name: 'Potsdam, Priesterweg',
    },
    {
        id: '900210306',
        name: 'Utershorst, Kanalbrücke',
    },
    {
        id: '900210305',
        name: 'Utershorst, Dorf',
    },
    {
        id: '900261130',
        name: 'Zeuthen, Schillerstr.',
    },
    {
        id: '900230073',
        name: 'Potsdam, Mangerstr.',
    },
    {
        id: '900230026',
        name: 'Potsdam, Holzmarktstr.',
    },
    {
        id: '900230074',
        name: 'Potsdam, Ludwig-Richter-Str.',
    },
    {
        id: '900210810',
        name: 'Rathenow, Märkischer Platz',
    },
    {
        id: '900210771',
        name: 'Rathenow, Bhf',
    },
    {
        id: '900205530',
        name: 'Ribbeckshorst',
    },
    {
        id: '900230022',
        name: 'Potsdam, Nauener Tor',
    },
    {
        id: '900230070',
        name: 'Potsdam, Am Moosfenn',
    },
    {
        id: '900230065',
        name: 'Potsdam, Friedhöfe',
    },
    {
        id: '900230205',
        name: 'Potsdam, Brandenburger Str.',
    },
    {
        id: '900470099',
        name: 'Cottbus, Vom-Stein-Str.',
    },
    {
        id: '900230034',
        name: 'Potsdam, Bisamkiez',
    },
    {
        id: '900230208',
        name: 'Potsdam, Johan-Bouman-Platz',
    },
    {
        id: '900222076',
        name: 'Gömnigk, Kirche',
    },
    {
        id: '900222068',
        name: 'Freienthal',
    },
    {
        id: '900222059',
        name: 'Deutsch Bork',
    },
    {
        id: '900222054',
        name: 'Damelang',
    },
    {
        id: '900222052',
        name: 'Cammer, Feldstr.',
    },
    {
        id: '900222051',
        name: 'Cammer, Kirche',
    },
    {
        id: '000304229003',
        name: 'Finsterwalde, Siegfried Str.',
    },
    {
        id: '900222045',
        name: 'Brück, Schulen',
    },
    {
        id: '900222044',
        name: 'Brück, Markt',
    },
    {
        id: '900222042',
        name: 'Brück, Rathaus',
    },
    {
        id: '900222040',
        name: 'Brück, Goethestr.',
    },
    {
        id: '900222039',
        name: 'Brück, Brandenburger Str.',
    },
    {
        id: '900222037',
        name: 'Brachwitz',
    },
    {
        id: '900222030',
        name: 'Borkheide, Bhf',
    },
    {
        id: '900222075',
        name: 'Gömnigk, Trebitzer Weg',
    },
    {
        id: '900222001',
        name: 'Bardenitz',
    },
    {
        id: '900435104',
        name: 'Lauchhammer Mitte, KiTa Bummi',
    },
    {
        id: '900405408',
        name: 'Lauchhammer West, Schule',
    },
    {
        id: '900260046',
        name: 'Neuköthen',
    },
    {
        id: '900224950',
        name: 'Alt Bork',
    },
    {
        id: '900224940',
        name: 'Neuendorf (bei Brück)',
    },
    {
        id: '900222198',
        name: 'Treuenbrietzen, Berliner Siedlung',
    },
    {
        id: '900222190',
        name: 'Trebitz (PM)',
    },
    {
        id: '900222008',
        name: 'Bad Belzig, Fichtestr.',
    },
    {
        id: '900205524',
        name: 'Rheinsberg, Bhf',
    },
    {
        id: '900230017',
        name: 'Potsdam, Luisenplatz-Süd/Park Sanssouci',
    },
    {
        id: '900310506',
        name: 'Woltersdorf (LOS), Lerchenstr.',
    },
    {
        id: '900310505',
        name: 'Woltersdorf (LOS), Eichendamm',
    },
    {
        id: '900310504',
        name: 'Woltersdorf (LOS), Goethestr.',
    },
    {
        id: '900310017',
        name: 'Woltersdorf (LOS), Schleuse',
    },
    {
        id: '900205006',
        name: 'Neuruppin, West',
    },
    {
        id: '900310060',
        name: 'Grunow (LOS), Bhf',
    },
    {
        id: '900230084',
        name: 'Potsdam, Turmstr.',
    },
    {
        id: '900192701',
        name: 'S Schöneweide',
    },
    {
        id: '900230058',
        name: 'Potsdam, Schillerplatz/Schafgraben',
    },
    {
        id: '900310507',
        name: 'Woltersdorf (LOS), Fasanenstr.',
    },
    {
        id: '900310509',
        name: 'Woltersdorf (LOS), Krankenhaus',
    },
    {
        id: '900205400',
        name: 'Lindow (Mark), Bhf',
    },
    {
        id: '900310511',
        name: 'Schöneiche (bei Berlin), Goethepark',
    },
    {
        id: '900320519',
        name: 'Strausberg, Elisabethstr.',
    },
    {
        id: '900320518',
        name: 'Strausberg, Käthe-Kollwitz-Str.',
    },
    {
        id: '900320516',
        name: 'Strausberg, Schlagmühle',
    },
    {
        id: '000311953001',
        name: 'Schraden, Oberbuschhaus',
    },
    {
        id: '900320036',
        name: 'Strausberg, Am Stadtwald',
    },
    {
        id: '900320024',
        name: 'Strausberg, Hegermühle',
    },
    {
        id: '900310543',
        name: 'Woltersdorf (LOS), Berliner Platz',
    },
    {
        id: '000311953002',
        name: 'Schraden, Oberbuschhaus',
    },
    {
        id: '000309205001',
        name: 'Herzberg (Elster), Altes Gymnasium',
    },
    {
        id: '140094190231',
        name: 'Döbrichau, Mitte',
    },
    {
        id: '140095501371',
        name: 'Torgau, PEP Einkaufszentrum',
    },
    {
        id: '900310516',
        name: 'Schöneiche (bei Berlin), Jägerstr.',
    },
    {
        id: '140095501391',
        name: 'Torgau, Warschauer Str.',
    },
    {
        id: '140095501392',
        name: 'Torgau, Warschauer Str.',
    },
    {
        id: '900203768',
        name: 'Gransee, Bahnhofstr.',
    },
    {
        id: '900210216',
        name: 'Nauen, Berliner Str.',
    },
    {
        id: '900210217',
        name: 'Nauen, Zentrum',
    },
    {
        id: '900210385',
        name: 'Neukammer, Brandenburger Chaussee',
    },
    {
        id: '900210594',
        name: 'Wustermark, Bremer Ring',
    },
    {
        id: '900210593',
        name: 'Wustermark, Rostocker Str.',
    },
    {
        id: '900210020',
        name: 'Nennhausen, Buckower Str.',
    },
    {
        id: '900230018',
        name: 'Potsdam, Alter Markt/Landtag',
    },
    {
        id: '900360025',
        name: 'Frankfurt (Oder), Birkenallee',
    },
    {
        id: '900360148',
        name: 'Frankfurt (Oder), Wintergarten',
    },
    {
        id: '900220855',
        name: 'Potsdam, Schloss Marquardt',
    },
    {
        id: '900230165',
        name: 'Potsdam, Heineberg',
    },
    {
        id: '900210595',
        name: 'Wustermark, Leipziger Str.',
    },
    {
        id: '900210589',
        name: 'Wustermark, Schule',
    },
    {
        id: '900360065',
        name: 'Frankfurt (Oder), Johann-Eichorn-Str.',
    },
    {
        id: '900360049',
        name: 'Frankfurt (Oder), Bremsdorfer Str.',
    },
    {
        id: '000311609003',
        name: 'Saathain, Gut',
    },
    {
        id: '900220034',
        name: 'Stahnsdorf, Ulmenweg',
    },
    {
        id: '900360050',
        name: 'Frankfurt (Oder), Fuchsweg',
    },
    {
        id: '900360219',
        name: 'Frankfurt (Oder), Römerhügel',
    },
    {
        id: '900203380',
        name: 'Stolpe (OHV), Adolf-Hermann-Str.',
    },
    {
        id: '900360066',
        name: 'Frankfurt (Oder), Josef-Gesing-Str.',
    },
    {
        id: '900360150',
        name: 'Frankfurt (Oder), WohnBau Sophienstr.',
    },
    {
        id: '900360037',
        name: 'Frankfurt (Oder), Dresdener Platz',
    },
    {
        id: '900210592',
        name: 'Wustermark, Magdeburger Str.',
    },
    {
        id: '900210591',
        name: 'Wustermark, Bremer Ring/Hansestr.',
    },
    {
        id: '900210588',
        name: 'Wustermark, Zeestower Str.',
    },
    {
        id: '900210006',
        name: 'Elstal, Bhf',
    },
    {
        id: '900360125',
        name: 'Frankfurt (Oder), Schubertstr.',
    },
    {
        id: '900360084',
        name: 'Frankfurt (Oder), Lebuser Vorstadt',
    },
    {
        id: '900360105',
        name: 'Frankfurt (Oder), Neue Welt',
    },
    {
        id: '900360012',
        name: 'Frankfurt (Oder), Am Winterhafen',
    },
    {
        id: '900360076',
        name: 'Frankfurt (Oder), Klingestr.',
    },
    {
        id: '900360141',
        name: 'Frankfurt (Oder), Topfmarkt/Konzerthalle',
    },
    {
        id: '900210232',
        name: 'Nauen, Ludwig-Jahn-Str./Sportplatz',
    },
    {
        id: '900210219',
        name: 'Nauen, Kastanienweg',
    },
    {
        id: '900210218',
        name: 'Nauen, Ahornweg',
    },
    {
        id: '900350132',
        name: 'Melchow, Finower Str.',
    },
    {
        id: '900350133',
        name: 'Melchow, Am Ring',
    },
    {
        id: '900245078',
        name: 'Glasow, Friedhof',
    },
    {
        id: '900245980',
        name: 'Blönsdorf, Dorfstr.',
    },
    {
        id: '900245081',
        name: 'Mahlow, H.-Tschäpe-Str.',
    },
    {
        id: '900210220',
        name: 'Nauen, Ludwig-Jahn-Str.',
    },
    {
        id: '900220075',
        name: 'Teltow, Mozartstr.',
    },
    {
        id: '900210213',
        name: 'Nauen, Fontaneweg',
    },
    {
        id: '900275162',
        name: 'Brandenburg, Ketzürer Weg',
    },
    {
        id: '900275159',
        name: 'Brandenburg, Sankt-Annen-Str.',
    },
    {
        id: '900210231',
        name: 'Nauen, Mühlenstücke',
    },
    {
        id: '900210230',
        name: 'Nauen, Ziegelstr.',
    },
    {
        id: '900210227',
        name: 'Nauen, Friedhof',
    },
    {
        id: '900210238',
        name: 'Nauen, Mittelstr./Marktstr.',
    },
    {
        id: '900210210',
        name: 'Nauen, Wallgasse',
    },
    {
        id: '900210205',
        name: 'Nauen, Krankenhaus',
    },
    {
        id: '900311155',
        name: 'Fürstenwalde, Holzstr.',
    },
    {
        id: '900210233',
        name: 'Nauen, Sankt-Georgen-Str.',
    },
    {
        id: '900210221',
        name: 'Nauen, Am Schlangenhorst',
    },
    {
        id: '000308955001',
        name: 'Grüntal, Sportplatz',
    },
    {
        id: '900220074',
        name: 'Teltow, Gustl-Sandtner-Str.',
    },
    {
        id: '900360135',
        name: 'Frankfurt (Oder), Südring',
    },
    {
        id: '900360072',
        name: 'Frankfurt (Oder), Kleistpark',
    },
    {
        id: '900222191',
        name: 'Treuenbrietzen, Bhf',
    },
    {
        id: '900360038',
        name: 'Frankfurt (Oder), Europa-Universität',
    },
    {
        id: '900360139',
        name: 'Frankfurt (Oder), Technologiepark',
    },
    {
        id: '900360226',
        name: 'Frankfurt (Oder), Gartenstadt',
    },
    {
        id: '900360026',
        name: 'Frankfurt (Oder), Gartenstr.',
    },
    {
        id: '900360067',
        name: 'Frankfurt (Oder), Kantstr.',
    },
    {
        id: '900261569',
        name: 'Luckau, Am Anger/Dresdener Str.',
    },
    {
        id: '900261567',
        name: 'Luckau, Karl-Marx-Str.',
    },
    {
        id: '900350825',
        name: 'Wandlitz, Barnim-Panorama',
    },
    {
        id: '900350717',
        name: 'Stolzenhagen (bei Wandlitz), Str. am See',
    },
    {
        id: '900350754',
        name: 'Wandlitz, An der Gierwiese',
    },
    {
        id: '900350741',
        name: 'Wandlitz, Amselallee',
    },
    {
        id: '900350753',
        name: 'Wandlitz, Terrassen am See',
    },
    {
        id: '900350543',
        name: 'Lanke, Küsterfleck',
    },
    {
        id: '900350746',
        name: 'Wandlitz, Dachsbaude',
    },
    {
        id: '900350743',
        name: 'Wandlitz, Berliner Weg',
    },
    {
        id: '900350752',
        name: 'Wandlitz, Stolzenhagener Chaussee',
    },
    {
        id: '900350457',
        name: 'Groß Schönebeck, Böhmerheide',
    },
    {
        id: '900350462',
        name: 'Groß Schönebeck, Schluft',
    },
    {
        id: '900350718',
        name: 'Stolzenhagen (bei Wandlitz), West',
    },
    {
        id: '900261106',
        name: 'Schönefeld (bei Berlin), Rathaus',
    },
    {
        id: '900260519',
        name: 'Schönefeld (bei Berlin), Schwimmhalle',
    },
    {
        id: '900350526',
        name: 'Klosterfelde, Stern',
    },
    {
        id: '900350524',
        name: 'Klosterfelde, Kaufhalle',
    },
    {
        id: '900350522',
        name: 'Klosterfelde, Bernauer Weg',
    },
    {
        id: '900261342',
        name: 'Schönefeld (bei Berlin), Bertolt-Brecht-Allee',
    },
    {
        id: '900350523',
        name: 'Klosterfelde, Heidekrug',
    },
    {
        id: '900350742',
        name: 'Wandlitz, Arendseer Kreuzung',
    },
    {
        id: '900350538',
        name: 'Lanke, Bogensee Bildungsstätte',
    },
    {
        id: '900350456',
        name: 'Groß Schönebeck, Abzweig Liebenthal',
    },
    {
        id: '900350460',
        name: 'Groß Schönebeck, Heide',
    },
    {
        id: '900350708',
        name: 'Sophienstädt',
    },
    {
        id: '900350652',
        name: 'Ruhlsdorf (BAR), Campingplatz',
    },
    {
        id: '900350655',
        name: 'Ruhlsdorf (BAR), Kiessee',
    },
    {
        id: '900350653',
        name: 'Ruhlsdorf (BAR), Dorf',
    },
    {
        id: '900350656',
        name: 'Ruhlsdorf (BAR), Post',
    },
    {
        id: '900350640',
        name: 'Prenden, Abzweig Klosterfelde',
    },
    {
        id: '900350641',
        name: 'Prenden, Dorf',
    },
    {
        id: '900350642',
        name: 'Prenden, Pflegeheim',
    },
    {
        id: '900350539',
        name: 'Lanke, Dorf',
    },
    {
        id: '900350473',
        name: 'Finow, Waldsportanlage',
    },
    {
        id: '900350654',
        name: 'Ruhlsdorf (BAR), Feuerwehr',
    },
    {
        id: '900350458',
        name: 'Groß Schönebeck, Feuerwehr',
    },
    {
        id: '900350463',
        name: 'Groß Schönebeck, Schule',
    },
    {
        id: '900260213',
        name: 'Großziethen, Kreisverkehr',
    },
    {
        id: '900350464',
        name: 'Groß Schönebeck, Sperlingsaue',
    },
    {
        id: '900350516',
        name: 'Klandorf, Abzweig B 109',
    },
    {
        id: '900350803',
        name: 'Zerpenschleuse, Ausbau',
    },
    {
        id: '900350802',
        name: 'Zerpenschleuse, Kita/An der B 109',
    },
    {
        id: '900350657',
        name: 'Ruhlsdorf (BAR), Schleuse',
    },
    {
        id: '900350648',
        name: 'Rüdnitz, Birkenhof',
    },
    {
        id: '140095503001',
        name: 'Beilrode, Schule',
    },
    {
        id: '140095503002',
        name: 'Beilrode, Schule',
    },
    {
        id: '900350602',
        name: 'Neu-Lindenberg, Dorf',
    },
    {
        id: '900350603',
        name: 'Neu-Lindenberg, Krimhildstr.',
    },
    {
        id: '900350822',
        name: 'Lindenberg (BAR), Ahrensfelder Str.',
    },
    {
        id: '900350155',
        name: 'Lindenberg (BAR), Bernauer Str.',
    },
    {
        id: '900350466',
        name: 'Grüntal, Danewitzer Chaussee',
    },
    {
        id: '900135512',
        name: 'Alt-Buch/Wiltbergstr.',
    },
    {
        id: '900135511',
        name: 'Alt-Buch',
    },
    {
        id: '900135510',
        name: 'Schwanebecker Chaussee',
    },
    {
        id: '900350681',
        name: 'Schönwalde (BAR), Kreuzung',
    },
    {
        id: '900350835',
        name: 'Neu-Lindenberg, Birkholzer Allee',
    },
    {
        id: '900350562',
        name: 'Lindenberg (BAR), Klarahöh',
    },
    {
        id: '900350578',
        name: 'Mehrow, Kirche',
    },
    {
        id: '900350378',
        name: 'Eiche, Gärtnerstr.',
    },
    {
        id: '900350143',
        name: 'Ahrensfelde, Bhf Friedhof',
    },
    {
        id: '900350377',
        name: 'Eiche, Dorf',
    },
    {
        id: '900350375',
        name: 'Eiche, Ahrensfelder Chaussee',
    },
    {
        id: '140095502672',
        name: 'Beilrode, Bhf',
    },
    {
        id: '900350145',
        name: 'Ahrensfelde, Feldstr.',
    },
    {
        id: '900170021',
        name: 'Schorfheidestr.',
    },
    {
        id: '900350234',
        name: 'Basdorf (BAR), Schule',
    },
    {
        id: '900350668',
        name: 'Schönerlinde (BAR), Stadtgut',
    },
    {
        id: '900350650',
        name: 'Rüdnitz, Gemeinde',
    },
    {
        id: '900350542',
        name: 'Biesenthal, Anna-Seghers-Weg',
    },
    {
        id: '900350327',
        name: 'Biesenthal, Friedrich-Wolf-Weg',
    },
    {
        id: '900350286',
        name: 'Biesenthal, Wukensee',
    },
    {
        id: '900350283',
        name: 'Biesenthal, Lanker Str.',
    },
    {
        id: '900350285',
        name: 'Biesenthal, Amt',
    },
    {
        id: '900350564',
        name: 'Lobetal, Dorf',
    },
    {
        id: '900350565',
        name: 'Lobetal, Kirche',
    },
    {
        id: '900350545',
        name: 'Lanke, Stadtgut',
    },
    {
        id: '900083208',
        name: 'Am Rudower Waldrand',
    },
    {
        id: '900350236',
        name: 'Basdorf (BAR), Kirche',
    },
    {
        id: '900350233',
        name: 'Basdorf (BAR), Prenzlauer Str.',
    },
    {
        id: '900350680',
        name: 'Schönwalde (BAR), Gewerbegebiet',
    },
    {
        id: '900350453',
        name: 'Gorinsee, Dorf',
    },
    {
        id: '900350352',
        name: 'Biesenthal, Wagnerstr.',
    },
    {
        id: '900350333',
        name: 'Biesenthal, Sydower Fließ',
    },
    {
        id: '900350278',
        name: 'Biesenthal, Dewinsee',
    },
    {
        id: '900350535',
        name: 'Lanke, Bergauf',
    },
    {
        id: '140095502671',
        name: 'Beilrode, Bhf',
    },
    {
        id: '900321112',
        name: 'Leuenberg, Bhf',
    },
    {
        id: '900321157',
        name: 'Steinbeck',
    },
    {
        id: '900321164',
        name: 'Wollenberg, Kreuzung',
    },
    {
        id: '900321163',
        name: 'Wollenberg, Dorf',
    },
    {
        id: '900321165',
        name: 'Wollenberg, Stern',
    },
    {
        id: '900321123',
        name: 'Neugaul',
    },
    {
        id: '900320556',
        name: 'Strausberg, Stadtmauer',
    },
    {
        id: '900220379',
        name: 'Stahnsdorf, Meisenweg',
    },
    {
        id: '900320558',
        name: 'Strausberg, Wriezener Str.',
    },
    {
        id: '900321113',
        name: 'Leuenberg, Dorf',
    },
    {
        id: '900261142',
        name: 'Zeuthen, Schulstr.',
    },
    {
        id: '900350001',
        name: 'Tiefensee, Bhf',
    },
    {
        id: '900350248',
        name: 'Bernau, August-Bebel-Str.',
    },
    {
        id: '900320751',
        name: 'Batzlow',
    },
    {
        id: '900321015',
        name: 'Altranft, Gewerbegebiet',
    },
    {
        id: '900320974',
        name: 'Wegendorf, Siedlung',
    },
    {
        id: '900320972',
        name: 'Wegendorf, Dorf',
    },
    {
        id: '900350727',
        name: 'Tiefensee, Dorf',
    },
    {
        id: '900321050',
        name: 'Beiersdorf (MOL), Baumschule',
    },
    {
        id: '900321051',
        name: 'Beiersdorf (MOL), Dorf',
    },
    {
        id: '900350761',
        name: 'Werftpfuhl, An der B 158',
    },
    {
        id: '900320557',
        name: 'Strausberg, Nordstr.',
    },
    {
        id: '900320875',
        name: 'Prötzel, Kreuzung',
    },
    {
        id: '900321086',
        name: 'Harnekop, Sägewerk',
    },
    {
        id: '900321085',
        name: 'Harnekop, Dorf',
    },
    {
        id: '900321088',
        name: 'Haselberg, Dorf',
    },
    {
        id: '900321089',
        name: 'Haselberg, Rädikow',
    },
    {
        id: '900321155',
        name: 'Schulzendorf (MOL), Möglin',
    },
    {
        id: '900321618',
        name: 'Neufriedland',
    },
    {
        id: '900321760',
        name: 'Sietzing',
    },
    {
        id: '900321849',
        name: 'Wuschewier, Dorf',
    },
    {
        id: '900321158',
        name: 'Sternebeck',
    },
    {
        id: '900320554',
        name: 'Strausberg, Krankenhaus',
    },
    {
        id: '900341195',
        name: 'Steinhöfel (UM), Wendeschleife',
    },
    {
        id: '900320564',
        name: 'Strausberg, Gesundheitszentrum',
    },
    {
        id: '900321108',
        name: 'Klosterdorf',
    },
    {
        id: '900320755',
        name: 'Ernsthof, Kreuzung',
    },
    {
        id: '900320842',
        name: 'Grunow (MOL), Dorf',
    },
    {
        id: '900320844',
        name: 'Ihlow (MOL)',
    },
    {
        id: '900320837',
        name: 'Reichenow, Dorf',
    },
    {
        id: '900340213',
        name: 'Augustfelde',
    },
    {
        id: '900320839',
        name: 'Reichenow, Schloss',
    },
    {
        id: '900350268',
        name: 'Bernau, Paulus-Praetorius-Gymnasium',
    },
    {
        id: '900260218',
        name: 'Großziethen, Am Pfarracker',
    },
    {
        id: '900203510',
        name: 'Hohenbruch, Hauptgraben',
    },
    {
        id: '900222048',
        name: 'Börnecke, Ortsmitte',
    },
    {
        id: '900222266',
        name: 'Damelang, Süd',
    },
    {
        id: '900350913',
        name: 'Bernau, Gorkistr.',
    },
    {
        id: '900222270',
        name: 'Brück, Thomas-Müntzer-Str.',
    },
    {
        id: '900350272',
        name: 'Bernau, Schönfelder Weg',
    },
    {
        id: '900350262',
        name: 'Bernau, Hasenheide',
    },
    {
        id: '900350261',
        name: 'Bernau, Guntherstr.',
    },
    {
        id: '900350252',
        name: 'Bernau, Börnicker Landweg',
    },
    {
        id: '900350251',
        name: 'Bernau, Blumberger Chaussee',
    },
    {
        id: '900350673',
        name: 'Schönow (BAR), Mittelstr.',
    },
    {
        id: '900350860',
        name: 'Bernau, Bahnhofs-Passage',
    },
    {
        id: '900350674',
        name: 'Schönow (BAR), Goethestr.',
    },
    {
        id: '900350540',
        name: 'Lanke, Försterei Woltersdorf',
    },
    {
        id: '900350534',
        name: 'Ladeburg, Ausbau',
    },
    {
        id: '900415226',
        name: 'Schilda, Wildgruber Str.',
    },
    {
        id: '900350199',
        name: 'Ladeburg, Tierheim',
    },
    {
        id: '900350254',
        name: 'Bernau, Albertshofer Chaussee',
    },
    {
        id: '900350866',
        name: 'Bernau, Elbestr.',
    },
    {
        id: '900350863',
        name: 'Bernau, Am Forum',
    },
    {
        id: '900350246',
        name: 'Bernau, Am Wasserturm',
    },
    {
        id: '900222265',
        name: 'Linthe, Dorfstr.',
    },
    {
        id: '900350265',
        name: 'Bernau, Neuer Friedhof',
    },
    {
        id: '900350266',
        name: 'Bernau, Krankenhaus',
    },
    {
        id: '900350253',
        name: 'Bernau, Brandenburg-Klinik',
    },
    {
        id: '900350247',
        name: 'Bernau, Anglersruh',
    },
    {
        id: '900350259',
        name: 'Bernau, Hans-Wittwer-Str.',
    },
    {
        id: '900350821',
        name: 'Bernau, Barnim-Gymnasium',
    },
    {
        id: '900350258',
        name: 'Bernau, Bauhausdenkmal',
    },
    {
        id: '900261239',
        name: 'Groß Leuthen, Schule',
    },
    {
        id: '900350274',
        name: 'Bernau, Waldkater',
    },
    {
        id: '900350270',
        name: 'Bernau, Rüdnitzer Chaussee',
    },
    {
        id: '900350273',
        name: 'Bernau, Lindow',
    },
    {
        id: '900350678',
        name: 'Schönow (BAR), Stern',
    },
    {
        id: '900350675',
        name: 'Schönow (BAR), Kindergarten',
    },
    {
        id: '900222267',
        name: 'Brück, Chausseestr.',
    },
    {
        id: '900350676',
        name: 'Schönow (BAR), Helmut-Schmidt-Allee',
    },
    {
        id: '900350663',
        name: 'Schmetzdorf (BAR)',
    },
    {
        id: '900350277',
        name: 'Bernau, Wohnpark Friedenstal',
    },
    {
        id: '900350244',
        name: 'Bernau, Abzweig Wohnsiedlung',
    },
    {
        id: '900350249',
        name: 'Bernau, Grundschule am Blumenhag',
    },
    {
        id: '900350263',
        name: 'Bernau, Gaskessel',
    },
    {
        id: '900152504',
        name: 'Siedlung Wartenberg/Str. 5',
    },
    {
        id: '900350887',
        name: 'Seefeld (Mark), Eichenstr.',
    },
    {
        id: '900260342',
        name: 'Briesensee, Haltepunkt',
    },
    {
        id: '900460776',
        name: 'Luckau, Schwimmbad',
    },
    {
        id: '900222177',
        name: 'Schlamau',
    },
    {
        id: '900260620',
        name: 'Bindow, Wendeplatz',
    },
    {
        id: '900260619',
        name: 'Bindow, Siedlung',
    },
    {
        id: '900261733',
        name: 'Reichwalde, Luckauer Str.',
    },
    {
        id: '900260205',
        name: 'Großziethen, Kreisverkehr',
    },
    {
        id: '900340133',
        name: 'Angermünde, Tierpark',
    },
    {
        id: '900245523',
        name: 'Ludwigsfelde, J.-Curie-Platz',
    },
    {
        id: '900220651',
        name: 'Werder (Havel), Hartplatz',
    },
    {
        id: '900260779',
        name: 'Königs Wusterhausen, Luckenwalder Str./Goethestr.',
    },
    {
        id: '900260776',
        name: 'Königs Wusterhausen, Bettina-von-Arnim-Str.',
    },
    {
        id: '900245023',
        name: 'Zossen, Bhf',
    },
    {
        id: '900350131',
        name: 'Eberswalde, Gropius-Krankenhaus',
    },
    {
        id: '900350128',
        name: 'Eberswalde, Arbeitsamt',
    },
    {
        id: '900350625',
        name: 'Niederfinow, Schleusentreppe',
    },
    {
        id: '900350619',
        name: 'Niederfinow, Dorf',
    },
    {
        id: '900350626',
        name: 'Niederfinow, Stecherschleuse Wendeschleife',
    },
    {
        id: '900350627',
        name: 'Niederfinow, Stecherschleuse/Kita',
    },
    {
        id: '900350622',
        name: 'Niederfinow, Kreuzung',
    },
    {
        id: '900350491',
        name: 'Hohenfinow, Schloßpark',
    },
    {
        id: '900350129',
        name: 'Eberswalde, Friedrich-Hegel-Str.',
    },
    {
        id: '900245029',
        name: 'Ludwigsfelde, Bhf',
    },
    {
        id: '900260574',
        name: 'Diepensee, Hauptstr.',
    },
    {
        id: '900220633',
        name: 'Werder (Havel), Altes Rathaus',
    },
    {
        id: '900203453',
        name: 'Velten, Anglerweg',
    },
    {
        id: '900203436',
        name: 'Borgsdorf, Berliner Str./Karl-Marx-Str.',
    },
    {
        id: '900203433',
        name: 'Borgsdorf, Kirche',
    },
    {
        id: '900203418',
        name: 'Schönfließ (OHV), Am Feldweg',
    },
    {
        id: '900203353',
        name: 'Hennigsdorf, Akazienweg',
    },
    {
        id: '900340138',
        name: 'Angermünde, Bruhnschule',
    },
    {
        id: '900340120',
        name: 'Angermünde, Kalksandsteinwerk',
    },
    {
        id: '900340126',
        name: 'Angermünde, Puschkinallee',
    },
    {
        id: '900203333',
        name: 'Oranienburg, Wernigeroder Str.',
    },
    {
        id: '900260575',
        name: 'Königs Wusterhausen, Am Nottefließ',
    },
    {
        id: '900203360',
        name: 'Hennigsdorf, Heideweg',
    },
    {
        id: '900415335',
        name: 'Körba, Ortsmitte',
    },
    {
        id: '900220650',
        name: 'Werder (Havel), Fischerstr.',
    },
    {
        id: '900245589',
        name: 'Siethen, Ludwigsfelder Chaussee',
    },
    {
        id: '900245297',
        name: 'Dahme, Baruther Str.',
    },
    {
        id: '900245046',
        name: 'Luckenwalde, Kleiner Haag',
    },
    {
        id: '900220712',
        name: 'Werder (Havel), Ruderklub',
    },
    {
        id: '900220718',
        name: 'Werder (Havel), Schützenhaus',
    },
    {
        id: '900350806',
        name: 'Joachimsthal, Werbellinseeblick',
    },
    {
        id: '900350555',
        name: 'Liepe (BAR), Am Sportplatz',
    },
    {
        id: '900350556',
        name: 'Liepe (BAR), Brauerstr.',
    },
    {
        id: '900200102',
        name: 'Hennigsdorf, Am Rathenaupark',
    },
    {
        id: '900203369',
        name: 'Hennigsdorf, Edisonstr.',
    },
    {
        id: '900203368',
        name: 'Hennigsdorf, Humboldtstr.',
    },
    {
        id: '900203872',
        name: 'Hennigsdorf, Kleiststr.',
    },
    {
        id: '900203873',
        name: 'Hennigsdorf, Voltastr.',
    },
    {
        id: '900210686',
        name: 'Perwenitz, Gewerbegebiet',
    },
    {
        id: '900210611',
        name: 'Wustermark, Abzweig Wernitz',
    },
    {
        id: '900152001',
        name: 'S Hohenschönhausen',
    },
    {
        id: '900203698',
        name: 'Teschendorf, Im Hagen',
    },
    {
        id: '900203477',
        name: 'Hohenbruch, Dorfkern',
    },
    {
        id: '900203334',
        name: 'Sachsenhausen, Friedrichstr.',
    },
    {
        id: '900203752',
        name: 'Neulüdersdorf, Abzweig',
    },
    {
        id: '900203434',
        name: 'Velten, Kuschelhain',
    },
    {
        id: '900262061',
        name: 'Wüstermarke, Am Spring',
    },
    {
        id: '900261326',
        name: 'Jetsch, Ausbau',
    },
    {
        id: '900350826',
        name: 'Groß Schönebeck, Böhmerheide Ausbau',
    },
    {
        id: '900203108',
        name: 'Zühlsdorf, Seefeld',
    },
    {
        id: '900350716',
        name: 'Stolzenhagen (bei Wandlitz), Siedlung',
    },
    {
        id: '900350814',
        name: 'Zerpenschleuse, Am Finowkanal',
    },
    {
        id: '900350926',
        name: 'Schönow (BAR), Gemeindezentrum',
    },
    {
        id: '900350927',
        name: 'Schönow (BAR), Zepernicker Str.',
    },
    {
        id: '900350942',
        name: 'Bernau, Wielandstr.',
    },
    {
        id: '900350840',
        name: 'Schönow (BAR), Kirche',
    },
    {
        id: '900350623',
        name: 'Niederfinow, Schiffshebewerk',
    },
    {
        id: '900350559',
        name: 'Liepe (BAR), Wendeschleife',
    },
    {
        id: '900350557',
        name: 'Liepe (BAR), Poststr.',
    },
    {
        id: '900350807',
        name: 'Stolzenhagen, Kirschallee',
    },
    {
        id: '900203109',
        name: 'Zühlsdorf, Rahmersee',
    },
    {
        id: '900245762',
        name: 'Baruth, Ernst-Thälmann-Platz',
    },
    {
        id: '900152511',
        name: 'Lindenberger Str./Birkholzer Weg',
    },
    {
        id: '900350183',
        name: 'Schwanebeck (BAR), Zillertaler Str.',
    },
    {
        id: '900350687',
        name: 'Schwanebeck (BAR), Bodenseestr.',
    },
    {
        id: '900350264',
        name: 'Bernau, Warthestr.',
    },
    {
        id: '900074702',
        name: 'S Lichtenrade',
    },
    {
        id: '900350484',
        name: 'Marienwerder, Eberswalder Str.',
    },
    {
        id: '900340108',
        name: 'Angermünde, Ehm-Welk-Str.',
    },
    {
        id: '900350289',
        name: 'Birkenhöhe, Grenzweg',
    },
    {
        id: '900275095',
        name: 'Brandenburg, Bauhofstr.',
    },
    {
        id: '900350488',
        name: 'Hobrechtsfelde',
    },
    {
        id: '900350789',
        name: 'Zepernick, Dransehaus',
    },
    {
        id: '140094152091',
        name: 'Finsterwalde, Forststr.',
    },
    {
        id: '900435625',
        name: 'Lübbenau, R.-Wagner-Str.',
    },
    {
        id: '900350174',
        name: 'Zepernick, Kirche',
    },
    {
        id: '900415214',
        name: 'Kirchhain, Am Hagwall',
    },
    {
        id: '900350167',
        name: 'Schwanebeck (BAR), Lindenberger Str.',
    },
    {
        id: '900350794',
        name: 'Zepernick, Malzmühle',
    },
    {
        id: '900350461',
        name: 'Groß Schönebeck, Sarnow',
    },
    {
        id: '900350150',
        name: 'Biesenthal, Hellwigstr.',
    },
    {
        id: '900350281',
        name: 'Biesenthal, Kiefernallee',
    },
    {
        id: '900350798',
        name: 'Zepernick, Stern',
    },
    {
        id: '900350895',
        name: 'Werneuchen, Wegendorfer Str.',
    },
    {
        id: '900350566',
        name: 'Löhme, Dorf',
    },
    {
        id: '900415430',
        name: 'Domsdorf (EE), Abzweig Louise',
    },
    {
        id: '900350299',
        name: 'Blumberg (BAR), Schlossparksiedlung',
    },
    {
        id: '900350297',
        name: 'Blumberg (BAR), Hort',
    },
    {
        id: '900350300',
        name: 'Blumberg (BAR), Schule',
    },
    {
        id: '900350295',
        name: 'Blumberg (BAR), Ausbau',
    },
    {
        id: '900350291',
        name: 'Birkholzaue, Siedlung Lauter',
    },
    {
        id: '900350391',
        name: 'Elisenau, Birkholzaue',
    },
    {
        id: '900350392',
        name: 'Elisenau, Seestr.',
    },
    {
        id: '900350698',
        name: 'Seefeld (Mark), Dorf',
    },
    {
        id: '900350700',
        name: 'Seefeld (Mark), Krummenseer Chaussee',
    },
    {
        id: '900350487',
        name: 'Hirschfelde, Am Trafo',
    },
    {
        id: '900350762',
        name: 'Werftpfuhl, Dorf',
    },
    {
        id: '900350766',
        name: 'Werneuchen, Ost',
    },
    {
        id: '900350763',
        name: 'Werneuchen, Ambulatorium',
    },
    {
        id: '900350764',
        name: 'Werneuchen, Thälmannstr.',
    },
    {
        id: '900350699',
        name: 'Seefeld (Mark), Mühle',
    },
    {
        id: '900350530',
        name: 'Krummensee (BAR), Wendestelle',
    },
    {
        id: '900350529',
        name: 'Krummensee (BAR), Dorf',
    },
    {
        id: '900350204',
        name: 'Albertshof (BAR), Rüsterstr.',
    },
    {
        id: '900350203',
        name: 'Albertshof (BAR), Dorf',
    },
    {
        id: '900350508',
        name: 'Joachimsthal, Schützenplatz',
    },
    {
        id: '900350452',
        name: 'Golzow (BAR), Schönhof',
    },
    {
        id: '900350898',
        name: 'Glambeck (BAR), Wendestelle',
    },
    {
        id: '900350672',
        name: 'Schönholz (BAR), Forsthaus',
    },
    {
        id: '900350710',
        name: 'Spechthausen, Försterei',
    },
    {
        id: '900350469',
        name: 'Grüntal, Siedlung',
    },
    {
        id: '900350737',
        name: 'Tuchen',
    },
    {
        id: '900350636',
        name: 'Parlow',
    },
    {
        id: '900350449',
        name: 'Glambeck (BAR)',
    },
    {
        id: '900320551',
        name: 'Strausberg, Philipp-Müller-Str.',
    },
    {
        id: '900350571',
        name: 'Luisenfelde, Abzweig Töpferberge',
    },
    {
        id: '900350520',
        name: 'Klein Ziethen (BAR), Luisenfelde',
    },
    {
        id: '900350899',
        name: 'Klein Ziethen (BAR), Schmargendorfer Weg',
    },
    {
        id: '900350450',
        name: 'Golzow (BAR), Denkmal',
    },
    {
        id: '900350219',
        name: 'Althüttendorf, Bahnhofstr.',
    },
    {
        id: '900340568',
        name: 'Ringenwalde (UM), Dorf',
    },
    {
        id: '900220141',
        name: 'Brück, Bhf',
    },
    {
        id: '900350507',
        name: 'Joachimsthal, Leistenhaus',
    },
    {
        id: '900350736',
        name: 'Klobbicke',
    },
    {
        id: '900350731',
        name: 'Trampe (BAR), Klobbicker Str.',
    },
    {
        id: '900350290',
        name: 'Birkenhöhe, Siedlung',
    },
    {
        id: '900350288',
        name: 'Birkenhöhe, Dorf',
    },
    {
        id: '900350586',
        name: 'Neudorf (bei Prenden)',
    },
    {
        id: '900350669',
        name: 'Schönfeld (BAR), Dorf',
    },
    {
        id: '900350757',
        name: 'Weesow, Kreuzung',
    },
    {
        id: '900350758',
        name: 'Willmersdorf, Am Gewerbepark',
    },
    {
        id: '900350768',
        name: 'Willmersdorf (BAR)',
    },
    {
        id: '900350293',
        name: 'Birkholz (BAR), Siedlung',
    },
    {
        id: '900350367',
        name: 'Eberswalde, Drehnitzstr.',
    },
    {
        id: '900350357',
        name: 'Eberswalde, Wildparkstr.',
    },
    {
        id: '900350379',
        name: 'Eberswalde, Bernauer Heerstr.',
    },
    {
        id: '900350368',
        name: 'Eberswalde, Südend',
    },
    {
        id: '900350686',
        name: 'Schwanebeck (BAR), Birkholzer Str.',
    },
    {
        id: '900350694',
        name: 'Schwanebeck (BAR), Schule',
    },
    {
        id: '900350691',
        name: 'Schwanebeck (BAR), Kreuzung Birkholzer Chaussee',
    },
    {
        id: '900350292',
        name: 'Birkholz (BAR), Dorf',
    },
    {
        id: '900220070',
        name: 'Teltow, Warthestr.',
    },
    {
        id: '900435116',
        name: 'Kostebrau, Goetheplatz',
    },
    {
        id: '900245321',
        name: 'Tiefenbrunnen, Gaststätte',
    },
    {
        id: '900245236',
        name: 'Altes Lager, F.-Engels-Str.',
    },
    {
        id: '900245237',
        name: 'Altes Lager, Flämingstr.',
    },
    {
        id: '900245161',
        name: 'Werder (bei Jüterbog)',
    },
    {
        id: '900245347',
        name: 'Luckenwalde, Gottower Str.',
    },
    {
        id: '900245024',
        name: 'Dabendorf, Bhf',
    },
    {
        id: '900245218',
        name: 'Luckenwalde, Marktkauf',
    },
    {
        id: '900245217',
        name: 'Luckenwalde, Lindenstr.',
    },
    {
        id: '900222199',
        name: 'Treuenbrietzen, Süd',
    },
    {
        id: '900245233',
        name: 'Luckenwalde, Wasserwerk',
    },
    {
        id: '900245194',
        name: 'Luckenwalde, Baumschulenweg',
    },
    {
        id: '900222069',
        name: 'Frohnsdorf, Treuenbrietzener Str.',
    },
    {
        id: '900245146',
        name: 'Neuheim, Dorfstr.',
    },
    {
        id: '900245134',
        name: 'Grüna, Hauptstr.',
    },
    {
        id: '900245013',
        name: 'Mellensee, Bahnhofsallee',
    },
    {
        id: '900245546',
        name: 'Mellensee, Dorfanger',
    },
    {
        id: '900245547',
        name: 'Mellensee, Kiefernallee',
    },
    {
        id: '900245614',
        name: 'Zossen, Johnepark',
    },
    {
        id: '900245019',
        name: 'Oehna (bei Niedergörsdorf), Bhf',
    },
    {
        id: '900245253',
        name: 'Oehna (bei Niedergörsdorf), Ort',
    },
    {
        id: '900245260',
        name: 'Zellendorf, Dorfstr.',
    },
    {
        id: '900245189',
        name: 'Welsickendorf, Dorfstr.',
    },
    {
        id: '900245516',
        name: 'Ludwigsfelde, Krankenhaus',
    },
    {
        id: '900245364',
        name: 'Ludwigsfelde, Hochhaus',
    },
    {
        id: '900245362',
        name: 'Ludwigsfelde, Neckarstr.',
    },
    {
        id: '900245536',
        name: 'Ludwigsfelde, Gröbener Heide',
    },
    {
        id: '900245428',
        name: 'Christinendorf, Kirchstr.',
    },
    {
        id: '900245562',
        name: 'Nunsdorf, Dorfstr.',
    },
    {
        id: '900245601',
        name: 'Werben (TF), An der Dorfstr.',
    },
    {
        id: '900245563',
        name: 'Paplitz, Luckenwalder Landstr.',
    },
    {
        id: '900245171',
        name: 'Höfgen, Abzweig',
    },
    {
        id: '900245125',
        name: 'Jüterbog, Anlagen',
    },
    {
        id: '900245168',
        name: 'Borgisdorf, Dorfstr.',
    },
    {
        id: '900245185',
        name: 'Schlenzer, Ort',
    },
    {
        id: '900245144',
        name: 'Jüterbog, Markt',
    },
    {
        id: '900245138',
        name: 'Jüterbog, In den Kaupen',
    },
    {
        id: '900260976',
        name: 'Telz, Am Kanal',
    },
    {
        id: '900245159',
        name: 'Jüterbog, Waldauer Weg',
    },
    {
        id: '900245156',
        name: 'Jüterbog, Schloßstr.',
    },
    {
        id: '900245132',
        name: 'Jüterbog, Eichenweg',
    },
    {
        id: '900245622',
        name: 'Zossen, Stubenrauchstr.',
    },
    {
        id: '900220242',
        name: 'Ziesar, Bhf',
    },
    {
        id: '900245421',
        name: 'Baruth, Luckenwalder Str.',
    },
    {
        id: '900245626',
        name: 'Baruth, Schule',
    },
    {
        id: '900245423',
        name: 'Baruth, Zossener Str.',
    },
    {
        id: '900025231',
        name: 'Murellenteich',
    },
    {
        id: '900245420',
        name: 'Baruth, Heideweg',
    },
    {
        id: '900245618',
        name: 'Zossen, Marktplatz',
    },
    {
        id: '900245537',
        name: 'Ludwigsfelde, Gymnasium',
    },
    {
        id: '900245540',
        name: 'Ludwigsfelde, Taubenstr.',
    },
    {
        id: '900245538',
        name: 'Ludwigsfelde, H.-Zille-Str.',
    },
    {
        id: '900245473',
        name: 'Großbeeren, Bahnhofstr.',
    },
    {
        id: '900245091',
        name: 'Großbeeren, Genshagener Str.',
    },
    {
        id: '900245069',
        name: 'Heinersdorf (TF), Dorf',
    },
    {
        id: '900245478',
        name: 'Heinersdorf (TF), Osdorfer Str.',
    },
    {
        id: '900245759',
        name: 'Neubeeren, Wendestelle',
    },
    {
        id: '900245502',
        name: 'Kleinbeeren, Friedhof',
    },
    {
        id: '900245635',
        name: 'Großbeeren, Containerbhf.',
    },
    {
        id: '900245089',
        name: 'Großbeeren, Schule',
    },
    {
        id: '900245474',
        name: 'Großbeeren, Märkische Allee Süd',
    },
    {
        id: '900245088',
        name: 'Großbeeren, Lindenstr.',
    },
    {
        id: '900245087',
        name: 'Großbeeren, Feldstr.',
    },
    {
        id: '900245532',
        name: 'Ludwigsfelde, Am Friedhof',
    },
    {
        id: '900245521',
        name: 'Ludwigsfelde, Damsdorfer Heide',
    },
    {
        id: '900245058',
        name: 'Luckenwalde, Jänickendorfer Str.',
    },
    {
        id: '900200167',
        name: 'Tiefenbrunnen, Bhf',
    },
    {
        id: '900245739',
        name: 'Jüterbog, Winzerhöhe',
    },
    {
        id: '900245130',
        name: 'Jüterbog, Dennewitzer Str.',
    },
    {
        id: '900245155',
        name: 'Jüterbog, Schloßpark',
    },
    {
        id: '900245140',
        name: 'Jüterbog, Oberhag',
    },
    {
        id: '000313606001',
        name: 'Jüterbog, Pferdestr.',
    },
    {
        id: '900245193',
        name: 'Luckenwalde, Zinnaer Str.',
    },
    {
        id: '900245227',
        name: 'Luckenwalde, Meisterweg',
    },
    {
        id: '900245192',
        name: 'Luckenwalde, Am Burgwall',
    },
    {
        id: '900245331',
        name: 'Gottow, Damm',
    },
    {
        id: '900245371',
        name: 'Ludwigsfelde, Schule 3',
    },
    {
        id: '900245410',
        name: 'Ludwigsfelde, A.-Bebel-Str.',
    },
    {
        id: '900245531',
        name: 'Ludwigsfelde, Am Preußen-Park',
    },
    {
        id: '900245366',
        name: 'Ludwigsfelde, Märkersteig',
    },
    {
        id: '900245527',
        name: 'Ludwigsfelde, Kulturhaus',
    },
    {
        id: '900245059',
        name: 'Ludwigsfelde, R.-Diesel-Str.',
    },
    {
        id: '900245530',
        name: 'Ludwigsfelde, A.-Ladwig-Str.',
    },
    {
        id: '900245367',
        name: 'Ludwigsfelde, Zum Industriepark',
    },
    {
        id: '900245535',
        name: 'Ludwigsfelde, Waldstadion',
    },
    {
        id: '900245533',
        name: 'Ludwigsfelde, Ärztehaus',
    },
    {
        id: '900245580',
        name: 'Schöbendorf, Luckenwalde Str.',
    },
    {
        id: '000313633003',
        name: 'Potsdam, Katharinenholzstr.',
    },
    {
        id: '900275825',
        name: 'Paterdamm',
    },
    {
        id: '900275827',
        name: 'Schmerzke',
    },
    {
        id: '000313633004',
        name: 'Potsdam, Katharinenholzstr.',
    },
    {
        id: '900245590',
        name: 'Stülpe, Baruther Str.',
    },
    {
        id: '900470345',
        name: 'Cottbus, Merzdorf Cottbuser Ostsee',
    },
    {
        id: '900470344',
        name: 'Cottbus, Merzdorf Alpen',
    },
    {
        id: '900220222',
        name: 'Lehnin, Belziger Str.',
    },
    {
        id: '900220313',
        name: 'Riewend, Ziegelei',
    },
    {
        id: '900220186',
        name: 'Lehnin, Busbahnhof',
    },
    {
        id: '900220225',
        name: 'Lehnin, Waldsiedlung',
    },
    {
        id: '900275803',
        name: 'Brandenburg, Birkenweg',
    },
    {
        id: '900220227',
        name: 'Grüningen',
    },
    {
        id: '900220243',
        name: 'Wenzlow (PM)',
    },
    {
        id: '900275024',
        name: 'Mahlenzien',
    },
    {
        id: '900275820',
        name: 'Brandenburg, Wilhelmsdorf',
    },
    {
        id: '900275807',
        name: 'Brandenburg, Grillendamm',
    },
    {
        id: '900275810',
        name: 'Brandenburg, Lünower Weg',
    },
    {
        id: '900275823',
        name: 'Klein Kreutz, Weinberge',
    },
    {
        id: '900275022',
        name: 'Klein Kreutz, Abzweig Saaringen',
    },
    {
        id: '900220307',
        name: 'Weseram, Ausbau',
    },
    {
        id: '900220308',
        name: 'Weseram, Dorf',
    },
    {
        id: '900220239',
        name: 'Ziesar, Glienecker Chaussee',
    },
    {
        id: '900220238',
        name: 'Herrenmühle',
    },
    {
        id: '900220237',
        name: 'Steinberg (PM), Abzweig',
    },
    {
        id: '900220232',
        name: 'Steinberg (PM), Dorf',
    },
    {
        id: '900220240',
        name: 'Ziesar, Frauentor',
    },
    {
        id: '900220288',
        name: 'Butzow',
    },
    {
        id: '900222250',
        name: 'Radewege, Schule',
    },
    {
        id: '900220352',
        name: 'Mötzow, Katharinenbrücke',
    },
    {
        id: '900275018',
        name: 'Brandenburg, Trauerberg',
    },
    {
        id: '900275815',
        name: 'Brandenburg, Potsdamer Landstr.',
    },
    {
        id: '900220323',
        name: 'Roskow, Dorf',
    },
    {
        id: '900220286',
        name: 'Radewege, Dorf',
    },
    {
        id: '900245164',
        name: 'Jüterbog, Zinnaer Vorstadt',
    },
    {
        id: '900245053',
        name: 'Neuhof (bei Jüterbog), Dorfstr.',
    },
    {
        id: '900245148',
        name: 'Neuhof (bei Jüterbog), Neue Häuser',
    },
    {
        id: '900245318',
        name: 'Schönefeld (bei Luckenwalde), Gottower Str.',
    },
    {
        id: '900245464',
        name: 'Gottow, Am Dorfplatz',
    },
    {
        id: '900245505',
        name: 'Kleinbeuthen, Kreuzung',
    },
    {
        id: '900245302',
        name: 'Trebbin, Schule',
    },
    {
        id: '900245290',
        name: 'Trebbin, Markt',
    },
    {
        id: '900245300',
        name: 'Trebbin, Weinberg',
    },
    {
        id: '900245285',
        name: 'Trebbin, Baruther Str.',
    },
    {
        id: '900245002',
        name: 'Jüterbog, Bhf',
    },
    {
        id: '900245479',
        name: 'Holbeck, Eichenallee',
    },
    {
        id: '900245484',
        name: 'Jänickendorf (TF), Alte Hauptstr.',
    },
    {
        id: '900245011',
        name: 'Jänickendorf (TF), Zum Bahnhof',
    },
    {
        id: '900003157',
        name: 'Alt-Moabit/Rathaus Tiergarten',
    },
    {
        id: '900245137',
        name: 'Jüterbog, Herzberger Str.',
    },
    {
        id: '900245150',
        name: 'Jüterbog, Neumarkt',
    },
    {
        id: '900245133',
        name: 'Jüterbog, Große Str.',
    },
    {
        id: '900245234',
        name: 'Lüdersdorf (TF), Dorfstr.',
    },
    {
        id: '900340026',
        name: 'Templin, Bhf',
    },
    {
        id: '900245210',
        name: 'Luckenwalde, Jänickendorfer Siedlung',
    },
    {
        id: '900245197',
        name: 'Luckenwalde, Frankenfelder Ch.',
    },
    {
        id: '900245224',
        name: 'Luckenwalde, Heidestr.',
    },
    {
        id: '900245228',
        name: 'Luckenwalde, Waldstr.',
    },
    {
        id: '900245214',
        name: 'Luckenwalde, Krankenhaus',
    },
    {
        id: '900245221',
        name: 'Luckenwalde, Potsdamer Str.',
    },
    {
        id: '900245225',
        name: 'Luckenwalde, Salzufler Allee',
    },
    {
        id: '900221018',
        name: 'Fohrde, Abzweig Briest',
    },
    {
        id: '900245792',
        name: 'Luckenwalde, Dammstr.',
    },
    {
        id: '900245288',
        name: 'Kliestow, Chausseestr.',
    },
    {
        id: '900245204',
        name: 'Luckenwalde, Martin-Luther-Str.',
    },
    {
        id: '900245165',
        name: 'Klein Schulzendorf, Feuerwehr',
    },
    {
        id: '900220011',
        name: 'Potsdam, Rehbrücke/Süd',
    },
    {
        id: '900245486',
        name: 'Jütchendorf, Lindenstr.',
    },
    {
        id: '900245282',
        name: 'Schiaß, Am Schiaßer See',
    },
    {
        id: '900245103',
        name: 'Blankensee (TF), Blankenseer Ch.',
    },
    {
        id: '900245283',
        name: 'Schönhagen (TF), Trebbiner Str.',
    },
    {
        id: '900245293',
        name: 'Priedel',
    },
    {
        id: '900245289',
        name: 'Löwendorf, Wilhelmstr.',
    },
    {
        id: '900245261',
        name: 'Ahrensdorf (bei Trebbin), Kallinberg',
    },
    {
        id: '900245262',
        name: 'Ahrensdorf (bei Trebbin), Dorfaue',
    },
    {
        id: '900245275',
        name: 'Ruhlsdorf (TF), Trebbiner Ch.',
    },
    {
        id: '900245483',
        name: 'Horstwalde, Dorfplatz',
    },
    {
        id: '900245485',
        name: 'Jühnsdorf, Dorfstr.',
    },
    {
        id: '900245514',
        name: 'Löwenbruch, Dorfstr.',
    },
    {
        id: '900260886',
        name: 'Niederlehme, Wasserturm',
    },
    {
        id: '900260888',
        name: 'Niederlehme, Kirche',
    },
    {
        id: '900260889',
        name: 'Niederlehme, Wederdamm',
    },
    {
        id: '900261047',
        name: 'Ziegenhals, Friedrich-Engels-Str.',
    },
    {
        id: '900261048',
        name: 'Ziegenhals, Neubau',
    },
    {
        id: '900261050',
        name: 'Ziegenhals, Sporthaus',
    },
    {
        id: '900260852',
        name: 'Mittenwalde (LDS), Ruppinstr.',
    },
    {
        id: '900260169',
        name: 'Wernsdorf, Schleuse',
    },
    {
        id: '900185509',
        name: 'Wernsdorfer Str.',
    },
    {
        id: '900260607',
        name: 'Intercamping',
    },
    {
        id: '900260197',
        name: 'Großziethen, Am langen Grund',
    },
    {
        id: '900260887',
        name: 'Niederlehme, Goethestr.',
    },
    {
        id: '900260890',
        name: 'Niederlehme, Dahmestr.',
    },
    {
        id: '900261049',
        name: 'Ziegenhals, Schule',
    },
    {
        id: '900260748',
        name: 'Karlshof (bei Waltersdorf)',
    },
    {
        id: '900260914',
        name: 'Niederlehme, Liepnitzenberg Ost',
    },
    {
        id: '900260911',
        name: 'Niederlehme, Liepnitzenberg West',
    },
    {
        id: '900260913',
        name: 'Niederlehme, Robert-Guthmann-Str.',
    },
    {
        id: '900260077',
        name: 'Massow (LDS), Waldstr.',
    },
    {
        id: '900260026',
        name: 'Kleinziethen',
    },
    {
        id: '900260208',
        name: 'Waßmannsdorf, Klärwerk',
    },
    {
        id: '900260210',
        name: 'Waßmannsdorf, Dorfstr.',
    },
    {
        id: '900260101',
        name: 'Waßmannsdorf, Kreuzung',
    },
    {
        id: '900200036',
        name: 'Hohen Neuendorf, Seestr.',
    },
    {
        id: '900260020',
        name: 'Kiekebusch (LDS)',
    },
    {
        id: '900260937',
        name: 'Schönefeld (bei Berlin), Oberschule',
    },
    {
        id: '900260501',
        name: 'Rotberg, Dorf',
    },
    {
        id: '900260921',
        name: 'Rotberg, Karlshofer Weg',
    },
    {
        id: '900260774',
        name: 'Königs Wusterhausen, Darwinbogen',
    },
    {
        id: '900261015',
        name: 'Wildau, Fliederweg',
    },
    {
        id: '900261014',
        name: 'Wildau, Fichtestr.',
    },
    {
        id: '900203518',
        name: 'Birkenwerder, Schwalbenring',
    },
    {
        id: '900260196',
        name: 'Großziethen, Lichtenrader Chaussee',
    },
    {
        id: '900203950',
        name: 'Bergsdorf, Kirche',
    },
    {
        id: '900203714',
        name: 'Gransee, Gymnasium',
    },
    {
        id: '900203629',
        name: 'Zühlsdorf, Kirche',
    },
    {
        id: '900072101',
        name: 'S Buckower Chaussee',
    },
    {
        id: '900260790',
        name: 'Königs Wusterhausen, Luckenwalder Str.',
    },
    {
        id: '900260782',
        name: 'Königs Wusterhausen, Fontane-Center',
    },
    {
        id: '900260929',
        name: 'Schenkendorf, Friedhof',
    },
    {
        id: '900260930',
        name: 'Schenkendorf, Kirche',
    },
    {
        id: '900203520',
        name: 'Birkenwerder, Triftweg',
    },
    {
        id: '900260851',
        name: 'Mittenwalde (LDS), Schäferfeld',
    },
    {
        id: '900074254',
        name: 'Rennsteig',
    },
    {
        id: '900260041',
        name: 'Wildau, Ehrenmal',
    },
    {
        id: '900261011',
        name: 'Wildau, Bergstr.',
    },
    {
        id: '900260042',
        name: 'Wildau, Westkorso',
    },
    {
        id: '900260781',
        name: 'Königs Wusterhausen, Heinrich-von-Kleist-Str.',
    },
    {
        id: '900077139',
        name: 'Mierstr./Lahnstr.',
    },
    {
        id: '900260002',
        name: 'S Wildau',
    },
    {
        id: '900203519',
        name: 'Birkenwerder, Zum Waldfriedhof',
    },
    {
        id: '900260061',
        name: 'Schulzendorf (LDS), Otto-Krien-Str.',
    },
    {
        id: '900260512',
        name: 'Waltersdorf (bei Berlin), Am Rondell',
    },
    {
        id: '900261043',
        name: 'Zeuthen, Friedhof',
    },
    {
        id: '900260912',
        name: 'Niederlehme, Recyclinghof',
    },
    {
        id: '900260909',
        name: 'Niederlehme, Möllenberg Nord',
    },
    {
        id: '900261680',
        name: 'Paserin, Abzweig',
    },
    {
        id: '900260443',
        name: 'Falkenberg (bei Luckau), B 102',
    },
    {
        id: '900245746',
        name: 'Sieb, B 102',
    },
    {
        id: '900245721',
        name: 'Rosenthal (Dahme), B 102',
    },
    {
        id: '900245649',
        name: 'Dahme, Luckauer Str.',
    },
    {
        id: '900245645',
        name: 'Dahme, Hauptstr.',
    },
    {
        id: '070101030755',
        name: 'Pietschkerstr.',
    },
    {
        id: '900245686',
        name: 'Kemlitz (bei Luckau)',
    },
    {
        id: '900261596',
        name: 'Luckau-Uckro, Bhf',
    },
    {
        id: '900262098',
        name: 'Zöllmersdorf, B 102',
    },
    {
        id: '900261570',
        name: 'Luckau, Am Anger',
    },
    {
        id: '900260433',
        name: 'Egsdorf (bei Görlsdorf), Abzweig',
    },
    {
        id: '900261687',
        name: 'Pelkwitz',
    },
    {
        id: '900245695',
        name: 'Liebsdorf, Abzweig',
    },
    {
        id: '900245697',
        name: 'Liedekahle',
    },
    {
        id: '900260409',
        name: 'Drahnsdorf, Dorfstr.',
    },
    {
        id: '900261391',
        name: 'Krossen, Hauptstr.',
    },
    {
        id: '900261788',
        name: 'Rüdingsdorf, B 96',
    },
    {
        id: '900261149',
        name: 'Gießmannsdorf, B 96',
    },
    {
        id: '900262024',
        name: 'Wierigsdorf',
    },
    {
        id: '900261578',
        name: 'Luckau, Krankenhaus',
    },
    {
        id: '900245747',
        name: 'Sieb, Ortsmitte',
    },
    {
        id: '900262099',
        name: 'Zöllmersdorf, Ort',
    },
    {
        id: '900260444',
        name: 'Falkenberg (bei Luckau), Dorfstr.',
    },
    {
        id: '900261580',
        name: 'Luckau, Matschenzstr.',
    },
    {
        id: '900261190',
        name: 'Görlsdorf (LDS), Abzweig',
    },
    {
        id: '900261131',
        name: 'Garrenchen, Abzweig',
    },
    {
        id: '900083265',
        name: 'Rudower Fließ',
    },
    {
        id: '900260204',
        name: 'Großziethen, Am Lindengarten',
    },
    {
        id: '900260209',
        name: 'Waßmannsdorf, Stadtgut',
    },
    {
        id: '900260910',
        name: 'Niederlehme, Möllenberg Süd',
    },
    {
        id: '900260195',
        name: 'Großziethen, Kita',
    },
    {
        id: '900260211',
        name: 'Großziethen, An den Eichen',
    },
    {
        id: '900260725',
        name: 'Großziethen, Rosa-Luxemburg-Weg',
    },
    {
        id: '900083205',
        name: 'Ascherslebener Weg',
    },
    {
        id: '900083264',
        name: 'Pirnaer Str.',
    },
    {
        id: '900080651',
        name: 'Steinträgerweg',
    },
    {
        id: '900435932',
        name: 'Zinnitz',
    },
    {
        id: '900435233',
        name: 'Bathow, Autobahn',
    },
    {
        id: '900435483',
        name: 'Buckow (OSL)',
    },
    {
        id: '900260608',
        name: 'Schmöckwitzwerder',
    },
    {
        id: '900260726',
        name: 'Großziethen, Stadtgrenze Berlin',
    },
    {
        id: '900245480',
        name: 'Holbeck, Jägerweg',
    },
    {
        id: '900245391',
        name: 'Dahlewitz, Rangsdorfer Weg',
    },
    {
        id: '900245545',
        name: 'Mahlow, Schule am Waldblick',
    },
    {
        id: '900245441',
        name: 'Dahlewitz, Schule',
    },
    {
        id: '900245830',
        name: 'Dahlewitz, E.-Thälmann-Str.',
    },
    {
        id: '900245437',
        name: 'Dahlewitz, Bahnhofstr.',
    },
    {
        id: '900245026',
        name: 'Dahlewitz, Bhf',
    },
    {
        id: '900245395',
        name: 'Blankenfelde, M.-Liebermann-Ring',
    },
    {
        id: '900245426',
        name: 'Blankenfelde, Ärztehaus',
    },
    {
        id: '900245476',
        name: 'Großbeuthen, Seeblick',
    },
    {
        id: '900245475',
        name: 'Großbeuthen, Dorfplatz',
    },
    {
        id: '900245065',
        name: 'Rangsdorf, Winterfeldallee',
    },
    {
        id: '900245570',
        name: 'Rangsdorf, Hochwaldpromenade',
    },
    {
        id: '900245025',
        name: 'Rangsdorf, Bhf',
    },
    {
        id: '900245567',
        name: 'Rangsdorf, Anemonenstr.',
    },
    {
        id: '900245568',
        name: 'Rangsdorf, Bergstr.',
    },
    {
        id: '900245699',
        name: 'Rangsdorf, C.-Zetkin-Str.',
    },
    {
        id: '900245569',
        name: 'Rangsdorf, Herweghring',
    },
    {
        id: '900245594',
        name: 'Thyrow, Dorfplatz',
    },
    {
        id: '900245544',
        name: 'Märkisch Wilmersdorf, Am Umspannwerk',
    },
    {
        id: '900245512',
        name: 'Lindenbrück, Abzweig',
    },
    {
        id: '900416144',
        name: 'Schönewalde (bei Herzberg), Str. der Jugend',
    },
    {
        id: '900245508',
        name: 'Kummersdorf Gut, Museum',
    },
    {
        id: '900245506',
        name: 'Klein Kienitz, Kienitzer Dorfstr.',
    },
    {
        id: '900245501',
        name: 'Klein Ziescht (Baruth/Mark), Abzw.',
    },
    {
        id: '900245496',
        name: 'Klasdorf, Am Bahnhof',
    },
    {
        id: '900245604',
        name: 'Wietstock, Wietstocker Dorfstr.',
    },
    {
        id: '900245495',
        name: 'Kerzendorf, Dorfplatz',
    },
    {
        id: '900245494',
        name: 'Kerzendorf, Abzweig',
    },
    {
        id: '900245515',
        name: 'Löwenbruch, Weinberg',
    },
    {
        id: '900245550',
        name: 'Mückendorf, Teupitzer Weg',
    },
    {
        id: '900245432',
        name: 'Dabendorf, Kurve',
    },
    {
        id: '900245429',
        name: 'Dabendorf, Ausbau',
    },
    {
        id: '900470329',
        name: 'Cottbus, Hans-Beimler-Str.',
    },
    {
        id: '900245584',
        name: 'Siethen, Jütchendorfer Chaussee',
    },
    {
        id: '900245558',
        name: 'Neu Wünsdorf, Cottbuser Str.',
    },
    {
        id: '900245605',
        name: 'Wünsdorf, Klausdorfer Str.',
    },
    {
        id: '900245551',
        name: 'Mückendorf, Paplitzer Str.',
    },
    {
        id: '900470147',
        name: 'Cottbus, Südeck',
    },
    {
        id: '900245571',
        name: 'Rangsdorf, Südringcenter',
    },
    {
        id: '900245477',
        name: 'Groß Machnow, Kirche',
    },
    {
        id: '900210383',
        name: 'Falkensee, Heckmannstr.',
    },
    {
        id: '900073203',
        name: 'Klausenburger Pfad',
    },
    {
        id: '900073254',
        name: 'Baußnernweg',
    },
    {
        id: '900073253',
        name: 'Ahrensdorfer Str.',
    },
    {
        id: '900260977',
        name: 'Telz, Schöneicher Plan',
    },
    {
        id: '900245613',
        name: 'Zossen, Haus Feldeck',
    },
    {
        id: '900245611',
        name: 'Zossen, Luchweg',
    },
    {
        id: '900245602',
        name: 'Werben (TF), Trebbiner Landstr.',
    },
    {
        id: '900245579',
        name: 'Saalow, Berg',
    },
    {
        id: '900245578',
        name: 'Saalow, Dorfaue',
    },
    {
        id: '900245482',
        name: 'Horstfelde, An der Hauptstr.',
    },
    {
        id: '900200039',
        name: 'Hohen Neuendorf, Himmelspagode',
    },
    {
        id: '900245582',
        name: 'Schünow',
    },
    {
        id: '900200038',
        name: 'Hohen Neuendorf, Am Spargelfeld',
    },
    {
        id: '900245463',
        name: 'Glienick, Kreuzung',
    },
    {
        id: '900203525',
        name: 'Birkenwerder, Karl-Marx-Str.',
    },
    {
        id: '900245050',
        name: 'Großbeeren, Osdorfer Ring',
    },
    {
        id: '900245377',
        name: 'Ahrensdorf (bei Ludwigsfelde), Hauptstr.',
    },
    {
        id: '900245376',
        name: 'Ahrensdorf (bei Ludwigsfelde), Gartenstadt',
    },
    {
        id: '900203521',
        name: 'Birkenwerder, Industriestr.',
    },
    {
        id: '900230108',
        name: 'Potsdam, Trebbiner Str.',
    },
    {
        id: '900203522',
        name: 'Birkenwerder, Frankenstr.',
    },
    {
        id: '900203523',
        name: 'Birkenwerder, Kirche',
    },
    {
        id: '900203524',
        name: 'Birkenwerder, Am Quast',
    },
    {
        id: '900245070',
        name: 'Birkenhain (Heinersdorf)',
    },
    {
        id: '900220001',
        name: 'Teltow, Bhf',
    },
    {
        id: '900245462',
        name: 'Glienick, Schule',
    },
    {
        id: '900245493',
        name: 'Kemlitz (bei Baruth), Hauptstr.',
    },
    {
        id: '900245454',
        name: 'Genshagen, Eichenhain',
    },
    {
        id: '900210384',
        name: 'Falkensee, Dallgower Str./Parkplatz',
    },
    {
        id: '900245452',
        name: 'Genshagen, Genshagener Dorfstr.',
    },
    {
        id: '900245359',
        name: 'Genshagen, Dorf',
    },
    {
        id: '900245619',
        name: 'Zossen, Schäferei',
    },
    {
        id: '900245620',
        name: 'Zossen, Str. der Befreiung',
    },
    {
        id: '900245615',
        name: 'Zossen, Kietz',
    },
    {
        id: '900245612',
        name: 'Zossen, Str. der Jugend',
    },
    {
        id: '900245472',
        name: 'Groß Ziescht, Dorfstr.',
    },
    {
        id: '900245453',
        name: 'Genshagen, Seestr.',
    },
    {
        id: '900245455',
        name: 'Genshagen, Lindenweg',
    },
    {
        id: '900245461',
        name: 'Glienick, Dorfaue',
    },
    {
        id: '900321881',
        name: 'Gieshof-Zelliner Loose, Gaststätte',
    },
    {
        id: '900245460',
        name: 'Glienick, Ausbau',
    },
    {
        id: '900245471',
        name: 'Groß Schulzendorf, Zossener Str.',
    },
    {
        id: '900245469',
        name: 'Groß Schulzendorf, Wietstocker Str.',
    },
    {
        id: '900245051',
        name: 'Genshagen, Ludwigsfelder Str.',
    },
    {
        id: '900245457',
        name: 'Genshagen, Spitzahornweg',
    },
    {
        id: '900245358',
        name: 'Genshagen, Waldsiedlung',
    },
    {
        id: '000008071787',
        name: 'Linda (Elster), Ort',
    },
    {
        id: '900245360',
        name: 'Genshagen, Siedlung',
    },
    {
        id: '900245456',
        name: 'Genshagen, Parkallee',
    },
    {
        id: '900220241',
        name: 'Ziesar, Gartenstr.',
    },
    {
        id: '900220256',
        name: 'Rogäsen, Dorf',
    },
    {
        id: '900220115',
        name: 'Teltow, Mühlenbergstr.',
    },
    {
        id: '900063452',
        name: 'S Südende',
    },
    {
        id: '900245794',
        name: 'Luckenwalde, Neue Baruther Str.',
    },
    {
        id: '900055101',
        name: 'U Viktoria-Luise-Platz',
    },
    {
        id: '900074201',
        name: 'S Lichtenrade',
    },
    {
        id: '900183008',
        name: 'Mausohrweg',
    },
    {
        id: '900150005',
        name: 'Rhinstr./Plauener Str.',
    },
    {
        id: '900072171',
        name: 'S Buckower Chaussee West',
    },
    {
        id: '900023202',
        name: 'U Augsburger Str.',
    },
    {
        id: '900017103',
        name: 'U Gleisdreieck',
    },
    {
        id: '900024203',
        name: 'S Savignyplatz',
    },
    {
        id: '900054101',
        name: 'U Rathaus Schöneberg',
    },
    {
        id: '900051302',
        name: 'U Podbielskiallee',
    },
    {
        id: '900245784',
        name: 'Trebbin, Berliner Tor',
    },
    {
        id: '900220258',
        name: 'Zitz, Abzweig',
    },
    {
        id: '900120515',
        name: 'Straßmannstr.',
    },
    {
        id: '900120513',
        name: 'Klinikum im Friedrichshain',
    },
    {
        id: '900120511',
        name: 'Büschingstr.',
    },
    {
        id: '900120017',
        name: 'Virchowstr.',
    },
    {
        id: '900120016',
        name: 'Landsberger Allee/Petersburger Str.',
    },
    {
        id: '900110523',
        name: 'Paul-Heyse-Str.',
    },
    {
        id: '900110512',
        name: 'Winsstr.',
    },
    {
        id: '900110511',
        name: 'Husemannstr.',
    },
    {
        id: '900140011',
        name: 'Antonplatz',
    },
    {
        id: '900132500',
        name: 'Wiesenwinkel',
    },
    {
        id: '900110510',
        name: 'Fröbelstr.',
    },
    {
        id: '900110508',
        name: 'Marienburger Str.',
    },
    {
        id: '900100019',
        name: 'U Oranienburger Tor',
    },
    {
        id: '900100015',
        name: 'U Klosterstr.',
    },
    {
        id: '900100012',
        name: 'U Hausvogteiplatz',
    },
    {
        id: '900100011',
        name: 'U Stadtmitte',
    },
    {
        id: '900110507',
        name: 'Knaackstr.',
    },
    {
        id: '900110506',
        name: 'Prenzlauer Allee/Metzer Str.',
    },
    {
        id: '900110025',
        name: 'Arnswalder Platz',
    },
    {
        id: '900110020',
        name: 'Greifswalder Str./Danziger Str.',
    },
    {
        id: '900110017',
        name: 'Prenzlauer Allee/Danziger Str.',
    },
    {
        id: '900110011',
        name: 'S Bornholmer Str.',
    },
    {
        id: '900110010',
        name: 'Björnsonstr.',
    },
    {
        id: '900110008',
        name: 'Schönfließer Str.',
    },
    {
        id: '900210326',
        name: 'Brieselang, Bhf',
    },
    {
        id: '900310004',
        name: 'S Erkner',
    },
    {
        id: '900205005',
        name: 'Neuruppin, Rheinsberger Tor',
    },
    {
        id: '900222245',
        name: 'Medewitz, Bhf',
    },
    {
        id: '8011909',
        name: 'Holzdorf, Bhf',
    },
    {
        id: '900320284',
        name: 'Herzfelde (MOL), Rehfelder Weg',
    },
    {
        id: '900310920',
        name: 'Kagel, Am Wasser',
    },
    {
        id: '900415167',
        name: 'Elsterwerda-Biehla, Bhf',
    },
    {
        id: '900275110',
        name: 'Brandenburg, Hbf',
    },
    {
        id: '900210010',
        name: 'Falkensee, Bhf',
    },
    {
        id: '900340056',
        name: 'Warnitz, Bhf',
    },
    {
        id: '900200004',
        name: 'Velten, Bhf',
    },
    {
        id: '770000205158',
        name: 'Fehrbellin, Feuerwehr',
    },
    {
        id: '900415357',
        name: 'Beutersitz, Bhf',
    },
    {
        id: '900230194',
        name: 'Potsdam, Hugstr.',
    },
    {
        id: '8011952',
        name: 'Jeber-Bergfrieden, Bhf',
    },
    {
        id: '900245786',
        name: 'Rangsdorf, Maulbeerstr.',
    },
    {
        id: '900340025',
        name: 'Schönow (UM), Bhf',
    },
    {
        id: '900245007',
        name: 'Altes Lager, Bhf',
    },
    {
        id: '900435884',
        name: 'Vetschau, Bhf',
    },
    {
        id: '900445986',
        name: 'Leuthen, Bhf',
    },
    {
        id: '900310002',
        name: 'Hangelsberg, Bhf',
    },
    {
        id: '900220006',
        name: 'Wilhelmshorst, Bhf',
    },
    {
        id: '900245018',
        name: 'Blönsdorf, Bhf',
    },
    {
        id: '8010302',
        name: 'Roßlau, Bhf',
    },
    {
        id: '6237',
        name: 'Pasewalk, Bhf',
    },
    {
        id: '900350137',
        name: 'Biesenthal, Bhf',
    },
    {
        id: '900220165',
        name: 'Treuenbrietzen, Bhf Süd',
    },
    {
        id: '900311307',
        name: 'Eisenhüttenstadt, Bhf',
    },
    {
        id: '900435000',
        name: 'Senftenberg, Bhf',
    },
    {
        id: '900340061',
        name: 'Casekow, Bhf',
    },
    {
        id: '900435347',
        name: 'Neupetershain, Bhf',
    },
    {
        id: '640000001123',
        name: 'Cottbus, Elisabeth-Wolf-Str.',
    },
    {
        id: '640000004009',
        name: 'Cottbus, Max-Grünebaum-Str.',
    },
    {
        id: '8013418',
        name: 'Zörnigall, Bhf',
    },
    {
        id: '900311232',
        name: 'Brieskow-Finkenheerd, Finkenheerd',
    },
    {
        id: '640000004016',
        name: 'Cottbus, Hermannstr.',
    },
    {
        id: '640000004382',
        name: 'Cottbus, Groß Gaglow Studentenweg',
    },
    {
        id: '640000004383',
        name: 'Cottbus, Am Seegraben',
    },
    {
        id: '8010077',
        name: 'Dessau, Hbf',
    },
    {
        id: '640000004384',
        name: 'Cottbus, Am Seegraben',
    },
    {
        id: '770000205157',
        name: 'Fehrbellin, Promenade',
    },
    {
        id: '900340050',
        name: 'Prenzlau, Bhf',
    },
    {
        id: '900205150',
        name: 'Fehrbellin, Gewerbegebiet',
    },
    {
        id: '900210007',
        name: 'Dallgow-Döberitz, Bhf',
    },
    {
        id: '900415467',
        name: 'Uebigau, Bhf',
    },
    {
        id: '900435800',
        name: 'Bahnsdorf (OSL), Bhf',
    },
    {
        id: '900445956',
        name: 'Kunersdorf (SPN), Bhf',
    },
    {
        id: '900310003',
        name: 'Grünheide, Fangschleuse',
    },
    {
        id: '900445360',
        name: 'Drebkau, Bhf',
    },
    {
        id: '900435001',
        name: 'Sedlitz, Ost',
    },
    {
        id: '8010222',
        name: 'Lutherstadt Wittenberg, Hbf',
    },
    {
        id: '900005252',
        name: 'U Mendelssohn-Bartholdy-Park',
    },
    {
        id: '900011252',
        name: 'Osram-Höfe',
    },
    {
        id: '900007160',
        name: 'Grüntaler Str.',
    },
    {
        id: '770000105158',
        name: 'Fehrbellin, Feuerwehr',
    },
    {
        id: '900341311',
        name: 'Zuchenberg',
    },
    {
        id: '900245017',
        name: 'Niedergörsdorf, Bhf',
    },
    {
        id: '8011290',
        name: 'Bülzig, Bhf',
    },
    {
        id: '900245010',
        name: 'Trebbin, Bhf',
    },
    {
        id: '900215350',
        name: 'Groß Pankow, Bhf',
    },
    {
        id: '8013371',
        name: 'Zahna, Bhf',
    },
    {
        id: '250000059001',
        name: 'Brandenburg, Am Piperfenn',
    },
    {
        id: '770000105157',
        name: 'Fehrbellin, Promenade',
    },
    {
        id: '839',
        name: 'Miltzow, Bhf',
    },
    {
        id: '900341270',
        name: 'Wilmersdorf (bei Angermünde), Bhf',
    },
    {
        id: '900220028',
        name: 'Stahnsdorf, Green Park',
    },
    {
        id: '900245014',
        name: 'Woltersdorf (Nuthe-Urstromtal), Bhf',
    },
    {
        id: '900215696',
        name: 'Perleberg, Bhf',
    },
    {
        id: '2305',
        name: 'Wüstenfelde, Bhf',
    },
    {
        id: '270000042003',
        name: 'Potsdam, Dorfstr./Königsweg',
    },
    {
        id: '270000042004',
        name: 'Potsdam, Dorfstr./Königsweg',
    },
    {
        id: '900435206',
        name: 'Lauchhammer West, Hammergraben',
    },
    {
        id: '900140518',
        name: 'Sulzfelder Str.',
    },
    {
        id: '000005100159',
        name: 'Zasieki (PL)',
    },
    {
        id: '900220278',
        name: 'Briest (PM), Mühlenweg',
    },
    {
        id: '900435697',
        name: 'Raddusch, Bhf',
    },
    {
        id: '000005102094',
        name: 'Lipinki Luzyckie (PL)',
    },
    {
        id: '000005100243',
        name: 'Zary (PL)',
    },
    {
        id: '000005100211',
        name: 'Zagan (PL), Bhf',
    },
    {
        id: '000005103854',
        name: 'Tuplice Debinka (PL)',
    },
    {
        id: '000005100069',
        name: 'Wroclaw (PL), Glowny',
    },
    {
        id: '900210433',
        name: 'Paulinenaue, Prof.-Mitscherlich-Allee',
    },
    {
        id: '000005103420',
        name: 'Sieniawa Zarska (PL)',
    },
    {
        id: '900470201',
        name: 'Cottbus, Madlow',
    },
    {
        id: '900360151',
        name: 'Frankfurt (Oder), Zentrum',
    },
    {
        id: '900360123',
        name: 'Frankfurt (Oder), Magistrale',
    },
    {
        id: '900360107',
        name: 'Frankfurt (Oder), Oderturm',
    },
    {
        id: '900360101',
        name: 'Frankfurt (Oder), Mühlenweg',
    },
    {
        id: '900220279',
        name: 'Kaltenhausen',
    },
    {
        id: '900222248',
        name: 'Fohrde, Landstr.',
    },
    {
        id: '900275720',
        name: 'Brandenburg, Gördenschule',
    },
    {
        id: '900275303',
        name: 'Brandenburg, Rosa-Luxemburg-Allee',
    },
    {
        id: '900220276',
        name: 'Krahnepuhl (bei Brandenburg)',
    },
    {
        id: '900220277',
        name: 'Briest (PM), Dorf',
    },
    {
        id: '900222249',
        name: 'Radewege, Nord',
    },
    {
        id: '900220205',
        name: 'Götz, Kindergarten',
    },
    {
        id: '900220197',
        name: 'Wust, Festplatz',
    },
    {
        id: '900220198',
        name: 'Wust, Ortsmitte',
    },
    {
        id: '900220368',
        name: 'Wust, An der B1',
    },
    {
        id: '900220040',
        name: 'Pritzerbe, Schule',
    },
    {
        id: '500000028402',
        name: 'Collinshof',
    },
    {
        id: '900416125',
        name: 'Schmerkendorf, Brunnen',
    },
    {
        id: '900275113',
        name: 'Brandenburg, Geschwister-Scholl-Str.',
    },
    {
        id: '900260081',
        name: 'Königs Wusterhausen, Rathaus',
    },
    {
        id: '900220383',
        name: 'Kleinmachnow, Albert-Einstein-Ring Nord',
    },
    {
        id: '900230206',
        name: 'Potsdam, Campus Fachhochschule',
    },
    {
        id: '900230097',
        name: 'Potsdam, Lange Brücke',
    },
    {
        id: '900230077',
        name: 'Potsdam, Humboldtring/Nuthestr.',
    },
    {
        id: '900230071',
        name: 'Potsdam, Burgstr./Klinikum',
    },
    {
        id: '900230029',
        name: 'Potsdam, Fontanestr.',
    },
    {
        id: '900230014',
        name: 'Potsdam, Platz der Einheit/West',
    },
    {
        id: '900275153',
        name: 'Brandenburg, Hessenweg',
    },
    {
        id: '900415228',
        name: 'Friedersdorf (bei Oppelhain), Kirche',
    },
    {
        id: '900275123',
        name: 'Brandenburg, Altstadt',
    },
    {
        id: '900415354',
        name: 'Falkenberg/E., Südstr.',
    },
    {
        id: '820093202511',
        name: 'Rüdersdorf, Berghofer Weg',
    },
    {
        id: '820093202512',
        name: 'Rüdersdorf, Berghofer Weg',
    },
    {
        id: '900350161',
        name: 'S Bernau-Friedenstal',
    },
    {
        id: '900275325',
        name: 'Brandenburg, Görden',
    },
    {
        id: '900275324',
        name: 'Brandenburg, Geranienweg',
    },
    {
        id: '900275323',
        name: 'Brandenburg, Gördenallee',
    },
    {
        id: '900275322',
        name: 'Brandenburg, Rotdornweg',
    },
    {
        id: '900275302',
        name: 'Brandenburg, Willibald-Alexis-Str.',
    },
    {
        id: '900275126',
        name: 'Brandenburg, August-Bebel-Str.',
    },
    {
        id: '900220275',
        name: 'Tieckow, Dorf',
    },
    {
        id: '900220250',
        name: 'Wusterwitz, Ernst-Thälmann-Str.',
    },
    {
        id: '900220252',
        name: 'Wusterwitz, Friedhof',
    },
    {
        id: '900222079',
        name: 'Görzke, Breite Str.',
    },
    {
        id: '900220260',
        name: 'Bücknitz, Chausseestr.',
    },
    {
        id: '900220257',
        name: 'Rogäsen, Abzw. n. Viesen',
    },
    {
        id: '900220255',
        name: 'Wusterwitz, Mahlenziener Str.',
    },
    {
        id: '900220251',
        name: 'Wusterwitz, Abzw. n. Warchau',
    },
    {
        id: '900275223',
        name: 'Brandenburg, Falkenbergswerder',
    },
    {
        id: '900275225',
        name: 'Brandenburg, Südtor',
    },
    {
        id: '900210601',
        name: 'Wustermark, Dyrotzer Weg',
    },
    {
        id: '900220259',
        name: 'Zitz, Dorf',
    },
    {
        id: '900220268',
        name: 'Görzke, Weinbergstr.',
    },
    {
        id: '900220267',
        name: 'Rottstock',
    },
    {
        id: '900275826',
        name: 'Saaringen, Dorf',
    },
    {
        id: '900210562',
        name: 'Gutenpaaren',
    },
    {
        id: '900210560',
        name: 'Zachow, Dorfplatz',
    },
    {
        id: '900220329',
        name: 'Roskow, Siedlung',
    },
    {
        id: '900220269',
        name: 'Neubensdorf',
    },
    {
        id: '900220204',
        name: 'Götz, Bhf',
    },
    {
        id: '900275804',
        name: 'Brandenburg, Brielower Landstr.',
    },
    {
        id: '900220200',
        name: 'Gollwitz (bei Jeserig)',
    },
    {
        id: '900275423',
        name: 'Brandenburg, Beetzsee Center Landstr.',
    },
    {
        id: '900220203',
        name: 'Jeserig (bei Götz), Dorf',
    },
    {
        id: '900220206',
        name: 'Götz, Ortsmitte',
    },
    {
        id: '900220207',
        name: 'Götz, Waldweg',
    },
    {
        id: '900275426',
        name: 'Brandenburg, Freiheitsweg',
    },
    {
        id: '900220271',
        name: 'Altbensdorf',
    },
    {
        id: '900220245',
        name: 'Woltersdorf, Abzweig',
    },
    {
        id: '900220264',
        name: 'Wittstock (PM), Abzweig',
    },
    {
        id: '900220263',
        name: 'Dretzen, Dorf',
    },
    {
        id: '900220283',
        name: 'Marzahne',
    },
    {
        id: '900230004',
        name: 'S Babelsberg/Wattstr.',
    },
    {
        id: '900141001',
        name: 'Heinersdorf',
    },
    {
        id: '900170006',
        name: 'Ahrensfelde/Stadtgrenze',
    },
    {
        id: '900162504',
        name: 'Blockdammweg',
    },
    {
        id: '900161508',
        name: 'Criegernweg',
    },
    {
        id: '900170506',
        name: 'Niemegker Str.',
    },
    {
        id: '900170515',
        name: 'Adersleber Weg',
    },
    {
        id: '900170516',
        name: 'Alt-Marzahn',
    },
    {
        id: '900171540',
        name: 'Kleingartenanlage Bielefeldt',
    },
    {
        id: '900171514',
        name: 'Meeraner Str.',
    },
    {
        id: '900171011',
        name: 'Landsberger Allee/Rhinstr.',
    },
    {
        id: '900171008',
        name: 'Allee der Kosmonauten/Rhinstr.',
    },
    {
        id: '900170531',
        name: 'Wuhletalstr.',
    },
    {
        id: '900170530',
        name: 'Max-Herrmann-Str.',
    },
    {
        id: '900170529',
        name: 'Bürgerpark Marzahn',
    },
    {
        id: '900170521',
        name: 'Gewerbepark Georg Knorr',
    },
    {
        id: '900170520',
        name: 'Dingelstädter Str.',
    },
    {
        id: '900170519',
        name: 'Freizeitforum Marzahn',
    },
    {
        id: '900160520',
        name: 'Ev. Krankenhaus KEH',
    },
    {
        id: '900160516',
        name: 'Schalkauer Str.',
    },
    {
        id: '900160515',
        name: 'Arendsweg',
    },
    {
        id: '900150515',
        name: 'Orankestrand',
    },
    {
        id: '900150514',
        name: 'Am Faulen See',
    },
    {
        id: '900150509',
        name: 'Altenhofer Str.',
    },
    {
        id: '900150500',
        name: 'Anna-Ebermann-Str.',
    },
    {
        id: '900150011',
        name: 'Hohenschönhauser Str. [1-2]',
    },
    {
        id: '900150010',
        name: 'Degnerstr./Suermondtstr.',
    },
    {
        id: '900160514',
        name: 'Genslerstr.',
    },
    {
        id: '900160513',
        name: 'Zechliner Str.',
    },
    {
        id: '900160002',
        name: 'S Betriebsbahnhof Rummelsburg',
    },
    {
        id: '900152509',
        name: 'Arnimstr.',
    },
    {
        id: '900152508',
        name: 'Rüdickenstr.',
    },
    {
        id: '900175005',
        name: 'U Kienberg (Gärten der Welt)',
    },
    {
        id: '900186504',
        name: 'Regattatribünen',
    },
    {
        id: '900186503',
        name: 'Regattastr./Sportpromenade',
    },
    {
        id: '900186502',
        name: 'Strandbad Grünau',
    },
    {
        id: '900186501',
        name: 'Richtershorn',
    },
    {
        id: '900311229',
        name: 'Bremsdorf, Lindenstr.',
    },
    {
        id: '900183002',
        name: 'S Wilhelmshagen',
    },
    {
        id: '900182513',
        name: 'Fürstenwalder Damm/Müggelseedamm',
    },
    {
        id: '900182512',
        name: 'Fürstenwalder Damm',
    },
    {
        id: '900182511',
        name: 'Wasserwerk Friedrichshagen',
    },
    {
        id: '900192002',
        name: 'S Oberspree',
    },
    {
        id: '900182509',
        name: 'Spreestr.',
    },
    {
        id: '900310728',
        name: 'Beeskow, Schulstr.',
    },
    {
        id: '900210003',
        name: 'Wustermark, Bhf',
    },
    {
        id: '900210359',
        name: 'Falkensee, Bandelowstr.',
    },
    {
        id: '900260866',
        name: 'Mittenwalde (LDS), Gesundheitszentrum',
    },
    {
        id: '790002153741',
        name: 'Groß Werzin, Rambower Chaussee',
    },
    {
        id: '790002153742',
        name: 'Groß Werzin, Rambower Chaussee',
    },
    {
        id: '790002156281',
        name: 'Mansfeld, Ausbau',
    },
    {
        id: '900182510',
        name: 'Hartlebenstr.',
    },
    {
        id: '900182508',
        name: 'Wassersportzentrum',
    },
    {
        id: '900180008',
        name: 'Bahnhofstr./Lindenstr.',
    },
    {
        id: '900310703',
        name: 'Alt Golm (LOS)',
    },
    {
        id: '900181513',
        name: 'Alte Försterei',
    },
    {
        id: '900180510',
        name: 'Ottomar-Geschke-Str.',
    },
    {
        id: '3_G',
        name: 'Hoyerswerda, Bhf',
    },
    {
        id: '900245667',
        name: 'Görsdorf (TF), Siedlung',
    },
    {
        id: '900245710',
        name: 'Prensdorf, Abzweig',
    },
    {
        id: '900245770',
        name: 'Zagelsdorf',
    },
    {
        id: '900222109',
        name: 'Krahne, Hauptstr.',
    },
    {
        id: '900222173',
        name: 'Rietz (bei Treuenbrietzen), Rietzer Bucht',
    },
    {
        id: '900222170',
        name: 'Rietz (bei Treuenbrietzen), Dreieck',
    },
    {
        id: '900222096',
        name: 'Haseloff',
    },
    {
        id: '900222146',
        name: 'Niemegk, Gewerbegebiet',
    },
    {
        id: '900222145',
        name: 'Niemegk, Bahnhofstr.',
    },
    {
        id: '900222144',
        name: 'Niemegk, Autobahn',
    },
    {
        id: '900222158',
        name: 'Preußnitz, B 102',
    },
    {
        id: '900222110',
        name: 'Krahne, Reckahner Str.',
    },
    {
        id: '900222060',
        name: 'Dietersdorf',
    },
    {
        id: '900222164',
        name: 'Reckahn, Dorf',
    },
    {
        id: '900275626',
        name: 'Göttin (Brandenburg)',
    },
    {
        id: '900222172',
        name: 'Rietz (bei Treuenbrietzen), Neubau',
    },
    {
        id: '900222136',
        name: 'Neschholz, Ausbau',
    },
    {
        id: '900222137',
        name: 'Neschholz, Ortsmitte',
    },
    {
        id: '900222159',
        name: 'Preußnitz, Neubau',
    },
    {
        id: '900222000',
        name: 'Baitz, Dorf',
    },
    {
        id: '900222111',
        name: 'Kranepuhl (bei Bad Belzig)',
    },
    {
        id: '900222139',
        name: 'Neuendorf (bei Niemegk)',
    },
    {
        id: '900222215',
        name: 'Zixdorf',
    },
    {
        id: '900194540',
        name: 'Segelfliegerdamm/Trützschlerstr',
    },
    {
        id: '900224564',
        name: 'Niemegk, Schule',
    },
    {
        id: '900220143',
        name: 'Bad Belzig, Bhf',
    },
    {
        id: '900222013',
        name: 'Bad Belzig, Krankenhaus',
    },
    {
        id: '900340631',
        name: 'Taschenberg, Neubau',
    },
    {
        id: '900222132',
        name: 'Michelsdorf, Ortsmitte',
    },
    {
        id: '900222056',
        name: 'Damsdorf (PM), Lehniner Str.',
    },
    {
        id: '900222057',
        name: 'Damsdorf (PM), Neubau',
    },
    {
        id: '900222074',
        name: 'Göhlsdorf, Ortsmitte',
    },
    {
        id: '900222073',
        name: 'Göhlsdorf, Autobahn',
    },
    {
        id: '900222085',
        name: 'Golzow (PM), Lehniner Str.',
    },
    {
        id: '900222084',
        name: 'Golzow (PM), Anger',
    },
    {
        id: '900220168',
        name: 'Golzow (PM), Belziger Str.',
    },
    {
        id: '900222086',
        name: 'Golzow (PM), Müggenburg',
    },
    {
        id: '900222162',
        name: 'Ragösen, Ambulatorium',
    },
    {
        id: '900222163',
        name: 'Ragösen, Feuerwehr',
    },
    {
        id: '900222063',
        name: 'Dippmannsdorf, Schule',
    },
    {
        id: '900220196',
        name: 'Lehnin, Belziger Chaussee',
    },
    {
        id: '900222131',
        name: 'Michelsdorf, Ausbau',
    },
    {
        id: '900222012',
        name: 'Bad Belzig, Klinkengrund',
    },
    {
        id: '900222151',
        name: 'Oberjünne, Forsthaus',
    },
    {
        id: '900222067',
        name: 'Fredersdorf (PM), Dorf',
    },
    {
        id: '900222022',
        name: 'Bad Belzig, Brücker Landstr.',
    },
    {
        id: '900203514',
        name: 'Hohenbruch, Dorfstr. 22',
    },
    {
        id: '900222005',
        name: 'Bad Belzig, Brandenburger Str./SteinTherme',
    },
    {
        id: '900222183',
        name: 'Schwanebeck (PM)',
    },
    {
        id: '900222126',
        name: 'Lütte, Dorf',
    },
    {
        id: '900222062',
        name: 'Dippmannsdorf, Ortsmitte',
    },
    {
        id: '900222127',
        name: 'Marzahna, B2',
    },
    {
        id: '900245648',
        name: 'Dahme, K.-Liebknecht-Allee',
    },
    {
        id: '900222130',
        name: 'Medewitzerhütten',
    },
    {
        id: '900222024',
        name: 'Bad Belzig, ZEGG',
    },
    {
        id: '900222019',
        name: 'Bad Belzig, Reha-Klinik',
    },
    {
        id: '900222021',
        name: 'Bad Belzig, Rosa-Luxemburg-Str.',
    },
    {
        id: '900222016',
        name: 'Bad Belzig, Martin-Luther-Str.',
    },
    {
        id: '900222018',
        name: 'Bad Belzig, Puschkinstr.',
    },
    {
        id: '900222007',
        name: 'Bad Belzig, Feierabendheim',
    },
    {
        id: '53',
        name: 'Wiesenburg, Bhf',
    },
    {
        id: '900222179',
        name: 'Schmerwitz, Ortsmitte',
    },
    {
        id: '900222138',
        name: 'Neuehütten',
    },
    {
        id: '900222029',
        name: 'Börnecke, B107',
    },
    {
        id: '900222080',
        name: 'Görzke, Chausseestr.',
    },
    {
        id: '900222002',
        name: 'Bad Belzig, SteinTherme/Am Kurpark',
    },
    {
        id: '900222017',
        name: 'Bad Belzig, Niemegker Str.',
    },
    {
        id: '900222263',
        name: 'Bad Belzig, Reha-Klinik Haupteingang',
    },
    {
        id: '900222027',
        name: 'Benken, Ortsmitte',
    },
    {
        id: '900222212',
        name: 'Wutzow',
    },
    {
        id: '900222058',
        name: 'Dangelsdorf',
    },
    {
        id: '900222026',
        name: 'Benken, Kinderheim',
    },
    {
        id: '900222097',
        name: 'Hohenlobbese',
    },
    {
        id: '900220382',
        name: 'Kleinmachnow, Hermann-von-Helmholtz-Str.',
    },
    {
        id: '900220229',
        name: 'Dahlen, ASB',
    },
    {
        id: '900222098',
        name: 'Hohenspringe',
    },
    {
        id: '900222065',
        name: 'Egelinde',
    },
    {
        id: '900222200',
        name: 'Verlorenwasser, Gewerbegebiet',
    },
    {
        id: '900222204',
        name: 'Werbig (PM), Ortsmitte',
    },
    {
        id: '900222010',
        name: 'Bad Belzig, Gliener Str.',
    },
    {
        id: '900222095',
        name: 'Hagelberg, Ortsmitte',
    },
    {
        id: '900222120',
        name: 'Lübnitz, Ausbau',
    },
    {
        id: '900222020',
        name: 'Bad Belzig, Röderhof',
    },
    {
        id: '900222009',
        name: 'Bad Belzig, Forst',
    },
    {
        id: '900222119',
        name: 'Locktow',
    },
    {
        id: '900222134',
        name: 'Mörz',
    },
    {
        id: '900222214',
        name: 'Ziezow',
    },
    {
        id: '900222213',
        name: 'Zeuden',
    },
    {
        id: '900194541',
        name: 'Walther-Huth-Str.',
    },
    {
        id: '900222128',
        name: 'Marzahna, Schule',
    },
    {
        id: '900222155',
        name: 'Pflügkuff',
    },
    {
        id: '900222121',
        name: 'Lübnitz, Ortsmitte',
    },
    {
        id: '900222207',
        name: 'Wiesenburg, Gewerbegebiet',
    },
    {
        id: '900222206',
        name: 'Wiesenburg, Ortsmitte',
    },
    {
        id: '900222168',
        name: 'Reppinichen',
    },
    {
        id: '900222014',
        name: 'Bad Belzig, Lübnitzer Str.',
    },
    {
        id: '900245207',
        name: 'Luckenwalde, Schwalbenweg',
    },
    {
        id: '900245045',
        name: 'Luckenwalde, Schützenstr.',
    },
    {
        id: '900245707',
        name: 'Luckenwalde, Gymnasium',
    },
    {
        id: '900245042',
        name: 'Waltersdorf (TF), Dorf',
    },
    {
        id: '900245335',
        name: 'Weißen (Lichterfelde), Abzweig',
    },
    {
        id: '900245596',
        name: 'Waldstadt, Wünsdorfer Platz',
    },
    {
        id: '900245625',
        name: 'Waldstadt, F.-Raue Str.',
    },
    {
        id: '900245120',
        name: 'Schwebendorf, Dorfstr.',
    },
    {
        id: '900245116',
        name: 'Niendorf, Dorf',
    },
    {
        id: '900245286',
        name: 'Glau, Am Glauer Hof',
    },
    {
        id: '900245015',
        name: 'Kummersdorf Gut, Försterwiese',
    },
    {
        id: '900245308',
        name: 'Kolzenburg, Neuhofer Weg',
    },
    {
        id: '900245586',
        name: 'Sperenberg, Klausdorfer Chaussee',
    },
    {
        id: '900245012',
        name: 'Sperenberg, Zossener Allee',
    },
    {
        id: '900245510',
        name: 'Kummersdorf (TF), Rehagener Str.',
    },
    {
        id: '900261143',
        name: 'Zeuthen, Max-Liebermann-Str.',
    },
    {
        id: '900245518',
        name: 'Ludwigsfelde, Am Birkengrund',
    },
    {
        id: '900245247',
        name: 'Kurzlipsdorf, Teich',
    },
    {
        id: '900245238',
        name: 'Blönsdorf, Schule',
    },
    {
        id: '900245242',
        name: 'Dennewitz, Dorfstr.',
    },
    {
        id: '900245175',
        name: 'Ihlow (TF), Dorfstr.',
    },
    {
        id: '900245170',
        name: 'Herbersdorf (TF), Dorfstr.',
    },
    {
        id: '900445118',
        name: 'Döbern, Schulzentrum',
    },
    {
        id: '900245184',
        name: 'Rinow, Dorfstr.',
    },
    {
        id: '900245167',
        name: 'Bärwalde',
    },
    {
        id: '900245177',
        name: 'Kossin, Dorfstr.',
    },
    {
        id: '900245182',
        name: 'Reinsdorf, Siedlung',
    },
    {
        id: '900245181',
        name: 'Reinsdorf, Dorfstr.',
    },
    {
        id: '900245235',
        name: 'Mietgendorf, Mietgendorfer Ring',
    },
    {
        id: '900245108',
        name: 'Gebersdorf, Dorfstr.',
    },
    {
        id: '900245107',
        name: 'Gebersdorf, Neuer Weg',
    },
    {
        id: '900245106',
        name: 'Buckow (TF), Dorfstr.',
    },
    {
        id: '900245315',
        name: 'Niedergörsdorf, Dorf',
    },
    {
        id: '900245257',
        name: 'Seehausen (TF), Bahnhofstr.',
    },
    {
        id: '900245334',
        name: 'Seehausen (TF), Neue Str.',
    },
    {
        id: '900245245',
        name: 'Gölsdorf (TF), Dorfstr.',
    },
    {
        id: '900245249',
        name: 'Lindow (TF), Dorfstr.',
    },
    {
        id: '900245251',
        name: 'Malterhausen, Siedlung',
    },
    {
        id: '900245259',
        name: 'Wölmsdorf, Wölmsdorfer Weg',
    },
    {
        id: '900245575',
        name: 'Rehagen, Dorf',
    },
    {
        id: '900415033',
        name: 'Crinitz, Gasthaus',
    },
    {
        id: '900261920',
        name: 'Staakow (bei Golßen), Ausbau',
    },
    {
        id: '900260212',
        name: 'Waßmannsdorf, Rudower Str.',
    },
    {
        id: '000005100035',
        name: 'Legnica (PL)',
    },
    {
        id: '900203688',
        name: 'Vehlefanz, Am Anger',
    },
    {
        id: '900245595',
        name: 'Thyrow, Talstr.',
    },
    {
        id: '900245504',
        name: 'Kleinbeuthen, Dorf',
    },
    {
        id: '900245448',
        name: 'Eichenhof',
    },
    {
        id: '900245449',
        name: 'Fernneuendorf, Dorfplatz',
    },
    {
        id: '900245587',
        name: 'Sperenberg, Schule',
    },
    {
        id: '900261431',
        name: 'Langengrassau, Höllberghof',
    },
    {
        id: '900261176',
        name: 'Golßen, Stadtwall',
    },
    {
        id: '900222006',
        name: 'Bad Belzig, Erich-Weinert-Str.',
    },
    {
        id: '900220274',
        name: 'Fohrde, Dorf',
    },
    {
        id: '900275510',
        name: 'Brandenburg, Berliner Str.',
    },
    {
        id: '900220285',
        name: 'Hohenferchesar, Dorf',
    },
    {
        id: '900220234',
        name: 'Boecke, Dorf',
    },
    {
        id: '900220272',
        name: 'Vehlen',
    },
    {
        id: '900220295',
        name: 'Gortz, Hst. Schulverkehr',
    },
    {
        id: '900220290',
        name: 'Ketzür, Dorf',
    },
    {
        id: '900261576',
        name: 'Luckau, Berliner Str.',
    },
    {
        id: '900245239',
        name: 'Bochow (TF), Dorfstr.',
    },
    {
        id: '900260850',
        name: 'Mittenwalde (LDS), An der Feuerwehr',
    },
    {
        id: '900261987',
        name: 'Waldow (bei Brand), Abzweig',
    },
    {
        id: '900261976',
        name: 'Walddrehna, Hauptstr.',
    },
    {
        id: '900260328',
        name: 'Bornsdorf, B 96',
    },
    {
        id: '900261464',
        name: 'Lieberose, Schule',
    },
    {
        id: '900245761',
        name: 'Wildau-Wentdorf, Haidemühle',
    },
    {
        id: '900260422',
        name: 'Duben, Bahnhofstr.',
    },
    {
        id: '900260992',
        name: 'Tornow (LDS), Friedhof',
    },
    {
        id: '900260949',
        name: 'Schwerin (LDS), Feuerwehr',
    },
    {
        id: '900261871',
        name: 'Schönwalde (Spreewald), Bhf',
    },
    {
        id: '900260727',
        name: 'Gussow',
    },
    {
        id: '900261144',
        name: 'Zeuthen, Otto-Nagel-Allee',
    },
    {
        id: '900261708',
        name: 'Prierow, Ort',
    },
    {
        id: '900260624',
        name: 'Bindow, Grüne Trift',
    },
    {
        id: '900245219',
        name: 'Luckenwalde, Neu Frankenfelde',
    },
    {
        id: '900245631',
        name: 'Schöneiche (bei Zossen), Kallinchener Str.',
    },
    {
        id: '900245630',
        name: 'Schöneiche (bei Zossen), Zossener Str.',
    },
    {
        id: '900261098',
        name: 'Löpten, Siedlung',
    },
    {
        id: '900260592',
        name: 'Pätz, Am Strand',
    },
    {
        id: '900260609',
        name: 'Pätz, Kreisverkehr',
    },
    {
        id: '900222209',
        name: 'Wollin (PM), Abzweig Friesdorf',
    },
    {
        id: '900220230',
        name: 'Gräben',
    },
    {
        id: '900261442',
        name: 'Leibchel, Ausbau',
    },
    {
        id: '900245343',
        name: 'Großbeeren, Märkische Allee Wendestelle',
    },
    {
        id: '900275109',
        name: 'Brandenburg, Jacobstr.',
    },
    {
        id: '900245355',
        name: 'Luckenwalde, Frankenhof',
    },
    {
        id: '900245319',
        name: 'Schönhagen (TF), Ausbau',
    },
    {
        id: '900260573',
        name: 'Königs Wusterhausen, Schloß',
    },
    {
        id: '900260946',
        name: 'Schulzendorf (LDS), R.-Breitscheid-Str.',
    },
    {
        id: '900260071',
        name: 'Schulzendorf (LDS), K.-Liebknecht-Str.',
    },
    {
        id: '900261120',
        name: 'Zeuthen, Waldpromenade',
    },
    {
        id: '900261115',
        name: 'Zeuthen, Große Zeuthener Allee',
    },
    {
        id: '900261070',
        name: 'Wildau, Birkenallee',
    },
    {
        id: '900261073',
        name: 'Wildau, Hahnenbalz',
    },
    {
        id: '900261074',
        name: 'Wildau, Im Röthegrund',
    },
    {
        id: '900261068',
        name: 'Wildau, Maiglöckchenweg',
    },
    {
        id: '900260034',
        name: 'Miersdorf, Hoherlehmer Str.',
    },
    {
        id: '900261077',
        name: 'Wildau, Fr.-Engels-Str.',
    },
    {
        id: '900261071',
        name: 'Wildau, Volkshaus',
    },
    {
        id: '900261013',
        name: 'Wildau, Dorfaue',
    },
    {
        id: '900245295',
        name: 'Luckenwalde, L.-Jahn-Str.',
    },
    {
        id: '000313636002',
        name: 'Prenzlau, Stadion',
    },
    {
        id: '900275611',
        name: 'Brandenburg, Schmöllner Weg',
    },
    {
        id: '900275607',
        name: 'Brandenburg, Forsthaus',
    },
    {
        id: '900275401',
        name: 'Brandenburg, Ruppinstr.',
    },
    {
        id: '000313636001',
        name: 'Prenzlau, Stadion',
    },
    {
        id: '900445255',
        name: 'Burg, Am Hafen',
    },
    {
        id: '900245499',
        name: 'Klausdorf (TF), Dorfaue',
    },
    {
        id: '900245541',
        name: 'Lynow, Baruther Landstr.',
    },
    {
        id: '900245180',
        name: 'Reinsdorf, Abzweig',
    },
    {
        id: '900245100',
        name: 'Charlottenfelde, Dorfstr.',
    },
    {
        id: '900220261',
        name: 'Köpernitz (PM), Dorf',
    },
    {
        id: '900260465',
        name: 'Frankendorf (LDS), Alter Bahnhof',
    },
    {
        id: '900260284',
        name: 'Beesdau, Alter Bahnhof',
    },
    {
        id: '000313634001',
        name: 'Prenzlau, Campingplatz',
    },
    {
        id: '900200046',
        name: 'Hohen Neuendorf, Karl-Marx-Str.',
    },
    {
        id: '900261104',
        name: 'Byhleguhre, Dorfstr.',
    },
    {
        id: '900245195',
        name: 'Luckenwalde, Trebbiner Tor',
    },
    {
        id: '900203479',
        name: 'Sommerfeld, Kremmener Str.',
    },
    {
        id: '900203455',
        name: 'Kremmen, Am Kanal',
    },
    {
        id: '900203456',
        name: 'Kremmen, Sportplatz',
    },
    {
        id: '900220184',
        name: 'Pritzerbe, Bhf',
    },
    {
        id: '900220254',
        name: 'Gollwitz (bei Wusterwitz)',
    },
    {
        id: '900245696',
        name: 'Liebsdorf, Ort',
    },
    {
        id: '900260652',
        name: 'Dolgenbrodt, Siedlung',
    },
    {
        id: '900261463',
        name: 'Lieberose, Peitzer Str.',
    },
    {
        id: '900261459',
        name: 'Lieberose, Frankfurter Str.',
    },
    {
        id: '900470342',
        name: 'Cottbus, Kornblumenweg',
    },
    {
        id: '900261504',
        name: 'Lübben, Burglehnstr.',
    },
    {
        id: '900220073',
        name: 'Teltow, Ruhlsdorfer Platz',
    },
    {
        id: '900220116',
        name: 'Teltow, Ruhlsdorf',
    },
    {
        id: '900245281',
        name: 'Zülichendorf, Kemnitzer Landstr.',
    },
    {
        id: '900245266',
        name: 'Felgentreu, Felgentreuer Dorfstr.',
    },
    {
        id: '900245274',
        name: 'Nettgendorf',
    },
    {
        id: '900470343',
        name: 'Cottbus, Amselweg',
    },
    {
        id: '900261511',
        name: 'Lübben, Hartmannsdorfer Str.',
    },
    {
        id: '900261502',
        name: 'Lübben, Berliner Str.',
    },
    {
        id: '900260934',
        name: 'Schulzendorf (LDS), A.-Bebel-Str.',
    },
    {
        id: '900260967',
        name: 'Schulzendorf (LDS), Lindenstr.',
    },
    {
        id: '900260971',
        name: 'Schulzendorf (LDS), Waldstr.',
    },
    {
        id: '900275330',
        name: 'Brandenburg, Görden, Einkaufszentrum',
    },
    {
        id: '900260003',
        name: 'S Zeuthen',
    },
    {
        id: '900245028',
        name: 'S Mahlow',
    },
    {
        id: '900261132',
        name: 'Garrenchen, Ort',
    },
    {
        id: '900260379',
        name: 'Cahnsdorf, Kirche',
    },
    {
        id: '900261498',
        name: 'Lübben, Bahnhofstr.',
    },
    {
        id: '900261508',
        name: 'Lübben, Frankfurter Str.',
    },
    {
        id: '900261519',
        name: 'Lübben, Briesener Zergoweg',
    },
    {
        id: '900261518',
        name: 'Lübben, Bussardweg',
    },
    {
        id: '900261528',
        name: 'Lübben, Reha-Zentrum',
    },
    {
        id: '900261525',
        name: 'Lübben, Postbautenstr.',
    },
    {
        id: '900262059',
        name: 'Wüstermarke',
    },
    {
        id: '900245350',
        name: 'Großbeeren, Zum Kiesberg',
    },
    {
        id: '900245348',
        name: 'Großbeeren, Märkische Allee Nord',
    },
    {
        id: '900275404',
        name: 'Brandenburg, Ziegelstr.',
    },
    {
        id: '900275143',
        name: 'Brandenburg, Wilhelmsdorfer Str.',
    },
    {
        id: '140094190401',
        name: 'Gröditz, Am Castello',
    },
    {
        id: '900275105',
        name: 'Brandenburg, Ritterstr./Museum',
    },
    {
        id: '900275106',
        name: 'Brandenburg, Hauptstr.',
    },
    {
        id: '900275326',
        name: 'Brandenburg, Waldcafé Görden',
    },
    {
        id: '900275601',
        name: 'Brandenburg, Göttiner Str.',
    },
    {
        id: '140094190402',
        name: 'Gröditz, Am Castello',
    },
    {
        id: '140094190411',
        name: 'Gröditz, Schulstr.',
    },
    {
        id: '140094190422',
        name: 'Gröditz, Rathausstr.',
    },
    {
        id: '900275705',
        name: 'Brandenburg, Kirchmöser West',
    },
    {
        id: '140094190391',
        name: 'Gröditz, E.-Maurer-Str.',
    },
    {
        id: '140094190382',
        name: 'Gröditz, Fröbelstr.',
    },
    {
        id: '140094190371',
        name: 'Gröditz, Feldstr.',
    },
    {
        id: '900275244',
        name: 'Brandenburg, Haveltor',
    },
    {
        id: '140094190361',
        name: 'Gröditz, Am Kanal',
    },
    {
        id: '900275142',
        name: 'Brandenburg, Ferdinand-Lassalle-Str.',
    },
    {
        id: '900275141',
        name: 'Brandenburg, Clara-Zetkin-Str.',
    },
    {
        id: '900275102',
        name: 'Brandenburg, Neuendorfer Str.',
    },
    {
        id: '900275104',
        name: 'Brandenburg, Plauer Str.',
    },
    {
        id: '900275130',
        name: 'Brandenburg, Parduin',
    },
    {
        id: '900275111',
        name: 'Brandenburg, Blumenstr.',
    },
    {
        id: '900275108',
        name: 'Brandenburg, Steinstr.',
    },
    {
        id: '900275304',
        name: 'Brandenburg, Tschirchdamm',
    },
    {
        id: '900275305',
        name: 'Brandenburg, Hohenstücken Nord',
    },
    {
        id: '900275333',
        name: 'Brandenburg, Anton-Saefkow-Allee',
    },
    {
        id: '900275332',
        name: 'Brandenburg, Kaltenhausener Weg',
    },
    {
        id: '900275331',
        name: 'Brandenburg, Asklepios Klinik',
    },
    {
        id: '900275124',
        name: 'Brandenburg, Karl-Marx-Str.',
    },
    {
        id: '900275122',
        name: 'Brandenburg, Technische Hochschule / THB',
    },
    {
        id: '900275121',
        name: 'Brandenburg, Magdeburger Str./OLG',
    },
    {
        id: '900275101',
        name: 'Brandenburg, Kanalstr.',
    },
    {
        id: '900245280',
        name: 'Luckenwalde, Fläming-Therme',
    },
    {
        id: '900245498',
        name: 'Klausdorf (TF), Poststr.',
    },
    {
        id: '900222201',
        name: 'Verlorenwasser, Hirschtränke',
    },
    {
        id: '140094190431',
        name: 'Gröditz, Hauptstr.',
    },
    {
        id: '900275245',
        name: 'Brandenburg, Ratsweg',
    },
    {
        id: '900275246',
        name: 'Brandenburg, Am Anger',
    },
    {
        id: '900275713',
        name: 'Brandenburg, Platz der Einheit',
    },
    {
        id: '900275715',
        name: 'Brandenburg, Grenzstr.',
    },
    {
        id: '900275612',
        name: 'Brandenburg, Immenweg',
    },
    {
        id: '900275716',
        name: 'Brandenburg, Südringstr.',
    },
    {
        id: '900275717',
        name: 'Brandenburg, Rundbau',
    },
    {
        id: '900275718',
        name: 'Brandenburg, Gränertstr.',
    },
    {
        id: '900275719',
        name: 'Brandenburg, Kirchmöser',
    },
    {
        id: '900275714',
        name: 'Brandenburg, Uferstr.',
    },
    {
        id: '900275712',
        name: 'Brandenburg, Am Südtor',
    },
    {
        id: '900275620',
        name: 'Brandenburg, Rochowstr.',
    },
    {
        id: '900275131',
        name: 'Brandenburg, Domlinden',
    },
    {
        id: '900275606',
        name: 'Brandenburg, Buchenweg',
    },
    {
        id: '900275614',
        name: 'Brandenburg, Am Spechtbogen',
    },
    {
        id: '900415227',
        name: 'Finsterwalde, Pestalozzistr.',
    },
    {
        id: '900275115',
        name: 'Brandenburg, Wredowplatz',
    },
    {
        id: '900275508',
        name: 'Brandenburg, Potsdamer Str.',
    },
    {
        id: '900416060',
        name: 'Prösen, Großenhainer Str.',
    },
    {
        id: '900275227',
        name: 'Brandenburg, Quenzbrücke',
    },
    {
        id: '900275243',
        name: 'Brandenburg, Caasmannstr.',
    },
    {
        id: '900275427',
        name: 'Brandenburg, Butterlake',
    },
    {
        id: '900275424',
        name: 'Brandenburg, Beetzsee Center',
    },
    {
        id: '900275436',
        name: 'Brandenburg, Christinenstr.',
    },
    {
        id: '900415358',
        name: 'Beutersitz, Dresdener Str.',
    },
    {
        id: '900245113',
        name: 'Liepe (Dahme), Dorfstr.',
    },
    {
        id: '900260676',
        name: 'Friedersdorf (LDS), Bahnhofstr.',
    },
    {
        id: '900260739',
        name: 'Kablow, Dorf',
    },
    {
        id: '900260646',
        name: 'Dannenreich',
    },
    {
        id: '900260685',
        name: 'Friedrichshof (bei Dannenreich)',
    },
    {
        id: '900260999',
        name: 'Wenzlow (LDS)',
    },
    {
        id: '900260678',
        name: 'Friedersdorf (LDS), Fleddergraben',
    },
    {
        id: '900260680',
        name: 'Friedersdorf (LDS), Gasthaus',
    },
    {
        id: '900260683',
        name: 'Friedersdorf (LDS), Sparkasse',
    },
    {
        id: '900261118',
        name: 'Wolzig, Seeweg',
    },
    {
        id: '900260988',
        name: 'Töpchin, Dorf',
    },
    {
        id: '900261020',
        name: 'Wolzig, Gasthaus am See',
    },
    {
        id: '900260684',
        name: 'Friedersdorf (LDS), Blossiner Chaussee',
    },
    {
        id: '900260627',
        name: 'Blossin, Brücke',
    },
    {
        id: '900245489',
        name: 'Kallinchen, Dorf',
    },
    {
        id: '900245581',
        name: 'Schöneiche (bei Zossen), Dorfaue',
    },
    {
        id: '900260713',
        name: 'Groß Köris, Feuerwehr',
    },
    {
        id: '900260968',
        name: 'Streganz, Dorf',
    },
    {
        id: '900260901',
        name: 'Prieros, Dorf',
    },
    {
        id: '900260900',
        name: 'Prieros, Brücke',
    },
    {
        id: '900260902',
        name: 'Gräbendorf (LDS), Weg zum Frauensee',
    },
    {
        id: '900261090',
        name: 'Gräbendorf (LDS), Platanenweg',
    },
    {
        id: '900260707',
        name: 'Gräbendorf, Dorf',
    },
    {
        id: '900260708',
        name: 'Gräbendorf, Bestenseer Str.',
    },
    {
        id: '900260612',
        name: 'Gräbendorf, Jagen 167',
    },
    {
        id: '900260797',
        name: 'Königs Wusterhausen, Sportplatz',
    },
    {
        id: '900260651',
        name: 'Dolgenbrodt, Dorf',
    },
    {
        id: '900245488',
        name: 'Kallinchen, Ringstr.',
    },
    {
        id: '900260865',
        name: 'Motzen, Seeblick',
    },
    {
        id: '900260864',
        name: 'Motzen, Seebad',
    },
    {
        id: '900260861',
        name: 'Motzen, Märchenwiese',
    },
    {
        id: '900260690',
        name: 'Gallun, Süd',
    },
    {
        id: '900260689',
        name: 'Gallun, Dorf',
    },
    {
        id: '900260688',
        name: 'Gallun, Berg',
    },
    {
        id: '900260856',
        name: 'Mittenwalde (LDS), Yorckstr.',
    },
    {
        id: '900260570',
        name: 'Mittenwalde (LDS), Baruther Vorstadt',
    },
    {
        id: '900260854',
        name: 'Mittenwalde (LDS), Zülowstr.',
    },
    {
        id: '900260853',
        name: 'Mittenwalde (LDS), Dahmestr.',
    },
    {
        id: '000313643002',
        name: 'Wilhelmsaue, Mühle',
    },
    {
        id: '900260614',
        name: 'Bestensee, Eichhornstr',
    },
    {
        id: '900260860',
        name: 'Motzen, Kudowa',
    },
    {
        id: '900245492',
        name: 'Kallinchen, Urlauberdorf',
    },
    {
        id: '900260906',
        name: 'Ragow (LDS), Eichenallee',
    },
    {
        id: '900260777',
        name: 'Deutsch Wusterhausen, Denkmalplatz',
    },
    {
        id: '900260773',
        name: 'Deutsch Wusterhausen, Baumschule',
    },
    {
        id: '900260783',
        name: 'Königs Wusterhausen, Grenzweg',
    },
    {
        id: '900260793',
        name: 'Königs Wusterhausen, Potsdamer Str.',
    },
    {
        id: '900260801',
        name: 'Krummensee (LDS), Gustav-Hensel-Str.',
    },
    {
        id: '900320661',
        name: 'Vogelsdorf, Industriestr.',
    },
    {
        id: '000313643001',
        name: 'Wilhelmsaue, Mühle',
    },
    {
        id: '900350868',
        name: 'Bernau, Ladestr.',
    },
    {
        id: '900110529',
        name: 'Einsteinpark',
    },
    {
        id: '000313616001',
        name: 'Liebenthal (OPR), Feuerwehr',
    },
    {
        id: '900261035',
        name: 'Zernsdorf, Dorfaue',
    },
    {
        id: '900261037',
        name: 'Zernsdorf, Strandweg',
    },
    {
        id: '900261039',
        name: 'Zernsdorf, Friedrich-Engels-Str.',
    },
    {
        id: '900261041',
        name: 'Zernsdorf, Wustroweg',
    },
    {
        id: '900260792',
        name: 'Neue Mühle, Erlenweg',
    },
    {
        id: '900260795',
        name: 'Neue Mühle, Fürstenwalder Weg',
    },
    {
        id: '900205783',
        name: 'Gadow (OPR), Wendeplatz',
    },
    {
        id: '900321197',
        name: 'Neulewin, Süd',
    },
    {
        id: '900261097',
        name: 'Teupitz, Kaufhalle',
    },
    {
        id: '900054154',
        name: 'Heylstr.',
    },
    {
        id: '900260891',
        name: 'Niederlehme, Schule',
    },
    {
        id: '900027208',
        name: 'Tongaweg',
    },
    {
        id: '900260982',
        name: 'Teupitz, Markt',
    },
    {
        id: '900260980',
        name: 'Teupitz, Chausseehaus',
    },
    {
        id: '900260841',
        name: 'Märkisch Buchholz, Birkenstr.',
    },
    {
        id: '900260762',
        name: 'Klein Köris, Chausseestr.',
    },
    {
        id: '900260870',
        name: 'Birkholz (LDS), Dorf',
    },
    {
        id: '900260869',
        name: 'Münchehofe (LDS)',
    },
    {
        id: '900260613',
        name: 'Bestensee, Mühlenberg',
    },
    {
        id: '900260611',
        name: 'Bestensee, Bhf',
    },
    {
        id: '900260615',
        name: 'Bestensee, Forsthaus',
    },
    {
        id: '900260903',
        name: 'Prieros, Schule',
    },
    {
        id: '900260894',
        name: 'Pätz, Dorfaue',
    },
    {
        id: '900260765',
        name: 'Klein Köris, Wiesengrund',
    },
    {
        id: '900260881',
        name: 'Neuendorf (bei Teupitz), Abzweig',
    },
    {
        id: '900260730',
        name: 'Hermsdorf (bei Münchehofe)',
    },
    {
        id: '900260657',
        name: 'Egsdorf (bei Teupitz), Dorf',
    },
    {
        id: '900260658',
        name: 'Egsdorf (bei Teupitz), Tornows Idyll',
    },
    {
        id: '900260656',
        name: 'Egsdorf (bei Teupitz), Berg',
    },
    {
        id: '900260990',
        name: 'Töpchin, Waldeck',
    },
    {
        id: '900260989',
        name: 'Töpchin, Nord',
    },
    {
        id: '900260840',
        name: 'Märkisch Buchholz, Schützenstr.',
    },
    {
        id: '900260015',
        name: 'Halbe, Goetheplatz',
    },
    {
        id: '900260838',
        name: 'Märkisch Buchholz, Köthener Str.',
    },
    {
        id: '900260799',
        name: 'Köthen',
    },
    {
        id: '900260800',
        name: 'Kolberg, Dorf',
    },
    {
        id: '900261860',
        name: 'Schönerlinde (LDS), Abzweig',
    },
    {
        id: '900261157',
        name: 'Glienig',
    },
    {
        id: '900245666',
        name: 'Görsdorf (TF), Dorf',
    },
    {
        id: '900260389',
        name: 'Damsdorf (bei Dahme)',
    },
    {
        id: '900261820',
        name: 'Schenkendorf (b.Dahme), Ort',
    },
    {
        id: '900261897',
        name: 'Sellendorf, Försterei',
    },
    {
        id: '900261898',
        name: 'Sellendorf, Hauptstr.',
    },
    {
        id: '900260283',
        name: 'Altgolßen',
    },
    {
        id: '900261811',
        name: 'Schäcksdorf',
    },
    {
        id: '900260410',
        name: 'Drahnsdorf, Schulstr.',
    },
    {
        id: '900262069',
        name: 'Zaacko',
    },
    {
        id: '900261338',
        name: 'Karche',
    },
    {
        id: '900261846',
        name: 'Schollen',
    },
    {
        id: '900261709',
        name: 'Prierow, B115',
    },
    {
        id: '900261534',
        name: 'Lübben, Weinbergstr.',
    },
    {
        id: '900261524',
        name: 'Lübben, Neuendorf Landgasthaus',
    },
    {
        id: '900260421',
        name: 'Duben, B 87',
    },
    {
        id: '900261581',
        name: 'Luckau, Nissanstr./RVS',
    },
    {
        id: '900261286',
        name: 'Hohendorf (LDS)',
    },
    {
        id: '900261172',
        name: 'Golßen, Freibad',
    },
    {
        id: '900261407',
        name: 'Kümmritz, Dorfstr.',
    },
    {
        id: '900261150',
        name: 'Gießmannsdorf, Zieckauer Chaussee',
    },
    {
        id: '900245760',
        name: 'Wildau-Wentdorf, Dorfstr.',
    },
    {
        id: '900262089',
        name: 'Zieckau, Dorfstr.',
    },
    {
        id: '900245711',
        name: 'Prensdorf, Wendeplatz',
    },
    {
        id: '900215160',
        name: 'Bad Wilsnack, Netto',
    },
    {
        id: '900261148',
        name: 'Gersdorf (LDS)',
    },
    {
        id: '900261597',
        name: 'Mahlsdorf (LDS)',
    },
    {
        id: '900261810',
        name: 'Sagritz',
    },
    {
        id: '900262100',
        name: 'Zützen (LDS), B 96',
    },
    {
        id: '900261174',
        name: 'Golßen, Markt',
    },
    {
        id: '900261830',
        name: 'Schiebsdorf',
    },
    {
        id: '900215802',
        name: 'Klein Linde',
    },
    {
        id: '900261351',
        name: 'Kasel-Golzig, Golßener Str.',
    },
    {
        id: '900262070',
        name: 'Zauche',
    },
    {
        id: '900261517',
        name: 'Lübben, Fachklinikum',
    },
    {
        id: '900261494',
        name: 'Lübben, Spreewaldklinik',
    },
    {
        id: '900260764',
        name: 'Klein Köris, Schmiede',
    },
    {
        id: '900261012',
        name: 'Wildau, Chausseestr.',
    },
    {
        id: '900261009',
        name: 'Wildau, A10 Center',
    },
    {
        id: '900261083',
        name: 'Schulzendorf (LDS), Herweghstr.',
    },
    {
        id: '000313623001',
        name: 'Neubarnim, Abzweig Ortwig',
    },
    {
        id: '900260063',
        name: 'Schulzendorf (LDS), W.-Rathenau-Str.',
    },
    {
        id: '900260714',
        name: 'Groß Köris, Schule',
    },
    {
        id: '000313630001',
        name: 'Ortwig, Graben',
    },
    {
        id: '000313630002',
        name: 'Ortwig, Graben',
    },
    {
        id: '900260979',
        name: 'Teupitz, Bergstr.',
    },
    {
        id: '900260948',
        name: 'Schwerin (LDS), Bergfrieden',
    },
    {
        id: '900260951',
        name: 'Schwerin (LDS), Waldstr.',
    },
    {
        id: '900260950',
        name: 'Schwerin (LDS), Seglerheim',
    },
    {
        id: '900260016',
        name: 'Groß Köris, Bhf',
    },
    {
        id: '900261082',
        name: 'Schulzendorf (LDS), Kita',
    },
    {
        id: '000313623002',
        name: 'Neubarnim, Abzweig Ortwig',
    },
    {
        id: '900261501',
        name: 'Lübben, Berliner Chaussee',
    },
    {
        id: '900260628',
        name: 'Boddinsfelde',
    },
    {
        id: '900261944',
        name: 'Terpt, Friedensstr.',
    },
    {
        id: '900261337',
        name: 'Kaden',
    },
    {
        id: '000313625002',
        name: 'Neubarnim, NOGA',
    },
    {
        id: '900260064',
        name: 'Schulzendorf (LDS), Miersdorfer Str.',
    },
    {
        id: '900260004',
        name: 'S Eichwalde',
    },
    {
        id: '900260060',
        name: 'Schulzendorf (LDS), Bremer Str.',
    },
    {
        id: '900260037',
        name: 'Miersdorf, Wüstemarker Weg',
    },
    {
        id: '900260035',
        name: 'Miersdorf, Kirche',
    },
    {
        id: '900260066',
        name: 'Schulzendorf (LDS), Freiligrathstr.',
    },
    {
        id: '000313625001',
        name: 'Neubarnim, NOGA',
    },
    {
        id: '900260944',
        name: 'Schulzendorf (LDS), Puschkinstr.',
    },
    {
        id: '900260943',
        name: 'Schulzendorf (LDS), K.-Marx-Str.',
    },
    {
        id: '900260325',
        name: 'Börnichen, Alter Bahnhof',
    },
    {
        id: '900245115',
        name: 'Niebendorf, Dorfstr.',
    },
    {
        id: '900260330',
        name: 'Bornsdorf, Luckauer Chaussee',
    },
    {
        id: '900261191',
        name: 'Görlsdorf (LDS), Schule',
    },
    {
        id: '900260466',
        name: 'Frankendorf (LDS), Hauptstr.',
    },
    {
        id: '900262012',
        name: 'Weißack, Forsthaus',
    },
    {
        id: '900262013',
        name: 'Weißack, Waldstr.',
    },
    {
        id: '900261206',
        name: 'Goßmar (bei Luckau)',
    },
    {
        id: '900261750',
        name: 'Riedebeck, Kirche',
    },
    {
        id: '900261751',
        name: 'Riedebeck, Siedlung',
    },
    {
        id: '900261092',
        name: 'Staakmühle (bei Golßen)',
    },
    {
        id: '900262011',
        name: 'Weißack, Dorfstr.',
    },
    {
        id: '900261886',
        name: 'Schwarzenburg',
    },
    {
        id: '900261996',
        name: 'Waltersdorf (bei Luckau)',
    },
    {
        id: '900262060',
        name: 'Wüstermarke-Sorge',
    },
    {
        id: '900262044',
        name: 'Wittmannsdorf (bei Luckau)',
    },
    {
        id: '900261977',
        name: 'Walddrehna, Schule',
    },
    {
        id: '900260290',
        name: 'Bergen',
    },
    {
        id: '900261956',
        name: 'Tugam, Abzweig',
    },
    {
        id: '900435650',
        name: 'Mallenchen',
    },
    {
        id: '900435608',
        name: 'Lübbenau, Friedrich-Engels-Str.',
    },
    {
        id: '900435610',
        name: 'Lübbenau, Geschwister-Scholl-Str.',
    },
    {
        id: '900435924',
        name: 'Zerkwitz, Ortsmitte',
    },
    {
        id: '900435417',
        name: 'Klein Beuchow',
    },
    {
        id: '900435534',
        name: 'Groß Beuchow',
    },
    {
        id: '900435365',
        name: 'Hindenberg (OSL), Rennbahn',
    },
    {
        id: '900435576',
        name: 'Groß Radden, Abzweig',
    },
    {
        id: '900261921',
        name: 'Stöbritz',
    },
    {
        id: '900260378',
        name: 'Cahnsdorf, Dorfstr.',
    },
    {
        id: '900260380',
        name: 'Cahnsdorf, Siedlung',
    },
    {
        id: '900435538',
        name: 'Groß Jehser, Schwarzer Weg',
    },
    {
        id: '900262010',
        name: 'Wehnsdorf',
    },
    {
        id: '900340356',
        name: 'Hansfelde',
    },
    {
        id: '900262056',
        name: 'Wußwerk, Alter Bahnhof',
    },
    {
        id: '900261931',
        name: 'Straupitz, Dorfplatz',
    },
    {
        id: '900260368',
        name: 'Byhleguhre, Siedlung',
    },
    {
        id: '900260367',
        name: 'Byhleguhre, Kaupen',
    },
    {
        id: '900445265',
        name: 'Burg, Nordweg',
    },
    {
        id: '900445256',
        name: 'Burg, Bismarckturm',
    },
    {
        id: '900445262',
        name: 'Burg, Hotel Bleske',
    },
    {
        id: '900261650',
        name: 'Neu Zauche, Cottbuser Str.',
    },
    {
        id: '900261722',
        name: 'Radensdorf (Spreewald), Hauptstr.',
    },
    {
        id: '900262058',
        name: 'Wußwerk, Kreuzung',
    },
    {
        id: '900262057',
        name: 'Wußwerk, Feuerwehr',
    },
    {
        id: '900260474',
        name: 'Freiimfelde',
    },
    {
        id: '900262055',
        name: 'Wußwerk, Ausbau',
    },
    {
        id: '900261919',
        name: 'Staakow (bei Golßen), Dorfstr.',
    },
    {
        id: '900445273',
        name: 'Burg, Schule',
    },
    {
        id: '900260273',
        name: 'Alt Zauche, Denkmal',
    },
    {
        id: '900261721',
        name: 'Radensdorf (Spreewald), Am Brock',
    },
    {
        id: '900245269',
        name: 'Hennickendorf (TF), Hauptstr.',
    },
    {
        id: '900222273',
        name: 'Göhlsdorf, Lehniner Allee',
    },
    {
        id: '900245284',
        name: 'Stangenhagen, Trebbiner Str.',
    },
    {
        id: '900245208',
        name: 'Luckenwalde, Haag',
    },
    {
        id: '900245756',
        name: 'Dobbrikow, Nettgendorfer Str.',
    },
    {
        id: '900261410',
        name: 'Kuschkow, Dorfanger',
    },
    {
        id: '900245101',
        name: 'Petkus, F.-v.-Lochow-Str.',
    },
    {
        id: '900245117',
        name: 'Niendorf, Abzweig',
    },
    {
        id: '900245110',
        name: 'Illmersdorf, Chausseestr.',
    },
    {
        id: '900245279',
        name: 'Schöneweide (TF), Lindenstr.',
    },
    {
        id: '900245706',
        name: 'Scharfenbrück, Mitte',
    },
    {
        id: '900261096',
        name: 'Bestensee, Friedenstr.',
    },
    {
        id: '900261520',
        name: 'Lübben, Logenstr.',
    },
    {
        id: '900261522',
        name: 'Lübben, Lubolzer Str.',
    },
    {
        id: '900261550',
        name: 'Lubolz, Dorfstr.',
    },
    {
        id: '900261552',
        name: 'Lubolz, Lübbener Str.',
    },
    {
        id: '900261672',
        name: 'Niewitz',
    },
    {
        id: '900260476',
        name: 'Freiwalde, Chausseestr.',
    },
    {
        id: '900260477',
        name: 'Freiwalde, Kirche',
    },
    {
        id: '900261872',
        name: 'Schönwalde (Spreewald), Kirchhofstr.',
    },
    {
        id: '900261763',
        name: 'Rietzneuendorf, Gemeindeamt',
    },
    {
        id: '900435363',
        name: 'Hindenberg (OSL), Dorfstr.',
    },
    {
        id: '900261094',
        name: 'Kablow, Neubau',
    },
    {
        id: '900261108',
        name: 'Zeuthen, Forstallee',
    },
    {
        id: '900260576',
        name: 'Neue Mühle, Küchenmeisterallee',
    },
    {
        id: '900261111',
        name: 'Zeuthen, Seniorenstift',
    },
    {
        id: '900310730',
        name: 'Beeskow, Radinkendorf Süd',
    },
    {
        id: '900261764',
        name: 'Rietzneuendorf, Mühle',
    },
    {
        id: '900260558',
        name: 'Friedrichshof (bei Rietzneuendorf)',
    },
    {
        id: '900261870',
        name: 'Schönwalde (Spreewald), Amtsverwaltung',
    },
    {
        id: '900260018',
        name: 'Oderin, Bhf',
    },
    {
        id: '900260423',
        name: 'Dürrenhofe, Ausbau',
    },
    {
        id: '900261955',
        name: 'Trebitz, Dorf',
    },
    {
        id: '900261611',
        name: 'Mochlitz, Dorf',
    },
    {
        id: '900261193',
        name: 'Goschen, Dorfstr.',
    },
    {
        id: '900260347',
        name: 'Bückchen',
    },
    {
        id: '900261443',
        name: 'Leibchel, Denkmal',
    },
    {
        id: '900260029',
        name: 'Teurow, Schulstr.',
    },
    {
        id: '900261274',
        name: 'Hartmannsdorf (bei Lübben), Schauna',
    },
    {
        id: '900261533',
        name: 'Lübben, Treppendorf',
    },
    {
        id: '900261503',
        name: 'Lübben, Blumenstr.',
    },
    {
        id: '900261990',
        name: 'Waldow (bei Brand), Schenze',
    },
    {
        id: '900261465',
        name: 'Lieberose, Thälmannstr.',
    },
    {
        id: '900261462',
        name: 'Lieberose, Markt',
    },
    {
        id: '900261192',
        name: 'Goschen, Abzweig',
    },
    {
        id: '900260399',
        name: 'Doberburg',
    },
    {
        id: '900262025',
        name: 'Wiese',
    },
    {
        id: '900262034',
        name: 'Wittmannsdorf (bei Lübben), Kossenblatter Str.',
    },
    {
        id: '900261695',
        name: 'Pretschen, Ausbau',
    },
    {
        id: '900261224',
        name: 'Gröditsch, Schule',
    },
    {
        id: '900261399',
        name: 'Krugau, Kirche',
    },
    {
        id: '900260327',
        name: 'Börnichen, Spreewerk',
    },
    {
        id: '900261313',
        name: 'Jamlitz, Sportplatz',
    },
    {
        id: '900261312',
        name: 'Jamlitz, Gasthaus',
    },
    {
        id: '900261461',
        name: 'Lieberose, Lindenplatz',
    },
    {
        id: '900261625',
        name: 'Münchhofe (bei Lieberose)',
    },
    {
        id: '900261300',
        name: 'Hollbrunn, B 168',
    },
    {
        id: '900261460',
        name: 'Lieberose, Hollbrunner Allee',
    },
    {
        id: '900260340',
        name: 'Briesensee, Haus am See',
    },
    {
        id: '900245776',
        name: 'Neuhof (bei Jüterbog), Abzweig',
    },
    {
        id: '900261734',
        name: 'Ressen am Schwielochsee',
    },
    {
        id: '900261264',
        name: 'Guhlen',
    },
    {
        id: '900261210',
        name: 'Goyatz, Schule',
    },
    {
        id: '900261207',
        name: 'Goyatz, Am Bahnhof',
    },
    {
        id: '900261907',
        name: 'Siegadel',
    },
    {
        id: '900261236',
        name: 'Groß Leine, Siegadeler Str.',
    },
    {
        id: '900261237',
        name: 'Groß Leuthen, Bahnhofstr.',
    },
    {
        id: '900261238',
        name: 'Groß Leuthen, Hauptstr.',
    },
    {
        id: '900260407',
        name: 'Dollgen',
    },
    {
        id: '900261642',
        name: 'Neu Lübbenau, Siedlung',
    },
    {
        id: '900262075',
        name: 'Zaue, Kirche',
    },
    {
        id: '900261158',
        name: 'Glietz',
    },
    {
        id: '900261654',
        name: 'Neubrück (bei Goyatz)',
    },
    {
        id: '900261211',
        name: 'Goyatz, Geisterschlucht',
    },
    {
        id: '900261315',
        name: 'Jessern, Zeltplatz',
    },
    {
        id: '900261314',
        name: 'Jessern, Wendeplatz',
    },
    {
        id: '710000955045',
        name: 'Ostritz, Bahnhofstr.',
    },
    {
        id: '900415176',
        name: 'Friedersdorf (bei Brenitz)',
    },
    {
        id: '900261612',
        name: 'Mochow, Kirche',
    },
    {
        id: '900261875',
        name: 'Schuhlen',
    },
    {
        id: '900261444',
        name: 'Leibchel, Gasthof B 87',
    },
    {
        id: '900260839',
        name: 'Märkisch Buchholz, Markt',
    },
    {
        id: '900260759',
        name: 'Neubrück (bei Groß Köris), Doppeltor',
    },
    {
        id: '900260879',
        name: 'Neubrück (bei Groß Köris), Lübbener Chaussee',
    },
    {
        id: '900260763',
        name: 'Neubrück (bei Groß Köris), Weg zum Hölzernen See',
    },
    {
        id: '900260761',
        name: 'Neubrück (bei Groß Köris), Sauberg',
    },
    {
        id: '900260896',
        name: 'Pätz, Prieroser Str.',
    },
    {
        id: '900261030',
        name: 'Zeesen, Puschkinstr.',
    },
    {
        id: '900260893',
        name: 'Pätz, Rettungswache',
    },
    {
        id: '900260895',
        name: 'Pätz, Fernstr.',
    },
    {
        id: '900260326',
        name: 'Lübben, Waldschule Börnichen',
    },
    {
        id: '900260028',
        name: 'Halbe, Kirchstr.',
    },
    {
        id: '900261535',
        name: 'Lübben, Wettiner Str.',
    },
    {
        id: '900261748',
        name: 'Rickshausen, Hotel',
    },
    {
        id: '900261551',
        name: 'Lubolz, Hauptstr.',
    },
    {
        id: '900261989',
        name: 'Waldow (bei Brand), B 115',
    },
    {
        id: '900261747',
        name: 'Rickshausen, B 115',
    },
    {
        id: '900260475',
        name: 'Freiwalde, B 115',
    },
    {
        id: '900260338',
        name: 'Briesen (LDS)',
    },
    {
        id: '900260301',
        name: 'Biebersdorf, Marienberg',
    },
    {
        id: '900261411',
        name: 'Kuschkow, Gröditscher Str.',
    },
    {
        id: '900260308',
        name: 'Birkenhainchen, B 87',
    },
    {
        id: '900261380',
        name: 'Krausnick, Ortsmitte',
    },
    {
        id: '900261626',
        name: 'Neu Byhleguhre, Ort',
    },
    {
        id: '900261933',
        name: 'Straupitz, Schule',
    },
    {
        id: '900261696',
        name: 'Pretschen, Pretschener Anger',
    },
    {
        id: '900261381',
        name: 'Krausnick, Am Schützenplatz',
    },
    {
        id: '900261640',
        name: 'Neu Lübbenau, Hauptstr.',
    },
    {
        id: '900261255',
        name: 'Groß Wasserburg',
    },
    {
        id: '900261458',
        name: 'Leibsch, Leibscher Hauptstr.',
    },
    {
        id: '900261457',
        name: 'Leibsch, Damm',
    },
    {
        id: '900260268',
        name: 'Alt-Schadow',
    },
    {
        id: '900261285',
        name: 'Hohenbrück, Zeltplatz',
    },
    {
        id: '900261643',
        name: 'Neu Schadow',
    },
    {
        id: '900261284',
        name: 'Hohenbrück, Gasthaus',
    },
    {
        id: '900261841',
        name: 'Schlepzig, Bergstr.',
    },
    {
        id: '900261845',
        name: 'Schlepzig, Kirche',
    },
    {
        id: '900245768',
        name: 'Horstfelde, Feldstr.',
    },
    {
        id: '900245842',
        name: 'Ludwigsfelde, Mercedes-Benz Werk',
    },
    {
        id: '900245838',
        name: 'Ludwigsfelde, Teltowkehre',
    },
    {
        id: '900245837',
        name: 'Ludwigsfelde, Parkstr.',
    },
    {
        id: '900245839',
        name: 'Ludwigsfelde, Löwenbrucher Ring',
    },
    {
        id: '900245368',
        name: 'Ludwigsfelde, Graf-v.-Zeppelin-Str.',
    },
    {
        id: '900245835',
        name: 'Ludwigsfelde, N.-Otto-Str.',
    },
    {
        id: '900245264',
        name: 'Dobbrikow, Am Anger',
    },
    {
        id: '900254718',
        name: 'Zossen, Mittenwalder Str.',
    },
    {
        id: '900245354',
        name: 'Wahlsdorf, Teichstr.',
    },
    {
        id: '900245779',
        name: 'Schöneweide (TF), Dorfplatz',
    },
    {
        id: '900340144',
        name: 'Angermünde, Templiner Str.',
    },
    {
        id: '900245834',
        name: 'Ludwigsfelde, Industriepark Ost',
    },
    {
        id: '900245831',
        name: 'Ludwigsfelde, R.-Bosch-Str.',
    },
    {
        id: '900210352',
        name: 'Falkensee, Am Tiefen Grund',
    },
    {
        id: '900204042',
        name: 'Himmelpfort, Stolpseestr.',
    },
    {
        id: '900435516',
        name: 'Suschow, Süd',
    },
    {
        id: '900341161',
        name: 'Schwedt, UVG Betriebshof',
    },
    {
        id: '900350839',
        name: 'Werneuchen, Wasserwerk',
    },
    {
        id: '900245832',
        name: 'Ludwigsfelde, W.-Maybach-Str.',
    },
    {
        id: '900446501',
        name: 'Werben (SPN), Kirche',
    },
    {
        id: '900261160',
        name: 'Schulzendorf (LDS), Dohlenstieg',
    },
    {
        id: '900261161',
        name: 'Schulzendorf (LDS), Flutgraben',
    },
    {
        id: '900261163',
        name: 'Schulzendorf (LDS), Ortszentrum',
    },
    {
        id: '900340964',
        name: 'Meyenburg (UM), Grüner Ring Abzweig',
    },
    {
        id: '900245833',
        name: 'Ludwigsfelde, Prof.-Brunolf-Baade-Str.',
    },
    {
        id: '900245796',
        name: 'Wiesenhagen, Platz der Jugend',
    },
    {
        id: '900245694',
        name: 'Blankenfelde, Blankenfelder Dorfstr.',
    },
    {
        id: '900210365',
        name: 'Falkensee, Im Wolfsgarten',
    },
    {
        id: '900245097',
        name: 'Jüterbog, Grünaer Weg',
    },
    {
        id: '900445415',
        name: 'Fehrow, Schulweg',
    },
    {
        id: '900230228',
        name: 'Potsdam, Studentenwohnheim Eiche',
    },
    {
        id: '900220362',
        name: 'Fohrde, Pritzerber Str.',
    },
    {
        id: '900210366',
        name: 'Falkensee, Finkenkrug/Ringstr.',
    },
    {
        id: '900340148',
        name: 'Angermünde, Am Tanger',
    },
    {
        id: '900210363',
        name: 'Falkensee, Zeppelinstr.',
    },
    {
        id: '900210362',
        name: 'Falkensee, Im Waldwinkel',
    },
    {
        id: '900210361',
        name: 'Falkensee, Feuerbachstr.',
    },
    {
        id: '900245160',
        name: 'Jüterbog, Turmstr.',
    },
    {
        id: '900245322',
        name: 'Jüterbog, Triftstr.',
    },
    {
        id: '900245085',
        name: 'Mahlow, Ziethener Str.',
    },
    {
        id: '900245403',
        name: 'Waldstadt, Bücherstadt',
    },
    {
        id: '900341133',
        name: 'Schwedt, Helbigstr.',
    },
    {
        id: '900245399',
        name: 'Blankenfelde, Stechberg',
    },
    {
        id: '900245783',
        name: 'Siethen, Siethener Dorfstr.',
    },
    {
        id: '900245735',
        name: 'Großbeeren, Am Wiesengrund',
    },
    {
        id: '900245701',
        name: 'Blankensee (TF), Am Waldfrieden',
    },
    {
        id: '900245136',
        name: 'Jüterbog, Heffterstr.',
    },
    {
        id: '900341072',
        name: 'Schönermark (bei Passow), Bhf',
    },
    {
        id: '900435515',
        name: 'Suschow, Nord',
    },
    {
        id: '900435474',
        name: 'Fleißdorf',
    },
    {
        id: '900350196',
        name: 'Niederfinow, Hebewerkstr.',
    },
    {
        id: '900311102',
        name: 'Storkow, Friki',
    },
    {
        id: '900160534',
        name: 'S Nöldnerplatz/Schlichtallee',
    },
    {
        id: '900470094',
        name: 'Cottbus, Döbbrick Kirche',
    },
    {
        id: '900340974',
        name: 'Mürow, Oberdorf',
    },
    {
        id: '900203722',
        name: 'Badingen, Osterner Weg',
    },
    {
        id: '900350396',
        name: 'Biesenthal, Sydower Feld',
    },
    {
        id: '900340016',
        name: 'Berkholz (bei Schwedt), Abzw. Landiner Str.',
    },
    {
        id: '900275857',
        name: 'Brandenburg, Mühlenfeld',
    },
    {
        id: '900220349',
        name: 'Rietz, Gewerbegebiet',
    },
    {
        id: '900203669',
        name: 'Sommerswalde',
    },
    {
        id: '900203478',
        name: 'Hohenbruch, Am Mittelfeld',
    },
    {
        id: '900210341',
        name: 'Premnitz, Friedpark',
    },
    {
        id: '900340076',
        name: 'Crussow, Abzweig Felchower Str.',
    },
    {
        id: '900210324',
        name: 'Spaatz, Am Wald',
    },
    {
        id: '900220475',
        name: 'Tieckow, Wendestelle',
    },
    {
        id: '900222081',
        name: 'Görzke, Schule',
    },
    {
        id: '900210328',
        name: 'Falkensee, Calvinstr.',
    },
    {
        id: '900210329',
        name: 'Falkensee, Elbeallee',
    },
    {
        id: '900210331',
        name: 'Rhinow, Turmstr.',
    },
    {
        id: '900210355',
        name: 'Premnitz, Friedrich-Engels-Str.',
    },
    {
        id: '900203940',
        name: 'Zehdenick, Mildenberger Str.',
    },
    {
        id: '900340193',
        name: 'Görlsdorf (UM), Siedlung',
    },
    {
        id: '900245700',
        name: 'Klausdorf (TF), Am Denkmalplatz',
    },
    {
        id: '900210119',
        name: 'Falkensee, Nedlitzer Str.',
    },
    {
        id: '900203406',
        name: 'Hohen Neuendorf, Havelstr.',
    },
    {
        id: '900245995',
        name: 'Jüterbog, Bergstr.',
    },
    {
        id: '900445366',
        name: 'Drebkau, Schule',
    },
    {
        id: '900230020',
        name: 'Potsdam, Mauerstr.',
    },
    {
        id: '900435661',
        name: 'Naundorf (bei Vetschau), Ortsmitte',
    },
    {
        id: '900340829',
        name: 'Greiffenberg, Ausbau',
    },
    {
        id: '900260062',
        name: 'Freidorf, Dorfstr.',
    },
    {
        id: '900341105',
        name: 'Schwedt, An den Schloßwiesen',
    },
    {
        id: '900203379',
        name: 'Stolpe (OHV), Autobahnbrücke',
    },
    {
        id: '900200026',
        name: 'Schildow, Bahnhofstr.',
    },
    {
        id: '900203004',
        name: 'Kreuzbruch, Forsthaus',
    },
    {
        id: '900200035',
        name: 'Wensickendorf, Bhf',
    },
    {
        id: '900340985',
        name: 'Neu-Galow, Wendeschleife',
    },
    {
        id: '900260059',
        name: 'Teurow, Am Ortberg',
    },
    {
        id: '900210353',
        name: 'Falkensee, Asternplatz',
    },
    {
        id: '900210644',
        name: 'Dallgow-Döberitz, Gymnasium',
    },
    {
        id: '900341131',
        name: 'Schwedt, Heinersdorfer Damm',
    },
    {
        id: '900210634',
        name: 'Dallgow-Döberitz, Seegefelder Str.',
    },
    {
        id: '900210639',
        name: 'Dallgow-Döberitz, Bahnhofstr./Wilmsstr.',
    },
    {
        id: '900210630',
        name: 'Dallgow-Döberitz, Seestr.',
    },
    {
        id: '900210632',
        name: 'Dallgow-Döberitz, Gemeindeamt',
    },
    {
        id: '900210636',
        name: 'Dallgow-Döberitz, Mühlenstr.',
    },
    {
        id: '900210633',
        name: 'Seeburg, Seeburger Chaussee',
    },
    {
        id: '900340130',
        name: 'Angermünde, Schwedter Tor',
    },
    {
        id: '900341213',
        name: 'Stolpe (Oder), Turm',
    },
    {
        id: '900210144',
        name: 'Falkensee, Elsterstr.',
    },
    {
        id: '900210155',
        name: 'Falkensee, Falkenstr./Coburger Str.',
    },
    {
        id: '900210097',
        name: 'Falkensee, Reiherstr.',
    },
    {
        id: '900210124',
        name: 'Falkensee, Hentschelstr.',
    },
    {
        id: '900210631',
        name: 'Dallgow-Döberitz, Robinienallee',
    },
    {
        id: '900029105',
        name: 'Galenstr.',
    },
    {
        id: '900203995',
        name: 'Sonnenberg, Kreuzung',
    },
    {
        id: '900200118',
        name: 'Hennigsdorf, Schulstr.',
    },
    {
        id: '900203450',
        name: 'Kremmen, Linumhorst',
    },
    {
        id: '900203658',
        name: 'Schwante, Gemeinschaftsweg',
    },
    {
        id: '900203659',
        name: 'Schwante, Germendorfer Weg',
    },
    {
        id: '900203612',
        name: 'Zehlendorf (OHV), Ausbau',
    },
    {
        id: '900245733',
        name: 'Paplitz, Birkenhain',
    },
    {
        id: '900275869',
        name: 'Brandenburg, Frankenstr.',
    },
    {
        id: '900245692',
        name: 'Luckenwalde, Jüterboger Str.',
    },
    {
        id: '900350894',
        name: 'Werneuchen, Rathenaustr.',
    },
    {
        id: '900203895',
        name: 'Altlüdersdorf, Ausbau2',
    },
    {
        id: '900203828',
        name: 'Velten, Grundschule Süd',
    },
    {
        id: '900310695',
        name: 'Fürstenwalde, Polizei',
    },
    {
        id: '900310022',
        name: 'Fürstenwalde, Seelower Str.',
    },
    {
        id: '900200100',
        name: 'Hennigsdorf, Gewerbegebiet Nord',
    },
    {
        id: '900222280',
        name: 'Oberjünne, Dorf',
    },
    {
        id: '900230230',
        name: 'Potsdam, Hermann-Struve-Str.',
    },
    {
        id: '900230229',
        name: 'Potsdam, Gutsstr.',
    },
    {
        id: '900261209',
        name: 'Goyatz, Redeneck',
    },
    {
        id: '900210145',
        name: 'Falkensee, Nachtigallstr.',
    },
    {
        id: '900210127',
        name: 'Falkensee, Ruppiner Str.',
    },
    {
        id: '900340121',
        name: 'Angermünde, Kloster',
    },
    {
        id: '900340110',
        name: 'Angermünde, Einkaufscenter',
    },
    {
        id: '900210103',
        name: 'Falkensee, Schwarzburger Str.',
    },
    {
        id: '900210142',
        name: 'Falkensee, Glienicker Str.',
    },
    {
        id: '900210101',
        name: 'Falkensee, Hansastr./Bredower Str.',
    },
    {
        id: '900210104',
        name: 'Falkensee, Barkhausenstr.',
    },
    {
        id: '900210131',
        name: 'Falkensee, Innsbrucker Str.',
    },
    {
        id: '900340929',
        name: 'Kerkow, Ausbau',
    },
    {
        id: '900210152',
        name: 'Falkensee, Rembrandtstr.',
    },
    {
        id: '900341315',
        name: 'Zützen (UM), Landgrabenbrücke',
    },
    {
        id: '900210148',
        name: 'Falkensee, Heinrich-Zille-Str.',
    },
    {
        id: '900210351',
        name: 'Falkensee, Trappenweg',
    },
    {
        id: '900210350',
        name: 'Falkensee, Hamannstr.',
    },
    {
        id: '900341239',
        name: 'Vierraden, Hafenstr.',
    },
    {
        id: '900210349',
        name: 'Falkensee, Arcostr.',
    },
    {
        id: '900341238',
        name: 'Vierraden, Hafen',
    },
    {
        id: '900210111',
        name: 'Falkensee, Elsterplatz',
    },
    {
        id: '900340194',
        name: 'Görlsdorf (UM), Wasserwerk',
    },
    {
        id: '900210112',
        name: 'Falkensee, Käthe-Kollwitz-Str.',
    },
    {
        id: '900210108',
        name: 'Falkensee, Parkstr.',
    },
    {
        id: '900210113',
        name: 'Falkensee, Finkenkrug West',
    },
    {
        id: '900210115',
        name: 'Falkensee, Am Gutspark',
    },
    {
        id: '900210106',
        name: 'Falkensee, Gothaer Str.',
    },
    {
        id: '900210092',
        name: 'Falkensee, Seepromenade',
    },
    {
        id: '900210091',
        name: 'Falkensee, Schillerallee',
    },
    {
        id: '900341025',
        name: 'Pinnow (bei Angermünde), Gewerbegebiet',
    },
    {
        id: '900210126',
        name: 'Falkensee, Krummer Luchweg',
    },
    {
        id: '900210118',
        name: 'Falkensee, Sachsenstr.',
    },
    {
        id: '900210138',
        name: 'Falkensee, Rote Villa',
    },
    {
        id: '900210139',
        name: 'Falkensee, Kantstr.',
    },
    {
        id: '900210125',
        name: 'Falkensee, Falkenhagener Anger',
    },
    {
        id: '900210116',
        name: 'Falkensee, Mozartallee',
    },
    {
        id: '900210137',
        name: 'Falkensee, Brahmsallee',
    },
    {
        id: '900210096',
        name: 'Falkensee, Weserstr.',
    },
    {
        id: '900210117',
        name: 'Falkensee, Siedlereck',
    },
    {
        id: '900210135',
        name: 'Falkensee, Pestalozzistr.',
    },
    {
        id: '900210095',
        name: 'Falkensee, Goetheallee',
    },
    {
        id: '900210093',
        name: 'Falkensee, Fontaneallee',
    },
    {
        id: '900210128',
        name: 'Falkensee, Fröbelstr.',
    },
    {
        id: '900210136',
        name: 'Falkensee, Weberallee',
    },
    {
        id: '900260669',
        name: 'Eichwalde, Schmöckwitzer Str.',
    },
    {
        id: '900205110',
        name: 'Fehrbellin, Siedlung',
    },
    {
        id: '900340861',
        name: 'Günterberg, Mitte',
    },
    {
        id: '900205120',
        name: 'Kyritz, Berliner Str.',
    },
    {
        id: '900205115',
        name: 'Fehrbellin, Brücke',
    },
    {
        id: '900205112',
        name: 'Fehrbellin, Postplatz',
    },
    {
        id: '900205111',
        name: 'Karnzow',
    },
    {
        id: '900205108',
        name: 'Linum, Schule',
    },
    {
        id: '900205125',
        name: 'Kyritz, Am Bürgerpark',
    },
    {
        id: '900205107',
        name: 'Horst (bei Blumenthal)',
    },
    {
        id: '900205106',
        name: 'Heinrichsfelde (bei Kyritz), B5',
    },
    {
        id: '900205105',
        name: 'Heiligengrabe, Stift',
    },
    {
        id: '900205104',
        name: 'Linum, Zu den Teichen',
    },
    {
        id: '900205103',
        name: 'Heiligengrabe, Feuerwehr',
    },
    {
        id: '900340019',
        name: 'Biesenbrow, Mitte',
    },
    {
        id: '900205123',
        name: 'Kyritz, Goethe-Grundschule',
    },
    {
        id: '900205126',
        name: 'Kyritz, Perleberger Str.',
    },
    {
        id: '900230231',
        name: 'Potsdam, Klinikum',
    },
    {
        id: '900205148',
        name: 'Wusterhausen (Dosse), Plänitzer Weg',
    },
    {
        id: '900205206',
        name: 'Alt Ruppin, Grüner Baum',
    },
    {
        id: '900205204',
        name: 'Alt Lutterow',
    },
    {
        id: '900205202',
        name: 'Alt Daber, Ortsteil',
    },
    {
        id: '900205201',
        name: 'Alt Daber, Ausbau',
    },
    {
        id: '900340006',
        name: 'Altkünkendorf, Mitte',
    },
    {
        id: '900340848',
        name: 'Grumsin',
    },
    {
        id: '900205149',
        name: 'Kyritz, Friedhof',
    },
    {
        id: '900205147',
        name: 'Kyritz, Werner Str.',
    },
    {
        id: '900205128',
        name: 'Kyritz, Wittstocker Str.',
    },
    {
        id: '900205144',
        name: 'Linum, Küsterstege',
    },
    {
        id: '900205143',
        name: 'Heinrichsfelde (bei Kyritz), Dorfmitte',
    },
    {
        id: '900340122',
        name: 'Angermünde, Krankenhaus',
    },
    {
        id: '900205136',
        name: 'Scharfenberg (OPR), Waldsiedlung',
    },
    {
        id: '900205131',
        name: 'Liebenthal (OPR), Ortsmitte',
    },
    {
        id: '900205129',
        name: 'Lellichow',
    },
    {
        id: '900205096',
        name: 'Grabow (OPR), Schloß',
    },
    {
        id: '900205095',
        name: 'Grabow (OPR), Ausbau',
    },
    {
        id: '900261538',
        name: 'Lübben, Rathaus',
    },
    {
        id: '900210332',
        name: 'Elsholz, Str. nach Salzbrunn',
    },
    {
        id: '900311110',
        name: 'Storkow, Burg',
    },
    {
        id: '900340831',
        name: 'Greiffenberg, Friedhof',
    },
    {
        id: '900260923',
        name: 'Rotberg, Süd',
    },
    {
        id: '900261051',
        name: 'Ziegenhals, Schulstr.',
    },
    {
        id: '900220121',
        name: 'Teltow, Striewitzweg',
    },
    {
        id: '900220072',
        name: 'Teltow, Jahnstr.',
    },
    {
        id: '900180002',
        name: 'S Wuhlheide',
    },
    {
        id: '900210325',
        name: 'Nauen, Oranienburger',
    },
    {
        id: '900205003',
        name: 'Rosenwinkel, Parksiedlung',
    },
    {
        id: '900205038',
        name: 'Kyritz, K.-Liebknecht-Str.',
    },
    {
        id: '900205037',
        name: 'Wildberg, Ärztehaus',
    },
    {
        id: '900205036',
        name: 'Rheinsberg, EKZ',
    },
    {
        id: '900341111',
        name: 'Schwedt, Mitte',
    },
    {
        id: '900205033',
        name: 'Giesenhorst, Ziethensauer Weg',
    },
    {
        id: '900205029',
        name: 'Kyritz, Finanzamt',
    },
    {
        id: '900205027',
        name: 'Kyritz, Am Klosterviertel',
    },
    {
        id: '900205024',
        name: 'Stüdenitz, Chausseehaus',
    },
    {
        id: '900205017',
        name: 'Bückwitz, See',
    },
    {
        id: '900205015',
        name: 'Bückwitz, Ausbau',
    },
    {
        id: '900205008',
        name: 'Stolpe (OPR)',
    },
    {
        id: '900340005',
        name: 'Altkünkendorf, Luisenhof',
    },
    {
        id: '900205209',
        name: 'Alt Ruppin, Schleuse',
    },
    {
        id: '900205272',
        name: 'Dierberg',
    },
    {
        id: '900205279',
        name: 'Dreetz, Dorf',
    },
    {
        id: '900205278',
        name: 'Dreetz, Bartschendorfer Str.',
    },
    {
        id: '900341225',
        name: 'Tantow, Bahnübergang',
    },
    {
        id: '900205276',
        name: 'Dossow, Dorfstr.',
    },
    {
        id: '900205275',
        name: 'Dossow, Schule',
    },
    {
        id: '900205273',
        name: 'Dorf Zechlin',
    },
    {
        id: '900340160',
        name: 'Angermünde, Abzweig Plattenwerk',
    },
    {
        id: '900205258',
        name: 'Charlottenau',
    },
    {
        id: '900205269',
        name: 'Dessow, Ausbau',
    },
    {
        id: '900205267',
        name: 'Darritz, Dorf',
    },
    {
        id: '900205266',
        name: 'Darritz, Abzweig',
    },
    {
        id: '900205265',
        name: 'Dannenfeld',
    },
    {
        id: '900205264',
        name: 'Dammkrug, Mühle',
    },
    {
        id: '900205261',
        name: 'Dabergotz',
    },
    {
        id: '900205281',
        name: 'Dreetz, Waldsiedlung',
    },
    {
        id: '900205282',
        name: 'Eichenfelde',
    },
    {
        id: '900205283',
        name: 'Emilienhof',
    },
    {
        id: '900205302',
        name: 'Garz (OPR), Abzweig',
    },
    {
        id: '900205301',
        name: 'Garz (OPR), Kirche',
    },
    {
        id: '900205300',
        name: 'Gartow, Dorf',
    },
    {
        id: '900205298',
        name: 'Ganz',
    },
    {
        id: '900205297',
        name: 'Dreetz, Wolfsplan',
    },
    {
        id: '900205292',
        name: 'Freyenstein, Pritzwalker Str.',
    },
    {
        id: '900205291',
        name: 'Freyenstein, Plauer Tor',
    },
    {
        id: '900205290',
        name: 'Freyenstein, Kirche',
    },
    {
        id: '900205289',
        name: 'Freyenstein, Ausbau',
    },
    {
        id: '900205286',
        name: 'Frankendorf (OPR), Kirche',
    },
    {
        id: '900205285',
        name: 'Flecken Zechlin',
    },
    {
        id: '900205284',
        name: 'Ernstenswille, Teetzer Weg',
    },
    {
        id: '900205257',
        name: 'Buskow',
    },
    {
        id: '900205210',
        name: 'Alt Ruppin, Schule',
    },
    {
        id: '900205220',
        name: 'Basdorf (OPR), Abzweig',
    },
    {
        id: '900205229',
        name: 'Berlitt, Kreuzung',
    },
    {
        id: '900205228',
        name: 'Berlitt, Bhf',
    },
    {
        id: '900205225',
        name: 'Berlinchen, Ausbau',
    },
    {
        id: '900205224',
        name: 'Bechlin, B167',
    },
    {
        id: '900205223',
        name: 'Bechlin, Mühle',
    },
    {
        id: '900205222',
        name: 'Bechlin, Kirche',
    },
    {
        id: '900205221',
        name: 'Bechlin, Abzweig',
    },
    {
        id: '900205219',
        name: 'Bartschendorf',
    },
    {
        id: '900205256',
        name: 'Bütow',
    },
    {
        id: '900205217',
        name: 'Banzendorf, Kirche',
    },
    {
        id: '900205216',
        name: 'Banzendorf, Abzweig',
    },
    {
        id: '900205215',
        name: 'Bantikow, Gaststätte',
    },
    {
        id: '900205214',
        name: 'Bantikow, Dorf',
    },
    {
        id: '900205213',
        name: 'Babitz',
    },
    {
        id: '900205211',
        name: 'Altfriesack',
    },
    {
        id: '900205230',
        name: 'Betzin',
    },
    {
        id: '900205231',
        name: 'Biesen, Chaussee',
    },
    {
        id: '900205232',
        name: 'Biesen, Dorfstr.',
    },
    {
        id: '900205255',
        name: 'Bückwitz, Mühle',
    },
    {
        id: '900205254',
        name: 'Brunne, Kirche',
    },
    {
        id: '900205253',
        name: 'Brunne, Ausbau',
    },
    {
        id: '900205252',
        name: 'Brunn',
    },
    {
        id: '900205251',
        name: 'Breddin, Neue Schule',
    },
    {
        id: '900205250',
        name: 'Breddin, Bhf',
    },
    {
        id: '900205249',
        name: 'Breddin, Bäcker',
    },
    {
        id: '900205248',
        name: 'Breddin, Ambulatorium',
    },
    {
        id: '900205246',
        name: 'Braunsberg',
    },
    {
        id: '900205245',
        name: 'Bork, Dorf',
    },
    {
        id: '900205244',
        name: 'Blumenthal, Kreuzung',
    },
    {
        id: '900205242',
        name: 'Herzberg (Mark), Im Eichholz',
    },
    {
        id: '900205241',
        name: 'Bechlin, Kreuzung',
    },
    {
        id: '900205239',
        name: 'Blechern Hahn',
    },
    {
        id: '900205238',
        name: 'Blankenberg',
    },
    {
        id: '900210428',
        name: 'Pessin, Dorf',
    },
    {
        id: '900220328',
        name: 'Potsdam, Im Winkel',
    },
    {
        id: '900032405',
        name: 'Metzer Str.',
    },
    {
        id: '900340171',
        name: 'Gartz, Greiffenhagener Str.',
    },
    {
        id: '900220337',
        name: 'Potsdam, Kirche Groß Glienicke',
    },
    {
        id: '900038204',
        name: 'Ritterfelddamm/Potsdamer Chaussee',
    },
    {
        id: '900220342',
        name: 'Potsdam, Am Anger',
    },
    {
        id: '900220450',
        name: 'Potsdam, Alt-Golm',
    },
    {
        id: '900220335',
        name: 'Potsdam, F.-Günther-Park',
    },
    {
        id: '900210334',
        name: 'Potsdam, Sacrower Allee/ R.-Wagner-Str.',
    },
    {
        id: '900220339',
        name: 'Potsdam, Hechtsprung',
    },
    {
        id: '900220325',
        name: 'Potsdam, Satzkorn',
    },
    {
        id: '8012308',
        name: 'Markkleeberg, Bhf',
    },
    {
        id: '8012305',
        name: 'Marke',
    },
    {
        id: '900340962',
        name: 'Meyenburg (UM), Berkholzer Str.',
    },
    {
        id: '8011598',
        name: 'Markkleeberg-Gaschwitz, Bhf',
    },
    {
        id: '8010228',
        name: 'Markkleeberg-Großstädteln, Bhf',
    },
    {
        id: '900340017',
        name: 'Berkholz (bei Schwedt), Meyenburger Str.',
    },
    {
        id: '900220326',
        name: 'Potsdam, Kienheide',
    },
    {
        id: '900230195',
        name: 'Potsdam, Ehrenpfortenbergstr.',
    },
    {
        id: '900220446',
        name: 'Potsdam, Kuhfortdamm',
    },
    {
        id: '900220447',
        name: 'Potsdam, Am Urnenfeld',
    },
    {
        id: '900220366',
        name: 'Buckau (PM), Abzweig Dretzen',
    },
    {
        id: '900275164',
        name: 'Brandenburg, Am Elisabethhof',
    },
    {
        id: '900210627',
        name: 'Elstal, Ahornweg',
    },
    {
        id: '900210621',
        name: 'Elstal, Puschkinstr./Schule',
    },
    {
        id: '900210616',
        name: 'Priort, Am Obstgarten',
    },
    {
        id: '900220387',
        name: 'Potsdam, Theodor-Fontane-Str.',
    },
    {
        id: '900261128',
        name: 'Zeuthen, Heinrich-Heine-Str.',
    },
    {
        id: '900261127',
        name: 'Zeuthen, Havellandstr.',
    },
    {
        id: '900260665',
        name: 'Eichwalde, Friedenstr.',
    },
    {
        id: '900261126',
        name: 'Eichwalde, Tschaikowskistr.',
    },
    {
        id: '900275165',
        name: 'Brandenburg, Friedrich-Engels-Str.',
    },
    {
        id: '900275167',
        name: 'Brandenburg, Karl-Sachs-Str.',
    },
    {
        id: '900340760',
        name: 'Fredersdorf (UM), Abzweig',
    },
    {
        id: '900341342',
        name: 'Leopoldsthal, Süd',
    },
    {
        id: '900340750',
        name: 'Fredersdorf (UM), Am Reitplatz',
    },
    {
        id: '900275229',
        name: 'Brandenburg, Klingenbergstr.',
    },
    {
        id: '900275228',
        name: 'Brandenburg, Einsteinstr.',
    },
    {
        id: '8012707',
        name: 'Raguhn',
    },
    {
        id: '900340963',
        name: 'Meyenburg (UM), Gartenanlage',
    },
    {
        id: '900260518',
        name: 'Schönefeld (bei Berlin), Thomas-Dachser-Allee',
    },
    {
        id: '900415659',
        name: 'Großthiemig, Schule',
    },
    {
        id: '900415494',
        name: 'Langenrieth',
    },
    {
        id: '900340161',
        name: 'Friedrichsfelde (UM)',
    },
    {
        id: '900470326',
        name: 'Cottbus, Gelsenkirchener Platz',
    },
    {
        id: '900341192',
        name: 'Steinhöfel (UM), Kreuzung',
    },
    {
        id: '900311126',
        name: 'Beeskow, Oegeln Dorf',
    },
    {
        id: '000005103949',
        name: 'Wierzbowa Slaska',
    },
    {
        id: '000005103638',
        name: 'Studzianka',
    },
    {
        id: '000005103142',
        name: 'Rokitki',
    },
    {
        id: '000005102311',
        name: 'Modla',
    },
    {
        id: '900311109',
        name: 'Fürstenwalde, Zollamt',
    },
    {
        id: '900275028',
        name: 'Brandenburg, Rehaklinik Hohenstücken',
    },
    {
        id: '900220451',
        name: 'Potsdam, Am Alten Mörtelwerk',
    },
    {
        id: '900230202',
        name: 'Potsdam, Hebbelstr.',
    },
    {
        id: '900230009',
        name: 'Potsdam, Bassinplatz',
    },
    {
        id: '900341193',
        name: 'Steinhöfel (UM), Mitte',
    },
    {
        id: '900321637',
        name: 'Neutrebbin, Kreuzung',
    },
    {
        id: '900220244',
        name: 'Viesen',
    },
    {
        id: '000005102263',
        name: 'Milkowice',
    },
    {
        id: '000005101998',
        name: 'Leszno Gorne',
    },
    {
        id: '900470266',
        name: 'Cottbus, Spreewaldbahnhof',
    },
    {
        id: '900350953',
        name: 'Birkholz (BAR), Str. nach Blumberg',
    },
    {
        id: '900350877',
        name: 'Wandlitz, Gymnasium',
    },
    {
        id: '900350747',
        name: 'Wandlitz, Dorf',
    },
    {
        id: '900341024',
        name: 'Pinnow (bei Angermünde), Am Mühlenteich',
    },
    {
        id: '900350846',
        name: 'Werbellin, Wendestelle',
    },
    {
        id: '900311107',
        name: 'Spreeau, Freienbrink D Ahornstr.',
    },
    {
        id: '900220404',
        name: 'Teltow, Blumenstr.',
    },
    {
        id: '900311082',
        name: 'Wendisch Rietz, Freizeitpark',
    },
    {
        id: '900245843',
        name: 'Genshagen, Platanenweg',
    },
    {
        id: '900340869',
        name: 'Heinersdorf (UM), Am Brestpfuhl',
    },
    {
        id: '900261137',
        name: 'Zeuthen, Seegarten',
    },
    {
        id: '900341264',
        name: 'Welsow, Mitte',
    },
    {
        id: '900245801',
        name: 'Rangsdorf, Stauffenbergallee',
    },
    {
        id: '900203359',
        name: 'Hennigsdorf, Fontanestr./Akazienweg',
    },
    {
        id: '900210619',
        name: 'Elstal, Feuerwehr',
    },
    {
        id: '900210618',
        name: 'Elstal, Breite Str.',
    },
    {
        id: '900057104',
        name: 'S Julius-Leber-Brücke',
    },
    {
        id: '900310696',
        name: 'Fürstenwalde, Altstadt',
    },
    {
        id: '900350832',
        name: 'Zepernick, Holbeinstr.',
    },
    {
        id: '900205304',
        name: 'Glienicke (OPR), Dorfplatz',
    },
    {
        id: '900220331',
        name: 'Potsdam, Bullenwinkel',
    },
    {
        id: '900220332',
        name: 'Potsdam, Am Schlahn',
    },
    {
        id: '900220333',
        name: 'Potsdam, Birkenweg',
    },
    {
        id: '900230196',
        name: 'Potsdam, Baumschulenweg',
    },
    {
        id: '900341242',
        name: 'Vierraden, Markt',
    },
    {
        id: '900220311',
        name: 'Potsdam, Fahrländer See',
    },
    {
        id: '900230226',
        name: 'Potsdam, Am Havelblick',
    },
    {
        id: '900311226',
        name: 'Bomsdorf, Vorwerk',
    },
    {
        id: '900261819',
        name: 'Schenkendorf (b.Dahme), Wendestelle',
    },
    {
        id: '900320228',
        name: 'Müncheberg, Stadt',
    },
    {
        id: '900245634',
        name: 'Luckenwalde, In den Plänen',
    },
    {
        id: '900245641',
        name: 'Langenlipsdorf, Bochower Str.',
    },
    {
        id: '900470002',
        name: 'Cottbus, Branitz Auenwinkel',
    },
    {
        id: '900261585',
        name: 'Luckau, Lübbener Str.',
    },
    {
        id: '900340156',
        name: 'Frauenhagen (bei Angermünde), Siedlung',
    },
    {
        id: '900230224',
        name: 'Potsdam, Telegrafenberg',
    },
    {
        id: '900220310',
        name: 'Potsdam, Plantagenweg',
    },
    {
        id: '900230225',
        name: 'Potsdam, Friedenskirche',
    },
    {
        id: '900245679',
        name: 'Blankenfelde, K.-Liebknecht-Str.',
    },
    {
        id: '900245415',
        name: 'Blankenfelde, Kastanienstr.',
    },
    {
        id: '900340813',
        name: 'Vogelsangsruh',
    },
    {
        id: '900245393',
        name: 'Blankenfelde, Triftstr.',
    },
    {
        id: '900245417',
        name: 'Blankenfelde, A.-Dürer-Str.',
    },
    {
        id: '900245392',
        name: 'Blankenfelde, Jühnsdorfer Weg',
    },
    {
        id: '900245416',
        name: 'Blankenfelde, Feuerwehr',
    },
    {
        id: '900360120',
        name: 'Frankfurt (Oder), Gauß Gymnasium',
    },
    {
        id: '900245412',
        name: 'Blankenfelde, A.-Bebel-Str.',
    },
    {
        id: '900341164',
        name: 'Schwedt, Tennishalle',
    },
    {
        id: '900275863',
        name: 'Brandenburg, Zur Dominsel',
    },
    {
        id: '900245677',
        name: 'Blankenfelde, Eichendorffstr.',
    },
    {
        id: '900245678',
        name: 'Blankenfelde, Bachstr.',
    },
    {
        id: '900245672',
        name: 'Mahlow, Hans-Thoma-Str.',
    },
    {
        id: '900245652',
        name: 'Mahlow, Birkenstr.',
    },
    {
        id: '900360004',
        name: 'Frankfurt (Oder), Rosengarten',
    },
    {
        id: '900171531',
        name: 'Oberfeldstr.',
    },
    {
        id: '900260563',
        name: 'Bestensee, Kiessee',
    },
    {
        id: '900435621',
        name: 'Lübbenau, Str. der Jugend',
    },
    {
        id: '900245669',
        name: 'Mahlow, Ibsenstr.',
    },
    {
        id: '900245390',
        name: 'Mahlow, Schulstr.',
    },
    {
        id: '900245670',
        name: 'Mahlow, Drosselweg',
    },
    {
        id: '900310813',
        name: 'Fürstenwalde, Palmnicken Kreuzung',
    },
    {
        id: '900470371',
        name: 'Cottbus, Stadtring/Merzdorfer Weg',
    },
    {
        id: '900311149',
        name: 'Fürstenwalde, Seilerplatz',
    },
    {
        id: '900310814',
        name: 'Fürstenwalde, Freizeitbad',
    },
    {
        id: '900310581',
        name: 'Erkner, Jägerstr.',
    },
    {
        id: '900230272',
        name: 'Potsdam, Schiffbauergasse/Uferweg',
    },
    {
        id: '900470330',
        name: 'Cottbus, Heinrich-Mann-Str.',
    },
    {
        id: '900470331',
        name: 'Cottbus, Hüfnerstr.',
    },
    {
        id: '900220194',
        name: 'Potsdam, Ecksteinweg',
    },
    {
        id: '900245684',
        name: 'Mahlow, Fliederweg',
    },
    {
        id: '900230227',
        name: 'Potsdam, Zum Telegrafenberg',
    },
    {
        id: '900311135',
        name: 'Fürstenwalde, E.-Jopp-Str.',
    },
    {
        id: '900311150',
        name: 'Fürstenwalde, Beethovenstr.',
    },
    {
        id: '900210785',
        name: 'Rathenow, Feierabendallee',
    },
    {
        id: '900210076',
        name: 'Friesack, Abzweig Kleßen',
    },
    {
        id: '900210908',
        name: 'Brieselang, Promenadenweg',
    },
    {
        id: '900210907',
        name: 'Brieselang, Fichtestr./Karl-Marx-Str.',
    },
    {
        id: '900210906',
        name: 'Brieselang, Wichernstr.',
    },
    {
        id: '900360230',
        name: 'Frankfurt (Oder), Ikarusstr.',
    },
    {
        id: '900311022',
        name: 'Spreeau, Kita',
    },
    {
        id: '900311152',
        name: 'Fürstenwalde, Ulanenring',
    },
    {
        id: '900220420',
        name: 'Ziesar, Breiter Weg',
    },
    {
        id: '900360021',
        name: 'Frankfurt (Oder), Kleist Forum',
    },
    {
        id: '900341107',
        name: 'Schwedt, Augustiner Tor',
    },
    {
        id: '900446111',
        name: 'Peitz, Am Malxebogen',
    },
    {
        id: '900445346',
        name: 'Drachhausen, Dorfstr.',
    },
    {
        id: '900360040',
        name: 'Frankfurt (Oder), Friedenshöhe',
    },
    {
        id: '900360003',
        name: 'Frankfurt (Oder), Malchow Förstereiweg',
    },
    {
        id: '900415104',
        name: 'Gahro, Gasthaus',
    },
    {
        id: '900435463',
        name: 'Calau, Poliklinik',
    },
    {
        id: '900135003',
        name: 'Klinikum Buch',
    },
    {
        id: '900350836',
        name: 'Zepernick, Bebelstr.',
    },
    {
        id: '900340830',
        name: 'Greiffenberg, Bahnhofstr.',
    },
    {
        id: '900341153',
        name: 'Schwedt, PCK Str. I',
    },
    {
        id: '900203894',
        name: 'Zehdenick, OSZ',
    },
    {
        id: '900445504',
        name: 'Greifenhain, Kolonie',
    },
    {
        id: '900350049',
        name: 'Friedrichswalde, Honiggasse',
    },
    {
        id: '900341125',
        name: 'Schwedt, Friedrich-Engels-Str.',
    },
    {
        id: '900260214',
        name: 'Großziethen, Attilastr.',
    },
    {
        id: '900210779',
        name: 'Rathenow, Curlandstr.',
    },
    {
        id: '900260567',
        name: 'Königs Wusterhausen, Weg am Krankenhaus',
    },
    {
        id: '900245047',
        name: 'Ludwigsfelde, M.-Gorki-Str.',
    },
    {
        id: '900210316',
        name: 'Bergerdamm, Lager',
    },
    {
        id: '900210831',
        name: 'Teltow, Beethovenstr./Kita',
    },
    {
        id: '900260566',
        name: 'Königs Wusterhausen, Potsdamer Ring',
    },
    {
        id: '900260565',
        name: 'Wildau, Freiheitstr.',
    },
    {
        id: '900261122',
        name: 'Zeuthen, Fontaneallee',
    },
    {
        id: '900260568',
        name: 'Königs Wusterhausen, Am Nordhafen',
    },
    {
        id: '900260569',
        name: 'Bestensee, Wielandstr.',
    },
    {
        id: '900340038',
        name: 'Bölkendorf',
    },
    {
        id: '900341285',
        name: 'Woltersdorf (UM), Casekower Str.',
    },
    {
        id: '900310628',
        name: 'Fürstenwalde, Große Freizeit',
    },
    {
        id: '900351001',
        name: 'Eberswalde, Wald-Solar-Heim',
    },
    {
        id: '900340893',
        name: 'Herzsprung (UM), Bungalowsiedlung',
    },
    {
        id: '900261992',
        name: 'Waldow (bei Brand), Waldstr.',
    },
    {
        id: '900261732',
        name: 'Reichwalde, Am Dorfanger',
    },
    {
        id: '900200117',
        name: 'Fürstenberg (Havel), Lychener Chaussee',
    },
    {
        id: '900350009',
        name: 'Bernau, Breitscheidstr.',
    },
    {
        id: '900275856',
        name: 'Brandenburg, Segelflugplatz',
    },
    {
        id: '900260051',
        name: 'Wildau, Eichstr.',
    },
    {
        id: '900340995',
        name: 'Neukünkendorf, Ausbau',
    },
    {
        id: '900320886',
        name: 'Lichtenow, Dorf',
    },
    {
        id: '900340022',
        name: 'Biesendahlshof, Mitte',
    },
    {
        id: '900341027',
        name: 'Pinnow (bei Angermünde), Parkplatz',
    },
    {
        id: '900320229',
        name: 'Müncheberg, Tankstelle',
    },
    {
        id: '900320280',
        name: 'Müncheberg, Kreuzung',
    },
    {
        id: '900320278',
        name: 'Herzfelde (MOL), Gartenstr.',
    },
    {
        id: '900340021',
        name: 'Biesendahlshof, Lindenallee',
    },
    {
        id: '900320274',
        name: 'Herzfelde (MOL), Kirche',
    },
    {
        id: '900340955',
        name: 'Mescherin, Brücke',
    },
    {
        id: '900220413',
        name: 'S Teltow Stadt/Gonfrevillestr.',
    },
    {
        id: '900245657',
        name: 'Ludwigsfelde, Kristallbad',
    },
    {
        id: '900003254',
        name: 'U Bundestag',
    },
    {
        id: '900230406',
        name: 'Potsdam, Wiesenstr./Lotte-Pulewka-Str.',
    },
    {
        id: '900340064',
        name: 'Casekow, Schule',
    },
    {
        id: '900311970',
        name: 'Grünheide, Reha-Klinik',
    },
    {
        id: '8081260',
        name: 'Schönebeck Süd',
    },
    {
        id: '900245689',
        name: 'Nächst Neuendorf, Horstfelder Str.',
    },
    {
        id: '900275861',
        name: 'Brandenburg, Am Weinberg',
    },
    {
        id: '900275860',
        name: 'Brandenburg, Signalstr.',
    },
    {
        id: '900340085',
        name: 'Damitzow, Mitte',
    },
    {
        id: '900340175',
        name: 'Gartz, Schule',
    },
    {
        id: '900350197',
        name: 'Bernau, Schwanebecker Chaussee',
    },
    {
        id: '8012907',
        name: 'Schönebeck-Bad Salzelmen',
    },
    {
        id: '900341073',
        name: 'Schönermark (bei Passow), Am Gutshof',
    },
    {
        id: '900341014',
        name: 'Peetzig',
    },
    {
        id: '900341305',
        name: 'Ziethenmühle',
    },
    {
        id: '900245639',
        name: 'Klausdorf (TF), Str. nach Wünsdorf',
    },
    {
        id: '900445990',
        name: 'Leuthen, Wiesenstr.',
    },
    {
        id: '900260215',
        name: 'Großziethen, Erlenweg',
    },
    {
        id: '900261899',
        name: 'Sellendorf, Hohendorfer Weg',
    },
    {
        id: '900203382',
        name: 'Hennigsdorf, Reinickendorfer Str.',
    },
    {
        id: '900470095',
        name: 'Cottbus, Byhlener Str.',
    },
    {
        id: '900311160',
        name: 'Herzberg (LOS), Hartensdorfer Str.',
    },
    {
        id: '900445918',
        name: 'Koschendorf, Abzweig',
    },
    {
        id: '900445989',
        name: 'Leuthen, Sportplatz',
    },
    {
        id: '900445987',
        name: 'Leuthen, Kackrower Weg',
    },
    {
        id: '900445940',
        name: 'Krieschow, Bresendorfer Str.',
    },
    {
        id: '900203794',
        name: 'Rönnebeck, Ausbau',
    },
    {
        id: '900262101',
        name: 'Zützen (LDS), Kirche',
    },
    {
        id: '900262090',
        name: 'Zieckau, Jetscher Str.',
    },
    {
        id: '900311400',
        name: 'Fuhrmannsruh',
    },
    {
        id: '900220142',
        name: 'Baitz, Bhf',
    },
    {
        id: '900230404',
        name: 'Potsdam, Katjes',
    },
    {
        id: '900245719',
        name: 'Alexanderdorf, Klosterstr.',
    },
    {
        id: '900245407',
        name: 'Sperenberg, Trebbiner Str.',
    },
    {
        id: '900245055',
        name: 'Woltersdorf (TF), Potsdamer Str.',
    },
    {
        id: '900203414',
        name: 'Bergfelde, Glienicker Str.',
    },
    {
        id: '900203373',
        name: 'Hennigsdorf, A.-Kolping-Platz',
    },
    {
        id: '900310874',
        name: 'Herzberg (LOS), An der Kirche',
    },
    {
        id: '900310934',
        name: 'Mittweide',
    },
    {
        id: '900310987',
        name: 'Ranzig, Siedlung',
    },
    {
        id: '900360202',
        name: 'Frankfurt (Oder), Booßen Peterhof',
    },
    {
        id: '900260014',
        name: 'Zeesen, Bhf',
    },
    {
        id: '900210628',
        name: 'Elstal, Unter den Kiefern',
    },
    {
        id: '900210374',
        name: 'Hohennauen, Am Sportplatz',
    },
    {
        id: '900203931',
        name: 'Zehdenick, Libellenweg',
    },
    {
        id: '900203381',
        name: 'Hennigsdorf, Alsdorfer Str.',
    },
    {
        id: '900210809',
        name: 'Rathenow, Klärwerk',
    },
    {
        id: '900340912',
        name: 'Hohenselchow, Kreuzung Süd',
    },
    {
        id: '900210311',
        name: 'Wolsier',
    },
    {
        id: '900210081',
        name: 'Großderschau, Dorf',
    },
    {
        id: '900210090',
        name: 'Gülpe',
    },
    {
        id: '900210179',
        name: 'Jülitz',
    },
    {
        id: '900340145',
        name: 'Angermünde, Templiner Str. Wendestelle',
    },
    {
        id: '900210294',
        name: 'Steckelsdorf, Kirche',
    },
    {
        id: '900210295',
        name: 'Steckelsdorf, See',
    },
    {
        id: '900210245',
        name: 'Rathenow, Stechower Landstr.',
    },
    {
        id: '900210075',
        name: 'Friedrichsbruch',
    },
    {
        id: '900210274',
        name: 'Spaatz, Hohenwinkel',
    },
    {
        id: '900205336',
        name: 'Hohenofen',
    },
    {
        id: '900205137',
        name: 'Sieversdorf (OPR), Bhf',
    },
    {
        id: '900340872',
        name: 'Heinersdorf (UM), Landiner Str.',
    },
    {
        id: '900210077',
        name: 'Galm',
    },
    {
        id: '900210244',
        name: 'Neudessau',
    },
    {
        id: '900210043',
        name: 'Altgarz, Dossebrücke',
    },
    {
        id: '900210292',
        name: 'Spaatz, Schälhaus',
    },
    {
        id: '900210291',
        name: 'Spaatz, Dorf',
    },
    {
        id: '900210308',
        name: 'Wilhelminenthal',
    },
    {
        id: '900210014',
        name: 'Altgarz, Landstr.',
    },
    {
        id: '900210013',
        name: 'Altgarz, Ort',
    },
    {
        id: '900210015',
        name: 'Semlin, Ausbau',
    },
    {
        id: '900210017',
        name: 'Semlin, Rosenkranz',
    },
    {
        id: '900210083',
        name: 'Großwudicke, Hauptstr.',
    },
    {
        id: '900210285',
        name: 'Schmetzdorf (HVL), Dorf',
    },
    {
        id: '900210322',
        name: 'Kleinbuckow, Dorf',
    },
    {
        id: '900210323',
        name: 'Kleinwudicke',
    },
    {
        id: '900210084',
        name: 'Großwudicke, Schule',
    },
    {
        id: '900210052',
        name: 'Buckow (bei Großwudicke), Kirche',
    },
    {
        id: '900210016',
        name: 'Semlin, Dorfplatz',
    },
    {
        id: '900210051',
        name: 'Buckow (bei Großwudicke), B188',
    },
    {
        id: '900210053',
        name: 'Bützer, Dorfplatz',
    },
    {
        id: '900210054',
        name: 'Bützer, Rathenower Str.',
    },
    {
        id: '900210284',
        name: 'Schmetzdorf (HVL), Ausbau',
    },
    {
        id: '900210312',
        name: 'Zollchow (HVL)',
    },
    {
        id: '900210290',
        name: 'Semlin, Semliner Chaussee II',
    },
    {
        id: '900210289',
        name: 'Semlin, Semliner Chaussee I',
    },
    {
        id: '900210089',
        name: 'Grütz',
    },
    {
        id: '900210080',
        name: 'Göttlin, Einkaufszentrum',
    },
    {
        id: '900340134',
        name: 'Angermünde, Umspannwerk',
    },
    {
        id: '900210079',
        name: 'Göttlin, Dorf',
    },
    {
        id: '000301382001',
        name: 'Schollene',
    },
    {
        id: '000301381001',
        name: 'Neuschollene',
    },
    {
        id: '900340832',
        name: 'Greiffenberg, Markt',
    },
    {
        id: '900340069',
        name: 'Criewen, Försterei',
    },
    {
        id: '900310823',
        name: 'Fürstenwalde, Wasserturm',
    },
    {
        id: '900350864',
        name: 'Lobetal, An der einsamen Kiefer',
    },
    {
        id: '900320990',
        name: 'Gielsdorf, Dorf',
    },
    {
        id: '900350850',
        name: 'Eberswalde, Asphaltwerk',
    },
    {
        id: '900220448',
        name: 'Potsdam, Weinmeisterstr.',
    },
    {
        id: '900341124',
        name: 'Schwedt, Friedhof Wendeschleife',
    },
    {
        id: '900260216',
        name: 'Waßmannsdorf, Str. des Friedens',
    },
    {
        id: '900445543',
        name: 'Cottbus, Groß Gaglow Lausitz Park',
    },
    {
        id: '900470340',
        name: 'Cottbus, Papitzer Str.',
    },
    {
        id: '900210272',
        name: 'Nauen, Marx-Engels-Str.',
    },
    {
        id: '900340947',
        name: 'Kunow (UM), Teich',
    },
    {
        id: '900340063',
        name: 'Casekow, Mitte',
    },
    {
        id: '900260562',
        name: 'Friedersdorf (LDS), Hort',
    },
    {
        id: '900261124',
        name: 'Wildau, Schmiedestr.',
    },
    {
        id: '900260540',
        name: 'Königs Wusterhausen, Schenkendorfer Flur',
    },
    {
        id: '900261962',
        name: 'Uckro, Hauptstr.',
    },
    {
        id: '900203661',
        name: 'Germendorf, Veltener Str.',
    },
    {
        id: '900311154',
        name: 'Hangelsberg, Gaußstr.',
    },
    {
        id: '900245685',
        name: 'Ludwigsfelde, G.-Daimler-Str.',
    },
    {
        id: '900210009',
        name: 'Parey',
    },
    {
        id: '900200505',
        name: 'Glienicke/Nordbahn, Kindelwaldpromenade',
    },
    {
        id: '900200032',
        name: 'Glienicke/Nordbahn, Märkische Allee',
    },
    {
        id: '900200503',
        name: 'Glienicke/Nordbahn, Sportplatzweg',
    },
    {
        id: '900200502',
        name: 'Glienicke/Nordbahn, Lessingstr.',
    },
    {
        id: '900200504',
        name: 'Glienicke/Nordbahn, Elisabethstr.',
    },
    {
        id: '900200506',
        name: 'Glienicke/Nordbahn, Elsässer Str.',
    },
    {
        id: '900200507',
        name: 'Glienicke/Nordbahn, Paul-Singer-Str.',
    },
    {
        id: '900200508',
        name: 'Schildow, Glienicker Str.',
    },
    {
        id: '900222194',
        name: 'Treuenbrietzen, Krankenhaus',
    },
    {
        id: '900275307',
        name: 'Brandenburg, Upstallstr.',
    },
    {
        id: '900081203',
        name: 'Buckower Damm/Ringslebenstr.',
    },
    {
        id: '900081255',
        name: 'Ringslebenstr./Mollnerweg',
    },
    {
        id: '900230273',
        name: 'Potsdam, Kleine Weinmeisterstr.',
    },
    {
        id: '900445202',
        name: 'Brahmow',
    },
    {
        id: '900350139',
        name: 'Ahrensfelde, Fasanenstr.',
    },
    {
        id: '900350138',
        name: 'Ahrensfelde, Kirschenallee',
    },
    {
        id: '900351004',
        name: 'Eberswalde, Pfeilstr.',
    },
    {
        id: '900351003',
        name: 'Eberswalde, Brunnenstr.',
    },
    {
        id: '900275306',
        name: 'Brandenburg, Betriebshof/Upstallstr.',
    },
    {
        id: '900210204',
        name: 'Möthlitz',
    },
    {
        id: '900210775',
        name: 'Rathenow, Bruno-Baum-Ring',
    },
    {
        id: '900210823',
        name: 'Rathenow, Theodor-Lessing-Str.',
    },
    {
        id: '900210794',
        name: 'Rathenow, Gebhardtstr.',
    },
    {
        id: '900210770',
        name: 'Rathenow, Am Hafen',
    },
    {
        id: '900210801',
        name: 'Rathenow, Grundschule Geschwister Scholl',
    },
    {
        id: '900340892',
        name: 'Herzsprung (UM), Bahnübergang',
    },
    {
        id: '900210777',
        name: 'Rathenow, Buschstr.',
    },
    {
        id: '900210781',
        name: 'Rathenow, Eigendorffstr.',
    },
    {
        id: '900210826',
        name: 'Rathenow, Waldsiedlung',
    },
    {
        id: '900210819',
        name: 'Rathenow, Stadtforst',
    },
    {
        id: '900210782',
        name: 'Rathenow, Ernst-Haeckel-Weg',
    },
    {
        id: '900341064',
        name: 'Schmiedeberg, Nord',
    },
    {
        id: '900210800',
        name: 'Rathenow, Grünauer Fenn',
    },
    {
        id: '900210790',
        name: 'Rathenow, Fortschritt',
    },
    {
        id: '900210811',
        name: 'Rathenow, Lange Pannen',
    },
    {
        id: '900210707',
        name: 'Damme (HVL), Dorf',
    },
    {
        id: '900210058',
        name: 'Elslaake, Abzweig Spaatz',
    },
    {
        id: '900210059',
        name: 'Ferchesar',
    },
    {
        id: '900210000',
        name: 'Albertsheim',
    },
    {
        id: '900210708',
        name: 'Damme (HVL), Flügelgraben',
    },
    {
        id: '900210033',
        name: 'Liepe (HVL)',
    },
    {
        id: '900210400',
        name: 'Nennhausen, Fouqué-Platz',
    },
    {
        id: '900210336',
        name: 'Stechow, Dorf',
    },
    {
        id: '900210795',
        name: 'Rathenow, Gewerbegebiet',
    },
    {
        id: '900210820',
        name: 'Rathenow, Stadtgut',
    },
    {
        id: '900210807',
        name: 'Rathenow, Jahn-Gymnasium',
    },
    {
        id: '900210803',
        name: 'Rathenow, Heidefeld',
    },
    {
        id: '900210786',
        name: 'Rathenow, Feldschlößchen',
    },
    {
        id: '900210798',
        name: 'Rathenow, Große Milower Str.',
    },
    {
        id: '900210821',
        name: 'Rathenow, Stadtschleuse',
    },
    {
        id: '900210804',
        name: 'Rathenow, Heidekrug',
    },
    {
        id: '900341113',
        name: 'Schwedt, Berliner Str.',
    },
    {
        id: '900210788',
        name: 'Rathenow, Förderschule',
    },
    {
        id: '900210812',
        name: 'Rathenow, Platz der Jugend',
    },
    {
        id: '900210817',
        name: 'Rathenow, Optikpark',
    },
    {
        id: '900210818',
        name: 'Rathenow, Sparte Aufbau',
    },
    {
        id: '900210797',
        name: 'Rathenow, Seegersallee',
    },
    {
        id: '900210791',
        name: 'Rathenow, Friedensstr.',
    },
    {
        id: '900210783',
        name: 'Rathenow, Falkenweg',
    },
    {
        id: '900340146',
        name: 'Angermünde, Alte Templiner Str.',
    },
    {
        id: '900210792',
        name: 'Rathenow, Fuchsweg',
    },
    {
        id: '900210793',
        name: 'Rathenow, Gaußstr.',
    },
    {
        id: '900210822',
        name: 'Rathenow, Stendaler Str.',
    },
    {
        id: '900341002',
        name: 'Niederfelde',
    },
    {
        id: '900341102',
        name: 'Schwedt, Am Kniebusch',
    },
    {
        id: '900210776',
        name: 'Rathenow, Bruno-Hans-Bürgel-Schule',
    },
    {
        id: '900210796',
        name: 'Rathenow, Göttliner Chaussee',
    },
    {
        id: '900210778',
        name: 'Rathenow, Clara-Zetkin-Str.',
    },
    {
        id: '900210806',
        name: 'Rathenow, Hubertus',
    },
    {
        id: '900210026',
        name: 'Elslaake, Dorf',
    },
    {
        id: '900210184',
        name: 'Elslaake, Kohlhof',
    },
    {
        id: '900210228',
        name: 'Mögelin, Siedlung',
    },
    {
        id: '900210078',
        name: 'Gapel',
    },
    {
        id: '900340931',
        name: 'Kerkow, Bahnübergang',
    },
    {
        id: '900210720',
        name: 'Döberitz (bei Premnitz), Ausbau',
    },
    {
        id: '900210057',
        name: 'Döberitz (bei Premnitz), Dorf',
    },
    {
        id: '900210722',
        name: 'Döberitz (bei Premnitz), Rathenower Str.',
    },
    {
        id: '900210199',
        name: 'Mögelin, Döberitzer Str.',
    },
    {
        id: '900210281',
        name: 'Rhinow, Grundschule',
    },
    {
        id: '900210200',
        name: 'Mögelin, Platz der Jugend',
    },
    {
        id: '900210198',
        name: 'Mögelin, Birkenweg',
    },
    {
        id: '900210193',
        name: 'Milow (HVL), Dorfplatz',
    },
    {
        id: '900210194',
        name: 'Milow (HVL), Friedensstr.',
    },
    {
        id: '900210183',
        name: 'Knoblauch',
    },
    {
        id: '900210746',
        name: 'Nitzahn',
    },
    {
        id: '900210178',
        name: 'Jerchel',
    },
    {
        id: '900210190',
        name: 'Marquede',
    },
    {
        id: '900210195',
        name: 'Milow (HVL), Karl-Marx-Str.',
    },
    {
        id: '900210191',
        name: 'Milow (HVL), Amt Milow',
    },
    {
        id: '900210192',
        name: 'Milow (HVL), Brücke',
    },
    {
        id: '900210282',
        name: 'Rhinow, Rathenower Str.',
    },
    {
        id: '900210022',
        name: 'Bamme, Ringwall',
    },
    {
        id: '900210023',
        name: 'Gräningen, Am Teich',
    },
    {
        id: '900210248',
        name: 'Neuwerder',
    },
    {
        id: '900210188',
        name: 'Kriele',
    },
    {
        id: '900210189',
        name: 'Landin',
    },
    {
        id: '900210268',
        name: 'Gräningen, Luchhof',
    },
    {
        id: '900210185',
        name: 'Kotzen, Krieler Weg',
    },
    {
        id: '900210021',
        name: 'Bamme, Dorf',
    },
    {
        id: '900210287',
        name: 'Ohnewitz',
    },
    {
        id: '900210286',
        name: 'Schönholz (HVL)',
    },
    {
        id: '900210266',
        name: 'Premnitz, Industriepark',
    },
    {
        id: '900210264',
        name: 'Premnitz, Waldstr.',
    },
    {
        id: '900341172',
        name: 'Schwedt, Wöhlerstr.',
    },
    {
        id: '900210257',
        name: 'Premnitz, Havelaue',
    },
    {
        id: '900210259',
        name: 'Premnitz, Ernst-Thälmann-Str.',
    },
    {
        id: '900210249',
        name: 'Premnitz, Premnitzer See',
    },
    {
        id: '900210345',
        name: 'Premnitz, Bergstr./Gartenstr.',
    },
    {
        id: '900210342',
        name: 'Premnitz, Hauptstr.',
    },
    {
        id: '900205303',
        name: 'Giesenhorst, Dreetzer Str.',
    },
    {
        id: '900205307',
        name: 'Gnewikow, Gutshof',
    },
    {
        id: '900415012',
        name: 'Finsterwalde, Wasserturm',
    },
    {
        id: '900415018',
        name: 'Klingmühl, Gasthaus',
    },
    {
        id: '900415017',
        name: 'Lichterfeld, Theresienhütte',
    },
    {
        id: '900415015',
        name: 'Staupitz, Gasthaus',
    },
    {
        id: '900415011',
        name: 'Finsterwalde, Sportplatz Nord',
    },
    {
        id: '900415019',
        name: 'Lichterfeld, Gasthaus',
    },
    {
        id: '900415010',
        name: 'Finsterwalde, Berliner Str.',
    },
    {
        id: '900415008',
        name: 'Finsterwalde, Heinrichsruher Weg',
    },
    {
        id: '900415007',
        name: 'Finsterwalde, Geschwister-Scholl-Str.',
    },
    {
        id: '900415006',
        name: 'Finsterwalde, Waldfrieden',
    },
    {
        id: '900340172',
        name: 'Gartz, Kastanienallee',
    },
    {
        id: '900415020',
        name: 'Schacksdorf',
    },
    {
        id: '900415029',
        name: 'Finsterwalde, Südpassage',
    },
    {
        id: '900415034',
        name: 'Finsterwalde, Margaretenstr.',
    },
    {
        id: '900415032',
        name: 'Finsterwalde, Schule Nord',
    },
    {
        id: '900415031',
        name: 'Finsterwalde, Schacksdorfer Str.',
    },
    {
        id: '900415024',
        name: 'Stechau, Gasthaus',
    },
    {
        id: '900415023',
        name: 'Poley, Gut Kreuzung',
    },
    {
        id: '900415022',
        name: 'Finsterwalde, Lange Str.',
    },
    {
        id: '900261052',
        name: 'Zernsdorf, Rütgersstr.',
    },
    {
        id: '900203338',
        name: 'Oranienburg, Adolf-Mertens-Str.',
    },
    {
        id: '900203550',
        name: 'Neuholland, Nassenheider Chaussee 35',
    },
    {
        id: '900350756',
        name: 'Weesow, Feuerwehr',
    },
    {
        id: '900260552',
        name: 'Schönefeld (bei Berlin), Gatelands',
    },
    {
        id: '900350848',
        name: 'Joachimsthal, Biorama',
    },
    {
        id: '900186500',
        name: 'Bammelecke',
    },
    {
        id: '900470154',
        name: 'Cottbus, Flugplatzmuseum',
    },
    {
        id: '900470311',
        name: 'Cottbus, Geschwister-Scholl-Str.',
    },
    {
        id: '900415004',
        name: 'Finsterwalde, Cottbuser Str.',
    },
    {
        id: '900415002',
        name: 'Lieskau',
    },
    {
        id: '900415001',
        name: 'Zürchel, Kreuzung',
    },
    {
        id: '900315337',
        name: 'Langennaundorf, B 101',
    },
    {
        id: '900350397',
        name: 'Eberswalde, Waldstr.',
    },
    {
        id: '900310639',
        name: 'Beeskow, Ostvorstadt',
    },
    {
        id: '900415039',
        name: 'Finsterwalde, Brauerei',
    },
    {
        id: '900415040',
        name: 'Münchhausen, B 96',
    },
    {
        id: '900415075',
        name: 'Friedersdorf (bei Oppelhain), Schulstr.',
    },
    {
        id: '900415083',
        name: 'Dübrichen',
    },
    {
        id: '900415080',
        name: 'Werenzhain, Kreuzung',
    },
    {
        id: '900340182',
        name: 'Geesow, Abzweig',
    },
    {
        id: '900415079',
        name: 'Werenzhain, Alte Str.',
    },
    {
        id: '900415078',
        name: 'Schadewitz',
    },
    {
        id: '900415066',
        name: 'Kirchhain, Grüner Berg',
    },
    {
        id: '900415074',
        name: 'Lichterfeld, Sportplatz',
    },
    {
        id: '900340174',
        name: 'Gartz, Schreyweg',
    },
    {
        id: '900415068',
        name: 'Doberlug (EE), Rückersdorfer Str.',
    },
    {
        id: '900415084',
        name: 'Prießen, Gasthaus',
    },
    {
        id: '900415096',
        name: 'Lugau, Sportplatz',
    },
    {
        id: '900341132',
        name: 'Schwedt, Heinrich-Heine-Ring',
    },
    {
        id: '900415095',
        name: 'Eichholz',
    },
    {
        id: '900415094',
        name: 'Drößig',
    },
    {
        id: '900415093',
        name: 'Finsterwalde, Bergmühle',
    },
    {
        id: '900415091',
        name: 'Tröbitz, Klubhaus',
    },
    {
        id: '900415090',
        name: 'Schilda, Ausbau',
    },
    {
        id: '900415089',
        name: 'Schilda, Tröbitzer Str.',
    },
    {
        id: '900415087',
        name: 'Buchhain, Gemeindeamt',
    },
    {
        id: '900415049',
        name: 'Goßmar, Kirche',
    },
    {
        id: '900340170',
        name: 'Gartz, Busbahnhof',
    },
    {
        id: '900340173',
        name: 'Gartz, Mühlenteichbrücke',
    },
    {
        id: '900415052',
        name: 'Großkrausnik, Dorfplatz',
    },
    {
        id: '900415051',
        name: 'Großkrausnik, Ortsausgang',
    },
    {
        id: '900415050',
        name: 'Zeckerin, Gasthaus',
    },
    {
        id: '900415065',
        name: 'Kirchhain, Markt',
    },
    {
        id: '900415044',
        name: 'Göllnitz',
    },
    {
        id: '900415043',
        name: 'Dabern',
    },
    {
        id: '900415041',
        name: 'Sonnewalde, Siedlung',
    },
    {
        id: '900415055',
        name: 'Brenitz, Ausbau',
    },
    {
        id: '900415056',
        name: 'Brenitz, Gasthaus',
    },
    {
        id: '900415064',
        name: 'Kirchhain, Karl-Liebknecht Str.',
    },
    {
        id: '900415063',
        name: 'Kirchhain, Eichholzer Weg',
    },
    {
        id: '900415062',
        name: 'Hennersdorf, Gasthaus',
    },
    {
        id: '900415061',
        name: 'Hennersdorf, Finsterwalder Chaussee',
    },
    {
        id: '900415060',
        name: 'Finsterwalde, Krankenhaus',
    },
    {
        id: '900415058',
        name: 'Lichtena',
    },
    {
        id: '900415057',
        name: 'Doberlug (EE), Schloss',
    },
    {
        id: '900350720',
        name: 'Stolzenhagen (bei Wandlitz), Wensickendorfer Str.',
    },
    {
        id: '900415097',
        name: 'Lugau, Schmiede',
    },
    {
        id: '900210522',
        name: 'Etzin, Gewerbegebiet',
    },
    {
        id: '900205028',
        name: 'Kyritz, Baumarkt',
    },
    {
        id: '900341174',
        name: 'Schwedt, Berliner Allee',
    },
    {
        id: '900435423',
        name: 'Klein Mehßow',
    },
    {
        id: '900350513',
        name: 'Joachimsthal, Abzweig Kaiserbahnhof',
    },
    {
        id: '900058108',
        name: 'S+U Yorckstr.',
    },
    {
        id: '900057101',
        name: 'S+U Yorckstr. (Großgörschenstr.)',
    },
    {
        id: '900210423',
        name: 'Paulinenaue, Bhf',
    },
    {
        id: '900260537',
        name: 'Schönefeld (bei Berlin), Elly-Beinhorn-Ring',
    },
    {
        id: '900210648',
        name: 'Dallgow-Döberitz, Goetheplatz',
    },
    {
        id: '900341210',
        name: 'Stolpe (Oder), Am Fliedergrund',
    },
    {
        id: '900205497',
        name: 'Nordhof',
    },
    {
        id: '900341055',
        name: 'Schmargendorf, Kreuzung',
    },
    {
        id: '900203467',
        name: 'Kremmen, Lange Horst',
    },
    {
        id: '900203549',
        name: 'Liebenthal (OHV), Dachsgrund',
    },
    {
        id: '900205697',
        name: 'Wittstock (Dosse), Waldringschule',
    },
    {
        id: '900205680',
        name: 'Zernitz, Bhf',
    },
    {
        id: '900205642',
        name: 'Wittstock (Dosse), Rote-Mühle-Siedlung',
    },
    {
        id: '900205501',
        name: 'Helenenhof',
    },
    {
        id: '900205452',
        name: 'Nackel, Segeletzer Str.',
    },
    {
        id: '900205414',
        name: 'Lohm, Ortsmitte',
    },
    {
        id: '900260538',
        name: 'Schönefeld (bei Berlin), Hugo-Eckener-Allee',
    },
    {
        id: '900230199',
        name: 'Potsdam, Schlänitzseer Weg',
    },
    {
        id: '900340141',
        name: 'Angermünde, Finanzamt',
    },
    {
        id: '900341157',
        name: 'Schwedt, Schöpfwerk',
    },
    {
        id: '710009550015',
        name: 'Hagenwerder, Bhf',
    },
    {
        id: '710009550013',
        name: 'Görlitz, Bhf',
    },
    {
        id: '900310723',
        name: 'Beeskow, Neuendorf Dorf',
    },
    {
        id: '900220499',
        name: 'Neu Töplitz, Wendeplatz',
    },
    {
        id: '900220498',
        name: 'Neu Töplitz, Weinbergstr.',
    },
    {
        id: '900220497',
        name: 'Töplitz, Zur alten Fähre',
    },
    {
        id: '900220484',
        name: 'Leest, Kirche',
    },
    {
        id: '900220483',
        name: 'Leest, Eichholzweg',
    },
    {
        id: '710009550130',
        name: 'Zittau, Bhf',
    },
    {
        id: '900210333',
        name: 'Falkensee, Geschichtspark',
    },
    {
        id: '900311489',
        name: 'Müllrose, Schützenpark',
    },
    {
        id: '900320526',
        name: 'Strausberg, Heinrich-Heine-Str.',
    },
    {
        id: '900203496',
        name: 'Neu Ludwigsaue',
    },
    {
        id: '900203337',
        name: 'Oranienburg, Jugendherberge',
    },
    {
        id: '900470221',
        name: 'Cottbus, Lipezker Str./BTU',
    },
    {
        id: '900445552',
        name: 'Cottbus, Gallinchen Gaglower Str.',
    },
    {
        id: '900445542',
        name: 'Cottbus, Groß Gaglow Harnischdorfer Str.',
    },
    {
        id: '900350878',
        name: 'Wandlitz, Grundschule Wendestelle',
    },
    {
        id: '900210573',
        name: 'Falkenrehde, Knoblaucher Weg',
    },
    {
        id: '900210469',
        name: 'Vietznitz',
    },
    {
        id: '900260102',
        name: 'Selchow (LDS), Flughafen West',
    },
    {
        id: '900245740',
        name: 'Großbeeren, Heidering',
    },
    {
        id: '900470151',
        name: 'Cottbus, Quellgrund',
    },
    {
        id: '900340998',
        name: 'Neurochlitz',
    },
    {
        id: '900341047',
        name: 'Rosow, Grenze',
    },
    {
        id: '900260047',
        name: 'Miersdorf, Am Hochwald',
    },
    {
        id: '900261076',
        name: 'Friedersdorf (LDS), Hauptstr',
    },
    {
        id: '900074701',
        name: 'S Lichtenrade',
    },
    {
        id: '900074214',
        name: 'Rehagener Str.',
    },
    {
        id: '900245468',
        name: 'Christinendorf, Christinendorfer Allee',
    },
    {
        id: '900350837',
        name: 'Lindenberg (BAR), Bucher Weg',
    },
    {
        id: '900341211',
        name: 'Stolpe (Oder), Linde',
    },
    {
        id: '900340183',
        name: 'Geesow, Mitte',
    },
    {
        id: '900340957',
        name: 'Mescherin, Nord',
    },
    {
        id: '900340956',
        name: 'Mescherin, Mitte',
    },
    {
        id: '900341186',
        name: 'Staffelde (UM), Mitte',
    },
    {
        id: '200000002085',
        name: 'Slubice, Intermarché',
    },
    {
        id: '900341039',
        name: 'Radekow, Ost',
    },
    {
        id: '900341038',
        name: 'Radekow, Mitte',
    },
    {
        id: '200000002985',
        name: 'Slubice, Poczta',
    },
    {
        id: '200000002975',
        name: 'Slubice, Plac Bohaterów',
    },
    {
        id: '200000002965',
        name: 'Slubice, Aleja Niepodleglosci',
    },
    {
        id: '200000002955',
        name: 'Slubice, Collegium Polonicum',
    },
    {
        id: '710000999030',
        name: 'Görlitz, Johannes-R.-Becher-Str.',
    },
    {
        id: '900341037',
        name: 'Radekow, Ausbau',
    },
    {
        id: '900341226',
        name: 'Tantow, Friedhof',
    },
    {
        id: '710009990155',
        name: 'Hirschfelde, Markt',
    },
    {
        id: '900341046',
        name: 'Rosow, Bhf',
    },
    {
        id: '900341049',
        name: 'Rosow, Neubau',
    },
    {
        id: '900210240',
        name: 'Nauen, Lindenplatz',
    },
    {
        id: '900210651',
        name: 'Elstal, Eduard-Scheve-Allee',
    },
    {
        id: '900310776',
        name: 'Fürstenwalde, Rosenstr.',
    },
    {
        id: '900310804',
        name: 'Fürstenwalde, W.-Komarow-Str.',
    },
    {
        id: '900341048',
        name: 'Rosow, Mitte',
    },
    {
        id: '900310637',
        name: 'Beeskow, EKZ Fürstenwalder Str.',
    },
    {
        id: '900205700',
        name: 'Sudrowshof',
    },
    {
        id: '900200122',
        name: 'Bötzow, Kreisverkehr',
    },
    {
        id: '900415098',
        name: 'Fischwasser, Wendestelle',
    },
    {
        id: '900230198',
        name: 'Potsdam, Am Küssel',
    },
    {
        id: '900415429',
        name: 'Domsdorf (EE), Kumpelklause',
    },
    {
        id: '900415460',
        name: 'Gräfendorf (EE), Feuerwehr',
    },
    {
        id: '900415458',
        name: 'Gräfendorf (EE), Beyerischer Weg',
    },
    {
        id: '900415451',
        name: 'Falkenberg/E., Gymnasium',
    },
    {
        id: '900415437',
        name: 'Drasdo, Dorfmitte',
    },
    {
        id: '900415427',
        name: 'Domsdorf (EE), Gasthaus',
    },
    {
        id: '900415425',
        name: 'Döllingen',
    },
    {
        id: '900415417',
        name: 'Dobra, Liebenwerdaer Str.',
    },
    {
        id: '900415410',
        name: 'Buschmühle',
    },
    {
        id: '900415409',
        name: 'Burxdorf',
    },
    {
        id: '900415472',
        name: 'Hirschfeld, Schule',
    },
    {
        id: '900415478',
        name: 'Zeischa, Bahnhofstr.',
    },
    {
        id: '900415301',
        name: 'Schraden, Buschhaus',
    },
    {
        id: '900415510',
        name: 'Elsterwerda, Lauchhammerstr.',
    },
    {
        id: '900415509',
        name: 'Elsterwerda, Holzhof B 101',
    },
    {
        id: '900415508',
        name: 'Elsterwerda, Heinrich-Heine-Str.',
    },
    {
        id: '900415507',
        name: 'Elsterwerda, August-Bebel-Str.',
    },
    {
        id: '900415504',
        name: 'Elsterwerda, Elster-Center',
    },
    {
        id: '900415485',
        name: 'Hohenleipisch, Bad Aegier',
    },
    {
        id: '900340155',
        name: 'Frauenhagen (bei Angermünde), Neubau',
    },
    {
        id: '900341278',
        name: 'Wolletz, Mitte',
    },
    {
        id: '900415372',
        name: 'Bönitz, Gasthaus',
    },
    {
        id: '900415322',
        name: 'Borken (EE), Dorfplatz',
    },
    {
        id: '900415333',
        name: 'Mühlberg (Elbe), Boragker Str.',
    },
    {
        id: '900415330',
        name: 'Fichtenberg, Borschütz',
    },
    {
        id: '900415329',
        name: 'Fichtenberg, Gemeindeamt',
    },
    {
        id: '900415328',
        name: 'Osteroda, Dorfplatz',
    },
    {
        id: '900415318',
        name: 'Dubro, Kindergarten',
    },
    {
        id: '900415316',
        name: 'Fischwasser, Ausbau',
    },
    {
        id: '900415305',
        name: 'Schraden, Luisenschule',
    },
    {
        id: '900415334',
        name: 'Prösen, Schule',
    },
    {
        id: '900415336',
        name: 'Krassig, Dorfmitte',
    },
    {
        id: '900415338',
        name: 'Osteroda, Gasthaus',
    },
    {
        id: '900415356',
        name: 'Beutersitz, Bhf/Wildgruber Str.',
    },
    {
        id: '900415355',
        name: 'Beutersitz, Bhf/Berliner Str.',
    },
    {
        id: '900415352',
        name: 'Falkenberg/E., Uebigauer Str.',
    },
    {
        id: '900415350',
        name: 'Falkenberg/E., Schenkbreite',
    },
    {
        id: '900415349',
        name: 'Falkenberg/E., Am Sportplatz',
    },
    {
        id: '900415348',
        name: 'Falkenberg/E., Lindenstr.',
    },
    {
        id: '900415511',
        name: 'Elsterwerda, Lindenweg',
    },
    {
        id: '900415685',
        name: 'Herzberg (Elster), Berliner Str.',
    },
    {
        id: '900415691',
        name: 'Herzberg (Elster), Nordpromenade',
    },
    {
        id: '900415688',
        name: 'Herzberg (Elster), Grund- und Oberschule',
    },
    {
        id: '900415687',
        name: 'Herzberg (Elster), Grochwitzer Str.',
    },
    {
        id: '900415643',
        name: 'Gröden, Betonwerk',
    },
    {
        id: '900415681',
        name: 'Herzberg (Elster), Anhalter Str.',
    },
    {
        id: '900415645',
        name: 'Gröden, Schule',
    },
    {
        id: '900415692',
        name: 'Herzberg (Elster), Richard-König-Str.',
    },
    {
        id: '900415704',
        name: 'Hillmersdorf, Dorfmitte',
    },
    {
        id: '900415738',
        name: 'Hohenleipisch, Forsthaus',
    },
    {
        id: '900415737',
        name: 'Hohenleipisch, Dresdner Str.',
    },
    {
        id: '900415734',
        name: 'Hohenkuhnsdorf',
    },
    {
        id: '900415724',
        name: 'Hohenbucko, Schule',
    },
    {
        id: '900415722',
        name: 'Hohenbucko, Dorfmitte',
    },
    {
        id: '900415721',
        name: 'Hohenbucko, Bhf',
    },
    {
        id: '900415706',
        name: 'Hirschfeld, Mittelschänke',
    },
    {
        id: '900415512',
        name: 'Elsterwerda, Molkerei',
    },
    {
        id: '900415519',
        name: 'Elsterwerda, Denkmalsplatz',
    },
    {
        id: '900415540',
        name: 'Elsterwerda-Biehla, Kraupaer Str.',
    },
    {
        id: '900415539',
        name: 'Elsterwerda-Biehla, Karlstr.',
    },
    {
        id: '900340149',
        name: 'Angermünde, Am Wolletzsee',
    },
    {
        id: '900415536',
        name: 'Elsterwerda-Biehla, Berliner Str.',
    },
    {
        id: '900415631',
        name: 'Grauwinkel',
    },
    {
        id: '900415517',
        name: 'Elsterwerda, Großenhainer Str.',
    },
    {
        id: '900415516',
        name: 'Elsterwerda, Str. des Aufbaus',
    },
    {
        id: '900415514',
        name: 'Elsterwerda, Roseneck',
    },
    {
        id: '900415513',
        name: 'Elsterwerda, Rathaus/Markt',
    },
    {
        id: '900340871',
        name: 'Heinersdorf (UM), Feuerwehr',
    },
    {
        id: '900415544',
        name: 'Elsterwerda-Biehla, Winterberg',
    },
    {
        id: '900415554',
        name: 'Frankenhain, Gasthaus',
    },
    {
        id: '900415630',
        name: 'Grassau (EE), Hauptstr.',
    },
    {
        id: '900415629',
        name: 'Grassau (EE), Gasthaus',
    },
    {
        id: '900415616',
        name: 'Gorden, Kirche',
    },
    {
        id: '900415615',
        name: 'Gorden, Gasthaus',
    },
    {
        id: '900415614',
        name: 'Gorden, Barig',
    },
    {
        id: '900415596',
        name: 'Friedrichsluga, Dorfplatz',
    },
    {
        id: '900415576',
        name: 'Freywalde, Kreuzung',
    },
    {
        id: '900415575',
        name: 'Freywalde, Dorfmitte',
    },
    {
        id: '900415302',
        name: 'Schraden, Denkmalplatz',
    },
    {
        id: '900415300',
        name: 'Schraden, Plessaer Str.',
    },
    {
        id: '900415099',
        name: 'Falkenberg/E., Einkaufsmarkt',
    },
    {
        id: '900415152',
        name: 'Kirchhain, Lausitzk. Wohnheim',
    },
    {
        id: '900415150',
        name: 'Finsterwalde, Tuchmacherstr.(Gymnasium)',
    },
    {
        id: '900415147',
        name: 'Kirchhain, Lausitzkaserne',
    },
    {
        id: '900415145',
        name: 'Finsterwalde, Drößiger Str.',
    },
    {
        id: '900415143',
        name: 'Sonnewalde, Schule',
    },
    {
        id: '900415153',
        name: 'Hohenleipisch, Schule',
    },
    {
        id: '900415141',
        name: 'Lindthal, Gasthaus',
    },
    {
        id: '900415136',
        name: 'Tanneberg, Dorfplatz',
    },
    {
        id: '900415163',
        name: 'Elsterwerda, Westl. Feldmark',
    },
    {
        id: '900415169',
        name: 'Pahlsdorf',
    },
    {
        id: '900341078',
        name: 'Schönfeld (bei Tantow), Mitte',
    },
    {
        id: '900415168',
        name: 'Finsterwalde, Am Tierpark',
    },
    {
        id: '900340928',
        name: 'Keesow',
    },
    {
        id: '900415165',
        name: 'Massen, Ernst-von-Delius-Str.',
    },
    {
        id: '900415160',
        name: 'Zeischa, Gasthaus',
    },
    {
        id: '900415159',
        name: 'Bad Liebenwerda, Kreuzung',
    },
    {
        id: '900415158',
        name: 'Mühlberg (Elbe), Bahnhofstr.',
    },
    {
        id: '900415157',
        name: 'Kröbeln',
    },
    {
        id: '900415156',
        name: 'Doberlug (EE), Bahnhofsallee',
    },
    {
        id: '900415131',
        name: 'Uebigau, Waldschlößchen',
    },
    {
        id: '900415129',
        name: 'Drasdo, Mühle',
    },
    {
        id: '900415105',
        name: 'Finsterwalde, Genossenschaftsstr.',
    },
    {
        id: '900415108',
        name: 'Gröbitz, Dorfstr.',
    },
    {
        id: '900415107',
        name: 'Gröbitz, Siedlung',
    },
    {
        id: '900415106',
        name: 'Finsterwalde, Gröbitzer Weg',
    },
    {
        id: '900415128',
        name: 'Poley, Gasthaus',
    },
    {
        id: '900415103',
        name: 'Arenzhain, Gasthaus',
    },
    {
        id: '900415102',
        name: 'Schönewalde b. Brenitz',
    },
    {
        id: '900415101',
        name: 'Frankena, Gasthaus',
    },
    {
        id: '900415115',
        name: 'Kirchhain, Torgauer Str.',
    },
    {
        id: '900415127',
        name: 'Schacksdorf, Flugplatz Tower',
    },
    {
        id: '900415119',
        name: 'Tröbitz, Schildaer Str.',
    },
    {
        id: '900415118',
        name: 'Finsterwalde, Rosa-Luxemburg-Str.',
    },
    {
        id: '900415117',
        name: 'Finsterwalde, Gewerbegebiet Süd',
    },
    {
        id: '900340166',
        name: 'Gartz, Stettiner Str.',
    },
    {
        id: '900415170',
        name: 'Großbahren',
    },
    {
        id: '900415171',
        name: 'Möllendorf, Dorfplatz',
    },
    {
        id: '900415248',
        name: 'Bad Liebenwerda, Südring',
    },
    {
        id: '900340143',
        name: 'Niederlandin, Süd',
    },
    {
        id: '900415246',
        name: 'Bad Liebenwerda, Goethestr.',
    },
    {
        id: '900415245',
        name: 'Bad Liebenwerda, Dresdener Str.',
    },
    {
        id: '900415230',
        name: 'Gahro, Abzweig',
    },
    {
        id: '900341252',
        name: 'Wartin, Am Feldrain',
    },
    {
        id: '900415243',
        name: 'Bad Liebenwerda, Berliner Str.',
    },
    {
        id: '900415242',
        name: 'Bad Liebenwerda, Bergstr.',
    },
    {
        id: '900415241',
        name: 'Bad Liebenwerda, Bahnhofstr.',
    },
    {
        id: '900415256',
        name: 'Kolochau, Poststr.',
    },
    {
        id: '900415258',
        name: 'Ahlsdorf, Kinderheim',
    },
    {
        id: '900340142',
        name: 'Hohenlandin, Augustenhof Abzweig',
    },
    {
        id: '900415296',
        name: 'Elsterwerda, Weststr.',
    },
    {
        id: '900415285',
        name: 'Bernsdorf, Gasthaus',
    },
    {
        id: '900415279',
        name: 'Beiersdorf (EE), Gaststätte',
    },
    {
        id: '900415278',
        name: 'Bahnsdorf (EE), Dorfstr.',
    },
    {
        id: '900415277',
        name: 'Bahnsdorf (EE), B 101',
    },
    {
        id: '900415272',
        name: 'Arnsnesta',
    },
    {
        id: '900415267',
        name: 'Altenau (EE)',
    },
    {
        id: '900415266',
        name: 'Altbelgern',
    },
    {
        id: '900415259',
        name: 'Ahlsdorf, Kirche',
    },
    {
        id: '900415224',
        name: 'Finsterwalde, Markt',
    },
    {
        id: '900415181',
        name: 'Babben, Gasthaus',
    },
    {
        id: '900415190',
        name: 'Finsterwalde, Trift',
    },
    {
        id: '900415185',
        name: 'Lugau, Kirchhainer Str.',
    },
    {
        id: '900415184',
        name: 'Elsterwerda-Biehla, Lutzweg',
    },
    {
        id: '900340178',
        name: 'Gatow, Nord',
    },
    {
        id: '900415183',
        name: 'Kirchhain, Akazienweg/Gymnasium',
    },
    {
        id: '900415222',
        name: 'Friedersdorf (bei Herzberg), Dorfmitte',
    },
    {
        id: '900415180',
        name: 'Finsterwalde, Schillerplatz',
    },
    {
        id: '900415179',
        name: 'Finsterwalde, Grenzstr.',
    },
    {
        id: '900415177',
        name: 'Finsterwalde, Flugplatz Flieger Str.',
    },
    {
        id: '900415175',
        name: 'Hohenleipisch, Gordener Str.',
    },
    {
        id: '900415192',
        name: 'Birkwalde, Ort',
    },
    {
        id: '900415199',
        name: 'Betten, Dorfplatz',
    },
    {
        id: '900415202',
        name: 'Sallgast, Schule',
    },
    {
        id: '900415221',
        name: 'Finsterwalde, Bayernstr.',
    },
    {
        id: '900415218',
        name: 'Kleinbahren',
    },
    {
        id: '900415217',
        name: 'Goßmar, Klementinenhof',
    },
    {
        id: '900415213',
        name: 'Crinitz, Schule',
    },
    {
        id: '900415211',
        name: 'Münchhausen, Ossak',
    },
    {
        id: '900415206',
        name: 'Zürchel, Gasthaus',
    },
    {
        id: '900415205',
        name: 'Sallgast, Luisensiedlung',
    },
    {
        id: '900415204',
        name: 'Sallgast, Gemeindeamt',
    },
    {
        id: '900205309',
        name: 'Goldbeck (bei Wittstock)',
    },
    {
        id: '900205605',
        name: 'Wernikow, Ausbau',
    },
    {
        id: '900205616',
        name: 'Wittstock (Dosse), A.-Wegener-Str.',
    },
    {
        id: '900205615',
        name: 'Wittstock (Dosse), August-Bebel-Platz',
    },
    {
        id: '900205611',
        name: 'Wilhelmsgrille',
    },
    {
        id: '900205610',
        name: 'Wildberg, Schule',
    },
    {
        id: '900205608',
        name: 'Wernikow, Dorf',
    },
    {
        id: '900205607',
        name: 'Walsleben, Am Brink',
    },
    {
        id: '900205604',
        name: 'Werder (bei Neuruppin), Dorfstr.',
    },
    {
        id: '900205621',
        name: 'Wittstock (Dosse), Dosseteich',
    },
    {
        id: '900205603',
        name: 'Walsleben, Schule',
    },
    {
        id: '900205602',
        name: 'Walsleben, Kirche',
    },
    {
        id: '900205601',
        name: 'Walsleben, Am Heideberg',
    },
    {
        id: '900205600',
        name: 'Wallitz',
    },
    {
        id: '900205597',
        name: 'Walchow, Kirche',
    },
    {
        id: '900205596',
        name: 'Walchow, Abzweig',
    },
    {
        id: '900205595',
        name: 'Waisenkrug',
    },
    {
        id: '900205620',
        name: 'Wittstock (Dosse), Dossepark',
    },
    {
        id: '900340930',
        name: 'Kerkow, Ausbau Mürower Str.',
    },
    {
        id: '900205539',
        name: 'Sandhorst',
    },
    {
        id: '900205635',
        name: 'Wittstock (Dosse), Polthierstr.',
    },
    {
        id: '900205643',
        name: 'Wittstock (Dosse), Rote-Mühle-W.-Halle',
    },
    {
        id: '900205640',
        name: 'Wittstock (Dosse), Röbeler Str.',
    },
    {
        id: '900205637',
        name: 'Wittstock (Dosse), Rackstädter Weg',
    },
    {
        id: '900205636',
        name: 'Wittstock (Dosse), Kyritzer Str.',
    },
    {
        id: '900205623',
        name: 'Wittstock (Dosse), Friedhof',
    },
    {
        id: '900205633',
        name: 'Wittstock (Dosse), Papenbrucher Chaussee',
    },
    {
        id: '900205631',
        name: 'Wittstock (Dosse), Meyenburger Chaussee',
    },
    {
        id: '900205630',
        name: 'Wittstock (Dosse), Center',
    },
    {
        id: '900205629',
        name: 'Wittstock (Dosse), Kuhstr.',
    },
    {
        id: '900205627',
        name: 'Wittstock (Dosse), Kettenstr. II',
    },
    {
        id: '900205625',
        name: 'Wittstock (Dosse), Jabeler Chaussee',
    },
    {
        id: '900205624',
        name: 'Wittstock (Dosse), Gymnasium',
    },
    {
        id: '900205594',
        name: 'Wahlendorf, Post',
    },
    {
        id: '900205592',
        name: 'Vollmersdorf',
    },
    {
        id: '900205588',
        name: 'Voigtsbrügge',
    },
    {
        id: '900205552',
        name: 'Schweinrich, Herzdorfer Str.',
    },
    {
        id: '900205558',
        name: 'Segeletz, Dorfmitte',
    },
    {
        id: '900205557',
        name: 'Seehof',
    },
    {
        id: '900205554',
        name: 'Sechzehneichen',
    },
    {
        id: '900205553',
        name: 'Schweinrich, Dorfstr.',
    },
    {
        id: '900205550',
        name: 'Schwanow',
    },
    {
        id: '900205587',
        name: 'Vielitz',
    },
    {
        id: '900205549',
        name: 'Schönfeld (OPR)',
    },
    {
        id: '900205548',
        name: 'Schönermark (OPR)',
    },
    {
        id: '900205547',
        name: 'Schönberg (bei Neuruppin), Kreuzung',
    },
    {
        id: '900205546',
        name: 'Schönberg (bei Neuruppin), Ausbau',
    },
    {
        id: '900205545',
        name: 'Schönberg (bei Kyritz), Neubau',
    },
    {
        id: '900205542',
        name: 'Scharfenberg (OPR), Ortsmitte',
    },
    {
        id: '900205541',
        name: 'Scharfenberg (OPR), Dossower Str.',
    },
    {
        id: '900205560',
        name: 'Sewekow, Schulstr.',
    },
    {
        id: '900205561',
        name: 'Sewekow, Urlauber-Siedlung',
    },
    {
        id: '900205562',
        name: 'Siebmannshorst, Ortsmitte',
    },
    {
        id: '900205563',
        name: 'Siebmannshorst, Friedhof',
    },
    {
        id: '900205585',
        name: 'Trieplatz',
    },
    {
        id: '900205584',
        name: 'Tramnitz',
    },
    {
        id: '900205577',
        name: 'Tarmow, Gaststätte',
    },
    {
        id: '900205575',
        name: 'Stüdenitz, Kirche',
    },
    {
        id: '900205574',
        name: 'Stüdenitz, Havelberger Str.',
    },
    {
        id: '900205573',
        name: 'Stüdenitz, Ausbau',
    },
    {
        id: '900205572',
        name: 'Strubensee',
    },
    {
        id: '900205570',
        name: 'Storbeck, Ausbau',
    },
    {
        id: '900340153',
        name: 'Frauenhagen (bei Angermünde), Ausbau',
    },
    {
        id: '900205565',
        name: 'Sieversdorf (OPR), Ortsmitte',
    },
    {
        id: '900341071',
        name: 'Schönermark (bei Passow), Ausbau',
    },
    {
        id: '900205645',
        name: 'Wittstock (Dosse), Sankt-Marien-Str.',
    },
    {
        id: '900205649',
        name: 'Wittstock (Dosse), Stadthalle',
    },
    {
        id: '900205650',
        name: 'Wittstock (Dosse), Steinstr.',
    },
    {
        id: '900205732',
        name: 'Alt Ruppin, Forststr.',
    },
    {
        id: '900205745',
        name: 'Kantow, Kreuzung',
    },
    {
        id: '900205744',
        name: 'Gnewikow, Am See',
    },
    {
        id: '900205743',
        name: 'Zernitz, Kita',
    },
    {
        id: '900205739',
        name: 'Rehfeld (OPR), Rehfelder Grund',
    },
    {
        id: '900205735',
        name: 'Griebsee',
    },
    {
        id: '900205734',
        name: 'Gnewikow, Ausbau',
    },
    {
        id: '900340994',
        name: 'Neukünkendorf, Siedlung',
    },
    {
        id: '900205731',
        name: 'Alt Ruppin, Anna-Petrat-Str.',
    },
    {
        id: '900205730',
        name: 'Tarmow, Kirche',
    },
    {
        id: '900205725',
        name: 'Schönberg (bei Neuruppin), Gaststätte',
    },
    {
        id: '900205722',
        name: 'Ganzer, Ortsmitte',
    },
    {
        id: '900205721',
        name: 'Wusterhausen (Dosse), Zeltplatz',
    },
    {
        id: '900205719',
        name: 'Wahlendorf, Abzweig',
    },
    {
        id: '900205717',
        name: 'Tornow (OPR), Dorf',
    },
    {
        id: '900205716',
        name: 'Ernstenswille, Teetzer Str.',
    },
    {
        id: '900205775',
        name: 'Dreetz, Kirche',
    },
    {
        id: '900206400',
        name: 'Alt Ruppin, Siedlung',
    },
    {
        id: '900206401',
        name: 'Neuruppin, Baumarkt',
    },
    {
        id: '900215183',
        name: 'Buddenhagen (PR)',
    },
    {
        id: '900340991',
        name: 'Neukünkendorf, Kindergarten',
    },
    {
        id: '900205034',
        name: 'Neustadt (Dosse), Azaleenweg',
    },
    {
        id: '900340993',
        name: 'Neukünkendorf, Mitte',
    },
    {
        id: '900215613',
        name: 'Meyenburg, Schule',
    },
    {
        id: '900215610',
        name: 'Meyenburg, Germania',
    },
    {
        id: '900205709',
        name: 'Zippelsförde',
    },
    {
        id: '900205651',
        name: 'Wittstock (Dosse), Tannenkoppelweg',
    },
    {
        id: '900205663',
        name: 'Wusterhausen (Dosse), Bhf',
    },
    {
        id: '900205673',
        name: 'Wittstock (Dosse), Burgstr.',
    },
    {
        id: '900205672',
        name: 'Zaatzke',
    },
    {
        id: '900205668',
        name: 'Wustrau, Ausbau',
    },
    {
        id: '900340158',
        name: 'Frauenhagen (bei Angermünde), Schmiedestr.',
    },
    {
        id: '900205708',
        name: 'Lentzke, Mühle',
    },
    {
        id: '900205661',
        name: 'Wulkow (bei Ruppin), Dorf',
    },
    {
        id: '900205658',
        name: 'Wittstock (Dosse), Rathaus',
    },
    {
        id: '900205656',
        name: 'Wittstock (Dosse), Kettenstr. I',
    },
    {
        id: '900205655',
        name: 'Woltersdorf (OPR)',
    },
    {
        id: '900205653',
        name: 'Wittstock (Dosse), Polthierschule',
    },
    {
        id: '900205652',
        name: 'Wittstock (Dosse), Uetersener Str.',
    },
    {
        id: '900205677',
        name: 'Zechow, Kirche',
    },
    {
        id: '900205678',
        name: 'Zempow',
    },
    {
        id: '900205679',
        name: 'Zermützel',
    },
    {
        id: '900205705',
        name: 'Wulkow (bei Ruppin), Parkstr.',
    },
    {
        id: '900205703',
        name: 'Schönberg (bei Neuruppin), Mitte',
    },
    {
        id: '900205702',
        name: 'Kränzlin, Trockenwerk',
    },
    {
        id: '900205699',
        name: 'Albertinenhof',
    },
    {
        id: '900205698',
        name: 'Gottberg, Abzweig',
    },
    {
        id: '900205695',
        name: 'Wallitz, Ausbau',
    },
    {
        id: '900205694',
        name: 'Neustadt (Dosse), Sandstück',
    },
    {
        id: '900205691',
        name: 'Barenthin, Kreuzung',
    },
    {
        id: '900205690',
        name: 'Görike, Kirche',
    },
    {
        id: '900205689',
        name: 'Barenthin, Dorf',
    },
    {
        id: '900205688',
        name: 'Barenthin, Pflaumenweg',
    },
    {
        id: '900205687',
        name: 'Barenthin, Abbau',
    },
    {
        id: '900205685',
        name: 'Zühlen',
    },
    {
        id: '900205684',
        name: 'Zootzen (OPR)',
    },
    {
        id: '900205681',
        name: 'Zernitz, Dorf',
    },
    {
        id: '900205540',
        name: 'Scharfenberg (OPR), Bauhofweg',
    },
    {
        id: '900205538',
        name: 'Rüthnick',
    },
    {
        id: '900205379',
        name: 'Kuhhorst',
    },
    {
        id: '900340906',
        name: 'Hohenreinkendorf, Nord',
    },
    {
        id: '900341223',
        name: 'Tantow, Ausbau',
    },
    {
        id: '900205388',
        name: 'Kyritz, Prignitz-Center',
    },
    {
        id: '900205383',
        name: 'Kyritz, Holzhausener Str.',
    },
    {
        id: '900205378',
        name: 'Kuhburgsberg',
    },
    {
        id: '900205395',
        name: 'Langen, Neubau',
    },
    {
        id: '900205375',
        name: 'Küdow',
    },
    {
        id: '900205373',
        name: 'Krangen',
    },
    {
        id: '900205372',
        name: 'Kränzlin, Dorf',
    },
    {
        id: '900205370',
        name: 'Kötzlin',
    },
    {
        id: '900205368',
        name: 'Köpernitz (OPR)',
    },
    {
        id: '900205363',
        name: 'Klosterhof',
    },
    {
        id: '900205396',
        name: 'Leddin',
    },
    {
        id: '900205409',
        name: 'Langen, Dorfstr.',
    },
    {
        id: '900205417',
        name: 'Küdow, Ortsmitte',
    },
    {
        id: '900205416',
        name: 'Luhme',
    },
    {
        id: '900205415',
        name: 'Lüchfeld',
    },
    {
        id: '900340907',
        name: 'Hohenreinkendorf, Süd',
    },
    {
        id: '900205413',
        name: 'Lögow, Schule',
    },
    {
        id: '900205412',
        name: 'Lögow, Dorf',
    },
    {
        id: '900340905',
        name: 'Hohenreinkendorf, Mitte',
    },
    {
        id: '900205407',
        name: 'Linowsee',
    },
    {
        id: '900205397',
        name: 'Lentzke, Kirche',
    },
    {
        id: '900205406',
        name: 'Linow',
    },
    {
        id: '900205405',
        name: 'Lindow (Mark), Schule',
    },
    {
        id: '900205404',
        name: 'Lindow (Mark), Rheinsberger Str.',
    },
    {
        id: '900205403',
        name: 'Lindow (Mark), Markt',
    },
    {
        id: '900205399',
        name: 'Lichtenberg (OPR)',
    },
    {
        id: '900205398',
        name: 'Lentzke, Siedlung',
    },
    {
        id: '900205362',
        name: 'Klosterheide',
    },
    {
        id: '900205361',
        name: 'Kleinzerlang, Kita',
    },
    {
        id: '900205360',
        name: 'Kleinzerlang, Kirche',
    },
    {
        id: '900205321',
        name: 'Heilbrunn',
    },
    {
        id: '900205331',
        name: 'Herzberg (Mark), Markt',
    },
    {
        id: '900205330',
        name: 'Herzberg (Mark), Ausbau',
    },
    {
        id: '900205328',
        name: 'Heinrichsdorf (bei Neuruppin)',
    },
    {
        id: '900205327',
        name: 'Heimland',
    },
    {
        id: '900205326',
        name: 'Heiligengrabe, Schule',
    },
    {
        id: '900205325',
        name: 'Emilienhof, Ausbau',
    },
    {
        id: '900205320',
        name: 'Hakenberg',
    },
    {
        id: '900205359',
        name: 'Klein Haßlow',
    },
    {
        id: '900205319',
        name: 'Gustavsruh (OPR)',
    },
    {
        id: '900205318',
        name: 'Gühlen Glienicke',
    },
    {
        id: '900205317',
        name: 'Gühlen',
    },
    {
        id: '900205314',
        name: 'Großzerlang, Dorf',
    },
    {
        id: '900205313',
        name: 'Groß Haßlow',
    },
    {
        id: '900205312',
        name: 'Gottberg, Kreuzung',
    },
    {
        id: '900340136',
        name: 'Angermünde, Blumberger Mühle',
    },
    {
        id: '900341228',
        name: 'Tantow, Siedlungsweg',
    },
    {
        id: '900205335',
        name: 'Hindenberg (OPR)',
    },
    {
        id: '900205337',
        name: 'Holzhausen, Dorf',
    },
    {
        id: '900205338',
        name: 'Jabel, Dorfplatz',
    },
    {
        id: '900205358',
        name: 'Kerzlin',
    },
    {
        id: '900205355',
        name: 'Katerbow, Siedlung',
    },
    {
        id: '900205354',
        name: 'Katerbow, Dorfplatz',
    },
    {
        id: '900205353',
        name: 'Karwesee, Ausbau',
    },
    {
        id: '900205352',
        name: 'Karwesee, Anger',
    },
    {
        id: '900205351',
        name: 'Karwe (OPR), Ortsmitte',
    },
    {
        id: '900205349',
        name: 'Karl-Marx-Hof',
    },
    {
        id: '900205347',
        name: 'Kampehl, Gewerbegebiet',
    },
    {
        id: '900205346',
        name: 'Kampehl, Ortsmitte',
    },
    {
        id: '900205345',
        name: 'Kagar, Kreuzung',
    },
    {
        id: '900205342',
        name: 'Joachimshof',
    },
    {
        id: '900205341',
        name: 'Jahnberge',
    },
    {
        id: '900205340',
        name: 'Jabel, Wittstocker Chaussee',
    },
    {
        id: '900205339',
        name: 'Holzhausen, Gaststätte',
    },
    {
        id: '900205418',
        name: 'Manker, Gaststätte',
    },
    {
        id: '900205419',
        name: 'Manker, Kirche',
    },
    {
        id: '900205420',
        name: 'Garz (OPR), Schäferei',
    },
    {
        id: '900205493',
        name: 'Niemerlang, Ausbau',
    },
    {
        id: '900205506',
        name: 'Papenbruch, Kirche',
    },
    {
        id: '900205502',
        name: 'Papenbruch, Dorfteich',
    },
    {
        id: '900205498',
        name: 'Paalzow',
    },
    {
        id: '900205496',
        name: 'Nietwerder, Ortsmitte',
    },
    {
        id: '900205494',
        name: 'Niemerlang, Kirche',
    },
    {
        id: '900205490',
        name: 'Neustadt (Dosse), Schule',
    },
    {
        id: '900205479',
        name: 'Neuruppin, Schloßgarten',
    },
    {
        id: '900205489',
        name: 'Neustadt (Dosse), Robert-Koch-Str.',
    },
    {
        id: '900205486',
        name: 'Neuruppin, Wohnkomplex III',
    },
    {
        id: '900205485',
        name: 'Neuruppin, Wittstocker Allee',
    },
    {
        id: '900205484',
        name: 'Neuruppin, Treskower Ring',
    },
    {
        id: '900205483',
        name: 'Neuruppin, E.-Dieckhoff-Str.',
    },
    {
        id: '900341011',
        name: 'Passow, Schulstr.',
    },
    {
        id: '900205507',
        name: 'Pfalzheim',
    },
    {
        id: '900205509',
        name: 'Prebelow',
    },
    {
        id: '900205510',
        name: 'Protzen, Dorfstr.',
    },
    {
        id: '900205511',
        name: 'Protzen, Schule',
    },
    {
        id: '900205535',
        name: 'Rossow, Dudel',
    },
    {
        id: '900205533',
        name: 'Rossow, Anger',
    },
    {
        id: '900205532',
        name: 'Rohrlack',
    },
    {
        id: '900341074',
        name: 'Schönermark (bei Passow), Mitte',
    },
    {
        id: '900205528',
        name: 'Rheinsberg, Schule',
    },
    {
        id: '900205527',
        name: 'Rheinsberg, Schloss',
    },
    {
        id: '900205521',
        name: 'Rheinsberg Glienicke',
    },
    {
        id: '900205520',
        name: 'Rehfeld (OPR), Dorf',
    },
    {
        id: '900205517',
        name: 'Rägelin, Schule',
    },
    {
        id: '900205515',
        name: 'Rägelin, Kita',
    },
    {
        id: '900205513',
        name: 'Radensleben, Dorf',
    },
    {
        id: '900205481',
        name: 'Neuruppin, Steinstr.',
    },
    {
        id: '900205478',
        name: 'Neuruppin, H.-Riemschneider-Str.',
    },
    {
        id: '900205422',
        name: 'Schönberg (bei Kyritz), Wulkower Str.',
    },
    {
        id: '900205445',
        name: 'Neuruppin, Bücklingstr.',
    },
    {
        id: '900205443',
        name: 'Neuruppin, Betriebshof ÖPNV',
    },
    {
        id: '900205441',
        name: 'Neuruppin, Altruppiner Allee',
    },
    {
        id: '900205438',
        name: 'Neuendorf (OPR)',
    },
    {
        id: '900205435',
        name: 'Neuglienicke, Kreuzung',
    },
    {
        id: '900205434',
        name: 'Neuglienicke, Forsthaus',
    },
    {
        id: '900205432',
        name: 'Netzeband, Kirche',
    },
    {
        id: '900205430',
        name: 'Nackel, Ortsmitte',
    },
    {
        id: '900205429',
        name: 'Nackel, Läsikow',
    },
    {
        id: '900205428',
        name: 'Molchow',
    },
    {
        id: '900205427',
        name: 'Möckern',
    },
    {
        id: '900205426',
        name: 'Michaelisbruch',
    },
    {
        id: '900205425',
        name: 'Metzelthin (OPR), Ortsmitte',
    },
    {
        id: '900205449',
        name: 'Neuruppin, Fehrbelliner Hof',
    },
    {
        id: '900205451',
        name: 'Neuruppin, Friedhof',
    },
    {
        id: '900205476',
        name: 'Neuruppin, REIZ',
    },
    {
        id: '900205474',
        name: 'Neuruppin, Potsdamer Platz',
    },
    {
        id: '900205472',
        name: 'Neuruppin, Pestalozzischule',
    },
    {
        id: '900205471',
        name: 'Neuruppin, Oberstufenzentrum',
    },
    {
        id: '900205467',
        name: 'Neuruppin, Kreisverwaltung',
    },
    {
        id: '900205465',
        name: 'Neuruppin, Krankenhaus',
    },
    {
        id: '900205461',
        name: 'Neuruppin, Museum',
    },
    {
        id: '900205457',
        name: 'Neuruppin, Gildenhaller Allee',
    },
    {
        id: '900205455',
        name: 'Neuruppin, Gildenhall Landbau',
    },
    {
        id: '900205454',
        name: 'Neuruppin, Gildenhall',
    },
    {
        id: '900220495',
        name: 'Töplitz, Sportplatz',
    },
    {
        id: '900205568',
        name: 'Stöffiner Berg',
    },
    {
        id: '900205567',
        name: 'Stöffin',
    },
    {
        id: '900205578',
        name: 'Teetz, Kirche',
    },
    {
        id: '900205581',
        name: 'Tetschendorf, Schloß',
    },
    {
        id: '900205491',
        name: 'Neustadt (Dosse), Sportcasino',
    },
    {
        id: '900205504',
        name: 'Neuruppin, Trenckmannstr.',
    },
    {
        id: '900205495',
        name: 'Neuruppin, Ev. Schule',
    },
    {
        id: '900205508',
        name: 'Plänitz',
    },
    {
        id: '900341253',
        name: 'Wartin, Ausbau',
    },
    {
        id: '900205529',
        name: 'Rheinsberg, Untermühle',
    },
    {
        id: '900205519',
        name: 'Randow',
    },
    {
        id: '900205514',
        name: 'Rägelin, Kirche',
    },
    {
        id: '900340169',
        name: 'Gartz, Ausbau',
    },
    {
        id: '900222099',
        name: 'Hohenwerbig',
    },
    {
        id: '900215336',
        name: 'Griffenhagen',
    },
    {
        id: '900321301',
        name: 'Alt Rosenthal',
    },
    {
        id: '900350390',
        name: 'Joachimsthal, Am Spring',
    },
    {
        id: '900220494',
        name: 'Töplitz, Dorfplatz',
    },
    {
        id: '900230213',
        name: 'Potsdam, Wublitzstr./Am Bahnhof',
    },
    {
        id: '900220493',
        name: 'Töplitz, Kirschweg',
    },
    {
        id: '900220492',
        name: 'Töplitz, Leester Str.',
    },
    {
        id: '900203844',
        name: 'Oranienburg, Rewestr.',
    },
    {
        id: '900203841',
        name: 'Oranienburg, Flotowstr.',
    },
    {
        id: '900340176',
        name: 'Gartz, Siedlung',
    },
    {
        id: '900340904',
        name: 'Hohenreinkendorf, Abzweig',
    },
    {
        id: '900340911',
        name: 'Hohenselchow, Kreuzung Ost',
    },
    {
        id: '900205692',
        name: 'Görike, Ausbau',
    },
    {
        id: '900205726',
        name: 'Neuruppin, Fehrbelliner Tor',
    },
    {
        id: '900415438',
        name: 'Drasdo, Kreuzung',
    },
    {
        id: '900340033',
        name: 'Blumberg (UM), Mitte',
    },
    {
        id: '900340184',
        name: 'Gellmersdorf, Mitte',
    },
    {
        id: '900205263',
        name: 'Dammkrug, Abzweig',
    },
    {
        id: '900205259',
        name: 'Christdorf',
    },
    {
        id: '900205268',
        name: 'Dechtow',
    },
    {
        id: '900341200',
        name: 'Stendell, Gemeindeamt',
    },
    {
        id: '900205280',
        name: 'Dreetz, Schule',
    },
    {
        id: '900205270',
        name: 'Dessow, Dorfteich',
    },
    {
        id: '900340950',
        name: 'Luckow',
    },
    {
        id: '900340107',
        name: 'Angermünde, Chausseehaus',
    },
    {
        id: '900340989',
        name: 'Gellmersdorf, Am Stadtberg',
    },
    {
        id: '900205117',
        name: 'Fehrbellin, Grundschule',
    },
    {
        id: '900340992',
        name: 'Neukünkendorf, Kreuzung',
    },
    {
        id: '900340101',
        name: 'Angermünde, Bahnüberfahrtshaus',
    },
    {
        id: '900205208',
        name: 'Alt Ruppin, Kirchplatz',
    },
    {
        id: '900205207',
        name: 'Alt Ruppin, Hubertus',
    },
    {
        id: '900205311',
        name: 'Gottberg, Dorf',
    },
    {
        id: '900205424',
        name: 'Metzelthin (OPR), Abzweig',
    },
    {
        id: '900205436',
        name: 'Neu Lutterow, Abzweig',
    },
    {
        id: '900205464',
        name: 'Neuruppin, Kränzliner Str.',
    },
    {
        id: '900341081',
        name: 'Schönow (UM), Mitte',
    },
    {
        id: '900205402',
        name: 'Lindow (Mark), Kirche',
    },
    {
        id: '900205350',
        name: 'Karstedtshof, Ortsmitte',
    },
    {
        id: '900205323',
        name: 'Heiligengrabe, Pritzwalker Str.',
    },
    {
        id: '900341202',
        name: 'Stendell, Mitte',
    },
    {
        id: '900205394',
        name: 'Langen, Kirche',
    },
    {
        id: '900205389',
        name: 'Kyritz, Rehfelder Weg',
    },
    {
        id: '900340918',
        name: 'Jamikow',
    },
    {
        id: '900340943',
        name: 'Kummerow (UM), Ausbau',
    },
    {
        id: '900205366',
        name: 'Königsberg, Wohnblock',
    },
    {
        id: '900341277',
        name: 'Wolletz, Klinik',
    },
    {
        id: '900470255',
        name: 'Cottbus, Sielow Windmühlenweg',
    },
    {
        id: '900205753',
        name: 'Frankendorf (OPR), Neudorf',
    },
    {
        id: '900470243',
        name: 'Cottbus, Schlichow Dorfstr.',
    },
    {
        id: '900470134',
        name: 'Cottbus, Dissenchen Haasower Str.',
    },
    {
        id: '900470138',
        name: 'Cottbus, Dissenchen Turnstr.',
    },
    {
        id: '900470135',
        name: 'Cottbus, Dissenchen Wendeplatz',
    },
    {
        id: '900205118',
        name: 'Karstedtshof, Abzweig',
    },
    {
        id: '900470133',
        name: 'Cottbus, Dissenchen Birkenstr.',
    },
    {
        id: '900470171',
        name: 'Cottbus, Heizkraftwerk',
    },
    {
        id: '900470107',
        name: 'Cottbus, An der Pastoa',
    },
    {
        id: '900470118',
        name: 'Cottbus, Bleyerstr.',
    },
    {
        id: '900230119',
        name: 'Potsdam, Rückertstr.',
    },
    {
        id: '900470120',
        name: 'Cottbus, Park Branitz',
    },
    {
        id: '900470245',
        name: 'Cottbus, Schlichow West',
    },
    {
        id: '900470169',
        name: 'Cottbus, Heidesiedlung',
    },
    {
        id: '900470176',
        name: 'Cottbus, Drewitzer Str.',
    },
    {
        id: '900230118',
        name: 'Potsdam, Abzweig nach Nedlitz',
    },
    {
        id: '900230120',
        name: 'Potsdam, Kirche Bornim',
    },
    {
        id: '900470285',
        name: 'Cottbus, Tierpark',
    },
    {
        id: '900470127',
        name: 'Cottbus, Branitzer Siedlung',
    },
    {
        id: '900445612',
        name: 'Gubin (PL), Busbahnhof',
    },
    {
        id: '900470233',
        name: 'Cottbus, Peitzer Str.',
    },
    {
        id: '900205771',
        name: 'Werder (bei Neuruppin), Ahornallee',
    },
    {
        id: '900470272',
        name: 'Cottbus, Straupitzer Str.',
    },
    {
        id: '900470305',
        name: 'Cottbus, Schmellwitzer Str.',
    },
    {
        id: '900470239',
        name: 'Cottbus, Saspow Kleine Str.',
    },
    {
        id: '900470146',
        name: 'Cottbus, Eigene Scholle',
    },
    {
        id: '900470238',
        name: 'Cottbus, Saspow Fröbelstr.',
    },
    {
        id: '900203509',
        name: 'Kremmen, Scheunenviertel',
    },
    {
        id: '900470213',
        name: 'Cottbus, M.-Domaskojc-Str./Gymnasium',
    },
    {
        id: '900470320',
        name: 'Cottbus, Sielow Erlengrund',
    },
    {
        id: '900230121',
        name: 'Potsdam, Lindstedter Chaussee',
    },
    {
        id: '900470103',
        name: 'Cottbus, Am Doll',
    },
    {
        id: '900470172',
        name: 'Cottbus, Hermann-Hammerschmidt-Str.',
    },
    {
        id: '900230125',
        name: 'Potsdam, Ribbeckstr.',
    },
    {
        id: '900470101',
        name: 'Cottbus, Albrecht-Dürer-Str.',
    },
    {
        id: '900470247',
        name: 'Cottbus, Gewerbeweg',
    },
    {
        id: '900470220',
        name: 'Cottbus, Nordparkstr.',
    },
    {
        id: '900470164',
        name: 'Cottbus, Guhrower Str./Cottbus Center',
    },
    {
        id: '900445885',
        name: 'Kolkwitz, Süd',
    },
    {
        id: '900445888',
        name: 'Kolkwitz, Klinikum',
    },
    {
        id: '900470316',
        name: 'Cottbus, Lauchhammer Str.',
    },
    {
        id: '900470143',
        name: 'Cottbus, Döbbrick Süd',
    },
    {
        id: '900470142',
        name: 'Cottbus, Döbbrick Kiebitzweg',
    },
    {
        id: '900445830',
        name: 'Klein Gaglow, Dorfstr.',
    },
    {
        id: '900470139',
        name: 'Cottbus, Döbbrick Altes Dorf',
    },
    {
        id: '900445457',
        name: 'Cottbus, Gallinchen Spreemarkt',
    },
    {
        id: '900230079',
        name: 'Potsdam, Anhaltstr.',
    },
    {
        id: '900470276',
        name: 'Cottbus, Steinteichmühle',
    },
    {
        id: '900470204',
        name: 'Cottbus, Maiberg Ost',
    },
    {
        id: '900445688',
        name: 'Hänchen, Pappelallee',
    },
    {
        id: '900470314',
        name: 'Cottbus, Döbbrick Schülerverkehr',
    },
    {
        id: '900470313',
        name: 'Cottbus, Döbbrick Ost',
    },
    {
        id: '900470140',
        name: 'Cottbus, Döbbrick Am Spreebogen',
    },
    {
        id: '900230078',
        name: 'Potsdam, Alt Nowawes',
    },
    {
        id: '900470202',
        name: 'Cottbus, Maiberg Friedhof',
    },
    {
        id: '900470203',
        name: 'Cottbus, Maiberg Mitte',
    },
    {
        id: '900230002',
        name: 'Potsdam, Pirschheide',
    },
    {
        id: '900445899',
        name: 'Kolkwitz, Technologiepark',
    },
    {
        id: '900230060',
        name: 'Potsdam, Luftschiffhafen',
    },
    {
        id: '900470106',
        name: 'Cottbus, Am Priorgraben',
    },
    {
        id: '900470278',
        name: 'Cottbus, Ströbitzer Schulstr.',
    },
    {
        id: '900470156',
        name: 'Cottbus, Friedrich-Hebbel-Str.',
    },
    {
        id: '900470149',
        name: 'Cottbus, Ewald-Müller-Str.',
    },
    {
        id: '900470187',
        name: 'Cottbus, Klein Gaglower Str.',
    },
    {
        id: '900445886',
        name: 'Kolkwitz, Bergsicherung',
    },
    {
        id: '900445887',
        name: 'Kolkwitz, Innungskrankenkasse',
    },
    {
        id: '900470188',
        name: 'Cottbus, Klein Ströbitz',
    },
    {
        id: '900445546',
        name: 'Cottbus, Groß Gaglow Seegraben Handelshof',
    },
    {
        id: '900470279',
        name: 'Cottbus, Südfriedhof',
    },
    {
        id: '900445548',
        name: 'Cottbus, Groß Gaglow Seegraben Nord',
    },
    {
        id: '900470228',
        name: 'Cottbus, Priorstr.',
    },
    {
        id: '900470175',
        name: 'Cottbus, Hufelandstr.',
    },
    {
        id: '900470282',
        name: 'Cottbus, Thiemstr./Klinikum',
    },
    {
        id: '900470225',
        name: 'Cottbus, Platz der Freundschaft',
    },
    {
        id: '900470257',
        name: 'Cottbus, Sielow Feuerwehr',
    },
    {
        id: '900446384',
        name: 'Striesow, Glocke',
    },
    {
        id: '900445307',
        name: 'Dissen, Ausbau',
    },
    {
        id: '900445309',
        name: 'Dissen, Nord',
    },
    {
        id: '900445311',
        name: 'Dissen, Waage',
    },
    {
        id: '900445308',
        name: 'Dissen, Gasthaus',
    },
    {
        id: '900210525',
        name: 'Ketzin (Havel), Havelweg',
    },
    {
        id: '900311475',
        name: 'Müllrose, Bhf',
    },
    {
        id: '900445264',
        name: 'Burg, Hotel zur Bleiche',
    },
    {
        id: '900445263',
        name: 'Burg, Hotel zum Spreewald',
    },
    {
        id: '900210550',
        name: 'Paretz, Knoblaucher Str.',
    },
    {
        id: '900446196',
        name: 'Schmogrow, Burger Str.',
    },
    {
        id: '900445310',
        name: 'Dissen, Sportplatz',
    },
    {
        id: '900445462',
        name: 'Glinzig, Str. zur Koselmühle',
    },
    {
        id: '900340239',
        name: 'Klein Dölln, Forstsiedlung',
    },
    {
        id: '900445413',
        name: 'Fehrow, Gasthaus',
    },
    {
        id: '900210552',
        name: 'Paretz, Kindergarten',
    },
    {
        id: '900446197',
        name: 'Schmogrow, Dorfstr.',
    },
    {
        id: '900210553',
        name: 'Paretz, Schloss',
    },
    {
        id: '000008079454',
        name: 'Stralsund, Bahnhofstr.',
    },
    {
        id: '900445412',
        name: 'Fehrow, Gartenstr.',
    },
    {
        id: '900210524',
        name: 'Zachow, Abzweig Tremmen',
    },
    {
        id: '900210518',
        name: 'Vorketzin',
    },
    {
        id: '900446503',
        name: 'Werben (SPN), Rubener Str.',
    },
    {
        id: '900446170',
        name: 'Ruben',
    },
    {
        id: '900445656',
        name: 'Guhrow, Kreuzung nach Ruben',
    },
    {
        id: '900446502',
        name: 'Werben (SPN), Müschener Weg',
    },
    {
        id: '900445230',
        name: 'Briesen (SPN), Schule',
    },
    {
        id: '900445229',
        name: 'Briesen (SPN), Guhrower Str.',
    },
    {
        id: '900415353',
        name: 'Falkenberg/E., Friedrich-List-Str.',
    },
    {
        id: '900446504',
        name: 'Werben (SPN), Alte Schule',
    },
    {
        id: '900260803',
        name: 'Königs Wusterhausen, Cottbuser Str.',
    },
    {
        id: '900261541',
        name: 'Lübben, Majoransheide',
    },
    {
        id: '900260561',
        name: 'Fürstlich Drehna, Crinitzer Str.',
    },
    {
        id: '900445279',
        name: 'Burg, Kauper Nordweg',
    },
    {
        id: '900415464',
        name: 'Fermerswalde, Bhf',
    },
    {
        id: '900446500',
        name: 'Werben (SPN), Ausbau',
    },
    {
        id: '900445276',
        name: 'Burg, Willischzaweg',
    },
    {
        id: '900445260',
        name: 'Burg, Freizeitsee',
    },
    {
        id: '900445272',
        name: 'Burg, Schmogrower Str.',
    },
    {
        id: '900445274',
        name: 'Burg, Str. zur Therme',
    },
    {
        id: '900470105',
        name: 'Cottbus, Am Nordrand',
    },
    {
        id: '900470117',
        name: 'Cottbus, Beuchstr.',
    },
    {
        id: '900220039',
        name: 'Teltow, Anne-Frank-Schule',
    },
    {
        id: '900470119',
        name: 'Cottbus, Bonnaskenplatz',
    },
    {
        id: '900470170',
        name: 'Cottbus, Heinrich-Hertz-Str.',
    },
    {
        id: '900470246',
        name: 'Cottbus, Schmellwitz Anger',
    },
    {
        id: '900470111',
        name: 'Cottbus, Burger Chaussee/Campus Nord',
    },
    {
        id: '900470109',
        name: 'Cottbus, Burger Chaussee/TIP',
    },
    {
        id: '900470110',
        name: 'Cottbus, Burger Chaussee/Süd',
    },
    {
        id: '900470222',
        name: 'Cottbus, Nordring/Am TKC',
    },
    {
        id: '900470303',
        name: 'Cottbus, Zimmerstr.',
    },
    {
        id: '900470317',
        name: 'Cottbus, R.-Luxemburg-Str./Neue Str.',
    },
    {
        id: '900470301',
        name: 'Cottbus, Zahsower Str./Sportplatz',
    },
    {
        id: '900470295',
        name: 'Cottbus, Wilhelm-Nevoigt-Platz',
    },
    {
        id: '900470401',
        name: 'Cottbus, Lortzingstr.',
    },
    {
        id: '900470219',
        name: 'Cottbus, Nordfriedhof',
    },
    {
        id: '900470216',
        name: 'Cottbus, Neue Str.',
    },
    {
        id: '070101030312',
        name: 'Ben-Gurion-Str.',
    },
    {
        id: '900470113',
        name: 'Cottbus, Bärenbrücker Str.',
    },
    {
        id: '900470217',
        name: 'Cottbus, Neue Str./M.-Domaskojc-Str.',
    },
    {
        id: '900470407',
        name: 'Cottbus, Betriebshof Schmellwitz',
    },
    {
        id: '900435357',
        name: 'Neupetershain, Zum Waldhof',
    },
    {
        id: '900435556',
        name: 'Neupetershain, Alte Försterei',
    },
    {
        id: '900435349',
        name: 'Neupetershain, Kauscher Weg',
    },
    {
        id: '900230218',
        name: 'Potsdam, Sacrow-Paretzer Kanal',
    },
    {
        id: '900435348',
        name: 'Neupetershain, Gemeindeverwaltung',
    },
    {
        id: '900445278',
        name: 'Burg, SpreewaldTherme',
    },
    {
        id: '900445226',
        name: 'Briesen (SPN), Akazienweg',
    },
    {
        id: '900220861',
        name: 'Potsdam, Kirche Uetz',
    },
    {
        id: '900470268',
        name: 'Cottbus, Stadthalle/Puschkinpromenade',
    },
    {
        id: '900470250',
        name: 'Cottbus, Ströbitzer Weg',
    },
    {
        id: '900470337',
        name: 'Cottbus, Stadthalle/Post',
    },
    {
        id: '900470293',
        name: 'Cottbus, Schillerstr.',
    },
    {
        id: '900470115',
        name: 'Cottbus, Waisenstr.',
    },
    {
        id: '900470332',
        name: 'Cottbus, Görlitzer Str. (Süd)',
    },
    {
        id: '900470132',
        name: 'Cottbus, Ausbesserungswerk',
    },
    {
        id: '900470193',
        name: 'Cottbus, Görlitzer Str. (West)',
    },
    {
        id: '900445889',
        name: 'Kolkwitz, Koschendorfer Str.',
    },
    {
        id: '900445893',
        name: 'Kolkwitz, Parzellenstr.',
    },
    {
        id: '900230223',
        name: 'Potsdam, Schwimmhalle am Brauhausberg',
    },
    {
        id: '900310563',
        name: 'Erkner, Kirche',
    },
    {
        id: '900445740',
        name: 'Klein Düben',
    },
    {
        id: '900310621',
        name: 'Erkner, Schützenwäldchen',
    },
    {
        id: '900311560',
        name: 'Schernsdorf, Gaststätte',
    },
    {
        id: '900230037',
        name: 'Potsdam, Spindelstr.',
    },
    {
        id: '900230163',
        name: 'Potsdam, Sportplatz Bornim',
    },
    {
        id: '900320267',
        name: 'Rüdersdorf, Klinik Am See',
    },
    {
        id: '900230116',
        name: 'Potsdam, Schneiderremise',
    },
    {
        id: '900310556',
        name: 'Erkner, Bergstr.',
    },
    {
        id: '900415196',
        name: 'Finsterwalde, Am Langen Hacken',
    },
    {
        id: '900310956',
        name: 'Neu Zittau, Stäbchener Weg',
    },
    {
        id: '900230137',
        name: 'Potsdam, Schloss Sanssouci',
    },
    {
        id: '900310954',
        name: 'Neu Zittau, Burig Waldstr.',
    },
    {
        id: '900230008',
        name: 'Potsdam, Schloßstr.',
    },
    {
        id: '900310951',
        name: 'Neu Zittau, Kirche',
    },
    {
        id: '900310568',
        name: 'Erkner, Schönschornstein',
    },
    {
        id: '900220167',
        name: 'Teltow, Schenkendorfer Weg',
    },
    {
        id: '900205044',
        name: 'Kyritz, Mühlenstr.',
    },
    {
        id: '900310955',
        name: 'Neu Zittau, Spreebord',
    },
    {
        id: '900205751',
        name: 'Kyritz, Werner-von-Siemens-Str.',
    },
    {
        id: '900053371',
        name: 'Stahnsdorfer Brücke',
    },
    {
        id: '900310573',
        name: 'Erkner, Friedhof',
    },
    {
        id: '900310560',
        name: 'Erkner, G.-Hauptmann-Str.',
    },
    {
        id: '900230091',
        name: 'Potsdam, Sternwarte',
    },
    {
        id: '900310558',
        name: 'Erkner, Buchhorster Str.',
    },
    {
        id: '900310567',
        name: 'Erkner, Karutzhöhe',
    },
    {
        id: '900310562',
        name: 'Erkner, City-Center',
    },
    {
        id: '900053303',
        name: 'Steinstücken',
    },
    {
        id: '900310578',
        name: 'Woltersdorf (LOS), Rathaus',
    },
    {
        id: '900310550',
        name: 'Erkner, Siedlung',
    },
    {
        id: '900230102',
        name: 'Potsdam, Stahnsdorfer Str./August-Bebel-Str.',
    },
    {
        id: '900310534',
        name: 'Woltersdorf (LOS), Chausseehaus',
    },
    {
        id: '900205145',
        name: 'Kyritz, Stephanusstr.',
    },
    {
        id: '900310572',
        name: 'Erkner, Woltersdorfer Landstr.',
    },
    {
        id: '900205752',
        name: 'Neustadt (Dosse), Hauptgestüt',
    },
    {
        id: '900310565',
        name: 'Erkner, Hohenbinde',
    },
    {
        id: '900310561',
        name: 'Erkner, Hohenbinder Str.',
    },
    {
        id: '900310953',
        name: 'Neu Zittau, Burig Jägerstr.',
    },
    {
        id: '900310847',
        name: 'Grünheide, Alt Buchhorst E37',
    },
    {
        id: '900310889',
        name: 'Kagel, Möllensee',
    },
    {
        id: '900310890',
        name: 'Kagel, Möllensee Kreuzung',
    },
    {
        id: '900230081',
        name: 'Potsdam, Schlaatzstr.',
    },
    {
        id: '900310882',
        name: 'Kagel, Elsensee',
    },
    {
        id: '900310846',
        name: 'Grünheide, Alt Buchhorst',
    },
    {
        id: '900310854',
        name: 'Grünheide, Rosenberg',
    },
    {
        id: '900230170',
        name: 'Potsdam, Schlegelstr./Pappelallee',
    },
    {
        id: '900310883',
        name: 'Kagel, Elsenstau',
    },
    {
        id: '900310857',
        name: 'Grünheide, Waldpromenade',
    },
    {
        id: '900310881',
        name: 'Kagel, Dorfplatz',
    },
    {
        id: '900310894',
        name: 'Kienbaum, Abzweig',
    },
    {
        id: '900310888',
        name: 'Kagel, Lichtenower Weg',
    },
    {
        id: '900230028',
        name: 'S Babelsberg/Schulstr.',
    },
    {
        id: '900310885',
        name: 'Kagel, Fließbrücke',
    },
    {
        id: '900230144',
        name: 'Potsdam, Scheffelstr.',
    },
    {
        id: '900230094',
        name: 'Potsdam, Karl-Liebknecht-Stadion',
    },
    {
        id: '900230048',
        name: 'Potsdam, Schloss Babelsberg',
    },
    {
        id: '900311042',
        name: 'Steinfurt, Bungalowsiedlung',
    },
    {
        id: '900310025',
        name: 'Gosen, Müggelpark',
    },
    {
        id: '900311443',
        name: 'Kieselwitz',
    },
    {
        id: '900311405',
        name: 'Fünfeichen, Schule',
    },
    {
        id: '900310836',
        name: 'Gosen, Eichwalder Str.',
    },
    {
        id: '900310950',
        name: 'Neu Zittau, Kesselberg',
    },
    {
        id: '900310952',
        name: 'Neu Zittau, Kita',
    },
    {
        id: '900310949',
        name: 'Neu Zittau, Berliner Str.',
    },
    {
        id: '900311043',
        name: 'Steinfurt, Vorwerk',
    },
    {
        id: '900205042',
        name: 'Kyritz, Str. der Jugend',
    },
    {
        id: '900260165',
        name: 'Wernsdorf, Am Chausseehaus',
    },
    {
        id: '900310845',
        name: 'Grünheide, Marktplatz',
    },
    {
        id: '900310855',
        name: 'Grünheide, Schlangenluch',
    },
    {
        id: '900310844',
        name: 'Grünheide, Kreuzung',
    },
    {
        id: '900310856',
        name: 'Grünheide, Schule',
    },
    {
        id: '900210420',
        name: 'Retzow (HVL), Feuerwehr',
    },
    {
        id: '900230138',
        name: 'Potsdam, Schloss Cecilienhof',
    },
    {
        id: '900310555',
        name: 'Erkner, Autobahn',
    },
    {
        id: '900350886',
        name: 'Seefeld (Mark), Löhmer Chaussee',
    },
    {
        id: '900470304',
        name: 'Cottbus, Sachsendorf',
    },
    {
        id: '900230117',
        name: 'Potsdam, TÜV-Akademie',
    },
    {
        id: '900470249',
        name: 'Cottbus, Schwarzheider Str.',
    },
    {
        id: '900230082',
        name: 'Potsdam, Übergang',
    },
    {
        id: '900230099',
        name: 'Potsdam, Unter den Eichen',
    },
    {
        id: '900230187',
        name: 'Potsdam, Weinmeisterweg',
    },
    {
        id: '900470288',
        name: 'Cottbus, Vetschauer Str./Leipziger Str.',
    },
    {
        id: '900230053',
        name: 'Potsdam, Weißer See',
    },
    {
        id: '900200806',
        name: 'Malz, Ambachwiesen',
    },
    {
        id: '900230250',
        name: 'Potsdam, Tornowstr.',
    },
    {
        id: '900200813',
        name: 'Liebenwalde, Schleuse',
    },
    {
        id: '900200003',
        name: 'Teschendorf, Unterweg',
    },
    {
        id: '900221999',
        name: 'Bad Belzig, Am Betriebshof',
    },
    {
        id: '900230016',
        name: 'Potsdam, Platz der Einheit/Bildungsforum',
    },
    {
        id: '900310935',
        name: 'Mixdorf, Dorf',
    },
    {
        id: '900470284',
        name: 'Cottbus, Thierbacher Str.',
    },
    {
        id: '900220004',
        name: 'Seddin (PM), Bhf',
    },
    {
        id: '900470157',
        name: 'Cottbus, Friedrich-List-Str.',
    },
    {
        id: '900470215',
        name: 'Cottbus, Neu Schmellwitz Zuschka',
    },
    {
        id: '900470275',
        name: 'Cottbus, Ströbitz Mühlenweg',
    },
    {
        id: '900230185',
        name: 'Potsdam, Zedlitzberg',
    },
    {
        id: '900470277',
        name: 'Cottbus, Ströbitz Ziegelstr.',
    },
    {
        id: '900205770',
        name: 'Dabergotz, Lindenallee',
    },
    {
        id: '900445881',
        name: 'Kolkwitz, Alte Schule',
    },
    {
        id: '900470265',
        name: 'Cottbus, Sportzentrum',
    },
    {
        id: '900470223',
        name: 'Cottbus, Ottilienstr.',
    },
    {
        id: '900470177',
        name: 'Cottbus, Jessener Str.',
    },
    {
        id: '900470274',
        name: 'Cottbus, Ströbitz',
    },
    {
        id: '900470402',
        name: 'Cottbus, Sportpalast',
    },
    {
        id: '900470214',
        name: 'Cottbus, Neu Schmellwitz',
    },
    {
        id: '900220628',
        name: 'Werder (Havel), Markt',
    },
    {
        id: '900260194',
        name: 'Großziethen, Kirche',
    },
    {
        id: '900275134',
        name: 'Brandenburg, Gerberaweg',
    },
    {
        id: '900275118',
        name: 'Brandenburg, Tierheim',
    },
    {
        id: '900275135',
        name: 'Brandenburg, Veilchenweg',
    },
    {
        id: '900275145',
        name: 'Brandenburg, Alte Krakauer Str.',
    },
    {
        id: '900275133',
        name: 'Brandenburg, Wendseeufer',
    },
    {
        id: '900275132',
        name: 'Brandenburg, Genthiner Str.',
    },
    {
        id: '900275437',
        name: 'Brandenburg, Rathenower Landstr.',
    },
    {
        id: '900220370',
        name: 'Wust, Sportpark',
    },
    {
        id: '900275161',
        name: 'Brandenburg, Jahrtausendbrücke',
    },
    {
        id: '900230402',
        name: 'Potsdam, Stern-Center/Gerlachstr.',
    },
    {
        id: '900275136',
        name: 'Brandenburg, Willi-Sänger-Str.',
    },
    {
        id: '900275139',
        name: 'Brandenburg, Brielower Aue',
    },
    {
        id: '900275137',
        name: 'Brandenburg, Zum Marienberg',
    },
    {
        id: '900220350',
        name: 'Wust, Freizeitzentrum',
    },
    {
        id: '900360228',
        name: 'Frankfurt (Oder), EuroCamp',
    },
    {
        id: '900210347',
        name: 'Premnitz, Thomas-Mann-Str.',
    },
    {
        id: '900360118',
        name: 'Frankfurt (Oder), Rathenaustr.',
    },
    {
        id: '900245636',
        name: 'Wünsdorf, Adlershorststr.',
    },
    {
        id: '900210038',
        name: 'Kieck',
    },
    {
        id: '900350008',
        name: 'Schönow (BAR), Karlstr.',
    },
    {
        id: '900210034',
        name: 'Möthlow',
    },
    {
        id: '900210789',
        name: 'Rathenow, Forsthaus',
    },
    {
        id: '900260516',
        name: 'Schönefeld (bei Berlin), Wehrmathen',
    },
    {
        id: '900039161',
        name: 'Temmeweg',
    },
    {
        id: '900260031',
        name: 'Leibchel, Leibcheler Dorfstr.',
    },
    {
        id: '900261688',
        name: 'Pitschen-Pickel',
    },
    {
        id: '900261681',
        name: 'Paserin, Kirche',
    },
    {
        id: '900445657',
        name: 'Gulben, Abzweig',
    },
    {
        id: '900446054',
        name: 'Müschen, Wendeplatz',
    },
    {
        id: '900210691',
        name: 'Pausin, Eichstädter Weg',
    },
    {
        id: '900470189',
        name: 'Cottbus, Kleiststr.',
    },
    {
        id: '900470287',
        name: 'Cottbus, Uhlandstr.',
    },
    {
        id: '900470158',
        name: 'Cottbus, Gelsenkirchener Allee',
    },
    {
        id: '900470218',
        name: 'Cottbus, Neuhausener Str.',
    },
    {
        id: '900210687',
        name: 'Perwenitz, Kirche',
    },
    {
        id: '900245751',
        name: 'Ahrensdorf (bei Ludwigsfelde), Am Sportplatz',
    },
    {
        id: '900470230',
        name: 'Cottbus, Saarbrücker Str.',
    },
    {
        id: '900470173',
        name: 'Cottbus, Hölderlinstr.',
    },
    {
        id: '900210684',
        name: 'Paaren im Glien, MAFZ',
    },
    {
        id: '900470130',
        name: 'Cottbus, Chopinstr.',
    },
    {
        id: '900445890',
        name: 'Kolkwitz, Langosa',
    },
    {
        id: '900470273',
        name: 'Cottbus, Ströbitz Friedhof',
    },
    {
        id: '900470200',
        name: 'Cottbus, Hänchener Str.',
    },
    {
        id: '900445458',
        name: 'Cottbus, Gallinchen Telering',
    },
    {
        id: '900245750',
        name: 'Ahrensdorf (bei Ludwigsfelde), An der Feuerwache',
    },
    {
        id: '900445541',
        name: 'Cottbus, Groß Gaglow Gallinchener Str.',
    },
    {
        id: '900210689',
        name: 'Perwenitz, Schule',
    },
    {
        id: '900470153',
        name: 'Cottbus, Finsterwalder Str.',
    },
    {
        id: '900470405',
        name: 'Cottbus, Branitz Waldesruh',
    },
    {
        id: '900470122',
        name: 'Cottbus, Branitz Rosenwinkel',
    },
    {
        id: '900470123',
        name: 'Cottbus, Branitz alte Schule',
    },
    {
        id: '900210692',
        name: 'Pausin, Brieselanger Str.',
    },
    {
        id: '900470121',
        name: 'Cottbus, Schloss Branitz',
    },
    {
        id: '900445807',
        name: 'Cottbus, Kiekebusch Büdnerstr.',
    },
    {
        id: '900470136',
        name: 'Cottbus, Dissenchen Schule',
    },
    {
        id: '900470126',
        name: 'Cottbus, Branitz Zum Seebad',
    },
    {
        id: '900445806',
        name: 'Cottbus, Kiekebusch Kiefernweg',
    },
    {
        id: '900470292',
        name: 'Cottbus, Welzower Str./Klinikum',
    },
    {
        id: '900210688',
        name: 'Perwenitz, Am Alten Bahndamm',
    },
    {
        id: '900445809',
        name: 'Cottbus, Kiekebusch Hauptstr.',
    },
    {
        id: '900445808',
        name: 'Cottbus, Kiekebusch Friedhof',
    },
    {
        id: '900445810',
        name: 'Cottbus, Kiekebusch Alte Schule',
    },
    {
        id: '900470199',
        name: 'Cottbus, Madlow Gaglower Landstr.',
    },
    {
        id: '900445454',
        name: 'Cottbus, Gallinchen Parzellenstr.',
    },
    {
        id: '900446463',
        name: 'Turnow, Str. nach Drehnow',
    },
    {
        id: '900445371',
        name: 'Drehnow, West',
    },
    {
        id: '900445369',
        name: 'Drehnow, Alte Schule',
    },
    {
        id: '900445370',
        name: 'Drehnow, Schmiede',
    },
    {
        id: '900446462',
        name: 'Turnow, Kirche',
    },
    {
        id: '900445926',
        name: 'Kraftwerk Jänschwalde, Eingang Ost',
    },
    {
        id: '900445927',
        name: 'Kraftwerk Jänschwalde, Haupteingang',
    },
    {
        id: '900446033',
        name: 'Maust, Abzweig',
    },
    {
        id: '900310875',
        name: 'Fürstenwalde, Gottfried-Keller-Str.',
    },
    {
        id: '900445344',
        name: 'Drachhausen, Süd',
    },
    {
        id: '900446104',
        name: 'Peitz, Bhf Ost Fußgängerbrücke',
    },
    {
        id: '900210203',
        name: 'Nauen, Rathaus/Ketziner Str.',
    },
    {
        id: '900445336',
        name: 'Drachhausen, Abzw Heide',
    },
    {
        id: '900445338',
        name: 'Drachhausen, Heide',
    },
    {
        id: '900445342',
        name: 'Drachhausen, Ost',
    },
    {
        id: '900445337',
        name: 'Drachhausen, Gasthaus',
    },
    {
        id: '900210676',
        name: 'Tietzow, Dorfanger',
    },
    {
        id: '900210682',
        name: 'Paaren im Glien, Ausbau',
    },
    {
        id: '900445343',
        name: 'Drachhausen, Sportplatz',
    },
    {
        id: '900210683',
        name: 'Paaren im Glien, Dorf',
    },
    {
        id: '900470298',
        name: 'Cottbus, Willmersdorf Neu Lakoma',
    },
    {
        id: '900470191',
        name: 'Cottbus, Lakoma',
    },
    {
        id: '900470308',
        name: 'Cottbus, Lipezker Str./Schwarzheider Str.',
    },
    {
        id: '900445832',
        name: 'Klein Gaglow, Reinpuscher Weg',
    },
    {
        id: '900445544',
        name: 'Cottbus, Groß Gaglow Sachsendorfer Str.',
    },
    {
        id: '900470299',
        name: 'Cottbus, Willmersdorf Turnweg',
    },
    {
        id: '900445545',
        name: 'Cottbus, Groß Gaglow Schule',
    },
    {
        id: '900445451',
        name: 'Cottbus, Gallinchen Friedensplatz',
    },
    {
        id: '900446107',
        name: 'Peitz, Gubener Vorstadt',
    },
    {
        id: '900446105',
        name: 'Peitz, Busbahnhof',
    },
    {
        id: '900446099',
        name: 'Peitz, Alte Bahnhofstr.',
    },
    {
        id: '900470296',
        name: 'Cottbus, Willmersdorf Jahnstr.',
    },
    {
        id: '900446101',
        name: 'Peitz, August-Bebel-Str.',
    },
    {
        id: '900446108',
        name: 'Peitz, Markt',
    },
    {
        id: '900470244',
        name: 'Cottbus, Schlichow Sportplatz',
    },
    {
        id: '900210828',
        name: 'Steckelsdorf, Horstenweg',
    },
    {
        id: '900210773',
        name: 'Rathenow, Bammer Landstr.',
    },
    {
        id: '900027101',
        name: 'Oberjägerweg',
    },
    {
        id: '900027251',
        name: 'Mögeldorfer Weg',
    },
    {
        id: '900027252',
        name: 'Schülerbergstr.',
    },
    {
        id: '900029252',
        name: 'Predigergarten',
    },
    {
        id: '900210297',
        name: 'Stölln, Dorf',
    },
    {
        id: '900275120',
        name: 'Brandenburg, Kietzstr.',
    },
    {
        id: '900275160',
        name: 'Brandenburg, Wusterwitzer Str.',
    },
    {
        id: '900470269',
        name: 'Cottbus, Stadtpromenade',
    },
    {
        id: '900350414',
        name: 'Finowfurt, Walzwerkstr.',
    },
    {
        id: '900275311',
        name: 'Brandenburg, Wiener Str.',
    },
    {
        id: '900210414',
        name: 'Selbelang',
    },
    {
        id: '900275129',
        name: 'Brandenburg, Max-Josef-Metzger-Str.',
    },
    {
        id: '900275128',
        name: 'Brandenburg, Heidekrug',
    },
    {
        id: '900210427',
        name: 'Paulinenaue, Schule',
    },
    {
        id: '900210460',
        name: 'Wagenitz, Dorf',
    },
    {
        id: '900210431',
        name: 'Senzke, Dorf',
    },
    {
        id: '900310879',
        name: 'Fürstenwalde, Charlotte-Apel-Str.',
    },
    {
        id: '900210429',
        name: 'Pessin, Ausbau',
    },
    {
        id: '900210461',
        name: 'Wagenitz, Siedlung',
    },
    {
        id: '900210422',
        name: 'Paulinenaue, Kameruner Weg',
    },
    {
        id: '900210426',
        name: 'Paulinenaue, Ausbau',
    },
    {
        id: '900210419',
        name: 'Retzow (HVL), Pessiner Weg',
    },
    {
        id: '900210424',
        name: 'Pessin, Abzweig nach Paulinenaue',
    },
    {
        id: '900210382',
        name: 'Schwanebeck (HVL)',
    },
    {
        id: '900210478',
        name: 'Wutzetz, Dorf',
    },
    {
        id: '900210479',
        name: 'Wutzetz, Mühle',
    },
    {
        id: '900210480',
        name: 'Fliederhorst',
    },
    {
        id: '900350810',
        name: 'Zepernick, Bernauer Str.',
    },
    {
        id: '900210466',
        name: 'Warsow',
    },
    {
        id: '900470294',
        name: 'Cottbus, Stadtmuseum',
    },
    {
        id: '900470261',
        name: 'Cottbus, Sielow Striesower Str.',
    },
    {
        id: '900470248',
        name: 'Cottbus, Schmellwitzer Weg',
    },
    {
        id: '900470262',
        name: 'Cottbus, Sielow Zollhaus',
    },
    {
        id: '900470256',
        name: 'Cottbus, Sielow Fehrower Weg',
    },
    {
        id: '900470258',
        name: 'Cottbus, Sielow Mühle',
    },
    {
        id: '900210697',
        name: 'Wansdorf, In den Hufen',
    },
    {
        id: '900470207',
        name: 'Cottbus, Merzdorf Alter Bahnhof',
    },
    {
        id: '900470208',
        name: 'Cottbus, Merzdorf Feuerwehr',
    },
    {
        id: '900470211',
        name: 'Cottbus, Merzdorfer Bahnhofstr.',
    },
    {
        id: '900470160',
        name: 'Cottbus, Gerhart-Hauptmann-Str.',
    },
    {
        id: '900470234',
        name: 'Cottbus, Warmbad',
    },
    {
        id: '900470270',
        name: 'Cottbus, Stadtring/Dissenchener Str.',
    },
    {
        id: '900210695',
        name: 'Wansdorf, Kirche',
    },
    {
        id: '900470235',
        name: 'Cottbus, Warschauer Str.',
    },
    {
        id: '900470232',
        name: 'Cottbus, Sandow Mitte',
    },
    {
        id: '900470206',
        name: 'Cottbus, Meisenweg',
    },
    {
        id: '900210696',
        name: 'Wansdorf, Bahnstr.',
    },
    {
        id: '900210694',
        name: 'Wansdorf, Schwarzer Weg',
    },
    {
        id: '900415225',
        name: 'Goßmar, Sonnewalder Str.',
    },
    {
        id: '900470108',
        name: 'Cottbus, August-Bebel-Str.',
    },
    {
        id: '900470280',
        name: 'Cottbus, Universität',
    },
    {
        id: '900470174',
        name: 'Cottbus, Hubertstr.',
    },
    {
        id: '900470155',
        name: 'Cottbus, Freiheitsstr.',
    },
    {
        id: '900470114',
        name: 'Cottbus, Berliner Str.',
    },
    {
        id: '900470129',
        name: 'Cottbus, Carl-von-Ossietzky-Str.',
    },
    {
        id: '900470281',
        name: 'Cottbus, Universitätsbibliothek',
    },
    {
        id: '900470195',
        name: 'Cottbus, Lessingstr.',
    },
    {
        id: '900470224',
        name: 'Cottbus, Pappelallee',
    },
    {
        id: '900210410',
        name: 'Ribbeck (HVL)',
    },
    {
        id: '900470259',
        name: 'Cottbus, Sielow Sportplatz',
    },
    {
        id: '900470131',
        name: 'Cottbus, Cottbus Center',
    },
    {
        id: '900470254',
        name: 'Cottbus, Sielow Am Ring',
    },
    {
        id: '900470253',
        name: 'Cottbus, Siedlerstr.',
    },
    {
        id: '900470252',
        name: 'Cottbus, Freizeitbad Lagune',
    },
    {
        id: '900470152',
        name: 'Cottbus, Finkenweg',
    },
    {
        id: '900470162',
        name: 'Cottbus, Goyatzer Str.',
    },
    {
        id: '900220375',
        name: 'Wust, Heininge',
    },
    {
        id: '900446119',
        name: 'Preilack, Dorf',
    },
    {
        id: '900446410',
        name: 'Tauer, West',
    },
    {
        id: '900446297',
        name: 'Siewisch',
    },
    {
        id: '900446381',
        name: 'Steinitz',
    },
    {
        id: '900446156',
        name: 'Rehnsdorf, Siedlerstr.',
    },
    {
        id: '900445758',
        name: 'Jehserig, Teichstr.',
    },
    {
        id: '900445757',
        name: 'Jehserig, Merkur',
    },
    {
        id: '900446008',
        name: 'Löschen, Dorfstr.',
    },
    {
        id: '900446007',
        name: 'Löschen, Auraser Str.',
    },
    {
        id: '900445473',
        name: 'Golschow, Abzweig',
    },
    {
        id: '900320679',
        name: 'Fredersdorf (MOL), Bollensdorfer Allee',
    },
    {
        id: '900445897',
        name: 'Kolkwitz, Rathaus',
    },
    {
        id: '900445900',
        name: 'Kolkwitz, Teiche',
    },
    {
        id: '900445896',
        name: 'Kolkwitz, Schumannstr.',
    },
    {
        id: '900210171',
        name: 'Schönwalde (HVL), Steinerne Brücke',
    },
    {
        id: '900445277',
        name: 'Casel',
    },
    {
        id: '900445891',
        name: 'Kolkwitz, Langosa Berliner Str.',
    },
    {
        id: '900445503',
        name: 'Greifenhain, Dorfplatz',
    },
    {
        id: '900446144',
        name: 'Radensdorf (SPN)',
    },
    {
        id: '900445969',
        name: 'Laubst',
    },
    {
        id: '900446098',
        name: 'Papproth',
    },
    {
        id: '900445988',
        name: 'Leuthen, Schule',
    },
    {
        id: '900445687',
        name: 'Hänchen, Gewerbegebiet',
    },
    {
        id: '900446216',
        name: 'Schorbus, Krzg Schorbus/Leuthen (B 169)',
    },
    {
        id: '900446213',
        name: 'Schorbus, Krzg Schorbus/Leuthen (Ost)',
    },
    {
        id: '900445861',
        name: 'Klein Oßnig',
    },
    {
        id: '900210515',
        name: 'Tremmen, An der Bleichwiese',
    },
    {
        id: '900310107',
        name: 'Bad Saarow, Am Resort',
    },
    {
        id: '900446217',
        name: 'Schorbus, Krzg Schorbus/Leuthen (West)',
    },
    {
        id: '900445686',
        name: 'Hänchen, Gasthaus',
    },
    {
        id: '900445689',
        name: 'Hänchen, Siedlung',
    },
    {
        id: '900445685',
        name: 'Hänchen, Annahof',
    },
    {
        id: '900310559',
        name: 'Erkner, Gartenstr.',
    },
    {
        id: '900470178',
        name: 'Cottbus, Kahren Am Park',
    },
    {
        id: '900445367',
        name: 'Drebkau, Spremberger Str.',
    },
    {
        id: '900435355',
        name: 'Neupetershain, Nord Kirchstr.',
    },
    {
        id: '900445335',
        name: 'Domsdorf (bei Drebkau)',
    },
    {
        id: '900445362',
        name: 'Drebkau, Glaswerk',
    },
    {
        id: '900445365',
        name: 'Drebkau, Schloß',
    },
    {
        id: '900220212',
        name: 'Teltow, Halifax-Platz',
    },
    {
        id: '900210275',
        name: 'Wachow, Friedhof',
    },
    {
        id: '900210277',
        name: 'Wachow, Kirche',
    },
    {
        id: '900445895',
        name: 'Kolkwitz, Schule',
    },
    {
        id: '900445290',
        name: 'Dahlitz, Kunersdorfer Str.',
    },
    {
        id: '900210173',
        name: 'Schönwalde (HVL), Pausiner Str.',
    },
    {
        id: '900200014',
        name: 'Hohen Neuendorf, Puschkinallee',
    },
    {
        id: '900210172',
        name: 'Schönwalde (HVL), Cheruskerweg',
    },
    {
        id: '000302456001',
        name: 'Garzau, Pyramide',
    },
    {
        id: '900445289',
        name: 'Dahlitz, An den Teichen',
    },
    {
        id: '900435891',
        name: 'Vetschau, Pestalozzistr.',
    },
    {
        id: '900435889',
        name: 'Vetschau, ITS',
    },
    {
        id: '900210163',
        name: 'Schönwalde (HVL), Eichenallee',
    },
    {
        id: '900446037',
        name: 'Milkersdorf, Ausbau',
    },
    {
        id: '900446053',
        name: 'Müschen, Friedhof',
    },
    {
        id: '900445156',
        name: 'Babow',
    },
    {
        id: '900210164',
        name: 'Schönwalde (HVL), Schwanenkrug',
    },
    {
        id: '900446038',
        name: 'Milkersdorf, Gemeindeverwaltung',
    },
    {
        id: '900445957',
        name: 'Kunersdorf (SPN), Str. des Friedens',
    },
    {
        id: '900445892',
        name: 'Kolkwitz, Papitzer Str.',
    },
    {
        id: '900445237',
        name: 'Brodtkowitz',
    },
    {
        id: '900445770',
        name: 'Kackrow',
    },
    {
        id: '900445883',
        name: 'Kolkwitz, Ausbau Nord',
    },
    {
        id: '900220110',
        name: 'Kleinmachnow, Im Dickicht',
    },
    {
        id: '900220123',
        name: 'Kleinmachnow, Altes Dorf',
    },
    {
        id: '900210174',
        name: 'Schönwalde (HVL), Erlenbruch',
    },
    {
        id: '900320864',
        name: 'Garzin, Fischertal',
    },
    {
        id: '900445363',
        name: 'Drebkau, Neu Kausche',
    },
    {
        id: '900210167',
        name: 'Schönwalde (HVL), Dorf',
    },
    {
        id: '900445942',
        name: 'Krieschow, Vorwerk',
    },
    {
        id: '900210168',
        name: 'Schönwalde (HVL), Falkenhagener Weg',
    },
    {
        id: '900445941',
        name: 'Krieschow, Eichower Weg',
    },
    {
        id: '900446006',
        name: 'Limberg, Siedlung',
    },
    {
        id: '900446004',
        name: 'Limberg, Gasthaus',
    },
    {
        id: '900445460',
        name: 'Glinzig, Ausbau',
    },
    {
        id: '900445659',
        name: 'Gulben, Feuerwehrdepot',
    },
    {
        id: '900446538',
        name: 'Zahsow',
    },
    {
        id: '900446212',
        name: 'Schorbus, Kirche',
    },
    {
        id: '900210208',
        name: 'Nauen, Weinberg',
    },
    {
        id: '900445789',
        name: 'Kathlow, Alte Försterei',
    },
    {
        id: '900445074',
        name: 'Heinersbrück, Radewiese',
    },
    {
        id: '900445704',
        name: 'Heinersbrück, Wendeplatz',
    },
    {
        id: '900445702',
        name: 'Heinersbrück, Kirche',
    },
    {
        id: '900210209',
        name: 'Nauen, Trappenweg',
    },
    {
        id: '900210506',
        name: 'Markee, Neubau',
    },
    {
        id: '900445575',
        name: 'Heinersbrück, Grötsch',
    },
    {
        id: '900210207',
        name: 'Nauen, Eichhorstweg',
    },
    {
        id: '900446395',
        name: 'Tagebau Jänschwalde, Busbahnhof',
    },
    {
        id: '900445786',
        name: 'Kathlow, Abzweig zur Mühle',
    },
    {
        id: '900470180',
        name: 'Cottbus, Kahren Karlshof',
    },
    {
        id: '900446024',
        name: 'Mattendorf',
    },
    {
        id: '900446422',
        name: 'Trebendorf, Friedhof',
    },
    {
        id: '900446283',
        name: 'Sergen, Kirche',
    },
    {
        id: '900446282',
        name: 'Sergen, Am Schloßteich',
    },
    {
        id: '900446280',
        name: 'Sergen, Ausbau',
    },
    {
        id: '900446281',
        name: 'Sergen, Katzenberg',
    },
    {
        id: '900215795',
        name: 'Roddan',
    },
    {
        id: '900445788',
        name: 'Kathlow, Mühle',
    },
    {
        id: '900445672',
        name: 'Haasow, Wendeplatz Feuerwehr',
    },
    {
        id: '900446406',
        name: 'Tauer, Ausbau',
    },
    {
        id: '900445754',
        name: 'Jänschwalde, Kolonie',
    },
    {
        id: '900445752',
        name: 'Jänschwalde, Dorf',
    },
    {
        id: '900210206',
        name: 'Nauen, Wasserwerk',
    },
    {
        id: '900445383',
        name: 'Drewitz, Gasse',
    },
    {
        id: '900446408',
        name: 'Tauer, Ost',
    },
    {
        id: '900446407',
        name: 'Tauer, Mitte',
    },
    {
        id: '900446409',
        name: 'Tauer, Schülerverkehr',
    },
    {
        id: '900310837',
        name: 'Fürstenwalde, Hans-Thoma-Str.',
    },
    {
        id: '900445755',
        name: 'Jänschwalde, Ost',
    },
    {
        id: '900470124',
        name: 'Cottbus, Branitz Wappenhaus',
    },
    {
        id: '900445670',
        name: 'Haasow, Abzweig',
    },
    {
        id: '900470097',
        name: 'Cottbus, Abzweig nach Nutzberg',
    },
    {
        id: '900446066',
        name: 'Neuendorf (bei Cottbus), Alter Bahnhof',
    },
    {
        id: '900446067',
        name: 'Neuendorf (bei Cottbus), Spielplatz',
    },
    {
        id: '900210505',
        name: 'Markee, Dorf',
    },
    {
        id: '900470179',
        name: 'Cottbus, Kahren Am Sportplatz',
    },
    {
        id: '900445155',
        name: 'Auras',
    },
    {
        id: '900445563',
        name: 'Groß Oßnig, Siedlung',
    },
    {
        id: '900445902',
        name: 'Komptendorf, West',
    },
    {
        id: '900445387',
        name: 'Drieschnitz, Vorwerk',
    },
    {
        id: '900445562',
        name: 'Groß Oßnig, Dorfstr.',
    },
    {
        id: '900445960',
        name: 'Laubsdorf, Heideschänke',
    },
    {
        id: '900261542',
        name: 'Lübben, Lindenstr.',
    },
    {
        id: '900341050',
        name: 'Neu-Rosow',
    },
    {
        id: '900445959',
        name: 'Laubsdorf, Denkmal',
    },
    {
        id: '900446084',
        name: 'Oelsnig',
    },
    {
        id: '900446214',
        name: 'Schorbus, Schäferei',
    },
    {
        id: '900446215',
        name: 'Schorbus, Schäfereiweg',
    },
    {
        id: '900445526',
        name: 'Groß Döbbern, Gemeindeverwaltung',
    },
    {
        id: '900445827',
        name: 'Klein Döbbern, Dorfstr.',
    },
    {
        id: '900445525',
        name: 'Groß Döbbern, Buckower Str.',
    },
    {
        id: '900445825',
        name: 'Klein Döbbern, Ausbau',
    },
    {
        id: '900445829',
        name: 'Klein Döbbern, Alte Schule',
    },
    {
        id: '900445958',
        name: 'Laubsdorf, Ausbau',
    },
    {
        id: '900210507',
        name: 'Markee, Markau',
    },
    {
        id: '900445427',
        name: 'Frauendorf, Waldstr.',
    },
    {
        id: '900210511',
        name: 'Neugarten, Ausbau',
    },
    {
        id: '900445426',
        name: 'Frauendorf, Nord',
    },
    {
        id: '900210027',
        name: 'Neugarten, Dorf',
    },
    {
        id: '900470182',
        name: 'Cottbus, Kahren Neuhausener Weg',
    },
    {
        id: '900470181',
        name: 'Cottbus, Kahren Kirche',
    },
    {
        id: '900470184',
        name: 'Cottbus, Kahren Alte Schule',
    },
    {
        id: '900470183',
        name: 'Cottbus, Kahren Schmiede',
    },
    {
        id: '900445916',
        name: 'Koppatz, Frauendorfer Str.',
    },
    {
        id: '900445961',
        name: 'Laubsdorf, Schule',
    },
    {
        id: '900210514',
        name: 'Etzin, Abzweig nach Tremmen',
    },
    {
        id: '900446069',
        name: 'Neuhausen (SPN), Ausbau',
    },
    {
        id: '900446072',
        name: 'Neuhausen (SPN), Schmiede',
    },
    {
        id: '900445917',
        name: 'Koppatz, Hauptstr.',
    },
    {
        id: '900446169',
        name: 'Roggosen, Wendeplatz',
    },
    {
        id: '900446167',
        name: 'Roggosen, Feuerwehrdepot',
    },
    {
        id: '900310896',
        name: 'Kienbaum, Kirche',
    },
    {
        id: '900230043',
        name: 'Potsdam, Chopinstr.',
    },
    {
        id: '900310843',
        name: 'Groß Schauen, Köllnitz',
    },
    {
        id: '900310912',
        name: 'Kummersdorf (LOS), Dorf',
    },
    {
        id: '900310913',
        name: 'Kummersdorf (LOS), Sägewerk',
    },
    {
        id: '900310948',
        name: 'Neu Stahnsdorf',
    },
    {
        id: '900310977',
        name: 'Philadelphia, Kreuzung',
    },
    {
        id: '900311001',
        name: 'Rieplos, Lehngutweg',
    },
    {
        id: '900311017',
        name: 'Schwerin (LOS)',
    },
    {
        id: '900415292',
        name: 'Massen, Gewerbegebiet',
    },
    {
        id: '900311018',
        name: 'Selchow (LOS)',
    },
    {
        id: '900261195',
        name: 'Görlsdorf (LDS), Wanninchener Str.',
    },
    {
        id: '900311440',
        name: 'Kaisermühl I',
    },
    {
        id: '900230216',
        name: 'Potsdam, C.-Schumann-Str./Trebbiner Str.',
    },
    {
        id: '900230052',
        name: 'Potsdam, Brentanoweg',
    },
    {
        id: '900311049',
        name: 'Storkow, Ausbau',
    },
    {
        id: '900311056',
        name: 'Storkow, Küchensee',
    },
    {
        id: '900311055',
        name: 'Storkow, Karlslust T.-Storm-Str.',
    },
    {
        id: '900311050',
        name: 'Storkow, Betonwerk',
    },
    {
        id: '900310976',
        name: 'Philadelphia, Dorf',
    },
    {
        id: '900310945',
        name: 'Neu Boston',
    },
    {
        id: '900310996',
        name: 'Reichenwalde, Am Mühlenberg',
    },
    {
        id: '900310842',
        name: 'Groß Schauen',
    },
    {
        id: '900203384',
        name: 'Hennigsdorf, Fontanesiedlung Mitte',
    },
    {
        id: '900311033',
        name: 'Spreenhagen, Försterei',
    },
    {
        id: '900230107',
        name: 'Potsdam, Drewitz-Ort',
    },
    {
        id: '900230148',
        name: 'Potsdam, Drewitzer Str./Erich-Weinert-Str.',
    },
    {
        id: '900310966',
        name: 'Neureichenwalde',
    },
    {
        id: '900310997',
        name: 'Reichenwalde, Kolpiner Str.',
    },
    {
        id: '900310998',
        name: 'Reichenwalde, Dorfaue',
    },
    {
        id: '900310999',
        name: 'Reichenwalde, Wurzelberg',
    },
    {
        id: '900311051',
        name: 'Storkow, Hirschluch',
    },
    {
        id: '900230110',
        name: 'Potsdam, Drewitzer Str./Am Buchhorst',
    },
    {
        id: '900311060',
        name: 'Storkow, Wolfswinkel',
    },
    {
        id: '900311058',
        name: 'Storkow, Rathaus',
    },
    {
        id: '900311054',
        name: 'Storkow, Karlslust Gesamtschule',
    },
    {
        id: '900310707',
        name: 'Alt Stahnsdorf',
    },
    {
        id: '900310749',
        name: 'Bugk, Dorf',
    },
    {
        id: '900230135',
        name: 'Potsdam, Drachenhaus',
    },
    {
        id: '900310748',
        name: 'Bugk, Ausbau',
    },
    {
        id: '900230056',
        name: 'Potsdam, Birkenstr./Alleestr.',
    },
    {
        id: '900311476',
        name: 'Müllrose, Bahnhofstr.',
    },
    {
        id: '900311484',
        name: 'Müllrose, Möllenweg',
    },
    {
        id: '900311472',
        name: 'Möbiskruge, Lindenstr.',
    },
    {
        id: '900311630',
        name: 'Ziltendorf, B 112',
    },
    {
        id: '900310817',
        name: 'Fürstenwalde, Lützowring',
    },
    {
        id: '900310819',
        name: 'Fürstenwalde, Südwest',
    },
    {
        id: '900310785',
        name: 'Fürstenwalde, Große Tränke',
    },
    {
        id: '900230211',
        name: 'Potsdam, Naturkundemuseum',
    },
    {
        id: '900310743',
        name: 'Braunsdorf, Göllmitz',
    },
    {
        id: '900230113',
        name: 'Potsdam, An der Brauerei',
    },
    {
        id: '900310742',
        name: 'Braunsdorf, Luisenhof',
    },
    {
        id: '900310791',
        name: 'Fürstenwalde, Kiesweg',
    },
    {
        id: '900310932',
        name: 'Markgrafpieske, Teerhütte',
    },
    {
        id: '900310930',
        name: 'Markgrafpieske, Neubau',
    },
    {
        id: '900310928',
        name: 'Markgrafpieske, Kirche',
    },
    {
        id: '900230171',
        name: 'Potsdam, Amundsenstr./Nedlitzer Str.',
    },
    {
        id: '900311569',
        name: 'Steinsdorf, Coschener Str.',
    },
    {
        id: '900311057',
        name: 'Storkow, Lebbiner Str.',
    },
    {
        id: '900311478',
        name: 'Müllrose, Bleiche',
    },
    {
        id: '900311477',
        name: 'Müllrose, Bahnübergang',
    },
    {
        id: '900311442',
        name: 'Schernsdorf, Kallinenberge',
    },
    {
        id: '900311557',
        name: 'Schernsdorf, Schervenzsee',
    },
    {
        id: '900311403',
        name: 'Fünfeichen, Försterei',
    },
    {
        id: '900311401',
        name: 'Fünfeichen, Abzweig',
    },
    {
        id: '900311483',
        name: 'Müllrose, Mixdorfer Str.',
    },
    {
        id: '900310070',
        name: 'Treppeln, Ortsmitte',
    },
    {
        id: '900230405',
        name: 'Potsdam, Betriebshof ViP',
    },
    {
        id: '900220153',
        name: 'Bergholz-Rehbrücke, Verdistr.',
    },
    {
        id: '900311481',
        name: 'Müllrose, Kaisermühler Weg',
    },
    {
        id: '900220938',
        name: 'Beelitz, Stadt',
    },
    {
        id: '900310959',
        name: 'Neuendorf im Sande, Ausbau',
    },
    {
        id: '900310962',
        name: 'Neuendorf im Sande, Margaretenhof',
    },
    {
        id: '900311045',
        name: 'Steinhöfel (LOS), Ausbau',
    },
    {
        id: '900310752',
        name: 'Demnitz, Dorf',
    },
    {
        id: '900220154',
        name: 'Potsdam, Geiselberg',
    },
    {
        id: '900311046',
        name: 'Steinhöfel (LOS), Dorf',
    },
    {
        id: '900230090',
        name: 'Potsdam, Freiligrathstr.',
    },
    {
        id: '900310871',
        name: 'Hasenfelde, Hasenwinkel',
    },
    {
        id: '900310870',
        name: 'Hasenfelde, Neubau',
    },
    {
        id: '900210346',
        name: 'Premnitz, Naturbad Premnitz',
    },
    {
        id: '900311066',
        name: 'Tempelberg, Gutshof',
    },
    {
        id: '900311067',
        name: 'Tempelberg, Lindenstr.',
    },
    {
        id: '900310050',
        name: 'Steinhöfel (LOS), Behlendorf',
    },
    {
        id: '900310080',
        name: 'Heinersdorf (LOS), Dorf',
    },
    {
        id: '900310081',
        name: 'Heinersdorf (LOS), Schule',
    },
    {
        id: '900039154',
        name: 'Finnenhaus-Siedlung',
    },
    {
        id: '900230246',
        name: 'Potsdam, Finkenweg/Leipziger Str.',
    },
    {
        id: '900310709',
        name: 'Arensdorf, Hasenfelder Str.',
    },
    {
        id: '900310710',
        name: 'Arensdorf, Triftweg',
    },
    {
        id: '900310801',
        name: 'Fürstenwalde, Molkenberg',
    },
    {
        id: '900310803',
        name: 'Fürstenwalde, Trebus Dorf',
    },
    {
        id: '900310802',
        name: 'Fürstenwalde, Trebus Ausbau',
    },
    {
        id: '900310712',
        name: 'Beerfelde, Kirchgasse',
    },
    {
        id: '900220805',
        name: 'Potsdam, Science Park West',
    },
    {
        id: '900310711',
        name: 'Beerfelde, Ausbau',
    },
    {
        id: '900311015',
        name: 'Schönfelde',
    },
    {
        id: '900320277',
        name: 'Eggersdorf (Müncheberg), Fürstenwalder Chaussee',
    },
    {
        id: '900026155',
        name: 'Marathonallee',
    },
    {
        id: '900320279',
        name: 'Müncheberg, Eggersdorf Am Bruch',
    },
    {
        id: '900260767',
        name: 'Neubrück (bei Groß Köris), KIEZ Hölzerner See',
    },
    {
        id: '900310960',
        name: 'Neuendorf im Sande, Bhf',
    },
    {
        id: '900039160',
        name: 'Gößweinsteiner Gang',
    },
    {
        id: '900230173',
        name: 'Potsdam, Glumestr.',
    },
    {
        id: '900311108',
        name: 'Buchholz (LOS), Am Bullenphuhl',
    },
    {
        id: '900310963',
        name: 'Neuendorf im Sande, Steinhöfler Chaussee',
    },
    {
        id: '900310961',
        name: 'Neuendorf im Sande, Kräuterhof',
    },
    {
        id: '900310706',
        name: 'Alt Madlitz, Gaststätte',
    },
    {
        id: '900310705',
        name: 'Alt Madlitz, Dorf',
    },
    {
        id: '900310704',
        name: 'Alt Madlitz, Ausbau',
    },
    {
        id: '900310745',
        name: 'Briesen (Mark), Schule',
    },
    {
        id: '900310876',
        name: 'Jacobsdorf (Mark), Dorf',
    },
    {
        id: '900310009',
        name: 'Pillgram, Schulstr.',
    },
    {
        id: '900210544',
        name: 'Ketzin (Havel), Ärztehaus',
    },
    {
        id: '900310969',
        name: 'Petersdorf (bei Briesen), Gaststätte',
    },
    {
        id: '900310973',
        name: 'Petersdorf (bei Briesen), Vorwerk',
    },
    {
        id: '900230041',
        name: 'Potsdam, Eichenweg',
    },
    {
        id: '900311270',
        name: 'Dubrow',
    },
    {
        id: '900310753',
        name: 'Demnitz, Kirche',
    },
    {
        id: '900310808',
        name: 'Fürstenwalde, Rauener Str.',
    },
    {
        id: '900310992',
        name: 'Rauen, Plantagenweg',
    },
    {
        id: '900310989',
        name: 'Rauen, Baumschulenweg',
    },
    {
        id: '900230049',
        name: 'Potsdam, Eduard-Claudius-Str./Drewitzer Str.',
    },
    {
        id: '900310991',
        name: 'Rauen, Großer Stein',
    },
    {
        id: '900311089',
        name: 'Wilmersdorf (bei Briesen), Vorwerk 1',
    },
    {
        id: '900230245',
        name: 'Potsdam, Finkenweg/Brauhausberg',
    },
    {
        id: '900310632',
        name: 'Steinhöfel (LOS), Neubau',
    },
    {
        id: '900230044',
        name: 'Potsdam, Filmpark Babelsberg',
    },
    {
        id: '900220312',
        name: 'Potsdam, Rotkehlchenweg',
    },
    {
        id: '900310633',
        name: 'Steinhöfel (LOS), Charlottenhofer Weg',
    },
    {
        id: '900210261',
        name: 'Premnitz, Von-Blücher-Str.',
    },
    {
        id: '900311047',
        name: 'Steinhöfel (LOS), Altes Vorwerk',
    },
    {
        id: '900311044',
        name: 'Steinhöfel (LOS), Abzweig Charlottenhof',
    },
    {
        id: '900220314',
        name: 'Potsdam, Krampnitzsee',
    },
    {
        id: '900230190',
        name: 'Potsdam, Eichenring',
    },
    {
        id: '900310762',
        name: 'Falkenberg (bei Briesen), Am Park',
    },
    {
        id: '900311090',
        name: 'Wilmersdorf (bei Briesen), Vorwerk 2',
    },
    {
        id: '900311088',
        name: 'Wilmersdorf (bei Briesen), Am Teich',
    },
    {
        id: '900311037',
        name: 'Spreenhagen, Markgrafpiesker Str.',
    },
    {
        id: '900311032',
        name: 'Spreenhagen, Dickdamm',
    },
    {
        id: '900311383',
        name: 'Eisenhüttenstadt, ZOB',
    },
    {
        id: '900311309',
        name: 'Eisenhüttenstadt, Bahnhofstr.',
    },
    {
        id: '900435227',
        name: 'Lauchhammer West, Wasserwerk',
    },
    {
        id: '900311310',
        name: 'Eisenhüttenstadt, Wilhelmstr.',
    },
    {
        id: '900311308',
        name: 'Eisenhüttenstadt, Bhf/Glashüttenstr.',
    },
    {
        id: '900311380',
        name: 'Eisenhüttenstadt, Oderlandstr.',
    },
    {
        id: '900311348',
        name: 'Eisenhüttenstadt, Am Kanal',
    },
    {
        id: '900311315',
        name: 'Eisenhüttenstadt, City Center',
    },
    {
        id: '900311353',
        name: 'Eisenhüttenstadt, Lindenallee',
    },
    {
        id: '900435223',
        name: 'Lauchhammer Ost, Schule',
    },
    {
        id: '900435221',
        name: 'Lauchhammer Ost, Ernst-Thälmann-Ring',
    },
    {
        id: '900311382',
        name: 'Eisenhüttenstadt, Werkstr.',
    },
    {
        id: '900311329',
        name: 'Eisenhüttenstadt, Normaluhr',
    },
    {
        id: '900311332',
        name: 'Eisenhüttenstadt, ArcelorMittal Tor 1',
    },
    {
        id: '900311331',
        name: 'Eisenhüttenstadt, ArcelorMittal Str. 20',
    },
    {
        id: '900435220',
        name: 'Lauchhammer Ost, Stadion',
    },
    {
        id: '900311326',
        name: 'Eisenhüttenstadt, ArcelorMittal KSW',
    },
    {
        id: '900435201',
        name: 'Lauchhammer West, Ruhlander Str.',
    },
    {
        id: '900311312',
        name: 'Eisenhüttenstadt, Grünstr.',
    },
    {
        id: '900311327',
        name: 'Eisenhüttenstadt, ArcelorMittal KWW',
    },
    {
        id: '900311364',
        name: 'Eisenhüttenstadt, Poststr.',
    },
    {
        id: '900311355',
        name: 'Eisenhüttenstadt, Mittelschleuse',
    },
    {
        id: '900311336',
        name: 'Eisenhüttenstadt, Ludmilla-Hypius-Weg',
    },
    {
        id: '900311352',
        name: 'Eisenhüttenstadt, Krankenhaus',
    },
    {
        id: '900275150',
        name: 'Brandenburg, Am Stadion/Industriemuseum',
    },
    {
        id: '900205750',
        name: 'Giesenhorst, Feuerwehr',
    },
    {
        id: '900205043',
        name: 'Kyritz, Wolfswinkel',
    },
    {
        id: '900245793',
        name: 'Luckenwalde, Grünstr.',
    },
    {
        id: '900311304',
        name: 'Eisenhüttenstadt, Amtsgericht',
    },
    {
        id: '900311320',
        name: 'Eisenhüttenstadt, Diehloer Str.',
    },
    {
        id: '900435479',
        name: 'Grünewalde, Lindenallee',
    },
    {
        id: '900435353',
        name: 'Lauchhammer Ost, Kastanienhof',
    },
    {
        id: '900311357',
        name: 'Eisenhüttenstadt, Neuzeller Str.',
    },
    {
        id: '900311311',
        name: 'Eisenhüttenstadt, Beeskower Str.',
    },
    {
        id: '900435291',
        name: 'Lauchhammer West, Senftenberger Str.',
    },
    {
        id: '900311374',
        name: 'Eisenhüttenstadt, Städt. Alten- und Pflegeheim',
    },
    {
        id: '900311634',
        name: 'Ziltendorf, Schule (Vorplatz)',
    },
    {
        id: '900311632',
        name: 'Ziltendorf, Kreuzung',
    },
    {
        id: '900311633',
        name: 'Ziltendorf, Oderstr.',
    },
    {
        id: '900435167',
        name: 'Lauchhammer Süd, Siedlung',
    },
    {
        id: '900435163',
        name: 'Lauchhammer Ost, Wilhelm-Külz-Str.',
    },
    {
        id: '900261140',
        name: 'Zeuthen, Regensburger Str.',
    },
    {
        id: '900311621',
        name: 'Wiesenau, Dorfstr.',
    },
    {
        id: '900311622',
        name: 'Wiesenau, Gärtnerei',
    },
    {
        id: '900435148',
        name: 'Grünewalde, Ahornallee',
    },
    {
        id: '900261141',
        name: 'Zeuthen, Delmenhorster Str.',
    },
    {
        id: '900320250',
        name: 'Rüdersdorf, Krankenhaus',
    },
    {
        id: '900320252',
        name: 'Rüdersdorf, Waldstr.',
    },
    {
        id: '900311591',
        name: 'Vogelsang (LOS), Frankfurter Str.',
    },
    {
        id: '900311330',
        name: 'Eisenhüttenstadt, QualifizierungsCentrum',
    },
    {
        id: '900311300',
        name: 'Eisenhüttenstadt, Alte Schönfließer Wache',
    },
    {
        id: '900435198',
        name: 'Lauchhammer Süd, Emanuelstr.',
    },
    {
        id: '900435197',
        name: 'Lauchhammer Süd, Industriekraftwerk',
    },
    {
        id: '900311325',
        name: 'Eisenhüttenstadt, ArcelorMittal Eingang B 112',
    },
    {
        id: '900261139',
        name: 'Zeuthen, Gemeindeverwaltung',
    },
    {
        id: '900311356',
        name: 'Eisenhüttenstadt, Müllroser Str.',
    },
    {
        id: '900311350',
        name: 'Eisenhüttenstadt, Mielenzhafen',
    },
    {
        id: '900311378',
        name: 'Eisenhüttenstadt, Fröbelring',
    },
    {
        id: '900311617',
        name: 'Wellmitz, Hofstelle',
    },
    {
        id: '900311321',
        name: 'Eisenhüttenstadt, Eichendorffstr.',
    },
    {
        id: '900310029',
        name: 'Eisenhüttenstadt, Kieskuppenweg',
    },
    {
        id: '900275147',
        name: 'Brandenburg, Luckenberger Str.',
    },
    {
        id: '900311041',
        name: 'Spreenhagen, Winkel',
    },
    {
        id: '900310862',
        name: 'Hangelsberg, Spreetal',
    },
    {
        id: '900230188',
        name: 'Potsdam, Am Hämphorn',
    },
    {
        id: '900415030',
        name: 'Finsterwalde, Friedrichpassage',
    },
    {
        id: '230177',
        name: 'Potsdam, Rote Kaserne/Nedlitzer Str.',
    },
    {
        id: '900310864',
        name: 'Hangelsberg, Schule',
    },
    {
        id: '900416059',
        name: 'Prösen, Schleusenhaus',
    },
    {
        id: '900230012',
        name: 'Potsdam, Am Findling/Willi-Frohwein-Platz',
    },
    {
        id: '900310861',
        name: 'Hangelsberg, Waldschloss',
    },
    {
        id: '900310965',
        name: 'Neumönchwinkel',
    },
    {
        id: '900310872',
        name: 'Hasenfelde, Waldhaus',
    },
    {
        id: '900310929',
        name: 'Markgrafpieske, Langendamm',
    },
    {
        id: '900311029',
        name: 'Grünheide, Spreewerder Fasanenstr.',
    },
    {
        id: '900230098',
        name: 'Potsdam, Am Fenn',
    },
    {
        id: '900310007',
        name: 'Jacobsdorf (Mark), Bhf',
    },
    {
        id: '900310635',
        name: 'Spreeau, Sieverslake',
    },
    {
        id: '900310636',
        name: 'Spreeau, Freienbrink Dorfstr.',
    },
    {
        id: '900310863',
        name: 'Hangelsberg, Wulkow',
    },
    {
        id: '900311024',
        name: 'Spreeau, Freienbrink HLZ',
    },
    {
        id: '900311038',
        name: 'Spreenhagen, Pudel',
    },
    {
        id: '900311040',
        name: 'Spreenhagen, Storkower Str.',
    },
    {
        id: '900311031',
        name: 'Spreenhagen, Amtsverwaltung',
    },
    {
        id: '900311034',
        name: 'Spreenhagen, Artur-Becker-Ring',
    },
    {
        id: '900311035',
        name: 'Spreenhagen, Latzwall I',
    },
    {
        id: '900311036',
        name: 'Spreenhagen, Latzwall II',
    },
    {
        id: '900230158',
        name: 'Potsdam, Am Pfingstberg',
    },
    {
        id: '900310867',
        name: 'Hartmannsdorf (bei Storkow), Gemeinde',
    },
    {
        id: '900310868',
        name: 'Hartmannsdorf (bei Storkow), Wiesenweg',
    },
    {
        id: '900230172',
        name: 'Potsdam, Am Neuen Garten/Große Weinmeisterstr.',
    },
    {
        id: '900310964',
        name: 'Neuhartmannsdorf',
    },
    {
        id: '900311025',
        name: 'Spreeau, Freienbrink Nord',
    },
    {
        id: '900311145',
        name: 'Fürstenwalde, Ziegeleiweg',
    },
    {
        id: '900311026',
        name: 'Mönchwinkel, Dorf',
    },
    {
        id: '900087172',
        name: 'Urban Tech Republic',
    },
    {
        id: '900311027',
        name: 'Mönchwinkel, Pumpenhaus',
    },
    {
        id: '900311023',
        name: 'Spreeau, Freienbrink B 4',
    },
    {
        id: '900311365',
        name: 'Eisenhüttenstadt, Robert-Koch-Str.',
    },
    {
        id: '900311097',
        name: 'Woltersdorf (LOS), Wilhelm-Tell-Platz',
    },
    {
        id: '900310574',
        name: 'Schöneiche (bei Berlin), Prager Str.',
    },
    {
        id: '900275816',
        name: 'Brandenburg, Schlachthof',
    },
    {
        id: '900311340',
        name: 'Eisenhüttenstadt, Friedensplatz',
    },
    {
        id: '900311347',
        name: 'Eisenhüttenstadt, Inselfriedhof',
    },
    {
        id: '900311384',
        name: 'Eisenhüttenstadt, An der Schleuse',
    },
    {
        id: '900311316',
        name: 'Eisenhüttenstadt, Diesterwegring',
    },
    {
        id: '900311376',
        name: 'Eisenhüttenstadt, Fährstr.',
    },
    {
        id: '900220023',
        name: 'Michendorf, Bhf/Bahnstr.',
    },
    {
        id: '900311377',
        name: 'Eisenhüttenstadt, Am Trockendock',
    },
    {
        id: '900260686',
        name: 'Friedersdorf (LDS), Brandenburger Str.',
    },
    {
        id: '900311362',
        name: 'Eisenhüttenstadt, Rathaus',
    },
    {
        id: '900311363',
        name: 'Eisenhüttenstadt, Friedrich-Engels-Str.',
    },
    {
        id: '900275440',
        name: 'Brandenburg, Am Turnerheim',
    },
    {
        id: '900275439',
        name: 'Brandenburg, Am Rehhagen',
    },
    {
        id: '900310865',
        name: 'Hangelsberg, Wulkower Weg',
    },
    {
        id: '900310021',
        name: 'Schöneiche (bei Berlin), Dorfaue',
    },
    {
        id: '900310860',
        name: 'Hangelsberg, Berliner Landstr.',
    },
    {
        id: '900311125',
        name: 'Fürstenwalde, Heideland',
    },
    {
        id: '900310014',
        name: 'Schöneiche (bei Berlin), Lübecker Str.',
    },
    {
        id: '900220038',
        name: 'Beelitz-Heilstätten, Bhf/Süd',
    },
    {
        id: '000311609002',
        name: 'Saathain, Gut',
    },
    {
        id: '900230150',
        name: 'Potsdam, Alter Tornow',
    },
    {
        id: '900310502',
        name: 'Schöneiche (bei Berlin), C.-Zetkin-Str.',
    },
    {
        id: '900310503',
        name: 'Schöneiche (bei Berlin), Hamburger Str.',
    },
    {
        id: '900311012',
        name: 'Schöneiche (bei Berlin), Kieferndamm',
    },
    {
        id: '900311014',
        name: 'Schöneiche (bei Berlin), Steinstr.',
    },
    {
        id: '900311096',
        name: 'Woltersdorf (LOS), Vogelsdorfer Platz',
    },
    {
        id: '900311095',
        name: 'Woltersdorf (LOS), Schule',
    },
    {
        id: '900310805',
        name: 'Fürstenwalde, Palmnicken OSZ',
    },
    {
        id: '900230186',
        name: 'Potsdam, Schloss Sacrow',
    },
    {
        id: '900230183',
        name: 'Potsdam, Rote-Kreuz-Str.',
    },
    {
        id: '900310926',
        name: 'Lindow (LOS), Abzweig',
    },
    {
        id: '900310766',
        name: 'Friedland, Schule',
    },
    {
        id: '900310701',
        name: 'Ahrensdorf (LOS), Premsdorfer Str.',
    },
    {
        id: '900210675',
        name: 'Dallgow-Döberitz, Seniorenzentrum St. Johannes',
    },
    {
        id: '900310717',
        name: 'Beeskow, Hufenfeldweg',
    },
    {
        id: '900310626',
        name: 'Beeskow, Ringstr./Bahnhofstr.',
    },
    {
        id: '900310765',
        name: 'Friedland, Markt',
    },
    {
        id: '900311062',
        name: 'Stremmen, Dorf',
    },
    {
        id: '900310790',
        name: 'Fürstenwalde, Friesenstadion',
    },
    {
        id: '900310764',
        name: 'Friedland, Ausbau',
    },
    {
        id: '900310760',
        name: 'Falkenberg (bei Beeskow), Dorf',
    },
    {
        id: '900311318',
        name: 'Eisenhüttenstadt, Diehlo Dorfstr.',
    },
    {
        id: '900310787',
        name: 'Fürstenwalde, Hegelstr.',
    },
    {
        id: '900310927',
        name: 'Lindow (LOS), Dorf',
    },
    {
        id: '900311101',
        name: 'Zeust, Kreuzung',
    },
    {
        id: '900311402',
        name: 'Fünfeichen, E.-Thälmann-Str.',
    },
    {
        id: '900311070',
        name: 'Treppeln, Dorf',
    },
    {
        id: '900230251',
        name: 'Potsdam, Küsselstr.',
    },
    {
        id: '900311071',
        name: 'Treppeln, Schlaubemühle',
    },
    {
        id: '900311073',
        name: 'Weichensdorf, Dorf',
    },
    {
        id: '900311074',
        name: 'Weichensdorf, Sägewerk',
    },
    {
        id: '900311075',
        name: 'Weichensdorf, Waldsiedlung',
    },
    {
        id: '900311078',
        name: 'Wendisch Rietz, Festwiese',
    },
    {
        id: '900311079',
        name: 'Wendisch Rietz, Heideweg',
    },
    {
        id: '900311076',
        name: 'Wendisch Rietz, Am Glubigsee',
    },
    {
        id: '900230203',
        name: 'Potsdam, Persiusstr.',
    },
    {
        id: '900310767',
        name: 'Friedland, Wuggelmühle',
    },
    {
        id: '900311094',
        name: 'Treppeln, Am Wirchensee',
    },
    {
        id: '900311098',
        name: 'Wulfersdorf (LOS)',
    },
    {
        id: '900311099',
        name: 'Zeust, Ausbau',
    },
    {
        id: '900220377',
        name: 'Götz, Sportplatz',
    },
    {
        id: '900311100',
        name: 'Zeust, Dorf',
    },
    {
        id: '900230045',
        name: 'Potsdam, Kleine Str.',
    },
    {
        id: '900310809',
        name: 'Fürstenwalde, Rotkehlchenweg',
    },
    {
        id: '900310777',
        name: 'Fürstenwalde, E.-Weinert-Str.',
    },
    {
        id: '900311228',
        name: 'Bremsdorf, Bremsdorfer Mühle',
    },
    {
        id: '900310995',
        name: 'Rauen, Westend',
    },
    {
        id: '900310794',
        name: 'Fürstenwalde, Lange Str.',
    },
    {
        id: '900311227',
        name: 'Bremsdorf, B 246',
    },
    {
        id: '900310737',
        name: 'Birkholz (LOS), Gemeinde',
    },
    {
        id: '900230128',
        name: 'Potsdam, Reiterweg/Jägerallee',
    },
    {
        id: '900077159',
        name: 'Neuköllnische Brücke',
    },
    {
        id: '900310770',
        name: 'Fürstenwalde, Bahnhofstr.',
    },
    {
        id: '900310825',
        name: 'Fürstenwalde, Weinbergsgrund',
    },
    {
        id: '900310731',
        name: 'Behrensdorf',
    },
    {
        id: '900310820',
        name: 'Fürstenwalde, Tränkeweg',
    },
    {
        id: '900310815',
        name: 'Fürstenwalde, Siedlung',
    },
    {
        id: '900220376',
        name: 'Teltow, Albert-Wiebach-Str.',
    },
    {
        id: '900230115',
        name: 'Potsdam, Kläranlage Potsdam-Nord',
    },
    {
        id: '900310729',
        name: 'Beeskow, Verkehrsbetrieb',
    },
    {
        id: '900310796',
        name: 'Fürstenwalde, Lotichiusstr.',
    },
    {
        id: '900310792',
        name: 'Fürstenwalde, R.-Soland-Ring',
    },
    {
        id: '900311269',
        name: 'Dammendorf',
    },
    {
        id: '900310774',
        name: 'Fürstenwalde, Dr.-Goltz-Str.',
    },
    {
        id: '900310798',
        name: 'Fürstenwalde, J.-Marchlewski-Str.',
    },
    {
        id: '900310775',
        name: 'Fürstenwalde, Einkaufszentrum Nord',
    },
    {
        id: '900310818',
        name: 'Fürstenwalde, Steinhöfeler Chaussee',
    },
    {
        id: '900310793',
        name: 'Fürstenwalde, Ärztehaus Nord',
    },
    {
        id: '900310816',
        name: 'Fürstenwalde, Am Stern',
    },
    {
        id: '900310799',
        name: 'Fürstenwalde, Niederlagetor',
    },
    {
        id: '900310771',
        name: 'Fürstenwalde, Brücke',
    },
    {
        id: '900310751',
        name: 'Dahmsdorf (LOS)',
    },
    {
        id: '900310750',
        name: 'Chossewitz',
    },
    {
        id: '900310744',
        name: 'Briescht',
    },
    {
        id: '900230175',
        name: 'Potsdam, Langhansstr./Große Weinmeisterstr.',
    },
    {
        id: '900230105',
        name: 'Potsdam, Otto-Erich-Str.',
    },
    {
        id: '900311480',
        name: 'Müllrose, Jahnstr.',
    },
    {
        id: '900310921',
        name: 'Limsdorf, Dorf',
    },
    {
        id: '900340759',
        name: 'Buchheide, Forsthaus',
    },
    {
        id: '900310922',
        name: 'Limsdorf, Grubenmühle',
    },
    {
        id: '900311222',
        name: 'Biegenbrück, I',
    },
    {
        id: '900340624',
        name: 'Ringenwalde (UM), Feuerwehr',
    },
    {
        id: '900311223',
        name: 'Biegenbrück, Ortsmitte',
    },
    {
        id: '900310939',
        name: 'Möllen',
    },
    {
        id: '900310941',
        name: 'Möllendorf, Kreuzung',
    },
    {
        id: '900360062',
        name: 'Frankfurt (Oder), Hohenwalde Kreuzung',
    },
    {
        id: '900311482',
        name: 'Müllrose, Markt',
    },
    {
        id: '900310957',
        name: 'Neubrück (Spree), Brücke',
    },
    {
        id: '900310958',
        name: 'Neubrück (Spree), Gaststätte',
    },
    {
        id: '900230191',
        name: 'Potsdam, Mehlbeerenweg',
    },
    {
        id: '900310859',
        name: 'Günthersdorf',
    },
    {
        id: '900310918',
        name: 'Leißnitz',
    },
    {
        id: '900310910',
        name: 'Kuhnshof',
    },
    {
        id: '900310899',
        name: 'Klein Muckrow',
    },
    {
        id: '900310901',
        name: 'Kobbeln',
    },
    {
        id: '900310905',
        name: 'Kossenblatt, Dorf',
    },
    {
        id: '900039153',
        name: 'Neukladower Allee',
    },
    {
        id: '900310907',
        name: 'Kossenblatt, Zollbrücke',
    },
    {
        id: '900310898',
        name: 'Klein Briesen (LOS)',
    },
    {
        id: '900310908',
        name: 'Krachtsheide',
    },
    {
        id: '900310909',
        name: 'Beeskow, Krügersdorf',
    },
    {
        id: '900220301',
        name: 'Potsdam, Heinrich-Heine-Weg',
    },
    {
        id: '900310891',
        name: 'Friedland, Karras',
    },
    {
        id: '900220302',
        name: 'Potsdam, Bassewitz',
    },
    {
        id: '900310011',
        name: 'Groß Muckrow, Dorf',
    },
    {
        id: '900230136',
        name: 'Potsdam, Orangerie/Botanischer Garten',
    },
    {
        id: '900230132',
        name: 'Potsdam, Neues Palais',
    },
    {
        id: '900310914',
        name: 'Kunersdorf (LOS)',
    },
    {
        id: '900310975',
        name: 'Pfaffendorf, Lamitsch',
    },
    {
        id: '900310834',
        name: 'Görzig, Schule',
    },
    {
        id: '900311006',
        name: 'Friedland, Schadow',
    },
    {
        id: '900311080',
        name: 'Wendisch Rietz, Scharmützeleck',
    },
    {
        id: '900310609',
        name: 'Beeskow, Schneeberg/Stadtweg',
    },
    {
        id: '900230133',
        name: 'Potsdam, Campus Universität/A.-Geiger-Kolleg',
    },
    {
        id: '900311016',
        name: 'Schwenow',
    },
    {
        id: '900311061',
        name: 'Stremmen, Abzweig',
    },
    {
        id: '900230204',
        name: 'Potsdam, Lerchensteig/Kleingartenanlage',
    },
    {
        id: '900311064',
        name: 'Tauche (bei Beeskow), Dorf',
    },
    {
        id: '900310828',
        name: 'Glienicke (LOS), Försterei',
    },
    {
        id: '900311068',
        name: 'Trebatsch',
    },
    {
        id: '900311003',
        name: 'Sabrodt (Trebatsch)',
    },
    {
        id: '900311002',
        name: 'Rietz-Neuendorf',
    },
    {
        id: '900310967',
        name: 'Niewisch',
    },
    {
        id: '900310615',
        name: 'Beeskow, Oegeln',
    },
    {
        id: '900310968',
        name: 'Ölsen',
    },
    {
        id: '900039106',
        name: 'Parnemannweg',
    },
    {
        id: '900310841',
        name: 'Groß Rietz',
    },
    {
        id: '900310978',
        name: 'Pieskow',
    },
    {
        id: '900310726',
        name: 'Beeskow, Radinkendorf',
    },
    {
        id: '900310986',
        name: 'Ranzig, Gut',
    },
    {
        id: '900310839',
        name: 'Groß Briesen (LOS)',
    },
    {
        id: '900261194',
        name: 'Goschen, Kreuzung',
    },
    {
        id: '900310988',
        name: 'Raßmannsdorf',
    },
    {
        id: '900311000',
        name: 'Reudnitz',
    },
    {
        id: '900310807',
        name: 'Fürstenwalde, Platz der Solidarität',
    },
    {
        id: '900222259',
        name: 'Rädel, Gohlitzsee',
    },
    {
        id: '900310812',
        name: 'Fürstenwalde, Goethestr.',
    },
    {
        id: '900230095',
        name: 'Potsdam, Humboldtring/Lotte-Pulewka-Str.',
    },
    {
        id: '900310104',
        name: 'Bad Saarow, F.-Engels-Damm',
    },
    {
        id: '900310116',
        name: 'Bad Saarow, Strand',
    },
    {
        id: '900310631',
        name: 'Bad Saarow, Schulstr.',
    },
    {
        id: '900310113',
        name: 'Bad Saarow, Silberberg',
    },
    {
        id: '900311077',
        name: 'Wendisch Rietz, Zentrum',
    },
    {
        id: '900311009',
        name: 'Wendisch Rietz, Siedlung',
    },
    {
        id: '900230005',
        name: 'S Potsdam Hauptbahnhof/Nord ILB',
    },
    {
        id: '900310917',
        name: 'Langewahl, Gutswiesenweg',
    },
    {
        id: '900310916',
        name: 'Langewahl, Gemeinde',
    },
    {
        id: '900310102',
        name: 'Bad Saarow, Dachsberg',
    },
    {
        id: '900230047',
        name: 'Potsdam, Horstweg/Großbeerenstr.',
    },
    {
        id: '900310915',
        name: 'Alt Golm, Deponie',
    },
    {
        id: '900310554',
        name: 'Erkner, Am Rund',
    },
    {
        id: '900310946',
        name: 'Neu Golm',
    },
    {
        id: '900310110',
        name: 'Bad Saarow, Jägerstr.',
    },
    {
        id: '900311460',
        name: 'Lawitz, Dorf',
    },
    {
        id: '900310716',
        name: 'Beeskow, Forsthaus',
    },
    {
        id: '900230010',
        name: 'Potsdam, Jagdhausstr.',
    },
    {
        id: '900230129',
        name: 'Potsdam, Jägertor/Justizzentrum',
    },
    {
        id: '900310718',
        name: 'Beeskow, Industriestr.',
    },
    {
        id: '900230054',
        name: 'Potsdam, Institut für Agrartechnik',
    },
    {
        id: '900310700',
        name: 'Ahrensdorf (LOS), Dorf',
    },
    {
        id: '900310721',
        name: 'Beeskow, Landratsamt',
    },
    {
        id: '900310727',
        name: 'Beeskow, Schützenstr.',
    },
    {
        id: '900310895',
        name: 'Kienbaum, Dorfstr.',
    },
    {
        id: '900230055',
        name: 'Potsdam, Höhenstr.',
    },
    {
        id: '900310866',
        name: 'Hartensdorf',
    },
    {
        id: '900311424',
        name: 'Groß Lindow, Weißenberg',
    },
    {
        id: '900311236',
        name: 'Brieskow-Finkenheerd, Kita',
    },
    {
        id: '900220453',
        name: 'Potsdam, Golmer Fichten',
    },
    {
        id: '900311238',
        name: 'Brieskow-Finkenheerd, Amtsverwaltung',
    },
    {
        id: '900311234',
        name: 'Brieskow-Finkenheerd, Einkaufszentrum',
    },
    {
        id: '900311237',
        name: 'Brieskow-Finkenheerd, R.-Sonnenburg-Str.',
    },
    {
        id: '900230197',
        name: 'Potsdam, Zum Großen Herzberg',
    },
    {
        id: '900311235',
        name: 'Brieskow-Finkenheerd, Lindenstr.',
    },
    {
        id: '900311423',
        name: 'Groß Lindow, Siedlung',
    },
    {
        id: '900311422',
        name: 'Groß Lindow, Schule',
    },
    {
        id: '900311420',
        name: 'Groß Lindow, Eiche',
    },
    {
        id: '900311421',
        name: 'Groß Lindow, I',
    },
    {
        id: '900311610',
        name: 'Weißenspring',
    },
    {
        id: '900311562',
        name: 'Schlaubehammer',
    },
    {
        id: '900230146',
        name: 'Potsdam, Luisenplatz-Nord/Park Sanssouci',
    },
    {
        id: '900311511',
        name: 'Neuzelle, Klosterteich',
    },
    {
        id: '900311510',
        name: 'Neuzelle, Gewerbegebiet',
    },
    {
        id: '900311512',
        name: 'Neuzelle, Kummro',
    },
    {
        id: '900210598',
        name: 'Wustermark, Hafenstr.',
    },
    {
        id: '900311430',
        name: 'Henzendorf',
    },
    {
        id: '900311251',
        name: 'Coschen, Dorf',
    },
    {
        id: '900230092',
        name: 'Potsdam, Hermann-Maaß-Str.',
    },
    {
        id: '900311615',
        name: 'Wellmitz, Siedlung',
    },
    {
        id: '900311541',
        name: 'Ratzdorf',
    },
    {
        id: '900210597',
        name: 'Wustermark, Duisburger Str.',
    },
    {
        id: '900230046',
        name: 'Potsdam, Heinrich-von-Kleist-Str.',
    },
    {
        id: '900311092',
        name: 'Wilmersdorf (bei Pfaffendorf), Am Dorfteich',
    },
    {
        id: '900230189',
        name: 'Potsdam, Sacrower See',
    },
    {
        id: '900310105',
        name: 'Bad Saarow, Fürstenwalder Str.',
    },
    {
        id: '900310778',
        name: 'Fürstenwalde, Fliederweg',
    },
    {
        id: '900310800',
        name: 'Fürstenwalde, e.dis',
    },
    {
        id: '900230127',
        name: 'Potsdam, Ruinenbergstr.',
    },
    {
        id: '900310629',
        name: 'Fürstenwalde, Reifenwerk',
    },
    {
        id: '900310630',
        name: 'Fürstenwalde, Rosa-Luxemburg-Str.',
    },
    {
        id: '900310873',
        name: 'Fürstenwalde, Rathausstr.',
    },
    {
        id: '900310769',
        name: 'Fürstenwalde, Autobahn',
    },
    {
        id: '900310810',
        name: 'Fürstenwalde, Saarower Chaussee',
    },
    {
        id: '900230093',
        name: 'Potsdam, Karl-Marx-Str./Behringstr.',
    },
    {
        id: '900310972',
        name: 'Petersdorf (bei Fürstenwalde), Seeschloß',
    },
    {
        id: '900230252',
        name: 'Potsdam, Kaiser-Friedrich-Str./Polizei',
    },
    {
        id: '900310970',
        name: 'Petersdorf (bei Fürstenwalde), Dorfanger',
    },
    {
        id: '900310722',
        name: 'Beeskow, Neuendorf Abzweig',
    },
    {
        id: '900310782',
        name: 'Fürstenwalde, Gewerbe Ost',
    },
    {
        id: '900310811',
        name: 'Fürstenwalde, Samariteranstalt',
    },
    {
        id: '900310822',
        name: 'Fürstenwalde, Wassergasse',
    },
    {
        id: '900310781',
        name: 'Fürstenwalde, Geschwister-Scholl-Str.',
    },
    {
        id: '900310627',
        name: 'Fürstenwalde, Stadtzentrum',
    },
    {
        id: '900310773',
        name: 'Fürstenwalde, Busverkehr',
    },
    {
        id: '900310788',
        name: 'Fürstenwalde, Heimattiergarten',
    },
    {
        id: '900310821',
        name: 'Fürstenwalde, Wacholderstr.',
    },
    {
        id: '900310725',
        name: 'Beeskow, Ostkreuz',
    },
    {
        id: '900310768',
        name: 'Fürstenwalde, An der Kohlenbahn',
    },
    {
        id: '900310829',
        name: 'Glienicke (LOS), Kindergarten',
    },
    {
        id: '900310719',
        name: 'Beeskow, Kolonie',
    },
    {
        id: '900310109',
        name: 'Bad Saarow, HELIOS Klinikum',
    },
    {
        id: '900310827',
        name: 'Glienicke (LOS), Ausbau',
    },
    {
        id: '900310040',
        name: 'Bad Saarow, Bhf',
    },
    {
        id: '900230192',
        name: 'Potsdam, Am Grünen Weg',
    },
    {
        id: '900310925',
        name: 'Lindenberg (Mark), Schule',
    },
    {
        id: '900230166',
        name: 'Potsdam, Am Hirtengraben',
    },
    {
        id: '900275301',
        name: 'Brandenburg, Betriebshof Hohenstücken',
    },
    {
        id: '900160526',
        name: 'Fanningerstr.',
    },
    {
        id: '000300220034',
        name: 'S Anhalter Bahnhof',
    },
    {
        id: '000300220027',
        name: 'S Anhalter Bahnhof',
    },
    {
        id: '000300236014',
        name: 'S Botanischer Garten',
    },
    {
        id: '000300830020',
        name: 'Brück, Bhf',
    },
    {
        id: '000301383002',
        name: 'Falkenhagen (PR), Gewerbepark Prignitz',
    },
    {
        id: '000300774002',
        name: 'Templin-Ahrensdorf (UM), Bhf',
    },
    {
        id: '000300757006',
        name: 'Pritzerbe, Bhf',
    },
    {
        id: '000300221009',
        name: 'S Savignyplatz',
    },
    {
        id: '000300219018',
        name: 'S Bellevue',
    },
    {
        id: '000300014004',
        name: 'S+U Yorckstr.',
    },
    {
        id: '000300823009',
        name: 'Wusterwitz, Bhf',
    },
    {
        id: '000300385007',
        name: 'Roederplatz',
    },
    {
        id: '000300125006',
        name: 'U Freie Universität (Thielplatz)',
    },
    {
        id: '000300554010',
        name: 'Neustadt (Dosse), Bhf',
    },
    {
        id: '000300377007',
        name: 'Kniprodestr./Danziger Str.',
    },
    {
        id: '000300034008',
        name: 'U Parchimer Allee',
    },
    {
        id: '000300732008',
        name: 'Pinnow (UM), Bhf',
    },
    {
        id: '900416075',
        name: 'Rehfeld (EE), Lindenstr.',
    },
    {
        id: '000300840003',
        name: 'Treuenbrietzen, Bhf Süd',
    },
    {
        id: '000300824038',
        name: 'Fürstenwalde, Bhf',
    },
    {
        id: '000300190025',
        name: 'S Baumschulenweg',
    },
    {
        id: '000300080005',
        name: 'U Senefelderplatz',
    },
    {
        id: '000300824037',
        name: 'Fürstenwalde, Bhf',
    },
    {
        id: '000300729010',
        name: 'Perleberg, Bhf',
    },
    {
        id: '000300101008',
        name: 'U Görlitzer Bahnhof',
    },
    {
        id: '000300633003',
        name: 'Brandenburg, Altstadt',
    },
    {
        id: '900416072',
        name: 'Rehfeld (EE), Bhf',
    },
    {
        id: '000300840004',
        name: 'Treuenbrietzen, Bhf Süd',
    },
    {
        id: '000300101007',
        name: 'U Görlitzer Bahnhof',
    },
    {
        id: '000300613006',
        name: 'Bad Saarow, Bhf',
    },
    {
        id: '000300603005',
        name: 'Tantow, Bhf',
    },
    {
        id: '900341063',
        name: 'Schmiedeberg, Mitte',
    },
    {
        id: '900341103',
        name: 'Schwedt, Am Külzviertel',
    },
    {
        id: '900340387',
        name: 'Jahnkeshof',
    },
    {
        id: '000300109009',
        name: 'U Paracelsus-Bad',
    },
    {
        id: '710008010381',
        name: 'Wismar, Bhf',
    },
    {
        id: '710008010324',
        name: 'Schwerin, Hbf',
    },
    {
        id: '900192512',
        name: 'Grimaustr.',
    },
    {
        id: '000312263003',
        name: 'Strasburg, See',
    },
    {
        id: '3',
        name: 'Hoyerswerda, Bhf',
    },
    {
        id: '710008010226',
        name: 'Magdeburg-Neustadt, Bhf',
    },
    {
        id: '710008013455',
        name: 'Magdeburg, Herrenkrug Bahnhof',
    },
    {
        id: '710008010224',
        name: 'Magdeburg, Hbf',
    },
    {
        id: '710008011294',
        name: 'Burg (bei Magdeburg), Bhf',
    },
    {
        id: '900120716',
        name: 'Landsberger Allee/Petersburger Str.',
    },
    {
        id: '900220658',
        name: 'Caputh-Geltow, Bhf',
    },
    {
        id: '710008010047',
        name: 'Biederitz, Bhf',
    },
    {
        id: '710008010123',
        name: 'Genthin, Bhf',
    },
    {
        id: '850000640201',
        name: 'Hoyerswerda, Behördenpark',
    },
    {
        id: '900341340',
        name: 'Leopoldsthal, Nord',
    },
    {
        id: '710008010151',
        name: 'Güsen, Bhf',
    },
    {
        id: '710008011630',
        name: 'Gerwisch, Bhf',
    },
    {
        id: '710008012264',
        name: 'Lübstorf, Bhf',
    },
    {
        id: '710008010018',
        name: 'Bad Kleinen, Bhf',
    },
    {
        id: '000300180014',
        name: 'S Karlshorst',
    },
    {
        id: '710008012381',
        name: 'Möser, Bhf',
    },
    {
        id: '900310535',
        name: 'Schöneiche (bei Berlin), Werner-von-Siemens-Str.',
    },
    {
        id: '900310522',
        name: 'Schöneiche (bei Berlin), Florastr.',
    },
    {
        id: '900310527',
        name: 'Schöneiche (bei Berlin), Reitanlage',
    },
    {
        id: '900310524',
        name: 'Schöneiche (bei Berlin), Kulturgießerei',
    },
    {
        id: '900310536',
        name: 'Woltersdorf (LOS), Zu den Eichen',
    },
    {
        id: '900310523',
        name: 'Schöneiche (bei Berlin), Freizeitcenter',
    },
    {
        id: '900350852',
        name: 'Lindenberg (BAR), Schule',
    },
    {
        id: '900340459',
        name: 'Lychen, Zehdenicker Str.',
    },
    {
        id: '900310528',
        name: 'Schöneiche (bei Berlin), Rüdersdorfer Str.',
    },
    {
        id: '250000059002',
        name: 'Brandenburg, Am Piperfenn',
    },
    {
        id: '900210376',
        name: 'Falkensee, Chemnitzer Str./Wendeschleife',
    },
    {
        id: '900222272',
        name: 'Marzahna, Mühle',
    },
    {
        id: '000310008003',
        name: 'Linchenshöh',
    },
    {
        id: '900340003',
        name: 'Pinnow (UM), Bhf',
    },
    {
        id: '000302471003',
        name: 'Louisfelde',
    },
    {
        id: '900110521',
        name: 'Hufelandstr.',
    },
    {
        id: '250000577502',
        name: 'Kropstädt, Feuerwehr',
    },
    {
        id: '140095501191',
        name: 'Torgau, Bhf',
    },
    {
        id: '250000577501',
        name: 'Kropstädt, Feuerwehr',
    },
    {
        id: '000300674005',
        name: 'Klosterfelde, Bhf',
    },
    {
        id: '900340400',
        name: 'Klein Sperrenwalde, Abzweig',
    },
    {
        id: '900340260',
        name: 'Buchenhain, Abzweig Krewitz',
    },
    {
        id: '900340058',
        name: 'Hardenbeck, Rosenower Str.',
    },
    {
        id: '900151004',
        name: 'Zingster Str./Ribnitzer Str.',
    },
    {
        id: '900210032',
        name: 'Falkensee, Bhf/Süd',
    },
    {
        id: '900435500',
        name: 'Senftenberg, Ernst-Thälmann-Str.',
    },
    {
        id: '900340329',
        name: 'Gollmitz (UM), Schule',
    },
    {
        id: '900340578',
        name: 'Rosenow, Dorf',
    },
    {
        id: '900340616',
        name: 'Steinrode, Dorf',
    },
    {
        id: '900220719',
        name: 'Werder (Havel), Haveltherme',
    },
    {
        id: '900340228',
        name: 'Berkholz (bei Boitzenburg), Neubau',
    },
    {
        id: '900260065',
        name: 'Brand, Tropical Islands Verwaltung',
    },
    {
        id: '900350321',
        name: 'Bernau, Edelweißstr.',
    },
    {
        id: '900340762',
        name: 'Gollmitz (UM), Am Parkweg',
    },
    {
        id: '250000579402',
        name: 'Boßdorf, Dorfteich',
    },
    {
        id: '900260072',
        name: 'Brand, Tropical Islands Campingplatz/Mobile Homes',
    },
    {
        id: '900340757',
        name: 'Krohnhorst, Abzweig',
    },
    {
        id: '250000579401',
        name: 'Boßdorf, Dorfteich',
    },
    {
        id: '900340475',
        name: 'Neu Kleinow',
    },
    {
        id: '900340691',
        name: 'Thomsdorf, Wendestelle',
    },
    {
        id: '900340690',
        name: 'Thomsdorf, Kirche',
    },
    {
        id: '900340310',
        name: 'Funkenhagen, Ausbau',
    },
    {
        id: '900415695',
        name: 'Herzberg (Elster), Falkenberger Str.',
    },
    {
        id: '900435557',
        name: 'Boblitz, Lindenstr.',
    },
    {
        id: '900340699',
        name: 'Türkshof, Dorf',
    },
    {
        id: '900340738',
        name: 'Wurlgrund',
    },
    {
        id: '250000577405',
        name: 'Lutherstadt Wittenberg, Hbf',
    },
    {
        id: '000306499003',
        name: 'Ev. Krankenhaus KEH',
    },
    {
        id: '900340821',
        name: 'Gramzow (UM), Gaststätte',
    },
    {
        id: '900340309',
        name: 'Funkenhagen, Abzweig Thomsdorf',
    },
    {
        id: '900340419',
        name: 'Krewitz',
    },
    {
        id: '900340227',
        name: 'Berkholz (bei Boitzenburg), Dorf',
    },
    {
        id: '900340743',
        name: 'Zerwelin, Abzweig',
    },
    {
        id: '900340243',
        name: 'Boitzenburg, Markt',
    },
    {
        id: '900340402',
        name: 'Kleinow (UM), Dorf',
    },
    {
        id: '900341115',
        name: 'Schwedt, Biesenbrower Str.',
    },
    {
        id: '070101099915',
        name: 'Tarifgrenze Berlin B/C Waltersd. Ch.',
    },
    {
        id: '070101099916',
        name: 'Tarifgrenze Berlin B/C Waltersd. Ch.',
    },
    {
        id: '070101099983',
        name: 'Tarifgrenze Berlin B/C A113',
    },
    {
        id: '900340774',
        name: 'Prenzlau, Angermünder Str.',
    },
    {
        id: '900340315',
        name: 'Gerswalde, Markt',
    },
    {
        id: '900341128',
        name: 'Schwedt, Gramzower Str.',
    },
    {
        id: '900340470',
        name: 'Moor (UM)',
    },
    {
        id: '900340609',
        name: 'Stegelitz, Abzweig',
    },
    {
        id: '900340562',
        name: 'Quast',
    },
    {
        id: '900340223',
        name: 'Beenz (bei Prenzlau)',
    },
    {
        id: '900340610',
        name: 'Stegelitz, Ausbau',
    },
    {
        id: '900340373',
        name: 'Hessenhagen',
    },
    {
        id: '900350474',
        name: 'Bernau, Weinbergstr.',
    },
    {
        id: '250000579202',
        name: 'Lutherstadt Wittenberg, Robert-Koch-Apotheke',
    },
    {
        id: '900083367',
        name: 'Seeadlerweg',
    },
    {
        id: '900340308',
        name: 'Drense, Ausbau',
    },
    {
        id: '900435885',
        name: 'Vetschau, Bahnhofstr.',
    },
    {
        id: '900340332',
        name: 'Grenz',
    },
    {
        id: '900205139',
        name: 'Kyritz, Bhf',
    },
    {
        id: '250000579201',
        name: 'Lutherstadt Wittenberg, Robert-Koch-Apotheke',
    },
    {
        id: '900340345',
        name: 'Grünow (bei Prenzlau), Abzweig',
    },
    {
        id: '900340013',
        name: 'Ewaldshof',
    },
    {
        id: '000300049001',
        name: 'U Paulsternstr.',
    },
    {
        id: '900340112',
        name: 'Angermünde, Fischerstr.',
    },
    {
        id: '900340346',
        name: 'Grünow (bei Prenzlau), Dorf',
    },
    {
        id: '900340633',
        name: 'Templin, Thermalbad',
    },
    {
        id: '900340675',
        name: 'Templin, Seehotel/Postheim',
    },
    {
        id: '000300049002',
        name: 'U Paulsternstr.',
    },
    {
        id: '900340660',
        name: 'Templin, Heimstr.',
    },
    {
        id: '900340645',
        name: 'Templin, Bahnhofstr.',
    },
    {
        id: '900415479',
        name: 'Herzberg (Elster), Gewerbepark Festplatz',
    },
    {
        id: '000300226050',
        name: 'S Wannsee',
    },
    {
        id: '900260024',
        name: 'Flughafen BER - Terminal 5',
    },
    {
        id: '900210369',
        name: 'Falkensee, Leipziger Str.',
    },
    {
        id: '900210371',
        name: 'Falkensee, Chemnitzer Str.',
    },
    {
        id: '900210338',
        name: 'Falkensee, Hallesche Str.',
    },
    {
        id: '900203898',
        name: 'Zehdenick, Neuhof',
    },
    {
        id: '000300127005',
        name: 'U Podbielskiallee',
    },
    {
        id: '000313621001',
        name: 'Milmersdorf, Bruchbude',
    },
    {
        id: '000300236013',
        name: 'S Botanischer Garten',
    },
    {
        id: '900350223',
        name: 'Althüttendorf, Glasstr.',
    },
    {
        id: '900340256',
        name: 'Bündigershof, Abzweig',
    },
    {
        id: '900200040',
        name: 'Lottschesee, Bhf',
    },
    {
        id: '000300793012',
        name: 'Schönerlinde (BAR), Bhf',
    },
    {
        id: '250000578701',
        name: 'Lutherstadt Wittenberg, Gewerbegebiet Nord',
    },
    {
        id: '250000578601',
        name: 'Lutherstadt Wittenberg, Trajuhn',
    },
    {
        id: '250000578502',
        name: 'Karlsfeld (Abtsdorf), Süd',
    },
    {
        id: '250000578501',
        name: 'Karlsfeld (Abtsdorf), Süd',
    },
    {
        id: '250000578402',
        name: 'Karlsfeld (Abtsdorf)',
    },
    {
        id: '250000578401',
        name: 'Karlsfeld (Abtsdorf)',
    },
    {
        id: '900340793',
        name: 'Eichhof',
    },
    {
        id: '250000578302',
        name: 'Jahmo (Kropstädt), Abzweig',
    },
    {
        id: '250000578301',
        name: 'Jahmo (Kropstädt), Abzweig',
    },
    {
        id: '900340455',
        name: 'Lychen, Schule',
    },
    {
        id: '250000578201',
        name: 'Kropstädt, Schäferei',
    },
    {
        id: '250000578102',
        name: 'Kropstädt, Jahmoer Str.',
    },
    {
        id: '250000578101',
        name: 'Kropstädt, Jahmoer Str.',
    },
    {
        id: '250000578002',
        name: 'Kropstädt, Gemeinde',
    },
    {
        id: '250000578001',
        name: 'Kropstädt, Gemeinde',
    },
    {
        id: '250000578602',
        name: 'Lutherstadt Wittenberg, Trajuhn',
    },
    {
        id: '250000578702',
        name: 'Lutherstadt Wittenberg, Gewerbegebiet Nord',
    },
    {
        id: '250000579102',
        name: 'Lutherstadt Wittenberg, Schulstr./Platz der Demokratie',
    },
    {
        id: '250000579101',
        name: 'Lutherstadt Wittenberg, Schulstr./Platz der Demokratie',
    },
    {
        id: '250000579002',
        name: 'Lutherstadt Wittenberg, Schulstr./KiKo',
    },
    {
        id: '250000579001',
        name: 'Lutherstadt Wittenberg, Schulstr./KiKo',
    },
    {
        id: '250000578902',
        name: 'Lutherstadt Wittenberg, Johannes-Runge-Weg',
    },
    {
        id: '250000578901',
        name: 'Lutherstadt Wittenberg, Johannes-Runge-Weg',
    },
    {
        id: '250000578802',
        name: 'Lutherstadt Wittenberg, Käthe-Kollwitz-Schule',
    },
    {
        id: '500000550901',
        name: 'Krajnik Dolny, Am Markt',
    },
    {
        id: '900341121',
        name: 'Schwedt, Felchower Str.',
    },
    {
        id: '250000578801',
        name: 'Lutherstadt Wittenberg, Käthe-Kollwitz-Schule',
    },
    {
        id: '900340754',
        name: 'Templin, Fasanenstr.',
    },
    {
        id: '900340636',
        name: 'Templin, Akzisehaus',
    },
    {
        id: '900341296',
        name: 'Zichow, Lindenweg',
    },
    {
        id: '900340676',
        name: 'Templin, Senioren-Landsitz',
    },
    {
        id: '900340666',
        name: 'Templin, Kuckucksheim',
    },
    {
        id: '900340638',
        name: 'Templin, Am Birkenhain',
    },
    {
        id: '900340697',
        name: 'Templin, Pionierbrücke',
    },
    {
        id: '900341136',
        name: 'Schwedt, Jüdenstr. Abzweig',
    },
    {
        id: '250000577802',
        name: 'Lutherstadt Wittenberg, Hauptpost',
    },
    {
        id: '250000577602',
        name: 'Lutherstadt Wittenberg, Fleischerstr.',
    },
    {
        id: '250000577404',
        name: 'Lutherstadt Wittenberg, Hbf',
    },
    {
        id: '900341158',
        name: 'Schwedt, Sporthalle',
    },
    {
        id: '900340809',
        name: 'Templin, Am Kurgebiet',
    },
    {
        id: '900340787',
        name: 'Templin, Neuer Weg',
    },
    {
        id: '900340786',
        name: 'Templin, Schinderkuhle',
    },
    {
        id: '900340785',
        name: 'Templin, Weinbergstr.',
    },
    {
        id: '900340640',
        name: 'Templin, Am Kanal',
    },
    {
        id: '900341155',
        name: 'Schwedt, Schillstr.',
    },
    {
        id: '000313102001',
        name: 'Woldegk, Prenzlauer Chaussee',
    },
    {
        id: '900340944',
        name: 'Kummerow (UM), Mitte',
    },
    {
        id: '900341160',
        name: 'Schwedt, Stadthäuser',
    },
    {
        id: '900193001',
        name: 'S Johannisthal',
    },
    {
        id: '900435121',
        name: 'Lindenau, Hauptstr.',
    },
    {
        id: '000300004161',
        name: 'S+U Potsdamer Platz',
    },
    {
        id: '000300004159',
        name: 'S+U Potsdamer Platz',
    },
    {
        id: '000300795008',
        name: 'Schönwalde (BAR), Bhf',
    },
    {
        id: '500000051301',
        name: 'Blücher, Abzweig',
    },
    {
        id: '900203517',
        name: 'Borgsdorf, Dornbuschweg',
    },
    {
        id: '710008013166',
        name: 'Uhyst',
    },
    {
        id: '710008012250',
        name: 'Lohsa',
    },
    {
        id: '710008012047',
        name: 'Klitten',
    },
    {
        id: '710009439932',
        name: 'Hoyerswerda, Neustadt',
    },
    {
        id: '710008012391',
        name: 'Mücka',
    },
    {
        id: '000008012200',
        name: 'Leipzig, Essener Str.',
    },
    {
        id: '900340096',
        name: 'Wilhelmshayn, Kreuzung',
    },
    {
        id: '900196001',
        name: 'S Grünbergallee',
    },
    {
        id: '900340810',
        name: 'Prenzlau, Berliner Str./B 109',
    },
    {
        id: '900340921',
        name: 'Karlsberg',
    },
    {
        id: '900222140',
        name: 'Nichel',
    },
    {
        id: '900230000',
        name: 'S Babelsberg',
    },
    {
        id: '900190701',
        name: 'S Treptower Park',
    },
    {
        id: '900340913',
        name: 'Hohenselchow, Kreuzung West',
    },
    {
        id: '500000066901',
        name: 'Strasburg, Markt',
    },
    {
        id: '500000066902',
        name: 'Strasburg, Markt',
    },
    {
        id: '900435129',
        name: 'Lipsa, Gasthaus',
    },
    {
        id: '900350153',
        name: 'Klandorf, Bhf',
    },
    {
        id: '900160704',
        name: 'S+U Lichtenberg',
    },
    {
        id: '900435382',
        name: 'Senftenberg, Großenhainer Str.',
    },
    {
        id: '900435390',
        name: 'Großräschen, Schule II',
    },
    {
        id: '900435399',
        name: 'Senftenberg, Krankenhausstr.',
    },
    {
        id: '250000579302',
        name: 'Lutherstadt Wittenberg, Ernst-Kamieth-Str.',
    },
    {
        id: '250000579301',
        name: 'Lutherstadt Wittenberg, Ernst-Kamieth-Str.',
    },
    {
        id: '250000577901',
        name: 'Lutherstadt Wittenberg, Neustr.',
    },
    {
        id: '900245022',
        name: 'Wünsdorf-Waldstadt, Bhf',
    },
    {
        id: '710008012644',
        name: 'Plau am See, Bhf',
    },
    {
        id: '900350828',
        name: 'Joachimsthal, Am Knick',
    },
    {
        id: '000300239016',
        name: 'S Schlachtensee',
    },
    {
        id: '000300239015',
        name: 'S Schlachtensee',
    },
    {
        id: '900311470',
        name: 'Mixdorf, Bhf',
    },
    {
        id: '000300795007',
        name: 'Schönwalde (BAR), Bhf',
    },
    {
        id: '500000073902',
        name: 'Bergholz (UER), Abzweig',
    },
    {
        id: '000310096003',
        name: 'Löcknitz, Kaufhaus',
    },
    {
        id: '050034454701',
        name: 'Löcknitz, Bhf',
    },
    {
        id: '900445622',
        name: 'Guben, Karl-Marx-Str./Neiße-Center',
    },
    {
        id: '900340253',
        name: 'Brüssow, Schule',
    },
    {
        id: '900100719',
        name: 'U Oranienburger Tor',
    },
    {
        id: '900415351',
        name: 'Falkenberg/E., Torgauer Str.',
    },
    {
        id: '900311065',
        name: 'Tauche (bei Beeskow), Schule',
    },
    {
        id: '900310981',
        name: 'Premsdorf',
    },
    {
        id: '900310625',
        name: 'Trebatsch, Sawall',
    },
    {
        id: '900310832',
        name: 'Görsdorf (bei Beeskow)',
    },
    {
        id: '900310830',
        name: 'Glowe',
    },
    {
        id: '900310736',
        name: 'Birkholz (LOS), Dorf',
    },
    {
        id: '900310869',
        name: 'Hasenfelde, Dorf',
    },
    {
        id: '900310746',
        name: 'Buchholz (LOS), An der Gaststätte',
    },
    {
        id: '900310831',
        name: 'Gölsdorf (LOS)',
    },
    {
        id: '900310877',
        name: 'Jänickendorf (LOS)',
    },
    {
        id: '900310713',
        name: 'Beerfelde, Kita',
    },
    {
        id: '900470264',
        name: 'Cottbus, Spitzwegstr.',
    },
    {
        id: '900445414',
        name: 'Fehrow, Kleine Gasse',
    },
    {
        id: '900446199',
        name: 'Schmogrow, Friedhof',
    },
    {
        id: '900446198',
        name: 'Schmogrow, Fehrower Weg',
    },
    {
        id: '900446383',
        name: 'Striesow, Abzw Marienberg',
    },
    {
        id: '900435585',
        name: 'Leipe, Wendeplatz',
    },
    {
        id: '900445259',
        name: 'Burg, Erlkönigweg',
    },
    {
        id: '900445275',
        name: 'Burg, Wendenkönig',
    },
    {
        id: '900310838',
        name: 'Gosen, Schillerhöhe',
    },
    {
        id: '900230161',
        name: 'Potsdam, Wasserwerk Wildpark',
    },
    {
        id: '900445540',
        name: 'Cottbus, Groß Gaglow Chausseestr.',
    },
    {
        id: '000301049002',
        name: 'Cottbus, Jessener Str.',
    },
    {
        id: '900445257',
        name: 'Burg, Buschmühle',
    },
    {
        id: '8012066',
        name: 'Königsborn',
    },
    {
        id: '8081270',
        name: 'Schönebeck-Frohse',
    },
    {
        id: '8080660',
        name: 'Magdeburg, Bhf Hasselbachplatz',
    },
    {
        id: '8013485',
        name: 'Magdeburg, Bhf SKET Industriepark',
    },
    {
        id: '8013456',
        name: 'Magdeburg, Bhf Buckau',
    },
    {
        id: '3019',
        name: 'Schönberg(Meckl)',
    },
    {
        id: '3138',
        name: 'Plüschow',
    },
    {
        id: '8012291',
        name: 'Magdeburg, Bhf Salbke',
    },
    {
        id: '8012287',
        name: 'Magdeburg, Bahnof Südost',
    },
    {
        id: '5162',
        name: 'Lüdersdorf(Meckl)',
    },
    {
        id: '3373',
        name: 'Herrnburg',
    },
    {
        id: '3294',
        name: 'Grieben(Meckl)',
    },
    {
        id: '5267',
        name: 'Bobitz',
    },
    {
        id: '58008',
        name: 'Lübeck St Jürgen',
    },
    {
        id: '900351000',
        name: 'Eberswalde, A.-Nobel-Str.',
    },
    {
        id: '900260053',
        name: 'Wildau, Südpromenade',
    },
    {
        id: '900260052',
        name: 'Wildau, Kurpark',
    },
    {
        id: '8012777',
        name: 'Rodleben',
    },
    {
        id: '8012478',
        name: 'Leipzig, Messe',
    },
    {
        id: '900360229',
        name: 'Frankfurt (Oder), Zum Schäfer',
    },
    {
        id: '900310000',
        name: 'Klein Schauen, Kreuzung',
    },
    {
        id: '900230249',
        name: 'Potsdam, Hoffbauer-Stiftung',
    },
    {
        id: '900320255',
        name: 'Rüdersdorf, Waldkater',
    },
    {
        id: '900320253',
        name: 'Rüdersdorf, Waldsiedlung',
    },
    {
        id: '900311338',
        name: 'Eisenhüttenstadt, Lilienthalring',
    },
    {
        id: '900311337',
        name: 'Eisenhüttenstadt, Keplerring',
    },
    {
        id: '900311333',
        name: 'Eisenhüttenstadt, Fritz-Heckert-Str.',
    },
    {
        id: '900311335',
        name: 'Eisenhüttenstadt, Fellertstr.',
    },
    {
        id: '900445270',
        name: 'Burg, Polenzweg',
    },
    {
        id: '8013428',
        name: 'Zschortau',
    },
    {
        id: '900435114',
        name: 'Lauchhammer Ost, Grünhauser Str.',
    },
    {
        id: '900260043',
        name: 'Bornsdorf, Kirche',
    },
    {
        id: '900230030',
        name: 'Potsdam, Schilfhof',
    },
    {
        id: '900215744',
        name: 'Pritzwalk, Hainholz',
    },
    {
        id: '900230147',
        name: 'Potsdam, Lilienthalstr.',
    },
    {
        id: '900210037',
        name: 'Barnewitz',
    },
    {
        id: '900222070',
        name: 'Garrey',
    },
    {
        id: '900260564',
        name: 'Waßmannsdorf, Ahornstr.',
    },
    {
        id: '900360175',
        name: 'Frankfurt (Oder), Neuberesinchen/Bus',
    },
    {
        id: '900360104',
        name: 'Frankfurt (Oder), Mühlental',
    },
    {
        id: '900360223',
        name: 'Frankfurt (Oder), Am Wasserturm',
    },
    {
        id: '900360064',
        name: 'Frankfurt (Oder), Am Wildpark',
    },
    {
        id: '900445268',
        name: 'Burg, Mellack',
    },
    {
        id: '900446423',
        name: 'Trebendorf, Hauptstr.',
    },
    {
        id: '900445756',
        name: 'Jänschwalde, Schule',
    },
    {
        id: '900445384',
        name: 'Drewitz, Kirche',
    },
    {
        id: '900446460',
        name: 'Turnow, Eiche',
    },
    {
        id: '900445261',
        name: 'Burg, Glück Auf',
    },
    {
        id: '900445266',
        name: 'Burg, Kollosche',
    },
    {
        id: '900445655',
        name: 'Guhrow',
    },
    {
        id: '900445228',
        name: 'Briesen (SPN), Friedhofsweg',
    },
    {
        id: '900445882',
        name: 'Kolkwitz, Am Moorgraben',
    },
    {
        id: '900446145',
        name: 'Radensdorf, Abzweig',
    },
    {
        id: '900446382',
        name: 'Steinitz, Kirche',
    },
    {
        id: '900210260',
        name: 'Quermathen',
    },
    {
        id: '900210516',
        name: 'Tremmen, Abzweig Zachow',
    },
    {
        id: '8012697',
        name: 'Rackwitz (bei Leipzig), Bhf',
    },
    {
        id: '710009550190',
        name: 'Nossentin, Bhf',
    },
    {
        id: '900210263',
        name: 'Premnitz, Bergstr./Vistrastr.',
    },
    {
        id: '900350833',
        name: 'Wandlitz, Jünemannplatz',
    },
    {
        id: '900321111',
        name: 'Bad Freienwalde, Victor-Blüthgen-Str.',
    },
    {
        id: '900321185',
        name: 'Bad Freienwalde, Scheunenstr.',
    },
    {
        id: '900321186',
        name: 'Bad Freienwalde, Ringstr.',
    },
    {
        id: '900260802',
        name: 'Deutsch Wusterhausen, Kirche',
    },
    {
        id: '900415053',
        name: 'Kleinkrausnik',
    },
    {
        id: '900320038',
        name: 'Strausberg, Waldseite',
    },
    {
        id: '900205459',
        name: 'Neuruppin, Gutshof',
    },
    {
        id: '900205439',
        name: 'Neuhof (OPR)',
    },
    {
        id: '900205371',
        name: 'Koppenbrück',
    },
    {
        id: '900205367',
        name: 'Koppenbrück, Ausbau',
    },
    {
        id: '900320037',
        name: 'Strausberg, Stadtseite',
    },
    {
        id: '900205733',
        name: 'Dranse, Seestr.',
    },
    {
        id: '710009950070',
        name: 'Stendal, Hbf',
    },
    {
        id: '710009550112',
        name: 'Schwerin, Hbf',
    },
    {
        id: '900350907',
        name: 'Bernau, Orionstr.',
    },
    {
        id: '6471',
        name: 'Ueckermünde',
    },
    {
        id: '22',
        name: 'Ueckermünde Stadthafen',
    },
    {
        id: '7479',
        name: 'Torgelow',
    },
    {
        id: '6445',
        name: 'Sandförde',
    },
    {
        id: '6476',
        name: 'Eggesin',
    },
    {
        id: '710009550024',
        name: 'Weißwasser (Oberlausitz), Bhf',
    },
    {
        id: '710009550023',
        name: 'Uhsmannsdorf, Bhf',
    },
    {
        id: '710009550021',
        name: 'Rietschen, Bhf',
    },
    {
        id: '710009550016',
        name: 'Hähnichen, Bhf',
    },
    {
        id: '8011961',
        name: 'Jeßnitz(Anh)',
    },
    {
        id: '900310042',
        name: 'Bad Saarow, Klinikum',
    },
    {
        id: '900205308',
        name: 'Goldbeck (bei Kyritz)',
    },
    {
        id: '710008010173',
        name: 'Holthusen, Bhf',
    },
    {
        id: '900275822',
        name: 'Brandenburg, Plaue Havelbogen',
    },
    {
        id: '900435911',
        name: 'Wormlage, Kirche',
    },
    {
        id: '900311072',
        name: 'Storkow, Wedemarker Str.',
    },
    {
        id: '710009550204',
        name: 'Lübz, Bhf',
    },
    {
        id: '710008012274',
        name: 'Lützow',
    },
    {
        id: '710009550193',
        name: 'Karow (Meckl), Bhf',
    },
    {
        id: '710009550200',
        name: 'Jasnitz, Bhf',
    },
    {
        id: '710009550189',
        name: 'Jabel (Meckl), Bhf',
    },
    {
        id: '710000999901',
        name: 'Inselstadt Malchow',
    },
    {
        id: '710008011908',
        name: 'Holdorf(Meckl)',
    },
    {
        id: '710009550202',
        name: 'Hagenow Land, Bhf',
    },
    {
        id: '710009550203',
        name: 'Hagenow, Bhf Stadt',
    },
    {
        id: '710009550199',
        name: 'Groß Laasch, Bhf',
    },
    {
        id: '710008011718',
        name: 'Groß Brütz',
    },
    {
        id: '710009550194',
        name: 'Gallin, Bhf',
    },
    {
        id: '710008011592',
        name: 'Gadebusch',
    },
    {
        id: '710009550197',
        name: 'Dütschow, Bhf',
    },
    {
        id: '710008011326',
        name: 'Crivitz',
    },
    {
        id: '710009550192',
        name: 'Alt Schwerin, Bhf',
    },
    {
        id: '900162507',
        name: 'Wallensteinstr.',
    },
    {
        id: '900260056',
        name: 'Brand, Tropical Islands Haupteingang',
    },
    {
        id: '900210656',
        name: 'Neu-Rohrbeck, Ahornstr.',
    },
    {
        id: '900416205',
        name: 'Trebbus, Schule',
    },
    {
        id: '900415298',
        name: 'Kahla, Siedlung',
    },
    {
        id: '900415769',
        name: 'Kahla, Döllinger Str.',
    },
    {
        id: '900415694',
        name: 'Herzberg (Elster), Elsterlandgrundschule',
    },
    {
        id: '900415689',
        name: 'Herzberg (Elster), Kreiskrankenhaus',
    },
    {
        id: '900415381',
        name: 'Brandis, Gasthaus',
    },
    {
        id: '900415337',
        name: 'Mühlberg (Elbe), Grundschule',
    },
    {
        id: '900415317',
        name: 'Arenzhain, Wendestelle',
    },
    {
        id: '000300772005',
        name: 'Rückersdorf, Bhf',
    },
    {
        id: '900415954',
        name: 'Mühlberg (Elbe), Köttlitz',
    },
    {
        id: '900415928',
        name: 'Massen, Feuerwehr',
    },
    {
        id: '900415902',
        name: 'Malitschkendorf',
    },
    {
        id: '900351002',
        name: 'Eberswalde, Ostpark (TGE)',
    },
    {
        id: '900210086',
        name: 'Falkensee, Maurerweg',
    },
    {
        id: '000005189954',
        name: 'Swinemünde, Bhf Zentrum',
    },
    {
        id: '900350920',
        name: 'Lichterfelde (BAR), Rosenweg',
    },
    {
        id: '900203448',
        name: 'Birkenwerder, Lindenhof Siedlung',
    },
    {
        id: '900245780',
        name: 'Schönhagen (TF), Dorfstr.',
    },
    {
        id: '900261125',
        name: 'Telz, Zossener Str.',
    },
    {
        id: '900245738',
        name: 'Jüterbog, Rothes Meer',
    },
    {
        id: '900210364',
        name: 'Falkensee, Rohrbecker Weg',
    },
    {
        id: '900311153',
        name: 'Fürstenwalde, EKZ Süd',
    },
    {
        id: '900245380',
        name: 'Dahlewitz, Kiefernstr.',
    },
    {
        id: '900245381',
        name: 'Dahlewitz, Jagdweg',
    },
    {
        id: '900245382',
        name: 'Dahlewitz, Wildwechsel',
    },
    {
        id: '900245683',
        name: 'Dahlewitz, Eschenweg Hotel',
    },
    {
        id: '900245384',
        name: 'Dahlewitz, Eschenweg',
    },
    {
        id: '900350329',
        name: 'Eberswalde, Britzer Str.',
    },
    {
        id: '900210814',
        name: 'Rathenow, Rheinstr.',
    },
    {
        id: '900261123',
        name: 'Teupitz, Bahnhofstr.',
    },
    {
        id: '900205369',
        name: 'Neustadt (Dosse), Köritz',
    },
    {
        id: '900210300',
        name: 'Strodehne, Wendestelle',
    },
    {
        id: '900210301',
        name: 'Vieritz',
    },
    {
        id: '900210196',
        name: 'Milow (HVL), Schule',
    },
    {
        id: '900210467',
        name: 'Döberitz (bei Premnitz), Siedlung',
    },
    {
        id: '900210780',
        name: 'Rathenow, Egon-Erwin-Kisch-Weg',
    },
    {
        id: '900210802',
        name: 'Rathenow, Grundschule Rathenow-West',
    },
    {
        id: '900205564',
        name: 'Siegrothsbruch',
    },
    {
        id: '900205482',
        name: 'Neuruppin, Treskow',
    },
    {
        id: '900205433',
        name: 'Neu Biesen',
    },
    {
        id: '900205411',
        name: 'Lögow, Lindenstr.',
    },
    {
        id: '900205401',
        name: 'Lindow (Mark), Brücke',
    },
    {
        id: '900205392',
        name: 'Kyritz, Untersee',
    },
    {
        id: '900205334',
        name: 'Herzsprung (OPR)',
    },
    {
        id: '900205277',
        name: 'Dranse, Dorfplatz',
    },
    {
        id: '900205537',
        name: 'Rüdow',
    },
    {
        id: '900205196',
        name: 'Neuruppin, Burgwall',
    },
    {
        id: '900205122',
        name: 'Kyritz, Lindenschule',
    },
    {
        id: '900216061',
        name: 'Wutike, Dorf',
    },
    {
        id: '900215611',
        name: 'Meyenburg, Parkplatz',
    },
    {
        id: '900205714',
        name: 'Schweinrich, Dranser Str.',
    },
    {
        id: '900205664',
        name: 'Wusterhausen (Dosse), Bahnhofstr.',
    },
    {
        id: '900205641',
        name: 'Wittstock (Dosse), Pritzwalker Str.',
    },
    {
        id: '900205622',
        name: 'Wittstock (Dosse), Feuerwache',
    },
    {
        id: '900205613',
        name: 'Wittstock (Dosse), Abzweig A.-Wegener-Str.',
    },
    {
        id: '900205586',
        name: 'Vichel',
    },
    {
        id: '900205262',
        name: 'Damelack',
    },
    {
        id: '900205212',
        name: 'Babe',
    },
    {
        id: '8012343',
        name: 'Leipzig, Völkerschlachtdenkmal',
    },
    {
        id: '8012194',
        name: 'Leipzig-Stötteritz, Bhf',
    },
    {
        id: '900161502',
        name: 'Mellenseestr.',
    },
    {
        id: '900360007',
        name: 'Frankfurt (Oder), Rosengarten Weidenweg',
    },
    {
        id: '900203984',
        name: 'Steinförde, Großmenow',
    },
    {
        id: '900205200',
        name: 'Ackerfelde',
    },
    {
        id: '900205098',
        name: 'Grünfelde',
    },
    {
        id: '900205091',
        name: 'Drewen',
    },
    {
        id: '900446464',
        name: 'Turnow, Feuerwehr',
    },
    {
        id: '900261075',
        name: 'Wildau, Blumenkorso',
    },
    {
        id: '900200113',
        name: 'Bötzow, Jungferndamm',
    },
    {
        id: '900260784',
        name: 'Königs Wusterhausen, Kirchplatz',
    },
    {
        id: '900260786',
        name: 'Königs Wusterhausen, Krankenhaus',
    },
    {
        id: '900260855',
        name: 'Mittenwalde (LDS), Schule',
    },
    {
        id: '900260434',
        name: 'Egsdorf (bei Görlsdorf), Dorfstr.',
    },
    {
        id: '900260467',
        name: 'Freesdorf, Alte Ziegelei',
    },
    {
        id: '900260791',
        name: 'Königs Wusterhausen, Fontaneplatz',
    },
    {
        id: '900245307',
        name: 'Kloster Zinna, Bahnhofstr.',
    },
    {
        id: '900245323',
        name: 'Werbig (TF), Schule',
    },
    {
        id: '900245203',
        name: 'Luckenwalde, Dr.-Georg-Schaeffler-Str.',
    },
    {
        id: '900245126',
        name: 'Jüterbog, Baruther Str.',
    },
    {
        id: '900245549',
        name: 'Merzdorf (TF), Dorfstr.',
    },
    {
        id: '900245131',
        name: 'Fröhden, Dorfstr.',
    },
    {
        id: '900245143',
        name: 'Markendorf (Jüterbog), Dorf',
    },
    {
        id: '900360227',
        name: 'Frankfurt (Oder), Brunnenplatz',
    },
    {
        id: '900245435',
        name: 'Dabendorf, Schule',
    },
    {
        id: '900245431',
        name: 'Dabendorf, Goethestr.',
    },
    {
        id: '900245430',
        name: 'Dabendorf, Dorfanger',
    },
    {
        id: '900245466',
        name: 'Gröben, Siedlung',
    },
    {
        id: '900245465',
        name: 'Gröben, Gröbener Dorfstr.',
    },
    {
        id: '900245450',
        name: 'Funkenmühle, Lindenbrücker Chaussee',
    },
    {
        id: '900245609',
        name: 'Zesch, Dorf',
    },
    {
        id: '900260517',
        name: 'Gräbendorf, Gussower Str.',
    },
    {
        id: '9042',
        name: 'Grevesmühlen',
    },
    {
        id: '900261798',
        name: 'Neu Byhleguhre, Abzweig',
    },
    {
        id: '900260369',
        name: 'Byhleguhre, Straupitzer Str.',
    },
    {
        id: '900260370',
        name: 'Byhlen',
    },
    {
        id: '900261409',
        name: 'Kuschkow, Berliner Str.',
    },
    {
        id: '900261664',
        name: 'Neuendorf am See',
    },
    {
        id: '900261641',
        name: 'Neu Lübbenau, Kita',
    },
    {
        id: '900261382',
        name: 'Krausnick, Wendeplatz',
    },
    {
        id: '900260357',
        name: 'Butzen, Ortsmitte',
    },
    {
        id: '4209',
        name: 'Radebeul-Naundorf, Bhf',
    },
    {
        id: '900205001',
        name: 'Rosenwinkel, Bhf',
    },
    {
        id: '12353',
        name: 'Neubrandenburg, Bhf',
    },
    {
        id: '900261943',
        name: 'Terpt, Hauptstr.',
    },
    {
        id: '900260274',
        name: 'Alteno',
    },
    {
        id: '900261136',
        name: 'Gehren, Schwarze Brücke',
    },
    {
        id: '900261133',
        name: 'Gehren, Gasthaus',
    },
    {
        id: '900262035',
        name: 'Wittmannsdorf (bei Lübben), Zur Kirche',
    },
    {
        id: '900260740',
        name: 'Kablow-Ziegelei, Brücke',
    },
    {
        id: '900261040',
        name: 'Zernsdorf, Zeltplatz',
    },
    {
        id: '900261036',
        name: 'Zernsdorf, Nordstr.',
    },
    {
        id: '900261038',
        name: 'Zernsdorf, Seekorso',
    },
    {
        id: '900261033',
        name: 'Zernsdorf, An der Lanke',
    },
    {
        id: '900261034',
        name: 'Zernsdorf, Bahnübergang',
    },
    {
        id: '900261019',
        name: 'Wolzig, Dorf',
    },
    {
        id: '900260794',
        name: 'Königs Wusterhausen, Rosa-Luxemburg-Str.',
    },
    {
        id: '900260780',
        name: 'Königs Wusterhausen, Goethestr.',
    },
    {
        id: '900260993',
        name: 'Tornow (LDS), Hohe Mühle',
    },
    {
        id: '900260741',
        name: 'Kablow-Ziegelei, Am Lankensee',
    },
    {
        id: '900261694',
        name: 'Plattkow',
    },
    {
        id: '900261365',
        name: 'Klein Leuthen',
    },
    {
        id: '900261105',
        name: 'Hartmannsdorf (bei Lübben), Landstr.',
    },
    {
        id: '900261908',
        name: 'Speichrow',
    },
    {
        id: '900261930',
        name: 'Straupitz, Bahnhofstr.',
    },
    {
        id: '900260358',
        name: 'Butzen, Hauptstr.',
    },
    {
        id: '900261613',
        name: 'Mochow, Abzweig',
    },
    {
        id: '900261419',
        name: 'Lamsfeld, Ort',
    },
    {
        id: '000005100083',
        name: 'Kunowice (PL), Bhf',
    },
    {
        id: '57819',
        name: 'Lübeck, Hbf',
    },
    {
        id: '900203942',
        name: 'Bergsdorf, Bhf',
    },
    {
        id: '900216013',
        name: 'Weisen, Bhf',
    },
    {
        id: '12000',
        name: 'Anklam, Bhf',
    },
    {
        id: '8011630',
        name: 'Gerwisch, Bhf',
    },
    {
        id: '5100',
        name: 'Priestewitz, Bhf',
    },
    {
        id: '900220305',
        name: 'Elsholz, Bhf',
    },
    {
        id: '900200010',
        name: 'Hohen Neuendorf, West',
    },
    {
        id: '2195',
        name: 'Klein Bünzow, Bhf',
    },
    {
        id: '900220249',
        name: 'Wusterwitz, Bhf',
    },
    {
        id: '9120',
        name: 'Lübstorf, Bhf',
    },
    {
        id: '900220303',
        name: 'Ferch-Lienewitz, Bhf',
    },
    {
        id: '90000',
        name: 'Ferdinandshof, Bhf',
    },
    {
        id: '8011703',
        name: 'Griebo, Bhf',
    },
    {
        id: '900220182',
        name: 'Götz, Bhf',
    },
    {
        id: '900435527',
        name: 'Gollmitz, Bhf',
    },
    {
        id: '900340011',
        name: 'Petershagen (UM), Bhf',
    },
    {
        id: '2189',
        name: 'Ducherow, Bhf',
    },
    {
        id: '28',
        name: 'Dresden, Hbf',
    },
    {
        id: '8012040',
        name: 'Klieken, Bhf',
    },
    {
        id: '900445122',
        name: 'Klinge, Bhf',
    },
    {
        id: '900310008',
        name: 'Pillgram, Bhf',
    },
    {
        id: '900220306',
        name: 'Buchholz (bei Treuenbrietzen), Bhf',
    },
    {
        id: '165',
        name: 'Groß Kiesow, Bhf',
    },
    {
        id: '000008010153',
        name: 'Güstrow, Bhf',
    },
    {
        id: '8012282',
        name: 'Lutherstadt Wittenberg, Bhf Piesteritz',
    },
    {
        id: '5118',
        name: 'Bad Kleinen, Bhf',
    },
    {
        id: '900205092',
        name: 'Fretzdorf, Bhf',
    },
    {
        id: '8012656',
        name: 'Pönitz (bei Leipzig), Bhf',
    },
    {
        id: '5021',
        name: 'Großenhain, Cottbuser Bahnhof',
    },
    {
        id: '8012381',
        name: 'Möser, Bhf',
    },
    {
        id: '8010318',
        name: 'Schönebeck(Elbe)',
    },
    {
        id: '900205022',
        name: 'Netzeband, Bhf',
    },
    {
        id: '9005',
        name: 'Schwerin, Hbf',
    },
    {
        id: '8010205',
        name: 'Leipzig, Hbf',
    },
    {
        id: '900205023',
        name: 'Walsleben, Bhf',
    },
    {
        id: '8011355',
        name: 'Demker, Bhf',
    },
    {
        id: '900220005',
        name: 'Beelitz-Heilstätten, Bhf',
    },
    {
        id: '8010047',
        name: 'Biederitz, Bhf',
    },
    {
        id: '900203956',
        name: 'Vogelsang (OHV), Bhf',
    },
    {
        id: '6440',
        name: 'Jatznick, Bhf',
    },
    {
        id: '900435209',
        name: 'Altdöbern, Bhf',
    },
    {
        id: '88020',
        name: 'Greifswald, Bhf Süd',
    },
    {
        id: '900310006',
        name: 'Briesen (Mark), Bhf',
    },
    {
        id: '900445010',
        name: 'Forst, Bhf',
    },
    {
        id: '4180',
        name: 'Coswig (bei Dresden), Bhf',
    },
    {
        id: '900205130',
        name: 'Liebenthal (OPR), Bhf',
    },
    {
        id: '10401',
        name: 'Stralsund, Hbf',
    },
    {
        id: '000005100096',
        name: 'Czerwiensk (PL), Bhf',
    },
    {
        id: '8010159',
        name: 'Halle (Saale), Hbf',
    },
    {
        id: '8010050',
        name: 'Bitterfeld, Bhf',
    },
    {
        id: '17001',
        name: 'Waren (Müritz), Bhf',
    },
    {
        id: '1489',
        name: 'Rostock, Hbf',
    },
    {
        id: '900321302',
        name: 'Alt Rosenthal, Bhf',
    },
    {
        id: '900340749',
        name: 'Götschendorf, Bhf',
    },
    {
        id: '900350050',
        name: 'Friedrichswalde, Bhf',
    },
    {
        id: '900350159',
        name: 'Ruhlsdorf-Zerpenschleuse, Bhf',
    },
    {
        id: '900320015',
        name: 'Obersdorf, Bhf',
    },
    {
        id: '900310041',
        name: 'Bad Saarow, Pieskow Bahnhof',
    },
    {
        id: '900310616',
        name: 'Beeskow, Schneeberg',
    },
    {
        id: '000005100082',
        name: 'Rzepin (PL), Bhf',
    },
    {
        id: '000005100222',
        name: 'Zielona Gora (PL), Glowna',
    },
    {
        id: '000005102886',
        name: 'Przylep (PL), Bhf',
    },
    {
        id: '900220296',
        name: 'Mötzow, Dorf',
    },
    {
        id: '900220304',
        name: 'Lünow, Dorf',
    },
    {
        id: '900220265',
        name: 'Buckau (PM), B107',
    },
    {
        id: '000300884005',
        name: 'Brandenburg, Nicolaiplatz',
    },
    {
        id: '8013455',
        name: 'Magdeburg, Herrenkrug Bahnhof',
    },
    {
        id: '900340028',
        name: 'Ringenwalde (UM), Bhf',
    },
    {
        id: '900151501',
        name: 'Ahrenshooper Str.',
    },
    {
        id: '900110515',
        name: 'Thomas-Mann-Str.',
    },
    {
        id: '900435818',
        name: 'Luckaitztal, Bhf',
    },
    {
        id: '900205090',
        name: 'Dossow, Bhf',
    },
    {
        id: '900215839',
        name: 'Sarnow, Bhf',
    },
    {
        id: '900205010',
        name: 'Blumenthal, Bhf',
    },
    {
        id: '900220183',
        name: 'Fohrde, Bhf',
    },
    {
        id: '900245036',
        name: 'Klasdorf-Glashütte, Bhf',
    },
    {
        id: '900200033',
        name: 'Schmachtenhagen (OHV), Bhf',
    },
    {
        id: '900245188',
        name: 'Weißen, Dorf',
    },
    {
        id: '900321160',
        name: 'Thöringswerder',
    },
    {
        id: '900321058',
        name: 'Bralitz, Dorf',
    },
    {
        id: '900321120',
        name: 'Neuenhagen (bei Oderberg), Schule',
    },
    {
        id: '900321038',
        name: 'Bad Freienwalde, Moorbad',
    },
    {
        id: '900321031',
        name: 'Bad Freienwalde, Fontaneplatz',
    },
    {
        id: '900321034',
        name: 'Bad Freienwalde, Melcherstr.',
    },
    {
        id: '900321090',
        name: 'Heckelberg, Alte Schule',
    },
    {
        id: '900321004',
        name: 'Altgaul, Wendestelle',
    },
    {
        id: '900320871',
        name: 'Herzhorn, Dorf',
    },
    {
        id: '900350421',
        name: 'Finow, Clara-Zetkin-Siedlung/Bäckerei',
    },
    {
        id: '900350332',
        name: 'Eberswalde, Dr.-Gillwald-Höhe',
    },
    {
        id: '900350374',
        name: 'Eberswalde, Westend-Kino',
    },
    {
        id: '900321033',
        name: 'Bad Freienwalde, Goethestr.',
    },
    {
        id: '900245052',
        name: 'Zülichendorf, Schule',
    },
    {
        id: '900350584',
        name: 'Neuendorf (bei Oderberg), Hohensaatener Str.',
    },
    {
        id: '900350316',
        name: 'Chorin, Dorf',
    },
    {
        id: '900350816',
        name: 'Hohenfinow, Feuerwehr',
    },
    {
        id: '900245178',
        name: 'Meinsdorf (TF), Dorfstr.',
    },
    {
        id: '000005193610',
        name: 'Slubice (PL), Bhf',
    },
    {
        id: '900350445',
        name: 'Friedrichswalde, Kirche',
    },
    {
        id: '900350671',
        name: 'Schönholz (BAR), Dorf',
    },
    {
        id: '900350709',
        name: 'Spechthausen, Dorf',
    },
    {
        id: '900350308',
        name: 'Britz, Fleischwerke',
    },
    {
        id: '900350896',
        name: 'Eberswalde, Alfred-Möller-Str.',
    },
    {
        id: '900210074',
        name: 'Brieselang, Marie-Curie-Str.',
    },
    {
        id: '900350950',
        name: 'Biesenthal, Wendestelle Ambulatorium',
    },
    {
        id: '900350801',
        name: 'Zepernick, Zellerfelder Str.',
    },
    {
        id: '900350800',
        name: 'Zepernick, Wernigeroder Str.',
    },
    {
        id: '900350799',
        name: 'Zepernick, Thalestr.',
    },
    {
        id: '900350797',
        name: 'Zepernick, Schumannstr.',
    },
    {
        id: '900350791',
        name: 'Zepernick, Händelstr.',
    },
    {
        id: '900350906',
        name: 'Bernau, Merkurstr.',
    },
    {
        id: '900350518',
        name: 'Klandorf, Wendestelle',
    },
    {
        id: '900350517',
        name: 'Klandorf, Dorf',
    },
    {
        id: '900350859',
        name: 'Bernau, Börnicker Chaussee',
    },
    {
        id: '900350858',
        name: 'Bernau, Sonnenallee',
    },
    {
        id: '900350857',
        name: 'Bernau, Herkulesstr.',
    },
    {
        id: '900350935',
        name: 'Dölln, Heide',
    },
    {
        id: '900350795',
        name: 'Zepernick, Mühle',
    },
    {
        id: '900350793',
        name: 'Zepernick, Kühler Grund',
    },
    {
        id: '900350689',
        name: 'Schwanebeck (BAR), Heinrich-Heine-Str.',
    },
    {
        id: '900350796',
        name: 'Zepernick, Poststr.',
    },
    {
        id: '900350486',
        name: 'Hirschfelde, Dorf',
    },
    {
        id: '900350829',
        name: 'Werneuchen, Grundschule',
    },
    {
        id: '900350567',
    },
    {