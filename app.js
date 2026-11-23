const buttons = document.querySelectorAll('[data-filter]');
buttons.forEach(button => button.addEventListener('click', () => {
  buttons.forEach(item => {item.classList.toggle('active', item === button);item.setAttribute('aria-pressed', String(item === button));});
  document.querySelectorAll('[data-category]').forEach(card => {card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;});
}));
