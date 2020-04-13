import React from 'react';
import {Grid, Button, Divider} from '@material-ui/core';
import Cell from './components/Cell';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSpymaster = this.handleSpymaster.bind(this);
    this.colorCount = this.colorCount.bind(this);
  }

  state = {
    words: [],
    gameover: false
  }

  componentDidMount() {
    this.setState({ words: this.initializeState() });
  }

  randomizeWords() {
    let words = ['Hollywood', 'Well', 'Foot', 'New', 'York', 'Spring', 
             'Court', 'Tube', 'Point', 'Tablet', 'Slip', 'Date', 
             'Drill', 'Lemon', 'Bell', 'Screen', 'Fair', 'Torch', 
             'State', 'Match', 'Iron', 'Block', 'France', 'Australia', 
             'Limousine', 'Stream', 'Glove', 'Nurse', 'Leprechaun', 
             'Play', 'Tooth', 'Arm', 'Bermuda', 'Diamond', 'Whale', 
             'Comic', 'Mammoth', 'Green', 'Pass', 'Missile', 'Paste', 
             'Drop', 'Pheonix', 'Marble', 'Staff', 'Figure', 'Park', 
             'Centaur', 'Shadow', 'Fish', 'Cotton', 'Egypt', 'Theater', 
             'Scale', 'Fall', 'Track', 'Force', 'Dinosaur', 'Bill', 'Mine', 
             'Turkey', 'March', 'Contract', 'Bridge', 'Robin', 'Line', 'Plate', 
             'Band', 'Fire', 'Bank', 'Boom', 'Cat', 'Shot', 'Suit', 'Chocolate', 
             'Roulette', 'Mercury', 'Moon', 'Net', 'Lawyer', 'Satellite', 
             'Angel', 'Spider', 'Germany', 'Fork', 'Pitch', 'King', 'Crane', 
             'Trip', 'Dog', 'Conductor', 'Part', 'Bugle', 'Witch', 'Ketchup', 
             'Press', 'Spine', 'Worm', 'Alps', 'Bond', 'Pan', 'Beijing', 
             'Racket', 'Cross', 'Seal', 'Aztec', 'Maple', 'Parachute', 'Hotel', 
             'Berry', 'Soldier', 'Ray', 'Post', 'Greece', 'Square', 'Mass', 
             'Bat', 'Wave', 'Car', 'Smuggler', 'England', 'Crash', 'Tail', 
             'Card', 'Horn', 'Capital', 'Fence', 'Deck', 'Buffalo', 'Microscope', 
             'Jet', 'Duck', 'Ring', 'Train', 'Field', 'Gold', 'Tick', 'Check', 
             'Queen', 'Strike', 'Kangaroo', 'Spike', 'Scientist', 'Engine', 
             'Shakespeare', 'Wind', 'Kid', 'Embassy', 'Robot', 'Note', 'Ground', 
             'Draft', 'Ham', 'War', 'Mouse', 'Center', 'Chick', 'China', 'Bolt', 
             'Spot', 'Piano', 'Pupil', 'Plot', 'Lion', 'Police', 'Head', 'Litter', 
             'Concert', 'Mug', 'Vacuum', 'Atlantis', 'Straw', 'Switch', 'Skyscraper', 
             'Laser', 'Scuba', 'Diver', 'Africa', 'Plastic', 'Dwarf', 'Lap', 'Life', 
             'Honey', 'Horseshoe', 'Unicorn', 'Spy', 'Pants', 'Wall', 'Paper', 'Sound', 
             'Ice', 'Tag', 'Web', 'Fan', 'Orange', 'Temple', 'Canada', 'Scorpion', 
             'Undertaker', 'Mail', 'Europe', 'Soul', 'Apple', 'Pole', 'Tap', 'Mouth', 
             'Ambulance', 'Dress', 'Ice', 'Cream', 'Rabbit', 'Buck', 'Agent', 'Sock', 
             'Nut', 'Boot', 'Ghost', 'Oil', 'Superhero', 'Code', 'Kiwi', 'Hospital', 
             'Saturn', 'Film', 'Button', 'Snowman', 'Helicopter', 'Loch', 'Ness', 
             'Log', 'Princess', 'Time', 'Cook', 'Revolution', 'Shoe', 'Mole', 'Spell', 
             'Grass', 'Washer', 'Game', 'Beat', 'Hole', 'Horse', 'Pirate', 'Link', 'Dance', 
             'Fly', 'Pit', 'Server', 'School', 'Lock', 'Brush', 'Pool', 'Star', 'Jam', 
             'Organ', 'Berlin', 'Face', 'Luck', 'Amazon', 'Cast', 'Gas', 'Club', 'Sink', 
             'Water', 'Chair', 'Shark', 'Jupiter', 'Copper', 'Jack', 'Platypus', 'Stick', 
             'Olive', 'Grace', 'Bear', 'Glass', 'Row', 'Pistol', 'London', 'Rock', 'Van', 
             'Vet', 'Beach', 'Charge', 'Port', 'Disease', 'Palm', 'Moscow', 'Pin', 'Washington', 
             'Pyramid', 'Opera', 'Casino', 'Pilot', 'String', 'Night', 'Chest', 'Yard', 
             'Teacher', 'Pumpkin', 'Thief', 'Bark', 'Bug', 'Mint', 'Cycle', 'Telescope', 
             'Calf', 'Air', 'Box', 'Mount', 'Thumb', 'Antarctica', 'Trunk', 'Snow', 
             'Penguin', 'Root', 'Bar', 'File', 'Hawk', 'Battery', 'Compound', 'Slug', 
             'Octopus', 'Whip', 'America', 'Ivory', 'Pound', 'Sub', 'Cliff', 'Lab', 
             'Eagle', 'Genius', 'Ship', 'Dice', 'Hood', 'Heart', 'Novel', 'Pipe', 'Himalayas', 
             'Crown', 'Round', 'India', 'Needle', 'Shop', 'Watch', 'Lead', 'Tie', 'Table', 
             'Cell', 'Cover', 'Czech', 'Back', 'Bomb', 'Ruler', 'Forest', 'Bottle', 
             'Space', 'Hook', 'Doctor', 'Ball', 'Bow', 'Degree', 'Rome', 'Plane', 'Giant', 
             'Nail', 'Dragon', 'Stadium', 'Flute', 'Carrot', 'Wake', 'Fighter', 'Model', 
             'Tokyo', 'Eye', 'Mexico', 'Hand', 'Swing', 'Key', 'Alien', 'Tower', 'Poison', 
             'Cricket', 'Cold', 'Knife', 'Church', 'Board', 'Cloak', 'Ninja', 'Olympus', 
             'Belt', 'Light', 'Death', 'Stock', 'Millionaire', 'Day', 'Knight', 'Pie', 'Bed', 
             'Circle', 'Rose', 'Change', 'Cap', 'Triangle']

    return this.randomizer(words).slice(1,25);
  }

  randomizeColor() {
    let colors = ['neutral', 'neutral', 'neutral', 'neutral', 'neutral', 'neutral', 'black',
                  'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'blue', 
                  'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue']
    return this.randomizer(colors);
  }

  randomizer(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    }
    return array;
  }

  initializeState() {
    let words = this.randomizeWords();
    let colors = this.randomizeColor();
    let red = 0;
    let blue = 0;

    var zip = words.map(function(e, i) {
      return [e, colors[i]];
    });

    for(let key of zip){
      if(key[1] === 'red') {
        red ++;
      } else if(key[1] === 'blue') {
        blue ++;
      }
    }

    this.setState({redCount: red, blueCount: blue});

    return zip;
  }

  colorCount(color) {
    if(color === 'red') {
      this.setState({ redCount: this.state.redCount - 1})
    } else if(color === 'blue') {
      this.setState({ blueCount: this.state.blueCount - 1})
    } else if(color === 'black') {
      this.setState({ gameover: true })
    }
  }

  renderCells() {
    return (
      this.state.words.map((value, index) => {
        return (
          <Grid item xs={2} key={index}>
            <Cell word={value[0]} color={value[1]} colorCount={this.colorCount}/>
          </Grid>
        );
      })
    );
  };

  handleSpymaster(e) {
    e.preventDefault();
    // Iterate over cells and add respective color classes
    for(let word of this.state.words) {
      let id = word[0];
      document.getElementById('Cell-'+id).className = this.state.spymaster ? '' : word[1];
    }
    this.setState({spymaster: !this.state.spymaster})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>
            Codenames
          </h2>
        </header>
        <Divider variant="middle" />
        <div className='App-score'>
          <h2>
            <span id='red'>Red: {this.state.redCount}</span> - <span id='blue'>Blue: {this.state.blueCount}</span>
          </h2>
        </div>
        <Grid container spacing={3} justify='center' alignItems='center'>
          {this.renderCells()}
        </Grid>
        <div className='App-content'>
          <Button variant="contained" color="default" onClick={this.handleSpymaster}>
            Toggle Spymaster
          </Button>
        </div>
      </div>
    );
  };
};

export default App;
