
import { TbTax } from "react-icons/ai";

function Showcase2() {
  return ( 
    <section class="p-1">
            <div class="container">
                <div class="row text-center  g-2" >
                    <div class="col-md">
                        <div class="card">    
                            <div class="card-body p-0">
                                <i><span><TbTax /></span></i>
                                <p class="card-text mb-3 pb-md-4">HyperText Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.</p>
                                <a href="#" class="btn w-50 btn-primary">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="card">
                            <div class="card-body p-0">
                                <i><span><TbTax /></span></i>
                                <p class="card-text mb-3">Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML </p>
                                <a href="#" class="btn w-50 btn-primary">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="card">
                            <div class="card-body p-0">
                                <i><span><TbTax /></span></i>
                                <p class="card-text mb-3 pb-md-4 pb-xl-0 pb-xxl-4">JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. </p>
                                <a href="#" class="btn w-50 btn-primary">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
}

export default Showcase2