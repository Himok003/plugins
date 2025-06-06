// Izvēlamies HTML elementus, ar kuriem strādāsim
const pluginList = document.getElementById("pluginList");
const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");
const typeFilter = document.getElementById("typeFilter");

// Funkcija zvaigžņu atainošanai pēc popularitātes
function renderStars(rating) {
  return "★".repeat(rating) + "☆".repeat(5 - rating);
}

// Ielādējam plugīnu datus no JSON faila
fetch("plugins.json")
  .then((res) => res.json())
  .then((plugins) => {
    // Atrodam visus unikālos plugīnu tipus un pievienojam tos filtra izvēlnei
    const uniqueTypes = [...new Set(plugins.map(p => p.type))];
    uniqueTypes.sort();
    uniqueTypes.forEach(type => {
      const option = document.createElement("option");
      option.value = type;
      option.textContent = type;
      typeFilter.appendChild(option);
    });

    // Funkcija, kas attēlo plugīnus uz ekrāna pēc filtra, meklēšanas un kārtošanas
    function renderPlugins() {
      const query = searchInput.value.toLowerCase(); // Meklēšanas teksts
      const type = typeFilter.value;                 // Izvēlētais tips
      const sort = sortSelect.value;                 // Kārtošanas veids

      // Filtrējam plugīnus pēc meklēšanas un izvēlētā veida
      let filtered = plugins.filter(p =>
        p.name.toLowerCase().includes(query) &&
        (type === "all" || p.type === type)
      );

      // Kārtojam pēc cenas
      filtered.sort((a, b) =>
        sort === "expensive" ? b.price - a.price : a.price - b.price
      );

      // Izvadām plugīnus HTML formātā vai paziņojumu, ja nav rezultātu
      pluginList.innerHTML = filtered.length
        ? filtered.map(plugin => {
            const stars = '★'.repeat(plugin.popularity || 0) + '☆'.repeat(5 - (plugin.popularity || 0));
            return `
              <div class="plugin">
                <img src="${plugin.image}" alt="${plugin.name}" />
                <strong>${plugin.name}</strong><br />
                Veids: ${plugin.type}<br />
                Cena: ${plugin.price}€<br />
                <div class="stars">${stars}</div>
                <a href="${plugin.url}" target="_blank">Skatīt</a>
              </div>
            `;
          }).join('')
        : '<p>Nekas netika atrasts 😕</p>';
    }

    // Notikumu klausītāji katram filtram
    searchInput.addEventListener("input", renderPlugins);
    sortSelect.addEventListener("change", renderPlugins);
    typeFilter.addEventListener("change", renderPlugins);

    // Sākotnējā attēlošana
    renderPlugins();
  })
  .catch((err) => {
    // Kļūdas ziņojums, ja nav iespējams ielādēt JSON failu
    pluginList.innerHTML = '<p>Kļūda ielādējot datus 😢</p>';
    console.error("Nepieciešams lokālais serveris, lai ielādētu JSON failu:", err);
  });
