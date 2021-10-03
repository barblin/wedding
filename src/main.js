import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import GetThere from "./components/GetThere";
import WhereToSleep from "./components/WhereToSleep";
import Schedule from "./components/Schedule";
import Invitation from "./components/Invitation";
import rsvp from "./components/rsvp";
import About from "./components/About";

Vue.use(VueRouter)
Vue.use(VueI18n)
Vue.config.productionTip = false

const routes = [
    {path: '/how-to-get-there', component: GetThere},
    {path: '/where-to-sleep', component: WhereToSleep},
    {path: '/schedule', component: Schedule},
    {path: '/invitation', component: Invitation},
    {path: '/about', component: About},
    {path: '/', component: rsvp},
]

const router = new VueRouter({
    routes: routes // short for `routes: routes`
})

const messages = {
    English: {
        message: {
            rsvp: 'RSVP',
            arrive: 'How to arrive',
            sleep: 'Where to sleep',
            schedule: 'Schedule',
            denizli: 'Denizli Infos',
            invitation: 'Invitation',
            welcome:'We have created this website to give you the most important information about our wedding and to collect\n' +
                '      attendance information from you. (Website is still expected to be changed)',
            arriveInstruction: 'There are many direct flights between Vienna and Denizli. Here are some key facts you need to consider:',
            arriveKey1: 'A flight will take around 4 hours',
            arriveKey2: 'There will be 1 Stop in Istanbul',
            arriveKey3: 'The price for a round trip will be around 150 Euros, but can reach up to 250 Euros',
            arriveKey4: 'Click here to checkout current flights',
            arriveKey5: 'You will arrive at Denizli Aiport. From there you can rent a Taxi',
            arriveKey6: 'A ride from the Airport to the City Center will take 45 Minutes',
            arriveKey7: 'We will offer to get you from the aiport',
            arriveKey8: 'If you decide to take a taxi, the taxi ride will cost you around 30 Euros',
            sleepText: 'We are working on providing a sleeping place for you in Denizli. But if decide to stay at a hotel, you can choose\n' +
                '    from a large selection of hotels. The price is round about 12 to 50 Euros a night.',
            scheduleText: 'No concrete information available yet',
            denizliText: 'While staying at Denizli, there are many activities you can choose from. Here are just a few suggestions.',
            denizliSprings: 'Pamukkale hot springs',
            denizliRoman: 'Roman ruins at Pamukkale (Hierapolis)',
            denizliGöl: 'Salda Gölü Beach',
        }
    },
    Deutsch: {
        message: {
            rsvp: 'Zu-/Absage',
            arrive: 'Anfahrt',
            sleep: 'Übernachtung',
            schedule: 'Ablauf',
            denizli: 'Denizli Infos',
            invitation: 'Einladung',
            welcome:'Wir haben diese Webseite erstellt, um euch die wichtigsten Infos mitgeben zu können und um euch ' +
                'um Terminbestätigung zu bitten. (Webseite wird noch bearbeitet)',
            arriveInstruction: 'Es gibt viele Direkt-Flüge zwischen Wien und Denizli. Wichtige Informationen an die man denken muss :',
            arriveKey1: 'Ein Flug dauert ungefähr 4 Stunden',
            arriveKey2: 'Es gibt einen Zwischenstopp in Istanbul',
            arriveKey3: 'Der Flug, abhängig vom Bestelltag, wird ungefähr 150 Euro kosten, kann aber auch bis zu 250 Euro kosten',
            arriveKey4: 'Hier klicken um aktulle FLüge zu prüfen',
            arriveKey5: 'Du wirst am Flughafen Denizli ankommen. Dort kannst du leicht ein Taxi mieten',
            arriveKey6: 'Eine Fahrt vom Flughafen bis zum Stadtzentrum wird 45 Minuten dauern',
            arriveKey7: 'Wir bieten auch an, euch vom Flughafen abzuholen',
            arriveKey8: 'Falls du dich entscheidest ein Taxi zu mieten, dann wird die Fahrt ungefähr 30 Euro kosten',
            sleepText: 'Wir sind gerade dabei euch Schlafplätze für die Dauer der Hochzeit in Denizli zu organisieren.' +
                ' Falls du aber in einem Hotal übernachten möchtest, gibt es viele Möglichkeiten. Die Preise bewegen sich ' +
                'zwischen 12 bis 50 Euro / Nacht.',
            scheduleText: 'Es gibt noch keine konkreten Informationen',
            denizliText: 'Während ihr uns in Denizli besucht, gibt es viele Möglichkeiten eure Zeit zu verbringen. Hier sind nur ein paar Vorschläge.',
            denizliSprings: 'Pamukkale heiße Quellen',
            denizliRoman: 'Römische Ruinen Pamukkale (Hierapolis)',
            denizliGöl: 'Salzsee Strand',
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
