import { useState } from "react";
import Button from "./Button";
import Display from "./Display";

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

function App() {

  const [number, setNumber] = useState("") //usestate is hook
  const [anOtherNumber, setanOtherNumber] = useState("")
  const [operators, setOperators] = useState(null)
  const [hasPoint, setHasPoint] = useState(false);

  const handleAdd = () => {
    setNumber(parseInt(number) + parseInt(anOtherNumber))
    setOperators("plus")
    setanOtherNumber(number)
    setHasPoint(false);
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
      case "divide":
        setNumber(parseInt(anOtherNumber) / parseInt(number))
        break;
      case "multiply":
        setNumber(parseInt(anOtherNumber) * parseInt(number))
        break;
      default:
    }
  }

  const handleMinus = () => {
    setNumber(parseInt(number) - parseInt(anOtherNumber))
    setanOtherNumber(number)
    setOperators("minus")
    setHasPoint(false);
    setNumber("")

  }

  const handleDivide = () => {
    setNumber(parseInt(number) / parseInt(anOtherNumber))
    setanOtherNumber(number)
    setHasPoint(false);
    setOperators("divide")
    setNumber("")
  }

  const handleMultiply = () => {
    setHasPoint(false);
    setNumber(parseInt(number) * parseInt(anOtherNumber))
    setanOtherNumber(number)
    setOperators("multiply")
    setNumber("")
  }

  const handlePoint = () => {

    if (hasPoint) {
      //
    } else {
      setNumber(number + ".") // What ever the current number is then a point, then the rest of the numbers
    }

    setHasPoint(true)
  }

  return (
    <div>
      <Display
        show={number}
      />
      <div className="buttons">
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
        <Button
          onClick={handleDivide}

        >
          /
        </Button>
        <Button
          onClick={handleMultiply}

        >
          *
        </Button>
        <Button
          onClick={handlePoint}
        >
          .
        </Button>
      </div>

    </div>
  );
}

export default App;