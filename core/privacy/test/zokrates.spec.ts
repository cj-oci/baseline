import { shouldBehaveLikeZKSnarkCircuit, shouldBehaveLikePresetZKSnarkCircuit } from './shared';
import { zkSnarkCircuitProviderServiceFactory, zkSnarkCircuitProviderServiceZokrates } from '../src/index';

// const baselineDocumentCircuitPath = '../../lib/circuits/baselineDocument.zok';
const noopAgreementCircuitPath = '../../lib/circuits/noopAgreement.zok';
          
let provider;

describe('when the underlying zokrates provider is available', () => {
  beforeEach(async () => {
    provider = await zkSnarkCircuitProviderServiceFactory(zkSnarkCircuitProviderServiceZokrates);
  });

  it('runs the noopAgreement circuit lifecycle successfully', () => {
    shouldBehaveLikeZKSnarkCircuit(provider, noopAgreementCircuitPath, ['2']); // this is here for sanity...
  });

<<<<<<< HEAD
  // it('runs the createAgreement circuit lifecycle successfully with preset circuit artifacts', () => {
  //   shouldBehaveLikePresetZKSnarkCircuit(provider, 'createAgreement');
  // });
=======
  it('runs the createAgreement circuit lifecycle successfully', () => {
    shouldOperateOnPresetZkSnarkCircuit(provider, 'test5', ['2', '4']);
  });
>>>>>>> experimental update to upgrade zok-js to 1.0.25
});
