
function ContactForm() {
      
    return (
    <div className="col-lg-4 py-4 my-3 bg-warning rounded order-lg-2">
        <form method="post" id="contact-form">
            <div className=" w-sm-100 form-group row justify-content-center ">                             
                    <div className="col-sm-25 w-75 text-center flex-grow-0">
                        <h2>Free Refund</h2>
                        <h2>Estimate</h2>
                        <input placeholder="First Name" name="first-name" id="first-name"type="text" autoComplete="off" autoFocus className="form-control"/>
                    </div>
                    
                    <div className="col-sm-10 w-75 pt-1">
                        <input placeholder="Last Name" name="last-name" id="last-name" type="text" autoComplete="off" className="form-control"/>
                    </div>
                    
                    <div className="col-sm-10 w-75 pt-1">
                        <input placeholder="Email" name="email" id="email" type="email" autoComplete="off" className="form-control"/>
                    </div>
                    
                    <div className="col-sm-10 w-75 pt-1">
                        <input placeholder="Date of Birth (DD/MM/YYYY)" name="dob" id="dob" type="text"  autoComplete="off" className="form-control"/>
                    </div>
                    
                    <div className="col-sm-10 w-75 pt-1">
                        <input placeholder="Tax File No." min="9" max="9" name="tfn" id="tfn" type="number" autoComplete="off" className="form-control"/>
                    </div>
                    
                    <div className="col-sm-10 w-75 pt-1">
                        <input placeholder="Phone" name="phone" id="phone" type="tel" autoComplete="off" className="form-control"/>
                    </div>
                    
                    <div className="col-sm-10 w-75 pt-1">
                        <input placeholder="Referral Code (Optional)" name="referral" id="referral" type="digit" className="form-control"/>
                    </div>

                    <div className="col-sm-10 w-75 pt-1 align-items-between">
                        <div className="">
                            <input type="checkbox" name="consent" id="consent" className="" defaultChecked={true} required />    
                            <span className="padding-10"> I provide consent and authorize My Tax Refund Today (ABN 0000000000 and Tax Agent 000000000) to add me as a client in the Tax Agent Portal.</span>
                        </div>
                    </div>
                    <div className="col-sm-10 w-50 text-center pt-1">
                        <input className="btn btn-primary w-75 " id="button"value="Submit" type="submit" />
                    </div>    
            </div>             
        </form>
    </div>
    );
}
export default ContactForm;