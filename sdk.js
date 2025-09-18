<script>
    document.addEventListener('DOMContentLoaded', function() {
        let attempts = 0;
    const maxAttempts = 20; // 10 segundos max

  const waitForVue = setInterval(() => {
        attempts++;

    // Inicializar mesmo sem Vue após alguns segundos
    if (window.__vue__ || attempts >= maxAttempts) {
        clearInterval(waitForVue);
    initializeStackLabSDK();
    }
  }, 500);

    function initializeStackLabSDK() {
    if (window.StackLabSDK) return;

    window.StackLabSDK = {
        loaded: true,
    vueAvailable: !!window.__vue__,
    modules: { },
    register: function(name, module) {
        this.modules[name] = module;
    console.log(`Módulo ${name} registrado`);
      }
    };

    console.log('StackLab SDK carregado', {
        vueAvailable: window.StackLabSDK.vueAvailable,
    attempts: attempts
    });

    // Evento para módulos se registrarem
    document.dispatchEvent(new CustomEvent('stacklab-sdk-ready'));
  }
});
</script>
