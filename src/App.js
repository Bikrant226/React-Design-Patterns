import { SplitScreen } from "./SplitScreen";

const LeftComponent=({message})=>{
  return(
    <h1 style={{border:'10px solid green'}}>{message}</h1>
  )
}

const RightComponent=({name})=>{
  return(
    <p style={{border:'10px solid red'}}>{name}!!!</p>
  )
}

function App() {
  return (
    <div className="App">
      <SplitScreen
        leftWeight={1}    //Left component is 1/3rd of right
        rightWeight={3}
      >
          <LeftComponent message="Hello"/>
          <RightComponent name="Bikrant"/>
        </SplitScreen>
    </div>
  );
}

export default App;
