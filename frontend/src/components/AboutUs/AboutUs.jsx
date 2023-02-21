import React from "react"

function AboutUs() {
    return (
        <React.Fragment>
            <div className="container">
                <h1>About</h1>
                <div className="project background">

                    <p><strong>Dreamcation</strong> is my capstone project here at 
                    <a href="https://devcodecamp.com/" target="_blank"> devCodeCamp</a>
                    </p>
                    <p>I like traveling the world, but sometimes it's hard to gauge exactly where you want to go on vacation, so why not have it decided for you based on certain criteria?
                    </p>
                </div>

                <div className="climate">
                    <h3>Climate Data</h3>
                    <p>Climate data was pulled from a long-term study of the vacation-area from 1960-1990 using the Meteostat api. I chose to utilize past weather patterns over current or even future data due to the volatility of weather. Still, it would be prudent to do some sort of research on weather trends on the potential vacation location of choice. </p>
                    <p>Data source: <a href="https://meteostat.net/" target="_blank">Meteostat</a>.
                    </p>
                </div>

                <div className="Cities/coordinate data">
                    <h3>Cities Worldwide, with corresponding latitude and longitude coordinates</h3>
                    <p>An extensive list of over 43,000 major population centers with latitude and longitude was retrieved from <a href="https://simplemaps.com/data">SimpleMaps</a>.</p>
                </div>

                <div className="Country/Continent">
                    <h3>Country/Continent Data</h3>
                    <p>Countries and continent codes were retrieved from the database made available by <a href="https://datahub.io/core/world-cities#resource-world-cities" target="_blank"> Datahub.io </a>.</p>
                </div>
            </div>    
        </React.Fragment>
    )
}