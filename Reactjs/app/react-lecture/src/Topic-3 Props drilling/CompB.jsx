import CompC from "./CompC"

const CompB = ({user}) =>{
    return (
        <div>
            <h2>Comp-B</h2>
            <CompC user = {user} />
        </div>
    )
}

export default CompB;