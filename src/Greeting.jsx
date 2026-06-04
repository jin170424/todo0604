import "tailwindcss"

function Greeting(props) {
    const {name, greet} = props
    return <p className="text-blue-500 font-bold">{name}さん、{greet}!</p>
}

export default Greeting