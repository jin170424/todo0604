import "tailwindcss"

function Greeting(props) {
    console.log("Greeting")
    const {name, greet, onclick} = props
    return <p onClick={()=>onclick() } className="text-blue-500 font-bold">{name}さん、{greet}!</p>
}

export default Greeting