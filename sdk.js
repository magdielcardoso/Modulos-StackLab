<script>
    document.addEventListener('DOMContentLoaded', function() {
  const waitForVue = setInterval(() => {
    if (window.__vue__) {
        clearInterval(waitForVue);
    initializeStackLabSDK();
    }
  }, 500);

    function initializeStackLabSDK() {
    if (window.StackLabSDK) return;
    window.StackLabSDK = {
        loaded: true,
    modules: { },
    register: function(name, module) {
        this.modules[name] = module;
    console.log(`Módulo ${name} registrado`);
      }
    };

    console.log('StackLab SDK carregado');

    // Evento para módulos se registrarem
    document.dispatchEvent(new CustomEvent('stacklab-sdk-ready'));
  }
});
</script>
