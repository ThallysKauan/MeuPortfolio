window.addEventListener('load', () => {
  const panels = document.querySelectorAll('.panel');
  const totalPanels = panels.length;

  if (panels.length === 0) {
    console.error('Nenhum .panel encontrado.');
    return;
  }

  function updateScroll() {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const sectionHeight = viewportHeight;

    const sectionIndex = Math.floor(scrollY / sectionHeight);
    const progress = (scrollY % sectionHeight) / sectionHeight;

    panels.forEach((panel, i) => {
      if (i === sectionIndex) {
        panel.style.opacity = 1 - progress;
        panel.style.transform = `translateY(${progress * -50}px)`;
      } else if (i === sectionIndex + 1) {
        panel.style.opacity = progress;
        panel.style.transform = `translateY(${(1 - progress) * 50}px)`;
      } else {
        panel.style.opacity = 0;
        panel.style.transform = `translateY(50px)`;
      }
    });
  }

  window.addEventListener('scroll', updateScroll);
  updateScroll(); // inicializa no load
});
