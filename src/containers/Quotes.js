import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'

class Quotes extends Component {

  handleRemove = (id) => {
    this.props.removeQuote(id)
  }

  handleUp = (id) => {
    this.props.upvoteQuote(id)
  }

  handleDown = (id) => {
    this.props.downvoteQuote(id)
  }

  render() {
    // let quotes = this.props.quotes.map((quote, idx) => {})
    console.log(this.props.quotes.quotes)
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
            {this.props.quotes.quotes.map(quote => <QuoteCard key={quote.id} quote={quote} 
              removeQuote={() => this.handleRemove(quote.id)} upvoteQuote={() => this.handleUp(quote.id)}
              downvoteQuote={() => this.handleDown(quote.id)} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { quotes: state.quotes}
}

//add arguments to connect as needed
export default connect(mapStateToProps, { removeQuote, upvoteQuote, downvoteQuote })(Quotes);
// export default connect(mapStateToProps)(Quotes);