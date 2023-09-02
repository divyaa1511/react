const heading = React.createElement(
    "h1",
    {id:"heading"},
"Hello World from React!");

// {}: IS USED TO GIVE ATTRIBUTES LINE ID ETC

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);  