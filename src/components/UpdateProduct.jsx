import { useUpdateProductMutation } from "../app/service/dummyData"


const UpdateProduct = ({productId}) => {

    const [updateProduct, {data, isError, isLoading}] = useUpdateProductMutation()

    
    if (isError){
        return <h1>Error while fetching the data</h1>
    }

    if (isLoading){
        return <h1>Loading...</h1>
    }

    const HandleClick = async() => {

        try {

            const updatedProductData = {
                title : 'This is updated'
            }
            
            await updateProduct({
                id : productId,
                updatedProduct : updatedProductData
            })
            
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <div>

        <h1>{data?.title}</h1>
        <p>{data?.id}</p>
        <button onClick={HandleClick} disabled={isLoading}>Update Product</button>
    </div>
  )
}

export default UpdateProduct