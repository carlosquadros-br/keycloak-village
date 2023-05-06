import { environment } from '../../environments/environment';
import { KeycloakService } from 'keycloak-angular';
export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: environment.keycloakAuthUrl,
        realm: 'SpringBootLogin',
        clientId: 'web-application',
      },
      initOptions: {
        onLoad: 'login-required',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',
      },
      enableBearerInterceptor: true,
      bearerExcludedUrls: ['/assets'],
    });
}
