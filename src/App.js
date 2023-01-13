import React from "react"
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root"))
// const heading1 = React.createElement(
//   "h1",
//   {
//     id: "heading123",
//     key: 1,
//   },
//   "DIL SE REACT ♥️♥️♥️"
// )

const Heading1 = (
  <h1 id="heading123" key={1}>
    DIL SE REACT ❤️♥️♥️♥️❤️
  </h1>
)

// const heading2 = React.createElement(
//   "h1",
//   {
//     id: "heading123",
//     key: 2,
//   },
//   "SUPER STUFF 💫💫💫"
// )

const Heading2 = (
  <h2 id="heading123" key={2}>
    SUPER STUFF 💫💫💫
  </h2>
)

// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//     key: 3,
//   },
//   [heading1, heading2]
// )

const Container = () => (
  <div className="relative bg-red-400 mx-auto p-2 text-center font-mono font-bold text-darkBlue flex">
    {Heading1}
    {Heading2}
  </div>
)
root.render(
  <React.StrictMode>
    <Container />
    {/* You can also do {Container()} but this is bad do not do this */}
  </React.StrictMode>
)
