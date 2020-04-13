import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Cell.css';

class Cell extends React.Component {

    handleClick(word, color) {
        // Update element class color
        var card = document.getElementById('Cell-'+word);
        card.className = color;
        // Manage color count
        if(!card.value) {
            this.props.colorCount(color);
            card.value = true;
        }
    }

    render() {
        return (
            <div className={this.props.className} id={`Cell-${this.props.word}`}>
                <Card 
                variant="outlined" 
                onClick={() => this.handleClick(this.props.word, this.props.color)} 
                id={this.props.word} 
                className='Card'
                >
                    <CardContent className='Card-content'>
                        <Typography variant="h5">
                            {this.props.word}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
};

export default Cell;