function changeSelectedData (fieldName, value, setStates, setResult) {
  if (setStates && setResult) {
    setStates(states => ({
      ...states,
      page: 1,
      [fieldName]: value
    }));
    setResult({data: [], hasMore: false});
  }
}

export default changeSelectedData;