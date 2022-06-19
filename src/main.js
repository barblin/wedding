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

Vue.use(VueRouter)
Vue.use(VueI18n)

const routes = [
    {path: '/how-to-get-there', component: GetThere},
    {path: '/where-to-sleep', component: WhereToSleep},
    {path: '/schedule', component: Schedule},
    {path: '/language', component: Language},
    {path: '/', component: Invitation},
    {path: '/about', component: About},
    {path: '/gifts', component: gifts},
    {path: '/invitation', component: rsvp},
]

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
            giftsMsg: '... are not required. We are happy that you will come. However, if you wish to give a gift, ' +
                'we will gratefully accept a small contribution towards our honeymoon.',
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
            sleepText: 'We are working on providing a price reduction on accommodations in Denizli. But if you decide to stay at a hotel, you can choose\n' +
                '    from a large selection of hotels. The price is round about 12 to 100 Euros a night.',
            scheduleText: 'No concrete information available yet',
            sunscreen: 'We recommend that you bring a sun protection with factor 50 with you.',
            badehose: 'After the ceremony you will have the possibility to dip into the water. Don\'t forget to bring your swimsuit!',
            denizliText: 'While staying at Denizli, there are many activities you can choose from. Here are just a few suggestions.',
            denizliSprings: 'Pamukkale hot springs',
            denizliRoman: 'Roman ruins at Pamukkale (Hierapolis)',
            denizliGöl: 'Salda Gölü Beach',

            arriveInfo: "There are many possibilities to arrive. Below, we try to summarize all information. This page is being regularly updated.",
            arriveOneWay: 'Booking the outward and return flight separately can make planing easier and is mostly not more expensive.',

            airplaneOnly: "Airplane Only",
            airplaneOnlyText: "Vienna - Vienna Airport (VIE)",
            airplaneOnlyText1: "İstanbul - İstanbul Airport (IST) or Sabiha Gökçen Airport (SAW)",
            airplaneOnlyText2: "With plane to Denizli Çardak Airport (DNZ)",
            airplaneOnlyText3: "From Denizli Airport to City Centre (1h)",
            airplaneOnlyBullet1: "Bus - Big bus to common central station (€2-3pp) ",
            airplaneOnlyBullet2: "Bus - VIP minibus directly to the address (€6-7 pp) - tickets sold on-board - Busses " +
                "depart according to plane arrivals and departures - " +
                "for more info ",
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
            adaText: '08:00 pm - 12:00 pm',

            bcnTitle: '27.08.2022 - Wedding Celebration',
            bcnText: '03:00 pm - open end',
            dict: `
Merhaba /mare-hah-bah/ = Hello = Hallo{0}{0}
Nasılsın? /Nah-swl-swn/ = How are you? = Wie sind sie?{0}{0}
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
    },
    Deutsch: {
        message: {
            rsvp: 'Bestätigung',
            arrive: 'Ankunft',
            sleep: 'Unterkunft',
            schedule: 'Ablauf',
            denizli: 'Infos',
            invitation: 'Einladung',
            gifts: 'Geschenke',
            giftsMsg: '... sind nicht nötig. Wir sind glücklich dass du kommen kannst. Falls du uns aber ein Geschenk machen möchtest,' +
                'dann nehmen wir dankbar auch einen kleinen Beitrag an unseren Flitterwochen entgegen.',
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
            sleepText: 'Wir sind gerade dabei euch vergünstigte Schlafplätze für die Dauer der Hochzeit in Denizli zu organisieren.' +
                ' Falls du aber in einem Hotel übernachten möchtest, gibt es viele Möglichkeiten. Die Preise bewegen sich ' +
                'zwischen 12 bis 100 Euro / Nacht.',
            scheduleText: 'Es gibt noch keine konkreten Informationen',
            sunscreen: 'Wir empfehlen euch einen Sonnenschutz mit Sonnenschutzfaktor 50 mitzubringen.',
            badehose: 'Nach der Zeremonie gibt es die Möglichkeit ins Wasser zu springen, also Badehose nicht vergessen!',
            denizliText: 'Während ihr uns in Denizli besucht, gibt es viele Möglichkeiten eure Zeit zu verbringen. Hier sind nur ein paar Vorschläge.',
            denizliSprings: 'Pamukkale heiße Quellen',
            denizliRoman: 'Römische Ruinen Pamukkale (Hierapolis)',
            denizliGöl: 'Salzsee Strand',

            arriveInfo: "Es gibt viele Möglichkeiten anzureisen. Anbei versuchen wir alle Informationen zusammenzufassen. Diese Seite wird laufend aktualisiert.",
            arriveOneWay: 'Hin- und Rückflug separat zu buchen kann die Planung vereinfachen und ist meistens nicht teurer.',

            airplaneOnly: "Flug nach Denizli",
            airplaneOnlyText: "Wien - Flughafen Wien (VIE)",
            airplaneOnlyText1: "İstanbul - Flughafen İstanbul (IST) oder Flughafen Sabiha Gökçen (SAW)",
            airplaneOnlyText2: "Mit dem Flugzeug nach Flughafen Denizli Çardak (DNZ)",
            airplaneOnlyText3: "Vom Flughafen Denizli zum Stadtzentrum (1h)",
            airplaneOnlyBullet1: "Bus - Mit großem Bus zum Stadtzentrum (€2-3 pro Person) ",
            airplaneOnlyBullet2: "Bus - Mit VIP Minibus direkt zu deiner Adresse (€6-7 pro Person) - Tickets werden im Bus verkauft - Die Ankunft " +
                "und Abfahrt der Busse orientiert sich nach Landung und Abflug der Flugzeuge - " +
                "für mehr Informationen  ",
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
            adaText: '20:00 - 24:00',

            bcnTitle: '27.08.2022 - Hochzeitsfeier',
            bcnText: '15:30 - open end',
            dict: `
Merhaba /mare-hah-bah/ = Hello = Hallo{0}{0}
Nasılsın? /Nah-swl-swn/ = How are you? = Wie sind sie?{0}{0}
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
    },
    Türkçe: {
        message: {
            rsvp: 'Lütfen Cevap Veriniz',
            arrive: 'Ulaşım',
            sleep: 'Konaklama',
            schedule: 'Program',
            denizli: 'Bilgi',
            invitation: 'Davet',
            gifts: 'Hediyeler',
            giftsMsg: '... sind nicht nötig. Wir sind glücklich dass du kommen kannst. Falls du uns aber ein Geschenk machen möchtest,' +
                'dann nehmen wir dankbar auch einen kleinen Beitrag an unseren Flitterwochen entgegen.',
            welcome: "Bu özel günü sizinle birlikte kutlamak için sabırsızlanıyoruz!",
            arriveInstruction: 'Es gibt viele Flüge zwischen Wien und Infos mit Zwischenstopp in İstanbul. Die wichtigsten Anbieter sind:',
            arriveKey1: 'Ein Flug dauert ungefähr 4 bis 5 Stunden',
            arriveKey2: 'Es gibt einen Zwischenstopp in İstanbul',
            arriveKey3: 'Der Hin- und Rückflug, abhängig vom Bestelltag, wird insgesamt ungefähr 150 Euro kosten, kann aber auch bis zu 250 Euro kosten',
            arriveKey4: 'Hier klicken um aktuelle Flüge zu prüfen',
            arriveKey5: 'Du wirst am Flughafen Infos ankommen. Dort kannst du leicht ein Taxi mieten',
            arriveKey6: 'Eine Fahrt vom Flughafen bis zum Stadtzentrum wird 45 Minuten dauern',
            arriveKey7: 'Wir bieten auch an, euch vom Flughafen abzuholen',
            arriveKey8: 'Falls du dich entscheidest ein Taxi zu mieten, dann wird die Fahrt ungefähr 30 Euro kosten',
            sleepText: 'Wir sind gerade dabei euch vergünstigte Schlafplätze für die Dauer der Hochzeit in Denizli zu organisieren.' +
                ' Falls du aber in einem Hotel übernachten möchtest, gibt es viele Möglichkeiten. Die Preise bewegen sich ' +
                'zwischen 12 bis 100 Euro / Nacht.',
            scheduleText: 'Es gibt noch keine konkreten Informationen',
            sunscreen: 'Wir empfehlen euch einen Sonnenschutz mit Sonnenschutzfaktor 50 mitzubringen.',
            badehose: 'Nach der Zeremonie gibt es die Möglichkeit ins Wasser zu springen, also Badehose nicht vergessen!',
            denizliText: 'Während ihr uns in Denizli besucht, gibt es viele Möglichkeiten eure Zeit zu verbringen. Hier sind nur ein paar Vorschläge.',
            denizliSprings: 'Pamukkale heiße Quellen',
            denizliRoman: 'Römische Ruinen Pamukkale (Hierapolis)',
            denizliGöl: 'Salzsee Strand',

            arriveInfo: "Es gibt viele Möglichkeiten anzureisen. Anbei versuchen wir alle Informationen zusammenzufassen. Diese Seite wird laufend aktualisiert.",
            arriveOneWay: 'Hin- und Rückflug separat zu buchen kann die Planung vereinfachen und ist meistens nicht teurer.',

            airplaneOnly: "Flug nach Denizli",
            airplaneOnlyText: "Wien - Flughafen Wien (VIE)",
            airplaneOnlyText1: "İstanbul - Flughafen İstanbul (IST) oder Flughafen Sabiha Gökçen (SAW)",
            airplaneOnlyText2: "Mit dem Flugzeug nach Flughafen Denizli Çardak (DNZ)",
            airplaneOnlyText3: "Vom Flughafen Denizli zum Stadtzentrum (1h)",
            airplaneOnlyBullet1: "Bus - Mit großem Bus zum Stadtzentrum (€2-3 pro Person) ",
            airplaneOnlyBullet2: "Bus - Mit VIP Minibus direkt zu deiner Adresse (€6-7 pro Person) - Tickets werden im Bus verkauft - Die Ankunft " +
                "und Abfahrt der Busse orientiert sich nach Landung und Abflug der Flugzeuge - " +
                "für mehr Informationen  ",
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
            adaText: '20:00 - 24:00',

            bcnTitle: '27.08.2022 - Hochzeitsfeier',
            bcnText: '15:30 - open end',
            dict: `
Merhaba /mare-hah-bah/ = Hello = Hallo{0}{0}
Nasılsın? /Nah-swl-swn/ = How are you? = Wie sind sie?{0}{0}
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
    locale: 'Deutsch',
    messages: messages
})

new Vue({
    render: h => h(App),
    router: router,
    i18n: i18n
}).$mount('#app')
