function Page({ data }) {
    return (<div>
        {data.map((data) => (
            <li>
                <h3>{data.username}</h3>

            </li>
        ))}
    </div>);

}

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

export default Page