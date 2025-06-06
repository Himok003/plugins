# Laika apstākļu lietotne

## IEVADS

Šis rīks veidots, lai lietotāji varētu ērti pārbaudīt dažādu pilsētu laika apstākļus. Rīks sniedz aktuālu informāciju par temperatūru, mitrumu, vēju, saullēktu un saulrietu, kā arī tuvāko stundu prognozi un interaktīvu karti ar nokrišņu slāni.

## RĪKA PĀRSKATS

Lietotne izmanto OpenWeatherMap API, lai iegūtu aktuālus laikapstākļu datus un prognozes. Papildus integrēta Leaflet.js bibliotēka, lai lietotājam parādītu pilsētas atrašanās vietu un nokrišņu datus kartē. Lietotāja meklējumi tiek saglabāti lokāli ar `localStorage`.

### FUNKCIONALITĀTE

- Pilsētas meklēšana pēc nosaukuma
- Minimālā, maksimālā un "sajūtu" temperatūra
- Mitrums, vēja ātrums, saullēkts, saulriets, laika zona
- Tuvāko stundu prognoze (5 intervāli)
- Tumšais un gaišais režīms (ar saglabāšanu pārlūkā)
- Interaktīva lietus radara karte
- Pilsētu saraksts ar dzēšanas iespēju

## FAILU STRUKTŪRA
```
Laikapstākļu_lietotne/  
├── index.html 
├── style.css 
├── script.js 
├── README.md 
```

- `index.html` ievāc lietotāja ievadīto informāciju (pilsētas meklēšana).
- `style.css` satur dizainu un izskatu, ieskaitot tumšo/gaišo režīmu.
- `script.js` apstrādā ievades, veic API pieprasījumus, attēlo rezultātus un karti.


## IESPĒJAMIE UZLABOJUMI

- Papildu valodas izvēle saskarnē
- Vairāku dienu prognoze (ne tikai tuvākās stundas)
- Laika apstākļu vizualizācijas grafikos
- Pilsētas izvēle tieši kartē (klikšķinot)

## ZINĀMIE DEFEKTI

- OpenWeatherMap API bezmaksas piekļuvei ir pieprasījumu limits
- API dati nav vienmēr pieejami ļoti mazām vai kļūdaini ievadītām pilsētām
- Prognozes apraksti nav lokalizēti uz latviešu valodu

## RESURSI

Izmantotie ārējie rīki un API:
- [OpenWeatherMap](https://openweathermap.org/api) – laikapstākļi, prognozes, koordinātas
- [Leaflet.js](https://leafletjs.com/) – karšu vizualizācija
- [Font Awesome](https://fontawesome.com/) – ikonas
- [Ionicons](https://ionic.io/ionicons) – ikonas

## AUTORI

2025: Vladimirs Jankovičs
