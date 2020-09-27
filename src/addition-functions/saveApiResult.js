function saveApiResult(result, setResult) {
  console.log("RESULT", result)
  if (result.items) {
    setResult(prev => ({
      'data': prev.data.concat(result.items),
      'hasMore': result?.has_more || false,
    }))
  }
}

export default saveApiResult;