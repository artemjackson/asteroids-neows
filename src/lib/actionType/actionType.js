export const ActionStates = {
  PENDING: 'PENDING',
  SUCCEED: 'SUCCEED',
  FAILED: 'FAILED'
};

export const createActionType = (name) => ({
  toString() { return name; },
  get PENDING() { return `${name}_${ActionStates.PENDING}`; },
  get SUCCEED() { return `${name}_${ActionStates.SUCCEED}`; },
  get FAILED() { return `${name}_${ActionStates.FAILED}`; }
});

export const createDomainActionTypeCreator = (domain) => (name) =>
  createActionType(`${domain}/${name}`);
