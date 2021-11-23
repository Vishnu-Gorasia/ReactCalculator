import { useState } from "react";
import Button from "./Button";
import Display from "./Display";

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

function App() {

  const [number, setNumber] = useState("") //usestate is hook
  const [anOtherNumber, setanOtherNumber] = useState("")
  const [operators, setOperators] = useState(null)
  const handleAdd = () => {
    setNumber(parseInt(number) + parseInt(anOtherNumber))
    setOperators("plus")
    setanOtherNumber(number)
    setNumber("")
  }
  const handleequal = () => {

    switch (operators) {
      case "plus":
        setNumber(parseInt(number) + parseInt(anOtherNumber))
        break;
      case "minus":
        setNumber(parseInt(anOtherNumber) - parseInt(number))
        break;
      default:
      //
    }



  }
  const handleMinus = () => {
    setNumber(parseInt(number) - parseInt(anOtherNumber))
    setanOtherNumber(number)
    setOperators("minus")
    setNumber("")
  }

  return (
    <div>
      <Display
        show={number}
      />
      {numbers.map((num) => (
        <Button
          onClick={() => {
            setNumber(number + num)
          }}
        >
          {num}

        </Button>
      ))}
      <Button
        onClick={handleAdd} //
      >
        +

      </Button>
      <Button
        onClick={handleequal}
      >
        =
      </Button>
      <Button
        onClick={handleMinus}
      >
        -
      </Button>
    </div>
  );
}

export default App;