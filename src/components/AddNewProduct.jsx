import { useAddNewProductMutation } from "../app/service/dummyData"

const AddNewProduct = () => {

    const [addNewProduct, {data, isError, isLoading}] = useAddNewProductMutation()

    if (isError){
        return <h1>Error while fetching the data</h1>
    }

    if (isLoading){
        return <h1>Loading...</h1>
    }

    const handleClick = async() => {
        try {
            const productData = {
                id : 1,
                title : 'Amazon Basics T-Shirt',
                description : 'Built with premium clothes'
            }

            await addNewProduct(productData)

        } catch (err) {
            console.error("Error while adding a product", err)
        }
    }



  return (
    <div>

        <h1>{data?.id}</h1>
        <h1>{data?.title}</h1>
        <h1>{data?.description}</h1>

        <button onClick={handleClick} disabled={isLoading}>AddNewButton</button>
    </div>
  )
}

export default AddNewProduct