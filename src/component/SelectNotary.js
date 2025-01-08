import React from 'react'
import { Link } from 'react-router-dom'

export default function SelectNotary() {
    return (
        <div>
            <div className="kyc-container">


                <div className='container-fluid col-7 homecontan'>
                    <h1 className='mb-5'>Select Notary</h1>
                    <Link to={'/newnotary'}>
                        <div className='type-grid mt-4'>
                            <i class="fa-solid fa-file-lines"></i>
                            <div className='type-text'>
                                <h4><b>New Notary</b></h4>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/buissness-login'}>
                        <div className='type-grid mt-4'>
                            <i class="fa-solid fa-file-lines"></i>
                            <div className='type-text'>
                                <h4><b>Draft Notary</b></h4>
                            </div>
                        </div>
                    </Link>



                </div>
            </div>

            <style jsx>{`
      .kyc-container {
 max-width: 796px;
        margin: 100px auto;
    padding: 50px;
    border: 1px solid #ECECEC;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
     `}</style>


        </div>
    )
}
