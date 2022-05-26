import React, { useState, useEffect } from "react";

import "./FAQquestion.css";

function FAQquestion({ title, message }) {

    const [clicked, setClicked] = useState(false);


    function turnOn()
    {
        // alert("Hello!");

        setClicked(!clicked);
        
        // console.log(clicked);
    }


	return (
		<div className="bjit" onClick={turnOn}>
			<div class="accordionItem open">
                <h2 class="accordionItemHeading">{title}  </h2>
                
				<div class={`accordionItemContent ${clicked && "mahmud"}`}>
					<p>
						{message}
					</p>
				</div>
			</div>
		</div>
	);
}

export default FAQquestion;
