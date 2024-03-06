import React, {useState} from "react"
import {Button, ButtonGroup, Card} from "react-bootstrap"
import "./Todo.scss"
import DeleteButton from "../DeleteButton/DeleteButton"
import ToggleButton from 'react-bootstrap/ToggleButton'


function Todo(): JSX.Element {
  const [radioValue, setRadioValue] = useState('1')
  const [checked, setChecked] = useState(false)

  return <Card>
    <Card.Header>
      Featured
      <div className="delete"><DeleteButton /></div>
    </Card.Header>
    <Card.Body>
      <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
      <ButtonGroup className="mb-2">
        <ToggleButton
          id={`radio-${1}`}
          type="radio"
          variant={'outline-success'}
          name="radio"
          value={'1'}
          checked={checked}
          onChange={(e): any => setChecked(e.currentTarget.checked)}
        >
        qweqew
        </ToggleButton>
      </ButtonGroup>
    </Card.Body>
  </Card>
}

export default Todo