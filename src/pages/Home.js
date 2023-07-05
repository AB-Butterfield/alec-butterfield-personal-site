

export default function Home() {
    const whoAmIMessage = "This is who I am"
    const whatIDoMessage = "This is what I do"

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