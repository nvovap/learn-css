import React, { Component } from 'react';

import './flex.css'

class Flex extends Component {

    state = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      
        greenBox: {
            AlignSelf: 'flex-start'
        },
        yellowBox: { 
            AlignSelf: 'flex-start'
        },
        redBox: {
            AlignSelf: 'flex-start'
        },
        blueBox: {
            AlignSelf: 'flex-start'
        }

    }


    displayArray = ['flex', 'block']
    directionArray = ['row', 'row-reverse', 'column', 'column-reverse']
    justifyContentArray = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around']
    alignItems = ['flex-start', 'flex-end', 'center', 'stretch', 'baseline']




    selectDisplayRef = React.createRef()
    selectDirectionRef = React.createRef()
    selectJustifyContentRef = React.createRef()
    selectAlignItemsRef = React.createRef()
    selectGreenBoxAlignSelfRef = React.createRef()
    selectRedBoxAlignSelfRef = React.createRef()
    selectYellowBoxAlignSelfRef = React.createRef()
    selectBlueBoxAlignSelfRef = React.createRef()



    handleSelectStyle = () => {
        console.log("handleSelectStyle")
        this.setState({
            display: this.selectDisplayRef.current.value,
            flexDirection: this.selectDirectionRef.current.value,
            justifyContent: this.selectJustifyContentRef.current.value,
            alignItems: this.selectAlignItemsRef.current.value,
            greenBox: {
                AlignSelf: this.selectGreenBoxAlignSelfRef.current.value
            },
            yellowBox: {
                AlignSelf: this.selectYellowBoxAlignSelfRef.current.value
            },
            redBox: {
                AlignSelf: this.selectRedBoxAlignSelfRef.current.value
            },
            blueBox: {
                AlignSelf: this.selectBlueBoxAlignSelfRef.current.value
            },
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
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <label>display: </label>
                    <select ref={this.selectDisplayRef} onChange={this.handleSelectStyle} >
                        {this.displayArray.map((element) => (
                            <option key={'display' + element} value={element}>{element}</option>
                        ))}
                    </select>

                    <label>flex-direction: </label>
                    <select ref={this.selectDirectionRef} onChange={this.handleSelectStyle} >
                        {this.directionArray.map((element) => (
                            <option key={'flex-direction' + element} value={element}>{element}</option>
                        ))}
                    </select>

                    <label>justify-content: </label>
                    <select ref={this.selectJustifyContentRef} onChange={this.handleSelectStyle} >
                        {this.justifyContentArray.map((element) => (
                            <option key={'justify-content' + element} value={element}>{element}</option>
                        ))}
                    </select>

                    <label>align-items: </label>
                    <select ref={this.selectAlignItemsRef} onChange={this.handleSelectStyle} >
                        {this.alignItems.map((element) => (
                            <option key={'align-items' + element} value={element}>{element}</option>
                        ))}
                    </select>
                    <h3>https://tproger.ru/translations/how-css-flexbox-works/</h3>
                </div>


                <div className='container' style={stylesContener}>
                    <div className='box greenBox' style={{ alignSelf: this.state.greenBox.AlignSelf }}>
                        <label>align-self: </label>
                        <select ref={this.selectGreenBoxAlignSelfRef} onChange={this.handleSelectStyle}>
                            <option key={'align-self'} value={null}></option>
                            {this.alignItems.map((element) => (
                                <option key={'align-self' + element} value={element}>{element}</option>
                            ))}
                        </select>
                    </div>

                    <div className='box yellowBox' style={{ alignSelf: this.state.yellowBox.AlignSelf }}>
                        <label>align-self: </label>
                        <select ref={this.selectYellowBoxAlignSelfRef} onChange={this.handleSelectStyle}>
                            <option key={'align-self'} value={null}></option>
                            {this.alignItems.map((element) => (
                                <option key={'align-self' + element} value={element}>{element}</option>
                            ))}
                        </select>
                    </div>

                    <div className='box redBox' style={{ alignSelf: this.state.redBox.AlignSelf }}>
                        <label>align-self: </label>
                        <select ref={this.selectRedBoxAlignSelfRef} onChange={this.handleSelectStyle}>
                            <option key={'align-self'} value={null}></option>
                            {this.alignItems.map((element) => (
                                <option key={'align-self' + element} value={element}>{element}</option>
                            ))}
                        </select>
                    </div>

                    <div className='box blueBox' style={{ alignSelf: this.state.blueBox.AlignSelf }}>
                        <label>align-self: </label>
                        <select ref={this.selectBlueBoxAlignSelfRef} onChange={this.handleSelectStyle}>
                            <option key={'align-self'} value={null}></option>
                            {this.alignItems.map((element) => (
                                <option key={'align-self' + element} value={element}>{element}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default Flex;