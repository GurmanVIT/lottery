import * as React from "react"
const Activity = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"
        viewBox="0 0 30 30"
        {...props}
    >
        <path
            fill="#6A6A6A"
            d="M14.5 17.8h-3.841c-1.53 0-2.294 0-2.583-.497-.289-.497.089-1.162.844-2.491l5.145-9.056c.375-.66.563-.99.749-.94.186.049.186.428.186 1.187V11.7c0 .236 0 .354.073.427.073.073.191.073.427.073h3.841c1.529 0 2.293 0 2.583.497.289.497-.089 1.162-.844 2.491l-5.145 9.056c-.375.66-.563.99-.749.94C15 25.136 15 24.756 15 23.997V18.3c0-.236 0-.354-.073-.427-.073-.073-.191-.073-.427-.073Z"
        />
        <circle cx={15} cy={15} r={14} stroke={props.stroke} strokeWidth={2} />
    </svg>
)
export default Activity;
