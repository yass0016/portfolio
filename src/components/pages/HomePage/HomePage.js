import React, { Component } from "react";

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container text-center">
            <h1>My Portfolio</h1>
            <p>Some text that represents "Me"...</p>
          </div>
        </div>

        <div className="container-fluid bg-3 text-center">
          <h3>Some of my Work</h3>
          <div className="row">
            <div className="col-sm-3">
              <p>Some text..</p>
              <img
                src="https://placehold.it/150x80?text=IMAGE"
                className="img-responsive"
                style={{ width: "100%" }}
                alt=""
              />
            </div>
            <div className="col-sm-3">
              <p>Some text..</p>
              <img
                src="https://placehold.it/150x80?text=IMAGE"
                className="img-responsive"
                style={{ width: "100%" }}
                alt=""
              />
            </div>
            <div className="col-sm-3">
              <p>Some text..</p>
              <img
                src="https://placehold.it/150x80?text=IMAGE"
                className="img-responsive"
                style={{ width: "100%" }}
                alt=""
              />
            </div>
            <div className="col-sm-3">
              <p>Some text..</p>
              <img
                src="https://placehold.it/150x80?text=IMAGE"
                className="img-responsive"
                style={{ width: "100%" }}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="container-fluid bg-3 text-center">
          <div className="row">
            <div className="col-sm-3">
              <p>Some text..</p>
              <img
                src="https://placehold.it/150x80?text=IMAGE"
                className="img-responsive"
                style={{ width: "100%" }}
                alt=""
              />
            </div>
            <div className="col-sm-3">
              <p>Some text..</p>
              <img
                src="https://placehold.it/150x80?text=IMAGE"
                className="img-responsive"
                style={{ width: "100%" }}
                alt=""
              />
            </div>
            <div className="col-sm-3">
              <p>Some text..</p>
              <img
                src="https://placehold.it/150x80?text=IMAGE"
                className="img-responsive"
                style={{ width: "100%" }}
                alt=""
              />
            </div>
            <div className="col-sm-3">
              <p>Some text..</p>
              <img
                src="https://placehold.it/150x80?text=IMAGE"
                className="img-responsive"
                style={{ width: "100%" }}
                alt=""
              />
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default HomePage;
