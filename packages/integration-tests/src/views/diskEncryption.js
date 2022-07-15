export const diskEncryptionPage = {
  getTangServerUrl : (index) => {
    return cy.get(`#form-input-diskEncryptionTangServers-${index}-url-field`);
  },
  getTangServerThumbprint : (index) => {
    return cy.get(`#form-input-diskEncryptionTangServers-${index}-thumbprint-field`);
  },
  getMastersEncryptionSwitch: () => {
    return cy.get('input[name="enableDiskEncryptionOnMasters"]');
  },
  getWorkersEncryptionSwitch: () => {
    return cy.get('input[name="enableDiskEncryptionOnWorkers"]');
  },
  getEncryptionMode: () => {
    return cy.get('input[name="diskEncryptionMode"]');
  },
  addAnotherTangServer: () => {
    return cy.contains('Add another Tang server');
  },
}
