# FL Studio Plagīņu Bibliotēka

## IEVADS

FL Studio Plagīņu Bibliotēka ir tīmekļa lietotne, kas ļauj lietotājiem meklēt, filtrēt un apskatīt dažādus muzikālos plagīnus, kas ir saderīgi ar FL Studio. Lietotāji var atrast informāciju par plagīna veidu, cenu, popularitāti, kā arī piekļūt ārējiem resursiem, kur to iegūt.


## RĪKA PĀRSKATS

Šī lietotne darbojas, izmantojot vietējo `plugins.json` datni, kurā glabājas informācija par dažādiem plagīniem (nosaukums, veids, cena, popularitāte u.c.). Lietotne nodrošina lietotājam ērtu saskarni plagīnu meklēšanai un kārtošanai.

### FUNKCIONALITĀTE

- Plugīnu meklēšana pēc nosaukuma;
- Kārtošana pēc cenas (lēta → dārga un otrādi);
- Filtrēšana pēc plugīna veida (sintezators, efekts utt.);
- Zvaigžņu reitings pēc popularitātes;
- Saite uz ārējo lapu, kur var uzzināt vairāk vai iegādāties plagīnu;
- Dinamiska satura ielāde no `plugins.json`.

## FAILU STRUKTŪRA
```
plugins/  
├── index.html      # HTML struktūra un meklēšanas forma
├── style.css       # Lietotnes vizuālais noformējums (tumšais režīms)
├── script.js       # Datu ielāde, filtrēšana un notikumu apstrāde
├── plugins.json    # Plagīnu saraksts (nosaukumi, veidi, cenas u.c.)
```

- `index.html` satur saskarni ar filtru laukiem un konteineru rezultātu attēlošanai.
- `style.css` nodrošina tumšo krāsu shēmu, kā arī kartiņu izkārtojumu plagīniem.
- `script.js` apstrādā meklēšanu, kārtošanu un filtrēšanu, izmantojot JavaScript.
- `plugins.json` ir dati par pieejamajiem plugīniem (lietotāja pusē).


## IESPĒJAMIE UZLABOJUMI

- Iespēja pievienot plagīnu vēlmju sarakstam;
- Iespēja vērtēt plagīnus no lietotāju puses;
- Kategoriju (tagu) balstīts filtrs ar vairākiem izvēles kritērijiem;
- Valodas izvēle (piemēram, angļu un latviešu).

## ZINĀMIE DEFEKTI

- Attēlu attēlošana, izmantojot attēlu saites.

## RESURSI

Izmantotie ārējie rīki:
- [PluginDeals](https://plugindeals.net/top-100-most-popular-plugins/) – populāru plagīņu saraksts.


## AUTORI

© 2025 Vladislavs Fiļipovs, Alekss Krastiņš, Davids Gulijevs


