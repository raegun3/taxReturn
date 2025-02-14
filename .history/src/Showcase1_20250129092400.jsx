

function Showcase1() {
    return (
        <>
        <section className="bg-dark text-light p-5 text-center text-md-start">
            <div className="container">
                <div className="d-sm-flex align-items-center justify-content-between">
                    <div className="ml">
                        <h1>Introduction of <span className="text-warning"> IT personnel</span></h1>
                        <p className="lead my-4">I have taken CS50x course online from Harvard University.
                            lots of fun to learn IT skills and a taste of verious programs, 
                            such as C#, HTML, CSS, Javascript, Python, bootstrap.
                            If there is a further study that I needed, 
                            it will be Javascript frameworks, REACT, Node.js, etc.
                        </p>
                        <button className="btn btn-primary btn-lg " data-bs-toggle="modal" data-bs-target="#contact-form">Contact me</button> 
                    </div>
                    <div className="ml">
                        <form action="/register" method="post">
                            <div class="form-group row justify-content-start">
                                <label for="first-name" class="col-sm-2 col-form-label">First Name:</label>
                                <div class="col-sm-10 w-75">
                                    <input name="first-name" type="text" autocomplete="off" autofocus class="form-control"/>
                                </div>
                                <label for="last-name" class="col-sm-2 col-form-label">Last Name:</label>
                                <div class="col-sm-10 w-75">
                                    <input name="last-name" type="text" autocomplete="off" class="form-control"/>
                                </div>
                                <label for="username" class="col-sm-2 col-form-label">Username:</label>
                                <div class="col-sm-10 w-75">
                                    <input name="username" type="text" autocomplete="off" class="form-control"/>
                                </div>
                                <label for="password" class="col-sm-2 col-form-label">Password:</label>
                                <div class="col-sm-10 w-75">
                                    <input name="password" type="password" autocomplete="off" class="form-control"/>
                                </div>
                                <label for="birthday" class="col-sm-2 col-form-label">DOB:</label>
                                <div class="col-sm-10 w-75">
                                    <input name="birthday" type="date" placeholder="dd-mm-yyyy" autocomplete="off" class="form-control"/>
                                </div>
                                <label for="address" class="col-sm-2 col-form-label">Postal address:</label>
                                <div class="col-sm-10 w-75">
                                    <input name="address" type="text" autocomplete="shipping street-address" class="form-control"/>
                                </div>
                                <label for="phone" class="col-sm-2 col-form-label">Mobile:</label>
                                <div class="col-sm-10 w-75">
                                    <input name="phone" type="tel" class="form-control"/>
                                </div>
                                <label for="email" class="col-sm-2 col-form-label">Email address:</label>
                                <div class="col-sm-10 w-75">
                                    <input name="email" type="email" class="form-control"/>
                                </div>
                                <div class="justify-content-center">
                                    <button class="btn btn-primary" type="submit">Register</button>
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






