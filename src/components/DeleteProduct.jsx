import { useDeleteProductMutation } from "../app/service/dummyData"


const DeleteProduct = ({productId}) => {

    const [deleteProduct, {data, isError, isLoading}] = useDeleteProductMutation()

    if (isError){
        return <h1>Error while fetching the data</h1>
    }

    if (isLoading){
        return <h1>Loading...</h1>
    }

    const deleteHandleClick = async() => {

        try {
            await deleteProduct(productId)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>

        <h2>{data?.title ? `${data.title} Deleted successfully!` : ""}</h2>

        <button onClick={deleteHandleClick}>Delete Product</button>
    </div>
  )
}

export default DeleteProduct