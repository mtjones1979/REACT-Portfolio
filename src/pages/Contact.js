import React from "react";

function Contact() {
  return (
    <div>
        <br></br>
        <br></br>
      <h1 className="text-center strong">Michael's Contact Information:</h1>
        <p>
            <div bg="primary"className="row text-center">
                <div className="col-lg-12">
                    <br></br>
                    <h4><em>Phone Number: </em> <strong>512-577-3651 </strong></h4>
                    <br></br>
                    <h4><em>Email: </em> 
                    <a href="mailto: mtjones1979@yahoo.com? subject=subject text">mtjones1979@yahoo.com</a>
                    </h4>
                    <br></br>
                    <h4><em>GitHub: </em>
                    <a href="https://github.com/mtjones1979" target="blank" class="fa fa-github"></a>
                    </h4>
                    <br></br>
                    <h4><em>LinkedIn: </em>
                    <a href="https://linkedin.com/in/michael-jones-092720b/" target="blank" class="fa fa-linkedin"></a>
                    </h4>
                    <br></br>
                    <h4><em>Resume: </em>
                    <a href="https://github.com/mtjones1979/Michael-Jones-Portfolio/files/5998495/Michael.Jones.Resume.pdf">Click Here</a>
                    </h4>
                </div>
            </div>
        </p>
    </div>
  );
}

export default Contact;