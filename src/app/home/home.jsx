import React, {useEffect, useState} from 'react';
import Image from "./static/image/image.jpg"
import MetaDecorator from "../../components/MetaDecorator";
import ContentShare from "../../components/content-share/ContentShare";

const Home = () => {
    const [data, setData] = useState({})
    console.log(window.location)
    let userIdShare = window.location.href;
    console.log(userIdShare)
    // useEffect(async () => {
    //     setTimeout(() => {
    //         setData({
    //             description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    //             image: Image,
    //             imageAlt: "home Image",
    //             title: "home image"
    //         })
    //     }, 1000)
    // }, []);

    console.log(data)
    return (
        <div className="container">
            {/*<MetaDecorator description={data.course_description_summery} imageUrl={data.thumbnail} imageAlt={data.course_name}*/}
            {/*               title={data.course_name}/>*/}
            <MetaDecorator description="Lorem Ipsum is simply dummy text of the printing and typesetting industry" imageUrl={Image} imageAlt="home image" title="Home Page" />
            <h1 className="text-center">Lorem Ipsum</h1>
            <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." "There
                is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
            </p>
            <img className="img-fluid" style={{height: "400px!important"}} src={Image} alt=""/>

            <div className="row">
                <div className="col-md-6">
                    <h1>What is Lorem Ipsum?</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.</p>
                </div>
                <div className="col-md-6">
                    <h1>What is Lorem Ipsum?</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <h1>What is Lorem Ipsum?</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.</p>
                </div>
                <div className="col-md-6">
                    <h1>What is Lorem Ipsum?</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.</p>
                </div>
            </div>

            <ContentShare url={userIdShare}/>

        </div>
    );
}

export default Home;