export default function Map(){

    const lista=[
    {
        name: "Gui",
        idade: 22,
        escola: "UFPR"
    },
    {
        name: "Laura",
        idade: 18,
        escola: "senai"
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