// app/page.js

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store' // important for SSR
  })
  return res.json()
}

export default async function Page() {
  const data = await getData()

  return (
    <div>
        <h1>SSR Data</h1>
        {
            Array.isArray(data) && data.length > 0 ? (
                <ul>
                    {data.map((trader) => (
                        <li key={trader.id}>{trader.name}</li>
                    ))}
                </ul>
            ) : (
                <p>No traders found.</p>
            )
        }
    </div>
  )
}