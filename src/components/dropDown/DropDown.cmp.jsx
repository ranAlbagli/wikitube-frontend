
import React, { useState } from 'react'
import { Button, Modal, Dropdown, Menu } from 'semantic-ui-react'

const ModalExampleSize = ({setAppTheme}) => {
    const [open, setOpen] = useState(false)
    const [bgColor, setBgColor] = useState('')
    const [txtColor, setTxtColor] = useState('')

    const show = () => {
        setOpen(true)
    }
    const close = () => {
        setOpen(false)
    }
      
    const handleAppTheme=()=>{
        close();
        setAppTheme({
            bgColor,
            txtColor
        })
    }
    return (
        <div>
            <Button onClick={show}>Theme</Button>
            <Modal size={'tiny'} open={open} onClose={close}>
                <Modal.Header>Change App theme</Modal.Header>
                <Modal.Content style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Menu>
                        <Dropdown selection text="bg color">
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => setBgColor('black')}> black</Dropdown.Item>
                                <Dropdown.Item onClick={() => setBgColor('white')}> white</Dropdown.Item>
                                <Dropdown.Item onClick={() => setBgColor('blue')}> blue</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown selection text="text color">
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => setTxtColor('black')}> black</Dropdown.Item>
                                <Dropdown.Item onClick={() => setTxtColor('white')}> white</Dropdown.Item>
                                <Dropdown.Item onClick={() => setTxtColor('blue')}> blue</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu>
                </Modal.Content>
                <Modal.Actions>
                    <Button
                        positive
                        icon='checkmark'
                        labelPosition='right'
                        content='Save'
                        onClick={handleAppTheme}
                    />
                </Modal.Actions>
            </Modal>
        </div>
    )

}

export default ModalExampleSize