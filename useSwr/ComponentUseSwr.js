import { useFetch } from './useFetch'

function MyComponent() {
  const { data, error, isValidating, revalidate, doFetch, doMutate } = useFetch('https://my-api.com/endpoint')

  if (error) return <div>Failed to load data</div>
  if (!data) return <div>Loading...</div>

  const handleClick = () => {
    doFetch('https://my-api.com/endpoint')
  }

  const handleChange = (event) => {
    doMutate(event.target.value)
  }

  return (
    <div>
      <button onClick={handleClick}>Refresh</button>
      <input type="text" value={data} onChange={handleChange} />
      {isValidating ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </div>
      )}
    </div>
  )
}
