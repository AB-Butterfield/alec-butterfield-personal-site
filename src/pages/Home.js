import info from "../db/homeInfo"

export default function Home() {
    const messages = info[0]
    const whoAmIMessage = messages.whoAmI
    const whatIDoMessage = messages.whatDoIDo

    return (
        <div className="home-main-container">
            <div className="home-who-am-I-container">
                <h1>Who am I?</h1>
                <p>{whoAmIMessage}</p>
            </div>
            <div className="home-what-I-do-container">
                <h1>What do I do?</h1>
                <p>{whatIDoMessage}</p>
            </div>
        </div>
        
    )
}