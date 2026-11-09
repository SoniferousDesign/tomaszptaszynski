'use strict';

// Dane projektów można łatwo rozbudowywać o realne zdjęcia, wyniki i case studies.
const projects = {
  shop: {
    category: 'WEB / UX / E-COMMERCE', index: '01', title: 'samsiezbadaj.pl',
    lead: 'Rozwój i przebudowa istniejącego sklepu B2C na Shoperze. Przejąłem operacyjnie rozwój sklepu w kwietniu 2025 roku i samodzielnie rozwijałem jego warstwę frontendową, od strony głównej po proces zakupowy. Zakres obejmował także merchandising i treści SEO, bez tworzenia silnika Shopera od podstaw.',
    tasks: ['Modyfikacje szablonów Smarty .tpl, JavaScript oraz CSS/LESS', 'Autorskie menu mobilne i banery powiązane z kategoriami', 'Dynamiczne sekcje produktowe z wykorzystaniem Shoper FrontAPI', 'Rozwój kart produktów: galerie, sekcje informacyjne i wersje mobilne', 'Usprawnienia koszyka: rekomendacje, przeliczanie ilości i pasek darmowej dostawy', 'Przebudowa checkoutu ze zwiększeniem widoczności zakupu bez rejestracji', 'Optymalizacja treści produktów i kategorii pod SEO'],
    facts: [['39','opisanych realizacji'],['91','udokumentowanych elementów']],
    images: [['assets/sklep-glowna.webp','Strona główna sklepu'],['assets/koszyk.webp','Koszyk i rekomendacje'],['assets/kategoria-plastry.webp','Listing i treści SEO kategorii'],['assets/karta-produktu.webp','Rozbudowana karta produktu']],
    note: 'Zrzuty ekranu pochodzą z listopada 2026. Zakres obejmował rozwój istniejącego storefrontu Shoper. Liczbowe wyniki sprzedaży pozostają poza wersją publiczną do czasu potwierdzenia możliwości ich ujawnienia.',
    link: 'https://samsiezbadaj.pl/'
  },
  ads: {
    category: 'PERFORMANCE MARKETING', index: '02', title: 'Performance marketing',
    lead: 'Prowadzenie i analiza kampanii Google Ads oraz Allegro Ads. W działaniach marketplace priorytetem było skalowanie sprzedaży i wolumenu produktów, zamiast optymalizacji wyłącznie pod ROAS.',
    tasks: ['Google Ads: praca na kampaniach e-commerce, strategiach ustalania stawek i budżetach', 'Analiza sezonowości, asortymentu i efektywności reklam', 'Allegro Ads dla dwóch kont: samsiezbadaj oraz Integra Hygiene', 'Analiza kampanii, miejsc emisji, kliknięć i wolumenu sprzedaży', 'Rozdzielenie kampanii głównej i sezonowej dla wybranych grup produktów', 'Podejmowanie decyzji na podstawie wyników i celu biznesowego'],
    facts: [['2','konta Allegro Ads'],['12 mies.','okres dokumentacji kampanii']],
    note: 'Raporty wewnętrzne zawierają dokładne kwoty wydatków i sprzedaży przypisanej reklamom. Nie publikuję ich bez zgody na ujawnienie danych firmowych.'
  },
  seo: {
    category: 'SEO / CONTENT', index: '03', title: 'Widoczność organiczna',
    lead: 'Rozwój treści i struktury SEO sklepu oraz analiza wyszukiwań w Google Search Console. Praca łączyła optymalizację kategorii i produktów z oceną zapytań oraz skuteczności konkretnych podstron.',
    tasks: ['Rozbudowa opisów kategorii, w tym sekcji plastrów i opatrunków', 'Optymalizacja treści i struktury kart produktów', 'Analiza zapytań, pozycji, CTR i kliknięć w Google Search Console', 'Ocena skuteczności artykułów i stron produktowych', 'Kontrola technicznych aspektów SEO i planowanie nowych treści', 'Analizy porównawcze wybranych okresów, bez przypisywania wzrostów jednej zmianie'],
    facts: [['GSC','analiza zapytań i stron'],['SEO','content i struktura']],
    images: [['assets/kategoria-plastry.webp','Kategoria z treściami SEO'],['assets/karta-produktu.webp','Karta produktu i sekcje informacyjne']],
    note: 'Dane GSC potwierdzają skalę widoczności i wybrane okresy wzrostu. Nie są dowodem, że wszystkie zmiany ruchu były wyłącznym efektem mojej pracy.'
  },
  analytics: {
    category: 'ANALYTICS / IMPLEMENTATION', index: '04', title: 'GA4 & Google Tag Manager',
    lead: 'Samodzielnie przygotowana konfiguracja pomiaru e-commerce oparta na Google Tag Managerze, obejmująca GA4, Google Ads i zarządzanie zgodami. Dokumentacja opisuje zawartość opublikowanego kontenera, a nie deklarację bezbłędności wszystkich zdarzeń.',
    tasks: ['Konfiguracja tagów, reguł, zmiennych i niestandardowego JavaScript', 'Wdrożenie GA4 i zdarzeń e-commerce', 'Konfiguracja pomiaru konwersji Google Ads oraz enhanced conversions', 'Remarketing dynamiczny i sygnały zakupowe', 'Integracja zgód oraz Consent Mode', 'Kontrola struktury danych i dokumentowanie konfiguracji'],
    facts: [['16','tagów w opublikowanej wersji'],['GA4 + Ads','spójny pomiar kampanii']],
    note: 'Opis przedstawia zakres rzeczywistej konfiguracji, potwierdzony dokumentacją kontenera. Bez udostępniania identyfikatorów kont, kodu wewnętrznego ani danych klientów.'
  },
  design: {
    category: 'GRAPHIC DESIGN', index: '05', title: 'Projektowanie graficzne',
    lead: 'Tworzenie materiałów dla sprzedaży, produktów i komunikacji marki w kanałach cyfrowych oraz drukowanych.',
    tasks: ['Projekty opakowań i materiałów produktowych', 'Grafiki reklamowe i banery e-commerce', 'Ulotki, projekty wielkoformatowe i billboardy', 'Przygotowanie materiałów do druku i publikacji', 'Utrzymywanie spójności wizualnej kampanii w różnych formatach'],
    note: 'Galeria projektów graficznych zostanie uzupełniona na podstawie odrębnych plików źródłowych i wizualizacji.'
  },
  photo: {
    category: 'PHOTO / VIDEO', index: '06', title: 'Foto & wideo',
    lead: 'Przygotowanie fotografii produktowych i krótkich form wideo wykorzystywanych w e-commerce oraz komunikacji marketingowej.',
    tasks: ['Fotografia produktowa i obróbka zdjęć', 'Rejestracja i montaż krótkich filmów promocyjnych', 'Przygotowanie materiałów do publikacji w witrynie sklepowej', 'Dobór formatów i kompozycji do powierzchni publikacji', 'Obróbka obrazu i kolorystyki'],
    note: 'Rzeczywiste realizacje wideo i fotografie dodamy jako osobną galerię, zamiast pokazywać przypadkowe wizualizacje.'
  }
};

const filters = [...document.querySelectorAll('.filter')];
const cards = [...document.querySelectorAll('.project-card')];
filters.forEach(button => button.addEventListener('click', () => {
  const active = button.dataset.filter;
  filters.forEach(item => { const selected = item === button; item.classList.toggle('active', selected); item.setAttribute('aria-pressed', String(selected)); });
  cards.forEach(card => { card.hidden = active !== 'all' && card.dataset.category !== active; });
}));

const dialog = document.querySelector('#project-dialog');
const close = dialog.querySelector('.dialog-close');
let lastFocused = null;
cards.forEach(card => card.addEventListener('click', () => {
  const item = projects[card.dataset.project];
  if (!item) return;
  lastFocused = card;
  document.querySelector('#dialog-category').textContent = item.category;
  document.querySelector('#dialog-index').textContent = item.index;
  document.querySelector('#dialog-title').textContent = item.title;
  document.querySelector('#dialog-lead').textContent = item.lead;
  document.querySelector('#dialog-note').textContent = item.note;
  document.querySelector('#dialog-list').replaceChildren(...item.tasks.map(t => {const li=document.createElement('li');li.textContent=t;return li;}));
  const gallery = document.querySelector('#dialog-gallery');
  gallery.replaceChildren();
  gallery.hidden = !item.images?.length;
  for (const [src, description] of item.images || []) {
    const figure = document.createElement('figure');
    const anchor = document.createElement('a'); anchor.href = src; anchor.target = '_blank'; anchor.rel = 'noopener noreferrer';
    const img = document.createElement('img'); img.src = src; img.alt = description; img.loading = 'lazy';
    const caption = document.createElement('figcaption');caption.textContent = description + ' • Otwórz pełny widok';
    anchor.append(img);figure.append(anchor,caption);gallery.append(figure);
  }
  const facts = document.querySelector('#dialog-facts');
  facts.replaceChildren();facts.hidden = !item.facts?.length;
  for (const [value, label] of item.facts || []) {
    const node = document.createElement('div'); const number = document.createElement('strong'); number.textContent=value;
    const text = document.createElement('span');text.textContent=label;node.append(number,text);facts.append(node);
  }

  const link = document.querySelector('#dialog-link');
  link.hidden = !item.link;
  if (item.link) link.href = item.link;
  dialog.showModal();
}));
close.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => {if (e.target === dialog) dialog.close();});
dialog.addEventListener('close', () => lastFocused?.focus());

const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Zamknij menu' : 'Otwórz menu');
  mobileNav.hidden = !open;
});
mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mobileNav.hidden = true;
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Otwórz menu');
}));

let toastTimer;
const toast = document.querySelector('#toast');
document.querySelector('#copy-link').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(window.location.href.split('#')[0]);
    toast.textContent = 'Link skopiowany do schowka';
  } catch {
    toast.textContent = 'Skopiuj adres z paska przeglądarki';
  }
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
});
document.querySelector('#year').textContent = new Date().getFullYear();
