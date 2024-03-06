import * as React from "react";

const Wallet = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"
        viewBox="0 0 33 30"
        {...props}
    >
        <path
            stroke={props.stroke}
            strokeWidth={2.5}
            d="M20.125 2.111h-7.25c-5.127 0-7.69 0-9.282 1.618C2 5.347 2 7.951 2 13.159v3.682c0 5.208 0 7.812 1.593 9.43 1.592 1.618 4.155 1.618 9.282 1.618h7.25c5.127 0 7.69 0 9.282-1.618C31 24.653 31 22.049 31 16.841V13.16c0-5.208 0-7.812-1.593-9.43-1.592-1.618-4.155-1.618-9.282-1.618Z"
        />
        <path
            stroke={props.stroke}
            strokeLinecap="round"
            strokeWidth={2.5}
            d="M8.444 8.555h4.834"
        />
        <path
            stroke={props.stroke}
            strokeWidth={2.5}
            d="M21.333 19.444V17c0-.943 0-1.414.293-1.707C21.92 15 22.39 15 23.333 15H29c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v2.444c0 .943 0 1.415-.293 1.707-.293.293-.764.293-1.707.293h-5.667c-.942 0-1.414 0-1.707-.293-.293-.293-.293-.764-.293-1.707Z"
        />
    </svg>
)
export default Wallet;