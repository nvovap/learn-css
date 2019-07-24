import React, { Component } from 'react';

import './flex.css'

class Flex extends Component {

    state = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    }


    displayArray    = ['flex','block']
    directionArray  = ['row','row-reverse','column','column-reverse']
    justifyContentArray    = ['flex-start','flex-end','center','space-between','space-around']
    alignItems    = ['flex-start','flex-end','center','stretch','baseline']

   


    selectDisplayRef = React.createRef()
    selectDirectionRef = React.createRef()
    selectJustifyContentRef = React.createRef()
    selectAlignItemsRef = React.createRef()

   

    handleSelectStyle = () => {
        console.log("handleSelectStyle")
        this.setState({
            display: this.selectDisplayRef.current.value,
            flexDirection: this.selectDirectionRef.current.value,
            justifyContent: this.selectJustifyContentRef.current.value,
            alignItems: this.selectAlignItemsRef.current.value
        })
    }

    render() {

        const stylesContener = {  
            display: this.state.display, 
            flexDirection: this.state.flexDirection, 
            justifyContent: this.state.justifyContent, 
            alignItems: this.state.alignItems,
        }

        return (
            <div>
                <div style={{ display: 'flex', }}>
                    <label>display: </label>
                    <select ref={this.selectDisplayRef} onChange={this.handleSelectStyle} >
                        {this.displayArray.map((element) => (
                            <option key={'display'+element} value={element}>{element}</option>
                        ))}
                    </select>

                    <label>flex-direction: </label>
                    <select ref={this.selectDirectionRef} onChange={this.handleSelectStyle} >
                        {this.directionArray.map((element) => (
                            <option key={'flex-direction'+element} value={element}>{element}</option>
                        ))}
                    </select>

                    <label>justify-content: </label>
                    <select ref={this.selectJustifyContentRef} onChange={this.handleSelectStyle} >
                        {this.justifyContentArray.map((element) => (
                            <option key={'justify-content'+element} value={element}>{element}</option>
                        ))}
                    </select>

                    <label>align-items: </label>
                    <select ref={this.selectAlignItemsRef} onChange={this.handleSelectStyle} >
                        {this.alignItems.map((element) => (
                            <option key={'align-items'+element} value={element}>{element}</option>
                        ))}
                    </select>

                </div>


                <div className='container' style={stylesContener}>
                    <div className='box greenBox' />
                    <div className='box yellowBox' />
                    <div className='box redBox' />
                    <div className='box blueBox' />
                </div>
            </div>
        )
    }
}

export default Flex;