
    // ==========================
    //  DATA: ADD NEW TITLES HERE
    // ==========================
    const GAMES = [
      {
        id: 'shadows-below',
        title: 'Shadows Below',
        status: 'Upcoming',
        releaseDate: 'TBA 2026',
        short: 'A submarine exploration survival game set in the abyssal dark.',
        long: `Descend into a dynamic undersea world. Balance oxygen, fuel, and hull integrity while navigating sonar pings, treacherous trenches, and bioluminescent life. Salvage, upgrade, and uncover what sleeps beneath.`,
        platforms: ['PC'],
        tags: ['Exploration', 'Survival', 'Single-Player'],
        images: { cover: 'images/shadows.png', banner: 'images/shadows.png' },
        links: { steam: '#', trailer: '#', presskit: '#' }
      },
      {
        id: 'Kaz',
        title: 'Kazs Adventure 2: Lost Souls',
        status: 'Released',
        releaseDate: '6 Dec, 2024',
        short: 'Re-Enter the world of Kazs Adventure and travel through the underworld in 5 new amazing worlds with new graphics and places to explore!',
        long: 'Welcome back to the world of Kazs Adventure, after Kaz meets with a terrible fate, he goes looking to reunite with his long lost brother as he adventures through the vast underworld!',
        platforms: ['PC'],
        tags: ['2D', 'Exploration'],
        images: { cover: 'images/kaz.jpg', banner: 'images/kaz2.png' },
        links: {
          steam: 'https://store.steampowered.com/app/2147030/Kazs_Adventure_2_Lost_Souls/',
          trailer: 'https://www.youtube.com/watch?v=I3nUWDgPQtQ',
          presskit: '#'
        }
      },
      {
        id: 'pw',
        title: 'Physics World: Evolution',
        status: 'Released',
        releaseDate: '25 Nov 2025',
        short: 'Push the limits of what’s possible with physics in Physics World: Evolution!',
        long: 'Enter the New World of Physics Welcome, Testers! Step into Physics World: Evolution, the next-generation sandbox simulation where physics is your playground and curiosity is your guide. As the spiritual successor to 2023s Physics Lab, this evolution delivers more tools, more locations, and a world layered with secrets waiting to be uncovered. New Tools. New Chaos. Push the limits of whats possible using an expanded arsenal of physics tools and environmental objects. Launch explosives or detonate nukes. Shatter jars, rocks, and more with real-time physics interactions. Experiment freely across 5+ diverse testing labs, each with unique environments and potential outcomes. Whether youre stacking, smashing, or sending objects into orbit, your creativity is the only limit. Uncover a Hidden Past Behind the tests lies a deeper mystery — what happened to the world before you arrived? Scattered across the locations are hidden articles, audio logs, and clues that hint at a story far bigger than any single experiment. Piece together the past and uncover the truth buried beneath the surface.',
        platforms: ['PC'],
        tags: ['Casual', 'Adventure', 'Sandbox', 'Puzzle'],
        images: { cover: 'images/pw.png', banner: 'images/pw.png' },
        links: {
          steam: 'https://store.steampowered.com/app/3383470/Physics_World_Evolution/',
          trailer: 'https://www.youtube.com/watch?v=e1XE6WKvWLM',
          presskit: '#'
        }
      },
      {
        id: 'lastfragment',
        title: 'The Last Fragment',
        status: 'Released',
        releaseDate: '30 April 2025',
        short: 'The world is crumbling—one forgotten story at a time. Caelen Mor carries the last fragment of the magic that once held reality together. But with every use, it rewrites him.',
        long: 'The world is crumbling—one forgotten story at a time. Caelen Mor carries the last fragment of the magic that once held reality together. But with every use, it rewrites him. In a land where Wild Stories warp cities into nightmares, memory is outlawed, and reality collapses by the hour, Caelen must navigate a dying world with a dangerous ally at his side: a charming, untrustworthy thief with secrets of his own. As he races against Veridra, the ruthless queen rewriting existence to her own perfection, Caelen must decide: Will he erase the world to survive, or burn to save it?',
        platforms: ['Amazon'],
        tags: ['Book', 'ebook', 'Fantasy'],
        images: { cover: 'images/lastfragment.jpg', banner: 'images/lastfragment.jpg' },
        links: {
          amazon: 'https://www.amazon.co.uk/Last-Fragment-Ryan-Hills-ebook/dp/B0F74994VJ/',
          trailer: '#',
          presskit: '#'
        }
      },
            {
        id: 'kazbook',
        title: 'Kazs Journey: Creature Handbook',
        status: 'Released',
        releaseDate: '5 September 2025',
        short: 'Discover hidden details about different creatures, locations, items and more from the Kazs Adventure Video Game Series.',
        long: 'Discover hidden details about different creatures, locations, items and more from the Kazs Adventure Video Game Series. Unlock the full Kazs Adventure Summarised Timeline segmented into 3 different eras for easy reading and understanding. Complete a Kazs Adventure themed Quiz and Wordsearch, you can also use this handbook to take notes in your day to day life or when you next play Kazs Adventure.',
        platforms: ['Amazon'],
        tags: ['Book', 'ebook', 'Fantasy', 'Exploration'],
        images: { cover: 'images/kbook.jpg', banner: 'images/kbook.jpg' },
        links: {
          amazon: 'https://www.amazon.co.uk/Kazs-Journey-Creature-Michael-Barlow/dp/B0FJ7FJ34N/ref=sr_1_1?crid=DBZ4Q08SCC6J&dib=eyJ2IjoiMSJ9.AnmZrcWX3eR-F74qNGx_Fb_SQgPKau4TkzgXTz7Oud2d7gwG3VqBqY9-_nv_zuaTYo7zVnARXzaGtzWP2tef8t4GPzec3D-WQfVocISRd76n8eHfG2SbXWaZHanU5Eu_2vedrdDtBGi9GUaiUS-uXcZ9rCOile3bq-RKOd6za2XP3-_gBJesjiSDlq-JSfJK_kvXLMhygnfRFcb37CTN21qMGc-651c_TOmNceATCMI.sMC-I7KO6REIbMRBum6XgIuN9hKqM_UBLOOZgMPR92k&dib_tag=se&keywords=kazs+journey&qid=1761137857&sprefix=kazs+journey%2Caps%2C153&sr=8-1',
          trailer: '#',
          presskit: '#'
        }
      }
    ];

    // --------------
    // UTILITIES
    // --------------
    const $ = (sel, root=document) => root.querySelector(sel);
    const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

    // Render current year in footer
    $('#year').textContent = new Date().getFullYear();

    // Build game cards
    const grid = $('#games-grid');
    function card(game){
      const el = document.createElement('article');
      el.className = 'card';
      el.setAttribute('role','listitem');
      el.innerHTML = `
        <div class="cover" style="background-image:url('${game.images.cover}')" aria-hidden="true"></div>
        <div class="body">
          <div class="meta">${game.status} • ${game.releaseDate || ''}</div>
          <h3 style="margin:.2rem 0 .2rem">${game.title}</h3>
          <p class="meta">${game.short}</p>
          <div class="tags">${game.tags.map(t => `<span class='tag'>${t}</span>`).join('')}</div>
          <div class="actions">
            <a class="btn" href="#" data-open-game="${game.id}">Details</a>
            ${
              game.links?.amazon && game.links.amazon !== '#'
                ? `<a class="btn primary" href="${game.links.amazon}" target="_blank" rel="noopener">Amazon</a>`
                : (game.links?.steam && game.links.steam !== '#'
                    ? `<a class="btn primary" href="${game.links.steam}" target="_blank" rel="noopener">Steam</a>`
                    : ''
                  )
            }
          </div>
        </div>`;
      return el;
    }

    function renderGrid(){
      grid.innerHTML = '';
      GAMES.forEach(g => grid.appendChild(card(g)));
    }
    renderGrid();

    // Modal logic
    const modal = $('#game-modal');
    const setModal = (game) => {
      $('#modal-title').textContent = game.title;
      $('#modal-media').style.backgroundImage = `url(${game.images.banner || game.images.cover})`;
      $('#modal-desc').textContent = game.long || game.short;
      $('#modal-meta').textContent = `${game.status} • ${game.releaseDate} • ${game.platforms.join(', ')}`;
      const tags = $('#modal-tags');
      tags.innerHTML = game.tags.map(t => `<span class='tag'>${t}</span>`).join('');
      const actions = $('#modal-actions');
      actions.innerHTML = '';
      const mkBtn = (label, href, primary=false) => {
        if(!href || href === '#') return;
        const a = document.createElement('a');
        a.href = href; a.target = '_blank'; a.rel = 'noopener';
        a.className = 'btn' + (primary? ' primary' : '');
        a.textContent = label; actions.appendChild(a);
      };
      if (game.links?.amazon) {
        mkBtn('View on Amazon', game.links.amazon, true);
      } else if (game.links?.steam) {
        mkBtn('View on Steam', game.links.steam, true);
      }
      mkBtn('Trailer', game.links.trailer);
      mkBtn('Press Kit', game.links.presskit);
    };

    function openGame(id){
      const game = GAMES.find(g => g.id === id);
      if(!game) return;
      setModal(game);
      modal.showModal();
    }

    // Open from buttons or hero
    document.addEventListener('click', (e)=>{
      const t = e.target.closest('[data-open-game]');
      if(t){ e.preventDefault(); openGame(t.getAttribute('data-open-game')); }
      if(e.target.matches('[data-close]')){ modal.close(); }
    });

    // ===== Mobile hamburger =====
    const toggleBtn = document.querySelector('.menu-toggle');
    const siteNav = document.getElementById('site-nav');
    if(toggleBtn && siteNav){
      toggleBtn.addEventListener('click', ()=>{
        const isOpen = document.body.classList.toggle('nav-open');
        toggleBtn.setAttribute('aria-expanded', String(isOpen));
      });
      // Close on link click
      siteNav.addEventListener('click', (e)=>{
        if(e.target.closest('a')){
          document.body.classList.remove('nav-open');
          toggleBtn.setAttribute('aria-expanded','false');
        }
      });
      // Close on Escape
      document.addEventListener('keydown', (e)=>{
        if(e.key === 'Escape'){
          document.body.classList.remove('nav-open');
          toggleBtn.setAttribute('aria-expanded','false');
        }
      });
      // Close on outside click
      document.addEventListener('click', (e)=>{
        if(!document.body.classList.contains('nav-open')) return;
        if(e.target.closest('#site-nav') || e.target.closest('.menu-toggle')) return;
        document.body.classList.remove('nav-open');
        toggleBtn.setAttribute('aria-expanded','false');
      });
    }

    // Optional: open Shadows Below modal if arriving with hash #shadows-below
    if(location.hash && location.hash.replace('#','')){
      const maybe = location.hash.replace('#','');
      if(GAMES.find(g=>g.id===maybe)) openGame(maybe);
    }
 