

function Showcase1() {
    return (
        <>
        <section className="bg-dark text-light p-5 text-center text-md-start">
            <div className="container">
                <div className="d-sm-flex align-items-center justify-content-between">
                    <div className="ml">
                        <h1>Introduction of <span className="text-warning"> IT personnel</span></h1>
                        <p className="lead my-4">I have taken CS50x course online from Harvard University.
                            lots of fun to learn IT skills and a taste of various programs, 
                            such as C#, HTML, CSS, Javascript, Python, bootstrap.
                            If there is a further study that I needed, 
                            it will be Javascript frameworks, REACT, Node.js, etc.
                        </p>
                        <button className="btn btn-primary btn-lg " data-bs-toggle="modal" data-bs-target="#contact-form">Contact me</button> 
                    </div>
                    <div className="ml">
                        <form action="/register" method="post">
                            <div class="form-group row justify-content-center">
                                
                                
                                <div class="col-sm-10 w-75 text-center">
                                    <h2>Free Refund</h2>
                                    <h2>Estimate</h2>
                                    <input placeholder="First Name" name="first-name" type="text" autocomplete="off" autofocus class="form-control"/>
                                </div>
                                
                                <div class="col-sm-10 w-75">
                                    <input placeholder="Last Name" name="last-name" type="text" autocomplete="off" class="form-control"/>
                                </div>

                                
                                <div class="col-sm-10 w-75">
                                    <input placeholder="Email" name="email" type="email" autocomplete="off" class="form-control"/>
                                </div>
                                
                                <div class="col-sm-10 w-75">
                                    <input placeholder="Date of Birth(DD/MM/YYYY)" name="dob" type="date" autocomplete="off" class="form-control"/>
                                </div>
                                
                                <div class="col-sm-10 w-75">
                                    <input placeholder="Tax File No." name="number" type="date" autocomplete="off" class="form-control"/>
                                </div>
                                
                                <div class="col-sm-10 w-75">
                                    <input placeholder="Phone" name="phone" type="tel" autocomplete="off" class="form-control"/>
                                </div>
                                
                                <div class="col-sm-10 w-75">
                                    <input placeholder="Referral Code (Optional)" name="referralCode" type="digit" class="form-control"/>
                                </div>

                                <div class="col-sm-10 w-75 h-10">
                                    <input type="checkbox" name="consent" class="form-control" defaultChecked={true} required></input>
                                    
                                </div>

                                <div class="col-sm-10 w-75 text-center">
                                    <button class="btn btn-primary w-50" type="submit">Submit</button>
                                </div>    
                            </div>             
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
export default Showcase1






