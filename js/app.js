$(document).ready(() => {
  $('#tvs-container .tv[focusable]').on('selected', (e) => {
    const pressed = $(e.currentTarget).attr('aria-pressed') === 'true';
    $(e.currentTarget).attr('aria-pressed', !pressed);
  });
});
