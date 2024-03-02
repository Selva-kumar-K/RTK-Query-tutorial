import { useGetAllProductQuery } from "../app/service/dummyData"


const AllProducts = () => {

    const {data, isError, isLoading} = useGetAllProductQuery()

    if (isError){
        return <h1>Error while fetching the data</h1>
    }

    if (isLoading){
        return <h1>Loading...</h1>
    }
  return (
    <div>
        {data?.products.map((d) => (
            <>
            <h1 key={d.id}>{d.title}</h1>
            <p>{d.description}</p>
            </>
        ))}
    </div>
  )
}

export default AllProducts