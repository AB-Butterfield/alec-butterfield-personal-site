import { info } from "../db/homeInfo"

export default function Home() {
    let messages = info[0]
    const whoAmIMessage = messages.whoAmI
    const whatIDoMessage = messages.whatDoIDo

    return (
        <div className="home-main-container">
            <div className="home-who-am-I-container">
                <div className="who-am-I">Who am I?</div>
                <p>{whoAmIMessage}</p>
            </div>
            <div className="home-what-I-do-container">
                <div className="what-do-I-do">What do I do?</div>
                <p>{whatIDoMessage}</p>
            </div>
        </div>
        
    )
}