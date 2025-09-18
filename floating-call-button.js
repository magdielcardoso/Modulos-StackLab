<script>
    document.addEventListener('stacklab-sdk-ready', function() {
  if (window.floatingCallButtonLoaded) return;
    window.floatingCallButtonLoaded = true;

    // Registrar no SDK
    window.StackLabSDK.register('floating-call-button', {
        version: '1.0.0',
    description: 'Botão flutuante de chamada',
    init: () => console.log('Floating call button initialized')
  });

    const styles = `
    .sl-floating-call-btn {
        position: fixed;
    bottom: 20px;
    right: 20px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: #10B981;
    border: none;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    cursor: pointer;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    }
    .sl-floating-call-btn:hover {
        background: #059669;
    transform: scale(1.05);
    }
    .sl-floating-call-btn svg {
        width: 24px;
    height: 24px;
    fill: white;
    }
    `;

    const style = document.createElement('style');
    style.id = 'sl-floating-call-styles';
    style.innerHTML = styles;
    document.head.appendChild(style);

    const button = document.createElement('button');
    button.className = 'sl-floating-call-btn';
    button.innerHTML = `
    <svg viewBox="0 0 24 24">
        <path d="M6.62,10.79c1.44,2.83,3.76,5.15,6.59,6.59l2.2-2.2c0.27-0.27,0.67-0.36,1.02-0.24 c1.12,0.37,2.33,0.57,3.57,0.57c0.55,0,1,0.45,1,1V20c0,0.55-0.45,1-1,1c-9.39,0-17-7.61-17-17c0-0.55,0.45-1,1-1h3.5 c0.55,0,1,0.45,1,1c0,1.25,0.2,2.45,0.57,3.57c0.11,0.35,0.03,0.74-0.25,1.02L6.62,10.79z" />
    </svg>
    `;
  button.onclick = () => window.open('tel:+1234567890', '_self');

    document.body.appendChild(button);
});
</script>
