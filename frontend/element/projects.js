import Portfolio from "../component/portfolio";

function Projects({projectsData}) {
    console.log("projects", projectsData)
    return (
        <>
            <section className="content-inner">
                <div className="container">
                    <div className="section-head style-1 text-center">
                        <h6 className="sub-title bgl-primary m-b20 text-primary">
                            Projects
                        </h6>
                        <h2 className="title">
                            Take A Look At Our Latest Portfolio
                        </h2>
                    </div>

                    <Portfolio  projectsData={projectsData}/>
                </div>
            </section>
        </>
    );
}

export default Projects;
