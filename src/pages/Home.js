import { info } from "../db/homeInfo"

export default function Home() {
    let messages = info[0]
    const whoAmIMessage = messages.whoAmI
    const whatIDoMessage = messages.whatDoIDo

    return (
        <div className="home-main-container">
            <div className="home-who-am-I-container">
                <h1 className="who-am-I">Who am I?</h1>
                <p>{whoAmIMessage}</p>
            </div>
            <div className="home-what-I-do-container">
                <h1 className="what-do-I-do">What do I do?</h1>
                <p>{whatIDoMessage}</p>
            </div>
        </div>
        
    )
}