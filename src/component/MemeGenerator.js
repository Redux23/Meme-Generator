import React, {Component } from 'react';


class MemeGenerator extends Component{
    constructor(){
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemesImg: []

        }

       this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            this.setState({allMemesImg: memes})
        })
    }


    handleChange(e){
        
    }

    render(){
        return(
            <div>
            <form className="meme-form">
            <input
            type="text"
            name="topText"
            placeholder="Top text"
            value={this.state.topText}
            onChange={this.handleChange}
            />

            <input 
            type="text"
            name="bottomText"
            placeholder="Bottom text"
            value={this.state.bottomText}
            onChange={this.handleChange}
            />
            </form>

            <button>Gen</button>
            </div>
        )
    }
}
export default MemeGenerator;