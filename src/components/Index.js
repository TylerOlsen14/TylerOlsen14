import React, { Component } from 'react'
import "./index.css"

export class Index extends Component {
  render() {
    return (
      <div>
        <div className="pimg1">
          <div className="ptext">
            <span className="border">
              Tyler Olsen
            </span>
          </div>
        </div>

        <section class="section section-light">
          <h2>Section 1</h2>
          <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
        </section>

        <div className="pimg2">
          <div className="ptext">
            <span className="border">
              Image two text
            </span>
          </div>
        </div>

        <section class="section section-dark">
          <h2>Section 2</h2>
          <p>The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me? " he thought. It wasn't a dream.</p>
        </section>

        <div className="pimg3">
          <div className="ptext">
            <span className="border">
              Image three text
            </span>
          </div>
        </div>

        <section class="section section-dark">
          <h2>Section 3</h2>
          <p>His room, a proper human room although a little too small, lay peacefully between its four familiar walls.<br/>A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</p>
        </section>



      </div>
    )
  }
}

export default Index
