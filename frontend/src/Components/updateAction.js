function updateAction(globalState, payload) {
  return {
    ...globalState,
    yourDetails: {
      ...globalState.yourDetails,
      ...payload,
    },
  };
}

export default updateAction;
