import React from "react";

const FunctionalGreetingWithProps = (props) => {
    console.log(props);
return <hi>Hello, {props.name}! I see You're {props.age} years old; {props.greeting}</hi>
}
export default FunctionalGreetingWithProps; 