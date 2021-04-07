import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

const UpdateHost = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>

            <div class="container">
                <div class="row">
                    <table class="table table-hover table-responsive">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Host Name</th>
                                <th>Phone Number</th>
                                <th>Location</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr id="d1">
                                <td>1</td>
                                <td id="f1">John</td>
                                <td id="l1">Wick</td>
                                <td id="m1">Doe</td>
                                <td><button type="button" data-toggle="modal" data-target="#edit" data-uid="1" class="update btn btn-warning btn-sm"><span class="glyphicon glyphicon-pencil"></span></button></td>
                                <td><button type="button" data-toggle="modal" data-target="#delete" data-uid="1" class="delete btn btn-danger btn-sm"><span class="glyphicon glyphicon-trash"></span></button></td>
                            </tr>
                            <tr id="d2">
                                <td>2</td>
                                <td id="f2">Jane</td>
                                <td id="l2">Wick</td>
                                <td id="m2">Doe</td>
                                <td><button type="button" data-toggle="modal" data-target="#edit" data-uid="2" class="update btn btn-warning btn-sm"><span class="glyphicon glyphicon-pencil"></span></button></td>
                                <td><button type="button" data-toggle="modal" data-target="#delete" data-uid="2" class="delete btn btn-danger btn-sm"><span class="glyphicon glyphicon-trash"></span></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div id="delete" class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">×</button>
                            <h4 class="modal-title">Delete Data</h4>
                        </div>
                        <div class="modal-body">
                            <strong>Are you sure you want to delete this data?</strong>
                        </div>
                        <div class="modal-footer">
                            <button type="button" id="del" class="btn btn-danger" data-dismiss="modal">Delete</button>
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <Button variant="primary" onClick={handleShow}>
                Launch static backdrop modal
            </Button>

            <Modal
                size="lg"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update Host</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <br />
                    <div>
                        <form>

                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label class="form-label" for="hostName">Host Name</label>
                                    <input type="text" id="hostName" class="form-control" placeholder="My Name" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label class="form-label" for="phoneNumber">Host Phone Number</label>
                                    <input type="text" id="phoneNumber" class="form-control" placeholder="00000000" />
                                </div>
                            </div>
                            <div className="form-group col-md-2"><h5>Location</h5></div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label class="form-label" for="hostName">Latitude</label>
                                    <input type="text" id="hostName" class="form-control" placeholder="9.887663" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label class="form-label" for="phoneNumber">Longitude</label>
                                    <input type="text" id="phoneNumber" class="form-control" placeholder="-83.704895" />
                                </div>
                            </div>
                            <div class="form-group mb-3">
                                <label class="form-label" for="hostDescription">Host Description</label>
                                <textarea class="form-control" id="hostDescription" rows="4" placeholder="Host Description"></textarea>
                            </div>
                            <div className="form-check">
                                <div className="form-group col-md-3"><h5>Payment Methods</h5></div>
                                <div class="form-row">
                                    <div class="form-group col-md-4 custom-control custom-switch">
                                        <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                                        <label class="custom-control-label" for="customSwitch1">Colones</label>
                                    </div>
                                    <div class="form-group col-md-4 custom-control custom-switch">
                                        <input type="checkbox" class="custom-control-input" id="customSwitch2" />
                                        <label class="custom-control-label" for="customSwitch2">Dolares</label>
                                    </div>
                                    <div class="form-group col-md-4 custom-control custom-switch">
                                        <input type="checkbox" class="custom-control-input" id="customSwitch3" />
                                        <label class="custom-control-label" for="customSwitch3">Sinpe</label>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-4 custom-control custom-switch">
                                        <input type="checkbox" class="custom-control-input" id="customSwitch4" />
                                        <label class="custom-control-label" for="customSwitch4">PayPal</label>
                                    </div>
                                    <div class="form-group col-md-4 custom-control custom-switch">
                                        <input type="checkbox" class="custom-control-input" id="customSwitch5" />
                                        <label class="custom-control-label" for="customSwitch5">Mastercard</label>
                                    </div>
                                    <div class="form-group col-md-4 custom-control custom-switch">
                                        <input type="checkbox" class="custom-control-input" id="customSwitch6" />
                                        <label class="custom-control-label" for="customSwitch6">Visa</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-check">
                                <div className="form-group col-md-3"><h5>Delivery Options</h5></div>
                                <div class="form-row">
                                    <div class="form-group col-md-4 custom-control custom-switch">
                                        <input type="checkbox" class="custom-control-input" id="customSwitch7" />
                                        <label class="custom-control-label" for="customSwitch7">Dine In</label>
                                    </div>
                                    <div class="form-group col-md-4 custom-control custom-switch">
                                        <input type="checkbox" class="custom-control-input" id="customSwitch8" />
                                        <label class="custom-control-label" for="customSwitch8">Express</label>
                                    </div>
                                    <div class="form-group col-md-4 custom-control custom-switch">
                                        <input type="checkbox" class="custom-control-input" id="customSwitch9" />
                                        <label class="custom-control-label" for="customSwitch9">Pick Up</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group col-md-3"><h5>Background Image</h5></div>
                            <div class="form-group mb-3">
                                <Form.File id="formcheck-api-custom" custom>
                                    <Form.File.Input isValid />
                                    <Form.File.Label data-browse="Browse">
                                        Select an image
                            </Form.File.Label>
                                    {/**<ReactBootstrap.Form.Control.Feedback type="valid">You did it!</ReactBootstrap.Form.Control.Feedback> */}
                                </Form.File>

                                {/**<input type="file" class="form-control-file" id="exampleFormControlFile1" /> */}
                            </div>
                            <div className="form-outline mb-4">
                                <button type="submit" class="btn btn-info btn-block mb-4">Create Host</button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default UpdateHost
