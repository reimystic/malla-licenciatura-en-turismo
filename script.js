document.querySelectorAll('.course').forEach(course => {
  course.addEventListener('click', () => {
    if (course.classList.contains('locked')) return;

    // Alterna estado de aprobado
    course.classList.toggle('approved');

    const courseId = course.dataset.id;

    if (!courseId) return;

    // Desbloquea los cursos que dependan de este
    document.querySelectorAll(`[data-prereq="${courseId}"]`).forEach(dep => {
      // Solo desbloquea si aún no está aprobado
      if (!dep.classList.contains('approved')) {
        dep.classList.remove('locked');
      }
    });
  });
});
