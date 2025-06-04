# Auth

Example PWA that demonstrates two authentication methods:
1. Login through Keycloak.
2. One-time password (OTP) that can be stored in a password manager.

The `pwa` folder contains a minimal implementation. Update `app.js` with your Keycloak server settings. OTP verification uses the [jsotp](https://github.com/hectorm/jsotp) library loaded from jsDelivr.

### Running locally
Serve the `pwa` folder with any static file server, for example:

```bash
npx serve pwa
```

Then open `http://localhost:3000` in a browser.
