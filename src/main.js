import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import GetThere from "./components/Arrival";
import WhereToSleep from "./components/Accomodation";
import Schedule from "./components/Schedule";
import Invitation from "./components/Invitation";
import rsvp from "./components/rsvp";
import About from "./components/DenizliInfo";
import Language from "@/components/Language";
import gifts from "@/components/Gifts";
import ulasim from "@/components/Ulasim";

Vue.use(VueRouter)
Vue.use(VueI18n)

const routes = [{path: '/how-to-get-there', component: GetThere}, {
  path: '/where-to-sleep',
  component: WhereToSleep
}, {path: '/schedule', component: Schedule},
  {path: '/language', component: Language}, {
    path: '/',
    component: Invitation
  }, {path: '/about', component: About}, {path: '/gifts', component: gifts},
  {path: '/invitation', component: rsvp},
  {path: '/ulasim', component: ulasim}]

const router = new VueRouter({
  routes: routes // short for `routes: routes`
})

const messages = {
  English: {
    message: {
      rsvp: 'RSVP',
      arrive: 'Arrival',
      sleep: 'Accommodation',
      schedule: 'Schedule',
      denizli: 'Infos',
      invitation: 'Invitation',
      gifts: 'Gifts',
      giftsMsg: '... are not required. We are happy that you will come. However, if you wish to give a gift, '
          + 'we will gratefully accept a small contribution towards our honeymoon.',
      welcome: 'We are looking forward to celebrate this special day with you!',
      arriveInstruction: 'There are many flights between Vienna and Denizli with stop in İstanbul. The most important providers are:',
      arriveKey1: 'A flight will take around 4 to 5 hours',
      arriveKey2: 'There will be 1 stop in İstanbul',
      arriveKey3: 'The price for a round trip will be around 150 Euros, but can reach up to 250 Euros',
      arriveKey4: 'Click here to checkout current flights',
      arriveKey5: 'You will arrive at Denizli Aiport. From there you can rent a taxi',
      arriveKey6: 'A ride from the airport to the city center will take 45 minutes',
      arriveKey7: 'We will offer to get you from the aiport',
      arriveKey8: 'If you decide to take a taxi, the taxi ride will cost you around 30 Euros',
      sleepText: 'You can contact us if you are searching for an appropriate hotel room. Ezgi has found two hotels that offer reduced prices. Please get back to us ahead of time',
      scheduleText: 'No concrete information available yet',

      tips: "Tips",
      attractions: "Attractions",
      sunscreen: 'We recommend that you bring a sun protection with factor 50 with you.',
      badehose: 'After midnight you will have the possibility to dip into the water. Don\'t forget to bring your swimsuit!',
      denizliText: 'While staying at Denizli, there are many activities you can choose from. Here are just a few suggestions.',
      shorts: 'Short dresses, crop tops, short trousers and short dressing in general are not a problem in Türkiye.',
      dressing: 'Due to the heat, we recommend that you wear loose and light clothing, such as linen and cotton over jeans.',
      exchange: 'You can exchange money at the airport or at following locations within Denizli.',
      denizliSprings: 'Pamukkale hot springs',
      denizliSpringsLink: 'Location',
      denizliRoman: 'Roman ruins at Pamukkale (Hierapolis)',
      denizliRomanLink: 'Location',
      denizliGöl: 'Salda Gölü Beach',
      denizliGölLink: 'Location',
      laodicia: 'The ancient city of Laodicea',
      laodiciaLink: 'Location',
      tripolis: 'The ancient city of Tripolis',
      tripolisLink: 'Location',
      teleferik: 'Denizli cable car',
      teleferikLink: 'Standort',
      aphrodisias: 'Aphrodisias Ancient City',
      kanyon: 'Acıpayam Canyon',
      gölü: 'Işıklı Lake',


      boatTours: "Daily boat tours",

      arriveInfo: "There are many possibilities to arrive. Below, we try to summarize all information. This page is being regularly updated.",
      arriveOneWay: 'Booking the outward and return flight separately can make planing easier and is mostly not more expensive.',

      airplaneOnly: "Airplane Only",
      airplaneOnlyText: "Vienna - Vienna Airport (VIE)",
      airplaneOnlyText1: "İstanbul - İstanbul Airport (IST) or Sabiha Gökçen Airport (SAW)",
      airplaneOnlyText2: "With plane to Denizli Çardak Airport (DNZ)",
      airplaneOnlyText3: "From Denizli Airport to City Centre (1h)",
      airplaneOnlyBullet1: "Bus - Big bus to common central station (€2-3pp) ",
      airplaneOnlyBullet2: "Bus - VIP minibus directly to the address (€6-7 pp) - tickets sold on-board - Busses "
          + "depart according to plane arrivals and departures - "
          + "for more info ",
      airplaneOnlyBullet3: "Taxi (€10-15)",

      planeAndTrain: "Flight to Izmir and Train to Denizli",
      planeAndTrainText: "Vienna - Vienna Airport (VIE)",
      planeAndTrainText1: "İzmir - Adnan Menderes Airport (ADB)",
      planeAndTrainText2: "With train to the Denizli Train Station (5h)",
      planeAndTrainBullet1: "Please check the station named \"Adnan Menderes Havalimanı\" for the train information (It is not the main train station!) (€2-3 pp) - tickets are sold at the train station or online",
      planeAndTrainBullet2: "Information about the train",
      planeAndTrainBullet3: "Departure Times",
      planeAndTrainBullet4: "Reservation for train ticket",

      planeAndBus: "Flight to Antalya and bus to Denizli",
      planeAndBusText: "Vienna - Vienna Airport (VIE)",
      planeAndBusText1: "Antalya - Antalya Airport (AYT)",
      planeAndBusText2: "From the Airport to the bus terminal",
      planeAndBusBullet1: "Bus (Havaş) (35m) - Drives from the express road - Please mention that you want to leave at Antalya Bus Terminal (Antalya otogarı) - tickets sold on-board (€1-2 pp)",
      planeAndBusBullet2: "Bus 600 (Public Bus) (60m) - Drives through the city of Antalya - Last station is the Bus Terminal - bus fee can be paid with contactless credit/debit card on board - departs 35 past every hour from the airport (€ 0,60-0,70 pp)",
      planeAndBusBullet3: "Tram (T2) - Tram station at the airport called Antray - Please leave at the tram at Otogar station - Tickets can be bought at the tram station or can be paid with contactless credit/debit card on board (€ 0,30 - 0,40 pp)",
      planeAndBusBullet4: "Taxi (€5-10)",
      planeAndBusText3: "With bus to the Denizli Bus Station (4h)",
      planeAndBusText4: "Pamukkale Turizm",
      planeAndBusText5: "Kamil Koç (Flix Bus)",
      planeAndBusText6: "Departure times vary between the companies - Tickets are sold at the bus station (€ 7-10 pp) - Best known bus companies:",

      adaTitle: '25.08.2022 - Henna Night',
      adaCode: 'Dresscode: Semi-Formal & Formal',
      adaFeast: '4pm - 6pm  → Banquet at Ezgis parents',
      adaBride: '6pm - 7pm  → Bride picking ceremony',
      adaKorso: '7pm - 8pm  → Wedding motorcade',
      adaHenna: '8pm - 0am  → Henna Night',
      adaFotos: '0am - 1am  → Photos with the couple',
      adaCeremony: 'Henna Ceremony',
      adaCake: 'Cake',
      adaDance: 'Dancing',

      bcnTitle: '27.08.2022 - Wedding Celebration',
      bcnCode: 'Dresscode: Formal',
      bcnStart: '4:30 pm → Start',
      bcnCeremony: '5:00 pm → Ceremony',
      bcnCocktail: '5:30 pm → Cocktail',
      bcnSeats: '6:30 pm → Transition to seats',
      bcnFirstDance: '6:45 pm → Grand entrance and first dance',
      bcnEat: '7:00 pm → The first course is served',
      bcnDance: '7:15 pm → Dancing begins',
      bcnAfterTransition: '00:45 am → Transition to after party',
      bcnAfterParty: '1:00 am → Start of after-party ',
      dict: `
Merhaba /mare-hah-bah/ = Hello = Hallo{0}{0}
Nasılsın? /Nah-swl-swn/ = How are you? = Wie geht es dir?{0}{0}
İyiyim. /Ee-yee-yeem/  = I’m fine = Mir geht’s gut{0}{0}
Teşekkurler /teh-shehk-kuer-lehr/ = thank you = Danke{0}{0}
Sagol /sa-ol/ = thank you (easy) = Danke (einfach){0}{0}
Rica ederim /ji-ja ed-er-ihm/ = you are welcome = Bitte{0}{0}
Affedersiniz / ahf-eh-dehr-see-neez/ = excuse me = Entschuldigung{0}{0}
Özür dilerim = I’m sorry = Es tut mir leid{0}{0}
İngilizce (Almanca) biliyor musunuz? /een-gee-leez-jeh (ahl-mahn-ja) bee-lee-yohr moo-soo-nooz/ =Do you speak english (German) = Sprechen Sie Englisch (Deutsch){0}{0}
İsminiz ne? /ees-mee-neez neh/ = What’s your name? = Wie heißen sie?{0}{0}
İsmim … /ees-meem .../ = my name is … = ich heiße ...{0}{0}
Tanıştığıma memnum oldum /tah-nish-tih-ih-mih-zah mehm-noon ohl-doom = Nice to meet you = Schön Sie kennen zu lernen{0}{0}
Rica ederim = Önemli değil = Gern geschehen{0}{0}
Türkçem iyi değil /tyurk-chem ee de-il/= my turkish is not so good = Mein Türkisch ist nicht so gut{0}{0}
Afiyet olsun /ah-fee-yet owl-soon/ = enjoy your meal = Mahlzeit{0}{0}
Lütfen bana yardım edin /lyut-fehn bah-na yar-dim ed-in = Please, help me = Hilfen Sie mir, bitte.{0}{0}
Lütfen /lyut-fen/ = Please = Bitte{0}{0}
İyi akşamlar /ee ak-sham-lar/ = good evening = Guten abend{0}{0}
Hoşçakal /hosh-cha-kahl/ = good bye = Auf Wiedersehen{0}{0}
“...” nerede? /neh-reh-deh/ = Where is …? = Wo ist …?{0}{0}
Etli mi?  /et-lee me/ = is it with meat = Ist es mit Fleisch?{0}{0}
Elinize saglik /el-in-is-ey sa-lick/ = health tou your hands (to compliment the cook) = Das Essen war sehr gut{0}{0}
Günaydın /gyun-eye-din/ = Good Morning = Guten Morgen {0}{0}
Kolay Gelsin /coal-eye gehl-sin = Take it easy - unofficial way to start a conversation = Frohes schaffen{0}{0}
İyi gunler /ee gyun-lair/ = good day = Guten Tag{0}{0}
İyi geceler /ee geh-jay-lair/ = good night = Gute Nacht{0}{0}
Görüşürüz /goer-ryush-yur-yus/ = see you later = Bis bald{0}{0}
Hoşgeldin /hosh gel-deen/ = welcome = Willkommen{0}{0}
Tuvalet nerede? /too-vah-let nehr-ay-day/ = where is the toilet? = Wo ist das Klo?{0}{0}
Sıfır /sih•fihr/ = 0{0}{0}
Bir /beer/ = 1 {0}{0}
iki /ee•kee/ = 2{0}{0}
üç /yuch/ = 3{0}{0}
dört /durrt/ = 4{0}{0}
bes /behsh/ = 5{0}{0}
alti /ahl•tih/ = 6{0}{0}
yedi /yeh•dee/ = 7{0}{0}
sekiz /seh•keez/ = 8{0}{0}
dokuz /doh•kooz/ = 9{0}{0}
on /ohn/ = 10
            `,

      lang: "Language"
    }
  }, Deutsch: {
    message: {
      rsvp: 'Bestätigung',
      arrive: 'Ankunft',
      sleep: 'Unterkunft',
      schedule: 'Ablauf',
      denizli: 'Infos',
      invitation: 'Einladung',
      gifts: 'Geschenke',
      giftsMsg: '... sind nicht nötig. Wir sind glücklich dass du kommen kannst. Falls du uns aber ein Geschenk machen möchtest,'
          + 'dann nehmen wir dankbar auch einen kleinen Beitrag an unseren Flitterwochen entgegen.',
      welcome: "Wir freuen uns darauf diesen besonderen Tag mit euch zu feiern!",
      arriveInstruction: 'Es gibt viele Flüge zwischen Wien und Infos mit Zwischenstopp in İstanbul. Die wichtigsten Anbieter sind:',
      arriveKey1: 'Ein Flug dauert ungefähr 4 bis 5 Stunden',
      arriveKey2: 'Es gibt einen Zwischenstopp in İstanbul',
      arriveKey3: 'Der Hin- und Rückflug, abhängig vom Bestelltag, wird insgesamt ungefähr 150 Euro kosten, kann aber auch bis zu 250 Euro kosten',
      arriveKey4: 'Hier klicken um aktuelle Flüge zu prüfen',
      arriveKey5: 'Du wirst am Flughafen Infos ankommen. Dort kannst du leicht ein Taxi mieten',
      arriveKey6: 'Eine Fahrt vom Flughafen bis zum Stadtzentrum wird 45 Minuten dauern',
      arriveKey7: 'Wir bieten auch an, euch vom Flughafen abzuholen',
      arriveKey8: 'Falls du dich entscheidest ein Taxi zu mieten, dann wird die Fahrt ungefähr 30 Euro kosten',
      sleepText: 'Falls ihr auf der Suche nach einem geeigneten Hotel seid, dann könnt ihr uns gerne kontaktieren. Ezgi hat zwei Hotels gefunden, die reduzierte Preise anbieten. Bitte kontaktiert uns diesbezüglich so früh wie möglich.',
      scheduleText: 'Es gibt noch keine konkreten Informationen',
      sunscreen: 'Wir empfehlen euch einen Sonnenschutz mit Sonnenschutzfaktor 50 mitzubringen.',
      badehose: 'Nach Mitternacht gibt es die Möglichkeit ins Wasser zu springen, also Badehose nicht vergessen!',

      tips: "Tipps",
      attractions: "Sehenswürdigkeiten",
      denizliText: 'Während ihr uns in Denizli besucht, gibt es viele Möglichkeiten eure Zeit zu verbringen. Hier sind nur ein paar Vorschläge.',
      shorts: 'Kurze Kleider, Crop Tops, kurze Hosen und kurze Bekleidung allgemein sind in der Türkei kein Problem.',
      dressing: 'Weil es durchaus heiß werden kann, empfehlen wir Leinen oder Wolle anstatt Jeans oder enge Kleidung.',
      exchange: 'Geld kann man entweder direkt am Flughafen oder an folgenden Orten in Denizli wechseln. ',
      denizliSprings: 'Pamukkale heiße Quellen',
      denizliSpringsLink: 'Standort',
      denizliRoman: 'Römische Ruinen Hierapolis',
      denizliRomanLink: 'Standort',
      denizliGöl: 'Salda See',
      denizliGölLink: 'Standort',
      laodicia: 'Die antike Stadt Laodizea',
      laodiciaLink: 'Standort',
      tripolis: 'Die antike Stadt Tripolis',
      tripolisLink: 'Standort',
      teleferik: 'Denizli Seilbahn',
      teleferikLink: 'Standort',

      aphrodisias: 'Aphrodisias Antike Stadt',
      kanyon: 'Acıpayam Schlucht',
      gölü: 'Işıklı See',


      boatTours: "Tägliche Boot Rundfahrten",

      arriveInfo: "Es gibt viele Möglichkeiten anzureisen. Anbei versuchen wir alle Informationen zusammenzufassen. Diese Seite wird laufend aktualisiert.",
      arriveOneWay: 'Hin- und Rückflug separat zu buchen kann die Planung vereinfachen und ist meistens nicht teurer.',

      airplaneOnly: "Flug nach Denizli",
      airplaneOnlyText: "Wien - Flughafen Wien (VIE)",
      airplaneOnlyText1: "İstanbul - Flughafen İstanbul (IST) oder Flughafen Sabiha Gökçen (SAW)",
      airplaneOnlyText2: "Mit dem Flugzeug nach Flughafen Denizli Çardak (DNZ)",
      airplaneOnlyText3: "Vom Flughafen Denizli zum Stadtzentrum (1h)",
      airplaneOnlyBullet1: "Bus - Mit großem Bus zum Stadtzentrum (€2-3 pro Person) ",
      airplaneOnlyBullet2: "Bus - Mit VIP Minibus direkt zu deiner Adresse (€6-7 pro Person) - Tickets werden im Bus verkauft - Die Ankunft "
          + "und Abfahrt der Busse orientiert sich nach Landung und Abflug der Flugzeuge - "
          + "für mehr Informationen  ",
      airplaneOnlyBullet3: "Taxi (€10-15)",

      planeAndTrain: "Flug nach Izmir und Zug nach Denizli",
      planeAndTrainText: "Wien - Flughafen Wien (VIE)",
      planeAndTrainText1: "İzmir - Flughafen Adnan Menderes (ADB)",
      planeAndTrainText2: "Mit dem Zug zur Denizli Zugstation (5h)",
      planeAndTrainBullet1: "Der Zug fährt von \"Adnan Menderes Havalimanı\" ab, bitte auf diese Information achten. (Es ist nicht der Hauptbahnhof!) (€2-3 pro Person) - Tickets entweder online oder vor Ort kaufen.\n",
      planeAndTrainBullet2: "Informationen zum Zug",
      planeAndTrainBullet3: "Abfahrtszeiten",
      planeAndTrainBullet4: "Zug-Ticket reservieren",

      planeAndBus: "Flug nach Antalya und Bus nach Denizli",
      planeAndBusText: "Wien - Flughafen Wien (VIE)",
      planeAndBusText1: "Antalya - Flughafen Antalya (AYT)",
      planeAndBusText2: "Vom Flughafen zum Busbahnhof",
      planeAndBusBullet1: "Bus (Havaş) (35m) - Fährt über die Expressstraße - Bitte den Fahrer darauf hinweisen, dass man beim Antalya Busbahnhof aussteigen möchte. (Antalya otogarı) - Tickets im Bus kaufen (€1-2 pro Person)\n",
      planeAndBusBullet2: "Bus mit der Nummer 600 (Öffentlicher Bus) (60 min Fahrzeit) - Fährt durch das Stadtzentum Antalya - Die letzte Station ist der Busbahnhof - die Kosten können mit Karte oder Bargeld im Bus gekauft werden - fährt stündlich um jeweils 35min nach vom Flughafen (€ 0,60-0,70 pro Person)",
      planeAndBusBullet3: "Straßenbahn (T2) - Die Straßenbahnstation heißt Antray - Bitte bei der Station Otogar aussteigen - Die Tickets kann man am Ticketschalter oder während der Fahrt sowohl mit Bargeld als auch mit Karte gekauft werden. (€ 0,30 - 0,40 pro Person)",
      planeAndBusBullet4: "Taxi (€5-10)",
      planeAndBusText3: "Mit dem Bus zum Denizli Busbahnhof (4h)",
      planeAndBusText4: "Pamukkale Turizm",
      planeAndBusText5: "Kamil Koç (Flix Bus)",
      planeAndBusText6: "Jede Busfirma hat unterschiedliche Abfahrtszeiten - Tickets kann man in der Station kaufen (€ 7-10 pro Person) - Die bekanntesten Busfirmen sind:",

      adaTitle: '25.08.2022 - Henna Nacht',
      adaCode: 'Dresscode: Semi-Formell & Formell',
      adaFeast: '16:00 - 18:00 → Festessen bei Ezgis Eltern',
      adaBride: '18:00 - 19:00 → Brautentführung',
      adaKorso: '19:00 - 20:00 → Autokorso ',
      adaHenna: '20:00 - 24:00 → Henna Nacht',
      adaFotos: '24:00 - 01:00 → Fotos mit dem Paar',
      adaCeremony: 'Henna Zeremonie',
      adaCake: 'Kuchen',
      adaDance: 'Tanzen',

      bcnTitle: '27.08.2022 - Hochzeitsfeier',
      bcnCode: 'Dresscode: Formell',
      bcnStart: '16:30 → Beginn',
      bcnCeremony: '17:00 → Zeremonie',
      bcnCocktail: '17:30 → Apéritif',
      bcnSeats: '18:30 → Übergang zu den Sitzplätzen',
      bcnFirstDance: '18:45 → Eintritt des Brautpaars und erster Tanz',
      bcnEat: '19:00 → Erster Gang wird serviert',
      bcnDance: '19:15 → Einladung zum tanzen',
      bcnAfterTransition: '00:45 → Einladung zur After Party',
      bcnAfterParty: '01:00 → After Party beginnt',

      dict: `
Merhaba /mare-hah-bah/ = Hello = Hallo{0}{0}
Nasılsın? /Nah-swl-swn/ = How are you? = Wie geht es dir?{0}{0}
İyiyim. /Ee-yee-yeem/  = I’m fine = Mir geht’s gut{0}{0}
Teşekkurler /teh-shehk-kuer-lehr/ = thank you = Danke{0}{0}
Sagol /sa-ol/ = thank you (easy) = Danke (einfach){0}{0}
Rica ederim /ji-ja ed-er-ihm/ = you are welcome = Bitte{0}{0}
Affedersiniz / ahf-eh-dehr-see-neez/ = excuse me = Entschuldigung{0}{0}
Özür dilerim = I’m sorry = Es tut mir leid{0}{0}
İngilizce (Almanca) biliyor musunuz? /een-gee-leez-jeh (ahl-mahn-ja) bee-lee-yohr moo-soo-nooz/ =Do you speak english (German) = Sprechen Sie Englisch (Deutsch){0}{0}
İsminiz ne? /ees-mee-neez neh/ = What’s your name? = Wie heißen sie?{0}{0}
İsmim … /ees-meem .../ = my name is … = ich heiße ...{0}{0}
Tanıştığıma memnum oldum /tah-nish-tih-ih-mih-zah mehm-noon ohl-doom = Nice to meet you = Schön Sie kennen zu lernen{0}{0}
Rica ederim = Önemli değil = Gern geschehen{0}{0}
Türkçem iyi değil /tyurk-chem ee de-il/= my turkish is not so good = Mein Türkisch ist nicht so gut{0}{0}
Afiyet olsun /ah-fee-yet owl-soon/ = enjoy your meal = Mahlzeit{0}{0}
Lütfen bana yardım edin /lyut-fehn bah-na yar-dim ed-in = Please, help me = Hilfen Sie mir, bitte.{0}{0}
Lütfen /lyut-fen/ = Please = Bitte{0}{0}
İyi akşamlar /ee ak-sham-lar/ = good evening = Guten abend{0}{0}
Hoşçakal /hosh-cha-kahl/ = good bye = Auf Wiedersehen{0}{0}
“...” nerede? /neh-reh-deh/ = Where is …? = Wo ist …?{0}{0}
Etli mi?  /et-lee me/ = is it with meat = Ist es mit Fleisch?{0}{0}
Elinize saglik /el-in-is-ey sa-lick/ = health tou your hands (to compliment the cook) = Das Essen war sehr gut{0}{0}
Günaydın /gyun-eye-din/ = Good Morning = Guten Morgen {0}{0}
Kolay Gelsin /coal-eye gehl-sin = Take it easy - unofficial way to start a conversation = Frohes schaffen{0}{0}
İyi gunler /ee gyun-lair/ = good day = Guten Tag{0}{0}
İyi geceler /ee geh-jay-lair/ = good night = Gute Nacht{0}{0}
Görüşürüz /goer-ryush-yur-yus/ = see you later = Bis bald{0}{0}
Hoşgeldin /hosh gel-deen/ = welcome = Willkommen{0}{0}
Tuvalet nerede? /too-vah-let nehr-ay-day/ = where is the toilet? = Wo ist das Klo?{0}{0}
Sıfır /sih•fihr/ = 0{0}{0}
Bir /beer/ = 1 {0}{0}
iki /ee•kee/ = 2{0}{0}
üç /yuch/ = 3{0}{0}
dört /durrt/ = 4{0}{0}
bes /behsh/ = 5{0}{0}
alti /ahl•tih/ = 6{0}{0}
yedi /yeh•dee/ = 7{0}{0}
sekiz /seh•keez/ = 8{0}{0}
dokuz /doh•kooz/ = 9{0}{0}
on /ohn/ = 10
            `,

      lang: "Sprache"
    }
  }, Türkçe: {
    message: {
      rsvp: 'Lütfen Cevap Veriniz',
      arrive: 'Ulaşım',
      sleep: 'Konaklama',
      schedule: 'Program',
      denizli: 'Bilgi',
      invitation: 'Davetiye',
      gifts: 'Hediyeler',
      giftsMsg: '... sind nicht nötig. Wir sind glücklich dass du kommen kannst. Falls du uns aber ein Geschenk machen möchtest,'
          + 'dann nehmen wir dankbar auch einen kleinen Beitrag an unseren Flitterwochen entgegen.',
      welcome: "Bu özel günü sizinle birlikte kutlamak için sabırsızlanıyoruz!",
      arriveKey1: 'Ein Flug dauert ungefähr 4 bis 5 Stunden',
      arriveKey2: 'Es gibt einen Zwischenstopp in İstanbul',
      arriveKey3: 'Der Hin- und Rückflug, abhängig vom Bestelltag, wird insgesamt ungefähr 150 Euro kosten, kann aber auch bis zu 250 Euro kosten',
      arriveKey4: 'Hier klicken um aktuelle Flüge zu prüfen',
      arriveKey5: 'Du wirst am Flughafen Infos ankommen. Dort kannst du leicht ein Taxi mieten',
      arriveKey6: 'Eine Fahrt vom Flughafen bis zum Stadtzentrum wird 45 Minuten dauern',
      arriveKey7: 'Wir bieten auch an, euch vom Flughafen abzuholen',
      arriveKey8: 'Falls du dich entscheidest ein Taxi zu mieten, dann wird die Fahrt ungefähr 30 Euro kosten',
      sleepText: 'Wir sind gerade dabei euch vergünstigte Schlafplätze für die Dauer der Hochzeit in Denizli zu organisieren.'
          + ' Falls du aber in einem Hotel übernachten möchtest, gibt es viele Möglichkeiten. Die Preise bewegen sich '
          + 'zwischen 12 bis 100 Euro / Nacht.',
      scheduleText: 'Es gibt noch keine konkreten Informationen',
      sunscreen: 'Wir empfehlen euch einen Sonnenschutz mit Sonnenschutzfaktor 50 mitzubringen.',
      badehose: 'Gece yarısından sonra havuza girilebilir, dolaysı ile deniz kıyafetlerinizi ve havlularınızı getirmeyi unutmayın.',
      denizliText: 'Während ihr uns in Denizli besucht, gibt es viele Möglichkeiten eure Zeit zu verbringen. Hier sind nur ein paar Vorschläge.',
      denizliSprings: 'Pamukkale heiße Quellen',
      denizliRoman: 'Römische Ruinen Hierapolis',
      denizliGöl: 'Salzsee Strand',

      dressing: 'Öneri: Denizli için genel kıyafetlerinizi seçerken keten ve pamuk gibi hafif ve bol kıyafetler tercih ediniz. Kot gibi kalın ve dar kıyafetler sıcaklıktan dolayı rahatsız edici olabilir.',


      arriveInfo: "Buraya ulaşmanın birçok yolu var. Burada tüm bilgileri özetlemeye çalışıyoruz. Bu sayfa sürekli güncellenmektedir.",

      airplaneOnly: "Flug nach Denizli",
      airplaneOnlyText: "Wien - Flughafen Wien (VIE)",
      airplaneOnlyText1: "İstanbul - Flughafen İstanbul (IST) oder Flughafen Sabiha Gökçen (SAW)",
      airplaneOnlyText2: "Mit dem Flugzeug nach Flughafen Denizli Çardak (DNZ)",
      airplaneOnlyText3: "Vom Flughafen Denizli zum Stadtzentrum (1h)",
      airplaneOnlyBullet1: "Bus - Mit großem Bus zum Stadtzentrum (€2-3 pro Person) ",
      airplaneOnlyBullet2: "Bus - Mit VIP Minibus direkt zu deiner Adresse (€6-7 pro Person) - Tickets werden im Bus verkauft - Die Ankunft "
          + "und Abfahrt der Busse orientiert sich nach Landung und Abflug der Flugzeuge - "
          + "für mehr Informationen  ",
      airplaneOnlyBullet3: "Taxi (€10-15)",

      planeAndTrain: "Flug nach Izmir und Zug nach Denizli",
      planeAndTrainText: "Wien - Flughafen Wien (VIE)",
      planeAndTrainText1: "İzmir - Flughafen Adnan Menderes (ADB)",
      planeAndTrainText2: "Mit dem Zug zur Denizli Zugstation (5h)",
      planeAndTrainBullet1: "Der Zug fährt von \"Adnan Menderes Havalimanı\" ab, bitte auf diese Information achten. (Es ist nicht der Hauptbahnhof!) (€2-3 pro Person) - Tickets entweder online oder vor Ort kaufen.\n",
      planeAndTrainBullet2: "Informationen zum Zug",
      planeAndTrainBullet3: "Abfahrtszeiten",
      planeAndTrainBullet4: "Zug-Ticket reservieren",

      planeAndBus: "Flug nach Antalya und Bus nach Denizli",
      planeAndBusText: "Wien - Flughafen Wien (VIE)",
      planeAndBusText1: "Antalya - Flughafen Antalya (AYT)",
      planeAndBusText2: "Vom Flughafen zum Busbahnhof",
      planeAndBusBullet1: "Bus (Havaş) (35m) - Fährt über die Expressstraße - Bitte den Fahrer darauf hinweisen, dass man beim Antalya Busbahnhof aussteigen möchte. (Antalya otogarı) - Tickets im Bus kaufen (€1-2 pro Person)\n",
      planeAndBusBullet2: "Bus mit der Nummer 600 (Öffentlicher Bus) (60 min Fahrzeit) - Fährt durch das Stadtzentum Antalya - Die letzte Station ist der Busbahnhof - die Kosten können mit Karte oder Bargeld im Bus gekauft werden - fährt stündlich um jeweils 35min nach vom Flughafen (€ 0,60-0,70 pro Person)",
      planeAndBusBullet3: "Straßenbahn (T2) - Die Straßenbahnstation heißt Antray - Bitte bei der Station Otogar aussteigen - Die Tickets kann man am Ticketschalter oder während der Fahrt sowohl mit Bargeld als auch mit Karte gekauft werden. (€ 0,30 - 0,40 pro Person)",
      planeAndBusBullet4: "Taxi (€5-10)",
      planeAndBusText3: "Mit dem Bus zum Denizli Busbahnhof (4h)",
      planeAndBusText4: "Pamukkale Turizm",
      planeAndBusText5: "Kamil Koç (Flix Bus)",
      planeAndBusText6: "Jede Busfirma hat unterschiedliche Abfahrtszeiten - Tickets kann man in der Station kaufen (€ 7-10 pro Person) - Die bekanntesten Busfirmen sind:",

      adaTitle: '25.08.2022 - Kına gecesi',
      adaCode: 'Kıyafet tipi: Yarı Resmi & Resmi',
      adaFeast: '16:00 → Kız evinde yemek',
      adaBride: '18:00 → Gelin alma',
      adaKorso: '19:00 → Düğün konvoyu',
      adaHenna: '20:00 → Kına gecesi',
      adaFotos: '24:00 → Fotoğraf çekimi',
      adaCeremony: 'Kına töreni',
      adaCake: 'Pasta',
      adaDance: 'Dans',

      tips: "Öneriler",

      bcnTitle: '27.08.2022 - Düğün',
      bcnCode: 'Kıyafet tipi: Resmi',
      bcnStart: '16:30 → Başlangıç',
      bcnCeremony: '17:00 → Seremoni',
      bcnCocktail: '17:30 → Kokteyl',
      bcnSeats: '18:30 → Yemek düzenine geçiş',
      bcnFirstDance: '18:45 → Gelin ile damadın girişi ve ilk dans',
      bcnEat: '19:00 → Ordövr servisi',
      bcnDance: '19:15 → Dans başlangıcı',
      bcnAfterTransition: '00:45 → After partiye geçiş',
      bcnAfterParty: '01:00 → After parti başlangıcı',

      dict: `
Merhaba /mare-hah-bah/ = Hello = Hallo{0}{0}
Nasılsın? /Nah-swl-swn/ = How are you? = Wie geht es dir?{0}{0}
İyiyim. /Ee-yee-yeem/  = I’m fine = Mir geht’s gut{0}{0}
Teşekkurler /teh-shehk-kuer-lehr/ = thank you = Danke{0}{0}
Sagol /sa-ol/ = thank you (easy) = Danke (einfach){0}{0}
Rica ederim /ji-ja ed-er-ihm/ = you are welcome = Bitte{0}{0}
Affedersiniz / ahf-eh-dehr-see-neez/ = excuse me = Entschuldigung{0}{0}
Özür dilerim = I’m sorry = Es tut mir leid{0}{0}
İngilizce (Almanca) biliyor musunuz? /een-gee-leez-jeh (ahl-mahn-ja) bee-lee-yohr moo-soo-nooz/ =Do you speak english (German) = Sprechen Sie Englisch (Deutsch){0}{0}
İsminiz ne? /ees-mee-neez neh/ = What’s your name? = Wie heißen sie?{0}{0}
İsmim … /ees-meem .../ = my name is … = ich heiße ...{0}{0}
Tanıştığıma memnum oldum /tah-nish-tih-ih-mih-zah mehm-noon ohl-doom = Nice to meet you = Schön Sie kennen zu lernen{0}{0}
Rica ederim = Önemli değil = Gern geschehen{0}{0}
Türkçem iyi değil /tyurk-chem ee de-il/= my turkish is not so good = Mein Türkisch ist nicht so gut{0}{0}
Afiyet olsun /ah-fee-yet owl-soon/ = enjoy your meal = Mahlzeit{0}{0}
Lütfen bana yardım edin /lyut-fehn bah-na yar-dim ed-in = Please, help me = Hilfen Sie mir, bitte.{0}{0}
Lütfen /lyut-fen/ = Please = Bitte{0}{0}
İyi akşamlar /ee ak-sham-lar/ = good evening = Guten abend{0}{0}
Hoşçakal /hosh-cha-kahl/ = good bye = Auf Wiedersehen{0}{0}
“...” nerede? /neh-reh-deh/ = Where is …? = Wo ist …?{0}{0}
Etli mi?  /et-lee me/ = is it with meat = Ist es mit Fleisch?{0}{0}
Elinize saglik /el-in-is-ey sa-lick/ = health tou your hands (to compliment the cook) = Das Essen war sehr gut{0}{0}
Günaydın /gyun-eye-din/ = Good Morning = Guten Morgen {0}{0}
Kolay Gelsin /coal-eye gehl-sin = Take it easy - unofficial way to start a conversation = Frohes schaffen{0}{0}
İyi gunler /ee gyun-lair/ = good day = Guten Tag{0}{0}
İyi geceler /ee geh-jay-lair/ = good night = Gute Nacht{0}{0}
Görüşürüz /goer-ryush-yur-yus/ = see you later = Bis bald{0}{0}
Hoşgeldin /hosh gel-deen/ = welcome = Willkommen{0}{0}
Tuvalet nerede? /too-vah-let nehr-ay-day/ = where is the toilet? = Wo ist das Klo?{0}{0}
Sıfır /sih•fihr/ = 0{0}{0}
Bir /beer/ = 1 {0}{0}
iki /ee•kee/ = 2{0}{0}
üç /yuch/ = 3{0}{0}
dört /durrt/ = 4{0}{0}
bes /behsh/ = 5{0}{0}
alti /ahl•tih/ = 6{0}{0}
yedi /yeh•dee/ = 7{0}{0}
sekiz /seh•keez/ = 8{0}{0}
dokuz /doh•kooz/ = 9{0}{0}
on /ohn/ = 10
            `,

      lang: "Sprache"
    }
  }
}

const i18n = new VueI18n({
  locale: 'Deutsch', messages: messages
})

fetch(process.env.BASE_URL + "config.json")
.then((response) => response.json())
.catch(() => {
  alert(
      "Please place a valid 'config.json' file into your public folder. See https://github.com/barblin/wedding for examples.")
})
.then((config) => {
  Vue.prototype.$config = config
  new Vue({
    render: h => h(App), router: router, i18n: i18n
  }).$mount('#app')
}).catch(() => {
      alert(
          "Please place a valid 'config.json' file into your public folder. See https://github.com/barblin/wedding for examples.")
    }
)
