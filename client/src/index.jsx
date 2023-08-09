import React from "react";
import ReactDOM from "react-dom/client";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      v1SelectedImg: 0,
      v1CoverFaded: false,
      v2SelectedTeam: 0,
    };
    this.v1BGAnimeOngoing = false;
    this.v1BGDisplayTimeout = null;
  }
  startV1BGInterval() {
    let duration = 3000;

    this.v1BGDisplayTimeout = setTimeout(() => {
      this.changeV1BG((this.state.v1SelectedImg + 1) % 3);
    }, duration);
  }
  changeV1BG(id) {
    if (!this.v1BGAnimeOngoing) {
      clearTimeout(this.v1BGDisplayTimeout);

      let transition = 1000;
      this.v1BGAnimeOngoing = true;
      this.setState({ v1CoverFaded: true });

      setTimeout(() => {
        this.setState({ v1CoverFaded: false, v1SelectedImg: id });

        setTimeout(() => {
          this.v1BGAnimeOngoing = false;
          this.startV1BGInterval();
        }, transition);
      }, transition);
    }
  }
  componentDidMount() {
    this.startV1BGInterval();
  }
  ScheduleTable() {
    switch (this.state.v2SelectedTeam) {
      case 0:
        return (
          <>
            <tr>
              <td>25 Nov 2016</td>
              <td>Vestibulum viverra</td>
            </tr>
            <tr>
              <td>28 Nov 2016</td>
              <td>Vestibulum viverra</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>18 Dec 2016</td>
              <td>Vestibulum viverra</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>7 Jan 2017</td>
              <td>Vestibulum viverra</td>
            </tr>
          </>
        );
      case 1:
        return (
          <>
            <tr>
              <td>17 Nov 2016</td>
              <td>Vestibulum viverra</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>13 Nov 2016</td>
              <td>Vestibulum viverra</td>
            </tr>
            <tr>
              <td>28 Dec 2016</td>
              <td>Vestibulum viverra</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>9 Feb 2017</td>
              <td>Vestibulum viverra</td>
            </tr>
          </>
        );
    }
  }
  render() {
    return (
      <>
        <div id="view0" className="view">
          <nav>
            <img src="./bundle/assets/Logo.png" />
            <span>
              <a href="#history">01. HISTORY&#12288;</a>
              <a href="#team">02. TEAM&#12288;</a>
            </span>
          </nav>
          <h1>LOSANGELES</h1>
          <h1>MOUNTAINS</h1>
        </div>

        <nav className="sticky">
          <span className="sticky-icon">
            <img src="./bundle/assets/Logo.png" />
            <span className="sticky-title">
              <h6>LOSANGELES</h6>
              <h6>MOUNTAINS</h6>
            </span>
          </span>
          <span className="sticky-links">
            <a href="#history">01. HISTORY&#12288;</a>
            <a href="#team">02. TEAM&#12288;</a>
          </span>
        </nav>

        <div id="history" className="view">
          <div
            className={
              "view1BGImg view1Carousel-thumb" + this.state.v1SelectedImg
            }
          />
          <div
            className={
              "view1BGCover" +
              (this.state.v1CoverFaded ? " view1BGCoverOn" : "")
            }
          />
          <div className="viewTitle">
            <h1>01.</h1>
            <h2>HISTORY</h2>
          </div>
          <p className="viewDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
            ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus
            est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam.
            Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
            gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
            dignissim tortor nec congue.
          </p>
          <div
            className="view1Carousel"
            title="well, if this is the 'responsive' you mean in the desc"
          >
            <div className="view1Carousel-imgs">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={"view1Carousel-thumb" + i}
                  onClick={() => this.changeV1BG(i)}
                />
              ))}
            </div>
            <div className="view1Carousel-ellipses">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={
                    "view1Carousel-ellipse" +
                    (this.state.v1SelectedImg === i
                      ? " view1Carousel-selectedEllipse"
                      : "")
                  }
                />
              ))}
            </div>
          </div>
        </div>

        <div id="team" className={"view view2Team" + this.state.v2SelectedTeam}>
          <div className="view2Title">
            <div className="viewTitle">
              <h1>02.</h1>
              <h2>CLIMB</h2>
            </div>
            <p className="viewDesc">
              Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
              gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
              dignissim tortor nec congue.
            </p>
          </div>
          <nav>
            <div
              className={
                this.state.v2SelectedTeam === 0 ? "team-selected-tag" : ""
              }
              onClick={() => this.setState({ v2SelectedTeam: 0 })}
            >
              MOUNTAIN 1
            </div>
            <div
              className={
                this.state.v2SelectedTeam === 1 ? "team-selected-tag" : ""
              }
              onClick={() => this.setState({ v2SelectedTeam: 1 })}
            >
              MOUNTAIN 2
            </div>
          </nav>
          <div className="view2Schedule">
            <h3>SCHEDULE</h3>
            <table>
              <tbody>{this.ScheduleTable()}</tbody>
            </table>
          </div>
          <div
            className={
              "view2TagMobile" +
              (this.state.v2SelectedTeam === 0 ? " team-selected-tag" : "")
            }
            onClick={() => this.setState({ v2SelectedTeam: 0 })}
          >
            MOUNTAIN 1
          </div>
          {this.state.v2SelectedTeam === 0 && (
            <div className="view2Schedule0 view2ScheduleMobile">
              <h3>SCHEDULE</h3>
              <table>
                <tbody>{this.ScheduleTable()}</tbody>
              </table>
            </div>
          )}
          <div
            className={
              "view2TagMobile" +
              (this.state.v2SelectedTeam === 1 ? " team-selected-tag" : "")
            }
            onClick={() => this.setState({ v2SelectedTeam: 1 })}
          >
            MOUNTAIN 2
          </div>
          {this.state.v2SelectedTeam === 1 && (
            <div className="view2Schedule1 view2ScheduleMobile">
              <h3>SCHEDULE</h3>
              <table>
                <tbody>{this.ScheduleTable()}</tbody>
              </table>
            </div>
          )}

          <footer>
            <span className="footer-icon">
              <img src="./bundle/assets/Logo.png" />
              <span className="footer-title">
                <h6>LOSANGELES</h6>
                <h6>MOUNTAINS</h6>
              </span>
            </span>
            <span className="copyright">
              COPYRIGHT 2023. MADE BY CONGLIN PU
            </span>
          </footer>
        </div>
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
