//1. Apply CSS styles to App.js component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.


function ColorfulCards(props) {


    return (
        <div>
            <h1 className="heading"></h1>
            <div className="card">
                <div className="top">
                    <h2 className="name">{props.name}</h2>
                    <img className="circle-img"
                        src={props.img}
                        alt="avatar_img"
                    />
                 </div>
                 <div className="bottom">
                    <p className="info">{props.phone}</p>
                    <p className="info">{props.email}</p>
               
                 </div>
            </div>
        </div>
    )
}

export default ColorfulCards;