import League from '../models/League.js';

export async function up() {
  await League.insertMany([
  {
    "name": "Superliga",
    "country": "România"
  },
  {
    "name": "Premier League",
    "country": "Anglia"
  },
  {
    "name": "La Liga",
    "country": "Spania"
  },
  {
    "name": "Serie A",
    "country": "Italia"
  },
  {
    "name": "Bundesliga",
    "country": "Germania"
  },
  {
    "name": "Ligue 1",
    "country": "Franța"
  },
  {
    "name": "Primeira Liga",
    "country": "Portugalia"
  },
  {
    "name": "Eredivisie",
    "country": "Olanda"
  },
  {
    "name": "Major League Soccer",
    "country": "SUA"
  },
  {
    "name": "Jupiler Pro League",
    "country": "Belgia"
  },
  {
    "name": "Superliga",
    "country": "Danemarca"
  },
  {
    "name": "Allsvenskan",
    "country": "Suedia"
  },
  {
    "name": "Eliteserien",
    "country": "Norvegia"
  },
  {
    "name": "Veikkausliiga",
    "country": "Finlanda"
  },
  {
    "name": "Super Lig",
    "country": "Turcia"
  },
  {
    "name": "Liga MX",
    "country": "Mexic"
  },
  {
    "name": "MLS",
    "country": "SUA"
  },
  {
    "name": "A-League",
    "country": "Australia"
  },
  {
    "name": "K League 1",
    "country": "Coreea de Sud"
  },
  {
    "name": "J1 League",
    "country": "Japonia"
  },
  {
    "name": "Chinese Super League",
    "country": "China"
  },
  {
    "name": "Indian Super League",
    "country": "India"
  },
  {
    "name": "Qatar Stars League",
    "country": "Qatar"
  },
  {
    "name": "Saudi Pro League",
    "country": "Arabia Saudită"
  },
  {
    "name": "UAE Pro League",
    "country": "Emiratele Arabe Unite"
  },
  {
    "name": "K League 2",
    "country": "Coreea de Sud"
  },
  {
    "name": "J2 League",
    "country": "Japonia"
  },
  {
    "name": "Chinese League One",
    "country": "China"
  },
  {
    "name": "I-League",
    "country": "India"
  },
  {
    "name": "Qatar Second Division",
    "country": "Qatar"
  },
  {
    "name": "Saudi First Division League",
    "country": "Arabia Saudită"
  },
  {
    "name": "UAE First Division League",
    "country": "Emiratele Arabe Unite"
  },
  {
    "name": "Cupa României",
    "country": "România"
  },
  {
    "name": "Supercupa României",
    "country": "România"
  },
  {
    "name": "FA Cup",
    "country": "Anglia"
  },
  {
    "name": "EFL Cup",
    "country": "Anglia"
  },
  {
    "name": "Coppa Italia",
    "country": "Italia"
  },
  {
    "name": "Supercoppa Italiana",
    "country": "Italia"
  },
  {
    "name": "Copa del Rey",
    "country": "Spania"
  },
  {
    "name": "Supercopa de España",
    "country": "Spania"
  },
  {
    "name": "Coupe de France",
    "country": "Franța"
  },
  {
    "name": "Trophée des Champions",
    "country": "Franța"
  },
  {
    "name": "DFB-Pokal",
    "country": "Germania"
  },
  {
    "name": "Supercup Deutschland",
    "country": "Germania"
  },
  {
    "name": "Copa do Brasil",
    "country": "Brazilia"
  },
  {
    "name": "Copa Libertadores",
    "country": "America de Sud"
  },
  {
    "name": "Copa Sudamericana",
    "country": "America de Sud"
  },
  {
    "name": "CONCACAF Champions League",
    "country": "America de Nord"
  },
  {
    "name": "AFC Champions League",
    "country": "Asia"
  },
  {
    "name": "CAF Champions League",
    "country": "Africa"
  },
  {
    "name": "OFC Champions League",
    "country": "Oceania"
  },
  {
    "name": "FIFA World Cup",
    "country": "Internațional"
  },
  {
    "name": "UEFA Champions League",
    "country": "Internațional"
  },
  {
    "name": "UEFA Europa League",
    "country": "Internațional"
  },
  {
    "name": "UEFA Conference League",
    "country": "Internațional"
  },
  {
    "name": "UEFA Nations League",
    "country": "Internațional"
  },
  {
    "name": "Copa América",
    "country": "America de Sud"
  },
  {
    "name": "Africa Cup of Nations",
    "country": "Africa"
  },
  {
    "name": "AFC Asian Cup",
    "country": "Asia"
  },
  {
    "name": "OFC Nations Cup",
    "country": "Oceania"
  },
  {
    "name": "CONCACAF Gold Cup",
    "country": "America de Nord"
  },
  {
    "name": "FIFA U-20 World Cup",
    "country": "Internațional"
  },
  {
    "name": "FIFA U-17 World Cup",
    "country": "Internațional"
  },
  {
    "name": "FIFA Women's World Cup",
    "country": "Internațional"
  },
  {
    "name": "UEFA Women's Champions League",
    "country": "Internațional"
  },
  {
    "name": "UEFA Women's Euro",
    "country": "Internațional"
  },
  {
    "name": "CONCACAF Women's Championship",
    "country": "America de Nord"
  },
  {
    "name": "Copa Libertadores Femenina",
    "country": "America de Sud"
  },
  {
    "name": "AFC Women's Asian Cup",
    "country": "Asia"
  },
  {
    "name": "CAF Women's Africa Cup of Nations",
    "country": "Africa"
  },
  {
    "name": "OFC Women's Nations Cup",
    "country": "Oceania"
  },
  {
    "name": "FIFA U-20 Women's World Cup",
    "country": "Internațional"
  },
  {
    "name": "FIFA U-17 Women's World Cup",
    "country": "Internațional"
  },
  {
    "name": "FIFA Women's Club World Cup",
    "country": "Internațional"
  },
  {
    "name": "UEFA Women's Nations League",
    "country": "Internațional"
  },
  {
    "name": "FIFA Women's Olympic Football Tournament",
    "country": "Internațional"
  }
]);
  console.log('Leagues seeded successfully');
}

export async function down() {
  await League.deleteMany();
  console.log('Leagues removed successfully');
}
