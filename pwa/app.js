const keycloakConfig = {
  url: 'https://your-keycloak-server/auth',
  realm: 'your-realm',
  clientId: 'your-client-id'
};

const keycloak = new Keycloak(keycloakConfig);

document.getElementById('login-keycloak').addEventListener('click', () => {
  keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
    if (authenticated) {
      document.getElementById('result').textContent = 'Logged in with Keycloak. Token: ' + keycloak.token;
    } else {
      document.getElementById('result').textContent = 'Keycloak authentication failed';
    }
  }).catch(err => {
    document.getElementById('result').textContent = 'Error: ' + err;
  });
});

// OTP login example
const otpSecret = 'JBSWY3DPEHPK3PXP'; // demo secret for TOTP (Base32)

document.getElementById('otp-submit').addEventListener('click', () => {
  const otp = document.getElementById('otp').value;
  verifyOtp(otp);
});

function verifyOtp(otp) {
  // Normally you would send the OTP to your backend for verification.
  // Here we verify it in the client for demo purposes using otplib.
  fetch('https://cdn.jsdelivr.net/npm/otplib@12.0.1/browser.js')
    .then(res => res.text())
    .then(text => {
      eval(text); // load otplib in browser
      const isValid = otplib.authenticator.check(otp, otpSecret);
      document.getElementById('result').textContent = isValid ? 'OTP valid' : 'OTP invalid';
    });
}
