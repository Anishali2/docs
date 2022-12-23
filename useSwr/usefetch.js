import useSWR, { mutate } from 'swr'

function useFetch(url, options) {
  const { data, error, isValidating, revalidate } = useSWR(url, async (url) => {
    try {
      const response = await fetch(url, options)
      const data = await response.json()
      if (response.ok) {
        return data
      } else {
        throw new Error(data.message)
      }
    } catch (error) {
      throw error
    }
  })

  const doFetch = async (url, options) => {
    try {
      const response = await fetch(url, options)
      const data = await response.json()
      if (response.ok) {
        mutate(url, data, false)
      } else {
        throw new Error(data.message)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const doMutate = async (data, shouldRevalidate = true) => {
    mutate(url, data, shouldRevalidate)
  }

  return {
    data,
    error,
    isValidating,
    revalidate,
    doFetch,
    doMutate,
  }
}
