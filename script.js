function highlight() {
  const boldWords = document.querySelectorAll('strong');
  for (let i = 0; i < boldWords.length; i++) {
    boldWords[i].classList.add('bold-highlight');
  }
}

function return_normal() {
  const boldWords = document.querySelectorAll('strong');
  for (let i = 0; i < boldWords.length; i++) {
    boldWords[i].classList.remove('bold-highlight');
  }
}

const link = document.getElementById('highlightLink');
link.addEventListener('mouseover', highlight);
link.addEventListener('mouseout', return_normal);
