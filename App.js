const root = ReactDOM.createRoot(document.getElementById("root"))
const heading1 = React.createElement(
  "h1",
  {
    id: "heading123",
    key: 1,
  },
  "DIL SE REACT ♥️♥️♥️"
)
const heading2 = React.createElement(
  "h1",
  {
    id: "heading123",
    key: 2,
  },
  "SUPER STUFF 💫💫💫"
)

const container = React.createElement(
  "div",
  {
    id: "container",
    key: 3,
  },
  [heading1, heading2]
)
root.render(container)
