"use strict";
(() => {
  const menu = document.querySelector('.menu-button');
  const nav = document.querySelector('#nav-principal');
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const expanded = menu.getAttribute('aria-expanded') === 'true';
      menu.setAttribute('aria-expanded', String(!expanded));
      menu.setAttribute('aria-label', expanded ? 'Abrir menu' : 'Fechar menu');
      nav.classList.toggle('is-open', !expanded);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      menu.setAttribute('aria-expanded','false');
      nav.classList.remove('is-open');
    }));
  }
  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = String(new Date().getFullYear()); });
  const settings = window.SHOPEEOFFER_SITE || {};
  const responsible = String(settings.nomeResponsavel || '').trim();
  const email = String(settings.emailContato || '').trim();
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  document.querySelectorAll('[data-legal-name]').forEach(el => {
    el.textContent = responsible || 'Responsável pelo ShopeeOffer — identificação a completar';
  });
  document.querySelectorAll('[data-email-display]').forEach(el => {
    el.textContent = emailValid ? email : 'E-mail a cadastrar antes da ativação do serviço';
  });
  document.querySelectorAll('[data-email-link]').forEach(el => {
    if (emailValid) {
      el.textContent = email;
      el.href = `mailto:${email}`;
    } else {
      el.textContent = 'E-mail de contato pendente';
      el.removeAttribute('href');
      el.setAttribute('aria-disabled','true');
    }
  });
})();
