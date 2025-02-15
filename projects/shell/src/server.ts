import { initNodeFederation } from '@softarc/native-federation-node';

console.log('Starting SSR for Shell');

(async () => {

  await initNodeFederation({
    remotesOrManifestUrl: './projects/shell/public/federation.manifest.json',
    relBundlePath: './dist/shell/browser/',
  });
  
  await import('./bootstrap-server');

})();
