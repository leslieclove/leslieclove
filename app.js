    function showSection(id) {
      document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
      });
      document.getElementById(id).classList.add('active');
    }

    function toggleMore() {
      const content = document.getElementById('moreContent');
      const button = document.getElementById('toggleButton');
      const isHidden = content.style.display === 'none' || content.style.display === '';

      content.style.display = isHidden ? 'block' : 'none';
      button.textContent = isHidden ? 'Show Less' : 'Show More';
    }