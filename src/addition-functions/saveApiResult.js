function saveApiResult(result, setStates) {
  if (result.items) {
    setStates(prev => ({
      ...prev,
      'result': prev.result.concat(result.items),
      'hasMore': result?.has_more || false,
    }))
  }
}

export default saveApiResult;