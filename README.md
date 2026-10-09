# AXNEST — GitHub Pages

Staattinen englanninkielinen etusivu. HTML, CSS ja JavaScript; ei npm-asennusta tai build-vaihetta. Mukana logot ja paikalliset fontit. Sivun interaktiot toimivat selaimessa.

## Julkaisu

1. Luo GitHubiin repositorio esimerkiksi nimellä `axnest-website`. Valitse `main` oletushaaraksi.
2. Pura ZIP ja lisää sen sisältö repositorion juureen. Mukana on oltava myös `.github/workflows/pages.yml`. Älä lataa pelkkää ZIP-tiedostoa repositorioon.
3. Avaa **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Avaa **Actions → Deploy AXNEST to GitHub Pages → Run workflow**, jos ensimmäinen ajo ei käynnistynyt tai Pages-asetus puuttui sen aikana.
5. Julkaisun osoite näkyy valmistuneessa työnkulussa ja Pages-asetuksissa. Jatkossa jokainen push `main`-haaraan julkaisee sivun uudelleen.

Suhteelliset tiedostopolut toimivat sekä `https://KÄYTTÄJÄ.github.io/REPOSITORIO/`-osoitteessa että omalla verkkotunnuksella. Pagesin saatavuus yksityisissä repositorioissa riippuu GitHub-tilauksesta.

## axnest.com

Aseta **Settings → Pages → Custom domain** -kenttään `axnest.com` ja tee GitHubin ohjeen mukaiset DNS-muutokset verkkotunnuksen hallinnassa. Ota **Enforce HTTPS** käyttöön, kun varmenne on valmis. Tämä paketti ei muuta DNS-asetuksia.

GitHub Actions -julkaisussa oma verkkotunnus määritetään Pages-asetuksissa; CNAME-tiedostoa ei tarvita tähän työnkulkuun. Varmista verkkotunnuksen omistus GitHubin ohjeen mukaan ennen DNS-kytkentää.

## Tiedostot

- `site/index.html`: sisältö ja rakenne
- `site/style.css`: ulkoasu ja mobiilinäkymä
- `site/app.js`: työnkulun välilehdet ja täyteosien näyttö
- `site/assets/`: AXNEST-, Oracle- ja AWS-logot sekä fontit
- `.github/workflows/pages.yml`: automaattinen julkaisu

Muokkaa sivua `site/`-kansiossa. Vain tämä kansio julkaistaan; ohjeet ja muut lähdetiedostot jäävät sen ulkopuolelle.

## Sisällön rajaukset

Oracle Amsterdam ja Neon on AWS Frankfurt on merkitty tavoitelluksi kokoonpanoksi, kunnes sovelluksen todellinen hosting on vahvistettu. GitHub Pages isännöi tätä esittelysivua, ei AXNEST-sovellusta. Kirjautumislinkki voidaan lisätä, kun sovelluksen tarkka osoite on tiedossa. Nestäyskuva on havainnekuva.

Paketti on tarkistettu tiedostopolkujen, navigaation, JavaScript-syntaksin ja ZIP-eheyden osalta. GitHub-julkaisua tai visuaalista selaintestiä ei ole ajettu tässä toimituksessa.

## Viralliset ohjeet

- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

Logot kuuluvat tavaramerkkien omistajille. AXNEST-logo on käyttäjän ohjelmistosta; Oracle-logo Wikimedia Commonsista ja Powered by AWS -logo AWS:n aineistosta. Fontit: IBM Plex ja Oswald, Google Fonts.
