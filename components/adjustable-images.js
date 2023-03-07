import React from "react";

export default function AdjustableImages({ children }) {
    return (
        <div class="adjustableImageContainer">
            {
                React.Children.map(children, item => (
                    <div>{item}</div>
                ))
            }
        </div>
    )
}