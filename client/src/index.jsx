import React from "react";
import ReactDOM from "react-dom";

// your "node powered express service", sir
import luhnAlgorithm from "lia-luhn-algorithm";

class APP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 0, // 0:init; 1:valid 2: invalid
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  // luhnAlgorithm(input) {
  //   // filter invalid char and reverse string
  //   let str = "";
  //   for (let i = input.length - 1; i >= 0; i--)
  //     if (input[i] >= "0" && input[i] <= "9") str += input[i];
  //   if (input.length < 2) return false;

  //   // algorithmic check
  //   let sum = 0;
  //   for (let i = 2; i < str.length; i += 2) sum += Number(str[i]);
  //   for (let i = 1; i < str.length; i += 2) {
  //     let num = Number(str[i]) * 2;
  //     sum += num > 9 ? num - 9 : num;
  //   }

  //   return (sum * 9) % 10 == str[0];
  // }
  onSubmit(e) {
    e.preventDefault();
    this.setState({ stage: 2 - luhnAlgorithm(e.target.card.value) });
  }
  render() {
    return (
      <div className={"view stage" + this.state.stage}>
        <form onSubmit={this.onSubmit}>
          {this.state.stage === 0 && (
            <>
              <h1>
                Let's check if this number fits{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Luhn_algorithm"
                  target="_blank"
                >
                  Luhn Algorithm
                </a>
              </h1>
              <p>(Try "1123")</p>
            </>
          )}
          {this.state.stage === 1 && <h1>Nice, it works</h1>}
          {this.state.stage === 2 && <h1>No, this is not a valid value</h1>}
          <input type="text" name="card" />
          <br />
          <input type="submit" />
          <a href="https://github.com/Late1nAutumn/Assessment-Project-Broadcast/tree/main">here is the repo</a>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<APP />, document.getElementById("app"));
