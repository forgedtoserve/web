(function () {
  'use strict';

  var FORM_ID = 'xppzljgj';
  var SUCCESS_URL = '/thank-you';

  function initForms() {
    if (typeof window.formspree !== 'function') return;

    document.querySelectorAll('form[data-formspree-enhanced]').forEach(function (form, index) {
      if (!form.id) form.id = 'fts-form-' + (index + 1);

      form.querySelectorAll('input, select, textarea').forEach(function (field) {
        field.setAttribute('data-fs-field', '');
      });

      var submit = form.querySelector('button[type="submit"], input[type="submit"]');
      if (submit) submit.setAttribute('data-fs-submit-btn', '');

      if (!form.querySelector('[data-fs-error]')) {
        var error = document.createElement('div');
        error.setAttribute('data-fs-error', '');
        error.setAttribute('role', 'alert');
        error.setAttribute('aria-live', 'polite');
        error.className = 'form-status';
        if (submit && submit.parentNode) {
          submit.parentNode.insertBefore(error, submit.nextSibling);
        } else {
          form.appendChild(error);
        }
      }

      window.formspree('initForm', {
        formElement: '#' + form.id,
        formId: FORM_ID,
        onSuccess: function () {
          window.location.assign(SUCCESS_URL);
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initForms);
  } else {
    initForms();
  }
})();
