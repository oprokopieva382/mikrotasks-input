import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { FullInput } from "./components/FullInput";
import { Input } from "./components/Input";

function App() {
  let [message, setMessage] = useState([
    { message: "message1" },
    { message: "message2" },
    { message: "message3" },
  ]);

  let [title, setTitle] = useState("");

  const addMessage = (title: string) => {
    let newMessage = { message: title };
    setMessage([newMessage, ...message]);
  };

  const callbackButtonHandler = () => {
    addMessage(title);
    setTitle("");
  };

  return (
    <div className="App">
      {/* <FullInput addMessage={addMessage} /> */}
      <Input title={title} setTitle={setTitle} />
      <Button name={"+"} callback={callbackButtonHandler} />
      {message.map((el, index) => {
        return <div key={index}>{el.message}</div>;
      })}
    </div>
  );
}

export default App;
