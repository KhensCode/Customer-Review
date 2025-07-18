
const Review = () => {
    return(
        <>
        <div className="review">
            <h1 className="center">Customer Review</h1>
            <p className="center">Customer reviews are evaluations and opinions shared by consumers regarding thier 
                <br/>
                experiences with a product,service, or business.
            </p>
            <div className="email">

                <h2>Your Email(required)</h2>
                <input type="email"  id="emailInput" placeholder="user@gmail.com" />
            </div>
            <h2>Your Rating</h2>
            <div className="rating">
                    <ul>
                        <li>&#128546;</li>
                        <li>&#128522;</li>
                        <li>&#129321;</li>
                        <li>&#128544;</li>
                        <li>&#128525;</li>
                    </ul>
                    <br/>
                <div className="improve">
                    <button className="btn">AI Chatbot</button>
                    <button className="btn">User Interface</button>
                    <button className="btn">Custom Themes</button>
                    <button className="btn">Internationalisation</button>
                </div>
                
                <div className="share">
                    <p>Do you have any thoughts you'd like to share?</p>
                    <textarea name="" id=""></textarea>
                </div>
                <button className="submit">Submit</button>
            </div>
        </div>
        
        
        
        </>
    )
}
export default Review