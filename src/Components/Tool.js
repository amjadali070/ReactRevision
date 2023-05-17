function Tool({name, tool}) {

    return (
      <div>
        <h1>My name is {name}.</h1>
        <p>My favorite design tool is {tool}.</p>
      </div>
    );

  }
  
  Tool.defaultProps = {
    name: "Designer",
    tool: "Adobe XD"
  }
export default Tool