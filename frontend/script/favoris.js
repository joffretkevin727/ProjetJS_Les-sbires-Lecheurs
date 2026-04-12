const container = document.getElementById('favoris-container');

const user = JSON.parse(localStorage.getItem('user'));
const userId = user?.id;

// ==================
// RÉCUPÉRER LES FAVORIS
// ==================
const fetchFavoris = async () => {
    if (!userId) {
        container.innerHTML = "<p>Tu dois être connecté</p>";
        return;
    }

    try {
        const res = await fetch(`http://localhost:6767/favoris/${userId}`);
        const favoris = await res.json();

        console.log("Favoris reçus :", favoris);

        if (favoris.length === 0) {
            container.innerHTML = "<p>Aucun favori</p>";
            return;
        }

        renderFavoris(favoris);

    } catch (err) {
        console.error(err);
        container.innerHTML = "<p>Erreur chargement</p>";
    }
};

// ==================
// AFFICHAGE
// ==================
const renderFavoris = (favoris) => {
    container.innerHTML = favoris.map(fav => `
        <div class="card champion-card" data-id="${fav.champion_id}">
            <div class="img-champ">
                <button class="fav-btn active" data-id="${fav.id}">❤</button>

                <img src="../Backend/${fav.url_loadscreen}" alt="${fav.name}">
            </div>

            <p>${fav.name}</p>
        </div>
    `).join('');

    setupEvents();
};

// ==================
// EVENTS
// ==================
const setupEvents = () => {

    // click carte
    document.querySelectorAll('.champion-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('.fav-btn')) return;

            const id = card.getAttribute('data-id');
            window.location.href = `http://localhost:6969/product?id=${id}`;
        });
    });

    // supprimer favori
    document.querySelectorAll('.fav-btn').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            e.stopPropagation();

            const id = btn.getAttribute('data-id');

            await fetch(`http://localhost:6767/favoris/${id}`, {
                method: 'DELETE'
            });

            fetchFavoris();
        });
    });
};

// ==================
fetchFavoris();