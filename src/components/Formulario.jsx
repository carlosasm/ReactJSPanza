import React, { useState } from 'react'

const Formulario = () => {

    const [hostName, setHostName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const validar = (event) => {
        event.preventDefault()
        console.log('Boton pulsado')
        if(!hostName.trim()){
            console.log("Nombre Vacio")
            return
        }
        if(!phoneNumber.trim()){
            console.log("Telefono Vacio")
            return
        }
    }

    return (
        <div className="container">
            <div>
                <form onSubmit={validar}>
                    <div className="form-group col-md-2"><h4>New Host</h4></div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label class="form-label" for="hostName">Host Name</label>
                            <input type="text" id="hostName" class="form-control" placeholder="My Name" onChange={ (e) => {setHostName(e.target.value)}}/>
                        </div>
                        <div class="form-group col-md-6">
                            <label class="form-label" for="phoneNumber">Host Phone Number</label>
                            <input type="text" id="phoneNumber" class="form-control" placeholder="00000000" onChange={ (e) => {setPhoneNumber(e.target.value)}}/>
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
                    <div>
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
                    <div>
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
                        <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                    </div>
                    <div className="form-outline mb-4">
                        <button type="submit" class="btn btn-info btn-block mb-4">Create Host</button>
                    </div>
                </form>
            </div>

            {/*
            <div class="row mb-4">
                <div class="col">
                    
                    
                    <form className="form-group" action="">
                        <div>
                            <h4>New Host</h4>
                        </div>
                        <div className="form-outline mb-2">
                            <label class="form-label" for="hostName">Host Name</label>
                            <input type="text" id="hostName" class="form-control" placeholder="My Name" />
                        </div>
                        <div className="form-outline mb-2">
                            <label class="form-label" for="hostDescription">Host Description</label>
                            <textarea class="form-control" id="hostDescription" rows="4" placeholder="Host Description"></textarea>
                        </div>
                        <div className="col">
                        <input type="text" id="address" class="form-control" placeholder="Address in Lat. Long." />

                        </div>
                        <div className="col">
                        <input type="text" id="address" class="form-control" placeholder="Address in Lat. Long." />

                        </div>
                        <div className="form-outline row mb-2">
                            <label class="form-label" for="address">Host Location</label>
                            <input type="text" id="address" class="form-control" placeholder="Address in Lat. Long." />
                        </div>
                        <div className="form-outline row mb-2">
                            <label class="form-label" for="address">Host Location</label>
                            <input type="text" id="address" class="form-control" placeholder="Address in Lat. Long." />
                        </div>
                        <div className="form-outline mb-2">
                            <label class="form-label" for="phoneNumber">Host Phone Number</label>
                            <input type="text" id="phoneNumber" class="form-control" placeholder="00000000" />
                        </div>
                        <div className="form-outline mb-2">
                            <label class="form-label" for="expressRange">Host Express Range</label>
                            <input type="text" id="expressRange" class="form-control" placeholder="'Turrialba', '10K'" />
                        </div>
                        <div class="form-outline mb-3">
                            <label for="exampleFormControlFile1">Add Images</label>
                            <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
                        </div>
                        <div className="form-outline mb-4">
                            <button type="submit" class="btn btn-info btn-block mb-4">Create Host</button>
                        </div>
                    </form>
                   
                </div>
            </div>
 */}
            {/* 
                <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>

          </div>
        </nav>
      </div>
            */}

        </div>
    )
}

export default Formulario
