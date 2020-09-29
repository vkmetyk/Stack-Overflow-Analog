function saveApiResult(result, setResult) {
  if (result.items) {
    setResult(prev => ({
      'data': prev.data.concat(result.items),
      'hasMore': result?.has_more || false,
    }))
    return true;
  }
}

export default saveApiResult;