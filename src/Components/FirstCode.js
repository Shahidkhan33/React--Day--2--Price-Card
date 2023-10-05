import React from 'react'

function CardTemplate(props){
    return(
      <div className="card">
        <div className="card_body">
          {/* card heeader */}
          <div className="card_header">
              <h5 className="card_title">{props.plan}</h5>
              <h2 className="card_price">${props.price}<span class="period">/month</span></h2>
          </div>
          <hr></hr>
          {/* body of the card is here */}
          <div className="card_description">
          <ul>
                <li className="list_checked">Single User</li>
                <li className="list_checked">5GB Storage</li>
                <li className="list_checked">Unlimited Public Projects</li>
                <li className="list_checked">Community Access</li>
                <li className={props.private}>Unlimited Private Projects</li>
                <li className={props.dedicated}>Dedicated Phone Support</li>
                <li className={props.subdomain}>Free Subdomain</li>
                <li className={props.report}>Monthly Status Reports</li>
              </ul>
          </div>
          {/* card button will be shown here */}
          <div className="card_footer">
               <button className="card_btn">BUTTON</button>
          </div>
        </div>
      </div>
    )
  }

  export default CardTemplate