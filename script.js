document.addEventListener('DOMContentLoaded', () => {
  console.log('script.js cargado');

  // --- Botón volver arriba ---
  const btnTop = document.getElementById('btnTop');
  if (btnTop) {
    const onScroll = () => {
      const sc = window.scrollY || document.documentElement.scrollTop;
      btnTop.style.display = (document.body.scrollHeight > window.innerHeight && sc > 150) ? 'block' : 'none';
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    btnTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // --- Botón ocultar/mostrar resumen ---
  const btnToggle = document.getElementById('btnToggleResumen');
  const resumen = document.getElementById('resumen');

  const isHidden = (el) => {
    if (!el) return true;
    return el.classList.contains('hidden') || window.getComputedStyle(el).display === 'none';
  };

  const setBtnText = (buttonEl, hidden) => {
    if (!buttonEl) return;
    buttonEl.textContent = hidden ? 'Mostrar Resumen' : 'Ocultar Resumen';
    buttonEl.setAttribute('aria-expanded', (!hidden).toString());
  };

  if (btnToggle && resumen) {
    setBtnText(btnToggle, isHidden(resumen));
    btnToggle.addEventListener('click', () => {
      resumen.classList.toggle('hidden');
      setBtnText(btnToggle, isHidden(resumen));
      console.log('toggleResumen ->', isHidden(resumen) ? 'hidden' : 'visible');
    });
  }

  // --- Buscador de secciones ---
  const buscador = document.getElementById("buscador");
  const secciones = document.querySelectorAll("article section");

  if (buscador && secciones.length > 0) {
    buscador.addEventListener("keyup", () => {
      const texto = buscador.value.toLowerCase();

      secciones.forEach(sec => {
        const contenido = sec.textContent.toLowerCase();
        if (contenido.includes(texto)) {
          sec.style.display = "";
        } else {
          sec.style.display = "none";
        }
      });
    });
  }


});
