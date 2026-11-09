'use strict';

// Dane projektów można łatwo rozbudowywać o realne zdjęcia, wyniki i case studies.
const projects = {
  shop: {
    category: 'WEB / UX / E-COMMERCE', index: '01', title: 'samsiezbadaj.pl',
    lead: 'Rozwój sklepu internetowego na platformie Shoper. Projekt łączący e-commerce, optymalizację doświadczenia użytkownika oraz samodzielne wdrożenia front-endowe.',
    tasks: ['Rozwój układu i funkcjonalności sklepu w Shoper', 'Autorskie modyfikacje szablonów Smarty (.tpl), CSS/LESS i JavaScript', 'Rozbudowa menu mobilnego, galerii produktów oraz elementów stron produktowych', 'Usprawnienia ścieżki zakupowej i interfejsu użytkownika', 'Przygotowanie i optymalizacja treści pod SEO'],
    note: 'Case study rozbudujemy o zrzuty ekranu, widoki przed i po oraz demonstracje wdrożeń.',
    link: 'https://samsiezbadaj.pl/'
  },
  ads: {
    category: 'PERFORMANCE MARKETING', index: '02', title: 'Performance marketing',
    lead: 'Planowanie, prowadzenie i optymalizacja działań reklamowych wspierających sprzedaż online.',
    tasks: ['Google Ads: rozwój i optymalizacja kampanii produktowych', 'Allegro Ads: obsługa i optymalizacja działań reklamowych', 'Zarządzanie budżetami i dostosowywanie strategii', 'Analiza wyników oraz sezonowości sprzedaży', 'Współpraca danych z kampanii i pomiaru e-commerce'],
    note: 'Wyniki kampanii dodamy dopiero po wybraniu danych do publicznej prezentacji.'
  },
  seo: {
    category: 'SEO / CONTENT', index: '03', title: 'Widoczność organiczna',
    lead: 'Praca nad wzrostem jakości i widoczności serwisu w organicznych wynikach wyszukiwania.',
    tasks: ['Tworzenie i optymalizacja treści kategorii i produktów', 'Analiza zapytań, podstron i trendów w Google Search Console', 'Optymalizacja struktury i elementów on-page', 'Weryfikacja technicznych elementów SEO', 'Planowanie treści opartych na intencji wyszukiwania'],
    note: 'Wizualizacja w kafelku jest ilustracyjna. Rzeczywiste dane GSC dodamy po opracowaniu raportu.'
  },
  analytics: {
    category: 'ANALYTICS / IMPLEMENTATION', index: '04', title: 'GA4 & Google Tag Manager',
    lead: 'Samodzielna implementacja ekosystemu pomiarowego dla sklepu internetowego.',
    tasks: ['Konfiguracja i zarządzanie Google Tag Manager', 'Wdrożenie Google Analytics 4 i zdarzeń e-commerce', 'Konfiguracja konwersji i rozszerzonych konwersji Google Ads', 'Remarketing dynamiczny i obsługa Consent Mode', 'Praca na tagach, regułach, zmiennych i własnym JavaScript'],
    note: 'Docelowo pokażemy mapę pomiarową oraz schemat przepływu zdarzeń, bez ujawniania danych dostępowych.'
  },
  design: {
    category: 'GRAPHIC DESIGN', index: '05', title: 'Projektowanie graficzne',
    lead: 'Projektowanie materiałów wizualnych przeznaczonych do kanałów cyfrowych i druku.',
    tasks: ['Projekty opakowań i materiałów produktowych', 'Materiały reklamowe, ulotki i billboardy', 'Grafiki do kampanii i komunikacji marketingowej', 'Przygotowanie projektów do produkcji i publikacji', 'Spójna komunikacja wizualna w wielu formatach'],
    note: 'Do tej sekcji dodamy rzeczywiste mockupy opakowań, grafiki i materiały drukowane.'
  },
  photo: {
    category: 'PHOTO / VIDEO', index: '06', title: 'Foto & wideo',
    lead: 'Samodzielna produkcja materiałów wizualnych wykorzystywanych w komunikacji marek i projektów.',
    tasks: ['Fotografia produktowa i przygotowanie materiału do publikacji', 'Nagrania materiałów promocyjnych', 'Montaż i postprodukcja wideo', 'Praca z kompozycją, światłem i kolorystyką', 'Dopasowanie formatów do różnych kanałów komunikacji'],
    note: 'Galerie zdjęć i odtwarzacze wideo dodamy po wgraniu materiałów.'
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
