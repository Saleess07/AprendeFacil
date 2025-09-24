function speakAll() {
  if(!('speechSynthesis' in window)) { alert('Leitor de voz não disponível'); return; }
  const text = document.getElementById("page-content").innerText;
  const ut = new SpeechSynthesisUtterance(text);
  ut.lang = 'pt-BR';
  speechSynthesis.cancel();
  speechSynthesis.speak(ut);
}
function stopSpeak() { speechSynthesis.cancel(); }
