import chai from 'chai';
import data from '../src/data.js';
import Puzzle from '../src/Puzzle.js';
const expect = chai.expect;


describe('Puzzle', function() {
  let puzzle;
  beforeEach(function() {
    puzzle = new Puzzle();
  });

  it('instantiates our good friend, Puzzle', function() {
    expect(puzzle).to.be.an.instanceof(Puzzle);
  });

  it('should have default values', function() {
    expect(puzzle.description).to.equal(null);
    expect(puzzle.difficulty).to.equal(null);
  });
  
  it('selects a random puzzle based off of the players\' selected difficulty', function() {
    let difficulty1 = data.puzzles.one_word_answers;
    expect(puzzle.description).to.equal(null);
    puzzle.randomPuzzle(difficulty1);
    expect(puzzle.description).to.be.an('object');
  })
});



// let object = new Puzzle();
// object.randomPuzzle(difficulty4);
// console.log(object.puzzleDescription);