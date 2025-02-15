import { initFederation } from '@angular-architects/native-federation';

(async () => {
  await initFederation("federation.manifest.json"); // ou initFederation('caminho/para/manifest.json')
  // Bootstrap da sua aplicação aqui
})();
