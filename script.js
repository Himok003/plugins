const pluginList = document.getElementById("pluginList");
const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");
const typeFilter = document.getElementById("typeFilter");

function renderStars(rating) {
  return "★".repeat(rating) + "☆".repeat(5 - rating);
}

fetch("plugins.json")
  .then((res) => res.json())
  .then((plugins) => {
    // Pievienot unikālos veidus filtram
    const uniqueTypes = [...new Set(plugins.map(p => p.type))];
    uniqueTypes.sort();
    uniqueTypes.forEach(type => {
      const option = document.createElement("option");
      option.value = type;
      option.textContent = type;
      typeFilter.appendChild(option);
    });

    function renderPlugins() {
      const query = searchInput.value.toLowerCase();
      const type = typeFilter.value;
      const sort = sortSelect.value;

      let filtered = plugins.filter(p =>
        p.name.toLowerCase().includes(query) &&
        (type === "all" || p.type === type)
      );

      filtered.sort((a, b) =>
        sort === "expensive" ? b.price - a.price : a.price - b.price
      );

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

    searchInput.addEventListener("input", renderPlugins);
    sortSelect.addEventListener("change", renderPlugins);
    typeFilter.addEventListener("change", renderPlugins);

    renderPlugins();
  })
  .catch((err) => {
    pluginList.innerHTML = '<p>Kļūda ielādējot datus 😢</p>';
    console.error("Nepieciešams lokālais serveris, lai ielādētu JSON failu:", err);
  });
