<script>
(function(d) {
  var CDN_URL = "https://cdn.jsdelivr.net/gh/magdielcardoso/Modulos-StackLab@main/botoes-flutuantes.html";
  
  // Carregar e injetar HTML da CDN
  fetch(CDN_URL)
    .then(r => r.text())
    .then(html => {
      var parser = new DOMParser();
      var doc = parser.parseFromString(html, 'text/html');
      
      // Injetar estilos se não existir
      var style = doc.querySelector('style');
      if (style && !d.getElementById('stacklab-call-styles')) {
        style.id = 'stacklab-call-styles';
        d.head.appendChild(style);
      }
      
      // Injetar botão se não existir
      var button = doc.querySelector('.floating-call-btn');
      if (button && !d.getElementById('stacklab-floating-call-btn')) {
        button.id = 'stacklab-floating-call-btn';
        d.body.appendChild(button);
      }
      
      // Executar script funcional
      var script = doc.querySelector('script');
      if (script) {
        var newScript = d.createElement('script');
        newScript.textContent = script.textContent;
        d.body.appendChild(newScript);
      }
    })
    .catch(e => console.error('StackLab: Erro ao carregar botão', e));
})(document);
</script>