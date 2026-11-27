import CompB from "./CompB"

const CompA = () =>{
    const user = "Raj";
    return (
        <div>
            <h1>Component A</h1>
            <CompB user={user}/> 
        </div>
    )
}

export default CompA;