import React from 'react';
import './App.css';
import 'styled-components/macro';

function App() {
  return (
    <div
      css={`
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 100vh;
        width: 100%;
        align-items: center;
      `}
    >
      <div
        css={`
          margin: auto;
          box-shadow: 0px 0px 1px 0px;
          border-radius: 5px;
          padding: 1rem;
        `}
      >
        <h1>Start your own store</h1>
        <h2>Exhibit your product in a central location in Berlin</h2>
        <ul>
          <li>no deposit needed</li>
          <li>access to central locations in berlin</li>
          <li>
            get a chance to display your products in busy commercial spaces
          </li>
        </ul>
        <hr />
        <h2>
          Fill out the form to receive a list of spaces that match your criteria
        </h2>
        <form action="https://formspree.io/mvokqnoa" method="POST">
          <div>
            <label>email</label><br/>
            <input
              css={``}
              type="email"
              required
              placeholder="Enter your email"
              name="_replyto"
            />
          </div>
          <div>
            <label>How much space do you need m2</label><br />
            <input type="number" name="surface needed" />
          </div>
          <h3>Extra Criteria</h3>
          <div>
            <label>I just want to see everything</label>

            <input name="donotcare" type="checkbox" />
          </div>
          <div>
            <label>Need a place to store inventory</label>
            <input name="inventory" type="checkbox" />
          </div>
          <div>
            <label>Help me setup a legal entity</label>
            <input name="legal" type="checkbox" />
          </div>
          <input type="submit" value="Send" />
        </form>
        <h2>Available Locations</h2>
        <ul>
          <li>Kreuzberg</li>
          <li>Friedriechshain</li>
          <li>Alexander Platz</li>
          <li>Neukoln</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
