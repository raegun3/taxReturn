
function Showcase1() {
   



    return (
        
            <section className=" text-dark pt-3 pb-2 text-center">
                <div className=" d-flex justify-content-center">
                    <div className="SD1">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-8">
                            <h1 className="text-light">Maximise Your <span className="text-warning">Tax Refund in 2025</span></h1>
                            <p className="text-light lead my-4">
                                Want to get the most from your tax refund in 2025? 
                                Our registered tax agents are here to help. 
                                Ask about your tax eligible offsets and expenses to minimize your tax to pay!
                            </p>
                            <div className=" container bg-light text-start rounded">
                                <ul>
                                    <li><p1>$0 upfront fee option</p1></li>
                                    <li><p1>Easy online process</p1></li>
                                    <li><p2>Expert tax agents</p2></li>
                                </ul>
                                
                                <button className="btn btn-primary btn-lg " data-bs-toggle="modal" data-bs-target="#contact-form">Contact me</button> 

                            </div>
                            
                        </div>
                        <div className="col-lg-4 pb-2 bg-warning rounded">
                            <form method="post" id="contact-form">
                                <div className=" w-sm-100 form-group row justify-content-center ">                             
                                        <div className="col-sm-25 w-75 text-center flex-grow-0">
                                            <h2>Free Refund</h2>
                                            <h2>Estimate</h2>
                                            <input placeholder="First Name" name="first-name" id="first-name"type="text" autoComplete="off" autoFocus className="form-control"/>
                                        </div>
                                        
                                        <div className="col-sm-10 w-75">
                                            <input placeholder="Last Name" name="last-name" id="last-name" type="text" autoComplete="off" className="form-control"/>
                                        </div>
                                        
                                        <div className="col-sm-10 w-75">
                                            <input placeholder="Email" name="email" id="email" type="email" autoComplete="off" className="form-control"/>
                                        </div>
                                        
                                        <div className="col-sm-10 w-75">
                                            <input placeholder="Date of Birth (DD/MM/YYYY)" name="dob" id="dob" type="date"  autoComplete="off" className="form-control"/>
                                        </div>
                                        
                                        <div className="col-sm-10 w-75">
                                            <input placeholder="Tax File No." min="9" max="9" name="tfn" id="tfn" type="number" autoComplete="off" className="form-control"/>
                                        </div>
                                        
                                        <div className="col-sm-10 w-75">
                                            <input placeholder="Phone" name="phone" id="phone" type="tel" autoComplete="off" className="form-control"/>
                                        </div>
                                        
                                        <div className="col-sm-10 w-75">
                                            <input placeholder="Referral Code (Optional)" name="referral" id="referral" type="digit" className="form-control"/>
                                        </div>

                                        <div className="col-sm-10 w-75 align-items-between">
                                            <div className="">
                                                <input type="checkbox" name="consent" id="consent" className="" defaultChecked={true} required />    
                                                <p1 className="padding-10"> I provide consent and authorize My Tax Refund Today (ABN 0000000000 and Tax Agent 000000000) to add me as a client in the Tax Agent Portal.</p1>
                                            </div>
                                        </div>
                                        <div className="col-sm-10 w-50 text-center">
                                            <input className="btn btn-primary w-75" id="button"value="Submit" type="submit" />
                                        </div>    
                                </div>             
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        
        
    );
}
export default Showcase1






