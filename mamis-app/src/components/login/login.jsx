import React from 'react';
import login from './login.css';
// import { Container } from './styles';

export default function Login() {
    return (

        <section>

            
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#LoginModal">
                Launch demo modal
            </button>

            
            <div className="modal fade" id="LoginModal" tabindex="-1" aria-labelledby="LoginModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="LoginModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>


        </section>

    )
}
