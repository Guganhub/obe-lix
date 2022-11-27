import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Modal";
import "./Modal.css"
export default function ModalView() {
  const [show, setShow] = useState(false);

  const handleSubmit = (event) => {
    // event.preventDefault();
    const foodname = event.target[0].value;
    const foodprice = event.target[1].value;
    const resturant = event.target[2].value;
    var imageurl;
    event.target[4].value
      ? (imageurl = event.target[4].value)
      : (imageurl = event.target[5].value);
    const quantity = event.target[3].value;
   console.log(imageurl)
    var data = JSON.parse(localStorage.getItem("Fooddata"));
    if (data) {
      data = data.concat({
        title: foodname,
        price: foodprice,
        content: resturant,
        quantity: quantity,
        url: imageurl,
      });
    } else {
      data = [
        {
          title: foodname,
          price: foodprice,
          content: resturant,
          quantity: quantity,
          url: imageurl,
        },
      ];
    }

    localStorage.setItem("Fooddata", JSON.stringify(data));
    alert("added to cart");
    setShow(false);
  };
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" id="but" onClick={handleShow}>
         Add Food 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Food
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Price
              </label>
              <input type="number" className="form-control" required />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Resaturant
              </label>
              <input type="text" className="form-control" required />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Quantity
              </label>
              <input type="number" className="form-control" required />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Image
              </label>
              <input
                type="file"
                className="form-control"
                id="myFile"
                name="filename"
              />
            </div>
            <br />
            or
            <br />
            <br />
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Image Url
              </label>
              <input
                type="text"
                className="form-control"
                id="myFile"
                name="filename"
              />
            </div>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
