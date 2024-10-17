export default function Map(){

    const lista=[
    {
        name: "Amanda",
        idade: 18,
        escola: "PUCPR e UFPR"
    },
    {
        name: "Pedro",
        idade: 19,
        escola: "PUCPR"
    }
    ]

    const MapPessoas = ({pessoas}) =>{
        return pessoas.map((ps,index)=>
        <div> key={index}
            <h1>{ps.name}</h1>
            <h1>{ps.idade}</h1>
            <h1>{ps.escola}</h1>
        </div>
        )
    }

    return (
        <>
        <MapPessoas pessoas={lista}/>
        </>
    )
}