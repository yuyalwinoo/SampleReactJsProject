import Card from "./Card"

const List = (props) => {
    console.log(props)
  return (
    <div>
        {
            props.info.length > 0 ? (
                props.info.map((item)=>{
                    return(
                        <Card css="card" key={item.name}>
                            <h2>{item.name}</h2>
                            <p>{item.email}</p>
                            <p>{item.address}</p>
                        </Card>
                    )
                })
            ) : (
                <p>{`Data not found!`}</p>
            )
            
        }
    </div>
  )
}

export default List